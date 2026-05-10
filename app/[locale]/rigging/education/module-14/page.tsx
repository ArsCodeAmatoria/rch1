import type {Metadata} from "next";

import {RiggingEducationModule14EnvironmentalSiteHazards} from "@/components/rigging/rigging-education-module-14-environmental-site-hazards";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 14 — Environmental & Site Hazards | Rigging Education";
const descriptionEn =
  "Educational module: environmental awareness, wind and windsail effects, rain, ice, snow, temperature, lightning, visibility, ground and soil bearing, underground hazards, site congestion, overhead and powerline hazards, traffic, public exposure, decision-making, and human factors.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "environmental-awareness-lifting", label: "Environmental awareness"},
  {id: "wind-hazards", label: "Wind"},
  {id: "windsail-effect", label: "Windsail effect"},
  {id: "wind-dynamic-loading", label: "Wind & dynamic load"},
  {id: "wind-monitoring", label: "Wind monitoring"},
  {id: "wind-operational-limits", label: "Wind limits"},
  {id: "rain-moisture-hazards", label: "Rain & moisture"},
  {id: "ice-snow-hazards", label: "Ice & snow"},
  {id: "temperature-effects", label: "Temperature"},
  {id: "lightning-hazards", label: "Lightning"},
  {id: "reduced-visibility", label: "Visibility"},
  {id: "ground-conditions-site", label: "Ground conditions"},
  {id: "soil-bearing-capacity-site", label: "Soil bearing"},
  {id: "underground-hazards", label: "Underground"},
  {id: "site-congestion", label: "Site congestion"},
  {id: "overhead-hazards", label: "Overhead"},
  {id: "powerline-hazards", label: "Powerlines"},
  {id: "traffic-mobile-equipment", label: "Traffic & equipment"},
  {id: "public-exposure-hazards", label: "Public exposure"},
  {id: "environmental-decision-making", label: "Decision-making"},
  {id: "human-factors-environmental", label: "Human factors"},
  {id: "situational-awareness-environmental", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return mergePlaceholderImageMeta(
    "hub-rigging",
    buildPageMetadata({
      locale,
      path: "/rigging/education/module-14",
      title: isFr ? "Module 14 — Risques environnementaux et de chantier" : titleEn,
      description: isFr
        ? "Module pédagogique : vent, visibilité, sol, lignes électriques, circulation. (Texte principal en anglais.)"
        : descriptionEn,
      keywords: ["crane wind limits", "windsail effect rigging", "powerline crane clearance", "ground bearing crane", "site hazards lifting"]
    })
  );
}

export default async function RiggingEducationModule14Page() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-14`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 14 — Environmental & site hazards", url: pageUrl}
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
          keywords: ["wind crane operations", "minimum approach distance", "crane ground stability", "environmental lifting hazards"],
          about: ["Rigging", "Crane safety", "Environmental hazards"]
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
        / <span className="text-foreground">Module 14</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 14</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 14 — Environmental &amp; site hazards
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
        <RiggingEducationModule14EnvironmentalSiteHazards locale={locale} />
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
