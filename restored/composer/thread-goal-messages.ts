// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Toast and dialog copy for Codex thread goal actions (`nKi`/`rKi`/`iKi` and related UI).

import { defineMessages } from "react-intl";

export const threadGoalMessages = defineMessages({
  setError: {
    id: "composer.threadGoal.setError",
    defaultMessage: "Failed to set goal",
    description: "Toast shown when setting a thread goal fails",
  },
  statusUpdateError: {
    id: "composer.threadGoal.statusUpdateError",
    defaultMessage: "Failed to update goal",
    description: "Toast shown when updating a thread goal fails",
  },
  clearError: {
    id: "composer.threadGoal.clearError",
    defaultMessage: "Failed to clear goal",
    description: "Toast shown when clearing a thread goal fails",
  },
  materializeError: {
    id: "composer.threadGoal.materializeError",
    defaultMessage: "Failed to prepare goal attachments",
    description:
      "Toast shown when goal attachments cannot be written to the execution host",
  },
  replaceConfirmationTitle: {
    id: "composer.threadGoal.replaceConfirmation.title",
    defaultMessage: "Replace current goal?",
    description: "Title for the dialog confirming a task goal replacement.",
  },
  replaceConfirmationSubtitle: {
    id: "composer.threadGoal.replaceConfirmation.subtitle",
    defaultMessage:
      "This will keep the chat but replace the saved goal with your current composer text",
    description: "Subtitle for the dialog confirming a chat goal replacement.",
  },
  replaceConfirmationCancel: {
    id: "composer.threadGoal.replaceConfirmation.cancel",
    defaultMessage: "Cancel",
    description:
      "Cancel button for the task goal replacement confirmation dialog.",
  },
  replaceConfirmationConfirm: {
    id: "composer.threadGoal.replaceConfirmation.confirm",
    defaultMessage: "Replace goal",
    description:
      "Confirm button for the task goal replacement confirmation dialog.",
  },
  editSaveError: {
    id: "composer.threadGoal.editSaveError",
    defaultMessage: "Failed to save goal objective",
    description: "Toast shown when an edited goal objective cannot be saved",
  },
  editLoadError: {
    id: "composer.threadGoal.editLoadError",
    defaultMessage: "Failed to load goal objective",
    description: "Toast shown when a file-backed goal cannot be loaded",
  },
});
