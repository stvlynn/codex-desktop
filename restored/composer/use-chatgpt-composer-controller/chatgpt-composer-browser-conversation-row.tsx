// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Single ChatGPT browser-conversation turn row.

import { collectUniqueAppgenApps as AppInitialO5 } from "../../apps/collect-unique-appgen-apps";
import {
  chatgptConversationFlagsAtom as appInitialCP,
  useAppScopeAtomValue as appInitialIT,
} from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_umt_Init as appInitialUmt } from "../../boundaries/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useChatgptComposerControllerHelper19 } from "./chatgpt-turn-sources-footer";
import { useChatgptComposerControllerHelper269 } from "./chatgpt-safety-review-banner";
import { useChatgptComposerControllerHelper257 } from "./chatgpt-branch-source-divider";
import { useChatgptComposerControllerHelper290 } from "./chatgpt-turn-sources-from-items";
import { allocateStableActivityItemKeys as AppInitialHF } from "../../conversation/allocate-stable-activity-item-keys";
import { asThreadId as appInitialVgt } from "../../conversation/as-thread-id";
import { detectVisualizationPlanMode as appInitialJd } from "../../conversation/detect-visualization-plan-mode";
import { EndResourceList as AppInitialHc2 } from "../../conversation/end-resource-list";
import { PlanProgressDonut as appInitialHc } from "../../conversation/plan-progress-donut";
import { TurnSourcesVisibility as turnSourcesModelI } from "../../conversation/turn-sources-model";
import { serializeElementSelection as appInitialVL } from "../../dom/serialize-element-selection";
import { areVisualizationFeatureGatesEnabled as AppInitialON } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { useCodexAppsList as appInitialCK } from "../../hooks/use-codex-apps-list";
import { useEventCallback as appInitialJlt } from "../../hooks/use-event-callback";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import {
  $S,
  useChatgptComposerControllerHelper295,
  useChatgptComposerControllerHelper296,
  useChatgptComposerControllerHelper297,
  useChatgptComposerControllerHelper298,
  useChatgptComposerControllerHelper299,
  useChatgptComposerControllerHelper300,
  useChatgptComposerControllerHelper301,
  useChatgptComposerControllerHelper302,
  useChatgptComposerControllerHelper303,
  useChatgptComposerControllerHelper304,
  useChatgptComposerControllerHelper309,
  useChatgptComposerControllerHelper310,
  useChatgptComposerControllerHelper311,
} from "./chatgpt-browser-conversation-row-predicates";
import { useChatgptComposerControllerHelper305 } from "./chatgpt-browser-conversation-item";
import { useChatgptComposerControllerHelper307 } from "./chatgpt-reasoning-group";
import { useChatgptComposerControllerHelper308 } from "./chatgpt-turn-message-actions";
import type { ChatgptComposerBrowserConversationRowProps } from "./types";

reactCompilerRuntime();
const slot376 = rolldownRuntimeS(appInitialUmt(), 1) as {
  default: (...args: any[]) => any;
};
const slot378: any[] = [];
const _C = rolldownRuntimeS(react(), 1) as {
  useRef: (init: null) => { current: any };
};

