// Restored from ref/webview/assets/voice-settings-vkVvUNXN.js
// Wave FX — full polished body from `voice-settings-vkVvUNXN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 27 (verified 75/102).
// Careful split 1/3
/* split-lane-import-depth:1 */

/** FormatJS rich-text tag stub */
function At({
  children
}: {
  children?: unknown;
}) {
  return children;
}
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_FR_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { OPENAI_CURATED_ID } from "../../config/openai-curated-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { openMainWindowThenContinue } from "../../navigation/open-main-window-then-continue";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredT1 } from "../../ui/deferred-t1";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { codexProjectKey } from "../../utils/codex-project-key";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureHotkeySetterInit, HotkeySetter } from "../hotkey-setter";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";
import { useVoiceSettingsHostConfig } from "../use-voice-settings-host-config";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Cross-part stubs (same-package helpers live in sibling parts).
const VoiceSettingsHelper5: any = undefined;
const VoiceSettingsHelper7: any = undefined;
const realtimeVoiceCatalog: any = undefined;
/** Wave FX unresolved companion (missing-export:voice/deferred-voice-vc.ts) */
const deferredVoiceVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiA4@ui/deferred-ui-a4.ts) */
const AppInitialA4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiAC@ui/deferred-ui-ac.ts) */
const AppInitialAC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/read-write.ts) */
const readWrite: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFT: any = undefined;
/** Wave FX unresolved companion (jsx-collision:setAccountVoiceAndInvalidateCatalog@voice/set-account-voice-and-invalidate-catalog.ts) */
const AppInitialHC: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureDiffCommentComposerInit@editors/ensure-diff-comment-composer-init.ts) */
const AppInitialLj: any = undefined;
/** Wave FX unresolved companion (jsx-collision:macOS3@ui/mac-os3.ts) */
const AppInitialO4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:httpsOpenaiComFormLifeSciencesAccess@utils/https-openai-com-form-life-sciences-access.ts) */
const AppInitialOC: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/apply-u0000-u001-fu007-f2.ts) */
const applyU0000U001FU007F2: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FX unresolved companion (jsx-collision:formatSkillScopeLabelForSkill@skills/format-skill-scope-label-for-skill.ts) */
const AppInitialUj: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useStatsigGateAndComposerReady@hooks/use-statsig-gate-and-composer-ready.ts) */
const AppInitialXC: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-y4.ts) */
const deferredHostsY4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function VoiceSettingsHelper1({
  initialVoice,
  onOpenChange,
  onSave,
  open,
  previewEnabled = true,
  triggerContent,
  voices
}) {
  let marble = useIntl(),
    [nickel, onyx] = alpha.useState(initialVoice),
    [pearl, quartz] = alpha.useState(false),
    [river, slate] = alpha.useState(null),
    timber = async () => {
      quartz(true);
      slate(null);
      try {
        await onSave(nickel);
        onOpenChange(false);
      } catch {
        slate(marble.formatMessage({
          id: "settings.general.realtimeVoice.saveError",
          defaultMessage: "Unable to save voice",
          description: "Error shown when saving the realtime voice fails"
        }));
      } finally {
        quartz(false);
      }
    };
  return <UsePointerSurfaceInteractionGate {...{
    open,
    contentProps: {
      "aria-describedby": undefined
    },
    dialogCloseLabel: marble.formatMessage({
      id: "settings.general.realtimeVoice.dialog.close",
      defaultMessage: "Close",
      description: "Accessible label for closing the voice picker dialog"
    }),
    triggerContent,
    onOpenChange: umbra => {
      umbra && onyx(initialVoice);
      slate(null);
      onOpenChange(umbra);
    },
    size: "default",
    children: <DeferredUiB {...{
      as: "form",
      onSubmit: event => {
        event.preventDefault();
        timber();
      },
      children: [<DeferredUiU {...{
        children: [<DeferredUiH {...{
          className: "pr-8",
          title: <RealtimeVoiceHostId {...{
            children: <MemoizedFormattedMessage {...{
              id: "settings.general.realtimeVoice.dialog.title",
              defaultMessage: "Choose a voice",
              description: "Title of the realtime voice picker dialog"
            }} />
          }} />
        }} />, <AppInitialAC initialVoice={initialVoice} previewEnabled={previewEnabled} voices={voices} onVoiceChange={onyx} />, river == null ? null : <p role="alert" className="mt-2 text-center text-sm text-token-error-foreground">
                          {river}
                        </p>]
      }} />, <SetRemoteControlEnabledForHost {...{
        className: "mt-5",
        children: [<ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          disabled: pearl,
          type: "button",
          onClick: () => onOpenChange(false),
          children: <MemoizedFormattedMessage {...{
            id: "settings.general.realtimeVoice.dialog.cancel",
            defaultMessage: "Cancel",
            description: "Button to cancel changing the realtime voice"
          }} />
        }} />, <ReadLoginRouteQuerySnapshot {...{
          color: "primary",
          loading: pearl,
          type: "submit",
          children: <MemoizedFormattedMessage {...{
            id: "settings.general.realtimeVoice.dialog.done",
            defaultMessage: "Done",
            description: "Button to save the selected realtime voice"
          }} />
        }} />]
      }} />]
    }} />
  }} />;
}
var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    AppInitialOC();
  });
