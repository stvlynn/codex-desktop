// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wSr` / export `I1`.

/** Move index `from` to `to` (negative `to` counts from end). */
export function moveArrayItem<T>(items: T[], from: number, to: number): T[] {
  const next = items.slice();
  const [item] = next.splice(from, 1);
  next.splice(to < 0 ? next.length + to : to, 0, item!);
  return next;
}
