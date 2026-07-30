// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js

// Wave5d soft JSX companions.
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Delta(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Echo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 1/17
/* split-lane-import-depth:1 */

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { clampZoomPercent, decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID, PLAYGROUND_ONBOARDING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ensureUseDebugPanelInit, ensureUseDebugPanelParsersInit, useDebugPanelEditedFilePaths, useDebugPanelEntries, useDebugPanelReferencedFilePaths } from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import { clampFloatingWindowRect, getCenteredFloatingWindowRect, initFloatingWindowPointerDragConstants, resizeFloatingWindowRect, useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { deferredVM } from "../../ui/deferred-vm";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { buildThreadVirtualizerLayout, initThreadVirtualizer, visibleRangeFromDistance } from "../../utils/thread-virtualizer";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsB4Init, ensureKeyboardShortcutsHMInit, ensurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";

const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-a22.tsx) */
const DeferredUiA22: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-a22.tsx) */
const AppInitialA2: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePullRequestMediaApInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialAp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useSelectedAvatar@desktop/use-selected-avatar.ts) */
const AppInitialAr: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-b22.tsx) */
const DeferredUiB22: any = undefined;
/** Wave GA unresolved companion (jsx-collision:filterRowsByActiveLimitName@usage/filter-rows-by-active-limit-name.ts) */
const AppInitialBb: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolveComposerMode@composer/resolve-composer-mode.ts) */
const AppInitialBq: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/user-message5.tsx) */
const AppInitialBt: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement2.tsx) */
const AppInitialBY: any = undefined;
/** Wave GA unresolved companion (missing-export:voice/deferred-voice-c4.ts) */
const deferredVoiceC4: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-cx.tsx) */
const AppInitialCX: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-d2.tsx) */
const DeferredUiD2: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-d9.ts) */
const deferredUiD9: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureSelectWorkspaceDhInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialDh: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-dj.tsx) */
const AppInitialDj: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureAppIconTkInit@icons/app-icon-tk.tsx) */
const AppInitialEk: any = undefined;
/** Wave GA unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:activityStatusMessages@visualization/activity-status-messages.ts) */
const AppInitialG2: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/primary-runtime.ts) */
const primaryRuntime: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredSettingsH7@settings/deferred-settings-h7.ts) */
const AppInitialH7: any = undefined;
/** Wave GA unresolved companion (jsx-collision:collectRateLimitUsageSnapshots@account/collect-rate-limit-usage-snapshots.ts) */
const AppInitialHb: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-hi2.tsx) */
const DeferredUiHI2: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/user-message3.tsx) */
const AppInitialHt: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const AppInitialHY: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-i23-2.tsx) */
const DeferredUiI23: any = undefined;
/** Wave GA unresolved companion (jsx-collision:setFieldIfJsonChanged@utils/set-field-if-json-changed.ts) */
const AppInitialIr: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureCodexMicroDetectionSignalsInit@onboarding/codex-micro-detection-signals.ts) */
const AppInitialJw: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-k22-2.tsx) */
const AppInitialK2: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceCommandMessages@desktop/realtime-voice-command-messages.ts) */
const AppInitialK7: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/fork-conversation-with-git-origins.ts) */
const forkConversationWithGitOrigins: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/set-primary-runtime-install-release.ts) */
const setPrimaryRuntimeInstallRelease: any = undefined;
/** Wave GA unresolved companion (missing-export:git/deferred-git-mp.ts) */
const deferredGitMp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:buildConversationComposerControllerArgs@approvals/build-conversation-composer-controller-args.ts) */
const AppInitialMq: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-o22.tsx) */
const DeferredUiO22: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ok.tsx) */
const deferredUiOk: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiPk@ui/deferred-ui-pk.tsx) */
const AppInitialPk: any = undefined;
/** Wave GA unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredGitPp@git/deferred-git-pp.ts) */
const AppInitialPp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolveGuardianApprovalWorkspaceWriteMode@approvals/resolve-guardian-approval-workspace-write-mode.ts) */
const AppInitialPq: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isStartingProcessExpired@account/is-starting-process-expired.ts) */
const AppInitialQ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:onboardingChecklist@account/onboarding-checklist.ts) */
const AppInitialQf: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_Qtt_Init@boundaries/composer-esm-inits.ts) */
const AppInitialQtt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-rc.ts) */
const deferredUiRC: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-u0000-u001-fu007-f2.ts) */
const applyU0000U001FU007F2: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceConfigOverride@voice/realtime-voice-config-override-2.ts) */
const AppInitialS4: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resetStoreAtomValueSf@utils/set-store-atom-value.ts) */
const AppInitialSf: any = undefined;
/** Wave GA unresolved companion (missing-export:composer/deferred-tc.tsx) */
const DeferredTC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiU7@ui/deferred-ui-u7.ts) */
const AppInitialU7: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui.tsx) */
const DeferredUI: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-v43.tsx) */
const deferredUiV43: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/heartbeat-thread-permissions-by-id2.tsx) */
const AppInitialVr: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/deferred-plugins-vy3.tsx) */
const deferredPluginsVY3: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-w22.tsx) */
const DeferredUiW22: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiW7@ui/deferred-ui-w7.ts) */
const AppInitialW7: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiWX@ui/deferred-ui-wx.ts) */
const AppInitialWX: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-x232.tsx) */
const DeferredUiX232: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localProjectRootsAtom@settings/hooks-query-atoms.ts) */
const AppInitialX4: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useSubscriptionUpdatePreviewQuery@account/use-subscription-update-preview-query.ts) */
const AppInitialXb: any = undefined;
/** Wave GA unresolved companion (missing-export:hooks/use-statsig-gate-and-composer-ready.ts) */
const useStatsigGateAndComposerReady: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isUnavailableKnownConnector@plugins/is-unavailable-known-connector.ts) */
const AppInitialXf: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredNavigationXO@navigation/deferred-navigation-xo.ts) */
const AppInitialXO: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXTStub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:recentConversationsMetaQueryKey@conversation/recent-conversations-meta-query-key.ts) */
const AppInitialXX: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/deferred-hosts-yc.ts) */
const deferredHostsYC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:getChatGptAccountInfoQueryConfig@cloud/account-info-query.ts) */
const AppInitialYq: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshotStub: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isBusinessPlanExcludingEducation@account/plan-type-helpers.ts) */
const AppInitialZ7: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/new-chat-suggestion-source-debug-state.ts) */
const newChatSuggestionSourceDebugStateLState: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/new-chat-suggestion-source-debug-state.ts) */
const newChatSuggestionSourceDebugStateNState: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/new-chat-suggestion-source-debug-state.ts) */
const newChatSuggestionSourceDebugStateSState: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/new-chat-suggestion-source-debug-state.ts) */
const newChatSuggestionSourceDebugStateTState: any = undefined;
/** Wave GA unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateIState: any = undefined;
/** Wave GA unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateNState: any = undefined;
/** Wave GA unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateRState: any = undefined;
/** Wave GA unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateTState: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-floating-window-pointer-drag.ts) */
const useFloatingWindowPointerDragT: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateNState: any = undefined;
/** Wave GA unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateRState: any = undefined;
/** Wave GA unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateIState: any = undefined;
/** Wave GA unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateNState: any = undefined;
/** Wave GA unresolved companion (sib-missing:onboarding/codex-micro-onboarding-state.ts) */
const codexMicroOnboardingStateTState: any = undefined;
/** Wave GA unresolved companion (sib-missing:devices/codex-mobile-setup-dialog) */
const ensureCodexMobileSetupDialogDepsInit: any = undefined;
/** Wave GA unresolved companion (sib-missing:devices/codex-mobile-setup-dialog) */
const ensureCodexMobileSetupDialogInit: any = undefined;
/** Wave GA unresolved companion (sib-missing:devices/codex-mobile-setup-dialog) */
const CodexMobileSetupDialog: any = undefined;
/** Wave GA unresolved companion (sib-missing:devices/codex-mobile-setup-dialog) */
const codexMobileSetupDialogUtils: any = undefined;
function Alpha(oak4) {
  let {
      title,
      children,
      storageKey,
      variant = "selection",
      onToggle,
      className,
      actions,
      unmountChildrenWhenClosed = false
    } = oak4,
    petal4 = () => {
      if (!storageKey) return false;
      try {
        return window.localStorage.getItem(storageKey) === "open";
      } catch {
        return false;
      }
    };
  let [quiet4, rain4] = delta.useState(petal4),
    seed4 = variant === "selection" ? "bg-token-charts-blue/10 text-token-charts-blue" : "bg-token-foreground/5 text-token-foreground",
    trail4 = IntlProvider("flex h-7 w-full items-center justify-between gap-2", seed4, className);
  let urn4 = variant === "selection" ? "hover:bg-token-charts-blue/15" : "hover:bg-token-foreground/10",
    vine4 = IntlProvider("flex h-full min-w-0 flex-1 cursor-interaction items-center gap-2 px-3 text-left font-medium", urn4);
  let wind4 = () => {
    let harbor5 = !quiet4;
    if (rain4(harbor5), storageKey) try {
      window.localStorage.setItem(storageKey, harbor5 ? "open" : "closed");
    } catch {}
    onToggle?.(harbor5);
  };
  let yarrow4 = `rotate(${quiet4 ? 0 : -90}deg)`,
    azure4 = <AppIconSft {...{
      className: "icon-2xs transition-transform duration-basic",
      style: {
        transform: yarrow4
      }
    }} />;
  let birch4 = <button type="button" className={vine4} aria-expanded={quiet4} onClick={wind4}>{azure4}{title}</button>;
  let canyon4 = actions ? <span className="flex items-center gap-1" onClick={Bravo}>{actions}</span> : null;
  let dew4 = variant === "selection" ? <span className="icon-2xs ml-1 block h-2 w-2 rounded-full bg-current" /> : null;
  let alpha5 = <span className="flex items-center gap-1 pr-3 text-current">{canyon4}{dew4}</span>;
  let bravo5 = <div className={trail4}>{birch4}{alpha5}</div>;
  let copper5 = quiet4 ? "visible" : "hidden",
    delta5 = quiet4 ? "block" : "none",
    echo5 = {
      contentVisibility: copper5,
      display: delta5
    };
  let falcon5 = unmountChildrenWhenClosed && !quiet4 ? null : children,
    gamma5 = <div className="px-3" style={echo5} data-open={quiet4}>{falcon5}</div>;
  return <div>{bravo5}{gamma5}</div>;
}
function Bravo(event) {
  event.stopPropagation();
}
var copper,
  delta,
  echo,
  falcon = esmInit(() => {
    copper = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    delta = commonJsInit(react(), 1);
    ensureAppIconSftInit();
  });
