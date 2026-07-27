// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `IGr`) / export `UX`.

export type UseIsLoginMethodAvailablePeers = {
  useAtomValue: (atom: unknown) => { available?: boolean } | null | undefined;
  loginMethodAvailableAtom: unknown;
};

let peers: UseIsLoginMethodAvailablePeers | null = null;

/** Wire login-method availability peers once companions land. */
export function setUseIsLoginMethodAvailablePeers(
  next: UseIsLoginMethodAvailablePeers,
): void {
  peers = next;
}

/**
 * Bundle export `UX` / internal `IGr`.
 * Whether a login/auth method is available.
 */
export function useIsLoginMethodAvailable(): boolean {
  if (peers == null) {
    throw new Error("UseIsLoginMethodAvailable peers are not configured");
  }
  const data = peers.useAtomValue(peers.loginMethodAvailableAtom);
  return data?.available ?? false;
}
