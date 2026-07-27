// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kg`) / export `Fst`.

export type BindBindWindowTitlePeers = {
  C_t: (...args: unknown[]) => unknown;
  D_t: (...args: unknown[]) => unknown;
  E_t: (...args: unknown[]) => unknown;
  Gg: (...args: unknown[]) => unknown;
  O_t: (...args: unknown[]) => unknown;
  S_t: (...args: unknown[]) => unknown;
  T_t: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  w_t: (...args: unknown[]) => unknown;
};

let peers: BindBindWindowTitlePeers | null = null;

/** Wire bindBindWindowTitle peers once companions land. */
export function setBindBindWindowTitlePeers(next: BindBindWindowTitlePeers): void {
  peers = next;
}

/**
 * Bundle export `Fst` / internal `Kg`.
 */
export function bindBindWindowTitle() {
  if (peers == null) {
    throw new Error("bindBindWindowTitle peers are not configured");
  }

  return peers.e(() => {
    S_t = `Please continue this conversation on the window where it was started.`, Gg = 3e4, C_t = 2e3, w_t = 5e3, T_t = 12e5, E_t = 3e5, D_t = `default`, O_t = `explicitRequestOnly`;
  });
}
