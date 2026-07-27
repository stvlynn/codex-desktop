// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dr` / export `lvt`.

/** React-style shallow equality for props/objects. */
export function shallowEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i += 1) {
    const key = keysA[i]!;
    if (
      !hasOwn.call(b, key) ||
      !Object.is(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key],
      )
    ) {
      return false;
    }
  }
  return true;
}
