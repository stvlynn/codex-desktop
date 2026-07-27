// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ZKn` / export `r5`.

/** True when any item has `type === "sleep"`. */
export function hasSleepItem(value: {
  items: Array<{ type: string }>;
}): boolean {
  return value.items.some((item) => item.type === "sleep");
}
