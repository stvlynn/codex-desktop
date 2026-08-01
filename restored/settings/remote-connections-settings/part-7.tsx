// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 7/12
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
const AppInitialX3: any = undefined;
const AppInitialYC: any = undefined;
const DeferredUiU: any = undefined;
const Dismiss: any = undefined;
const DollarI: any = undefined;
const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const basalt: any = undefined;
const ledge: any = undefined;
const no: any = undefined;
const writeClipboardContents: any = undefined;

function anvil(hubSecond) {
  let {
      connection,
      editDisabled,
      oneToOnePairingInAppEnabled,
      remoteControlAllowedHostIds,
      onDisableRemoteControl,
      onEditSshConnection,
      onRequestRemoteControlAllow,
      onStartRemoteControlPairing,
      onOpenChange
    } = hubSecond,
    idlerSecond = useIntl(),
    jigSecond = idlerSecond.formatMessage({
      id: "settings.remoteConnections.editConnection",
      defaultMessage: "Edit connection",
      description: "Button label to edit an SSH connection"
    });
  let keeperSecond = jigSecond,
    lugSecond = connection != null,
    mandrelSecond = connection == null ? null : <>
          {firstNonNullFromParsers(connection) ? <OptionalTooltip {...{
        tooltipContent: keeperSecond,
        children: <ReadLoginRouteQuerySnapshot {...{
          className: "absolute top-4 right-12 z-10 size-7 justify-center !rounded !border-0 !p-0 text-token-foreground/80",
          "aria-label": keeperSecond,
          color: "ghost",
          disabled: editDisabled,
          onClick: () => {
            onOpenChange(false);
            onEditSshConnection(connection.hostId);
          },
          children: <CopyButton {...{
            "aria-hidden": true,
            className: "icon-sm"
          }} />
        }} />
      }} /> : null}
          {<JuniperFifth {...{
        connection,
        oneToOnePairingInAppEnabled,
        remoteControlAllowedHostIds,
        onDisableRemoteControl,
        onRequestRemoteControlAllow,
        onStartRemoteControlPairing
      }} />}
        </>;
  return <UsePointerSurfaceInteractionGate {...{
    open: lugSecond,
    onOpenChange,
    contentClassName: "bg-token-bg-primary",
    dialogCloseClassName: "flex size-7 items-center justify-center !p-0",
    children: mandrelSecond
  }} />;
}
function beacon(nippleSecond) {
  let {
      connection,
      oneToOnePairingInAppEnabled,
      remoteControlAllowedHostIds,
      onDisableRemoteControl,
      onRequestRemoteControlAllow,
      onStartRemoteControlPairing
    } = nippleSecond,
    {
      appServerVersion,
      error,
      state
    } = iconXs(connection.hostId),
    orificeSecond = ShellWidthDeltaContext(),
    pinSecond = connection.source === "remote-control",
    raceSecond = remoteControlAllowedHostIds.includes(connection.hostId);
  let sleeveSecond = raceSecond,
    trunnionSecond = CodexBrowserSurfaceActionType(AppInitialX3, connection.hostId),
    bossSecond = oneToOnePairingInAppEnabled && state === "connected",
    camSecond = <DeferredConversationSh {...{
      className: "icon-sm shrink-0",
      hostId: connection.hostId
    }} />;
  let detentSecond = <span className="min-w-0 break-words">{connection.displayName}</span>;
  let eccentricSecond = <span className="flex min-w-0 items-center gap-1.5">
      {camSecond}
      {detentSecond}
    </span>;
  let followerSecond = pinSecond ? "pr-8" : "pr-16",
    guideSecond = IntlProvider("text-lg leading-snug", followerSecond);
  let helixSecond = pinSecond ? <LagoonFifth {...{
    children: [<ValeFifth {...{
      connection,
      state
    }} />, <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.deviceConnections.signedInDeviceSubtitle",
      defaultMessage: "Signed in device",
      description: "Subtitle for signed-in-device rows in the device connections table"
    }} />]
  }} /> : <MeadowFifth {...{
    connection,
    error,
    state
  }} />;
  let impellerSecond = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: eccentricSecond,
      titleClassName: guideSecond,
      className: "gap-2",
      subtitle: helixSecond
    }} />
  }} />;
  let journalSecond = <DeferredUiU {...{
    className: "pt-0",
    children: <To {...{
      connection,
      state,
      appServerVersion
    }} />
  }} />;
  let kingpinSecond = !pinSecond && (!oneToOnePairingInAppEnabled || state === "connected") ? <PetalFifth {...{
    connection,
    showAvailabilityOnly: bossSecond && (!sleeveSecond || !trunnionSecond),
    leadingRow: bossSecond ? <DollarA {...{
      connection,
      oneToOnePairingInAppEnabled: true,
      showConnectButton: !sleeveSecond,
      onDisableRemoteControl,
      onConnect: onStartRemoteControlPairing
    }} /> : undefined,
    remoteControlAllowed: sleeveSecond,
    onAdd: () => onStartRemoteControlPairing(connection.hostId)
  }} /> : null;
  let landSecond = !pinSecond && !oneToOnePairingInAppEnabled && orificeSecond && state === "connected" ? <DeferredUiU {...{
    className: "pt-0",
    children: <ParseUrlOrFallback {...{
      children: <DollarA {...{
        connection,
        oneToOnePairingInAppEnabled: false,
        showConnectButton: !sleeveSecond,
        onDisableRemoteControl,
        onConnect: onRequestRemoteControlAllow
      }} />
    }} />
  }} /> : null;
  return <DeferredUiB {...{
    className: "gap-2 px-6 py-5",
    children: [impellerSecond, journalSecond, kingpinSecond, landSecond]
  }} />;
}
function crag(meshSecond) {
  let {
    children
  } = meshSecond;
  return <span className="inline-flex items-center gap-0.5 rounded-full bg-token-foreground/10 py-0.5 pr-2 pl-1 text-xs font-medium text-token-text-primary">
      {children}
    </span>;
}
function dome(neckSecond) {
  let {
    connection,
    error,
    state
  } = neckSecond;
  if (isWslHostSource(connection)) {
    let padSecond;
    return <OakFifth {...{
      connection,
      error,
      state
    }} />;
  }
  return <NestFifth {...{
    connection,
    error,
    state
  }} />;
}
function eddy(quillshaftSecond) {
  let {
      connection,
      error,
      state
    } = quillshaftSecond,
    rollerSecond = <GroveFifth {...{
      connection,
      error,
      state
    }} />;
  let spindleSecond = <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.deviceConnections.sshSubtitle",
    defaultMessage: "SSH",
    description: "Subtitle for SSH-backed rows in the device connections table"
  }} />;
  return <LagoonFifth {...{
    children: [rollerSecond, spindleSecond]
  }} />;
}
function fjord(thrustSecond) {
  let {
      connection,
      error,
      state
    } = thrustSecond,
    yokeSecond = <GroveFifth {...{
      connection,
      error,
      state
    }} />;
  let baffleSecond = <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.deviceConnections.wslSubtitle",
    defaultMessage: "WSL",
    description: "Subtitle for WSL-backed rows in the device connections table"
  }} />;
  return <LagoonFifth {...{
    children: [yokeSecond, baffleSecond]
  }} />;
}
function glen(capstanSecond) {
  let {
      connection,
      leadingRow,
      remoteControlAllowed,
      showAvailabilityOnly,
      onAdd
    } = capstanSecond,
    diaphragmSecond = CodexPluginActionType(appScopeAtom),
    elbowSecond = useIntl(),
    ferruleSecond = elbowSecond.formatMessage({
      id: "settings.remoteConnections.refresh",
      defaultMessage: "Refresh",
      description: "Button label to refresh remote connections"
    });
  let grommetSecond = ferruleSecond,
    headerSecond = CodexBrowserSurfaceActionType(codexMobileSetupFlowC, connection.hostId),
    injectorSecond = diaphragmSecond.query.snapshot(codexMobileSetupFlowC, connection.hostId);
  let jumperSecond = injectorSecond,
    kerfSecond = headerSecond.data,
    louverSecond = (kerfSecond?.length ?? 0) > 0,
    manifoldSecond = <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlClients.devices.title.ssh",
      defaultMessage: "Devices that can control this connection",
      description: "Header title for devices that can control a remote host connection"
    }} />;
  let nipSecond = showAvailabilityOnly ? null : <>
      {<OptionalTooltip {...{
      tooltipContent: grommetSecond,
      children: <ReadLoginRouteQuerySnapshot {...{
        "aria-label": grommetSecond,
        color: "ghost",
        size: "icon",
        disabled: headerSecond.isFetching,
        onClick: () => {
          headerSecond.refetch();
        },
        children: <AppIconAlt {...{
          className: "icon-xs"
        }} />
      }} />
    }} />}
      {remoteControlAllowed && louverSecond ? <ReadLoginRouteQuerySnapshot {...{
      onClick: onAdd,
      children: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.add.short",
        defaultMessage: "Add",
        description: "Button label for adding a connection from a connections settings tab"
      }} />
    }} /> : null}
    </>;
  let outletSecond = <UseChromeAndCodeThemeSync.Header {...{
    title: manifoldSecond,
    actions: nipSecond
  }} />;
  let packingSecond = <UseChromeAndCodeThemeSync.Content {...{
    children: showAvailabilityOnly ? <ParseUrlOrFallback {...{
      children: leadingRow
    }} /> : louverSecond && kerfSecond != null ? <DuskFifth {...{
      clients: kerfSecond,
      leadingRow,
      scrollAfterThreeRows: true,
      onRevoked: reducerSecond => {
        jumperSecond.setData(strainerSecond => strainerSecond?.filter(teeSecond => teeSecond.clientId !== reducerSecond));
        jumperSecond.invalidate();
      }
    }} /> : <ParseUrlOrFallback {...{
      children: [leadingRow, headerSecond.isLoading ? <div className="flex min-h-[62px] items-center justify-center gap-2 px-4 text-sm text-token-text-secondary">
                    {<VSCODE_EDITOR_ID {...{
          className: "icon-xs"
        }} />}
                    {<MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loading",
          defaultMessage: "Loading device list",
          description: "Loading message for devices that can control the local computer"
        }} />}
                  </div> : headerSecond.isError ? <Dismiss {...{
        spacing: "compact",
        title: <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loadError.title",
          defaultMessage: "Couldn’t load device list",
          description: "Error title shown when devices that can control the local computer fail to load"
        }} />,
        description: <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loadError.generic",
          defaultMessage: "Retry to load devices that can control this computer",
          description: "Error message shown when devices that can control the local computer fail to load"
        }} />,
        actions: <ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          disabled: headerSecond.isFetching,
          onClick: () => {
            headerSecond.refetch();
          },
          children: <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.remoteControlClients.loadError.retry",
            defaultMessage: "Retry",
            description: "Button label to retry loading remote control clients"
          }} />
        }} />
      }} /> : <Dismiss {...{
        spacing: "compact",
        title: null,
        description: <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.empty.ssh",
          defaultMessage: "Add a device to control this connection remotely",
          description: "Empty state for devices that can control a remote host connection"
        }} />,
        illustration: <GrainFifth {...{
          className: "h-6 w-auto text-token-text-primary"
        }} />,
        actions: remoteControlAllowed ? <ReadLoginRouteQuerySnapshot {...{
          onClick: onAdd,
          children: <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.add.short",
            defaultMessage: "Add",
            description: "Button label for adding a connection from a connections settings tab"
          }} />
        }} /> : null
      }} />]
    }} />
  }} />;
  return <DeferredUiU {...{
    className: "pt-0",
    children: <UseChromeAndCodeThemeSync {...{
      children: [outletSecond, packingSecond]
    }} />
  }} />;
}
function DollarA(unionSecond) {
  let {
      connection,
      oneToOnePairingInAppEnabled,
      showConnectButton,
      onDisableRemoteControl,
      onConnect
    } = unionSecond,
    ventSecond = CodexPluginActionType(appScopeAtom),
    wyeSecond = useIntl(),
    zenerSecond = CodexBrowserSurfaceActionType(AppInitialX3, connection.hostId),
    alphaThird = {
      hostId: connection.hostId
    };
  let bravoThird = basalt(alphaThird),
    copperThird = async harborThird => {
      try {
        await bravoThird.mutateAsync(harborThird);
      } catch (indigoThird) {
        if (useChronicleSettingsSection(ventSecond, indigoThird)) return;
        ventSecond.get(toastAtom).danger(wyeSecond.formatMessage({
          id: "settings.remoteConnections.details.availableFromSignedInDevicesUpdateError",
          defaultMessage: "Couldn’t update signed-in device availability",
          description: "Toast shown when updating signed-in-device availability for an SSH connection fails"
        }));
      }
    };
  let deltaThird = copperThird,
    echoThird = oneToOnePairingInAppEnabled ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.allowConnections",
      defaultMessage: "Allow connections",
      description: "Label for allowing remote control connections when one-to-one pairing is enabled"
    }} /> : showConnectButton ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.controlFromPhoneOrOtherDevice",
      defaultMessage: "Control from phone or other device",
      description: "Label for starting remote control pairing from an SSH connection details dialog"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.availableFromSignedInDevices",
      defaultMessage: "Available from signed-in devices",
      description: "Label for making an SSH connection available to signed-in Codex clients"
    }} />;
  let falconThird = oneToOnePairingInAppEnabled ? undefined : <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.details.availableFromSignedInDevicesDescription",
    defaultMessage: "Allow ChatGPT apps signed into your account to use this device",
    description: "Description for making an SSH connection available to signed-in Codex clients"
  }} />;
  let gammaThird = showConnectButton ? <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    onClick: () => onConnect(connection.hostId),
    children: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.availableFromSignedInDevicesConnect",
      defaultMessage: "Connect",
      description: "Button label for first enabling signed-in-device availability for an SSH connection"
    }} />
  }} /> : <AppInitialYC checked={zenerSecond} disabled={bravoThird.isPending} onChange={jadeThird => {
    jadeThird || onDisableRemoteControl(connection.hostId);
    deltaThird(jadeThird);
  }} ariaLabel={oneToOnePairingInAppEnabled ? wyeSecond.formatMessage({
    id: "settings.remoteConnections.details.allowConnections",
    defaultMessage: "Allow connections",
    description: "Label for allowing remote control connections when one-to-one pairing is enabled"
  }) : wyeSecond.formatMessage({
    id: "settings.remoteConnections.details.availableFromSignedInDevices",
    defaultMessage: "Available from signed-in devices",
    description: "Label for making an SSH connection available to signed-in Codex clients"
  })} />;
  return <EnsurePersonalizationCInit {...{
    label: echoThird,
    description: falconThird,
    control: gammaThird
  }} />;
}
function hearth(kiteThird) {
  let {
      hostId,
      onRemoteControlAllowedForHost,
      onAllowed,
      onOpenChange
    } = kiteThird,
    lemonThird = CodexPluginActionType(appScopeAtom),
    marbleThird = useIntl(),
    [nickelThird, onyxThird] = ledge.useState(false),
    pearlThird = {
      hostId
    };
  let quartzThird = basalt(pearlThird),
    riverThird = async () => {
      if (!nickelThird) {
        onyxThird(true);
        try {
          await onRemoteControlAllowedForHost(hostId);
          await quartzThird.mutateAsync(true);
        } catch (umbraThird) {
          let violetThird = umbraThird;
          if (onyxThird(false), useChronicleSettingsSection(lemonThird, violetThird)) return;
          lemonThird.get(toastAtom).danger(marbleThird.formatMessage({
            id: "settings.remoteConnections.details.availableFromSignedInDevicesUpdateError",
            defaultMessage: "Couldn’t update signed-in device availability",
            description: "Toast shown when updating signed-in-device availability for an SSH connection fails"
          }));
          return;
        }
        onAllowed(hostId);
      }
    };
  let slateThird = riverThird,
    timberThird = () => {
      slateThird();
    };
  return <WaveFifth {...{
    allowing: nickelThird,
    open: true,
    onAllow: timberThird,
    onOpenChange
  }} />;
}
function To(willowThird) {
  let {
      appServerVersion,
      connection,
      state
    } = willowThird,
    xenonThird = CodexPluginActionType(appScopeAtom),
    yellowThird = useIntl(),
    zincThird,
    amberThird;
  {
    let basaltThird = no(connection, state, appServerVersion),
      cedarThird = (flintThird, garnetThird) => {
        writeClipboardContents(flintThird, garnetThird).then(value => {
          value && xenonThird.get(toastAtom).info(yellowThird.formatMessage({
            id: "settings.remoteConnections.details.copySuccess",
            defaultMessage: "Copied to clipboard",
            description: "Toast shown after copying a remote connection detail value"
          }));
        });
      };
    let daisyThird = cedarThird;
    zincThird = "overflow-hidden rounded-xl border border-token-border";
    let emberThird;
    emberThird = hazelThird => {
      let ivoryThird = hazelThird.copyValue,
        jasperThird = typeof hazelThird.value == "string" ? <DollarI {...{
          value: hazelThird.value
        }} /> : hazelThird.value;
      return <div key={hazelThird.id} className="flex min-h-9 items-center justify-between gap-3 border-t border-token-border px-3 py-2 first:border-t-0">
          <div className="shrink-0 text-sm text-token-text-secondary">
            {hazelThird.label}
          </div>
          <div className="max-w-[80%] min-w-0 text-right text-sm text-token-text-primary">
            {ivoryThird == null ? jasperThird : <button type="button" className="block max-w-full min-w-0 cursor-interaction text-right" onClick={kelpThird => {
            daisyThird(ivoryThird, kelpThird);
          }}>
                {jasperThird}
              </button>}
          </div>
        </div>;
    };
    amberThird = basaltThird.map(emberThird);
  }
  return <div className={zincThird}>
      {amberThird}
    </div>;
}
