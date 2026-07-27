// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MEe` / export `jpt` — Computer Use PiP visibility.

import {
  createConfigurationSetting,
  type SettingDefinition,
} from "./setting-definition";

export const computerUsePipSettingsDefinitions = {
  alwaysHidePictureInPicture: createConfigurationSetting<boolean>({
    agentAccess: "hidden",
    default: false,
    description: "Whether Computer Use picture in picture is always hidden",
    key: "computerUseAlwaysHidePictureInPicture",
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
