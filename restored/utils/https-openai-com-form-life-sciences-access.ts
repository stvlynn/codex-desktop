// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ors`) / export `OC`.

export type BindHttpsOpenaiComFormLifeSciencesAccessPeers = {
  Drs: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindHttpsOpenaiComFormLifeSciencesAccessPeers | null = null;

/** Wire bindHttpsOpenaiComFormLifeSciencesAccess peers once companions land. */
export function setBindHttpsOpenaiComFormLifeSciencesAccessPeers(next: BindHttpsOpenaiComFormLifeSciencesAccessPeers): void {
  peers = next;
}

/**
 * Bundle export `OC` / internal `Ors`.
 */
export function bindHttpsOpenaiComFormLifeSciencesAccess() {
  if (peers == null) {
    throw new Error("bindHttpsOpenaiComFormLifeSciencesAccess peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), Drs = peers.X().url().refine(e => peers.e.startsWith(`https://`));
  });
}
