// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 9/12
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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_CU_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
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
const DeferredUiU: any = undefined;
const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const SetRemoteControlEnabledForHost: any = undefined;
const apex: any = undefined;
const pond: any = undefined;
const quarry: any = undefined;

function forge(seedThird) {
  let {
      connection,
      open,
      isDeleting,
      onOpenChange,
      onConfirm
    } = seedThird,
    trailThird = event => {
      event.preventDefault();
      onConfirm();
    };
  let urnThird = trailThird,
    vineThird = connection?.displayName ?? "",
    windThird = <MemoizedFormattedMessage {...{
      id: "settings.remoteControlConnections.deleteDialog.title",
      defaultMessage: "Delete {connectionName}?",
      description: "Title for dialog confirming deletion of a remote control environment",
      values: {
        connectionName: vineThird
      }
    }} />;
  let yarrowThird = <MemoizedFormattedMessage {...{
    id: "settings.remoteControlConnections.deleteDialog.subtitle",
    defaultMessage: "This removes the environment and its remote control tasks from ChatGPT. This cannot be undone.",
    description: "Subtitle for dialog confirming deletion of a remote control environment"
  }} />;
  let azureThird = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: windThird,
      subtitle: yarrowThird
    }} />
  }} />;
  let birchThird = () => onOpenChange(false);
  let canyonThird = <MemoizedFormattedMessage {...{
    id: "settings.remoteControlConnections.deleteDialog.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for remote control environment delete dialog"
  }} />;
  let dewThird = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: isDeleting,
    type: "button",
    onClick: birchThird,
    children: canyonThird
  }} />;
  let everThird = <MemoizedFormattedMessage {...{
    id: "settings.remoteControlConnections.deleteDialog.confirm",
    defaultMessage: "Delete",
    description: "Confirm button label for remote control environment delete dialog"
  }} />;
  let fieldThird = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: isDeleting,
    type: "submit",
    children: everThird
  }} />;
  let grainThird = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [dewThird, fieldThird]
    }} />
  }} />;
  let havenThird = <DeferredUiB {...{
    as: "form",
    onSubmit: urnThird,
    children: [azureThird, grainThird]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    onOpenChange,
    size: "compact",
    children: havenThird
  }} />;
}
var gear,
  hinge,
  iron = esmInit(() => {
    gear = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
  });
