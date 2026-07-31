// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/11
/* split-lane-import-depth:1 */

import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { appActionSidebarProjectRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserProfileImportPasswordStatus } from "../../analytics/codex-browser-profile-import-password-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { shellPanelPinnedDerivedAtom } from "../../app-shell/shell-panel-pin";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { defaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationBranchAtom, chatgptConversationFlagsAtom, chatgptConversationLoadQueryAtom, chatgptConversationPreviewAtom, chatgptConversationServerIdAtom, chatgptConversationsGateAtom, chatgptConversationStatusAtom, chatgptConversationTitleAtom, chatgptThreadDerivedAtomBP, useStepsProseAtom, writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_BF_Init, ensureComposerEsm_BI_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_II_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KF_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MF_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_Ytt_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Jj_Init, ensureConversationPageEsm_Lo_Init, ensureConversationPageEsm_Mx_Init, ensureConversationPageEsm_Qa_Init, ensureConversationPageEsm_SP_Init, ensureConversationPageEsm_TP_Init } from "../../conversation/conversation-page-esm-inits";
import { isIterateeCall } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { _useChatgptComposerControllerA, _useChatgptComposerControllerC, _useChatgptComposerControllerD, _useChatgptComposerControllerF, _useChatgptComposerControllerI, _useChatgptComposerControllerL, _useChatgptComposerControllerM, _useChatgptComposerControllerN, _useChatgptComposerControllerO, _useChatgptComposerControllerP, _useChatgptComposerControllerR, _useChatgptComposerControllerS, useChatgptComposerControllerA, useChatgptComposerControllerC, useChatgptComposerControllerD, useChatgptComposerControllerE, useChatgptComposerControllerF, useChatgptComposerControllerG, useChatgptComposerControllerH, useChatgptComposerControllerI, useChatgptComposerControllerJ, useChatgptComposerControllerK, useChatgptComposerControllerL, useChatgptComposerControllerM, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerS, useChatgptComposerControllerT, useChatgptComposerControllerU, useChatgptComposerControllerUnderscore } from "../../composer/use-chatgpt-composer-controller";
import { chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_CITATION_ID } from "../../chatgpt/chatgpt-citation-id";
import { CHATGPT_CONTENT_REFERENCE_ID } from "../../chatgpt/chatgpt-content-reference-id";
import { CHATGPT_DIL_ID } from "../../chatgpt/chatgpt-dil-id";
import { CHATGPT_IMAGE_GROUP_ID } from "../../chatgpt/chatgpt-image-group-id";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { isLocalChatgptId } from "../../chatgpt/is-local-chatgpt-id";
import { SelectedTextOverlay } from "../../composer/selected-text-overlay";
import { MEMORIES_ID } from "../../config/memories-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureHasSeenRealtimeVoiceNuxAtomInit } from "../../home/realtime-voice-nux";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { useEventCallback } from "../../hooks/use-event-callback";
import { clampFloatingWindowRect, initFloatingWindowPointerDragConstants, resizeFloatingWindowRect, useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconKG } from "../../icons/app-icon-kg";
import { ensureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { codexDirectiveMarkedExtensions } from "../../markdown/codex-directive-marked-extensions";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { findSidebarSectionElement, readScrollTop, writeScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { NavigationAllowContext } from "../../navigation/navigation-allow-context";
import { buildSiteSettingsPath } from "../../navigation/site-settings-path";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { pluginManagePathForCatalogEntry } from "../../plugins/plugin-manage-path-for-catalog-entry";
import { pluginProductBrowseNav } from "../../plugins/plugin-product-browse-nav";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { visibleRemoteControlConnections } from "../../remote-control/remote-control-connection-sets";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureMemoryScopeHelpersInit } from "../../settings/ensure-memory-scope-helpers-init";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { isTunAtomEqualToNS } from "../../shell/is-tun-atom-equal-to-ns";
import { openRightPanel } from "../../shell/open-right-panel";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ProjectHoverCardBody } from "../../sidebar/project-hover-card-body";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { initThreadPanelToggleButton, ThreadPanelToggleButton } from "../../thread/thread-panel-toggle-button";
import { ThreadResourceCard } from "../../thread/thread-resource-card";
import { initThreadScrollControllerContext, useThreadScrollController } from "../../thread/thread-scroll-controller-context";
import { initThreadScrollLayout, ThreadScrollLayout } from "../../thread/thread-scroll-layout";
import { initToggleThreadSummaryPanel, initToggleThreadSummaryPanelAtoms, toggleThreadSummaryPanel, ToggleThreadSummaryPanel } from "../../thread/toggle-thread-summary-panel";
import { BrandedIcon } from "../../ui/branded-icon";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { remote } from "../../ui/remote";
import { RemoteHrefIcon } from "../../ui/remote-href-icon";
import { ensureSeededAvatarInit } from "../../ui/seeded-avatar";
import { asRecord } from "../../utils/as-record";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { codexProjectKey } from "../../utils/codex-project-key";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { identity } from "../../utils/identity";
import { isNotNullish } from "../../utils/is-not-nullish";
import { nonEmptyStringOrNull } from "../../utils/non-empty-string-or-null";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { slugifyLoose } from "../../utils/slugify-loose";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { tryParseJsonText } from "../../utils/try-parse-json-text";
import { waitForDoubleAnimationFrame } from "../../utils/wait-for-double-animation-frame";
import { ensureImportSettingsCLInit, ensureSettingsGlyphI0Init } from "../../utils/wave-as-gap-ensure-inits";
import { activateConversationSurface } from "../activate-conversation-surface";
import { BrowserConversationPanel } from "../browser-conversation-panel";
import { chatgptMessageFallbackId } from "../chatgpt-message-fallback-id";
import { initChatgptTemporaryChatUi, TemporaryChatHeaderControl, TemporaryChatOnboarding } from "../chatgpt-temporary-chat-ui/index";
import { ConversationDiffSourceBridge } from "../conversation-diff-source-bridge";
import { ensureConversationWorkRouteInit } from "../conversation-work-path";
import { deferredConversationR } from "../deferred-conversation-r";
import { fileAttachmentsFromMetadata } from "../file-attachment-from-metadata";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";
import { isCustomAgentId } from "../is-custom-agent-id";
import { isVisuallyHiddenFromConversation } from "../is-visually-hidden-from-conversation";
import { markConversationIdle } from "../mark-conversation-idle";
import { messageContentToPlainText } from "../message-content-to-plain-text";
import { patchConversationMessage } from "../patch-conversation-message";
import { rebaseConversationId } from "../rebase-conversation-id";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../thread-detail-level-ids";
import { ThreadTitleRow } from "../thread-title-row";
import { toggleConversationPinned } from "../toggle-conversation-pinned";
import { upsertConversationMessage } from "../upsert-conversation-message";
import { walkChatgptMessageTree } from "../walk-chatgpt-message-tree";

