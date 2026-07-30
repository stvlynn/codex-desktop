// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/17
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


// Wave5d soft JSX companions.
function Alpha1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Azure(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Birch(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Brook(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Canyon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Cliff(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Dew(props: {
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

// Wave5d soft stubs.
const Vine: any = undefined;
const Wind: any = undefined;
const alpha1: any = undefined;

function Grove(indigo8) {
  let {
      onOpenOwner,
      openOwnerStatus,
      snapshot
    } = indigo8,
    jade8 = alpha1.format(snapshot.capturedAtMs);
  let kite8 = <Falcon {...{
    label: "Captured",
    value: jade8
  }} />;
  let lemon8 = String(snapshot.windows.length),
    marble8 = <Falcon {...{
      label: "Windows",
      value: lemon8
    }} />;
  let nickel8 = String(snapshot.tabs.length),
    onyx8 = <Falcon {...{
      label: "Tabs",
      value: nickel8
    }} />;
  let pearl8 = String(snapshot.sessionRoutes.length),
    quartz8 = <Falcon {...{
      label: "Session routes",
      value: pearl8
    }} />;
  let river8 = String(snapshot.pendingAttaches.length),
    slate8 = <Falcon {...{
      label: "Pending attaches",
      value: river8
    }} />;
  let timber8 = String(snapshot.openRequests.length),
    umbra8 = <Falcon {...{
      label: "Open waits",
      value: timber8
    }} />;
  let violet8 = snapshot.tabs.filter(no);
  let willow8 = String(violet8.length),
    xenon8 = <Falcon {...{
      label: "Restore issues",
      value: willow8
    }} />;
  let yellow8 = <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">{kite8}{marble8}{onyx8}{quartz8}{slate8}{umbra8}{xenon8}</div>;
  let zinc8 = openOwnerStatus == null ? null : <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2 text-xs text-token-description-foreground">{openOwnerStatus}</div>;
  let amber8 = snapshot.windows.map(to);
  let basalt8 = <Brook {...{
    emptyMessage: "No Browser windows registered.",
    rows: amber8,
    title: "Windows"
  }} />;
  let cedar8;
  {
    let mint8;
    mint8 = nova8 => <Cliff key={`${nova8.windowId}:${nova8.conversationId}:${nova8.browserTabId}`} {...{
      onOpenOwner,
      tab: nova8
    }} />;
    cedar8 = snapshot.tabs.map(mint8);
  }
  let daisy8 = <Brook {...{
    emptyMessage: "No Browser tab routes registered.",
    rows: cedar8,
    title: "Tabs"
  }} />;
  let ember8 = snapshot.sessionRoutes.map(Juniper);
  let flint8 = <Brook {...{
    emptyMessage: "No Browser Use session routes captured.",
    rows: ember8,
    title: "Session routes"
  }} />;
  let garnet8 = snapshot.pendingAttaches.map($a);
  let hazel8 = <Brook {...{
    emptyMessage: "No Browser webview attach intents pending.",
    rows: garnet8,
    title: "Pending attaches"
  }} />;
  let ivory8 = snapshot.openRequests.map(Isle);
  let jasper8 = <Brook {...{
    emptyMessage: "No Browser Use open waits pending.",
    rows: ivory8,
    title: "Open waits"
  }} />;
  let kelp8 = snapshot.events.slice().reverse().map(Hill);
  let lotus8 = <Brook {...{
    emptyMessage: "No Browser lifecycle events recorded yet.",
    rows: kelp8,
    title: "Recent Browser events"
  }} />;
  return <div className="flex flex-col gap-3">{yellow8}{zinc8}{basalt8}{daisy8}{flint8}{hazel8}{jasper8}{lotus8}</div>;
}
function Hill(olive8) {
  return <Azure key={olive8.sequence} {...{
    event: olive8
  }} />;
}
function Isle(prism8) {
  return <Birch key={`${prism8.ownerWebContentsId}:${prism8.conversationId ?? "none"}:${prism8.browserTabId ?? "none"}`} {...{
    details: [{
      label: "Window",
      value: prism8.windowId == null ? "none" : String(prism8.windowId)
    }, {
      label: "Active conversation",
      value: prism8.activeConversationId ?? "none"
    }, {
      label: "Active browser tab",
      value: prism8.activeBrowserTabId ?? "none"
    }, {
      label: "Conversation",
      value: prism8.conversationId ?? "none"
    }, {
      label: "Browser tab",
      value: prism8.browserTabId ?? "none"
    }, {
      label: "Owner webContents",
      value: String(prism8.ownerWebContentsId)
    }, {
      label: "Owner route",
      value: prism8.ownerRoutePath ?? "missing"
    }, {
      label: "Route active",
      value: prism8.routeActive == null ? "unknown" : String(prism8.routeActive)
    }, {
      label: "Has page",
      value: prism8.hasPage == null ? "unknown" : String(prism8.hasPage)
    }, {
      label: "Guest webContents",
      value: prism8.guestWebContentsId == null ? "none" : String(prism8.guestWebContentsId)
    }, {
      label: "Pending attaches",
      value: prism8.pendingAttachCount == null ? "unknown" : String(prism8.pendingAttachCount)
    }, {
      label: "Panel open pending",
      value: prism8.pendingBrowserUsePanelOpen == null ? "unknown" : String(prism8.pendingBrowserUsePanelOpen)
    }],
    subtitle: prism8.conversationId ?? "No conversation",
    title: "Waiting for Browser webview attach"
  }} />;
}
function $a(quill8) {
  return <Canyon key={`${quill8.windowId}:${quill8.kind}:${quill8.conversationId}:${quill8.browserTabId}:${quill8.webContentsId ?? "none"}`} {...{
    attachIntent: quill8
  }} />;
}
function Juniper(reef8) {
  return <Dew key={`${reef8.windowId}:${reef8.conversationId}`} {...{
    route: reef8
  }} />;
}
function to(sage8) {
  return <Alpha1 key={sage8.windowId} {...{
    window: sage8
  }} />;
}
function no(topaz8) {
  return topaz8.restoreInvariant != null;
}
function Lagoon(ultra8) {
  let {
      window
    } = ultra8,
    vapor8 = String(window.windowId),
    wheat8 = {
      label: "Window",
      value: vapor8
    };
  let yarn8 = String(window.ownerWebContentsId),
    zephyr8 = {
      label: "Owner webContents",
      value: yarn8
    };
  let acorn8 = window.activeConversationId ?? "none",
    bloom8 = {
      label: "Active conversation",
      value: acorn8
    };
  let coral8 = window.activeBrowserTabId ?? "none",
    drift8 = {
      label: "Active browser tab",
      value: coral8
    };
  let eagle8 = String(window.pendingAttachCount),
    frost8 = {
      label: "Pending attaches",
      value: eagle8
    };
  let glide8 = String(window.pendingAdoptedWebviewCount),
    honey8 = {
      label: "Pending adopted webviews",
      value: glide8
    };
  let iris8 = String(window.pendingLegacyWebviewCount),
    jewel8 = {
      label: "Pending legacy webviews",
      value: iris8
    };
  let knoll8 = String(window.transferredConversationStateCount),
    lunar8 = {
      label: "Transferred states",
      value: knoll8
    };
  let moss8 = String(window.ignoredConversationCount),
    north8 = {
      label: "Ignored conversations",
      value: moss8
    };
  let orbit8 = [wheat8, zephyr8, bloom8, drift8, frost8, honey8, jewel8, lunar8, north8];
  let pine8 = `owner ${window.ownerWebContentsId}`,
    quest8 = `window ${window.windowId}`;
  return <Birch {...{
    details: orbit8,
    subtitle: pine8,
    title: quest8
  }} />;
}
function Meadow(ridge8) {
  let {
      onOpenOwner,
      tab
    } = ridge8,
    storm8 = tab.title.trim() || "Untitled Browser tab";
  let tide8 = <div className="truncate text-sm font-medium text-token-foreground">{storm8}</div>;
  let unity8 = <div className="mt-1 truncate font-mono text-[11px] text-token-description-foreground">{tab.conversationId}{" · "}{tab.browserTabId}</div>;
  let vale8 = <div className="min-w-0">{tide8}{unity8}</div>;
  let wave8 = tab.isBrowserUseActive ? <span className="rounded border border-token-border px-1.5 py-0.5 text-token-foreground">{"browser-use active"}</span> : null;
  let apex8 = <span>{tab.sessionState}</span>;
  let brook8 = <span>{"w"}{tab.windowId}</span>;
  let cliff8 = <span>{"o"}{tab.ownerWebContentsId}</span>;
  let dusk8 = tab.guestWebContentsId ?? "none",
    elm8 = <span>{"g"}{dusk8}</span>;
  let fern8 = !tab.canOpenOwner,
    grove8 = event => {
      event.preventDefault();
      event.stopPropagation();
      onOpenOwner(tab);
    };
  let hill8 = <span className="inline-flex items-center gap-1">{"Open owner"}{<AppIconTk {...{
      className: "icon-2xs"
    }} />}</span>;
  let isle8 = <button type="button" className="cursor-interaction rounded border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50" disabled={fern8} onClick={grove8}>{hill8}</button>;
  let juniper8 = <div className="flex shrink-0 items-center gap-2 text-[11px] text-token-description-foreground tabular-nums">{wave8}{apex8}{brook8}{cliff8}{elm8}{isle8}</div>;
  let lagoon8 = <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">{vale8}{juniper8}</summary>;
  let meadow8 = <Falcon {...{
    label: "Conversation",
    value: tab.conversationId
  }} />;
  let nest8 = <Falcon {...{
    label: "Browser tab",
    value: tab.browserTabId
  }} />;
  let oak8 = <Falcon {...{
    label: "Page storage ID",
    value: tab.browserStorageId
  }} />;
  let petal8 = String(tab.windowId),
    quiet8 = <Falcon {...{
      label: "Window",
      value: petal8
    }} />;
  let rain8 = String(tab.ownerWebContentsId),
    seed8 = <Falcon {...{
      label: "Owner webContents",
      value: rain8
    }} />;
  let trail8 = tab.ownerRoutePath ?? "missing",
    urn8 = <Falcon {...{
      label: "Owner route",
      value: trail8
    }} />;
  let vine8 = tab.guestWebContentsId == null ? "none" : String(tab.guestWebContentsId),
    wind8 = <Falcon {...{
      label: "Guest webContents",
      value: vine8
    }} />;
  let yarrow8 = tab.pageKey ?? "none",
    azure8 = <Falcon {...{
      label: "Page key",
      value: yarrow8
    }} />;
  let birch8 = tab.url || "about:blank",
    canyon8 = <Falcon {...{
      label: "URL",
      value: birch8
    }} />;
  let dew8 = tab.pendingUrl || "none",
    alpha9 = <Falcon {...{
      label: "Pending URL",
      value: dew8
    }} />;
  let bravo9 = `snapshot=${tab.hasPersistedPageState}`,
    copper9 = `history=${tab.persistedHistoryEntryCount ?? "none"}`,
    delta9 = `host=${tab.webviewHostRegistered}`,
    echo9 = [bravo9, copper9, delta9];
  let falcon9 = echo9.join(" "),
    gamma9 = <Falcon {...{
      label: "Persistence",
      value: falcon9
    }} />;
  let harbor9 = Wind(tab.persistedPageStateUpdatedAtMs);
  let indigo9 = <Falcon {...{
    label: "Snapshot age",
    value: harbor9
  }} />;
  let jade9 = <Falcon {...{
    label: "Restore phase",
    value: tab.restorePhase
  }} />;
  let kite9 = tab.restoreInvariant == null ? null : <Falcon {...{
    label: "Restore invariant",
    value: tab.restoreInvariant
  }} />;
  let lemon9 = Vine(tab.bounds);
  let marble9 = <Falcon {...{
    label: "Bounds",
    value: lemon9
  }} />;
  let nickel9 = `active=${tab.active}`,
    onyx9 = `presented=${tab.presented}`,
    _e = `visible=${tab.visible}`,
    pearl9 = `hasPage=${tab.hasPage}`,
    quartz9 = `loading=${tab.isLoading}`,
    be = `restoring=${tab.isRestoring}`,
    river9 = `suspended=${tab.isSuspended}`,
    slate9 = [nickel9, onyx9, _e, pearl9, quartz9, be, river9];
  let timber9 = slate9.join(" "),
    umbra9 = <Falcon {...{
      label: "Flags",
      value: timber9
    }} />;
  let violet9 = `page=${tab.isBrowserUsePage}`,
    willow9 = `active=${tab.isBrowserUseActive}`,
    xenon9 = `agent=${tab.isAgentControllingBrowser}`,
    yellow9 = `visibilityRequest=${tab.hasPendingBrowserUseVisibilityRequest}`,
    zinc9 = `panelOpen=${tab.pendingBrowserUsePanelOpen}`,
    amber9 = [violet9, willow9, xenon9, yellow9, zinc9];
  let basalt9 = amber9.join(" "),
    cedar9 = <Falcon {...{
      label: "Browser Use",
      value: basalt9
    }} />;
  let daisy9 = `mount=${tab.mountGeneration}`,
    ember9 = `last=${tab.lastLifecycleSequence}`,
    flint9 = `presented=${tab.lastPresentedSequence}`,
    garnet9 = `pendingAttach=${tab.pendingAttachCount}`,
    hazel9 = [daisy9, ember9, flint9, garnet9];
  let ivory9 = hazel9.join(" "),
    jasper9 = <Falcon {...{
      label: "Lifecycle",
      value: ivory9
    }} />;
  let kelp9 = tab.pendingTeardown == null ? "none" : `${tab.pendingTeardown.reason} mount=${tab.pendingTeardown.mountGeneration} id=${tab.pendingTeardown.teardownId}`,
    lotus9 = <Falcon {...{
      label: "Pending teardown",
      value: kelp9
    }} />;
  let mint9 = <div className="border-t border-token-border px-3">{meadow8}{nest8}{oak8}{quiet8}{seed8}{urn8}{wind8}{azure8}{canyon8}{alpha9}{gamma9}{indigo9}{jade9}{kite9}{marble9}{umbra9}{cedar9}{jasper9}{lotus9}</div>;
  return <details className="group bg-token-background rounded-lg border border-token-border">{lagoon8}{mint9}</details>;
}
function Nest(nova9) {
  let {
      route
    } = nova9,
    olive9 = {
      label: "Conversation",
      value: route.conversationId
    };
  let prism9 = String(route.windowId),
    quill9 = {
      label: "Window",
      value: prism9
    };
  let reef9 = String(route.ownerWebContentsId),
    sage9 = {
      label: "Owner webContents",
      value: reef9
    };
  let topaz9 = String(route.disposeAfterSessionActivity),
    ultra9 = {
      label: "Disposable",
      value: topaz9
    };
  let vapor9 = route.page?.guestWebContentsId == null ? "none" : String(route.page.guestWebContentsId),
    wheat9 = {
      label: "Guest webContents",
      value: vapor9
    };
  let yarn9 = route.page?.pageKey ?? "none",
    zephyr9 = {
      label: "Page key",
      value: yarn9
    };
  let acorn9 = String(route.page?.isLoading ?? false),
    bloom9 = {
      label: "Loading",
      value: acorn9
    };
  let coral9 = route.page?.url || "about:blank",
    drift9 = {
      label: "URL",
      value: coral9
    };
  let eagle9 = [olive9, quill9, sage9, ultra9, wheat9, zephyr9, bloom9, drift9];
  let frost9 = `window ${route.windowId} · owner ${route.ownerWebContentsId}`;
  return <Birch {...{
    details: eagle9,
    subtitle: frost9,
    title: route.conversationId
  }} />;
}
function Oak(glide9) {
  let {
      attachIntent
    } = glide9,
    honey9 = {
      label: "Conversation",
      value: attachIntent.conversationId
    };
  let iris9 = {
    label: "Browser tab",
    value: attachIntent.browserTabId
  };
  let jewel9 = String(attachIntent.windowId),
    knoll9 = {
      label: "Window",
      value: jewel9
    };
  let lunar9 = {
    label: "Kind",
    value: attachIntent.kind
  };
  let moss9 = String(attachIntent.hostGeneration),
    north9 = {
      label: "Host generation",
      value: moss9
    };
  let orbit9 = attachIntent.webContentsId == null ? "none" : String(attachIntent.webContentsId),
    pine9 = {
      label: "WebContents",
      value: orbit9
    };
  let quest9 = [honey9, iris9, knoll9, lunar9, north9, pine9];
  let ridge9 = `${attachIntent.conversationId} · ${attachIntent.browserTabId}`,
    storm9 = `${attachIntent.kind} attach`;
  return <Birch {...{
    details: quest9,
    subtitle: ridge9,
    title: storm9
  }} />;
}
function Petal(tide9) {
  let {
      event
    } = tide9,
    unity9 = String(event.sequence),
    vale9 = {
      label: "Sequence",
      value: unity9
    };
  let wave9 = alpha1.format(event.timestampMs);
  let apex9 = {
    label: "Time",
    value: wave9
  };
  let brook9 = event.conversationId ?? "none",
    cliff9 = {
      label: "Conversation",
      value: brook9
    };
  let dusk9 = event.browserTabId ?? "none",
    elm9 = {
      label: "Browser tab",
      value: dusk9
    };
  let fern9 = event.ownerWebContentsId == null ? "none" : String(event.ownerWebContentsId),
    grove9 = {
      label: "Owner webContents",
      value: fern9
    };
  let hill9 = event.windowId == null ? "none" : String(event.windowId),
    isle9 = {
      label: "Window",
      value: hill9
    };
  let juniper9 = event.guestWebContentsId == null ? "none" : String(event.guestWebContentsId),
    lagoon9 = {
      label: "Guest webContents",
      value: juniper9
    };
  let meadow9 = event.pageKey ?? "none",
    nest9 = {
      label: "Page key",
      value: meadow9
    };
  let oak9 = [vale9, apex9, cliff9, elm9, grove9, isle9, lagoon9, nest9, ...event.details];
  let petal9 = `#${event.sequence} ${event.kind}`;
  return <Birch {...{
    details: oak9,
    subtitle: event.message,
    title: petal9
  }} />;
}
function Quiet(quiet9) {
  let {
      details,
      subtitle,
      title
    } = quiet9,
    rain9 = <div className="truncate font-mono text-xs text-token-foreground">{title}</div>;
  let seed9 = <div className="mt-1 truncate text-[11px] text-token-description-foreground">{subtitle}</div>;
  let trail9 = <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none"><div className="min-w-0">{rain9}{seed9}</div></summary>;
  let urn9 = details.map(Rain);
  let vine9 = <div className="border-t border-token-border px-3">{urn9}</div>;
  return <details className="group bg-token-background rounded-lg border border-token-border">{trail9}{vine9}</details>;
}
function Rain(wind9) {
  return <Falcon key={`${wind9.label}:${wind9.value}`} {...{
    label: wind9.label,
    value: wind9.value
  }} />;
}
