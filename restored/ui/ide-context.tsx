// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `w1s`) / export `Jh`.

export type BindIdeContextPeers = {
  C1s: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  S1s: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pQa: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindIdeContextPeers | null = null;

/** Wire bindIdeContext peers once companions land. */
export function setBindIdeContextPeers(next: BindIdeContextPeers): void {
  peers = next;
}

/**
 * Bundle export `Jh` / internal `w1s`.
 */
export function bindIdeContext() {
  if (peers == null) {
    throw new Error("bindIdeContext peers are not configured");
  }

  return peers.e(() => {
    S1s = peers.c(), peers.Ho(), C1s = peers.r(peers.o(), 1), peers.pQa(), peers.KM();
  });
}
