// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tau`) / export `In`.

export type CodexCommandThemePeers = {
  $iu: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eau: (...args: unknown[]) => unknown;
};

let peers: CodexCommandThemePeers | null = null;

/** Wire codexCommandTheme peers once companions land. */
export function setCodexCommandThemePeers(next: CodexCommandThemePeers): void {
  peers = next;
}

/**
 * Bundle export `In` / internal `tau`.
 */
export function codexCommandTheme() {
  if (peers == null) {
    throw new Error("codexCommandTheme peers are not configured");
  }

  return peers.e(() => {
    $iu = peers.c(), peers.$u(), eau = peers.J();
  });
}
