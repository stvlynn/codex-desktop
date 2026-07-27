// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `f$r` / export `qJ`.

/** Prefer matching non-discarded id, else first non-discarded, else id match, else [0]. */
export function pickPreferredById<
  T extends { id: string; discarded?: boolean },
>(items: T[], id: string): T | null {
  return (
    items.find((item) => item.id === id && !item.discarded) ??
    items.find((item) => !item.discarded) ??
    items.find((item) => item.id === id) ??
    items[0] ??
    null
  );
}
