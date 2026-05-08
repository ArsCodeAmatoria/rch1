import {notFound} from "next/navigation";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {SiteHeader} from "@/components/navigation/site-header";
import {SiteFooter} from "@/components/layout/site-footer";
import {JsonLd} from "@/components/seo/JsonLd";
import {buildOrganizationSchema, buildWebSiteSchema} from "@/lib/schema";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebSiteSchema({locale})} />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
