// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// AppScope family signals (Da / Fm) + family subscribe hook (Fo).

import { useCallback, useSyncExternalStore } from "react";

import { type AppScopeBrand, type AppScopeFamilySignal } from "./types";

/**
 * Bundle `Da` neighborhood — Map-backed family signal (NOT stock jotai).
 * Host `scope.get(atom, key)` / `scope.set(atom, key, value)` can adapt over
 * `read` / `write`; consumers may also call those helpers directly.
 */
export function createAppScopeFamilySignal<T>(
  _scope: AppScopeBrand,
  initial: T | ((key: unknown) => T),
  brand: string = "AppScopeFamily",
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
 * Bundle `Fm` — localStorage-backed AppScope family signal.
 * Key factory maps each family key → storage key; default seeds first read.
 * Cross-tab updates arrive via the `storage` event (bundle `SMe` peer).
 */
export function createPersistedAppScopeFamilySignal<T>(
  keyFor: (key: unknown) => string,
  defaultValue: T,
  brand: string = "PersistedAppScopeFamily",
): AppScopeFamilySignal<T> {
  const values = new Map<unknown, T>();
  const listeners = new Map<unknown, Set<() => void>>();
  const keyByStorageKey = new Map<string, unknown>();

  const readStorage = (storageKey: string): T => {
    if (typeof localStorage === "undefined") return defaultValue;
    try {
      const raw = localStorage.getItem(storageKey);
      return raw == null ? defaultValue : (JSON.parse(raw) as T);
    } catch {
      return defaultValue;
    }
  };

  const writeStorage = (storageKey: string, next: T): void => {
    if (typeof localStorage === "undefined") return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      /* ignore quota / serialization errors */
    }
  };

  const notify = (key: unknown): void => {
    const set = listeners.get(key);
    if (set == null) return;
    for (const listener of set) listener();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
      if (event.key == null || !keyByStorageKey.has(event.key)) return;
      const familyKey = keyByStorageKey.get(event.key);
      let next: T = defaultValue;
      if (event.newValue != null) {
        try {
          next = JSON.parse(event.newValue) as T;
        } catch {
          next = defaultValue;
        }
      }
      values.set(familyKey, next);
      notify(familyKey);
    });
  }

  return {
    __brand: brand,
    __kind: "signal-family",
    read(key) {
      if (!values.has(key)) {
        const storageKey = keyFor(key);
        keyByStorageKey.set(storageKey, key);
        values.set(key, readStorage(storageKey));
      }
      return values.get(key) as T;
    },
    write(key, value) {
      const prev = values.has(key)
        ? (values.get(key) as T)
        : readStorage(keyFor(key));
      const next =
        typeof value === "function" ? (value as (prev: T) => T)(prev) : value;
      const storageKey = keyFor(key);
      keyByStorageKey.set(storageKey, key);
      values.set(key, next);
      writeStorage(storageKey, next);
      notify(key);
    },
    subscribe(key, listener) {
      if (!values.has(key)) {
        const storageKey = keyFor(key);
        keyByStorageKey.set(storageKey, key);
        values.set(key, readStorage(storageKey));
      }
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

/** Bundle `Fo` neighborhood — subscribe to a family signal member. */
export function useAppScopeFamilyValue<T>(
  family: AppScopeFamilySignal<T>,
  key: unknown,
): T {
  const subscribe = useCallback(
    (listener: () => void) => family.subscribe(key, listener),
    [family, key],
  );
  const getSnapshot = useCallback(() => family.read(key), [family, key]);
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
