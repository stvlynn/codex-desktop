// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xbe`) / export `Qmt`.

export type BindBindMessagePeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _be: (...args: unknown[]) => unknown;
  bbe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gbe: (...args: unknown[]) => unknown;
  hbe: (...args: unknown[]) => unknown;
  mbe: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  pbe: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vbe: (...args: unknown[]) => unknown;
  ybe: (...args: unknown[]) => unknown;
};

let peers: BindBindMessagePeers | null = null;

/** Wire bindBindMessage peers once companions land. */
export function setBindBindMessagePeers(next: BindBindMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `Qmt` / internal `xbe`.
 */
export function bindBindMessage() {
  if (peers == null) {
    throw new Error("bindBindMessage peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), hbe = `configLoad`, gbe = peers.rl().int().positive().finite(), _be = peers.sl({
      reason: peers.ml(peers.hbe),
      filePath: peers.X().nullable().optional().transform(e => peers.e ?? null),
      line: peers.gbe.nullable().optional().transform(e => peers.e ?? null),
      column: peers.gbe.nullable().optional().transform(e => peers.e ?? null),
      detail: peers.X()
    }), vbe = peers.pbe, ybe = e => {
      if (typeof peers.e == `string`) return peers.mbe(peers.e);
      if (typeof peers.e != `object` || !peers.e || !(`message` in peers.e)) return null;
      let t = peers.e.message;
      return typeof t == `string` ? peers.mbe(t) : null;
    }, bbe = [peers.vbe, peers.ybe];
  });
}
