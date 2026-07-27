// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uMl`) / export `Ys`.

export type BindMicrosoftPeers = {
  BPc: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  LPc: (...args: unknown[]) => unknown;
  Njl: (...args: unknown[]) => unknown;
  Rjl: (...args: unknown[]) => unknown;
  T8: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  alc: (...args: unknown[]) => unknown;
  cMl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
  lMl: (...args: unknown[]) => unknown;
  oMl: (...args: unknown[]) => unknown;
  pjl: (...args: unknown[]) => unknown;
  qjl: (...args: unknown[]) => unknown;
  sMl: (...args: unknown[]) => unknown;
  w8: (...args: unknown[]) => unknown;
};

let peers: BindMicrosoftPeers | null = null;

/** Wire bindMicrosoft peers once companions land. */
export function setBindMicrosoftPeers(next: BindMicrosoftPeers): void {
  peers = next;
}

/**
 * Bundle export `Ys` / internal `uMl`.
 */
export function bindMicrosoft() {
  if (peers == null) {
    throw new Error("bindMicrosoft peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Gf(), peers.alc(), peers.Njl(), peers.pjl(), peers.LPc(), peers.BPc(), peers.Rjl(), peers.qjl(), sMl = `Conversational onboarding start was cancelled`, cMl = 2e3, lMl = {
      app: null,
      phase: `failed`
    }, w8 = new WeakMap(), T8 = peers.Ta(peers.j2, peers.oMl());
  });
}
