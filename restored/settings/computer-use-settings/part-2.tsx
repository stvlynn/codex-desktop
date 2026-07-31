// Restored from ref/webview/assets/computer-use-settings-Bhf26OaV.js
// Wave5 stub-pass soft companions.
const NativeContextMenuSurface: any = undefined;
const _n: any = undefined;
const browserUseSettingsP: any = undefined;

// Wave FX — full polished body from `computer-use-settings-Bhf26OaV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 92/130).
// Wave5d — FZ repair from fy-clean L=2256 sus=29; JSX PascalCase + careful split.
// Wave5d careful split 2/4
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { isCustomAuthMethod } from "../../auth/is-custom-auth-method";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureBrowserUseGateInit, useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_MR_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useMatch, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { isCommandEnabledForDesktopFlags } from "../../commands/is-command-enabled-for-desktop-flags";
import { ensureBrowserPluginMentionMessagesInit } from "../../composer/browser-plugin-mention-messages";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { areTurnsRelated } from "../../conversation/is-turn-ancestor";
import { ensureWebviewMicroCommandsClusterInit } from "../../desktop/ensure-webview-micro-commands-cluster-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { LOCAL_CONVERSATION_ROUTE } from "../../routing/local-conversation-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredT } from "../../ui/deferred-t";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { macOS4 } from "../../ui/mac-os4";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensureKeyboardShortcutsGtInit, ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureBrowserUseSettingsInit } from "../browser-use-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow, SettingsLoadingRow } from "../settings-loading-row";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

