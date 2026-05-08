import type {Metadata} from "next";
import "@/styles/globals.css";
import {ThemeProvider} from "@/components/layout/theme-provider";
import {SITE_NAME, SITE_URL} from "@/lib/seo";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RCH1 | Crane and Construction Safety Knowledge",
    template: "%s | RCH1"
  },
  description:
    "RCH1 is a bilingual technical safety knowledge platform for crane operations, rigging, hoisting, standards, and construction field procedures.",
  keywords: [
    "crane safety",
    "tower crane operations",
    "rigging and hoisting",
    "construction safety program",
    "WorkSafeBC",
    "CSA",
    "ASME B30",
    "Technical Safety BC"
  ],
  alternates: {
    canonical: "/en"
  },
  openGraph: {
    type: "website",
    title: "RCH1 Safety Knowledge",
    description: "Industrial safety documentation for crane and rigging operations.",
    url: baseUrl,
    siteName: SITE_NAME,
    locale: "en_CA",
    alternateLocale: "fr_CA",
    images: [{url: `${baseUrl}/og/rch1-default-og.jpg`}]
  },
  twitter: {
    card: "summary_large_image",
    title: "RCH1 Safety Knowledge",
    description: "Industrial safety documentation for crane and rigging operations.",
    images: [`${baseUrl}/og/rch1-default-og.jpg`],
    site: "@RCH1Safety",
    creator: "@RCH1Safety"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
