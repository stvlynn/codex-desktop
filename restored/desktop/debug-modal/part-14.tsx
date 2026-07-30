// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14/17
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


// Wave5d soft JSX companions.
function Basalt2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Cedar2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Daisy2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lotus2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialBY: any = undefined;
const AppInitialBq: any = undefined;
const AppInitialCX: any = undefined;
const AppInitialDh: any = undefined;
const AppInitialEk: any = undefined;
const AppInitialHY: any = undefined;
const AppInitialMq: any = undefined;
const AppInitialPq: any = undefined;
const AppInitialQ: any = undefined;
const AppInitialSf: any = undefined;
const AppInitialVr: any = undefined;
const AppInitialWX: any = undefined;
const AppInitialXO: any = undefined;
const AppInitialXX: any = undefined;
const AppInitialXb: any = undefined;
const AppInitialXf: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialYq: any = undefined;
const Dusk3: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const Onyx4: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const Ridge3: any = undefined;
const avatarOverlayDebugStateIState: any = undefined;
const avatarOverlayDebugStateNState: any = undefined;
const avatarOverlayDebugStateRState: any = undefined;
const avatarOverlayDebugStateTState: any = undefined;
const chatProcessRegister: any = undefined;
const cliff3: any = undefined;
const codexAppHomeBeaconDebugStateNState: any = undefined;
const codexAppHomeBeaconDebugStateRState: any = undefined;
const codexMobileSetupDialogUtils: any = undefined;
const deferredPluginsVY3: any = undefined;
const elm3: any = undefined;
const ensureCodexMobileSetupDialogDepsInit: any = undefined;
const ensureSelectWorkspaceCqInit: any = undefined;
const falcon: any = undefined;
const newChatSuggestionSourceDebugStateNState: any = undefined;
const newChatSuggestionSourceDebugStateTState: any = undefined;
const quartz4: any = undefined;
const quest3: any = undefined;
const quiet3: any = undefined;
const setPrimaryRuntimeInstallRelease: any = undefined;
const slate4: any = undefined;
const vale3: any = undefined;
const violet: any = undefined;

