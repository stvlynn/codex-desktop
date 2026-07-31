// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: compound line style parser + proto↔name maps (legacy Binding428/430 / Xae).

import { Sr as compoundStyleEnum } from "../presentation-protobuf";

export type CompoundStyleName =
  | "single"
  | "double"
  | "thick-thin"
  | "thin-thick"
  | "triple";

/** Legacy workbookBinding428 — normalize a free-form compound style string. */
export function parseCompoundStyle(
  value: string | null | undefined,
): CompoundStyleName | undefined {
  if (value == null || typeof value != "string") return;
  let trimmed = value.trim();
  if (trimmed)
    switch (trimmed.toLowerCase().replace(/[^a-z]+/g, "")) {
      case "single":
        return "single";
      case "double":
        return "double";
      case "thickthin":
        return "thick-thin";
      case "thinthick":
        return "thin-thick";
      case "triple":
        return "triple";
      default:
        return;
    }
}

/** Legacy workbookBinding430 — compound style name → CompoundStyle proto. */
export const compoundStyleNameToProto = {
  single: compoundStyleEnum.COMPOUND_STYLE_SINGLE,
  double: compoundStyleEnum.COMPOUND_STYLE_DOUBLE,
  "thick-thin": compoundStyleEnum.COMPOUND_STYLE_THICK_THIN,
  "thin-thick": compoundStyleEnum.COMPOUND_STYLE_THIN_THICK,
  triple: compoundStyleEnum.COMPOUND_STYLE_TRIPLE,
} as const;

/** Legacy Xae — CompoundStyle proto → compound style name. */
export const compoundStyleProtoToName = {
  [compoundStyleEnum.COMPOUND_STYLE_UNSPECIFIED]: undefined,
  [compoundStyleEnum.COMPOUND_STYLE_SINGLE]: "single",
  [compoundStyleEnum.COMPOUND_STYLE_DOUBLE]: "double",
  [compoundStyleEnum.COMPOUND_STYLE_THICK_THIN]: "thick-thin",
  [compoundStyleEnum.COMPOUND_STYLE_THIN_THICK]: "thin-thick",
  [compoundStyleEnum.COMPOUND_STYLE_TRIPLE]: "triple",
} as const;
