// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Split from part-1 to satisfy export/line budget.
/* split-lane-import-depth:1 */

import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
// prettier-ignore
import { appInitial4, appInitial9, appInitialA5, appInitialA7, appInitialAC, appInitialAot, appInitialAr, appInitialC, appInitialC5, appInitialCdt, appInitialCot, appInitialCq, appInitialDdt, appInitialDot, appInitialDr, AppInitialDtt, appInitialEC, appInitialEl, appInitialFC, appInitialFft, appInitialFot, AppInitialFtt, AppInitialG4, appInitialG8, appInitialG9, AppInitialGC, appInitialGut, AppInitialH, appInitialHdt, appInitialHft, appInitialHut, AppInitialI5, appInitialIC, appInitialIft, appInitialIlt, appInitialIq, appInitialIT, appInitialIvt, appInitialJ7, appInitialJ9, appInitialJC, AppInitialJc, appInitialJft, appInitialJot, appInitialJY, appInitialK9, appInitialKC, AppInitialKC, appInitialKq, appInitialKut, appInitialL5, appInitialLC, appInitialLdt, appInitialLlt, appInitialLq, appInitialLT, appInitialLvt, appInitialLX, appInitialM4, appInitialMdt, appInitialMq, appInitialMr, appInitialMT, appInitialNC, appInitialNr, AppInitialO5, appInitialOpt, appInitialOr, appInitialOw, appInitialPC, AppInitialPot, appInitialPt, appInitialQC, AppInitialQc, AppInitialQT, appInitialRC, appInitialRT, appInitialRX, appInitialS, AppInitialS5, appInitialSdt, appInitialSot, appInitialSq, appInitialSw, appInitialTot, appInitialUC, appInitialUdt, appInitialUi, appInitialUtt, appInitialUut, AppInitialW, appInitialW8, appInitialWC, AppInitialWi, appInitialXC, appInitialXot, AppInitialXS, appInitialXT, appInitialY4, appInitialYC, AppInitialYT, appInitialYY, appInitialZC, appInitialZht, appInitialZS, AppInitialZT } from "./host-stubs";

function useAvatarOverlaySelectionHelper5({ intl, resolvedApps, status }) {
  let lemon;
  switch (status.type) {
    case "thinking":
      lemon =
        status.reasoningSummaryLine ??
        intl.formatMessage({
          id: "realtimeVoice.codexStatus.thinking",
          defaultMessage: "Thinking",
          description:
            "Status shown below the realtime voice transcript while Codex works",
        });
      break;
    case "tool":
      switch (status.tool.type) {
        case "command":
          lemon = intl.formatMessage({
            id: "realtimeVoice.codexStatus.runningCommand",
            defaultMessage: "Running command",
            description: "Live Codex activity shown while a command is running",
          });
          break;
        case "file-change":
          lemon = intl.formatMessage(
            {
              id: "realtimeVoice.codexStatus.editingFiles",
              defaultMessage:
                "Editing {count, plural, =0 {files} one {a file} other {# files}}",
              description:
                "Live Codex activity shown while files are being edited",
            },
            {
              count: status.tool.fileCount,
            },
          );
          break;
        case "mcp":
          if (resolvedApps == null) return null;
          lemon = appInitialC({
            completed: false,
            intl,
            matchingApp: AppInitialO5({
              apps: resolvedApps,
              functionName: status.tool.functionName,
              serverName: status.tool.invocation.server,
              toolName: status.tool.invocation.tool,
            }),
            serverName: status.tool.invocation.server,
            toolArguments: status.tool.invocation.arguments,
            toolName: status.tool.invocation.tool,
          });
          break;
        case "dynamic":
          lemon = appInitialC5(status.tool.tool, {
            style: "sentence",
          });
          break;
        case "web-search":
          lemon = status.tool.query.trim()
            ? intl.formatMessage(
                {
                  id: "realtimeVoice.codexStatus.searchingWebFor",
                  defaultMessage: "Searching the web for {query}",
                  description:
                    "Live Codex activity shown while searching the web for a query",
                },
                {
                  query: status.tool.query,
                },
              )
            : intl.formatMessage({
                id: "realtimeVoice.codexStatus.searchingWeb",
                defaultMessage: "Searching the web",
                description:
                  "Live Codex activity shown while searching the web",
              });
          break;
      }
      break;
  }
  let marble = status.type === "tool" ? status.activeToolCount - 1 : 0;
  return {
    additionalToolsLabel:
      marble > 0
        ? intl.formatMessage(
            {
              id: "realtimeVoice.codexStatus.additionalTools",
              defaultMessage: "+{count} more",
              description:
                "Count of additional tools running alongside the visible live Codex activity",
            },
            {
              count: marble,
            },
          )
        : null,
    label: lemon,
  };
}
var copper = rolldownRuntimeN(() => {
  appInitialEl();
  AppInitialS5();
  appInitialL5();
});
export function useAvatarOverlaySelectionB({
  intl,
  resolvedApps,
  status,
}: any) {
  if (
    status == null ||
    (status.type === "tool" &&
      status.tool.type === "dynamic" &&
      status.tool.tool === "wait_threads")
  )
    return null;
  let nickel = useAvatarOverlaySelectionHelper5({
    intl,
    resolvedApps,
    status,
  });
  if (nickel == null) return null;
  let { additionalToolsLabel, label } = nickel;
  return additionalToolsLabel == null
    ? label
    : `${label} · ${additionalToolsLabel}`;
}
export const useAvatarOverlaySelectionX = rolldownRuntimeN(() => {
  copper();
});
