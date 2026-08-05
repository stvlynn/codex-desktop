// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Mkt`) / export `sot`.

export type FromMarkdownExtensionsPeers = {
  Dut: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: FromMarkdownExtensionsPeers | null = null;

/** Wire fromMarkdownExtensions peers once companions land. */
export function setFromMarkdownExtensionsPeers(
  next: FromMarkdownExtensionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sot` / internal `Mkt`.
 */
export function fromMarkdownExtensions() {
  if (peers == null) {
    throw new Error("fromMarkdownExtensions peers are not configured");
  }

  return peers.e(() => {
    peers.Dut();
  });
}
