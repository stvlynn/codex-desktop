// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Work subagent detail view sections.

import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { cx as appInitialWft } from "../../ui/cx";
import { subagentPanelT } from "../../composer/subagent-panel";
import { useChatgptComposerControllerHelper247 } from "./chatgpt-safe-streaming-markdown";

function useChatgptComposerControllerHelper281(
  request330,
) {
  const AppInitialGft = appInitialGft;
  const SubagentPanelT = subagentPanelT;
  const UseChatgptComposerControllerHelper282 =
    useChatgptComposerControllerHelper282;
  const UseChatgptComposerControllerHelper283 =
    useChatgptComposerControllerHelper283;
  const UseChatgptComposerControllerHelper247 =
    useChatgptComposerControllerHelper247;
  let {
      conversationId,
      finalResponse,
      finalResponseStatus,
      shouldBlockExternalEgress,
      subagent,
      threadId,
      onBack,
    } = request330,
    slot2121 = appInitialJft(),
    slot2122 =
      slot2121.formatMessage({
        id: "chatgptConversations.subagents.panel.back",
        defaultMessage: "Back to subagents",
        description:
          "Accessible label for a button in the Work subagents right side panel that returns from one agent's detail view to the agent list.",
      });
  let slot2123 = subagent?.displayName ?? (
    <AppInitialGft
      id="chatgptConversations.subagents.nameFallback"
      defaultMessage="Subagent"
      description="Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name."
    />
  );
  let slot2124 = (
    <SubagentPanelT
      backAriaLabel={slot2122}
      label={slot2123}
      seed={threadId}
      onBack={onBack}
    />
  );
  let slot2125 = (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
      {subagent == null ? (
        <div className="text-sm text-token-text-secondary">
          {
            <AppInitialGft
              id="chatgptConversations.subagents.panel.unavailable"
              defaultMessage="This subagent is no longer available on the current branch."
              description="Body text in the Work subagents right side panel when the selected delegated agent is absent after the user switches conversation branches."
            />
          }
        </div>
      ) : (
        <>
          {
            <UseChatgptComposerControllerHelper282
              title={
                <AppInitialGft
                  id="chatgptConversations.subagents.panel.status"
                  defaultMessage="Status"
                  description="Short section heading in a Work subagent detail view above the agent's current Waiting, Working, Done, or Failed status."
                />
              }
            >
              <span
                className={appInitialWft(
                  subagent.status === "failed" && "text-token-charts-red",
                )}
              >
                {
                  <UseChatgptComposerControllerHelper283
                    status={subagent.status}
                  />
                }
              </span>
            </UseChatgptComposerControllerHelper282>
          }
          {subagent.prompt == null ? null : (
            <UseChatgptComposerControllerHelper282
              title={
                <AppInitialGft
                  id="chatgptConversations.subagents.panel.delegatedTask"
                  defaultMessage="Delegated task"
                  description="Section heading in a Work subagent detail view above the prompt that the parent task delegated to this agent."
                />
              }
            >
              <p className="whitespace-pre-wrap">{subagent.prompt}</p>
            </UseChatgptComposerControllerHelper282>
          )}
          {finalResponse == null ? null : (
            <UseChatgptComposerControllerHelper282
              title={
                <AppInitialGft
                  id="chatgptConversations.subagents.panel.response"
                  defaultMessage="Final response"
                  description="Section heading in a Work subagent detail view above the agent's completed response to its delegated task."
                />
              }
            >
              <UseChatgptComposerControllerHelper247
                className={
                  "[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0"
                }
                conversationId={conversationId}
                externalResourcePolicy={
                  shouldBlockExternalEgress ? "restricted" : "allow"
                }
                isStreaming={false}
                textStyle={{
                  kind: "assistant-message",
                }}
              >
                {finalResponse}
              </UseChatgptComposerControllerHelper247>
            </UseChatgptComposerControllerHelper282>
          )}
          {finalResponseStatus == null ? null : (
            <UseChatgptComposerControllerHelper282
              title={
                <AppInitialGft
                  id="chatgptConversations.subagents.panel.response"
                  defaultMessage="Final response"
                  description="Section heading in a Work subagent detail view above the agent's completed response to its delegated task."
                />
              }
            >
              <span className="text-token-text-secondary">
                {finalResponseStatus === "loading" ? (
                  <AppInitialGft
                    id="chatgptConversations.subagents.panel.response.loading"
                    defaultMessage="Loading the final response…"
                    description="Loading message in a Work subagent detail view while the completed child task's final response is being retrieved."
                  />
                ) : (
                  <AppInitialGft
                    id="chatgptConversations.subagents.panel.response.unavailable"
                    defaultMessage="No final response is available."
                    description="Fallback message in a Work subagent detail view when a stopped child task did not provide a final response or retrieval failed."
                  />
                )}
              </span>
            </UseChatgptComposerControllerHelper282>
          )}
        </>
      )}
    </div>
  );
  return (
    <div className="flex h-full min-h-0 flex-col">
      {slot2124}
      {slot2125}
    </div>
  );
}
function useChatgptComposerControllerHelper282(
  request3857,
) {
  let { children, title } = request3857,
    slot9713 = (
      <h2 className="mb-2 text-sm font-medium text-token-text-tertiary">
        {title}
      </h2>
    );
  let slot9714 = (
    <div className="text-sm leading-6 text-token-foreground">{children}</div>
  );
  return (
    <section className="mb-6 last:mb-0">
      {slot9713}
      {slot9714}
    </section>
  );
}
function useChatgptComposerControllerHelper283(
  request1395,
) {
  const AppInitialGft = appInitialGft;
  let { status } = request1395;
  switch (status) {
    case "waiting": {
      let slot11494;
      return (
        <AppInitialGft
          id="chatgptConversations.subagents.status.waiting"
          defaultMessage="Waiting"
          description="Short status label in the Work subagents right side panel for a delegated agent waiting to start. Sibling statuses are Working, Done, and Failed."
        />
      );
    }
    case "working": {
      let slot11486;
      return (
        <AppInitialGft
          id="chatgptConversations.subagents.status.working"
          defaultMessage="Working"
          description="Short status label in the Work subagents right side panel for a delegated agent currently working. Sibling statuses are Waiting, Done, and Failed."
        />
      );
    }
    case "done": {
      let slot11247;
      return (
        <AppInitialGft
          id="chatgptConversations.subagents.status.done"
          defaultMessage="Done"
          description="Short status label in the Work subagents right side panel for a delegated agent that stopped normally, was interrupted, or shut down. Sibling statuses are Waiting, Working, and Failed."
        />
      );
    }
    case "failed": {
      let slot11425;
      return (
        <AppInitialGft
          id="chatgptConversations.subagents.status.failed"
          defaultMessage="Failed"
          description="Short status label in the Work subagents right side panel for a delegated agent that ended with an error. Sibling statuses are Waiting, Working, and Done."
        />
      );
    }
  }
}



export {
  useChatgptComposerControllerHelper281,
  useChatgptComposerControllerHelper282,
  useChatgptComposerControllerHelper283,
};
