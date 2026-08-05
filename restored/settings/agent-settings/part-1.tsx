// Restored from ref/webview/assets/agent-settings-3N239YzB.js
// Wave5 stub-pass soft companions.
const chatgpt2: any = undefined;

// Wave FX — full polished body from `agent-settings-3N239YzB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 51 (verified 113/164).
// Wave5d — FZ repair from fy-clean L=3008 sus=28; JSX PascalCase + careful split.
// Wave5d careful split 1/5
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
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
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
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
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
import {
  ensureImportSettingsGctInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
const DeferredDX: any = undefined;
// Wave5d soft JSX companions.
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Bravo(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
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
const at: any = undefined;
const deferredUiB: any = undefined;
const deferredUiFC: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FX unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ap2.tsx) */
const DeferredUiAP2: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useSelectedAvatar@desktop/use-selected-avatar.ts) */
const AppInitialAr: any = undefined;
/** Wave FX unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensurePersonalizationCInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-cx.tsx) */
const DeferredUiCX: any = undefined;
/** Wave FX unresolved companion (missing-export:hooks/deferred-dx.tsx) */
const DeferredDXStub: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureMcpServerToolsHelpersInit@mcp/ensure-mcp-server-tools-helpers-init.ts) */
const AppInitialEX: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/primary-runtime.ts) */
const primaryRuntime: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useConfigNoticesApi@settings/use-config-notices-api.ts) */
const AppInitialGX: any = undefined;
/** Wave FX unresolved companion (jsx-collision:getNestedOrDottedField@utils/get-nested-or-dotted-field.ts) */
const AppInitialH4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:resolveForcedHostLayers@hosts/resolve-forced-host-layers.ts) */
const AppInitialI4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:setFieldIfJsonChanged@utils/set-field-if-json-changed.ts) */
const AppInitialIr: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-j4.ts) */
const deferredHostsJ4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsJ4@hosts/deferred-hosts-j4.ts) */
const AppInitialJ4: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-primary-runtime-install-release.ts) */
const setPrimaryRuntimeInstallRelease: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-mp2.tsx) */
const AppInitialMP: any = undefined;
/** Wave FX unresolved companion (jsx-collision:codex2@ui/codex2-2.ts) */
const AppInitialNr: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ox3.tsx) */
const deferredUiOX3: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/models.tsx) */
const Models: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureAppIconL0Init@icons/app-icon-l0.tsx) */
const AppInitialR0: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInitStub: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:collaborationModeOrFallback@conversation/collaboration-mode-fields.ts) */
const AppInitialRr: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useAuth@hooks/use-auth.ts) */
const AppInitialRX: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureCheckoutWebviewPageInit@account/checkout-webview-page.tsx) */
const AppInitialSr: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureFloatingSurfaceStylesInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialTr: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/is-update-phase-in-progress.ts) */
const isUpdatePhaseInProgress: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/deferred-browser-y0.ts) */
const deferredBrowserY0: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/artifact-template.tsx) */
const ArtifactTemplate: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsZ4@hosts/deferred-hosts-z4.ts) */
const AppInitialZ4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:isBusinessPlanExcludingEducation@account/plan-type-helpers.ts) */
const AppInitialZ7: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/settings-route-state.ts) */
const settingsRouteStateAState: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/settings-route-state.ts) */
const settingsRouteStateIState: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/settings-route-state.ts) */
const settingsRouteStateNState: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/settings-route-state.ts) */
const settingsRouteStateRState: any = undefined;
function acorn(apex) {
  if (apex == null) return 0;
  switch (apex.phase) {
    case "checking":
      return 0;
    case "downloading":
      return apex.downloadedBytes == null || apex.totalBytes == null
        ? 0
        : Math.floor(
            Math.min((apex.downloadedBytes / apex.totalBytes) * 100, 100),
          );
    case "verifying":
    case "extracting":
      return 98;
    case "validating":
    case "installed":
    case "configuring":
    case "ready":
      return 100;
    case "error":
      return 0;
  }
}
function bloom(brook, cliff) {
  switch (brook?.phase) {
    case undefined:
    case "checking":
    case "downloading":
    case "error":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "localConversation.primaryRuntimeInstallStatus.downloading",
            defaultMessage: "Setting up your workspace: {percent}%",
            description:
              "Thread status shown while Codex downloads required local runtime tools before starting a response",
            values: {
              percent: cliff,
            },
          }}
        />
      );
    case "extracting":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "localConversation.primaryRuntimeInstallStatus.extracting",
            defaultMessage: "Preparing your workspace",
            description:
              "Thread status shown while Codex extracts required local runtime tools before starting a response",
          }}
        />
      );
    case "verifying":
    case "validating":
    case "installed":
    case "configuring":
    case "ready":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "localConversation.primaryRuntimeInstallStatus.finalizing",
            defaultMessage: "Finalizing your workspace",
            description:
              "Thread status shown while Codex finalizes required local runtime tools before starting a response",
          }}
        />
      );
  }
}
var coral,
  drift = esmInit(() => {
    ensureIntlFormattersInit();
  }),
  eagle,
  frost = esmInit(() => {
    ensureIntlFormattersInit();
    eagle = identity({
      customConfig: {
        id: "settings.agent.customConfig.sectionTitle",
        defaultMessage: "Custom config.toml settings",
        description: "Heading for the custom config.toml settings section",
      },
      projectConfig: {
        id: "settings.agent.configuration.scope.projectGroup",
        defaultMessage: "Project config",
        description: "Section label for project config scopes",
      },
      globalConfig: {
        id: "settings.agent.configuration.scope.globalGroup",
        defaultMessage: "Global config",
        description: "Section label for user and admin config scopes",
      },
      userConfig: {
        id: "settings.agent.configuration.scope.user",
        defaultMessage: "User config",
        description:
          "Label for the user config scope in configuration settings",
      },
      adminConfig: {
        id: "settings.agent.configuration.scope.managed",
        defaultMessage: "Admin config",
        description:
          "Label for the admin config scope in configuration settings",
      },
      approvalPolicy: {
        id: "settings.agent.configuration.approval.label",
        defaultMessage: "Approval policy",
        description: "Label for approval policy in configuration settings",
      },
      untrusted: {
        id: "settings.agent.configuration.approval.option.untrusted",
        defaultMessage: "Untrusted",
        description: "Label for the untrusted approval policy option",
      },
      onFailure: {
        id: "settings.agent.configuration.approval.option.onFailure",
        defaultMessage: "On failure",
        description: "Label for the legacy on-failure approval policy option",
      },
      onRequest: {
        id: "settings.agent.configuration.approval.option.onRequest",
        defaultMessage: "On request",
        description: "Label for the on request approval policy option",
      },
      never: {
        id: "settings.agent.configuration.approval.option.never",
        defaultMessage: "Never ask for approval",
        description: "Label for the never approval policy option",
      },
      sandboxSettings: {
        id: "settings.agent.configuration.sandbox.label",
        defaultMessage: "Sandbox settings",
        description: "Label for sandbox settings in configuration settings",
      },
      readOnly: {
        id: "settings.agent.configuration.sandbox.option.readOnly",
        defaultMessage: "Read only",
        description: "Label for the read only sandbox option",
      },
      workspaceWrite: {
        id: "settings.agent.configuration.sandbox.option.workspaceWrite",
        defaultMessage: "Workspace write",
        description: "Label for the workspace write sandbox option",
      },
      fullAccess: {
        id: "settings.agent.configuration.sandbox.option.fullAccess",
        defaultMessage: "Full access",
        description: "Label for the full access sandbox option",
      },
      networkAccess: {
        id: "settings.agent.configuration.network.label",
        defaultMessage: "Allow network access",
        description: "Label for network access in configuration settings",
      },
      workspaceDependencies: {
        id: "settings.agent.dependencies.sectionTitle",
        defaultMessage: "Workspace Dependencies",
        description: "Heading for the Codex dependencies settings section",
      },
      currentDependencyVersion: {
        id: "settings.agent.dependencies.bundleVersion.label",
        defaultMessage: "Current version:",
        description:
          "Footer label for the installed Codex dependency bundle version",
      },
      codexDependencies: {
        id: "settings.agent.dependencies.enabled.label",
        defaultMessage: "Codex dependencies",
        description: "Label for the Codex dependencies enabled toggle",
      },
      diagnoseWorkspaceDependencies: {
        id: "settings.agent.dependencies.diagnose.label",
        defaultMessage: "Diagnose issues in Codex Workspace",
        description: "Label for dependency diagnostics in settings",
      },
      resetWorkspaceDependencies: {
        id: "settings.agent.dependencies.reset.label",
        defaultMessage: "Reset and install Workspace",
        description:
          "Label for resetting and reinstalling dependencies in settings",
      },
      experimentalFeatures: {
        id: "settings.general.experimentalFeatures",
        defaultMessage: "Experimental features (Beta)",
        description: "Heading for beta experimental features settings group",
      },
    });
  });