export function _useChatgptComposerControllerL(
  request323: ChatgptComposerBrowserConversationRowProps,
) {
  const AppInitialHc2 = appInitialHc;
  const TurnSourcesModelI = turnSourcesModelI;
  const UseChatgptComposerControllerHelper269 =
    useChatgptComposerControllerHelper269;
  const UseChatgptComposerControllerHelper19 =
    useChatgptComposerControllerHelper19;
  const UseChatgptComposerControllerHelper308 =
    useChatgptComposerControllerHelper308;
  const UseChatgptComposerControllerHelper257 =
    useChatgptComposerControllerHelper257;
  let {
      browserConversationId,
      conversationId,
      branchingMessageId = null,
      hostId,
      isMostRecentTurn,
      onEditLatestUserMessage,
      onFork,
      pendingSubmissionAttachments,
      safetyReview = null,
      turn,
      turnId,
    } = request323,
    slot2060 = `chatgpt:${conversationId}`,
    slot2061 = appInitialVgt(slot2060);
  let slot2062 = slot2061,
    slot2063 = _C.useRef(null),
    slot2064 = appInitialIT(appInitialCP, conversationId),
    slot2065 = AppInitialON(),
    slot2066 = {
      hostId,
    };
  let { data } = appInitialCK(slot2066),
    slot2067 = data === undefined ? slot378 : data,
    slot2068 = turn.items.filter(useChatgptComposerControllerHelper304),
    slot2069 = slot2068.flatMap(useChatgptComposerControllerHelper303),
    slot2070 = slot376.default(
      slot2068,
      useChatgptComposerControllerHelper302,
    )?.reasoningRecap,
    slot2071 = turn.items.flatMap(useChatgptComposerControllerHelper301),
    slot2072 = slot2071
      .filter(useChatgptComposerControllerHelper300)
      .at(-1)?.messageId,
    slot2073 = appInitialJlt(() => {
      return appInitialJd(
        slot2071.flatMap(useChatgptComposerControllerHelper299),
        [],
      );
    }),
    slot2074 =
      slot2065 && turn.status === "complete"
        ? AppInitialO5(slot2071.filter(useChatgptComposerControllerHelper298))
        : [],
    slot2075 = slot2074;
  let slot2076 = slot2075,
    slot2077 = turn.items.findIndex(useChatgptComposerControllerHelper297);
  let slot2078 = slot2077,
    slot2079 = slot2068.every($S),
    slot2080 = slot2071.some(useChatgptComposerControllerHelper296);
  let slot2081 = slot2080,
    slot2082 = useChatgptComposerControllerHelper310(turn.items);
  let slot2083 = slot2082,
    slot2084 =
      slot2083 == null
        ? slot2071.find(useChatgptComposerControllerHelper295)?.id
        : undefined,
    slot2085 = useChatgptComposerControllerHelper311(turn.items);
  let slot2086 = slot2085,
    slot2087 = AppInitialHF(turn.items);
  let slot2088 = slot2087,
    slot2089 =
      turn.status === "complete" && slot2083?.completed === true
        ? useChatgptComposerControllerHelper290(turn.items)
        : [];
  let slot2090 = slot2089,
    slot2091 = turn.items.map((item, index) => {
      const UseChatgptComposerControllerHelper307 =
        useChatgptComposerControllerHelper307;
      const UseChatgptComposerControllerHelper305 =
        useChatgptComposerControllerHelper305;
      return item.type === "chatgpt-reasoning-group" ? (
        index === slot2078 ? (
          <UseChatgptComposerControllerHelper307
            key={`reasoning-${slot2079 ? "complete" : "active"}`}
            assistantHeadingImageId={slot2084}
            browserConversationId={browserConversationId}
            completed={slot2079}
            conversationId={conversationId}
            getVisualizeTurnTriggerType={slot2073}
            hostId={hostId}
            items={slot2069}
            localConversationId={slot2062}
            reasoningRecap={slot2070}
            resolvedApps={slot2067}
            shouldBlockExternalEgress={slot2064}
            turnId={turnId}
          />
        ) : null
      ) : (
        <UseChatgptComposerControllerHelper305
          key={slot2088[index]}
          assistantHeadingImageId={slot2084}
          assistantMessageRootRef={item === slot2083 ? slot2063 : undefined}
          browserConversationId={browserConversationId}
          conversationId={conversationId}
          getVisualizeTurnTriggerType={slot2073}
          hostId={hostId}
          index={index}
          item={item}
          items={turn.items}
          localConversationId={slot2062}
          onEditMessage={
            item.type === "user-message" &&
            slot2072 != null &&
            item.messageId === slot2072 &&
            item.targetedReplyLabel == null &&
            onEditLatestUserMessage != null
              ? (request11660) => {
                  return onEditLatestUserMessage(slot2072, request11660);
                }
              : undefined
          }
          pendingSubmissionAttachments={pendingSubmissionAttachments}
          resolvedApps={slot2067}
          searchUnitKey={useChatgptComposerControllerHelper309(
            item,
            index,
            turnId,
          )}
          shouldBlockExternalEgress={slot2064}
          turnId={turnId}
        />
      );
    }),
    slot2092 =
      slot2076.length === 0 ? null : (
        <AppInitialHc2
          conversationId={browserConversationId ?? conversationId}
          cwd={null}
          hostId={hostId}
          resources={slot2076}
          turnId={turnId}
        />
      );
  let slot2093 = (
    <div className="flex flex-col gap-3">
      {slot2091}
      {slot2092}
    </div>
  );
  let slot2094 =
    safetyReview?.message == null ||
    safetyReview.protectionType == null ? null : (
      <TurnSourcesModelI isVisible={safetyReview.active}>
        <UseChatgptComposerControllerHelper269
          conversationId={conversationId}
          isShimmering={true}
          message={safetyReview.message}
          protectionType={safetyReview.protectionType}
          requestId={safetyReview.requestId}
          requestModel={safetyReview.requestModel}
          retryPending={safetyReview.retryPending}
        />
      </TurnSourcesModelI>
    );
  let slot2095 =
    slot2090.length > 0 ? (
      <UseChatgptComposerControllerHelper19
        hostId={hostId}
        loadRemoteFavicons={!slot2064}
        requiresConfirmation={slot2064}
        sources={slot2090}
      />
    ) : null;
  let slot2096 = slot2081 || slot2074.length > 0,
    slot2097 = () => {
      let slot15075 = slot2063.current?.querySelector(
        "[data-selected-text-overlay-target]",
      );
      return slot15075 == null
        ? null
        : (appInitialVL(slot15075)?.htmlText ?? null);
    };
  let slot2098 = (
    <UseChatgptComposerControllerHelper308
      assistantItem={slot2083}
      branchingMessageId={branchingMessageId}
      hasArtifacts={slot2096}
      isMostRecentTurn={isMostRecentTurn}
      localConversationId={slot2062}
      onFork={onFork}
      turnId={turnId}
      getCopyHtml={slot2097}
    />
  );
  let slot2099 =
    slot2086 == null ? null : (
      <UseChatgptComposerControllerHelper257 branchSource={slot2086} />
    );
  return (
    <div className="group flex flex-col py-2">
      {slot2093}
      {slot2094}
      {slot2095}
      {slot2098}
      {slot2099}
    </div>
  );
}

export const ChatgptComposerBrowserConversationRow =
  _useChatgptComposerControllerL as (
    props: ChatgptComposerBrowserConversationRowProps,
  ) => JSX.Element;
export { _useChatgptComposerControllerL };
