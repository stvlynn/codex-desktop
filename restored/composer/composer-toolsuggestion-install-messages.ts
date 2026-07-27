// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `GQ`).

import { defineMessages } from "react-intl";

export const composerToolsuggestionInstallMessages = defineMessages({
  install: {
    id: "composer.toolSuggestion.install",
    defaultMessage: "Install",
    description:
      "Primary action label for starting an MCP tool suggestion install flow",
  },
  enable: {
    id: "composer.toolSuggestion.enable",
    defaultMessage: "Enable",
    description:
      "Primary action label for enabling an MCP tool suggestion target",
  },
  continue: {
    id: "composer.toolSuggestion.continue",
    defaultMessage: "Continue",
    description:
      "Tooltip label for re-checking whether an MCP tool suggestion target is ready",
  },
  connectorNotReady: {
    id: "composer.toolSuggestion.connector.notReady",
    defaultMessage:
      "{toolName} is not ready yet. Finish setting it up, then continue.",
    description:
      "Toast shown when the user asks to continue but the suggested connector is still not ready",
  },
  pluginNotReady: {
    id: "composer.toolSuggestion.plugin.notReady",
    defaultMessage:
      "{toolName} is not ready yet. Finish setting it up, then continue.",
    description:
      "Toast shown when the user asks to continue but the suggested plugin is still not ready",
  },
  missingPlugin: {
    id: "composer.toolSuggestion.plugin.missing",
    defaultMessage: "Could not load this plugin right now.",
    description:
      "Toast shown when plugin metadata cannot be loaded for an MCP tool suggestion panel",
  },
  genericLoadError: {
    id: "composer.toolSuggestion.loadError",
    defaultMessage: "Could not refresh this tool suggestion.",
    description:
      "Toast shown when the tool suggestion panel cannot refresh its backing data",
  },
});
