/*
 * Markdown renderer (Part 9.1): mdast -> React, no HTML string round-trip so
 * every text node flows through one place that can render [CONFIRM] chips
 * and "-> /path/" internal links. Tables need remark-gfm (in the parser).
 * Supports the spec's blocks: paragraphs, lists, tables, blockquote callouts
 * (emergency / info / warning), inline code (CONFIRM pills), headings with a
 * serif accent word (*word* -> <em class="acc">).
 */

import type { ReactNode } from "react";
import Link from "next/link";
import ConfirmChip from "@/components/ConfirmChip";
import Callout from "@/components/Callout";
import { mdParser } from "./load";

type MdNode = {
  type: string;
  value?: string;
  children?: MdNode[];
  ordered?: boolean;
  spread?: boolean;
  depth?: number;
  url?: string;
};

const CONFIRM_PART = /\[CONFIRM(?::([^\]]*))?\]|\[(date)\]/;
const ARROW_LINK = /\s*→\s*(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)/;
const TRAILING_ARROW = /\s*→\s*(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)\s*$/;

const slugTitle = (href: string) =>
  href
    .split("/")
    .filter(Boolean)
    .pop()!
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

let keySeq = 0;
const key = () => `md-${keySeq++}`;

/** Plain text of a node subtree (for data-th labels). */
function nodeText(node: MdNode): string {
  return (
    (node.value ?? "") +
    (node.children ?? []).map(nodeText).join("")
  ).replace(/\[(?:CONFIRM(?::[^\]]*)?|date)\]/gi, "").trim();
}

/** Text -> React, splitting CONFIRM tokens and trailing "-> /path/" links. */
function renderText(value: string): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = value;
  while (rest) {
    const cm = rest.match(CONFIRM_PART);
    const am = rest.match(ARROW_LINK);
    const next = [cm, am]
      .filter(Boolean)
      .sort((a, b) => (a!.index ?? 0) - (b!.index ?? 0))[0];
    if (!next) {
      out.push(rest);
      break;
    }
    if (next.index && next.index > 0) out.push(rest.slice(0, next.index));
    if (next === cm) {
      out.push(<ConfirmChip key={key()} note={(next[1] ?? next[2])?.trim()} />);
    } else {
      const href = next[1]!;
      out.push(
        <Link key={key()} href={href} className="pg-arrow" aria-label={`Go to ${slugTitle(href)}`}>
          <span aria-hidden>→</span>
        </Link>,
      );
    }
    rest = rest.slice((next.index ?? 0) + next[0].length);
  }
  return out;
}

function renderInline(nodes: MdNode[] | undefined, inHeading = false): ReactNode[] {
  // A trailing "→ /path/" turns the whole run into one named link (the
  // card-row convention in the content file), not a bare icon link.
  const last = nodes?.[nodes.length - 1];
  const tm = last?.type === "text" ? last.value?.match(TRAILING_ARROW) : null;
  if (tm && last) {
    const trimmed: MdNode[] = [
      ...nodes!.slice(0, -1),
      { ...last, value: last.value!.slice(0, tm.index) },
    ].filter((n) => n.type !== "text" || n.value !== "");
    return [
      <Link key={key()} href={tm[1]} className="pg-rowlink">
        {renderInline(trimmed, inHeading)} <span aria-hidden>→</span>
      </Link>,
    ];
  }
  return (nodes ?? []).flatMap((n): ReactNode[] => {
    switch (n.type) {
      case "text":
        return renderText(n.value ?? "");
      case "strong":
        return [<strong key={key()}>{renderInline(n.children)}</strong>];
      case "emphasis":
        return [
          <em key={key()} className={inHeading ? "acc" : undefined}>
            {renderInline(n.children)}
          </em>,
        ];
      case "inlineCode": {
        const v = n.value ?? "";
        const cm = v.match(/^\[?CONFIRM(?::([^\]]*))?\]?$/) ?? v.match(/^\[(date)\]$/);
        if (cm) return [<ConfirmChip key={key()} note={cm[1]?.trim()} />];
        return [<code key={key()}>{v}</code>];
      }
      case "link":
        return [
          <Link key={key()} href={n.url ?? "#"}>
            {renderInline(n.children)}
          </Link>,
        ];
      case "break":
        return [<br key={key()} />];
      case "delete":
        return [<del key={key()}>{renderInline(n.children)}</del>];
      case "html":
        return []; // spec prose is plain markdown; html carries comments only
      default:
        return renderInline(n.children);
    }
  });
}

