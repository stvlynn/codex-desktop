// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle plain-object predicate used by writing-blocks / shallow-clone helpers.

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (value == null || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
