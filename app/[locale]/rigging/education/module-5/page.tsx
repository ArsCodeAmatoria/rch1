import type {Metadata} from "next";

import {RiggingEducationModule5BasicPractices} from "@/components/rigging/rigging-education-module-5-basic-practices";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";
import {RiggingSlideLessonButton} from "@/components/rigging/education/rigging-slide-lesson-button";

const titleEn = "Module 5 — Basic Rigging Practices | Rigging Education";
const descriptionEn =
  "Educational module: pre-lift planning, WLL, vertical/basket/choker and multi-leg hitches, sling angle effects and tension formula, center of gravity, edge and sling protection, taglines, load path, landing and unhooking, communication, dynamic and shock loading, environment, situational awareness.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "system-fundamentals", label: "System fundamentals"},
  {id: "pre-lift", label: "Pre-lift"},
  {id: "wll", label: "WLL"},
  {id: "hitch-configurations", label: "Hitches (overview)"},
  {id: "vertical-hitch", label: "Vertical hitch"},
  {id: "basket-hitch", label: "Basket hitch"},
  {id: "choker-hitch", label: "Choker hitch"},
  {id: "multi-leg", label: "Multi-leg"},
  {id: "sling-angle-effects", label: "Sling angle"},
  {id: "sling-angle-formula", label: "Tension formula"},
  {id: "center-of-gravity", label: "Center of gravity"},
  {id: "cog-awareness", label: "COG awareness"},
  {id: "load-balance", label: "Load balance"},
  {id: "edge-protection", label: "Edge protection"},
  {id: "sling-protection", label: "Sling protection"},
  {id: "taglines", label: "Taglines"},
  {id: "load-path-planning", label: "Load path"},
  {id: "control-zones", label: "Control zones"},
  {id: "landing-loads", label: "Landing"},
  {id: "unhooking", label: "Unhooking"},
  {id: "communication-lifts", label: "Communication"},
  {id: "dynamic-loading-practices", label: "Dynamic loading"},
  {id: "shock-loading", label: "Shock loading"},
  {id: "side-loading-rigging", label: "Side loading"},
  {id: "environmental-rigging", label: "Environment"},
  {id: "situational-awareness", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging/education/module-5",
    title: titleEn,
    description: descriptionEn,
    keywords: [
        "basket hitch choker",
        "sling angle tension",
        "rigging WLL",
        "tagline rigging",
        "ASME B30.9",
        "pre-lift planning"
      ]
    });
}

export default async function RiggingEducationModule5Page() {
  const locale = (await getLocale()) as "en";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-5`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 5 — Basic rigging", url: pageUrl}
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
          keywords: ["rigging hitch", "sling tension", "center of gravity", "tagline", "B30.26"],
          about: ["Rigging", "Slings", "Lifting safety"]
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
        / <span className="text-foreground">Module 5</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 5</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 5 — Basic rigging practices
        </h1>
        <RiggingSlideLessonButton moduleSlug="module-5" />
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <div className="math-training-prose min-w-0">
          <RiggingEducationModule5BasicPractices locale={locale} />
        </div>
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
              <Link href="/rigging/education/module-6" className="block font-medium text-primary hover:underline">
                Module 6 — Rigging math
              </Link>
              <Link href="/rigging/education/module-7" className="block font-medium text-primary hover:underline">
                Module 7 — Communication
              </Link>
              <Link href="/rigging/education/module-8" className="block font-medium text-primary hover:underline">
                Module 8 — Advanced sling geometry
              </Link>
              <Link href="/rigging/education/module-9" className="block font-medium text-primary hover:underline">
                Module 9 — Advanced load control
              </Link>
              <Link href="/rigging/education/module-10" className="block font-medium text-primary hover:underline">
                Module 10 — Chainfalls &amp; lever hoists
              </Link>
              <Link href="/rigging/education/module-11" className="block font-medium text-primary hover:underline">
                Module 11 — Tandem lifts
              </Link>
              <Link href="/rigging/education/module-12" className="block font-medium text-primary hover:underline">
                Module 12 — Specialty BTH
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
