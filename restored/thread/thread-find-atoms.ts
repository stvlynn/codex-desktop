// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CVi`) / export `HH`.

import {
  createAppScopeQueryAtom,
  type BindableAtom,
} from "../composer/composer-appscope-atoms";

/** Open boundary placeholder — active find-match cursor for a thread. */
export const conversationFindActiveMatchAtom: BindableAtom<{
  id: unknown;
} | null> = createAppScopeQueryAtom(null);

/** Open boundary placeholder — latest find-query result for a thread. */
export const conversationFindResultAtom: BindableAtom<{
  contextId: unknown;
} | null> = createAppScopeQueryAtom(null);

export type BindThreadFindAtomsPeers = {
  EL: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  TL: (...args: unknown[]) => unknown;
  UBi: (...args: unknown[]) => unknown;
  contextId: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  wL: (...args: unknown[]) => unknown;
};

let peers: BindThreadFindAtomsPeers | null = null;

/** Wire bindThreadFindAtoms peers once companions land. */
export function setBindThreadFindAtomsPeers(
  next: BindThreadFindAtomsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HH` / internal `CVi`.
 */
export function bindThreadFindAtoms() {
  if (peers == null) {
    throw new Error("bindThreadFindAtoms peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) =>
    peers.UBi(
      {
        query: e(peers.TL).trim(),
        routeContextId: e(peers.EL)?.contextId ?? `unavailable`,
        stateDomain: e(peers.wL),
        result: e(peers.EL),
      },
      `conversation`,
    ),
  );
}
