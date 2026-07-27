// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve a conversation / client thread id from a route atom value
// (bundle `yT` / export `d8`; co-located `mT` + home/panel sentinels).

import { isClientNewThreadId } from "./client-new-thread-id";

/** Bundle `IJn` — home entrypoint sentinel conversation id. */
export const HOME_NEW_CONVERSATION_ID = "new-conversation";

/** Bundle `LJn` — new-thread-panel entrypoint sentinel. */
export const PANEL_NEW_CONVERSATION_ID = "panel-new-conversation";

export type AppRouteValue = {
  routeKind: string;
  clientThreadId?: string;
  conversationId?: string;
  taskId?: string;
};

export type RouteAtomLike = {
  value: AppRouteValue;
};

/**
 * Bundle `mT` / export `y8` — thread id projection of a route value.
 */
export function threadIdFromRouteValue(route: AppRouteValue): string | null {
  switch (route.routeKind) {
    case "home":
      return HOME_NEW_CONVERSATION_ID;
    case "new-thread-panel":
      return PANEL_NEW_CONVERSATION_ID;
    case "client-local-thread":
      return route.clientThreadId ?? null;
    case "local-thread":
    case "chatgpt-thread":
      return route.conversationId ?? null;
    case "remote-thread":
      return route.taskId ?? null;
    case "other":
      return null;
    default:
      return null;
  }
}

/**
 * Bundle `yT` / export `d8` — prefer a client-new-thread id on the route
 * atom, otherwise fall back to `threadIdFromRouteValue`.
 */
export function clientThreadIdFromRouteAtom(
  route: RouteAtomLike,
): string | null {
  const clientThreadId = route.value.clientThreadId;
  if (
    typeof clientThreadId === "string" &&
    isClientNewThreadId(clientThreadId)
  ) {
    return clientThreadId;
  }
  return threadIdFromRouteValue(route.value);
}
