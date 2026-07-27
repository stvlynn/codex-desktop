// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Storage key / default / read helper for avatar-overlay muted notification ids.

/**
 * Local preference key for muted Codex pet notification preference ids
 * (`EOt` inside the `MOt` init that builds `AOt` / export alias `mot`).
 */
export const MUTED_NOTIFICATION_IDS_STORAGE_KEY =
  "avatar-overlay-muted-notification-ids-v1";

/** Default muted-id list when nothing is persisted yet (`DOt`). */
export const MUTED_NOTIFICATION_IDS_DEFAULT: string[] = [];

/**
 * Resolve muted notification ids the same way the derived atom `AOt` does:
 * prefer the in-memory preference atom value, else fall back to persisted
 * local preference storage.
 */
export function resolveMutedNotificationIds(
  preferenceValue: string[] | null | undefined,
  readPersisted: (key: string, fallback: string[]) => string[],
): string[] {
  return (
    preferenceValue ??
    readPersisted(
      MUTED_NOTIFICATION_IDS_STORAGE_KEY,
      MUTED_NOTIFICATION_IDS_DEFAULT,
    )
  );
}

/**
 * Whether pet notifications are enabled for a preference id — negation of
 * membership in the muted list (`jOt` companion of `AOt`, not separately
 * exported in this packet).
 */
export function isPetNotificationEnabled(
  mutedIds: readonly string[],
  notificationId: string,
): boolean {
  return !mutedIds.includes(notificationId);
}
