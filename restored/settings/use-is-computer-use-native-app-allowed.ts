// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `Sic`) / export `Up`.

export type UseIsComputerUseNativeAppAllowedPeers = {
  useGate: (gate: unknown) => boolean;
  computerUseNativeAppGate: unknown;
  statusAtom: unknown;
  useAtomValue: (atom: unknown) => { status?: string };
};

let peers: UseIsComputerUseNativeAppAllowedPeers | null = null;

/** Wire computer-use native-app gate peers once companions land. */
export function setUseIsComputerUseNativeAppAllowedPeers(
  next: UseIsComputerUseNativeAppAllowedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Up` / internal `Sic`.
 * Whether computer-use native app is allowed (gate + status).
 */
export function useIsComputerUseNativeAppAllowed(): boolean {
  if (peers == null) {
    throw new Error(
      "UseIsComputerUseNativeAppAllowed peers are not configured",
    );
  }
  const gated = peers.useGate(peers.computerUseNativeAppGate);
  const status = peers.useAtomValue(peers.statusAtom);
  return gated && (status.status === "allowed" || status.status === "loading");
}
