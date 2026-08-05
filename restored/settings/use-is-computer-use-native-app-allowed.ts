// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sic`) / export `Up`.

export type UseIsComputerUseNativeAppAllowedPeers = {
  Y: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  qln: (...args: unknown[]) => unknown;
  wic: (...args: unknown[]) => unknown;
};

let peers: UseIsComputerUseNativeAppAllowedPeers | null = null;

/** Wire useIsComputerUseNativeAppAllowed peers once companions land. */
export function setUseIsComputerUseNativeAppAllowedPeers(
  next: UseIsComputerUseNativeAppAllowedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Up` / internal `Sic`.
 */
export function useIsComputerUseNativeAppAllowed() {
  if (peers == null) {
    throw new Error(
      "useIsComputerUseNativeAppAllowed peers are not configured",
    );
  }

  let e = peers.kh(peers.wic),
    t = peers.Y(peers.qln);
  return e && (t.status === `allowed` || t.status === `loading`);
}
