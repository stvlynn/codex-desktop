// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dzo`) / export `tO`.

export type DeferredTOPeers = {
  Czo: (...args: unknown[]) => unknown;
  Ezo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Szo: (...args: unknown[]) => unknown;
  Tzo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hzo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  wzo: (...args: unknown[]) => unknown;
};

let peers: DeferredTOPeers | null = null;

/** Wire deferredTO peers once companions land. */
export function setDeferredTOPeers(next: DeferredTOPeers): void {
  peers = next;
}

/**
 * Bundle export `tO` / internal `Dzo`.
 */
export function deferredTO() {
  if (peers == null) {
    throw new Error("deferredTO peers are not configured");
  }

  return peers.e(() => {
    ((Szo = peers.c()),
      peers.sd(),
      peers.hzo(),
      (Czo = peers.J()),
      (wzo = {
        sm: `h-3`,
        md: `h-3.5`,
        lg: `h-4`,
      }),
      (Tzo = 120),
      (Ezo = 2147483647));
  });
}
