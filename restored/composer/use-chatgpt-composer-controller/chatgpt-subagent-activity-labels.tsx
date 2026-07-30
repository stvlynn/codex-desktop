// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Inline Work subagent activity overflow / status label fragments.

import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";

function useChatgptComposerControllerHelper285(request5424) {
  const AppInitialGft = appInitialGft;
  return (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.others"
      defaultMessage={
        "and {count, plural, one {# other subagent} other {# other subagents}}"
      }
      description="Space-limited link in an inline Work activity summary that opens the full subagent panel. The count placeholder is the number of additional subagents hidden after the first three. The lifecycle status follows this link visually."
      values={{
        count: request5424,
      }}
    />
  );
}

function useChatgptComposerControllerHelper286({ activities, completed }) {
  const AppInitialGft = appInitialGft;
  return activities.some(({ activityKind }) => {
    return activityKind === "interrupted";
  }) ? (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.interrupted"
      defaultMessage={
        "{activityCount, plural, one {was interrupted} other {were interrupted}}"
      }
      description="Short status fragment following subagent name chips in an inline Work activity summary. The activityCount placeholder is the number of named and hidden subagents and controls singular or plural grammar."
      values={{
        activityCount: activities.length,
      }}
    />
  ) : completed &&
    activities.some(({ status }) => {
      return status === "failed";
    }) ? (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.finishedWithErrors"
      defaultMessage="finished with errors"
      description="Short status fragment following subagent name chips in an inline Work activity summary when at least one subagent failed."
    />
  ) : completed ? (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.finished"
      defaultMessage="finished"
      description="Short status fragment following subagent name chips in an inline Work activity summary when all subagents finished successfully."
    />
  ) : activities.some(({ activityKind }) => {
      return activityKind === "interacted";
    }) ? (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.updated"
      defaultMessage="made progress"
      description="Short status fragment following subagent name chips in an inline Work activity summary when subagents reported progress."
    />
  ) : (
    <AppInitialGft
      id="chatgptConversations.subagents.inline.started"
      defaultMessage="started working"
      description="Short status fragment following subagent name chips in an inline Work activity summary when subagents started working."
    />
  );
}

export {
  useChatgptComposerControllerHelper285,
  useChatgptComposerControllerHelper286,
};
