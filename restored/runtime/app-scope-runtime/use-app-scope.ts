// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Io` / export `L_t` — useAppScope(scope) scoped node hook.

import { appScopeAtom } from "./scope";
import { type AppScopeBrand, type AppScopeNode } from "./types";

/**
 * Soft host stub: returns `{ scope, value, get, set }` adapted over family
 * signals so section expand can call `store.set(atom, key, value)`.
 */
export function useAppScope(scope: AppScopeBrand = appScopeAtom): AppScopeNode {
  return {
    scope,
    value: undefined,
    get queryClient(): unknown {
      throw new Error(
        "Missing query client (AppScope runtime not fully bound)",
      );
    },
    get(atom, key) {
      return atom.read(key);
    },
    set(atom, key, value) {
      atom.write(key, value);
    },
  };
}
