// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// AppScope brand atoms + host/init thunks (wa / Ho / ed).

import { type AppScopeBrand } from "./types";

/** Bundle `wa` — create a branded scope object. */
export function createAppScope(
  brand: string,
  options?: { key?: unknown; parent?: AppScopeBrand; retain?: unknown },
): AppScopeBrand {
  return {
    __scopeBrand: brand,
    id: Symbol(brand),
    parent: options?.parent,
    getKey: options?.key,
    retain: options?.retain,
  };
}

/**
 * Bundle `Q` / export `Fft` — AppScope atom.
 * Initialized by `ensureAppScopeInit` in the bundle; pre-created here so
 * consumers can read it after calling the init thunk.
 */
export let appScopeAtom: AppScopeBrand = createAppScope("AppScope");

/**
 * Bundle `hT` / export `_8` — RouteScope under ThreadScope.
 * Soft: retain/parent chain + per-route instance partitioning stay open;
 * brand is enough for family atoms keyed through this scope.
 */
export const routeScopeAtom: AppScopeBrand = createAppScope("RouteScope", {
  key: (route: { pathname?: string; search?: string }) =>
    `${route.pathname ?? ""}${route.search ?? ""}`,
  parent: undefined,
  retain: { max: 20 },
});

/** Bundle `Ho` / export `M_t` — host/zod prelude required before AppScope init. */
export function ensureAppScopeHostInit(): void {}

/** Bundle `ed` / export `Ift` — `(Ho(), (Q = wa('AppScope')))`. */
export function ensureAppScopeInit(): void {
  ensureAppScopeHostInit();
  if (appScopeAtom?.__scopeBrand !== "AppScope") {
    appScopeAtom = createAppScope("AppScope");
  }
}
