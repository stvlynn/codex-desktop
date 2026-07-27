// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Git settings bag (bundle `wu` / export `Tpt`) — worktree + PR related keys.

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

/** Bundle export `Tpt` — git settings definitions used by hooks/settings UI. */
export const gitSettingsDefinitions = {
  branchPrefix: createGlobalStateSetting<string>({
    agentAccess: "read-write",
    default: "codex/",
    description: "Prefix for branches Codex creates",
    key: DesktopPersistenceKeys.GIT_BRANCH_PREFIX,
  }),
  alwaysForcePush: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Whether Codex always force-pushes branches",
    key: DesktopPersistenceKeys.GIT_ALWAYS_FORCE_PUSH,
  }),
  createPullRequestAsDraft: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether Codex creates pull requests as drafts",
    key: DesktopPersistenceKeys.GIT_CREATE_PULL_REQUEST_AS_DRAFT,
  }),
  pullRequestMergeMethod: createGlobalStateSetting<"merge" | "squash">({
    agentAccess: "read-write",
    default: "merge",
    description: "Preferred pull request merge method",
    key: DesktopPersistenceKeys.GIT_PULL_REQUEST_MERGE_METHOD,
  }),
  reviewMode: createGlobalStateSetting<"full" | "last-turn-only">({
    agentAccess: "read-write",
    default: "full",
    description:
      "Whether Git Review uses all sources or only recorded Last Turn changes",
    key: DesktopPersistenceKeys.GIT_REVIEW_MODE,
  }),
  showSidebarPrIcons: createGlobalStateSetting<boolean | undefined>({
    agentAccess: "read-write",
    default: undefined,
    description: "Whether sidebar pull request icons are shown",
    key: DesktopPersistenceKeys.GIT_SHOW_SIDEBAR_PR_ICONS,
  }),
  worktreeRoot: createGlobalStateSetting<string>({
    agentAccess: "read-write",
    default: "",
    description: "Directory where Codex creates managed git worktrees",
    key: DesktopPersistenceKeys.GIT_WORKTREE_ROOT,
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
