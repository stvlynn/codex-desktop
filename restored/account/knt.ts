// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Gt`) / export `Knt`.

export type KntPeers = {
  aqt: (...args: unknown[]) => unknown;
  parseInt: (...args: unknown[]) => unknown;
};

let peers: KntPeers | null = null;

/** Wire knt peers once companions land. */
export function setKntPeers(next: KntPeers): void {
  peers = next;
}

/**
 * Bundle export `Knt` / internal `$Gt`.
 */
export function knt(
  e: unknown,
  { scale: t = 1, rotation: n = 0 }: { scale?: number; rotation?: number },
) {
  if (peers == null) {
    throw new Error("knt peers are not configured");
  }
  let { width: r, height: i } = e.attributes.style;
  return new peers.aqt({
    viewBox: [0, 0, peers.parseInt(r), peers.parseInt(i)],
    userUnit: 1,
    scale: t,
    rotation: n,
  });
}
