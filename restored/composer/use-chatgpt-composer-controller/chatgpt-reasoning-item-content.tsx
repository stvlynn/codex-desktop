// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Reasoning-group item body + tool-icon row for ChatGPT browser rows.

import { useChatgptComposerControllerHelper265 } from "./chatgpt-reasoning-tool-icons";
import { useChatgptComposerControllerHelper247 } from "./chatgpt-safe-streaming-markdown";

function useChatgptComposerControllerHelper261(request1884) {
  const UseChatgptComposerControllerHelper247 =
    useChatgptComposerControllerHelper247;
  const UseChatgptComposerControllerHelper265 =
    useChatgptComposerControllerHelper265;
  let { item, localConversationId, resolvedApps, shouldBlockExternalEgress } =
      request1884,
    slot5956 = shouldBlockExternalEgress ? "restricted" : "allow",
    slot5957 = !item.completed,
    slot5958 = item.presentation === "thought" ? "tertiary" : "primary",
    slot5959 = {
      kind: "assistant-message",
      tone: slot5958,
    };
  let slot5960 = (
    <UseChatgptComposerControllerHelper247
      className={
        "[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0"
      }
      conversationId={localConversationId}
      cwd={null}
      externalResourcePolicy={slot5956}
      isStreaming={slot5957}
      textStyle={slot5959}
    >
      {item.content}
    </UseChatgptComposerControllerHelper247>
  );
  let slot5961 = slot5960;
  if (item.presentation === "preamble") return slot5961;
  let slot5962 = (
    <UseChatgptComposerControllerHelper265
      resolvedApps={resolvedApps}
      shouldBlockExternalEgress={shouldBlockExternalEgress}
      toolIcons={item.toolIcons}
    />
  );
  let slot5963 = <div className="min-w-0 flex-1">{slot5961}</div>;
  return (
    <div className="flex items-start gap-2 text-token-text-tertiary">
      {slot5962}
      {slot5963}
    </div>
  );
}

export { useChatgptComposerControllerHelper261 };
