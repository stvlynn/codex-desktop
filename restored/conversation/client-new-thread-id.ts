// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Client-only "new thread" conversation id helpers (`Ege` / `Al` / `bge`).

/** Prefix for ephemeral client-generated thread ids (`Ege`). */
export const CLIENT_NEW_THREAD_ID_PREFIX = "client-new-thread:";

/** Create a fresh client-new-thread id (`bge`, co-located). */
export function createClientNewThreadId(): string {
  return `${CLIENT_NEW_THREAD_ID_PREFIX}${crypto.randomUUID()}`;
}

/** Bundle `Al` / export `bgt`. */
export function isClientNewThreadId(
  conversationId: string | null | undefined,
): boolean {
  return conversationId?.startsWith(CLIENT_NEW_THREAD_ID_PREFIX) === true;
}
