// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kTr`) / export `x1`.

export type WebviewPeers = {
  CTr: (...args: unknown[]) => unknown;
  DTr: (...args: unknown[]) => unknown;
  ETr: (...args: unknown[]) => unknown;
  Lk: (...args: unknown[]) => unknown;
  OTr: (...args: unknown[]) => unknown;
  STr: (...args: unknown[]) => unknown;
  TTr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  wTr: (...args: unknown[]) => unknown;
};

let peers: WebviewPeers | null = null;

/** Wire webview peers once companions land. */
export function setWebviewPeers(next: WebviewPeers): void {
  peers = next;
}

/**
 * Bundle export `x1` / internal `kTr`.
 */
export function webview() {
  if (peers == null) {
    throw new Error("webview peers are not configured");
  }

  return peers.e(() => {
    (peers.CTr(),
      peers.TTr(),
      peers.DTr(),
      (Lk = [
        ...peers.OTr(peers.ETr, `webview`),
        ...peers.OTr(peers.wTr, `vscode-only`),
        ...peers.OTr(peers.STr, `electron-only`),
      ]));
  });
}
