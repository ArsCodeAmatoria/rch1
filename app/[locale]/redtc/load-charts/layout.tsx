import type {Metadata} from "next";
import type {ReactNode} from "react";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata({
    locale,
    path: "/redtc/load-charts",
    title: "REDTC PDF Load Chart Practice",
    description: "Practice reading manufacturer tower crane PDF load charts with quiz questions.",
    keywords: ["load chart practice", "tower crane PDF", "REDTC", "exam prep"]
    });
}

export default function RedtcLoadChartsLayout({children}: {children: ReactNode}) {
  return children;
}
