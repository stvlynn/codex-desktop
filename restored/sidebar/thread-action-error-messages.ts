// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `DK` / export `Zk`).

import { defineMessages } from "react-intl";

export const threadActionErrorMessages = defineMessages({
  archiveThreadError: {
    id: "sidebarElectron.archiveThreadError",
    defaultMessage: "Failed to archive chat",
    description: "Error message when archiving a local chat",
  },
  interruptThreadError: {
    id: "sidebarElectron.interruptThreadError",
    defaultMessage: "Failed to stop chat",
    description: "Error message when stopping an in-progress local chat",
  },
  renameThreadError: {
    id: "sidebarElectron.renameThreadError",
    defaultMessage: "Failed to rename chat",
    description: "Error message when renaming a local chat",
  },
  copyWorkingDirectory: {
    id: "threadHeader.copyWorkingDirectory",
    defaultMessage: "Copy working directory",
    description: "Menu item to copy the current working directory",
  },
  copyWorkingDirectorySuccess: {
    id: "threadHeader.copyWorkingDirectorySuccess",
    defaultMessage: "Copied working directory",
    description:
      "Toast shown after copying the current working directory to the clipboard",
  },
  copySessionId: {
    id: "threadHeader.copySessionId",
    defaultMessage: "Copy session ID",
    description: "Menu item to copy the current session ID",
  },
  copyAppLink: {
    id: "threadHeader.copyAppLink",
    defaultMessage: "Copy deeplink",
    description: "Menu item to copy a deeplink to this chat",
  },
  copyConversationMarkdown: {
    id: "threadHeader.copyConversationMarkdown",
    defaultMessage: "Copy as Markdown",
    description: "Menu item to copy the current conversation as Markdown",
  },
  copyConversationMarkdownSuccess: {
    id: "threadHeader.copyConversationMarkdownSuccess",
    defaultMessage: "Copied conversation as Markdown",
    description:
      "Toast shown after copying the current conversation as Markdown to the clipboard",
  },
  copyConversationMarkdownError: {
    id: "threadHeader.copyConversationMarkdownError",
    defaultMessage: "Failed to copy conversation as Markdown",
    description:
      "Toast shown when copying the current conversation as Markdown to the clipboard fails",
  },
  openInNewWindow: {
    id: "threadHeader.openInNewWindow",
    defaultMessage: "Open in new window",
    description: "Menu item to open the current chat in a new window",
  },
  moreActions: {
    id: "threadHeader.moreActions",
    defaultMessage: "Chat actions",
    description: "Aria label for chat actions dropdown",
  },
  renameThread: {
    id: "sidebarElectron.renameThread",
    defaultMessage: "Rename chat",
    description: "Menu item to rename a local chat",
  },
  archiveThread: {
    id: "sidebarElectron.archiveThread",
    defaultMessage: "Archive chat",
    description: "Menu item to archive a local chat",
  },
  addAutomation: {
    id: "sidebarElectron.addAutomation",
    defaultMessage: "Add scheduled task…",
    description:
      "Menu item to create a new scheduled task attached to a local task",
  },
  editAutomation: {
    id: "sidebarElectron.editAutomation",
    defaultMessage: "Edit scheduled task…",
    description:
      "Menu item to edit the scheduled task attached to a local task",
  },
  markThreadUnread: {
    id: "sidebarElectron.markThreadUnread",
    defaultMessage: "Mark as unread",
    description: "Menu item to mark a local task as unread",
  },
  markThreadRead: {
    id: "sidebarElectron.markThreadRead",
    defaultMessage: "Mark as read",
    description: "Menu item to mark a local task as read",
  },
  forkIntoLocal: {
    id: "threadHeader.forkIntoLocal",
    defaultMessage: "Continue in new chat",
    description:
      "Menu item to create a new local chat from the current chat in the current workspace",
  },
  forkIntoSameWorktree: {
    id: "threadHeader.forkIntoSameWorktree",
    defaultMessage: "Continue in new chat",
    description:
      "Menu item to create a new chat from the current chat in the same worktree",
  },
  forkIntoWorktree: {
    id: "threadHeader.forkIntoWorktree",
    defaultMessage: "Continue in new worktree",
    description:
      "Menu item to create a new chat from the current chat in a new worktree",
  },
  forkThreadError: {
    id: "threadHeader.forkThreadError",
    defaultMessage: "Failed to create chat",
    description: "Error message shown when continuing in a new chat fails",
  },
  forkThreadRequiresGitRepo: {
    id: "threadHeader.forkThreadRequiresGitRepo",
    defaultMessage:
      "A Git repository is required to continue in a new worktree",
    description:
      "Error message shown when trying to continue in a new worktree outside a Git repository",
  },
  forkPendingWorktreeTitle: {
    id: "threadHeader.forkPendingWorktreeTitle",
    defaultMessage: "New chat",
    description:
      "Default pending worktree label when continuing from an existing chat",
  },
  forkPendingWorktreePrompt: {
    id: "threadHeader.forkPendingWorktreePrompt",
    defaultMessage: "Continue this task in a new worktree",
    description:
      "Prompt text shown on the worktree init page for task continuation actions",
  },
});
