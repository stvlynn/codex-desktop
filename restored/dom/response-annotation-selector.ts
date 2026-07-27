// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NHs` / export `h_`; companions `AHs` / `kHs` / `FHs`.

import { escapeCssIdent } from "./escape-css-ident";

const CONVERSATION_ATTR = "data-response-annotation-conversation";
const TARGET_ATTR = "data-response-annotation-target";

/** CSS selector for a response annotation node. */
export function responseAnnotationSelector(conversationId: string, targetId: string): string {
  return `[${CONVERSATION_ATTR}="${escapeCssIdent(conversationId)}"][${TARGET_ATTR}="${escapeCssIdent(targetId)}"]`;
}
