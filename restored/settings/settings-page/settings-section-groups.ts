// Restored from ref/webview/assets/settings-page-CXDiYo2f.js
// Settings sidebar section order, nav groups, and collapse-toggle config.

import { defineMessage } from "react-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { identity } from "../../utils/identity";

export const sidebarCollapseMessages = identity({
  collapseSidebar: {
    id: "settings.nav.collapseSidebar",
    defaultMessage: "Collapse settings navigation",
    description:
      "Tooltip and accessible label for the button that collapses the settings navigation",
  },
  expandSidebar: {
    id: "settings.nav.expandSidebar",
    defaultMessage: "Expand settings navigation",
    description:
      "Tooltip and accessible label for the button that expands the settings navigation",
  },
});
export const DEFAULT_SETTINGS_SECTION_ORDER =
  "general-settings.import.profile.appearance.voice.chronicle.appshots.agent.personalization.pets.usage.debug.keyboard-shortcuts.codex-micro.mcp-settings.hooks-settings.connections.cloud-settings.cloud-environments.code-review.git-settings.local-environments.worktrees.browser-use.computer-use.data-controls".split(
    ".",
  );
export const SETTINGS_SECTION_NAV_GROUPS = [
  {
    key: "personal",
    heading: defineMessage({
      id: "settings.nav.heading.personal",
      defaultMessage: "Personal",
      description: "Heading for personal settings in the settings navigation",
    }),
    slugs: [
      "general-settings",
      "import",
      "profile",
      "appearance",
      "voice",
      "agent",
      "personalization",
      "pets",
      "keyboard-shortcuts",
      "usage",
      "debug",
    ],
  },
  {
    key: "integrations",
    heading: defineMessage({
      id: "settings.nav.heading.integrations",
      defaultMessage: "Integrations",
      description:
        "Heading for integration settings in the settings navigation",
    }),
    slugs: [
      "chronicle",
      "appshots",
      "codex-micro",
      "mcp-settings",
      "plugins-settings",
      "skills-settings",
      "browser-use",
      "computer-use",
    ],
  },
  {
    key: "coding",
    heading: defineMessage({
      id: "settings.nav.heading.coding",
      defaultMessage: "Coding",
      description: "Heading for coding settings in the settings navigation",
    }),
    slugs: [
      "hooks-settings",
      "connections",
      "cloud-settings",
      "cloud-environments",
      "code-review",
      "git-settings",
      "local-environments",
      "environments",
      "worktrees",
    ],
  },
  {
    key: "archived",
    heading: defineMessage({
      id: "settings.nav.heading.archived",
      defaultMessage: "Archived",
      description: "Heading for archived settings in the settings navigation",
    }),
    slugs: ["data-controls"],
  },
];
export const SIDEBAR_COLLAPSE_TOGGLE = {
  collapsed: {
    icon: AppIconAZ,
    message: sidebarCollapseMessages.expandSidebar,
  },
  expanded: {
    icon: AppIconMZ,
    message: sidebarCollapseMessages.collapseSidebar,
  },
};
