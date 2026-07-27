// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Inline react-intl messages from transferred-terminal workspace warning (`wzi` / export `hU` init thunk).

import { defineMessages } from "react-intl";

export const terminalWorkspaceWarningMessages = defineMessages({
  message: {
    id: "terminal.workspaceWarning.message",
    defaultMessage:
      "This terminal's workspace does not match this chat's current worktree",
    description:
      "Warning shown when a terminal belongs to a different workspace than its chat",
  },
  dismiss: {
    id: "terminal.workspaceWarning.dismiss",
    defaultMessage: "Dismiss",
    description:
      "Button that dismisses the transferred terminal workspace warning",
  },
  openNewTerminal: {
    id: "terminal.workspaceWarning.openNewTerminal",
    defaultMessage: "Open new terminal",
    description:
      "Button that opens a new terminal in the chat's current worktree",
  },
});
