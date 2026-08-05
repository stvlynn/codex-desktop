// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `r1s` companion for export `Qh`.

import { LOCAL_CONVERSATION_ITEM_TARGET_IDS_ATTR } from "./local-conversation-item-target-ids-attr";

/** Find a DOM node whose target-ids attr includes the encoded id. */
export function findLocalConversationItemByTargetId(
  targetId: string,
): Element | null {
  const encoded = encodeURIComponent(targetId);
  const nodes = document.querySelectorAll(
    `[${LOCAL_CONVERSATION_ITEM_TARGET_IDS_ATTR}]`,
  );
  for (const node of nodes) {
    const raw =
      node.getAttribute(LOCAL_CONVERSATION_ITEM_TARGET_IDS_ATTR) ?? "";
    if (raw.split(" ").includes(encoded)) return node;
  }
  return null;
}
