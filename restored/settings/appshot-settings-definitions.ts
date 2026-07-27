// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EEe` / export `Lpt` — global-shortcut appshot settings.

import {
  createConfigurationSetting,
  type SettingDefinition,
} from "./setting-definition";

export const appshotSettingsDefinitions = {
  destination: createConfigurationSetting<
    "automatic" | "last-chat" | "new-chat"
  >({
    agentAccess: "read-write",
    default: "automatic",
    description: "Where global shortcut appshots are attached",
    key: "appshotDestination",
  }),
  soundEnabled: createConfigurationSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether appshots play a sound effect",
    key: "appshotSoundEnabled",
    mirrors: [
      {
        domain: "com.openai.sky.CUAService",
        key: "appshotSoundEnabled",
        kind: "macos-user-defaults",
      },
    ],
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