// Wave5d soft JSX companions.
function BrowserUseSettingsC(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsG(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsM(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsS(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsV(props: {
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

// Wave5d soft stubs.
const AppInitialD: any = undefined;
const AppInitialDt: any = undefined;
const AppInitialKt: any = undefined;
const AppInitialNi: any = undefined;
const ComputerUseSettingsHelper10: any = undefined;
const ComputerUseSettingsHelper11: any = undefined;
const ComputerUseSettingsHelper2: any = undefined;
const ComputerUseSettingsHelper9: any = undefined;
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
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const deferredUiB: any = undefined;
const deferredUiEnt: any = undefined;
const deferredUiGR: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function petal(urn) {
  let {
      computerUseAvailability,
      platform
    } = urn,
    vine = useIntl(),
    wind = useNavigate(),
    {
      selectedHostId
    } = useSelectedHost(),
    yarrow = ensureSteeringUserMessageClusterInit(selectedHostId).kind === "local",
    {
      data
    } = CodexBrowserSurfaceActionType(isCustomAuthMethod, selectedHostId),
    azure = {
      hostId: selectedHostId
    };
  let birch = useExternalBrowserUseGate(azure),
    canyon = {
      hostId: selectedHostId
    };
  let {
      isUpdating,
      setAppEnabled: dew,
      updatingAppId
    } = AppInitialD(canyon),
    ever = [];
  let field = matchesOptionalHostPluginIds(selectedHostId, ever),
    grain = useHomeDirectory(selectedHostId),
    haven = NativeContextMenuSurface(AppIconPR),
    ink = NativeContextMenuSurface(ensureConversationPageEsm_MR_Init),
    jadeite = browserUseSettingsP(field.availablePlugins, river, grain);
  let kernel = jadeite,
    leaf = alpha(field.availablePlugins, grain);
  let maple = leaf,
    nimbus = field.availablePlugins.find(deferredUiGR) ?? null,
    opal = ink ? field.availablePlugins.find(deferredConversationR) ?? null : null,
    plume = [{
      appControlId: "microsoft-excel-document-control-app",
      description: pearl.microsoftExcelDescription,
      disableTooltip: pearl.microsoftExcelDisableTooltip,
      enableTooltip: pearl.microsoftExcelEnableTooltip,
      icon: bravo,
      plugin: nimbus,
      title: pearl.microsoftExcel,
      toggleAriaLabel: pearl.microsoftExcelToggleAria
    }, {
      appControlId: "microsoft-powerpoint-document-control-app",
      description: pearl.microsoftPowerPointDescription,
      disableTooltip: pearl.microsoftPowerPointDisableTooltip,
      enableTooltip: pearl.microsoftPowerPointEnableTooltip,
      icon: olive,
      plugin: opal,
      title: pearl.microsoftPowerPoint,
      toggleAriaLabel: pearl.microsoftPowerPointToggleAria
    }],
    quillow = maple?.plugin.installed === true,
    root = quillow && maple.plugin.enabled,
    silk = data?.find(rain)?.isEnabled ?? true,
    thorn = isUpdating && updatingAppId === basalt,
    upland = {
      hostId: selectedHostId,
      plugin: maple,
      shouldReadBrowserExtension: quillow
    };
  let vista = seed(upland),
    wisp = [],
    yonder = maple == null && yarrow && !birch.isLoading && !birch.allowed ? [{
      description: <MemoizedFormattedMessage {...{
        ...areTurnsRelated.restrictedAvailabilityDescription
      }} />,
      icon: <img alt="" className="h-full w-full object-contain" src={quartz} />,
      id: "chrome-unavailable",
      title: <MemoizedFormattedMessage {...{
        ...pearl.googleChrome
      }} />
    }] : [];
  let zenith = yonder;
  if (computerUseAvailability.available && kernel != null) {
    let crag, dome;
    crag = <MemoizedFormattedMessage {...{
      ...pearl.anyApp
    }} />;
    dome = <MemoizedFormattedMessage {...{
      id: "settings.computerUse.anyApp.description",
      defaultMessage: "Let ChatGPT control apps on your computer",
      description: "Description for the Computer Use plugin control row"
    }} />;
    let eddy;
    eddy = {
      plugin: kernel,
      title: crag,
      description: dome
    };
    wisp.push(eddy);
  }
  if (maple != null) {
    let fjord = <MemoizedFormattedMessage {...{
      ...pearl.googleChrome
    }} />;
    let glen = <ComputerUseSettingsHelper2 {...{
      status: vista
    }} />;
    let hearth = root ? <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: () => {
        wind(_n);
      },
      size: "toolbar",
      children: <MemoizedFormattedMessage {...{
        id: "settings.computerUse.chrome.manage",
        defaultMessage: "Manage",
        description: "Button label to manage Google Chrome settings"
      }} />
    }} /> : null;
    let inlet;
    inlet = {
      plugin: maple,
      title: fjord,
      description: glen,
      action: hearth
    };
    wisp.push(inlet);
  }
  if (haven && (platform === "macOS" || platform === "windows")) for (let jetty of plume) {
    if (jetty.plugin == null) continue;
    let knob = jetty.plugin;
    wisp.push({
      ...(knob.plugin.installed && knob.plugin.enabled ? {
        kind: "app",
        enabled: silk,
        id: jetty.appControlId,
        isPending: thorn,
        onToggleEnabled: ledge => {
          dew({
            appId: basalt,
            appName: vine.formatMessage(jetty.title),
            enabled: ledge
          }).catch(quiet);
        },
        toggleAriaLabel: vine.formatMessage(jetty.toggleAriaLabel),
        toggleTooltip: silk ? <MemoizedFormattedMessage {...{
          ...jetty.disableTooltip
        }} /> : <MemoizedFormattedMessage {...{
          ...jetty.enableTooltip
        }} />
      } : {
        displayName: vine.formatMessage(jetty.title),
        plugin: knob
      }),
      icon: <img alt="" className="h-full w-full object-contain" src={jetty.icon} />,
      title: <MemoizedFormattedMessage {...{
        ...jetty.title
      }} />,
      description: <MemoizedFormattedMessage {...{
        ...jetty.description
      }} />
    });
  }
  let anvil, beacon;
  return anvil = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.install.empty",
    defaultMessage: "Computer Use plugins unavailable",
    description: "Empty state shown when computer use plugins cannot be found"
  }} />, beacon = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.install.button",
    defaultMessage: "Install",
    description: "Button label for installing a computer use plugin"
  }} />, <BrowserUseSettingsM {...{
    emptyStateTitle: anvil,
    installButtonLabel: beacon,
    items: wisp,
    pluginsQuery: field,
    selectedHostId,
    unavailableItems: zenith
  }} />;
}
function quiet() {}
function rain(mire) {
  return mire.id === basalt;
}
function seed(nook) {
  let {
      hostId,
      plugin,
      shouldReadBrowserExtension
    } = nook,
    oxbow = {
      enabled: shouldReadBrowserExtension,
      hostId,
      plugin
    };
  let pond = AppInitialDt(oxbow),
    quarry = pond?.[0] ?? null,
    rapids = shouldReadBrowserExtension && pond === undefined,
    spur = quarry?.id ?? null,
    tor = {
      browserExtensionId: spur
    };
  let updraft = AppInitialKt(tor),
    verge = rapids || updraft.isLoading;
  return {
    browserExtension: quarry,
    isConnected: updraft.isConnected,
    isInstalled: updraft.isConnected,
    isLoading: verge
  };
}
function trail() {
  let weir = CodexPluginActionType(appScopeAtom),
    {
      selectedHostId
    } = useSelectedHost(),
    yard = [];
  let anchor = matchesOptionalHostPluginIds(selectedHostId, yard),
    bolt = useHomeDirectory(selectedHostId),
    cog = alpha(anchor.installedPlugins, bolt);
  let disc = cog,
    edge = disc?.plugin.installed === true,
    forge = edge && disc.plugin.enabled,
    gear = {
      hostId: selectedHostId,
      plugin: disc,
      shouldReadBrowserExtension: edge
    };
  let hinge = seed(gear),
    iron = hinge.browserExtension,
    joint = iron?.id,
    keystone = hinge.isInstalled,
    latch = hinge.isLoading;
  if (anchor.isLoading && disc == null) {
    let jacket, knurl;
    jacket = <ComputerUseSettingsHelper11 {...{}} />;
    knurl = <MemoizedFormattedMessage {...{
      id: "settings.computerUse.chrome.title",
      defaultMessage: "Google Chrome",
      description: "Title for Google Chrome computer use settings"
    }} />;
    let lever;
    return <OpenInBrowser {...{
      backSlot: jacket,
      title: knurl,
      children: <AppInitialNi>
              {<MemoizedFormattedMessage {...{
          id: "settings.computerUse.chrome.loading",
          defaultMessage: "Loading Google Chrome settings…",
          description: "Loading state for Google Chrome computer use settings"
        }} />}
            </AppInitialNi>
    }} />;
  }
  if (!anchor.isLoading && !forge) {
    let mount;
    return <Navigate {...{
      to: "/settings/computer-use",
      replace: true
    }} />;
  }
  let motor = iron?.url == null,
    nut = nozzle => {
      iron?.url != null && deferredUiEnt({
        event: nozzle,
        href: iron.url,
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser"
      });
    };
  let piston = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.reinstallExtension",
    defaultMessage: "Reinstall extension",
    description: "Button label to reinstall the Google Chrome extension"
  }} />;
  let rivet = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: motor,
    onClick: nut,
    size: "toolbar",
    children: piston
  }} />;
  let screw = joint == null || latch || !keystone,
    torque = () => {
      joint != null && invokeDesktopRpc("chrome-extension-settings-open", {
        params: {
          extensionId: joint
        }
      }).catch(() => {
        weir.get(toastAtom).danger(<MemoizedFormattedMessage {...{
          id: "settings.computerUse.chrome.openExtensionSettingsError",
          defaultMessage: "Unable to open Chrome extension settings",
          description: "Toast shown when the app fails to open Chrome extension settings"
        }} />);
      });
    };
  let valve = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.removeExtension",
    defaultMessage: "Remove extension",
    description: "Button label to remove the Google Chrome extension"
  }} />;
  let axle = <ElectronOnly {...{
    electron: true,
    children: <ReadLoginRouteQuerySnapshot {...{
      color: "danger",
      disabled: screw,
      onClick: torque,
      size: "toolbar",
      children: valve
    }} />
  }} />;
  let bracket = <div className="flex items-center gap-2">
      {rivet}
      {axle}
    </div>;
  let clamp = <ComputerUseSettingsHelper11 {...{}} />;
  let drill = latch ? null : <ComputerUseSettingsHelper10 {...{
    installed: keystone
  }} />;
  let engine = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.title",
    defaultMessage: "Google Chrome",
    description: "Title for Google Chrome computer use settings"
  }} />;
  let frame = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      id: "settings.computerUse.chrome.permissions.title",
      defaultMessage: "Permissions",
      description: "Title for Google Chrome browser permissions settings section"
    }} />
  }} />;
  let gasket, handle, insert;
  gasket = <UseChromeAndCodeThemeSync {...{
    children: [frame, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [<BrowserUseSettingsS {...{}} />, <BrowserUseSettingsC {...{}} />, <ComputerUseSettingsHelper9 {...{
          kind: "download"
        }} />, <ComputerUseSettingsHelper9 {...{
          kind: "upload"
        }} />]
      }} />
    }} />]
  }} />;
  handle = <BrowserUseSettingsG {...{}} />;
  insert = <BrowserUseSettingsV {...{}} />;
  return <OpenInBrowser {...{
    action: bracket,
    backSlot: clamp,
    subtitle: drill,
    subtitleClassName: "flex",
    title: engine,
    children: [gasket, handle, insert]
  }} />;
}
