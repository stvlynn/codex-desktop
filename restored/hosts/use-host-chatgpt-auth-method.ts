// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `kYr`) / export `WY`.

export type UseHostChatgptAuthMethodPeers = {
  useAtomValue: (atom: unknown) => unknown;
  selectedHostIdAtom: unknown;
  resolveHostConfig: (
    hostId: unknown,
  ) => { authMethod?: string } | null | undefined;
};

let peers: UseHostChatgptAuthMethodPeers | null = null;

/** Wire useHostChatgptAuthMethod peers once companions land. */
export function setUseHostChatgptAuthMethodPeers(
  next: UseHostChatgptAuthMethodPeers,
): void {
  peers = next;
}

/**
 * Bundle export `WY` / internal `kYr`.
 * Detect whether a host config uses ChatGPT auth.
 */
export function useHostChatgptAuthMethod(options?: {
  hostId?: string | null;
}): {
  authMethod: string | null | undefined;
  isChatgpt: boolean;
  hostId: unknown;
} {
  if (peers == null) {
    throw new Error("UseHostChatgptAuthMethod peers are not configured");
  }
  const selectedHostId = peers.useAtomValue(peers.selectedHostIdAtom);
  const hostId = options?.hostId ?? selectedHostId;
  const config = peers.resolveHostConfig(hostId);
  const authMethod = config?.authMethod ?? null;
  return {
    authMethod,
    isChatgpt: authMethod === "chatgpt",
    hostId,
  };
}
