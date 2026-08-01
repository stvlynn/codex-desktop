// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 6/12
/* split-lane-import-depth:1 */

const ApexFifth: any = undefined;
/** split companion stub */
const AzureFifth: any = undefined;
/** split companion stub */
const BirchFifth: any = undefined;
/** split companion stub */
const BrookFifth: any = undefined;
/** split companion stub */
const CanyonFifth: any = undefined;
/** split companion stub */
const CliffFifth: any = undefined;
/** split companion stub */
const DewFifth: any = undefined;
/** split companion stub */
const DuskFifth: any = undefined;
/** split companion stub */
const ElmFifth: any = undefined;
/** split companion stub */
const EverFifth: any = undefined;
/** split companion stub */
const FernFifth: any = undefined;
/** split companion stub */
const FieldFifth: any = undefined;
/** split companion stub */
const GrainFifth: any = undefined;
/** split companion stub */
const GroveFifth: any = undefined;
/** split companion stub */
const HavenFifth: any = undefined;
/** split companion stub */
const HillFifth: any = undefined;
/** split companion stub */
const InkFifth: any = undefined;
/** split companion stub */
const IsleFifth: any = undefined;
/** split companion stub */
const JadeiteFifth: any = undefined;
/** split companion stub */
const JuniperFifth: any = undefined;
/** split companion stub */
const LagoonFifth: any = undefined;
/** split companion stub */
const MeadowFifth: any = undefined;
/** split companion stub */
const MossFifth: any = undefined;
/** split companion stub */
const NestFifth: any = undefined;
/** split companion stub */
const NorthFifth: any = undefined;
/** split companion stub */
const OakFifth: any = undefined;
/** split companion stub */
const OrbitFifth: any = undefined;
/** split companion stub */
const PetalFifth: any = undefined;
/** split companion stub */
const PineFifth: any = undefined;
/** split companion stub */
const QuestFifth: any = undefined;
/** split companion stub */
const QuietFifth: any = undefined;
/** split companion stub */
const RainFifth: any = undefined;
/** split companion stub */
const RidgeFifth: any = undefined;
/** split companion stub */
const SeedFifth: any = undefined;
/** split companion stub */
const StormFifth: any = undefined;
/** split companion stub */
const TideFifth: any = undefined;
/** split companion stub */
const TrailFifth: any = undefined;
/** split companion stub */
const UnityFifth: any = undefined;
/** split companion stub */
const UrnFifth: any = undefined;
/** split companion stub */
const ValeFifth: any = undefined;
/** split companion stub */
const VineFifth: any = undefined;
/** split companion stub */
const WaveFifth: any = undefined;
/** split companion stub */
const WindFifth: any = undefined;
/** split companion stub */
const YarrowFifth: any = undefined;

