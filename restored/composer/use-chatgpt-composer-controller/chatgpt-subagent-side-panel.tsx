// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Work subagents side-panel + inline activity chips for ChatGPT turns.
import {
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationServerIdAtom as appInitialFP,
  chatgptConversationStatusAtom as appInitialGP,
  chatgptThreadDerivedAtomBP as appInitialBP,
  useAppScopeAtomValue as appInitialIT,
} from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_Dc_Init as _appInitialDc,
  ensureComposerEsm_cP_Init as appInitialCP,
} from "../../composer/composer-esm-inits";
import { buildSubagentActivityModel as appInitialJF } from "../../conversation/build-subagent-activity-model";
import { isWaitingOrWorkingStatus as appInitialNF } from "../../conversation/is-waiting-or-working-status";
import { subagentPanelN, subagentPanelT } from "../../composer/subagent-panel";
import { walkChatgptMessageTree as appInitialPF } from "../../conversation/walk-chatgpt-message-tree";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { cx as appInitialWft } from "../../ui/cx";
import { getChatgptSubagentFinalResponseAtom } from "./chatgpt-subagent-final-response-atom";
import { useChatgptComposerControllerHelper247 } from "./chatgpt-safe-streaming-markdown";
import { useChatgptComposerControllerHelper281 } from "./chatgpt-subagent-detail-view";
import {} from "./chatgpt-subagent-list-row-helpers";
import {
  useChatgptComposerControllerHelper285,
  useChatgptComposerControllerHelper286,
} from "./chatgpt-subagent-activity-labels";
const EMPTY_MAPPING = {};
const EMPTY_SUBAGENTS: any[] = [];
function useChatgptComposerControllerHelper275(request760) {
  const UseChatgptComposerControllerHelper276 =
    useChatgptComposerControllerHelper276;
  const UseChatgptComposerControllerHelper281 =
    useChatgptComposerControllerHelper281;
  const UseChatgptComposerControllerHelper277 =
    useChatgptComposerControllerHelper277;
  let { conversationId, onSelect, selectedThreadId } = request760,
    slot3602 = appInitialIT(appInitialBP, conversationId),
    slot3603 = appInitialIT(appInitialRP, conversationId),
    slot3604 = appInitialIT(appInitialGP, conversationId),
    slot3605 = appInitialIT(appInitialFP, conversationId),
    slot3606 = appInitialIT(appInitialCP, conversationId),
    slot3607 = slot3604 === "streaming",
    slot3608 = slot3602 ?? EMPTY_MAPPING,
    slot3609 = appInitialPF({
      current_node: slot3603,
      mapping: slot3608,
    });
  let slot3610 = slot3609,
    slot3611 = appInitialJF(slot3610, {
      isTurnLive: slot3607,
    });
  let slot3612 = slot3611,
    slot3613 = slot3612?.subagents ?? EMPTY_SUBAGENTS,
    slot3614;
  slot3614 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot5138 =
      selectedThreadId == null
        ? null
        : (slot3613.find((item) => {
            let { threadId } = item;
            return threadId === selectedThreadId;
          }) ?? null);
    if (selectedThreadId != null) {
      if (slot5138 != null && slot5138.status === "done") {
        let slot8737 =
            slot3612?.activationIdByThreadId.get(slot5138.threadId) ??
            `initial:${slot5138.threadId}`,
          slot8738 = () => {
            return onSelect(null);
          };
        let slot8739;
        slot8739 = (
          <UseChatgptComposerControllerHelper276
            activationId={slot8737}
            conversationId={slot3605}
            isTurnLive={slot3607}
            shouldBlockExternalEgress={slot3606}
            subagent={slot5138}
            onBack={slot8738}
          />
        );
        slot3614 = slot8739;
        break bb0;
      }
      let slot5543 = slot5138?.statusMessage ?? null,
        slot5544 = slot5138?.status === "failed" ? "unavailable" : null,
        slot5545 = () => {
          return onSelect(null);
        };
      let slot5546;
      slot5546 = (
        <UseChatgptComposerControllerHelper281
          conversationId={slot3605}
          finalResponse={slot5543}
          finalResponseStatus={slot5544}
          shouldBlockExternalEgress={slot3606}
          subagent={slot5138}
          threadId={selectedThreadId}
          onBack={slot5545}
        />
      );
      slot3614 = slot5546;
      break bb0;
    }
  }
  if (slot3614 !== Symbol.for("react.early_return_sentinel")) return slot3614;
  return (
    <UseChatgptComposerControllerHelper277
      subagents={slot3613}
      onSelect={onSelect}
    />
  );
}
function useChatgptComposerControllerHelper276(request2587) {
  const UseChatgptComposerControllerHelper281 =
    useChatgptComposerControllerHelper281;
  let {
      activationId,
      conversationId,
      isTurnLive,
      shouldBlockExternalEgress,
      subagent,
      onBack,
    } = request2587,
    slot7285 = {
      activationId,
      conversationId,
      isTurnLive,
      threadId: subagent.threadId,
    };
  let slot7286 = appInitialIT(getChatgptSubagentFinalResponseAtom(), slot7285),
    slot7287 = slot7286.data ?? subagent.statusMessage,
    slot7288 =
      slot7286.data != null || subagent.statusMessage != null
        ? null
        : slot7286.isError
          ? "unavailable"
          : "loading";
  return (
    <UseChatgptComposerControllerHelper281
      conversationId={conversationId}
      finalResponse={slot7287}
      finalResponseStatus={slot7288}
      shouldBlockExternalEgress={shouldBlockExternalEgress}
      subagent={subagent}
      threadId={subagent.threadId}
      onBack={onBack}
    />
  );
}
function useChatgptComposerControllerHelper277(request1064) {
  const AppInitialGft = appInitialGft;
  const SubagentPanelBody = slot4287;
  let { subagents, onSelect } = request1064,
    slot4287,
    slot4288,
    slot4289,
    slot4290,
    slot4291,
    slot4292;
  {
    let slot6994 = subagents.filter();
    slot4288 = subagents.filter();
    slot4287 = subagentPanelN;
    let slot6995 = (
      <AppInitialGft
        id="chatgptConversations.subagents.panel.noActive"
        defaultMessage="No active subagents"
        description="Empty-state text in the Active section of the Work subagents right side panel when no delegated agents are currently working."
      />
    );
    let slot6996 = slot6994.map(),
      slot6997;
    slot6997 = (
      <AppInitialGft
        id="chatgptConversations.subagents.panel.active"
        defaultMessage="Active"
        description="Short section heading in the Work subagents right side panel for delegated agents that are waiting or working. The sibling section is Done."
      />
    );
    slot4292 = {
      emptyState: slot6995,
      id: "active",
      items: slot6996,
      title: slot6997,
      visibleItemLimit: 4,
    };
    slot4289 = "mt-6";
    slot4290 = "done";
    slot4291 = slot4288.map();
  }
  let slot4293 = (
    <AppInitialGft
      id="chatgptConversations.subagents.panel.done"
      defaultMessage={"Done · {count}"}
      description="Short section heading in the Work subagents right side panel for completed or failed delegated agents. The count placeholder is the number of agents in this section. The sibling section is Active."
      values={{
        count: slot4288.length,
      }}
    />
  );
  let slot4294 = {
    className: slot4289,
    id: slot4290,
    items: slot4291,
    title: slot4293,
    visibleItemLimit: 10,
  };
  let slot4295 = [slot4292, slot4294];
  return <SubagentPanelBody sections={slot4295} onSelect={onSelect} />;
}

export {
  useChatgptComposerControllerHelper275,
  useChatgptComposerControllerHelper276,
  useChatgptComposerControllerHelper277,
};
