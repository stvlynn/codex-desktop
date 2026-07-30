// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 2/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { ArtifactFilePreviewIcon, ensureArtifactFilePreviewIconInit as EnsureArtifactFilePreviewIconInit } from "../../artifact/artifact-file-preview-icon";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_CU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_IB_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_NA_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_GZ_Init } from "../../boundaries/conversation-page-esm-inits";
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

export const threadAppShellChromeR = esmInit(() => {
  localConversationThreadUpperA();
});
