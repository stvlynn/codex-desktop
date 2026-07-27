// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kNl` / export `js`.

import type { FormatMessageIntl } from "./format-external-agent-import-provider-label";

/** Localized label for an external-agent config migration item type. */
export function formatExternalAgentConfigItemTypeLabel(
  intl: FormatMessageIntl,
  itemType: string,
): string | undefined {
  switch (itemType) {
    case "AGENTS_MD":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.agentsMd",
        defaultMessage: "Instructions",
        description:
          "Label for instruction file external agent config migration item",
      });
    case "CONFIG":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.config",
        defaultMessage: "Settings",
        description: "Label for config external agent config migration item",
      });
    case "SKILLS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.skills",
        defaultMessage: "Skills",
        description: "Label for skills external agent config migration item",
      });
    case "PLUGINS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.plugins",
        defaultMessage: "Plugins",
        description: "Label for plugins external agent config migration item",
      });
    case "SUBAGENTS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.subagents",
        defaultMessage: "Agents",
        description: "Label for subagents external agent config migration item",
      });
    case "HOOKS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.hooks",
        defaultMessage: "Hooks",
        description: "Label for hooks external agent config migration item",
      });
    case "COMMANDS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.commands",
        defaultMessage: "Commands",
        description: "Label for commands external agent config migration item",
      });
    case "SESSIONS":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.sessions",
        defaultMessage: "Sessions",
        description: "Label for sessions external agent config migration item",
      });
    case "MCP_SERVER_CONFIG":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.mcpServerConfig",
        defaultMessage: "MCP servers",
        description:
          "Label for MCP server config external agent config migration item",
      });
    case "MEMORY":
      return intl.formatMessage({
        id: "externalAgentConfig.itemType.memory",
        defaultMessage: "Memory",
        description: "Label for memory external agent config migration item",
      });
  }
}
