import type {Metadata} from "next";

import {RiggingEducationAppendixCRiggingEquipmentIdentificationHardwareReference} from "@/components/rigging/rigging-education-appendix-c-rigging-equipment-identification-hardware-reference";
import {getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Badge} from "@/components/ui/badge";
import {buildPageMetadata, SITE_URL} from "@/lib/seo";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildBreadcrumbSchema, buildTechArticleSchema, buildWebPageSchema} from "@/lib/schema";

const titleEn = "Appendix C — Rigging Equipment Identification & Hardware Reference | Rigging Education";
const descriptionEn =
  "Reference appendix: wire rope construction and lay, rotation-resistant rope, chain and synthetic sling identification and grades, hooks, shackles, master links, eye bolts, turnbuckles, hoists, below-the-hook devices, counterfeit awareness, inspection tags, compatibility, and field selection awareness.";

const toc = [
  {id: "regulatory-references-appendix-c", label: "Standards references"},
  {id: "introduction-appendix-c", label: "Introduction"},
  {id: "wire-rope-construction-identification", label: "Wire rope ID"},
  {id: "common-wire-rope-components", label: "Rope components"},
  {id: "wire-rope-lay-direction", label: "Lay direction"},
  {id: "rotation-resistant-rope-identification", label: "RR rope"},
  {id: "chain-sling-identification", label: "Chain slings"},
  {id: "common-chain-grades", label: "Chain grades"},
  {id: "chain-sling-components", label: "Chain components"},
  {id: "synthetic-sling-identification", label: "Synthetic slings"},
  {id: "synthetic-sling-types", label: "Sling types"},
  {id: "synthetic-sling-color-awareness", label: "Color coding"},
  {id: "hook-identification", label: "Hooks"},
  {id: "hook-types", label: "Hook types"},
  {id: "hook-safety-latches", label: "Safety latches"},
  {id: "shackle-identification", label: "Shackles"},
  {id: "common-shackle-types", label: "Shackle types"},
  {id: "shackle-pin-types", label: "Shackle pins"},
  {id: "master-link-identification", label: "Master links"},
  {id: "eye-bolt-identification", label: "Eye bolts"},
  {id: "turnbuckle-identification", label: "Turnbuckles"},
  {id: "turnbuckle-hazards", label: "Turnbuckle hazards"},
  {id: "hoist-identification", label: "Hoists"},
  {id: "below-the-hook-device-identification", label: "BTH devices"},
  {id: "counterfeit-hardware-awareness", label: "Counterfeit hardware"},
  {id: "inspection-tag-awareness", label: "Inspection tags"},
  {id: "equipment-compatibility-awareness", label: "Compatibility"},
  {id: "situational-awareness-equipment-selection", label: "Selection awareness"}
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === "fr";
  return buildPageMetadata({
    locale,
    path: "/rigging/education/appendix-c",
    title: isFr ? "Annexe C — Identification du matériel de montage et référence du quincaillerie" : titleEn,
    description: isFr
        ? "Annexe : câbles, élingues, crochets, manilles, identification et marquage. (Texte principal en anglais.)"
        : descriptionEn,
    keywords: [
        "rigging hardware identification",
        "chain sling grade markings",
        "wire rope IWRC identification",
        "shackle capacity markings",
        "synthetic sling tag requirements"
      ]
    });
}

export default async function RiggingEducationAppendixCPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const pageUrl = `${SITE_URL}/${locale}/rigging/education/appendix-c`;
  const educationUrl = `${SITE_URL}/${locale}/rigging/education`;
  const riggingHubUrl = `${SITE_URL}/${locale}/rigging`;
  const breadcrumb = [
    {name: "Home", url: `${SITE_URL}/${locale}`},
    {name: "Rigging", url: riggingHubUrl},
    {name: "Rigging education", url: educationUrl},
    {name: "Appendix C — Equipment ID", url: pageUrl}
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
          keywords: ["rigging identification", "sling tags", "WLL markings", "ASME B30.26 hardware"],
          about: ["Rigging", "Lifting hardware", "Inspection", "Safety"]
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
        / <span className="text-foreground">Appendix C</span>
      </nav>

      <header className="space-y-3 rounded-xl border border-border bg-card p-6">
        <Badge className="w-fit">Rigging education · Appendix C</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2rem] sm:leading-tight">
          Appendix C — Rigging equipment identification &amp; hardware reference
        </h1>
        {locale === "fr" ? (
          <p className="text-sm text-muted-foreground">
            Le corps de cette page est en anglais; une traduction complète pourra être ajoutée ultérieurement.
          </p>
        ) : null}
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
        <RiggingEducationAppendixCRiggingEquipmentIdentificationHardwareReference locale={locale} />
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
