// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pT` / export `v8`.

/** Conversation id when the route is a local thread. */
export function localThreadConversationId(route: {
  routeKind?: string;
  conversationId?: string | null;
}): string | null {
  return route.routeKind === "local-thread"
    ? (route.conversationId ?? null)
    : null;
}
