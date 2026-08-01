// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parse rgb()/rgba() CSS to [r,g,b] (legacy helper #602).
// Stage-3 wave-135.

export function workbookHelper602(cpIn6948: any) {
  let cpBind17307 = cpIn6948.match(
    /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i,
  );
  if (!cpBind17307) return null;
  let [, cpBind17308, cpBind17309, cpBind17310] = cpBind17307;
  return !cpBind17308 || !cpBind17309 || !cpBind17310
    ? null
    : [
        parseInt(cpBind17308, 10),
        parseInt(cpBind17309, 10),
        parseInt(cpBind17310, 10),
      ];
}
