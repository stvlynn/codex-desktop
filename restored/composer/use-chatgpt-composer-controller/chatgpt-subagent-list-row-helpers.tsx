// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Subagent list row predicates / mappers for the Work side panel.

import { isWaitingOrWorkingStatus as appInitialNF } from "../../conversation/is-waiting-or-working-status";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { cx as appInitialWft } from "../../ui/cx";
import { useChatgptComposerControllerHelper283 } from "./chatgpt-subagent-detail-view";

function useChatgptComposerControllerHelper278(request11215) {
  let { status } = request11215;
  return !appInitialNF(status);
}

function useChatgptComposerControllerHelper279(request11221) {
  let { status } = request11221;
  return appInitialNF(status);
}

function useChatgptComposerControllerHelper280(request2420) {
  const AppInitialGft = appInitialGft;
  const UseChatgptComposerControllerHelper283 =
    useChatgptComposerControllerHelper283;
  let slot6954 =
    request2420.statusMessage ??
    (appInitialNF(request2420.status) ? request2420.prompt : null);
  return {
    avatarSeed: request2420.threadId,
    id: request2420.threadId,
    label: request2420.displayName ?? (
      <AppInitialGft
        id="chatgptConversations.subagents.nameFallback"
        defaultMessage="Subagent"
        description="Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name."
      />
    ),
    preview:
      slot6954 ??
      (appInitialNF(request2420.status) ? null : request2420.status ===
        "done" ? (
        <AppInitialGft
          id="chatgptConversations.subagents.panel.preview.finished"
          defaultMessage="Finished"
          description="Short fallback preview in the Work subagents side panel when a completed agent's final response is still loading or unavailable."
        />
      ) : (
        <AppInitialGft
          id="chatgptConversations.subagents.panel.preview.stopped"
          defaultMessage="Stopped"
          description="Short fallback preview in the Work subagents side panel when a failed agent did not provide a final response."
        />
      )),
    previewLineCount: 2,
    trailing: (
      <span
        className={appInitialWft(
          request2420.status === "failed" && "text-token-charts-red",
        )}
      >
        {<UseChatgptComposerControllerHelper283 status={request2420.status} />}
      </span>
    ),
  };
}

export {
  useChatgptComposerControllerHelper278,
  useChatgptComposerControllerHelper279,
  useChatgptComposerControllerHelper280,
};
