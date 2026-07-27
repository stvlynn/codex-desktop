// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SDt`) / export `Vot`.

export type VotPeers = {
  N_: (...args: unknown[]) => unknown;
  P_: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  bDt: (...args: unknown[]) => unknown;
  cu: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vDt: (...args: unknown[]) => unknown;
  xDt: (...args: unknown[]) => unknown;
  yDt: (...args: unknown[]) => unknown;
};

let peers: VotPeers | null = null;

/** Wire vot peers once companions land. */
export function setVotPeers(next: VotPeers): void {
  peers = next;
}

/**
 * Bundle export `Vot` / internal `SDt`.
 */
export function vot() {
  if (peers == null) {
    throw new Error("vot peers are not configured");
  }

  return peers.e(() => {
    vDt = peers.r(peers.cu(), 1), peers.Sl(), peers.jf(), peers.N_(), P_ = peers.X().optional().catch(void 0), yDt = peers.sl({
      audience: peers.ol(peers.pl([`assistant`, `user`])).nonempty().optional().catch(void 0),
      priority: peers.rl().finite().optional().catch(void 0),
      lastModified: peers.P_
    }).strip().transform(e => {
      if (!(peers.e.audience == null && peers.e.priority == null && peers.e.lastModified == null)) return peers.e;
    }).optional().catch(void 0), bDt = peers.sl({
      uri: peers.X(),
      name: peers.P_,
      title: peers.P_,
      description: peers.P_,
      mimeType: peers.P_,
      text: peers.P_,
      blob: peers.P_,
      annotations: peers.yDt
    }).strip(), xDt = peers.dl(`type`, [peers.sl({
      type: peers.ml(`text`),
      text: peers.X(),
      annotations: peers.yDt
    }).strip(), peers.sl({
      type: peers.ml(`image`),
      mimeType: peers.X(),
      data: peers.X(),
      annotations: peers.yDt
    }).strip(), peers.sl({
      type: peers.ml(`audio`),
      mimeType: peers.X(),
      data: peers.X(),
      annotations: peers.yDt
    }).strip(), peers.sl({
      type: peers.ml(`resource_link`),
      uri: peers.X(),
      name: peers.P_,
      title: peers.P_,
      description: peers.P_,
      mimeType: peers.P_,
      annotations: peers.yDt
    }).strip(), peers.sl({
      type: peers.ml(`embedded_resource`),
      resource: peers.bDt
    }).strip(), peers.sl({
      type: peers.ml(`resource`),
      resource: peers.bDt
    }).strip()]);
  });
}
