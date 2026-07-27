// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wsu`) / export `Sn`.

export type DeferredSnPeers = {
  Csu: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LD: (...args: unknown[]) => unknown;
  PR: (...args: unknown[]) => unknown;
  Ssu: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c9: (...args: unknown[]) => unknown;
  dk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gk: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: DeferredSnPeers | null = null;

/** Wire deferredSn peers once companions land. */
export function setDeferredSnPeers(next: DeferredSnPeers): void {
  peers = next;
}

/**
 * Bundle export `Sn` / internal `wsu`.
 */
export function deferredSn() {
  if (peers == null) {
    throw new Error("deferredSn peers are not configured");
  }

  return peers.e(() => {
    Ssu = peers.c(), peers.sd(), peers.PR(), peers.gk(), peers.dk(), peers.LD(), c9 = peers.J(), Csu = `h-[18px] w-[18px] rounded-[3px] border-[1px]`;
  });
}
