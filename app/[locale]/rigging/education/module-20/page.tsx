import type {Metadata} from "next";

import {RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness} from "@/components/rigging/rigging-education-module-20-final-integration-applied-rigging-readiness";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 20 — Final Integration: Applied Rigging Knowledge & Operational Readiness | Rigging Education";
const descriptionEn =
  "Capstone module: integrated lift awareness, rigging as a force network, continuous situational awareness, combined hazards, communication, operational discipline, human factors, environment, dynamic loads, critical thinking, professionalism, continuous learning, team operations, readiness, emergency awareness, and course integration.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "integrated-lift-awareness", label: "Integrated awareness"},
  {id: "rigging-system-force-network", label: "Force network"},
  {id: "situational-awareness-continuous-process", label: "Situational awareness"},
  {id: "hazard-recognition-integration", label: "Hazard integration"},
  {id: "communication-coordination-lifting", label: "Communication"},
  {id: "operational-discipline-readiness", label: "Discipline"},
  {id: "human-factors-decision-making", label: "Human factors"},
  {id: "environmental-integration-operations", label: "Environment"},
  {id: "dynamic-load-awareness-integration", label: "Dynamic loads"},
  {id: "critical-thinking-rigging-operations", label: "Critical thinking"},
  {id: "professionalism-rigging-career", label: "Professionalism"},
  {id: "continuous-learning-rigging", label: "Continuous learning"},
  {id: "team-based-operations", label: "Team operations"},
  {id: "operational-readiness", label: "Readiness"},
  {id: "emergency-awareness-lifting", label: "Emergency awareness"},
  {id: "final-situational-awareness-principles", label: "SA principles"},
  {id: "final-course-integration-summary", label: "Course summary"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging/education/module-20",
    title: titleEn,
    description: descriptionEn,
    keywords: [
        "rigging operational readiness",
        "integrated lift planning",
        "crane rigging situational awareness",
        "rigging force path",
        "lifting team coordination"
      ]
    });
}

