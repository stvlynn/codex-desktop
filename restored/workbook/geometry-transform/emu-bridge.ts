// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: local EMU↔frame-unit bridge (mirrors boundary workbookEt of/Tt via workbookGt).

import { workbookGt } from "../text-style";

/** Legacy `of` — EMU → frame CSS-px (nullish → 0). */
export function emuToFrameUnit(emu: number | null | undefined): number {
  return emu == null ? 0 : emu * workbookGt;
}

/** Legacy `Due` — EMU → frame CSS-px, undefined when input is nullish. */
export function emuToFrameUnitOrUndefined(
  emu: number | null | undefined,
): number | undefined {
  if (emu != null) return emuToFrameUnit(emu);
}

/** Legacy `workbookTt` — frame CSS-px → EMU. */
export function frameUnitToEmu(unit: number): number {
  return Math.round(unit / workbookGt);
}
