// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NE`) / export `q4`.

export type BindBinddeferredUiQ43Peers = {
  AE: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  O5n: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  u5n: (...args: unknown[]) => unknown;
  z5n: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredUiQ43Peers | null = null;

/** Wire bindBinddeferredUiQ43 peers once companions land. */
export function setBindBinddeferredUiQ43Peers(
  next: BindBinddeferredUiQ43Peers,
): void {
  peers = next;
}

/**
 * Bundle export `q4` / internal `NE`.
 */
export function bindBinddeferredUiQ43() {
  if (peers == null) {
    throw new Error("bindBinddeferredUiQ43 peers are not configured");
  }

  return peers.ka(peers.Q, (e, { queryClient: t }) => ({
    queryKey: [...peers.AE, e],
    queryFn: async () => {
      try {
        return await peers.u5n(t, e, null, !0);
      } catch (e) {
        return (
          peers.Wf.error(`Failed to load config`, {
            safe: {},
            sensitive: {
              error: e,
            },
          }),
          peers.z5n
        );
      }
    },
    staleTime: peers.Hf.FIVE_MINUTES,
    select: ({ config: e, layers: t }) => ({
      config: e,
      configWriteTarget: peers.O5n(t),
    }),
  }));
}
