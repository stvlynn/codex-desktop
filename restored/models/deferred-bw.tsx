// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `U9o`) / export `Bw`.

export type BindDeferredBwPeers = {
  A9o: (...args: unknown[]) => unknown;
  B9o: (...args: unknown[]) => unknown;
  H9o: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  O9o: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R9o: (...args: unknown[]) => unknown;
  S9o: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  V9o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gX: (...args: unknown[]) => unknown;
  x9o: (...args: unknown[]) => unknown;
  z9o: (...args: unknown[]) => unknown;
};

let peers: BindDeferredBwPeers | null = null;

/** Wire bindDeferredBw peers once companions land. */
export function setBindDeferredBwPeers(next: BindDeferredBwPeers): void {
  peers = next;
}

/**
 * Bundle export `Bw` / internal `U9o`.
 */
export function bindDeferredBw() {
  if (peers == null) {
    throw new Error("bindDeferredBw peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), peers.S9o(), peers.A9o(), R9o = peers.Ta(peers.Q, {
      status: `not-detected`,
      transport: null,
      model: null,
      error: null,
      battery: null
    }), z9o = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.R9o).model ?? peers.e(peers.x9o) ?? null), gX = peers.Ta(peers.Q, peers.O9o), B9o = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.gX).joystick), V9o = peers.Ta(peers.Q, !1), H9o = peers.Ta(peers.Q, `idle`);
  });
}
