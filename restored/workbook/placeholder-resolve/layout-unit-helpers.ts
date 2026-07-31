// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: EMU/twip → CSS px helpers used by text layout (helper 197/198).

import { workbookGt } from "../text-style";
import { twipToCssPx } from "../font-stack";

/** Legacy `workbook helper 197` — EMU → CSS px, or 0 when falsy. */
export function emuToCssPxOrZero(
  emu: number | null | undefined,
): number {
  return emu ? emu * workbookGt : 0;
}

/** Legacy `workbook helper 198` — twips → CSS px (via typography units). */
export function twipToCssPxOrZero(
  twips: number | null | undefined,
): number {
  return twipToCssPx(twips);
}
