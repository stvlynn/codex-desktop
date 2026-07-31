// Restored from ref/webview/assets/register-BqqwIOLc-DgvAZVS9.js
// Also covers thin loader register-BqqwIOLc-DKf9ZaVQ.js (init + re-export).
//
// Codex DIL custom-element registry surface (NOT stock npm).
// The upstream mega-chunk (~200k LOC) bundles hermes/DIL widget runtime,
// mapbox-gl lazy graph, and lucide icon chunks. Public consumers only need
// the registerTag / loader API; the host may inject a full registry via
// bindDilRegister when the unrestored mega body is available.

export type DilRegisterApi = {
  registerTag: () => void;
};

let dilRegister: DilRegisterApi | null = null;

/** Bind the real DIL `registerTag` implementation from the host/runtime. */
export function bindDilRegister(next: DilRegisterApi | null): void {
  dilRegister = next;
}

/**
 * Ensure the `dil-renderer` / `dil-portal` custom elements are defined.
 * No-op until the host binds a real registry (mega-chunk body unrestored).
 */
export function registerDilTag(): void {
  dilRegister?.registerTag();
}

/**
 * Module shape matching bundle export `i` / thin-loader export `r`
 * (`{ registerTag }` frozen module).
 */
export const dilRegisterApi: DilRegisterApi = {
  registerTag: registerDilTag,
};

/** Async loader shape matching vitePreload(() => import(register)).then(r => r). */
export async function loadDilRegister(): Promise<DilRegisterApi> {
  return dilRegisterApi;
}

/**
 * Bundle short export `a` — ESM/CJS init side-effect for the DIL registry chunk.
 * Mega-chunk init is skipped here; host may bindDilRegister before first use.
 */
export function ensureDilRegisterInit(): void {
  // Intentionally empty: restored surface is the register API, not the mega body.
}
