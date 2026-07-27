// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rsu`) / export `On`.

export type Size12AriaIconPeers = {
  $ou: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Xou: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nsu: (...args: unknown[]) => unknown;
  tsu: (...args: unknown[]) => unknown;
};

let peers: Size12AriaIconPeers | null = null;

/** Wire size12AriaIcon peers once companions land. */
export function setSize12AriaIconPeers(next: Size12AriaIconPeers): void {
  peers = next;
}

/**
 * Bundle export `On` / internal `rsu`.
 */
export function size12AriaIcon() {
  if (peers == null) {
    throw new Error("size12AriaIcon peers are not configured");
  }

  return peers.e(() => {
    tsu = peers.c(), peers.Au(), peers.Xou(), peers.$ou(), nsu = peers.J();
  });
}
