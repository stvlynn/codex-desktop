// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose attach-children wrap (legacy dollarOe/eke).
// Stage-3 wave-128.

import { createBoxElement } from "../compose-jsx-lower";

export function attachComposeChildren(
  cacIn3168: any,
  cacIn3169: any,
  cacIn3170: any,
  cacIn3171: any,
) {
  if (cacIn3170.length !== 0)
    return shouldWrapComposeChildren(cacIn3168, cacIn3169, cacIn3170.length)
      ? createBoxElement(
          cacIn3168,
          {
            name: undefined,
            width: "fill",
            height: "fill",
            gap: cacIn3169.gap,
            align: cacIn3169.align,
            justify: cacIn3169.justify,
            columns: cacIn3169.columns,
            rows: cacIn3169.rows,
            autoRows: cacIn3169.autoRows,
            columnGap: cacIn3169.columnGap,
            rowGap: cacIn3169.rowGap,
            alignItems: cacIn3169.alignItems,
            justifyItems: cacIn3169.justifyItems,
          },
          cacIn3170,
          cacIn3171,
        )
      : cacIn3170[0];
}
export function shouldWrapComposeChildren(
  cacIn4913: any,
  cacIn4914: any,
  cacIn4915: any,
) {
  return cacIn4915 !== 1 || cacIn4913 !== "column"
    ? true
    : cacIn4914.gap !== undefined ||
        cacIn4914.align !== undefined ||
        cacIn4914.justify !== undefined ||
        cacIn4914.columns !== undefined ||
        cacIn4914.rows !== undefined ||
        cacIn4914.autoRows !== undefined ||
        cacIn4914.columnGap !== undefined ||
        cacIn4914.rowGap !== undefined ||
        cacIn4914.alignItems !== undefined ||
        cacIn4914.justifyItems !== undefined;
}

export const dollarOe = attachComposeChildren;
export const eke = shouldWrapComposeChildren;
