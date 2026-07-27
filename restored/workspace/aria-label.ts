// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kus`) / export `bS`.

export type BindAriaLabelPeers = {
  $m: (...args: unknown[]) => unknown;
  Gus: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Uus: (...args: unknown[]) => unknown;
  Vos: (...args: unknown[]) => unknown;
  Wus: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  tY: (...args: unknown[]) => unknown;
};

let peers: BindAriaLabelPeers | null = null;

/** Wire bindAriaLabel peers once companions land. */
export function setBindAriaLabelPeers(next: BindAriaLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `bS` / internal `Kus`.
 */
export function bindAriaLabel() {
  if (peers == null) {
    throw new Error("bindAriaLabel peers are not configured");
  }

  return peers.e(() => {
    Uus = peers.c(), Wus = peers.r(peers.o(), 1), peers.tY(), peers.qR(), peers.$m(), peers.Vos(), Gus = peers.J();
  });
}
