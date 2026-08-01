// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 5/12
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
const AppInitialYC: any = undefined;
const DeferredUiT22: any = undefined;
const DeferredUiV2: any = undefined;
const GuardianApproval: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const isle: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const quiet: any = undefined;
const river: any = undefined;
const timber: any = undefined;

function rain(reducerPrime) {
  let {
      connection,
      clientAuthorized,
      disabled,
      isEditing,
      isRenamePending,
      isSaving,
      onCancelEditing,
      onLogoutConnection,
      onRequestDelete,
      onSave,
      onShowDetails,
      onStartEditing,
      onToggleConnection
    } = reducerPrime,
    strainerPrime = useIntl(),
    [teePrime, unionPrime] = urn.useState(connection.displayName),
    {
      error,
      state
    } = iconXs(connection.hostId),
    ventPrime = CodexBrowserSurfaceActionType(DeferredUiT22, connection.hostId),
    wyePrime,
    zenerPrime,
    alphaSecond;
  zenerPrime = GuardianApproval(connection.appServerVersion);
  wyePrime = clientAuthorized && connection.online && zenerPrime;
  alphaSecond = _a(clientAuthorized, connection.online, zenerPrime, ventPrime, state);
  let bravoSecond = alphaSecond,
    copperSecond = state === "error" && error?.code === "connection-failed" ? error.message : null,
    deltaSecond = teePrime.trim();
  let echoSecond = deltaSecond,
    falconSecond = strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.rename.inputLabel",
      defaultMessage: "Display name",
      description: "Screen reader label for remote control display name rename input"
    });
  let gammaSecond = falconSecond,
    harborSecond = strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.rename.save",
      defaultMessage: "Save",
      description: "Button label to save a remote control environment rename"
    });
  let indigoSecond = harborSecond,
    jadeSecond = strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.rename.cancel",
      defaultMessage: "Cancel",
      description: "Button label to cancel a remote control environment rename"
    });
  let kiteSecond = jadeSecond,
    lemonSecond = strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.rename",
      defaultMessage: "Rename",
      description: "Menu item label to rename a signed-in device"
    });
  let marbleSecond = lemonSecond,
    nickelSecond = strainerPrime.formatMessage({
      id: "settings.remoteConnections.deleteConnection",
      defaultMessage: "Delete",
      description: "Menu item label to delete a remote connection"
    });
  let onyxSecond = nickelSecond,
    pearlSecond = strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.delete.offlineOnly",
      defaultMessage: "Only offline environments can be deleted",
      description: "Tooltip shown when an online remote control environment cannot be deleted"
    });
  let quartzSecond = pearlSecond,
    riverSecond = strainerPrime.formatMessage({
      id: "settings.remoteConnections.detailsMenu",
      defaultMessage: "Details",
      description: "Menu item label to show remote connection details"
    });
  let slateSecond = riverSecond,
    timberSecond = disabled || isRenamePending || isEditing || connection.online,
    umbraSecond = connection.online ? quartzSecond : onyxSecond,
    violetSecond = () => {
      unionPrime(connection.displayName);
      onCancelEditing();
    };
  let willowSecond = violetSecond,
    xenonSecond = async () => {
      if (!(echoSecond.length === 0 || isRenamePending)) {
        if (echoSecond === connection.displayName) {
          willowSecond();
          return;
        }
        await onSave(connection, echoSecond);
      }
    };
  let yellowSecond = xenonSecond,
    zincSecond = connection.displayName,
    amberSecond = connection.hostId,
    basaltSecond = river(connection);
  let cedarSecond = <MemoizedFormattedMessage {...{
    ...bravoSecond
  }} />;
  let daisySecond = clientAuthorized && connection.online && !zenerPrime ? <OptionalTooltip {...{
    side: "bottom",
    tooltipContent: <MemoizedFormattedMessage {...{
      id: "settings.remoteControlConnections.updateRequired.versionTooltip",
      defaultMessage: "Current app-server version: {currentVersion}. Minimum required app-server version: {minRequiredVersion}",
      description: "Tooltip shown after the remote Codex update message with the current and minimum required app-server versions",
      values: {
        currentVersion: connection.appServerVersion,
        minRequiredVersion: APP_VERSION
      }
    }} />,
    children: <span aria-label={strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.updateRequired.versionDetails",
      defaultMessage: "Version details",
      description: "Accessible label for the remote Codex app-server version tooltip trigger"
    })} className="text-token-text-secondary">
              {<ShellLayoutMetricsContext {...{
        "aria-hidden": true,
        className: "icon-xs shrink-0"
      }} />}
            </span>
  }} /> : null;
  let emberSecond = <span className="inline-flex min-w-0 items-center gap-1">
      {cedarSecond}
      {daisySecond}
    </span>;
  let flintSecond = copperSecond == null ? null : <>
        <span aria-hidden={true}>{"·"}</span>
        <span className="min-w-0 break-words">
          {copperSecond}
        </span>
      </>;
  let _e = <>
      {emberSecond}
      {flintSecond}
    </>;
  let garnetSecond = isEditing ? <input aria-label={gammaSecond} className="min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 py-1 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:bg-token-foreground/5 disabled:text-token-text-secondary disabled:opacity-100" value={teePrime} disabled={disabled || isSaving} onChange={event => {
    unionPrime(event.target.value);
  }} onKeyDown={event => {
    event.key === "Enter" ? (event.preventDefault(), yellowSecond()) : event.key === "Escape" && (event.preventDefault(), willowSecond());
  }} autoFocus={true} /> : undefined;
  let be = <ValeFifth {...{
    connection,
    state
  }} />;
  let hazelSecond = isEditing ? <div className="flex items-center gap-1">
      {<OptionalTooltip {...{
      tooltipContent: indigoSecond,
      children: <ReadLoginRouteQuerySnapshot {...{
        "aria-label": indigoSecond,
        color: "ghost",
        size: "icon",
        loading: isSaving,
        disabled: disabled || echoSecond.length === 0 || isRenamePending,
        onClick: () => {
          yellowSecond();
        },
        children: <AppIconZlt {...{
          className: "icon-xs"
        }} />
      }} />
    }} />}
      {<OptionalTooltip {...{
      tooltipContent: kiteSecond,
      children: <ReadLoginRouteQuerySnapshot {...{
        "aria-label": kiteSecond,
        color: "ghost",
        size: "icon",
        disabled: disabled || isSaving,
        onClick: willowSecond,
        children: <Chatgpt2 {...{
          className: "icon-xs"
        }} />
      }} />
    }} />}
    </div> : <div className="flex items-center gap-2">
      {<StormFifth {...{
      actionsLabel: strainerPrime.formatMessage({
        id: "settings.remoteConnections.table.actions.ariaLabel",
        defaultMessage: "{connectionName} actions",
        description: "Screen reader label for the remote connection actions menu"
      }, {
        connectionName: connection.displayName
      }),
      editAction: {
        disabled: disabled || isRenamePending || isEditing,
        label: marbleSecond,
        onSelect: () => {
          unionPrime(connection.displayName);
          onStartEditing();
        },
        tooltip: marbleSecond
      },
      detailsLabel: slateSecond,
      onDetails: () => onShowDetails(connection),
      onLogout: state === "connected" ? () => onLogoutConnection(connection.hostId) : undefined,
      deleteLabel: onyxSecond,
      deleteTooltip: umbraSecond,
      deleteDisabled: timberSecond,
      onDelete: () => onRequestDelete(connection)
    }} />}
      {connection.online ? <AppInitialYC checked={connection.autoConnect} disabled={!wyePrime} onChange={ivorySecond => onToggleConnection(connection.hostId, ivorySecond)} ariaLabel={strainerPrime.formatMessage({
      id: "settings.remoteControlConnections.table.connect.ariaLabel",
      defaultMessage: "Connect {connectionName}",
      description: "Screen reader label for the remote control connection toggle"
    }, {
      connectionName: connection.displayName
    })} /> : <OptionalTooltip {...{
      tooltipContent: strainerPrime.formatMessage({
        id: "settings.remoteControlConnections.connect.offlineTooltip",
        defaultMessage: "This device is offline. Refresh to check again",
        description: "Tooltip shown when a remote control auto-connect toggle is disabled because the device is offline"
      }),
      children: <span className="inline-flex">
                <AppInitialYC checked={connection.autoConnect} disabled={true} onChange={jasperSecond => onToggleConnection(connection.hostId, jasperSecond)} ariaLabel={strainerPrime.formatMessage({
          id: "settings.remoteControlConnections.table.connect.ariaLabel",
          defaultMessage: "Connect {connectionName}",
          description: "Screen reader label for the remote control connection toggle"
        }, {
          connectionName: connection.displayName
        })} />
              </span>
    }} />}
    </div>;
  return <TideFifth {...{
    displayName: zincSecond,
    hostId: amberSecond,
    icon: basaltSecond,
    description: _e,
    label: garnetSecond,
    status: be,
    control: hazelSecond
  }} />;
}
function seed(kelpSecond) {
  let {
      connection,
      state
    } = kelpSecond,
    lotusSecond = useIntl(),
    mintSecond = petal(lotusSecond, connection, state);
  let novaSecond = mintSecond,
    oliveSecond = oak(connection, state);
  let prismSecond = <span aria-label={novaSecond} className={oliveSecond} role="img" />;
  return <OptionalTooltip {...{
    tooltipContent: novaSecond,
    children: prismSecond
  }} />;
}
function _a(quillSecond, reefSecond, sageSecond, topazSecond, ultraSecond) {
  if (!quillSecond && !reefSecond) return wind.signedInDeviceAuthorizationRequiredOfflineSubtitle;
  if (!quillSecond) return wind.signedInDeviceAuthorizationRequiredSubtitle;
  if (!reefSecond) return wind.signedInDeviceOfflineSubtitle;
  if (!sageSecond) return wind.remoteCodexUpdateRequiredSubtitle;
  if (ultraSecond === "connecting" && topazSecond != null) switch (topazSecond) {
    case "initializing":
      return identity({
        id: "settings.remoteConnections.deviceConnections.signedInDeviceInitializingSubtitle",
        defaultMessage: "Initializing secure connection",
        description: "Subtitle for a signed-in device while its secure remote-control transport is starting"
      });
    case "waiting-for-device":
      return identity({
        id: "settings.remoteConnections.deviceConnections.signedInDeviceWaitingForDeviceSubtitle",
        defaultMessage: "Waiting for device",
        description: "Subtitle for a signed-in device while waiting for its remote app-server to respond"
      });
    case "confirming-connection":
      return identity({
        id: "settings.remoteConnections.deviceConnections.signedInDeviceConfirmingConnectionSubtitle",
        defaultMessage: "Confirming connection",
        description: "Subtitle for a signed-in device while its initialized app-server connection is being confirmed"
      });
  }
  return ultraSecond === "connecting" || ultraSecond === "restarting" ? wind.signedInDeviceConnectingSubtitle : ultraSecond === "error" ? wind.signedInDeviceConnectionFailedSubtitle : ultraSecond === "connected" ? wind.signedInDeviceOnlineSubtitle : wind.signedInDeviceDisconnectedSubtitle;
}
var trail,
  urn,
  vine,
  wind,
  yarrow = esmInit(() => {
    trail = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    urn = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    conversationsSidebarMessages();
    DeferredUiV2();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensureDropdownMenuPopoverInit();
    svgToDataUri();
    ensureConversationPageEsm_Act_Init();
    timber();
    isle();
    nest();
    quiet();
    wind = identity({
      signedInDeviceAuthorizationRequiredOfflineSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceAuthorizationRequiredOfflineSubtitle",
        defaultMessage: "Requires authorization · Offline",
        description: "Subtitle for unauthorized offline signed-in-device rows in the device connections table"
      },
      signedInDeviceAuthorizationRequiredSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceAuthorizationRequiredSubtitle",
        defaultMessage: "Requires authorization",
        description: "Subtitle for unauthorized signed-in-device rows in the device connections table"
      },
      signedInDeviceOfflineSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceOfflineSubtitle",
        defaultMessage: "Offline",
        description: "Subtitle for offline signed-in-device rows in the device connections table"
      },
      remoteCodexUpdateRequiredSubtitle: {
        id: "settings.remoteConnections.deviceConnections.remoteCodexUpdateRequiredSubtitle",
        defaultMessage: "Please update ChatGPT on the remote device to the latest version",
        description: "Subtitle for online signed-in-device rows that require a newer Codex version"
      },
      signedInDeviceConnectingSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceConnectingSubtitle",
        defaultMessage: "Connecting",
        description: "Subtitle for signed-in-device rows whose app-server transport is connecting"
      },
      signedInDeviceConnectionFailedSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceConnectionFailedSubtitle",
        defaultMessage: "Connection failed",
        description: "Subtitle for signed-in-device rows whose app-server transport failed"
      },
      signedInDeviceDisconnectedSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceDisconnectedSubtitle",
        defaultMessage: "Disconnected",
        description: "Subtitle for signed-in-device rows whose app-server transport is disconnected"
      },
      signedInDeviceOnlineSubtitle: {
        id: "settings.remoteConnections.deviceConnections.signedInDeviceOnlineSubtitle",
        defaultMessage: "Connected",
        description: "Subtitle for online signed-in-device rows in the device connections table"
      }
    });
  }),
  azure,
  birch = esmInit(() => {
    azure = "" + new URL("dialog-artwork-ssh-remote-control-allow-Cx1m-RXh.png", import.meta.url).href;
  });
