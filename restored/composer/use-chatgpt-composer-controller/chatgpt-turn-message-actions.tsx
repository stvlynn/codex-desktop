// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Assistant turn message actions (copy / fork / artifacts) for browser rows.

import { stripPrivateUseMentionMarkers as appInitialGl } from "../../composer/strip-private-use-mention-markers";
import { AssistantMessageActions as AppInitialDl } from "../../conversation/assistant-message-actions";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { rewriteFileCitationMarkers as AppInitialX8 } from "../../markdown/rewrite-file-citation-markers";

export function useChatgptComposerControllerHelper308(
  request1404: Record<string, any>,
) {
  let {
      assistantItem,
      branchingMessageId,
      hasArtifacts,
      isMostRecentTurn,
      localConversationId,
      onFork,
      turnId,
      getCopyHtml,
    } = request1404,
    slot5040 = appInitialJft();
  if (assistantItem == null) return null;
  let slot5041, slot5042;
  slot5041 = AppInitialX8(appInitialGl(assistantItem.content));
  slot5042 = assistantItem.completed && slot5041.trim().length > 0;
  let slot5043 = slot5042,
    slot5044 = assistantItem.latestMessageId,
    slot5045 = assistantItem.completed && isMostRecentTurn,
    slot5046 = assistantItem.completed ? turnId : undefined,
    slot5047 = slot5043 ? slot5041 : undefined,
    slot5048 = branchingMessageId != null,
    slot5049 = slot5040.formatMessage({
      id: "chatgptConversations.branchInNewChat",
      defaultMessage: "Continue in new chat",
      description:
        "Tooltip and accessible label for continuing a ChatGPT conversation in a new chat",
    });
  let slot5050 = slot5044 === branchingMessageId,
    slot5051 =
      assistantItem.completed && slot5044 != null && onFork != null
        ? () => {
            onFork(slot5044);
          }
        : undefined;
  return (
    <AppInitialDl
      alwaysShowActions={slot5045}
      turnId={slot5046}
      copyText={slot5047}
      getCopyHtml={getCopyHtml}
      forkDisabled={slot5048}
      forkLabel={slot5049}
      isForking={slot5050}
      sentAtMs={assistantItem.sentAtMs}
      threadId={localConversationId}
      hasArtifacts={hasArtifacts}
      onFork={slot5051}
    />
  );
}

export const ChatgptTurnMessageActions = useChatgptComposerControllerHelper308;
