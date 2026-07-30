// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 5/6
/* split-lane-import-depth:1 */

import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
// prettier-ignore
import { appInitial4, appInitial9, appInitialA5, appInitialA7, appInitialAC, appInitialAot, appInitialAr, appInitialC, appInitialC5, appInitialCdt, appInitialCot, appInitialCq, appInitialDdt, appInitialDot, appInitialDr, AppInitialDtt, appInitialEC, appInitialEl, appInitialFC, appInitialFft, appInitialFot, AppInitialFtt, AppInitialG4, appInitialG8, appInitialG9, AppInitialGC, appInitialGut, AppInitialH, appInitialHdt, appInitialHft, appInitialHut, AppInitialI5, appInitialIC, appInitialIft, appInitialIlt, appInitialIq, appInitialIT, appInitialIvt, appInitialJ7, appInitialJ9, appInitialJC, AppInitialJc, appInitialJft, appInitialJot, appInitialJY, appInitialK9, appInitialKC, AppInitialKC, appInitialKq, appInitialKut, appInitialL5, appInitialLC, appInitialLdt, appInitialLlt, appInitialLq, appInitialLT, appInitialLvt, appInitialLX, appInitialM4, appInitialMdt, appInitialMq, appInitialMr, appInitialMT, appInitialNC, appInitialNr, AppInitialO5, appInitialOpt, appInitialOr, appInitialOw, appInitialPC, AppInitialPot, appInitialPt, appInitialQC, AppInitialQc, AppInitialQT, appInitialRC, appInitialRT, appInitialRX, appInitialS, AppInitialS5, appInitialSdt, appInitialSot, appInitialSq, appInitialSw, appInitialTot, appInitialUC, appInitialUdt, appInitialUi, appInitialUtt, appInitialUut, AppInitialW, appInitialW8, appInitialWC, AppInitialWi, appInitialXC, appInitialXot, AppInitialXS, appInitialXT, appInitialY4, appInitialYC, AppInitialYT, appInitialYY, appInitialZC, appInitialZht, appInitialZS, AppInitialZT } from "./host-stubs";
import {
  avatarOverlayPillDismissButtonD,
  avatarOverlayPillDismissButtonF,
  avatarOverlayPillDismissButtonP,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import {
  customAvatarsQueryI,
  customAvatarsQueryN,
} from "../../desktop/custom-avatars-query";
import {
  useAvatarOverlaySelectionHelper12,
  useAvatarOverlaySelectionHelper15,
  useAvatarOverlaySelectionHelper16,
} from "./part-9";
export const _useAvatarOverlaySelectionC = rolldownRuntimeN(() => {
  AppInitialPot();
});
export function useAvatarOverlaySelectionI({
  dismissedNotificationTurnKeys,
  extraNotifications = [],
  latestActivityFirst = false,
  mutedNotificationPreferenceIds,
  nowMs = Date.now(),
  sessions,
}: any) {
  let alpha = extraNotifications.flatMap((item) =>
    (item.expiresAtMs != null && nowMs >= item.expiresAtMs) ||
    (item.notificationPreferenceId != null &&
      mutedNotificationPreferenceIds.includes(item.notificationPreferenceId)) ||
    dismissedNotificationTurnKeys?.get(item.id) === item.turnKey
      ? []
      : [
          {
            expiresAtMs: item.expiresAtMs,
            key: item.id,
            notification: item,
            notificationPriority: useAvatarOverlaySelectionHelper16(item.kind),
            sortAtMs: item.updatedAtMs,
            updatedAtMs: item.updatedAtMs,
          },
        ],
  );
  for (let bravo of sessions) {
    if (mutedNotificationPreferenceIds.includes(bravo.key)) continue;
    let copper = useAvatarOverlaySelectionHelper12(bravo, nowMs);
    copper != null &&
      dismissedNotificationTurnKeys?.get(copper.notification.id) !==
        copper.notification.turnKey &&
      alpha.push(copper);
  }
  return {
    nextNotificationExpiresAtMs: alpha.reduce(
      (accumulator, current) =>
        current.expiresAtMs == null ||
        (accumulator != null && accumulator <= current.expiresAtMs)
          ? accumulator
          : current.expiresAtMs,
      null,
    ),
    notifications: alpha
      .sort((delta, echo) =>
        useAvatarOverlaySelectionHelper15(delta, echo, latestActivityFirst),
      )
      .map((item) => item.notification),
  };
}