function canyon(vaporSecond) {
  let {
      allowing,
      open,
      onAllow,
      onOpenChange
    } = vaporSecond,
    wheatSecond = useIntl(),
    yarnSecond = event => {
      event.preventDefault();
      onAllow();
    };
  let zephyrSecond = wheatSecond.formatMessage({
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.artworkAlt",
    defaultMessage: "iPhone Pro and Samsung Galaxy devices connected to ChatGPT on a computer",
    description: "Alternative text for artwork in the dialog confirming that authorized devices can control a remote host connection"
  });
  let acornSecond = <div className="relative aspect-[1440/642] overflow-hidden">
      <img alt={zephyrSecond} className="h-full w-full object-cover" src={azure} />
    </div>;
  let bloomSecond = <RealtimeVoiceHostId {...{
    className: "heading-dialog font-semibold text-pretty",
    children: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.allowSignedInDevicesDialog.title",
      defaultMessage: "Allow devices to control this connection?",
      description: "Title for the dialog confirming that other authorized devices can control a remote host connection"
    }} />
  }} />;
  let coralSecond = <div className="flex flex-col gap-2">
      {bloomSecond}
      {<IsStartingProcessExpired {...{
      className: "text-base leading-normal tracking-normal text-pretty text-token-description-foreground",
      children: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.details.allowSignedInDevicesDialog.description",
        defaultMessage: "This will allow authorized devices like your phone to discover and control ChatGPT on this connection",
        description: "Description for the dialog confirming that other authorized devices can control a remote host connection"
      }} />
    }} />}
    </div>;
  let driftSecond = <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.allow",
    defaultMessage: "Allow",
    description: "Primary action for allowing authorized devices to control a remote host connection"
  }} />;
  let eagleSecond = <div className="flex flex-col items-center gap-6 px-8 py-7 text-center">
      {coralSecond}
      {<ReadLoginRouteQuerySnapshot {...{
      type: "submit",
      size: "large",
      className: "justify-center",
      loading: allowing,
      children: driftSecond
    }} />}
    </div>;
  let frostSecond = <form className="pointer-events-auto flex flex-col overflow-hidden" onSubmit={yarnSecond}>
      {acornSecond}
      {eagleSecond}
    </form>;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    onOpenChange,
    contentClassName: "w-[420px] bg-token-bg-primary",
    dialogCloseClassName: "[&>svg]:icon-sm",
    size: "feature",
    children: frostSecond
  }} />;
}
var dew,
  ever,
  field = esmInit(() => {
    dew = reactCompilerRuntime();
    ensureIntlFormattersInit();
    birch();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
  }),
  grain,
  haven,
  ink = esmInit(() => {
    react();
    haven = glideSecond => <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...glideSecond}>
        <path d="M13.6835 15.7501V14.0986H12.0321C11.7015 14.0986 11.4335 13.8306 11.4335 13.5001C11.4335 13.1695 11.7015 12.9015 12.0321 12.9015H13.6835V11.2501C13.6835 10.9195 13.9515 10.6515 14.2821 10.6515C14.6124 10.6518 14.8797 10.9197 14.8797 11.2501V12.9015H16.5321C16.8624 12.9018 17.1297 13.1697 17.1297 13.5001C17.1297 13.8304 16.8624 14.0983 16.5321 14.0986H14.8797V15.7501C14.8797 16.0804 14.6124 16.3483 14.2821 16.3486C13.9515 16.3486 13.6835 16.0806 13.6835 15.7501ZM1.90796 11.4302V6.56988C1.90796 5.98128 1.90715 5.50346 1.93872 5.11704C1.97087 4.72385 2.03942 4.37253 2.20591 4.04566L2.31138 3.85669C2.57426 3.42813 2.95166 3.07898 3.4021 2.84946L3.52603 2.79146C3.81758 2.66646 4.12951 2.6104 4.47349 2.58228C4.85991 2.55071 5.33772 2.55152 5.92632 2.55152H6.5521C6.68097 2.55152 6.7706 2.55136 6.85884 2.55679L7.08736 2.58052C7.61505 2.65783 8.11055 2.88791 8.51118 3.24497L8.73179 3.4603C8.83268 3.56206 8.8658 3.59515 8.8979 3.62378L8.9981 3.70552C9.23801 3.88571 9.52644 3.99279 9.82779 4.01138L10.0616 4.01402H12.3221C12.8248 4.01402 13.2325 4.01367 13.564 4.03687C13.9011 4.06047 14.2044 4.1102 14.4921 4.23286L14.7294 4.348C15.2673 4.6414 15.6939 5.10866 15.9362 5.67691L16.0144 5.89488C16.0811 6.11589 16.1135 6.3479 16.1313 6.59888C16.1547 6.92815 16.155 7.33277 16.155 7.83023C16.155 7.98873 16.0921 8.14082 15.9801 8.25298C15.8679 8.36522 15.7152 8.42876 15.5565 8.42876H3.10503V11.4302C3.10503 12.0386 3.10561 12.4591 3.13228 12.7855C3.15838 13.1047 3.20659 13.2811 3.2729 13.4113L3.33179 13.5176C3.47964 13.7586 3.69197 13.9546 3.94527 14.0836L4.05337 14.1302C4.17281 14.1729 4.33182 14.2047 4.57105 14.2243C4.89742 14.2509 5.31798 14.2515 5.92632 14.2515H8.46812L8.58941 14.2638C8.86198 14.3197 9.06665 14.5609 9.06665 14.8501C9.06665 15.1392 8.86198 15.3804 8.58941 15.4363L8.46812 15.4486H5.92632C5.33772 15.4486 4.85991 15.4494 4.47349 15.4178C4.12951 15.3897 3.81758 15.3336 3.52603 15.2086L3.4021 15.1506C2.95166 14.9211 2.57426 14.572 2.31138 14.1434L2.20591 13.9544C2.03943 13.6276 1.97087 13.2763 1.93872 12.8831C1.90715 12.4966 1.90796 12.0188 1.90796 11.4302ZM3.10503 7.23169H14.9553C14.953 7.01598 14.9487 6.83804 14.9377 6.68413C14.9233 6.48053 14.8995 6.34366 14.8683 6.24029L14.8349 6.14624C14.6987 5.82675 14.4588 5.56421 14.1564 5.39917L14.0228 5.33413C13.9089 5.28556 13.755 5.25052 13.4805 5.2313C13.2005 5.2117 12.8416 5.21109 12.3221 5.21109H10.0616L9.75396 5.20581C9.21821 5.17277 8.70567 4.98302 8.27915 4.66265L8.10161 4.51763C8.03549 4.45868 7.97286 4.39405 7.88189 4.3023L7.71489 4.13882C7.48938 3.93777 7.21043 3.80782 6.91333 3.76441L6.78589 3.75122C6.74288 3.74857 6.69573 3.74859 6.5521 3.74859H5.92632C5.31798 3.74859 4.89742 3.74917 4.57105 3.77583C4.33182 3.79539 4.17281 3.82718 4.05337 3.86988L3.94527 3.91646C3.69197 4.04554 3.47964 4.24149 3.33179 4.48247L3.2729 4.58882C3.20659 4.71897 3.15838 4.89536 3.13228 5.2146C3.10561 5.54098 3.10503 5.96154 3.10503 6.56988V7.23169Z" fill="currentColor" />
      </svg>;
  });
