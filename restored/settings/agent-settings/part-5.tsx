// Restored from ref/webview/assets/agent-settings-3N239YzB.js
// Wave5 stub-pass soft companions.
const ArtifactTemplate: any = undefined;
const DeferredDX: any = undefined;
const DeferredDXStub: any = undefined;
const DeferredUiCX: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const ensureConfigQueryAtomsInitStub: any = undefined;
const ensureSelectWorkspacePXInit: any = undefined;
const isUpdatePhaseInProgress: any = undefined;
const list: any = undefined;
const primaryRuntime: any = undefined;
const setPrimaryRuntimeInstallRelease: any = undefined;
const settingsRouteStateRState: any = undefined;

// Wave FX — full polished body from `agent-settings-3N239YzB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 51 (verified 113/164).
// Wave5d — FZ repair from fy-clean L=3008 sus=28; JSX PascalCase + careful split.
// Wave5d careful split 5/5
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

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialIr: any = undefined;
const AppInitialR0: any = undefined;
const AppInitialRr: any = undefined;
const AppInitialSr: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialZ4: any = undefined;
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
const at: any = undefined;
const deferredUiB: any = undefined;
const deferredUiJ1: any = undefined;
const deferredUiWX: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function river(garnet) {
  let {
      onSelect,
      scopeOption,
      selected
    } = garnet,
    hazel = selected ? AppIconZlt : undefined,
    ivory = <span className="truncate text-sm">{scopeOption.label}</span>;
  return <DropdownMenu.Item {...{
    RightIcon: hazel,
    tooltipText: scopeOption.tooltipText,
    tooltipSide: "right",
    onSelect,
    children: ivory
  }} />;
}
function slate(jasper) {
  let {
      children,
      error,
      lockReason
    } = jasper,
    kelp = <div>{children}</div>;
  let lotus = lockReason == null ? null : <div className="inline-flex items-center gap-1 text-sm text-token-editor-warning-foreground">
        <AppIconL0 className="icon-2xs" />
        <span>{lockReason}</span>
      </div>;
  let mint = error == null ? null : <div className="text-sm text-token-error-foreground">{error}</div>;
  return <div className="flex flex-col gap-1">
      {kelp}
      {lotus}
      {mint}
    </div>;
}
function timber(nova, olive) {
  if (nova == null) return [];
  let prism = [];
  for (let quill of nova) {
    if (quill.name.type !== "project") continue;
    let reef = umbra(quill.name.dotCodexFolder);
    prism.push({
      key: `project:${reef ?? quill.name.dotCodexFolder}`,
      kind: "project",
      label: olive.formatMessage({
        id: "settings.agent.configuration.scope.project",
        defaultMessage: "{repoName}",
        description: "Label for a project config scope in configuration settings"
      }, {
        repoName: violet(reef ?? quill.name.dotCodexFolder)
      }),
      tooltipText: managedConfigFilePath(quill.name) ?? quill.name.dotCodexFolder,
      filePath: managedConfigFilePath(quill.name),
      expectedVersion: quill.version,
      workspaceRoot: reef,
      layer: quill
    });
  }
  return prism;
}
function umbra(sage) {
  return sage.endsWith("/.codex") || sage.endsWith("\\.codex") ? sage.slice(0, -7) : null;
}
function violet(topaz) {
  return topaz.split(/[/\\]/).at(-1) || topaz;
}
function willow(ultra) {
  if (typeof ultra != "object" || !ultra || Array.isArray(ultra)) return {
    approvalPolicy: null,
    sandboxMode: null,
    networkAccess: null
  };
  let vapor = ultra.approval_policy,
    wheat = ultra.sandbox_mode,
    yarn = ultra.sandbox_workspace_write;
  return {
    approvalPolicy: basalt(vapor ?? null),
    sandboxMode: wheat === "read-only" || wheat === "workspace-write" || wheat === "danger-full-access" ? wheat : null,
    networkAccess: typeof yarn == "object" && yarn && !Array.isArray(yarn) && typeof yarn.network_access == "boolean" ? yarn.network_access : null
  };
}
function xenon(zephyr, acorn) {
  return zephyr == null ? acorn.formatMessage({
    id: "settings.agent.configuration.scope.unavailable",
    defaultMessage: "Config scope unavailable.",
    description: "Message shown when no config scope is available in configuration settings"
  }) : zephyr.filePath == null ? acorn.formatMessage({
    id: "settings.agent.configuration.scope.readOnly",
    defaultMessage: "This config source cannot be edited here.",
    description: "Message shown when the selected config scope cannot be edited"
  }) : null;
}
function yellow({
  intl,
  scopeLockReason,
  origin,
  selectedScope,
  hasOptions,
  restrictedMessage
}) {
  return scopeLockReason ?? (hasOptions ? selectedScope?.kind !== "managed" && origin != null && AppInitialZ4(origin.name) ? intl.formatMessage({
    id: "settings.agent.configuration.control.managed",
    defaultMessage: "This value is managed by admin policy.",
    description: "Message shown when a configuration control is managed by admin policy"
  }) : null : restrictedMessage);
}
function zinc(bloom) {
  return bloom === $n.value ? $n : ember.find(item => item.value === bloom) ?? null;
}
function amber(coral) {
  return flint.find(item => item.value === coral) ?? null;
}
function basalt(drift) {
  return drift === "untrusted" || drift === "on-request" || drift === "never" || drift === "on-failure" ? drift : null;
}
var cedar, daisy, $, ember, $n, flint;
esmInit(() => {
  cedar = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  daisy = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  deferredUiWX();
  AppActionSelector();
  ensureComposerEsm_B7_Init();
  AppInitialRr();
  isUpdatePhaseInProgress();
  AppInitialSr();
  deferredConversationN();
  setPrimaryRuntimeInstallRelease();
  echo();
  primaryRuntime();
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  chatgptProjectQueryKey();
  DeferredUiCX();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  ensureComposerEsm_K1_Init();
  findProcessManagerRow();
  DeferredDXStub();
  DeferredDX();
  ensureSelectWorkspacePXInit();
  ArtifactTemplate();
  usePluginCategoryPageTelemetry();
  ensureDropdownMenuPopoverInit();
  deferredUiJ1();
  AppInitialR0();
  pendingWorktreeConversationStartApi();
  buildCodexDesktopRequestHeaders();
  ensureConversationPageEsm_Act_Init();
  ensureComposerEsm_K9_Init();
  ensureConfigQueryAtomsInitStub();
  list();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  AppIconOi();
  onyx();
  pearl();
  quartz();
  alpha();
  codexCommandTheme();
  AppIconBO();
  settingsRouteStateRState();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  AppInitialIr();
  ensureSkillsPageHelpersInit();
  ensureAuthProviderInit();
  dataAppActionReviewFileExpanded();
  ember = [{
    value: "untrusted",
    label: nickel.untrusted,
    description: "Always ask before taking action"
  }, {
    value: "on-request",
    label: nickel.onRequest,
    description: "Ask when escalation is requested"
  }, {
    value: "never",
    label: nickel.never,
    description: "Blocked actions fail instead of requesting approval"
  }];
  $n = {
    value: "on-failure",
    label: nickel.onFailure,
    description: "Ask when a command fails"
  };
  flint = [{
    value: "read-only",
    label: nickel.readOnly,
    description: "Can read files, but cannot edit them"
  }, {
    value: "workspace-write",
    label: nickel.workspaceWrite,
    description: "Can edit files, but only in this workspace"
  }, {
    value: "danger-full-access",
    label: nickel.fullAccess,
    description: "Can edit files outside this workspace"
  }];
})();
