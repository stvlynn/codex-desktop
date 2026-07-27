// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V_e`) / export `Pht`.

export type BindBindSitesPeers = {
  B_e: (...args: unknown[]) => unknown;
  F_e: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  I_e: (...args: unknown[]) => unknown;
  L_e: (...args: unknown[]) => unknown;
  N_e: (...args: unknown[]) => unknown;
  P_e: (...args: unknown[]) => unknown;
  R_e: (...args: unknown[]) => unknown;
  S_e: (...args: unknown[]) => unknown;
  Wl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  k_e: (...args: unknown[]) => unknown;
  s_e: (...args: unknown[]) => unknown;
  z_e: (...args: unknown[]) => unknown;
};

let peers: BindBindSitesPeers | null = null;

/** Wire bindBindSites peers once companions land. */
export function setBindBindSitesPeers(next: BindBindSitesPeers): void {
  peers = next;
}

/**
 * Bundle export `Pht` / internal `V_e`.
 */
export function bindBindSites() {
  if (peers == null) {
    throw new Error("bindBindSites peers are not configured");
  }

  return peers.e(() => {
    (peers.s_e(),
      peers.k_e(),
      (Wl = `openai-bundled`),
      (N_e = `sites`),
      (P_e = peers.S_e),
      (F_e = `chrome-internal`),
      (I_e = `computer-use`),
      (L_e = `record-and-replay`),
      (R_e = `latex`),
      (z_e = `visualize`),
      (B_e = new Map([
        [peers.N_e, peers.Fl.SITE_CREATOR_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED],
        [peers.P_e, peers.Fl.BROWSER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED],
        [peers.I_e, peers.Fl.COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED],
      ])));
  });
}
