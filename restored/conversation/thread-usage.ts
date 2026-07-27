// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_$l`) / export `Bi`.

export type BindThreadUsagePeers = {
  $A: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PZ: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QA: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  Xf: (...args: unknown[]) => unknown;
  aD: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  g$l: (...args: unknown[]) => unknown;
  h$l: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  m$l: (...args: unknown[]) => unknown;
  p$l: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
};

let peers: BindThreadUsagePeers | null = null;

/** Wire bindThreadUsage peers once companions land. */
export function setBindThreadUsagePeers(next: BindThreadUsagePeers): void {
  peers = next;
}

/**
 * Bundle export `Bi` / internal `_$l`.
 */
export function bindThreadUsage() {
  if (peers == null) {
    throw new Error("bindThreadUsage peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.DD(),
      peers.ed(),
      peers.K_(),
      peers.$A(),
      peers.Uf(),
      peers.PZ(),
      peers.Wh(),
      peers.qx(),
      peers.Qf(),
      (p$l = 50),
      (m$l = 1e6),
      (h$l = peers.Oa(
        peers.Q,
        (e, { get: t }) =>
          t(
            peers.aD,
            peers.e == null ? peers.H_ : (t(peers.rD, peers.e) ?? `local`),
          ).slice(0, peers.p$l),
        {
          isEqual: peers.QA,
        },
      )),
      (g$l = peers.ka(peers.Q, ({ accountId: e, conversationIds: t }) => ({
        enabled: peers.e != null && t.length > 0,
        queryKey: [`thread-usage`, peers.e, ...t],
        queryFn: async ({ signal: e }) => {
          try {
            return await peers.Uh.safePost(`/wham/usage/thread_usage/query`, {
              requestBody: {
                thread_ids: t,
              },
              signal: peers.e,
            });
          } catch (e) {
            if (
              peers.e instanceof peers.Xf &&
              [401, 403, 404, 503].includes(peers.e.status)
            )
              return null;
            throw peers.e;
          }
        },
        select: (e) =>
          peers.e == null
            ? null
            : new Map(
                peers.e.threads.flatMap((e) =>
                  peers.e.estimated_usage_credits_micros == null ||
                  peers.e.estimated_usage_usd_micros == null
                    ? []
                    : [
                        [
                          peers.e.thread_id,
                          {
                            conversationId: peers.e.thread_id,
                            costUsd:
                              peers.e.estimated_usage_usd_micros / peers.m$l,
                            creditsUsed:
                              peers.e.estimated_usage_credits_micros /
                              peers.m$l,
                          },
                        ],
                      ],
                ),
              ),
        retry: !1,
        refetchInterval: (e) =>
          t.length === 1 || peers.e.state.data != null
            ? peers.Hf.ONE_MINUTE
            : !1,
        refetchIntervalInBackground: !1,
        refetchOnMount: t.length === 1,
        staleTime: peers.Hf.ONE_MINUTE,
      }))));
  });
}
