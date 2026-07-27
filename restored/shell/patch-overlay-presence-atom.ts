// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kvu`) / export `$`.

export type PatchOverlayPresenceAtomPeers = {
  P9: (...args: unknown[]) => unknown;
  Yvu: (...args: unknown[]) => unknown;
};

let peers: PatchOverlayPresenceAtomPeers | null = null;

/** Wire patchOverlayPresenceAtom peers once companions land. */
export function setPatchOverlayPresenceAtomPeers(next: PatchOverlayPresenceAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `$` / internal `Kvu`.
 */
export function patchOverlayPresenceAtom(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("patchOverlayPresenceAtom peers are not configured");
  }

  e.set(peers.P9, peers.Yvu(e.get(peers.P9), t));
}
