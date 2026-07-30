// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 2/12
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
const AppInitialBC: any = undefined;
const AppInitialBQ: any = undefined;
const AppInitialBn: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialGtt: any = undefined;
const AppInitialHQ: any = undefined;
const AppInitialJQ: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVQ: any = undefined;
const AppInitialX3: any = undefined;
const AppInitialXQ: any = undefined;
const AppInitialZQ: any = undefined;
const Dismiss: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const Ui: any = undefined;
const amber: any = undefined;
const chatProcessRegister: any = undefined;
const daisy: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const marble: any = undefined;
const remoteSshConnections: any = undefined;
const tokenInvalidated: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;

function garnet(willowPrime) {
  let {
      mode,
      oneToOnePairingInAppEnabled
    } = willowPrime,
    xenonPrime = CodexPluginActionType(appScopeAtom),
    yellowPrime = useNavigate(),
    zincPrime = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    amberPrime = zincPrime.formatMessage({
      id: "settings.remoteConnections.refresh",
      defaultMessage: "Refresh",
      description: "Button label to refresh remote connections"
    });
  let basaltPrime = amberPrime,
    [cedarPrime, daisyPrime] = lotus.useState(null),
    [emberPrime] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("local_remote_control_client_id"),
    flintPrime = CodexBrowserSurfaceActionType(AppInitialX3, LOCAL_HOST_ID),
    garnetPrime = AppInitialZQ(xenonPrime);
  let {
      data: hazelPrime,
      isFetching
    } = useQuery(garnetPrime),
    ivoryPrime = CodexPluginActionResult(codexMobileSetupFlowU),
    jasperPrime = cedarPrime?.existingClientIds ?? null,
    kelpPrime = cedarPrime?.step === "waiting",
    lotusPrime = {
      existingClientIds: jasperPrime,
      hostId: null,
      localRemoteControlClientId: emberPrime,
      waiting: kelpPrime
    };
  let mintPrime = CodexBrowserSurfaceActionType(codexMobileSetupFlowD, lotusPrime),
    novaPrime = cedarPrime?.step === "waiting" ? mintPrime.data : null,
    olivePrime = novaPrime === "connected" ? "connected" : novaPrime === "dismiss" ? null : cedarPrime?.step ?? null,
    prismPrime = xenonPrime.query.snapshot(codexMobileSetupFlowU);
  let quillPrime = prismPrime,
    reefPrime = codexMobileSetupFlowF(ivoryPrime.data, emberPrime);
  let sagePrime = reefPrime,
    topazPrime = ivoryPrime.isError && isFetching,
    ultraPrime = !hazelPrime && (ivoryPrime.isLoading || topazPrime),
    vaporPrime = ivoryPrime.isError && !hazelPrime && !topazPrime,
    wheatPrime = hazelPrime ? 0 : sagePrime?.length,
    yarnPrime = ivoryPrime.error instanceof AppInitialJQ,
    zephyrPrime = valePrime => {
      if (daisyPrime(null), valePrime instanceof AppInitialJQ) {
        yellowPrime("/login", {
          replace: true
        });
        return;
      }
      xenonPrime.get(toastAtom).danger(zincPrime.formatMessage({
        id: "settings.remoteConnections.remoteControlAddDeviceError",
        defaultMessage: "Couldn’t start device pairing",
        description: "Toast shown when starting local remote control device pairing fails"
      }));
    };
  let acornPrime = zephyrPrime,
    bloomPrime = async wavePrime => (await quillPrime.invalidate({
      exact: true,
      refetchType: "none"
    }), quillPrime.fetch());
  let coralPrime = (apexPrime, brookPrime) => {
    let cliffPrime = new Set(codexMobileSetupFlowF(apexPrime, emberPrime)?.map(ivory));
    daisyPrime(duskPrime => brookPrime === "mfa-completion" && duskPrime?.step !== "mfa-required" ? duskPrime : {
      existingClientIds: cliffPrime,
      step: "waiting"
    });
  };
  let driftPrime = {
    mutationFn: bloomPrime,
    onSuccess: coralPrime,
    onError: acornPrime
  };
  let eaglePrime = noop(driftPrime),
    frostPrime = () => AppInitialVQ(xenonPrime);
  let glidePrime = elmPrime => {
    if (elmPrime) {
      daisyPrime({
        existingClientIds: null,
        step: "mfa-required"
      });
      return;
    }
    eaglePrime.mutate("preflight");
  };
  let honeyPrime = {
    mutationFn: frostPrime,
    onSuccess: glidePrime,
    onError: acornPrime
  };
  let irisPrime = noop(honeyPrime),
    jewelPrime,
    knollPrime;
  jewelPrime = () => {
    mode !== "manage" || ivoryPrime.isLoading || wheatPrime == null || logProductEvent(xenonPrime, CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE, {
      clientCount: wheatPrime
    });
  };
  knollPrime = [mode, wheatPrime, ivoryPrime.isLoading, xenonPrime];
  lotus.useEffect(jewelPrime, knollPrime);
  let lunarPrime = () => {
    if (logProductEvent(xenonPrime, CODEX_SKILL_TRY_CLICKED_TYPE, {
      existingClientCount: wheatPrime ?? 0,
      source: mode
    }), mode === "setup") {
      chatProcessRegister(xenonPrime, jade);
      return;
    }
    if (hazelPrime) {
      daisyPrime({
        existingClientIds: null,
        step: "mfa-required"
      });
      return;
    }
    irisPrime.mutate();
  };
  let mossPrime = lunarPrime,
    northPrime = () => {
      daisyPrime(null);
      quillPrime.invalidate();
    };
  let orbitPrime = northPrime,
    pinePrime = (sagePrime?.length ?? 0) > 0,
    questPrime = mode === "manage" && oneToOnePairingInAppEnabled && !flintPrime,
    ridgePrime = platform === "macOS" ? <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlClients.devices.title",
      defaultMessage: "Devices that can control this Mac",
      description: "Header title for devices that can control this Mac"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.remoteConnections.remoteControlClients.devices.title.windows",
      defaultMessage: "Devices that can control this PC",
      description: "Header title for devices that can control this Windows device"
    }} />;
  let stormPrime = mode === "manage" && !questPrime ? <>
        {<OptionalTooltip {...{
      tooltipContent: basaltPrime,
      children: <ReadLoginRouteQuerySnapshot {...{
        "aria-label": basaltPrime,
        color: "ghost",
        size: "icon",
        disabled: ivoryPrime.isFetching,
        onClick: () => {
          xenonPrime.get(codexMobileSetupFlowU).refetch();
        },
        children: <AppIconAlt {...{
          className: "icon-xs"
        }} />
      }} />
    }} />}
        {pinePrime ? <ReadLoginRouteQuerySnapshot {...{
      disabled: ivoryPrime.isLoading || irisPrime.isPending || eaglePrime.isPending,
      loading: irisPrime.isPending || eaglePrime.isPending,
      onClick: mossPrime,
      children: <MemoizedFormattedMessage {...{
        id: "settings.remoteConnections.add.short",
        defaultMessage: "Add",
        description: "Button label for adding a connection from a connections settings tab"
      }} />
    }} /> : null}
      </> : null;
  let be = <UseChromeAndCodeThemeSync.Header {...{
    title: ridgePrime,
    actions: stormPrime
  }} />;
  let tidePrime = <UseChromeAndCodeThemeSync.Content {...{
    children: questPrime ? <ParseUrlOrFallback {...{
      children: <Ui {...{
        oneToOnePairingInAppEnabled: true
      }} />
    }} /> : mode === "manage" && !hazelPrime && !vaporPrime && sagePrime != null && sagePrime.length > 0 ? <DuskFifth {...{
      clients: sagePrime,
      leadingRow: oneToOnePairingInAppEnabled ? <Ui {...{
        oneToOnePairingInAppEnabled: true
      }} /> : undefined,
      onRevoked: fernPrime => {
        quillPrime.setData(grovePrime => grovePrime?.filter(hillPrime => hillPrime.clientId !== fernPrime));
        quillPrime.invalidate();
      },
      onRevokeResult: islePrime => {
        logProductEvent(xenonPrime, AppInitialGtt, {
          result: islePrime
        });
      }
    }} /> : <ParseUrlOrFallback {...{
      children: [mode === "manage" && oneToOnePairingInAppEnabled ? <Ui {...{
        oneToOnePairingInAppEnabled: true
      }} /> : null, mode === "setup" ? <Dismiss {...{
        spacing: "compact",
        title: null,
        description: oneToOnePairingInAppEnabled ? platform === "macOS" ? <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.empty",
          defaultMessage: "Add device to control this Mac remotely",
          description: "Empty state for devices that can control the local computer"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.empty.windows",
          defaultMessage: "Add device to control this PC remotely",
          description: "Empty state for devices that can control the local Windows device"
        }} /> : platform === "macOS" ? <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.setup.description",
          defaultMessage: "Control this Mac from your phone or other device",
          description: "Description shown before local remote control setup has started"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.setup.description.windows",
          defaultMessage: "Control this PC from your phone or other device",
          description: "Description shown before local remote control setup has started on Windows"
        }} />,
        illustration: <JadeiteFifth {...{
          className: "h-6 w-auto text-token-text-primary"
        }} />,
        actions: <ReadLoginRouteQuerySnapshot {...{
          onClick: mossPrime,
          children: oneToOnePairingInAppEnabled ? <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.add.short",
            defaultMessage: "Add",
            description: "Button label for adding a connection from a connections settings tab"
          }} /> : <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.remoteControlClients.setup.action",
            defaultMessage: "Set up",
            description: "Button label to start local remote control setup"
          }} />
        }} />
      }} /> : null, mode === "manage" && ultraPrime && <div className="flex min-h-[62px] items-center justify-center gap-2 px-4 text-sm text-token-text-secondary">
                    {<VSCODE_EDITOR_ID {...{
          className: "icon-xs"
        }} />}
                    {<MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loading",
          defaultMessage: "Loading device list",
          description: "Loading message for devices that can control the local computer"
        }} />}
                  </div>, mode === "manage" && vaporPrime ? <Dismiss {...{
        spacing: "compact",
        title: <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loadError.title",
          defaultMessage: "Couldn’t load device list",
          description: "Error title shown when devices that can control the local computer fail to load"
        }} />,
        description: yarnPrime ? <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loadError.authRequired",
          defaultMessage: "Sign in to ChatGPT again, then retry",
          description: "Error message shown when loading remote control clients requires renewed ChatGPT authentication"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.loadError.generic",
          defaultMessage: "Retry to load devices that can control this computer",
          description: "Error message shown when devices that can control the local computer fail to load"
        }} />,
        actions: <ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          disabled: ivoryPrime.isFetching,
          onClick: () => {
            xenonPrime.get(codexMobileSetupFlowU).refetch();
          },
          children: <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.remoteControlClients.loadError.retry",
            defaultMessage: "Retry",
            description: "Button label to retry loading remote control clients"
          }} />
        }} />
      }} /> : null, mode === "manage" && !ultraPrime && !vaporPrime && wheatPrime === 0 && <Dismiss {...{
        spacing: "compact",
        title: null,
        description: platform === "macOS" ? <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.empty",
          defaultMessage: "Add device to control this Mac remotely",
          description: "Empty state for devices that can control the local computer"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.remoteConnections.remoteControlClients.empty.windows",
          defaultMessage: "Add device to control this PC remotely",
          description: "Empty state for devices that can control the local Windows device"
        }} />,
        illustration: <JadeiteFifth {...{
          className: "h-6 w-auto text-token-text-primary"
        }} />,
        actions: <ReadLoginRouteQuerySnapshot {...{
          loading: irisPrime.isPending || eaglePrime.isPending,
          onClick: mossPrime,
          children: <MemoizedFormattedMessage {...{
            id: "settings.remoteConnections.add.short",
            defaultMessage: "Add",
            description: "Button label for adding a connection from a connections settings tab"
          }} />
        }} />
      }} />]
    }} />
  }} />;
  let unityPrime = olivePrime == null ? null : <>
        {cedarPrime?.step === "mfa-required" ? <MossFifth {...{
      onEnabled: () => {
        eaglePrime.mutate("mfa-completion");
      }
    }} /> : null}
        {<CodexMobileSetupDialog {...{
      open: true,
      showStartSetupError: false,
      setupInProgress: eaglePrime.isPending,
      step: olivePrime,
      onOpenChange: juniperPrime => {
        juniperPrime || orbitPrime();
      },
      onSkip: orbitPrime,
      onStartSetup: hazel
    }} />}
      </>;
  return <UseChromeAndCodeThemeSync {...{
    children: [be, tidePrime, unityPrime]
  }} />;
}
function hazel() {}
function ivory(lagoonPrime) {
  return lagoonPrime.clientId;
}
function jasper(meadowPrime) {
  let {
      onEnabled
    } = meadowPrime,
    nestPrime = CodexPluginActionType(appScopeAtom),
    oakPrime = lotus.useEffectEvent(onEnabled),
    petalPrime = () => {
      let rainPrime = false;
      return nestPrime.watch(seedPrime => {
        let {
            get
          } = seedPrime,
          trailPrime = get(AppInitialHQ).data === true;
        trailPrime && !rainPrime && oakPrime();
        rainPrime = trailPrime;
      });
    };
  let quietPrime;
  return quietPrime = [nestPrime], lotus.useEffect(petalPrime, quietPrime), null;
}
var kelp,
  lotus,
  mint,
  _i,
  nova = esmInit(() => {
    kelp = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    lotus = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    AppInitialXQ();
    ensureGitMetadataQueryInit();
    indigo();
    ensureCodexMobileSetupDialogInit();
    marble();
    AppInitialBQ();
    ensureSettingsQueryAtomsInit();
    useClearBrowserBrowsingDataMutation();
    collectUniqueMappedPresenceEntries();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensurePersonalizationG0Init();
    macOS4();
    ensureCodexMobileSetupDialogLayoutInit();
    useEventCallback();
    AppInitialBn();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    codexCommandTheme();
    useGateEnabledWithAccountData();
    AppInitialVC();
    AppInitialFC();
    ensureAppShellAtomsInit();
    remoteSshConnections();
    ensureSkillsPageHelpersInit();
    codexMobileSetupFlowL();
    amber();
    codexMobileSetupFlowP();
    tokenInvalidated();
    daisy();
    _i = identity({
      allowConnectionsLabel: {
        id: "settings.remoteConnections.localHost.remoteControl.label.oneToOnePairing",
        defaultMessage: "Allow connections",
        description: "Label for allowing remote control connections when one-to-one pairing is enabled"
      },
      keepLiveMacLabel: {
        id: "settings.remoteConnections.localHost.keepLive.label",
        defaultMessage: "Keep this Mac awake",
        description: "Label for keeping the local Mac awake"
      },
      keepLiveWindowsLabel: {
        id: "settings.remoteConnections.localHost.keepLive.label.windows",
        defaultMessage: "Keep this PC awake",
        description: "Label for keeping the local Windows device awake"
      }
    });
  });
