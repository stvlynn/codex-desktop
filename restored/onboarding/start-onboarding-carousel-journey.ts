// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `vti`) / export `hG`.

export type StartOnboardingCarouselJourneyPeers = {
  resolveCarouselKind: (input: unknown) => unknown | null;
  journeyAtom: unknown;
  newJourneyId: () => string;
  persistJourney: (store: AtomStore, atom: unknown, journey: unknown) => void;
  journeyPersistAtom: unknown;
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
 * Start a carousel onboarding journey and persist it on the store.
 */
export type AtomStore = {
  set: (atom: unknown, value: unknown) => void;
};

export function startOnboardingCarouselJourney(
  store: AtomStore,
  input: unknown,
): { journeyId: string; carouselKind: unknown } | null {
  if (peers == null) {
    throw new Error("StartOnboardingCarouselJourney peers are not configured");
  }
  const carouselKind = peers.resolveCarouselKind(input);
  if (carouselKind == null) {
    store.set(peers.journeyAtom, null);
    return null;
  }
  const journey = { journeyId: peers.newJourneyId(), carouselKind };
  store.set(peers.journeyAtom, journey);
  peers.persistJourney(store, peers.journeyPersistAtom, journey);
  return journey;
}
