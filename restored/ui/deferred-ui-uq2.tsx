// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ej`) / export `uQ`.

export type BindBindDeferredUiUQ2Peers = {
  Hf: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  Xf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  latest_turn_status_display: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  turn_status: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiUQ2Peers | null = null;

/** Wire bindBindDeferredUiUQ2 peers once companions land. */
export function setBindBindDeferredUiUQ2Peers(next: BindBindDeferredUiUQ2Peers): void {
  peers = next;
}

/**
 * Bundle export `uQ` / internal `ej`.
 */
export function bindBindDeferredUiUQ2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiUQ2 peers are not configured");
  }

  return peers.Ia(peers.Q, () => ({
    enabled: !0,
    placeholderData: peers.P,
    queryFn: async () => {
      try {
        return (
          await peers.Uh.safeGet(`/wham/tasks/list`, {
            parameters: {
              query: {
                limit: 20,
                task_filter: `current`,
              },
            },
          })
        ).items;
      } catch (e) {
        if (
          peers.e instanceof peers.Xf &&
          (peers.e.status === 401 ||
            peers.e.status === 403 ||
            peers.e.status === 404)
        )
          return [];
        throw peers.e;
      }
    },
    queryKey: [`tasks`, 20, `current`],
    refetchInterval: (e) =>
      peers.e.state.data?.some((e) => {
        let t =
          peers.e.task_status_display?.latest_turn_status_display?.turn_status;
        return t === `pending` || t === `in_progress`;
      })
        ? 15e3
        : 6e4,
    refetchIntervalInBackground: !0,
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
