// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kp`) / export `Out`.

import { useEffect, useState } from "react";

export type PersistedAtom<T> = {
  key: string;
  get: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
};

function readPersistedAtom<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensurePersistedAtomInit(): void {}

/**
 * Bundle export `Out` / internal `kp` — `localStorage`-backed atom, readable
 * with `useAtomPair`.
 */
export function createPersistedAtom<T>(
  key: string,
  defaultValue: T,
): PersistedAtom<T> {
  let value = readPersistedAtom(key, defaultValue);
  const listeners = new Set<() => void>();
  return {
    key,
    get: () => value,
    set: (next) => {
      value = next;
      if (typeof localStorage !== "undefined") {
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          /* ignore quota / serialization errors */
        }
      }
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

/** React hook pairing a `PersistedAtom` with a `useState`-style setter. */
export function useAtomPair<T>(
  atom: PersistedAtom<T>,
): [T, (value: T) => void] {
  const [value, setValue] = useState(atom.get());
  useEffect(() => atom.subscribe(() => setValue(atom.get())), [atom]);
  return [value, atom.set];
}

export type BindCreatePersistedAtomPeers = {
  Cr: (...args: unknown[]) => unknown;
  _Me: (...args: unknown[]) => unknown;
};

let peers: BindCreatePersistedAtomPeers | null = null;

/** Wire bindCreatePersistedAtom peers once companions land. */
export function setBindCreatePersistedAtomPeers(
  next: BindCreatePersistedAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Out` / internal `kp`.
 */
export function bindCreatePersistedAtom(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("bindCreatePersistedAtom peers are not configured");
  }

  return peers.Cr(e, t, peers._Me(), n);
}
