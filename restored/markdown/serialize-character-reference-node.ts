// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H`) / export `Pvt`.

export type SerializeCharacterReferenceNodePeers = {
  B: (...args: unknown[]) => unknown;
  V: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  h: (...args: unknown[]) => unknown;
  z: (...args: unknown[]) => unknown;
};

let peers: SerializeCharacterReferenceNodePeers | null = null;

/** Wire serializeCharacterReferenceNode peers once companions land. */
export function setSerializeCharacterReferenceNodePeers(
  next: SerializeCharacterReferenceNodePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pvt` / internal `H`.
 */
export function serializeCharacterReferenceNode() {
  if (peers == null) {
    throw new Error("serializeCharacterReferenceNode peers are not configured");
  }

  return peers.e(() => {
    (peers.h(),
      (z = typeof window > `u` || `Deno` in globalThis),
      (B = Object.prototype.hasOwnProperty),
      (V = Symbol()));
  });
}
