// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A5s`) / export `dm`.

export type BindAppIcon3dMeshesDcozGRqSBinPeers = {
  Ap: (...args: unknown[]) => unknown;
  C5s: (...args: unknown[]) => unknown;
  D5s: (...args: unknown[]) => unknown;
  E5s: (...args: unknown[]) => unknown;
  O5s: (...args: unknown[]) => unknown;
  S5s: (...args: unknown[]) => unknown;
  T5s: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  g1: (...args: unknown[]) => unknown;
  k5s: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  w5s: (...args: unknown[]) => unknown;
  zZ: (...args: unknown[]) => unknown;
};

let peers: BindAppIcon3dMeshesDcozGRqSBinPeers | null = null;

/** Wire bindAppIcon3dMeshesDcozGRqSBin peers once companions land. */
export function setBindAppIcon3dMeshesDcozGRqSBinPeers(
  next: BindAppIcon3dMeshesDcozGRqSBinPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dm` / internal `A5s`.
 */
export function bindAppIcon3dMeshesDcozGRqSBin() {
  if (peers == null) {
    throw new Error("bindAppIcon3dMeshesDcozGRqSBin peers are not configured");
  }

  return peers.e(() => {
    (peers.fr(),
      (S5s = peers.r(peers.o(), 1)),
      peers.zZ(),
      peers.Ap(),
      peers.ap(),
      (C5s = 45 * 6e4),
      (w5s = 10080 * 60 * 1e3),
      (T5s = 128),
      (E5s = 3600 * 1e3),
      (D5s = 3600 * 1e3),
      (O5s = 1440 * 60 * 1e3),
      (k5s = peers.kp(`fast-mode-personalized-estimate`, null)),
      (g1 = {
        failedAtMs: null,
        inFlight: null,
        lastStartedBucket: null,
      }));
  });
}
