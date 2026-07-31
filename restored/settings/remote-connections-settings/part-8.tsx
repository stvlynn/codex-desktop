// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 8/12
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
import { ensureComposerEsm_CU_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
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
const AppInitialBQ: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVC: any = undefined;
const Queued: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const amber: any = undefined;
const apex: any = undefined;
const daisy: any = undefined;
const elm: any = undefined;
const field: any = undefined;
const river: any = undefined;
const timber: any = undefined;
const tokenInvalidated: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
const wheat: any = undefined;
const yarrow: any = undefined;
const yonder: any = undefined;

function no(lotusThird, mintThird, novaThird) {
  if (lotusThird.source === "remote-control") {
    let reefThird = lotusThird.hostName || nook,
      sageThird = inlet(lotusThird),
      topazThird = lotusThird.appServerVersion || nook;
    return [{
      copyValue: lotusThird.hostName || null,
      id: "host",
      label: <MemoizedFormattedMessage {...{
        id: "settings.remoteControlConnections.details.host",
        defaultMessage: "Host",
        description: "Modal label for a signed-in device host name"
      }} />,
      value: reefThird
    }, {
      copyValue: sageThird === nook ? null : sageThird,
      id: "platform",
      label: <MemoizedFormattedMessage {...{
        id: "settings.remoteControlConnections.details.platform",
        defaultMessage: "OS / arch",
        description: "Modal label for remote control OS and architecture"
      }} />,
      value: sageThird
    }, {
      copyValue: lotusThird.appServerVersion || null,
      id: "version",
      label: <MemoizedFormattedMessage {...{
        id: "settings.remoteControlConnections.details.version",
        defaultMessage: "Version",
        description: "Modal label for remote control app-server version"
      }} />,
      value: topazThird
    }, {
      copyValue: lotusThird.lastSeenAt,
      id: "lastSeen",
      label: <MemoizedFormattedMessage {...{
        id: "settings.remoteControlConnections.details.lastSeen",
        defaultMessage: "Last seen",
        description: "Modal label for when a signed-in device was last seen"
      }} />,
      value: lotusThird.lastSeenAt == null ? nook : <INLINE_MENTION_GROUP_CLASS {...{
        dateString: lotusThird.lastSeenAt
      }} />
    }];
  }
  if (isWslHostSource(lotusThird)) {
    let ultraThird = [{
        copyValue: lotusThird.distro,
        id: "distro",
        label: <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.details.wslDistro",
          defaultMessage: "Distro",
          description: "Modal label for a WSL connection distribution"
        }} />,
        value: lotusThird.distro
      }],
      vaporThird = novaThird?.trim();
    return mintThird === "connected" && vaporThird != null && vaporThird.length > 0 && ultraThird.push({
      copyValue: vaporThird,
      id: "version",
      label: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.details.version",
        defaultMessage: "Version",
        description: "Modal label for SSH connection app-server version"
      }} />,
      value: vaporThird
    }), ultraThird;
  }
  let oliveThird = [],
    prismThird = lotusThird.sshAlias?.trim();
  lotusThird.source === "discovered" && prismThird && oliveThird.push({
    copyValue: prismThird,
    id: "alias",
    label: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.alias",
      defaultMessage: "Alias",
      description: "Modal label for a discovered SSH connection alias"
    }} />,
    value: prismThird
  });
  oliveThird.push({
    copyValue: lotusThird.sshHost,
    id: "host",
    label: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.host",
      defaultMessage: "Host",
      description: "Modal label for an SSH connection host name"
    }} />,
    value: lotusThird.sshHost
  }, {
    copyValue: lotusThird.sshPort == null ? null : String(lotusThird.sshPort),
    id: "port",
    label: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.port",
      defaultMessage: "Port",
      description: "Modal label for SSH connection port"
    }} />,
    value: lotusThird.sshPort == null ? nook : String(lotusThird.sshPort)
  }, {
    copyValue: lotusThird.identity,
    id: "identity",
    label: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.identity",
      defaultMessage: "Identity",
      description: "Modal label for SSH connection identity file"
    }} />,
    value: lotusThird.identity ?? nook
  });
  let quillThird = novaThird?.trim();
  return mintThird === "connected" && quillThird != null && quillThird.length > 0 && oliveThird.push({
    copyValue: quillThird,
    id: "version",
    label: <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.details.version",
      defaultMessage: "Version",
      description: "Modal label for SSH connection app-server version"
    }} />,
    value: quillThird
  }), oliveThird;
}
function inlet(wheatThird) {
  let yarnThird = [wheatThird.os, wheatThird.arch].filter(item => item.trim().length > 0);
  return yarnThird.length > 0 ? yarnThird.join(" / ") : nook;
}
async function jetty({
  connection,
  environmentId
}) {
  let zephyrThird = appServices.remoteControlEnvironments;
  if (!(environmentId == null || zephyrThird == null)) try {
    await zephyrThird.renameIfDefault({
      envId: environmentId,
      name: connection.displayName
    });
  } catch (acornThird) {
    appActionSidebarProjectRefSchema.warning("wsl_remote_control_environment_auto_rename_failed", {
      safe: {},
      sensitive: {
        error: acornThird
      }
    });
  }
}
var knob,
  ledge,
  mire,
  nook,
  oxbow = esmInit(() => {
    knob = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ledge = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    conversationsSidebarMessages();
    ensureGitMetadataQueryInit();
    ensureCodexMobileSetupDialogInit();
    AppInitialBQ();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureImportSettingsCLInit();
    AppInitialUj();
    useClearBrowserBrowsingDataMutation();
    useTeenOnboardingAgeGate();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    apex();
    isIndeterminate();
    useEventCallback();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    ensureSkillsPageHelpersInit();
    ensureComposerEsm_FH_Init();
    posixPathBasename();
    ensureRemoteConnectionsFeatureInit();
    elm();
    codexMobileSetupFlowL();
    amber();
    yarrow();
    tokenInvalidated();
    field();
    yonder();
    daisy();
    nook = "—";
  }),
  pond,
  quarry = esmInit(() => {
    pond = "" + new URL("remote-control-authorization-dialog-artwork-BDkdoGfj.png", import.meta.url).href;
  });
