// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave CA — small real body for React.lazy + optional Suspense wrapper.
// Deferred companion of environment-labels / lazy route loaders.

import {
  createElement,
  lazy,
  Suspense,
  type ComponentType,
  type ReactNode,
} from "react";

export type LazyWithSuspenseOptions = {
  fallback?: ReactNode;
  /** When true, return the bare lazy component (caller supplies Suspense). */
  suspendToParent?: boolean;
};

type AnyProps = Record<string, unknown>;

/**
 * Wrap an async default-export loader in React.lazy, optionally nesting Suspense.
 * Bundle export `AT` / internal `WY`.
 */
export function lazyWithSuspense<P extends AnyProps = AnyProps>(
  loader: () => Promise<ComponentType<P>>,
  { fallback = null, suspendToParent = false }: LazyWithSuspenseOptions = {},
): ComponentType<P> {
  const Lazy = lazy(async () => ({ default: await loader() }));
  if (suspendToParent) {
    return Lazy as ComponentType<P>;
  }
  function Suspended(props: P) {
    return createElement(
      Suspense,
      { fallback },
      createElement(Lazy, props as AnyProps),
    );
  }
  return Suspended as ComponentType<P>;
}
