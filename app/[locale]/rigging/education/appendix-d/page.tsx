import type {Metadata} from "next";

import {RiggingEducationAppendixDCraneTypesOperationalCharacteristics} from "@/components/rigging/rigging-education-appendix-d-crane-types-operational-characteristics";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Appendix D — Crane Types & Operational Characteristics | Rigging Education";
const descriptionEn =
  "Reference appendix: tower, mobile, crawler, lattice, knuckle boom, overhead, gantry, derrick, and marine cranes; stability systems; radius and load moment; dynamic behavior; wind and ground bearing; human factors; and situational awareness by crane type.";

const toc = [
  {id: "regulatory-references-appendix-d", label: "Standards references"},
  {id: "introduction-appendix-d", label: "Introduction"},
  {id: "tower-cranes", label: "Tower cranes"},
  {id: "tower-crane-operational-characteristics", label: "Tower ops"},
  {id: "hammerhead-tower-cranes", label: "Hammerhead"},
  {id: "luffing-jib-tower-cranes", label: "Luffing jib"},
  {id: "self-erecting-tower-cranes", label: "Self-erectors"},
  {id: "mobile-cranes", label: "Mobile cranes"},
  {id: "mobile-crane-operational-characteristics", label: "Mobile ops"},
  {id: "hydraulic-truck-cranes", label: "Truck cranes"},
  {id: "all-terrain-cranes-at-cranes", label: "AT cranes"},
  {id: "rough-terrain-cranes-rt-cranes", label: "RT cranes"},
  {id: "crawler-cranes", label: "Crawler cranes"},
  {id: "crawler-crane-operational-characteristics", label: "Crawler ops"},
  {id: "lattice-boom-cranes", label: "Lattice boom"},
  {id: "knuckle-boom-cranes", label: "Knuckle boom"},
  {id: "knuckle-boom-hazards", label: "Knuckle hazards"},
  {id: "overhead-cranes", label: "Overhead"},
  {id: "overhead-crane-characteristics", label: "Overhead ops"},
  {id: "gantry-cranes", label: "Gantry"},
  {id: "gantry-crane-hazards", label: "Gantry hazards"},
  {id: "derrick-cranes", label: "Derricks"},
  {id: "floating-cranes-marine-cranes", label: "Marine / floating"},
  {id: "crane-stability-systems", label: "Stability"},
  {id: "radius-capacity-relationships", label: "Radius & capacity"},
  {id: "load-moment-formula-appendix-d", label: "Load moment (M = F × d)"},
  {id: "crane-dynamic-behavior", label: "Dynamic behavior"},
  {id: "wind-sensitivity", label: "Wind"},
  {id: "ground-bearing-awareness", label: "Ground bearing"},
  {id: "human-factors-crane-operations", label: "Human factors"},
  {id: "situational-awareness-different-crane-types", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/rigging/education/appendix-d",
    title: titleEn,
    description: descriptionEn,
    keywords: [
        "tower crane vs mobile crane",
        "crane stability outriggers",
        "load moment crane radius",
        "luffing jib tower crane",
        "ASME B30.5 mobile cranes"
      ]
    });
}

export default async function RiggingEducationAppendixDPage() {
  const locale = (await getLocale()) as "en";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/appendix-d`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Appendix D — Crane types", url: pageUrl}
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
          keywords: ["tower crane operations", "mobile crane setup", "crane load moment", "wind crane lifting"],
          about: ["Cranes", "Rigging", "Construction safety", "Lift planning"]
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
        / <span className="text-foreground">Appendix D</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Appendix D</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Appendix D — Crane types &amp; operational characteristics
        </h1>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationAppendixDCraneTypesOperationalCharacteristics locale={locale} />
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
