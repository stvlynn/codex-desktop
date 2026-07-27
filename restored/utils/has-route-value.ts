// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Uzi` / export `aU`.

type RouteValueResolver = (value: unknown) => unknown;

let resolveRouteValue: RouteValueResolver | null = null;

/** Bind the route-value resolver used by `aU`. */
export function bindHasRouteValue(next: RouteValueResolver): void {
  resolveRouteValue = next;
}

/** True when a route-like value resolves to a non-null route. */
export function hasRouteValue(value: unknown): boolean {
  return resolveRouteValue?.(value) != null;
}
