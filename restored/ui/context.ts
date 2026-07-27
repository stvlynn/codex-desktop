// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `b$a`) / export `Pj`.

export type ContextPeers = {
  Au: (...args: unknown[]) => unknown;
  FP: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  KB: (...args: unknown[]) => unknown;
  Vla: (...args: unknown[]) => unknown;
  _$a: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dL: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g$a: (...args: unknown[]) => unknown;
  gP: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  p$a: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  v$a: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
  y$a: (...args: unknown[]) => unknown;
};

let peers: ContextPeers | null = null;

/** Wire context peers once companions land. */
export function setContextPeers(next: ContextPeers): void {
  peers = next;
}

/**
 * Bundle export `Pj` / internal `b$a`.
 */
export function context() {
  if (peers == null) {
    throw new Error("context peers are not configured");
  }

  return peers.e(() => {
    g$a = peers.c(), peers.KB(), peers.Au(), _$a = peers.r(peers.o(), 1), peers.Vla(), peers.p$a(), peers.wp(), peers.FP(), peers.dL(), peers.gP(), v$a = peers.J(), y$a = `:is([data-diff], [data-file])`;
  });
}
