// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aor`) / export `s0`.

export type S0Peers = {
  Ub: (...args: unknown[]) => unknown;
  a0t: (...args: unknown[]) => unknown;
  nor: (...args: unknown[]) => unknown;
  ror: (...args: unknown[]) => unknown;
};
let peers: S0Peers | null = null;

/** Wire s0 peers once companions land. */
export function setS0Peers(next: S0Peers): void {
  peers = next;
}

/**
 * Bundle export `s0` / internal `aor`.
 */
export function s0(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("s0 peers are not configured");
  }
  let n = peers.nor(t);
  n != null &&
    peers.Ub(e, peers.a0t, {
      routeKind: peers.ror(e.value.routeKind),
      tab: n,
    });
}
