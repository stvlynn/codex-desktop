// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FN`) / export `sq`.

export type BindMicrosoft2Peers = {
  DD: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  IM: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  MJr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PM: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RM: (...args: unknown[]) => unknown;
  VM: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  jYr: (...args: unknown[]) => unknown;
  l3r: (...args: unknown[]) => unknown;
  params: (...args: unknown[]) => unknown;
  qE: (...args: unknown[]) => unknown;
  s3r: (...args: unknown[]) => unknown;
  serviceTier: (...args: unknown[]) => unknown;
  u3r: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
  yD: (...args: unknown[]) => unknown;
};

let peers: BindMicrosoft2Peers | null = null;

/** Wire bindMicrosoft2 peers once companions land. */
export function setBindMicrosoft2Peers(next: BindMicrosoft2Peers): void {
  peers = next;
}

/**
 * Bundle export `sq` / internal `FN`.
 */
export function bindMicrosoft2() {
  if (peers == null) {
    throw new Error("bindMicrosoft2 peers are not configured");
  }

  return peers.e(() => {
    l3r = peers.c(), peers.Hb(), peers.Ho(), peers.DD(), peers.Vf(), peers.xM(), peers.MJr(), peers.jYr(), peers.Kb(), peers.IE(), peers.PM(), peers.ed(), peers.s3r(), peers.Gf(), peers.IM(), peers.qE(), peers.VM(), peers.RM(), u3r = peers.Oa(peers.Q, (e, {
      get: t
    }) => t(peers.yD, peers.e)?.params.serviceTier);
  });
}
