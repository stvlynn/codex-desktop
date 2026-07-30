// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// AST split 3/7
/* split-lane-import-depth:1 */

import { ensureRateLimitResetDialogInit } from "../../account/ensure-rate-limit-reset-dialog-init";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { ReferralInviteEligibility } from "../../account/referral-invite-eligibility";
import { ReferralInviteTracking } from "../../account/referral-invite-tracking";
import { updateSubscriptionPlan } from "../../account/wham-subscription-onboarding-posts";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexInAppBrowserToolbarActionType } from "../../analytics/codex-in-app-browser-toolbar-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexPluginSource } from "../../analytics/codex-plugin-source";
import { CODEX_PROFILE_EDIT_EVENT_TYPE } from "../../analytics/codex-profile-edit-event-type";
import { CodexRealtimeVoiceSessionEndReason } from "../../analytics/codex-realtime-voice-session-end-reason";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppSurfaceId } from "../../app/app-surface-ids";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { resolveGuardianApprovalWorkspaceWriteMode } from "../../approvals/resolve-guardian-approval-workspace-write-mode";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom, createAppScopeQueryAtom, localeMessagesAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_ZE_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { IN_APP_BROWSER_OPEN_TARGET } from "../../browser/in-app-browser-open-target";
import { getChatGptAccountInfoQueryConfig } from "../../cloud/account-info-query";
import { resolveCodexCloudAccess } from "../../cloud/resolve-codex-cloud-access";
import { ENTER_KEY_BEHAVIOR_IDS } from "../../composer/enter-key-behavior-ids";
import { localReasoningEffortMessages } from "../../composer/local-reasoning-effort-messages";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { OPENAI_PRIMARY_RUNTIME_ID } from "../../config/openai-primary-runtime-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { sidebarThreadKeyToPath } from "../../conversation/sidebar-thread-path";
import { THREAD_DETAIL_LEVEL_STEPS_COMMANDS } from "../../conversation/thread-detail-level-ids";
import { useConversationHostFeatureFlags } from "../../conversation/use-conversation-host-feature-flags";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { parseDiffFromFile } from "../../diff/parse-diff-from-file";
import { SwitchToSplitDiffButton } from "../../diff/switch-to-split-diff-button";
import { DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { WSL_REMOTE_CONNECTIONS_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { FkrDataBridge } from "../../hooks/fkr-data-bridge";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostChatgptAuthMethod } from "../../hosts/use-host-chatgpt-auth-method";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AddContextSquareIcon } from "../../icons/add-context-square-icon";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconVn } from "../../icons/app-icon-vn";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { resolveOnboardingCatalogKind } from "../../onboarding/resolve-onboarding-catalog-kind";
import { resolveDefaultAgentMode } from "../../permissions/resolve-default-agent-mode";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { codexMicroAgentSource } from "../../shell/codex-micro-agent-source";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { context } from "../../ui/context";
import { deferredRv } from "../../ui/deferred-rv";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ensureFormattedMessageFragmentInit } from "../../ui/ensure-formatted-message-fragment-init";
import { macOS4 } from "../../ui/mac-os4";
import { macOS5 } from "../../ui/mac-os5";
import { MemoizedPropBridge } from "../../ui/memoized-prop-bridge";
import { TriggerMenuPopover } from "../../ui/trigger-menu-popover";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { setKeyedStoreAtomValueXU } from "../../utils/set-keyed-store-atom-value";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsGctInit, ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePullRequestMediaGUInit, ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { CodeThemePreviewGlyph } from "../code-theme-preview-glyph";
import { ensureGranularPermissionsClusterInit } from "../ensure-granular-permissions-cluster-init";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureGpuTearingDebugSettingsInit } from "../gpu-tearing-debug-settings";
import { hotkeySetterN, hotkeySetterT as HotkeySetterT } from "../hotkey-setter";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureReviewDeliverySettingsRowInit, ReviewDeliverySettingsRow } from "../review-delivery-settings-row";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { getSettingValue } from "../settings-values";
import { useSettingValue } from "../use-setting-value";
import { buildVscodeQueryKey } from "../vscode-query-key";
import { WorkspaceImportSettingsSection } from "../workspace-import-settings-section";

