// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qXc`) / export `Ku`.

export type BindDeferredPluginsKuPeers = {
  Au: (...args: unknown[]) => unknown;
  DR: (...args: unknown[]) => unknown;
  F_e: (...args: unknown[]) => unknown;
  GXc: (...args: unknown[]) => unknown;
  HXc: (...args: unknown[]) => unknown;
  I_e: (...args: unknown[]) => unknown;
  KXc: (...args: unknown[]) => unknown;
  L_e: (...args: unknown[]) => unknown;
  N_e: (...args: unknown[]) => unknown;
  P_e: (...args: unknown[]) => unknown;
  R_e: (...args: unknown[]) => unknown;
  TR: (...args: unknown[]) => unknown;
  UXc: (...args: unknown[]) => unknown;
  VXc: (...args: unknown[]) => unknown;
  WXc: (...args: unknown[]) => unknown;
  Wl: (...args: unknown[]) => unknown;
  du: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fu: (...args: unknown[]) => unknown;
  z_e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredPluginsKuPeers | null = null;

/** Wire bindDeferredPluginsKu peers once companions land. */
export function setBindDeferredPluginsKuPeers(
  next: BindDeferredPluginsKuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ku` / internal `qXc`.
 */
export function bindDeferredPluginsKu() {
  if (peers == null) {
    throw new Error("bindDeferredPluginsKu peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.TR(),
      peers.DR(),
      (VXc = 100),
      (HXc = [`skill`, `connector`, `plugin`]),
      (UXc = [`firstParty`, `marketplace`, `custom`]),
      (WXc = new Set([`codex-official`, peers.Wl, `openai-primary-runtime`])),
      (GXc = new Set([...peers.WXc, peers.du, peers.fu])),
      (KXc = new Set([
        ...[
          peers.P_e,
          peers.F_e,
          peers.I_e,
          peers.R_e,
          peers.L_e,
          peers.N_e,
          peers.z_e,
          `chrome`,
          `chrome-dev`,
        ].map((e) => `${peers.e}@${peers.Wl}`),
        `documents@openai-primary-runtime`,
        `pdf@openai-primary-runtime`,
        `presentations@openai-primary-runtime`,
        `spreadsheets@openai-primary-runtime`,
      ])));
  });
}
