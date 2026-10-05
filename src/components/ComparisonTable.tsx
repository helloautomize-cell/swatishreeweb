import ConfirmChip from "./ConfirmChip";

const rows: { label: string; iui: string; ivf: string }[] = [
  {
    label: "In one line",
    iui: "A gentler first step",
    ivf: "Planned around your profile",
  },
  {
    label: "What it involves",
    iui: "Prepared sperm is placed in the uterus around ovulation",
    ivf: "Eggs are fertilised in a laboratory and an embryo is transferred",
  },
  {
    label: "Where it happens",
    iui: "At EVE",
    ivf: "Planned with you at EVE, with laboratory procedures at associated ART centres",
  },
];

/** Comparison table: a real table on desktop, stacked key-value on mobile. */
export default function ComparisonTable() {
  return (
    <table className="cmp">
      <thead>
        <tr>
          <th scope="col">IUI or IVF</th>
          <th scope="col">IUI</th>
          <th scope="col">IVF</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <td data-th="">{r.label}</td>
            <td data-th="IUI">{r.iui}</td>
            <td data-th="IVF">
              {r.ivf}
              {r.label === "Where it happens" ? (
                <>
                  {" "}
                  <ConfirmChip note="ART centre wording" />
                </>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