/** split companion stub */
const kiteFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialT: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVS: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVpt: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWpt: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialX4: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialYO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZS: any = undefined;
/** split companion stub */
const SeenModelUpgradeList: any = undefined;
/** split companion stub */
const awaitWithAbort: any = undefined;
/** split companion stub */
const dataAppActionReviewFileExpanded: any = undefined;
/** split companion stub */
const deferredComposerQq: any = undefined;
/** split companion stub */
const deferredHostsY4: any = undefined;
/** split companion stub */
const deferredHostsZ4: any = undefined;
/** split companion stub */
const ensureSelectWorkspaceCqInit: any = undefined;
/** split companion stub */
const ensureSelectWorkspacePXInit: any = undefined;
/** split companion stub */
const forge: any = undefined;
/** split companion stub */
const setSettingValue: any = undefined;

const SetRemoteControlEnabledForHost: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const GeneralSettingsHelper33: any = undefined;
const GeneralSettingsHelper32: any = undefined;
const DeferredUiUStub: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialA: any = undefined;
function GeneralSettingsHelper23(zinc) {
  let {
      open,
      onOpenChange,
      onConfirm,
      permissionsLearnMoreUrl
    } = zinc,
    amber = event => {
      event.preventDefault();
      onConfirm();
    };
  let basalt = <DeferredUiUStub {...{
    children: <DeferredUiH {...{
      title: <span className="flex items-center gap-2">
                  <AppInitialVO className="icon-sm shrink-0" />
                  {<MemoizedFormattedMessage {...{
          id: "settings.agent.permissionsMode.fullAccess.confirm.title",
          defaultMessage: "Make Full Access available?",
          description: "Title for the confirmation dialog shown before exposing Full access in the composer"
        }} />}
                </span>
    }} />
  }} />;
  let cedar = <p>
      {<MemoizedFormattedMessage {...{
      id: "settings.agent.permissionsMode.fullAccess.confirm.body",
      defaultMessage: "When selected, ChatGPT can access the internet and read and edit files without asking for approval — including potentially destructive commands",
      description: "Body copy in the confirmation dialog shown before exposing Full access in the composer"
    }} />}
    </p>;
  let daisy = alpha(permissionsLearnMoreUrl);
  let ember = <DeferredUiUStub {...{
    className: "flex flex-col gap-4 text-token-description-foreground",
    children: [cedar, <p>
            {<MemoizedFormattedMessage {...{
        id: "settings.agent.permissionsMode.fullAccess.confirm.availabilityDescription",
        defaultMessage: "Turning this on adds Full Access to the permissions menu. It does not turn Full Access on. <a>Learn more</a>",
        description: "Clarification in the confirmation dialog that exposing Full Access does not select it",
        values: {
          a: daisy
        }
      }} />}
          </p>]
  }} />;
  let flint = () => {
    onOpenChange(false);
  };
  let garnet = <MemoizedFormattedMessage {...{
    id: "settings.agent.permissionsMode.fullAccess.confirm.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label in the confirmation dialog shown before exposing Full access in the composer"
  }} />;
  let hazel = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    type: "button",
    onClick: flint,
    children: garnet
  }} />;
  let ivory = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    type: "submit",
    children: [<AppInitialVO className="icon-xs shrink-0" />, <MemoizedFormattedMessage {...{
      id: "settings.agent.permissionsMode.fullAccess.confirm.confirm",
      defaultMessage: "Confirm",
      description: "Confirm button label in the confirmation dialog shown before exposing Full access in the composer"
    }} />]
  }} />;
  let jasper = <DeferredUiUStub {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [hazel, ivory]
    }} />
  }} />;
  let kelp = <DeferredUiB {...{
    as: "form",
    onSubmit: amber,
    children: [basalt, ember, jasper]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    showDialogClose: false,
    onOpenChange,
    children: kelp
  }} />;
}
function alpha(lotus) {
  return mint => <a className="inline-flex cursor-interaction text-token-text-link-foreground" href={lotus} target="_blank" rel="noreferrer">
      {mint}
    </a>;
}
var bravo,
  ui,
  copper,
  delta = esmInit(() => {
    bravo = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ui = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    AppInitialBC();
    ensureGranularPermissionsClusterInit();
    ensureRateLimitResetDialogInit();
    resolveCodexCloudAccess();
    findProcessManagerRow();
    AppInitialYO();
    ensureAppScopeInit();
    AppInitialOn();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    kiteFifth();
  }),
  echo,
  falcon = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureDynamicScriptLoadInit();
    localReasoningEffortMessages();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    echo = createAppScopeQueryAtom(appScopeAtom, () => ({
      enabled: appServices.terminal != null,
      queryKey: ["terminal-shells"],
      queryFn: async ({
        signal
      }) => {
        let nova = appServices.terminal;
        return nova == null ? [] : awaitWithAbort(nova.getAvailableShells(), signal);
      },
      staleTime: readScrollTop.ONE_MINUTE
    }));
  });
