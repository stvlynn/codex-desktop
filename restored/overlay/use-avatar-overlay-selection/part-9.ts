// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 6/6
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
export function _useAvatarOverlaySelectionS(delta: any) {
  return delta.source === "local" && delta.usesLiveConversationState !== false;
}
export function useAvatarOverlaySelectionR({
  intl,
  petName,
  startedAtMs,
}: any) {
  return {
    action: null,
    body: intl.formatMessage({
      id: "avatarOverlay.firstAwake.body",
      defaultMessage: "I'm here to help keep your ChatGPT sessions moving",
      description:
        "Body of the temporary greeting shown when the floating Codex pet is first opened",
    }),
    controlTarget: null,
    expiresAtMs: startedAtMs + $t,
    id: "first-awake",
    isLoading: false,
    kind: "first-awake",
    level: "info",
    localConversationId: null,
    notificationPreferenceId: null,
    source: "local",
    title: intl.formatMessage(
      {
        id: "avatarOverlay.firstAwake.title",
        defaultMessage: "Hi, I'm {petName}",
        description:
          "Title of the temporary greeting shown when the floating Codex pet is first opened",
      },
      {
        petName,
      },
    ),
    turnKey: null,
    updatedAtMs: startedAtMs,
    waitingRequest: null,
  };
}
export function useAvatarOverlaySelectionHelper12(event: any, echo: any) {
  if (event.status === "idle" || !event.showInNotificationTray) return null;
  let falcon = useAvatarOverlaySelectionA(event.status, event.updatedAtMs);
  return falcon != null && echo >= falcon
    ? null
    : {
        expiresAtMs: falcon,
        key: event.key,
        notification: {
          action: {
            path: event.actionPath,
          },
          body: event.subtitle,
          controlTarget: event.controlTarget,
          expiresAtMs: falcon,
          id: event.key,
          isLoading: event.status === "running",
          kind: "session",
          level: useAvatarOverlaySelectionHelper14(event.status),
          localConversationId: event.localConversationId,
          notificationPreferenceId: event.key,
          source: event.source,
          title: useAvatarOverlaySelectionHelper13(event),
          turnKey: event.turnKey,
          updatedAtMs: event.updatedAtMs,
          waitingRequest:
            event.status === "waiting" ? event.waitingRequest : null,
        },
        notificationPriority: useAvatarOverlaySelectionHelper17(event.status),
        sortAtMs: event.sortAtMs,
        updatedAtMs: event.updatedAtMs,
      };
}
function useAvatarOverlaySelectionHelper13(gamma) {
  return gamma.status !== "waiting" || gamma.waitingRequest == null
    ? gamma.title
    : avatarOverlayPillDismissButtonD(gamma.title, gamma.waitingRequest);
}
function useAvatarOverlaySelectionA(harbor, indigo) {
  switch (harbor) {
    case "running":
      return null;
    case "failed":
      return indigo + alpha;
    case "waiting":
      return indigo + bravo;
    case "review":
      return indigo + copper;
    case "idle":
      return null;
  }
}
function useAvatarOverlaySelectionHelper14(jade) {
  switch (jade) {
    case "waiting":
      return "warning";
    case "failed":
      return "danger";
    case "running":
      return "info";
    case "review":
      return "success";
    case "idle":
      return "info";
  }
}
export function useAvatarOverlaySelectionHelper15(
  event: any,
  _event: any,
  kite: any,
) {
  let lemon = event.notificationPriority - _event.notificationPriority;
  if (lemon !== 0) return lemon;
  if (kite) {
    let marble = _event.sortAtMs - event.sortAtMs;
    if (marble !== 0) return marble;
  }
  if (!kite) {
    let nickel = _event.updatedAtMs - event.updatedAtMs;
    if (nickel !== 0) return nickel;
  }
  return event.key.localeCompare(_event.key);
}
export function useAvatarOverlaySelectionHelper16(onyx: any) {
  switch (onyx) {
    case "activity":
      return -2;
    case "attention":
      return -1;
    case "first-awake":
    case "multi-agent":
    case "session":
      return 4;
  }
}
function useAvatarOverlaySelectionHelper17(pearl) {
  switch (pearl) {
    case "waiting":
      return 0;
    case "failed":
      return 1;
    case "review":
      return 2;
    case "running":
      return 3;
    case "idle":
      return 4;
  }
}
var alpha, bravo, copper, $t;
