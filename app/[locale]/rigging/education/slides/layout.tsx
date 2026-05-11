import type {ReactNode} from "react";

import {RiggingSlideShell} from "@/components/rigging/education/rigging-slide-shell";

export default function RiggingEducationSlidesLayout({children}: Readonly<{children: ReactNode}>) {
  return <RiggingSlideShell>{children}</RiggingSlideShell>;
}
