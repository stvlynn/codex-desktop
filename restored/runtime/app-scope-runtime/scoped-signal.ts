// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ta` / export `ivt` — createScopedSignal(scope, factory, opts).

import { type AppScopeBrand, type ScopedSignalOptions } from "./types";

/**
 * Create a signal bound to an AppScope.
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
