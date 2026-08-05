// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z4s`) / export `Sh`.

export type Home2Peers = {
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  L4s: (...args: unknown[]) => unknown;
  NN: (...args: unknown[]) => unknown;
  O4s: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  R4s: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zZ: (...args: unknown[]) => unknown;
};

let peers: Home2Peers | null = null;

/** Wire home2 peers once companions land. */
export function setHome2Peers(next: Home2Peers): void {
  peers = next;
}

/**
 * Bundle export `Sh` / internal `z4s`.
 */
export function home2() {
  if (peers == null) {
    throw new Error("home2 peers are not configured");
  }

  return peers.e(() => {
    ((L4s = peers.c()),
      peers.fr(),
      peers.Ho(),
      (R4s = peers.r(peers.o(), 1)),
      peers.aN(),
      peers.zZ(),
      peers.OE(),
      peers.Fh(),
      peers.NN(),
      peers.O4s());
  });
}
