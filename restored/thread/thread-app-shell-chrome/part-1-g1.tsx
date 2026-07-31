// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 1/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { ArtifactFilePreviewIcon, ensureArtifactFilePreviewIconInit as EnsureArtifactFilePreviewIconInit } from "../../artifact/artifact-file-preview-icon";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_CU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_IB_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_NA_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_GZ_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { MEMORIES_ID } from "../../config/memories-id";
import { BrowserConversationPanel } from "../../conversation/browser-conversation-panel";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { resolveThreadProjectSelection } from "../../conversation/resolve-thread-project-selection";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ensureDiffStatsAggregateInit } from "../../diff/ensure-diff-stats-aggregate-init";
import { isChatgptProjectsWorkspace } from "../../environments/is-chatgpt-projects-workspace";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { openOrFocusFilePanelTab } from "../../files/open-or-focus-file-panel-tab";
import { pickPreferredOpenTarget } from "../../files/pick-preferred-open-target";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { ensureUseMediaQueryInit, useMediaQuery } from "../../hooks/use-media-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAA } from "../../icons/app-icon-aa";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { ensureAppIconL0Init } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { TerminalFileIcon } from "../../icons/terminal-file-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { buildMcpToolCallItem } from "../../mcp/build-mcp-tool-call-item";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit, reviewFilesAtom } from "../../navigation/app-shell-atoms";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { listConversationBrowserTabMatches } from "../../navigation/list-conversation-browser-tab-matches";
import { panelControllerForSide } from "../../navigation/panel-controller-for-side";
import { resolvePinnedPanelPlacement } from "../../navigation/resolve-pinned-panel-placement";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { HotkeyKeysLabel } from "../../settings/hotkey-keys-label";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { closeBottomPanelOrOverlay } from "../../shell/close-bottom-panel-or-overlay";
import { sidebarelectronProductmodeChatgptMessages } from "../../sidebar/sidebarelectron-productmode-chatgpt-messages";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { DEFAULT_MOTION_TRANSITION } from "../../ui/default-motion-transition";
import { deferredUiYE } from "../../ui/deferred-ui-ye";
import { deferredW1 } from "../../ui/deferred-w1";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ensureClipboardCopyErrorToastInit } from "../../ui/ensure-clipboard-copy-error-toast-init";
import { PLACEMENT_RIGHT_BOTTOM } from "../../ui/placement-right-bottom";
import { PopoverMenu } from "../../ui/popover-menu";
import { TabStripSizedButton } from "../../ui/tab-strip-sized-button";
import { codexProjectKey } from "../../utils/codex-project-key";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationJutInit, ensureSettingsGlyphI0Init, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadB1Init } from "../../utils/wave-av-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { localConversationThreadUpperA, localConversationThreadUpperL as LocalConversationThreadUpperL, localConversationThreadUpperR } from "../local-conversation-thread";
import { threadOverflowMenuO, threadOverflowMenuS } from "../thread-overflow-menu";
import { initThreadPanelToggleButton as InitThreadPanelToggleButton, ThreadPanelToggleButton } from "../thread-panel-toggle-button";
import { ThreadAppShellChromeHelper17 } from "./part-1-g2";

