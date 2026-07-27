// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hQo`) / export `PE`.

export type Cloud5Peers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  aP: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lY: (...args: unknown[]) => unknown;
  mQo: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pQo: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: Cloud5Peers | null = null;

/** Wire cloud5 peers once companions land. */
export function setCloud5Peers(next: Cloud5Peers): void {
  peers = next;
}

/**
 * Bundle export `PE` / internal `hQo`.
 */
export function cloud5() {
  if (peers == null) {
    throw new Error("cloud5 peers are not configured");
  }

  return peers.e(() => {
    pQo = peers.c(), mQo = peers.r(peers.o(), 1), peers.$u(), peers.aP(), peers.Vm(), peers.qR(), peers.Mp(), lY = peers.J();
  });
}
