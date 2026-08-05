// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gsc`) / export `Qf`.

export type OnboardingChecklistPeers = {
  Bsc: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Wsc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: OnboardingChecklistPeers | null = null;

/** Wire onboardingChecklist peers once companions land. */
export function setOnboardingChecklistPeers(
  next: OnboardingChecklistPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qf` / internal `Gsc`.
 */
export function onboardingChecklist() {
  if (peers == null) {
    throw new Error("onboardingChecklist peers are not configured");
  }
  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.Bsc(),
      (Wsc = peers.Ta(peers.Q, `not-determined`)));
  });
}
