// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Mx_Init } from "../../conversation/conversation-page-esm-inits";
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


// Wave5d soft JSX companions.
function Bravo1(props: {
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
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ForkConversationWithGitOrigins(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function LerpIfFinite(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Pearl1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Quartz1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function River1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Slate1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Timber1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Vale(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialPk: any = undefined;
const AppInitialPl: any = undefined;
const NativeContextMenuSurface: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiJ1: any = undefined;
const deferredUiOk: any = undefined;
const falcon: any = undefined;
const forkConversationWithGitOrigins: any = undefined;
const violet: any = undefined;

function Seed(yarrow9) {
  let {
      emptyMessage,
      rows,
      title
    } = yarrow9,
    azure9 = <div className="text-xs font-medium tracking-wide text-token-description-foreground uppercase">{title}</div>;
  let birch9 = rows.length === 0 ? <Vale {...{
    message: emptyMessage
  }} /> : <div className="flex flex-col gap-2">{rows}</div>;
  return <div className="flex flex-col gap-2">{azure9}{birch9}</div>;
}
function Trail(canyon9) {
  let {
    message
  } = canyon9;
  return <div className="rounded-lg border border-dashed border-token-border px-3 py-3 text-xs text-token-description-foreground">{message}</div>;
}
function Urn(dew9) {
  if (dew9.opened) return "Opened exact Browser owner route";
  switch (dew9.reason) {
    case "missing-owner-route":
      return "No exact owner route is recorded for this Browser tab";
    case "missing-tab":
      return "The Browser tab no longer exists";
    case "missing-window":
      return "The Browser owner window is no longer live";
  }
}
function Vine(alpha10) {
  return alpha10 == null ? "none" : `${alpha10.width}x${alpha10.height} @ ${alpha10.x},${alpha10.y}`;
}
function Wind(bravo10) {
  if (bravo10 == null) return "none";
  let copper10 = Math.max(0, Math.round((Date.now() - bravo10) / 1e3));
  if (copper10 < 60) return `${copper10}s`;
  let delta10 = Math.round(copper10 / 60);
  return delta10 < 60 ? `${delta10}m` : `${Math.round(delta10 / 60)}h`;
}
function Yarrow(echo10) {
  return {
    capturedAtMs: echo10.capturedAtMs,
    pendingAttaches: echo10.pendingAttaches,
    restoreEvents: echo10.events.filter(item => item.kind.startsWith("browser-restore-")),
    tabs: echo10.tabs.map(item => ({
      browserStorageId: item.browserStorageId,
      browserTabId: item.browserTabId,
      conversationId: item.conversationId,
      guestWebContentsId: item.guestWebContentsId,
      hasPage: item.hasPage,
      hasPersistedPageState: item.hasPersistedPageState,
      pendingAttachCount: item.pendingAttachCount,
      persistedHistoryEntryCount: item.persistedHistoryEntryCount,
      persistedPageStateUpdatedAtMs: item.persistedPageStateUpdatedAtMs,
      restoreInvariant: item.restoreInvariant,
      restorePhase: item.restorePhase,
      webviewHostRegistered: item.webviewHostRegistered,
      windowId: item.windowId
    }))
  };
}
var _o,
  azure,
  birch,
  canyon,
  dew,
  alpha1,
  bravo1 = esmInit(() => {
    _o = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    azure = commonJsInit(react(), 1);
    ensureComposerEsm_Sut_Init();
    ensureAppIconTkInit();
    ensureDynamicScriptLoadInit();
    posixPathBasename();
    dataAppActionReviewFileExpanded();
    violet();
    canyon = ["browser-debug-snapshot"];
    dew = 1e3;
    alpha1 = new Intl.DateTimeFormat(undefined, {
      fractionalSecondDigits: 3,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  });
function Copper1(falcon10) {
  let {
      isActive
    } = falcon10,
    gamma10 = appServices.downloads,
    [harbor10, indigo10] = quartz1.useState(null),
    jade10 = isActive && gamma10 != null,
    kite10 = async () => {
      if (gamma10 == null) throw Error("Downloads service is unavailable");
      return gamma10.getSnapshot();
    };
  let lemon10 = {
    enabled: jade10,
    queryFn: kite10,
    queryKey: slate1,
    staleTime: readScrollTop.FIVE_SECONDS
  };
  let {
      data,
      isFetching,
      isLoading,
      refetch
    } = useQuery(lemon10),
    marble10 = async (zinc10, amber10) => {
      if (gamma10 != null) {
        indigo10(null);
        try {
          let basalt10 = await amber10();
          basalt10.ok || indigo10(Onyx1(zinc10, basalt10));
          await refetch();
        } catch (cedar10) {
          let daisy10 = cedar10;
          indigo10(`${zinc10} failed`);
          appActionSidebarProjectRefSchema.error("Failed to run downloads debug action", {
            safe: {
              label: zinc10
            },
            sensitive: {
              error: daisy10
            }
          });
        }
      }
    };
  let nickel10 = marble10,
    onyx10 = () => {
      gamma10 != null && nickel10("Open downloads folder", () => gamma10.showDownloadsFolder());
    };
  let pearl10 = <AppIconNk {...{
    className: "icon-2xs"
  }} />;
  let quartz10 = <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={gamma10 == null} onClick={onyx10}>{pearl10}{"Open in Finder"}</button>;
  let river10 = data == null,
    slate10 = () => {
      data != null && navigator.clipboard?.writeText(JSON.stringify(data, null, 2)).catch(Delta1);
    };
  let timber10 = <button type="button" className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={river10} onClick={slate10}>{"Copy JSON"}</button>;
  let umbra10 = () => {
    refetch();
  };
  let violet10 = isFetching ? <VSCODE_EDITOR_ID {...{
    className: "icon-2xs"
  }} /> : null;
  let willow10 = <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={gamma10 == null} onClick={umbra10}>{violet10}{"Refresh"}</button>;
  let xenon10 = <div className="flex flex-wrap items-center justify-end gap-1">{quartz10}{timber10}{willow10}</div>;
  let yellow10 = gamma10 == null ? <Bravo1 {...{
    message: "Downloads service unavailable."
  }} /> : isLoading && data == null ? <Bravo1 {...{
    message: "Loading downloads..."
  }} /> : data == null ? <Bravo1 {...{
    message: "Downloads snapshot unavailable."
  }} /> : <Pearl1 {...{
    actionStatus: harbor10,
    snapshot: data,
    onCancel: ember10 => nickel10("Cancel download", () => gamma10.cancel({
      id: ember10.id
    })),
    onOpen: flint10 => nickel10("Open download", () => gamma10.open({
      id: flint10.id
    })),
    onPause: garnet10 => nickel10("Pause download", () => gamma10.pause({
      id: garnet10.id
    })),
    onRemove: hazel10 => nickel10("Remove download", () => gamma10.removeFromHistory({
      id: hazel10.id
    })),
    onResume: ivory10 => nickel10("Resume download", () => gamma10.resume({
      id: ivory10.id
    })),
    onShowInFolder: jasper10 => nickel10("Show download in Finder", () => gamma10.showInFolder({
      id: jasper10.id
    }))
  }} />;
  return <div className="flex flex-col gap-3">{xenon10}{yellow10}</div>;
}
function Delta1() {}
function Echo1(kelp10) {
  let {
      actionStatus,
      onCancel,
      onOpen,
      onPause,
      onRemove,
      onResume,
      onShowInFolder,
      snapshot
    } = kelp10,
    lotus10 = timber1.format(snapshot.capturedAtMs);
  let mint10 = <Falcon {...{
    label: "Captured",
    value: lotus10
  }} />;
  let nova10 = String(snapshot.downloads.length),
    olive10 = <Falcon {...{
      label: "Downloads",
      value: nova10
    }} />;
  let prism10 = <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">{mint10}{olive10}</div>;
  let quill10 = actionStatus == null ? null : <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2 text-xs text-token-description-foreground">{actionStatus}</div>;
  let reef10 = snapshot.downloads.length === 0 ? <Bravo1 {...{
    message: "No downloads captured yet."
  }} /> : <div className="flex flex-col gap-2">{snapshot.downloads.map(item => <Quartz1 key={item.id} {...{
      download: item,
      onCancel,
      onOpen,
      onPause,
      onRemove,
      onResume,
      onShowInFolder
    }} />)}</div>;
  return <div className="flex flex-col gap-3">{prism10}{quill10}{reef10}</div>;
}
function Falcon1(sage10) {
  let {
      download,
      onCancel,
      onOpen,
      onPause,
      onRemove,
      onResume,
      onShowInFolder
    } = sage10,
    topaz10 = download.totalBytes > 0 ? Math.min(1, download.receivedBytes / download.totalBytes) : null,
    ultra10 = <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-token-foreground/5 text-token-description-foreground">{<LerpIfFinite {...{
        className: "icon-sm"
      }} />}</div>;
  let vapor10 = <div className="truncate font-medium">{download.filename}</div>;
  let wheat10 = Jade1(download);
  let yarn10 = <div className="truncate text-xs text-token-description-foreground">{wheat10}</div>;
  let zephyr10 = <div className="min-w-0">{vapor10}{yarn10}</div>;
  let acorn10 = <River1 {...{
    download,
    onCancel,
    onOpen,
    onPause,
    onRemove,
    onResume,
    onShowInFolder
  }} />;
  let bloom10 = <div className="flex items-start justify-between gap-2">{zephyr10}{acorn10}</div>;
  let coral10 = topaz10 == null || download.status === "paused" || Marble1(download.status) ? null : <div className="mt-2 h-1 overflow-hidden rounded-full bg-token-foreground/10"><div className="h-full rounded-full bg-token-charts-blue" style={{
      width: `${Math.max(2, topaz10 * 100)}%`
    }} /></div>;
  let drift10 = <div className="truncate">{"Path: "}{download.path}</div>;
  let eagle10 = <div className="truncate">{"URL: "}{download.url}</div>;
  let frost10 = <div className="mt-2 grid gap-1 text-xs text-token-description-foreground">{drift10}{eagle10}</div>;
  return <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2"><div className="flex items-start gap-3">{ultra10}<div className="min-w-0 flex-1">{bloom10}{coral10}{frost10}</div></div></div>;
}
function Gamma1(glide10) {
  let {
    download,
    onCancel,
    onOpen,
    onPause,
    onRemove,
    onResume,
    onShowInFolder
  } = glide10;
  if (Nickel1(download.status)) {
    let tide10 = !download.canPause,
      unity10 = () => {
        onPause(download);
      };
    let vale10 = <ForkConversationWithGitOrigins {...{
      className: "icon-2xs"
    }} />;
    let wave10 = <button type="button" className={umbra1} disabled={tide10} onClick={unity10}>{vale10}{"Pause"}</button>;
    let apex10 = !download.canCancel,
      brook10 = () => {
        onCancel(download);
      };
    let cliff10 = <Chatgpt2 {...{
      className: "icon-2xs"
    }} />;
    let dusk10 = <button type="button" className={umbra1} disabled={apex10} onClick={brook10}>{cliff10}{"Cancel"}</button>;
    let elm10;
    return <div className="flex shrink-0 items-center gap-1">{wave10}{dusk10}</div>;
  }
  if (download.status === "paused") {
    let fern10 = !download.canResume,
      grove10 = () => {
        onResume(download);
      };
    let hill10 = <AppIconDk {...{
      className: "icon-2xs"
    }} />;
    let isle10 = <button type="button" className={umbra1} disabled={fern10} onClick={grove10}>{hill10}{"Resume"}</button>;
    let juniper10 = !download.canCancel,
      lagoon10 = () => {
        onCancel(download);
      };
    let meadow10 = <Chatgpt2 {...{
      className: "icon-2xs"
    }} />;
    let nest10 = <button type="button" className={umbra1} disabled={juniper10} onClick={lagoon10}>{meadow10}{"Cancel"}</button>;
    let oak10;
    return <div className="flex shrink-0 items-center gap-1">{isle10}{nest10}</div>;
  }
  let honey10 = !download.fileExists,
    iris10 = () => {
      onOpen(download);
    };
  let jewel10 = <button type="button" className={umbra1} disabled={honey10} onClick={iris10}>{"Open"}</button>;
  let knoll10 = <button type="button" className={umbra1} onClick={() => {
    onShowInFolder(download);
  }}>{"Finder"}</button>;
  let lunar10 = `Download actions for ${download.filename}`,
    moss10 = <AppIconQI {...{
      className: "icon-2xs"
    }} />;
  let north10 = <button type="button" className="inline-flex cursor-interaction items-center rounded border border-token-border p-1 text-token-foreground hover:bg-token-foreground/5" aria-label={lunar10}>{moss10}</button>;
  let orbit10 = <DropdownMenu.Item {...{
    onSelect: () => {
      navigator.clipboard?.writeText(download.path).catch(Harbor1);
    },
    children: "Copy Path"
  }} />;
  let pine10 = <DropdownMenu.Separator {...{}} />;
  let quest10 = <DropdownMenu.Item {...{
    onSelect: () => {
      onRemove(download);
    },
    children: "Remove"
  }} />;
  let ridge10 = <div className="flex min-w-[180px] flex-col gap-0.5">{orbit10}{pine10}{quest10}</div>;
  let storm10 = <DropdownMenuPopover {...{
    align: "end",
    triggerButton: north10,
    children: ridge10
  }} />;
  return <div className="flex shrink-0 items-center gap-1">{jewel10}{knoll10}{storm10}</div>;
}
function Harbor1() {}
function Indigo1(petal10) {
  let {
    message
  } = petal10;
  return <div className="py-3 text-xs text-token-description-foreground">{message}</div>;
}
function Jade1(quiet10) {
  let rain10 = quiet10.totalBytes > 0 ? `${Kite1(quiet10.receivedBytes)} / ${Kite1(quiet10.totalBytes)}` : Kite1(quiet10.receivedBytes);
  return [Lemon1(quiet10.status), rain10, timber1.format(quiet10.updatedAtMs)].join(" - ");
}
function Kite1(seed10) {
  if (!Number.isFinite(seed10) || seed10 <= 0) return "0 bytes";
  if (seed10 < 1024) return `${seed10} ${seed10 === 1 ? "byte" : "bytes"}`;
  let trail10 = ["KB", "MB", "GB", "TB"],
    urn10 = seed10 / 1024,
    vine10 = 0;
  for (; urn10 >= 1024 && vine10 < trail10.length - 1;) {
    urn10 /= 1024;
    vine10 += 1;
  }
  return `${urn10.toFixed(urn10 >= 10 ? 0 : 1)} ${trail10[vine10]}`;
}
function Lemon1(wind10) {
  switch (wind10) {
    case "started":
      return "Started";
    case "in_progress":
      return "In progress";
    case "paused":
      return "Paused";
    case "failed":
      return "Failed";
    case "canceled":
      return "Canceled";
    case "complete":
      return "Complete";
  }
}
function Marble1(yarrow10) {
  return yarrow10 === "canceled" || yarrow10 === "complete" || yarrow10 === "failed";
}
function Nickel1(azure10) {
  return azure10 === "started" || azure10 === "in_progress";
}
function Onyx1(birch10, canyon10) {
  if (canyon10.message != null && canyon10.message !== "") return `${birch10} failed: ${canyon10.message}`;
  switch (canyon10.reason) {
    case "download-not-pausable":
      return `${birch10} failed: download cannot be paused`;
    case "download-not-removable":
      return `${birch10} failed: active download cannot be removed`;
    case "download-not-resumable":
      return `${birch10} failed: download cannot be resumed`;
    case "missing-download":
      return `${birch10} failed: download is no longer in the debug list`;
    case "open-failed":
      return `${birch10} failed: file could not be opened`;
    case "show-in-folder-failed":
      return `${birch10} failed: file could not be shown in Finder`;
  }
}
var pearl1,
  quartz1,
  river1,
  slate1,
  timber1,
  umbra1,
  violet1 = esmInit(() => {
    pearl1 = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    quartz1 = commonJsInit(react(), 1);
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    deferredUiJ1();
    AppInitialPk();
    inProgress();
    deferredUiOk();
    isRemoteControlConnectionFailedError();
    ensureConversationPageEsm_Act_Init();
    ensureDynamicScriptLoadInit();
    posixPathBasename();
    dataAppActionReviewFileExpanded();
    violet();
    slate1 = ["downloads-debug-snapshot"];
    timber1 = new Intl.DateTimeFormat(undefined, {
      fractionalSecondDigits: 3,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    umbra1 = "inline-flex cursor-interaction items-center gap-1 rounded border border-token-border px-2 py-0.5 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50";
  });
function Willow1() {
  let dew10 = NativeContextMenuSurface("1834314516"),
    [alpha11, bravo11] = amber1.useState(Xenon1),
    [copper11, delta11] = amber1.useState("tabs"),
    echo11 = copper11 === "downloads" && !dew10 ? "tabs" : copper11,
    falcon11 = {
      id: "tabs",
      label: "Tabs"
    };
  let gamma11;
  if (gamma11 = [falcon11], dew10) {
    let nickel11;
    nickel11 = {
      id: "downloads",
      label: "Downloads"
    };
    gamma11.push(nickel11);
  }
  let harbor11 = gamma11.length > 1 ? <AppInitialPl ariaLabel="Browser debug view" fullWidth={true} onSelect={delta11} options={gamma11} selectedId={echo11} /> : null;
  let indigo11 = echo11 !== "tabs",
    jade11 = alpha11 && echo11 === "tabs",
    kite11 = <Slate1 {...{
      isActive: jade11
    }} />;
  let lemon11 = <div hidden={indigo11}>{kite11}</div>;
  let marble11 = dew10 ? <div hidden={echo11 !== "downloads"}>{<Timber1 {...{
      isActive: alpha11 && echo11 === "downloads"
    }} />}</div> : null;
  return <Copper {...{
    title: "Browser",
    storageKey: cedar1,
    onToggle: bravo11,
    variant: "global",
    children: <div className="flex flex-col gap-3 py-3">{harbor11}{lemon11}{marble11}{null}</div>
  }} />;
}
function Xenon1() {
  return Yellow1();
}
function Yellow1() {
  try {
    return window.localStorage.getItem(cedar1) === "open";
  } catch {
    return false;
  }
}
var zinc1,
  amber1,
  basalt1,
  cedar1,
  daisy1 = esmInit(() => {
    zinc1 = reactCompilerRuntime();
    amber1 = commonJsInit(react(), 1);
    WritingBlockRenderer();
    ensureSkillsPageHelpersInit();
    bravo1();
    falcon();
    violet1();
    cedar1 = "debug-browser";
  });
function Ember1(onyx11, pearl11) {
  return typeof onyx11 == "function" ? onyx11(pearl11) : onyx11;
}
function Flint1(quartz11, river11) {
  return slate11 => {
    river11.setState(timber11 => ({
      ...timber11,
      [quartz11]: Ember1(slate11, timber11[quartz11])
    }));
  };
}
function Garnet1(umbra11) {
  return umbra11 instanceof Function;
}
function $o(violet11) {
  return Array.isArray(violet11) && violet11.every(item => typeof item == "number");
}
function Hazel1(willow11, xenon11) {
  let yellow11 = [],
    zinc11 = amber11 => {
      amber11.forEach(item => {
        yellow11.push(item);
        let basalt11 = xenon11(item);
        basalt11 != null && basalt11.length && zinc11(basalt11);
      });
    };
  return zinc11(willow11), yellow11;
}
