// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hU`) / export `tM`.

export type BindFilesPeers = {
  $Ya: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  QYa: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  XYa: (...args: unknown[]) => unknown;
  YYa: (...args: unknown[]) => unknown;
  ZYa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  sBa: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindFilesPeers | null = null;

/** Wire bindFiles peers once companions land. */
export function setBindFilesPeers(next: BindFilesPeers): void {
  peers = next;
}

/**
 * Bundle export `tM` / internal `hU`.
 */
export function bindFiles() {
  if (peers == null) {
    throw new Error("bindFiles peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Sl(),
      peers.sBa(),
      peers.jf(),
      (YYa = `Files`),
      (XYa = [`text/uri-list`, `public.file-url`]),
      (ZYa = `DownloadURL`),
      (QYa = `application/x-codex-image`),
      ($Ya = peers.sl({
        filename: peers.X().trim().min(1),
        src: peers.X().trim().min(1),
      })));
  });
}
