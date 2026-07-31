// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
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
import { writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_E4_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../boundaries/composer-esm-inits";
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
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiH(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function El(props: {
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
function IsStartingProcessExpired(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Umbra1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Violet1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Willow1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Xenon1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const Alpha: any = undefined;
const AppInitialA2: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialG2: any = undefined;
const AppInitialH7: any = undefined;
const AppInitialK2: any = undefined;
const AppInitialK7: any = undefined;
const AppInitialU7: any = undefined;
const AppInitialW7: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialZ7: any = undefined;
const Bloom1: any = undefined;
const DeferredUI: any = undefined;
const DeferredUiD2: any = undefined;
const DeferredUiHI2: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredUiW22: any = undefined;
const Falcon2: any = undefined;
const IntlProvider: any = undefined;
const Jade2: any = undefined;
const Marble2: any = undefined;
const Nickel2: any = undefined;
const Onyx2: any = undefined;
const Pearl2: any = undefined;
const Quartz2: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Yarn1: any = undefined;
const Zephyr1: any = undefined;
const falcon: any = undefined;
const lemon2: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const violet: any = undefined;

function River2(seed18) {
  return seed18 == null || !Number.isFinite(seed18) ? "n/a" : `${seed18.toFixed(1)}%`;
}
function Slate2(trail18) {
  if (trail18 == null || !Number.isFinite(trail18)) return "n/a";
  let urn18 = Math.max(0, Math.floor(trail18));
  if (urn18 < 60) return `${urn18}s`;
  let vine18 = Math.floor(urn18 / 60),
    wind18 = urn18 % 60;
  if (vine18 < 60) return `${vine18}m ${wind18}s`;
  let yarrow18 = Math.floor(vine18 / 60),
    azure18 = vine18 % 60;
  return yarrow18 < 24 ? `${yarrow18}h ${azure18}m` : `${Math.floor(yarrow18 / 24)}d ${yarrow18 % 24}h`;
}
function Timber2(birch18) {
  return birch18 == null ? "default" : birch18 > cedar2 ? "danger" : birch18 > basalt2 ? "warning" : "default";
}
function Umbra2(canyon18, dew18) {
  let alpha19 = (dew18.get(canyon18.pid) ?? []).map(item => Umbra2(item, dew18));
  return alpha19.sort(Violet2), {
    children: alpha19,
    commandLabel: Nickel2(canyon18.command),
    fullCommand: canyon18.command.trim().length > 0 ? canyon18.command.trim() : "(command unavailable)",
    process: canyon18,
    totalCpuPercent: Willow2(canyon18.cpuPercent, alpha19),
    totalRssKb: Xenon2(canyon18.rssKb, alpha19)
  };
}
function Violet2(bravo19, copper19) {
  let delta19 = bravo19.totalRssKb ?? -1,
    echo19 = copper19.totalRssKb ?? -1;
  if (delta19 !== echo19) return echo19 - delta19;
  let falcon19 = bravo19.process.rssKb ?? -1,
    gamma19 = copper19.process.rssKb ?? -1;
  if (falcon19 !== gamma19) return gamma19 - falcon19;
  let harbor19 = bravo19.commandLabel.localeCompare(copper19.commandLabel);
  return harbor19 === 0 ? bravo19.process.pid - copper19.process.pid : harbor19;
}
function Willow2(indigo19, jade19) {
  let kite19 = indigo19 ?? 0,
    lemon19 = indigo19 != null;
  for (let marble19 of jade19) marble19.totalCpuPercent != null && (kite19 += marble19.totalCpuPercent, lemon19 = true);
  return lemon19 ? kite19 : null;
}
function Xenon2(nickel19, onyx19) {
  let pearl19 = nickel19 ?? 0,
    quartz19 = nickel19 != null;
  for (let river19 of onyx19) river19.totalRssKb != null && (pearl19 += river19.totalRssKb, quartz19 = true);
  return quartz19 ? pearl19 : null;
}
function Yellow2(slate19) {
  return amber2.default.basename(slate19.replaceAll("\\", "/"));
}
function Zinc2(timber19, umbra19, violet19) {
  let {
    kind
  } = umbra19.process;
  return umbra19 === timber19 ? "codex-app" : kind === "app_server" || /(?:^|\s)app-server(?:\s|$)/i.test(umbra19.fullCommand) ? "app-server" : violet19 ? "rollout-child-processes" : kind.startsWith("electron_") ? "codex-app" : "other-child-processes";
}
var amber2,
  basalt2,
  cedar2,
  daisy2 = esmInit(() => {
    amber2 = commonJsInit(ght(), 1);
    basalt2 = 1048576;
    cedar2 = 5242880;
  });
function Ember2() {
  let [willow19, xenon19] = mint2.useState(Kelp2),
    [yellow19, zinc19] = mint2.useState(false),
    [amber19, basalt19] = mint2.useState(null),
    cedar19 = willow19 && !yellow19,
    daisy19 = {
      queryConfig: {
        enabled: cedar19,
        intervalMs: 5e3
      }
    };
  let {
      data,
      isLoading
    } = SIDEBAR_HIT_TEST_SELECTOR("child-processes", daisy19),
    ember19 = data?.processes ?? [];
  let flint19 = ember19,
    garnet19 = flint19.length,
    hazel19 = willow19 ? `Child processes (${garnet19})` : "Child processes",
    ivory19 = willow19 ? <button type="button" className="cursor-interaction rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10" onClick={() => zinc19(Flint2)}>{yellow19 ? "Resume" : "Pause"}</button> : null;
  let jasper19 = quill19 => {
    xenon19(quill19);
    quill19 || zinc19(false);
  };
  let kelp19 = willow19 ? isLoading && data == null ? <div className="rounded-xl border border-token-border/60 bg-token-foreground/5 px-3 py-3 text-sm text-token-description-foreground">{"Loading child processes…"}</div> : data?.rootProcess == null ? <div className="rounded-xl border border-token-border/60 bg-token-foreground/5 px-3 py-3 text-sm text-token-description-foreground">{"No child processes found."}</div> : <Umbra1 {...{
    onProcessDetailsClick: basalt19,
    processes: flint19,
    rootProcess: data.rootProcess
  }} /> : null;
  let lotus19 = amber19 != null,
    mint19 = reef19 => {
      reef19 || basalt19(null);
    };
  let nova19 = <DeferredUiH {...{
    title: <RealtimeVoiceHostId {...{
      children: "Process details"
    }} />,
    subtitle: <IsStartingProcessExpired {...{
      children: "The process ID and full command are shown below"
    }} />
  }} />;
  let olive19 = <DeferredUiB {...{
    className: "gap-4",
    children: [nova19, <pre className="m-0 max-h-[420px] overflow-auto rounded-xl border border-token-border bg-token-editor-background/70 p-3 font-mono text-sm leading-relaxed break-all whitespace-pre-wrap text-token-foreground">{amber19}</pre>]
  }} />;
  let prism19 = <UsePointerSurfaceInteractionGate {...{
    open: lotus19,
    onOpenChange: mint19,
    size: "wide",
    children: olive19
  }} />;
  return <Copper {...{
    title: hazel19,
    storageKey: olive2,
    actions: ivory19,
    onToggle: jasper19,
    variant: "global",
    children: [kelp19, prism19]
  }} />;
}
function Flint2(sage19) {
  return !sage19;
}
function Garnet2({
  onProcessDetailsClick,
  processes,
  rootProcess
}) {
  let [topaz19, ultra19] = mint2.useState(true),
    [vapor19, wheat19] = mint2.useState("all"),
    [yarn19, zephyr19] = mint2.useState([{
      id: "ram",
      desc: true
    }]),
    acorn19 = mint2.useMemo(() => Marble2(rootProcess, processes), [processes, rootProcess]),
    bloom19 = mint2.useMemo(() => acorn19 == null ? [] : topaz19 ? Pearl2(acorn19, vapor19) : [acorn19], [vapor19, topaz19, acorn19]),
    coral19 = mint2.useMemo(() => $c(topaz19, onProcessDetailsClick), [topaz19, onProcessDetailsClick]),
    drift19 = acorn19 == null ? null : Onyx2(acorn19),
    eagle19 = Jade2({
      columns: coral19,
      data: bloom19,
      enableSorting: topaz19,
      getCoreRowModel: Yarn1(),
      getExpandedRowModel: Zephyr1(),
      getSortedRowModel: topaz19 ? Bloom1() : undefined,
      getRowId: glide19 => glide19.process.pid.toString(),
      getSubRows: topaz19 ? undefined : honey19 => honey19.children,
      initialState: {
        expanded: true
      },
      onSortingChange: zephyr19,
      state: {
        sorting: yarn19
      }
    }),
    frost19 = eagle19.getRowModel().rows;
  return <div className="flex flex-col gap-3"><div className="flex flex-wrap items-center justify-between gap-3">{drift19 == null ? null : <div className="flex flex-wrap items-center gap-x-5 gap-y-2">{<El {...{
          label: "Codex App",
          rssKb: drift19["codex-app"]
        }} />}{<El {...{
          label: "App Server",
          rssKb: drift19["app-server"]
        }} />}{<El {...{
          label: "Rollout child processes",
          rssKb: drift19["rollout-child-processes"]
        }} />}{drift19["other-child-processes"] == null ? null : <El {...{
          label: "Other child processes",
          rssKb: drift19["other-child-processes"]
        }} />}</div>}<div className="flex items-center gap-2">{topaz19 ? <DropdownMenuPopover {...{
          align: "end",
          triggerButton: <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10">{Hazel2(vapor19)}{<AppIconSft {...{
              className: "icon-2xs opacity-70"
            }} />}</button>,
          children: prism2.map(item => <DropdownMenu.Item key={item} {...{
            "aria-checked": vapor19 === item,
            role: "menuitemradio",
            onSelect: () => wheat19(item),
            children: Hazel2(item)
          }} />)
        }} /> : null}<button type="button" className="cursor-interaction rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10" onClick={() => ultra19(iris19 => !iris19)}>{topaz19 ? "Tree view" : "Flat list"}</button></div></div><div className="-mx-3 overflow-hidden border-y border-token-border/70"><div className="overflow-auto"><table className="w-full table-fixed border-collapse text-sm"><colgroup><col /><col className="w-[72px]" /><col className="w-[132px]" /><col className="w-[180px]" /><col className="w-[112px]" /></colgroup><thead className="sticky top-0 z-[1] bg-token-main-surface-primary">{eagle19.getHeaderGroups().map(item => <tr key={item.id}>{item.headers.map(_item => <th key={_item.id} aria-sort={topaz19 ? _item.column.getIsSorted() === "asc" ? "ascending" : _item.column.getIsSorted() === "desc" ? "descending" : "none" : undefined} className="border-b border-token-border/70 px-3 py-2 text-left text-xs font-semibold text-token-description-foreground uppercase">{_item.isPlaceholder ? null : topaz19 ? <button type="button" className="flex w-full cursor-interaction items-center gap-1 text-left uppercase" onClick={_item.column.getToggleSortingHandler()}>{Falcon2(_item.column.columnDef.header, _item.getContext())}{_item.column.getIsSorted() ? <AppIconYlt {...{
                    className: `icon-2xs shrink-0 ${_item.column.getIsSorted() === "asc" ? "-rotate-90" : "rotate-90"}`
                  }} /> : null}</button> : Falcon2(_item.column.columnDef.header, _item.getContext())}</th>)}</tr>)}</thead><tbody>{frost19.map(item => <tr key={item.id} className="h-9 border-b border-token-border/40 last:border-b-0">{item.getVisibleCells().map(_item => <td key={_item.id} className="px-3 py-2 align-middle">{Falcon2(_item.column.columnDef.cell, _item.getContext())}</td>)}</tr>)}</tbody></table></div></div></div>;
}
function $c(jewel19, knoll19) {
  return [{
    accessorFn: lunar19 => lunar19.commandLabel,
    id: "command",
    header: "Command",
    cell: ({
      row
    }) => <div className="flex min-w-0 items-center gap-1" style={{
      paddingLeft: `${row.depth * 18}px`
    }}>{row.getCanExpand() ? <button type="button" aria-label={row.getIsExpanded() ? `Collapse ${row.original.commandLabel}` : `Expand ${row.original.commandLabel}`} className="flex size-5 shrink-0 cursor-interaction items-center justify-center text-token-description-foreground" onClick={row.getToggleExpandedHandler()}>{<AppIconYlt {...{
          className: `icon-xs transition-transform ${row.getIsExpanded() ? "rotate-90" : ""}`
        }} />}</button> : <span className="size-5 shrink-0" />}<span className="min-w-0 truncate font-medium">{row.original.commandLabel}</span><button type="button" aria-label={Jasper2(row.original)} title={Jasper2(row.original)} className="flex size-5 shrink-0 cursor-interaction items-center justify-center text-token-description-foreground hover:text-token-foreground" onClick={() => knoll19(Jasper2(row.original))}>{<ShellLayoutMetricsContext {...{
          className: "icon-xs"
        }} />}</button></div>
  }, {
    accessorFn: moss19 => moss19.process.pid,
    id: "pid",
    header: "PID",
    cell: ({
      getValue
    }) => <span className="tabular-nums">{getValue()}</span>
  }, {
    accessorFn: north19 => north19.process.cpuPercent ?? -1,
    id: "cpu",
    header: "CPU",
    cell: ({
      row
    }) => jewel19 ? <span className="block text-right tabular-nums">{River2(row.original.process.cpuPercent)}</span> : <Violet1 {...{
      selfValue: row.original.process.depth === 0 && row.original.process.cpuPercent == null ? "" : River2(row.original.process.cpuPercent),
      totalValue: River2(row.original.totalCpuPercent)
    }} />
  }, {
    accessorFn: orbit19 => orbit19.process.rssKb ?? -1,
    id: "ram",
    header: "RAM",
    cell: ({
      row
    }) => jewel19 ? <span className="block text-right tabular-nums">{Quartz2(row.original.process.rssKb)}</span> : <Violet1 {...{
      selfValue: Quartz2(row.original.process.rssKb),
      totalValue: Quartz2(row.original.totalRssKb),
      tone: Timber2(row.original.totalRssKb)
    }} />
  }, {
    accessorFn: pine19 => pine19.process.ageSeconds,
    id: "age",
    header: "Age",
    cell: ({
      row
    }) => <span className="block text-right whitespace-nowrap tabular-nums">{Slate2(row.original.process.ageSeconds)}</span>
  }];
}
function el(quest19) {
  let {
      label,
      rssKb
    } = quest19,
    ridge19 = <span className="text-token-description-foreground">{label}</span>;
  let storm19 = Quartz2(rssKb);
  let tide19 = <span className="font-medium tabular-nums">{storm19}</span>;
  return <div className="flex items-baseline gap-1.5 text-sm whitespace-nowrap">{ridge19}{tide19}</div>;
}
function Hazel2(unity19) {
  switch (unity19) {
    case "all":
      return "All processes";
    case "codex-app":
      return "Codex App";
    case "app-server":
      return "App Server";
    case "rollout-child-processes":
      return "Rollout child processes";
    case "other-child-processes":
      return "Other child processes";
  }
}
function Ivory2(vale19) {
  let {
      selfValue,
      tone = "default",
      totalValue
    } = vale19,
    wave19 = <span className="min-w-[6.5ch] text-right opacity-70">{selfValue}</span>;
  let apex19 = <span className="opacity-45">{"/"}</span>;
  let brook19 = tone === "warning" ? "min-w-[8.6ch] text-token-charts-yellow" : tone === "danger" ? "min-w-[8.6ch] text-token-charts-red" : "min-w-[8.6ch]",
    cliff19 = <span className={brook19}>{totalValue}</span>;
  return <span className="flex items-center justify-end gap-1 whitespace-nowrap text-token-description-foreground tabular-nums">{wave19}{apex19}{cliff19}</span>;
}
function Jasper2(dusk19) {
  return `PID ${dusk19.process.pid}\n${dusk19.fullCommand}`;
}
function Kelp2() {
  try {
    return window.localStorage.getItem(olive2) === "open";
  } catch {
    return false;
  }
}
var lotus2,
  mint2,
  nova2,
  olive2,
  prism2,
  quill2 = esmInit(() => {
    lotus2 = reactCompilerRuntime();
    lemon2();
    mint2 = commonJsInit(react(), 1);
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    AppIconYlt();
    ensureAppIconSftInit();
    svgToDataUri();
    scrollAppActionTargetTo();
    falcon();
    daisy2();
    olive2 = "debug-child-processes";
    prism2 = ["all", "codex-app", "app-server", "rollout-child-processes", "other-child-processes"];
  });
function Reef2(elm19) {
  let {
      lines
    } = elm19,
    fern19 = lines.map(Sage2);
  return <div className="flex flex-col py-1.5">{fern19}</div>;
}
function Sage2(grove19) {
  return <Falcon key={grove19.label} {...{
    label: grove19.label,
    value: grove19.value
  }} />;
}
var topaz2,
  ultra2,
  vapor2 = esmInit(() => {
    topaz2 = reactCompilerRuntime();
    violet();
  });
function Wheat2(hill19) {
  let {
      conversationId
    } = hill19,
    isle19 = CodexBrowserSurfaceActionType(MCP_SERVERS_STATUS_PATH, conversationId) ?? bloom2,
    juniper19 = CodexBrowserSurfaceActionType(AppInitialK2, conversationId) ?? "unknown",
    lagoon19 = CodexBrowserSurfaceActionType(AppInitialA2, conversationId) ?? "unknown",
    meadow19 = CodexBrowserSurfaceActionType(AppInitialG2, conversationId) ?? "unknown",
    nest19 = CodexBrowserSurfaceActionType(DeferredUiW22, conversationId) ?? "unknown",
    oak19 = CodexBrowserSurfaceActionType(DeferredUiD2, conversationId) ?? "unknown",
    petal19,
    quiet19,
    rain19,
    seed19,
    trail19,
    urn19;
  {
    let wind19 = useDebugPanelEditedFilePaths(isle19),
      yarrow19 = useDebugPanelReferencedFilePaths(isle19);
    quiet19 = Alpha;
    seed19 = "Local conversation";
    trail19 = "debug-entry-local-conversation-current";
    urn19 = "selection";
    petal19 = Reef2;
    let azure19 = {
      label: "id",
      value: conversationId
    };
    let birch19 = {
      label: "model",
      value: juniper19
    };
    let canyon19 = {
      label: "reasoning",
      value: lagoon19
    };
    let dew19 = {
      label: "rolloutPath",
      value: meadow19
    };
    let alpha20 = {
      label: "resumeState",
      value: nest19
    };
    let bravo20 = {
      label: "cwd",
      value: oak19
    };
    let copper20 = String(wind19.length),
      delta20 = {
        label: "editedFileCount",
        value: copper20
      };
    let echo20 = wind19.map(_l),
      falcon20 = String(yarrow19.length),
      gamma20;
    gamma20 = {
      label: "referencedFileCount",
      value: falcon20
    };
    rain19 = [azure19, birch19, canyon19, dew19, alpha20, bravo20, delta20, ...echo20, gamma20, ...yarrow19.map(Yarn2)];
  }
  let vine19 = <Willow1 {...{
    lines: rain19
  }} />;
  return <Xenon1 {...{
    title: seed19,
    storageKey: trail19,
    variant: urn19,
    children: vine19
  }} />;
}
function Yarn2(harbor20, indigo20) {
  return {
    label: `referencedFile[${indigo20}]`,
    value: harbor20
  };
}
function _l(jade20, kite20) {
  return {
    label: `editedFile[${kite20}]`,
    value: jade20
  };
}
var zephyr2,
  acorn2,
  bloom2,
  coral2 = esmInit(() => {
    zephyr2 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    DeferredUiV2();
    ensureUseDebugPanelParsersInit();
    vapor2();
    falcon();
    bloom2 = [];
  });
function Drift2(lemon20) {
  let {
      title,
      subtitle,
      icon,
      rightActions,
      status,
      onClick
    } = lemon20,
    marble20 = onClick ? "hover:bg-token-foreground/5 cursor-interaction" : "cursor-default",
    nickel20 = IntlProvider("border-token-border/50 flex w-full items-center gap-2 border-t py-1.5 text-left first:border-none", marble20);
  let onyx20 = icon ? <div className="mt-0.5">{icon}</div> : null;
  let pearl20 = <div className="truncate">{title}</div>;
  let quartz20 = subtitle ? <div className="truncate text-xs text-token-description-foreground">{subtitle}</div> : null;
  let river20 = <div className="min-w-0 flex-1">{pearl20}{quartz20}</div>;
  let slate20 = status ? <div className="ml-2 shrink-0 text-token-description-foreground">{status}</div> : null;
  let timber20 = rightActions ? <div className="flex items-center gap-1">{rightActions}</div> : null;
  return <button type="button" className={nickel20} onClick={onClick}>{onyx20}{river20}{slate20}{timber20}</button>;
}
var eagle2,
  frost2,
  glide2 = esmInit(() => {
    eagle2 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
  });
function Honey2() {
  let umbra20 = CodexPluginActionType(appScopeAtom),
    violet20 = CodexPluginActionResult(AppInitialZ7),
    willow20 = CodexPluginActionResult(AppInitialH7),
    xenon20 = CodexPluginActionResult(DeferredUiHI2),
    yellow20 = <div className="text-xs text-token-description-foreground">{"Codex local access"}</div>;
  let zinc20 = ivory20 => {
    umbra20.set(AppInitialW7, ivory20);
  };
  let amber20 = <div className="flex items-center justify-between gap-3 py-1.5">{yellow20}<AppInitialYC ariaLabel="Codex local access" checked={violet20} onChange={zinc20} /></div>;
  let basalt20 = <div className="text-xs text-token-description-foreground">{"Work mode access"}</div>;
  let cedar20 = jasper20 => {
    umbra20.set(AppInitialK7, jasper20);
  };
  let daisy20 = <div className="flex items-center justify-between gap-3 py-1.5">{basalt20}<AppInitialYC ariaLabel="Work mode access" checked={willow20} onChange={cedar20} /></div>;
  let ember20 = <div className="text-xs text-token-description-foreground">{"ChatGPT feature access"}</div>;
  let flint20 = kelp20 => {
    umbra20.set(AppInitialU7, kelp20);
  };
  let garnet20 = <div className="flex items-center justify-between gap-3 py-1.5">{ember20}<AppInitialYC ariaLabel="ChatGPT feature access" checked={xenon20} onChange={flint20} /></div>;
  let hazel20 = <div className="flex border-t-[0.5px] border-token-border py-3">{<ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: () => {
        umbra20.set(AppInitialW7, null);
        umbra20.set(AppInitialK7, null);
        umbra20.set(AppInitialU7, null);
      },
      children: "Reset to actual access"
    }} />}</div>;
  return <Copper {...{
    title: "Feature access",
    storageKey: "debug-feature-access",
    variant: "global",
    children: [amber20, daisy20, garnet20, hazel20]
  }} />;
}
var iris2,
  jewel2,
  knoll2 = esmInit(() => {
    iris2 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    DeferredUI();
    ensureComposerEsm_B7_Init();
    debugOverride();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    ensureAppScopeInit();
    falcon();
  });
