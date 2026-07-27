// Restored from ref/webview/assets/register-BqqwIOLc-DKf9ZaVQ.js
//
// TYPED BOUNDARY FACADE — DIL custom-element registry loader.
// The real register chunk (`register-BqqwIOLc-DgvAZVS9`, ~200k lines) bundles
// mapbox-gl + lucide icon lazy graph + DIL runtime. Faced as open boundary;
// host binds `bindDilRegister` when the full registry is available.
// NOT cmdk / not a stock npm package surface.

export type DilRegisterApi = {
  registerTag: () => void;
};

let dilRegister: DilRegisterApi | null = null;

/** Bind the real DIL `registerTag` implementation from the host/runtime. */
export function bindDilRegister(next: DilRegisterApi | null): void {
  dilRegister = next;
}

/**
 * Ensure the `dil-renderer` custom element is defined.
 * No-op until the host binds a real registry (faced register-* chunks).
 */
export function registerDilTag(): void {
  dilRegister?.registerTag();
}

/** Async loader shape matching vitePreload(() => import(register)).then(r => r). */
export async function loadDilRegister(): Promise<DilRegisterApi> {
  return {
    registerTag: registerDilTag,
  };
}

/** Bundle short export `a` — ESM/CJS init side-effect for the DIL registry chunk. */
export function ensureDilRegisterInit(): void {
  // Host may bind a real registry via `bindDilRegister` before first use.
}
