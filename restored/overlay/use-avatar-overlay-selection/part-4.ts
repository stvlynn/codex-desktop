// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/4
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

// Wave5d soft stubs.
let $t: any = undefined;
const useAvatarOverlaySelectionA: any = undefined;
const useAvatarOverlaySelectionM: any = undefined;
let alpha: any = undefined;
let bravo: any = undefined;
let copper: any = undefined;
export const useAvatarOverlaySelectionO = rolldownRuntimeN(() => {
  avatarOverlayPillDismissButtonP();
  bravo = 3600000;
  copper = 86400000;
  alpha = 604800000;
  $t = 8000;
});
export function useAvatarOverlaySelectionN() {
  let { selectedAvatar, selectedAvatarId } = appInitialAr(),
    { data, isFetching } = appInitialIT(
      customAvatarsQueryN,
      selectedAvatarId ?? selectedAvatar.id,
    );
  if (selectedAvatarId?.startsWith("custom:") !== true) {
    let falcon;
    return {
      selectedAvatar,
      selectedAvatarId,
    };
  }
  if (isFetching) {
    let gamma;
    return {
      selectedAvatar: null,
      selectedAvatarId,
    };
  }
  let echo = appInitialDr(
    selectedAvatarId,
    appInitialMr(data == null ? undefined : [data]),
  );
  return {
    selectedAvatar: echo,
    selectedAvatarId,
  };
}
var delta;
export const useAvatarOverlaySelectionT = rolldownRuntimeN(() => {
  delta = appInitialIvt();
  appInitialMT();
  appInitialNr();
  appInitialOr();
  customAvatarsQueryI();
});
export { useAvatarOverlaySelectionA, useAvatarOverlaySelectionM };
