// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Render a single ChatGPT browser-conversation turn item by type.

import { collectUniqueAppgenApps as _AppInitialO5 } from "../../apps/collect-unique-appgen-apps";
import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationServerIdAtom as appInitialFP,
  writingBlocksControllerAtom as appInitialCI,
} from "../../composer/composer-appscope-atoms";
import { useChatgptComposerControllerHelper248 } from "./chatgpt-moderation-disclaimers";
import { useChatgptComposerControllerHelper255 } from "./chatgpt-assistant-message-content";
import { useChatgptComposerControllerHelper284 } from "./chatgpt-subagent-activity-panel";
import { useChatgptComposerControllerHelper104 } from "./chatgpt-conversation-image-download";
import { useChatgptComposerControllerHelper259 } from "./chatgpt-codex-handoff-continued-link";
import {
  useChatgptComposerControllerHelper287,
  useChatgptComposerControllerHelper288,
} from "./chatgpt-tool-approval-helpers";
import { useChatgptComposerControllerHelper292 } from "./chatgpt-generated-image-item";
import { AgentActivitySummaryPart as AppInitialVd } from "../../conversation/agent-activity-summary-part";
import { ConversationRoleHeading as appInitialEf } from "../../conversation/conversation-role-heading";
import { EndResourceList as appInitialHc } from "../../conversation/end-resource-list";
import { PlanProgressDonut as AppInitialHc } from "../../conversation/plan-progress-donut";
import { ToolCallItem as appInitialZc } from "../../conversation/tool-call-item";
import { UserImageAttachmentPreview as AppInitialRl } from "../../conversation/user-image-attachment-preview";
import { UserMessage as appInitialQu } from "../../conversation/user-message";
import { WebSearchSummaryRow as AppInitialRc } from "../../conversation/web-search-summary-row";
import { EmailWritingBlockView as _appInitialIl } from "../../composer/email-writing-block-view";
import { parseComposerSelectionBlocks as appInitialLst } from "../../composer/parse-composer-selection-blocks";
import { SelectedTextAttachments as AppInitialST } from "../../composer/selected-text-attachments";
import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { isTodoPlanEntryCompleted as useChatgptComposerControllerHelper306 } from "./chatgpt-browser-conversation-row-predicates";

