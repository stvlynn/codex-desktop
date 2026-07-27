// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Nu` — pure helper.

/** Shallow omit of own enumerable keys (incl. symbols). */
export function omitOwnKeys<T extends object, K extends PropertyKey>(
  value: T,
  keys: K[],
): Omit<T, K> {
  const out: Record<PropertyKey, unknown> = {};
  for (const key in value) {
    if (
      Object.prototype.hasOwnProperty.call(value, key) &&
      keys.indexOf(key as K) < 0
    ) {
      out[key] = (value as Record<string, unknown>)[key];
    }
  }
  if (value != null && typeof Object.getOwnPropertySymbols === "function") {
    const symbols = Object.getOwnPropertySymbols(value);
    for (let i = 0; i < symbols.length; i++) {
      const sym = symbols[i];
      if (
        keys.indexOf(sym as K) < 0 &&
        Object.prototype.propertyIsEnumerable.call(value, sym)
      ) {
        out[sym] = (value as Record<symbol, unknown>)[sym];
      }
    }
  }
  return out as Omit<T, K>;
}
