// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// AST split 7/7
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom, localeMessagesAtom, useStepsProseAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_ZE_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
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
const basaltFifth: any = undefined;
/** split companion stub */
const echoFifth: any = undefined;
/** split companion stub */
const falconFifth: any = undefined;
/** split companion stub */
const indigoFifth: any = undefined;
/** split companion stub */
const irisFifth: any = undefined;
/** split companion stub */
const jadeFifth: any = undefined;
/** split companion stub */
const jewelFifth: any = undefined;
/** split companion stub */
const lemonFifth: any = undefined;
/** split companion stub */
const mintFifth: any = undefined;
/** split companion stub */
const nickelFifth: any = undefined;
/** split companion stub */
const onyxFifth: any = undefined;
/** split companion stub */
const pearlFifth: any = undefined;
/** split companion stub */
const quartzFifth: any = undefined;
/** split companion stub */
const riverFifth: any = undefined;
/** split companion stub */
const slateFifth: any = undefined;
/** split companion stub */
const timberFifth: any = undefined;
/** split companion stub */
const umbraFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialHn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialIE: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialKh: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPv: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQS: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVB: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialYp: any = undefined;
/** split companion stub */
const DeferredDX: any = undefined;
/** split companion stub */
const DeferredUiV2: any = undefined;
/** split companion stub */
const chatProcessRegister: any = undefined;
/** split companion stub */
const codexProfileDropdownOpenConfigToml: any = undefined;
/** split companion stub */
const deferredHostsS3: any = undefined;
/** split companion stub */
const ensureConfigQueryAtomsInit: any = undefined;
/** split companion stub */
const anchor: any = undefined;
/** split companion stub */
const bolt: any = undefined;
/** split companion stub */
const disc: any = undefined;
/** split companion stub */
const edge: any = undefined;
/** split companion stub */
const gear: any = undefined;
/** split companion stub */
const iron: any = undefined;
/** split companion stub */
const joint: any = undefined;
/** split companion stub */
const keystone: any = undefined;
/** split companion stub */
const latch: any = undefined;
/** split companion stub */
const motor: any = undefined;
/** split companion stub */
const nut: any = undefined;
/** split companion stub */
const piston: any = undefined;
/** split companion stub */
const rivet: any = undefined;
/** split companion stub */
const drill: any = undefined;
/** split companion stub */
const engine: any = undefined;
/** split companion stub */
const frame: any = undefined;
/** split companion stub */
const gasket: any = undefined;
/** split companion stub */
const persistSettingValue: any = undefined;
/** split companion stub */
const remoteSshConnections: any = undefined;
/** split companion stub */
const setSettingValue: any = undefined;