export default async function RiggingEducationModule20Page() {
  const locale = (await getLocale()) as "en";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-20`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 20 — Final integration", url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: titleEn,
          description: descriptionEn,
          url: pageUrl,
          locale,
          keywords: ["critical lift integration", "rigging hazard interaction", "lift director coordination", "operational discipline crane"],
          about: ["Rigging", "Crane operations", "Safety integration", "Lifting"]
        })}
      />
      <JsonLd data={buildWebPageSchema({name: titleEn, description: descriptionEn, url: pageUrl, locale, breadcrumb})} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/rigging" className="hover:text-primary">
          Rigging
        </Link>{" "}
        /{" "}
        <Link href="/rigging/education" className="hover:text-primary">
          Education
        </Link>{" "}
        / <span className="text-foreground">Module 20</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 20</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 20 — Final integration: applied rigging knowledge &amp; operational readiness
        </h1>
        <p className="not-prose pt-1">
          <Link href={"/rigging/education/slides/module-20" as never} className="text-sm font-medium text-primary hover:underline">
            Slide lesson (presenter mode)
          </Link>
        </p>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness locale={locale} />
        <aside className="not-prose mt-10 lg:sticky lg:top-24 lg:mt-0 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4 text-sm">
            <h2 className="font-semibold uppercase tracking-wide text-muted-foreground">On this page</h2>
            <ul className="mt-3 max-h-[min(70vh,32rem)] space-y-2 overflow-y-auto pr-1">
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="text-foreground/85 hover:text-primary">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 border-t border-border pt-3">
              <Link href="/rigging/education" className="block font-medium text-primary hover:underline">
                Education overview
              </Link>
              <Link href="/rigging/education/module-1" className="block font-medium text-primary hover:underline">
                Module 1
              </Link>
              <Link href="/rigging/education/module-2" className="block font-medium text-primary hover:underline">
                Module 2
              </Link>
              <Link href="/rigging/education/module-3" className="block font-medium text-primary hover:underline">
                Module 3
              </Link>
              <Link href="/rigging/education/module-4" className="block font-medium text-primary hover:underline">
                Module 4
              </Link>
              <Link href="/rigging/education/module-5" className="block font-medium text-primary hover:underline">
                Module 5
              </Link>
              <Link href="/rigging/education/module-6" className="block font-medium text-primary hover:underline">
                Module 6
              </Link>
              <Link href="/rigging/education/module-7" className="block font-medium text-primary hover:underline">
                Module 7
              </Link>
              <Link href="/rigging/education/module-8" className="block font-medium text-primary hover:underline">
                Module 8
              </Link>
              <Link href="/rigging/education/module-9" className="block font-medium text-primary hover:underline">
                Module 9
              </Link>
              <Link href="/rigging/education/module-10" className="block font-medium text-primary hover:underline">
                Module 10
              </Link>
              <Link href="/rigging/education/module-11" className="block font-medium text-primary hover:underline">
                Module 11 — Tandem lifts
              </Link>
              <Link href="/rigging/education/module-12" className="block font-medium text-primary hover:underline">
                Module 12 — Specialty lifting devices
              </Link>
              <Link href="/rigging/education/module-13" className="block font-medium text-primary hover:underline">
                Module 13 — Crane physics for riggers
              </Link>
              <Link href="/rigging/education/module-14" className="block font-medium text-primary hover:underline">
                Module 14 — Environmental &amp; site hazards
              </Link>
              <Link href="/rigging/education/module-15" className="block font-medium text-primary hover:underline">
                Module 15 — Lift planning &amp; critical lifts
              </Link>
              <Link href="/rigging/education/module-16" className="block font-medium text-primary hover:underline">
                Module 16 — Practical rigging &amp; field operations
              </Link>
              <Link href="/rigging/education/module-17" className="block font-medium text-primary hover:underline">
                Module 17 — Safety culture &amp; human factors
              </Link>
              <Link href="/rigging/education/module-18" className="block font-medium text-primary hover:underline">
                Module 18 — Reference tables &amp; field guidelines
              </Link>
              <Link href="/rigging/education/module-19" className="block font-medium text-primary hover:underline">
                Module 19 — Crane &amp; rigging glossary
              </Link>
              <Link href="/rigging/education/module-21" className="block font-medium text-primary hover:underline">
                Module 21 — Knots, hitches &amp; rope applications
              </Link>
              <Link href="/rigging/education/module-22" className="block font-medium text-primary hover:underline">
                Module 22 — Block &amp; tackle &amp; mechanical advantage
              </Link>
              <Link href="/rigging/education/module-23" className="block font-medium text-primary hover:underline">
                Module 23 — Heavy lift engineering &amp; advanced rigging
              </Link>
              <Link href="/rigging/education/module-24" className="block font-medium text-primary hover:underline">
                Module 24 — Tower crane rigging operations
              </Link>
              <Link href="/rigging/education/module-25" className="block font-medium text-primary hover:underline">
                Module 25 — Incident case studies &amp; failure analysis
              </Link>
              <Link href="/rigging/education/appendix-a" className="block font-medium text-primary hover:underline">
                Appendix A — Standard hand signals
              </Link>
              <Link href="/rigging/education/appendix-b" className="block font-medium text-primary hover:underline">
                Appendix B — Basic rigging math
              </Link>
              <Link href="/rigging/education/appendix-c" className="block font-medium text-primary hover:underline">
                Appendix C — Equipment identification &amp; hardware
              </Link>
              <Link href="/rigging/education/appendix-d" className="block font-medium text-primary hover:underline">
                Appendix D — Crane types &amp; characteristics
              </Link>
              <Link href="/rigging/education/appendix-e" className="block font-medium text-primary hover:underline">
                Appendix E — BC regulations &amp; compliance
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
