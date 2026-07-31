// Restored from ref/webview/assets/app-initial-C-fROkKo.js
//
// TYPED BOUNDARY FACADE — AppScope-bound atom factories + ChatGPT/composer
// atom instances (sibling of `./app-scope-runtime`). Open runtime boundary:
// deep-restore when scoped. Bundle bindings (partial):
//   Oa/xOa ≈ createAppScopeDerivedAtom(scope, computeFn) [export `BP`],
//   Ta/ivt ≈ createScopedSignal (see app-scope-runtime.ts),
//   avt/nvt/Nvt/edt ≈ createAppScopeQueryAtom, tvt ≈ createAppScopeSelectAtom.
//
// Recorded under dependencyBoundaryFacades. Do NOT treat as done/app-feature.
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  appScopeAtom,
  createScopedSignal,
  type AppScopeBrand,
} from "./app-scope-runtime";

/**
 * Shape returned by every AppScope atom factory below — a thin
 * get/set/subscribe cell (same contract as `createScopedSignal`'s return
 * value). Consumers read it with `useAppScopeValue` /
 * `useAppScopeAtomValue`.
 */
export type BindableAtom<T = unknown> = {
  get: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
};

export type ComposerAppScopeAtomsPeers = {
  $V: (...args: unknown[]) => unknown;
  JV: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tH: (...args: unknown[]) => unknown;
};

let peers: ComposerAppScopeAtomsPeers | null = null;

/** Wire composerAppScopeAtoms peers once companions land. */
export function setComposerAppScopeAtomsPeers(
  next: ComposerAppScopeAtomsPeers,
): void {
  peers = next;
}

function isAppScopeBrand(value: unknown): value is AppScopeBrand {
  return (
    value != null &&
    typeof value === "object" &&
    "__scopeBrand" in (value as Record<string, unknown>)
  );
}

/**
 * Bundle `avt` — plain AppScope-bound value/query cell. Accepts either
 * argument order (`(factory, scope?)` or `(scope, factory)`) since both are
 * used across restored consumers.
 */
export function createAppScopeQueryAtom<T>(
  a: AppScopeBrand | T | ((get: () => unknown, set: (value: T) => void) => T),
  b?: AppScopeBrand | T | ((get: () => unknown, set: (value: T) => void) => T),
): BindableAtom<T> {
  const scope = isAppScopeBrand(a) ? a : isAppScopeBrand(b) ? b : appScopeAtom;
  const factory = (isAppScopeBrand(a) ? b : a) as
    | T
    | ((get: () => unknown, set: (value: T) => void) => T);
  return createScopedSignal(scope, factory);
}

/**
 * Bundle `tvt` — overloaded select-atom factory. Two call shapes are used
 * across restored consumers:
 *   1. `createAppScopeSelectAtom(sourceAtom, selector)` — derived read-only
 *      cell projected from a source `BindableAtom`.
 *   2. `createAppScopeSelectAtom(scope, (key, ctx) => value)` — keyed
 *      "family" accessor (memoized per JSON-serialized key), matching the
 *      AppScope host's own family-signal pattern.
 */
export function createAppScopeSelectAtom<T, S>(
  source: BindableAtom<T>,
  selector: (value: T) => S,
): BindableAtom<S>;
export function createAppScopeSelectAtom<K, V>(
  scope: AppScopeBrand,
  compute: (
    key: K,
    ctx: { get: (atom: BindableAtom<any>) => unknown; scope: AppScopeBrand },
  ) => V,
): { get: (key: K) => V };
export function createAppScopeSelectAtom(...args: any[]): any {
  const [first, second] = args;
  if (first != null && typeof (first as BindableAtom<any>).get === "function") {
    const source = first as BindableAtom<any>;
    const selector = second as (value: unknown) => unknown;
    const cell = createScopedSignal<any>(appScopeAtom, selector(source.get()));
    source.subscribe(() => cell.set(selector(source.get())));
    return {
      get: cell.get,
      set: () => {
        throw new Error("createAppScopeSelectAtom cells are read-only");
      },
      subscribe: cell.subscribe,
    };
  }
  const scope = first as AppScopeBrand;
  const compute = second as (key: unknown, ctx: unknown) => unknown;
  const cache = new Map<string, unknown>();
  return {
    get(key: unknown) {
      const cacheKey = JSON.stringify(key);
      if (!cache.has(cacheKey)) {
        cache.set(
          cacheKey,
          compute(key, {
            get: (atom: BindableAtom<any>) => atom.get(),
            scope,
          }),
        );
      }
      return cache.get(cacheKey);
    },
  };
}