const AppInitialYC: any = undefined;
function _a(harbor) {
  let {
      codexLocalAccessAllowed
    } = harbor,
    indigo = CodexPluginActionType(appScopeAtom),
    jade = useIntl(),
    kite = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.sansFontSize) ?? 14,
    lemon = function (willow) {
      let xenon = Number.parseFloat(willow.value);
      if (Number.isNaN(xenon)) {
        willow.value = String(kite);
        return;
      }
      willow.value = String(xenon);
      xenon !== kite && setSettingValue(indigo, OPENAI_PRIMARY_RUNTIME_ID.sansFontSize, xenon);
    };
  let marble = lemon,
    nickel = <MemoizedFormattedMessage {...{
      ...echoFifth.uiFontSize
    }} />;
  let onyx = codexLocalAccessAllowed ? <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.sansFontSize.row.description",
    defaultMessage: "Adjust the base size used for the {appName} UI",
    description: "Description for UI font size setting",
    values: {
      appName: ensureImportSettingsGctInit
    }
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.sansFontSize.chatGptDescription",
    defaultMessage: "Adjust the base size used for the ChatGPT UI",
    description: "Description for UI font size setting when only ChatGPT features are available"
  }} />;
  let pearl, quartz;
  pearl = event => {
    marble(event.currentTarget);
  };
  quartz = event => {
    event.key === "Enter" && (event.preventDefault(), marble(event.currentTarget));
  };
  let river = jade.formatMessage({
    id: "settings.general.appearance.sansFontSize",
    defaultMessage: "Sans font size",
    description: "Label for sans font size setting"
  });
  let slate = <input key={kite} className="focus-visible:ring-token-focus h-token-button-composer w-16 rounded-lg border border-token-border bg-token-input-background px-2 py-0 text-right text-sm text-token-text-primary shadow-sm outline-none focus-visible:ring-2" type="number" min={11} max={16} step={1} defaultValue={kite} onBlur={pearl} onKeyDown={quartz} aria-label={river} />;
  let timber = jade.formatMessage({
    id: "settings.general.appearance.sansFontSize.units",
    defaultMessage: "px",
    description: "Unit label for sans font size setting"
  });
  let umbra = <span className="text-sm text-token-text-secondary">
      {timber}
    </span>;
  let violet = <div className="flex items-center gap-2">
      {slate}
      {umbra}
    </div>;
  return <EnsurePersonalizationCInit {...{
    label: nickel,
    description: onyx,
    control: violet
  }} />;
}
function GeneralSettingsHelper60() {
  let yellow = CodexPluginActionType(appScopeAtom),
    zinc = useIntl(),
    amber = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.codeFontSize) ?? 12,
    basalt = function (lotus) {
      let mint = Number.parseFloat(lotus.value);
      if (Number.isNaN(mint)) {
        lotus.value = String(amber);
        return;
      }
      lotus.value = String(mint);
      mint !== amber && setSettingValue(yellow, OPENAI_PRIMARY_RUNTIME_ID.codeFontSize, mint);
    };
  let cedar = basalt,
    daisy,
    ember;
  daisy = <MemoizedFormattedMessage {...{
    ...echoFifth.codeFontSize
  }} />;
  ember = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.codeFontSize.row.description",
    defaultMessage: "Adjust the base size used for code across chats and diffs",
    description: "Description for code font size controls"
  }} />;
  let flint, garnet;
  flint = event => {
    cedar(event.currentTarget);
  };
  garnet = event => {
    event.key === "Enter" && (event.preventDefault(), cedar(event.currentTarget));
  };
  let hazel = zinc.formatMessage({
    id: "settings.general.appearance.codeFontSize",
    defaultMessage: "Code font size",
    description: "Label for code font size setting"
  });
  let ivory = <input key={amber} className="focus-visible:ring-token-focus h-token-button-composer w-16 rounded-lg border border-token-border bg-token-input-background px-2 py-0 text-right text-sm text-token-text-primary shadow-sm outline-none focus-visible:ring-2" type="number" min={8} max={24} step={1} defaultValue={amber} onBlur={flint} onKeyDown={garnet} aria-label={hazel} />;
  let jasper = zinc.formatMessage({
    id: "settings.general.appearance.codeFontSize.units",
    defaultMessage: "px",
    description: "Unit label for code font size setting"
  });
  let kelp = <span className="text-sm text-token-text-secondary">
      {jasper}
    </span>;
  return <EnsurePersonalizationCInit {...{
    label: daisy,
    description: ember,
    control: <div className="flex items-center gap-2">
            {ivory}
            {kelp}
          </div>
  }} />;
}
function GeneralSettingsHelper61() {
  let nova = CodexPluginActionType(appScopeAtom),
    olive = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    prism = platform === "macOS",
    quill = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.useFontSmoothing) ?? true;
  return prism ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      ...echoFifth.fontSmoothing
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.general.appearance.fontSmoothing.description",
      defaultMessage: "Use native macOS font anti-aliasing",
      description: "Description for the macOS font smoothing setting"
    }} />,
    control: <AppInitialYC checked={quill} onChange={reef => {
      setSettingValue(nova, OPENAI_PRIMARY_RUNTIME_ID.useFontSmoothing, reef);
    }} ariaLabel={olive.formatMessage({
      id: "settings.general.appearance.fontSmoothing.label",
      defaultMessage: "Font smoothing",
      description: "Label for the macOS font smoothing setting"
    })} />
  }} /> : null;
}
function GeneralSettingsHelper62() {
  let sage = CodexPluginActionType(appScopeAtom),
    topaz = useSettingValue(generalDesktopSettingsDefinitions.composerEnterBehavior),
    {
      modifierSymbol
    } = useHostPlatformModifierSymbol(),
    ultra,
    vapor;
  ultra = <MemoizedFormattedMessage {...{
    ...AppInitialAn.enterBehavior
  }} />;
  vapor = <MemoizedFormattedMessage {...{
    id: "settings.general.enterBehavior.description.v2",
    defaultMessage: "Choose when Enter sends a prompt or inserts a new line",
    description: "Description for the enter key behavior setting"
  }} />;
  let wheat = <DropdownTriggerButton>
      {<GeneralSettingsR {...{
      behavior: topaz,
      modifierSymbol
    }} />}
    </DropdownTriggerButton>;
  let yarn = ENTER_KEY_BEHAVIOR_IDS.map(item => <DropdownMenu.Item key={item} {...{
    onSelect: () => {
      setSettingValue(sage, generalDesktopSettingsDefinitions.composerEnterBehavior, item);
    },
    RightIcon: topaz === item ? AppIconZlt : undefined,
    children: <span className="text-sm">
            {<GeneralSettingsR {...{
        behavior: item,
        modifierSymbol
      }} />}
          </span>
  }} />);
  let zephyr = <div className="w-55 max-w-xs">{yarn}</div>;
  return <EnsurePersonalizationCInit {...{
    label: ultra,
    description: vapor,
    control: <DropdownMenuPopover {...{
      triggerButton: wheat,
      align: "end",
      children: zephyr
    }} />
  }} />;
}
function GeneralSettingsHelper63() {
  let acorn = CodexPluginActionType(appScopeAtom),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    bloom = platform !== "windows",
    coral = useIntl(),
    drift = useSettingValue(generalDesktopSettingsDefinitions.preventSleepWhileRunning);
  if (!bloom) return null;
  let eagle = <MemoizedFormattedMessage {...{
    ...AppInitialAn.preventSleepWhileRunning
  }} />;
  let frost = <MemoizedFormattedMessage {...{
    id: "settings.general.power.preventSleepWhileRunning.description",
    defaultMessage: "Keep your computer awake while {appName} is running a task",
    description: "Description for preventing sleep while a task runs",
    values: {
      appName: ensureImportSettingsGctInit
    }
  }} />;
  let glide = drift ?? false,
    honey = jewel => {
      setSettingValue(acorn, generalDesktopSettingsDefinitions.preventSleepWhileRunning, jewel);
    };
  let iris = coral.formatMessage(AppInitialAn.preventSleepWhileRunning);
  return <EnsurePersonalizationCInit {...{
    label: eagle,
    description: frost,
    control: <AppInitialYC checked={glide} onChange={honey} ariaLabel={iris} />
  }} />;
}
type GeneralSettingsRProps = {
  behavior: string;
  modifierSymbol?: string;
};

