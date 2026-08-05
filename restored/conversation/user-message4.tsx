// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N_`) / export `qot`.

export type BindBindUserMessage4Peers = {
  Au: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iDt: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  rDt: (...args: unknown[]) => unknown;
};

let peers: BindBindUserMessage4Peers | null = null;

/** Wire bindBindUserMessage4 peers once companions land. */
export function setBindBindUserMessage4Peers(
  next: BindBindUserMessage4Peers,
): void {
  peers = next;
}

/**
 * Bundle export `qot` / internal `N_`.
 */
export function bindBindUserMessage4() {
  if (peers == null) {
    throw new Error("bindBindUserMessage4 peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.jf(),
      (rDt = `diff --git `),
      (iDt =
        /(?:^|[\\/])\.codex[\\/]visualizations[\\/]\d{4}[\\/]\d{2}[\\/]\d{2}[\\/]([a-zA-Z0-9_-]+)[\\/][a-z0-9]+(?:-[a-z0-9]+)*\.html$/));
  });
}