function GeneralSettingsHelper25() {
  let olive = CodexPluginActionType(appScopeAtom),
    prism = useIntl(),
    quill = useSettingValue(AppInitialWpt.turnMode),
    reef = useSettingValue(AppInitialWpt.permissionsEnabled),
    sage = useSettingValue(AppInitialWpt.questionsEnabled),
    topaz = quill ?? "unfocused",
    ultra = <MemoizedFormattedMessage {...{
      ...AppInitialAn.never
    }} />;
  let vapor = prism.formatMessage(AppInitialAn.never);
  let wheat = {
    id: "off",
    label: ultra,
    ariaLabel: vapor
  };
  let yarn = <MemoizedFormattedMessage {...{
    ...AppInitialAn.onlyWhenUnfocused
  }} />;
  let zephyr = prism.formatMessage(AppInitialAn.onlyWhenUnfocused);
  let acorn = {
    id: "unfocused",
    label: yarn,
    ariaLabel: zephyr
  };
  let bloom = <MemoizedFormattedMessage {...{
    ...AppInitialAn.always
  }} />;
  let coral = prism.formatMessage(AppInitialAn.always);
  let drift = {
    id: "always",
    label: bloom,
    ariaLabel: coral
  };
  let eagle = [wheat, acorn, drift];
  let frost = eagle,
    glide,
    honey;
  glide = <MemoizedFormattedMessage {...{
    ...AppInitialAn.turnCompletionNotifications
  }} />;
  honey = <MemoizedFormattedMessage {...{
    id: "notifications.turnMode.description",
    defaultMessage: "Set when ChatGPT alerts you that it's finished",
    description: "Description for turn completion notification settings"
  }} />;
  let iris = frost.find(item => item.id === topaz)?.label,
    jewel = <DropdownTriggerButton>
        <span className="truncate">{iris}</span>
      </DropdownTriggerButton>;
  let knoll = <div className="max-h-80 overflow-y-auto">
      {frost.map(item => {
      let brook = item.id === topaz;
      return <DropdownMenu.Item key={item.id} {...{
        RightIcon: brook ? AppIconZlt : undefined,
        onSelect: () => {
          setSettingValue(olive, AppInitialWpt.turnMode, item.id);
        },
        "aria-label": item.ariaLabel,
        children: <span className="truncate">{item.label}</span>
      }} />;
    })}
    </div>;
  let lunar = <EnsurePersonalizationCInit {...{
    label: glide,
    description: honey,
    control: <DropdownMenuPopover {...{
      contentWidth: "menuWide",
      align: "end",
      triggerButton: jewel,
      children: knoll
    }} />
  }} />;
  let moss, north;
  moss = <MemoizedFormattedMessage {...{
    ...AppInitialAn.permissionNotifications
  }} />;
  north = <MemoizedFormattedMessage {...{
    id: "notifications.permissions.description",
    defaultMessage: "Show alerts when notification permissions are required",
    description: "Description for permission notification toggle"
  }} />;
  let orbit = reef ?? true,
    pine = cliff => {
      setSettingValue(olive, AppInitialWpt.permissionsEnabled, cliff);
    };
  let quest = prism.formatMessage(AppInitialAn.permissionNotifications);
  let ridge = <EnsurePersonalizationCInit {...{
    label: moss,
    description: north,
    control: <AppInitialYC checked={orbit} onChange={pine} ariaLabel={quest} />
  }} />;
  let storm, tide;
  storm = <MemoizedFormattedMessage {...{
    ...AppInitialAn.questionNotifications
  }} />;
  tide = <MemoizedFormattedMessage {...{
    id: "notifications.questions.description",
    defaultMessage: "Show alerts when input is needed to continue",
    description: "Description for question notification toggle"
  }} />;
  let unity = sage ?? true,
    vale = dusk => {
      setSettingValue(olive, AppInitialWpt.questionsEnabled, dusk);
    };
  let wave = prism.formatMessage(AppInitialAn.questionNotifications);
  let apex = <EnsurePersonalizationCInit {...{
    label: storm,
    description: tide,
    control: <AppInitialYC checked={unity} onChange={vale} ariaLabel={wave} />
  }} />;
  return <>
      {lunar}
      {ridge}
      {apex}
      {null}
    </>;
}
var gamma,
  harbor,
  indigo = esmInit(() => {
    gamma = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    AppInitialBC();
    ensureDropdownMenuPopoverInit();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialOn();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
  });
