// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y8n`) / export `Q4`.

export type BindHomeDirectoryQueryAtomPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindHomeDirectoryQueryAtomPeers | null = null;

/** Wire bindHomeDirectoryQueryAtom peers once companions land. */
export function setBindHomeDirectoryQueryAtomPeers(
  next: BindHomeDirectoryQueryAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Q4` / internal `Y8n`.
 */
export function bindHomeDirectoryQueryAtom() {
  if (peers == null) {
    throw new Error("bindHomeDirectoryQueryAtom peers are not configured");
  }

  return peers.tp(peers.Q, `home-directory`, () => ({
    staleTime: peers.Hf.FIVE_SECONDS,
  }));
}

let cachedHomeDirectoryQueryAtom: ReturnType<
  typeof bindHomeDirectoryQueryAtom
> | null = null;

/**
 * `Q4` is consumed directly as an atom reference (`useAppScopeAtomValue(Q4,
 * …)`), not as a call — proxy each property access through
 * `bindHomeDirectoryQueryAtom()`, memoized after first resolution once peers
 * are wired, so the atom object keeps a stable identity.
 */
export const homeDirectoryQueryAtom: ReturnType<
  typeof bindHomeDirectoryQueryAtom
> = new Proxy({} as ReturnType<typeof bindHomeDirectoryQueryAtom>, {
  get(_target, prop) {
    if (cachedHomeDirectoryQueryAtom == null) {
      cachedHomeDirectoryQueryAtom = bindHomeDirectoryQueryAtom();
    }
    return cachedHomeDirectoryQueryAtom[
      prop as keyof typeof cachedHomeDirectoryQueryAtom
    ];
  },
});

/** Bundle path ESM init retained as no-op. */
export function ensureHomeDirectoryQueriesInit(): void {}
