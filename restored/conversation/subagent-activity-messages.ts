// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `G6` near export `Kc`).

import { defineMessages } from "react-intl";

export const subagentActivityMessages = defineMessages({
  defaultName: {
    id: "localConversation.subagentActivity.defaultName",
    defaultMessage: "Agent",
    description:
      "Fallback name for a subagent when no specific name is available",
  },
  startedWorking: {
    id: "localConversation.subagentActivity.summary.startedWorking",
    defaultMessage: "{displayName} started working",
    description:
      "Subagent activity summary shown when a subagent starts working",
  },
  updated: {
    id: "localConversation.subagentActivity.summary.updated",
    defaultMessage: "{displayName} updated",
    description:
      "Subagent activity summary shown when a subagent reports an update",
  },
  interrupted: {
    id: "localConversation.subagentActivity.summary.interrupted",
    defaultMessage: "{displayName} interrupted",
    description:
      "Subagent activity summary shown when a subagent is interrupted",
  },
  groupStartedWorking: {
    id: "localConversation.subagentActivity.group.startedWorking",
    defaultMessage: "started working",
    description:
      "Shared status shown after subagent chips when subagents start working",
  },
  groupUpdated: {
    id: "localConversation.subagentActivity.group.updated",
    defaultMessage: "updated",
    description:
      "Shared status shown after subagent chips when subagents report an update",
  },
  groupInterrupted: {
    id: "localConversation.subagentActivity.group.interrupted",
    defaultMessage: "interrupted",
    description:
      "Shared status shown after subagent chips when subagent work is interrupted",
  },
  groupFinished: {
    id: "localConversation.subagentActivity.group.finished",
    defaultMessage: "finished",
    description:
      "Shared status shown after subagent chips when all subagents finish",
  },
  openSubagent: {
    id: "localConversation.subagentActivity.openSubagent",
    defaultMessage: "Open {displayName} subagent",
    description: "Accessible label for opening a subagent activity row",
  },
});