function at() {
  let violet = CodexPluginActionType(appScopeAtom),
    willow = NativeContextMenuSurface("2380644311"),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    {
      hostId
    } = useVoiceSettingsHostConfig(),
    xenon = CodexBrowserSurfaceActionType(AppInitialA4, hostId),
    yellow = CodexPluginActionResult(deferredHostsY4),
    zinc = {
      enabled: willow,
      hostId
    };
  let {
      data,
      error,
      refetch
    } = CodexPluginActionResult(deferredNavigationFT(AppInitialVC, zinc)),
    [amber, basalt] = echo.useState(false),
    cedar = data?.voices.find(olive => olive.slug === data.effectiveVoiceSlug);
  let daisy = cedar,
    ember = error != null || data?.accountVoiceStatus === "unavailable";
  if (!willow) return null;
  let flint;
  if (ember) {
    let prism = () => {
      refetch();
    };
    let quill = <MemoizedFormattedMessage {...{
      id: "settings.general.realtimeVoice.retry",
      defaultMessage: "Retry",
      description: "Button to retry loading compatible realtime voices"
    }} />;
    let reef;
    reef = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      onClick: prism,
      children: quill
    }} />;
    flint = reef;
  } else if (data == null || daisy == null) {
    let sage;
    sage = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      disabled: true,
      children: <MemoizedFormattedMessage {...{
        id: "settings.general.realtimeVoice.loading",
        defaultMessage: "Loading…",
        description: "Label shown while the selected realtime voice loads"
      }} />
    }} />;
    flint = sage;
  } else {
    let topaz = <span aria-hidden={true} className="size-3 rounded-full bg-token-charts-blue" />;
    let ultra = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      children: [topaz, daisy.name]
    }} />;
    let vapor = yarn => AppInitialHC(violet, yarn.slug);
    let wheat;
    wheat = <VoiceSettingsHelper1 {...{
      open: amber,
      initialVoice: daisy,
      triggerContent: ultra,
      voices: data.voices,
      onOpenChange: basalt,
      onSave: vapor
    }} />;
    flint = wheat;
  }
  let garnet = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      id: "settings.general.realtimeVoice",
      defaultMessage: "Voice chat",
      description: "Heading for realtime voice settings group"
    }} />
  }} />;
  let hazel = <MemoizedFormattedMessage {...{
    id: "settings.general.realtimeVoice.voice.label",
    defaultMessage: "Voice",
    description: "Label for the selected realtime voice"
  }} />;
  let ivory = <MemoizedFormattedMessage {...{
    id: "settings.general.realtimeVoice.voice.description",
    defaultMessage: "Choose the voice Codex uses for new voice chats",
    description: "Description for the realtime voice selector"
  }} />;
  let jasper = ember ? <span className="text-token-error-foreground">
      {<MemoizedFormattedMessage {...{
      id: "settings.general.realtimeVoice.loadError",
      defaultMessage: "Unable to load voice settings",
      description: "Error shown when realtime voice settings cannot load"
    }} />}
    </span> : null;
  let kelp = <div className="flex flex-col gap-1">
      {ivory}
      {jasper}
    </div>;
  let lotus = <EnsurePersonalizationCInit {...{
    label: hazel,
    description: kelp,
    control: flint
  }} />;
  let mint = <VoiceSettingsHelper3 {...{}} />;
  let nova = platform === "macOS" && xenon && yellow?.dynamicTools.appshotsEnabled ? <VoiceSettingsHelper2 {...{}} /> : null;
  return <UseChromeAndCodeThemeSync {...{
    children: [garnet, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [lotus, mint, nova]
      }} />
    }} />]
  }} />;
}
function VoiceSettingsHelper2() {
  let zephyr = CodexPluginActionType(appScopeAtom),
    acorn = useIntl(),
    bloom = useSettingValue(gamma.screenContextEnabled),
    coral,
    drift;
  coral = <MemoizedFormattedMessage {...{
    id: "settings.general.realtimeVoiceScreenContext.label",
    defaultMessage: "Screen context",
    description: "Label for realtime voice screen context setting"
  }} />;
  drift = <MemoizedFormattedMessage {...{
    id: "settings.general.realtimeVoiceScreenContext.description",
    defaultMessage: "Let Codex inspect the foreground app when you refer to what's on screen. macOS asks for access the first time Codex needs it",
    description: "Description for realtime voice screen context setting"
  }} />;
  let eagle = glide => {
    if (!glide) {
      setSettingValue(zephyr, gamma.screenContextEnabled, false);
      return;
    }
    openMainWindowThenContinue(zephyr, () => {
      setSettingValue(zephyr, gamma.screenContextEnabled, true);
    });
  };
  let frost = acorn.formatMessage({
    id: "settings.general.realtimeVoiceScreenContext.ariaLabel",
    defaultMessage: "Enable screen context for voice chat",
    description: "Aria label for the realtime voice screen context toggle"
  });
  return <EnsurePersonalizationCInit {...{
    label: coral,
    description: drift,
    control: <AppInitialYC checked={bloom} onChange={eagle} ariaLabel={frost} />
  }} />;
}
function VoiceSettingsHelper3() {
  let honey = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    iris = useQueryClient(),
    jewel = ensureGitRepoWatchAtomsInit(),
    {
      data
    } = CodexPluginActionResult(isStartingProcessExpired),
    [knoll, lunar] = echo.useState(false),
    [moss, north] = echo.useState(null),
    orbit = {
      onSuccess: meadow => {
        let nest = buildVscodeQueryKey("codex-command-keymap-state");
        iris.setQueryData(nest, meadow);
        jewel(nest);
      }
    };
  let pine = applyU0000U001FU007F2("set-codex-command-keybinding", orbit),
    quest = async function (oak) {
      north(null);
      try {
        await pine.mutateAsync({
          commandId: "realtimeVoice",
          update: oak == null ? {
            type: "clear"
          } : {
            type: "set",
            accelerator: oak
          }
        });
      } catch (petal) {
        let quiet = petal;
        north(quiet instanceof Error ? quiet.message : honey.formatMessage({
          id: "settings.general.realtimeVoiceHotkey.errorGeneric",
          defaultMessage: "Failed to update voice chat hotkey",
          description: "Fallback error shown when realtime voice hotkey update fails"
        }));
      }
    };
  let ridge = quest;
  if (data?.supported === false) return null;
  let storm, tide;
  storm = deferredT1("realtimeVoice", data, platform)[0]?.accelerator ?? null;
  tide = storm == null ? null : moveArrayItem(storm);
  let unity = tide,
    vale = <MemoizedFormattedMessage {...{
      id: "settings.general.realtimeVoiceHotkey.label",
      defaultMessage: "Voice chat hotkey",
      description: "Label for realtime voice hotkey setting"
    }} />;
  let wave = <MemoizedFormattedMessage {...{
    id: "settings.general.realtimeVoiceHotkey.description",
    defaultMessage: "Start voice chat from anywhere on desktop",
    description: "Description for realtime voice hotkey setting"
  }} />;
  let apex = moss ? <span className="text-token-error-foreground">{moss}</span> : null;
  let brook = <div className="flex flex-col gap-1">
      {wave}
      {apex}
    </div>;
  let cliff = honey.formatMessage({
    id: "settings.general.realtimeVoiceHotkey.captureAriaLabel",
    defaultMessage: "Voice chat hotkey capture",
    description: "Aria label for realtime voice hotkey capture input"
  });
  let dusk = pine.isPending,
    elm = honey.formatMessage({
      id: "settings.general.realtimeVoiceHotkey.off",
      defaultMessage: "Off",
      description: "Status label when realtime voice hotkey is disabled"
    });
  let fern = honey.formatMessage({
    id: "settings.general.realtimeVoiceHotkey.label",
    defaultMessage: "Voice chat hotkey",
    description: "Label for realtime voice hotkey setting"
  });
  let grove = () => {
    lunar(false);
  };
  let hill, isle;
  hill = rain => {
    lunar(false);
    ridge(rain);
  };
  isle = () => {
    ridge(null);
  };
  let juniper = () => {
    north(null);
    lunar(true);
  };
  let lagoon = <HotkeySetter {...{
    accelerator: storm,
    acceleratorLabel: unity,
    allowsBareModifiers: true,
    captureAriaLabel: cliff,
    disabled: dusk,
    emptyLabel: elm,
    hotkeyName: fern,
    isCapturing: knoll,
    onCancelCapture: grove,
    onCapture: hill,
    onClear: isle,
    onStartCapture: juniper
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: vale,
    description: brook,
    control: lagoon
  }} />;
}
var delta,
  echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    delta = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    readWrite();
    echo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialO4();
    AppInitialXC();
    codexProjectKey();
    ensureSettingsQueryAtomsInit();
    realtimeVoiceCatalog();
    macOS4();
    copilotDefaultModel();
    ensureContextMenuProviderInit();
    deferredHostsS3();
    ensureAppScopeInit();
    ensureHotkeySetterInit();
    ensureSettingsQueryAtomsInit();
    codexCommandTheme();
    deferredVoiceVC();
    AppInitialFC();
    ensureSkillsPageHelpersInit();
    scrollAppActionTargetTo();
    hostConfig2();
    AppInitialBC();
    copper();
    gamma = OPENAI_CURATED_ID();
  });
