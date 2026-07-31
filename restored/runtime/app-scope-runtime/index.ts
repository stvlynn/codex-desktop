// Restored from ref/webview/assets/app-initial-C-fROkKo.js
//
// Codex AppScope host/runtime barrel (NOT stock jotai).
// Bundle bindings:
//   Q/Fft ≈ AppScope brand atom (wa(`AppScope`)),
//   ed/Ift ≈ ensureAppScopeInit (Ho then wa),
//   Ta/ivt ≈ createScopedSignal(scope, factory, opts),
//   Ho/M_t ≈ ensureAppScopeHostInit (zod/host cluster prelude),
//   Io/L_t ≈ useAppScope(scope) scoped node hook,
//   hT/_8 ≈ routeScopeAtom (wa(`RouteScope`, parent ThreadScope)),
//   Da ≈ createAppScopeFamilySignal,
//   Fm ≈ createPersistedAppScopeFamilySignal (Da + localStorage).

export {
  createAppScopeFamilySignal,
  createPersistedAppScopeFamilySignal,
  useAppScopeFamilyValue,
} from "./family-signal";
export {
  appScopeAtom,
  createAppScope,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  routeScopeAtom,
} from "./scope";
export { createScopedSignal } from "./scoped-signal";
export type {
  AppScopeBrand,
  AppScopeFamilySignal,
  AppScopeNode,
  ScopedSignalOptions,
} from "./types";
export { useAppScope } from "./use-app-scope";
