// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Assistant-message body + moderation footnotes for ChatGPT browser rows.

import {
  chatgptConversationFlagsAtom as appInitialLP,
  chatgptConversationServerIdAtom as appInitialFP,
  useAppScopeAtomValue as appInitialIT,
  useAppScopeValue as appInitialRT,
} from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_BI_Init as _appInitialBI,
  ensureComposerEsm_J0_Init as appInitialJ0,
  ensureComposerEsm_cP_Init as appInitialCP,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { chatgptBrowserHostContext } from "./chatgpt-browser-host-context";
import { chatgptComposerStreamingContext } from "./chatgpt-composer-streaming-context";
import { useChatgptComposerControllerHelper256 } from "./chatgpt-content-reference-footnote-registry";
import { useChatgptComposerControllerHelper248 } from "./chatgpt-moderation-disclaimers";
import { useChatgptComposerControllerHelper247 } from "./chatgpt-safe-streaming-markdown";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useContext: (context: unknown) => any;
};
const FADE_SEGMENT_DELAY_MS = 16;
const FADE_SEGMENT_MAX_DELAY_MS = 96;

function useChatgptComposerControllerHelper255(
  request398,
) {
  const UseChatgptComposerControllerHelper247 =
    useChatgptComposerControllerHelper247;
  const UseChatgptComposerControllerHelper248 =
    useChatgptComposerControllerHelper248;
  const AllowProvider = slot2349;
  const HostProvider = slot2350;
  let {
      item,
      browserConversationId,
      conversationId,
      cwd,
      getVisualizeTurnTriggerType,
      hostId,
      turnId,
    } = request398,
    slot2344 = appInitialRT(appInitialJ0),
    slot2345 =
      React.useContext(
        chatgptComposerStreamingContext,
      ) && !item.completed,
    slot2346 = appInitialIT(
      appInitialFP,
      conversationId,
    ),
    slot2347 = appInitialIT(
      appInitialLP,
      conversationId,
    ),
    slot2348 = appInitialIT(
      appInitialCP,
      conversationId,
    ),
    slot2349,
    slot2350,
    slot2351,
    slot2352,
    slot2353,
    slot2354,
    slot2355,
    slot2356;
  {
    let slot3481 =
      item.sourcesFooterReferences != null &&
      item.sourcesFooterReferences.length > 0
        ? []
        : item.contentReferences.filter(_appInitialBI);
    slot2351 =
      browserConversationId === undefined
        ? (slot2346 ?? conversationId)
        : browserConversationId;
    slot2350 =
      chatgptBrowserHostContext.Provider;
    slot2356 = {
      browserConversationId: slot2351,
      conversationOrigin: slot2347,
      contentReferenceMessageIds: item.contentReferenceMessageIds,
      contentReferences: item.contentReferences,
      dilViewState: item.dilViewState,
      conversationId,
      hostId,
      isStreaming: slot2345,
      messageId: item.messageId,
      shouldBlockExternalEgress: slot2348,
      turnId,
      writingBlockIndexes: item.writingBlockIndexes,
    };
    slot2349 = appInitialIL.Provider;
    slot2355 =
      slot2348 ? "restricted" : "allow";
    slot2352 = "group flex min-w-0 flex-col";
    let slot3482;
    slot3482 = {
      kind: "assistant-message",
    };
    slot2353 = (
      <UseChatgptComposerControllerHelper247
        className={
          "[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0"
        }
        textStyle={slot3482}
        conversationId={slot2351}
        cwd={cwd}
        getVisualizeTurnTriggerType={getVisualizeTurnTriggerType}
        hostId={hostId}
        turnId={turnId}
        allowWideBlocks={true}
        fadeSegmentDelayMs={FADE_SEGMENT_DELAY_MS}
        fadeSegmentMaxDelayMs={FADE_SEGMENT_MAX_DELAY_MS}
        isStreaming={slot2345}
        forceCodeBlockWordWrap={false}
        isBrowserSidebarEnabled={slot2344}
        openFileLinksInSidePanel={true}
        renderCodeBlocksAsWritingBlocks={false}
        renderInlineVisualizations={true}
      >
        {item.content}
      </UseChatgptComposerControllerHelper247>
    );
    slot2354 =
      slot3481.length > 0 ? (
        <div className="mt-2">
          {slot3481.map(
            useChatgptComposerControllerHelper256,
          )}
        </div>
      ) : null;
  }
  let slot2357 = (
    <UseChatgptComposerControllerHelper248
      conversationId={slot2351}
      hostId={hostId}
      moderationDisclaimers={item.clientMetadata}
      shouldBlockExternalEgress={slot2348}
    />
  );
  let slot2358 = (
    <div className={slot2352}>
      {slot2353}
      {slot2354}
      {slot2357}
    </div>
  );
  let slot2359 = (
    <AllowProvider
      value={slot2355}
    >
      {slot2358}
    </AllowProvider>
  );
  return (
    <HostProvider
      value={slot2356}
    >
      {slot2359}
    </HostProvider>
  );
}

export { useChatgptComposerControllerHelper255 };
