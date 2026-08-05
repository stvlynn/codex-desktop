// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 1/2 — side panel "New tab" actions hook (gamma), module init, and side-chat menu item.
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { useStepsProseAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_CU_Init,
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_J0_Init,
  ensureComposerEsm_LR_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_NA_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Ytt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init } from "../../conversation/conversation-page-esm-inits";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { react } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { MEMORIES_ID } from "../../config/memories-id";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { isChatgptProjectsWorkspace } from "../../environments/is-chatgpt-projects-workspace";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAA } from "../../icons/app-icon-aa";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { ensureAppIconL0Init } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { TerminalFileIcon } from "../../icons/terminal-file-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { buildMcpToolCallItem } from "../../mcp/build-mcp-tool-call-item";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { resolvePinnedPanelPlacement } from "../../navigation/resolve-pinned-panel-placement";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { esmInit } from "../../runtime/rolldown-runtime";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { sidebarelectronProductmodeChatgptMessages } from "../../sidebar/sidebarelectron-productmode-chatgpt-messages";
import { deferredUiYE } from "../../ui/deferred-ui-ye";
import { codexProjectKey } from "../../utils/codex-project-key";
import { posixPathBasename } from "../../utils/posix-path-basename";
import {
  ensureSettingsGlyphI0Init,
  ensureSettingsGlyphRBInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import {
  localConversationThreadUpperA,
  localConversationThreadUpperR,
} from "../local-conversation-thread";
import {
  threadOverflowMenuO,
  threadOverflowMenuS,
} from "../thread-overflow-menu";
import { ThreadAppShellChromeHelper17 } from "./part-1-g2";
import {
  AppInitialAU,
  AppInitialEW,
  AppInitialHE,
  AppInitialLU,
  AppInitialM,
  AppInitialOk,
  AppInitialP,
  AppInitialQU,
  AppInitialSk,
  AppInitialV7,
  AppInitialVE,
  AppInitialWX,
  AppIconJA,
  DeferredDX,
  DeferredUiL2,
  DeferredUiO22,
  DeferredUiU232,
  DeferredUiV2,
  deferredUiA4,
  deferredUiD8,
  deferredUiE1,
  deferredUiE8,
  deferredUiEnt,
  deferredUiXT,
  InitialRoute3,
  LocalConversationThread,
  localThread2,
  Remote6,
  Remote7,
} from "./part-1-g1-stubs";

var alpha,
  Bravo,
  copper = esmInit(() => {
    react();
    Bravo = (sage) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...sage}
      >
        <path
          d="M13.334 12.2529C13.701 12.2533 13.999 12.5509 13.999 12.918C13.9988 13.2849 13.7008 13.5827 13.334 13.583H6.66699C6.29984 13.583 6.00215 13.2851 6.00195 12.918C6.00195 12.5507 6.29972 12.2529 6.66699 12.2529H13.334Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  delta,
  Echo,
  falcon = esmInit(() => {
    react();
    Echo = (topaz) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...topaz}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z"
          fill="currentColor"
        />
        <path
          d="M3.16504 12.2529H16.835V13.583H3.16504V12.2529Z"
          fill="currentColor"
        />
      </svg>
    );
  });
