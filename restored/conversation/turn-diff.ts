// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ldl`) / export `kc`.

export type TurnDiffPeers = {
  J: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cdl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sdl: (...args: unknown[]) => unknown;
};

let peers: TurnDiffPeers | null = null;

/** Wire turnDiff peers once companions land. */
export function setTurnDiffPeers(next: TurnDiffPeers): void {
  peers = next;
}

/**
 * Bundle export `kc` / internal `ldl`.
 */
export function turnDiff() {
  if (peers == null) {
    throw new Error("turnDiff peers are not configured");
  }

  return peers.e(() => {
    ((sdl = peers.c()), peers.af(), (cdl = peers.J()));
  });
}
