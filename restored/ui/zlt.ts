// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nh`) / export `zlt`.

export type ZltPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  A9e: (...args: unknown[]) => unknown;
  Gm: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Um: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  b7e: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  j9e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  th: (...args: unknown[]) => unknown;
  zm: (...args: unknown[]) => unknown;
};

let peers: ZltPeers | null = null;

/** Wire zlt peers once companions land. */
export function setZltPeers(next: ZltPeers): void {
  peers = next;
}

/**
 * Bundle export `zlt` / internal `nh`.
 */
export function zlt() {
  if (peers == null) {
    throw new Error("zlt peers are not configured");
  }

  return peers.e(() => {
    A9e = peers.c(), peers.b7e(), peers.sd(), j9e = peers.r(peers.o(), 1), peers.$u(), peers.zm(), peers.Vm(), peers.Um(), peers.Gm(), peers.$m(), th = peers.J();
  });
}
