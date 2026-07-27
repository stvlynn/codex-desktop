// Restored from ref/webview/assets/app-initial-C-fROkKo.js
//
// TYPED BOUNDARY FACADE — Codex AppScope host/runtime (NOT stock jotai).
// Open runtime boundary: deep-restore when scoped. Bundle bindings:
//   Q/Fft ≈ AppScope brand atom (wa(`AppScope`)),
//   ed/Ift ≈ ensureAppScopeInit (Ho then wa),
//   Ta/ivt ≈ createScopedSignal(scope, factory, opts),
//   Ho/M_t ≈ ensureAppScopeHostInit (zod/host cluster prelude),
//   Io/L_t ≈ useAppScope(scope) scoped node hook.
//
// Recorded under dependencyBoundaryFacades. Do NOT treat as done/app-feature.
/* eslint-disable @typescript-eslint/no-explicit-any */

export type AppScopeBrand = {
  __scopeBrand: string;
  id: symbol;
  parent?: AppScopeBrand;
  getKey?: unknown;
  retain?: unknown;
};

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

/** Bundle `Ho` / export `M_t` — host/zod prelude required before AppScope init. */
export function ensureAppScopeHostInit(): void {}

/** Bundle `ed` / export `Ift` — `(Ho(), (Q = wa('AppScope')))`. */
export function ensureAppScopeInit(): void {
  ensureAppScopeHostInit();
  if (appScopeAtom?.__scopeBrand !== "AppScope") {
    appScopeAtom = createAppScope("AppScope");
  }
}

type ScopedSignalOptions = {
  isEqual?: (a: unknown, b: unknown) => boolean;
  onMount?: (get: () => unknown) => void | (() => void);
};

/**
 * Bundle `Ta` / export `ivt` — create a signal bound to an AppScope.
 * Thin passthrough: returns `{ get, set, subscribe }` around the factory value.
 */
export function createScopedSignal<T>(
  _scope: AppScopeBrand,
  factory: T | ((get: () => unknown, set: (value: T) => void) => T),
  _options?: ScopedSignalOptions,
): {
  get: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
} {
  const listeners = new Set<() => void>();
  let value: T =
    typeof factory === "function"
      ? (factory as (get: () => unknown, set: (value: T) => void) => T)(
          () => value,
          (next) => {
            value = next;
            for (const listener of listeners) listener();
          },
        )
      : factory;
  return {
    get: () => value,
    set: (next) => {
      value = next;
      for (const listener of listeners) listener();
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

/**
 * Bundle `Da` neighborhood — Map-backed family signal (NOT stock jotai).
 * Host `scope.get(atom, key)` / `scope.set(atom, key, value)` can adapt over
 * `read` / `write`; consumers may also call those helpers directly.
 */
export type AppScopeFamilySignal<T> = {
  __brand: string;
  __kind: "signal-family";
  read: (key: unknown) => T;
  write: (key: unknown, value: T | ((prev: T) => T)) => void;
  subscribe: (key: unknown, listener: () => void) => () => void;
};

export function createAppScopeFamilySignal<T>(
  _scope: AppScopeBrand,
  initial: T | ((key: unknown) => T),
  brand = "AppScopeFamily",
): AppScopeFamilySignal<T> {
  const values = new Map<unknown, T>();
  const listeners = new Map<unknown, Set<() => void>>();

  const initialFor = (key: unknown): T =>
    typeof initial === "function"
      ? (initial as (key: unknown) => T)(key)
      : initial;

  const notify = (key: unknown): void => {
    const set = listeners.get(key);
    if (set == null) return;
    for (const listener of set) listener();
  };

  return {
    __brand: brand,
    __kind: "signal-family",
    read(key) {
      if (!values.has(key)) values.set(key, initialFor(key));
      return values.get(key) as T;
    },
    write(key, value) {
      const prev = values.has(key) ? (values.get(key) as T) : initialFor(key);
      const next =
        typeof value === "function" ? (value as (prev: T) => T)(prev) : value;
      values.set(key, next);
      notify(key);
    },
    subscribe(key, listener) {
      let set = listeners.get(key);
      if (set == null) {
        set = new Set();
        listeners.set(key, set);
      }
      set.add(listener);
      return () => {
        set!.delete(listener);
        if (set!.size === 0) listeners.delete(key);
      };
    },
  };
}

/**
 * Bundle `Io` / export `L_t` — scoped AppScope node hook.
 * Open boundary stub: returns a minimal `{ scope, value }` shape.
 */
export function useAppScope(scope: AppScopeBrand = appScopeAtom): {
  scope: AppScopeBrand;
  value: any;
  queryClient: any;
} {
  return {
    scope,
    value: undefined,
    get queryClient(): any {
      throw new Error("Missing query client (open AppScope runtime boundary)");
    },
  };
}
