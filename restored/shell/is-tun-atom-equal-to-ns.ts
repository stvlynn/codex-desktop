// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `eS`) / export `P7`.

export type IsTunAtomEqualToNsPeers = {
  tunAtom: unknown;
  nsSentinel: unknown;
};

let peers: IsTunAtomEqualToNsPeers | null = null;

/** Wire tun/ns comparison peers once companions land. */
export function setIsTunAtomEqualToNsPeers(
  next: IsTunAtomEqualToNsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `P7` / internal `eS`.
 * True when the store getter returns the ns sentinel for the tun atom.
 */
export function isTunAtomEqualToNS(get: (atom: unknown) => unknown): boolean {
  if (peers == null) {
    throw new Error("IsTunAtomEqualToNs peers are not configured");
  }
  return get(peers.tunAtom) === peers.nsSentinel;
}