export function useChatgptComposerControllerHelper305(
  request173: Record<string, any>,
) {
  const AppInitialEf = appInitialEf;
  const UseChatgptComposerControllerHelper287 =
    useChatgptComposerControllerHelper287;
  const Provider = appInitialIL.Provider;
  const AppInitialQu = appInitialQu;
  const UseChatgptComposerControllerHelper248 =
    useChatgptComposerControllerHelper248;
  const UseChatgptComposerControllerHelper255 =
    useChatgptComposerControllerHelper255;
  const UseChatgptComposerControllerHelper292 =
    useChatgptComposerControllerHelper292;
  const UseChatgptComposerControllerHelper288 =
    useChatgptComposerControllerHelper288;
  const AppInitialZc = appInitialZc;
  const UseChatgptComposerControllerHelper259 =
    useChatgptComposerControllerHelper259;
  const UseChatgptComposerControllerHelper284 =
    useChatgptComposerControllerHelper284;
  let {
      assistantHeadingImageId,
      assistantMessageRootRef,
      browserConversationId,
      conversationId,
      getVisualizeTurnTriggerType,
      hostId,
      index,
      item,
      items,
      localConversationId,
      onEditMessage,
      pendingSubmissionAttachments,
      resolvedApps,
      searchUnitKey,
      shouldBlockExternalEgress,
      turnId: slot1452,
    } = request173,
    slot1453 = appInitialLT(appInitialFft);
  if (item.type === "user-message") {
    let slot2533;
    {
      let slot15178 = slot1453.get(appInitialFP, conversationId);
      slot2533 =
        slot15178 == null
          ? undefined
          : useChatgptComposerControllerHelper104(
              slot1453.get(appInitialCI),
              slot15178,
            );
    }
    let slot2534 = slot2533,
      slot2535 = item.selectedTextAttachments ?? appInitialLst(item.message);
    let slot2536 = slot2535,
      slot2537 = slot2536.length > 0,
      slot2538 = item.attachments.length > 0,
      slot2539 = item.images.length > 0,
      slot2540 = slot2538 || slot2539 || slot2537,
      slot2541 = item.message.trim().length > 0 || !slot2540;
    let slot2542 = slot2541,
      slot2543 = <AppInitialEf role="user" />;
    let slot2544 =
      item.targetedReplyLabel == null ? null : (
        <UseChatgptComposerControllerHelper287
          label={item.targetedReplyLabel}
        />
      );
    let slot2545 = slot2539 ? (
      <div className="flex flex-wrap items-end justify-end gap-2 self-end">
        {item.images.map((_item, _index) => {
          return (
            <AppInitialRl
              key={`${_item}-${String(_index)}`}
              src={_item}
              conversationId={localConversationId}
              imageAssetResolver={slot2534}
              initialPreviewSrc={
                pendingSubmissionAttachments?.find((request8310) => {
                  let { id: __id } = request8310;
                  return (
                    _item === `file-service://${__id}` ||
                    _item === `sediment://${__id}`
                  );
                })?.previewSrc
              }
            />
          );
        })}
      </div>
    ) : null;
    let slot2546 = slot2538 ? (
      <div className="hide-scrollbar flex max-w-full flex-row-reverse self-end overflow-x-auto">
        <div className="flex min-w-max items-center gap-2">
          {item.attachments.map((_item, _index) => {
            const AppInitialIl = _appInitialIl;
            return (
              <AppInitialIl
                key={`${_item.label}-${String(_index)}`}
                attachment={_item}
                cwd={null}
                hostId={hostId}
              />
            );
          })}
        </div>
      </div>
    ) : null;
    let slot2547 = slot2537 ? <AppInitialST selections={slot2536} /> : null;
    let slot2548 = slot2542 ? (
      <div className="w-full" data-content-search-unit-key={searchUnitKey}>
        {
          <Provider value={shouldBlockExternalEgress ? "restricted" : "allow"}>
            <AppInitialQu
              message={item.message}
              sentAtMs={item.sentAtMs}
              hasExternalAttachments={slot2540}
              hostId={hostId}
              onEditMessage={onEditMessage}
              threadId={localConversationId}
              turnId={slot1452}
            />
          </Provider>
        }
      </div>
    ) : null;
    let slot2549 = (
      <div className="flex flex-col items-end gap-2">
        {slot2544}
        {slot2545}
        {slot2546}
        {slot2547}
        {slot2548}
      </div>
    );
    let slot2550 = browserConversationId ?? conversationId,
      slot2551 = (
        <UseChatgptComposerControllerHelper248
          conversationId={slot2550}
          hostId={hostId}
          moderationDisclaimers={item.clientMetadata}
          shouldBlockExternalEgress={shouldBlockExternalEgress}
        />
      );
    let slot2552;
    return (
      <>
        {slot2543}
        {slot2549}
        {slot2551}
      </>
    );
  }
  if (item.type === "assistant-message") {
    let slot8247 = <AppInitialEf role="assistant" />;
    let slot8248 = (
      <UseChatgptComposerControllerHelper255
        browserConversationId={browserConversationId}
        item={item}
        conversationId={conversationId}
        cwd={null}
        getVisualizeTurnTriggerType={getVisualizeTurnTriggerType}
        hostId={hostId}
        turnId={slot1452}
      />
    );
    let slot8249;
    return (
      <div
        ref={assistantMessageRootRef}
        data-content-search-unit-key={searchUnitKey}
      >
        {slot8247}
        {slot8248}
      </div>
    );
  }
  if (item.type === "reasoning") return null;
  if (item.type === "web-search") {
    let slot15067;
    return <AppInitialRc item={item} />;
  }
  if (item.type === "generated-image") {
    let slot8722 =
      item.id === assistantHeadingImageId ? (
        <AppInitialEf role="assistant" />
      ) : null;
    let slot8723 = (
      <UseChatgptComposerControllerHelper292
        conversationId={conversationId}
        index={index}
        item={item}
        items={items}
        localConversationId={localConversationId}
        shouldBlockExternalEgress={shouldBlockExternalEgress}
      />
    );
    let slot8724;
    return (
      <>
        {slot8722}
        {slot8723}
      </>
    );
  }
  if (item.type === "todo-list") {
    let slot12841 = item.plan.every(useChatgptComposerControllerHelper306);
    let slot12842;
    return <AppInitialHc isComplete={slot12841} item={item} />;
  }
  if (item.type === "chatgpt-tool-approval") {
    let slot10493 =
      resolvedApps.find((_item) => {
        return _item.id === item.connectorId;
      }) ?? null;
    let slot10494;
    return (
      <UseChatgptComposerControllerHelper288
        appInfo={slot10493}
        conversationId={conversationId}
        item={item}
        shouldBlockExternalEgress={shouldBlockExternalEgress}
      />
    );
  }
  if (item.type === "mcp-tool-call") {
    let slot8465 = !shouldBlockExternalEgress,
      slot8466 = _AppInitialO5({
        apps: resolvedApps,
        functionName: item.functionName,
        serverName: item.invocation.server,
        toolName: item.invocation.tool,
      });
    let slot8467;
    return (
      <AppInitialZc
        conversationId={localConversationId}
        hostId={hostId}
        item={item}
        loadRemoteLogos={slot8465}
        matchingApp={slot8466}
        renderMcpApps={false}
      />
    );
  }
  if (item.type === "dynamic-tool-call") {
    if (item.tool === "handoff") {
      let slot13811;
      return (
        <UseChatgptComposerControllerHelper259
          conversationId={conversationId}
          item={item}
        />
      );
    }
    let slot11183;
    return <AppInitialVd conversationId={localConversationId} item={item} />;
  }
  if (item.type === "chatgpt-subagent-activity") {
    let slot14051;
    return (
      <UseChatgptComposerControllerHelper284
        conversationId={conversationId}
        item={item}
      />
    );
  }
  return null;
}

export const ChatgptBrowserConversationItem =
  useChatgptComposerControllerHelper305;
