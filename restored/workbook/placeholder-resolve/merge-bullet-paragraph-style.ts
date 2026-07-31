// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: paragraph-style merge with bullet vs auto-number exclusivity (helper 189).

import { mergeParagraphStyle } from "../document-style";

export type BulletParagraphStyle = Record<string, unknown> & {
  bulletCharacter?: unknown;
  autoNumberType?: unknown;
  autoNumberStartAt?: unknown;
};

/**
 * Legacy `workbook helper 189` — merge paragraph styles, then clear the
 * conflicting bullet / auto-number fields from the primary overlay.
 */
export function mergeParagraphStyleWithBulletExclusivity(
  primary: BulletParagraphStyle | null | undefined,
  fallback: BulletParagraphStyle | null | undefined,
): BulletParagraphStyle | undefined {
  const merged = mergeParagraphStyle(primary, fallback) as
    | BulletParagraphStyle
    | undefined;
  if (!merged) return;
  if (primary?.bulletCharacter === undefined) {
    if (primary?.autoNumberType !== undefined) {
      merged.bulletCharacter = undefined;
      merged.autoNumberStartAt = primary.autoNumberStartAt;
    }
  } else {
    merged.autoNumberType = undefined;
    merged.autoNumberStartAt = undefined;
  }
  return merged;
}