/** Text content of a node, for callout-variant sniffing. */
function textOf(n: MdNode | undefined): string {
  if (!n) return "";
  if (n.value) return n.value;
  return (n.children ?? []).map(textOf).join(" ");
}

function renderBlock(node: MdNode): ReactNode {
  switch (node.type) {
    case "paragraph": {
      // `Label: value` spec lines that survived extraction render bold-labeled.
      const first = node.children?.[0];
      const m =
        first?.type === "text"
          ? first.value?.match(/^([A-Z][A-Za-z0-9 (),.'&/-]{0,45}?):\s+/)
          : null;
      const children =
        m && first
          ? [
              { type: "strong", children: [{ type: "text", value: `${m[1]}:` }] },
              { type: "text", value: (first.value ?? "").slice(m[0].length) },
              ...(node.children ?? []).slice(1),
            ]
          : node.children;
      return <p key={key()}>{renderInline(children)}</p>;
    }
    case "heading": {
      const depth = Math.min((node.depth ?? 2) + 1, 5);
      const Tag = `h${depth}` as "h3";
      return <Tag key={key()}>{renderInline(node.children, true)}</Tag>;
    }
    case "list": {
      const Tag = node.ordered ? "ol" : "ul";
      return (
        <Tag key={key()}>
          {(node.children ?? []).map((item) => {
            const kids = item.children ?? [];
            const tight = kids.length === 1 && kids[0].type === "paragraph";
            return (
              <li key={key()}>
                {tight ? renderInline(kids[0].children) : kids.map(renderBlock)}
              </li>
            );
          })}
        </Tag>
      );
    }
    case "blockquote": {
      const txt = textOf(node);
      const variant = /straight away|emergency|urgent|108 or 112/i.test(txt)
        ? "em"
        : /reviewed|dr\./i.test(txt)
          ? "info"
          : "warn";
      return (
        <Callout key={key()} variant={variant}>
          {(node.children ?? []).map((c) =>
            c.type === "paragraph" ? renderInline(c.children) : renderBlock(c),
          )}
        </Callout>
      );
    }
    case "table": {
      const [head, ...rows] = node.children ?? [];
      const headText = (head?.children ?? []).map((c) => nodeText(c));
      // First column is a row-label column when its header cell is empty.
      const rowHeaders = (headText[0] ?? "").trim() === "";
      return (
        <div key={key()} className="pg-tscroll" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                {(head?.children ?? []).map((c) => (
                  <th key={key()} scope="col">
                    {renderInline(c.children)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={key()}>
                  {(r.children ?? []).map((c, ci) =>
                    rowHeaders && ci === 0 ? (
                      <th key={key()} scope="row" data-th={headText[0] || "Item"}>
                        {renderInline(c.children)}
                      </th>
                    ) : (
                      <td key={key()} data-th={headText[ci] || undefined}>
                        {renderInline(c.children)}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "code":
      return (
        <pre key={key()}>
          <code>{node.value}</code>
        </pre>
      );
    case "thematicBreak":
    case "html":
    case "yaml":
      return null;
    default:
      return (node.children ?? []).map(renderBlock);
  }
}

/** Render a markdown string to React nodes. */
export function Markdown({ source }: { source: string }) {
  const tree = mdParser.parse(source) as MdNode;
  return <>{(tree.children ?? []).map(renderBlock)}</>;
}

/** Render a heading string (may contain *accent*) to inline nodes. */
export function InlineText({ source }: { source: string }) {
  const tree = mdParser.parse(source) as MdNode;
  const para = tree.children?.[0];
  return <>{renderInline(para?.type === "paragraph" ? para.children : tree.children, true)}</>;
}