import { buildChatgptDesktopAuthUrl, ensureBuildChatgptDesktopAuthUrlInit, ensureChatgptDesktopAuthUrlInit, getCodexAppVersionFromScope, loginWithChatgptDeviceCode } from "../../account/chatgpt-desktop-auth-url";
import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { buildRemoteSshConnectionsRefreshedPayload } from "../../analytics/build-remote-ssh-connections-refreshed-payload";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { CodexRemoteSshConnectionEventSource } from "../../analytics/codex-remote-ssh-connection-event-source";
import { CODEX_REMOTE_SSH_CONNECTION_EVENT_TYPE } from "../../analytics/codex-remote-ssh-connection-event-type";
import { CodexRemoteSshConnectionResult } from "../../analytics/codex-remote-ssh-connection-result";
import { CODEX_SKILL_TRY_CLICKED_TYPE } from "../../analytics/codex-skill-try-clicked-type";
import { CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE } from "../../analytics/codex-upgrade-plan-modal-cta-clicked-type";
import { CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE } from "../../analytics/codex-upgrade-plan-modal-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { ShellWidthDeltaContext } from "../../app-shell/shell-width-delta-context";
import { APP_VERSION } from "../../app/app-version";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { PULL_REQUEST_FIX_AUTOMATION_PROMPT_HEADER } from "../../automations/pull-request-fix-prompt-header";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_CU_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { localReasoningEffortMessages } from "../../composer/local-reasoning-effort-messages";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationSh as DeferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { sidebarThreadKeyToPath } from "../../conversation/sidebar-thread-path";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { CodexMobileSetupDialog, codexMobileSetupDialogConfig as CodexMobileSetupDialogConfig, CodexMobileSetupDialogOption, ensureCodexMobileSetupDialogInit, ensureCodexMobileSetupDialogLayoutInit, ensureCodexMobileSetupDialogStylesInit } from "../../devices/codex-mobile-setup-dialog";
import { codexMobileSetupFlowC, codexMobileSetupFlowD, codexMobileSetupFlowF, codexMobileSetupFlowL, codexMobileSetupFlowN, codexMobileSetupFlowO, codexMobileSetupFlowP, codexMobileSetupFlowS, codexMobileSetupFlowT as CodexMobileSetupFlowT, codexMobileSetupFlowU } from "../../devices/codex-mobile-setup-flow";
import { isWslHostSource, remoteControlHostKey, remoteSshCodexManagedHostKey, remoteSshDiscoveredHostKey } from "../../environments/remote-host-keys";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { ensureGitMetadataQueryInit } from "../../git/ensure-git-metadata-query-init";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { classifyInstalledVsCurrentAppServerVersions } from "../../hosts/app-server-connection-errors";
import { HostConnectionStatusBadge } from "../../hosts/host-connection-status-badge";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { logHostLoginSurfaceEvent } from "../../hosts/log-host-login-surface-event";
import { ensureRemoteConnectionsFeatureInit } from "../../hosts/remote-connections-feature";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconEi } from "../../icons/app-icon-ei";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { TerminalFileIcon } from "../../icons/terminal-file-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { initOnboardingLoginContent, OnboardingLoginContent } from "../../onboarding/onboarding-login-content";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { ensureGoogleDriveConnectorIconsInit } from "../../plugins/ensure-google-drive-connector-icons-init";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { DeferredUiB } from "../../ui/deferred-ui-b";
import { DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { iconXs } from "../../ui/icon-xs";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { wtt } from "../../ui/wtt";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { isInstalledCodexNewerThanAppServer } from "../../utils/compare-semver";
import { countPendingFilteredItems } from "../../utils/count-pending-filtered-items";
import { firstNonNullFromParsers } from "../../utils/first-non-null-from-parsers";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { ensureImportSettingsCLInit, ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useChronicleSettingsSection } from "../use-chronicle-settings-section";
import { useSettingValue } from "../use-setting-value";

// Wave5d soft stubs (cross-part).
const AppInitialBC: any = undefined;
const AppInitialIa: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialPa: any = undefined;
const AppInitialX3: any = undefined;
const AppInitialYC: any = undefined;
const NativeContextMenuSurface: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const apex: any = undefined;
const chatProcessRegisterStub: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredHostsS3: any = undefined;
const ink: any = undefined;
const isle: any = undefined;
const jetty: any = undefined;
const ledge: any = undefined;
const nest: any = undefined;

var nimbus,
  opal,
  plume = esmInit(() => {
    nimbus = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_K1_Init();
    svgToDataUri();
  });
function quillow(juniperSecond) {
  let {
      connection,
      disabled,
      installCodexPending,
      oneToOnePairingInAppEnabled,
      onAuthenticate,
      onInstallCodex,
      onLogoutConnection,
      onManageRemoteControlDevices,
      onRemove,
      onShowDetails,
      onStartRemoteControlPairing,
      onToggleConnection
    } = juniperSecond,
    lagoonSecond = CodexPluginActionType(appScopeAtom),
    meadowSecond = useIntl(),
    {
      appServerVersion,
      error,
      installedCodexVersion,
      state
    } = iconXs(connection.hostId),
    nestSecond = connection.displayName,
    oakSecond = isWslHostSource(connection);
  let petalSecond = oakSecond,
    quietSecond = ShellWidthDeltaContext(),
    rainSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.deleteConnection",
      defaultMessage: "Delete",
      description: "Menu item label to delete a remote connection"
    });
  let seedSecond = rainSecond,
    trailSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.settingsMenu",
      defaultMessage: "Settings",
      description: "Menu item label to show SSH connection settings"
    });
  let urnSecond = trailSecond,
    vineSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.restartConnection",
      defaultMessage: "Restart connection",
      description: "Menu item label to restart an SSH remote connection"
    });
  let windSecond = vineSecond,
    yarrowSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.manageRemoteControlDevices",
      defaultMessage: "Manage devices for {connectionName}",
      description: "Accessibility label for the SSH row button that manages signed-in devices for a remote connection"
    }, {
      connectionName: nestSecond
    });
  let azureSecond = yarrowSecond,
    birchSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.addRemoteProject",
      defaultMessage: "Add remote project for {connectionName}",
      description: "Accessibility label for the SSH row button that opens the add remote project dialog with the connection selected"
    }, {
      connectionName: nestSecond
    });
  let canyonSecond = birchSecond,
    dewSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.addRemoteProject.tooltip",
      defaultMessage: "Add a remote project",
      description: "Tooltip for the SSH row button that opens the add remote project dialog"
    });
  let everSecond = dewSecond,
    fieldSecond = NativeContextMenuSurface("2153867414"),
    grainSecond,
    havenSecond,
    inkSecond,
    jadeiteSecond,
    kernelSecond,
    leafSecond,
    mapleSecond,
    nimbusSecond,
    opalSecond,
    plumeSecond;
  {
    leafSecond = silk({
      appServerVersion,
      installedCodexVersion,
      state
    });
    let mireSecond;
    mireSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.table.sshRemoteControlPairing.ariaLabel",
      defaultMessage: "Connect {connectionName} remotely",
      description: "Screen reader label for starting remote control pairing for an SSH connection"
    }, {
      connectionName: connection.displayName
    });
    jadeiteSecond = mireSecond;
    let nookSecond;
    nookSecond = meadowSecond.formatMessage({
      id: "settings.remoteConnections.table.sshRemoteControlPairing.tooltip",
      defaultMessage: "Control from your phone or other device",
      description: "Tooltip for starting remote control pairing for an SSH connection"
    });
    kernelSecond = nookSecond;
    grainSecond = state === "connected" || error?.code === "login-required" || error?.code === "update-required" || error?.code === "restart-required";
    let {
      statusError,
      isRestartAvailableNotice,
      statusState
    } = root({
      error,
      restartAvailableNotice: leafSecond,
      state
    });
    nimbusSecond = statusError;
    inkSecond = isRestartAvailableNotice;
    let oxbowSecond = petalSecond ? "wsl" : "ssh",
      pondSecond = state ?? "disconnected",
      quarrySecond;
    quarrySecond = logHostLoginSurfaceEvent(meadowSecond, {
      canLogin: false,
      error,
      hostKind: oxbowSecond,
      state: pondSecond,
      surface: "connections-row"
    });
    havenSecond = quarrySecond.label;
    opalSecond = statusState == null ? null : logHostLoginSurfaceEvent(meadowSecond, {
      canLogin: true,
      error: nimbusSecond,
      hostKind: petalSecond ? "wsl" : "ssh",
      state: statusState,
      surface: "connections-row"
    });
    let rapidsSecond = (petalSecond || !fieldSecond) && (nimbusSecond?.code === "remote-codex-not-found" || nimbusSecond?.code === "update-required"),
      spurSecond;
    spurSecond = function () {
      ensureAppActionPayloadSchemasInit.dispatchMessage("codex-app-server-restart", {
        hostId: connection.hostId,
        killCodexProcess: true,
        remoteControlEnabled: lagoonSecond.get(AppInitialX3, connection.hostId)
      });
    };
    mapleSecond = spurSecond;
    plumeSecond = opalSecond == null || rapidsSecond ? null : thorn({
      action: opalSecond.action,
      disabled,
      hostId: connection.hostId,
      installCodexPending,
      onRestart: mapleSecond,
      onAuthenticate,
      onInstallCodex
    });
  }
  let quillowSecond = plumeSecond,
    rootSecond = connection.hostId,
    silkSecond = connection.autoConnect,
    thornSecond = torSecond => onToggleConnection(connection.hostId, torSecond);
  let uplandSecond = meadowSecond.formatMessage({
    id: "settings.remoteConnections.table.autoConnect.ariaLabel",
    defaultMessage: "Connect {connectionName}",
    description: "Screen reader label for the remote connection toggle"
  }, {
    connectionName: connection.displayName
  });
  let vistaSecond = <AppInitialYC checked={silkSecond} size="sm" onChange={thornSecond} ariaLabel={uplandSecond} />;
  let wispSecond = petalSecond ? "wsl" : "ssh",
    yonderSecond = opalSecond?.message ?? null,
    _e = <ApexFifth {...{
      action: quillowSecond,
      connectionKind: wispSecond,
      error: nimbusSecond,
      isRestartAvailableNotice: inkSecond,
      restartAvailableNotice: leafSecond,
      statusMessage: yonderSecond
    }} />;
  let zenithSecond = <>
      {havenSecond}
      {_e}
    </>;
  let be = <GroveFifth {...{
    connection,
    error,
    state
  }} />;
  let anvilSecond = meadowSecond.formatMessage({
    id: "settings.remoteConnections.table.actions.ariaLabel",
    defaultMessage: "{connectionName} actions",
    description: "Screen reader label for the remote connection actions menu"
  }, {
    connectionName: nestSecond
  });
  let beaconSecond = () => onShowDetails(connection);
  let cragSecond = grainSecond ? windSecond : undefined,
    domeSecond = grainSecond ? mapleSecond : undefined,
    eddySecond = state === "connected" ? () => onLogoutConnection(connection.hostId) : undefined;
  let fjordSecond = petalSecond ? undefined : seedSecond,
    glenSecond = petalSecond ? undefined : seedSecond,
    hearthSecond = petalSecond ? undefined : () => onRemove(connection.hostId);
  let inletSecond = <StormFifth {...{
    actionsLabel: anvilSecond,
    DetailsIcon: deferredConversationWH3,
    detailsLabel: urnSecond,
    onDetails: beaconSecond,
    restartLabel: cragSecond,
    onRestart: domeSecond,
    onLogout: eddySecond,
    deleteLabel: fjordSecond,
    deleteTooltip: glenSecond,
    deleteDisabled: disabled,
    onDelete: hearthSecond
  }} />;
  let jettySecond = !petalSecond && state === "connected" ? <OptionalTooltip {...{
    tooltipContent: everSecond,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": canyonSecond,
      color: "ghost",
      size: "icon",
      className: "!h-5 !w-8 !rounded-full !p-0 electron:!p-0",
      onClick: event => {
        event.stopPropagation();
        sidebarThreadKeyToPath({
          hostId: connection.hostId
        });
      },
      children: <InkFifth {...{
        className: "icon-sm"
      }} />
    }} />
  }} /> : null;
  let knobSecond = (quietSecond || oneToOnePairingInAppEnabled) && state === "connected" ? <OptionalTooltip {...{
    tooltipContent: oneToOnePairingInAppEnabled ? kernelSecond : azureSecond,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": oneToOnePairingInAppEnabled ? jadeiteSecond : azureSecond,
      color: "ghost",
      size: "icon",
      className: "!h-5 !w-8 !rounded-full !p-0 electron:!p-0",
      onClick: event => {
        event.stopPropagation();
        oneToOnePairingInAppEnabled ? onStartRemoteControlPairing(connection.hostId) : onManageRemoteControlDevices(connection.hostId);
      },
      children: <GrainFifth {...{
        className: "icon-sm"
      }} />
    }} />
  }} /> : null;
  let ledgeSecond = <div className="flex items-center gap-1.5">
      {inletSecond}
      {jettySecond}
      {knobSecond}
    </div>;
  return <TideFifth {...{
    displayName: nestSecond,
    hostId: rootSecond,
    icon: vistaSecond,
    description: zenithSecond,
    status: be,
    control: ledgeSecond
  }} />;
}
function root({
  error,
  restartAvailableNotice,
  state
}) {
  return error != null || state === "error" ? {
    statusError: error ?? (restartAvailableNotice == null ? null : classifyInstalledVsCurrentAppServerVersions(restartAvailableNotice)),
    isRestartAvailableNotice: false,
    statusState: "error"
  } : restartAvailableNotice == null ? {
    statusError: null,
    isRestartAvailableNotice: false,
    statusState: state
  } : {
    statusError: classifyInstalledVsCurrentAppServerVersions(restartAvailableNotice),
    isRestartAvailableNotice: error == null,
    statusState: "error"
  };
}
function silk({
  appServerVersion,
  installedCodexVersion,
  state
}) {
  return state == null || appServerVersion == null || installedCodexVersion == null || !isInstalledCodexNewerThanAppServer({
    appServerVersion,
    installedCodexVersion
  }) ? null : {
    currentVersion: appServerVersion,
    installedVersion: installedCodexVersion
  };
}
function thorn({
  action,
  disabled,
  hostId,
  installCodexPending,
  onAuthenticate,
  onInstallCodex,
  onRestart
}) {
  if (action == null) return null;
  switch (action.kind) {
    case "install-codex":
      return {
        disabled,
        label: action.label,
        loading: installCodexPending,
        loadingLabel: action.loadingLabel,
        renderInElectronOnly: true,
        tooltipText: action.tooltipText,
        onClick: () => onInstallCodex(hostId)
      };
    case "login":
      return {
        label: action.label,
        onClick: () => onAuthenticate(hostId)
      };
    case "restart":
      return action.tooltipText == null ? {
        label: action.label,
        onClick: onRestart
      } : {
        label: action.label,
        tooltipText: action.tooltipText,
        onClick: onRestart
      };
    case "settings":
      return null;
  }
}
function upland(updraftSecond) {
  let {
      connection,
      error,
      state
    } = updraftSecond,
    vergeSecond = useIntl();
  if (state === "error") {
    let boltSecond = isWslHostSource(connection) ? "wsl" : "ssh",
      cogSecond = logHostLoginSurfaceEvent(vergeSecond, {
        canLogin: false,
        error,
        hostKind: boltSecond,
        state,
        surface: "connections-row"
      });
    let {
        label,
        message
      } = cogSecond,
      discSecond = <span aria-label={label} className="block size-2 rounded-full bg-token-charts-red" role="img" />;
    let edgeSecond;
    return <OptionalTooltip {...{
      tooltipContent: message,
      children: discSecond
    }} />;
  }
  if (state != null) {
    let forgeSecond;
    return <HostConnectionStatusBadge hostId={connection.hostId} />;
  }
  let weirSecond = vergeSecond.formatMessage({
    id: "threadPage.remoteConnectionStatusBadge.disconnected",
    defaultMessage: "Disconnected",
    description: "Label shown when remote connection is unavailable"
  });
  let yardSecond = weirSecond,
    anchorSecond = <span aria-label={yardSecond} className="block size-2 rounded-full bg-gray-400" role="img" />;
  return <OptionalTooltip {...{
    tooltipContent: yardSecond,
    children: anchorSecond
  }} />;
}
var vista,
  wisp,
  yonder = esmInit(() => {
    vista = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    conversationsSidebarMessages();
    AppInitialPa();
    AppInitialIa();
    ensureGitMetadataQueryInit();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ink();
    apex();
    ensureHooksFocusIconInit();
    findSidebarSectionElement();
    chatProcessRegisterStub();
    ensureAppScopeInit();
    ensureSkillsPageHelpersInit();
    isle();
    nest();
    plume();
    ensureRemoteConnectionsFeatureInit();
  });