function _i() {
  let elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    {
      authMethod,
      email,
      planAtLogin
    } = useAuth(),
    {
      data
    } = getChatGptAccountInfoQueryConfig(),
    grove = useSettingValue(AppInitialVpt.enabled);
  if (!IN_APP_BROWSER_OPEN_TARGET({
    authMethod,
    email: data?.email ?? email,
    plan: data?.plan ?? planAtLogin
  })) return null;
  let hill, isle;
  hill = <MemoizedFormattedMessage {...{
    ...AppInitialAn.suggestedPrompts
  }} />;
  isle = <MemoizedFormattedMessage {...{
    id: "settings.agent.ambientSuggestions.rowLabel",
    defaultMessage: "Suggest what to do next by searching project files and connected apps",
    description: "Description for the ambient suggestions setting row"
  }} />;
  let juniper = grove === true,
    lagoon = fern.formatMessage({
      id: "settings.agent.ambientSuggestions.toggleLabel",
      defaultMessage: "Enable ambient suggestions",
      description: "Aria label for the ambient suggestions toggle"
    });
  let meadow = nest => {
    setSettingValue(elm, AppInitialVpt.enabled, nest);
  };
  return <EnsurePersonalizationCInit {...{
    label: hill,
    description: isle,
    control: <AppInitialYC checked={juniper} ariaLabel={lagoon} onChange={meadow} />
  }} />;
}
var jade,
  kite,
  lemon = esmInit(() => {
    jade = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureAuthProviderInit();
    deferredComposerQq();
    AppInitialBC();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialOn();
    AppInitialVC();
  });
function GeneralSettingsHelper26() {
  let oak = readCodexHomeFromQuery(LOCAL_HOST_ID),
    {
      data,
      isLoading
    } = CodexPluginActionResult(deferredHostsZ4),
    petal = CodexPluginActionResult(AppInitialX4),
    quiet = CodexPluginActionResult(deferredHostsY4),
    rain = isLoading || quiet,
    seed = data == null ? undefined : petal;
  return <WorkspaceImportSettingsSection {...{
    variant: "general-row",
    codexHome: oak,
    hostId: LOCAL_HOST_ID,
    isActiveWorkspaceLoading: rain,
    workspaceRoots: seed
  }} />;
}
var marble,
  nickel,
  onyx = esmInit(() => {
    marble = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    AppInitialT();
    ensureSelectWorkspacePXInit();
    extractColonPrefixedNamedTokens();
    ensureAppShellAtomsInit();
  });
function GeneralSettingsHelper27(trail) {
  let {
      onCreateWslProject,
      wslConnectionHostId,
      wslConnectionState
    } = trail,
    urn = wslConnectionHostId != null && wslConnectionState === "connected" ? <MemoizedFormattedMessage {...{
      id: "settings.agentEnvironment.legacyWsl.deprecation.withConnection",
      defaultMessage: "The legacy WSL agent environment is deprecated. Use a project from your WSL connection instead, or <addProject>add a new one</addProject>",
      description: "Deprecation guidance shown to legacy WSL agent environment users who can add a project from their WSL connection",
      values: {
        addProject: yarrow => <button type="button" className="cursor-interaction border-0 bg-transparent p-0 text-token-text-link-foreground hover:underline" onClick={() => {
          onCreateWslProject(wslConnectionHostId);
        }}>
                  {yarrow}
                </button>
      }
    }} /> : null;
  let vine = wslConnectionHostId != null && wslConnectionState !== "connected" ? <MemoizedFormattedMessage {...{
    id: "settings.agentEnvironment.legacyWsl.deprecation.connectionNotReady",
    defaultMessage: "The legacy WSL agent environment is deprecated. <connectionsLink>Open WSL connections</connectionsLink> to continue",
    description: "Deprecation guidance shown to legacy WSL agent environment users whose remote WSL connection is not ready",
    values: {
      connectionsLink: pearl
    }
  }} /> : null;
  let wind = wslConnectionHostId == null ? <MemoizedFormattedMessage {...{
    id: "settings.agentEnvironment.legacyWsl.deprecation.withoutConnection",
    defaultMessage: "The legacy WSL agent environment is deprecated. Install WSL and the Codex CLI inside your WSL distribution, then restart ChatGPT to use remote WSL connections",
    description: "Deprecation guidance shown to legacy WSL agent environment users without a remote WSL connection"
  }} /> : null;
  return <span className="text-token-editor-warning-foreground">
      {urn}
      {vine}
      {wind}
    </span>;
}
function pearl(azure) {
  return <Link className="cursor-interaction text-token-text-link-foreground hover:underline" to="/settings/connections/wsl">
      {azure}
    </Link>;
}
var quartz,
  river,
  slate = esmInit(() => {
    quartz = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
  });
