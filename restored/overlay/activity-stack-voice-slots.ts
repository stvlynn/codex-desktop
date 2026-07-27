// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Overlay activity-stack voice slot ids + badge severity (`Wge` / `Gge` / `Kge`).

import { VOICE_SURFACE_IDS } from "../voice/voice-surface-ids";

/** Voice status + controls (`Zge`, co-located with `Xge` / `$ht`). */
export const VOICE_STATUS_SLOT_IDS = [
  "voice-status",
  ...VOICE_SURFACE_IDS,
] as const;

/** Bundle `Wge` / export `rgt`. */
export function isVoiceControlSlotId(slotId: string | null | undefined): boolean {
  return (
    slotId != null && (VOICE_SURFACE_IDS as readonly string[]).includes(slotId)
  );
}

/** Bundle `Gge` / export `igt`. */
export function isVoiceStatusSlotId(slotId: string | null | undefined): boolean {
  return (
    slotId != null &&
    (VOICE_STATUS_SLOT_IDS as readonly string[]).includes(slotId)
  );
}

export type ActivityNotificationLike = {
  kind?: string | null;
  isLoading?: boolean;
  level?: string | null;
};

export type NotificationBadgeSeverity = "attention" | "success";

/**
 * Bundle `Kge` / export `tgt`.
 * Pick attention/success badge from the visible notification stack.
 */
export function resolveNotificationBadgeSeverity(
  showsNotificationBadge: boolean,
  items: readonly { notification?: ActivityNotificationLike | null }[],
): NotificationBadgeSeverity | null {
  if (!showsNotificationBadge) return null;

  for (const { notification } of items) {
    if (
      notification != null &&
      notification.kind !== "first-awake" &&
      !notification.isLoading &&
      (notification.level === "warning" || notification.level === "danger")
    ) {
      return "attention";
    }
  }

  const top = items[0]?.notification;
  return top != null &&
    top.kind !== "first-awake" &&
    !top.isLoading &&
    top.level === "success"
    ? "success"
    : null;
}
