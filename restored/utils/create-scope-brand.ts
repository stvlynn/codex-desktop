// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wa` / export `rvt`.

export type ScopeBrandOptions = {
  key?: unknown;
  parent?: unknown;
  retain?: unknown;
};

/** Create a branded scope handle used by store/scope wiring. */
export function createScopeBrand(
  brand: unknown,
  options?: ScopeBrandOptions,
): {
  __scopeBrand: unknown;
  getKey: unknown;
  id: symbol;
  parent: unknown;
  retain: unknown;
} {
  return {
    __scopeBrand: brand,
    getKey: options?.key,
    id: Symbol(),
    parent: options?.parent,
    retain: options?.retain,
  };
}
