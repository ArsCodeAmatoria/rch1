import type {Metadata} from "next";

import {RiggingEducationModule18ReferenceTablesFieldGuidelines} from "@/components/rigging/rigging-education-module-18-reference-tables-field-guidelines";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Module 18 — Rigging Reference Tables, Field Guidelines & Operational Awareness | Rigging Education";
const descriptionEn =
  "Educational module: sling angle multipliers and tension relationships, weight estimation tables, wire rope 3–6 rule and rotation-resistant criteria, sling and hardware inspection awareness, dynamic loading and load control hazards, environment, powerlines, exclusion zones, taglines, blind and multi-crane lifts, ground conditions, lift planning, human factors, and situational awareness.";

const toc = [
  {id: "regulatory-references", label: "Standards references"},
  {id: "introduction", label: "Introduction"},
  {id: "sling-angle-awareness-table", label: "Sling angle"},
  {id: "common-sling-angle-multipliers", label: "Angle multipliers"},
  {id: "sling-angle-formula-reference", label: "Angle formula"},
  {id: "basic-weight-estimation-awareness", label: "Weight estimation"},
  {id: "approximate-material-weights", label: "Material weights"},
  {id: "basic-wire-rope-inspection-awareness", label: "Wire rope inspection"},
  {id: "running-rope-removal-criteria", label: "Running rope 3–6"},
  {id: "rotation-resistant-rope-removal-criteria", label: "Rotation-resistant"},
  {id: "wire-rope-sling-awareness", label: "Wire rope slings"},
  {id: "synthetic-sling-awareness", label: "Synthetic slings"},
  {id: "chain-sling-awareness", label: "Chain slings"},
  {id: "hook-inspection-awareness", label: "Hooks"},
  {id: "shackle-awareness", label: "Shackles"},
  {id: "common-dynamic-loading-sources", label: "Dynamic loading"},
  {id: "common-load-control-hazards", label: "Load control"},
  {id: "common-environmental-hazards", label: "Environment"},
  {id: "powerline-awareness", label: "Powerlines"},
  {id: "exclusion-zone-awareness-reference", label: "Exclusion zones"},
  {id: "tagline-awareness-reference", label: "Taglines"},
  {id: "blind-lift-awareness-reference", label: "Blind lifts"},
  {id: "multi-crane-lift-awareness", label: "Multi-crane"},
  {id: "ground-condition-awareness", label: "Ground conditions"},
  {id: "basic-lift-planning-awareness", label: "Lift planning"},
  {id: "human-factors-awareness-reference", label: "Human factors"},
  {id: "situational-awareness-reminder", label: "Situational awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return mergePlaceholderImageMeta(
    "hub-rigging",
    buildPageMetadata({
      locale,
      path: "/rigging/education/module-18",
      title: isFr
        ? "Module 18 — Tableaux de référence pour le montage, repères de terrain et vigilance opérationnelle"
        : titleEn,
      description: isFr
        ? "Module pédagogique : angles d'élingues, masses, câbles, environnement, lignes électriques. (Texte principal en anglais.)"
        : descriptionEn,
      keywords: [
        "sling angle multiplier table",
        "wire rope 3 6 rule",
        "rigging field guidelines",
        "approximate material weight lifting",
        "situational awareness rigging"
      ]
    })
  );
}

export default async function RiggingEducationModule18Page() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/module-18`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Module 18 — Reference tables & field guidelines", url: pageUrl}
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
          keywords: ["sling tension angle", "exclusion zone crane", "tagline safety", "tandem lift planning"],
          about: ["Rigging", "Reference tables", "Field operations", "Crane lifting"]
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
        / <span className="text-foreground">Module 18</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Module 18</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Module 18 — Rigging reference tables, field guidelines &amp; operational awareness
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
        <RiggingEducationModule18ReferenceTablesFieldGuidelines locale={locale} />
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
