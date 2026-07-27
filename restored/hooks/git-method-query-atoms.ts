// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LFi`) / export `aW`.

export type CreateGitMethodQueryAtomsPeers = {
  $T: (...args: unknown[]) => unknown;
  N3n: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R3n: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  liveQuery: (...args: unknown[]) => unknown;
  rE: (...args: unknown[]) => unknown;
  tE: (...args: unknown[]) => unknown;
  z3n: (...args: unknown[]) => unknown;
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
 */
export function createGitMethodQueryAtoms({
  getOptions,
  getParams,
  method,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("createGitMethodQueryAtoms peers are not configured");
  }
  let r = peers.ka(
      peers.Q,
      (r) => {
        return peers.rE(
          method,
          {
            commonDir: r.commonDir,
            root: r.root,
          },
          getParams(r),
          peers.$T(r.hostConfig),
          r.hostConfig,
          {
            enabled: r.enabled,
            ...getOptions?.(r),
            retainRepoWatch: r.retainRepoWatch,
          },
        );
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    ),
    i = peers.Oa(
      peers.Q,
      (t, { get }) => {
        return (
          getOptions?.(t).liveQuery == null &&
            (t.retainRepoWatch ?? true) &&
            get(
              get(peers.z3n, {
                commonDir: t.commonDir,
                enabled: t.enabled,
                hostConfig: t.hostConfig,
                operationSource: t.operationSource,
                root: t.root,
              }),
            ),
          get(r, t)
        );
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    );
  return {
    fromMetadata$: i,
    fromTarget$: peers.Oa(
      peers.Q,
      (e, { get }) => {
        if (!e.enabled || e.lookup == null) return peers.tE();
        let n = get(peers.R3n, {
            cwd: e.lookup.cwd,
            enabled: e.enabled,
            hostConfig: e.lookup.hostConfig,
            operationSource: e.operationSource,
            watchForGitInit: false,
          }),
          r = n.data ?? null;
        if (r == null) return peers.N3n(n);
        let { lookup, ...rest } = e;
        return get(i, {
          ...rest,
          commonDir: r.commonDir,
          hostConfig: lookup.hostConfig,
          root: r.root,
        });
      },
      {
        excludeFieldsFromKey: ["operationSource"],
      },
    ),
    queryByMetadata$: r,
  };
}
