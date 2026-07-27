// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `_Ko`) / export `yD`.

export type UseCwdHostConfigPairPeers = {
  runLookup: (options: {
    enabled: boolean;
    operationSource: unknown;
    lookup: { cwd: unknown; hostConfig: unknown } | null;
    retainRepoWatch: unknown;
  }) => unknown;
};

let peers: UseCwdHostConfigPairPeers | null = null;

/** Wire useCwdHostConfigPair peers once companions land. */
export function setUseCwdHostConfigPairPeers(
  next: UseCwdHostConfigPairPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yD` / internal `_Ko`.
 * Build cwd+hostConfig lookup options and run the paired query.
 */
export function useCwdHostConfigPair(
  cwd: unknown,
  hostConfig: unknown,
  operationSource: unknown,
  options?: { enabled?: boolean; retainRepoWatch?: unknown },
): unknown {
  if (peers == null) {
    throw new Error("UseCwdHostConfigPair peers are not configured");
  }
  const enabled = options?.enabled ?? true;
  const lookup = cwd == null ? null : { cwd, hostConfig };
  return peers.runLookup({
    enabled,
    operationSource,
    lookup,
    retainRepoWatch: options?.retainRepoWatch,
  });
}
