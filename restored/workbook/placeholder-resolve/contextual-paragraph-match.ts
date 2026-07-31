// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: styleId equality + contextual-spacing paragraph pair ($g / ace).

import { isContextualSpacingEnabled } from "../document-style";

/** Legacy `ace` — case-insensitive trimmed styleId equality. */
export function styleIdsEqual(
  left: string | null | undefined,
  right: string | null | undefined,
): boolean {
  const a = left?.trim().toLowerCase();
  const b = right?.trim().toLowerCase();
  return !!a && a === b;
}

/**
 * Legacy `$g` — true when adjacent paragraphs share styleId and the
 * trailing paragraph enables contextual spacing.
 */
export function paragraphsShareContextualSpacing(
  previous: { styleId?: string; textStyle?: { scheme?: string } } | null | undefined,
  current: { styleId?: string; textStyle?: { scheme?: string } } | null | undefined,
): boolean {
  return (
    styleIdsEqual(previous?.styleId, current?.styleId) &&
    isContextualSpacingEnabled(current?.textStyle)
  );
}
