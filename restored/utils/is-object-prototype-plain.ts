// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Ji` — pure helper.

/**
 * True when value is a non-null object whose prototype is `Object.prototype` or null.
 */
export function isObjectPrototypePlain(value: unknown): boolean {
  if (typeof value !== "object" || !value) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto == null;
}
