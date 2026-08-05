// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H$l`) / export `Pi`.

export type HasSeenGiftCreditsHomeBannerPeers = {
  Ap: (...args: unknown[]) => unknown;
  B$l: (...args: unknown[]) => unknown;
  V$l: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
};

let peers: HasSeenGiftCreditsHomeBannerPeers | null = null;

/** Wire hasSeenGiftCreditsHomeBanner peers once companions land. */
export function setHasSeenGiftCreditsHomeBannerPeers(
  next: HasSeenGiftCreditsHomeBannerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pi` / internal `H$l`.
 */
export function hasSeenGiftCreditsHomeBanner() {
  if (peers == null) {
    throw new Error("hasSeenGiftCreditsHomeBanner peers are not configured");
  }
  return peers.e(() => {
    (peers.Ap(),
      (B$l = peers.kp(`has-seen-gift-credits-home-banner`, !1)),
      (V$l = peers.kp(`gift-credits-profile-coachmark-pending`, !1)));
  });
}
