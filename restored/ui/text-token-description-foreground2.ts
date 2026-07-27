// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rHl`) / export `mo`.

export type TextTokenDescriptionForeground2Peers = {
  $m: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eHl: (...args: unknown[]) => unknown;
  nHl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  tHl: (...args: unknown[]) => unknown;
};

let peers: TextTokenDescriptionForeground2Peers | null = null;

/** Wire textTokenDescriptionForeground2 peers once companions land. */
export function setTextTokenDescriptionForeground2Peers(next: TextTokenDescriptionForeground2Peers): void {
  peers = next;
}

/**
 * Bundle export `mo` / internal `rHl`.
 */
export function textTokenDescriptionForeground2() {
  if (peers == null) {
    throw new Error("textTokenDescriptionForeground2 peers are not configured");
  }

  return peers.e(() => {
    eHl = peers.c(), peers.sd(), tHl = peers.r(peers.o(), 1), peers.$m(), nHl = peers.J();
  });
}
