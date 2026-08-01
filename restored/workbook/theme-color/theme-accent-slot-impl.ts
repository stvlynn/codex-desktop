// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: theme accent slot from color index (legacy Uye/Wye).
// Stage-3 wave-114.

const THEME_ACCENT_SLOTS = [
  "accent1",
  "accent2",
  "accent3",
  "accent4",
  "accent5",
  "accent6",
] as const;

void THEME_ACCENT_SLOTS;

export function normalizeThemeColorIndex(tcIn9118: any) {
  if (tcIn9118 === undefined || !Number.isFinite(tcIn9118)) return;
  let tcBind19703 = Math.trunc(tcIn9118);
  return tcBind19703 >= 101 && tcBind19703 <= 148
    ? tcBind19703 - 100
    : tcBind19703 >= 1 && tcBind19703 <= 48
      ? tcBind19703
      : undefined;
}
export function resolveThemeAccentSlot(tcIn8682: any, tcIn8683: any) {
  let tcBind19189 = normalizeThemeColorIndex(tcIn8683);
  if (tcBind19189 !== undefined) {
    let tcBind22348 = ((tcBind19189 - 1) % 8) + 1;
    if (tcBind22348 >= 3)
      return THEME_ACCENT_SLOTS[tcBind22348 - 3] ?? "accent1";
  }
  return THEME_ACCENT_SLOTS[tcIn8682 % THEME_ACCENT_SLOTS.length] ?? "accent1";
}

export const Uye = normalizeThemeColorIndex;
export const Wye = resolveThemeAccentSlot;
