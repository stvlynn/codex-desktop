// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// AST split 4/7
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
import { chatgptConversationsGateAtom, localeMessagesAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
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
const violetFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialKpt: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVp: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZ7: any = undefined;
/** split companion stub */
const NativeContextMenuSurface: any = undefined;
/** split companion stub */
const screw: any = undefined;
/** split companion stub */
const setSettingValue: any = undefined;

const ReadLoginRouteQuerySnapshot: any = undefined;
const GeneralSettingsT: any = undefined;
const GeneralSettingsHelper63: any = undefined;
const GeneralSettingsHelper62: any = undefined;
const GeneralSettingsHelper61: any = undefined;
const GeneralSettingsHelper60: any = undefined;
const GeneralSettingsHelper56: any = undefined;
const GeneralSettingsHelper55: any = undefined;
const GeneralSettingsHelper54: any = undefined;
const GeneralSettingsHelper53: any = undefined;
const GeneralSettingsHelper52: any = undefined;
const GeneralSettingsHelper51: any = undefined;
const GeneralSettingsHelper49: any = undefined;
const GeneralSettingsHelper48: any = undefined;
const GeneralSettingsHelper47: any = undefined;
const GeneralSettingsHelper46: any = undefined;
const GeneralSettingsHelper44: any = undefined;
const GeneralSettingsHelper42: any = undefined;
const GeneralSettingsHelper39: any = undefined;
const GeneralSettingsHelper30: any = undefined;
const GeneralSettingsHelper26: any = undefined;
const GeneralSettingsHelper25: any = undefined;
const GeneralSettingsHelper21: any = undefined;
const GeneralSettingsHelper2: any = undefined;
const GeneralSettingsHelper1: any = undefined;
const AppInitialYC: any = undefined;
function GeneralSettingsHelper32() {
  let alpha = CodexPluginActionResult(AppInitialZ7),
    bravo = NativeContextMenuSurface("1372061905"),
    copper = NativeContextMenuSurface("2425897452"),
    delta = NativeContextMenuSurface(AppInitialVp);
  return <>
      {<ElectronOnly {...{
      electron: true,
      children: <GeneralSettingsHelper21 {...{}} />
    }} />}
      {<UseChromeAndCodeThemeSync {...{
      children: [<ElectronOnly {...{
        electron: true,
        children: <UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.general.groupTitle",
            defaultMessage: "General",
            description: "Heading for the general settings group"
          }} />
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: [alpha ? <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper39 {...{}} />
          }} /> : null, <GeneralSettingsT {...{}} />, <GeneralSettingsHelper42 {...{}} />, <GeneralSettingsHelper44 {...{}} />, <ElectronOnly {...{
            browser: true,
            chromeExtension: true,
            extension: true,
            children: <ReviewDeliverySettingsRow {...{}} />
          }} />, <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper38 {...{
              appName: ensureImportSettingsGctInit
            }} />
          }} />, alpha ? <>
                              {<ElectronOnly {...{
              electron: true,
              children: <GeneralSettingsHelper51 {...{}} />
            }} />}
                              {<ElectronOnly {...{
              electron: true,
              children: <GeneralSettingsHelper52 {...{}} />
            }} />}
                            </> : null, <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper63 {...{}} />
          }} />, <GeneralSettingsHelper30 {...{}} />, copper ? <ElectronOnly {...{
            electron: true,
            children: <_i {...{}} />
          }} /> : null, delta ? null : <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper26 {...{}} />
          }} />, <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper34 {...{}} />
          }} />]
        }} />
      }} />]
    }} />}
      {<UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.general.composer.groupTitle",
          defaultMessage: "Composer",
          description: "Heading for the Composer group on the General settings page"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: [<GeneralSettingsHelper56 {...{}} />, <GeneralSettingsHelper62 {...{}} />, <GeneralSettingsHelper55 {...{}} />]
        }} />
      }} />]
    }} />}
      {<ElectronOnly {...{
      electron: true,
      children: bravo ? <GeneralSettingsHelper36 {...{}} /> : null
    }} />}
      {<ElectronOnly {...{
      electron: true,
      children: <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            ...AppInitialAn.notifications
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: <ParseUrlOrFallback {...{
            children: <GeneralSettingsHelper25 {...{}} />
          }} />
        }} />]
      }} />
    }} />}
    </>;
}
function GeneralSettingsHelper33() {
  let echo = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      id: "settings.general.groupTitle",
      defaultMessage: "General",
      description: "Heading for the general settings group"
    }} />
  }} />;
  let falcon = <GeneralSettingsHelper44 {...{}} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [echo, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [falcon, <ElectronOnly {...{
          electron: true,
          children: <GeneralSettingsHelper38 {...{
            appName: "ChatGPT"
          }} />
        }} />]
      }} />
    }} />]
  }} />;
}
function GeneralSettingsHelper34() {
  let gamma = useNavigate(),
    harbor,
    indigo;
  harbor = <MemoizedFormattedMessage {...{
    ...AppInitialAn.openSourceLicenses
  }} />;
  indigo = <MemoizedFormattedMessage {...{
    id: "settings.openSourceLicenses.rowDescription",
    defaultMessage: "Third-party notices for bundled dependencies",
    description: "Description for the open source licenses row"
  }} />;
  let jade = () => {
    gamma("/settings/open-source-licenses", {
      state: {
        licensesBackPath: "/settings/general-settings"
      }
    });
  };
  let kite = <MemoizedFormattedMessage {...{
    id: "settings.openSourceLicenses.view",
    defaultMessage: "View",
    description: "Button label to open the open source licenses page"
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: harbor,
    description: indigo,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      onClick: jade,
      children: kite
    }} />
  }} />;
}
export function generalSettingsN() {
  let lemon = CodexPluginActionResult(AppInitialZ7),
    marble = useStepsProseAtom(),
    nickel = lemon && marble === "STEPS_COMMANDS";
  return <>
      {<ElectronOnly {...{
      electron: true,
      browser: true,
      children: <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.general.appearance.theme.groupTitle",
            defaultMessage: "Theme",
            description: "Heading for the theme section on the Appearance settings page"
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          className: "gap-4",
          children: [<ElectronOnly {...{
            electron: true,
            children: [<GeneralSettingsHelper46 {...{}} />, lemon ? <GeneralSettingsHelper2 {...{}} /> : null, <GeneralSettingsHelper1 {...{}} />]
          }} />, <ElectronOnly {...{
            browser: true,
            children: <ParseUrlOrFallback {...{
              children: <GeneralSettingsHelper47 {...{}} />
            }} />
          }} />]
        }} />]
      }} />
    }} />}
      {<UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.general.appearance.general.groupTitle",
          defaultMessage: "Preferences",
          description: "Heading for preferences on the Appearance settings page"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: [<ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper48 {...{}} />
          }} />, <ElectronOnly {...{
            electron: true,
            children: <GeneralSettingsHelper49 {...{}} />
          }} />, <ElectronOnly {...{
            electron: true,
            browser: true,
            children: <GeneralSettingsHelper54 {...{}} />
          }} />, <_a {...{
            codexLocalAccessAllowed: lemon
          }} />, nickel ? <GeneralSettingsHelper60 {...{}} /> : null, lemon ? <GeneralSettingsHelper53 {...{}} /> : null, <GeneralSettingsHelper61 {...{}} />]
        }} />
      }} />]
    }} />}
    </>;
}
function GeneralSettingsA() {
  let onyx = appServices.hotkeyWindowHotkeys;
  if (onyx == null) return null;
  return <GeneralSettingsHelper35 {...{
    hotkeyWindowHotkeys: onyx
  }} />;
}
function GeneralSettingsHelper35(pearl) {
  let {
      hotkeyWindowHotkeys
    } = pearl,
    quartz = CodexPluginActionType(appScopeAtom),
    river = useIntl(),
    slate = ensureGitRepoWatchAtomsInit(),
    [timber, umbra] = violetFifth.useState(false),
    [violet, willow] = violetFifth.useState(null),
    {
      data
    } = CodexPluginActionResult(ensureGpuTearingDebugSettingsInit),
    xenon = async topaz => {
      let {
        hotkey
      } = topaz;
      return hotkeyWindowHotkeys.setHotkey(hotkey);
    };
  let yellow = async ultra => {
    quartz.query.setData(ensureGpuTearingDebugSettingsInit, ultra.state);
    await Promise.all([slate(ToggleSortedIdList), slate(buildVscodeQueryKey("codex-command-keymap-state"))]);
  };
  let zinc = {
    mutationFn: xenon,
    onSuccess: yellow
  };
  let amber = noop(zinc),
    basalt = async function (vapor) {
      willow(null);
      try {
        let wheat = await amber.mutateAsync({
          hotkey: vapor
        });
        wheat.success || willow(wheat.error);
      } catch (yarn) {
        let zephyr = yarn;
        willow(zephyr instanceof Error ? zephyr.message : river.formatMessage({
          id: "settings.general.experimentalFeatures.hotkeyWindowHotkey.errorGeneric",
          defaultMessage: "Failed to update Popout Window hotkey.",
          description: "Fallback error shown when hotkey window hotkey update fails"
        }));
      }
    };
  let cedar = basalt;
  if (data?.supported === false) return null;
  let daisy = data?.configuredHotkey ?? null,
    ember = daisy == null ? null : moveArrayItem(daisy);
  let flint = ember,
    garnet = <MemoizedFormattedMessage {...{
      ...AppInitialAn.popoutWindowHotkey
    }} />;
  let hazel = <MemoizedFormattedMessage {...{
    id: "settings.general.experimentalFeatures.hotkeyWindowHotkey.description",
    defaultMessage: "Set a global shortcut for Popout Window. Leave unset to keep it off.",
    description: "Description for hotkey window hotkey setting"
  }} />;
  let ivory = violet ? <span className="text-token-error-foreground">
      {violet}
    </span> : null;
  let jasper = <div className="flex flex-col gap-1">
      {hazel}
      {ivory}
    </div>;
  let kelp = river.formatMessage({
    id: "settings.general.experimentalFeatures.hotkeyWindowHotkey.captureAriaLabel",
    defaultMessage: "Popout Window hotkey capture",
    description: "Aria label for hotkey window hotkey capture input"
  });
  let lotus = amber.isPending,
    mint = river.formatMessage({
      id: "settings.general.experimentalFeatures.hotkeyWindowHotkey.off",
      defaultMessage: "Off",
      description: "Status label when hotkey window hotkey is disabled"
    });
  let nova = river.formatMessage(AppInitialAn.popoutWindowHotkey);
  let olive = () => {
    umbra(false);
  };
  let prism, quill;
  prism = acorn => {
    umbra(false);
    cedar(acorn);
  };
  quill = () => {
    cedar(null);
  };
  let reef = () => {
    willow(null);
    umbra(true);
  };
  let sage = <HotkeySetterT {...{
    accelerator: daisy,
    acceleratorLabel: flint,
    captureAriaLabel: kelp,
    disabled: lotus,
    emptyLabel: mint,
    hotkeyName: nova,
    isCapturing: timber,
    onCancelCapture: olive,
    onCapture: prism,
    onClear: quill,
    onStartCapture: reef
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: garnet,
    description: jasper,
    control: sage
  }} />;
}
function GeneralSettingsHelper36() {
  let bloom = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      ...AppInitialAn.popoutWindow
    }} />
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [bloom, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [<GeneralSettingsA {...{}} />, <GeneralSettingsHelper37 {...{}} />]
      }} />
    }} />]
  }} />;
}
function GeneralSettingsHelper37() {
  let coral = CodexPluginActionType(appScopeAtom),
    drift = useIntl(),
    eagle = useSettingValue(generalDesktopSettingsDefinitions.hotkeyWindowProjectlessDefaultEnabled),
    frost,
    glide;
  frost = <MemoizedFormattedMessage {...{
    ...AppInitialAn.projectlessChat
  }} />;
  glide = <MemoizedFormattedMessage {...{
    id: "settings.general.popoutWindow.projectlessDefault.description",
    defaultMessage: "Start new chats outside of any project",
    description: "Description for the Popout Window projectless default setting"
  }} />;
  let honey = eagle === true,
    iris = knoll => {
      setSettingValue(coral, generalDesktopSettingsDefinitions.hotkeyWindowProjectlessDefaultEnabled, knoll);
    };
  let jewel = drift.formatMessage({
    id: "settings.general.popoutWindow.projectlessDefault.ariaLabel",
    defaultMessage: "Default Popout Window to standalone chat",
    description: "Aria label for the Popout Window projectless default setting toggle"
  });
  return <EnsurePersonalizationCInit {...{
    label: frost,
    description: glide,
    control: <AppInitialYC checked={honey} onChange={iris} ariaLabel={jewel} />
  }} />;
}
function GeneralSettingsHelper38(lunar) {
  let {
      appName
    } = lunar,
    moss = CodexPluginActionType(appScopeAtom),
    north = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    orbit = useSettingValue(AppInitialKpt.macMenuBarEnabled);
  if (platform !== "macOS") return null;
  let pine = <MemoizedFormattedMessage {...{
    ...AppInitialAn.showInMenuBar
  }} />;
  let quest = <MemoizedFormattedMessage {...{
    id: "settings.general.macMenuBar.description",
    defaultMessage: "Keep {appName} in the macOS menu bar when the main window is closed",
    description: "Description for the macOS menu bar setting",
    values: {
      appName
    }
  }} />;
  let ridge = orbit !== false,
    storm = vale => {
      setSettingValue(moss, AppInitialKpt.macMenuBarEnabled, vale);
    };
  let tide = north.formatMessage({
    id: "settings.general.macMenuBar.ariaLabel",
    defaultMessage: "Show {appName} in the menu bar",
    description: "Aria label for the macOS menu bar setting toggle"
  }, {
    appName
  });
  let unity = <AppInitialYC checked={ridge} onChange={storm} ariaLabel={tide} />;
  return <EnsurePersonalizationCInit {...{
    label: pine,
    description: quest,
    control: unity
  }} />;
}
