// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `II`) / export `ZU`.

export type BindBindLocalConversationThreadPeers = {
  AI: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BFi: (...args: unknown[]) => unknown;
  CE: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  EE: (...args: unknown[]) => unknown;
  FFi: (...args: unknown[]) => unknown;
  FI: (...args: unknown[]) => unknown;
  GFi: (...args: unknown[]) => unknown;
  HFi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IFi: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  JFi: (...args: unknown[]) => unknown;
  KFi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  N3n: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  PFi: (...args: unknown[]) => unknown;
  T3n: (...args: unknown[]) => unknown;
  UFi: (...args: unknown[]) => unknown;
  Vl: (...args: unknown[]) => unknown;
  WFi: (...args: unknown[]) => unknown;
  X8n: (...args: unknown[]) => unknown;
  XFi: (...args: unknown[]) => unknown;
  YFi: (...args: unknown[]) => unknown;
  available: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  jFi: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  k3n: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  ku: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  mFi: (...args: unknown[]) => unknown;
  nE: (...args: unknown[]) => unknown;
  projectKind: (...args: unknown[]) => unknown;
  qFi: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalConversationThreadPeers | null = null;

/** Wire bindBindLocalConversationThread peers once companions land. */
export function setBindBindLocalConversationThreadPeers(
  next: BindBindLocalConversationThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZU` / internal `II`.
 */
export function bindBindLocalConversationThread() {
  if (peers == null) {
    throw new Error("bindBindLocalConversationThread peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.PFi(),
      peers.IFi(),
      peers.HFi(),
      peers.nE(),
      peers.k3n(),
      peers.WFi(),
      peers.gT(),
      peers.jI(),
      peers.OE(),
      peers.KFi(),
      (qFi = peers.Ia(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.kI),
          n =
            peers.e(peers.FFi, {
              hostConfig: t,
              operationSource: `local_conversation_thread`,
            }).data?.available === !0;
        return peers.T3n(
          peers.e(peers.DI),
          peers.e(peers.AI),
          t,
          `local_conversation_thread`,
          {
            enabled: n,
            watchForGitInit: !0,
          },
        );
      })),
      (JFi = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.qFi),
          n = t.data ?? null;
        return n == null
          ? peers.N3n(t)
          : peers.e(peers.BFi, {
              commonDir: n.commonDir,
              enabled: !0,
              hostConfig: peers.e(peers.kI),
              operationSource: `local_conversation_thread`,
              root: n.root,
            });
      })),
      (YFi = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.qFi).data ?? null;
        return peers.GFi({
          codexHome: peers.e(peers.mFi),
          cwd: peers.e(peers.DI),
          gitMetadata: t,
          hostId: peers.e(peers.OI),
        });
      })),
      (XFi = peers.Ma(peers.hT, ({ get: e, scope: t }) => {
        let n = peers.e(peers.YFi),
          r;
        switch (n.kind) {
          case `none`:
            r = null;
            break;
          case `plain`: {
            let i = peers.e(peers.kI),
              a =
                t.value.routeKind === `local-thread`
                  ? peers.e(peers.EE)?.[t.value.conversationId]
                  : null,
              o =
                a?.projectKind === `local`
                  ? peers.e(peers.X8n, a.projectId)
                  : null,
              s =
                o?.length === 1
                  ? (o[0] ?? null)
                  : a?.projectKind === `local`
                    ? (a.path ?? null)
                    : null,
              c =
                a == null
                  ? n.cwd
                  : peers.ku({
                      assignment: a,
                      cwd: n.cwd,
                    }),
              l =
                t.value.routeKind !== `local-thread` &&
                i.kind === `local` &&
                i.id === n.hostId
                  ? peers.e(peers.CE)
                  : null,
              u = c != null && peers.Vl(c) ? c : null;
            r = s ?? l ?? u;
            break;
          }
          case `git`:
            r = n.git.root;
            break;
        }
        return peers.jFi({
          codexHome: peers.e(peers.mFi),
          executionCwd: peers.e(peers.DI),
          isWorktreeMode: !1,
          projectRootPaths: peers.e(peers.UFi, peers.e(peers.FI)),
          workspaceBrowserRoot: r,
        });
      })));
  });
}
