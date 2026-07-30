// Restored from ref/webview/assets/personalization-settings-DkpdQsHj.js
// Wave FX — full polished body from `personalization-settings-DkpdQsHj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 40 (verified 94/134).
// Wave5d — FZ repair from fy-clean L=2691 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 1/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { formatAgentMention } from "../../agents/format-agent-mention";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MEMORY_SETTING_TOGGLED_TYPE } from "../../analytics/codex-memory-setting-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { MEMORIES_ID } from "../../config/memories-id";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL } from "../../docs/codex-doc-urls";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { protobufAnalyticsEventsV1CodexMemorySettingToggled } from "../../ui/protobuf-analytics-events-v1-codex-memory-setting-toggled-2";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init, ensurePersonalizationM6Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { buildMemoryFeatureFlags } from "../build-memory-feature-flags";
import { ensureChronicleConfigQueriesInit, useChronicleConfigQuery } from "../chronicle-config-queries";
import { gpuTearingDebugSettingsAtom } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";
const readLoginRouteQuerySnapshot: any = undefined;
// Wave5d soft stubs.
const PersonalizationSettingsHelper11: any = undefined;
const PersonalizationSettingsHelper6: any = undefined;
const deferredUiB: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
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
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FX unresolved companion (jsx-collision:ensurePersonalizationDollar0Init@utils/wave-as-gap-ensure-inits.ts) */
const AppInitial0: any = undefined;
/** Wave FX unresolved companion (jsx-collision:message@conversation/message.ts) */
const AppInitialA9: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiB@ui/deferred-ui-b.ts) */
const AppInitialB: any = undefined;
/** Wave FX unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensurePersonalizationCInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-e.ts) */
const deferredUiE: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-e2.tsx) */
const DeferredUiE2: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/token-invalidated.ts) */
const tokenInvalidated: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-f22.tsx) */
const DeferredUiF22: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useOpenLocatorInMainWindow@navigation/use-open-locator-in-main-window.ts) */
const AppInitialG: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave FX unresolved companion (jsx-collision:inProgress2@ui/in-progress2.ts) */
const AppInitialO9: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/apply-u0000-u001-fu007-f2.ts) */
const applyU0000U001FU007F2: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:usePlatformAwareFeatureGate@hooks/use-platform-aware-feature-gate.ts) */
const AppInitialS: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FX unresolved companion (jsx-collision:buildMemoryFeatureFlags@settings/build-memory-feature-flags.ts) */
const AppInitialUt: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:requestRealtimeVoicePresentationSurface@voice/request-realtime-voice-presentation-surface.ts) */
const AppInitialW: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureWebviewResumeConversationInit@conversation/ensure-webview-resume-conversation-init.ts) */
const AppInitialWt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:collectUniqueMappedPresenceEntries@shell/collect-unique-mapped-presence-entries.ts) */
const AppInitialX: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FX unresolved companion (jsx-collision:findProcessManagerRow@desktop/find-process-manager-row.ts) */
const AppInitialY: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/deferred-browser-y0.ts) */
const deferredBrowserY0: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:readConfigFeatureFlag@config/read-config-feature-flag.ts) */
const AppInitialYgt: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshotStub: any = undefined;
/** Wave FX unresolved companion (jsx-collision:chatProcessRegister@ui/chat-process-register.ts) */
const AppInitialZ: any = undefined;
var olive,
  prism = esmInit(() => {
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    scrollAppActionTargetTo();
    olive = buildMemoryFeatureFlags(appScopeAtom, "codex-agents-md", acorn => ({
      params: {
        hostId: acorn
      },
      staleTime: readScrollTop.FIVE_SECONDS
    }));
  }),
  quill,
  reef = esmInit(() => {
    ensureIntlFormattersInit();
    quill = identity({
      personality: {
        id: "settings.personalization.personality.label",
        defaultMessage: "Personality",
        description: "Label for personality selection in personalization settings"
      },
      friendly: {
        id: "composer.personalitySlashCommand.label.friendly",
        defaultMessage: "Friendly",
        description: "Label for the friendly personality"
      },
      pragmatic: {
        id: "composer.personalitySlashCommand.label.pragmatic",
        defaultMessage: "Pragmatic",
        description: "Label for the pragmatic personality"
      },
      customInstructions: {
        id: "settings.personalization.agents.title",
        defaultMessage: "Custom instructions",
        description: "Heading for personal agents settings section"
      },
      memory: {
        id: "settings.personalization.memory.title",
        defaultMessage: "Memory",
        description: "Heading for memory settings in personalization"
      },
      enableMemories: {
        id: "settings.memory.enableMemoriesLabel",
        defaultMessage: "Enable memories",
        description: "Label for enabling memories"
      },
      allowMemoryGenerationFromToolAssistedTasks: {
        id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksLabel",
        defaultMessage: "Allow memory generation from tool-assisted chats",
        description: "Label for allowing memory generation when MCP or web search is used"
      },
      resetMemories: {
        id: "settings.memory.resetMemoriesLabel",
        defaultMessage: "Reset memories",
        description: "Label for resetting memories"
      }
    });
  });
