// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split 1/3
/* split-lane-import-depth:1 */


import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureReactReduxInit } from "../../boundaries/react-redux-cjs";
import { Navigate, useMatch, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { isAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { useEventCallback } from "../../hooks/use-event-callback";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconOi } from "../../icons/app-icon-oi";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { ElectronOnly } from "../../ui/electron-only";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { keysIn as KeysIn } from "../../vendor/lodash-cjs-predicates";
import { appgenShareDialogI, appgenShareDialogR as AppgenShareDialogR, appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";

/** split companion stub */
const xenon: any = undefined;

const AppInitial5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useLocation@boundaries/react-router-navigation.tsx) */
const AppInitialB5: any = undefined;
/** Wave FZ unresolved companion (missing-export:projects/appgen3.ts) */
const appgen3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAppMainFLInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialFL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildAppUri@composer/app-plugin-uri.ts) */
const AppInitialG5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useNavigate@boundaries/react-router-navigation.tsx) */
const AppInitialH5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useSyncExternalStoreWithSelector@boundaries/react-redux-cjs.ts) */
const AppInitialIf: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureDiffCommentComposerInit@editors/ensure-diff-comment-composer-init.ts) */
const AppInitialLj: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/initial-route3.tsx) */
const AppInitialM5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_P5_Init@composer/composer-esm-inits.ts) */
const AppInitialP5: any = undefined;
/** Wave FZ unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/initial-route2-2.tsx) */
const InitialRoute2: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useBrowserUseOriginRulesHelperMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialPO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredProjectsS5@projects/deferred-projects-s5-2.ts) */
const AppInitialS5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useRouteParams@hooks/use-route-params.ts) */
const AppInitialU5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:formatSkillScopeLabelForSkill@skills/format-skill-scope-label-for-skill.ts) */
const AppInitialUj: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:sortThreadsByAttention@conversation/sort-threads-by-attention.ts) */
const AppInitialWT: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isPluginSchemeUrl@plugins/is-plugin-scheme-url.ts) */
const AppInitialY5: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
function At(jasper) {
  let {
      customDomains,
      defaultDomain,
      isError,
      isLoading,
      projectId
    } = jasper,
    kelp = CodexPluginActionType(appScopeAtom),
    lotus = customDomains?.items ?? [];
  let mint = lotus,
    nova = mint.some(alpha);
  let olive = nova,
    prism = customDomains != null && !isError && mint.length === 0,
    quill = defaultDomain == null || olive ? null : <EnsurePersonalizationCInit {...{
      label: <MemoizedFormattedMessage {...{
        id: "appgenSettings.customDomains.defaultDomain.label",
        defaultMessage: "Domain",
        description: "Row label for the default hosted Site domain before a custom domain becomes active"
      }} />,
      description: <MemoizedFormattedMessage {...{
        id: "appgenSettings.customDomains.defaultDomain.description",
        defaultMessage: "URL for your site",
        description: "Help text under the default hosted Site domain row"
      }} />,
      control: <AppgenSettingsPageHelper2 {...{
        domain: defaultDomain
      }} />
    }} />;
  let reef = isLoading ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.row.label",
      defaultMessage: "Custom domain",
      description: "Row label for the Site custom-domain control"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.loading.description",
      defaultMessage: "Loading custom domains",
      description: "Loading text for custom domain settings"
    }} />,
    control: <VSCODE_EDITOR_ID {...{
      className: "icon-xs"
    }} />
  }} /> : isError ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.row.label",
      defaultMessage: "Custom domain",
      description: "Row label for the Site custom-domain control"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.error.description",
      defaultMessage: "Unable to load custom domains",
      description: "Error text when custom domains fail to load"
    }} />,
    control: null
  }} /> : mint.length === 0 ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.row.label",
      defaultMessage: "Custom domain",
      description: "Row label for the Site custom-domain control"
    }} />,
    control: prism ? <ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      size: "toolbar",
      onClick: () => {
        chatProcessRegister(kelp, delta, {
          projectId
        });
      },
      children: <MemoizedFormattedMessage {...{
        id: "appgenSettings.customDomains.add",
        defaultMessage: "Add custom domain",
        description: "Button label for adding a custom domain to a site"
      }} />
    }} /> : null
  }} /> : mint.map(item => <AppgenSettingsPageHelper3 key={item.id} {...{
    customDomain: item,
    projectId
  }} />);
  return <>
      {quill}
      {reef}
    </>;
}
function alpha(sage) {
  return sage.status === "active";
}
function AppgenSettingsPageHelper2(topaz) {
  let {
      domain
    } = topaz,
    ultra = domain.endsWith(".chatgpt.site");
  let vapor = ultra,
    wheat = vapor ? domain.slice(0, -13) : domain;
  let yarn = wheat,
    zephyr = <span className="min-w-0 truncate text-token-input-foreground">
        {yarn}
      </span>;
  let acorn = vapor ? <span className="shrink-0 text-token-text-secondary">
      {".chatgpt.site"}
    </span> : null;
  return <div className="flex w-56 max-w-full items-center justify-between gap-2 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base">
      {zephyr}
      {acorn}
    </div>;
}
function AppgenSettingsPageHelper3(bloom) {
  let {
      customDomain,
      projectId
    } = bloom,
    coral = CodexPluginActionType(appScopeAtom),
    drift = useIntl(),
    eagle = CodexBrowserSurfaceActionType(AppInitialY5, projectId),
    frost = CodexBrowserSurfaceActionType(AppInitialB5, projectId),
    glide = eagle.isPending || frost.isPending,
    honey = function () {
      coral.get(toastAtom).danger(drift.formatMessage({
        id: "appgenSettings.customDomains.refresh.error",
        defaultMessage: "Unable to refresh domain status",
        description: "Error toast shown when custom domain refresh fails"
      }));
    };
  let iris = honey,
    jewel = customDomain.status === "active",
    knoll = <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.row.label",
      defaultMessage: "Custom domain",
      description: "Row label for the Site custom-domain control"
    }} />;
  let lunar = <div className="max-w-60 truncate text-sm text-token-text-primary">
      {customDomain.hostname}
    </div>;
  let moss = customDomain.status === "pending" ? <div className="flex min-w-0 items-center gap-1 text-xs text-token-text-secondary">
        {<AppIconCct {...{
      "aria-hidden": true,
      className: "icon-xs shrink-0"
    }} />}
        <span className="truncate">
          {<MemoizedFormattedMessage {...{
        id: "appgenSettings.customDomains.pending.description",
        defaultMessage: "Pending DNS changes. May take 24h to reflect.",
        description: "Status copy for a custom domain waiting on DNS changes"
      }} />}
        </span>
      </div> : customDomain.status === "failed" ? <div className="flex items-center gap-1 text-xs text-token-charts-red">
        {<ShellLayoutMetricsContext {...{
      "aria-hidden": true,
      className: "icon-xs shrink-0"
    }} />}
        {<MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.failed.description",
      defaultMessage: "DNS setup failed. Review your records.",
      description: "Status copy for a custom domain with failed DNS verification"
    }} />}
      </div> : null;
  let north = customDomain.last_error == null ? null : <div className="max-w-80 text-xs wrap-anywhere text-token-charts-red">
        {<MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.lastError",
      defaultMessage: "Last error: {message}",
      description: "Last provider error shown for a custom domain",
      values: {
        message: customDomain.last_error
      }
    }} />}
      </div>;
  let orbit = <div className="flex min-w-0 flex-col items-end gap-0.5 text-right">
      {lunar}
      {moss}
      {north}
    </div>;
  let pine = jewel ? null : <>
      {<ReadLoginRouteQuerySnapshot {...{
      "aria-label": drift.formatMessage({
        id: "appgenSettings.customDomains.setup.ariaLabel",
        defaultMessage: "View DNS setup for {hostname}",
        description: "Accessible label for reopening custom domain DNS setup"
      }, {
        hostname: customDomain.hostname
      }),
      color: "ghost",
      disabled: glide,
      size: "icon",
      onClick: () => {
        chatProcessRegister(coral, AppgenSettingsPageHelper5, {
          customDomain
        });
      },
      children: <ShellLayoutMetricsContext {...{
        "aria-hidden": true,
        className: "icon-xs"
      }} />
    }} />}
      {<ReadLoginRouteQuerySnapshot {...{
      "aria-label": drift.formatMessage({
        id: "appgenSettings.customDomains.refresh.ariaLabel",
        defaultMessage: "Refresh {hostname} status",
        description: "Accessible label for refreshing a custom domain status"
      }, {
        hostname: customDomain.hostname
      }),
      color: "ghost",
      disabled: glide,
      size: "icon",
      onClick: () => {
        eagle.mutateAsync(customDomain.id).then(bravo, () => {
          iris();
        });
      },
      children: eagle.isPending ? <VSCODE_EDITOR_ID {...{
        className: "icon-xs"
      }} /> : <AppIconAlt {...{
        "aria-hidden": true,
        className: "icon-xs"
      }} />
    }} />}
    </>;
  let quest = drift.formatMessage({
    id: "appgenSettings.customDomains.remove.ariaLabel",
    defaultMessage: "Remove {hostname}",
    description: "Accessible label for removing a custom domain"
  }, {
    hostname: customDomain.hostname
  });
  let ridge = () => {
    chatProcessRegister(coral, echo, {
      customDomain,
      projectId
    });
  };
  let storm = <AppIconBO {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} />;
  let tide = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": quest,
    color: "ghost",
    disabled: glide,
    size: "icon",
    onClick: ridge,
    children: storm
  }} />;
  let unity = <div className="flex shrink-0 items-center gap-1">
      {pine}
      {tide}
    </div>;
  return <EnsurePersonalizationCInit {...{
    label: knoll,
    control: <div className="flex min-w-0 items-center gap-3">
            {orbit}
            {unity}
          </div>
  }} />;
}
function bravo() {}
function AppgenSettingsPageHelper5(vale) {
  let {
      customDomain,
      onClose
    } = vale,
    wave = useIntl(),
    apex = composerNavigation(),
    brook,
    cliff;
  brook = falcon(customDomain);
  cliff = isBareAllowedPermission({
    defaultPrompt: wave.formatMessage({
      id: "appgenSettings.customDomains.setupDialog.askChatGptPrompt",
      defaultMessage: "Help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. Use the in-app browser if needed.\n{dnsRecords}",
      description: "Prefilled prompt for a new Sites thread opened from custom-domain DNS setup. It asks Sites to help finish registration at the user's domain provider, using the in-app browser when useful. {hostname} is the exact custom hostname and {dnsRecords} is a newline-separated list of DNS record type, host name, and value."
    }, {
      dnsRecords: copper(brook),
      hostname: customDomain.hostname
    }),
    pluginDisplayName: "Sites",
    pluginId: SITES_OPENAI_BUNDLED_PLUGIN_ID
  });
  let dusk = cliff,
    elm = wave.formatMessage({
      id: "appgenSettings.customDomains.setupDialog.close",
      defaultMessage: "Close custom domain setup",
      description: "Accessible label for closing the custom domain DNS setup dialog"
    });
  let fern = oak => {
    oak || onClose();
  };
  let grove = event => {
    event.preventDefault();
    onClose();
  };
  let hill = <RealtimeVoiceHostId {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.setupDialog.title",
      defaultMessage: "Complete setup for {hostname}",
      description: "Title for custom domain DNS setup dialog",
      values: {
        hostname: customDomain.hostname
      }
    }} />
  }} />;
  let isle = <IsStartingProcessExpired {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.setupDialog.description",
      defaultMessage: "Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.",
      description: "Instructions for completing custom domain DNS setup",
      values: {
        chatgptLink: petal => <button key="chatgpt-link" className="cursor-interaction border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2" type="button" onClick={() => {
          onClose();
          apex({
            activeProject: null,
            prefillPrompt: dusk,
            startInSidebar: true
          });
        }}>
                    {petal}
                  </button>
      }
    }} />
  }} />;
  let juniper = <DeferredUiH {...{
    title: hill,
    titleClassName: "truncate pr-8 font-medium",
    titleSize: "base",
    subtitle: isle,
    subtitleClassName: "leading-5 text-token-text-secondary",
    subtitleSize: "base"
  }} />;
  let lagoon = <DeferredUiU {...{
    children: <AppgenSettingsPageHelper7 {...{
      records: brook
    }} />
  }} />;
  let meadow = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      expandSingleButton: false,
      children: <ReadLoginRouteQuerySnapshot {...{
        type: "submit",
        children: <MemoizedFormattedMessage {...{
          id: "appgenSettings.customDomains.setupDialog.complete",
          defaultMessage: "I have added the records at my provider",
          description: "Button label for completing custom domain DNS setup"
        }} />
      }} />
    }} />
  }} />;
  let nest = <DeferredUiB {...{
    as: "form",
    className: "gap-3 px-4 py-4",
    onSubmit: grove,
    children: [juniper, lagoon, meadow]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    dialogCloseLabel: elm,
    open: true,
    size: "default",
    onOpenChange: fern,
    children: nest
  }} />;
}
function copper(quiet) {
  return quiet.map(item => [item.type, item.name, item.value].join(" ")).join("\n");
}
function AppgenSettingsPageHelper7(rain) {
  let {
      records
    } = rain,
    seed = useIntl();
  if (records.length === 0) return null;
  let trail = <colgroup className="max-sm:hidden">
      <col className="w-[72px]" />
      <col className="w-[40%]" />
      <col />
    </colgroup>;
  let urn = <th className="px-0 py-1 text-start font-normal" scope="col">
      {<MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.dns.type",
      defaultMessage: "Type",
      description: "DNS record table type column"
    }} />}
    </th>;
  let vine = <th className="px-0 py-1 text-start font-normal" scope="col">
      {<MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.dns.hostname",
      defaultMessage: "Host name",
      description: "DNS record table host name column"
    }} />}
    </th>;
  let wind = <thead className="max-sm:sr-only">
      <tr className="h-7 border-b border-token-border text-sm font-normal text-token-text-tertiary">
        {urn}
        {vine}
        <th className="px-0 py-1 text-start font-normal" scope="col">
          {<MemoizedFormattedMessage {...{
          id: "appgenSettings.customDomains.dns.value",
          defaultMessage: "Value",
          description: "DNS record table value column"
        }} />}
        </th>
      </tr>
    </thead>;
  let yarrow;
  {
    let azure;
    azure = birch => <tr key={birch.id} className="h-7 border-b border-token-border text-sm text-token-text-primary last:border-b-0 max-sm:block">
        <td className="px-0 py-1 text-token-text-secondary max-sm:hidden">
          {birch.type}
        </td>
        <td className="px-0 py-1 max-sm:block">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <span className="me-1 hidden text-token-text-tertiary max-sm:inline">
              {birch.type}
            </span>
            <div className="min-w-0 truncate">
              {birch.name}
            </div>
            {<CopyButton {...{
            ariaLabel: seed.formatMessage({
              id: "appgenSettings.customDomains.dns.copyHostname",
              defaultMessage: "Copy {type} DNS host name for {name}",
              description: "Accessible label for copying one DNS record host name. {type} is the DNS record type and {name} is the record host name."
            }, {
              name: birch.name,
              type: birch.type
            }),
            buttonText: true,
            className: "h-auto shrink-0 rounded-full! border! border-token-border! px-2 py-0.5 text-sm text-token-text-primary",
            showIcon: false,
            onCopy: canyon => {
              writeClipboardContents(birch.name, canyon);
            }
          }} />}
          </div>
        </td>
        <td className="px-0 py-1 max-sm:block">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <div className="min-w-0 truncate">
              {birch.value}
            </div>
            {<CopyButton {...{
            ariaLabel: seed.formatMessage({
              id: "appgenSettings.customDomains.dns.copyValueForRecord",
              defaultMessage: "Copy {type} DNS value for {name}",
              description: "Accessible label for copying one DNS record value. {type} is the DNS record type and {name} is the record host name."
            }, {
              name: birch.name,
              type: birch.type
            }),
            buttonText: true,
            className: "h-auto shrink-0 rounded-full! border! border-token-border! px-2 py-0.5 text-sm text-token-text-primary",
            showIcon: false,
            onCopy: dew => {
              writeClipboardContents(birch.value, dew);
            }
          }} />}
          </div>
        </td>
      </tr>;
    yarrow = records.map(azure);
  }
  return <div className="overflow-hidden">
      <table className="w-full table-fixed border-collapse">
        {trail}
        {wind}
        <tbody>{yarrow}</tbody>
      </table>
    </div>;
}
function delta(ever) {
  let {
      onClose,
      projectId
    } = ever,
    field = CodexBrowserSurfaceActionType(AppInitialP5, projectId),
    grain = CodexPluginActionType(appScopeAtom),
    haven = useIntl(),
    [ink, jadeite] = jade.useState(""),
    [kernel, leaf] = jade.useState(null),
    maple = ink.trim();
  let nimbus = maple,
    opal = nimbus.length === 0 || field.isPending,
    plume = function () {
      grain.get(toastAtom).danger(haven.formatMessage({
        id: "appgenSettings.customDomains.addDialog.error",
        defaultMessage: "Unable to add domain",
        description: "Error toast shown when adding a custom domain fails"
      }));
    };
  let quillow = plume;
  if (kernel != null) {
    let knob;
    return <AppgenSettingsPageHelper5 {...{
      customDomain: kernel,
      onClose
    }} />;
  }
  let root = field.isPending,
    silk = !field.isPending,
    thorn = ledge => {
      !ledge && !field.isPending && onClose();
    };
  let upland = event => {
    event.preventDefault();
    !opal && field.mutateAsync({
      hostname: nimbus
    }).then(value => {
      leaf(value);
    }, () => {
      quillow();
    });
  };
  let vista = <RealtimeVoiceHostId {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.addDialog.title",
      defaultMessage: "Add custom domain",
      description: "Title for custom domain add dialog"
    }} />
  }} />;
  let wisp = <DeferredUiH {...{
    title: vista,
    titleClassName: "truncate pr-8",
    subtitle: <IsStartingProcessExpired {...{
      className: "contents",
      children: <MemoizedFormattedMessage {...{
        id: "appgenSettings.customDomains.addDialog.description",
        defaultMessage: "To use this feature, you need to own a domain and be able to manage its DNS records",
        description: "Description for custom domain add dialog"
      }} />
    }} />
  }} />;
  let yonder = <span className="text-sm font-medium text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.addDialog.inputLabel",
      defaultMessage: "Custom domain",
      description: "Label for custom domain input"
    }} />}
    </span>;
  let zenith = haven.formatMessage({
    id: "appgenSettings.customDomains.addDialog.inputAriaLabel",
    defaultMessage: "Custom domain",
    description: "Accessible label for custom domain input"
  });
  let anvil = field.isPending,
    beacon = haven.formatMessage({
      id: "appgenSettings.customDomains.addDialog.placeholder",
      defaultMessage: "www.example.com",
      description: "Placeholder for custom domain input"
    });
  let crag = event => {
    jadeite(event.target.value);
  };
  let dome = <DeferredUiU {...{
    children: <label className="flex flex-col gap-1.5">
            {yonder}
            <input aria-label={zenith} autoFocus={true} className="w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40" disabled={anvil} placeholder={beacon} spellCheck={false} type="text" value={ink} onChange={crag} />
          </label>
  }} />;
  let eddy = <MemoizedFormattedMessage {...{
    id: "appgenSettings.customDomains.addDialog.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for custom domain add dialog"
  }} />;
  let fjord = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: field.isPending,
    type: "button",
    onClick: onClose,
    children: eddy
  }} />;
  let glen = <MemoizedFormattedMessage {...{
    id: "appgenSettings.customDomains.addDialog.submit",
    defaultMessage: "Add domain",
    description: "Submit button label for custom domain add dialog"
  }} />;
  let hearth = <ReadLoginRouteQuerySnapshot {...{
    disabled: opal,
    loading: field.isPending,
    type: "submit",
    children: glen
  }} />;
  let inlet = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [fjord, hearth]
    }} />
  }} />;
  let jetty = <DeferredUiB {...{
    as: "form",
    className: "gap-4 px-4 py-3",
    onSubmit: upland,
    children: [wisp, dome, inlet]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    shouldIgnoreClickOutside: root,
    showDialogClose: silk,
    size: "compact",
    onOpenChange: thorn,
    children: jetty
  }} />;
}
function echo(mire) {
  let {
      customDomain,
      onClose,
      projectId
    } = mire,
    nook = CodexBrowserSurfaceActionType(AppInitialB5, projectId),
    oxbow = CodexPluginActionType(appScopeAtom),
    pond = useIntl(),
    quarry = function () {
      oxbow.get(toastAtom).danger(pond.formatMessage({
        id: "appgenSettings.customDomains.removeDialog.error",
        defaultMessage: "Unable to remove domain",
        description: "Error toast shown when removing a custom domain fails"
      }));
    };
  let rapids = quarry,
    spur = !nook.isPending,
    tor = gear => {
      !gear && !nook.isPending && onClose();
    };
  let updraft = event => {
    event.preventDefault();
    !nook.isPending && nook.mutateAsync(customDomain.id).then(() => {
      onClose();
    }, () => {
      rapids();
    });
  };
  let verge = <RealtimeVoiceHostId {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.removeDialog.title",
      defaultMessage: "Remove {hostname}?",
      description: "Title for custom domain removal dialog",
      values: {
        hostname: customDomain.hostname
      }
    }} />
  }} />;
  let weir = <IsStartingProcessExpired {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenSettings.customDomains.removeDialog.description",
      defaultMessage: "Visitors will no longer be able to use this domain for the site",
      description: "Description for custom domain removal dialog"
    }} />
  }} />;
  let yard = <DeferredUiH {...{
    title: verge,
    titleClassName: "truncate pr-8",
    subtitle: weir
  }} />;
  let anchor = <MemoizedFormattedMessage {...{
    id: "appgenSettings.customDomains.removeDialog.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for custom domain removal dialog"
  }} />;
  let bolt = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: nook.isPending,
    type: "button",
    onClick: onClose,
    children: anchor
  }} />;
  let cog = <MemoizedFormattedMessage {...{
    id: "appgenSettings.customDomains.removeDialog.submit",
    defaultMessage: "Remove",
    description: "Confirm button label for custom domain removal dialog"
  }} />;
  let disc = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: nook.isPending,
    type: "submit",
    children: cog
  }} />;
  let edge = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [bolt, disc]
    }} />
  }} />;
  let forge = <DeferredUiB {...{
    as: "form",
    className: "gap-4 px-4 py-3",
    onSubmit: updraft,
    children: [yard, edge]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    shouldIgnoreClickOutside: nook.isPending,
    showDialogClose: spur,
    size: "compact",
    onOpenChange: tor,
    children: forge
  }} />;
}
function falcon(hinge) {
  return [...gamma(hinge), ...hinge.validation_records.flatMap((item, index) => {
    let iron = _t(item.record_type),
      joint = _t(item.name),
      keystone = _t(item.value);
    return iron == null || joint == null || keystone == null ? [] : [{
      id: `validation:${index}:${iron}:${joint}`,
      name: joint,
      type: iron,
      value: keystone
    }];
  })];
}
function gamma(latch) {
  return harbor(latch.hostname) && latch.apex_proxy_ipv4_targets.length > 0 ? latch.apex_proxy_ipv4_targets.map((item, index) => ({
    id: `apex:${index}:${item}`,
    name: "@",
    type: "A",
    value: item
  })) : latch.cname_target == null ? latch.apex_proxy_ipv4_targets.map((item, index) => ({
    id: `apex:${index}:${item}`,
    name: latch.hostname,
    type: "A",
    value: item
  })) : [{
    id: "cname",
    name: latch.hostname,
    type: "CNAME",
    value: latch.cname_target
  }];
}
function _t(motor) {
  let nut = motor?.trim();
  return nut == null || nut.length === 0 ? null : nut;
}
function harbor(piston) {
  let rivet = InitialRoute2(piston, {
    allowPrivateDomains: true
  });
  return rivet.domain != null && rivet.domain.toLowerCase() === piston.toLowerCase();
}
var indigo,
  jade,
  kite,
  lemon = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    jade = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialFL();
    ensureSettingsQueryAtomsInit();
    decayZoomPercent();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    collectUniqueMappedPresenceEntries();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    conversationsSidebarMessages();
    CHATGPT_PRODUCT_ID();
    svgToDataUri();
    useEventCallback();
    AppInitialVO();
    isAppUri();
    ensurePluginMentionPromptInit();
    ensureAppScopeInit();
    AppInitialVC();
    ensureComposerEsm_FH_Init();
    AppInitialT5();
  });