function jadeite(honeySecond) {
  let {
      action,
      connectionKind,
      error,
      isRestartAvailableNotice,
      restartAvailableNotice,
      statusMessage
    } = honeySecond,
    irisSecond = useIntl();
  if (action != null && (isRestartAvailableNotice || error?.code === "restart-required")) {
    let northSecond = <CliffFifth {...{}} />;
    let orbitSecond = <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.restartNotice.message",
      defaultMessage: "<restart>Restart</restart> to update your CLI version",
      description: "Inline update message shown when a connected SSH remote has an installed Codex update ready",
      values: {
        restart: ridgeSecond => <button key="restart" className="cursor-interaction border-0 bg-transparent p-0 text-token-text-link-foreground hover:underline" type="button" onClick={action.onClick}>
                {ridgeSecond}
              </button>
      }
    }} />;
    let pineSecond = restartAvailableNotice == null ? null : <OptionalTooltip {...{
      side: "bottom",
      tooltipContent: irisSecond.formatMessage({
        id: "settings.remoteConnections.restartNotice.tooltip",
        defaultMessage: "Update available: {installedVersion}. Currently running {currentVersion}",
        description: "Tooltip shown from the inline update notice with the installed and current CLI versions"
      }, {
        currentVersion: restartAvailableNotice.currentVersion,
        installedVersion: restartAvailableNotice.installedVersion
      }),
      children: <span aria-label={irisSecond.formatMessage({
        id: "settings.remoteConnections.restartNotice.details",
        defaultMessage: "Update details",
        description: "Accessible label for the inline update details tooltip trigger"
      })} className="text-token-text-secondary">
                {<ShellLayoutMetricsContext {...{
          "aria-hidden": true,
          className: "icon-xs shrink-0"
        }} />}
              </span>
    }} />;
    let questSecond;
    return <>
        {northSecond}
        <span className="inline-flex min-w-0 items-center gap-1">
          {orbitSecond}
          {pineSecond}
        </span>
      </>;
  }
  if (error == null || statusMessage == null) return null;
  let jewelSecond = <CliffFifth {...{}} />;
  let knollSecond = error.code === "connection-failed" ? <BrookFifth {...{
    connectionKind,
    statusMessage
  }} /> : error.code === "update-required" ? <span className="inline-flex min-w-0 items-center gap-1">
        {<MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.updateRequiredInline",
      defaultMessage: "Update your CLI version",
      description: "Concise inline message shown when an SSH remote requires a newer Codex version"
    }} />}
        {<OptionalTooltip {...{
      side: "bottom",
      tooltipContent: connectionKind === "wsl" ? irisSecond.formatMessage({
        id: "settings.remoteConnections.updateRequiredInline.wslTooltip",
        defaultMessage: "Open your WSL distro and update the Codex CLI to {minRequiredVersion} or newer. Currently installed: {currentVersion}",
        description: "Tooltip shown from the inline update-required notice for WSL connections"
      }, {
        currentVersion: error.currentVersion,
        minRequiredVersion: error.minRequiredVersion
      }) : irisSecond.formatMessage({
        id: "settings.remoteConnections.updateRequiredInline.tooltip",
        defaultMessage: "Minimum required: {minRequiredVersion}. Currently installed: {currentVersion}",
        description: "Tooltip shown from the inline update-required notice with the installed and minimum required CLI versions"
      }, {
        currentVersion: error.currentVersion,
        minRequiredVersion: error.minRequiredVersion
      }),
      children: <span aria-label={irisSecond.formatMessage({
        id: "settings.remoteConnections.updateRequiredInline.details",
        defaultMessage: "Update details",
        description: "Accessible label for the inline update-required details tooltip trigger"
      })} className="text-token-text-secondary">
                  {<ShellLayoutMetricsContext {...{
          "aria-hidden": true,
          className: "icon-xs shrink-0"
        }} />}
                </span>
    }} />}
      </span> : statusMessage;
  let lunarSecond = <span className="min-w-0 break-words">
      {knollSecond}
    </span>;
  let mossSecond = <ElmFifth {...{
    action
  }} />;
  return <>
      {jewelSecond}
      <span className="inline-flex min-w-0 items-center gap-1">
        {lunarSecond}
        {mossSecond}
      </span>
    </>;
}
function kernel(stormSecond) {
  let {
      connectionKind,
      statusMessage
    } = stormSecond,
    tideSecond = useIntl(),
    unitySecond = connectionKind === "wsl" ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.genericWslError",
      defaultMessage: "WSL connection failed",
      description: "Concise inline message shown for generic WSL connection failures"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.genericSshError",
      defaultMessage: "SSH connection failed",
      description: "Concise inline message shown for generic SSH connection failures"
    }} />;
  let valeSecond = connectionKind === "wsl" ? tideSecond.formatMessage({
    id: "settings.remoteConnections.genericWslError.details",
    defaultMessage: "Error details",
    description: "Accessible label for the generic WSL error details tooltip trigger"
  }) : tideSecond.formatMessage({
    id: "settings.remoteConnections.genericSshError.details",
    defaultMessage: "Error details",
    description: "Accessible label for the generic SSH error details tooltip trigger"
  });
  let waveSecond = <ShellLayoutMetricsContext {...{
    "aria-hidden": true,
    className: "icon-xs shrink-0"
  }} />;
  let apexSecond = <span aria-label={valeSecond} className="text-token-text-secondary">
      {waveSecond}
    </span>;
  let brookSecond = <OptionalTooltip {...{
    side: "bottom",
    tooltipContent: statusMessage,
    children: apexSecond
  }} />;
  return <span className="inline-flex min-w-0 items-center gap-1">
      {unitySecond}
      {brookSecond}
    </span>;
}
function leaf() {
  return <span aria-hidden={true}>{"·"}</span>;
}
function maple(cliffSecond) {
  let {
    action
  } = cliffSecond;
  if (action == null) return null;
  let duskSecond = action.disabled === true || action.loading === true,
    elmSecond = action.loading === true && action.loadingLabel != null ? action.loadingLabel : action.label,
    fernSecond = <button type="button" className="cursor-interaction border-0 bg-transparent p-0 text-token-text-link-foreground hover:underline disabled:cursor-default disabled:text-token-text-secondary disabled:no-underline" disabled={duskSecond} onClick={action.onClick}>
        {elmSecond}
      </button>;
  let groveSecond = fernSecond,
    hillSecond = action.renderInElectronOnly === true ? <ElectronOnly {...{
      electron: true,
      children: groveSecond
    }} /> : groveSecond;
  let isleSecond = hillSecond;
  return action.tooltipText == null ? isleSecond : <OptionalTooltip {...{
    tooltipContent: action.tooltipText,
    children: isleSecond
  }} />;
}
