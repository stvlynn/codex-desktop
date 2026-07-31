// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: unit-interval / byte helpers for color transforms.

export function clampByte(value: number): number {
  return Number.isNaN(value)
    ? 0
    : Math.min(Math.max(Math.round(value), 0), 255);
}

export function byteToHex(value: number): string {
  return clampByte(value).toString(16).padStart(2, "0");
}

export function clampUnitInterval(value: number): number {
  return Number.isNaN(value) ? 0 : Math.min(Math.max(value, 0), 1);
}

export function normalizeUnitOrPercent(value: number): number {
  return Number.isNaN(value)
    ? 0
    : clampUnitInterval(value > 1 ? value / 100 : value);
}

export function clampUnit01(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

export function parseUnitFraction(
  token: string | undefined,
): number | undefined {
  if (!token) return;
  const trimmed = token.trim();
  if (!trimmed) return;
  if (trimmed.endsWith("%")) {
    const pct = Number(trimmed.slice(0, -1));
    return Number.isNaN(pct) ? undefined : clampUnit01(pct / 100);
  }
  const num = Number(trimmed);
  if (!Number.isNaN(num)) return clampUnit01(num > 1 ? num / 100 : num);
}
