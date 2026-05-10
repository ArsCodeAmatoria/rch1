import type {Metadata} from "next";

import {RiggingEducationAppendixBBasicRiggingMath} from "@/components/rigging/rigging-education-appendix-b-basic-rigging-math";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Appendix B — Basic Rigging Math Reference & Formulas | Rigging Education";
const descriptionEn =
  "Reference appendix: sling angle and tension, load moment, force components, center of gravity, pressure, mechanical advantage, dynamic and shock loading, densities, unit conversions, wire rope lay length and removal criteria, formula limits, and field awareness.";

const toc = [
  {id: "regulatory-standards-references-appendix-b", label: "Standards references"},
  {id: "introduction-appendix-b", label: "Introduction"},
  {id: "sling-angle-and-tension", label: "Sling angle & tension"},
  {id: "sling-tension-formula", label: "T = W/(2 sin θ)"},
  {id: "sling-angle-awareness", label: "Angle awareness"},
  {id: "common-sling-angle-multipliers", label: "Angle multipliers"},
  {id: "load-moment-formula", label: "Load moment"},
  {id: "load-moment-equation", label: "M = F·d"},
  {id: "radius-awareness", label: "Radius"},
  {id: "horizontal-vertical-force-components", label: "Fx / Fy"},
  {id: "horizontal-force-formula", label: "Fx"},
  {id: "vertical-force-formula", label: "Fy"},
  {id: "center-of-gravity-formula-appendix-b", label: "COG"},
  {id: "force-equilibrium-concept", label: "Equilibrium"},
  {id: "basic-pressure-formula", label: "Pressure"},
  {id: "ground-bearing-awareness", label: "Ground bearing"},
  {id: "mechanical-advantage-concept", label: "Mechanical advantage"},
  {id: "dynamic-loading-awareness", label: "Dynamic loading"},
  {id: "shock-loading-awareness", label: "Shock loading"},
  {id: "approximate-material-density", label: "Densities"},
  {id: "unit-conversion-awareness", label: "Units"},
  {id: "common-weight-conversion-reference", label: "Weight conversions"},
  {id: "wire-rope-lay-length-awareness", label: "Lay length"},
  {id: "basic-running-rope-removal-criteria", label: "Running rope criteria"},
  {id: "rotation-resistant-rope-removal-criteria", label: "RR rope criteria"},
  {id: "formula-limitations-appendix-b", label: "Limitations"},
  {id: "applied-operational-awareness-appendix-b", label: "Field awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return mergePlaceholderImageMeta(
    "hub-rigging",
    buildPageMetadata({
      locale,
      path: "/rigging/education/appendix-b",
      title: isFr ? "Annexe B — Référence de mathématiques de montage et formules" : titleEn,
      description: isFr
        ? "Annexe : angles de élingues, moments, COG, pression, charges dynamiques, conversions. (Texte principal en anglais.)"
        : descriptionEn,
      keywords: [
        "rigging sling angle formula",
        "load moment crane",
        "center of gravity rigging",
        "sling tension multiplier",
        "wire rope broken wire criteria"
      ]
    })
  );
}

export default async function RiggingEducationAppendixBPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/appendix-b`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Appendix B — Rigging math", url: pageUrl}
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
          keywords: ["sling angle tension", "rigging moment", "ground bearing pressure", "dynamic load factor rigging"],
          about: ["Rigging", "Load calculations", "Crane rigging", "Safety"]
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
        / <span className="text-foreground">Appendix B</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Appendix B</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Appendix B — Basic rigging math reference &amp; formulas
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
        <RiggingEducationAppendixBBasicRiggingMath locale={locale} />
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
