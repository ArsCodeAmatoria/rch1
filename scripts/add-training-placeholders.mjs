import fs from "fs";
import path from "path";

const ROOT = path.resolve("app/[locale]/tower-cranes/operator-training-program");

const dirs = [
  "regulatory-standards",
  "mathematics",
  "load-charts-capacity",
  "mechanical-systems",
  "climbing-procedures",
  "inspection-maintenance",
  "urban-operations",
  "overlap-right-of-way",
  "airspace-property-infrastructure",
  "advanced-urban-compliance",
  "remote-operation",
  "self-erect-tower-cranes",
  "hoist-systems-wire-rope",
  "test-blocks-load-testing",
  "tower-crane-bases-foundations",
  "load-handling-swing-control",
  "public-safety-traffic-emergency",
  "tower-crane-controls-monitoring",
  "regulatory-knowledge-requirements"
];

const importBlock =
  `import {OperatorTrainingLeadPlaceholder} from "@/components/media/operator-training-lead-placeholder";
import {mergePlaceholderForTrainingSection} from "@/lib/content-image-metadata";
`;

function insertImports(src) {
  if (src.includes("mergePlaceholderForTrainingSection")) return src;
  const idx = src.indexOf('import type {Metadata} from "next";');
  if (idx === -1) throw new Error("Metadata import missing");
  const lineEnd = src.indexOf("\n", idx);
  return src.slice(0, lineEnd + 1) + `\n${importBlock}` + src.slice(lineEnd + 1);
}

function wrapMetadataReturn(src, section) {
  const kw = `return mergePlaceholderForTrainingSection("${section}", buildPageMetadata({`;
  if (src.includes(kw)) return src;

  const startKeyword = `return buildPageMetadata({`;
  const startIdx = src.indexOf(startKeyword);
  if (startIdx === -1) throw new Error(`buildPageMetadata return not found in ${section}`);

  let i = startIdx + startKeyword.length;
  let depth = 1;
  for (; i < src.length && depth > 0; i++) {
    const c = src[i];
    if (c === "{") depth++;
    if (c === "}") depth--;
  }

  let j = i;
  while (j < src.length && /\s/.test(src[j])) j++;
  if (src[j] !== ")") throw new Error(`Expected ) after buildPageMetadata object in ${section}`);

  const endParen = j + 1;
  let k = endParen;
  while (k < src.length && /\s/.test(src[k])) k++;
  if (src[k] !== ";") throw new Error(`Expected semicolon after buildPageMetadata(...) in ${section}`);

  const endStmt = k + 1;

  const inner = src.slice(startIdx + startKeyword.length, i - 1);

  const replaced = `return mergePlaceholderForTrainingSection("${section}", buildPageMetadata({${inner}}));`;

  return src.slice(0, startIdx) + replaced + src.slice(endStmt);
}

function insertPlaceholderAfterHeader(src, section) {
  const marker = `<OperatorTrainingLeadPlaceholder section="${section}" />`;
  if (src.includes(marker)) return src;

  const needle = "</header>";
  const pos = src.indexOf(needle);
  if (pos === -1) throw new Error(`</header> not found (${section})`);

  return `${src.slice(0, pos + needle.length)}\n\n      ${marker}${src.slice(pos + needle.length)}`;
}

for (const section of dirs) {
  const fp = path.join(ROOT, section, "page.tsx");
  let s = fs.readFileSync(fp, "utf8");
  s = insertImports(s);
  s = wrapMetadataReturn(s, section);
  s = insertPlaceholderAfterHeader(s, section);
  fs.writeFileSync(fp, s);
  console.log("patched", fp);
}

console.log("done");