async function glide({ filePath, keyPath, value }) {
  let dusk = iris(keyPath, value);
  if (dusk == null)
    throw Error("Unsupported config key for project config write.");
  await honey({
    filePath,
    field: dusk,
  });
}
async function honey({ filePath, field }) {
  let elm = "";
  try {
    elm = (
      await invokeDesktopRpc("read-file", {
        params: {
          path: filePath,
        },
      })
    ).contents;
  } catch (grove) {
    if (!north(grove)) throw Error("Failed to read project config.");
  }
  let fern = jewel(elm, field.name, field.value);
  if (fern !== elm)
    try {
      await invokeDesktopRpc("local-environment-config-save", {
        params: {
          configPath: filePath,
          raw: fern,
        },
      });
    } catch {
      throw Error("Failed to save project config.");
    }
}
function iris(hill, isle) {
  return hill === "approval_policy" && typeof isle == "string"
    ? {
        name: "approval_policy",
        value: isle,
      }
    : hill === "sandbox_mode" && typeof isle == "string"
      ? {
          name: "sandbox_mode",
          value: isle,
        }
      : hill === "sandbox_workspace_write.network_access" &&
          typeof isle == "boolean"
        ? {
            name: "network_access",
            value: isle,
          }
        : null;
}
function jewel(juniper, lagoon, meadow) {
  return lagoon === "network_access"
    ? _n(juniper, meadow === true)
    : knoll(juniper, lagoon, String(meadow));
}
function knoll(nest, oak, petal) {
  let quiet = nest.length > 0 ? nest.split("\n") : [],
    rain = null,
    seed = false;
  for (let [trail, urn] of quiet.entries()) {
    let vine = moss(urn);
    if (vine != null) {
      rain = vine;
      continue;
    }
    if (rain == null && RegExp(`^\\s*${oak}\\s*=`).test(urn)) {
      quiet[trail] = `${oak} = "${petal}"`;
      seed = true;
      break;
    }
  }
  if (!seed) {
    let wind = quiet.findIndex((item) => moss(item) != null),
      yarrow = wind === -1 ? quiet.length : wind;
    quiet.splice(yarrow, 0, `${oak} = "${petal}"`);
  }
  return lunar(quiet.join("\n"));
}
function _n(azure, birch) {
  let canyon = azure.length > 0 ? azure.split("\n") : [],
    dew = false,
    ever = canyon.length,
    grain = false;
  for (let [ink, jadeite] of canyon.entries()) {
    let kernel = moss(jadeite);
    if (kernel != null) {
      if (dew) {
        ever = ink;
        break;
      }
      kernel === "sandbox_workspace_write" && (dew = true);
      continue;
    }
    if (dew && /^\s*network_access\s*=/.test(jadeite)) {
      canyon[ink] = `network_access = ${birch ? "true" : "false"}`;
      grain = true;
      break;
    }
  }
  if (dew && !grain)
    return (
      canyon.splice(ever, 0, `network_access = ${birch ? "true" : "false"}`),
      lunar(canyon.join("\n"))
    );
  if (grain) return lunar(canyon.join("\n"));
  let haven = azure.length > 0 && !azure.endsWith("\n") ? `${azure}\n` : azure;
  return `${haven}${haven.trim().length === 0 ? "" : "\n"}[sandbox_workspace_write]\nnetwork_access = ${birch ? "true" : "false"}\n`;
}
function lunar(leaf) {
  return leaf.endsWith("\n") ? leaf : `${leaf}\n`;
}
function moss(maple) {
  let nimbus = maple.match(/^\s*\[([^\]]+)\]\s*(?:#.*)?$/);
  return nimbus?.[1] == null ? null : nimbus[1].trim();
}
function north(opal) {
  if (!(opal instanceof Error)) return false;
  let plume = opal.message.trim().toLowerCase();
  return (
    plume === "enoent" ||
    plume.includes("no such file") ||
    plume.includes("not found")
  );
}
var orbit = esmInit(() => {
  scrollAppActionTargetTo();
});
function pine(quillow) {
  let { hostId } = quillow,
    root = CodexPluginActionType(appScopeAtom),
    silk = useIntl(),
    [thorn, upland] = unity.useState(false),
    [vista] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER(
      "statsig_default_enable_features",
    ),
    wisp = AppInitialL(CodexPluginActionResult(AppInitialC)),
    { data = [], isLoading } = CodexBrowserSurfaceActionType(
      deferredBrowserY0,
      hostId,
    ),
    yonder = {
      hostId,
    };
  let zenith = HostFeatureConfigToggles(yonder),
    anvil = data.filter(storm),
    beacon = data.some(ridge),
    crag = data.find(quest),
    dome = vista?.[realtimeVoiceCommandMessages] === true,
    eddy = (spur) => ({
      key: spur.name,
      label: spur.displayName ?? spur.name,
      description: spur.description ?? undefined,
      enabled: spur.enabled,
      onChange: (tor) => {
        zenith.mutate(
          {
            featureName: spur.name,
            enabled: tor,
          },
          {
            onSuccess: () => {
              upland(true);
            },
          },
        );
      },
    });
  let fjord = [
      ...(beacon
        ? [
            {
              key: "plugins",
              label: silk.formatMessage({
                id: "settings.general.experimentalFeatures.plugins.label",
                defaultMessage: "Plugins",
                description:
                  "Label for the plugins experimental feature toggle",
              }),
              description:
                crag?.description ??
                silk.formatMessage({
                  id: "settings.general.experimentalFeatures.plugins.description",
                  defaultMessage: "Enable the plugins experience in ChatGPT",
                  description:
                    "Description for the plugins experimental feature toggle",
                }),
              enabled: crag?.enabled ?? true,
              onChange: (updraft) => {
                zenith.mutate(
                  {
                    featureName: "plugins",
                    enabled: updraft,
                  },
                  {
                    onSuccess: () => {
                      upland(true);
                    },
                  },
                );
              },
            },
          ]
        : []),
      ...(dome && !isLoading
        ? [
            {
              key: realtimeVoiceCommandMessages,
              label: silk.formatMessage({
                id: "settings.general.experimentalFeatures.requestUserInput.label",
                defaultMessage: "Request user input",
                description:
                  "Label for the request user input experimental feature toggle",
              }),
              description: silk.formatMessage({
                id: "settings.general.experimentalFeatures.requestUserInput.description",
                defaultMessage:
                  "Allow Codex to ask questions outside Plan mode. Changes apply only to new threads",
                description:
                  "Description for the request user input experimental feature toggle",
              }),
              enabled: wisp,
              onChange: (verge) => {
                root.set(AppInitialC, verge);
              },
            },
          ]
        : []),
      ...anvil.map(eddy),
    ],
    glen = fjord.length > 0,
    hearth = useChromeAndCodeThemeSync,
    inlet = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.general.experimentalFeatures",
          defaultMessage: "Experimental features (Beta)",
          description: "Heading for beta experimental features settings group",
        }}
      />
    );
  let jetty = thorn ? (
    <div className="mb-2 block font-medium text-token-error-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.restartNote",
            defaultMessage:
              "Restart {appName} to apply experimental feature changes",
            description:
              "Notice shown after changing an experimental feature to indicate restart is required",
            values: {
              appName: ensureImportSettingsGctInit,
            },
          }}
        />
      }
    </div>
  ) : undefined;
  let knob = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: inlet,
        subtitle: jetty,
      }}
    />
  );
  let ledge = useChromeAndCodeThemeSync,
    mire = parseUrlOrFallback,
    nook = isLoading ? (
      <SettingsLoadingRow
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.general.experimentalFeatures.loading",
                defaultMessage: "Loading experimental features…",
                description:
                  "Loading label for beta experimental features settings group",
              }}
            />
          ),
        }}
      />
    ) : null;
  let oxbow =
    !isLoading && !glen ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.general.experimentalFeatures.empty",
                defaultMessage: "No beta experimental features available",
                description:
                  "Empty label for beta experimental features settings group",
              }}
            />
          ),
          control: <span className="h-5 w-8" />,
        }}
      />
    ) : null;
  let pond = fjord.map((item) => (
      <EnsurePersonalizationCInit
        key={item.key}
        {...{
          label: item.label,
          description: item.description,
          control: (
            <AppInitialYC
              checked={item.enabled}
              disabled={zenith.isPending}
              onChange={item.onChange}
              ariaLabel={silk.formatMessage(
                {
                  id: "settings.general.experimentalFeatures.toggle",
                  defaultMessage: "Toggle {featureName}",
                  description:
                    "Aria label for toggling a beta experimental feature",
                },
                {
                  featureName: item.label,
                },
              )}
            />
          ),
        }}
      />
    )),
    quarry = (
      <Copper
        {...{
          children: [nook, oxbow, pond],
        }}
      />
    );
  let rapids = (
    <Bravo.Content
      {...{
        children: quarry,
      }}
    />
  );
  return (
    <Alpha
      {...{
        children: [knob, rapids],
      }}
    />
  );
}
function quest(weir) {
  return weir.name === "plugins";
}
function ridge(yard) {
  return yard.name === "apps" && yard.enabled;
}
function storm(anchor) {
  return (
    settingsRouteStateAState(anchor) &&
    anchor.name !== "default_mode_request_user_input"
  );
}
var tide,
  unity,
  vale,
  wave = esmInit(() => {
    tide = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    unity = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    chatgpt2();
    AppInitialBC();
    list();
    ensureAppScopeInit();
    settingsRouteStateIState();
    codexCommandTheme();
    initSettingsLoadingRow();
    AppInitialVC();
    AppInitialFC();
    remoteSshConnections();
    deferredUiU();
    ensureDebugPanelTurnFilesInit();
  });
