import type {Metadata} from "next";

import {RiggingEducationAppendixEBcRegulationsStandardsComplianceQuickReference} from "@/components/rigging/rigging-education-appendix-e-bc-regulations-standards-compliance-quick-reference";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Appendix E — BC Regulations, Standards & Compliance Quick Reference | Rigging Education";
const descriptionEn =
  "Educational quick reference: WorkSafeBC OHSR Parts 14–15, employer/supervisor/worker roles, BCCSA and TSBC, ASME B30 and CSA awareness, lift planning, critical lifts, inspection and wire rope removal criteria, powerlines, signals, documentation, environment, tower cranes, public protection, and human factors in BC.";

const toc = [
  {id: "regulatory-references-appendix-e", label: "Standards references"},
  {id: "introduction-appendix-e", label: "Introduction"},
  {id: "worksafebc-ohsr-structure", label: "OHSR structure"},
  {id: "ohsr-part-14-material-handling", label: "Part 14"},
  {id: "ohsr-part-15-rigging", label: "Part 15"},
  {id: "employer-responsibilities", label: "Employers"},
  {id: "supervisor-responsibilities", label: "Supervisors"},
  {id: "worker-responsibilities", label: "Workers"},
  {id: "qualified-person-awareness", label: "Qualified persons"},
  {id: "professional-engineering-requirements", label: "Engineering"},
  {id: "bc-crane-safety-bccsa", label: "BCCSA"},
  {id: "technical-safety-bc-tsbc", label: "TSBC"},
  {id: "asme-b30-standards", label: "ASME B30"},
  {id: "csa-standards-awareness", label: "CSA"},
  {id: "manufacturer-requirements", label: "Manufacturers"},
  {id: "lift-planning-requirements", label: "Lift planning"},
  {id: "critical-lift-awareness", label: "Critical lifts"},
  {id: "inspection-requirements", label: "Inspection"},
  {id: "wire-rope-removal-criteria-awareness", label: "Wire rope criteria"},
  {id: "powerline-clearance-awareness", label: "Powerlines"},
  {id: "signal-requirements", label: "Signals"},
  {id: "documentation-awareness", label: "Documentation"},
  {id: "environmental-requirements", label: "Environment"},
  {id: "tower-crane-specific-awareness", label: "Tower cranes"},
  {id: "public-protection-requirements", label: "Public protection"},
  {id: "human-factors-compliance", label: "Human factors"},
  {id: "situational-awareness-compliance-integration", label: "Integration"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return mergePlaceholderImageMeta(
    "hub-rigging",
    buildPageMetadata({
      locale,
      path: "/rigging/education/appendix-e",
      title: isFr ? "Annexe E — Réglementation BC, normes et conformité (référence rapide)" : titleEn,
      description: isFr
        ? "Référence éducative : OHSR WorkSafeBC, BCCSA, TSBC, planification des levages. (Texte principal en anglais.)"
        : descriptionEn,
      keywords: [
        "WorkSafeBC OHSR Part 15 rigging",
        "BC crane safety BCCSA",
        "Technical Safety BC hoisting",
        "critical lift BC construction",
        "wire rope broken wire removal criteria"
      ]
    })
  );
}

export default async function RiggingEducationAppendixEPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/appendix-e`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Appendix E — BC compliance", url: pageUrl}
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={buildBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={buildTechArticleSchema({
          headline: titleEn,
          description: descriptionEn,
          url: pageUrl,
          locale,
          keywords: ["WorkSafeBC rigging", "OHSR Part 14", "BCCSA crane", "TSBC elevating devices"],
          about: ["Rigging", "Crane safety", "British Columbia", "Compliance"]
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
        / <span className="text-foreground">Appendix E</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Appendix E</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Appendix E — BC regulations, standards &amp; compliance quick reference
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
        <RiggingEducationAppendixEBcRegulationsStandardsComplianceQuickReference locale={locale} />
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
                Module 6 — Rigging math
              </Link>
              <Link href="/rigging/education/module-7" className="block font-medium text-primary hover:underline">
                Module 7 — Communication
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
              <Link href="/rigging/education/module-20" className="block font-medium text-primary hover:underline">
                Module 20 — Final integration &amp; readiness
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
                Appendix B — Basic rigging math &amp; formulas
              </Link>
              <Link href="/rigging/education/appendix-c" className="block font-medium text-primary hover:underline">
                Appendix C — Equipment identification &amp; hardware
              </Link>
              <Link href="/rigging/education/appendix-d" className="block font-medium text-primary hover:underline">
                Appendix D — Crane types &amp; characteristics
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
