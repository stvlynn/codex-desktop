// Restored from ref/webview/assets/thread-overflow-menu-jSLwXfym.js
// Wave GA — full polished body from `thread-overflow-menu-jSLwXfym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 97/135).
// AST split 2/2
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexThreadForkDestination } from "../../analytics/codex-thread-fork-destination";
import { CODEX_THREAD_FORK_SELECTED_TYPE } from "../../analytics/codex-thread-fork-selected-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { getArtifactViewerFromOpen } from "../../artifacts/get-artifact-viewer-from-open";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { defaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { findAutomationForConversation } from "../../automation/find-automation-for-conversation";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_QN_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Qa_Init } from "../../boundaries/conversation-page-esm-inits";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { useBrowserOpenTarget } from "../../browser/use-browser-open-target";
import { sidebarRealtimeStatusMessages } from "../../chat/sidebar-realtime-status";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { ArchiveChatHeartbeatConfirmDialog } from "../../conversation/archive-chat-heartbeat-confirm-dialog";
import { deferredConversationSo } from "../../conversation/deferred-conversation-so";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { ensureSidebarThreadKeyPrefixesInit, toLocalSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { useCanPinThreadAction } from "../../conversation/use-can-pin-thread-action";
import { useOpenThreadInNewWindow } from "../../conversation/use-open-thread-in-new-window";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconKo } from "../../icons/app-icon-ko";
import { AppIconMA } from "../../icons/app-icon-ma";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconZa } from "../../icons/app-icon-za";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { handleAnchorOpenHrefAfterExternalCheck } from "../../navigation/handle-anchor-open-href-after-external-check";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { panelControllerForSide } from "../../navigation/panel-controller-for-side";
import { ensurePetNotificationMenuInit } from "../../pets/ensure-pet-notification-menu-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { threadActionErrorMessages } from "../../sidebar/thread-action-error-messages";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { dismissTooltips } from "../../ui/dismiss-tooltips";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { remote } from "../../ui/remote";
import { codexProjectKey } from "../../utils/codex-project-key";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { runGateWithOptionalExposureLog } from "../../utils/run-gate-with-optional-exposure-log";
import { ensurePersonalizationCInit, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";

