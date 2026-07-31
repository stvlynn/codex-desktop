// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Coalesced timeout scheduler for find-highlight DOM rescans.

import * as React from "react";

export function useCoalescedTimeout(delayMs: number): {
  schedule: (fn: () => void) => void;
  cancel: () => void;
} {
  let conversationSourceBinding164 = React.useRef<number | null>(null),
    conversationSourceBinding165 = (fn: () => void) => {
      conversationSourceBinding164.current ??= window.setTimeout(() => {
        conversationSourceBinding164.current = null;
        fn();
      }, delayMs);
    };
  let conversationSourceBinding166 = conversationSourceBinding165,
    conversationSourceBinding167 = () => {
      conversationSourceBinding164.current != null &&
        (window.clearTimeout(conversationSourceBinding164.current),
        (conversationSourceBinding164.current = null));
    };
  let conversationSourceBinding168 = conversationSourceBinding167;
  return {
    schedule: conversationSourceBinding166,
    cancel: conversationSourceBinding168,
  };
}
