// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IZ`) / export `Yb`.

export type BindUsageSettingsPeers = {
  Bit: (...args: unknown[]) => unknown;
  C_s: (...args: unknown[]) => unknown;
  DN: (...args: unknown[]) => unknown;
  E_s: (...args: unknown[]) => unknown;
  FZ: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  S_s: (...args: unknown[]) => unknown;
  T_s: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  __s: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  b_s: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  d_s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  f_s: (...args: unknown[]) => unknown;
  g_s: (...args: unknown[]) => unknown;
  hE: (...args: unknown[]) => unknown;
  h_s: (...args: unknown[]) => unknown;
  kgs: (...args: unknown[]) => unknown;
  m_s: (...args: unknown[]) => unknown;
  p_s: (...args: unknown[]) => unknown;
  v_s: (...args: unknown[]) => unknown;
  w_s: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
  x_s: (...args: unknown[]) => unknown;
  y_s: (...args: unknown[]) => unknown;
};

let peers: BindUsageSettingsPeers | null = null;

/** Wire bindUsageSettings peers once companions land. */
export function setBindUsageSettingsPeers(next: BindUsageSettingsPeers): void {
  peers = next;
}

/**
 * Bundle export `Yb` / internal `IZ`.
 */
export function bindUsageSettings() {
  if (peers == null) {
    throw new Error("bindUsageSettings peers are not configured");
  }

  return peers.e(() => {
    FZ = peers.c(), peers.Qt(), peers.Ho(), peers.xM(), peers.DN(), peers.aN(), peers.ed(), peers.Fh(), peers.Bit(), peers.Uf(), peers.Wh(), peers.kgs(), peers.hE(), d_s = [`usage-settings`, `auto-top-up`], f_s = [`usage-settings`, `auto-top-up-discount-offer`], p_s = [...peers.d_s, `include-payment-method`], m_s = [`usage-settings`, `payment-methods`], h_s = [`usage-settings`, `accounts-check`], g_s = [`usage-settings`, `auto-top-up-pricing`], __s = [`usage-settings`, `plan-pricing`], v_s = [`usage-settings`, `subscription-update-preview`], y_s = [`usage-settings`, `workspace-monthly-usage`], b_s = [`accounts`, `settings`], x_s = [`usage-settings`, `workspace-admin-requests`], S_s = 100, C_s = `US`, w_s = `Current user monthly cap is not available.`, T_s = [`usage-settings`, `add-credits-nudge-email`], E_s = `v4-2023-04-27`;
  });
}
