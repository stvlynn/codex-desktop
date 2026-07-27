// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// react-intl messages for mute/unmute actions on floating Codex pet notifications.

import { defineMessages } from "react-intl";

/**
 * Copy used by the avatar-overlay notification tray context menu
 * (`kOt` / export alias `fot`).
 */
export const avatarOverlayNotificationMessages = defineMessages({
  enablePetNotifications: {
    id: "avatarOverlay.enablePetNotifications",
    defaultMessage: "Unmute task",
    description:
      "Context menu item that unmutes Codex pet notifications for a task",
  },
  muteThreadNotifications: {
    id: "avatarOverlay.muteThreadNotifications",
    defaultMessage: "Mute task",
    description:
      "Menu item that mutes a task in the floating Codex pet notification tray",
  },
  notificationActions: {
    id: "avatarOverlay.notificationActions",
    defaultMessage: "Notification actions for {title}",
    description:
      "Accessible label for the context-menu target on a floating Codex pet notification",
  },
});
