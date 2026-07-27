// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OBn` / export `U5` — params from the last matched react-router route.
// Open bindable: stock react-router is not yet a restored dependency.

export type RouteParams = Record<string, string | undefined>;

let useRouteParamsImpl: (() => RouteParams) | null = null;

export function bindUseRouteParams(impl: () => RouteParams): void {
  useRouteParamsImpl = impl;
}

/** Bundle `OBn` / export `U5`. */
export function useRouteParams(): RouteParams {
  if (useRouteParamsImpl != null) return useRouteParamsImpl();
  return {};
}
