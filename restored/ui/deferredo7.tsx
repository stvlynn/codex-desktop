// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dLn`) / export `o7`.

export type BindDeferredo7Peers = {
  WIn: (...args: unknown[]) => unknown;
  cLn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lLn: (...args: unknown[]) => unknown;
  sLn: (...args: unknown[]) => unknown;
  uLn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredo7Peers | null = null;

/** Wire bindDeferredo7 peers once companions land. */
export function setBindDeferredo7Peers(next: BindDeferredo7Peers): void {
  peers = next;
}

/**
 * Bundle export `o7` / internal `dLn`.
 */
export function bindDeferredo7() {
  if (peers == null) {
    throw new Error("bindDeferredo7 peers are not configured");
  }

  return peers.e(() => {
    (peers.WIn(),
      (sLn = `style_variants`),
      (cLn = `tone`),
      (lLn = 3),
      (uLn = /^---tone\s+(.+?)\s*$/));
  });
}
