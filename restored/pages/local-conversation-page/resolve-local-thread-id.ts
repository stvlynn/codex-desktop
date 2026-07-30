// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Resolve conversation id or pending client-new-thread id for local routes.

import { isClientNewThreadId } from "../../conversation/client-new-thread-id";

/**
 * Bundle: prefer server conversation id, else a client-new-thread id.
 * Throws when neither is available (call sites must guard first).
 */
export function resolveLocalThreadId(
  clientThreadId: string | null | undefined,
  conversationId: string | null | undefined,
): string {
  if (conversationId != null) return conversationId;
  if (isClientNewThreadId(clientThreadId)) return clientThreadId as string;
  throw new Error("Expected a pending client thread or server conversation");
}

/** Soft variant that returns null instead of throwing. */
export function resolveLocalThreadIdOrNull(
  clientThreadId: string | null | undefined,
  conversationId: string | null | undefined,
): string | null {
  if (conversationId != null) return conversationId;
  if (isClientNewThreadId(clientThreadId)) return clientThreadId ?? null;
  return null;
}
