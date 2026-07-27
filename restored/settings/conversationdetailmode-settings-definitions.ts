// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ZEe` / export `vpt` — conversation turn-detail density.

import {
  createConfigurationSetting,
  type SettingDefinition,
} from "./setting-definition";

export const conversationDetailSettingsDefinitions = {
  conversationDetailMode: createConfigurationSetting<
    "STEPS_PROSE" | "STEPS_COMMANDS" | "STEPS_EXECUTION"
  >({
    agentAccess: "read-write",
    default: "STEPS_COMMANDS",
    description: "How much turn detail Codex shows",
    key: "conversationDetailMode",
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
