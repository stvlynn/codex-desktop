// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `k4` / internal `U5n` — appshots-allowed derived atom for the active host.
// IMPORT_MAP incorrectly pointed `k4` at hooksEventMessages (local name collision); usage is useAppScopeValue(k4).

import type { BindableAtom } from "../composer/composer-appscope-atoms";

export type AppshotsHostAllowedAtomPeers = {
  /** `Ma` — createAppScopeDerivedAtom(scope, compute). */
  Ma: (
    scope: unknown,
    compute: (api: { get: (...args: unknown[]) => unknown }) => unknown,
  ) => BindableAtom<boolean>;
  /** App-scope brand / root scope cell. */
  Q: unknown;
  /** Host-parametrized allowAppshots atom (`H5n` / export `A4`). */
  H5n: BindableAtom<boolean> | ((hostId: unknown) => unknown);
  /** Active host id signal (`SD`). */
  SD: BindableAtom<unknown> | unknown;
  get: (atom: unknown, ...args: unknown[]) => unknown;
};

let peers: AppshotsHostAllowedAtomPeers | null = null;
let cached: BindableAtom<boolean> | null = null;

/** Wire appshots host-allowed atom peers once app-scope companions land. */
export function setAppshotsHostAllowedAtomPeers(
  next: AppshotsHostAllowedAtomPeers,
): void {
  peers = next;
  cached = null;
}

/**
 * Derived atom: allowAppshots for the current host (macOS + gate + requirements).
 * Bundle export `k4` / internal `U5n` = Ma(Q, ({ get }) => get(H5n, get(SD))).
 */
export function getAppshotsHostAllowedAtom(): BindableAtom<boolean> {
  if (cached != null) return cached;
  if (peers == null) {
    cached = {
      get: () => false,
      set: () => {},
      subscribe: () => () => {},
    };
    return cached;
  }
  cached = peers.Ma(peers.Q, ({ get }) =>
    peers!.get(peers!.H5n, peers!.get(peers!.SD)),
  );
  return cached;
}

/** Stable atom cell for `useAppScopeValue(appshotsHostAllowedAtom)`. */
export const appshotsHostAllowedAtom: BindableAtom<boolean> = {
  get: () => getAppshotsHostAllowedAtom().get(),
  set: (value) => getAppshotsHostAllowedAtom().set(value),
  subscribe: (listener) => getAppshotsHostAllowedAtom().subscribe(listener),
};

export function ensureAppshotsHostAllowedAtomInit(): void {}
