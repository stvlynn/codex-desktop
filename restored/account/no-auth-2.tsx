// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JJr`) / export `nX`.

export type NoAuth2Peers = {
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KJr: (...args: unknown[]) => unknown;
  MM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fM: (...args: unknown[]) => unknown;
  qJr: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
  yp: (...args: unknown[]) => unknown;
  Tu: { enabledReasoningEfforts: unknown; [k: string]: unknown };
};

let peers: NoAuth2Peers | null = null;

/** Wire NoAuth2 peers once companions land. */
export function setNoAuth2Peers(next: NoAuth2Peers): void {
  peers = next;
}

/**
 * Bundle export `nX` / internal `JJr`.
 */
export function NoAuth2() {
  if (peers == null) {
    throw new Error("NoAuth2 peers are not configured");
  }
  return peers.e(() => {
    peers.Ho(), peers.Au(), peers.DD(), peers.Vf(), peers.fM(), peers.MM(), peers.ed(), peers.wp(), peers.yp(), KJr = [`low`, `medium`, `high`, `xhigh`], qJr = peers.Ma(peers.Q, ({
      get: e
    }) => new Set(peers.xp(peers.e, peers.Tu.enabledReasoningEfforts)));
  });
}
