import type {Metadata} from "next";

import {RiggingEducationModule22BlockTackleReevingMechanicalAdvantage} from "@/components/rigging/rigging-education-module-22-block-tackle-reeving-mechanical-advantage";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 22 — Block & Tackle, Reeving & Mechanical Advantage Systems | Rigging Education";
const descriptionEn =
  "Educational module: mechanical advantage (ideal vs actual), sheaves and diameter, blocks and snatch blocks, reeving, single- vs multi-part line, efficiency, fleet angle, tension and stored energy, snap-back, gin poles and highlines, wire rope reeving, side loading, inspection, human factors, and situational awareness.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "mechanical-advantage", label: "Mechanical advantage"},
  {id: "ideal-mechanical-advantage-formula", label: "IMA formula"},
  {id: "actual-mechanical-advantage", label: "Actual MA"},
  {id: "sheaves", label: "Sheaves"},
  {id: "sheave-diameter-awareness", label: "Sheave diameter"},
  {id: "blocks", label: "Blocks"},
  {id: "snatch-blocks", label: "Snatch blocks"},
  {id: "snatch-block-hazards", label: "Snatch hazards"},
  {id: "reeving", label: "Reeving"},
  {id: "improper-reeving-hazards", label: "Improper reeving"},
  {id: "single-part-line", label: "Single-part"},
  {id: "multi-part-line", label: "Multi-part"},
  {id: "reeving-efficiency", label: "Efficiency"},
  {id: "directional-force-changes", label: "Force direction"},
  {id: "fleet-angle", label: "Fleet angle"},
  {id: "rope-tension-systems", label: "Tension systems"},
  {id: "stored-energy-hazards-mechanical-advantage", label: "Stored energy"},
  {id: "snap-back-zones-block-tackle", label: "Snap-back"},
  {id: "gin-poles-derrick-concepts", label: "Gin pole / derrick"},
  {id: "highline-redirect-systems", label: "Highline"},
  {id: "wire-rope-reeving-awareness", label: "Wire rope reeving"},
  {id: "side-loading-hazards-blocks", label: "Side loading"},
  {id: "inspection-requirements-mechanical-advantage", label: "Inspection"},
  {id: "human-factors-reeving-operations", label: "Human factors"},
  {id: "situational-awareness-reeving-operations", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging/education/module-22",
    title: titleEn,
    description: descriptionEn,
    keywords: [
        "snatch block rigging",
        "reeving friction crane",
        "fleet angle wire rope",
        "mechanical advantage block tackle",
        "sheave D/d ratio rope"
      ]
    });
}

export default async function RiggingEducationModule22Page() {
  const locale = (await getLocale()) as "en";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-22`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 22 — Block & tackle", url: pageUrl}
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
          keywords: ["block tackle mechanical advantage", "reeving diagram crane", "fleet angle drum spooling"],
          about: ["Rigging", "Reeving", "Mechanical advantage", "Wire rope"]
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
        / <span className="text-foreground">Module 22</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 22</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 22 — Block &amp; tackle, reeving &amp; mechanical advantage systems
        </h1>
        <p className="not-prose pt-1">
          <Link href={"/rigging/education/slides/module-22" as never} className="text-sm font-medium text-primary hover:underline">
            Slide lesson (presenter mode)
          </Link>
        </p>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationModule22BlockTackleReevingMechanicalAdvantage locale={locale} />
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
