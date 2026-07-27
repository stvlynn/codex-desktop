// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GE`) / export `d4`.

export type AppInfoQueryAtomPeers = {
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  WE: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
};

let peers: AppInfoQueryAtomPeers | null = null;

/** Wire appInfoQueryAtom peers once companions land. */
export function setAppInfoQueryAtomPeers(next: AppInfoQueryAtomPeers): void {
  peers = next;
}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureAppInfoQueryAtomInit(): void {}

/**
 * Bundle export `d4` / internal `GE`.
 */
export function appInfoQueryAtom() {
  if (peers == null) {
    throw new Error("appInfoQueryAtom peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers._p(),
      peers.ed(),
      peers.Uf(),
      (WE = peers.Ia(peers.Q, () => ({
        queryKey: [`app-info`],
        queryFn: () => peers.gp.appInfo.get(),
        staleTime: peers.Hf.INFINITE,
      }))));
  });
}
