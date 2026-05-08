import type {Metadata} from "next";
import type {ReactNode} from "react";
import {mergePlaceholderImageMeta} from "@/lib/content-image-metadata";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return mergePlaceholderImageMeta(
    "redtc-load-charts-catalog",
    buildPageMetadata({
      locale,
      path: "/redtc/load-charts",
      title: "REDTC PDF Load Chart Practice",
      description: "Practice reading manufacturer tower crane PDF load charts with quiz questions.",
      keywords: ["load chart practice", "tower crane PDF", "REDTC", "exam prep"]
    })
  );
}

export default function RedtcLoadChartsLayout({children}: {children: ReactNode}) {
  return children;
}