function rapids(bloomThird) {
  let {
      authorizing,
      open,
      onAuthorize,
      onOpenChange
    } = bloomThird,
    coralThird = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    driftThird = {
      "aria-describedby": undefined
    };
  let eagleThird = platform === "windows" ? coralThird.formatMessage({
    id: "settings.remoteConnections.authorizationDialog.title.windows",
    defaultMessage: "Control other devices from this PC",
    description: "Accessible title for the modal that authorizes this Windows device to control other devices"
  }) : coralThird.formatMessage({
    id: "settings.remoteConnections.authorizationDialog.title",
    defaultMessage: "Control other devices from this Mac",
    description: "Accessible title for the modal that authorizes this Mac to control other devices"
  });
  let frostThird = <RealtimeVoiceHostId {...{
    className: "sr-only",
    children: eagleThird
  }} />;
  let glideThird = <SeedFifth {...{}} />;
  let honeyThird = <div className="heading-dialog font-semibold">
      {platform === "windows" ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.authorizationDialog.heading.windows",
      defaultMessage: "Control other devices from this PC",
      description: "Heading for the modal that authorizes this Windows device to control other devices"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.authorizationDialog.heading",
      defaultMessage: "Control other devices from this Mac",
      description: "Heading for the modal that authorizes this Mac to control other devices"
    }} />}
    </div>;
  let irisThird = <div className="text-base leading-normal tracking-normal text-token-description-foreground">
      {platform === "windows" ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.authorizationDialog.description.windows",
      defaultMessage: "Authorize this PC to control other devices signed in to your ChatGPT account",
      description: "Description for the modal that authorizes this Windows device to control other devices"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.authorizationDialog.description",
      defaultMessage: "Authorize this Mac to control other devices signed in to your ChatGPT account",
      description: "Description for the modal that authorizes this Mac to control other devices"
    }} />}
    </div>;
  let jewelThird = <div className="flex flex-col gap-2 text-center">
      {honeyThird}
      {irisThird}
    </div>;
  let knollThird = <CodexMobileSetupDialogOption {...{
    variant: "dialog"
  }} />;
  let lunarThird = <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.authorizationDialog.authorize",
    defaultMessage: "Authorize on chatgpt.com",
    description: "Primary action for authorizing this Mac to control other devices"
  }} />;
  let mossThird = <ReadLoginRouteQuerySnapshot {...{
    size: "large",
    loading: authorizing,
    onClick: onAuthorize,
    children: lunarThird
  }} />;
  let northThird = <div className="flex flex-col items-center gap-6 px-8 py-6">
      {jewelThird}
      {knollThird}
      {mossThird}
    </div>;
  let orbitThird = <div className="pointer-events-auto flex flex-col overflow-hidden">
      {frostThird}
      {glideThird}
      {northThird}
    </div>;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    onOpenChange,
    contentProps: driftThird,
    contentClassName: "w-[460px]",
    size: "feature",
    children: orbitThird
  }} />;
}
function spur() {
  return <div className="relative h-[214px] overflow-hidden">
      <img alt="" aria-hidden={true} className="h-full w-full object-cover" src={pond} />
    </div>;
}
var tor,
  updraft,
  verge = esmInit(() => {
    tor = reactCompilerRuntime();
    ensureIntlFormattersInit();
    quarry();
    ensureCodexMobileSetupDialogStylesInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    macOS4();
  });
