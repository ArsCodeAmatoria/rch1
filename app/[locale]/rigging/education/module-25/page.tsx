import type {Metadata} from "next";

import {RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis} from "@/components/rigging/rigging-education-module-25-rigging-incident-case-studies-failure-analysis";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 25 — Rigging Incident Case Studies & Failure Analysis | Rigging Education";
const descriptionEn =
  "Educational module: incident analysis principles, immediate vs root cause, case studies (sling angle, shock loading, side-loaded shackle, powerline, wind, ground failure, multi-crane), human factors, prevention and near misses, situational awareness, and a sling tension formula reminder.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "incident-analysis-principles", label: "Analysis principles"},
  {id: "immediate-cause-vs-root-cause", label: "Immediate vs root cause"},
  {id: "immediate-cause-definition", label: "Immediate cause"},
  {id: "root-cause-definition", label: "Root cause"},
  {id: "case-study-sling-angle-overload", label: "Case: sling angle"},
  {id: "incident-overview-sling-angle-overload", label: "Sling angle — overview"},
  {id: "immediate-cause-sling-angle-overload", label: "Sling angle — cause"},
  {id: "contributing-factors-sling-angle-overload", label: "Sling angle — factors"},
  {id: "operational-lessons-sling-angle-overload", label: "Sling angle — lessons"},
  {id: "sling-angle-formula-reminder-case-study", label: "Sling formula"},
  {id: "case-study-shock-loading-failure", label: "Case: shock load"},
  {id: "incident-overview-shock-loading", label: "Shock — overview"},
  {id: "immediate-cause-shock-loading", label: "Shock — cause"},
  {id: "contributing-factors-shock-loading", label: "Shock — factors"},
  {id: "operational-lessons-shock-loading", label: "Shock — lessons"},
  {id: "case-study-side-loaded-shackle-failure", label: "Case: shackle"},
  {id: "incident-overview-side-loaded-shackle", label: "Shackle — overview"},
  {id: "immediate-cause-side-loaded-shackle", label: "Shackle — cause"},
  {id: "contributing-factors-side-loaded-shackle", label: "Shackle — factors"},
  {id: "operational-lessons-side-loaded-shackle", label: "Shackle — lessons"},
  {id: "case-study-powerline-contact", label: "Case: powerline"},
  {id: "incident-overview-powerline-contact", label: "Powerline — overview"},
  {id: "immediate-cause-powerline-contact", label: "Powerline — cause"},
  {id: "contributing-factors-powerline-contact", label: "Powerline — factors"},
  {id: "operational-lessons-powerline-contact", label: "Powerline — lessons"},
  {id: "case-study-wind-induced-load-instability", label: "Case: wind"},
  {id: "incident-overview-wind-induced-instability", label: "Wind — overview"},
  {id: "immediate-cause-wind-induced-instability", label: "Wind — cause"},
  {id: "contributing-factors-wind-induced-instability", label: "Wind — factors"},
  {id: "operational-lessons-wind-induced-instability", label: "Wind — lessons"},
  {id: "case-study-ground-failure-crane-instability", label: "Case: ground"},
  {id: "incident-overview-ground-failure-crane", label: "Ground — overview"},
  {id: "immediate-cause-ground-failure-crane", label: "Ground — cause"},
  {id: "contributing-factors-ground-failure-crane", label: "Ground — factors"},
  {id: "operational-lessons-ground-failure-crane", label: "Ground — lessons"},
  {id: "case-study-multiple-crane-lift-failure", label: "Case: multi-crane"},
  {id: "incident-overview-multiple-crane-lift", label: "Multi-crane — overview"},
  {id: "immediate-cause-multiple-crane-lift", label: "Multi-crane — cause"},
  {id: "contributing-factors-multiple-crane-lift", label: "Multi-crane — factors"},
  {id: "operational-lessons-multiple-crane-lift", label: "Multi-crane — lessons"},
  {id: "human-factors-in-rigging-incidents", label: "Human factors"},
  {id: "incident-prevention-through-planning", label: "Prevention"},
  {id: "learning-from-near-misses-rigging", label: "Near misses"},
  {id: "situational-awareness-incident-prevention", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return buildPageMetadata({
    locale,
    path: "/rigging/education/module-25",
    title: isFr ? "Module 25 — Études de cas et analyse des défaillances en élingage" : titleEn,
    description: isFr
        ? "Module pédagogique : causes immédiates et profondes, études de cas (angle de élingue, choc, manille, ligne, vent, sol, grues multiples). (Texte principal en anglais.)"
        : descriptionEn,
    keywords: [
        "rigging incident root cause",
        "sling angle failure case study",
        "crane shock loading rigging",
        "side load shackle failure",
        "crane powerline near miss"
      ]
    });
}

export default async function RiggingEducationModule25Page() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-25`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 25 — Incident case studies", url: pageUrl}
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
          keywords: ["lifting incident analysis", "rigging failure lessons learned", "tandem lift incident", "crane ground failure case"],
          about: ["Rigging", "Incident analysis", "Crane safety", "Failure prevention"]
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
        / <span className="text-foreground">Module 25</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 25</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 25 — Rigging incident case studies &amp; failure analysis
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis locale={locale} />
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
