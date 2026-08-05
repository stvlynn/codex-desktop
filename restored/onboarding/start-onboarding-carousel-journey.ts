// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vti`) / export `hG`.

export type StartOnboardingCarouselJourneyPeers = {
  QZn: (...args: unknown[]) => unknown;
  Tti: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  bP: (...args: unknown[]) => unknown;
  uy: (...args: unknown[]) => unknown;
};

let peers: StartOnboardingCarouselJourneyPeers | null = null;

/** Wire startOnboardingCarouselJourney peers once companions land. */
export function setStartOnboardingCarouselJourneyPeers(
  next: StartOnboardingCarouselJourneyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hG` / internal `vti`.
 */
export function startOnboardingCarouselJourney(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("startOnboardingCarouselJourney peers are not configured");
  }

  let n = peers.Tti(t);
  if (n == null) return (e.set(peers.bP, null), null);
  let r = {
    journeyId: peers.uy(),
    carouselKind: n,
  };
  return (e.set(peers.bP, r), peers.Ub(e, peers.QZn, r), r);
}
