// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zes`) / export `uw`.

export type BindBindSkills2Peers = {
  Au: (...args: unknown[]) => unknown;
  Ges: (...args: unknown[]) => unknown;
  JR: (...args: unknown[]) => unknown;
  Jes: (...args: unknown[]) => unknown;
  Kes: (...args: unknown[]) => unknown;
  S_e: (...args: unknown[]) => unknown;
  Wl: (...args: unknown[]) => unknown;
  Xes: (...args: unknown[]) => unknown;
  YN: (...args: unknown[]) => unknown;
  Yes: (...args: unknown[]) => unknown;
  ZN: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ies: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  mes: (...args: unknown[]) => unknown;
  qes: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindSkills2Peers | null = null;

/** Wire bindBindSkills2 peers once companions land. */
export function setBindBindSkills2Peers(next: BindBindSkills2Peers): void {
  peers = next;
}

/**
 * Bundle export `uw` / internal `Zes`.
 */
export function bindBindSkills2() {
  if (peers == null) {
    throw new Error("bindBindSkills2 peers are not configured");
  }

  return peers.e(() => {
    Ges = peers.r(peers.JR(), 1), Kes = peers.r(peers.ZN(), 1), peers.Au(), peers.ies(), peers.YN(), peers.jf(), peers.mes(), qes = `/.agents/plugins/marketplace.json`, Jes = `/marketplace.json`, Yes = 6, Xes = [`computer-use@${peers.Wl}`, `${peers.S_e}@${peers.Wl}`, `chrome@${peers.Wl}`, `chrome-internal@${peers.Wl}`, `spreadsheets@openai-primary-runtime`, `presentations@openai-primary-runtime`];
  });
}
