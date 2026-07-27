// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yJr`) / export `cX`.

export type BindBindConversationPeers = {
  $u: (...args: unknown[]) => unknown;
  $xr: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CM: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  SXt: (...args: unknown[]) => unknown;
  _Jr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fJr: (...args: unknown[]) => unknown;
  gJr: (...args: unknown[]) => unknown;
  gKr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vJr: (...args: unknown[]) => unknown;
  vKr: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
};

let peers: BindBindConversationPeers | null = null;

/** Wire bindBindConversation peers once companions land. */
export function setBindBindConversationPeers(next: BindBindConversationPeers): void {
  peers = next;
}

/**
 * Bundle export `cX` / internal `yJr`.
 */
export function bindBindConversation() {
  if (peers == null) {
    throw new Error("bindBindConversation peers are not configured");
  }

  return peers.e(() => {
    gJr = peers.c(), _Jr = peers.r(peers.Il(), 1), peers.Au(), peers.$u(), peers.Pp(), peers.CM(), peers.$xr(), peers.gKr(), peers.SXt(), peers.wp(), peers.vKr(), peers.fJr(), vJr = peers.J();
  });
}
