// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ymo`) / export `cj`.

export type BindBindLocalThreadPeers = {
  $u: (...args: unknown[]) => unknown;
  Ami: (...args: unknown[]) => unknown;
  Amo: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gm: (...args: unknown[]) => unknown;
  Gmo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jmo: (...args: unknown[]) => unknown;
  Kmo: (...args: unknown[]) => unknown;
  M1a: (...args: unknown[]) => unknown;
  Omo: (...args: unknown[]) => unknown;
  UG: (...args: unknown[]) => unknown;
  Umo: (...args: unknown[]) => unknown;
  Wmo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c0a: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kmo: (...args: unknown[]) => unknown;
  qmo: (...args: unknown[]) => unknown;
  uR: (...args: unknown[]) => unknown;
  yk: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalThreadPeers | null = null;

/** Wire bindBindLocalThread peers once companions land. */
export function setBindBindLocalThreadPeers(
  next: BindBindLocalThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cj` / internal `Ymo`.
 */
export function bindBindLocalThread() {
  if (peers == null) {
    throw new Error("bindBindLocalThread peers are not configured");
  }

  return peers.e(() => {
    ((Umo = peers.c()),
      peers.Au(),
      peers.$u(),
      peers.c0a(),
      peers.Ami(),
      peers.yk(),
      peers.M1a(),
      peers.Omo(),
      peers.Amo(),
      peers.uR(),
      peers.Gm(),
      (UG = peers.J()),
      (Wmo = 29),
      (Gmo = peers.kmo.replace(/<svg[^>]*>/, ``).replace(`</svg>`, ``)),
      (Kmo = 18),
      (qmo = 7),
      (Jmo = peers.Kmo / 21));
  });
}
