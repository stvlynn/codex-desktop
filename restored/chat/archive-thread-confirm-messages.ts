// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Archive-chat confirmation dialog copy (bundle near init `Xzl` / export `jo`).

import { defineMessages } from "react-intl";

export const archiveThreadConfirmMessages = defineMessages({
  heartbeatTitle: {
    id: "threadHeader.archiveConfirmHeartbeatTitle",
    defaultMessage: "Archive chat and remove scheduled task?",
    description:
      "Title for archive chat confirmation dialog when the chat has an active scheduled task",
  },
  title: {
    id: "threadHeader.archiveConfirmTitle",
    defaultMessage: "Archive chat?",
    description: "Title for archive chat confirmation dialog",
  },
  heartbeatSubtitleNamed: {
    id: "threadHeader.archiveConfirmHeartbeatSubtitleNamed",
    defaultMessage:
      "This chat has an active scheduled task, {name}. Archiving the chat will also remove it and stop future runs.",
    description:
      "Subtitle for archive chat confirmation when a named scheduled task is active",
  },
  heartbeatSubtitleUnnamed: {
    id: "threadHeader.archiveConfirmHeartbeatSubtitleUnnamed",
    defaultMessage:
      "This chat has an active scheduled task. Archiving the chat will also remove it and stop future runs.",
    description:
      "Subtitle for archive chat confirmation when an unnamed scheduled task is active",
  },
  subtitle: {
    id: "threadHeader.archiveConfirmSubtitle",
    defaultMessage: "You can find it later in your archived chats.",
    description: "Subtitle for archive chat confirmation dialog",
  },
  cancel: {
    id: "threadHeader.archiveConfirmCancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for archive chat confirmation dialog",
  },
  heartbeatConfirm: {
    id: "threadHeader.archiveConfirmHeartbeatConfirm",
    defaultMessage: "Archive and remove",
    description:
      "Confirm button label for archive chat confirmation dialog when the chat has an active automation",
  },
  confirm: {
    id: "threadHeader.archiveConfirmConfirm",
    defaultMessage: "Archive",
    description: "Confirm button label for archive chat confirmation dialog",
  },
});
