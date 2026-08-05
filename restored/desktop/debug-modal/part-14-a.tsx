// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14/17
/* split-lane-import-depth:1 */
// AST split 1/5

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import {
  clampZoomPercent,
  decayZoomPercent,
} from "../../artifact/clamp-zoom-percent";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { chatgpt2 } from "../../browser/chatgpt2";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import {
  ensureUseDebugPanelInit,
  ensureUseDebugPanelParsersInit,
  useDebugPanelEditedFilePaths,
  useDebugPanelEntries,
  useDebugPanelReferencedFilePaths,
} from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  clampFloatingWindowRect,
  getCenteredFloatingWindowRect,
  initFloatingWindowPointerDragConstants,
  resizeFloatingWindowRect,
  useFloatingWindowPointerDrag,
} from "../../hooks/use-floating-window-pointer-drag";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredVM } from "../../ui/deferred-vm";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";

import { ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Mx_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { ensureAuthProviderInit } from "../../hooks/use-auth";
import { AppIconTk } from "../../icons/app-icon-tk";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";

// Wave5d soft stubs.
const AppInitialBC: any = undefined;

export const AppInitialBY: any = undefined;

export const AppInitialBq: any = undefined;

export const AppInitialCX: any = undefined;

const AppInitialDh: any = undefined;

export const AppInitialEk: any = undefined;

const AppInitialHY: any = undefined;

export const AppInitialMq: any = undefined;

export const AppInitialPq: any = undefined;

export const AppInitialQ: any = undefined;

export const AppInitialSf: any = undefined;

export const AppInitialVr: any = undefined;

export const AppInitialWX: any = undefined;

export const AppInitialXO: any = undefined;

export const AppInitialXX: any = undefined;

export const AppInitialXb: any = undefined;

const AppInitialXf: any = undefined;

export const AppInitialYC: any = undefined;

export const AppInitialYq: any = undefined;

export const Dusk3: any = undefined;

export const IntlProvider: any = undefined;

export const NativeContextMenuSurface: any = undefined;

export const Onyx4: any = undefined;

const RealtimeVoiceHostIdStub: any = undefined;

export const Ridge3: any = undefined;

const avatarOverlayDebugStateIState: any = undefined;

export const avatarOverlayDebugStateNState: any = undefined;

export const avatarOverlayDebugStateRState: any = undefined;

export const avatarOverlayDebugStateTState: any = undefined;

export const chatProcessRegister: any = undefined;

const cliff3: any = undefined;

export const codexAppHomeBeaconDebugStateNState: any = undefined;

const codexAppHomeBeaconDebugStateRState: any = undefined;

export const codexMobileSetupDialogUtils: any = undefined;

export const deferredPluginsVY3: any = undefined;

const elm3: any = undefined;

const ensureCodexMobileSetupDialogDepsInit: any = undefined;

const ensureSelectWorkspaceCqInit: any = undefined;

const falcon: any = undefined;

export const newChatSuggestionSourceDebugStateNState: any = undefined;

const newChatSuggestionSourceDebugStateTState: any = undefined;

export const quartz4: any = undefined;

const quest3: any = undefined;

const quiet3: any = undefined;

const setPrimaryRuntimeInstallRelease: any = undefined;

export const slate4: any = undefined;

const vale3: any = undefined;

const violet: any = undefined;

export var trail3,
  urn3,
  vine3,
  wind3 = esmInit(() => {
    trail3 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    urn3 = commonJsInit(react(), 1);
    ensureComposerEsm_P5_Init();
    newChatSuggestionSourceDebugStateTState();
    AppInitialHY();
    ensureAuthProviderInit();
    AppIconTk();
    identity();
    ensureConversationPageEsm_Mx_Init();
    RealtimeVoiceHostIdStub();
    codexAppHomeBeaconDebugStateRState();
    quest3();
    vale3();
    ensureCodexMobileSetupDialogDepsInit();
    setPrimaryRuntimeInstallRelease();
    collectUniqueMappedPresenceEntries();
    ensureComposerEsm_K1_Init();
    ensureSelectWorkspaceCqInit();
    GeneratedImageTabs();
    AppInitialXf();
    AppInitialDh();
    cliff3();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    deferredUiB();
    ensureSkillsPageHelpersInit();
    scrollAppActionTargetTo();
    falcon();
    elm3();
    quiet3();
  });

var yarrow3,
  azure3,
  birch3 = esmInit(() => {
    yarrow3 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    avatarOverlayDebugStateIState();
    AppInitialBC();
    ensureAppScopeInit();
    violet();
    falcon();
  });

export var alpha4,
  bravo4,
  copper4,
  delta4 = esmInit(() => {
    alpha4 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    bravo4 = commonJsInit(react(), 1);
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_K1_Init();
    getRecentConversationsQueryKey();
    posixPathBasename();
    violet();
    falcon();
  });
