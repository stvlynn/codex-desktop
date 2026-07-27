// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `e1s` / export `Qh`.

import { findLocalConversationItemByTargetId } from "./find-local-conversation-item-by-target-id";

/** Scroll/focus a local conversation item by target id. */
export function scrollLocalConversationItemIntoView(targetId: string, behavior?: ScrollBehavior): boolean {
  const node = findLocalConversationItemByTargetId(targetId);
  if (node == null) return false;
  node.scrollIntoView({ block: "center", behavior });
  if (node instanceof HTMLElement) {
    node.focus({ preventScroll: true });
  }
  return true;
}
