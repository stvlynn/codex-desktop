// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// AST split 2/7
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
const clampFourth: any = undefined;
/** split companion stub */
const drillFourth: any = undefined;
/** split companion stub */
const gammaFifth: any = undefined;
/** split companion stub */
const gasketFourth: any = undefined;
/** split companion stub */
const handleFourth: any = undefined;
/** split companion stub */
const insertFourth: any = undefined;
/** split companion stub */
const leverFourth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialZ: any = undefined;
/** split companion stub */
const quarry: any = undefined;
/** split companion stub */
const rapids: any = undefined;
/** split companion stub */
const spur: any = undefined;
/** split companion stub */
const tor: any = undefined;
/** split companion stub */
const updraft: any = undefined;
/** split companion stub */
const yard: any = undefined;
/** split companion stub */
const cog: any = undefined;

const SetRemoteControlEnabledForHost: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const GeneralSettingsHelper23: any = undefined;
const DeferredUiUStub: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialWo: any = undefined;
const AppInitialM: any = undefined;
function GeneralSettingsHelper5(alpha) {
  let {
      exampleValue,
      isImportValueValid,
      isOpen,
      value,
      variantLabel,
      onOpenChange,
      onSubmit,
      onValueChange
    } = alpha,
    bravo = useIntl(),
    copper = bravo.formatMessage({
      id: "settings.general.appearance.chromeTheme.import.dialog.title",
      defaultMessage: "Import theme",
      description: "Title for the theme import dialog"
    });
  let delta = copper,
    echo = {
      "aria-describedby": undefined
    };
  let falcon = <DeferredUiUStub {...{
    children: [<RealtimeVoiceHostId {...{
      asChild: true,
      children: <h2 className="sr-only">{delta}</h2>
    }} />, <DeferredUiH {...{
      title: delta
    }} />]
  }} />;
  let gamma = bravo.formatMessage({
    id: "settings.general.appearance.chromeTheme.import.dialog.ariaLabel",
    defaultMessage: "{variant} theme share string",
    description: "Aria label for the theme import text area"
  }, {
    variant: variantLabel
  });
  let harbor = event => {
    onValueChange(event.target.value);
  };
  let indigo = <DeferredUiUStub {...{
    children: <input aria-label={gamma} autoFocus={true} className="h-9 w-full rounded-xl border border-token-input-border bg-token-input-background px-3 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" placeholder={exampleValue} spellCheck={false} type="text" value={value} onChange={harbor} />
  }} />;
  let jade = () => {
    onOpenChange(false);
  };
  let kite = <MemoizedFormattedMessage {...{
    id: "settings.general.appearance.chromeTheme.import.dialog.cancel",
    defaultMessage: "Cancel",
    description: "Button label for canceling the theme import dialog"
  }} />;
  let lemon = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "toolbar",
    onClick: jade,
    children: kite
  }} />;
  let marble = !isImportValueValid,
    nickel = <MemoizedFormattedMessage {...{
      id: "settings.general.appearance.chromeTheme.import.dialog.submit",
      defaultMessage: "Import theme",
      description: "Button label for submitting a theme import"
    }} />;
  let onyx = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    disabled: marble,
    size: "toolbar",
    onClick: onSubmit,
    children: nickel
  }} />;
  let pearl = <DeferredUiUStub {...{
    children: <SetRemoteControlEnabledForHost {...{
      className: AppInitialZ,
      children: [lemon, onyx]
    }} />
  }} />;
  let quartz = <DeferredUiB {...{
    children: [falcon, indigo, pearl]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: isOpen,
    onOpenChange,
    size: "default",
    contentProps: echo,
    children: quartz
  }} />;
}
function GeneralSettingsHelper6(river) {
  let {
      ariaLabel,
      codeThemes,
      selectedCodeTheme,
      theme,
      variant,
      onSelect
    } = river,
    slate = <CodeThemePreviewGlyph theme={theme} />;
  let timber = <span className="truncate text-sm leading-[18px]">
      {selectedCodeTheme.label}
    </span>;
  let umbra = <DropdownTriggerButton aria-label={ariaLabel} className="h-9 w-[11rem] justify-between rounded-lg border border-token-border bg-token-bg-primary px-2.5 py-0 shadow-sm max-sm:w-full" contentClassName="gap-2" chevronClassName="icon-xs opacity-65">
      {slate}
      {timber}
    </DropdownTriggerButton>;
  let violet = <GeneralSettingsHelper7 {...{
    codeThemes,
    selectedCodeTheme,
    theme,
    variant,
    onSelect
  }} />;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "menuWide",
    triggerButton: umbra,
    children: violet
  }} />;
}
function GeneralSettingsHelper7(willow) {
  let {
      codeThemes,
      selectedCodeTheme,
      theme,
      variant,
      onSelect
    } = willow,
    xenon;
  {
    let basalt;
    basalt = cedar => ({
      queryKey: ["code-theme-preview-seed", variant, cedar.id],
      queryFn: () => resolveOnboardingCatalogKind(cedar.id, variant),
      staleTime: 1 / 0
    });
    xenon = codeThemes.map(basalt);
  }
  let yellow = {
    queries: xenon
  };
  let zinc = useDvtBindable(yellow),
    amber;
  {
    let daisy;
    daisy = (ember, flint) => {
      let garnet = zinc[flint]?.data;
      return <DropdownMenu.Item key={ember.id} {...{
        RightIcon: ember.id === selectedCodeTheme.id ? AppIconZlt : undefined,
        onSelect: () => {
          onSelect(ember.id);
        },
        children: <div className="flex items-center gap-2">
                <CodeThemePreviewGlyph theme={{
            accent: garnet?.accent ?? theme.accent,
            ink: garnet?.ink ?? theme.ink,
            surface: garnet?.surface ?? theme.surface
          }} />
                <span className="truncate">{ember.label}</span>
              </div>
      }} />;
    };
    amber = codeThemes.map(daisy);
  }
  return <DropdownMenu.Section {...{
    children: <div className="max-h-80 overflow-y-auto pb-1">
            {amber}
          </div>
  }} />;
}
function GeneralSettingsHelper8(hazel) {
  let {
      ariaLabel,
      value,
      onChange
    } = hazel,
    [ivory, jasper] = gammaFifth.useState(false),
    [kelp, lotus] = gammaFifth.useState(null),
    mint = drift => {
      jasper(drift);
      drift || lotus(null);
    };
  let nova = gasketFourth(value);
  let olive = {
    backgroundColor: value,
    color: nova
  };
  let prism = gasketFourth(value);
  let quill = `1px solid color-mix(in srgb, ${prism} 18%, ${value})`,
    reef = {
      backgroundColor: value,
      border: quill
    };
  let sage = <span aria-hidden={true} className="sr-only" />;
  let topaz = <AppInitialM asChild={true}>
      <button className="h-3.5 w-3.5 shrink-0 rounded-full disabled:cursor-default" style={reef} type="button">
        {sage}
      </button>
    </AppInitialM>;
  let ultra = kelp ?? value,
    vapor = ultra.toUpperCase();
  let wheat = () => {
    lotus(null);
  };
  let yarn = event => {
    let eagle = handleFourth(event.target.value),
      frost = insertFourth(eagle);
    if (frost == null) {
      lotus(eagle);
      return;
    }
    lotus(null);
    onChange(frost);
  };
  let zephyr = <input aria-label={ariaLabel} className="min-w-0 flex-1 bg-transparent text-xs uppercase tabular-nums outline-hidden disabled:cursor-default" spellCheck={false} type="text" value={vapor} onClick={drillFourth} onBlur={wheat} onChange={yarn} onPointerDown={clampFourth} />;
  let acorn = <div className="relative flex h-7 w-full max-w-[8.5rem] items-center gap-2 rounded-lg border border-transparent px-2 shadow-sm max-sm:max-w-none" style={olive}>
      {topaz}
      {zephyr}
    </div>;
  let bloom = glide => {
    onChange(glide);
  };
  let coral = <ToggleSortedIdList {...{
    align: "end",
    className: "w-auto rounded-xl p-3",
    sideOffset: 8,
    onOpenAutoFocus: leverFourth,
    children: <AppInitialWo className="h-34 w-34" color={value} onChange={bloom} />
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: ivory,
    onOpenChange: mint,
    children: [acorn, coral]
  }} />;
}
