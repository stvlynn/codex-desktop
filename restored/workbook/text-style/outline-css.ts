// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: outline/stroke CSS shorthand parser (legacy tae / nae).

import {
  splitCssValueList,
  parseCssLengthPx,
} from "../fill/css-value-tokenize";

/** Legacy `nae` — CSS outline dash keyword → normalized dash name. */
export const OUTLINE_DASH_ALIASES: Record<string, string> = {
  solid: "solid",
  dash: "dashed",
  dashed: "dashed",
  dot: "dotted",
  dotted: "dotted",
  dashdot: "dash-dot",
  "dash-dot": "dash-dot",
  dashdotdot: "dash-dot-dot",
  "dash-dot-dot": "dash-dot-dot",
};

export type OutlineCss = {
  style: string;
  width?: number;
  fill?: string | { type: "none" };
};

/** Legacy `tae` — parse outline/stroke CSS shorthand. */
export function parseOutlineCss(raw: string): OutlineCss | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed.toLowerCase() === "none")
    return {
      style: "solid",
      fill: { type: "none" },
    };
  const tokens = splitCssValueList(trimmed);
  if (tokens.length === 0) return null;
  let width: number | undefined;
  let style: string | undefined;
  const fillParts: string[] = [];
  tokens.forEach((item) => {
    const length = parseCssLengthPx(item);
    if (length !== null && width === undefined) {
      width = length;
      return;
    }
    const dash = OUTLINE_DASH_ALIASES[item.trim().toLowerCase()];
    if (dash && style === undefined) {
      style = dash;
      return;
    }
    fillParts.push(item);
  });
  if (fillParts.length === 0) {
    if (width === undefined && style === undefined) return null;
    return {
      style: style ?? "solid",
      width,
    };
  }
  return {
    style: style ?? "solid",
    width: width ?? 1,
    fill: fillParts.join(" "),
  };
}

/** Legacy `rae` — outline dash map is eager; keep as ensure no-op. */
export function ensureOutlineDashMapInit(): void {}
