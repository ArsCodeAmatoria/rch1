import {Link} from "@/i18n/navigation";

export function Section8SummaryPrinciples() {
  return (
    <>
      <h2 id="section-8-summary">Summary – Right of Way &amp; Communication Principles</h2>
      <p>
        <strong>Overlapping crane operations</strong> require clearly understood priority principles. Industry standards—shaped by decades of
        incident investigation—have created widely accepted norms beyond bare regulatory text. Continue to{" "}
        <Link href="/tower-cranes/operator-training-program/load-handling-swing-control" className="font-medium text-primary no-underline hover:underline">
          Section 17 – Load handling &amp; swing
        </Link>
        ,{" "}
        <Link href="/tower-cranes/operator-training-program/tower-crane-controls-monitoring" className="text-primary no-underline hover:underline">
          Section 19 – Controls &amp; monitoring
        </Link>
        , and signal/rigging context in{" "}
        <Link href="/rigging" className="text-primary no-underline hover:underline">
          rigging fundamentals
        </Link>
        .
      </p>
      <ul>
        <li>
          <strong>Lowest crane has right of way — unless engineered otherwise.</strong> In multi-crane environments, the crane with the lower
          operating elevation typically maintains priority because it has less vertical escape margin. Engineered anti-collision systems or
          site-specific lift plans may override this default.
        </li>
        <li>
          <strong>Suspended load has hazard priority.</strong> A moving suspended load presents dynamic risk. Other equipment must yield when
          load stability could be compromised.
        </li>
        <li>
          <strong>Only one designated signaler per lift.</strong> Conflicting instructions increase risk. Singular command structure reduces
          ambiguity.
        </li>
        <li>
          <strong>Stop command from anyone must be obeyed.</strong> International crane standards universally recognize the emergency stop
          signal as absolute. No hierarchy overrides a safety stop.
        </li>
        <li>
          <strong>If unsure — stop.</strong> Professional discipline prioritizes pause over assumption.
        </li>
        <li>
          <strong>If signal lost — stop.</strong> Loss of communication removes operational control integrity.
        </li>
        <li>
          <strong>If overlap unclear — stop.</strong> When interference boundaries are uncertain, operations must pause until clarified.
        </li>
      </ul>
      <p>
        In dense urban construction—particularly within British Columbia&apos;s rapidly vertical municipalities—professional crane operation is
        as much about coordination discipline as mechanical skill. The modern tower crane operator is not merely moving loads; he or she is
        operating within a controlled airspace system that demands documentation, communication hierarchy, and procedural rigor.
      </p>
    </>
  );
}