export function GeneralSettingsR(knoll: GeneralSettingsRProps) {
  let {
    behavior,
    modifierSymbol
  } = knoll;
  switch (behavior) {
    case "enter":
      {
        let lunar;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.enterBehavior.enter",
          defaultMessage: "Enter",
          description: "Option label for sending prompts with Enter"
        }} />;
      }
    case "cmdIfMultiline":
      {
        let moss;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.enterBehavior.cmdIfMultiline",
          defaultMessage: "{modifierSymbol} + Enter for multiline prompts",
          description: "Option label for requiring a modifier key to send multiline prompts",
          values: {
            modifierSymbol
          }
        }} />;
      }
    case "cmdAlways":
      {
        let north;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.enterBehavior.cmdAlways",
          defaultMessage: "{modifierSymbol} + Enter always",
          description: "Option label for always requiring a modifier key to send prompts",
          values: {
            modifierSymbol
          }
        }} />;
      }
  }
}
var alpha, bravo, $, copper, delta, echo, falcon, gamma;
export const generalSettingsO = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  bravo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  chatgpt2();
  AppInitialVB();
  DeferredUiV2();
  ensureComposerEsm_B7_Init();
  ensureConversationPageEsm_B0_Init();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_ZE_Init();
  ensureDropdownMenuInit();
  WritingBlockRenderer();
  ensureComposerEsm_Sut_Init();
  AppInitialBC();
  ensureComposerEsm_K1_Init();
  AppInitialPv();
  DeferredDX();
  CodexPluginSource();
  macOS5();
  macOS4();
  codexProfileDropdownOpenConfigToml();
  localeMessagesAtom();
  usePlatformAwareFeatureGate();
  ensureDropdownMenuPopoverInit();
  AppInitialQS();
  AppInitialHn();
  AppInitialBn();
  AppInitialIE();
  ensureContextMenuProviderInit();
  ensureComposerEsm_K9_Init();
  chatProcessRegister();
  ensureConfigQueryAtomsInit();
  deferredHostsS3();
  CodexInAppBrowserToolbarActionType();
  AppInitialKh();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  pearlFifth();
  mintFifth();
  jewelFifth();
  setKeyedStoreAtomValueXU();
  hotkeySetterN();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  falconFifth();
  indigoFifth();
  lemonFifth();
  AppInitialOn();
  AppInitialYp();
  ensureReviewDeliverySettingsRowInit();
  codexCommandTheme();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureComposerEsm_F7_Init();
  remoteSshConnections();
  ensureSkillsPageHelpersInit();
  nickelFifth();
  getSettingValue();
  scrollAppActionTargetTo();
  onyxFifth();
  quartzFifth();
  riverFifth();
  slateFifth();
  timberFifth();
  umbraFifth();
  copper = ["powershell", "commandPrompt", "gitBash", "wsl"];
  delta = persistSettingValue("has-used-legacy-wsl-agent-environment", false);
  falcon = [{
    id: "system",
    label: echoFifth.themeSystem
  }, {
    id: "light",
    label: echoFifth.light
  }, {
    id: "dark",
    label: echoFifth.dark
  }];
  gamma = {
    dark: {
      background: "#5d5d5d",
      component: jadeFifth
    },
    light: {
      background: "#f3f3f3",
      component: basaltFifth
    },
    system: {
      background: "linear-gradient(90deg, #9f9f9f 0 50%, #5d5d5d 50% 100%)",
      component: irisFifth
    }
  };
});
