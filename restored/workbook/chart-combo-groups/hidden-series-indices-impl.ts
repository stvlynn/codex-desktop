// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: hidden series index set for combo groups (legacy xxe).
// Stage-3 wave-137.

export function xxe(ccgIn9604: any, ccgIn9605: any, ccgIn9606: any) {
  if (!ccgIn9606) return;
  let ccgBind20144 = new Set();
  for (let ccgBind22856 = 0; ccgBind22856 < ccgIn9605; ccgBind22856++)
    ccgIn9606.has(ccgIn9604 + ccgBind22856) && ccgBind20144.add(ccgBind22856);
  return ccgBind20144.size > 0 ? ccgBind20144 : undefined;
}