function timber({
  hasUsedLegacyWslAgentEnvironment,
  remoteWslConnectionsEnabled,
  runCodexInWsl,
  supportsRunningInWsl
}) {
  return remoteWslConnectionsEnabled ? runCodexInWsl || hasUsedLegacyWslAgentEnvironment : supportsRunningInWsl;
}
var umbra = esmInit(() => {});
function GeneralSettingsHelper30() {
  let birch = useIntl(),
    {
      isServiceTierAllowed
    } = useHostChatgptAuthMethod(),
    {
      serviceTierSettings,
      setServiceTier
    } = ensureSelectWorkspaceCqInit();
  if (!isServiceTierAllowed || serviceTierSettings.availableOptions.length <= 1) return null;
  let canyon = serviceTierSettings.availableOptions.find(item => item.value === serviceTierSettings.selectedServiceTier) ?? serviceTierSettings.availableOptions[0];
  let dew = canyon,
    ever,
    field;
  ever = <MemoizedFormattedMessage {...{
    ...xenon.label
  }} />;
  field = <MemoizedFormattedMessage {...{
    ...xenon.description
  }} />;
  let grain = serviceTierSettings.isLoading,
    haven = AppInitialZS(birch, dew.label);
  let ink = <DropdownTriggerButton disabled={grain}>
      {haven}
    </DropdownTriggerButton>;
  let jadeite = leaf => {
    setServiceTier(leaf, "settings");
  };
  let kernel = <GeneralSettingsHelper31 {...{
    disabled: serviceTierSettings.isLoading,
    onSelect: jadeite,
    options: serviceTierSettings.availableOptions,
    selectedServiceTier: serviceTierSettings.selectedServiceTier
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: ever,
    description: field,
    control: <DropdownMenuPopover {...{
      contentWidth: "menuWide",
      align: "end",
      triggerButton: ink,
      children: kernel
    }} />
  }} />;
}
function GeneralSettingsHelper31(maple) {
  let {
      disabled,
      onSelect,
      options,
      selectedServiceTier
    } = maple,
    nimbus;
  {
    let opal;
    opal = plume => {
      let quillow = AppInitialA(plume.iconKind);
      return <DropdownMenu.Item key={plume.value ?? "standard"} {...{
        disabled,
        tooltipText: AppInitialVS(plume.description),
        tooltipSide: "top",
        RightIcon: plume.value === selectedServiceTier ? AppIconZlt : undefined,
        SubText: <span className="text-token-description-foreground">
                {AppInitialVS(plume.description)}
              </span>,
        onSelect: () => onSelect(plume.value),
        children: <span className="inline-flex max-w-full min-w-0 items-center gap-1 align-middle">
                {quillow == null ? null : <AppInitialA {...{
            className: "icon-2xs text-token-link-foreground shrink-0"
          }} />}
                <span className="min-w-0 truncate">
                  {AppInitialVS(plume.label)}
                </span>
              </span>
      }} />;
    };
    nimbus = options.map(opal);
  }
  return <>{nimbus}</>;
}
var violet,
  willow,
  xenon,
  yellow = esmInit(() => {
    violet = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureFormattedMessageFragmentInit();
    AppInitialO();
    SeenModelUpgradeList();
    ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY();
    ensureDropdownMenuPopoverInit();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    xenon = identity({
      description: {
        id: "settings.agent.speed.description",
        defaultMessage: "Choose how quickly ChatGPT runs across chats, subagents, and compaction",
        description: "Description for the speed setting"
      },
      label: {
        id: "settings.agent.speed.label",
        defaultMessage: "Speed",
        description: "Label for the Fast mode speed setting"
      }
    });
  });
export function generalSettingsI() {
  let root = CodexPluginActionResult(chatgptConversationsGateAtom);
  return <OpenInBrowser {...{
    title: <SettingsSectionTitle slug="general-settings" />,
    children: root ? <GeneralSettingsHelper32 {...{}} /> : <GeneralSettingsHelper33 {...{}} />
  }} />;
}
