// Restored from ref/webview/assets/agent-settings-3N239YzB.js
// Wave5 stub-pass soft companions.
const deferredBrowserY0: any = undefined;

// Wave FX — full polished body from `agent-settings-3N239YzB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 51 (verified 113/164).
// Wave5d — FZ repair from fy-clean L=3008 sus=28; JSX PascalCase + careful split.
// Wave5d careful split 3/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_TYPE } from "../../analytics/codex-primary-runtime-dependencies-diagnose-type";
import { CODEX_PROFILE_INLINE_PHOTO_CHANGE_EVENT_TYPE } from "../../analytics/codex-profile-inline-photo-change-event-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { normalizeAppIconThemeEntries } from "../../apps/normalize-app-icon-theme-entries";
import { automationsNotShallowEqual } from "../../automation/automations-not-shallow-equal";
import { isBlankAutomationDraft as IsBlankAutomationDraft } from "../../automation/is-blank-automation-draft";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { LAYERED_RESPONSE_CONFIG_PATH } from "../../config/layered-response-config-path";
import { managedConfigFilePath } from "../../config/managed-config-file-path";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { WORKSPACE_DEPENDENCIES_ID } from "../../config/workspace-dependencies-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { markConversationIdle } from "../../conversation/mark-conversation-idle";
import { cancelPrimaryRuntimeInstall } from "../../desktop/cancel-primary-runtime-install";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { primaryRuntimeDiagnosticsQueryKey } from "../../desktop/primary-runtime-diagnostics-query-key";
import { realtimeVoiceCommandMessages } from "../../desktop/realtime-voice-command-messages";
import { DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL } from "../../docs/codex-doc-urls";
import { areVisualizationFeatureGatesEnabled as AreVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { FkrDataBridge } from "../../hooks/fkr-data-bridge";
import { ensureAuthProviderInit } from "../../hooks/use-auth";
import { useQuery } from "../../hooks/use-query";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { mcpGlobalCapabilityCatalogAtom as McpGlobalCapabilityCatalogAtom } from "../../mcp/mcp-capability-host";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useIsLoginMethodAvailable } from "../../onboarding/use-is-login-method-available";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry as UsePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { isAbortError } from "../../utils/is-abort-error";
import { isXcodeLicenseError } from "../../utils/is-xcode-license-error";
import { lerpIfFinite as LerpIfFinite } from "../../utils/lerp-if-finite";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensureImportSettingsGctInit, ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow, SettingsLoadingRow } from "../settings-loading-row";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialAr: any = undefined;
const AppInitialNr: any = undefined;
const AppInitialTr: any = undefined;
const AppInitialYC: any = undefined;
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
const deferredUiB: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function north(pine) {
  let {
      hostId,
      primaryRuntime
    } = pine,
    quest = CodexPluginActionType(appScopeAtom),
    ridge = useIntl(),
    storm = AppIconAlt(),
    {
      data,
      isLoading
    } = CodexBrowserSurfaceActionType(deferredBrowserY0, hostId),
    tide = {
      hostId
    };
  let unity = HostFeatureConfigToggles(tide),
    vale = data?.find(orbit);
  let wave = vale,
    apex = wave?.enabled === true,
    brook = () => primaryRuntime.diagnoseDependencies({
      hostId
    });
  let cliff = primaryRuntimeDiagnosticsQueryKey(hostId);
  let dusk = {
    queryFn: brook,
    queryKey: cliff,
    staleTime: readScrollTop.FIVE_SECONDS
  };
  let elm = useQuery(dusk),
    fern = {
      mutationFn: () => primaryRuntime.diagnoseDependencies({
        hostId
      })
    };
  let grove = noop(fern),
    hill = {
      mutationFn: async eddy => {
        let {
          release
        } = eddy;
        return await AppInitialAr(storm), primaryRuntime.runUpdateNow({
          release
        });
      }
    };
  let isle = noop(hill),
    juniper = {
      mutationFn: async fjord => {
        let {
          release
        } = fjord;
        return await AppInitialAr(storm), primaryRuntime.resetDependencies({
          hostId,
          release
        });
      }
    };
  let lagoon = noop(juniper),
    meadow = {
      mutationFn: () => cancelPrimaryRuntimeInstall({
        hostId
      })
    };
  let nest = noop(meadow),
    oak = CodexPluginActionResult(deferredUiYn),
    petal = CodexPluginActionResult(setPrimaryRuntimeInstallRelease2),
    quiet = oak?.hostId === hostId ? oak : null,
    rain = quest.get(toastAtom);
  let seed = rain,
    trail = isLoading || unity.isPending || grove.isPending || isle.isPending || lagoon.isPending || nest.isPending,
    urn = cancelPrimaryRuntimeInstall(quiet);
  let vine = urn,
    wind = elm.data?.bundleVersion == null || elm.data.bundleVersion.length === 0 ? null : elm.data.bundleVersion,
    yarrow = () => {
      let glen = Date.now();
      grove.mutateAsync().then(value => {
        if (logProductEvent(quest, CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_TYPE, FloatingSurfaceCssClass({
          diagnostics: value,
          durationMs: Date.now() - glen
        })), elm.refetch(), value.installed) {
          seed.success(ridge.formatMessage({
            id: "settings.agent.dependencies.diagnose.ok",
            defaultMessage: "Codex dependencies look healthy",
            description: "Toast shown when dependency diagnostics find no problems"
          }));
          return;
        }
        seed.warning(ridge.formatMessage({
          id: "settings.agent.dependencies.diagnose.problem",
          defaultMessage: "Codex dependencies may need repair. Send /feedback if this keeps happening",
          description: "Toast shown when dependency diagnostics find problems"
        }));
      }).catch(() => {
        logProductEvent(quest, CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_TYPE, AppInitialTr({
          durationMs: Date.now() - glen
        }));
        seed.danger(ridge.formatMessage({
          id: "settings.agent.dependencies.diagnose.failed",
          defaultMessage: "Couldn’t diagnose Codex dependencies",
          description: "Toast shown when dependency diagnostics fail"
        }));
      });
    };
  let azure = yarrow,
    birch = () => {
      let hearth = Date.now();
      lagoon.mutateAsync({
        release: petal
      }).then(value => {
        logProductEvent(quest, CODEX_PROFILE_INLINE_PHOTO_CHANGE_EVENT_TYPE, AppInitialNr({
          bundleVersion: value.bundleVersion,
          durationMs: Date.now() - hearth,
          status: value.status
        }));
        elm.refetch();
        seed.success(ridge.formatMessage({
          id: "settings.agent.dependencies.reset.installed",
          defaultMessage: "Codex dependencies were reinstalled",
          description: "Toast shown when dependency reset and reinstall succeeds"
        }));
      }).catch(error => {
        if (isAbortError(error)) {
          quest.set(deferredUiYn, null);
          elm.refetch();
          logProductEvent(quest, CODEX_PROFILE_INLINE_PHOTO_CHANGE_EVENT_TYPE, AppInitialNr({
            bundleVersion: null,
            durationMs: Date.now() - hearth,
            status: "canceled"
          }));
          seed.info(ridge.formatMessage({
            id: "settings.agent.dependencies.reset.canceled",
            defaultMessage: "Codex dependency download canceled",
            description: "Toast shown when dependency reset and reinstall is canceled"
          }), {
            id: "install-primary-runtime"
          });
          return;
        }
        logProductEvent(quest, CODEX_PROFILE_INLINE_PHOTO_CHANGE_EVENT_TYPE, AppInitialNr({
          bundleVersion: null,
          durationMs: Date.now() - hearth,
          status: "failed"
        }));
        seed.danger(ridge.formatMessage({
          id: "settings.agent.dependencies.reset.failed",
          defaultMessage: "Couldn’t reinstall Codex dependencies",
          description: "Toast shown when dependency reset fails"
        }));
      });
    };
  let canyon = birch,
    dew = () => {
      nest.mutateAsync().then(value => {
        let {
          canceled
        } = value;
        if (quest.set(deferredUiYn, null), elm.refetch(), !canceled) {
          seed.info(ridge.formatMessage({
            id: "settings.agent.dependencies.cancel.noop",
            defaultMessage: "No Codex dependency download is running",
            description: "Toast shown when canceling a Codex dependency download but no download is running"
          }));
          return;
        }
        seed.info(ridge.formatMessage({
          id: "settings.agent.dependencies.cancel.canceled",
          defaultMessage: "Canceling Codex dependency download",
          description: "Toast shown after requesting cancellation of a Codex dependency download"
        }), {
          id: "install-primary-runtime"
        });
      }).catch(() => {
        seed.danger(ridge.formatMessage({
          id: "settings.agent.dependencies.cancel.failed",
          defaultMessage: "Couldn’t cancel Codex dependency download",
          description: "Toast shown when canceling a Codex dependency download fails"
        }));
      });
    };
  let ever = dew,
    field = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        ...pearl.workspaceDependencies
      }} />
    }} />;
  let grain, haven;
  grain = <MemoizedFormattedMessage {...{
    ...pearl.codexDependencies
  }} />;
  haven = <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.enabled.description",
    defaultMessage: "Allow ChatGPT to install and expose bundled Node.js and Python tools",
    description: "Description for the Codex dependencies enabled toggle"
  }} />;
  let ink = isLoading || unity.isPending || wave == null,
    jadeite = inlet => {
      unity.mutate({
        enabled: inlet,
        featureName: WORKSPACE_DEPENDENCIES_ID
      }, {
        onSuccess: () => {
          inlet && isle.mutate({
            release: petal
          });
        }
      });
    };
  let kernel = ridge.formatMessage({
    id: "settings.agent.dependencies.enabled.ariaLabel",
    defaultMessage: "Enable Codex dependencies",
    description: "Aria label for the Codex dependencies enabled toggle"
  });
  let leaf = <EnsurePersonalizationCInit {...{
    label: grain,
    description: haven,
    control: <AppInitialYC checked={apex} disabled={ink} onChange={jadeite} ariaLabel={kernel} />
  }} />;
  let maple, nimbus;
  maple = <MemoizedFormattedMessage {...{
    ...pearl.diagnoseWorkspaceDependencies
  }} />;
  nimbus = <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.diagnose.description",
    defaultMessage: "Checks the current bundle and records diagnostic logs",
    description: "Description for dependency diagnostics in settings"
  }} />;
  let be, opal;
  be = <DeferredUiB {...{
    className: "icon-2xs"
  }} />;
  opal = <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.diagnose.button",
    defaultMessage: "Diagnose",
    description: "Button label for dependency diagnostics"
  }} />;
  let plume = <EnsurePersonalizationCInit {...{
    label: maple,
    description: nimbus,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      loading: grove.isPending,
      disabled: lagoon.isPending,
      onClick: azure,
      children: [be, opal]
    }} />
  }} />;
  let quillow, root;
  quillow = <MemoizedFormattedMessage {...{
    ...pearl.resetWorkspaceDependencies
  }} />;
  root = <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.reset.description",
    defaultMessage: "Downloads a fresh bundle, installs it, and reloads tools",
    description: "Description for resetting and reinstalling dependencies in settings"
  }} />;
  let silk = vine ? nest.isPending : lagoon.isPending,
    thorn = !apex || (vine ? nest.isPending : trail),
    upland = vine ? ever : canyon,
    vista = vine ? <>
        {<Chatgpt2 {...{
        className: "icon-2xs"
      }} />}
        {<MemoizedFormattedMessage {...{
        id: "settings.agent.dependencies.cancel.button",
        defaultMessage: "Cancel download",
        description: "Button label for canceling dependency download"
      }} />}
      </> : <>
        {<LerpIfFinite {...{
        className: "icon-2xs"
      }} />}
        {<MemoizedFormattedMessage {...{
        id: "settings.agent.dependencies.reset.button",
        defaultMessage: "Reinstall",
        description: "Button label for resetting and reinstalling dependencies"
      }} />}
      </>;
  let wisp = <EnsurePersonalizationCInit {...{
    label: quillow,
    description: root,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "danger",
      size: "toolbar",
      loading: silk,
      disabled: thorn,
      onClick: upland,
      children: vista
    }} />
  }} />;
  let yonder = <UseChromeAndCodeThemeSync.Content {...{
    children: <ParseUrlOrFallback {...{
      children: [leaf, plume, wisp]
    }} />
  }} />;
  let zenith = <MemoizedFormattedMessage {...{
    ...pearl.currentDependencyVersion
  }} />;
  let anvil = vine ? bravo(quiet, alpha(quiet)) : elm.isLoading ? <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.bundleVersion.loading",
    defaultMessage: "Checking…",
    description: "Status while loading the current dependency bundle version"
  }} /> : wind ?? <MemoizedFormattedMessage {...{
    id: "settings.agent.dependencies.bundleVersion.notInstalled",
    defaultMessage: "Not installed",
    description: "Status when dependency bundle version is unavailable"
  }} />;
  let beacon = <span className="inline-flex flex-wrap gap-x-1">
      {zenith}
      <span>{anvil}</span>
    </span>;
  let crag = elm.data?.problems.length ? <span>
      {<MemoizedFormattedMessage {...{
      id: "settings.agent.dependencies.bundleVersion.problemDescription",
      defaultMessage: "Run diagnostics or reinstall if tool calls fail",
      description: "Description shown when dependency diagnostics have problems"
    }} />}
    </span> : null;
  let dome = <UseChromeAndCodeThemeSync.Footer {...{
    className: "flex flex-col gap-1",
    children: [beacon, crag]
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [field, yonder, dome]
  }} />;
}
function orbit(jetty) {
  return jetty.name === WORKSPACE_DEPENDENCIES_ID;
}