const deferredUiA4: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolvePanelSide@navigation/resolve-panel-side.ts) */
const AppInitialAU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensurePersonalizationCInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_CU_Init@boundaries/composer-esm-inits.ts) */
const AppInitialCU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:focusAreaAtom@navigation/app-shell-atoms.ts) */
const AppInitialD0: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-d8.ts) */
const deferredUiD8: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/local-thread2.ts) */
const localThread2: any = undefined;
/** Wave FZ unresolved companion (missing-export:hooks/deferred-dx.tsx) */
const DeferredDX: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-e8.ts) */
const deferredUiE8: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureReviewDiffFilterInit@review/set-review-diff-filter.ts) */
const AppInitialEW: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-f83.tsx) */
const deferredConversationF83: any = undefined;
/** Wave FZ unresolved companion (missing-export:worktree/pending-worktrees.tsx) */
const PendingWorktrees: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-h222.tsx) */
const DeferredUiH222: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/set-prefix-label.tsx) */
const AppInitialHE: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:toolbar@ui/toolbar.ts) */
const AppInitialHZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/app-icon-ja.tsx) */
const AppIconJA: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureKeyboardShortcutsJZInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialJZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:desktop/codex-dismiss-tooltips.tsx) */
const CodexDismissTooltips: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-l2-2.tsx) */
const DeferredUiL2: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:closeBottomPanelOrOverlay@shell/close-bottom-panel-or-overlay.ts) */
const AppInitialLU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/initial-route3.tsx) */
const InitialRoute3: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/remote6.tsx) */
const Remote6: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_NZ_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialNZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-o1.ts) */
const deferredUiO1: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-o22.tsx) */
const DeferredUiO22: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiOk@ui/deferred-ui-ok.tsx) */
const AppInitialOk: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/remote7.tsx) */
const Remote7: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:setKeyedStoreAtomValuePU@utils/set-keyed-store-atom-value.ts) */
const AppInitialPU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useTurnDiffEnrichmentQuery@diff/use-turn-diff-enrichment-query.ts) */
const AppInitialQR: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/local-conversation-thread2.tsx) */
const AppInitialQU: any = undefined;
/** Wave FZ unresolved companion (missing-export:thread/thread-side-panel-tabs.ts) */
const toggleThreadSidePanel: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:logBrowserProfileImportDialogClosed@browser/log-browser-profile-import-dialog-closed.ts) */
const AppInitialSk: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u232.tsx) */
const DeferredUiU232: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useQlnAtomValue@hooks/use-qln-atom-value.ts) */
const AppInitialV7: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:menu@ui/menu.ts) */
const AppInitialVE: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationWE@conversation/deferred-conversation-we.ts) */
const AppInitialWE: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiWX@ui/deferred-ui-wx.ts) */
const AppInitialWX: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:mcp/presentation.tsx) */
const AppInitialYz: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isLocalOrNullValue@hosts/is-local-or-null-value.ts) */
const AppInitialZR: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/local-conversation-thread.tsx) */
const LocalConversationThread: any = undefined;
var alpha,
  Bravo,
  copper = esmInit(() => {
    react();
    Bravo = sage => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...sage}>
        <path d="M13.334 12.2529C13.701 12.2533 13.999 12.5509 13.999 12.918C13.9988 13.2849 13.7008 13.5827 13.334 13.583H6.66699C6.29984 13.583 6.00215 13.2851 6.00195 12.918C6.00195 12.5507 6.29972 12.2529 6.66699 12.2529H13.334Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z" fill="currentColor" />
      </svg>;
  }),
  delta,
  Echo,
  falcon = esmInit(() => {
    react();
    Echo = topaz => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...topaz}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3.08594C16.748 3.08594 18.165 4.503 18.165 6.25098V13.751C18.165 15.499 16.748 16.916 15 16.916H5C3.25202 16.916 1.83496 15.499 1.83496 13.751V6.25098C1.83496 4.503 3.25202 3.08594 5 3.08594H15ZM5 4.41602C3.98656 4.41602 3.16504 5.23753 3.16504 6.25098V13.751C3.16504 14.7644 3.98656 15.5859 5 15.5859H15C16.0134 15.5859 16.835 14.7644 16.835 13.751V6.25098C16.835 5.23753 16.0134 4.41602 15 4.41602H5Z" fill="currentColor" />
        <path d="M3.16504 12.2529H16.835V13.583H3.16504V12.2529Z" fill="currentColor" />
      </svg>;
  });
