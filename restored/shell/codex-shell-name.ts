// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a5c`) / export `Sl`.

export type CodexShellNamePeers = {
  J: (...args: unknown[]) => unknown;
  X8c: (...args: unknown[]) => unknown;
  Y8c: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  i5c: (...args: unknown[]) => unknown;
  n5c: (...args: unknown[]) => unknown;
  q8c: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r5c: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  t5c: (...args: unknown[]) => unknown;
};

let peers: CodexShellNamePeers | null = null;

/** Wire codexShellName peers once companions land. */
export function setCodexShellNamePeers(next: CodexShellNamePeers): void {
  peers = next;
}

/**
 * Bundle export `Sl` / internal `a5c`.
 */
export function codexShellName() {
  if (peers == null) {
    throw new Error("codexShellName peers are not configured");
  }

  return peers.e(() => {
    ((t5c = peers.c()),
      (n5c = peers.r(peers.q8c(), 1)),
      peers.sd(),
      peers.Y8c(),
      peers.X8c(),
      (r5c = peers.J()),
      (i5c = RegExp(`[^\\n]\b`, `gm`)));
  });
}
