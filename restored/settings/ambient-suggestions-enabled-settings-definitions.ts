// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CEe` / export `Vpt` — home-page ambient suggestions toggle.

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

export const ambientSuggestionsSettingsDefinitions = {
  enabled: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether home-page ambient suggestions are enabled",
    key: DesktopPersistenceKeys.AMBIENT_SUGGESTIONS_ENABLED,
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
