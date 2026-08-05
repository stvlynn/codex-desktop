// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: CSS font-family tokenize + stretch/style/weight match (legacy soe…goe).

export type FontFaceDescriptor = {
  family: string;
  style?: string;
  weight?: string | number;
  stretch?: string;
  width?: string;
  ascent?: number;
  descent?: number;
  unitsPerEm?: number;
  source?: string;
};

export type FontMatchQuery = {
  family: string;
  style?: string;
  weight?: string | number;
  stretch?: string;
};

/** Office / embedded face metrics keyed by normalized family name. */
export const officeFontMetricsByFamily: Map<string, FontFaceDescriptor[]> =
  new Map();

const STRETCH_ORDER = [
  "",
  "ultra-condensed",
  "extra-condensed",
  "condensed",
  "semi-condensed",
  "normal",
  "semi-expanded",
  "expanded",
  "extra-expanded",
  "ultra-expanded",
] as const;

/** Legacy `soe` — normalize a CSS font-family token. */
export function normalizeFontFamilyToken(raw: string): string {
  return raw
    .trim()
    .replace(/^(['"])(.*)\1$/, "$2")
    .replace(/\\(['"])/g, "$1")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-US");
}

/** Legacy `coe` — split a CSS font-family list into normalized tokens. */
export function splitFontFamilyList(raw: string): string[] {
  const out: string[] = [];
  let buf = "";
  let quote: string | undefined;
  let escaped = false;
  const flush = () => {
    const token = normalizeFontFamilyToken(buf);
    if (token) out.push(token);
    buf = "";
  };
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i]!;
    if (escaped) {
      buf += ch;
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = undefined;
      else buf += ch;
      continue;
    }
    if (ch === "'" || ch === '"') {
      quote = ch;
      continue;
    }
    if (ch === ",") {
      flush();
      continue;
    }
    buf += ch;
  }
  if (escaped) buf += "\\";
  flush();
  return out;
}

/** Legacy `loe` — CSS font-weight keyword/number → numeric weight. */
export function parseFontWeightNumber(raw: string | null | undefined): number {
  if (!raw || raw === "normal") return 400;
  if (raw === "bold") return 700;
  const n = Number(raw);
  return Number.isFinite(n) ? n : 400;
}

/** Legacy `uoe` — normalize italic/oblique/normal. */
export function normalizeFontStyle(
  raw: string | null | undefined,
): "italic" | "oblique" | "normal" {
  const value = raw?.trim().toLowerCase();
  return value === "italic" || value === "oblique" ? value : "normal";
}

/** Legacy `doe` — normalize CSS font-stretch keyword. */
export function normalizeFontStretch(raw: string | null | undefined): string {
  switch (raw?.trim().toLowerCase()) {
    case "ultra-condensed":
    case "extra-condensed":
    case "condensed":
    case "semi-condensed":
    case "semi-expanded":
    case "expanded":
    case "extra-expanded":
    case "ultra-expanded":
      return raw!.trim().toLowerCase();
    default:
      return "normal";
  }
}

/** Legacy stretch-match-index — stretch keyword → match index (default 5 = normal). */
export function fontStretchMatchIndex(raw: string | null | undefined): number {
  return (
    STRETCH_ORDER.indexOf(
      normalizeFontStretch(raw) as (typeof STRETCH_ORDER)[number],
    ) || 5
  );
}

/** Legacy style-match-rank — style → match rank. */
export function fontStyleMatchRank(raw: string | null | undefined): number {
  switch (normalizeFontStyle(raw)) {
    case "italic":
      return 1;
    case "oblique":
      return 2;
    default:
      return 0;
  }
}

/** Legacy `foe` — stretch distance score. */
export function stretchDistanceScore(desired: number, actual: number): number {
  return desired <= 5
    ? actual <= desired
      ? 10 - desired + actual
      : 10 - actual
    : actual >= desired
      ? 10 + desired - actual
      : actual;
}

/** Legacy `poe` — style distance score. */
export function styleDistanceScore(desired: number, actual: number): number {
  return (
    [
      [3, 1, 2],
      [1, 3, 2],
      [1, 2, 3],
    ][desired]?.[actual] ?? 0
  );
}

/** Legacy `moe` — weight distance score (CSS Fonts algorithm). */
export function weightDistanceScore(desired: number, actual: number): number {
  return desired === actual
    ? 1e3
    : desired < 400
      ? actual <= desired
        ? 1e3 - desired + actual
        : 1e3 - actual
      : desired <= 500
        ? actual >= desired && actual <= 500
          ? 1e3 + desired - actual
          : actual <= desired
            ? 500 + actual
            : 1e3 - actual
        : actual > desired
          ? 1e3 + desired - actual
          : actual;
}

/** Legacy font-match-distance — [stretch, style, weight] distance tuple. */
export function fontMatchDistance(
  query: FontMatchQuery,
  face: FontFaceDescriptor,
): [number, number, number] {
  return [
    stretchDistanceScore(
      fontStretchMatchIndex(query.stretch),
      fontStretchMatchIndex(face.width ?? face.stretch),
    ),
    styleDistanceScore(
      fontStyleMatchRank(query.style),
      fontStyleMatchRank(face.style),
    ),
    weightDistanceScore(
      parseFontWeightNumber(
        typeof query.weight === "number" ? String(query.weight) : query.weight,
      ),
      typeof face.weight === "number"
        ? face.weight
        : parseFontWeightNumber(face.weight),
    ),
  ];
}

/** Legacy `hoe` — whether `left` beats `right` lexicographically. */
export function isBetterFontMatch(left: number[], right: number[]): boolean {
  for (let i = 0; i < left.length; i += 1) {
    const delta = (left[i] ?? 0) - (right[i] ?? 0);
    if (delta !== 0) return delta > 0;
  }
  return false;
}

/** Legacy `goe` — pick best office face for a CSS font query. */
export function matchOfficeFontFace(
  query: FontMatchQuery,
): FontFaceDescriptor | undefined {
  for (const family of splitFontFamilyList(query.family)) {
    const faces = officeFontMetricsByFamily.get(family);
    const first = faces?.[0];
    if (!first) continue;
    let best = first;
    let bestDistance = fontMatchDistance(query, best);
    for (let i = 1; i < faces!.length; i += 1) {
      const candidate = faces![i];
      if (!candidate) continue;
      const distance = fontMatchDistance(query, candidate);
      if (isBetterFontMatch(distance, bestDistance)) {
        best = candidate;
        bestDistance = distance;
      }
    }
    return best;
  }
}
