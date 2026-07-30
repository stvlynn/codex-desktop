// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Sticky "had conversation / project" state across local-route remounts.

export type HadConversationProjectState = {
  conversationId: string | null | undefined;
  hadConversation: boolean;
  project: unknown;
};

/** Track whether a conversation once existed and which project it belonged to. */
export function mergeHadConversationProjectState(
  previous: HadConversationProjectState,
  next: {
    conversationId: string | null | undefined;
    hasConversation: boolean;
    project: unknown;
  },
): HadConversationProjectState {
  if (previous.conversationId !== next.conversationId) {
    return {
      conversationId: next.conversationId,
      hadConversation: next.hasConversation,
      project: next.project === undefined ? undefined : next.project,
    };
  }
  return {
    conversationId: next.conversationId,
    hadConversation: previous.hadConversation || next.hasConversation,
    project: next.project === undefined ? previous.project : next.project,
  };
}

/** Reset sticky state when the conversation id changes. */
export function alignHadConversationProjectState(
  previous: HadConversationProjectState,
  conversationId: string | null | undefined,
): HadConversationProjectState {
  if (previous.conversationId === conversationId) return previous;
  return {
    conversationId,
    hadConversation: false,
    project: undefined,
  };
}
