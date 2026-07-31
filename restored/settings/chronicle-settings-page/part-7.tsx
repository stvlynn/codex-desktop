// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave5 stub-pass soft companions.
const deferredHostsS3: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const ensurePreviewQaInit: any = undefined;

// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 7/7
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { appServices } from "../../desktop/desktop-services";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconKA } from "../../icons/app-icon-ka";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { MarkdownContentCssClass } from "../../markdown/markdown-content-css-classes";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { applyChronicleConfigFeature, ensureChronicleConfigQueriesInit } from "../chronicle-config-queries";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft JSX companions.
function DeferredUiU(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function LearnMore(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function RealtimeVoiceHostId(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialYC: any = undefined;
const ChronicleSettingsPageHelper1: any = undefined;
const ChronicleSettingsPageHelper26: any = undefined;
const ChronicleSettingsPageHelper5: any = undefined;
const ChronicleSettingsPageHelper50: any = undefined;
const ChronicleSettingsPageHelper6: any = undefined;
const ChronicleSettingsPageHelper7: any = undefined;
const ChronicleSettingsPageHelper8: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function frost(lunar) {
  let {
      activationInProgress,
      currentState,
      isServiceUnavailable,
      onClearRequest,
      onOpenPermissions,
      onRetryActivation,
      onToggle,
      toggleDisabled
    } = lunar,
    moss = CodexPluginActionType(appScopeAtom),
    north = useIntl(),
    {
      data
    } = CodexPluginActionResult(amber),
    orbit = data == null ? null : alpha(data);
  let pine = orbit,
    quest = (pine?.applicationBundleIdentifiers.length ?? 0) + (pine?.urlDomains.length ?? 0),
    ridge = CodexPluginActionResult(reef),
    storm = currentState?.activationState === "waiting_for_permissions" || currentState?.recorderState === "stopped" && currentState.activationState === "idle",
    tide = isServiceUnavailable || currentState?.activationState === "failed",
    unity = activationInProgress || storm || tide,
    vale = toggleDisabled || ridge.isPending,
    wave = <ChronicleSettingsPageHelper5 {...{}} />;
  let apex = tide ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.unavailableWithLearnMore",
    defaultMessage: "Computer history is temporarily unavailable. <LearnMore>Learn more</LearnMore>",
    description: "Status shown when Codex cannot connect to Computer history, followed by a learn-more link",
    values: {
      learnMore: glide
    }
  }} /> : <ChronicleSettingsPageHelper6 {...{}} />;
  let brook = unity ? <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: vale,
    loading: activationInProgress,
    onClick: onRetryActivation,
    children: activationInProgress ? <MemoizedFormattedMessage {...{
      id: "settings.chronicle.activationInProgress",
      defaultMessage: "Resume",
      description: "Computer history action shown while activation is already in progress"
    }} /> : storm ? <MemoizedFormattedMessage {...{
      id: "settings.chronicle.finishSetup",
      defaultMessage: "Finish setup",
      description: "Retry Computer history startup while waiting for permissions"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.chronicle.tryAgain",
      defaultMessage: "Try again",
      description: "Retry Computer history startup after a failure"
    }} />
  }} /> : currentState?.recorderState === "running" || currentState?.recorderState === "paused" ? <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: toggleDisabled,
    loading: ridge.isPending,
    onClick: () => ridge.mutate(currentState?.recorderState, {
      onError: () => {
        moss.get(toastAtom).danger(<MemoizedFormattedMessage {...{
          id: "settings.chronicle.pauseResumeErrorToast",
          defaultMessage: "Computer history could not be paused or resumed",
          description: "Toast shown when pausing or resuming Computer history fails"
        }} />);
      }
    }),
    children: currentState?.recorderState === "paused" ? <MemoizedFormattedMessage {...{
      id: "settings.chronicle.resume",
      defaultMessage: "Resume",
      description: "Resume Computer history button"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.chronicle.pause",
      defaultMessage: "Pause",
      description: "Pause Computer history button"
    }} />
  }} /> : null;
  let cliff = north.formatMessage({
    id: "settings.chronicle.turnOffAriaLabel",
    defaultMessage: "Turn off Computer history",
    description: "Accessible label for the Computer history toggle"
  });
  let dusk = <AppInitialYC checked={true} disabled={vale} ariaLabel={cliff} onChange={onToggle} />;
  let elm = <div className="flex items-center gap-2">
      {brook}
      {dusk}
    </div>;
  let fern = <EnsurePersonalizationCInit {...{
    label: wave,
    description: apex,
    control: elm
  }} />;
  let grove, hill;
  hill = <ChronicleSettingsPageHelper7 {...{}} />;
  grove = <ChronicleSettingsPageHelper8 {...{}} />;
  let isle = quest === 0 ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.choose",
    defaultMessage: "Choose",
    description: "Choose Computer history permissions button"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.permissions.selectedCount",
    defaultMessage: "{count} selected",
    description: "Number of selected Computer history permission entries",
    values: {
      count: quest
    }
  }} />;
  let juniper = <EnsurePersonalizationCInit {...{
    label: hill,
    description: grove,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "composerSm",
      radius: "large",
      className: "!leading-4",
      disabled: isServiceUnavailable,
      onClick: onOpenPermissions,
      children: isle
    }} />
  }} />;
  let lagoon = <UseChromeAndCodeThemeSync {...{
    children: <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [fern, juniper]
      }} />
    }} />
  }} />;
  let meadow = <ChronicleSettingsPageHelper26 {...{
    isServiceUnavailable,
    onClearRequest,
    settings: data
  }} />;
  return <div className="flex flex-col gap-8">
      {lagoon}
      {meadow}
    </div>;
}
function glide(nest) {
  return <ChronicleSettingsPageHelper1 key={"computer-history-unavailable-learn-more"} {...{
    children: knoll.Children.toArray(nest)
  }} />;
}
function honey(oak) {
  let {
      onOpenChange,
      request
    } = oak,
    petal = CodexPluginActionType(appScopeAtom),
    quiet = CodexPluginActionResult(sage),
    rain = request != null,
    seed = event => {
      event.preventDefault();
      request != null && !quiet.isPending && quiet.mutate(request, {
        onSuccess: () => onOpenChange(false),
        onError: () => {
          petal.get(toastAtom).danger(<MemoizedFormattedMessage {...{
            id: "settings.chronicle.history.clearErrorToast",
            defaultMessage: "Computer history could not be cleared",
            description: "Toast shown when clearing Computer history fails"
          }} />);
        }
      });
    };
  let trail = <RealtimeVoiceHostId {...{
    asChild: true,
    children: <h2 className="sr-only">
            {<MemoizedFormattedMessage {...{
        id: "settings.chronicle.history.clearDialogAccessibleTitle",
        defaultMessage: "Clear computer history",
        description: "Accessible title for clear Computer history dialog"
      }} />}
          </h2>
  }} />;
  let urn = request?.scope,
    vine = <ChronicleSettingsPageHelper50 {...{
      scope: urn
    }} />;
  let wind = <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.clearDialogDescription",
    defaultMessage: "Your actions and any memories created from them will be deleted. This cannot be undone.",
    description: "Clear Computer history confirmation description"
  }} />;
  let yarrow = <DeferredUiU {...{
    children: [trail, <DeferredUiH {...{
      title: vine,
      subtitle: wind
    }} />]
  }} />;
  let azure = () => onOpenChange(false);
  let birch = <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.clearCancel",
    defaultMessage: "Cancel",
    description: "Cancel clearing Computer history"
  }} />;
  let canyon = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    type: "button",
    onClick: azure,
    children: birch
  }} />;
  let dew = request?.scope === "interval" ? <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.deleteConfirm",
    defaultMessage: "Delete",
    description: "Confirm deleting a Computer history item"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.chronicle.history.clearConfirm",
    defaultMessage: "Clear",
    description: "Confirm clearing Computer history"
  }} />;
  let ever = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: quiet.isPending,
    type: "submit",
    children: dew
  }} />;
  let field = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [canyon, ever]
    }} />
  }} />;
  let grain = <DeferredUiB {...{
    as: "form",
    onSubmit: seed,
    children: [yarrow, field]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: rain,
    onOpenChange,
    showDialogClose: true,
    children: grain
  }} />;
}
function iris(haven) {
  let {
    scope
  } = haven;
  switch (scope) {
    case "interval":
      {
        let ink;
        return <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.deleteItemTitle",
          defaultMessage: "Delete this history item?",
          description: "Delete Computer history item confirmation title"
        }} />;
      }
    case "last_ten_minutes":
      {
        let jadeite;
        return <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.clearTenMinutesTitle",
          defaultMessage: "Clear the last 10 minutes?",
          description: "Clear recent Computer history confirmation title"
        }} />;
      }
    case "last_hour":
      {
        let kernel;
        return <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.clearHourTitle",
          defaultMessage: "Clear the last hour?",
          description: "Clear recent Computer history confirmation title"
        }} />;
      }
    case "last_day":
      {
        let leaf;
        return <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.clearDayTitle",
          defaultMessage: "Clear the last day?",
          description: "Clear recent Computer history confirmation title"
        }} />;
      }
    case "all":
      {
        let maple;
        return <MemoizedFormattedMessage {...{
          id: "settings.chronicle.history.clearAllTitle",
          defaultMessage: "Clear all history?",
          description: "Clear all Computer history confirmation title"
        }} />;
      }
    case undefined:
      {
        let nimbus;
        return <></>;
      }
  }
}
var jewel, knoll, $;
esmInit(() => {
  jewel = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  knoll = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  ensurePreviewQaInit();
  ensureConfigQueryAtomsInit();
  deferredHostsS3();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  AppIconOi();
  codexCommandTheme();
  AppIconBO();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  bravo();
  coral();
  ultra();
  drift();
  eagle();
  topaz();
  zinc();
})();
