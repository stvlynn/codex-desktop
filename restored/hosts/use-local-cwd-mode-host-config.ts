// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `s5n`) / export `U4`.

export type UseLocalCwdModeHostConfigPeers = {
  useAtomValue: (atom: unknown) => unknown;
  activeWorkspaceRootAtom: unknown;
  isWorkspaceRootLoadingAtom: unknown;
  resolveHostConfig: (hostId: string) => unknown;
};

let peers: UseLocalCwdModeHostConfigPeers | null = null;

/** Wire useLocalCwdModeHostConfig peers once companions land. */
export function setUseLocalCwdModeHostConfigPeers(
  next: UseLocalCwdModeHostConfigPeers,
): void {
  peers = next;
}

/**
 * Bundle export `U4` / internal `s5n`.
 * Resolve local cwd + host config under preserve-null cwd modes.
 */
export function useLocalCwdModeHostConfig(
  cwd: string | null | undefined,
  options?: { hostId?: string; cwdMode?: "preserve-null" | string },
): {
  cwd: string | null | undefined;
  hostConfig: unknown;
  hostId: string;
  waitingForActiveRoot: boolean;
} {
  if (peers == null) {
    throw new Error("UseLocalCwdModeHostConfig peers are not configured");
  }
  const hostId = options?.hostId ?? "local";
  const activeRoot = peers.useAtomValue(peers.activeWorkspaceRootAtom);
  const isLoading = peers.useAtomValue(
    peers.isWorkspaceRootLoadingAtom,
  ) as boolean;
  const preserveNull = options?.cwdMode === "preserve-null";
  const waitingForActiveRoot =
    !preserveNull && cwd == null && Boolean(isLoading);
  const resolvedCwd = preserveNull
    ? cwd
    : (cwd ?? (activeRoot as string | null));
  return {
    cwd: resolvedCwd,
    hostConfig: peers.resolveHostConfig(hostId),
    hostId,
    waitingForActiveRoot,
  };
}