function sage(bloom) {
  return ultra(bloom, topaz);
}
function topaz(coral) {
  let {
    edits
  } = coral;
  return edits;
}
function ultra(drift, eagle) {
  let frost = useQueryClient(),
    {
      data
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, drift),
    glide = ensureGitRepoWatchAtomsInit(),
    honey = [...USER_CONFIG_PATH, drift];
  let iris = honey,
    jewel = orbit => canonicalizeWorkspacePathKey("batch-write-config-value", {
      hostId: drift,
      edits: eagle(orbit).map(vapor),
      filePath: data?.configWriteTarget?.filePath ?? null,
      expectedVersion: null,
      reloadUserConfig: true
    });
  let knoll = async pine => {
    let quest = eagle(pine);
    await frost.cancelQueries({
      queryKey: iris
    });
    let ridge = frost.getQueryData(iris);
    return frost.setQueryData(iris, storm => storm == null ? storm : {
      ...storm,
      config: AppInitialA9(storm.config, quest)
    }), {
      previousUserConfig: ridge
    };
  };
  let lunar = (tide, unity, vale) => {
    appActionSidebarProjectRefSchema.error("Failed to update memory config", {
      safe: {},
      sensitive: {
        error: tide
      }
    });
    frost.setQueryData(iris, vale?.previousUserConfig);
  };
  let moss = async () => {
    await Promise.all([glide(USER_CONFIG_PATH), glide(["user-saved-config"])]);
  };
  let north;
  return north = {
    mutationFn: jewel,
    onMutate: knoll,
    onError: lunar,
    onSettled: moss
  }, noop(north);
}
function vapor(wave) {
  let {
    keyPath,
    value
  } = wave;
  return {
    keyPath,
    value,
    mergeStrategy: "upsert"
  };
}
var wheat,
  yarn = esmInit(() => {
    wheat = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    AppActionSelector();
    ensureConfigQueryAtomsInit();
    deferredHostsS3();
    posixPathBasename();
    formatAgentMention();
  });
