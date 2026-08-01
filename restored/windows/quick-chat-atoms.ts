// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Quick-chat AppScope signals (`Pm`/`Ta` cluster):
//   SZ/`Ix` dock position, Cms/`Bx` size, Sms/`Lx` history tab,
//   bms/`Rx` collapsed, CZ surface session, yms window-mode, xms has-opened.
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createPersistedScopeSignal } from "../conversation/turn-sources-runtime";
import {
  appScopeAtom,
  createScopedSignal,
  ensureAppScopeInit,
} from "../runtime/app-scope-runtime";
import {
  QUICK_CHAT_DEFAULT_SIZE,
  type QuickChatWindowSize,
} from "../windows/quick-chat-default-size";
export type QuickChatDockPosition = "bottom-left" | "bottom-right";
export type QuickChatHistoryTab = "recent" | "all" | string;
export type QuickChatSurfaceSession = {
  contextSourceConversationId: string | null;
  conversationId: string | null;
  hasConversation: boolean;
  initialScrollMode?: string;
  selectedTextSourceConversationId?: string | null;
  projectId: string | null;
  projectName: string | null;
  title?: string | null;
} | null;
ensureAppScopeInit();

/** Bundle `SZ` / export `Ix` — persisted dock position. */
export const quickChatDockPositionAtom =
  createPersistedScopeSignal<QuickChatDockPosition>(
    "quick-chat-dock-position-v1",
    "bottom-right",
  );

/** Bundle `Cms` / export `Bx` — persisted window size. */
export const quickChatSizeAtom =
  createPersistedScopeSignal<QuickChatWindowSize>(
    "quick-chat-size-v1",
    QUICK_CHAT_DEFAULT_SIZE,
  );

/** Bundle `xms` — has the user opened quick-chat before. */
export const hasOpenedQuickChatAtom = createPersistedScopeSignal<boolean>(
  "has-opened-quick-chat-v1",
  false,
);

/** Bundle `Sms` / export `Lx` — history list tab. */
export const quickChatHistoryTabAtom = createScopedSignal<QuickChatHistoryTab>(
  appScopeAtom,
  "recent",
);

/** Bundle `bms` / export `Rx` — surface collapsed flag. */
export const quickChatSurfaceCollapsedAtom = createScopedSignal<boolean>(
  appScopeAtom,
  false,
);

/** Bundle `yms` — true when quick-chat is hosted as a dedicated window. */
export const quickChatWindowModeAtom = createScopedSignal<boolean>(
  appScopeAtom,
  false,
);

/** Bundle `CZ` — active quick-chat surface session (nullable). */
export const quickChatSurfaceSessionAtom =
  createScopedSignal<QuickChatSurfaceSession>(appScopeAtom, null);
export function ensureQuickChatAtomsInit(): void {
  ensureAppScopeInit();
}
