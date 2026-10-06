import ConfirmChip from "./ConfirmChip";

const rows: { label: string; iui: string; ivf: string }[] = [
  { label: "What it does", iui: "Places prepared sperm in the uterus", ivf: "Fertilises eggs in a laboratory and transfers an embryo" },
  { label: "Fallopian tubes", iui: "At least one open tube needed", ivf: "Tubes do not need to be open" },
  { label: "Usual reasons", iui: "Unexplained infertility, mild male factor, ovulation problems, cervical factor", ivf: "Blocked tubes, severe male factor, endometriosis, low reserve, failed IUI" },
  { label: "Medicines", iui: "Often mild or none", ivf: "Several, with close monitoring" },
  { label: "Time", iui: "A few days in one cycle", ivf: "A few weeks per cycle" },
  { label: "Where", iui: "At the clinic", ivf: "Planned with you at EVE, with laboratory steps at associated ART centres" },
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
              {r.label === "Where" ? (
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
