// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R2i`) / export `$z`.

export type BindAppConnectOauthPluginInstallResumeByStateV1Peers = {
  Bit: (...args: unknown[]) => unknown;
  F2i: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I2i: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  L2i: (...args: unknown[]) => unknown;
  M2i: (...args: unknown[]) => unknown;
  N2i: (...args: unknown[]) => unknown;
  P2i: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  j_: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
  yz: (...args: unknown[]) => unknown;
};

let peers: BindAppConnectOauthPluginInstallResumeByStateV1Peers | null = null;

/** Wire bindAppConnectOauthPluginInstallResumeByStateV1 peers once companions land. */
export function setBindAppConnectOauthPluginInstallResumeByStateV1Peers(
  next: BindAppConnectOauthPluginInstallResumeByStateV1Peers,
): void {
  peers = next;
}

/**
 * Bundle export `$z` / internal `R2i`.
 */
export function bindAppConnectOauthPluginInstallResumeByStateV1() {
  if (peers == null) {
    throw new Error(
      "bindAppConnectOauthPluginInstallResumeByStateV1 peers are not configured",
    );
  }

  return peers.e(() => {
    ((M2i = peers.c()),
      peers.Hb(),
      peers.Qt(),
      peers.Ho(),
      peers.Vf(),
      peers.j_(),
      peers.Kb(),
      peers.tP(),
      peers.yE(),
      peers.ed(),
      peers.K_(),
      peers.Bit(),
      peers.Gf(),
      peers.od(),
      peers.Im(),
      peers.Wh(),
      (N2i = {}),
      (P2i = crypto.randomUUID()),
      (F2i = new Set()),
      (I2i = `app-connect-oauth-plugin-install-resume-by-state-v1`),
      (yz = peers.Ta(peers.Q, peers.N2i)),
      (L2i = peers.Pm(peers.I2i, peers.N2i)));
  });
}
