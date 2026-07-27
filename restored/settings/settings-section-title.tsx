// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings nav section title by slug (bundle `L2l` / export `Xr`).

import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";

export type SettingsSectionTitleProps = {
  slug: string;
};

type SectionMessage = {
  id: string;
  defaultMessage: string;
  description: string;
};

const SETTINGS_SECTION_TITLES: Record<string, SectionMessage> = {
  appshots: {
    id: "settings.section.appshots",
    defaultMessage: "Appshots",
    description: "Title for appshots settings section",
  },
  appearance: {
    id: "settings.section.appearance",
    defaultMessage: "Appearance",
    description: "Title for appearance settings section",
  },
  voice: {
    id: "settings.section.voice",
    defaultMessage: "Voice",
    description: "Title for voice settings section",
  },
  pets: {
    id: "settings.section.pets",
    defaultMessage: "Pets",
    description: "Title for pets settings section",
  },
  "general-settings": {
    id: "settings.section.general-settings",
    defaultMessage: "General",
    description: "Title for general settings section",
  },
  import: {
    id: "settings.section.import",
    defaultMessage: "Import",
    description: "Title for import settings section",
  },
  profile: {
    id: "settings.section.profile",
    defaultMessage: "Profile",
    description: "Title for profile section",
  },
  "keyboard-shortcuts": {
    id: "settings.section.keyboard-shortcuts",
    defaultMessage: "Keyboard shortcuts",
    description: "Title for keyboard shortcuts settings section",
  },
  "codex-micro": {
    id: "settings.section.codex-micro",
    defaultMessage: "Codex Micro",
    description: "Title for Codex Micro settings section",
  },
  agent: {
    id: "settings.section.agent",
    defaultMessage: "Configuration",
    description: "Title for configuration settings section",
  },
  "git-settings": {
    id: "settings.section.git-settings",
    defaultMessage: "Git",
    description: "Title for git settings section",
  },
  "data-controls": {
    id: "settings.section.data-controls",
    defaultMessage: "Archived chats",
    description: "Title for archived chats settings section",
  },
  "code-review": {
    id: "settings.section.codeReview",
    defaultMessage: "Code review",
    description: "Title for code review settings section",
  },
  "cloud-settings": {
    id: "settings.section.cloudSettings",
    defaultMessage: "Cloud preferences",
    description: "Title for cloud settings section",
  },
  "cloud-environments": {
    id: "settings.section.cloudEnvironments",
    defaultMessage: "Cloud environments",
    description: "Title for cloud environments settings section",
  },
  personalization: {
    id: "settings.section.personalization",
    defaultMessage: "Personalization",
    description: "Title for personalization settings section",
  },
  chronicle: {
    id: "settings.section.chronicle",
    defaultMessage: "Computer history",
    description: "Title for Computer history settings section",
  },
  usage: {
    id: "settings.section.usage",
    defaultMessage: "Usage & billing",
    description: "Title for usage and billing settings section",
  },
  debug: {
    id: "settings.section.debug",
    defaultMessage: "Debug",
    description: "Title for debug settings section",
  },
  "computer-use": {
    id: "computerUse.label",
    defaultMessage: "Computer use",
    description: "Label for the Computer Use feature",
  },
  "browser-use": {
    id: "settings.section.browser-use",
    defaultMessage: "Browser",
    description: "Title for in-app browser settings section",
  },
  "local-environments": {
    id: "settings.section.local-environments",
    defaultMessage: "Environments",
    description: "Title for environments settings section",
  },
  worktrees: {
    id: "settings.section.worktrees",
    defaultMessage: "Worktrees",
    description: "Title for worktrees settings section",
  },
  environments: {
    id: "settings.section.environments",
    defaultMessage: "Cloud Environments",
    description: "Title for environments settings section",
  },
  "mcp-settings": {
    id: "settings.section.mcp-settings",
    defaultMessage: "MCP servers",
    description: "Title for MCP servers settings section",
  },
  "hooks-settings": {
    id: "settings.section.hooks-settings",
    defaultMessage: "Hooks",
    description: "Title for hooks settings section",
  },
  connections: {
    id: "settings.section.connections",
    defaultMessage: "Connections",
    description: "Title for connections settings section",
  },
  "plugins-settings": {
    id: "settings.section.plugins-settings",
    defaultMessage: "Plugins",
    description: "Title for plugins settings section",
  },
  "skills-settings": {
    id: "settings.section.skills-settings",
    defaultMessage: "Skills",
    description: "Title for skills settings section",
  },
};

/**
 * Localized settings section title for a nav slug (bundle `L2l` / export `Xr`).
 */
export function SettingsSectionTitle({ slug }: SettingsSectionTitleProps) {
  const message = SETTINGS_SECTION_TITLES[slug];
  if (message == null) return null;
  return <MemoizedFormattedMessage {...message} />;
}

/** No-op Rolldown ESM init for the section-title cluster (export `Zr`). */
export function ensureSettingsSectionTitleInit(): void {}
