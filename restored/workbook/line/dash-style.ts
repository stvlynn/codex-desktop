// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: dash line style parser + proto↔name maps (legacy Binding427/429 / Yae).

import { ur as lineStyleEnum } from "../presentation-protobuf";

export type DashStyleName =
  | "solid"
  | "dashed"
  | "dotted"
  | "dash-dot"
  | "dash-dot-dot";

/** Legacy workbookBinding427 — normalize a free-form dash style string. */
export function parseDashStyle(
  value: string | null | undefined,
): DashStyleName | undefined {
  if (value == null || typeof value != "string") return;
  let trimmed = value.trim();
  if (trimmed)
    switch (trimmed.toLowerCase().replace(/[^a-z]+/g, "")) {
      case "solid":
        return "solid";
      case "dash":
      case "dashed":
        return "dashed";
      case "dot":
      case "dotted":
        return "dotted";
      case "dashdot":
        return "dash-dot";
      case "dashdotdot":
        return "dash-dot-dot";
      default:
        return;
    }
}

/** Legacy workbookBinding429 — dash style name → presentation LineStyle proto. */
export const dashStyleNameToProto = {
  solid: lineStyleEnum.LINE_STYLE_SOLID,
  dashed: lineStyleEnum.LINE_STYLE_DASHED,
  dotted: lineStyleEnum.LINE_STYLE_DOTTED,
  "dash-dot": lineStyleEnum.LINE_STYLE_DASH_DOT,
  "dash-dot-dot": lineStyleEnum.LINE_STYLE_DASH_DOT_DOT,
} as const;

/** Legacy Yae — LineStyle proto → dash style name. */
export const dashStyleProtoToName = {
  [lineStyleEnum.LINE_STYLE_UNSPECIFIED]: undefined,
  [lineStyleEnum.LINE_STYLE_SOLID]: "solid",
  [lineStyleEnum.LINE_STYLE_DASHED]: "dashed",
  [lineStyleEnum.LINE_STYLE_DOTTED]: "dotted",
  [lineStyleEnum.LINE_STYLE_DASH_DOT]: "dash-dot",
  [lineStyleEnum.LINE_STYLE_DASH_DOT_DOT]: "dash-dot-dot",
} as const;
