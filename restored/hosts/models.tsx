// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PM`) / export `QY`.

export type BindBindModelsPeers = {
  $E: (...args: unknown[]) => unknown;
  $Jr: (...args: unknown[]) => unknown;
  BJr: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  HJr: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  JJr: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QJr: (...args: unknown[]) => unknown;
  UJr: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  VJr: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  YJr: (...args: unknown[]) => unknown;
  ZJr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eYr: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  qJr: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
};

let peers: BindBindModelsPeers | null = null;

/** Wire bindBindModels peers once companions land. */
export function setBindBindModelsPeers(next: BindBindModelsPeers): void {
  peers = next;
}

/**
 * Bundle export `QY` / internal `PM`.
 */
export function bindBindModels() {
  if (peers == null) {
    throw new Error("bindBindModels peers are not configured");
  }

  return peers.e(() => {
    ((ZJr = peers.c()),
      peers.Ho(),
      peers.DD(),
      peers.Vf(),
      peers.xM(),
      peers.ed(),
      peers.K_(),
      peers.Dh(),
      peers.Uf(),
      peers.VJr(),
      peers.UJr(),
      peers.JJr(),
      (QJr = 100),
      ($Jr = [`models`, `list`]),
      (eYr = peers.ka(
        peers.Q,
        (
          {
            additionalAvailableModels: e,
            authMethod: t,
            hostId: n,
            includeUltraReasoningEffort: r,
            limit: i,
          },
          { get: a },
        ) => {
          let o = a(peers.qJr),
            s = a(peers.BJr),
            c = r && a(peers.Eh, `1186680773`);
          return {
            queryKey: peers.YJr(n, t, i),
            enabled: a(peers.$E).includes(n),
            staleTime: peers.Hf.FIVE_MINUTES,
            queryFn: () =>
              peers.Bf(`list-models-for-host`, {
                hostId: n,
                includeHidden: !0,
                cursor: null,
                limit: i,
              }),
            select: ({ data: n }) =>
              peers.HJr({
                additionalAvailableModels: new Set(peers.e),
                authMethod: t,
                availableModels: s.availableModels,
                defaultModel: s.defaultModel,
                enabledReasoningEfforts: o,
                includeUltraReasoningEffort: peers.c,
                models: n,
                useHiddenModels: s.useHiddenModels,
              }),
          };
        },
      )));
  });
}
