// Restored from ref/webview/assets/computer-use-settings-Bhf26OaV.js
// Wave5 stub-pass soft companions.
const $: any = undefined;
const UserMessage3: any = undefined;
const UserMessage5: any = undefined;

// Wave FX — full polished body from `computer-use-settings-Bhf26OaV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 92/130).
// Wave5d — FZ repair from fy-clean L=2256 sus=29; JSX PascalCase + careful split.
// Wave5d careful split 3/4
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

// Wave5d soft stubs.
const AppInitialMO: any = undefined;
const AppInitialOO: any = undefined;
const AppInitialYC: any = undefined;
const ComputerUseSettingsHelper1: any = undefined;
const ComputerUseSettingsHelper17: any = undefined;
const IntlProvider: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function ridge(cliff) {
  let {
      kind
    } = cliff,
    dusk = CodexPluginActionType(appScopeAtom),
    {
      data,
      isLoading
    } = CodexPluginActionResult(AppInitialOO),
    elm = AppInitialMO(),
    fern = kind === "download" ? data?.downloadApprovalMode : data?.uploadApprovalMode,
    grove = <MemoizedFormattedMessage {...{
      id: "settings.browserUse.approval.alwaysAsk.label",
      defaultMessage: "Always ask",
      description: "Label for browser use always ask approval mode"
    }} />;
  let hill = {
    id: "alwaysAsk",
    label: grove,
    description: kind === "download" ? <MemoizedFormattedMessage {...{
      id: "settings.browserUse.downloadApproval.alwaysAsk.description",
      defaultMessage: "Ask before downloading files",
      description: "Description for browser use always ask download approval mode"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.browserUse.uploadApproval.alwaysAsk.description",
      defaultMessage: "Ask before uploading files",
      description: "Description for browser use always ask upload approval mode"
    }} />
  };
  let isle = <MemoizedFormattedMessage {...{
    id: "settings.browserUse.approval.neverAsk.label",
    defaultMessage: "Always allow",
    description: "Label for browser use never ask approval mode"
  }} />;
  let juniper = {
    id: "neverAsk",
    label: isle,
    description: kind === "download" ? <MemoizedFormattedMessage {...{
      id: "settings.browserUse.downloadApproval.neverAsk.description",
      defaultMessage: "Download files without asking",
      description: "Description for browser use never ask download approval mode"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.browserUse.uploadApproval.neverAsk.description",
      defaultMessage: "Upload files without asking",
      description: "Description for browser use never ask upload approval mode"
    }} />
  };
  let lagoon = [hill, juniper];
  let meadow = lagoon,
    nest = meadow.find(item => item.id === fern) ?? meadow[0];
  let oak = nest,
    petal = elm.isPending,
    quiet = async dew => {
      if (!(dew === fern || petal)) try {
        await elm.mutateAsync({
          approvalMode: dew,
          kind
        });
      } catch {
        dusk.get(toastAtom).danger(kind === "download" ? <MemoizedFormattedMessage {...{
          id: "settings.browserUse.downloadApproval.saveError",
          defaultMessage: "Unable to save download setting",
          description: "Toast shown when saving browser use download approval mode fails"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.browserUse.uploadApproval.saveError",
          defaultMessage: "Unable to save upload setting",
          description: "Toast shown when saving browser use upload approval mode fails"
        }} />);
      }
    };
  let rain = quiet,
    seed,
    trail;
  seed = kind === "download" ? <MemoizedFormattedMessage {...{
    id: "settings.browserUse.downloadApproval.label",
    defaultMessage: "Downloads",
    description: "Label for browser use download approval mode setting"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.browserUse.uploadApproval.label",
    defaultMessage: "Uploads",
    description: "Label for browser use upload approval mode setting"
  }} />;
  trail = kind === "download" ? <MemoizedFormattedMessage {...{
    id: "settings.browserUse.downloadApproval.description",
    defaultMessage: "Choose if ChatGPT asks before downloading files from websites",
    description: "Description for browser use download approval mode setting"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.browserUse.uploadApproval.description",
    defaultMessage: "Choose if ChatGPT asks before uploading files to websites",
    description: "Description for browser use upload approval mode setting"
  }} />;
  let urn = isLoading || petal,
    vine = isLoading || petal,
    wind = oak?.label,
    yarrow = <span className="truncate">{wind}</span>;
  let azure = <DropdownTriggerButton className="w-[152px]" disabled={vine}>
      {yarrow}
    </DropdownTriggerButton>;
  let birch = <div className="flex flex-col">
      {meadow.map(item => {
      let ever = item.id === fern;
      return <DropdownMenu.Item key={item.id} {...{
        allowWrap: true,
        disabled: petal,
        RightIcon: ever ? AppIconZlt : undefined,
        onSelect: () => {
          rain(item.id);
        },
        children: <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate">{item.label}</span>
                  <span className="truncate text-sm text-token-text-secondary">
                    {item.description}
                  </span>
                </div>
      }} />;
    })}
    </div>;
  let canyon = <DropdownMenuPopover {...{
    contentWidth: "menuWide",
    align: "end",
    disabled: urn,
    triggerButton: azure,
    children: birch
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: seed,
    description: trail,
    control: canyon
  }} />;
}
function storm(field) {
  let {
      installed
    } = field,
    grain = installed ? "bg-[var(--color-background-status-success)] text-[var(--color-text-success)]" : "bg-token-charts-red/10 text-token-charts-red",
    haven = IntlProvider("inline-flex w-max items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium", grain);
  let ink = installed ? "bg-[var(--color-icon-success)]" : "bg-token-charts-red",
    jadeite = IntlProvider("h-2 w-2 rounded-full", ink);
  let kernel = <span className={jadeite} />;
  let leaf = installed ? <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.connected",
    defaultMessage: "Connected",
    description: "Status badge for connected Google Chrome extension"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.notConnected",
    defaultMessage: "Not connected",
    description: "Status badge for a Google Chrome extension that is not connected"
  }} />;
  return <span className={haven}>
      {kernel}
      {leaf}
    </span>;
}
function tide() {
  let maple = useNavigate(),
    nimbus = <MemoizedFormattedMessage {...{
      id: "settings.computerUse.breadcrumb.computerUse",
      defaultMessage: "Computer use",
      description: "Computer use breadcrumb label"
    }} />;
  let opal = [{
    id: "computer-use",
    label: nimbus,
    onClick: () => void maple("/settings/computer-use")
  }];
  let plume = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.chrome.breadcrumb.googleChrome",
    defaultMessage: "Google Chrome",
    description: "Google Chrome breadcrumb label"
  }} />;
  return <ToolbarBreadcrumb {...{
    ancestors: opal,
    current: plume
  }} />;
}
function unity() {
  let quillow = CodexPluginActionType(appScopeAtom),
    root = CodexPluginActionResult(ensureKeyboardShortcutsGtInit),
    silk = {
      mutationFn: isCommandEnabledForDesktopFlags,
      onSuccess: fjord => {
        quillow.query.setData(ensureKeyboardShortcutsGtInit, fjord);
      }
    };
  let thorn = noop(silk);
  if (root.data == null) return null;
  let upland = apex(root.data) ? root.data : prism;
  let vista = upland,
    wisp = $.find(item => item.value === vista) ?? $.find($t) ?? $[0];
  let yonder = wisp,
    zenith = root.isLoading || thorn.isPending,
    anvil = <MemoizedFormattedMessage {...{
      ...yonder.label
    }} />;
  let beacon = <DropdownTriggerButton className="w-max max-w-full" contentClassName="flex-none" disabled={zenith}>
      {anvil}
    </DropdownTriggerButton>;
  let crag = root.isLoading || thorn.isPending,
    dome = $.map(item => <DropdownMenu.Item key={item.value} {...{
      onSelect: () => {
        thorn.mutate(item.value);
      },
      RightIcon: vista === item.value ? AppIconZlt : undefined,
      children: <span className="text-sm">
              {<MemoizedFormattedMessage {...{
          ...item.label
        }} />}
            </span>
    }} />);
  let eddy = <div className="w-max max-w-[calc(100vw-2rem)]">
      {dome}
    </div>;
  return <DropdownMenuPopover {...{
    triggerButton: beacon,
    align: "start",
    disabled: crag,
    children: eddy
  }} />;
}
function $t(glen) {
  return glen.value === prism;
}
function vale() {
  let hearth = CodexPluginActionType(appScopeAtom),
    inlet = useIntl(),
    jetty = CodexPluginActionResult(noop),
    knob = {
      mutationFn: UserMessage5,
      onSuccess: tor => {
        if (hearth.query.setData(noop, updraft => ({
          computerIconDataURL: updraft?.computerIconDataURL ?? null,
          enabled: tor,
          lockIconDataURL: updraft?.lockIconDataURL ?? null
        })), tor != null) {
          if (tor) {
            hearth.get(toastAtom).success(<MemoizedFormattedMessage {...{
              id: "settings.computerUse.backgroundAuth.enabled",
              defaultMessage: "Locked use enabled",
              description: "Toast shown after enabling Locked use"
            }} />);
            return;
          }
          hearth.get(toastAtom).success(<MemoizedFormattedMessage {...{
            id: "settings.computerUse.backgroundAuth.disabled",
            defaultMessage: "Locked use disabled",
            description: "Toast shown after disabling Locked use"
          }} />);
        }
      },
      onError: () => {
        hearth.get(toastAtom).danger(<MemoizedFormattedMessage {...{
          id: "settings.computerUse.backgroundAuth.saveError",
          defaultMessage: "Unable to update Locked use",
          description: "Toast shown when updating Locked use fails"
        }} />);
      }
    };
  let ledge = noop(knob);
  if (jetty.data?.enabled == null) return null;
  let mire = jetty.data.computerIconDataURL != null && jetty.data.lockIconDataURL != null ? <span className="flex h-10 w-10 items-center justify-center">
        <span className="origin-center scale-[0.65]">
          {<ComputerUseSettingsHelper1 {...{
        computerImageDataUrl: jetty.data.computerIconDataURL,
        lockImageDataUrl: jetty.data.lockIconDataURL
      }} />}
        </span>
      </span> : null;
  let nook = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.backgroundAuth.label",
    defaultMessage: "Locked use",
    description: "Label for the Locked use toggle"
  }} />;
  let oxbow = <MemoizedFormattedMessage {...{
    id: "settings.computerUse.backgroundAuth.description",
    defaultMessage: "Let ChatGPT use your Mac when it's locked. <a>Learn more</a>",
    description: "Description for the Locked use toggle",
    values: {
      a: wave
    }
  }} />;
  let pond = inlet.formatMessage({
    id: "settings.computerUse.backgroundAuth.ariaLabel",
    defaultMessage: "Enable Locked use",
    description: "Accessible label for the Locked use toggle"
  });
  let quarry = jetty.isLoading || ledge.isPending,
    rapids = verge => {
      ledge.mutate(verge);
    };
  let spur = <AppInitialYC ariaLabel={pond} checked={jetty.data.enabled} disabled={quarry} onChange={rapids} />;
  return <ParseUrlOrFallback {...{
    children: <EnsurePersonalizationCInit {...{
      icon: mire,
      label: nook,
      description: oxbow,
      control: spur
    }} />
  }} />;
}
function wave(weir) {
  return <a className="inline-flex text-token-text-link-foreground" href={DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL} target="_blank" rel="noreferrer">
      {weir}
    </a>;
}
function apex(yard) {
  return $.some(item => item.value === yard);
}
function brook() {
  let anchor = CodexPluginActionType(appScopeAtom),
    bolt = CodexPluginActionResult(UserMessage3),
    cog,
    disc;
  if (cog = () => {
    anchor.get(UserMessage3).refetch();
  }, disc = [anchor], marble.useEffect(cog, disc), bolt.isLoading) {
    let edge;
    return <SettingsLoadingRow {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.computerUse.allowedApps.loading",
        defaultMessage: "Loading allowed apps…",
        description: "Message shown while loading computer use allowed apps"
      }} />
    }} />;
  }
  if (bolt.isError) {
    let forge;
    return <div className="p-4 text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
        id: "settings.computerUse.allowedApps.loadError",
        defaultMessage: "Unable to load allowed apps.",
        description: "Message shown when computer use allowed apps fail to load"
      }} />}
      </div>;
  }
  return <ComputerUseSettingsHelper17 {...{
    approvals: bolt.data
  }} />;
}