export const threadAppShellChromeR = esmInit(() => {
  localConversationThreadUpperA();
});
function gamma({
  onClose,
  target
}) {
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
    jewel = ultra.value.routeKind === "local-thread" ? ultra.value.conversationId : null,
    knoll = CodexBrowserSurfaceActionType(deferredUiA4, jewel);
  CodexBrowserSurfaceActionType(DeferredUiL2, jewel);
  let lunar = CodexBrowserSurfaceActionType(DeferredUiU232, jewel),
    moss = CodexBrowserSurfaceActionType(DeferredUiO22, jewel),
    north = CodexBrowserSurfaceActionType(deferredUiE1, "searchFiles"),
    orbit = CodexBrowserSurfaceActionType(deferredUiE1, "openSideChat"),
    pine = CodexBrowserSurfaceActionType(deferredUiE1, "openBrowserTab"),
    quest = CodexBrowserSurfaceActionType(deferredUiE1, "openReviewTab"),
    ridge = CodexBrowserSurfaceActionType(AppInitialOk, {
      conversationId: jewel,
      hostId: honey.id
    }, {
      enabled: false
    }),
    storm = knoll !== "projectless" && glide != null,
    tide = jewel != null && false,
    unity = jewel != null && !isCurrentSpecialWindowRoute(),
    vale = coral && (drift || !acorn.some(item => Remote6(item))),
    wave = !eagle && (frost.kind === "git" || false) && !acorn.some(item => item.tabId === buildMcpToolCallItem.DIFF),
    apex = tide && !acorn.some(item => item.tabId === buildMcpToolCallItem.TIMELINE),
    brook = (!eagle || target !== "right") && AppInitialAU(ultra),
    cliff = wheat.status === "allowed" || wheat.status === "loading",
    dusk = cliff && frost.kind !== "git" ? ridge : null,
    elm = dusk != null && dusk.length > 0,
    fern = () => {
      jewel != null && threadOverflowMenuS(ultra, localConversationThreadUpperR, {
        sourceConversationId: jewel,
        cwd: frost.cwd,
        hostId: lunar,
        collaborationMode: moss,
        intl: vapor,
        target
      }).then(() => {
        onClose?.();
      }).catch(error => {
        appActionSidebarProjectRefSchema.error("Error opening side chat", {
          safe: {},
          sensitive: {
            error
          }
        });
        ultra.get(toastAtom).danger(vapor.formatMessage({
          id: "thread.sidePanel.openSideChatError",
          defaultMessage: "Failed to open side chat",
          description: "Error message shown when opening a side chat from the chat side panel fails"
        }));
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
        target: drift ? target : "right"
      }) != null && onClose?.();
    },
    isle = () => {
      deferredUiYE(ultra, jewel, {
        target
      }) && onClose?.();
    },
    juniper = () => {
      glide != null && (openFileInPanelTab(ultra, null, {
        hostId: honey.id,
        target,
        workspaceRoot: glide
      }), onClose?.());
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
          originHostId: rain
        });
        return;
      }
      deferredUiEnt({
        event: quiet,
        href: petal,
        initiator: "mcp_app_resource",
        originHostId: rain
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
            openInSidePanel: true
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
            hostId: honey.id
          });
      }
    },
    oak = [...(storm ? [{
      deferSelectionUntilDropdownClose: true,
      id: "open-file",
      Icon: AppIconIR,
      keyboardShortcut: north,
      onSelect: juniper,
      requiresCodexAccess: true,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.openFile",
        defaultMessage: "Files",
        description: "Action label for opening the workspace file browser from the task side panel"
      }} />
    }] : []), ...(unity ? [{
      id: "side-chat",
      Icon: AppInitialP,
      keyboardShortcut: orbit,
      onSelect: fern,
      requiresCodexAccess: true,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.openSideChat",
        defaultMessage: "Side chat",
        description: "Action label for opening a side chat from the chat side panel"
      }} />
    }] : []), ...(vale ? [{
      deferSelectionUntilDropdownClose: true,
      id: "browser",
      Icon: AppIconJtt,
      keyboardShortcut: pine,
      onSelect: hill,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.openBrowserTab",
        defaultMessage: "Browser",
        description: "Action label for opening the browser tab from the task side panel"
      }} />
    }] : []), ...(wave ? [{
      id: "review",
      Icon: AppIconAA,
      keyboardShortcut: quest,
      onSelect: grove,
      requiresCodexAccess: true,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.openReviewTab",
        defaultMessage: "Review",
        description: "Action label for opening the review tab from the task side panel"
      }} />
    }] : []), ...(apex ? [{
      id: "timeline",
      Icon: AppIconCct,
      onSelect: isle,
      requiresCodexAccess: true,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.newTab.detail.title",
        defaultMessage: "Detail",
        description: "Action label for opening Detail from the side panel New tab page. Short label."
      }} />
    }] : []), ...(target === "right" ? bloom.map(item => ({
      id: `${item.hostId}:${item.server}:${item.tool.name}`,
      Icon: AppIconLV,
      mcpServerIcon: item.icon,
      onSelect: () => {
        ensureSettingsGlyphRBInit(ultra, item) != null && onClose?.();
      },
      requiresCodexAccess: true,
      title: item.title
    })) : []), ...(brook ? [{
      id: "terminal",
      Icon: TerminalFileIcon,
      onSelect: lagoon,
      requiresCodexAccess: true,
      title: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.newTab.terminal.title",
        defaultMessage: "Terminal",
        description: "Action label for opening the terminal from a panel New tab page"
      }} />
    }] : [])].filter(item => cliff || !item.requiresCodexAccess);
  return {
    actions: frost.kind === "git" ? [...oak].sort((trail, urn) => (jade[trail.id] ?? oak.length) - (jade[urn.id] ?? oak.length)) : oak,
    hasOutputArtifacts: elm,
    onOpenArtifact: nest,
    outputArtifacts: dusk
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
    indigo = deferredUiXT(appScopeAtom, ({
      get
    }) => get(AppInitialWX).filter(item => item.entrypoint === "thread"));
    jade = {
      review: 0,
      terminal: 1,
      browser: 2,
      "open-file": 3
    };
  });
