import type {Metadata} from "next";

import {CraneRiggingEducationOverview} from "@/components/rigging/crane-rigging-education-overview";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Rigging: Crane Rigging & Advanced Rigging — Technical Education";
const descriptionEn =
  "Educational overview of crane rigging and advanced rigging: scope, purpose, industry context, standards awareness, areas of study, and how this material supports apprenticeships, trade education, and field reference.";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging/education",
    title: titleEn,
    description: descriptionEn,
    keywords: [
        "crane rigging",
        "advanced rigging",
        "rigging education",
        "lifting operations",
        "construction safety",
        "sling forces",
        "lift planning"
      ]
    });
}

export default async function RiggingEducationPage() {
  const locale = (await getLocale()) as "en";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Crane rigging & advanced rigging (education)", url: pageUrl}
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
          keywords: ["crane rigging", "advanced rigging", "lift planning", "WorkSafeBC", "CSA", "ASME B30"],
          about: ["Crane rigging", "Hoisting", "Sling systems", "Lift planning"]
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
        / <span className="text-foreground">Education overview</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Educational overview</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Rigging: Crane rigging &amp; advanced rigging
        </h1>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <CraneRiggingEducationOverview locale={locale} />
        <aside className="not-prose mt-10 lg:sticky lg:top-24 lg:mt-0 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4 text-sm">
            <h2 className="font-semibold uppercase tracking-wide text-muted-foreground">On this page</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#introduction" className="text-foreground/85 hover:text-primary">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#purpose" className="text-foreground/85 hover:text-primary">
                  Purpose
                </a>
              </li>
              <li>
                <a href="#industry-context" className="text-foreground/85 hover:text-primary">
                  Industry context
                </a>
              </li>
              <li>
                <a href="#standards" className="text-foreground/85 hover:text-primary">
                  Standards &amp; references
                </a>
              </li>
              <li>
                <a href="#areas-of-study" className="text-foreground/85 hover:text-primary">
                  Areas of study
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-foreground/85 hover:text-primary">
                  Educational philosophy
                </a>
              </li>
              <li className="border-t border-border pt-3">
                <Link href="/rigging/education/module-1" className="font-medium text-primary hover:underline">
                  Module 1 — Regulations &amp; standards
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-2" className="font-medium text-primary hover:underline">
                  Module 2 — Rigging equipment
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-3" className="font-medium text-primary hover:underline">
                  Module 3 — Inspection &amp; removal
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-4" className="font-medium text-primary hover:underline">
                  Module 4 — Crane awareness
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-5" className="font-medium text-primary hover:underline">
                  Module 5 — Basic rigging
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-6" className="font-medium text-primary hover:underline">
                  Module 6 — Rigging math
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-7" className="font-medium text-primary hover:underline">
                  Module 7 — Communication
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-8" className="font-medium text-primary hover:underline">
                  Module 8 — Advanced sling geometry
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-9" className="font-medium text-primary hover:underline">
                  Module 9 — Advanced load control
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-10" className="font-medium text-primary hover:underline">
                  Module 10 — Chainfalls &amp; lever hoists
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-11" className="font-medium text-primary hover:underline">
                  Module 11 — Tandem &amp; multi-crane lifts
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-12" className="font-medium text-primary hover:underline">
                  Module 12 — Specialty BTH devices
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-13" className="font-medium text-primary hover:underline">
                  Module 13 — Crane physics for riggers
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-14" className="font-medium text-primary hover:underline">
                  Module 14 — Environmental &amp; site hazards
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-15" className="font-medium text-primary hover:underline">
                  Module 15 — Lift planning &amp; critical lifts
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-16" className="font-medium text-primary hover:underline">
                  Module 16 — Practical rigging &amp; field operations
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-17" className="font-medium text-primary hover:underline">
                  Module 17 — Safety culture, human factors &amp; decision-making
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-18" className="font-medium text-primary hover:underline">
                  Module 18 — Reference tables, field guidelines &amp; awareness
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-19" className="font-medium text-primary hover:underline">
                  Module 19 — Crane &amp; rigging glossary
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-20" className="font-medium text-primary hover:underline">
                  Module 20 — Final integration &amp; operational readiness
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-21" className="font-medium text-primary hover:underline">
                  Module 21 — Knots, hitches &amp; rope
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-22" className="font-medium text-primary hover:underline">
                  Module 22 — Block &amp; tackle &amp; MA
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-23" className="font-medium text-primary hover:underline">
                  Module 23 — Heavy lift engineering
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-24" className="font-medium text-primary hover:underline">
                  Module 24 — Tower crane rigging
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/module-25" className="font-medium text-primary hover:underline">
                  Module 25 — Incident case studies
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/appendix-a" className="font-medium text-primary hover:underline">
                  Appendix A — Standard hand signals
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/appendix-b" className="font-medium text-primary hover:underline">
                  Appendix B — Basic rigging math
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/appendix-c" className="font-medium text-primary hover:underline">
                  Appendix C — Equipment identification &amp; hardware
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/appendix-d" className="font-medium text-primary hover:underline">
                  Appendix D — Crane types &amp; characteristics
                </Link>
              </li>
              <li>
                <Link href="/rigging/education/appendix-e" className="font-medium text-primary hover:underline">
                  Appendix E — BC regulations &amp; compliance
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
