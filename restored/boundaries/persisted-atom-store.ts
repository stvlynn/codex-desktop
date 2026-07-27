// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tp`) / export `$ut`.

import type { AppScopeBrand } from "./app-scope-runtime";

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensurePersistedAtomStoreInit(): void {}

/** Reads a raw `localStorage`-backed persisted-atom item. */
export function getPersistedAtomItem<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/** Removes every persisted-atom `localStorage` entry starting with `prefix`. */
export function clearPersistedAtomsByPrefix(prefix: string): void {
  if (typeof localStorage === "undefined") return;
  const toRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != null && key.startsWith(prefix)) toRemove.push(key);
  }
  for (const key of toRemove) localStorage.removeItem(key);
}

/**
 * Named, keyed query-atom factory (`$ut` neighborhood) — memoizes a
 * per-scope query config produced by `configure`, matching the shape
 * consumed by `store.query.snapshot(atom, scope)` callers.
 */
export function createNamedAppScopeQueryAtom<S, C>(
  scope: AppScopeBrand,
  name: string,
  configure: (scopeArg: S) => C,
): { name: string; scope: AppScopeBrand; get: (scopeArg: S) => C } {
  const cache = new Map<string, C>();
  return {
    name,
    scope,
    get(scopeArg: S) {
      const key = JSON.stringify(scopeArg);
      if (!cache.has(key)) cache.set(key, configure(scopeArg));
      return cache.get(key) as C;
    },
  };
}

export type PersistedAtomStorePeers = {
  $f: (...args: unknown[]) => unknown;
  PZe: (...args: unknown[]) => unknown;
  cacheKey: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  select: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
};

let peers: PersistedAtomStorePeers | null = null;

/** Wire persistedAtomStore peers once companions land. */
export function setPersistedAtomStorePeers(
  next: PersistedAtomStorePeers,
): void {
  peers = next;
}

/**
 * Bundle export `$ut` / internal `tp`.
 */
export function persistedAtomStore(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("persistedAtomStore peers are not configured");
  }

  return peers.ka(e, (e) => {
    let r = n?.(e),
      i = r != null && `params` in r ? r.params : void 0,
      a = r != null && `params` in r ? i : e,
      o = r?.cacheKey,
      s = r?.select,
      c = r?.source;
    return {
      ...(r == null
        ? {}
        : (() => {
            let { cacheKey: e, params: t, select: n, source: i, ...a } = r;
            return a;
          })()),
      queryFn: ({ signal: e }) => peers.PZe(t, a, s, e, c),
      queryKey: peers.$f(t, a, o),
    };
  });
}
