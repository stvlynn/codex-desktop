// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qNl`) / export `ks`.

export type BindBindExternalAgentConfigPeers = {
  Bf: (...args: unknown[]) => unknown;
  GNl: (...args: unknown[]) => unknown;
  HNl: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KNl: (...args: unknown[]) => unknown;
  LNl: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UNl: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  WNl: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindBindExternalAgentConfigPeers | null = null;

/** Wire bindBindExternalAgentConfig peers once companions land. */
export function setBindBindExternalAgentConfigPeers(
  next: BindBindExternalAgentConfigPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ks` / internal `qNl`.
 */
export function bindBindExternalAgentConfig() {
  if (peers == null) {
    throw new Error("bindBindExternalAgentConfig peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Vf(),
      peers.ed(),
      peers.Uf(),
      peers.ap(),
      peers.LNl(),
      (HNl = [`external-agent-config`, `import`, `histories`]),
      (UNl = peers.Ta(peers.Q, null)),
      (WNl = peers.ka(peers.Q, (e) => ({
        queryKey: [...peers.HNl, peers.e],
        queryFn: () =>
          peers.Bf(`read-external-agent-config-import-histories`, {
            hostId: peers.e,
          }),
        select: (e) =>
          [...peers.e.data].sort(
            (e, t) => Number(t.completedAtMs) - Number(peers.e.completedAtMs),
          ),
        refetchOnMount: `always`,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))),
      (GNl = peers.ka(peers.Q, (e) => ({
        queryKey: [...peers.HNl, `checklist`, peers.e],
        queryFn: () =>
          peers.Bf(`read-external-agent-config-import-histories`, {
            hostId: peers.e,
          }),
        select: (e) => peers.e.data,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        retry: !1,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))),
      (KNl = peers.tp(peers.Q, `external-agent-import-status`, (e) => ({
        params: {
          hostId: peers.e,
          providers: [`claude-cowork`],
        },
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        retry: !1,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))));
  });
}