function _o(pineThird) {
  let {
      connections,
      refreshing,
      isSaving,
      open,
      onOpenChange,
      onRefresh,
      onSave,
      onToggleConnection,
      selectedEnvIds
    } = pineThird,
    questThird = useIntl(),
    ridgeThird = event => {
      event.preventDefault();
      onSave();
    };
  let stormThird = ridgeThird,
    tideThird = <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlDiscoveryDialog.empty",
      defaultMessage: "No signed-in devices available",
      description: "Empty state shown when there are no signed-in devices to add"
    }} />;
  let unityThird = questThird.formatMessage({
    id: "settings.remoteConnections.remoteControlDiscoveryDialog.refresh",
    defaultMessage: "Refresh",
    description: "Accessible label for refreshing available signed-in devices in the add-device dialog"
  });
  let valeThird = refreshing || isSaving,
    waveThird = <AppIconAlt {...{
      className: "icon-sm"
    }} />;
  let apexThird = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": unityThird,
    color: "ghost",
    size: "icon",
    disabled: valeThird,
    loading: refreshing,
    onClick: onRefresh,
    children: waveThird
  }} />;
  let brookThird = <UrnFifth {...{}} />;
  let cliffThird = <OptionalTooltip {...{
    interactive: true,
    side: "top",
    tooltipBodyClassName: "max-w-[320px]",
    tooltipContent: brookThird,
    children: <button type="button" className="min-w-0 flex-1 cursor-interaction text-left text-sm text-token-text-primary">
            {<MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.remoteControlDiscoveryDialog.missingDevice",
        defaultMessage: "Don’t see your device here?",
        description: "Tooltip trigger that explains how to make another device discoverable"
      }} />}
          </button>
  }} />;
  let duskThird = connections.length === 0 || isSaving,
    elmThird = <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlDiscoveryDialog.save",
      defaultMessage: "Add",
      description: "Primary action that adds selected signed-in devices"
    }} />;
  let fernThird = <ReadLoginRouteQuerySnapshot {...{
    type: "submit",
    size: "large",
    disabled: duskThird,
    children: elmThird
  }} />;
  let groveThird = <div className="flex items-center gap-3">
      {apexThird}
      {cliffThird}
      {fernThird}
    </div>;
  let hillThird = connections.length === 0 ? null : connections.map(item => {
    let juniperThird = selectedEnvIds.includes(item.envId);
    return <div key={item.envId} aria-disabled={isSaving} className={isSaving ? "cursor-not-allowed" : "cursor-interaction"} onClick={isSaving ? undefined : () => {
      onToggleConnection(item.envId);
    }} onKeyDown={isSaving ? undefined : event => {
      event.key !== "Enter" && event.key !== " " || (event.preventDefault(), onToggleConnection(item.envId));
    }} role="button" tabIndex={isSaving ? -1 : 0}>
              {<EnsurePersonalizationCInit {...{
        icon: river(item),
        label: item.displayName,
        description: <TrailFifth {...{
          connection: item
        }} />,
        control: <div className="relative flex items-center" onClick={yard} onKeyDown={weir}>
                        {<Queued {...{
            "aria-label": questThird.formatMessage({
              id: "settings.remoteConnections.remoteControlDiscoveryDialog.toggleSelection",
              defaultMessage: "Select {connectionName}",
              description: "Accessible label for staging a signed-in device with a checkbox"
            }, {
              connectionName: item.displayName
            }),
            checked: juniperThird,
            disabled: isSaving,
            onCheckedChange: () => {
              onToggleConnection(item.envId);
            }
          }} />}
                      </div>
      }} />}
            </div>;
  });
  let isleThird = <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.remoteControlDiscoveryDialog.title",
    defaultMessage: "Add device",
    description: "Title for the dialog that lets users add a signed-in device"
  }} />;
  return <OrbitFifth {...{
    emptyState: tideThird,
    footer: groveThird,
    list: hillThird,
    open,
    title: isleThird,
    onOpenChange,
    onSubmit: stormThird
  }} />;
}
function weir(event) {
  event.stopPropagation();
}
function yard(event) {
  event.stopPropagation();
}
function anchor(lagoonThird) {
  let {
      connection
    } = lagoonThird,
    meadowThird = connection.online ? "block size-2 rounded-full bg-token-charts-green" : "block size-2 rounded-full bg-gray-400",
    nestThird = <span className={meadowThird} />;
  let oakThird = connection.online ? <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.remoteControlDiscoveryDialog.online",
    defaultMessage: "Online",
    description: "Status label for an available signed-in device in the add-device dialog"
  }} /> : connection.lastSeenAt == null ? <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.remoteControlDiscoveryDialog.offline",
    defaultMessage: "Offline",
    description: "Status label for an unavailable signed-in device in the add-device dialog"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.remoteConnections.remoteControlDiscoveryDialog.lastUsed",
    defaultMessage: "Last used {date}",
    description: "Status label for a signed-in device that was seen previously in the add-device dialog",
    values: {
      date: <INLINE_MENTION_GROUP_CLASS key={"last-used-at"} {...{
        dateString: connection.lastSeenAt
      }} />
    }
  }} />;
  return <div className="flex items-center gap-2">
      {nestThird}
      {oakThird}
    </div>;
}
function bolt() {
  let {
      platform
    } = useHostPlatformModifierSymbol(),
    petalThird,
    quietThird;
  petalThird = <li>
      {<MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.openApp",
      defaultMessage: "Go to the ChatGPT app on your device",
      description: "First tooltip step for making another device discoverable"
    }} />}
    </li>;
  quietThird = <li>
      {<MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.openConnections",
      defaultMessage: "Open Connections tab",
      description: "Second tooltip step for making another device discoverable"
    }} />}
    </li>;
  let rainThird = <ol className="list-decimal space-y-0 pl-4">
      {petalThird}
      {quietThird}
      <li>
        {<MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.clickSetup",
        defaultMessage: "Click “{setupLabel}” to make your device discoverable",
        description: "Third tooltip step for making another device discoverable",
        values: {
          setupLabel: <strong>
                    {<MemoizedFormattedMessage {...{
              id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.setupLabel",
              defaultMessage: "Set up",
              description: "Inline button label quoted inside the missing-device tooltip"
            }} />}
                  </strong>
        }
      }} />}
      </li>
    </ol>;
  return <div className="space-y-4 text-left">
      {rainThird}
      <div>
        {<MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.enableHost",
        defaultMessage: "Or turn on {settingLabel} if the device is already set up",
        description: "Fallback tooltip guidance for making another device discoverable",
        values: {
          settingLabel: <strong>
                    {platform === "windows" ? <MemoizedFormattedMessage {...{
              id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.settingLabel.windows",
              defaultMessage: "Allow this PC to be discovered and controlled",
              description: "Inline settings label quoted inside the missing-device tooltip on Windows"
            }} /> : <MemoizedFormattedMessage {...{
              id: "settings.remoteConnections.remoteControlDiscoveryDialog.tooltip.settingLabel",
              defaultMessage: "Allow this Mac to be discovered and controlled",
              description: "Inline settings label quoted inside the missing-device tooltip"
            }} />}
                  </strong>
        }
      }} />}
      </div>
    </div>;
}
var cog,
  disc,
  edge = esmInit(() => {
    cog = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    openMcpAppSidePanelTab();
    ensureImportSettingsCLInit();
    ensureComposerEsm_Hlt_Init();
    macOS4();
    useEventCallback();
    AppInitialVC();
    timber();
    wheat();
  });
