// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 1/6
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
export function useAvatarOverlaySelectionG(alpha: any) {
  if (alpha?.status !== "inProgress") return null;
  let bravo = alpha.items.at(-1),
    copper = alpha.items.filter(useAvatarOverlaySelectionHelper6);
  bravo?.type === "webSearch" && copper.push(bravo);
  let delta = copper.at(-1);
  if (delta != null)
    return {
      type: "tool",
      activeToolCount: copper.length,
      tool: useAvatarOverlaySelectionHelper7(delta),
    };
  if (bravo?.type === "agentMessage" && bravo.text.trim().length > 0)
    return null;
  for (let echo = alpha.items.length - 1; echo >= 0; --echo) {
    let falcon = alpha.items[echo];
    if (falcon?.type !== "reasoning") continue;
    let gamma = AppInitialQc(appInitialW8(falcon.summary));
    if (gamma != null)
      return {
        type: "thinking",
        reasoningSummaryLine: gamma,
      };
  }
  return {
    type: "thinking",
    reasoningSummaryLine: null,
  };
}
function useAvatarOverlaySelectionHelper6(harbor) {
  return (
    (harbor.type === "commandExecution" ||
      harbor.type === "fileChange" ||
      harbor.type === "mcpToolCall" ||
      harbor.type === "dynamicToolCall") &&
    harbor.status === "inProgress"
  );
}
function useAvatarOverlaySelectionHelper7(indigo) {
  switch (indigo.type) {
    case "commandExecution":
      return {
        type: "command",
      };
    case "fileChange":
      return {
        type: "file-change",
        fileCount: indigo.changes.length,
      };
    case "mcpToolCall":
      return {
        type: "mcp",
        functionName: `${indigo.server}__${indigo.tool}`,
        invocation: {
          arguments: indigo.arguments,
          server: indigo.server,
          tool: indigo.tool,
        },
        source: AppInitialI5({
          resultMeta: indigo.result?._meta ?? null,
          serverName: indigo.server,
        }),
      };
    case "dynamicToolCall":
      return {
        type: "dynamic",
        tool: indigo.tool,
      };
    case "webSearch":
      return {
        type: "web-search",
        query: indigo.query,
      };
  }
}
export const useAvatarOverlaySelectionUnderscore = rolldownRuntimeN(() => {
  AppInitialJc();
  appInitialG8();
  appInitialA5();
});
