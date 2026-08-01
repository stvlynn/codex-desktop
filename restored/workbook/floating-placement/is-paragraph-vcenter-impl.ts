// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paragraph vertically-empty check (legacy ATe).
// Stage-3 wave-139.

export function ATe(fpIn8009: any, fpIn8010: any) {
  let fpBind18498 = fpIn8010
    ? fpIn8009.paragraphs?.find((fpIn16438) => fpIn16438.id === fpIn8010)
    : fpIn8009.paragraphs?.[0];
  if (!fpBind18498) return false;
  for (let fpBind22484 of fpBind18498.runs ?? [])
    if ((fpBind22484.text ?? "").trim().length > 0) return false;
  return true;
}
