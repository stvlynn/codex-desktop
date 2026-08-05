// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ujr`) / export `HQ`.

export type BindBindCodexMobileMfaSetupRequired2Peers = {
  Hjr: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  mjr: (...args: unknown[]) => unknown;
};

let peers: BindBindCodexMobileMfaSetupRequired2Peers | null = null;

/** Wire bindBindCodexMobileMfaSetupRequired2 peers once companions land. */
export function setBindBindCodexMobileMfaSetupRequired2Peers(
  next: BindBindCodexMobileMfaSetupRequired2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `HQ` / internal `Ujr`.
 */
export function bindBindCodexMobileMfaSetupRequired2() {
  if (peers == null) {
    throw new Error(
      "bindBindCodexMobileMfaSetupRequired2 peers are not configured",
    );
  }

  return peers.Ia(peers.Q, ({ get: e }) => ({
    enabled: e(peers.Hjr).data === `required`,
    queryKey: [`remote-control-mfa-enabled`],
    queryFn: peers.mjr,
    refetchOnWindowFocus: `always`,
    staleTime: 0,
  }));
}
