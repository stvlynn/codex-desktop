// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `LFi`) / export `aW`.

export type CreateGitMethodQueryAtomsPeers = {
  atomFamily: (
    store: unknown,
    factory: (scope: Record<string, unknown>) => unknown,
    opts?: { excludeFieldsFromKey?: string[] },
  ) => unknown;
  createLiveQuery: (
    method: unknown,
    roots: { commonDir: unknown; root: unknown },
    params: unknown,
    hostId: string,
    hostConfig: unknown,
    options: Record<string, unknown>,
  ) => unknown;
  getHostConfigId: (hostConfig: unknown) => string;
  rootStore: unknown;
};

let peers: CreateGitMethodQueryAtomsPeers | null = null;

/** Wire createGitMethodQueryAtoms peers once companions land. */
export function setCreateGitMethodQueryAtomsPeers(
  next: CreateGitMethodQueryAtomsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aW` / internal `LFi`.
 * Build git method query atoms scoped by host/repo roots.
 */
export type GitMethodQueryFactoryConfig = {
  getOptions?: (scope: Record<string, unknown>) => Record<string, unknown>;
  getParams: (scope: Record<string, unknown>) => unknown;
  method: unknown;
};

export type GitMethodQueryOptionsInput = Record<string, unknown>;

export function createGitMethodQueryAtoms(
  config: GitMethodQueryFactoryConfig,
): unknown {
  if (peers == null) {
    throw new Error("CreateGitMethodQueryAtoms peers are not configured");
  }
  return peers.atomFamily(
    peers.rootStore,
    (scope) =>
      peers!.createLiveQuery(
        config.method,
        { commonDir: scope.commonDir, root: scope.root },
        config.getParams(scope),
        peers!.getHostConfigId(scope.hostConfig),
        scope.hostConfig,
        {
          enabled: scope.enabled,
          ...config.getOptions?.(scope),
          retainRepoWatch: scope.retainRepoWatch,
        },
      ),
    { excludeFieldsFromKey: ["operationSource"] },
  );
}

export function mergeGitLiveQueryOptions(
  base: GitMethodQueryOptionsInput,
  extra?: GitMethodQueryOptionsInput,
): GitMethodQueryOptionsInput {
  return { ...base, ...extra };
}

export function ensureGitMethodQueryAtomsInit(): void {}
export function ensureGitRepoWatchAtomsInit(): void {}
