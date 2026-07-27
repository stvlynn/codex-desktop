// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Route-scoped jotai store surface passed as `context.scope` to app actions.

import type { AppRouteValue } from "../conversation/client-thread-id-from-route";

/**
 * Minimal AppScope-adjacent store used by register-app-actions.
 * Host binds real jotai atoms; facades call `get` / `set` against this surface.
 */
export type AppActionScope = {
  value: AppRouteValue & {
    pathname?: string;
    routeTemplate?: string;
  };
  get: (atom: unknown, ...args: unknown[]) => unknown;
  set: (atom: unknown, ...args: unknown[]) => void;
};

/**
 * Bundle helper from register-app-actions — require `context.scope`.
 */
export function requireAppActionScope(
  context: { scope?: unknown } | null | undefined,
): AppActionScope {
  const scope = context?.scope;
  if (scope == null || typeof scope !== "object") {
    throw new Error("App action requires a route scope");
  }
  return scope as AppActionScope;
}
