// Restored from ref/webview/assets/_virtual_settings-search-documents-BNScSdXi.js
// Settings search messages for section "worktrees".

export type SettingsSearchMessage = {
  id: string;
  defaultMessage?: string;
};
export const worktreesMessages: SettingsSearchMessage[] = [
  {
    defaultMessage: "Worktree root",
    id: "settings.git.worktreeRoot.ariaLabel",
  },
  {
    defaultMessage:
      "Directory where ChatGPT creates managed worktrees; leave blank to use the default location",
    id: "settings.git.worktreeRoot.description",
  },
  {
    defaultMessage: "Worktree root",
    id: "settings.git.worktreeRoot.label",
  },
  {
    defaultMessage: "Default",
    id: "settings.git.worktreeRoot.placeholder",
  },
  {
    defaultMessage: "Failed to save worktree root",
    id: "settings.git.worktreeRoot.save.error",
  },
  {
    defaultMessage: "Saved worktree root",
    id: "settings.git.worktreeRoot.save.success",
  },
  {
    defaultMessage: "Automatically delete old worktrees",
    id: "settings.worktrees.autoCleanup.ariaLabel",
  },
  {
    defaultMessage:
      "We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.",
    id: "settings.worktrees.autoCleanup.confirm.body",
  },
  {
    defaultMessage: "Keep automatic deletion",
    id: "settings.worktrees.autoCleanup.confirm.cancel",
  },
  {
    defaultMessage: "Disable automatic deletion",
    id: "settings.worktrees.autoCleanup.confirm.confirm",
  },
  {
    defaultMessage: "Disable automatic worktree deletion?",
    id: "settings.worktrees.autoCleanup.confirm.title",
  },
  {
    defaultMessage:
      "Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.",
    id: "settings.worktrees.autoCleanup.description",
  },
  {
    defaultMessage: "Automatically delete old worktrees",
    id: "settings.worktrees.autoCleanup.label",
  },
  {
    defaultMessage: "Automatic deletion disabled",
    id: "settings.worktrees.autoCleanup.save.disabled",
  },
  {
    defaultMessage: "Automatic deletion enabled",
    id: "settings.worktrees.autoCleanup.save.enabled",
  },
  {
    defaultMessage: "Failed to save automatic deletion setting",
    id: "settings.worktrees.autoCleanup.save.error",
  },
  {
    defaultMessage: "Untitled conversation",
    id: "settings.worktrees.conversation.untitled",
  },
  {
    defaultMessage: "Failed to delete worktree",
    id: "settings.worktrees.delete.error",
  },
  {
    defaultMessage: "Worktrees created by ChatGPT will appear here",
    id: "settings.worktrees.empty.body",
  },
  {
    defaultMessage: "No worktrees yet",
    id: "settings.worktrees.empty.title",
  },
  {
    defaultMessage: "Something went wrong while loading worktrees.",
    id: "settings.worktrees.error.body",
  },
  {
    defaultMessage: "Unable to load worktrees",
    id: "settings.worktrees.error.title",
  },
  {
    defaultMessage: "Auto-delete limit",
    id: "settings.worktrees.keepCount.ariaLabel",
  },
  {
    defaultMessage:
      "Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.",
    id: "settings.worktrees.keepCount.description",
  },
  {
    defaultMessage:
      "Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.",
    id: "settings.worktrees.keepCount.description.disabled",
  },
  {
    defaultMessage: "Auto-delete limit",
    id: "settings.worktrees.keepCount.label",
  },
  {
    defaultMessage: "Failed to save auto-delete limit",
    id: "settings.worktrees.keepCount.save.error",
  },
  {
    defaultMessage: "Saved auto-delete limit",
    id: "settings.worktrees.keepCount.save.success",
  },
  {
    defaultMessage: "Fetching worktree details…",
    id: "settings.worktrees.loading.body",
  },
  {
    defaultMessage: "Refresh",
    id: "settings.worktrees.refresh",
  },
  {
    defaultMessage: "Loading repository metadata…",
    id: "settings.worktrees.repository.loading",
  },
  {
    defaultMessage: "Unknown repository",
    id: "settings.worktrees.repository.unknown",
  },
  {
    defaultMessage: "Conversations",
    id: "settings.worktrees.row.conversations",
  },
  {
    defaultMessage: "No conversations linked to this worktree.",
    id: "settings.worktrees.row.conversations.empty",
  },
  {
    defaultMessage: "Loading conversations…",
    id: "settings.worktrees.row.conversations.loading",
  },
  {
    defaultMessage: "Delete",
    id: "settings.worktrees.row.delete",
  },
  {
    defaultMessage: "Worktree",
    id: "settings.worktrees.row.title",
  },
];
