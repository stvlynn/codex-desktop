// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Toggle a task id in the persisted muted pet-notification preference list.

import {
  MUTED_NOTIFICATION_IDS_DEFAULT,
  MUTED_NOTIFICATION_IDS_STORAGE_KEY,
} from "./muted-notification-ids";

/**
 * Store surface used by `setMutedNotificationPreference` (`TOt` / `hot`).
 * Mirrors `store.get(mutedIdsAtom)` + `store.set(preferenceAtom, next)` plus
 * the local preference `setItem` write (`rd`).
 */
export type MutedNotificationPreferenceStore = {
  getMutedIds: () => string[];
  setMutedIds: (ids: string[]) => void;
  persistMutedIds: (storageKey: string, ids: string[]) => void;
};

/**
 * Toggle mute for a notification preference id.
 *
 * @param isCurrentlyMuted - When `true`, remove the id (unmute). When `false`,
 *   append the id (mute). Matches call sites that pass `true` for the
 *   "Unmute task" action. No-ops when the flag does not match list membership.
 */
export function setMutedNotificationPreference(
  store: MutedNotificationPreferenceStore,
  notificationId: string,
  isCurrentlyMuted: boolean,
): void {
  const mutedIds = store.getMutedIds();
  if (isCurrentlyMuted !== mutedIds.includes(notificationId)) {
    return;
  }

  const nextIds = isCurrentlyMuted
    ? mutedIds.filter((id) => id !== notificationId)
    : [...mutedIds, notificationId];

  store.persistMutedIds(MUTED_NOTIFICATION_IDS_STORAGE_KEY, nextIds);
  store.setMutedIds(nextIds);
}

export { MUTED_NOTIFICATION_IDS_DEFAULT, MUTED_NOTIFICATION_IDS_STORAGE_KEY };
