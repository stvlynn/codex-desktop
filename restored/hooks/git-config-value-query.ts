// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uxo`) / export `xA`.

export type BindGitConfigValueFromTargetAtomPeers = {
  Hxo: (...args: unknown[]) => unknown;
};

let peers: BindGitConfigValueFromTargetAtomPeers | null = null;

/** Wire bindGitConfigValueFromTargetAtom peers once companions land. */
export function setBindGitConfigValueFromTargetAtomPeers(
  next: BindGitConfigValueFromTargetAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xA` / internal `Uxo`.
 */
export function bindGitConfigValueFromTargetAtom() {
  if (peers == null) {
    throw new Error(
      "bindGitConfigValueFromTargetAtom peers are not configured",
    );
  }

  return peers.Hxo.fromTarget$;
}
let cachedGitConfigValueFromTargetAtom: ReturnType<
  typeof bindGitConfigValueFromTargetAtom
> | null = null;

/**
 * `xA` is consumed directly as an atom reference (`useAppScopeAtomValue(xA,
 * …)`), not as a call — proxy each property access through
 * `bindGitConfigValueFromTargetAtom()`, memoized after first resolution once
 * peers are wired, so the atom object keeps a stable identity.
 */
export const gitConfigValueFromTargetAtom: ReturnType<
  typeof bindGitConfigValueFromTargetAtom
> = new Proxy({} as ReturnType<typeof bindGitConfigValueFromTargetAtom>, {
  get(_target, prop) {
    if (cachedGitConfigValueFromTargetAtom == null) {
      cachedGitConfigValueFromTargetAtom = bindGitConfigValueFromTargetAtom();
    }
    return cachedGitConfigValueFromTargetAtom[
      prop as keyof typeof cachedGitConfigValueFromTargetAtom
    ];
  },
});

/** Bundle path ESM init retained as no-op. */
export function ensureGitConfigValueQueryInit(): void {}
