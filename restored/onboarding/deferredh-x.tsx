// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qqr`) / export `hX`.

export type BindBindDeferredhXPeers = {
  HT: (...args: unknown[]) => unknown;
  Kqr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredhXPeers | null = null;

/** Wire bindBindDeferredhX peers once companions land. */
export function setBindBindDeferredhXPeers(
  next: BindBindDeferredhXPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hX` / internal `qqr`.
 */
export function bindBindDeferredhX() {
  if (peers == null) {
    throw new Error("bindBindDeferredhX peers are not configured");
  }

  return peers.e(() => {
    (peers.HT(),
      (Kqr = new Map([
        [`csv`, `csv`],
        [`docx`, `docx`],
        [`ipynb`, `ipynb`],
        [`pdf`, `pdf`],
        [`pptx`, `pptx`],
        [`tex`, `tex`],
        [`tsv`, `tsv`],
        [`xlsm`, `xlsx`],
        [`xlsx`, `xlsx`],
      ])));
  });
}
