import {Link} from "@/i18n/navigation";

export const TRAINING_SECTIONS = [
  {href: "/tower-cranes/operator-training-program", label: "Program overview"},
  {href: "/tower-cranes/operator-training-program/regulatory-standards", label: "Regulatory & standards"},
  {href: "/tower-cranes/operator-training-program/mathematics", label: "Mathematics"},
  {href: "/tower-cranes/operator-training-program/load-charts-capacity", label: "Load charts & capacity"},
  {href: "/tower-cranes/operator-training-program/mechanical-systems", label: "Mechanical systems"},
  {href: "/tower-cranes/operator-training-program/climbing-procedures", label: "Climbing (jumping)"},
  {href: "/tower-cranes/operator-training-program/inspection-maintenance", label: "Inspection & maintenance"},
  {href: "/tower-cranes/operator-training-program/urban-operations", label: "Urban operations"},
  {href: "/tower-cranes/operator-training-program/overlap-right-of-way", label: "Overlap & right of way"},
  {href: "/tower-cranes/operator-training-program/airspace-property-infrastructure", label: "Airspace & infrastructure"},
  {href: "/tower-cranes/operator-training-program/regulatory-knowledge-requirements", label: "Regulatory knowledge"},
  {href: "/tower-cranes/operator-training-program/advanced-urban-compliance", label: "Urban compliance"},
  {href: "/tower-cranes/operator-training-program/remote-operation", label: "Remote operation"},
  {href: "/tower-cranes/operator-training-program/self-erect-tower-cranes", label: "Self-erect cranes"},
  {href: "/tower-cranes/operator-training-program/hoist-systems-wire-rope", label: "Hoist & wire rope"},
  {href: "/tower-cranes/operator-training-program/test-blocks-load-testing", label: "Load testing"},
  {href: "/tower-cranes/operator-training-program/tower-crane-bases-foundations", label: "Bases & foundations"},
  {href: "/tower-cranes/operator-training-program/load-handling-swing-control", label: "Load handling & swing"},
  {href: "/tower-cranes/operator-training-program/public-safety-traffic-emergency", label: "Public safety & traffic"},
  {href: "/tower-cranes/operator-training-program/tower-crane-controls-monitoring", label: "Controls & monitoring"}
] as const;

export type TrainingSectionHref = (typeof TRAINING_SECTIONS)[number]["href"];

export function TrainingSectionNav({current}: {current: TrainingSectionHref}) {
  return (
    <nav aria-label="Operator training program sections" className="mt-12 rounded-lg bg-muted/40 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">Training program sections</h2>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {TRAINING_SECTIONS.map((item) => (
          <li key={item.href}>
            {item.href === current ? (
              <span className="font-semibold text-primary">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-foreground/90 underline-offset-4 hover:text-primary hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