function marble(screw) {
  return {
    environmentVariables: screw.entries.filter(item => !item.is_secret).map(({
      key,
      value
    }) => ({
      key,
      value: value ?? ""
    })),
    secrets: screw.entries.filter(item => item.is_secret).map(({
      key
    }) => ({
      key,
      keyInputDisabledWhileValue: river,
      previousKey: key,
      value: river
    }))
  };
}
function nickel(torque, valve) {
  let axle = [...valve.environmentVariables.map(({
    key
  }) => key), ...valve.secrets.map(({
    key
  }) => key)];
  if (new Set(axle).size !== axle.length) return null;
  let bracket = new Set([...valve.environmentVariables.map(({
    key
  }) => key), ...valve.secrets.map(item => onyx(item) ? item.previousKey : item.key)]);
  return {
    remove: torque.entries.filter(({
      key
    }) => !bracket.has(key)).map(({
      key
    }) => key),
    set_values: [...valve.environmentVariables.filter(item => pearl(torque, item)).map(item => quartz(item, false)), ...valve.secrets.filter(item => !onyx(item)).map(item => quartz(item, true))]
  };
}
function onyx(clamp) {
  return clamp.previousKey != null && clamp.value === river;
}
function pearl(drill, event) {
  let engine = drill.entries.find(item => item.key === event.key);
  return engine == null || engine.is_secret || engine.value !== event.value;
}
function quartz(event, frame) {
  return {
    is_secret: frame,
    key: event.key,
    type: "envvar",
    value: event.value
  };
}
var river,
  slate = esmInit(() => {
    river = "<REDACTED>";
  });
function timber(gasket, handle, insert = false) {
  let jacket = gasket ?? handle,
    knurl = jacket.trim();
  return {
    isInvalid: gasket != null && knurl.length === 0,
    title: jacket,
    update: gasket != null && knurl.length > 0 && (knurl !== handle || insert) ? {
      title: knurl
    } : null
  };
}
async function umbra({
  environmentUpdate,
  titleUpdate,
  updateEnvironment,
  updateTitle
}) {
  let [lever, mount] = await Promise.allSettled([titleUpdate == null ? undefined : updateTitle(titleUpdate), environmentUpdate == null ? undefined : updateEnvironment(environmentUpdate)]);
  return {
    environmentSaved: mount.status === "fulfilled",
    titleSaved: lever.status === "fulfilled"
  };
}
var violet = esmInit(() => {});
function willow(nozzle, platen, ratchet) {
  let shim = xenon(ratchet),
    tappet = shim[0];
  return tappet == null ? null : [...nozzle.map((item, index) => index === platen ? {
    ...item,
    ...tappet
  } : item), ...shim.slice(1)];
}
