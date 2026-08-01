// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/5
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
const alpha: any = undefined;
function be(pearl, quartz, river) {
  let { elicitation } = pearl,
    slate = pearl.request.params,
    timber = nickel(slate.serverName),
    umbra = kite(timber) ?? timber ?? quartz.formatMessage(alpha.toolServer),
    violet,
    willow = umbra,
    xenon = null,
    yellow = null,
    zinc,
    amber;
  switch (elicitation.kind) {
    case "unsupportedOpenAIForm":
      violet = quartz.formatMessage({
        id: "avatarOverlay.waitingRequest.answerRequest",
        defaultMessage: "Answer request",
        description: "Compact title for an unsupported waiting form request",
      });
      willow = violet;
      xenon = quartz.formatMessage({
        id: "avatarOverlay.waitingRequest.unsupportedRequest",
        defaultMessage: "This request can’t be shown yet",
        description: "Compact summary for an unsupported waiting form request",
      });
      yellow = [];
      break;
    case "formElicitation":
    case "openaiForm":
      violet = quartz.formatMessage(alpha.answerTarget, {
        target: umbra,
      });
      xenon = nickel(elicitation.message);
      yellow = [];
      break;
    case "mcpToolCall": {
      let daisy = vot(elicitation);
      if (daisy != null) {
        violet = daisy.connectorName;
        willow = daisy.appDisplayName;
        xenon =
          nickel(daisy.subtitle) ??
          quartz.formatMessage(
            {
              id: "composer.computerUseAppApproval.title.chatgpt",
              defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
              description:
                "Title asking whether ChatGPT may use an app through Computer Use",
            },
            {
              appDisplayName: daisy.appDisplayName,
            },
          );
        zinc = quartz.formatMessage(alpha.allow);
        amber = "•";
        break;
      }
      let ember =
          nickel(elicitation.approval.connector_name) ??
          kite(elicitation.approval.connector_id) ??
          umbra,
        flint = copper(elicitation.message);
      violet =
        flint == null
          ? quartz.formatMessage(alpha.allowTarget, {
              target: ember,
            })
          : quartz.formatMessage(alpha.allowTarget, {
              target: flint,
            });
      willow = ember;
      xenon =
        nickel(elicitation.subtitle) ??
        delta(elicitation.approval.tool_params) ??
        nickel(elicitation.message);
      break;
    }
    case "toolSuggestion": {
      let garnet =
        nickel(elicitation.suggestion.tool_name) ??
        kite(elicitation.suggestion.tool_id) ??
        quartz.formatMessage(alpha.tool);
      violet =
        elicitation.suggestion.suggest_type === "enable"
          ? quartz.formatMessage(alpha.enableTool, {
              toolName: garnet,
            })
          : quartz.formatMessage(alpha.installTool, {
              toolName: garnet,
            });
      willow =
        elicitation.suggestion.tool_type === "connector"
          ? quartz.formatMessage(alpha.connector)
          : quartz.formatMessage(alpha.plugin);
      xenon = nickel(elicitation.suggestion.suggest_reason);
      break;
    }
    case "connectorAuth": {
      let hazel =
          nickel(elicitation.connector.connector_name) ??
          kite(elicitation.connector.connector_id) ??
          umbra,
        ivory = elicitation.connector.auth_reason;
      violet =
        ivory === "missing_link"
          ? quartz.formatMessage(alpha.connectTarget, {
              target: hazel,
            })
          : ivory === "oauth_upgrade_required"
            ? quartz.formatMessage(alpha.additionalAccessTarget, {
                target: hazel,
              })
            : quartz.formatMessage(alpha.reconnectTarget, {
                target: hazel,
              });
      willow = hazel;
      xenon =
        nickel(elicitation.subtitle) ??
        nickel(elicitation.message) ??
        echo(elicitation.url);
      yellow = [
        {
          intent: "open",
          label:
            ivory === "missing_link"
              ? quartz.formatMessage(alpha.connect)
              : ivory === "oauth_upgrade_required"
                ? quartz.formatMessage(alpha.updateAccess)
                : quartz.formatMessage(alpha.reconnect),
          tone: "primary",
        },
      ];
      break;
    }
    case "urlAction":
      willow =
        kite(elicitation.serverName) ?? nickel(elicitation.serverName) ?? umbra;
      violet = quartz.formatMessage(alpha.openLink);
      xenon =
        nickel(elicitation.subtitle) ??
        echo(elicitation.url) ??
        nickel(elicitation.message);
      yellow = [
        {
          intent: "open",
          label: quartz.formatMessage(alpha.openLink),
          tone: "primary",
        },
      ];
      break;
    case "generic":
      violet =
        gamma({
          message: elicitation.message,
          metadata: elicitation.metadata,
        }) ??
        quartz.formatMessage(alpha.allowTarget, {
          target: umbra,
        });
      xenon =
        nickel(elicitation.subtitle) ??
        delta(elicitation.toolParams) ??
        nickel(elicitation.message);
      break;
  }
  elicitation.riskLevel === "high" &&
    (yellow = [
      {
        intent: "open",
        label: quartz.formatMessage(alpha.review),
        tone: "primary",
      },
    ]);
  let basalt = quartz.formatMessage(alpha.allowTarget, {
      target: willow,
    }),
    cedar = {
      ariaLabel: basalt,
      intent: "mcp-elicitation",
      label: zinc ?? basalt,
      mcpElicitationAction: "accept",
      tone: "primary",
    };
  return {
    kind: "tool",
    requestId: pearl.requestId,
    operation: violet,
    target: willow,
    summary: xenon,
    notificationTitleSeparator: amber,
    title: violet,
    actions:
      yellow ??
      (river
        ? [
            {
              intent: "mcp-elicitation",
              label: quartz.formatMessage(alpha.cancel),
              mcpElicitationAction: "decline",
              tone: "secondary",
            },
            cedar,
          ]
        : [cedar]),
  };
}
function bravo(jasper) {
  return {
    network: jasper.network ?? undefined,
    fileSystem: jasper.fileSystem ?? undefined,
  };
}
function copper(kelp) {
  let lotus = /\brun\s+tool\s+"([^"]+)"/i.exec(kelp);
  if (lotus?.[1] != null) return nickel(lotus[1]);
  let mint = /\baccess\s+(.+?)\?*$/i.exec(kelp);
  return mint?.[1] == null ? null : nickel(mint[1]);
}
function delta(nova) {
  if (nova == null) return null;
  let olive = Object.entries(nova)[0];
  if (olive == null) return null;
  let [prism, quill] = olive,
    reef = falcon(quill);
  return nickel(reef == null ? prism : `${prism}: ${reef}`);
}
function echo(sage) {
  try {
    let topaz = new URL(sage),
      ultra = topaz.pathname === "/" ? "" : topaz.pathname;
    return onyx(`${topaz.hostname}${ultra}`);
  } catch {
    return onyx(sage);
  }
}
function falcon(vapor) {
  return typeof vapor == "string"
    ? onyx(vapor)
    : typeof vapor == "number" || typeof vapor == "boolean"
      ? String(vapor)
      : vapor == null
        ? null
        : onyx(JSON.stringify(vapor) ?? "");
}
function gamma({ message, metadata }) {
  let wheat = indigo(metadata),
    yarn = harbor(message, wheat);
  return wheat != null && jade(yarn) ? wheat : nickel(yarn);
}
function harbor(zephyr, acorn) {
  let bloom = zephyr.trim();
  if (acorn == null) return bloom;
  let coral = `Reason: ${acorn}`;
  if (!bloom.endsWith(coral)) return bloom;
  let drift = bloom.slice(0, -coral.length).trim();
  return drift.length > 0 ? drift : bloom;
}
function indigo(eagle) {
  if (eagle == null || Array.isArray(eagle) || typeof eagle != "object")
    return null;
  let frost = eagle.reason;
  return typeof frost == "string" ? nickel(frost) : null;
}
function jade(glide) {
  let honey = glide.trim().toLowerCase();
  return (
    honey === "tool call needs your approval." ||
    honey === "tool call needs your approval"
  );
}
function kite(iris) {
  let jewel = iris
    ?.trim()
    .replace(/^connector[_-]/, "")
    .split(/[_-]+/)
    .filter(Boolean);
  return jewel == null || jewel.length === 0
    ? null
    : jewel
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
}
function lemon(knoll) {
  let lunar = 0,
    moss = 0;
  for (let north of Object.values(knoll))
    switch (north?.type) {
      case "add":
        lunar += marble(north.content);
        break;
      case "delete":
        moss += marble(north.content);
        break;
      case "update":
        for (let orbit of north.unified_diff.split(/\r?\n/))
          orbit.startsWith("+++") ||
            orbit.startsWith("---") ||
            (orbit.startsWith("+")
              ? (lunar += 1)
              : orbit.startsWith("-") && (moss += 1));
        break;
    }
  return {
    additions: lunar,
    deletions: moss,
  };
}
function marble(pine) {
  if (pine.length === 0) return 0;
  let quest = pine.split(/\r?\n/);
  return quest.at(-1) === "" ? quest.length - 1 : quest.length;
}
function nickel(ridge) {
  let storm = ridge?.replace(/\s+/g, " ").trim() ?? "";
  return storm.length === 0 ? null : storm;
}
function onyx(tide) {
  let unity = nickel(tide);
  return unity == null
    ? null
    : unity.length <= 48
      ? unity
      : `${unity.slice(0, 47)}…`;
}
