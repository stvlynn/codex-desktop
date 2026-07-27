// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `FNa`) / export `AN`.

export type SendFollowUpMessageToThreadArgs = {
  hostId?: unknown;
  messageMetadata?: unknown;
  model?: unknown;
  preferredHostId?: unknown;
  prompt: unknown;
  scope: {
    get: (atom: unknown) => Array<{
      getHostId: () => unknown;
      getConversation: (id: unknown) => {
        sideConversation?: boolean;
        forkedFromId?: unknown;
      } | null;
    }>;
  };
  sourceThreadId?: unknown;
  threadId: unknown;
  thinking?: unknown;
};

export type SendFollowUpMessageToThreadPeers = {
  hostsAtom: unknown;
  canonicalizeThreadId: (id: unknown) => unknown;
  resolveHostForThread: (args: {
    scope: SendFollowUpMessageToThreadArgs["scope"];
    threadId: unknown;
    preferredHostId: unknown;
  }) => Promise<{ hostId: unknown }>;
  fallbackSend: (args: {
    prompt: unknown;
    scope: SendFollowUpMessageToThreadArgs["scope"];
    threadId: unknown;
  }) => Promise<unknown>;
  sendFollowUp: (args: {
    hostId: unknown;
    messageMetadata: unknown;
    model: unknown;
    prompt: unknown;
    scope: SendFollowUpMessageToThreadArgs["scope"];
    threadId: unknown;
    thinking: unknown;
  }) => Promise<unknown>;
};

let peers: SendFollowUpMessageToThreadPeers | null = null;

/** Wire follow-up send peers once companions land. */
export function setSendFollowUpMessageToThreadPeers(
  next: SendFollowUpMessageToThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `AN` / internal `FNa`.
 * Send a follow-up message, rewriting side-conversation thread targets.
 */
export async function sendFollowUpMessageToThread(
  args: SendFollowUpMessageToThreadArgs,
): Promise<unknown> {
  if (peers == null) {
    throw new Error("SendFollowUpMessageToThread peers are not configured");
  }
  const {
    hostId,
    messageMetadata,
    model,
    preferredHostId,
    prompt,
    scope,
    sourceThreadId,
    threadId,
    thinking,
  } = args;
  let targetThreadId = threadId;
  if (
    sourceThreadId != null &&
    sourceThreadId !== threadId &&
    preferredHostId != null &&
    (hostId == null || hostId === preferredHostId)
  ) {
    const host = scope
      .get(peers.hostsAtom)
      .find((entry) => entry.getHostId() === preferredHostId);
    const conversation = host?.getConversation(
      peers.canonicalizeThreadId(sourceThreadId),
    );
    if (
      conversation?.sideConversation === true &&
      conversation.forkedFromId != null &&
      host?.getConversation(conversation.forkedFromId)?.forkedFromId ===
        peers.canonicalizeThreadId(threadId)
    ) {
      targetThreadId = conversation.forkedFromId;
    }
  }
  let resolvedHostId = hostId;
  if (resolvedHostId == null) {
    try {
      resolvedHostId = (
        await peers.resolveHostForThread({
          scope,
          threadId: targetThreadId,
          preferredHostId,
        })
      ).hostId;
    } catch {
      return peers.fallbackSend({
        prompt,
        scope,
        threadId: targetThreadId,
      });
    }
  }
  return peers.sendFollowUp({
    hostId: resolvedHostId,
    messageMetadata,
    model,
    prompt,
    scope,
    threadId: targetThreadId,
    thinking,
  });
}
