// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i$o`) / export `DE`.

export type BindLocalThread2Peers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  BQo: (...args: unknown[]) => unknown;
  GQo: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hti: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  L8i: (...args: unknown[]) => unknown;
  LQo: (...args: unknown[]) => unknown;
  Lzo: (...args: unknown[]) => unknown;
  P8i: (...args: unknown[]) => unknown;
  PI: (...args: unknown[]) => unknown;
  PQo: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  UQo: (...args: unknown[]) => unknown;
  XQo: (...args: unknown[]) => unknown;
  aV: (...args: unknown[]) => unknown;
  bxo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  ch: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fUi: (...args: unknown[]) => unknown;
  mY: (...args: unknown[]) => unknown;
  n$o: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qQo: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r$o: (...args: unknown[]) => unknown;
  uQo: (...args: unknown[]) => unknown;
  xUi: (...args: unknown[]) => unknown;
};

let peers: BindLocalThread2Peers | null = null;

/** Wire bindLocalThread2 peers once companions land. */
export function setBindLocalThread2Peers(next: BindLocalThread2Peers): void {
  peers = next;
}

/**
 * Bundle export `DE` / internal `i$o`.
 */
export function bindLocalThread2() {
  if (peers == null) {
    throw new Error("bindLocalThread2 peers are not configured");
  }

  return peers.e(() => {
    ((n$o = peers.c()),
      peers.Ho(),
      (r$o = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.Pp(),
      peers.qR(),
      peers.$m(),
      peers.PI(),
      peers.PQo(),
      peers.LQo(),
      peers.BQo(),
      peers.bxo(),
      peers.UQo(),
      peers.Hti(),
      peers.fUi(),
      peers.xUi(),
      peers.P8i(),
      peers.ch(),
      peers.GQo(),
      peers.qQo(),
      peers.XQo(),
      peers.aV(),
      peers.L8i(),
      peers.ed(),
      peers.uQo(),
      peers.Lzo(),
      (mY = peers.J()));
  });
}