// QG unbound soft stubs
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const To: any = undefined;
const deferredNavigationFT: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/token-invalidated.ts) */
const tokenInvalidated: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const DeferredNavigationFTStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/branch-conversation-at-message.ts) */
const branchConversationAtMessage: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:renameConversationTitle@conversation/rename-conversation-title.ts) */
const AppInitialBN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_DF_Init@boundaries/composer-esm-inits.ts) */
const AppInitialDF: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceDhInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_DP_Init@boundaries/composer-esm-inits.ts) */
const AppInitialDP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveCodexCompanionById@pets/resolve-codex-companion-by-id.ts) */
const AppInitialDr: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-f83.tsx) */
const deferredConversationF83: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:messageContentToPlainText@conversation/message-content-to-plain-text.ts) */
const AppInitialFF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:findCachedConversationItem@conversation/find-cached-conversation-item.ts) */
const AppInitialFN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_FV_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialFV: any = undefined;
/** Wave FZ unresolved companion (missing-export:thread/thread-find-atoms.ts) */
const ensureThreadFindStoreInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/icon-button-with-tooltip.tsx) */
const AppInitialGL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:renameThreadDialogMessages@sidebar/rename-thread-dialog-messages.ts) */
const AppInitialGo: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_GS_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialGS: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_Ih_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialIh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:getProjectGizmoId@conversation/get-project-gizmo-id.ts) */
const AppInitialIN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptConversationMetaAtom@boundaries/composer-appscope-atoms.ts) */
const AppInitialIP: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_JN_Init@boundaries/composer-esm-inits.ts) */
const AppInitialJN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureKeyboardShortcutsJZInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialJZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptConversationQueryAtomKP@boundaries/composer-appscope-atoms.ts) */
const AppInitialKP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/conversation-search-kit.tsx) */
const AppInitialLh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureNewThreadLmInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialLm: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_MF_Init@boundaries/composer-esm-inits.ts) */
const AppInitialMF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:conversationArchiveInFlightAtom@conversation/conversation-page-family-atoms.ts) */
const AppInitialMN: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-mp2.tsx) */
const AppInitialMP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_MR_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialMR: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isChatgptMessageNode@conversation/is-chatgpt-message-node.ts) */
const AppInitialNI: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useIsMountedRef@hooks/use-is-mounted-ref.ts) */
const AppInitialNR: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_NZ_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialNZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceOhInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:files/deferred-ol.tsx) */
const AppInitialOL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptConversationLoadQueryAtom@boundaries/composer-appscope-atoms.ts) */
const AppInitialOP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:conversationsSidebarMessages@chatgpt/conversations-sidebar-messages.ts) */
const AppInitialOS: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/remote7.tsx) */
const Remote7: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:walkChatgptMessageTree@conversation/walk-chatgpt-message-tree.ts) */
const AppInitialPF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:branchConversationAtMessage@conversation/branch-conversation-at-message.ts) */
const AppInitialPP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:closeRightPanel@shell/open-right-panel.ts) */
const AppInitialPV: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:agentMention@files/agent-mention.ts) */
const AppInitialQj: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useAppsByIdsForHost@apps/use-apps-by-ids-for-host.ts) */
const AppInitialRG: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_Rh_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialRh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptProjectQueryKey@conversation/chatgpt-conversation-query-keys.ts) */
const AppInitialRN: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_TF_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialTF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureConversationPageEsm_TP_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialTP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useRouteParams@hooks/use-route-params.ts) */
const AppInitialU5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_UL_Init@boundaries/composer-esm-inits.ts) */
const AppInitialUL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useReviewPaneSnapshotMetrics@diff/use-review-pane-snapshot-metrics.ts) */
const AppInitialUm: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:hasChatgptServerIdAtom@boundaries/composer-appscope-atoms.ts) */
const AppInitialUP: any = undefined;
/** Wave FZ unresolved companion (missing-export:thread/thread-find-atoms.ts) */
const ensureThreadFindDiffProviderInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isVisuallyHiddenFromConversation@conversation/is-visually-hidden-from-conversation.ts) */
const AppInitialVF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatgptConversationPreviewAtom@boundaries/composer-appscope-atoms.ts) */
const AppInitialVP: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:boldFirstMarkdownSegment@markdown/bold-first-markdown-segment.ts) */
const AppInitialW8: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAllUnavailableClusterInit@ui/ensure-all-unavailable-cluster-init.ts) */
const AppInitialWa: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationWE@conversation/deferred-conversation-we.ts) */
const AppInitialWE: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/inline-rename-field.tsx) */
const AppInitialWo: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const quickChatConversationTitleAtom: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_XF_Init@boundaries/composer-esm-inits.ts) */
const AppInitialXF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_XP_Init@boundaries/composer-esm-inits.ts) */
const AppInitialXP: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:mapLibraryFilesToFsPathLabels@content/map-library-files-to-fs-path-labels.ts) */
const AppInitialYF: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:markConversationError@conversation/mark-conversation-error.ts) */
const AppInitialYP: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_ZE_Init@boundaries/composer-esm-inits.ts) */
const AppInitialZE: any = undefined;
/** Wave FZ unresolved companion (sib-missing:hooks/use-floating-window-pointer-drag.ts) */
const useFloatingWindowPointerDragT: any = undefined;
function alpha(basalt) {
  let {
      conversationId
    } = basalt,
    cedar = CodexPluginActionType(appScopeAtom),
    daisy,
    ember;
  daisy = () => bravo(cedar, conversationId);
  ember = [conversationId, cedar];
  writeScrollTop("rename-thread", daisy, ember);
  let flint, garnet;
  flint = () => copper(cedar, conversationId);
  garnet = [conversationId, cedar];
  writeScrollTop("toggle-thread-pin", flint, garnet);
  let hazel, ivory;
  return hazel = () => delta(cedar, conversationId), ivory = [conversationId, cedar], writeScrollTop("archive-thread", hazel, ivory), null;
}
function bravo(jasper, kelp) {
  let lotus = echo(jasper, kelp);
  if (lotus == null || jasper.get(AppInitialMN, lotus.conversation_id)) return;
  let mint = jasper.get(AppInitialKP, kelp) ?? lotus.title ?? "";
  chatProcessRegister(jasper, AppInitialWo, {
    initialValue: mint,
    onSave: nova => {
      AppInitialBN({
        scope: jasper,
        conversationId: lotus.conversation_id,
        previousTitle: mint,
        title: nova
      });
    },
    requireNonEmpty: true,
    trimOnSave: true
  });
}
function copper(olive, prism) {
  let quill = echo(olive, prism);
  quill == null || olive.get(AppInitialMN, quill.conversation_id) || toggleConversationPinned({
    scope: olive,
    conversation: {
      gizmo_id: quill.gizmo_id,
      id: quill.conversation_id,
      is_archived: quill.is_archived,
      is_starred: quill.is_starred,
      title: quill.title
    }
  }).catch(() => undefined);
}
function delta(reef, sage) {
  let topaz = echo(reef, sage);
  topaz != null && AppInitialJN({
    scope: reef,
    conversationId: topaz.conversation_id
  }).promise.catch(() => undefined);
}
function echo(ultra, vapor) {
  let wheat = ultra.get(chatgptConversationServerIdAtom, vapor);
  return wheat == null ? null : ultra.query.snapshot(AppInitialOP, wheat).getData() ?? null;
}
var falcon,
  gamma = esmInit(() => {
    falcon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    collectUniqueMappedPresenceEntries();
    findSidebarSectionElement();
    ensureAppScopeInit();
    AppInitialGo();
    markConversationIdle();
    ensureComposerEsm_XP_Init();
    ensureMemoryScopeHelpersInit();
  });
