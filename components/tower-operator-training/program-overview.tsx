import {Link} from "@/i18n/navigation";

export function ProgramOverviewSections() {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground">
      <h1 className="text-balance font-black tracking-tight">Tower Crane Operator Training Program</h1>
      <p className="lead text-muted-foreground">
        British Columbia regulatory framework, CSA, ASME, Red Seal knowledge preparation, and advanced mechanical systems.
      </p>

      <h2>Governing and Referenced Authorities</h2>
      <p>
        This training program is structured using the statutory, regulatory, and industry frameworks that govern tower crane operations
        in British Columbia and across North America. The material presented reflects the technical standards, regulatory expectations,
        and industry best practices recognized by the following organizations:
      </p>
      <ul>
        <li>WorkSafeBC</li>
        <li>BC Crane Safety</li>
        <li>SkilledTradesBC</li>
        <li>Red Seal Program</li>
        <li>CSA Group</li>
        <li>American Society of Mechanical Engineers</li>
        <li>Fulford Certification</li>
      </ul>
      <p>
        These organizations contribute to the regulatory standards, safety frameworks, and engineering practices that influence crane
        operations, inspection, training, and certification throughout the construction industry.
      </p>

      <h2>Program Objective</h2>
      <p>
        The objective of this program is to develop competent, mechanically literate, and safety-focused tower crane operators who
        understand the technical and regulatory environment surrounding crane operations in British Columbia and across North America.
      </p>
      <p>This program emphasizes:</p>
      <ul>
        <li>regulatory awareness and compliance</li>
        <li>mechanical and structural understanding of tower cranes</li>
        <li>lifting physics and operational mathematics</li>
        <li>safe load handling and rigging principles</li>
        <li>documentation and operational procedures</li>
        <li>professional responsibility and site coordination</li>
      </ul>
      <p>
        While this program is not itself a certification program, it is designed to support the knowledge and technical understanding
        expected of tower crane operators working toward industry qualifications and professional development.
      </p>
      <p>
        To further support learning and exam preparation, operators can practice crane-related knowledge using the online study tools in{" "}
        <Link href="/redtc" className="text-primary no-underline hover:underline">
          REDTC
        </Link>
        , which provides practice questions and study aids for reviewing topics commonly encountered in tower crane training and trade
        examinations.
      </p>
      <p>
        Together, classroom instruction, field experience, and continued study help develop skilled crane professionals capable of
        performing safe and effective lifting operations on complex construction projects.
      </p>
    </div>
  );
}
