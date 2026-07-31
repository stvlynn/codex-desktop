// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: deferred wire for boundary Tae (scheme/system color → rgba string).

export const spreadsheetMlColorSpace = {
  colorSpace: "spreadsheetml",
} as const;

export type ColorProtoToRgbaString = (
  color: unknown,
  theme: unknown,
  options?: { colorSpace?: string },
) => string;

let wired: ColorProtoToRgbaString | null = null;

/** Called once from workbook-runtime after Tae is in scope. */
export function wireResolveColorProtoToRgbaString(
  fn: ColorProtoToRgbaString,
): void {
  wired = fn;
}

export function resolveColorProtoToRgbaString(
  color: unknown,
  theme: unknown,
  options?: { colorSpace?: string },
): string {
  if (!wired) {
    throw new Error("resolveColorProtoToRgbaString not wired (expected Tae)");
  }
  return wired(color, theme, options);
}