function zephyr({
  onChronicleResearchPreviewToggled
} = {}) {
  let apex = CodexPluginActionType(appScopeAtom),
    brook = CodexPluginActionResult(DeferredUiF22),
    cliff = useIntl(),
    dusk = useQueryClient(),
    elm = composerNavigation(),
    fern = useChronicleConfigQuery(),
    {
      data,
      isLoading
    } = ensurePersonalizationK0Init(DesktopPersistenceKeys.CHRONICLE_CONSENT_ACCEPTED),
    {
      data: _data,
      isLoading: _isLoading
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, brook),
    [grove, hill] = nova.useState(false),
    [isle, juniper] = nova.useState(false),
    [lagoon, meadow] = nova.useState(null),
    [nest, oak] = nova.useState(false),
    petal = SIDEBAR_HIT_TEST_SELECTOR("chronicle-permissions", {
      queryConfig: {
        intervalMs: 1e3,
        refetchIntervalInBackground: true,
        refetchOnMount: "always"
      }
    }),
    quiet = AppInitialYgt(_data?.config, MEMORIES_ID) === true,
    rain = AppInitialYgt(_data?.config, AppInitialY) === true,
    seed = fern.isPending || nest || isLoading,
    trail = seed || !quiet,
    urn = gpuTearingDebugSettingsAtom({
      accessibilityStatus: petal.data?.accessibility,
      errorMessage: lagoon,
      isSidecarPresent: petal.data?.chronicleSidecarPresent === true,
      isUpdatingChronicle: nest,
      processState: petal.data?.chronicleSidecarProcessState ?? "disabled",
      screenRecordingStatus: petal.data?.screenRecording
    }),
    vine = cliff.formatMessage({
      id: "settings.general.experimentalFeatures.chronicle.name",
      defaultMessage: "Chronicle research preview",
      description: "Name of the Chronicle experimental feature"
    });
  nova.useEffect(() => {
    isle && deferredConversationP(urn.kind) && readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, true);
  }, [isle, apex, urn.kind]);
  let wind = async ({
      rememberConsentAccepted,
      showSetupDialog
    }) => {
      let azure = rain;
      oak(true);
      meadow(null);
      hill(false);
      juniper(showSetupDialog);
      try {
        rememberConsentAccepted === true && (await readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_CONSENT_ACCEPTED, true));
        showSetupDialog || readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, false);
        await fern.mutateAsync({
          enabled: true
        });
        onChronicleResearchPreviewToggled?.(azure, true);
        await dusk.invalidateQueries({
          queryKey: buildVscodeQueryKey("chronicle-permissions")
        });
      } catch (birch) {
        let canyon = alpha(birch);
        readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, false);
        meadow(canyon);
        appActionSidebarProjectRefSchema.error("Failed to enable Chronicle", {
          safe: {
            errorMessage: canyon
          },
          sensitive: {
            error: birch
          }
        });
      } finally {
        oak(false);
      }
    },
    yarrow = async () => {
      let dew = rain;
      oak(true);
      meadow(null);
      readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, false);
      try {
        await fern.mutateAsync({
          enabled: false
        });
        onChronicleResearchPreviewToggled?.(dew, false);
      } catch {} finally {
        oak(false);
      }
    };
  return _isLoading ? <></> : <>
      {<EnsurePersonalizationCInit {...{
      label: vine,
      description: <PersonalizationSettingsHelper11 {...{
        isCheckingPermissions: petal.data == null && petal.isFetching,
        permissions: petal.data,
        chronicleFeatureEnabled: rain,
        onOpenChronicleSetup: () => {
          meadow(null);
          juniper(true);
        }
      }} />,
      control: <OptionalTooltip {...{
        disabled: quiet,
        tooltipContent: <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip",
          defaultMessage: "Enable memories to use Chronicle",
          description: "Tooltip shown when the Chronicle toggle is disabled because Memories is disabled"
        }} />,
        children: <span className={IntlProvider("inline-flex", !quiet && "cursor-not-allowed")} tabIndex={quiet ? undefined : 0}>
                      <AppInitialYC checked={rain} className={quiet ? undefined : "pointer-events-none"} disabled={trail} onChange={ever => {
            if (ever) {
              if (data === true) {
                wind({
                  showSetupDialog: false
                });
                return;
              }
              hill(true);
              return;
            }
            yarrow();
          }} ariaLabel={cliff.formatMessage({
            id: "settings.general.experimentalFeatures.chronicle.buttonAriaLabel",
            defaultMessage: "Toggle {featureName}",
            description: "Aria label for toggling the Chronicle experimental feature"
          }, {
            featureName: vine
          })} />
                    </span>
      }} />
    }} />}
      {<PersonalizationSettingsHelper6 {...{
      open: grove,
      onOpenChange: hill,
      chronicleDisplayName: vine,
      isPending: seed,
      onContinue: () => {
        wind({
          rememberConsentAccepted: true,
          showSetupDialog: true
        });
      }
    }} />}
      <AppInitialH open={isle} setupState={urn} onOpenChange={field => {
      field || readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, false);
      juniper(field);
    }} onAskCodex={() => {
      readLoginRouteQuerySnapshotStub(apex, DesktopPersistenceKeys.CHRONICLE_SETUP_COMPLETION_PENDING, false);
      juniper(false);
      elm({
        prefillPrompt: remoteHostedPipHiddenThreadIds
      });
    }} />
    </>;
}
