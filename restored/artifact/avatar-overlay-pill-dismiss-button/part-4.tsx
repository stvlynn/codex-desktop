// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/5
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Rst_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { dictationErrorMessages } from "../../composer/dictation-error-messages";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { lastTurnFromConversation } from "../../conversation/last-turn-from-conversation";
import {
  emptySubAgentSourceFields,
  subAgentFromThreadSource,
} from "../../conversation/sub-agent-source-from-thread-source";
import { summarizeVisualizationFileChanges } from "../../files/visualization-html-path";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { cloud2 } from "../../ui/cloud2";
import { vot } from "../../ui/vot";
import { identity } from "../../utils/identity";
import { quoteShellArgs } from "../../utils/quote-shell-args";

// Wave5d soft stubs.
const AppInitialRot: any = undefined;
const AppInitialWst: any = undefined;
const AppInitialXst: any = undefined;
const avatarOverlayPillDismissButtonP: any = undefined;
const cleanupDictationTranscript: any = undefined;
function alpha(falcon, gamma) {
  if (falcon == null) return null;
  if (falcon.type === "commandExecution") {
    let harbor = falcon.commandActions.at(-1),
      indigo = falcon.status === "inProgress";
    if (harbor == null)
      return indigo
        ? gamma.formatMessage(echo.runningCommand)
        : gamma.formatMessage(echo.ranCommand);
    switch (harbor.type) {
      case "read":
        return indigo
          ? gamma.formatMessage(echo.readingFile, {
              fileName: harbor.name,
            })
          : gamma.formatMessage(echo.readFile, {
              fileName: harbor.name,
            });
      case "listFiles":
        return indigo
          ? gamma.formatMessage(echo.listingFiles)
          : gamma.formatMessage(echo.listedFiles);
      case "search": {
        let jade = bravo(harbor.query ?? "");
        return jade == null
          ? indigo
            ? gamma.formatMessage(echo.searchingFiles)
            : gamma.formatMessage(echo.searchedFiles)
          : indigo
            ? gamma.formatMessage(echo.searchingQuery, {
                query: jade,
              })
            : gamma.formatMessage(echo.searchedQuery, {
                query: jade,
              });
      }
      case "unknown":
        return indigo
          ? gamma.formatMessage(echo.runningCommand)
          : gamma.formatMessage(echo.ranCommand);
    }
  }
  if (falcon.type === "fileChange") {
    let kite = falcon.changes.length;
    return falcon.status === "inProgress"
      ? gamma.formatMessage(echo.editingFiles, {
          fileCount: kite,
        })
      : gamma.formatMessage(echo.editedFiles, {
          fileCount: kite,
        });
  }
  if (falcon.type === "mcpToolCall") {
    let lemon = falcon.status === "inProgress",
      marble = bravo(falcon.tool.replace(/[_-]+/g, " "));
    return marble == null
      ? lemon
        ? gamma.formatMessage(echo.callingTool)
        : gamma.formatMessage(echo.calledTool)
      : lemon
        ? gamma.formatMessage(echo.callingToolName, {
            toolName: marble,
          })
        : gamma.formatMessage(echo.calledToolName, {
            toolName: marble,
          });
  }
  if (falcon.type === "webSearch") {
    let nickel = bravo(falcon.query);
    return nickel == null
      ? gamma.formatMessage(echo.searchedWeb)
      : gamma.formatMessage(echo.searchedQuery, {
          query: nickel,
        });
  }
  return null;
}
function bravo(onyx) {
  let pearl = cloud2(onyx)
    .replace(/^\s{0,3}#{1,6}\s+/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return pearl.length > 0 ? pearl : null;
}
function copper(quartz) {
  let river =
      quartz.resumeState === "needs_resume" ? quartz.threadRuntimeStatus : null,
    slate =
      quartz.resumeState === "needs_resume"
        ? river?.type === "active"
        : quartz.resumeState === "resuming" ||
          lastTurnFromConversation(quartz)?.status === "inProgress",
    timber =
      quartz.resumeState === "needs_resume"
        ? river?.type === "active" &&
          river.activeFlags.includes("waitingOnUserInput")
        : quartz.requests.some(
            (item) => item.method === "item/tool/requestUserInput",
          ),
    umbra = ChartsPurpleBadge(quartz).some((item) =>
      item.items.some(
        (_item) => _item.type === "planImplementation" && !_item.isCompleted,
      ),
    ),
    violet =
      quartz.resumeState === "needs_resume"
        ? river?.type === "systemError"
        : lastTurnFromConversation(quartz)?.status === "failed";
  return AppInitialRot(quartz) || timber || umbra
    ? "waiting"
    : violet
      ? "failed"
      : slate
        ? "running"
        : quartz.hasUnreadTurn
          ? "review"
          : "idle";
}
function delta(willow) {
  if (willow.archived) return "idle";
  let xenon =
    willow.task_status_display?.latest_turn_status_display?.turn_status;
  return xenon === "failed" || xenon === "cancelled"
    ? "failed"
    : xenon === "in_progress" || xenon === "pending"
      ? "running"
      : willow.has_unread_turn
        ? "review"
        : "idle";
}
var echo;
export const avatarOverlayPillDismissButtonU = esmInit(() => {
  ensureIntlFormattersInit();
  dictationErrorMessages();
  AppInitialXst();
  cleanupDictationTranscript();
  AppInitialWst();
  ensureConversationPageEsm_Ist_Init();
  emptySubAgentSourceFields();
  subAgentFromThreadSource();
  ensureAppShellAtomsInit();
  activeTurnsOrNull();
  avatarOverlayPillDismissButtonP();
  echo = identity({
    calledTool: {
      id: "avatarOverlay.session.calledTool",
      defaultMessage: "Called tool",
      description:
        "Avatar overlay activity subtitle for a completed generic tool call",
    },
    calledToolName: {
      id: "avatarOverlay.session.calledToolName",
      defaultMessage: "Called {toolName}",
      description:
        "Avatar overlay activity subtitle for a completed named tool call",
    },
    callingTool: {
      id: "avatarOverlay.session.callingTool",
      defaultMessage: "Calling tool",
      description:
        "Avatar overlay activity subtitle for a running generic tool call",
    },
    callingToolName: {
      id: "avatarOverlay.session.callingToolName",
      defaultMessage: "Calling {toolName}",
      description:
        "Avatar overlay activity subtitle for a running named tool call",
    },
    editedFiles: {
      id: "avatarOverlay.session.editedFiles",
      defaultMessage:
        "Edited {fileCount, plural, one {# file} other {# files}}",
      description: "Avatar overlay activity subtitle for completed file edits",
    },
    editingFiles: {
      id: "avatarOverlay.session.editingFiles",
      defaultMessage:
        "Editing {fileCount, plural, one {# file} other {# files}}",
      description: "Avatar overlay activity subtitle for running file edits",
    },
    listedFiles: {
      id: "avatarOverlay.session.listedFiles",
      defaultMessage: "Listed files",
      description:
        "Avatar overlay activity subtitle for a completed file listing command",
    },
    listingFiles: {
      id: "avatarOverlay.session.listingFiles",
      defaultMessage: "Listing files",
      description:
        "Avatar overlay activity subtitle for a running file listing command",
    },
    newThread: {
      id: "avatarOverlay.session.newThread",
      defaultMessage: "New chat",
      description:
        "Avatar overlay fallback title for a thread without a generated title",
    },
    ranCommand: {
      id: "avatarOverlay.session.ranCommand",
      defaultMessage: "Ran command",
      description:
        "Avatar overlay activity subtitle for a completed shell command",
    },
    readFile: {
      id: "avatarOverlay.session.readFile",
      defaultMessage: "Read {fileName}",
      description: "Avatar overlay activity subtitle for a completed file read",
    },
    readingFile: {
      id: "avatarOverlay.session.readingFile",
      defaultMessage: "Reading {fileName}",
      description: "Avatar overlay activity subtitle for a running file read",
    },
    runningCommand: {
      id: "avatarOverlay.session.runningCommand",
      defaultMessage: "Running command",
      description:
        "Avatar overlay activity subtitle for a running shell command",
    },
    searchedFiles: {
      id: "avatarOverlay.session.searchedFiles",
      defaultMessage: "Searched files",
      description:
        "Avatar overlay activity subtitle for a completed file search command without a query",
    },
    searchedQuery: {
      id: "avatarOverlay.session.searchedQuery",
      defaultMessage: 'Searched "{query}"',
      description:
        "Avatar overlay activity subtitle for a completed search with a query",
    },
    searchedWeb: {
      id: "avatarOverlay.session.searchedWeb",
      defaultMessage: "Searched web",
      description:
        "Avatar overlay activity subtitle for a completed web search",
    },
    searchingFiles: {
      id: "avatarOverlay.session.searchingFiles",
      defaultMessage: "Searching files",
      description:
        "Avatar overlay activity subtitle for a running file search command without a query",
    },
    searchingQuery: {
      id: "avatarOverlay.session.searchingQuery",
      defaultMessage: 'Searching "{query}"',
      description:
        "Avatar overlay activity subtitle for a running search with a query",
    },
  });
});
export function avatarOverlayPillDismissButtonA(yellow: any) {
  let zinc = yellow.closest('[data-avatar-overlay-content-frame="true"]');
  if (zinc == null) return null;
  let amber = yellow.getBoundingClientRect(),
    basalt = zinc.getBoundingClientRect(),
    cedar = window.getComputedStyle(yellow),
    daisy = document.createElement("div");
  Object.assign(daisy.style, {
    border: cedar.border,
    boxSizing: cedar.boxSizing,
    direction: cedar.direction,
    font: cedar.font,
    left: "0",
    letterSpacing: cedar.letterSpacing,
    overflowWrap: cedar.overflowWrap,
    padding: cedar.padding,
    position: "fixed",
    tabSize: cedar.tabSize,
    textAlign: cedar.textAlign,
    textIndent: cedar.textIndent,
    textTransform: cedar.textTransform,
    top: "0",
    visibility: "hidden",
    whiteSpace: yellow instanceof HTMLInputElement ? "pre" : cedar.whiteSpace,
    width: cedar.width,
    wordBreak: cedar.wordBreak,
  });
  let ember =
    yellow.selectionDirection === "backward"
      ? yellow.selectionStart
      : yellow.selectionEnd;
  daisy.textContent = yellow.value.slice(0, ember ?? yellow.value.length);
  let flint = document.createElement("span");
  flint.textContent = "​";
  daisy.append(flint);
  document.body.append(daisy);
  let garnet = daisy.getBoundingClientRect(),
    hazel = flint.getBoundingClientRect();
  daisy.remove();
  let ivory = yellow.offsetWidth === 0 ? 1 : amber.width / yellow.offsetWidth;
  return {
    x:
      (amber.left - basalt.left + hazel.left - garnet.left) / ivory -
      yellow.scrollLeft,
    y:
      (amber.top - basalt.top + hazel.top - garnet.top + hazel.height / 2) /
        ivory -
      yellow.scrollTop,
  };
}
