// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// react-router navigation primitives used by settings/skills shells.
// Open boundary facades — bind real implementations when the host wires routing.
// Exports: B5/vw useLocation, I5/xw Navigate, H5/bw useNavigate.

import {
  createElement,
  useEffect,
  type ReactElement,
  type ReactNode,
} from "react";

export type ReactRouterTo =
  | string
  | { pathname?: string; search?: string; hash?: string };

export type NavigateFunction = (
  to: ReactRouterTo,
  options?: { replace?: boolean; state?: unknown; relative?: "route" | "path" },
) => void;

export type LocationLike = {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
};

export type PathMatch = {
  params: Record<string, string | undefined>;
  pathname: string;
  pathnameBase: string;
  pattern: { path: string; caseSensitive?: boolean; end?: boolean };
};

let useLocationImpl: (() => LocationLike) | null = null;
let useNavigateImpl: (() => NavigateFunction) | null = null;
let useSearchParamsImpl:
  | (() => [URLSearchParams, (next: URLSearchParams) => void])
  | null = null;
let useMatchImpl: ((pattern: string) => PathMatch | null) | null = null;

export function bindReactRouterNavigation(next: {
  useLocation?: () => LocationLike;
  useNavigate?: () => NavigateFunction;
  useSearchParams?: () => [URLSearchParams, (next: URLSearchParams) => void];
  useMatch?: (pattern: string) => PathMatch | null;
}): void {
  if (next.useLocation) useLocationImpl = next.useLocation;
  if (next.useNavigate) useNavigateImpl = next.useNavigate;
  if (next.useSearchParams) useSearchParamsImpl = next.useSearchParams;
  if (next.useMatch) useMatchImpl = next.useMatch;
}

/** Bundle `vw` / export `B5`. */
export function useLocation(): LocationLike {
  if (useLocationImpl != null) return useLocationImpl();
  return { pathname: "/", search: "", hash: "", state: null, key: "default" };
}

/** Bundle `bw` / export `H5`. */
export function useNavigate(): NavigateFunction {
  if (useNavigateImpl != null) return useNavigateImpl();
  return () => {};
}

/**
 * Bundle `yw` / export `V5` — `useMatch` facade.
 * Returns null until the host binds react-router.
 */
export function useMatch(pattern: string): PathMatch | null {
  if (useMatchImpl != null) return useMatchImpl(pattern);
  return null;
}

/**
 * Bundle `IVn` / export `W5` — `useSearchParams` facade.
 * Returns a stable empty params pair until the host binds react-router.
 */
export function useSearchParams(): [
  URLSearchParams,
  (next: URLSearchParams) => void,
] {
  if (useSearchParamsImpl != null) return useSearchParamsImpl();
  return [new URLSearchParams(), () => {}];
}

export type NavigateProps = {
  to: ReactRouterTo;
  replace?: boolean;
  state?: unknown;
  relative?: "route" | "path";
};

/**
 * Imperative redirect component (bundle `xw` / export `I5`).
 * Renders null; navigates on mount / dep change.
 */
export function Navigate({
  to,
  replace,
  state,
  relative,
}: NavigateProps): ReactNode {
  const navigate = useNavigate();
  const serialized = JSON.stringify(to);
  useEffect(() => {
    navigate(JSON.parse(serialized) as ReactRouterTo, {
      replace,
      state,
      relative,
    });
  }, [navigate, serialized, replace, state, relative]);
  return null;
}

/** Helper for tests / storybooks. */
export function navigateElement(props: NavigateProps): ReactElement {
  return createElement(Navigate, props);
}