function Gamma() {
  return JSON.stringify({
    action: "next",
    client_prepare_state: "sent",
    conversation_id: null,
    hide_from_history: true,
    messages: [{
      author: {
        role: "user"
      },
      content: {
        content_type: "text",
        parts: ["Reply with exactly: codex conversation client smoke ok"]
      },
      id: crypto.randomUUID(),
      metadata: {}
    }],
    model: "auto",
    parent_message_id: crypto.randomUUID(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezone_offset_min: new Date().getTimezoneOffset()
  }, null, 2);
}
function Harbor() {
  let indigo5 = CodexPluginActionType(appScopeAtom).get(writingBlocksControllerAtom),
    [jade5, kite5] = onyx.useState(""),
    [lemon5, marble5] = onyx.useState(""),
    [nickel5, onyx5] = onyx.useState(() => Gamma()),
    [pearl5, quartz5] = onyx.useState("Not run yet"),
    [river5, slate5] = onyx.useState(null),
    [timber5, umbra5] = onyx.useState(false),
    violet5 = async (xenon5, yellow5) => {
      if (!timber5) {
        umbra5(true);
        try {
          let zinc5 = await xenon5();
          quartz5(`${yellow5}\n\n${Marble(zinc5)}`);
        } catch (amber5) {
          let basalt5 = amber5 instanceof Error ? amber5.message : String(amber5);
          quartz5(`${yellow5} failed\n\n${basalt5}`);
          appActionSidebarProjectRefSchema.error("ChatGPT conversation debug action failed", {
            safe: {
              actionName: yellow5
            },
            sensitive: {
              error: amber5
            }
          });
        } finally {
          umbra5(false);
        }
      }
    },
    willow5 = async () => {
      if (!(river5 != null || timber5)) {
        umbra5(true);
        try {
          let cedar5 = Kite(nickel5),
            daisy5 = [],
            ember5 = [];
          quartz5("Streaming conversation...");
          let flint5 = await indigo5.startCompletionStream({
            request: cedar5,
            onComplete: () => {
              slate5(null);
              quartz5(`Stream complete\n\n${Marble({
                rawEvents: daisy5,
                updates: ember5
              })}`);
            },
            onError: garnet5 => {
              slate5(null);
              quartz5(`Stream failed\n\n${garnet5.error}`);
            },
            onEvent: hazel5 => {
              daisy5.push(Lemon(hazel5));
              quartz5(`Streaming conversation...\n\n${Marble({
                rawEvents: daisy5,
                updates: ember5
              })}`);
            },
            onUpdate: ivory5 => {
              ember5.push(ivory5);
              quartz5(`Streaming conversation...\n\n${Marble({
                rawEvents: daisy5,
                updates: ember5
              })}`);
            }
          });
          slate5(flint5.streamRequestId);
        } catch (jasper5) {
          let kelp5 = jasper5 instanceof Error ? jasper5.message : String(jasper5);
          quartz5(`Stream setup failed\n\n${kelp5}`);
        } finally {
          umbra5(false);
        }
      }
    };
  return <Copper {...{
    storageKey: "debug-chatgpt-conversation-section",
    title: "ChatGPT Conversations",
    variant: "global",
    actions: <div className="flex items-center gap-1">{<Delta {...{
        disabled: timber5,
        label: "List",
        onClick: () => {
          violet5(() => indigo5.list({
            expand: false,
            limit: 10
          }), "List conversations");
        }
      }} />}{<Delta {...{
        disabled: timber5 || lemon5.trim().length === 0,
        label: "Search",
        onClick: () => {
          violet5(() => indigo5.search({
            query: lemon5.trim()
          }), "Search conversations");
        }
      }} />}</div>,
    children: <div className="flex flex-col gap-3 py-3"><div className="grid gap-2 md:grid-cols-2">{<Echo {...{
          label: "Search query",
          value: lemon5,
          onChange: marble5
        }} />}{<Echo {...{
          label: "Conversation ID",
          value: jade5,
          onChange: kite5
        }} />}</div><div className="flex flex-wrap items-center gap-2">{<Delta {...{
          disabled: timber5 || jade5.trim().length === 0,
          label: "Load conversation",
          onClick: () => {
            violet5(() => indigo5.get(jade5.trim()), "Load conversation");
          }
        }} />}{<Delta {...{
          disabled: timber5 || river5 != null,
          label: "Stream submit",
          onClick: () => {
            willow5();
          }
        }} />}{<Delta {...{
          disabled: river5 == null,
          label: "Cancel stream",
          onClick: () => {
            river5 != null && (indigo5.cancelStream(river5), slate5(null), quartz5("Stream cancel requested"));
          }
        }} />}</div><label className="flex flex-col gap-1 text-xs text-token-description-foreground">{"Request JSON"}<textarea className="bg-token-background-primary min-h-56 resize-y rounded border border-token-border p-2 font-mono text-xs text-token-foreground outline-none" spellCheck={false} value={nickel5} onChange={event => {
          onyx5(event.target.value);
        }} /></label><div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2 font-mono text-xs whitespace-pre-wrap text-token-foreground">{pearl5}</div></div>
  }} />;
}
function Indigo(lotus5) {
  let {
    disabled = false,
    label,
    onClick
  } = lotus5;
  return <button type="button" className="inline-flex cursor-interaction items-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50" disabled={disabled} onClick={onClick}>{label}</button>;
}
function Jade(mint5) {
  let {
      label,
      onChange,
      value
    } = mint5,
    nova5 = event => {
      onChange(event.target.value);
    };
  let olive5 = <input className="bg-token-background-primary rounded border border-token-border px-2 py-1.5 text-xs text-token-foreground outline-none" value={value} onChange={nova5} />;
  return <label className="flex flex-col gap-1 text-xs text-token-description-foreground">{label}{olive5}</label>;
}
function Kite(prism5) {
  let quill5 = JSON.parse(prism5);
  if (typeof quill5 != "object" || !quill5) throw Error("Conversation request JSON must be an object.");
  return quill5;
}
function Lemon(reef5) {
  return {
    data: reef5.data,
    event: reef5.event
  };
}
function Marble(sage5) {
  return JSON.stringify(sage5, null, 2);
}
var nickel,
  onyx,
  pearl,
  quartz = esmInit(() => {
    nickel = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    onyx = commonJsInit(react(), 1);
    falcon();
    ensureAppScopeInit();
    posixPathBasename();
    ensureComposerEsm_TI_Init();
  });
function River(topaz5) {
  let {
      label,
      value
    } = topaz5,
    ultra5 = {
      "--debug-label-width": "170px"
    };
  let vapor5 = {
    width: "var(--debug-label-width)"
  };
  let wheat5 = <span className="min-w-0 shrink-0 text-left whitespace-nowrap text-token-description-foreground" style={vapor5}>{label}</span>;
  let yarn5 = <span className="min-w-0 flex-1 pr-3 text-left break-words">{value}</span>;
  let zephyr5 = <CopyButton {...{
    iconOnly: true,
    className: "absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover/line-item:opacity-100",
    iconClassName: "icon-2xs",
    onCopy: () => {
      navigator?.clipboard?.writeText && navigator.clipboard.writeText(value).catch(Slate);
    }
  }} />;
  return <div className="group/line-item relative flex items-start justify-between border-t-[0.5px] border-token-border py-1.5 tabular-nums first:border-t-0" style={ultra5}>{wheat5}{yarn5}{zephyr5}</div>;
}
function Slate() {}
var timber,
  umbra,
  violet = esmInit(() => {
    timber = reactCompilerRuntime();
    decayZoomPercent();
  });
