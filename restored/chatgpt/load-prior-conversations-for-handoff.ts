// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pEa` / export `xF`. Listing / transcript builders left injectable.

type ConversationStore = {
  get: (conversationId: string) => Promise<{ title?: string | null }>;
};

type Listed = { conversationId: string; title: string };

type ListFn = (ids: string[]) => Listed[];
type PriorFn = (conversation: { title?: string | null }) => unknown;

let listConversations: ListFn | null = null;
let toPriorConversation: PriorFn | null = null;

export function setLoadPriorConversationsForHandoffDeps(args: {
  listConversations: ListFn;
  toPriorConversation: PriorFn;
}): void {
  listConversations = args.listConversations;
  toPriorConversation = args.toPriorConversation;
}

export async function loadPriorConversationsForHandoff(
  store: ConversationStore,
  conversationIds: string[],
  { enabled }: { enabled: boolean },
): Promise<
  Array<{
    conversationId: string;
    title: string;
    priorConversation: unknown;
  }>
> {
  if (!enabled) return [];
  if (listConversations == null || toPriorConversation == null) {
    throw new Error(
      "loadPriorConversationsForHandoff deps have not been configured",
    );
  }
  const listed = listConversations(conversationIds);
  return Promise.all(
    listed.map(async (entry) => {
      const conversation = await store.get(entry.conversationId);
      return {
        conversationId: entry.conversationId,
        title:
          entry.title.trim() || conversation.title || "ChatGPT conversation",
        priorConversation: toPriorConversation(conversation),
      };
    }),
  );
}
