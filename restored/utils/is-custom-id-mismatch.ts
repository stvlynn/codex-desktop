// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u5l` / export `kr`.

/** True when selection is a `custom:` id that differs from the item id. */
export function isCustomIdMismatch(
  item: { id: string },
  selectedId: string | null | undefined,
): boolean {
  return selectedId?.startsWith("custom:") === true && item.id !== selectedId;
}
