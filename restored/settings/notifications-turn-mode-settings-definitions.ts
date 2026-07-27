// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UEe` / export `wpt` — turn / permission / question notifications.

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

export const notificationsSettingsDefinitions = {
  turnMode: createGlobalStateSetting<"off" | "unfocused" | "always">({
    agentAccess: "read-write",
    default: "unfocused",
    description: "When turn-completion notifications are shown",
    key: DesktopPersistenceKeys.NOTIFICATIONS_TURN_MODE,
  }),
  permissionsEnabled: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether permission notifications are shown",
    key: DesktopPersistenceKeys.NOTIFICATIONS_PERMISSIONS_ENABLED,
  }),
  questionsEnabled: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether question notifications are shown",
    key: DesktopPersistenceKeys.NOTIFICATIONS_QUESTIONS_ENABLED,
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
