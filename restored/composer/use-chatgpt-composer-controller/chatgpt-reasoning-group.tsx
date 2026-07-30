// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT reasoning-group renderer for browser-conversation rows.

import { ChatMessageContent as appInitialQd } from "../../chat/chat-message-content";
import {
  useChatgptComposerControllerHelper261,
  useChatgptComposerControllerHelper262,
  useChatgptComposerControllerHelper264,
} from "../../boundaries/use-chatgpt-composer-controller";
import { activityItemStableId as appInitialBd } from "../../conversation/activity-item-stable-id";
import { classifyActivityItemGrouping as AppInitialOd } from "../../conversation/classify-activity-item-grouping";
import { ConversationTurnUnits as appInitialPc } from "../../conversation/conversation-turn-units";
import { groupActivityItemsWithSourceIndex as appInitialSd } from "../../conversation/group-activity-items-with-source-index";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE as appInitialN7 } from "../../conversation/thread-detail-level-ids";
import { useChatgptComposerControllerHelper305 } from "./chatgpt-browser-conversation-item";

type ChatgptReasoningGroupProps = {
  assistantHeadingImageId?: string | null;
  browserConversationId?: string | null;
  completed?: boolean;
  conversationId: string;
  getVisualizeTurnTriggerType?: unknown;
  hostId?: string;
  items: unknown[];
  localConversationId?: string;
  reasoningRecap?: { type?: string; content?: string } | null;
  resolvedApps?: unknown[];
  shouldBlockExternalEgress?: boolean;
  turnId?: string;
};

export function useChatgptComposerControllerHelper307({
  assistantHeadingImageId,
  browserConversationId,
  completed,
  conversationId,
  getVisualizeTurnTriggerType,
  hostId,
  items,
  localConversationId,
  reasoningRecap,
  resolvedApps,
  shouldBlockExternalEgress,
  turnId,
}: ChatgptReasoningGroupProps) {
  const UseChatgptComposerControllerHelper264 =
    useChatgptComposerControllerHelper264;
  const UseChatgptComposerControllerHelper261 =
    useChatgptComposerControllerHelper261;
  const UseChatgptComposerControllerHelper305 =
    useChatgptComposerControllerHelper305;
  const UseChatgptComposerControllerHelper262 =
    useChatgptComposerControllerHelper262;
  const AppInitialQd = appInitialQd;
  let slot3960 = [],
    slot3961 = [],
    slot3962 = null,
    slot3963 = (request4159) => {
      const AppInitialPc = appInitialPc;
      let slot10094 = slot3961[0];
      slot10094 == null ||
        slot3962 == null ||
        (slot3960.push(
          <AppInitialPc
            key={`agent-activity-${appInitialBd(slot10094, slot3962)}`}
            allowAddSelectedTextToChat={false}
            conversationDetailLevel={appInitialN7}
            conversationId={localConversationId}
            cwd={null}
            getVisualizeTurnTriggerType={getVisualizeTurnTriggerType}
            hostId={hostId}
            isActivitySliceClosed={request4159}
            isExploring={false}
            isTurnInProgress={!completed}
            loadRemoteToolLogos={!shouldBlockExternalEgress}
            resolvedApps={resolvedApps}
            units={appInitialSd(slot3961)}
          />,
        ),
        (slot3961 = []),
        (slot3962 = null));
    };
  for (let [slot6769, slot6770] of items.entries()) {
    if (
      slot6770.type === "web-search" ||
      (slot6770.type === "mcp-tool-call" &&
        slot6770.mcpAppResourceUri == null) ||
      slot6770.type === "dynamic-tool-call"
    )
      continue;
    if (slot6770.type === "reasoning") {
      if ((slot3963(true), slot6770.content.length === 0)) {
        if (slot6770.completed) continue;
        slot3960.push(
          <UseChatgptComposerControllerHelper264
            key={`active-reasoning-${String(slot6769)}`}
          />,
        );
        continue;
      }
      slot3960.push(
        <UseChatgptComposerControllerHelper261
          key={`reasoning-${String(slot6769)}`}
          item={slot6770}
          localConversationId={localConversationId}
          resolvedApps={resolvedApps}
          shouldBlockExternalEgress={shouldBlockExternalEgress}
        />,
      );
      continue;
    }
    let slot6888 =
      slot6770.type === "chatgpt-subagent-activity" ||
      slot6770.type === "chatgpt-tool-approval"
        ? null
        : AppInitialOd(slot6770);
    if (slot6888 != null) {
      slot3962 ??= slot6769;
      slot3961.push(slot6888);
      continue;
    }
    slot3963(true);
    slot3960.push(
      <UseChatgptComposerControllerHelper305
        key={`${slot6770.type}-${String(slot6769)}`}
        assistantHeadingImageId={assistantHeadingImageId}
        browserConversationId={browserConversationId}
        conversationId={conversationId}
        getVisualizeTurnTriggerType={getVisualizeTurnTriggerType}
        hostId={hostId}
        index={slot6769}
        item={slot6770}
        items={items}
        localConversationId={localConversationId}
        resolvedApps={resolvedApps}
        shouldBlockExternalEgress={shouldBlockExternalEgress}
        turnId={turnId}
      />,
    );
  }
  if ((slot3963(completed), reasoningRecap?.type === "hide_all")) return null;
  let slot3964 =
    reasoningRecap?.type === "keep_inline"
      ? null
      : (reasoningRecap?.content.trim() ?? null);
  return slot3964 ? (
    <UseChatgptComposerControllerHelper262
      canExpand={slot3960.length > 0}
      title={slot3964}
    >
      {slot3960}
    </UseChatgptComposerControllerHelper262>
  ) : slot3960.length > 0 ? (
    <AppInitialQd padding="offset">
      <div className="flex flex-col gap-4">{slot3960}</div>
    </AppInitialQd>
  ) : completed ? null : (
    <AppInitialQd padding="offset">
      <UseChatgptComposerControllerHelper264 />
    </AppInitialQd>
  );
}

export const ChatgptReasoningGroup = useChatgptComposerControllerHelper307;
