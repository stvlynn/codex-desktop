// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VM`) / export `GY`.

export type BindBindChatgpt2Peers = {
  $E: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  BM: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DJr: (...args: unknown[]) => unknown;
  DYr: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  IM: (...args: unknown[]) => unknown;
  Kg: (...args: unknown[]) => unknown;
  MJr: (...args: unknown[]) => unknown;
  ND: (...args: unknown[]) => unknown;
  OYr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PM: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  RM: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fM: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  lp: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oYr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rYr: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
  yJr: (...args: unknown[]) => unknown;
};

let peers: BindBindChatgpt2Peers | null = null;

/** Wire bindBindChatgpt2 peers once companions land. */
export function setBindBindChatgpt2Peers(next: BindBindChatgpt2Peers): void {
  peers = next;
}

/**
 * Bundle export `GY` / internal `VM`.
 */
export function bindBindChatgpt2() {
  if (peers == null) {
    throw new Error("bindBindChatgpt2 peers are not configured");
  }

  return peers.e(() => {
    ((DYr = peers.c()),
      peers.Qt(),
      peers.Ho(),
      (BM = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.DD(),
      peers.Vf(),
      peers.Kg(),
      peers.fM(),
      peers.xM(),
      peers.yJr(),
      peers.ih(),
      peers.DJr(),
      peers.lp(),
      peers.ND(),
      peers.MJr(),
      peers.IE(),
      peers.yE(),
      peers.PM(),
      peers.rYr(),
      peers.ed(),
      peers.Gf(),
      peers.oYr(),
      peers.IM(),
      peers.RM(),
      (OYr = peers.Oa(peers.Q, (e, { get: t }) =>
        t(peers.$E).includes(peers.e),
      )));
  });
}
