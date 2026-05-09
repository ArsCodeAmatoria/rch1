import katex from "katex";

import "katex/dist/katex.min.css";

type RenderOpts = Parameters<typeof katex.renderToString>[1];

const common: RenderOpts = {
  strict: "warn",
  throwOnError: false
};

/** Server-rendered inline math span (runs KaTeX at build/request time). */
export function KaTeXInline({tex}: {readonly tex: string}) {
  const html = katex.renderToString(tex, {...common, displayMode: false});
  return (
    <span className="katex-inline-wrap mx-0.5 inline align-baseline [&_.katex]:text-[1em]" dangerouslySetInnerHTML={{__html: html}} />
  );
}

/** Server-rendered display (block) math. */
export function KaTeXBlock({tex}: {readonly tex: string}) {
  const html = katex.renderToString(tex, {...common, displayMode: true});
  return (
    <div
      className="katex-block not-prose my-6 overflow-x-auto px-2 py-2 text-center text-foreground [&_.katex]:text-[1.0625rem] [&_.katex]:text-foreground! [&_.katex-display]:my-0 [&_.katex-display]:text-foreground!"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}
