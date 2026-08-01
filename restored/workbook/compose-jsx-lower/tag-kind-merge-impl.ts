// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: merge insets + resolve tag kind (legacy LOe/tke/714).
// Stage-3 wave-134.

export function LOe(...cjlIn7484: any[]) {
  let cjlBind17963;
  return (
    cjlIn7484.forEach((item) => {
      item &&
        (cjlBind17963 = {
          ...(cjlBind17963 ?? {}),
          ...item,
          insets: {
            ...(cjlBind17963?.insets ?? {}),
            ...(item.insets ?? {}),
          },
        });
    }),
    cjlBind17963
  );
}
export function tke(cjlIn4204: any, cjlIn4205: any) {
  let cjlBind13252 = cjlIn4205.layout ?? cjlIn4205.display;
  return cjlBind13252 === undefined
    ? cjlIn4205.columns !== undefined ||
      cjlIn4205.rows !== undefined ||
      cjlIn4205.autoRows !== undefined ||
      cjlIn4205.columnGap !== undefined ||
      cjlIn4205.rowGap !== undefined ||
      cjlIn4205.alignItems !== undefined ||
      cjlIn4205.justifyItems !== undefined
      ? "grid"
      : cjlIn4204 === "nav" || cjlIn4204 === "hstack"
        ? "row"
        : cjlIn4204 === "surface"
          ? "panel"
          : "column"
    : workbookHelper714(cjlBind13252, cjlIn4204);
}
export function workbookHelper714(cjlIn9178: any, cjlIn9179: any) {
  if (
    cjlIn9178 === "column" ||
    cjlIn9178 === "row" ||
    cjlIn9178 === "grid" ||
    cjlIn9178 === "panel"
  )
    return cjlIn9178;
  throw Error(`${cjlIn9179} must be one of column, row, grid, or panel.`);
}
/** Compat alias for barrels. */
export const workbookFn714 = workbookHelper714;
