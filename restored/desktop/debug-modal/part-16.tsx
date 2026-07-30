// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 16/17
/* split-lane-import-depth:1 */

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { clampZoomPercent, decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID, PLAYGROUND_ONBOARDING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ensureUseDebugPanelInit, ensureUseDebugPanelParsersInit, useDebugPanelEditedFilePaths, useDebugPanelEntries, useDebugPanelReferencedFilePaths } from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import { clampFloatingWindowRect, getCenteredFloatingWindowRect, initFloatingWindowPointerDragConstants, resizeFloatingWindowRect, useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { deferredVM } from "../../ui/deferred-vm";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { buildThreadVirtualizerLayout, initThreadVirtualizer, visibleRangeFromDistance } from "../../utils/thread-virtualizer";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsB4Init, ensureKeyboardShortcutsHMInit, ensurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";

export function DebugModalN(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Eagle2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Frost2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Glide2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Iris2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Jewel2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Knoll2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lotus2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Moss2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function North2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Of(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Orbit2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Pine2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Storm2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Tide2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Topaz2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Unity2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Vale2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Zephyr2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft JSX companions.
function Acorn2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Bloom2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Chatgpt2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Coral2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const $d: any = undefined;
const $u: any = undefined;
const Amber: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialIr: any = undefined;
const AppInitialYC: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const falcon: any = undefined;
const of: any = undefined;
const primaryRuntime: any = undefined;
const readLoginRouteQuerySnapshotStub: any = undefined;
const setPrimaryRuntimeInstallRelease: any = undefined;
const violet: any = undefined;

function Honey4(zephyr26) {
  switch (zephyr26) {
    case "feature-gate-disabled":
      return "Feature gate disabled";
    case "not-local-host":
      return "Not local host";
    case "runtime-config-missing":
      return "Runtime config missing";
    case "unsupported-windows-version":
      return "Unsupported Windows version";
  }
}
function Iris4(acorn26) {
  try {
    return window.localStorage.getItem(acorn26) === "open";
  } catch {
    return false;
  }
}
var jewel4,
  knoll4,
  lunar4,
  moss4,
  north4,
  orbit4,
  pine4 = esmInit(() => {
    jewel4 = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    knoll4 = commonJsInit(react(), 1);
    setPrimaryRuntimeInstallRelease();
    primaryRuntime();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    AppInitialBC();
    ensureAppIconSftInit();
    findSidebarSectionElement();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    AppInitialIr();
    ensureSkillsPageHelpersInit();
    posixPathBasename();
    dataAppActionReviewFileExpanded();
    violet();
    falcon();
    moss4 = "debug-workspace-runtime";
    north4 = 1e3;
    orbit4 = new Intl.RelativeTimeFormat(undefined, {
      numeric: "auto"
    });
  });
function Quest4() {
  let bloom26 = CodexPluginActionType(appScopeAtom),
    [coral26, drift26] = storm4.useState(null),
    eagle26 = useSettingValue(REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled),
    {
      data,
      isLoading
    } = ensurePersonalizationK0Init(DesktopPersistenceKeys.WORKTREE_AUTO_CLEANUP_UNPACKAGED_OVERRIDE_ENABLED),
    frost26 = data === true,
    glide26 = eagle26 && frost26,
    honey26 = isLoading,
    iris26 = eagle26 ? "Enabled" : "Disabled",
    jewel26 = <Falcon {...{
      label: "Worktrees setting",
      value: iris26
    }} />;
  let knoll26 = frost26 ? "Enabled" : "Disabled",
    lunar26 = <Falcon {...{
      label: "Source-build override",
      value: knoll26
    }} />;
  let moss26 = glide26 ? "Enabled" : "Disabled",
    north26 = <Falcon {...{
      label: "Effective cleanup",
      value: moss26
    }} />;
  let orbit26 = <div className="flex flex-col py-1.5">{jewel26}{lunar26}{north26}</div>;
  let pine26 = <div className="text-xs text-token-description-foreground">{"Allow automatic worktree cleanup in this unpackaged build."}</div>;
  let quest26 = tide26 => {
    drift26(null);
    readLoginRouteQuerySnapshotStub(bloom26, DesktopPersistenceKeys.WORKTREE_AUTO_CLEANUP_UNPACKAGED_OVERRIDE_ENABLED, tide26).catch(error => {
      drift26(error instanceof Error ? error.message : "Failed to update worktree cleanup override.");
    });
  };
  let ridge26 = <div className="flex items-center justify-between gap-3 py-1.5">{pine26}<AppInitialYC ariaLabel="Enable worktree cleanup in this unpackaged build" checked={frost26} disabled={honey26} onChange={quest26} /></div>;
  let storm26 = coral26 ? <div className="py-1.5 text-xs text-token-error-foreground">{coral26}</div> : null;
  return <Copper {...{
    title: "Worktree cleanup",
    storageKey: "debug-worktree-cleanup-override",
    variant: "global",
    children: [orbit26, ridge26, storm26]
  }} />;
}
var ridge4,
  storm4,
  tide4,
  unity4 = esmInit(() => {
    ridge4 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    storm4 = commonJsInit(react(), 1);
    AppInitialBC();
    ensurePersonalizationJutInit();
    ensurePersonalizationG0Init();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    violet();
    falcon();
  });
export function debugModalT(unity26: unknown) {
  let {
      onClose
    } = unity26,
    [vale26, wave26] = isle4.useState(Wave4),
    [apex26, brook26] = isle4.useState(Vale4),
    cliff26,
    dusk26;
  cliff26 = () => {
    let isle26 = () => {
      let juniper26 = Apex4();
      wave26(juniper26);
      brook26(lagoon26 => clampFloatingWindowRect(lagoon26, juniper26));
    };
    return window.addEventListener("resize", isle26), () => {
      window.removeEventListener("resize", isle26);
    };
  };
  dusk26 = [];
  isle4.useEffect(cliff26, dusk26);
  let elm26 = {
    height: apex26.height,
    left: apex26.x,
    top: apex26.y,
    width: apex26.width
  };
  let fern26, grove26;
  fern26 = meadow26 => {
    brook26(nest26 => clampFloatingWindowRect({
      ...nest26,
      x: nest26.x + meadow26.x,
      y: nest26.y + meadow26.y
    }, vale26));
  };
  grove26 = oak26 => {
    brook26(petal26 => resizeFloatingWindowRect(petal26, oak26, vale26));
  };
  let hill26 = <DebugModalN {...{
    onClose,
    onMove: fern26,
    onResize: grove26
  }} />;
  return <div role="dialog" aria-modal={false} aria-label="Debug" className="fixed z-50 flex flex-col overflow-hidden rounded-2xl bg-token-dropdown-background/90 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-xl" style={elm26}>{hill26}</div>;
}
function Vale4() {
  return getCenteredFloatingWindowRect(Apex4());
}
function Wave4() {
  return Apex4();
}
function debugModalN({
  conversationIdOverride = null,
  onClose,
  onMove,
  onResize,
  showHeader = true,
  showPopOutButton = true,
  titleKind = "dialog"
}) {
  let quiet26 = useFloatingWindowPointerDrag(),
    rain26 = useAuth(),
    seed26 = NativeContextMenuSurface("3563904085"),
    trail26 = ensureComposerEsm_Ilt_Init(),
    urn26 = useDebugPanelEntries(),
    [vine26, wind26] = isle4.useState(false),
    [yarrow26, azure26] = isle4.useState(false),
    {
      data
    } = CodexPluginActionResult(nest4),
    birch26 = appServices.debug,
    canyon26 = typeof window < "u" && !!window.electronBridge?.getSentryInitOptions,
    dew26 = typeof window < "u" && !!window.electronBridge?.triggerSentryTestError,
    alpha27 = birch26 != null && showPopOutButton && CodexBuildEnvironment.allowDebugMenu(isBusinessPlan()),
    bravo27 = data?.isPackaged === false,
    copper27 = typeof window < "u" ? window.electronBridge?.getSentryInitOptions?.()?.codexAppSessionId : undefined,
    delta27 = trail26.client.getContext().user?.customIDs?.stableID,
    echo27 = async () => {
      let gamma27 = window.electronBridge?.triggerSentryTestError;
      if (gamma27) {
        wind26(true);
        try {
          await gamma27();
        } finally {
          wind26(false);
        }
      }
    },
    falcon27 = async harbor27 => {
      if (!yarrow26) {
        azure26(true);
        try {
          await birch26?.exportLogs({
            scope: harbor27
          });
        } catch (indigo27) {
          appActionSidebarProjectRefSchema.error("Failed to export logs", {
            safe: {
              scope: harbor27
            },
            sensitive: {
              error: indigo27
            }
          });
        } finally {
          azure26(false);
        }
      }
    };
  return <div className="flex h-full min-h-0 w-full flex-col text-sm">{showHeader ? <div className={IntlProvider("grid h-toolbar-sm shrink-0 items-center border-b border-token-border px-3 font-medium text-token-description-foreground", onMove == null && "draggable", alpha27 ? "grid-cols-[2rem_1fr_auto]" : "grid-cols-[2rem_1fr_2rem]")}><div className={IntlProvider("h-full", onMove == null ? "draggable" : "cursor-move")} onPointerDown={jade27 => {
        onMove != null && quiet26(jade27, onMove);
      }} /><div className={IntlProvider("flex h-full items-center justify-center", onMove == null ? "draggable" : "cursor-move")} onPointerDown={kite27 => {
        onMove != null && quiet26(kite27, onMove);
      }}>{titleKind === "dialog" ? <h2>{"Debug"}</h2> : <h1>{"Debug"}</h1>}</div><div className="no-drag flex items-center gap-1 justify-self-end">{alpha27 ? <button type="button" className="no-drag cursor-interaction rounded p-1 leading-none text-token-foreground/80 hover:bg-token-toolbar-hover-background focus:ring-1 focus:ring-token-focus-border focus:outline-none" aria-label="Pop out debug view" title="Pop out debug view" onPointerDown={event => {
          event.stopPropagation();
        }} onClick={() => {
          (async () => {
            try {
              await birch26?.openWindow();
              onClose();
            } catch (lemon27) {
              appActionSidebarProjectRefSchema.error("Failed to open debug window", {
                safe: {},
                sensitive: {
                  error: lemon27
                }
              });
            }
          })();
        }}>{<AppIconKtt {...{
            className: "icon-xs"
          }} />}</button> : null}<button type="button" className="no-drag cursor-interaction rounded p-1 leading-none text-token-foreground/80 hover:bg-token-toolbar-hover-background focus:ring-1 focus:ring-token-focus-border focus:outline-none" aria-label="Close" onPointerDown={event => {
          event.stopPropagation();
        }} onClick={onClose}>{<Chatgpt2 {...{
            className: "icon-xs"
          }} />}</button></div></div> : null}<div className="flex min-h-0 flex-1 flex-col gap-px overflow-y-auto pb-4" data-debug-panel-scroll-container={true}>{<Zephyr2 {...{}} />}{<ElectronOnly {...{
        electron: true,
        children: <$u {...{
          conversationId: conversationIdOverride ?? undefined
        }} />
      }} />}{conversationIdOverride == null ? null : <Acorn2 {...{
        conversationId: conversationIdOverride
      }} />}{urn26.map(item => {
        let marble27 = `debug-entry-${item.titleText}`;
        return <Copper key={item.id} {...{
          title: item.titleText ? item.titleText : "Debug entry",
          storageKey: marble27,
          variant: "selection",
          children: <Lotus2 {...{
            lines: item.lines
          }} />
        }} />;
      })}{<Bloom2 {...{}} />}{<Coral2 {...{}} />}{null}{null}{null}{<Eagle2 {...{}} />}{<ElectronOnly {...{
        electron: true,
        children: [<Frost2 {...{}} />, <Glide2 {...{}} />, <Of {...{
          nativePetUiEnabled: seed26
        }} />]
      }} />}{<Iris2 {...{}} />}{<Jewel2 {...{}} />}{<Knoll2 {...{}} />}{<Moss2 {...{}} />}{<$d {...{}} />}{<North2 {...{}} />}{<Orbit2 {...{}} />}{<Pine2 {...{}} />}{null}{bravo27 ? <Storm2 {...{}} /> : null}{<Tide2 {...{
        sourceThreadId: conversationIdOverride ?? undefined
      }} />}{bravo27 ? <Unity2 {...{}} /> : null}{<Vale2 {...{}} />}{<Copper {...{
        storageKey: "debug-user-section",
        title: "User",
        variant: "global",
        children: <div className="flex flex-col py-1.5">{<Falcon {...{
            label: "Auth Method",
            value: rain26.authMethod ?? "none"
          }} />}{<Falcon {...{
            label: "User ID",
            value: rain26.userId ?? "Unavailable"
          }} />}{<Falcon {...{
            label: "Account ID",
            value: rain26.accountId ?? "Unavailable"
          }} />}{<Falcon {...{
            label: "Email",
            value: rain26.email ?? "Unavailable"
          }} />}</div>
      }} />}{canyon26 ? <Copper {...{
        storageKey: "debug-sentry-section",
        title: "Diagnostics",
        variant: "global",
        children: [<div className="flex flex-col py-1.5">{<Falcon {...{
            label: "App session ID",
            value: copper27 ?? "Unavailable"
          }} />}{<Falcon {...{
            label: "Stable ID",
            value: delta27 ?? "Unavailable"
          }} />}</div>, <div className="flex flex-col gap-3 py-1.5">{birch26 == null ? null : <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2"><div className="flex items-center justify-between gap-2"><div className="text-xs font-medium text-token-foreground">{"Logs"}</div>{yarrow26 ? <div className="inline-flex items-center justify-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground">{<VSCODE_EDITOR_ID {...{
                  className: "icon-xxs"
                }} />}</div> : <DropdownMenuPopover {...{
                align: "end",
                triggerButton: <button type="button" className="inline-flex cursor-interaction items-center gap-2 rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5">{"Export"}{<AppIconSft {...{
                    className: "icon-2xs opacity-70"
                  }} />}</button>,
                children: <div className="flex min-w-[180px] flex-col gap-0.5">{<DropdownMenu.Item {...{
                    onSelect: () => {
                      falcon27("session");
                    },
                    children: "This session"
                  }} />}{<DropdownMenu.Item {...{
                    onSelect: () => {
                      falcon27("today");
                    },
                    children: "Today’s logs"
                  }} />}{<DropdownMenu.Item {...{
                    onSelect: () => {
                      falcon27("last7days");
                    },
                    children: "Last 7 days"
                  }} />}</div>
              }} />}</div></div>}{dew26 ? <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2"><div className="flex items-center justify-between gap-2"><div className="text-xs font-medium text-token-foreground">{"Crash reporting"}</div><button type="button" className="inline-flex cursor-interaction items-center gap-2 rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50" onClick={echo27} disabled={vine26}>{"Send test error"}</button></div></div> : null}</div>]
      }} /> : null}</div>{onResize == null ? null : <button type="button" aria-label="Resize" className="absolute right-0 bottom-0 h-4 w-4 cursor-se-resize" onPointerDown={nickel27 => {
      quiet26(nickel27, onResize);
    }} />}</div>;
}
function Apex4() {
  return {
    height: window.innerHeight,
    topInset: 36,
    width: window.innerWidth
  };
}
function Brook4() {
  let onyx27 = isBusinessPlan();
  let pearl27 = onyx27,
    quartz27 = useQueryClient(),
    [river27, slate27] = isle4.useState(Dusk4),
    timber27 = river27 && (pearl27 === "dev" || pearl27 === "nightly"),
    umbra27 = {
      queryConfig: {
        enabled: timber27,
        intervalMs: juniper4
      }
    };
  let {
      data,
      isLoading
    } = SIDEBAR_HIT_TEST_SELECTOR("ambient-suggestions-generation-statuses", umbra27),
    violet27 = {
      hostId: LOCAL_HOST_ID
    };
  let willow27 = {
    params: violet27,
    queryConfig: {
      enabled: river27
    }
  };
  let {
      data: _data
    } = SIDEBAR_HIT_TEST_SELECTOR("workspace-root-options", willow27),
    xenon27 = {
      queryConfig: {
        enabled: river27
      }
    };
  let {
      data: __data
    } = SIDEBAR_HIT_TEST_SELECTOR("projectless-thread-cwd", xenon27),
    yellow27 = {
      onSuccess: () => {
        quartz27.invalidateQueries({
          queryKey: buildVscodeQueryKey("ambient-suggestions-generation-statuses")
        });
        quartz27.invalidateQueries({
          queryKey: buildVscodeQueryKey("ambient-suggestions")
        });
      }
    };
  let zinc27 = applyU0000U001FU007F2("ambient-suggestions-refresh", yellow27),
    amber27 = data?.statuses,
    basalt27,
    cedar27,
    daisy27;
  daisy27 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let flint27 = new Map(amber27?.map(Cliff4));
    if (cedar27 = Amber({
      labels: _data?.labels,
      projectlessThreadCwd: __data?.cwd,
      statuses: amber27,
      workspaceRoots: _data?.roots
    }), pearl27 !== "dev" && pearl27 !== "nightly") {
      daisy27 = null;
      break bb0;
    }
    if (basalt27 = null, river27) if (isLoading && data == null && _data == null) {
      let garnet27;
      garnet27 = <div className="text-token-description-foreground">{"Loading ambient suggestion status…"}</div>;
      basalt27 = garnet27;
    } else if (cedar27.length === 0) {
      let hazel27;
      hazel27 = <div className="text-token-description-foreground">{"No project roots"}</div>;
      basalt27 = hazel27;
    } else basalt27 = cedar27.map(item => {
      let {
          projectRoot,
          title
        } = item,
        ivory27 = flint27.get(projectRoot),
        jasper27 = (ivory27?.safetyRunningCount ?? 0) > 0,
        kelp27 = (ivory27?.runningCount ?? 0) > 0 || jasper27,
        lotus27 = "Idle";
      return jasper27 ? lotus27 = "Checking safety" : kelp27 && (lotus27 = "Running"), <Topaz2 key={projectRoot} {...{
        title,
        subtitle: Elm4(ivory27, projectRoot),
        status: lotus27,
        rightActions: <button type="button" className="shrink-0 cursor-interaction rounded border border-token-border px-2 py-0.5 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50" disabled={kelp27 || zinc27.isPending} onClick={() => {
          zinc27.mutateAsync({
            domain: null,
            hostId: LOCAL_HOST_ID,
            projectRoot: identityCwd(projectRoot)
          }).catch(error => {
            appActionSidebarProjectRefSchema.error("Failed to refresh ambient suggestions from debug page", {
              safe: {},
              sensitive: {
                error,
                projectRoot
              }
            });
          });
        }}>{"Refresh now"}</button>
      }} />;
    });
  }
  if (daisy27 !== Symbol.for("react.early_return_sentinel")) return daisy27;
  let ember27 = river27 ? `Ambient suggestion tasks (${cedar27.length})` : "Ambient suggestion tasks";
  return <Copper {...{
    title: ember27,
    storageKey: lagoon4,
    onToggle: slate27,
    variant: "global",
    children: basalt27
  }} />;
}
function Cliff4(mint27) {
  return [mint27.projectRoot, mint27];
}
function Dusk4() {
  return Grove4(lagoon4);
}
function Elm4(nova27, olive27) {
  let prism27 = ` • ${olive27}`,
    quill27 = nova27?.safetyRunningCount ?? 0,
    reef27 = nova27?.runningCount ?? 0;
  if (quill27 > 0) {
    let sage27 = nova27?.safetyStartedAtMs ?? null;
    return sage27 == null ? `${quill27} safety check active${prism27}` : `${quill27} safety check active • started ${Fern4(sage27)}${prism27}`;
  }
  if (reef27 > 0) {
    let topaz27 = nova27?.runningStartedAtMs ?? null;
    return topaz27 == null ? `${reef27} active${prism27}` : `${reef27} active • started ${Fern4(topaz27)}${prism27}`;
  }
  return nova27?.lastFinishedAtMs == null ? `No completed run yet${prism27}` : `Finished ${Fern4(nova27.lastFinishedAtMs)}${prism27}`;
}
function Fern4(ultra27) {
  let vapor27 = Math.max(0, Math.floor((Date.now() - ultra27) / 1e3));
  if (vapor27 < 60) return meadow4.format(-vapor27, "second");
  let wheat27 = Math.floor(vapor27 / 60);
  if (wheat27 < 60) return meadow4.format(-wheat27, "minute");
  let yarn27 = Math.floor(wheat27 / 60);
  return meadow4.format(-yarn27, "hour");
}
function Grove4(zephyr27) {
  try {
    return window.localStorage.getItem(zephyr27) === "open";
  } catch {
    return false;
  }
}
var hill4, isle4, $, juniper4, lagoon4, meadow4, nest4;
