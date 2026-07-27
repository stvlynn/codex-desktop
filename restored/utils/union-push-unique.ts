// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `aS` — pure helper.

/** Copy `base` and append unique entries from `extra`. */
export function unionPushUnique<T>(base: T[], extra: Iterable<T>): T[] {
  const out = [...base];
  for (const item of extra) if (!out.includes(item)) out.push(item);
  return out;
}