function $d() {
  let urn23 = CodexPluginActionType(appScopeAtom),
    vine23 = useAuth(),
    wind23 = NativeContextMenuSurface("3207467860"),
    yarrow23 = useNavigate(),
    {
      client
    } = ensureComposerEsm_Ilt_Init(),
    [azure23, birch23] = useAtomPair(AppInitialPq),
    [canyon23] = useAtomPair(AppInitialMq),
    [dew23] = useAtomPair(AppInitialQ),
    [alpha24] = useAtomPair(ensurePromptHistoryStorageInit),
    bravo24 = CodexPluginActionResult(CodexConversationalOnboardingExecutionAction),
    copper24 = CodexPluginActionResult(AppInitialXb),
    delta24 = vine23.accountId != null && isUsageRateLimitBlocked(bravo24, vine23.accountId, copper24) != null;
  let echo24 = delta24,
    falcon24 = CodexPluginActionResult(newChatSuggestionSourceDebugStateNState),
    gamma24 = CodexPluginActionResult(CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID),
    harbor24 = CodexPluginActionResult(ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY),
    indigo24 = CodexPluginActionResult(codexAppHomeBeaconDebugStateNState),
    [, jade24] = useAtomPair(AppInitialYq),
    [kite24, lemon24] = useAtomPair(AppInitialBq),
    [marble24, nickel24] = useAtomPair(codexMobileSetupDialogUtils),
    [onyx24, pearl24] = useAtomPair(AppInitialXO),
    [quartz24, river24] = useAtomPair(AppInitialBY),
    [, slate24] = useAtomPair(deferredPluginsVY3),
    timber24 = CodexPluginActionResult(AppInitialEk),
    umbra24 = CodexPluginActionResult(getBuildFlavor),
    violet24 = CodexPluginActionResult(deferredUiYn),
    [willow24, xenon24] = urn3.useState(false),
    yellow24 = willow24 && true,
    zinc24 = {
      enabled: yellow24
    };
  let {
      data,
      isError,
      isLoading
    } = firstRepoMapEntry(zinc24),
    amber24 = {
      hostId: LOCAL_HOST_ID
    };
  let basalt24 = willow24 && true,
    cedar24 = {
      params: amber24,
      queryConfig: {
        enabled: basalt24
      }
    };
  let daisy24 = SIDEBAR_HIT_TEST_SELECTOR("workspace-root-options", cedar24).data?.roots.length ?? 0,
    ember24 = [{
      value: "auto",
      label: "Auto"
    }, {
      value: "login",
      label: "Login"
    }, {
      value: "welcome",
      label: "Welcome"
    }, {
      value: "workspace",
      label: "Project"
    }, {
      value: "app",
      label: "App"
    }];
  let flint24 = ember24,
    garnet24 = [{
      value: "auto",
      label: "Auto"
    }, {
      value: "control",
      label: "Control"
    }, {
      value: "t2_direct_folder_picker",
      label: "T2 Picker"
    }, {
      value: "t3_auto_playground",
      label: "T3 Playground"
    }, {
      value: "t4_modal_copy_cta_playground",
      label: "T4 Copy+CTA"
    }, {
      value: T5_ONBOARDING_V2_ID,
      label: "T5 Onboarding V2"
    }];
  let _e = garnet24,
    hazel24 = [{
      value: "auto",
      label: "Auto"
    }, {
      value: "initial",
      label: "Initial"
    }, {
      value: "allow-host",
      label: "Allow host"
    }, {
      value: "waiting",
      label: "Waiting"
    }, {
      value: "mfa-required",
      label: "MFA required"
    }, {
      value: "connected",
      label: "Connected"
    }];
  let ivory24 = hazel24,
    be = [{
      value: null,
      label: "Auto"
    }, {
      value: "google",
      label: "Google"
    }, {
      value: "microsoft",
      label: "Microsoft"
    }];
  let jasper24 = be,
    kelp24 = [{
      label: "Initial",
      setupInProgress: false,
      showStartSetupError: false,
      step: "initial"
    }, {
      label: "Initial starting",
      setupInProgress: true,
      showStartSetupError: false,
      step: "initial"
    }, {
      label: "Initial error",
      setupInProgress: false,
      showStartSetupError: true,
      step: "initial"
    }, {
      label: "Allow host",
      setupInProgress: false,
      showStartSetupError: false,
      step: "allow-host"
    }, {
      label: "Allow host starting",
      setupInProgress: true,
      showStartSetupError: false,
      step: "allow-host"
    }, {
      label: "Waiting",
      setupInProgress: false,
      showStartSetupError: false,
      step: "waiting"
    }, {
      label: "MFA required",
      setupInProgress: false,
      showStartSetupError: false,
      step: "mfa-required"
    }, {
      label: "Connected",
      setupInProgress: false,
      showStartSetupError: false,
      step: "connected"
    }];
  let lotus24 = kelp24,
    mint24 = kite24?.arm ?? "auto",
    nova24 = alpha24.roles.length === 0 ? "none" : alpha24.roles.join(", ");
  let olive24 = nova24,
    prism24,
    quill24;
  vine23.authMethod === "chatgpt" ? data == null ? isLoading ? (prism24 = "loading…", quill24 = "loading…") : isError ? (prism24 = "error", quill24 = "error") : (prism24 = "unavailable", quill24 = "unavailable") : (prism24 = data.desktop_onboarding_completed_at == null ? "no" : "yes", quill24 = data.role ?? "none") : (prism24 = "unavailable (ChatGPT auth required)", quill24 = "unavailable (ChatGPT auth required)");
  let reef24 = dew23 ? "yes" : prism24,
    sage24 = willow24 ? <div className="flex flex-col gap-3 pb-4"><div className="text-xs text-token-description-foreground">{`Auth: ${vine23.authMethod ?? "none"} · Projects: ${daisy24}`}</div><div className="text-xs text-token-description-foreground">{`Codex runtime: ${violet24 == null ? "idle" : Rain3(violet24)}`}</div><div className="flex flex-wrap gap-2">{flint24.map(item => <button key={item.value} type="button" className={IntlProvider("rounded border px-3 py-1 text-xs", item.value === azure23 ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
          if (item.value === "welcome") {
            ensureCommandQueueActiveHelpersInit(LOCAL_HOST_ID);
            AppInitialSf(urn23);
            Dusk3(urn23);
            birch23(item.value);
            yarrow23("/", {
              replace: true
            });
            return;
          }
          item.value === "workspace" && jade24(false);
          birch23(item.value);
        }}>{item.label}</button>)}</div><div className="flex items-start gap-2 text-xs"><div className="flex flex-col text-token-description-foreground"><div>{`Onboarding welcome pending: ${canyon23 ? "pending" : "off"}`}</div><div>{"Completed: "}{reef24}</div><div>{`V2 checklist enabled: ${echo24 ? "yes" : "no"}`}</div><div>{`Local roles: ${olive24}`}</div><div>{"Backend role: "}{quill24}</div></div>{null}</div>{<Basalt2 {...{
        source: falcon24,
        onSourceChange: topaz24 => {
          urn23.set(newChatSuggestionSourceDebugStateNState, topaz24);
        },
        roles: alpha24.roles
      }} />}<div className="flex flex-wrap items-center gap-2"><span className="text-xs text-token-description-foreground">{"MX lookup:"}</span><div aria-label="MX lookup" className="flex items-center gap-2" role="group">{jasper24.map(item => <button key={item.label} type="button" aria-pressed={gamma24 === item.value} className={IntlProvider("cursor-interaction rounded border px-3 py-1 text-xs", gamma24 === item.value ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
            item.value == null && gamma24 != null && urn23.queryClient.removeQueries({
              queryKey: buildVscodeQueryKey("email-domain-mail-provider")
            });
            urn23.set(CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID, item.value);
          }}>{item.label}</button>)}<button type="button" aria-pressed={harbor24} className={IntlProvider("cursor-interaction rounded border px-3 py-1 text-xs", harbor24 ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
            urn23.set(ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY, !harbor24);
          }}>{"Hide Google tiles"}</button><button type="button" aria-pressed={indigo24} className={IntlProvider("cursor-interaction rounded border px-3 py-1 text-xs", indigo24 ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
            urn23.set(codexAppHomeBeaconDebugStateNState, !indigo24);
          }}>{"Show Beacon banner"}</button></div></div>{<ElectronOnly {...{
        electron: true,
        children: [wind23 ? <Cedar2 {...{}} /> : null, <Daisy2 {...{}} />]
      }} />}<div className="flex flex-col gap-2"><div className="text-xs text-token-description-foreground">{`Workspace onboarding experiment: ${mint24}`}</div><div className="flex flex-wrap gap-2">{_e.map(item => <button key={item.value} type="button" className={IntlProvider("rounded border px-3 py-1 text-xs", item.value === mint24 ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
            if (item.value === "auto") {
              lemon24(null);
              return;
            }
            lemon24({
              arm: item.value,
              assignedAtMs: Date.now(),
              experimentName: PLAYGROUND_ONBOARDING_FEATURE_GATE_ID
            });
          }}>{item.label}</button>)}</div></div><div className="flex items-center gap-2 text-xs"><button type="button" className="rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
          client.updateUserAsync(client.getContext().user);
        }}>{"Refetch skill config"}</button></div><div className="flex items-center gap-2 text-xs"><div className="text-token-description-foreground">{`Work plugins announcement: ${quartz24 ? "seen" : "unseen"}`}</div><button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
          river24(false);
          slate24(false);
          client.updateUserAsync(client.getContext().user);
        }}>{"Reset announcement"}</button></div><div className="flex flex-col gap-2"><div className="text-xs text-token-description-foreground">{`Remote setup page: ${marble24}`}</div><div className="flex flex-wrap gap-2">{ivory24.map(item => <button key={item.value} type="button" className={IntlProvider("rounded border px-3 py-1 text-xs", item.value === marble24 ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
            nickel24(item.value);
            yarrow23("/codex-mobile");
          }}>{item.label}</button>)}</div></div><div className="flex flex-col gap-2"><div className="text-xs text-token-description-foreground">{"Remote"}{" setup dialog"}</div><div className="flex flex-wrap gap-2">{lotus24.map(item => <button key={item.label} type="button" className="rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
            chatProcessRegister(urn23, Ridge3, {
              setupInProgress: item.setupInProgress,
              showStartSetupError: item.showStartSetupError,
              step: item.step
            });
          }}>{item.label}</button>)}</div></div><div className="flex items-center gap-2 text-xs"><div className="text-token-description-foreground">{`Quick Chat NUX: ${umbra24 ? "seen" : "unseen"}`}</div><button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
          urn23.set(getBuildFlavor, false);
        }}>{"Reset NUX"}</button></div><div className="flex items-center gap-2 text-xs"><div className="text-token-description-foreground">{`Browser profile import NUX: ${timber24 ? "seen" : "unseen"}`}</div><button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
          urn23.set(AppInitialEk, false);
        }}>{"Reset NUX"}</button></div><div className="flex items-center gap-2 text-xs"><div className="text-token-description-foreground">{`Browser comment mode coachmark: ${onyx24 ? "seen" : "unseen"}`}</div><button type="button" className="rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
          pearl24(false);
        }}>{"Reset coachmark"}</button></div></div> : null;
  return <Copper {...{
    storageKey: "debug-onboarding",
    title: "Onboarding",
    onToggle: xenon24,
    variant: "global",
    children: sage24
  }} />;
}
function Rain3({
  downloadedBytes,
  errorMessage,
  phase,
  totalBytes
}) {
  return [phase, downloadedBytes == null ? null : totalBytes == null ? `${Seed3(downloadedBytes)} downloaded` : `${Seed3(downloadedBytes)} / ${Seed3(totalBytes)}`, errorMessage].filter(Boolean).join(" · ");
}
function Seed3(ultra24) {
  return `${(ultra24 / 1024 / 1024).toFixed(1)}MB`;
}
var trail3,
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
function of(vapor24) {
  let {
      nativePetUiEnabled
    } = vapor24,
    wheat24 = CodexPluginActionType(appScopeAtom),
    yarn24 = CodexPluginActionResult(avatarOverlayDebugStateTState),
    zephyr24 = CodexPluginActionResult(avatarOverlayDebugStateNState),
    acorn24 = CodexPluginActionResult(avatarOverlayDebugStateRState),
    bloom24 = nativePetUiEnabled ? null : <Falcon {...{
      label: "Resize button",
      value: acorn24 ? "Hidden" : "Visible"
    }} />;
  let coral24 = yarn24 ? "Visible" : "Hidden",
    drift24 = <Falcon {...{
      label: "Window border",
      value: coral24
    }} />;
  let eagle24 = nativePetUiEnabled ? <Falcon {...{
    label: "Backing material",
    value: zephyr24 ? "CSS (forced)" : "Automatic"
  }} /> : null;
  let frost24 = <div className="flex flex-col py-1.5">{bloom24}{drift24}{eagle24}</div>;
  let glide24 = nativePetUiEnabled ? null : <div className="flex items-center justify-between gap-3 py-1.5"><div className="text-xs text-token-description-foreground">{"Hide the pet resize button."}</div><AppInitialYC ariaLabel="Hide pet resize button" checked={acorn24} onChange={lunar24 => {
      wheat24.set(avatarOverlayDebugStateRState, lunar24);
    }} /></div>;
  let honey24 = <div className="text-xs text-token-description-foreground">{"Draw a red border around the pet window"}</div>;
  let iris24 = moss24 => {
    wheat24.set(avatarOverlayDebugStateTState, moss24);
  };
  let jewel24 = <div className="flex items-center justify-between gap-3 py-1.5">{honey24}<AppInitialYC ariaLabel="Show pet window border" checked={yarn24} onChange={iris24} /></div>;
  let knoll24 = nativePetUiEnabled ? <div className="flex items-center justify-between gap-3 py-1.5"><div className="text-xs text-token-description-foreground">{"Force the pet backing material to use CSS"}</div><AppInitialYC ariaLabel="Force CSS pet material" checked={zephyr24} onChange={north24 => {
      wheat24.set(avatarOverlayDebugStateNState, north24);
    }} /></div> : null;
  return <Copper {...{
    title: "Pet",
    storageKey: "debug-pet",
    variant: "global",
    children: [frost24, glide24, jewel24, knoll24]
  }} />;
}
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
function Canyon3() {
  let orbit24 = CodexPluginActionResult(useUpdateAuthNonce),
    pine24 = CodexPluginActionResult(AppInitialXX),
    quest24 = CodexPluginActionResult(AppInitialCX),
    ridge24 = CodexPluginActionResult(AppInitialWX),
    [storm24, tide24] = bravo4.useState(false),
    unity24 = () => {
      let juniper24 = window.electronBridge?.sendMessageFromView;
      juniper24 == null || storm24 || (tide24(true), juniper24({
        type: "reload-bundled-plugins"
      }).catch(Dew3).finally(() => {
        tide24(false);
      }));
    };
  let vale24 = unity24,
    wave24 = orbit24.length.toString();
  let apex24 = <Falcon {...{
    label: "Catalog entries",
    value: wave24
  }} />;
  let brook24 = ridge24.length.toString();
  let cliff24 = <Falcon {...{
    label: "Views",
    value: brook24
  }} />;
  let dusk24 = pine24.length.toString();
  let elm24 = <Falcon {...{
    label: "File viewers",
    value: dusk24
  }} />;
  let fern24 = quest24.length.toString();
  let grove24 = <Falcon {...{
    label: "Mention servers",
    value: fern24
  }} />;
  let hill24 = storm24 ? <VSCODE_EDITOR_ID {...{
    className: "icon-2xs"
  }} /> : null;
  let isle24 = <ElectronOnly {...{
    electron: true,
    children: <div className="flex border-t-[0.5px] border-token-border py-1.5"><button type="button" className="inline-flex cursor-interaction items-center gap-1.5 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={storm24} onClick={vale24}>{hill24}{"Reload bundled plugins"}</button></div>
  }} />;
  return <Copper {...{
    storageKey: "debug-plugins-section",
    title: "Plugins",
    variant: "global",
    children: <div className="flex flex-col py-1.5">{apex24}{cliff24}{elm24}{grove24}{isle24}</div>
  }} />;
}
function Dew3(lagoon24) {
  appActionSidebarProjectRefSchema.error("Failed to reload bundled plugins from debug page", {
    safe: {},
    sensitive: {
      error: lagoon24
    }
  });
}
var alpha4,
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
function Echo4() {
  let meadow24 = AppInitialVr();
  return <Copper {...{
    storageKey: "debug-product-events-section",
    title: "Product events",
    variant: "global",
    children: <_f {...{
      productEvents: meadow24
    }} />
  }} />;
}
function _f(nest24) {
  let {
      productEvents
    } = nest24,
    [oak24, petal24] = quartz4.useState(""),
    quiet24,
    rain24,
    seed24,
    trail24,
    urn24,
    vine24;
  {
    let yarrow24 = Kite4(productEvents, oak24);
    urn24 = "flex flex-col";
    let azure24 = event => {
      petal24(event.currentTarget.value);
    };
    let birch24 = <input type="text" aria-label="Search product events" placeholder="Search event name or payload" value={oak24} className="h-8 w-full rounded-md border border-token-border bg-token-main-surface-primary px-2 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground focus:border-token-focus-border" onChange={azure24} />;
    let canyon24;
    canyon24 = <div className="mt-2 grid grid-cols-[88px_90px_minmax(0,1fr)] gap-3 text-xs font-medium text-token-description-foreground uppercase"><span>{"Status"}</span><span>{"Time"}</span><span>{"Event"}</span></div>;
    vine24 = <div className="sticky top-0 z-10 border-b border-token-border/60 bg-token-dropdown-background/95 pt-3 pb-4 backdrop-blur">{birch24}{canyon24}</div>;
    quiet24 = "flex flex-col";
    rain24 = productEvents.length === 0 ? <Lotus2 {...{
      lines: [{
        label: "Status",
        value: "No product event activity yet"
      }]
    }} /> : null;
    seed24 = productEvents.length > 0 && yarrow24.length === 0 ? <div className="py-3 text-sm text-token-description-foreground">{"No matching product events"}</div> : null;
    trail24 = yarrow24.map(Falcon4);
  }
  let wind24 = <div className={quiet24}>{rain24}{seed24}{trail24}</div>;
  return <div className={urn24}>{vine24}{wind24}</div>;
}
function Falcon4(dew24) {
  let alpha25 = dew24.event.payload,
    bravo25 = Marble4(dew24),
    copper25 = dew24.event.eventType,
    delta25 = Harbor4({
      payload: alpha25,
      statsigUser: dew24.statsigUser
    });
  return <div key={dew24.id} className="border-t border-token-border/60 py-4 first:border-t-0"><div className="grid grid-cols-[88px_90px_minmax(0,1fr)] items-start gap-3 text-sm"><span className={IntlProvider("w-fit rounded-full px-2 py-0.5 text-xs font-medium", Jade4(dew24.status))}>{Indigo4(dew24.status)}</span><span className="text-token-description-foreground tabular-nums">{slate4.format(dew24.timestampMs)}</span><span className="min-w-0"><span className="block font-medium break-words">{bravo25}</span>{copper25 === bravo25 ? null : <span className="block font-mono text-xs break-all text-token-description-foreground">{copper25}</span>}</span></div>{dew24.reason == null ? null : <div className="mt-1 text-xs text-token-description-foreground">{"Reason: "}{dew24.reason}</div>}{delta25.length === 0 ? null : <div className={IntlProvider("mt-2 grid gap-2", delta25.length > 1 && "sm:grid-cols-2")}>{delta25.map(Gamma4)}</div>}</div>;
}
function Gamma4(echo25) {
  return <div key={echo25.label} className="min-w-0"><div className="text-xs font-medium text-token-description-foreground">{echo25.label}</div><pre className="mt-1 h-72 overflow-auto rounded-md border border-token-border bg-token-foreground/[0.035] p-2 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap text-token-foreground">{Onyx4(echo25.value)}</pre></div>;
}
function Harbor4({
  payload,
  statsigUser
}) {
  return [...(payload == null ? [] : [{
    label: "Payload",
    value: payload
  }]), ...(statsigUser === undefined ? [] : [{
    label: "Statsig user",
    value: statsigUser
  }])];
}
function Indigo4(falcon25) {
  switch (falcon25) {
    case "dropped":
      return "Dropped";
    case "enqueued":
      return "Enqueued";
    case "failed":
      return "Failed";
    case "sent":
      return "Sent";
  }
}
function Jade4(gamma25) {
  switch (gamma25) {
    case "dropped":
      return "bg-token-charts-yellow/15 text-token-charts-yellow";
    case "enqueued":
      return "bg-token-charts-blue/15 text-token-charts-blue";
    case "failed":
      return "bg-token-charts-red/15 text-token-charts-red";
    case "sent":
      return "bg-token-charts-green/15 text-token-charts-green";
  }
}
function Kite4(harbor25, indigo25) {
  let jade25 = [...harbor25].reverse(),
    kite25 = indigo25.trim();
  return kite25.length === 0 ? jade25 : jade25.filter(item => Lemon4(item, kite25));
}
function Lemon4(lemon25, marble25) {
  let nickel25 = Nickel4(lemon25);
  return ensureKeyboardShortcutsHMInit(Marble4(lemon25), marble25) > 0 || ensureKeyboardShortcutsHMInit(lemon25.event.eventType, marble25) > 0 || ensureKeyboardShortcutsHMInit(nickel25, marble25) > 0;
}
function Marble4(onyx25) {
  let pearl25 = onyx25.event.eventType.split(".");
  return pearl25[pearl25.length - 1] ?? onyx25.event.eventType;
}
function Nickel4(quartz25) {
  return [quartz25.event.payload, quartz25.statsigUser].flatMap(item => item == null ? [] : [Onyx4(item)]).join("\n");
}
