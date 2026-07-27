// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_2l`) / export `ui`.

export type BindSettings2Peers = {
  $D: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QWr: (...args: unknown[]) => unknown;
  S7: (...args: unknown[]) => unknown;
  YIr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g2l: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindSettings2Peers | null = null;

/** Wire bindSettings2 peers once companions land. */
export function setBindSettings2Peers(next: BindSettings2Peers): void {
  peers = next;
}

/**
 * Bundle export `ui` / internal `_2l`.
 */
export function bindSettings2() {
  if (peers == null) {
    throw new Error("bindSettings2 peers are not configured");
  }

  return peers.e(() => {
    g2l = peers.c(), peers.sd(), peers.Ho(), peers.QWr(), peers.$D(), peers.YIr(), S7 = peers.J();
  });
}