/**
 * Bundle `Oa` / export `BP` (`chatgptThreadDerivedAtomBP`) — derived cell
 * recomputed from a `(get, set)` pair, mirroring the AppScope host's own
 * derived-atom factory. Accepts either argument order, see
 * `createAppScopeQueryAtom`.
 */
export function createAppScopeDerivedAtom<T>(
  a: AppScopeBrand | ((get: () => unknown, set: (value: T) => void) => T),
  b?: AppScopeBrand | ((get: () => unknown, set: (value: T) => void) => T),
): BindableAtom<T> {
  const scope = isAppScopeBrand(a) ? a : isAppScopeBrand(b) ? b : appScopeAtom;
  const compute = (isAppScopeBrand(a) ? b : a) as (
    get: () => unknown,
    set: (value: T) => void,
  ) => T;
  return createScopedSignal(scope, compute);
}

export function useAppScopeValue<T>(atom: { get: () => T }): T {
  return atom.get();
}

/**
 * Read an AppScope atom's current value. Plain `BindableAtom`s are read with
 * no extra argument; keyed/"family" atoms (e.g. from
 * `createAppScopeSelectAtom(scope, compute)` or
 * `createNamedAppScopeQueryAtom`) are read by passing their key/params as
 * the second argument.
 */
export function useAppScopeAtomValue<T>(atom: { get: () => T }): T;
export function useAppScopeAtomValue<T, K>(
  atom: { get: (key: K) => T },
  key: K,
): T;
export function useAppScopeAtomValue(atom: any, key?: any): any {
  return key === undefined ? atom.get() : atom.get(key);
}

/** Bundle-neighborhood store accessor — generic AppScope get/set pair. */
export function useAppScopeStore(): {
  get: <T>(atom: BindableAtom<T>) => T;
  set: <T>(atom: BindableAtom<T>, value: T) => void;
} {
  return {
    get: (atom) => atom.get(),
    set: (atom, value) => atom.set(value),
  };
}

/**
 * Bundle export `BP` / internal `xOa` — original single materialized derived
 * atom; kept for back-compat alongside the semantic `chatgptThreadDerivedAtomBP`
 * alias below.
 */
export function composerAppScopeAtoms() {
  if (peers == null) {
    throw new Error("composerAppScopeAtoms peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    (e: unknown, { get: t }: { get: (a: unknown) => unknown }) => {
      let n = peers.JV(t, e);
      return n != null && (t as any)(peers.$V, n)
        ? (t as any)(peers.tH, n)
        : null;
    },
  );
}

// --- ChatGPT / composer AppScope atom instances (open boundary placeholders) ---
// These back the composer's ChatGPT-conversation and prose-editing surfaces.
// Real business state is not restored yet; each cell defaults to a neutral
// value so `useAppScopeValue`/`useAppScopeAtomValue` callers type-check and
// behave as "not loaded" until wired up.

export const chatgptThreadDerivedAtomBP: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationQueryAtomKP: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationBranchAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationCursorAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationFlagsAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationLoadQueryAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationMetaAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationPreviewAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationServerIdAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationStatusAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationTitleAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const chatgptConversationsGateAtom: BindableAtom<boolean> =
  createAppScopeQueryAtom<boolean>(false);
export const hasChatgptServerIdAtom: BindableAtom<boolean> =
  createAppScopeSelectAtom(chatgptConversationServerIdAtom, (v) => v != null);
export const appLogoCacheAtom: BindableAtom<Record<string, unknown>> =
  createAppScopeQueryAtom<Record<string, unknown>>({});
export const localeMessagesAtom: BindableAtom<Record<string, unknown>> =
  createAppScopeQueryAtom<Record<string, unknown>>({});
export const useStepsProseAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
export const writingBlocksControllerAtom: BindableAtom<any> =
  createAppScopeQueryAtom<any>(null);
