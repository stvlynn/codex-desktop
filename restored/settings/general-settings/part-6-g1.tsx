// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// Group 1/2
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
const echoFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialD0: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFv: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const anchor: any = undefined;
/** split companion stub */
const list: any = undefined;
/** split companion stub */
const setSettingValue: any = undefined;

const GeneralSettingsHelper59: any = undefined;
const AppInitialZn: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialPl: any = undefined;
function GeneralSettingsHelper47() {
  let alpha = CodexPluginActionType(appScopeAtom),
    bravo = useIntl(),
    copper = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.theme) ?? "system",
    delta = function (slate) {
      setSettingValue(alpha, OPENAI_PRIMARY_RUNTIME_ID.theme, slate, {
        optimistic: false
      });
    };
  let echo = delta,
    falcon,
    gamma;
  falcon = <MemoizedFormattedMessage {...{
    ...echoFifth.theme
  }} />;
  gamma = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.theme.description",
    defaultMessage: "Use light, dark, or match your system",
    description: "Description for theme selector in appearance settings"
  }} />;
  let harbor = bravo.formatMessage(echoFifth.theme);
  let indigo = <GeneralSettingsHelper58 {...{
    icon: <AppInitialZn className="icon-sm" />,
    label: <MemoizedFormattedMessage {...{
      ...echoFifth.light
    }} />
  }} />;
  let jade = bravo.formatMessage(echoFifth.light);
  let kite = {
    id: "light",
    label: indigo,
    ariaLabel: jade
  };
  let lemon = <GeneralSettingsHelper58 {...{
    icon: <AppIconVn className="icon-sm" />,
    label: <MemoizedFormattedMessage {...{
      ...echoFifth.dark
    }} />
  }} />;
  let marble = bravo.formatMessage(echoFifth.dark);
  let nickel = {
    id: "dark",
    label: lemon,
    ariaLabel: marble
  };
  let onyx = <GeneralSettingsHelper58 {...{
    icon: <AppIconKS className="icon-sm" />,
    label: <MemoizedFormattedMessage {...{
      ...echoFifth.themeSystem
    }} />
  }} />;
  let pearl = bravo.formatMessage(echoFifth.themeSystem);
  let quartz = {
    id: "system",
    label: onyx,
    ariaLabel: pearl
  };
  let river = [kite, nickel, quartz];
  return <EnsurePersonalizationCInit {...{
    label: falcon,
    description: gamma,
    control: <AppInitialPl ariaLabel={harbor} selectedId={copper} onSelect={echo} options={river} />
  }} />;
}
function GeneralSettingsHelper48() {
  let timber = CodexPluginActionType(appScopeAtom),
    umbra = useIntl(),
    violet = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.usePointerCursors);
  return <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      ...echoFifth.pointerCursors
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.general.appearance.usePointerCursors.description",
      defaultMessage: "Change the cursor to a pointer when hovering over interactive elements",
      description: "Description for pointer cursor interaction setting"
    }} />,
    control: <AppInitialYC checked={violet === true} onChange={willow => {
      setSettingValue(timber, OPENAI_PRIMARY_RUNTIME_ID.usePointerCursors, willow);
    }} ariaLabel={umbra.formatMessage(echoFifth.pointerCursors)} />
  }} />;
}
function GeneralSettingsHelper49() {
  let xenon = CodexPluginActionType(appScopeAtom),
    yellow = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    {
      data
    } = CodexPluginActionResult(useLocalCwdModeHostConfig),
    zinc = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.dockIconPreference),
    amber = function (olive) {
      setSettingValue(xenon, OPENAI_PRIMARY_RUNTIME_ID.dockIconPreference, olive);
    };
  let basalt = amber;
  if (platform !== "macOS" || AppSurfaceId.ChatGPT !== "chatgpt" || CodexBuildEnvironment.Agent === "prod") return null;
  let cedar = data?.dockIconPreviews;
  if (cedar == null) return null;
  let daisy, ember;
  daisy = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.dockIcon.label",
    defaultMessage: "Dock icon",
    description: "Label for the macOS Dock icon preference"
  }} />;
  ember = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.dockIcon.row.description",
    defaultMessage: "Choose the icon the app will use in the dock",
    description: "Description for the macOS Dock icon preference"
  }} />;
  let flint = yellow.formatMessage({
    id: "settings.general.appearance.dockIcon.label",
    defaultMessage: "Dock icon",
    description: "Label for the macOS Dock icon preference"
  });
  let garnet = zinc === "app-default",
    hazel = <img alt="" className="size-10" src={cedar.appDefault} />;
  let ivory = <GeneralSettingsHelper50 {...{
    brand: AppSurfaceId.ChatGPT,
    checked: garnet,
    preview: hazel,
    value: "app-default",
    onSelect: basalt
  }} />;
  let jasper = zinc === "codex-system",
    kelp = <source media="(prefers-color-scheme: dark)" srcSet={cedar.codexDark} />;
  let lotus = <img alt="" className="size-10" src={cedar.codexLight} />;
  let mint = <picture>
      {kelp}
      {lotus}
    </picture>;
  let nova = <GeneralSettingsHelper50 {...{
    brand: AppSurfaceId.Codex,
    checked: jasper,
    preview: mint,
    value: "codex-system",
    onSelect: basalt
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: daisy,
    description: ember,
    control: <div aria-label={flint} className="grid grid-cols-2 gap-2" role="radiogroup">
            {ivory}
            {nova}
          </div>
  }} />;
}
function GeneralSettingsHelper50(prism) {
  let {
      brand,
      checked,
      preview,
      value,
      onSelect
    } = prism,
    quill = useIntl(),
    reef = brand === AppSurfaceId.ChatGPT ? quill.formatMessage({
      id: "settings.general.appearance.dockIcon.chatGPT.ariaLabel",
      defaultMessage: "Use ChatGPT Dock icon",
      description: "Aria label for selecting the ChatGPT macOS Dock icon"
    }) : quill.formatMessage({
      id: "settings.general.appearance.dockIcon.codex.ariaLabel",
      defaultMessage: "Use Codex Dock icon",
      description: "Aria label for selecting the Codex macOS Dock icon"
    });
  let sage = () => {
    onSelect(value);
  };
  let topaz = <input aria-label={reef} checked={checked} className="peer sr-only" name="dock-icon" onChange={sage} type="radio" />;
  let ultra = checked ? "border-token-text-primary bg-token-list-hover-background" : "border-token-border bg-token-main-surface-primary group-hover:border-token-border-heavy",
    vapor = IntlProvider("flex size-12 items-center justify-center rounded-xl border peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-token-focus-border", ultra);
  let wheat = <span aria-hidden="true" className={vapor}>
      {preview}
    </span>;
  return <label className="group cursor-interaction">
      {topaz}
      {wheat}
    </label>;
}
function GeneralSettingsHelper51() {
  let yarn = CodexPluginActionType(appScopeAtom),
    zephyr = useIntl(),
    acorn = CodexPluginActionResult(AppInitialD0) !== false,
    bloom,
    coral;
  bloom = <MemoizedFormattedMessage {...{
    ...AppInitialAn.bottomPanel
  }} />;
  coral = <MemoizedFormattedMessage {...{
    id: "settings.general.bottomPanel.description",
    defaultMessage: "Show the bottom panel control in the app header",
    description: "Description for bottom panel launcher visibility setting"
  }} />;
  let drift = frost => {
    list(yarn, frost);
  };
  let eagle = zephyr.formatMessage(AppInitialAn.bottomPanel);
  return <EnsurePersonalizationCInit {...{
    label: bloom,
    description: coral,
    control: <AppInitialYC checked={acorn} onChange={drift} ariaLabel={eagle} />
  }} />;
}
function GeneralSettingsHelper52() {
  let glide = CodexPluginActionType(appScopeAtom),
    honey = useIntl(),
    iris = useSettingValue(generalDesktopSettingsDefinitions.defaultTerminalLocation);
  if (CodexPluginActionResult(AppInitialD0) === false) return null;
  let jewel = function (unity) {
    setSettingValue(glide, generalDesktopSettingsDefinitions.defaultTerminalLocation, unity);
  };
  let knoll = jewel,
    lunar,
    moss;
  lunar = <MemoizedFormattedMessage {...{
    ...AppInitialAn.defaultTerminalLocation
  }} />;
  moss = <MemoizedFormattedMessage {...{
    id: "settings.general.defaultTerminalLocation.description",
    defaultMessage: "Choose where the terminal shortcut and environment actions open terminal tabs",
    description: "Description for default terminal location setting"
  }} />;
  let north = <MemoizedFormattedMessage {...{
    ...AppInitialAn.terminalLocationBottom
  }} />;
  let orbit = honey.formatMessage(AppInitialAn.terminalLocationBottom);
  let pine = {
    id: "bottom",
    label: north,
    ariaLabel: orbit
  };
  let quest = <MemoizedFormattedMessage {...{
    ...AppInitialAn.terminalLocationRight
  }} />;
  let ridge = honey.formatMessage(AppInitialAn.terminalLocationRight);
  let storm = {
    id: "right",
    label: quest,
    ariaLabel: ridge
  };
  let tide = [pine, storm];
  return <EnsurePersonalizationCInit {...{
    label: lunar,
    description: moss,
    control: <AppInitialPl selectedId={iris} onSelect={knoll} options={tide} />
  }} />;
}
function GeneralSettingsHelper53() {
  let vale = CodexPluginActionType(appScopeAtom),
    wave = useIntl(),
    apex = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.diffMarkerStyle),
    brook = function (nest) {
      setSettingValue(vale, OPENAI_PRIMARY_RUNTIME_ID.diffMarkerStyle, nest);
    };
  let cliff = brook,
    dusk,
    elm;
  dusk = <MemoizedFormattedMessage {...{
    ...echoFifth.diffMarkers
  }} />;
  elm = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.diffMarkerStyle.description",
    defaultMessage: "Show changes using colors or +/− markers",
    description: "Description for the diff marker style setting"
  }} />;
  let fern = <MemoizedFormattedMessage {...{
    ...echoFifth.color
  }} />;
  let grove = wave.formatMessage({
    id: "settings.general.appearance.diffMarkerStyle.color.ariaLabel",
    defaultMessage: "Color diff markers",
    description: "Aria label for the color diff marker option"
  });
  let hill = {
    id: "color",
    label: fern,
    ariaLabel: grove
  };
  let isle = <MemoizedFormattedMessage {...{
    ...echoFifth.plusMinus
  }} />;
  let juniper = wave.formatMessage({
    id: "settings.general.appearance.diffMarkerStyle.symbols.ariaLabel",
    defaultMessage: "Plus / minus diff markers",
    description: "Aria label for the plus and minus diff marker option"
  });
  let lagoon = {
    id: "symbols",
    label: isle,
    ariaLabel: juniper
  };
  let meadow = [hill, lagoon];
  return <EnsurePersonalizationCInit {...{
    className: "gap-6",
    label: dusk,
    description: elm,
    control: <AppInitialPl selectedId={apex} onSelect={cliff} options={meadow} />
  }} />;
}
function GeneralSettingsHelper54() {
  let oak = CodexPluginActionType(appScopeAtom),
    petal = useIntl(),
    quiet = useSettingValue(OPENAI_PRIMARY_RUNTIME_ID.reducedMotionPreference),
    rain = function (haven) {
      setSettingValue(oak, OPENAI_PRIMARY_RUNTIME_ID.reducedMotionPreference, haven);
    };
  let seed = rain,
    trail,
    urn;
  trail = <MemoizedFormattedMessage {...{
    ...echoFifth.reduceMotion
  }} />;
  urn = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.reducedMotion.description",
    defaultMessage: "Reduce animations or match your system",
    description: "Description for the reduced motion appearance setting"
  }} />;
  let vine = <MemoizedFormattedMessage {...{
    ...echoFifth.reducedMotionSystem
  }} />;
  let wind = petal.formatMessage(echoFifth.reducedMotionSystem);
  let yarrow = {
    id: "system",
    label: vine,
    ariaLabel: wind
  };
  let azure = <MemoizedFormattedMessage {...{
    ...echoFifth.on
  }} />;
  let birch = petal.formatMessage(echoFifth.on);
  let canyon = {
    id: "on",
    label: azure,
    ariaLabel: birch
  };
  let dew = <MemoizedFormattedMessage {...{
    ...echoFifth.off
  }} />;
  let ever = petal.formatMessage(echoFifth.off);
  let field = {
    id: "off",
    label: dew,
    ariaLabel: ever
  };
  let grain = [yarrow, canyon, field];
  return <EnsurePersonalizationCInit {...{
    label: trail,
    description: urn,
    control: <AppInitialPl selectedId={quiet} onSelect={seed} options={grain} />
  }} />;
}
function GeneralSettingsHelper55() {
  let ink = CodexPluginActionType(appScopeAtom),
    jadeite = useIntl(),
    {
      mode
    } = updateSubscriptionPlan(),
    kernel = useSettingValue(generalDesktopSettingsDefinitions.composerEnterBehavior),
    leaf = moveArrayItem(AppInitialFv(kernel));
  let maple = leaf,
    nimbus = function (anvil) {
      setSettingValue(ink, generalDesktopSettingsDefinitions.followUpQueueMode, anvil);
    };
  let opal = nimbus,
    plume = <MemoizedFormattedMessage {...{
      ...AppInitialAn.followUpBehavior
    }} />;
  let quillow = <MemoizedFormattedMessage {...{
    id: "settings.general.followUpQueueMode.description",
    defaultMessage: "Queue follow-ups while {appName} runs or steer the current run. Press {invertFollowUpShortcutLabel} to do the opposite for one message",
    description: "Description for follow-up queue mode setting",
    values: {
      appName: ensureImportSettingsGctInit,
      invertFollowUpShortcutLabel: maple
    }
  }} />;
  let root = <MemoizedFormattedMessage {...{
    ...AppInitialAn.queue
  }} />;
  let silk = jadeite.formatMessage(AppInitialAn.queue);
  let thorn = {
    id: "queue",
    label: root,
    ariaLabel: silk
  };
  let upland = <MemoizedFormattedMessage {...{
    ...AppInitialAn.steer
  }} />;
  let vista = jadeite.formatMessage(AppInitialAn.steer);
  let wisp = {
    id: "steer",
    label: upland,
    ariaLabel: vista
  };
  let yonder = [thorn, wisp];
  let zenith = <AppInitialPl selectedId={mode} onSelect={opal} options={yonder} />;
  return <EnsurePersonalizationCInit {...{
    className: "gap-6",
    label: plume,
    description: quillow,
    control: zenith
  }} />;
}
function GeneralSettingsHelper56() {
  let beacon = CodexPluginActionType(appScopeAtom),
    crag = useIntl(),
    dome = useSettingValue(generalDesktopSettingsDefinitions.showContextWindowUsage),
    eddy = <MemoizedFormattedMessage {...{
      ...AppInitialAn.showContextWindowUsage
    }} />;
  let fjord = hearth => {
    setSettingValue(beacon, generalDesktopSettingsDefinitions.showContextWindowUsage, hearth);
  };
  let glen = crag.formatMessage({
    id: "settings.general.contextUsageIndicator.ariaLabel",
    defaultMessage: "Show context window usage in the composer",
    description: "Accessible label for the composer context usage indicator setting toggle"
  });
  return <EnsurePersonalizationCInit {...{
    label: eddy,
    control: <AppInitialYC checked={dome} onChange={fjord} ariaLabel={glen} />
  }} />;
}
function GeneralSettingsHelper57(inlet) {
  let {
      ariaLabel,
      label,
      mode,
      selected,
      onSelect
    } = inlet,
    jetty = <input aria-label={ariaLabel} checked={selected} className="peer sr-only" name="appearance-theme" onChange={onSelect} type="radio" />;
  let knob = <GeneralSettingsHelper59 {...{
    mode,
    selected
  }} />;
  let ledge = selected ? "text-token-text-primary" : "text-token-text-secondary",
    mire = IntlProvider("truncate text-sm group-hover:text-token-text-primary", ledge);
  let nook = <span className={mire}>{label}</span>;
  return <label className="group flex min-w-0 cursor-interaction flex-col items-center gap-1.5 text-center">
      {jetty}
      {knob}
      {nook}
    </label>;
}
function GeneralSettingsHelper58(oxbow) {
  let {
      icon,
      label
    } = oxbow,
    pond = <span className="text-sm">{label}</span>;
  return <span className="flex items-center gap-1.5">
      {icon}
      {pond}
    </span>;
}
