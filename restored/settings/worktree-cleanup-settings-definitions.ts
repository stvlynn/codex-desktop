// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$Ee` / export `gpt` — worktree auto-cleanup settings.

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

export const worktreeCleanupSettingsDefinitions = {
  autoCleanupEnabled: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether Codex automatically cleans up old worktrees",
    key: DesktopPersistenceKeys.WORKTREE_AUTO_CLEANUP_ENABLED,
  }),
  keepCount: createGlobalStateSetting<number>({
    agentAccess: "read-write",
    default: 15,
    description: "How many recent worktrees Codex keeps",
    key: DesktopPersistenceKeys.WORKTREE_KEEP_COUNT,
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
