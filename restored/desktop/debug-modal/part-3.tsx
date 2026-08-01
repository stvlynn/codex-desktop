// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/17
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
function Apex(props: {
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
function Garnet(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Storm(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Tide(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Unity(props: {
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
function Xenon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialHt: any = undefined;
const DeferredUiV2: any = undefined;
const IntlProvider: any = undefined;
const Urn: any = undefined;
const Yarrow: any = undefined;
const azure: any = undefined;
const canyon: any = undefined;
const deferredUiD9: any = undefined;
const dew: any = undefined;
const falcon: any = undefined;
const id: any = undefined;
const remoteSshConnections: any = undefined;
const violet: any = undefined;

function Topaz(urn6) {
  let {
      hostId,
      notifications
    } = urn6,
    vine6 = CodexPluginActionType(appScopeAtom),
    [wind6, yarrow6] = tide.useState(false),
    [azure6, birch6] = tide.useState(null),
    canyon6,
    dew6,
    alpha7,
    bravo7,
    copper7,
    delta7,
    echo7,
    falcon7,
    gamma7,
    harbor7;
  {
    let lemon7 = Glide(notifications);
    dew6 = azure6 != null && lemon7.includes(azure6) ? azure6 : null;
    let marble7 = dew6 == null ? notifications : notifications.filter(item => item.threadId === dew6);
    let nickel7 = marble7,
      onyx7;
    onyx7 = nickel7.filter(Wheat);
    alpha7 = onyx7;
    let pearl7;
    pearl7 = wind6 ? nickel7 : nickel7.filter(Vapor);
    bravo7 = pearl7;
    canyon6 = Zephyr;
    echo7 = notifications.length === 0;
    falcon7 = () => {
      noop(vine6, hostId);
    };
    gamma7 = `debug-app-server-notifications-${hostId}`;
    harbor7 = "Notifications";
    copper7 = "mb-2 flex flex-wrap items-center justify-between gap-2";
    delta7 = lemon7.length > 0 ? <select className="bg-token-background max-w-80 cursor-interaction rounded-md border border-token-border px-2 py-1 text-xs text-token-foreground" value={dew6 ?? ""} onChange={event => {
      birch6(event.currentTarget.value || null);
    }}><option value="">{"All threads"}</option>{lemon7.map(_a)}</select> : null;
  }
  let indigo7 = alpha7.length > 0 ? <label className="ml-auto flex cursor-interaction items-center gap-2 text-xs text-token-description-foreground"><input checked={wind6} className="cursor-interaction" onChange={event => {
      yarrow6(event.currentTarget.checked);
    }} type="checkbox" />{"Show delta notifications"}<span className="tabular-nums">{"("}{alpha7.length}{")"}</span></label> : null;
  let jade7 = <div className={copper7}>{delta7}{indigo7}</div>;
  let kite7 = bravo7.length > 0 ? <div className="flex max-h-[300px] flex-col gap-2 overflow-y-auto pr-1">{bravo7.map(Ultra)}</div> : <Xenon {...{
    message: alpha7.length > 0 ? "Only hidden delta notifications recorded" : Knoll(dew6)
  }} />;
  return <Garnet {...{
    clearDisabled: echo7,
    onClear: falcon7,
    storageKey: gamma7,
    title: harbor7,
    children: [jade7, kite7]
  }} />;
}
function Ultra(quartz7) {
  return <Storm key={quartz7.id} {...{
    notification: quartz7
  }} />;
}
function _a(river7) {
  return <Tide key={river7} {...{
    threadId: river7
  }} />;
}
function Vapor(slate7) {
  return !slate7.isNoisy;
}
function Wheat(timber7) {
  return timber7.isNoisy;
}
function Yarn(umbra7) {
  let {
      threadId
    } = umbra7,
    violet7 = resolveScienceModelLabel(threadId);
  let willow7 = CodexBrowserSurfaceActionType(ensureComposerEsm_E4_Init, violet7),
    xenon7 = willow7?.trim() || "Untitled thread";
  return <option value={threadId}>{xenon7}</option>;
}
function Zephyr(yellow7) {
  let {
      children,
      clearDisabled,
      onClear,
      storageKey,
      title
    } = yellow7,
    zinc7 = <button type="button" className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50" disabled={clearDisabled} onClick={onClear}>{"Clear"}</button>;
  let amber7 = <div className="py-3">{children}</div>;
  return <div className="overflow-hidden rounded-lg border border-token-border bg-token-foreground/[0.025]">{<Copper {...{
      actions: zinc7,
      storageKey,
      title,
      variant: "global",
      children: amber7
    }} />}</div>;
}
function Acorn(basalt7) {
  let {
    message
  } = basalt7;
  return <div className="rounded border border-dashed border-token-border px-3 py-6 text-center text-xs text-token-description-foreground">{message}</div>;
}
function Bloom(cedar7) {
  let {
      request
    } = cedar7,
    daisy7 = <span className="truncate font-mono text-xs text-token-foreground">{request.method}</span>;
  let ember7 = <span className="rounded-full bg-token-foreground/10 px-1.5 py-0.5 text-[10px] font-medium text-token-description-foreground tabular-nums">{"#"}{request.matchingRequestSequenceNumber}</span>;
  let flint7 = <div className="min-w-0"><div className="flex items-center gap-2">{daisy7}{ember7}</div></div>;
  let garnet7 = vale.format(request.startedAtMs);
  let hazel7 = <div>{garnet7}</div>;
  let ivory7 = Pine(request);
  let jasper7 = <div>{ivory7}</div>;
  let kelp7 = <div className="shrink-0 text-right text-[11px] text-token-description-foreground tabular-nums">{hazel7}{jasper7}</div>;
  let lotus7 = <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">{flint7}{kelp7}</summary>;
  let mint7 = <div>{"Request ID: "}{request.id}</div>;
  let nova7 = request.timeoutMs > 0 ? request.timeoutMs : "none",
    olive7 = <div>{"Timeout: "}{nova7}</div>;
  let prism7 = <div>{"Priority: "}{request.priority}</div>;
  let quill7 = <div>{"Source: "}{request.source}</div>;
  let reef7 = <div>{"Queued: "}{request.queueWaitMs}{"ms"}</div>;
  let sage7 = request.endedAtMs == null ? <div>{"Ended: pending"}</div> : <div>{"Ended: "}{vale.format(request.endedAtMs)}</div>;
  let topaz7 = <div className="grid gap-2 text-[11px] text-token-description-foreground md:grid-cols-2">{mint7}{olive7}{prism7}{quill7}{reef7}{sage7}</div>;
  let ultra7 = <Unity {...{
    payload: request.paramsPreview,
    title: "Params"
  }} />;
  let vapor7 = request.resultPreview == null ? null : <Unity {...{
    payload: request.resultPreview,
    title: "Result"
  }} />;
  let wheat7 = request.errorPreview == null ? null : <Unity {...{
    payload: request.errorPreview,
    title: "Error"
  }} />;
  let yarn7 = <div className="space-y-3 border-t border-token-border p-3">{topaz7}{ultra7}{vapor7}{wheat7}</div>;
  return <details className="group/request bg-token-background rounded-lg border border-token-border">{lotus7}{yarn7}</details>;
}
function Coral(zephyr7) {
  let {
      notification
    } = zephyr7,
    acorn7 = IntlProvider("group/notification bg-token-background rounded-lg border", Quest(notification.severity));
  let bloom7 = <span className="truncate font-mono text-xs text-token-foreground">{notification.method}</span>;
  let coral7 = notification.severity === "error" ? <span className="rounded-full bg-token-charts-red/15 px-1.5 py-0.5 text-[10px] font-medium text-token-charts-red">{"error"}</span> : null;
  let drift7 = <div className="min-w-0"><div className="flex items-center gap-2">{bloom7}{coral7}</div></div>;
  let eagle7 = vale.format(notification.receivedAtMs);
  let frost7 = <div className="shrink-0 text-right text-[11px] text-token-description-foreground tabular-nums">{eagle7}</div>;
  let glide7 = <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">{drift7}{frost7}</summary>;
  let honey7 = <div className="space-y-3 border-t border-token-border p-3">{<Unity {...{
      payload: notification.paramsPreview,
      title: "Params"
    }} />}</div>;
  return <details className={acorn7}>{glide7}{honey7}</details>;
}
function Drift(iris7) {
  let {
      payload,
      title
    } = iris7,
    jewel7 = <span>{title}</span>;
  let knoll7 = <button type="button" className="cursor-interaction rounded px-1.5 py-0.5 text-token-foreground hover:bg-token-foreground/10" onClick={() => {
    navigator.clipboard?.writeText(payload).catch(Eagle);
  }}>{"Copy"}</button>;
  let lunar7 = <div className="mb-1 flex items-center justify-between gap-2 text-[11px] font-medium tracking-wide text-token-description-foreground uppercase">{jewel7}{knoll7}</div>;
  let moss7 = <pre className="max-h-52 overflow-auto rounded-md border border-token-border bg-token-foreground/[0.035] p-2 font-mono text-[11px] leading-relaxed break-words whitespace-pre-wrap text-token-foreground">{payload}</pre>;
  return <div>{lunar7}{moss7}</div>;
}
function Eagle() {}
function Frost(north7) {
  let {
      state
    } = north7,
    orbit7 = IntlProvider("rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide", Ridge(state));
  return <span className={orbit7}>{state}</span>;
}
function Glide(pine7) {
  let quest7 = [],
    ridge7 = new Set();
  for (let storm7 of pine7) storm7.threadId != null && !ridge7.has(storm7.threadId) && (ridge7.add(storm7.threadId), quest7.push(storm7.threadId));
  return quest7;
}
function Honey(tide7) {
  return apex.flatMap(item => {
    let unity7 = tide7.filter(_item => _item.resumeState === item);
    return unity7.length === 0 ? [] : [{
      entries: unity7,
      status: item
    }];
  });
}
function Iris(vale7) {
  return `${vale7.status} (${vale7.entries.length})`;
}
function Jewel({
  count,
  status
}) {
  return `${status} (${count})`;
}
function Knoll(wave7) {
  return wave7 == null ? "No notifications recorded for this manager yet" : "No notifications recorded for this thread";
}
function Lunar({
  defaultHostConfig,
  hostId,
  remoteControlConnections,
  remoteSshConnections
}) {
  let apex7 = remoteSshConnections?.find(cliff7 => cliff7.hostId === hostId);
  if (apex7 != null) return {
    connectionType: Moss(apex7),
    displayName: apex7.displayName,
    lines: [{
      label: "Source",
      value: apex7.source
    }, {
      label: "Auto connect",
      value: String(apex7.autoConnect)
    }, {
      label: "SSH host",
      value: apex7.sshHost
    }, {
      label: "SSH port",
      value: apex7.sshPort == null ? "default" : String(apex7.sshPort)
    }, {
      label: "Identity",
      value: apex7.identity == null ? "none" : "configured"
    }],
    stateType: "connection"
  };
  let brook7 = remoteControlConnections?.find(dusk7 => dusk7.hostId === hostId);
  return brook7 == null ? hostId === (defaultHostConfig?.id ?? "local") ? {
    connectionType: "Built-in app server",
    displayName: defaultHostConfig?.display_name ?? "Local",
    stateType: "local"
  } : {
    connectionType: "Unknown",
    displayName: hostId,
    lines: [{
      label: "Registered",
      value: "true"
    }],
    stateType: "connection"
  } : {
    connectionType: "Remote control",
    displayName: brook7.displayName,
    lines: [{
      label: "Env ID",
      value: brook7.envId
    }, {
      label: "Kind",
      value: brook7.environmentKind
    }, {
      label: "Online",
      value: String(brook7.online)
    }, {
      label: "Busy",
      value: String(brook7.busy)
    }, {
      label: "Host",
      value: `${brook7.os}/${brook7.arch}`
    }, {
      label: "Last seen",
      value: brook7.lastSeenAt ?? "Unavailable"
    }],
    stateType: "connection"
  };
}
function Moss(elm7) {
  switch (elm7.source) {
    case "codex-managed":
      return "Remote SSH · managed";
    case "discovered":
      return "Remote SSH · discovered";
  }
}
function North(fern7) {
  return fern7 == null ? "running" : fern7 < 1e3 ? `${fern7} ms` : `${(fern7 / 1e3).toFixed(2)} s`;
}
function Orbit(grove7) {
  return grove7.status === "failed" || grove7.status === "timed-out";
}
function Pine(hill7) {
  switch (hill7.status) {
    case "pending":
      return "pending";
    case "completed":
      return `✅ ${North(hill7.durationMs)}`;
    case "failed":
    case "timed-out":
      return `❌ ${North(hill7.durationMs)}`;
  }
}
function Quest(isle7) {
  switch (isle7) {
    case "default":
      return "border-token-border";
    case "error":
      return "border-token-charts-red/50";
    case "noisy":
      return "border-token-border/70";
  }
}
function Ridge(juniper7) {
  switch (juniper7) {
    case "connected":
    case "local":
      return "bg-token-charts-green/15 text-token-charts-green";
    case "connecting":
      return "bg-token-charts-yellow/15 text-token-charts-yellow";
    case "restarting":
      return "bg-token-charts-blue/15 text-token-charts-blue";
    case "disconnected":
      return "bg-token-foreground/10 text-token-description-foreground";
    case "error":
      return "bg-token-charts-red/15 text-token-charts-red";
  }
}
var storm,
  tide,
  unity,
  vale,
  wave,
  apex,
  brook,
  cliff = esmInit(() => {
    storm = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    tide = commonJsInit(react(), 1);
    deferredUiD9();
    DeferredUiV2();
    AppInitialHt();
    AppActionSelector();
    ensureDropdownMenuInit();
    ensureAppIconTkInit();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    remoteSshConnections();
    ensureComposerEsm_ML_Init();
    violet();
    falcon();
    vale = new Intl.DateTimeFormat(undefined, {
      fractionalSecondDigits: 3,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    wave = "debug-app-server-section";
    apex = ["resumed", "resuming", "needs_resume"];
    brook = useQueryClient(appScopeAtom, lagoon7 => null);
  });
function Dusk(meadow7) {
  let {
      isActive
    } = meadow7,
    nest7 = appServices.debug,
    [oak7, petal7] = azure.useState(null),
    quiet7 = isActive && nest7 != null,
    rain7 = async () => {
      if (nest7 == null) throw Error("Browser debug service is unavailable");
      return nest7.getBrowserSnapshot();
    };
  let seed7 = {
    enabled: quiet7,
    queryFn: rain7,
    queryKey: canyon,
    refetchInterval: dew,
    staleTime: readScrollTop.FIVE_SECONDS
  };
  let {
      data,
      isFetching,
      isLoading,
      refetch
    } = useQuery(seed7),
    trail7 = async echo8 => {
      if (nest7 != null) try {
        let falcon8 = await nest7.openBrowserTabOwner({
          browserTabId: echo8.browserTabId,
          conversationId: echo8.conversationId,
          windowId: echo8.windowId
        });
        petal7(Urn(falcon8));
        await refetch();
      } catch (gamma8) {
        let harbor8 = gamma8;
        petal7("Failed to open Browser owner");
        appActionSidebarProjectRefSchema.error("Failed to open Browser debug owner", {
          safe: {
            browserTabId: echo8.browserTabId,
            conversationId: echo8.conversationId,
            windowId: echo8.windowId
          },
          sensitive: {
            error: harbor8
          }
        });
      }
    };
  let urn7 = trail7,
    vine7 = data == null,
    wind7 = () => {
      data != null && navigator.clipboard?.writeText(JSON.stringify(Yarrow(data), null, 2)).catch(Fern);
    };
  let yarrow7 = <button type="button" className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={vine7} onClick={wind7}>{"Copy restore"}</button>;
  let azure7 = data == null,
    birch7 = () => {
      data != null && navigator.clipboard?.writeText(JSON.stringify(data, null, 2)).catch(Elm);
    };
  let canyon7 = <button type="button" className="cursor-interaction rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={azure7} onClick={birch7}>{"Copy JSON"}</button>;
  let dew7 = () => {
    refetch();
  };
  let alpha8 = isFetching ? <VSCODE_EDITOR_ID {...{
    className: "icon-2xs"
  }} /> : null;
  let bravo8 = <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={nest7 == null} onClick={dew7}>{alpha8}{"Refresh"}</button>;
  let copper8 = <div className="flex flex-wrap items-center justify-end gap-1">{yarrow7}{canyon7}{bravo8}</div>;
  let delta8 = nest7 == null ? <Vale {...{
    message: "Browser debug service unavailable."
  }} /> : isLoading && data == null ? <Vale {...{
    message: "Loading Browser debug snapshot..."
  }} /> : data == null ? <Vale {...{
    message: "Browser debug snapshot unavailable."
  }} /> : <Apex {...{
    onOpenOwner: urn7,
    openOwnerStatus: oak7,
    snapshot: data
  }} />;
  return <div className="flex flex-col gap-3">{copper8}{delta8}</div>;
}
function Elm() {}
function Fern() {}
