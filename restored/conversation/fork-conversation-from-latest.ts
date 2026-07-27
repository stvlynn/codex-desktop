// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uCo`) / export `Gk`.

export type ForkConversationFromLatestPeers = {
  Bf: (...args: unknown[]) => unknown;
  DK: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  dSo: (...args: unknown[]) => unknown;
  fCo: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  sD: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
  wSo: (...args: unknown[]) => unknown;
  xxo: (...args: unknown[]) => unknown;
};
let peers: ForkConversationFromLatestPeers | null = null;

/** Wire forkConversationFromLatest peers once companions land. */
export function setForkConversationFromLatestPeers(
  next: ForkConversationFromLatestPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gk` / internal `uCo`.
 */
export async function forkConversationFromLatest(
  e: unknown,
  { sourceConversationId, sourceWorkspaceRoot }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("forkConversationFromLatest peers are not configured");
  }
  if (sourceConversationId == null) return null;
  try {
    let r = e.get(peers.wD, sourceConversationId),
      i = peers.fCo(e, sourceConversationId),
      a = peers.wSo(e, sourceConversationId, r),
      o = await peers.Bf("fork-conversation-from-latest", {
        hostId: r,
        conversationId: sourceConversationId,
        cwd: sourceWorkspaceRoot ?? undefined,
        workspaceRoots:
          sourceWorkspaceRoot == null
            ? undefined
            : peers.dSo({
                cwd: sourceWorkspaceRoot,
                runtimeWorkspaceRoots: e.get(peers.sD, sourceConversationId),
              }),
        collaborationMode: i,
      });
    return (
      a != null &&
        (await peers.Bf("set-thread-title", {
          hostId: r,
          conversationId: o,
          title: a,
        })),
      peers.xxo(e, {
        sourceConversationId,
        targetConversationId: o,
      }),
      o
    );
  } catch (t) {
    return (
      peers.Wf.error("Error forking local task", {
        safe: {},
        sensitive: {
          error: t,
        },
      }),
      e
        .get(peers.rh)
        .danger(e.get(peers.LE).formatMessage(peers.DK.forkThreadError)),
      null
    );
  }
}
