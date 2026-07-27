// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ABt` companion for `Hv` / `Ort`.

/** True when value looks like a Window / global. */
export function isWindowLike(value: unknown): value is Window {
  const tag = Object.prototype.toString.call(value);
  return tag === "[object Window]" || tag === "[object global]";
}