function zenith({
  connections,
  clientAuthorized,
  disabled,
  installingCodexHostId,
  showEmptyState,
  emptyState,
  remoteControlAllowedHostIds,
  onEditSshConnection,
  onInstallCodex,
  onLogoutConnection,
  onRemoveSshConnection,
  onRenameRemoteControlConnection,
  onRequestDeleteRemoteControlConnection,
  onToggleConnection,
  onRemoteControlAllowedForHost,
  onAuthenticate
}) {
  let gearSecond = CodexPluginActionType(appScopeAtom),
    [hingeSecond, ironSecond] = ledge.useState(null),
    [jointSecond, keystoneSecond] = ledge.useState(null),
    [latchSecond, motorSecond] = ledge.useState(null),
    [nutSecond, pistonSecond] = ledge.useState(null),
    [rivetSecond, screwSecond] = ledge.useState(null),
    {
      data
    } = CodexBrowserSurfaceActionType(codexMobileSetupFlowD, {
      existingClientIds: rivetSecond?.existingClientIds ?? null,
      hostId: rivetSecond?.hostId ?? null,
      localRemoteControlClientId: null,
      waiting: rivetSecond?.existingClientIds != null
    }),
    torqueSecond = NativeContextMenuSurface(MOBILE_MFA_SETUP_FEATURE_GATE_ID),
    valveSecond = data ? rivetSecond?.hostId ?? null : latchSecond,
    axleSecond = valveSecond == null ? null : connections.find(item => item.hostId === valveSecond) ?? null,
    bracketSecond = async (frameSecond, gasketSecond) => {
      if (jointSecond == null) {
        keystoneSecond(frameSecond.envId);
        try {
          await onRenameRemoteControlConnection(frameSecond.envId, gasketSecond);
          ironSecond(null);
        } catch {
          return;
        } finally {
          keystoneSecond(null);
        }
      }
    },
    clampSecond = handleSecond => {
      motorSecond(null);
      pistonSecond({
        hostId: handleSecond,
        startPairingAfterAllow: torqueSecond
      });
    },
    drillSecond = async insertSecond => {
      let jacketSecond = connections.find(item => item.hostId === insertSecond);
      jacketSecond != null && isWslHostSource(jacketSecond) && (await jetty({
        connection: jacketSecond,
        environmentId: gearSecond.get(deferredHostsS3, insertSecond)?.environmentId ?? null
      }));
      let knurlSecond = {
        existingClientIds: null,
        hostId: insertSecond
      };
      motorSecond(null);
      screwSecond(knurlSecond);
      let leverSecond = gearSecond.query.snapshot(codexMobileSetupFlowC, insertSecond),
        mountSecond = leverSecond.getOptions().enabled ? await leverSecond.invalidate({
          exact: true,
          refetchType: "none"
        }).then(() => leverSecond.fetch()).catch(() => null) : leverSecond.getData() ?? [];
      if (mountSecond == null) {
        screwSecond(nozzleSecond => nozzleSecond === knurlSecond ? null : nozzleSecond);
        return;
      }
      screwSecond(platenSecond => platenSecond === knurlSecond ? {
        existingClientIds: new Set(mountSecond.map(item => item.clientId)),
        hostId: insertSecond
      } : platenSecond);
    },
    engineSecond = ratchetSecond => {
      if (remoteControlAllowedHostIds.includes(ratchetSecond) && gearSecond.get(AppInitialX3, ratchetSecond)) {
        drillSecond(ratchetSecond);
        return;
      }
      pistonSecond({
        hostId: ratchetSecond,
        startPairingAfterAllow: true
      });
    };
  return <>
      {connections.length === 0 && showEmptyState ? <AppInitialLj layout="settings-row">
          {emptyState ?? <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.deviceConnections.empty",
        defaultMessage: "No device connections found. Add a new connection to get started",
        description: "Empty state for the device connections settings table"
      }} />}
        </AppInitialLj> : null}
      {connections.map(item => item.source === "remote-control" ? <UnityFifth key={item.hostId} {...{
      connection: item,
      clientAuthorized,
      disabled,
      isEditing: hingeSecond === item.envId,
      isRenamePending: jointSecond != null,
      isSaving: jointSecond === item.envId,
      onCancelEditing: () => {
        ironSecond(null);
      },
      onLogoutConnection,
      onRequestDelete: onRequestDeleteRemoteControlConnection,
      onSave: bracketSecond,
      onShowDetails: shimSecond => {
        motorSecond(shimSecond.hostId);
      },
      onStartEditing: () => {
        ironSecond(item.envId);
      },
      onToggleConnection
    }} /> : <FernFifth key={item.hostId} {...{
      connection: item,
      disabled,
      installCodexPending: installingCodexHostId === item.hostId,
      oneToOnePairingInAppEnabled: torqueSecond,
      onAuthenticate,
      onInstallCodex,
      onLogoutConnection,
      onManageRemoteControlDevices: tappetSecond => {
        if (remoteControlAllowedHostIds.includes(tappetSecond)) {
          pistonSecond(null);
          motorSecond(tappetSecond);
          return;
        }
        clampSecond(tappetSecond);
      },
      onRemove: onRemoveSshConnection,
      onShowDetails: arborSecond => {
        motorSecond(arborSecond.hostId);
      },
      onStartRemoteControlPairing: engineSecond,
      onToggleConnection
    }} />)}
      {<IsleFifth {...{
      connection: axleSecond,
      editDisabled: disabled,
      oneToOnePairingInAppEnabled: torqueSecond,
      remoteControlAllowedHostIds,
      onDisableRemoteControl: bushingSecond => {
        motorSecond(bushingSecond);
        screwSecond(null);
      },
      onRequestRemoteControlAllow: clampSecond,
      onStartRemoteControlPairing: engineSecond,
      onEditSshConnection,
      onOpenChange: collarSecond => {
        collarSecond || (motorSecond(null), screwSecond(null));
      }
    }} />}
      {nutSecond == null ? null : <QuietFifth {...{
      hostId: nutSecond.hostId,
      onRemoteControlAllowedForHost,
      onAllowed: dowelSecond => {
        pistonSecond(null);
        nutSecond.startPairingAfterAllow ? drillSecond(dowelSecond) : motorSecond(dowelSecond);
      },
      onOpenChange: flangeSecond => {
        flangeSecond || pistonSecond(null);
      }
    }} />}
      {rivetSecond?.existingClientIds != null && !data ? <CodexMobileSetupDialog {...{
      hostId: rivetSecond.hostId,
      open: true,
      showStartSetupError: false,
      setupInProgress: false,
      step: "waiting",
      waitingHeading: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.details.sshRemoteControlPairing.heading",
        defaultMessage: "Approve on your device to use this connection remotely",
        description: "Heading for the remote host control pairing approval dialog"
      }} />,
      onOpenChange: gibSecond => {
        gibSecond || screwSecond(null);
      },
      onSkip: () => {
        screwSecond(null);
      },
      onStartSetup: () => {}
    }} /> : null}
    </>;
}
