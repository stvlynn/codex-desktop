// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jN`) / export `kq`.

export type BindLastCompletedOnboardingPeers = {
  Au: (...args: unknown[]) => unknown;
  D4r: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  E4r: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  T4r: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  V2r: (...args: unknown[]) => unknown;
  V_: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Y2r: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  m4r: (...args: unknown[]) => unknown;
  n4r: (...args: unknown[]) => unknown;
  pA: (...args: unknown[]) => unknown;
  w4r: (...args: unknown[]) => unknown;
};

let peers: BindLastCompletedOnboardingPeers | null = null;

/** Wire bindLastCompletedOnboarding peers once companions land. */
export function setBindLastCompletedOnboardingPeers(
  next: BindLastCompletedOnboardingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kq` / internal `jN`.
 */
export function bindLastCompletedOnboarding() {
  if (peers == null) {
    throw new Error("bindLastCompletedOnboarding peers are not configured");
  }

  return peers.e(() => {
    ((w4r = peers.c()),
      peers.fr(),
      peers.Ho(),
      peers.Au(),
      peers.DD(),
      peers.Vf(),
      peers.V2r(),
      peers.pA(),
      peers.IE(),
      peers.Y2r(),
      peers.ed(),
      peers.OE(),
      peers.K_(),
      peers.V_(),
      peers.Fh(),
      peers.Gf(),
      peers.n4r(),
      peers.m4r(),
      (T4r = {
        isSet: !1,
        value: null,
      }),
      (E4r = peers.Ta(peers.Q, () => ({}))),
      (D4r = peers.Oa(
        peers.Q,
        (e, { get: t }) => t(peers.bD, peers.e)?.at(-1) ?? null,
      )));
  });
}