export const threadAppShellChromeR = esmInit(() => {
  localConversationThreadUpperA();
});
function gamma({ onClose, target }) {
  let ultra = CodexPluginActionType(ensureComposerEsm_S8_Init),
    vapor = useIntl(),
    wheat = AppInitialV7(),
    yarn = CodexPluginActionResult(ensureConversationPageEsm_A0_Init.tabs$),
    zephyr = CodexPluginActionResult(ensureAppIconL0Init.tabs$),
    acorn = [...yarn, ...zephyr],
    bloom = CodexPluginActionResult(indigo),
    coral = CodexPluginActionResult(ensureComposerEsm_J0_Init),
    drift = CodexPluginActionResult(deferredUiE8),
    eagle = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    frost = CodexPluginActionResult(AppInitialQU),
    glide = CodexPluginActionResult(AppInitialEW)[0] ?? null,
    honey = CodexPluginActionResult(requestRealtimeVoicePresentationSurface),
    iris = deferredUiD8(ultra),
    jewel =
      ultra.value.routeKind === "local-thread"
        ? ultra.value.conversationId
        : null,
    knoll = CodexBrowserSurfaceActionType(deferredUiA4, jewel);
  CodexBrowserSurfaceActionType(DeferredUiL2, jewel);
  let lunar = CodexBrowserSurfaceActionType(DeferredUiU232, jewel),
    moss = CodexBrowserSurfaceActionType(DeferredUiO22, jewel),
    north = CodexBrowserSurfaceActionType(deferredUiE1, "searchFiles"),
    orbit = CodexBrowserSurfaceActionType(deferredUiE1, "openSideChat"),
    pine = CodexBrowserSurfaceActionType(deferredUiE1, "openBrowserTab"),
    quest = CodexBrowserSurfaceActionType(deferredUiE1, "openReviewTab"),
    ridge = CodexBrowserSurfaceActionType(
      AppInitialOk,
      {
        conversationId: jewel,
        hostId: honey.id,
      },
      {
        enabled: false,
      },
    ),
    storm = knoll !== "projectless" && glide != null,
    tide = jewel != null && false,
    unity = jewel != null && !isCurrentSpecialWindowRoute(),
    vale = coral && (drift || !acorn.some((item) => Remote6(item))),
    wave =
      !eagle &&
      (frost.kind === "git" || false) &&
      !acorn.some((item) => item.tabId === buildMcpToolCallItem.DIFF),
    apex =
      tide &&
      !acorn.some((item) => item.tabId === buildMcpToolCallItem.TIMELINE),
    brook = (!eagle || target !== "right") && AppInitialAU(ultra),
    cliff = wheat.status === "allowed" || wheat.status === "loading",
    dusk = cliff && frost.kind !== "git" ? ridge : null,
    elm = dusk != null && dusk.length > 0,
    fern = () => {
      jewel != null &&
        threadOverflowMenuS(ultra, localConversationThreadUpperR, {
          sourceConversationId: jewel,
          cwd: frost.cwd,
          hostId: lunar,
          collaborationMode: moss,
          intl: vapor,
          target,
        })
          .then(() => {
            onClose?.();
          })
          .catch((error) => {
            appActionSidebarProjectRefSchema.error("Error opening side chat", {
              safe: {},
              sensitive: {
                error,
              },
            });
            ultra.get(toastAtom).danger(
              vapor.formatMessage({
                id: "thread.sidePanel.openSideChatError",
                defaultMessage: "Failed to open side chat",
                description:
                  "Error message shown when opening a side chat from the chat side panel fails",
              }),
            );
          });
    },
    grove = () => {
      AppInitialVE(ultra, true, target) && onClose?.();
    },
    hill = () => {
      AppInitialHE(ultra, {
        browserConversationId: iris ?? undefined,
        browserHostDisplayName: honey.display_name,
        cwd: frost.cwd,
        initiator: "side_panel_menu",
        source: "manual",
        target: drift ? target : "right",
      }) != null && onClose?.();
    },
    isle = () => {
      deferredUiYE(ultra, jewel, {
        target,
      }) && onClose?.();
    },
    juniper = () => {
      glide != null &&
        (openFileInPanelTab(ultra, null, {
          hostId: honey.id,
          target,
          workspaceRoot: glide,
        }),
        onClose?.());
    },
    lagoon = () => {
      AppInitialLU(ultra, target);
      onClose?.();
    },
    meadow = (petal, quiet, rain) => {
      if (quiet == null) {
        PdfPermissionFlag({
          href: petal,
          initiator: "mcp_app_resource",
          originHostId: rain,
        });
        return;
      }
      deferredUiEnt({
        event: quiet,
        href: petal,
        initiator: "mcp_app_resource",
        originHostId: rain,
      });
    },
    nest = (event, seed) => {
      switch (event.type) {
        case "file":
        case "generated-image":
          readCodexHomeFromQuery({
            scope: ultra,
            path: event.path,
            cwd: glide == null ? null : identityCwd(glide),
            browserSidebarEnabled: coral,
            hostConfig: honey,
            hostId: honey.id,
            openInSidePanel: true,
          });
          return;
        case "google-drive":
        case "appgen-app":
          meadow(event.url, seed, honey.id);
          return;
        case "external-resource":
          meadow(event.resource.url, seed, honey.id);
          return;
        case "website":
          if (DesktopPersistenceKeys(event.target)) {
            meadow(event.target, seed);
            return;
          }
          readCodexHomeFromQuery({
            scope: ultra,
            path: event.target,
            cwd: glide == null ? null : identityCwd(glide),
            browserSidebarEnabled: coral,
            hostConfig: honey,
            hostId: honey.id,
          });
      }
    },
    oak = [
      ...(storm
        ? [
            {
              deferSelectionUntilDropdownClose: true,
              id: "open-file",
              Icon: AppIconIR,
              keyboardShortcut: north,
              onSelect: juniper,
              requiresCodexAccess: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.openFile",
                    defaultMessage: "Files",
                    description:
                      "Action label for opening the workspace file browser from the task side panel",
                  }}
                />
              ),
            },
          ]
        : []),
      ...(unity
        ? [
            {
              id: "side-chat",
              Icon: AppInitialP,
              keyboardShortcut: orbit,
              onSelect: fern,
              requiresCodexAccess: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.openSideChat",
                    defaultMessage: "Side chat",
                    description:
                      "Action label for opening a side chat from the chat side panel",
                  }}
                />
              ),
            },
          ]
        : []),
      ...(vale
        ? [
            {
              deferSelectionUntilDropdownClose: true,
              id: "browser",
              Icon: AppIconJtt,
              keyboardShortcut: pine,
              onSelect: hill,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.openBrowserTab",
                    defaultMessage: "Browser",
                    description:
                      "Action label for opening the browser tab from the task side panel",
                  }}
                />
              ),
            },
          ]
        : []),
      ...(wave
        ? [
            {
              id: "review",
              Icon: AppIconAA,
              keyboardShortcut: quest,
              onSelect: grove,
              requiresCodexAccess: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.openReviewTab",
                    defaultMessage: "Review",
                    description:
                      "Action label for opening the review tab from the task side panel",
                  }}
                />
              ),
            },
          ]
        : []),
      ...(apex
        ? [
            {
              id: "timeline",
              Icon: AppIconCct,
              onSelect: isle,
              requiresCodexAccess: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.newTab.detail.title",
                    defaultMessage: "Detail",
                    description:
                      "Action label for opening Detail from the side panel New tab page. Short label.",
                  }}
                />
              ),
            },
          ]
        : []),
      ...(target === "right"
        ? bloom.map((item) => ({
            id: `${item.hostId}:${item.server}:${item.tool.name}`,
            Icon: AppIconLV,
            mcpServerIcon: item.icon,
            onSelect: () => {
              ensureSettingsGlyphRBInit(ultra, item) != null && onClose?.();
            },
            requiresCodexAccess: true,
            title: item.title,
          }))
        : []),
      ...(brook
        ? [
            {
              id: "terminal",
              Icon: TerminalFileIcon,
              onSelect: lagoon,
              requiresCodexAccess: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "thread.sidePanel.newTab.terminal.title",
                    defaultMessage: "Terminal",
                    description:
                      "Action label for opening the terminal from a panel New tab page",
                  }}
                />
              ),
            },
          ]
        : []),
    ].filter((item) => cliff || !item.requiresCodexAccess);
  return {
    actions:
      frost.kind === "git"
        ? [...oak].sort(
            (trail, urn) =>
              (jade[trail.id] ?? oak.length) - (jade[urn.id] ?? oak.length),
          )
        : oak,
    hasOutputArtifacts: elm,
    onOpenArtifact: nest,
    outputArtifacts: dusk,
  };
}
var harbor,
  indigo,
  jade,
  kite = esmInit(() => {
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureComposerEsm_B7_Init();
    MEMORIES_ID();
    codexProjectKey();
    InitialRoute3();
    ensureSettingsGlyphI0Init();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Ilt_Init();
    DeferredDX();
    ensureComposerEsm_RV_Init();
    ensureComposerEsm_NA_Init();
    AppInitialM();
    CHATGPT_PRODUCT_ID();
    AppIconJA();
    ensureComposerEsm_LR_Init();
    ensureComposerEsm_Ytt_Init();
    ensureComposerEsm_CU_Init();
    threadOverflowMenuO();
    threadAppShellChromeR();
    getRecentConversationsQueryKey();
    isChatgptProjectsWorkspace();
    LocalConversationThread();
    fileSourceBrowserMessages();
    ensureAppScopeInit();
    filterConversationTimelineItems();
    listAvailableCodeThemes();
    ensureComposerEsm_F7_Init();
    AppInitialSk();
    posixPathBasename();
    Remote7();
    resolvePinnedPanelPlacement();
    sidebarelectronProductmodeChatgptMessages();
    localThread2();
    indigo = deferredUiXT(appScopeAtom, ({ get }) =>
      get(AppInitialWX).filter((item) => item.entrypoint === "thread"),
    );
    jade = {
      review: 0,
      terminal: 1,
      browser: 2,
      "open-file": 3,
    };
  });
function ThreadAppShellChromeHelper15(screw) {
  let torque = screw === undefined ? {} : screw;
  let { onClose } = torque,
    valve = {
      onClose,
      target: "right",
    };
  let { actions, onOpenArtifact, outputArtifacts } = gamma(valve),
    axle = actions.find(garnet);
  let bracket = axle,
    clamp = () => {
      bracket?.onSelect();
    };
  let drill = bracket != null,
    engine;
  engine = {
    enabled: drill,
  };
  ContextMenuRegistration("openSideChat", clamp, engine);
  return (
    <ThreadAppShellChromeHelper17
      {...{
        actions,
        onOpenArtifact,
        outputArtifacts,
      }}
    />
  );
}
function garnet(frame) {
  return frame.id === "side-chat";
}
