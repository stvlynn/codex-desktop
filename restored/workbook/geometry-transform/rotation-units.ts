// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: rotation EMU ↔ degrees/radians (legacy h287–289 / Binding629).

/** OOXML rotation fixed-point: 60000 units per degree. Legacy Binding629. */
export const EMU_PER_DEGREE = 6e4;

/** Legacy Binding630 / Binding631. */
export function coerceFiniteNumber(value: unknown): number | undefined {
  if (value == null || Number.isNaN(value as number)) return;
  return Number(value);
}

/** Legacy h287 — rotation EMU → degrees. */
export function rotationEmuToDegrees(
  rotationEmu: number | null | undefined,
): number | undefined {
  if (rotationEmu != null) return rotationEmu / EMU_PER_DEGREE;
}

/** Legacy h288 — degrees → rotation EMU. */
export function degreesToRotationEmu(
  degrees: number | null | undefined,
): number | undefined {
  if (!(degrees == null || Number.isNaN(degrees)))
    return Math.round(degrees * EMU_PER_DEGREE);
}

/** Legacy h289 — rotation EMU → radians. */
export function rotationEmuToRadians(
  rotationEmu: number | null | undefined,
): number {
  let degrees = rotationEmuToDegrees(rotationEmu);
  return degrees ? (degrees * Math.PI) / 180 : 0;
}
