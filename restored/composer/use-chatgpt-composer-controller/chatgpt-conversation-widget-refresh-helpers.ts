// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// GenUI widget refresh leaf helpers (Helper12–15).

import { HostApiError as appInitialIdt } from "../../errors/host-api-error";
import {
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../vendor/zod";
import {
  conversationUpdateNotFoundRetryMs,
  chatgptWidgetRefreshBackoffMs,
} from "./chatgpt-conversation-update-schemas";

export function useChatgptComposerControllerHelper12({
  messageId,
  refIndex,
}: {
  messageId: string;
  refIndex: number;
}): string {
  return `${messageId}:${String(refIndex)}`;
}
export function useChatgptComposerControllerHelper13(
  request8814: any,
  request8815: any,
) {
  return request8814 instanceof appInitialIdt && request8814.status === 404
    ? useChatgptComposerControllerHelper14(request8814) ===
        "Message not found" && request8815 < 5
      ? conversationUpdateNotFoundRetryMs
      : null
    : request8815 < 2
      ? chatgptWidgetRefreshBackoffMs
      : null;
}
export function useChatgptComposerControllerHelper14(request8845: any) {
  try {
    let slot15571 = appInitialXT({
      detail: appInitialCT(),
    }).safeParse(JSON.parse(request8845.message));
    return slot15571.success ? slot15571.data.detail : null;
  } catch {
    return null;
  }
}
export function useChatgptComposerControllerHelper15(request7530: any) {
  return (
    document.addEventListener("visibilitychange", request7530),
    window.addEventListener("focus", request7530),
    () => {
      document.removeEventListener("visibilitychange", request7530);
      window.removeEventListener("focus", request7530);
    }
  );
}
