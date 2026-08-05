// Restored from ref/webview/assets/agent-settings-3N239YzB.js
// Wave5 stub-pass soft companions.
const deferredHostsJ4: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const settingsRouteStateNState: any = undefined;

// Wave FX — full polished body from `agent-settings-3N239YzB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 51 (verified 113/164).
// Wave5d — FZ repair from fy-clean L=3008 sus=28; JSX PascalCase + careful split.
// Wave5d careful split 4/5
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

// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AgentSettingsHelper21: any = undefined;
const AgentSettingsHelper22: any = undefined;
const AppInitialH4: any = undefined;
const AppInitialI4: any = undefined;
const AppInitialJ4: any = undefined;
const AppInitialYC: any = undefined;
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
const north: any = undefined;
const deferredUiB: any = undefined;
const deferredUiOX3: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function orbit({ hostId }) {
  let pine = CodexPluginActionType(appScopeAtom),
    quest = useIntl(),
    ridge = useLocation(),
    [storm, tide] = mint.useState(null),
    [unity, vale] = mint.useState(null),
    [wave, apex] = mint.useState({}),
    brook = CodexPluginActionResult(deferredHostsJ4),
    cliff = settingsRouteStateNState(ridge.state),
    dusk = cliff.hasValue
      ? hostId === "local"
        ? cliff.workspaceRoot
        : null
      : hostId === "local"
        ? brook
        : null,
    elm = readCodexHomeFromQuery(hostId),
    { data: fern, isPending } = useLocalCwdModeHostConfig(dusk, {
      hostId,
      cwdMode: hostId === "local" ? "fallback-to-workspace" : "preserve-null",
    }),
    { data, isPending: _isPending } = CodexBrowserSurfaceActionType(
      ensureConfigQueryAtomsInit,
      {
        hostId,
      },
    ),
    grove = fern?.config ?? null,
    hill = fern?.layers ?? null,
    isle = fern?.origins ?? null,
    juniper = data?.requirements ?? null,
    lagoon = alpha(hill, quest),
    meadow = hill?.find((upland) => upland.name.type === "user") ?? null,
    nest = hill?.find((vista) => AppInitialZ4(vista.name)) ?? null,
    oak = elm == null ? null : `${elm}/config.toml`,
    petal = meadow == null ? oak : managedConfigFilePath(meadow.name),
    quiet = {
      key: "user",
      kind: "user",
      label: quest.formatMessage(reef.userConfig),
      tooltipText: petal ?? "~/.codex/config.toml",
      filePath: petal,
      expectedVersion: meadow?.version ?? null,
      workspaceRoot: null,
      layer: meadow,
    },
    rain =
      nest == null
        ? null
        : {
            key: "managed",
            kind: "managed",
            label: quest.formatMessage(reef.adminConfig),
            tooltipText: quest.formatMessage({
              id: "settings.agent.configuration.scope.managedDescription",
              defaultMessage: "Managed by admin policy",
              description:
                "Tooltip text for the admin config scope in configuration settings",
            }),
            filePath: managedConfigFilePath(nest.name),
            expectedVersion: nest.version,
            workspaceRoot: null,
            layer: nest,
          },
    seed = [...lagoon, quiet, ...(rain == null ? [] : [rain])],
    trail = lagoon.length > 0,
    urn = dusk == null ? (seed[0]?.key ?? null) : `project:${dusk}`,
    vine =
      seed.find((item) => item.key === storm) ??
      seed.find((item) => item.key === urn) ??
      seed[0] ??
      null,
    { data: _data } = CodexBrowserSurfaceActionType(deferredUiOX3, {
      cwd:
        vine?.workspaceRoot == null
          ? dusk == null
            ? null
            : identityCwd(dusk)
          : identityCwd(vine.workspaceRoot),
      hostId,
    }),
    wind = bravo(vine?.layer?.config ?? null),
    yarrow = harbor(grove?.approval_policy ?? null) ?? "on-request",
    azure = grove?.sandbox_mode == null ? "read-only" : grove.sandbox_mode,
    birch = wind.sandboxMode == null && azure === "workspace-write",
    canyon = wind.sandboxMode === "workspace-write" || birch,
    dew = wind.approvalPolicy ?? yarrow,
    ever = wind.sandboxMode ?? azure,
    _e = echo(dew),
    field = gamma(ever),
    grain =
      wind.networkAccess ??
      grove?.sandbox_workspace_write?.network_access ??
      false,
    be =
      isle == null
        ? null
        : AppInitialH4(isle, "approval_policy", ["approvalPolicy"]),
    haven = isle == null ? null : AppInitialH4(isle, "sandbox_mode"),
    ink =
      isle == null
        ? null
        : AppInitialH4(isle, "sandbox_workspace_write", ["network_access"]),
    jadeite =
      vine?.kind === "project" ? (vine.layer?.disabledReason ?? null) : null,
    kernel = copper(vine, quest),
    leaf = nova.filter((item) =>
      juniper?.allowedApprovalPolicies == null ||
      juniper.allowedApprovalPolicies.length === 0
        ? true
        : juniper.allowedApprovalPolicies.includes(item.value),
    ),
    maple = olive.filter((item) =>
      juniper?.allowedSandboxModes == null ||
      juniper.allowedSandboxModes.length === 0
        ? true
        : juniper.allowedSandboxModes.includes(item.value),
    );
  async function nimbus(wisp, yonder, zenith) {
    if (!(vine == null || vine.filePath == null) && unity == null) {
      vale(wisp);
      apex((anvil) => ({
        ...anvil,
        [wisp]: undefined,
      }));
      try {
        if (vine.kind === "project")
          await falcon({
            filePath: vine.filePath,
            keyPath: yonder,
            value: zenith,
          });
        else {
          let beacon =
            vine.kind === "user"
              ? await AppInitialI4(pine.queryClient, hostId)
              : null;
          await canonicalizeWorkspacePathKey("write-config-value", {
            hostId,
            keyPath: yonder,
            value: zenith,
            mergeStrategy: "upsert",
            filePath: beacon ? beacon.filePath : vine.filePath,
            expectedVersion:
              beacon == null ? vine.expectedVersion : beacon.expectedVersion,
          });
        }
        await pine.queryClient.invalidateQueries({
          queryKey: [...LAYERED_RESPONSE_CONFIG_PATH, hostId],
        });
        await Promise.all([
          pine.queryClient.invalidateQueries({
            queryKey: [...AppInitialJ4, hostId],
          }),
          pine.queryClient.invalidateQueries({
            queryKey: [...USER_CONFIG_PATH, hostId],
          }),
        ]);
      } catch (crag) {
        apex((dome) => ({
          ...dome,
          [wisp]: crag instanceof Error ? crag.message : "Unable to save",
        }));
      } finally {
        vale(null);
      }
    }
  }
  let opal = isPending || _isPending,
    plume = delta({
      intl: quest,
      scopeLockReason: kernel,
      origin: be,
      selectedScope: vine,
      hasOptions: leaf.length > 0,
      restrictedMessage: quest.formatMessage({
        id: "settings.agent.configuration.approval.restricted",
        defaultMessage: "Approval policy is restricted by this installation.",
        description:
          "Restriction message for approval policy in configuration settings",
      }),
    }),
    quillow = delta({
      intl: quest,
      scopeLockReason: kernel,
      origin: haven,
      selectedScope: vine,
      hasOptions: maple.length > 0,
      restrictedMessage: quest.formatMessage({
        id: "settings.agent.configuration.sandbox.restricted",
        defaultMessage: "Sandbox mode is restricted by this installation.",
        description:
          "Restriction message for sandbox mode in configuration settings",
      }),
    }),
    root = delta({
      intl: quest,
      scopeLockReason: kernel,
      origin: ink,
      selectedScope: vine,
      hasOptions: true,
      restrictedMessage: "",
    }),
    silk = opal || unity != null || jadeite != null,
    thorn = (eddy) => {
      tide(eddy);
      apex({});
    };
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <DropdownMenuPopover
                  {...{
                    align: "start",
                    contentWidth: "menuWide",
                    disabled: seed.length === 0,
                    triggerButton: (
                      <DropdownTriggerButton
                        disabled={seed.length === 0}
                        contentClassName="truncate"
                      >
                        {vine?.label ??
                          quest.formatMessage({
                            id: "settings.agent.configuration.scope.loading",
                            defaultMessage: "Loading…",
                            description:
                              "Fallback label while config scope options are loading",
                          })}
                      </DropdownTriggerButton>
                    ),
                    children: [
                      trail ? (
                        <>
                          {
                            <DropdownMenu.Section
                              {...{
                                children: [
                                  <DropdownMenu.SectionLabel
                                    {...{
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            ...reef.projectConfig,
                                          }}
                                        />
                                      ),
                                    }}
                                  />,
                                  lagoon.map((item) => (
                                    <AgentSettingsHelper21
                                      key={item.key}
                                      {...{
                                        scopeOption: item,
                                        selected: vine?.key === item.key,
                                        onSelect: () => {
                                          thorn(item.key);
                                        },
                                      }}
                                    />
                                  )),
                                ],
                              }}
                            />
                          }
                          {<DropdownMenu.Separator {...{}} />}
                        </>
                      ) : null,
                      <DropdownMenu.Section
                        {...{
                          children: [
                            <DropdownMenu.SectionLabel
                              {...{
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      ...reef.globalConfig,
                                    }}
                                  />
                                ),
                              }}
                            />,
                            <AgentSettingsHelper21
                              {...{
                                scopeOption: quiet,
                                selected: vine?.key === quiet.key,
                                onSelect: () => {
                                  thorn(quiet.key);
                                },
                              }}
                            />,
                            rain == null ? null : (
                              <AgentSettingsHelper21
                                {...{
                                  scopeOption: rain,
                                  selected: vine?.key === rain.key,
                                  onSelect: () => {
                                    thorn(rain.key);
                                  },
                                }}
                              />
                            ),
                          ],
                        }}
                      />,
                    ],
                  }}
                />
              ),
              actions: (
                <ReadLoginRouteQuerySnapshot
                  {...{
                    color: "ghost",
                    size: "toolbar",
                    disabled: vine?.filePath == null,
                    onClick: () => {
                      vine?.filePath != null &&
                        readCodexHomeFromQuery({
                          path: vine.filePath,
                          cwd:
                            vine.workspaceRoot == null
                              ? null
                              : identityCwd(vine.workspaceRoot),
                          hostId,
                          target: _data?.preferredTarget,
                        });
                    },
                    children: [
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.agent.configuration.scope.open",
                          defaultMessage: "Open config.toml",
                          description:
                            "Button label to open the selected config file",
                        }}
                      />,
                      <UsePluginNavigationTelemetry
                        {...{
                          className: "icon-2xs",
                        }}
                      />,
                    ],
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: [
                jadeite == null ? null : (
                  <ResolveBrowserTabPanelSide
                    {...{
                      content: jadeite,
                      Icon: applyActive,
                      type: "warning",
                    }}
                  />
                ),
                <ParseUrlOrFallback
                  {...{
                    children: [
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <MemoizedFormattedMessage
                              {...{
                                ...reef.approvalPolicy,
                              }}
                            />
                          ),
                          description: (
                            <AgentSettingsHelper22
                              {...{
                                error: wave.approval,
                                lockReason: plume,
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.agent.configuration.approval.definition",
                                      defaultMessage:
                                        "Choose when ChatGPT asks for approval",
                                      description:
                                        "Definition for approval policy in configuration settings",
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                          control: (
                            <DropdownMenuPopover
                              {...{
                                align: "end",
                                contentWidth: "panelWide",
                                disabled: silk || plume != null,
                                triggerButton: (
                                  <DropdownTriggerButton
                                    disabled={silk || plume != null}
                                    contentClassName="truncate"
                                  >
                                    {_e == null
                                      ? dew
                                      : quest.formatMessage(_e.label)}
                                  </DropdownTriggerButton>
                                ),
                                children: leaf.map((item) => (
                                  <DropdownMenu.Item
                                    key={item.value}
                                    {...{
                                      RightIcon:
                                        item.value === dew
                                          ? AppIconZlt
                                          : undefined,
                                      subTextAllowWrap: true,
                                      onSelect: () => {
                                        nimbus(
                                          "approval",
                                          "approval_policy",
                                          item.value,
                                        );
                                      },
                                      SubText: (
                                        <div className="pt-1 text-sm text-token-text-secondary">
                                          {item.description}
                                        </div>
                                      ),
                                      children: (
                                        <span className="text-sm">
                                          {quest.formatMessage(item.label)}
                                        </span>
                                      ),
                                    }}
                                  />
                                )),
                              }}
                            />
                          ),
                        }}
                      />,
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <MemoizedFormattedMessage
                              {...{
                                ...reef.sandboxSettings,
                              }}
                            />
                          ),
                          description: (
                            <AgentSettingsHelper22
                              {...{
                                error: wave.sandbox,
                                lockReason: quillow,
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.agent.configuration.sandbox.definition",
                                      defaultMessage:
                                        "Choose how much ChatGPT can do when running commands",
                                      description:
                                        "Definition for sandbox settings in configuration settings",
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                          control: (
                            <DropdownMenuPopover
                              {...{
                                align: "end",
                                contentWidth: "panelWide",
                                disabled: silk || quillow != null,
                                triggerButton: (
                                  <DropdownTriggerButton
                                    disabled={silk || quillow != null}
                                    contentClassName="truncate"
                                  >
                                    {field == null
                                      ? ever
                                      : quest.formatMessage(field.label)}
                                  </DropdownTriggerButton>
                                ),
                                children: maple.map((item) => (
                                  <DropdownMenu.Item
                                    key={item.value}
                                    {...{
                                      RightIcon:
                                        item.value === ever
                                          ? AppIconZlt
                                          : undefined,
                                      subTextAllowWrap: true,
                                      onSelect: () => {
                                        nimbus(
                                          "sandbox",
                                          "sandbox_mode",
                                          item.value,
                                        );
                                      },
                                      SubText: (
                                        <div className="pt-1 text-sm text-token-text-secondary">
                                          {item.description}
                                        </div>
                                      ),
                                      children: (
                                        <span className="text-sm">
                                          {quest.formatMessage(item.label)}
                                        </span>
                                      ),
                                    }}
                                  />
                                )),
                              }}
                            />
                          ),
                        }}
                      />,
                      canyon ? (
                        <EnsurePersonalizationCInit
                          {...{
                            label: (
                              <MemoizedFormattedMessage
                                {...{
                                  ...reef.networkAccess,
                                }}
                              />
                            ),
                            description: (
                              <AgentSettingsHelper22
                                {...{
                                  error: wave.network,
                                  lockReason: root,
                                  children: (
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "settings.agent.configuration.network.definition",
                                        defaultMessage:
                                          "Allow network access when the sandbox is set to workspace write",
                                        description:
                                          "Definition for network access in configuration settings",
                                      }}
                                    />
                                  ),
                                }}
                              />
                            ),
                            control: (
                              <AppInitialYC
                                checked={grain}
                                disabled={silk || root != null}
                                onChange={(fjord) => {
                                  nimbus(
                                    "network",
                                    "sandbox_workspace_write.network_access",
                                    fjord,
                                  );
                                }}
                                ariaLabel={quest.formatMessage({
                                  id: "settings.agent.configuration.network.ariaLabel",
                                  defaultMessage: "Allow network access",
                                  description:
                                    "Aria label for network access toggle in configuration settings",
                                })}
                              />
                            ),
                          }}
                        />
                      ) : null,
                    ],
                  }}
                />,
              ],
            }}
          />,
        ],
      }}
    />
  );
}
