// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lJs`) / export `Hg`.

export type BindBindQueuedPeers = {
  $u: (...args: unknown[]) => unknown;
  E$: (...args: unknown[]) => unknown;
  Eqs: (...args: unknown[]) => unknown;
  Iqs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  Vm: (...args: unknown[]) => unknown;
  Yqs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cA: (...args: unknown[]) => unknown;
  cJs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  k$: (...args: unknown[]) => unknown;
  kqs: (...args: unknown[]) => unknown;
};

let peers: BindBindQueuedPeers | null = null;

/** Wire bindBindQueued peers once companions land. */
export function setBindBindQueuedPeers(next: BindBindQueuedPeers): void {
  peers = next;
}

/**
 * Bundle export `Hg` / internal `lJs`.
 */
export function bindBindQueued() {
  if (peers == null) {
    throw new Error("bindBindQueued peers are not configured");
  }

  return peers.e(() => {
    ((cJs = peers.c()),
      peers.$u(),
      peers.Pp(),
      peers.cA(),
      peers.Iqs(),
      peers.Vm(),
      peers.Eqs(),
      peers.kqs(),
      peers.E$(),
      peers.Yqs(),
      (k$ = peers.J()));
  });
}
