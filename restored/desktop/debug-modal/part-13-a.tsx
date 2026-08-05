// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/17
/* split-lane-import-depth:1 */
// AST split 1/4

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import {
  appActionSidebarProjectRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureConversationPageEsm_A0_Init,
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_Mx_Init,
} from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import {
  CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
  PLAYGROUND_ONBOARDING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
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
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";

import { ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { codex3 } from "../../models/codex3";
import { esmInit } from "../../runtime/rolldown-runtime";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";

// Wave5d soft stubs.
const AppInitialAp: any = undefined;

export const AppInitialBb: any = undefined;

export const AppInitialF: any = undefined;

export const AppInitialHb: any = undefined;

const AppInitialJw: any = undefined;

export const AppInitialPp: any = undefined;

const AppInitialQf: any = undefined;

export const AppInitialXb: any = undefined;

export const CodexMobileSetupDialog: any = undefined;

const DeferredTC: any = undefined;

export const DeferredUiV2: any = undefined;

export const IntlProvider: any = undefined;

export const Lemon3: any = undefined;

export const codexMicroOnboardingStateIState: any = undefined;

const codexMicroOnboardingStateNState: any = undefined;

export const codexMicroOnboardingStateTState: any = undefined;

const deferredGitMp: any = undefined;

export const deferredUiRC: any = undefined;

export const deferredUiXTStub: any = undefined;

const ensureCodexMobileSetupDialogInit: any = undefined;

export const falcon: any = undefined;

const id: any = undefined;

export const kelp3: any = undefined;

export const newChatSuggestionSourceDebugStateLState: any = undefined;

const newChatSuggestionSourceDebugStateSState: any = undefined;

export const violet: any = undefined;

var orbit3,
  pine3,
  quest3 = esmInit(() => {
    orbit3 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureAppScopeInit();
    AppInitialJw();
    codexMicroOnboardingStateNState();
  });

var tide3,
  unity3,
  vale3 = esmInit(() => {
    tide3 = reactCompilerRuntime();
    ensureCodexMobileSetupDialogInit();
  });

var apex3,
  brook3,
  cliff3 = esmInit(() => {
    apex3 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureAppScopeInit();
    DeferredTC();
  });

var elm3 = esmInit(() => {
  deferredUiB();
  AppInitialQf();
});

export var juniper3,
  lagoon3,
  meadow3,
  nest3,
  oak3,
  petal3,
  quiet3 = esmInit(() => {
    juniper3 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    newChatSuggestionSourceDebugStateSState();
    ensureDropdownMenuInit();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    ensurePersonalizationCInit();
    ensureAppScopeInit();
    deferredGitMp();
    codex3();
    deferredUiB();
    AppInitialAp();
    elm3();
    meadow3 = [
      {
        label: "Auto",
        value: null,
      },
      {
        label: "Curated",
        value: "curated",
      },
      {
        label: "Generated",
        value: "generated",
      },
    ];
    nest3 = [
      {
        label: "Auto",
        value: "auto",
      },
      {
        label: "Disabled",
        value: "disabled",
      },
      {
        label: "Enabled",
        value: "enabled",
      },
    ];
    oak3 = [
      {
        label: "Skipped",
        value: false,
      },
      {
        label: "Completed",
        value: true,
      },
    ];
    petal3 = [
      {
        label: "Skipped",
        value: null,
      },
      {
        label: "Leave a note on my Desktop",
        value: "desktop_note",
      },
      {
        label: "Turn this spreadsheet into a chart",
        value: "csv_chart",
      },
      {
        label: "Schedule a focus block this week",
        value: "hold_next_free_hour",
      },
      {
        label: "Send a message to myself",
        value: "send_message_to_self",
      },
    ];
  });
