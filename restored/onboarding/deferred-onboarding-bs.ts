// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wMl`) / export `Bs`.

export type DeferredOnboardingBsPeers = {
  BMl: (...args: unknown[]) => unknown;
};

let peers: DeferredOnboardingBsPeers | null = null;

/** Wire deferredOnboardingBs peers once companions land. */
export function setDeferredOnboardingBsPeers(next: DeferredOnboardingBsPeers): void {
  peers = next;
}

/**
 * Bundle export `Bs` / internal `wMl`.
 */
export function deferredOnboardingBs(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("deferredOnboardingBs peers are not configured");
  }

  e.set(peers.BMl, e => e.includes(t) ? e : [...e, t]);
}