function joint(inkThird) {
  let {
      isPairingCodeDisabled,
      onOpenChange,
      onPairingCodeEntered,
      open
    } = inkThird,
    [jadeiteThird, kernelThird] = screw.useState(""),
    leafThird = eddyThird => {
      kernelThird(eddyThird);
      !(eddyThird.length !== valve || isPairingCodeDisabled) && onPairingCodeEntered(piston(eddyThird));
    };
  let mapleThird = leafThird,
    nimbusThird = event => {
      event.preventDefault();
      mapleThird(jadeiteThird);
    };
  let opalThird = nimbusThird,
    plumeThird = <RealtimeVoiceHostId {...{
      className: "sr-only",
      children: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.manualPairingDialog.title",
        defaultMessage: "Add a device",
        description: "Accessible title for the manual remote control pairing dialog"
      }} />
    }} />;
  let quillowThird = <div className="relative h-[214px] overflow-hidden">
      <img className="h-full w-full object-cover" alt="" aria-hidden={true} src={pond} />
    </div>;
  let rootThird = <div className="heading-dialog text-center font-semibold">
      {<MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.manualPairingDialog.heading",
      defaultMessage: "Add a device",
      description: "Heading for the manual remote control pairing dialog"
    }} />}
    </div>;
  let silkThird = <li>
      {<MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.manualPairingDialog.instructions.openCodex",
      defaultMessage: "Open the ChatGPT app on the computer you want to control, or <a>connect to it over SSH</a>",
      description: "First step for finding a manual remote control pairing code",
      values: {
        a: keystone
      }
    }} />}
    </li>;
  let thornThird, uplandThird, vistaThird, wispThird, yonderThird, zenithThird;
  wispThird = latch("settings");
  yonderThird = latch("connections");
  zenithThird = latch("control-mac");
  thornThird = latch("pc");
  uplandThird = latch("add");
  vistaThird = latch("ssh");
  let anvilThird = <GrainFifth {...{
    "aria-hidden": true,
    className: "h-3.5 w-auto stroke-current stroke-[0.5]"
  }} />;
  let beaconThird = <div className="flex w-full flex-col gap-3">
      {rootThird}
      {<IsStartingProcessExpired {...{
      asChild: true,
      children: <ol className="flex list-decimal flex-col gap-3 pl-5 text-base leading-normal tracking-normal text-token-foreground">
                {silkThird}
                <li>
                  {<MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.manualPairingDialog.instructions.openConnections",
            defaultMessage: "Go to <settings>Settings</settings> > <connections>Connections</connections> > <controlMac>Control this Mac</controlMac> or <pc>PC</pc>, then click <add>Add</add>. For SSH connections, select the <ssh>SSH</ssh> tab and click {icon}.",
            description: "Second step for finding a manual remote control pairing code",
            values: {
              settings: wispThird,
              connections: yonderThird,
              controlMac: zenithThird,
              pc: thornThird,
              add: uplandThird,
              ssh: vistaThird,
              icon: <strong key="remote-control-icon" className="inline-flex items-center align-[-2px] font-semibold">
                              {anvilThird}
                              <span className="sr-only">
                                {<MemoizedFormattedMessage {...{
                    id: "settings.remoteConnections.manualPairingDialog.instructions.remoteControlIcon",
                    defaultMessage: "Remote control",
                    description: "Accessible label for the remote control icon in the second manual pairing instruction"
                  }} />}
                              </span>
                            </strong>
            }
          }} />}
                </li>
                <li>
                  {<MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.manualPairingDialog.instructions.enterPin",
            defaultMessage: "Enter the 8-digit PIN below:",
            description: "Third step for entering a manual remote control pairing code"
          }} />}
                </li>
              </ol>
    }} />}
    </div>;
  let cragThird = <YarrowFifth {...{
    disabled: isPairingCodeDisabled,
    pairingCode: jadeiteThird,
    onPairingCodeChange: mapleThird
  }} />;
  let domeThird = <div className="pointer-events-auto flex flex-col overflow-hidden">
      {plumeThird}
      {quillowThird}
      <form className="flex flex-col items-center gap-6 px-8 pt-6 pb-12" onSubmit={opalThird}>
        {beaconThird}
        {cragThird}
      </form>
    </div>;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    onOpenChange,
    children: domeThird
  }} />;
}
function keystone(fjordThird) {
  return <RelativeDateStringLabel key="ssh-instructions-link" className="cursor-interaction underline underline-offset-2" href={bracket} initiator="open_in_browser_bridge" isBrowserSidebarEnabled={false}>
      {screw.Children.toArray(fjordThird)}
    </RelativeDateStringLabel>;
}
function latch(glenThird) {
  return hearthThird => <strong key={glenThird} className="font-semibold">
      {screw.Children.toArray(hearthThird)}
    </strong>;
}
function motor(inletThird) {
  let {
      disabled,
      onPairingCodeChange,
      pairingCode
    } = inletThird,
    jettyThird = useIntl(),
    knobThird = <legend className="sr-only">
        {<MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.manualPairingDialog.codeLabel",
        defaultMessage: "Pairing code",
        description: "Accessible label for the manual remote control pairing code fields"
      }} />}
      </legend>;
  let ledgeThird = jettyThird.formatMessage({
    id: "settings.remoteConnections.manualPairingDialog.codeInput",
    defaultMessage: "Pairing code",
    description: "Accessible label for the manual remote control pairing code input"
  });
  let mireThird = event => {
    onPairingCodeChange(nut(event.currentTarget.value));
  };
  let nookThird = <input className="absolute inset-0 z-10 cursor-interaction opacity-0 outline-none disabled:cursor-not-allowed" aria-label={ledgeThird} autoCapitalize="characters" autoComplete="one-time-code" autoCorrect="off" autoFocus={true} disabled={disabled} inputMode="text" spellCheck={false} type="text" value={pairingCode} onChange={mireThird} />;
  let oxbowThird = Array.from({
    length: valve
  }, (pondThird, quarryThird) => <div key={`manual-pairing-code-character-${quarryThird}`} className="contents">
        {quarryThird === axle ? <span aria-hidden={true} className="px-1 text-2xl text-token-description-foreground">
            {"-"}
          </span> : null}
        <span aria-hidden={true} className={IntlProvider("flex h-[72px] w-12 items-center justify-center rounded-2xl border border-token-border bg-token-input-background text-xl font-medium text-token-input-foreground group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:opacity-40", !disabled && quarryThird === Math.min(pairingCode.length, valve - 1) && "group-focus-within:border-token-focus-border")}>
          {pairingCode[quarryThird]}
        </span>
      </div>);
  return <fieldset className="m-0 flex items-center justify-center border-0 p-0">
      {knobThird}
      <label className="group relative flex items-center justify-center gap-2">
        {nookThird}
        {oxbowThird}
      </label>
    </fieldset>;
}
function nut(rapidsThird) {
  return rapidsThird.replace(/[^a-z0-9]/giu, "").toUpperCase().slice(0, valve);
}
function piston(spurThird) {
  return `${spurThird.slice(0, axle)}-${spurThird.slice(axle)}`;
}
var rivet,
  screw,
  torque,
  valve,
  axle,
  bracket,
  clamp = esmInit(() => {
    rivet = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    screw = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    quarry();
    findProcessManagerRow();
    ensureImportSettingsCLInit();
    apex();
    valve = 8;
    axle = 4;
    bracket = "https://developers.openai.com/codex/remote-connections#connect-to-an-ssh-host";
  });
function drill({
  remoteControlConnectionsAuthorized,
  remoteControlConnectionsAuthRequired,
  showRemoteControlConnectionsSection
}) {
  return showRemoteControlConnectionsSection && !remoteControlConnectionsAuthRequired && !remoteControlConnectionsAuthorized;
}
var engine = esmInit(() => {});
