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
import { chatgptConversationsGateAtom, localeMessagesAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_ZE_Init } from "../../boundaries/composer-esm-inits";
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
const knurlFourth: any = undefined;
/** split companion stub */
const marbleFifth: any = undefined;
/** split companion stub */
const violetFifth: any = undefined;
/** split companion stub */
const willowFifth: any = undefined;
/** split companion stub */
const xenonFifth: any = undefined;
/** split companion stub */
const yellowFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialKX: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQ1: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQh: any = undefined;
/** split companion stub */
const DeferredUiF22: any = undefined;
/** split companion stub */
const NativeContextMenuSurface: any = undefined;
/** split companion stub */
const ReviewBranchPicker: any = undefined;
/** split companion stub */
const deferredUiAE: any = undefined;
/** split companion stub */
const deferredUiOE: any = undefined;
/** split companion stub */
const deferredUiOX3: any = undefined;
/** split companion stub */
const deferredUiRE: any = undefined;
/** split companion stub */
const weir: any = undefined;
/** split companion stub */
const hinge: any = undefined;
/** split companion stub */
const screw: any = undefined;
/** split companion stub */
const torque: any = undefined;
/** split companion stub */
const valve: any = undefined;
/** split companion stub */
const axle: any = undefined;
/** split companion stub */
const setSettingValue: any = undefined;
/** split companion stub */
const toggleThreadSidePanel: any = undefined;

