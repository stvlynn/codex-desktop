// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `i5l` / export `Pr` — pure helper.

import { CodexAvatarOverlayPetKind } from "../analytics/codex-avatar-overlay-pet-kind";
import { CodexAvatarOverlayNotificationSource } from "../analytics/codex-avatar-overlay-notification-source";

/** Build the avatar-overlay analytics payload from UI state. */
export function buildAvatarOverlayAnalyticsPayload(args: {
  action: string;
  hasRunningCloudSession?: boolean | null;
  hasRunningLocalSession?: boolean | null;
  isNotificationTrayOpen?: boolean | null;
  notification?: { source?: string } | null;
  notificationCount?: number | null;
  selectedAvatar: { id: string };
  source: string;
}): Record<string, unknown> {
  const {
    action,
    hasRunningCloudSession,
    hasRunningLocalSession,
    isNotificationTrayOpen,
    notification,
    notificationCount,
    selectedAvatar,
    source,
  } = args;
  const payload: Record<string, unknown> = {
    action,
    source,
    petKind: selectedAvatar.id.startsWith("custom:")
      ? CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
      : CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
  };
  if (!selectedAvatar.id.startsWith("custom:")) {
    payload.builtInPetId = selectedAvatar.id;
  }
  if (notificationCount != null) payload.notificationCount = notificationCount;
  if (notification != null) {
    payload.notificationSource =
      notification.source === "cloud"
        ? CodexAvatarOverlayNotificationSource.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD
        : CodexAvatarOverlayNotificationSource.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL;
  }
  if (hasRunningLocalSession != null) {
    payload.hasRunningLocalSession = hasRunningLocalSession;
  }
  if (hasRunningCloudSession != null) {
    payload.hasRunningCloudSession = hasRunningCloudSession;
  }
  if (isNotificationTrayOpen != null) {
    payload.isNotificationTrayOpen = isNotificationTrayOpen;
  }
  return payload;
}
