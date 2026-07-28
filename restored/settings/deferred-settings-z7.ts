// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jln`) / export `z7`.

export type BindDeferredSettingsZ7Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Xx: (...args: unknown[]) => unknown;
};

let peers: BindDeferredSettingsZ7Peers | null = null;

/** Wire bindDeferredSettingsZ7 peers once companions land. */
export function setBindDeferredSettingsZ7Peers(next: BindDeferredSettingsZ7Peers): void {
  peers = next;
}

/**
 * Bundle export `z7` / internal `Jln`.
 */
export function bindDeferredSettingsZ7() {
  if (peers == null) {
    throw new Error("bindDeferredSettingsZ7 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Xx).status === `allowed`);
}

type SettingsZ7Atom = {
  get: () => boolean;
  set: (value: boolean) => void;
  subscribe: (listener: () => void) => () => void;
};

let cachedAtom: SettingsZ7Atom | null = null;

/**
 * IMPORT_MAP public name for export `z7` — atom cell for `useAppScopeValue`.
 * Falls back to a deny atom when peers are not wired.
 */
export const deferredSettingsZ7: SettingsZ7Atom = {
  get: () => {
    if (cachedAtom == null) {
      try {
        cachedAtom = bindDeferredSettingsZ7() as SettingsZ7Atom;
      } catch {
        cachedAtom = {
          get: () => false,
          set: () => {},
          subscribe: () => () => {},
        };
      }
    }
    return cachedAtom.get();
  },
  set: (value) => {
    if (cachedAtom == null) {
      try {
        cachedAtom = bindDeferredSettingsZ7() as SettingsZ7Atom;
      } catch {
        cachedAtom = {
          get: () => false,
          set: () => {},
          subscribe: () => () => {},
        };
      }
    }
    cachedAtom.set(value);
  },
  subscribe: (listener) => {
    if (cachedAtom == null) {
      try {
        cachedAtom = bindDeferredSettingsZ7() as SettingsZ7Atom;
      } catch {
        cachedAtom = {
          get: () => false,
          set: () => {},
          subscribe: () => () => {},
        };
      }
    }
    return cachedAtom.subscribe(listener);
  },
};