function harbor(yarn) {
  let {
      className,
      value
    } = yarn,
    zephyr = IntlProvider("overflow-x-hidden overflow-y-auto font-mono text-[11px] leading-5 text-token-text-primary", className);
  let acorn = <Alpha {...{
    value
  }} />;
  return <div className={zephyr}>
      {acorn}
    </div>;
}
function indigo(bloom) {
  let {
    name,
    value
  } = bloom;
  if (no(value)) {
    let eagle;
    return <Bravo {...{
      name,
      value
    }} />;
  }
  let coral = name == null ? null : <Copper {...{
    name
  }} />;
  let drift = <To {...{
    value
  }} />;
  return <div className="flex min-w-0 gap-1 rounded-sm px-1">
      {coral}
      {drift}
    </div>;
}
function jade(frost) {
  let {
      name,
      value
    } = frost,
    [glide, honey] = timber.useState(true),
    iris,
    jewel;
  jewel = Symbol.for("react.early_return_sentinel");
  bb0: {
    let knoll = marble(value),
      lunar = Array.isArray(value),
      moss = lunar ? "[" : "{",
      north = lunar ? "]" : "}";
    if (knoll.length === 0) {
      let brook = name == null ? null : <Copper {...{
        name
      }} />;
      let cliff = <span className="text-token-text-primary">
          {moss}
          {north}
        </span>;
      let dusk;
      dusk = <div className="flex min-w-0 gap-1 rounded-sm px-1">
          {brook}
          {cliff}
        </div>;
      jewel = dusk;
      break bb0;
    }
    let orbit = name != null && "-ml-[18px]",
      pine = IntlProvider("min-w-0", orbit);
    let quest = () => {
      honey($a);
    };
    let ridge = glide && "rotate-90",
      storm = IntlProvider("mt-1 icon-2xs shrink-0 text-token-text-tertiary transition-transform", ridge);
    let tide = <AppIconYlt {...{
      "aria-hidden": true,
      className: storm
    }} />;
    let unity = name == null ? null : <Copper {...{
      name
    }} />;
    let vale = <span className="shrink-0 text-token-text-primary">
        {moss}
      </span>;
    let wave = glide ? null : <>
          <span className="shrink-0 text-token-text-tertiary">
            {willow}
          </span>
          <span className="shrink-0 text-token-text-primary">
            {north}
          </span>
        </>;
    let apex;
    apex = <button aria-expanded={glide} className="flex w-full min-w-0 cursor-interaction items-start gap-1 rounded-sm px-1 text-left hover:bg-token-foreground/5" type="button" onClick={quest}>
        {tide}
        {unity}
        {vale}
        {wave}
      </button>;
    iris = <div className={pine}>
        {apex}
        {glide ? <div className="ml-2.5 min-w-0 border-l border-token-border-light pl-5">
            {knoll.map(kite)}
            <div className="-ml-4 px-1 text-token-text-primary">
              {north}
            </div>
          </div> : null}
      </div>;
  }
  return jewel === Symbol.for("react.early_return_sentinel") ? iris : jewel;
}
function kite(event) {
  return <Alpha key={event.key} {...{
    name: event.key,
    value: event.value
  }} />;
}
function $a(elm) {
  return !elm;
}
function lemon(fern) {
  let {
      name
    } = fern,
    grove = river(name);
  return <span className="shrink-0 text-token-charts-blue">
      {grove}
    </span>;
}
function to(hill) {
  let {
      value
    } = hill,
    isle = IntlProvider("min-w-0 break-all", pearl(value));
  let juniper = nickel(value);
  return <span className={isle}>
      {juniper}
    </span>;
}
function no(lagoon) {
  return typeof lagoon == "object" && !!lagoon;
}
function marble(meadow) {
  return Array.isArray(meadow) ? meadow.map((item, index) => ({
    key: String(index),
    value: item
  })) : Object.entries(meadow).map(([nest, oak]) => ({
    key: nest,
    value: oak
  }));
}
function nickel(petal) {
  return typeof petal == "string" ? JSON.stringify(onyx(petal)) : petal === undefined ? "undefined" : typeof petal == "bigint" ? `${petal}n` : typeof petal == "function" ? `[Function ${petal.name || "anonymous"}]` : typeof petal == "symbol" ? petal.description == null ? "Symbol()" : `Symbol(${petal.description})` : petal == null ? "null" : typeof petal == "number" ? Number.isFinite(petal) ? `${petal}` : "null" : typeof petal == "boolean" ? petal ? "true" : "false" : "";
}
function onyx(quiet) {
  return quiet.length <= violet ? quiet : `${quiet.slice(0, violet)}…`;
}
function pearl(rain) {
  return typeof rain == "string" ? "text-token-charts-green" : typeof rain == "number" || typeof rain == "bigint" ? "text-token-charts-purple" : typeof rain == "boolean" ? "text-token-charts-orange" : "text-token-text-tertiary";
}
function quartz(seed) {
  return /^[a-zA-Z_$][\w$]*$/.test(seed) ? seed : JSON.stringify(seed);
}
function river(trail) {
  return `${quartz(trail)}:`;
}
var slate,
  timber,
  umbra,
  violet,
  willow,
  xenon = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    timber = commonJsInit(react(), 1);
    AppIconYlt();
    violet = 120;
    willow = "…";
  });
function yellow({
  conversation,
  conversationId
}) {
  let urn = new Blob([JSON.stringify(conversation, null, 2)], {
      type: _o
    }),
    vine = URL.createObjectURL(urn),
    wind = document.createElement("a");
  wind.href = vine;
  wind.download = `chatgpt-conversation-${zinc(conversationId)}.json`;
  wind.click();
  URL.revokeObjectURL(vine);
}
function zinc(yarrow) {
  return yarrow.replace(/[^a-zA-Z0-9._-]/g, "_") || "conversation";
}
var _o,
  amber = esmInit(() => {
    _o = "application/json;charset=utf-8";
  });
