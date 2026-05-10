import type {Metadata} from "next";

import {RiggingEducationModule19GlossaryCraneRiggingTerms} from "@/components/rigging/rigging-education-module-19-glossary-crane-rigging-terms";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 19 — Glossary of Crane & Rigging Terms | Rigging Education";
const descriptionEn =
  "Educational glossary: abrasion, shackles, birdcaging, blind lifts, boom and deflection, center of gravity, hitches, dynamic and shock loading, exclusion zones, load moment, reeving, rotation-resistant rope, tandem lifts, WLL/SWL, and related crane and rigging terminology.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "glossary-terms", label: "All terms"},
  {id: "abrasion", label: "Abrasion"},
  {id: "anchor-shackle", label: "Anchor shackle"},
  {id: "birdcaging", label: "Birdcaging"},
  {id: "blind-lift", label: "Blind lift"},
  {id: "boom", label: "Boom"},
  {id: "boom-deflection", label: "Boom deflection"},
  {id: "center-of-gravity", label: "Center of gravity"},
  {id: "chainfall", label: "Chainfall"},
  {id: "choker-hitch", label: "Choker hitch"},
  {id: "competent-person", label: "Competent person"},
  {id: "critical-lift", label: "Critical lift"},
  {id: "dynamic-load", label: "Dynamic load"},
  {id: "equalizing-beam", label: "Equalizing beam"},
  {id: "exclusion-zone", label: "Exclusion zone"},
  {id: "force-vector", label: "Force vector"},
  {id: "ground-bearing-pressure", label: "Ground bearing pressure"},
  {id: "hitch", label: "Hitch"},
  {id: "hoist-rope", label: "Hoist rope"},
  {id: "hook-block", label: "Hook block"},
  {id: "horizontal-force", label: "Horizontal force"},
  {id: "kink", label: "Kink"},
  {id: "lay-length", label: "Lay length"},
  {id: "lift-director", label: "Lift director"},
  {id: "lift-plan", label: "Lift plan"},
  {id: "lifting-beam", label: "Lifting beam"},
  {id: "load-moment", label: "Load moment"},
  {id: "load-moment-formula", label: "Load moment M=F×d"},
  {id: "load-path", label: "Load path"},
  {id: "mechanical-advantage", label: "Mechanical advantage"},
  {id: "multi-leg-sling", label: "Multi-leg sling"},
  {id: "non-rotational-rope", label: "Non-rotational rope"},
  {id: "pendant-line", label: "Pendant line"},
  {id: "pendulum-effect", label: "Pendulum effect"},
  {id: "pick-point", label: "Pick point"},
  {id: "radius", label: "Radius"},
  {id: "reeving", label: "Reeving"},
  {id: "rigging-hardware", label: "Rigging hardware"},
  {id: "rotation-resistant-rope", label: "Rotation-resistant rope"},
  {id: "running-rope", label: "Running rope"},
  {id: "shock-loading", label: "Shock loading"},
  {id: "side-loading", label: "Side loading"},
  {id: "sling-angle", label: "Sling angle"},
  {id: "sling-angle-formula", label: "Sling angle formula"},
  {id: "snap-back-zone", label: "Snap-back zone"},
  {id: "spreader-bar", label: "Spreader bar"},
  {id: "static-load", label: "Static load"},
  {id: "stored-energy", label: "Stored energy"},
  {id: "tagline", label: "Tagline"},
  {id: "tandem-lift", label: "Tandem lift"},
  {id: "test-lift", label: "Test lift"},
  {id: "throat-opening", label: "Throat opening"},
  {id: "torsion", label: "Torsion"},
  {id: "vertical-hitch", label: "Vertical hitch"},
  {id: "working-load-limit-wll", label: "WLL / SWL"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return buildPageMetadata({
    locale,
    path: "/rigging/education/module-19",
    title: isFr ? "Module 19 — Glossaire des termes de grues et de montage" : titleEn,
    description: isFr
        ? "Glossaire pédagogique : WLL, élingues, levage critique, moment de charge. (Texte principal en anglais.)"
        : descriptionEn,
    keywords: ["rigging glossary", "WLL SWL meaning", "birdcaging wire rope", "critical lift definition", "crane rigging terms"]
    });
}

export default async function RiggingEducationModule19Page() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-19`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 19 — Glossary", url: pageUrl}
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
          keywords: ["competent person OHS", "load moment crane", "choker hitch capacity", "rotation resistant rope"],
          about: ["Rigging", "Crane terminology", "Glossary", "Lifting"]
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
        / <span className="text-foreground">Module 19</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 19</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 19 — Glossary of crane &amp; rigging terms
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationModule19GlossaryCraneRiggingTerms locale={locale} />
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
