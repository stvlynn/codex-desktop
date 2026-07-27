// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Realtime voice status on sidebar task rows (bundle `oBl` near export `Eo`/`ko`).

import { defineMessages } from "react-intl";

export const sidebarRealtimeStatusMessages = defineMessages({
  voiceChatActive: {
    id: "sidebarTaskRow.realtimeStatus",
    defaultMessage: "Voice chat active",
    description:
      "Accessible label and tooltip for the sidebar icon shown on the thread with an active realtime voice session",
  },
});

/** Whether realtime voice is active for a conversation (`iBl`). */
export function isRealtimeVoiceActiveForConversation(
  realtime: { phase: string; locator: { conversationId: string | null } },
  conversationId: string,
): boolean {
  return (
    realtime.phase !== "inactive" &&
    realtime.locator.conversationId === conversationId
  );
}
