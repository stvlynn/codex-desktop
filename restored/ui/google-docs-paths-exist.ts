// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LEo`) / export `pk`.

export type BindGoogleDocsPathsExistPeers = {
  Hf: (...args: unknown[]) => unknown;
  IEo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindGoogleDocsPathsExistPeers | null = null;

/** Wire bindGoogleDocsPathsExist peers once companions land. */
export function setBindGoogleDocsPathsExistPeers(
  next: BindGoogleDocsPathsExistPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pk` / internal `LEo`.
 */
export function bindGoogleDocsPathsExist() {
  if (peers == null) {
    throw new Error("bindGoogleDocsPathsExist peers are not configured");
  }

  return peers.e(() => {
    (peers.ed(),
      peers.Uf(),
      peers.ap(),
      (IEo = peers.tp(peers.Q, `paths-exist`, () => ({
        staleTime: peers.Hf.FIVE_SECONDS,
      }))));
  });
}