function lemon(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.key;
    case "file":
    case "generated-image":
      return `file:${event.path}`;
    case "google-drive":
      return `google-drive:${event.url}`;
    case "appgen-app":
      return `appgen-app:${event.projectId}`;
    case "website":
      return `website:${event.target}`;
  }
}
function marble(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.title;
    case "file":
    case "generated-image":
      return posixPathBasename(event.path);
    case "google-drive":
      return event.title;
    case "appgen-app":
      return event.title ?? formatUrlHostPath(event.url) ?? event.url;
    case "website":
      return onyx(event.target);
  }
}
function nickel(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.url;
    case "file":
    case "generated-image":
      return event.path;
    case "google-drive":
      return event.url;
    case "appgen-app":
      return formatUrlHostPath(event.url) ?? event.url;
    case "website":
      return event.target;
  }
}
function onyx(vine) {
  try {
    let wind = new URL(vine);
    return `${wind.host}${wind.pathname === "/" ? "" : wind.pathname}${wind.search}`;
  } catch {
    return posixPathBasename(vine) || vine;
  }
}
var pearl = esmInit(() => {
  ensureChatgptSiteSuffixesInit();
  ensureComposerEsm_Wdt_Init();
});
function ThreadAppShellChromeHelper6(yarrow) {
  let {
    artifact,
    iconClassName,
    imageClassName
  } = yarrow;
  switch (artifact.type) {
    case "external-resource":
      {
        let azure;
        return <LocalConversationThreadUpperL {...{
          className: iconClassName,
          resource: artifact.resource
        }} />;
      }
    case "file":
    case "generated-image":
      {
        let birch;
        return <EnsureArtifactFilePreviewIconInit {...{
          iconClassName,
          imageClassName,
          path: artifact.path
        }} />;
      }
    case "google-drive":
      {
        let canyon;
        return <AppInitialC className={iconClassName} resourceKind={artifact.resourceKind} />;
      }
    case "appgen-app":
      {
        let dew;
        return <AppIconHG {...{
          className: iconClassName
        }} />;
      }
    case "website":
      {
        let ever;
        return <AppIconJtt {...{
          className: iconClassName
        }} />;
      }
  }
}
var quartz,
  river,
  slate = esmInit(() => {
    quartz = reactCompilerRuntime();
    ArtifactFilePreviewIcon();
    ensureComposerEsm_Ytt_Init();
    ensureAppIconHGInit();
    ensureDiffStatsAggregateInit();
    localConversationThreadUpperR();
  });
function ThreadAppShellChromeHelper7(field) {
  let {
      actions,
      hasOutputArtifacts,
      onActionSelect,
      onOpenArtifact,
      outputArtifacts
    } = field,
    grain = hasOutputArtifacts && outputArtifacts != null && outputArtifacts.length > 0;
  if (actions.length === 0 && !grain) {
    let jadeite;
    return <DropdownMenu.Message {...{
      compact: true,
      children: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.newTab.empty",
        defaultMessage: "No tabs are available for this chat",
        description: "Empty message on the side panel New tab page when the current chat has no available side panel tab actions."
      }} />
    }} />;
  }
  let haven;
  {
    let kernel;
    kernel = leaf => <DropdownMenu.Item key={leaf.id} {...{
      LeftIcon: leaf.mcpServerIcon == null ? leaf.Icon : undefined,
      keyboardShortcut: leaf.keyboardShortcut,
      onSelect: () => onActionSelect(leaf),
      children: [leaf.mcpServerIcon == null ? null : <DropdownMenu.ItemIcon {...{
        children: ensureComposerEsm_IB_Init(leaf.mcpServerIcon)
      }} />, leaf.title]
    }} />;
    haven = actions.map(kernel);
  }
  let ink = grain ? <>
      {actions.length > 0 ? <DropdownMenu.Separator {...{}} /> : null}
      {<DropdownMenu.SectionLabel {...{
      children: <MemoizedFormattedMessage {...{
        id: "thread.sidePanel.newTab.suggested.heading",
        defaultMessage: "Suggested",
        description: "Heading for suggested artifacts shown on the side panel New tab page"
      }} />
    }} />}
      {outputArtifacts.map(item => <DropdownMenu.Item key={lemon(item)} {...{
      onClickCapture: event => {
        installModalBrowserExtensionMessages(event) && (event.preventDefault(), event.stopPropagation(), onOpenArtifact(item, event));
      },
      onSelect: () => onOpenArtifact(item),
      children: [<DropdownMenu.ItemIcon {...{
        children: <ThreadAppShellChromeHelper6 {...{
          artifact: item,
          iconClassName: "icon-xs",
          imageClassName: "size-[18px] rounded-sm"
        }} />
      }} />, marble(item)]
    }} />)}
    </> : null;
  return <>
      {haven}
      {ink}
    </>;
}
var timber,
  umbra,
  violet = esmInit(() => {
    timber = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Qtt_Init();
    resolveThreadProjectSelection();
    pearl();
    slate();
  });
