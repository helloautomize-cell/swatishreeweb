#!/usr/bin/env node
/* Extract FAQ sections from the doc for expansion; apply patches from faq-patch.json. */
import { readFileSync, writeFileSync } from 'node:fs';
const DOC = 'resources/docs/new-website-content.md';
const doc = readFileSync(DOC, 'utf8').replace(/\r\n/g, '\n');
const marks = [...doc.matchAll(/^## (Post|Page) \d+ · (.+)$/gm)];

if (process.argv[2] === 'extract') {
  const urls = process.argv.slice(3);
  const out = {};
  marks.forEach((m, i) => {
    const block = doc.slice(m.index, i + 1 < marks.length ? marks[i + 1].index : doc.length);
    const url = (block.match(/^url:\s*(\S+)/m) || [])[1];
    if (!urls.length || !urls.includes(url)) return;
    const chunks = block.split(/^### (.+)$/m);
    for (let c = 1; c + 1 < chunks.length; c += 2) {
      if (!/^(quick answers|faqs?|common questions)/i.test(chunks[c].trim())) continue;
      out[url] = '### ' + chunks[c] + chunks[c + 1];
    }
  });
  writeFileSync('seo-audit/faq-batch.txt', Object.entries(out).map(([u, b]) => `===== ${u} =====\n${b}`).join('\n\n'));
  console.log('wrote', Object.keys(out).length, 'sections');
}

if (process.argv[2] === 'apply') {
  const patch = JSON.parse(readFileSync('seo-audit/faq-patch.json', 'utf8'));
  let text = doc;
  let applied = 0, missed = [];
  for (const [url, answers] of Object.entries(patch)) {
    for (const [q, newA] of Object.entries(answers)) {
      // match the numbered item: "N. **Q?**\n   <answer lines>" up to blank-line+boundary
      const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(\\*\\*${esc}\\*\\*\\s*\\n)(\\s+[\\s\\S]*?)(?=\\n\\d+\\.\\s+\\*\\*|\\n###|\\n## (Post|Page)|\\n---\\n|$)`, '');
      const m = text.match(re);
      if (!m) { missed.push(`${url} :: ${q.slice(0, 50)}`); continue; }
      const indent = (m[2].match(/^(\s+)/) || ['', '   '])[1];
      // append mode: keep existing answer, add suffix sentences on same line flow
      const existing = m[2].trimEnd();
      const indented = existing + ' ' + newA.split('\n').map((l) => l.trim()).filter(Boolean).join(' ');
      text = text.replace(re, `$1${indent}${indented.replace(new RegExp('^' + indent.trim()), indent)}`);
      applied++;
    }
  }
  writeFileSync(DOC, text);
  console.log(`applied ${applied}, missed ${missed.length}`);
  missed.forEach((x) => console.log('  MISS', x));
}
