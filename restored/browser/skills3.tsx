// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wz`) / export `Tz`.

export type BindBindSkills3Peers = {
  $4i: (...args: unknown[]) => unknown;
  Cz: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Jg: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  Q4i: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  V_: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Z4i: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hj: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindSkills3Peers | null = null;

/** Wire bindBindSkills3 peers once companions land. */
export function setBindBindSkills3Peers(next: BindBindSkills3Peers): void {
  peers = next;
}

/**
 * Bundle export `Tz` / internal `wz`.
 */
export function bindBindSkills3() {
  if (peers == null) {
    throw new Error("bindBindSkills3 peers are not configured");
  }

  return peers.e(() => {
    ((Z4i = peers.c()),
      peers.Qt(),
      (Q4i = peers.r(peers.Jg(), 1)),
      peers.Ho(),
      ($4i = peers.r(peers.o(), 1)),
      peers.DD(),
      peers.Vf(),
      peers.hj(),
      peers.OE(),
      peers.V_(),
      peers.Uf(),
      (Cz = [`skills`]));
  });
}