function ThreadAppShellChromeHelper8(maple) {
  let {
      cwd,
      hostConfig
    } = maple,
    nimbus = useIntl(),
    opal = useMediaQuery("(max-width: 920px)"),
    plume = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    [quillow, silk] = amber.useState(null),
    thorn = hostConfig?.id,
    upland = {
      cwd,
      deferEnrichment: true,
      hostId: thorn
    };
  let {
    canLoadTargets,
    preferredTarget,
    targets,
    availableTargets,
    hasLoadedTargets,
    open
  } = AppInitialQR(upland);
  if (!cwd || !canLoadTargets) return null;
  let vista, wisp, yonder, zenith, anvil, beacon, crag, dome, eddy, fjord, glen, hearth, inlet, jetty, knob, ledge, mire;
  eddy = Symbol.for("react.early_return_sentinel");
  bb0: {
    mire = plume ? targets.filter(yellow) : targets;
    let spur = new Set(availableTargets);
    let tor = spur,
      updraft = plume ? mire.find(item => item.target === "fileManager" && !item.hidden && tor.has(item.target)) ?? null : null,
      verge = pickPreferredOpenTarget({
        preferredTarget,
        targets: mire,
        availableTargets,
        mode: "editor"
      });
    wisp = verge?.target === "systemDefault" && updraft != null ? updraft : verge;
    yonder = opal || wisp != null && preferredTarget === wisp.target;
    let weir = wisp ? nimbus.formatMessage({
        id: "localConversationPage.openPrimaryTarget.tooltip",
        defaultMessage: "Open in {target}",
        description: "Tooltip for the primary open button"
      }, {
        target: wisp.label
      }) : undefined,
      yard = !hasLoadedTargets || mire.some($n),
      anchor = mire.filter(xenon);
    if (!yard && wisp == null && anchor.length === 0 && quillow == null) {
      eddy = null;
      break bb0;
    }
    vista = CompoundButtonMenu;
    fjord = "outline";
    glen = "toolbar";
    hearth = "!border-token-border";
    inlet = "!border-token-border";
    jetty = wisp == null;
    knob = "end";
    ledge = "tall";
    zenith = "menuFixed";
    anvil = "pt-2";
    beacon = yonder ? cedar.openPrimaryTarget : undefined;
    crag = yonder ? weir : undefined;
    dome = anchor.length === 0 ? <ThreadAppShellChromeHelper12 {...{}} /> : anchor.map(item => <DropdownMenu.Item key={item.id} {...{
      onSelect: () => {
        open(item.target, {
          appPath: item.appPath,
          openMode: "workspace",
          persistPreferred: true
        });
      },
      children: [<DropdownMenu.ItemIcon {...{
        children: <ThreadAppShellChromeHelper13 {...{
          alt: "",
          src: quillow == null ? item.resolvedIcon ?? item.icon : quillow.get(item.id) ?? item.icon,
          className: "icon-sm"
        }} />
      }} />, <span className="truncate">{item.label}</span>]
    }} />);
  }
  if (eddy !== Symbol.for("react.early_return_sentinel")) return eddy;
  let nook = bolt => {
    silk(bolt ? new Map(mire.map(willow)) : null);
  };
  let oxbow = wisp == null ? undefined : () => {
    open(wisp.target, {
      appPath: wisp.appPath,
      openMode: "workspace",
      persistPreferred: false
    });
  };
  let pond = <span className="icon-xs inline-flex shrink-0 items-center justify-center">
      {wisp == null ? <span className="size-4 rounded bg-token-bg-tertiary" /> : <ThreadAppShellChromeHelper13 {...{
      alt: yonder ? wisp.label : "",
      src: wisp.icon,
      className: "icon-xs"
    }} />}
    </span>;
  let quarry = yonder ? null : <span className="truncate">
      {<MemoizedFormattedMessage {...{
      ...cedar.openPrimaryTarget
    }} />}
    </span>;
  let rapids = <span className="flex items-center gap-1.5">
      {pond}
      {quarry}
    </span>;
  return <CompoundButtonMenu {...{
    color: fjord,
    size: glen,
    primaryClassName: hearth,
    dropdownButtonClassName: inlet,
    primaryDisabled: jetty,
    dropdownAlign: knob,
    dropdownContentMaxHeight: ledge,
    dropdownContentWidth: zenith,
    dropdownContentClassName: anvil,
    primaryAriaLabel: beacon,
    tooltipContent: crag,
    dropdownContent: dome,
    onDropdownOpenChange: nook,
    onClick: oxbow,
    children: rapids
  }} />;
}
function willow(cog) {
  return [cog.id, cog.resolvedIcon ?? cog.icon];
}
function xenon(disc) {
  return !disc.hidden && disc.available === true;
}
function $n(edge) {
  return edge.available == null || edge.resolvedIcon === undefined;
}
function yellow(forge) {
  return forge.kind !== "editor" && forge.kind !== "terminal";
}
function ThreadAppShellChromeHelper12() {
  return <DropdownMenu.Item {...{
    disabled: true,
    "aria-hidden": "true",
    children: [<DropdownMenu.ItemIcon {...{
      children: <span className="size-4 rounded bg-token-bg-tertiary" />
    }} />, <span className="h-3 w-24 rounded bg-token-bg-tertiary" />]
  }} />;
}
function ThreadAppShellChromeHelper13(gear) {
  let {
      alt,
      className,
      src
    } = gear,
    [hinge, iron] = amber.useState(null);
  if (src === hinge) return null;
  let joint = () => iron(src);
  return <img alt={alt} className={className} onError={joint} src={src} />;
}
var zinc,
  amber,
  basalt,
  cedar,
  or = esmInit(() => {
    zinc = reactCompilerRuntime();
    amber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialYz();
    ensureDropdownMenuInit();
    ensureUseMediaQueryInit();
    ensureComposerEsm_F7_Init();
    ensureClipboardCopyErrorToastInit();
    AppInitialZR();
    cedar = identity({
      openPrimaryTarget: {
        id: "localConversationPage.openPrimaryTarget",
        defaultMessage: "Open in",
        description: "Primary open button label"
      }
    });
  });
