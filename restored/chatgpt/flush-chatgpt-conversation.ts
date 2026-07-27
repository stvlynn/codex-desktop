// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hls` / export `kS`.

type ConversationFlusher = {
  flushConversation: (conversationId: string) => Promise<unknown>;
};

type StoreLike = unknown;

type ResolveFlusher = (store: StoreLike) => ConversationFlusher;

let resolveFlusher: ResolveFlusher | null = null;

/** Wire conversation flusher resolver (`Bls` in the bundle). */
export function setChatgptConversationFlusherResolver(resolver: ResolveFlusher): void {
  resolveFlusher = resolver;
}

export async function flushChatgptConversation(store: StoreLike, conversationId: string): Promise<void> {
  if (resolveFlusher == null) {
    throw new Error("conversation flusher resolver has not been configured");
  }
  await resolveFlusher(store).flushConversation(conversationId);
}
