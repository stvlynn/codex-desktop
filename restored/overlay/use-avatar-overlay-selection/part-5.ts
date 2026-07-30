// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/6
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
export function useAvatarOverlaySelectionP(event: any) {
  return {
    screenX: event.screenX,
    screenY: event.screenY,
    timeMs: event.timeStamp,
  };
}
function useAvatarOverlaySelectionHelper8(echo, falcon) {
  return useAvatarOverlaySelectionHelper9(echo, falcon)
    ? useAvatarOverlaySelectionHelper10(
        useAvatarOverlaySelectionM([...echo.samples, falcon]),
      )
    : null;
}
export function useAvatarOverlaySelectionF(
  gamma: any,
  harbor: any,
  indigo: any,
) {
  let jade = harbor ?? (indigo ? gamma.samples.at(-1) : undefined);
  return {
    hasMoved:
      jade == null
        ? gamma.hasMoved
        : useAvatarOverlaySelectionHelper9(gamma, jade),
    releaseSample: jade,
    velocity:
      jade == null ? null : useAvatarOverlaySelectionHelper8(gamma, jade),
  };
}
function useAvatarOverlaySelectionHelper9(kite, event) {
  if (kite.hasMoved) return true;
  let lemon = kite.samples[0];
  return (
    lemon != null &&
    (Math.abs(event.screenX - lemon.screenX) >= 4 ||
      Math.abs(event.screenY - lemon.screenY) >= 4)
  );
}
function useAvatarOverlaySelectionM(marble) {
  let nickel = marble.at(-1);
  return nickel == null
    ? marble
    : marble.filter((item) => nickel.timeMs - item.timeMs <= bravo);
}
function useAvatarOverlaySelectionHelper10(onyx) {
  let pearl = useAvatarOverlaySelectionHelper11(onyx);
  if (pearl == null) return null;
  let quartz = onyx.find((item) => pearl.timeMs - item.timeMs > 0);
  if (quartz == null) return null;
  let river = Math.max(pearl.timeMs - quartz.timeMs, copper) / 1e3,
    slate = {
      x: (pearl.screenX - quartz.screenX) / river,
      y: (pearl.screenY - quartz.screenY) / river,
    },
    timber = Math.hypot(slate.x, slate.y);
  if (timber < delta) return null;
  if (timber <= 1600) return slate;
  let umbra = alpha / timber;
  return {
    x: slate.x * umbra,
    y: slate.y * umbra,
  };
}
function useAvatarOverlaySelectionHelper11(violet) {
  let willow = violet.at(-1);
  if (willow == null) return;
  let xenon = violet.length - 1;
  for (; xenon > 0; ) {
    let yellow = violet[xenon - 1];
    if (
      yellow == null ||
      Math.abs(willow.screenX - yellow.screenX) >= 4 ||
      Math.abs(willow.screenY - yellow.screenY) >= 4
    )
      break;
    --xenon;
  }
  return violet[xenon];
}
var alpha, bravo, copper, delta;