function indigo(seed) {
  return seed?.supported !== false;
}
var jade,
  kite,
  lemon = esmInit(() => {
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    scrollAppActionTargetTo();
    jade = scrollAppActionTargetByTurn(appScopeAtom, "global-dictation-history", {
      staleTime: readScrollTop.FIVE_SECONDS
    });
    kite = scrollAppActionTargetByTurn(appScopeAtom, "global-dictation-hotkey-state", {
      staleTime: readScrollTop.FIVE_SECONDS
    });
  });
export function VoiceSettings() {
  let trail = NativeContextMenuSurface("1244621283"),
    urn = NativeContextMenuSurface("4100906017"),
    vine = <SettingsSectionTitle slug="voice" />;
  let wind = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      id: "settings.voice.general",
      defaultMessage: "General",
      description: "Heading for general voice settings"
    }} />
  }} />;
  let yarrow, azure;
  yarrow = <UseChromeAndCodeThemeSync {...{
    children: [wind, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: <VoiceSettingsHelper5 {...{}} />
      }} />
    }} />]
  }} />;
  azure = <At {...{}} />;
  let birch = trail && urn ? <VoiceSettingsHelper7 {...{}} /> : null;
  return <OpenInBrowser {...{
    title: vine,
    children: <ElectronOnly {...{
      electron: true,
      children: [yarrow, azure, birch]
    }} />
  }} />;
}