const deferredUiREStub: any = undefined;
const GeneralSettingsHelper57: any = undefined;
const GeneralSettingsHelper27: any = undefined;
function GeneralSettingsHelper39() {
  let delta = CodexPluginActionType(appScopeAtom),
    echo = {
      cwd: null
    };
  let {
      data
    } = CodexBrowserSurfaceActionType(deferredUiOX3, echo),
    falcon,
    gamma,
    harbor,
    indigo,
    jade,
    kite,
    lemon,
    marble,
    nickel,
    onyx;
  {
    let river = data?.targets ?? [],
      slate = data?.preferredTarget ?? river.find(bravo)?.target ?? null,
      timber = river.filter(alpha),
      umbra = timber.find(item => item.target === slate);
    gamma = EnsurePersonalizationCInit;
    nickel = <MemoizedFormattedMessage {...{
      ...AppInitialAn.defaultFileOpenDestination
    }} />;
    onyx = <MemoizedFormattedMessage {...{
      id: "settings.ide.defaultOpenTarget.description",
      defaultMessage: "Where files and folders open by default",
      description: "Description for default open-in target setting"
    }} />;
    falcon = DropdownMenuPopover;
    jade = "menuFixed";
    let violet = timber.length === 0,
      willow = umbra ? <GeneralSettingsHelper43 {...{
        icon: umbra.icon,
        label: umbra.label
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.ide.defaultOpenTarget.placeholder",
        defaultMessage: "No targets found",
        description: "Placeholder for default open-in target select"
      }} />;
    kite = <DropdownTriggerButton disabled={violet}>
        {willow}
      </DropdownTriggerButton>;
    lemon = timber.length === 0;
    marble = "end";
    harbor = "max-h-80 overflow-y-auto";
    let xenon;
    xenon = event => <DropdownMenu.Item key={event.id} {...{
      onSelect: () => {
        delta.get(AppInitialKX).mutate({
          target: event.target
        });
      },
      children: <GeneralSettingsHelper43 {...{
        icon: event.icon,
        label: event.label
      }} />
    }} />;
    indigo = timber.map(xenon);
  }
  let pearl = <div className={harbor}>{indigo}</div>;
  let quartz = <DropdownMenuPopover {...{
    contentWidth: jade,
    triggerButton: kite,
    disabled: lemon,
    align: marble,
    children: pearl
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: nickel,
    description: onyx,
    control: quartz
  }} />;
}
function alpha(yellow) {
  return yellow.available !== false;
}
function bravo(zinc) {
  return zinc.default;
}
function GeneralSettingsHelper42() {
  let amber = CodexPluginActionType(appScopeAtom),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    basalt = platform === "windows",
    cedar = {
      enabled: basalt
    };
  let {
    data = [],
    isLoading
  } = CodexPluginActionResult(marbleFifth, cedar);
  let daisy = data,
    ember = useSettingValue(generalDesktopSettingsDefinitions.integratedTerminalShell);
  if (!basalt) return null;
  let flint, garnet, hazel, ivory, jasper, kelp, lotus, mint, nova;
  {
    let quill = yarn => yarn === "gitBash" || yarn === "wsl" ? daisy.includes(yarn) : true;
    let reef = willowFifth.filter(quill),
      sage = ember ?? "powershell",
      topaz = reef.find(item => item === sage) ?? reef[0],
      ultra = isLoading || topaz == null;
    garnet = EnsurePersonalizationCInit;
    mint = <MemoizedFormattedMessage {...{
      ...AppInitialAn.integratedTerminalShell
    }} />;
    nova = <MemoizedFormattedMessage {...{
      id: "settings.openIn.integratedTerminalShell.description",
      defaultMessage: "Choose which shell opens in the integrated terminal.",
      description: "Description for integrated terminal shell setting"
    }} />;
    flint = DropdownMenuPopover;
    let vapor = topaz ? <$i {...{
      value: topaz
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.openIn.integratedTerminalShell.unavailable",
      defaultMessage: "No shells available",
      description: "Placeholder shown when no integrated terminal shell options are available"
    }} />;
    jasper = <DropdownTriggerButton disabled={ultra}>
        {vapor}
      </DropdownTriggerButton>;
    kelp = "end";
    lotus = ultra;
    hazel = "w-[220px] max-w-xs";
    let wheat;
    wheat = zephyr => <DropdownMenu.Item key={zephyr} {...{
      onSelect: () => {
        setSettingValue(amber, generalDesktopSettingsDefinitions.integratedTerminalShell, zephyr);
      },
      RightIcon: sage === zephyr ? AppIconZlt : undefined,
      children: <span className="text-sm">
              {<$i {...{
          value: zephyr
        }} />}
            </span>
    }} />;
    ivory = reef.map(wheat);
  }
  let olive = <div className={hazel}>{ivory}</div>;
  let prism = <DropdownMenuPopover {...{
    triggerButton: jasper,
    align: kelp,
    disabled: lotus,
    children: olive
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: mint,
    description: nova,
    control: prism
  }} />;
}
function GeneralSettingsT() {
  let acorn = CodexPluginActionType(appScopeAtom),
    {
      data
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, CodexPluginActionResult(DeferredUiF22)),
    {
      data: _data
    } = AppInitialQ1(),
    {
      data: __data
    } = FkrDataBridge(),
    [bloom, coral] = violetFifth.useState(null),
    [drift, eagle] = violetFifth.useState(false),
    frost = _data?.platform === "win32" && __data?.distro != null && _data?.isVsCodeRunningInsideWsl === false,
    {
      data: ___data
    } = CodexPluginDirectoryEntrypoint(),
    glide = CodexRealtimeVoiceSessionEndReason(),
    honey = useSettingValue(generalDesktopSettingsDefinitions.runCodexInWsl),
    iris = CodexPluginActionResult(xenonFifth),
    [jewel] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_wsl_connections"),
    knoll = MemoizedPropBridge(jewel),
    lunar = jewel?.[0] ?? null,
    moss = lunar == null ? null : knoll?.[lunar.hostId] ?? null,
    north = NativeContextMenuSurface(WSL_REMOTE_CONNECTIONS_FEATURE_GATE_ID),
    orbit = AppInitialQh(data?.config, north);
  if (honey === undefined || !knurlFourth({
    hasUsedLegacyWslAgentEnvironment: iris,
    remoteWslConnectionsEnabled: orbit,
    runCodexInWsl: honey,
    supportsRunningInWsl: frost
  })) return null;
  yellowFifth ??= honey;
  let pine = [{
      value: false,
      label: <MemoizedFormattedMessage {...{
        ...AppInitialAn.windowsNative
      }} />,
      description: <MemoizedFormattedMessage {...{
        id: "settings.agentEnvironment.windowsNative.description",
        defaultMessage: "Run the agent directly in Windows",
        description: "Description for the Windows native agent environment option"
      }} />
    }, {
      value: true,
      label: <MemoizedFormattedMessage {...{
        ...AppInitialAn.windowsSubsystemForLinux
      }} />,
      description: <MemoizedFormattedMessage {...{
        id: "settings.agentEnvironment.wsl.description",
        defaultMessage: "Run the agent inside WSL",
        description: "Description for the WSL agent environment option"
      }} />
    }],
    quest = pine.find(item => item.value === honey) ?? pine[0],
    ridge = pine.find(item => item.value === yellowFifth) ?? quest,
    storm = honey !== yellowFifth,
    tide = glide.isPending || drift;
  return <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      ...AppInitialAn.agentEnvironment
    }} />,
    description: <>
            {<MemoizedFormattedMessage {...{
        id: "settings.agentEnvironment.description",
        defaultMessage: "Choose where the agent runs on Windows",
        description: "Description for the agent environment setting"
      }} />}
            {orbit && jewel != null ? <>
                <span className="block" />
                {<GeneralSettingsHelper27 {...{
          wslConnectionHostId: lunar?.hostId ?? null,
          wslConnectionState: moss,
          onCreateWslProject: unity => {
            sidebarThreadKeyToPath({
              hostId: unity
            });
          }
        }} />}
              </> : null}
            {storm ? <>
                <span className="block" />
                <span className="text-token-error-foreground">
                  {<MemoizedFormattedMessage {...{
            id: "settings.agentEnvironment.restartNotice",
            defaultMessage: "Restart {appName} to apply this change. The agent is still running in {currentEnvironment}.",
            description: "Notice shown when the selected agent environment differs from the current pre-restart environment",
            values: {
              appName: ensureImportSettingsGctInit,
              currentEnvironment: ridge.label
            }
          }} />}
                </span>
              </> : null}
            {bloom ? <>
                <span className="block" />
                <span className="text-token-error-foreground">
                  {<MemoizedFormattedMessage {...{
            id: "settings.agentEnvironment.wslBashError",
            defaultMessage: "Codex CLI can't run in {distributionName} because /usr/bin/bash is missing",
            description: "Error shown when the selected WSL distribution does not include the bash path Codex needs",
            values: {
              distributionName: bloom.distro ?? <MemoizedFormattedMessage {...{
                id: "settings.agentEnvironment.wslBashError.unknownDistribution",
                defaultMessage: "this WSL distribution",
                description: "Fallback distribution name shown when the selected WSL distribution is not available"
              }} />
            }
          }} />}
                </span>
              </> : null}
          </>,
    control: <DropdownMenuPopover {...{
      triggerButton: <DropdownTriggerButton disabled={tide}>
                  {drift ? <VSCODE_EDITOR_ID {...{
          className: "icon-2xs text-token-text-secondary"
        }} /> : null}
                  {quest.label}
                </DropdownTriggerButton>,
      disabled: tide,
      align: "end",
      children: <div className="w-[320px] max-w-xs space-y-1">
                  {pine.map(item => <DropdownMenu.Item key={String(item.value)} {...{
          onSelect: () => {
            (async () => {
              if (coral(null), !item.value) {
                honey && acorn.set(xenonFifth, true);
                await setSettingValue(acorn, generalDesktopSettingsDefinitions.runCodexInWsl, item.value);
                return;
              }
              eagle(true);
              try {
                let vale;
                try {
                  vale = await invokeDesktopRpc("wsl-bash-availability");
                } catch {
                  coral({
                    distro: null
                  });
                  return;
                }
                if (!vale.available) {
                  coral({
                    distro: vale.distro
                  });
                  return;
                }
                ___data != null && (await glide.mutateAsync(null));
                await setSettingValue(acorn, generalDesktopSettingsDefinitions.runCodexInWsl, item.value);
              } finally {
                eagle(false);
              }
            })();
          },
          RightIcon: honey === item.value ? AppIconZlt : undefined,
          children: <div className="flex flex-col items-start gap-0.5">
                            <span className="text-sm">{item.label}</span>
                            <span className="text-xs text-token-text-secondary">
                              {item.description}
                            </span>
                          </div>
        }} />)}
                </div>
    }} />
  }} />;
}
function $i(wave) {
  let {
      value
    } = wave,
    apex = codexMicroAgentSource[value];
  return <>{apex}</>;
}
function GeneralSettingsHelper43(brook) {
  let {
      icon,
      label
    } = brook,
    cliff = icon ? <img alt={typeof label == "string" ? label : ""} src={icon} className="icon-sm" /> : null;
  let dusk = <span className="truncate">{label}</span>;
  return <span className="flex items-center gap-1.5">
      {cliff}
      {dusk}
    </span>;
}
function GeneralSettingsHelper44() {
  let elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    grove = AddContextSquareIcon("72216192")?.get("enable_i18n", true),
    [hill, isle] = violetFifth.useState(""),
    [juniper, lagoon] = violetFifth.useState(false),
    meadow = useSettingValue(generalDesktopSettingsDefinitions.localeOverride),
    nest = [{
      code: SwitchToSplitDiffButton,
      label: deferredUiRE(SwitchToSplitDiffButton, SwitchToSplitDiffButton),
      localizedLabel: deferredUiRE("en", fern.locale)
    }, ...ReviewBranchPicker().map(item => ({
      code: item.locale,
      label: deferredUiRE(item.locale, item.locale),
      localizedLabel: deferredUiRE(item.locale, fern.locale)
    }))].sort(copper);
  let oak = nest,
    petal = toggleThreadSidePanel(meadow),
    quiet = oak.find(item => deferredUiOE(item.code, meadow)) ?? null;
  let rain = quiet,
    seed;
  bb0: {
    let opal = hill.trim().toLowerCase();
    if (!opal) {
      seed = oak;
      break bb0;
    }
    seed = oak.filter(item => item.label.toLowerCase().includes(opal) || item.localizedLabel.toLowerCase().includes(opal));
  }
  let trail = seed;
  if (!grove) return null;
  let urn = plume => {
    logProductEvent(elm, CODEX_PROFILE_EDIT_EVENT_TYPE, {
      selection: plume ?? "auto",
      surface: "settings"
    });
  };
  let vine = urn,
    wind = fern.formatMessage({
      id: "settings.ide.language.search",
      defaultMessage: "Search languages",
      description: "Search placeholder for language picker"
    });
  let yarrow = wind,
    azure,
    birch;
  azure = <MemoizedFormattedMessage {...{
    ...AppInitialAn.language
  }} />;
  birch = <MemoizedFormattedMessage {...{
    id: "settings.ide.language.description",
    defaultMessage: "Language for the app UI",
    description: "Description for language setting"
  }} />;
  let canyon = oak.length === 0,
    dew = oak.length === 0,
    ever = rain ? rain.label : fern.formatMessage({
      id: "settings.ide.language.auto",
      defaultMessage: "Auto detect",
      description: "Fallback label for auto language detect"
    });
  let field = <DropdownTriggerButton disabled={dew}>
      {ever}
    </DropdownTriggerButton>;
  let grain = <deferredUiREStub.Input {...{
    className: "mb-1",
    value: hill,
    onValueChange: isle,
    placeholder: yarrow
  }} />;
  let haven = petal == null ? AppIconZlt : undefined,
    ink = () => {
      lagoon(false);
      (async () => {
        try {
          await setSettingValue(elm, generalDesktopSettingsDefinitions.localeOverride, null);
          vine(null);
        } catch {}
      })();
    };
  let jadeite = <MemoizedFormattedMessage {...{
    ...AppInitialAn.autoDetectLanguage
  }} />;
  let kernel = <deferredUiREStub.Action {...{
    RightIcon: haven,
    onClick: ink,
    children: jadeite
  }} />;
  let leaf;
  {
    let quillow;
    quillow = event => {
      let root = deferredUiOE(event.code, meadow);
      return <deferredUiREStub.Item key={event.code} {...{
        RightIcon: root ? AppIconZlt : undefined,
        value: event.code,
        onSelect: () => {
          lagoon(false);
          (async () => {
            try {
              let silk = deferredUiAE(event.code) ? SwitchToSplitDiffButton : event.code;
              await setSettingValue(elm, generalDesktopSettingsDefinitions.localeOverride, silk);
              vine(silk);
            } catch {}
          })();
        },
        children: <span className="truncate">
                {event.label}
                {event.localizedLabel === event.label ? "" : ` • ${event.localizedLabel}`}
              </span>
      }} />;
    };
    leaf = trail.map(quillow);
  }
  let maple = <div className="max-h-80 overflow-y-auto">
      {<deferredUiREStub.List {...{
      children: leaf
    }} />}
    </div>;
  let nimbus = <deferredUiREStub.Root {...{
    label: yarrow,
    children: [grain, kernel, maple]
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: azure,
    description: birch,
    control: <TriggerMenuPopover contentWidth="menuWide" disabled={canyon} align="end" open={juniper} onOpenChange={lagoon} triggerButton={field}>
            {nimbus}
          </TriggerMenuPopover>
  }} />;
}
function copper(thorn, upland) {
  return thorn.label.localeCompare(upland.label);
}
