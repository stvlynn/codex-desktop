// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FEa` / export `hF` (+ `LEa` key stem helper).

import { djb2Base36 } from "../utils/djb2-base36";

export type ActivityKeySource = {
  type?: string;
  id?: string;
  callId?: string;
  message?: string;
  query?: string;
  content?: string;
  messageId?: string;
  plan?: Array<{ step?: string }>;
};

function activityKeyStem(item: ActivityKeySource): string {
  switch (item.type) {
    case "assistant-message":
      return "assistant-message";
    case "chatgpt-reasoning-group":
      return "chatgpt-reasoning-group";
    case "generated-image":
      return `generated-image-${djb2Base36(String(item.id ?? ""))}`;
    case "user-message":
      return `user-message-${djb2Base36(String(item.message ?? ""))}`;
    case "web-search":
      return `web-search-${djb2Base36(String(item.query ?? ""))}`;
    case "reasoning":
      return `reasoning-${djb2Base36(String(item.content ?? ""))}`;
    case "mcp-tool-call":
    case "dynamic-tool-call":
      return `${item.type}-${djb2Base36(String(item.callId ?? ""))}`;
    case "todo-list":
      return `todo-list-${djb2Base36(
        (item.plan ?? []).map((step) => step.step ?? "").join("\n"),
      )}`;
    case "chatgpt-tool-approval":
      return `chatgpt-tool-approval-${djb2Base36(String(item.messageId ?? ""))}`;
    default:
      return String(item.type ?? "unknown");
  }
}

/** Bundle `LEa` — stable key stem for one activity item. */
export function activityItemKeyStem(item: ActivityKeySource): string {
  return activityKeyStem(item);
}

/** Bundle `FEa` / export `hF` — allocate unique keys for a list. */
export function allocateStableActivityItemKeys(
  items: ActivityKeySource[],
): string[] {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const stem = activityKeyStem(item);
    const count = seen.get(stem) ?? 0;
    seen.set(stem, count + 1);
    return `${stem}-${String(count)}`;
  });
}

/** Bundle `IEa` — prefix an activity key with a conversation id. */
export function activityItemKeyForConversation(
  key: string,
  conversationId: string | number,
): string {
  return `${String(conversationId)}:${key}`;
}