function ThreadAppShellChromeHelper14(keystone) {
  let {
      conversationId
    } = keystone,
    latch = CodexPluginActionResult(requestRealtimeVoicePresentationSurface),
    motor = CodexPluginActionResult(AppInitialQU),
    nut = CodexBrowserSurfaceActionType(DeferredUiH222, conversationId),
    piston = motor.cwd == null ? null : identityCwd(motor.cwd);
  let rivet = piston;
  if (rivet == null || !nut || motor.kind !== "git" || latch.kind === "remote-control") return null;
  return <AppIconAZ.HeaderAction {...{
    actionId: "thread-local-project-actions",
    align: "end",
    order: 100,
    children: <ThreadAppShellChromeHelper8 {...{
      cwd: rivet,
      hostConfig: latch
    }} />
  }} />;
}
var daisy,
  ember,
  flint = esmInit(() => {
    daisy = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    DeferredUiV2();
    AppInitialOZ();
    or();
    LocalConversationThread();
    listAvailableCodeThemes();
  });
function ThreadAppShellChromeHelper15(screw) {
  let torque = screw === undefined ? {} : screw;
  let {
      onClose
    } = torque,
    valve = {
      onClose,
      target: "right"
    };
  let {
      actions,
      onOpenArtifact,
      outputArtifacts
    } = gamma(valve),
    axle = actions.find(garnet);
  let bracket = axle,
    clamp = () => {
      bracket?.onSelect();
    };
  let drill = bracket != null,
    engine;
  engine = {
    enabled: drill
  };
  ContextMenuRegistration("openSideChat", clamp, engine);
  return <ThreadAppShellChromeHelper17 {...{
    actions,
    onOpenArtifact,
    outputArtifacts
  }} />;
}
function garnet(frame) {
  return frame.id === "side-chat";
}
