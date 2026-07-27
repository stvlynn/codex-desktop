// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gis`) / export `oC`.

export type BindMacOS6Peers = {
  $u: (...args: unknown[]) => unknown;
  Aat: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  RX: (...args: unknown[]) => unknown;
  Um: (...args: unknown[]) => unknown;
  Wis: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  zX: (...args: unknown[]) => unknown;
};

let peers: BindMacOS6Peers | null = null;

/** Wire bindMacOS6 peers once companions land. */
export function setBindMacOS6Peers(next: BindMacOS6Peers): void {
  peers = next;
}

/**
 * Bundle export `oC` / internal `Gis`.
 */
export function bindMacOS6() {
  if (peers == null) {
    throw new Error("bindMacOS6 peers are not configured");
  }

  return peers.e(() => {
    Wis = peers.c(), peers.sd(), RX = peers.r(peers.o(), 1), peers.$u(), peers.Um(), peers.Aat(), zX = peers.J();
  });
}
