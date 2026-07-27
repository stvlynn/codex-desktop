// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages for cloud task row archive + default title (`HVl` inside `UVl` init).

import { defineMessages } from "react-intl";

/**
 * Messages co-located with the cloud-task-row init (`UVl` / export alias `bo`).
 * The export itself is an ESM init factory and is not mapped.
 */
export const cloudTaskRowMessages = defineMessages({
  archiveTask: {
    id: "codex.cloudTaskRow.archiveTask",
    defaultMessage: "Archive chat",
    description: "Label for archiving a cloud task",
  },
  defaultTaskTitle: {
    id: "codex.taskRow.title",
    defaultMessage: "New chat",
    description: "Default title for a Codex task that doesn't have a title",
  },
});
