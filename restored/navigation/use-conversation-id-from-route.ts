// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave CB — small real body reading conversationId from local/remote/hotkey routes.
// Deferred companion of thread route shells.

import { asThreadId } from "../conversation/as-thread-id";
import { useMatch } from "../boundaries/react-router-navigation";

/**
 * Resolve the active conversation thread id from local, remote, or hotkey-window routes.
 * Bundle export `ql` / internal `T3`.
 */
export function useConversationIdFromRoute(): string | null {
  const local = useMatch("/local/:conversationId") as
    | { params?: { conversationId?: string } }
    | null
    | undefined;
  const remote = useMatch("/remote/:conversationId") as
    | { params?: { conversationId?: string } }
    | null
    | undefined;
  const hotkey = useMatch("/hotkey-window/thread/:conversationId") as
    | { params?: { conversationId?: string } }
    | null
    | undefined;
  const conversationId =
    local?.params?.conversationId ??
    remote?.params?.conversationId ??
    hotkey?.params?.conversationId;
  return conversationId ? asThreadId(conversationId) : null;
}
