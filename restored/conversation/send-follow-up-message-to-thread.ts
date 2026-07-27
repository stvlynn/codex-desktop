// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FNa`) / export `AN`.

export type SendFollowUpMessageToThreadPeers = {
  Bf: (...args: unknown[]) => unknown;
  CH: (...args: unknown[]) => unknown;
  Fbt: (...args: unknown[]) => unknown;
  INa: (...args: unknown[]) => unknown;
  Nbt: (...args: unknown[]) => unknown;
  Ox: (...args: unknown[]) => unknown;
  eR: (...args: unknown[]) => unknown;
  forkedFromId: (...args: unknown[]) => unknown;
  gNa: (...args: unknown[]) => unknown;
  getConversation: (...args: unknown[]) => unknown;
  input: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  nD: (...args: unknown[]) => unknown;
  sideConversation: (...args: unknown[]) => unknown;
  znn: (...args: unknown[]) => unknown;
};
let peers: SendFollowUpMessageToThreadPeers | null = null;

/** Wire sendFollowUpMessageToThread peers once companions land. */
export function setSendFollowUpMessageToThreadPeers(
  next: SendFollowUpMessageToThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `AN` / internal `FNa`.
 */
export async function sendFollowUpMessageToThread({
  hostId,
  messageMetadata,
  model,
  preferredHostId,
  prompt,
  scope,
  sourceThreadId,
  threadId,
  thinking,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("sendFollowUpMessageToThread peers are not configured");
  }
  let l = threadId;
  if (
    sourceThreadId != null &&
    sourceThreadId !== threadId &&
    preferredHostId != null &&
    (hostId == null || hostId === preferredHostId)
  ) {
    let e = scope.get(peers.nD).find((item) => {
        return item.getHostId() === preferredHostId;
      }),
      t = e?.getConversation(peers.kl(sourceThreadId));
    t?.sideConversation === true &&
      t.forkedFromId != null &&
      e?.getConversation(t.forkedFromId)?.forkedFromId === peers.kl(threadId) &&
      (l = t.forkedFromId);
  }
  let u = hostId;
  if (u == null)
    try {
      u = (
        await peers.CH({
          scope,
          threadId: l,
          preferredHostId,
        })
      ).hostId;
    } catch (e) {
      let t = await peers.gNa({
        prompt,
        scope,
        threadId: l,
      });
      if (t != null) return t;
      throw e;
    }
  let d = peers.kl(l),
    f =
      sourceThreadId == null
        ? prompt
        : peers.Nbt({
            sourceThreadId,
            input: prompt,
          });
  if (
    (await peers.Bf("send-follow-up-message", {
      hostId: u,
      conversationId: d,
      messageMetadata,
      prompt: f,
      model,
      reasoningEffort: thinking,
      serviceTier: await peers.eR(scope, u, model ?? null),
    }),
    sourceThreadId != null)
  ) {
    let e = scope.get(peers.Ox);
    if (e.phase === "inactive")
      return {
        threadId: l,
      };
    let t = e.locator.conversationId,
      n = peers.kl(sourceThreadId),
      r = t === d ? n : t === n ? d : null,
      i = t === d ? "from-task" : t === n ? "to-task" : null;
    if (r == null || i == null)
      return {
        threadId: l,
      };
    peers.znn({
      direction: i,
      hostId: u,
      message: peers.Fbt(f)?.input ?? f,
      realtimeThread: e.locator,
      threadId: r,
      threadTitle: peers.INa(scope, r),
    });
  }
  return {
    threadId: l,
  };
}
