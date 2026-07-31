// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 15/17
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
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Mint2(props: {
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
function Reef2(props: {
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
function Ultra2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Vapor2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const Alpha: any = undefined;
const AppInitialAr: any = undefined;
const AppInitialDj: any = undefined;
const AppInitialR: any = undefined;
const AppInitialYC: any = undefined;
const Honey4: any = undefined;
const IntlProvider: any = undefined;
const Iris4: any = undefined;
const deferredNavigationFT: any = undefined;
const deferredUiXT: any = undefined;
const falcon: any = undefined;
const glide2: any = undefined;
const knoll4: any = undefined;
const moss4: any = undefined;
const north4: any = undefined;
const orbit4: any = undefined;
const primaryRuntime: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const vapor2: any = undefined;
const violet: any = undefined;

function Onyx4(river25) {
  return JSON.stringify(river25, null, 2) ?? String(river25);
}
var pearl4,
  quartz4,
  river4,
  slate4,
  timber4 = esmInit(() => {
    pearl4 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quartz4 = commonJsInit(react(), 1);
    deferredVM();
    AppInitialR();
    vapor2();
    falcon();
    slate4 = new Intl.DateTimeFormat(undefined, {
      fractionalSecondDigits: 3,
      hour: "2-digit",
      hourCycle: "h23",
      minute: "2-digit",
      second: "2-digit"
    });
  });
function Umbra4(slate25, timber25 = "") {
  if (!timber25.trim()) return [];
  let umbra25 = Daisy4(slate25),
    violet25 = new Map([...Zinc4(timber25), ...(umbra25 == null ? [] : Basalt4(umbra25))].map(item => [`${item.kind}:${item.name}`, item])).values();
  return Willow4(Array.from(violet25, willow25 => Yellow4(slate25, willow25)), timber25);
}
function Violet4(xenon25) {
  let yellow25 = Daisy4(xenon25);
  return yellow25 == null ? garnet4 : {
    assignedExperimentCount: Object.values(yellow25.dynamic_configs).filter(Flint4).length,
    enabledGateCount: Object.keys(yellow25.feature_gates).filter(item => xenon25.getFeatureGate(item, hazel4).value).length,
    gateCount: Object.keys(yellow25.feature_gates).length
  };
}
function Willow4(zinc25, amber25) {
  let basalt25 = amber25.trim().toLowerCase();
  return basalt25 ? zinc25.filter(item => [item.kind, Xenon4(item.name, amber25), item.name, item.reason, item.ruleId, item.kind === "experiment" ? item.groupName ?? "" : ""].join(" ").toLowerCase().includes(basalt25)) : zinc25;
}
function Xenon4(cedar25, daisy25) {
  let ember25 = Amber4().get(cedar25);
  if (ember25 != null) return ember25;
  let flint25 = daisy25.trim();
  return flint25.length > 0 && cedar25 === Cedar4(flint25) ? flint25 : cedar25;
}
function Yellow4(garnet25, hazel25) {
  switch (hazel25.kind) {
    case "gate":
      {
        let ivory25 = garnet25.getFeatureGate(hazel25.name, hazel4);
        return {
          kind: "gate",
          name: hazel25.name,
          enabled: ivory25.value,
          reason: ivory25.details.reason,
          ruleId: ivory25.ruleID
        };
      }
    case "experiment":
      {
        let jasper25 = garnet25.getExperiment(hazel25.name, hazel4);
        return {
          kind: "experiment",
          name: hazel25.name,
          groupName: jasper25.groupName,
          isUserInExperiment: jasper25.__evaluation?.is_user_in_experiment ?? null,
          reason: jasper25.details.reason,
          ruleId: jasper25.ruleID
        };
      }
  }
}
function Zinc4(kelp25) {
  let lotus25 = kelp25.trim().toLowerCase();
  return Array.from(Amber4()).filter(([, mint25]) => mint25.toLowerCase().includes(lotus25)).map(([nova25]) => ({
    kind: "gate",
    name: nova25
  }));
}
function Amber4() {
  return kelp4 === null ? lotus4 : (kelp4 = null, new Map());
}
function Basalt4(olive25) {
  return [...Object.keys(olive25.feature_gates).map(item => ({
    kind: "gate",
    name: item
  })), ...Object.entries(olive25.dynamic_configs).filter(([, prism25]) => Ember4(prism25)).map(([quill25]) => ({
    kind: "experiment",
    name: quill25
  }))];
}
function Cedar4(reef25) {
  let sage25 = new Int32Array(1),
    topaz25 = new Uint32Array(sage25.buffer);
  for (let ultra25 = 0; ultra25 < reef25.length; ultra25 += 1) sage25[0] = sage25[0] * 31 + reef25.charCodeAt(ultra25);
  return String(topaz25[0]);
}
function Daisy4(vapor25) {
  let wheat25 = vapor25.client ?? vapor25,
    yarn25 = Reflect.get(wheat25, "_store");
  if (typeof yarn25 != "object" || !yarn25) return null;
  let zephyr25 = Reflect.get(yarn25, "getValues");
  if (typeof zephyr25 != "function") return null;
  let acorn25 = ivory4.safeParse(Reflect.apply(zephyr25, yarn25, []));
  return acorn25.success ? acorn25.data : null;
}
function Ember4(bloom25) {
  return jasper4.safeParse(bloom25).success;
}
function Flint4(coral25) {
  let drift25 = jasper4.safeParse(coral25);
  return drift25.success ? "is_user_in_experiment" in drift25.data ? drift25.data.is_user_in_experiment : drift25.data.ue : false;
}
var garnet4,
  hazel4,
  ivory4,
  jasper4,
  kelp4,
  lotus4,
  mint4 = esmInit(() => {
    coalesceTruthy();
    garnet4 = {
      assignedExperimentCount: 0,
      enabledGateCount: 0,
      gateCount: 0
    };
    hazel4 = {
      disableExposureLog: true
    };
    deferredNavigationFT(coalesceTruthy());
    ivory4 = deferredUiXT({
      dynamic_configs: ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath()),
      feature_gates: ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath())
    });
    jasper4 = siteAnalyticsEventsPath([deferredUiXT({
      is_user_in_experiment: ensureComposerEsm_MT_Init()
    }), deferredUiXT({
      ue: sortedArrayFrom(true)
    })]);
    lotus4 = new Map();
  });
function Nova4() {
  let eagle25 = ensureComposerEsm_Ilt_Init(),
    [frost25, glide25] = quill4.useState(false),
    [honey25, iris25] = quill4.useState(""),
    [jewel25, knoll25] = quill4.useState(),
    lunar25,
    moss25,
    north25,
    orbit25,
    pine25,
    quest25,
    ridge25,
    storm25,
    tide25,
    unity25,
    vale25;
  {
    let brook25 = Umbra4(eagle25, honey25),
      {
        assignedExperimentCount,
        enabledGateCount,
        gateCount
      } = Violet4(eagle25),
      cliff25 = honey25.trim().length > 0,
      dusk25;
    dusk25 = juniper25 => juniper25.kind === "gate" && juniper25.name === jewel25;
    brook25.find(dusk25);
    lunar25 = Alpha;
    storm25 = "debug-statsig";
    tide25 = "Statsig";
    unity25 = "global";
    vale25 = true;
    orbit25 = "flex flex-col gap-3 py-1.5";
    let elm25 = `${enabledGateCount} / ${gateCount}`,
      fern25 = <Falcon {...{
        label: "Enabled gates",
        value: elm25
      }} />;
    let E = assignedExperimentCount.toString(),
      grove25;
    grove25 = <Falcon {...{
      label: "Assigned experiments",
      value: E
    }} />;
    pine25 = <div className="flex flex-col gap-1">{fern25}{grove25}</div>;
    let hill25;
    hill25 = () => {
      glide25(true);
      mergeCodexCompanions(eagle25.client, "debug_button").finally(() => {
        glide25(false);
      });
    };
    quest25 = <div className="flex border-t-[0.5px] border-token-border pt-3">{<ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        loading: frost25,
        onClick: hill25,
        children: "Force refresh"
      }} />}</div>;
    let isle25;
    isle25 = event => {
      iris25(event.target.value);
    };
    ridge25 = <label className="flex flex-col gap-1 text-xs text-token-description-foreground">{"Search gates or experiments"}<input type="search" value={honey25} onChange={isle25} placeholder="example-gate-name" className="h-8 rounded border border-token-border bg-token-input-background px-2 text-token-foreground outline-none focus:border-token-focus-border" /></label>;
    moss25 = "flex flex-col";
    north25 = cliff25 && brook25.length === 0 ? <div className="py-2 text-xs text-token-description-foreground">{"No matching Statsig entries"}</div> : cliff25 ? brook25.map(item => <Mint2 key={`${item.kind}:${item.name}`} {...{
      entry: item,
      onSelectGate: undefined,
      query: honey25
    }} />) : null;
  }
  let wave25 = <div className={moss25}>{north25}</div>;
  let apex25 = <div className={orbit25}>{pine25}{quest25}{ridge25}{wave25}</div>;
  return <Reef2 {...{
    storageKey: storm25,
    title: tide25,
    variant: unity25,
    unmountChildrenWhenClosed: vale25,
    children: [apex25, null]
  }} />;
}
function Olive4(lagoon25) {
  let {
      entry,
      onSelectGate,
      query
    } = lagoon25,
    meadow25 = entry.kind === "gate" ? entry.enabled ? "Enabled" : "Disabled" : entry.isUserInExperiment === true ? entry.groupName ?? "Assigned" : entry.isUserInExperiment === false ? "Not assigned" : "Unknown",
    nest25 = entry.kind === "gate" ? entry.enabled ? "positive" : "negative" : entry.isUserInExperiment === true ? "positive" : entry.isUserInExperiment === false ? "negative" : "neutral",
    oak25 = Xenon4(entry.name, query);
  let petal25 = undefined;
  let quiet25 = <$f {...{
    label: meadow25,
    tone: nest25
  }} />;
  return <Topaz2 {...{
    title: oak25,
    subtitle: petal25,
    status: quiet25,
    onClick: onSelectGate
  }} />;
}
function $f(rain25) {
  let {
      label,
      tone
    } = rain25,
    seed25 = tone === "positive" && "border-token-success/35 bg-token-success/15 text-token-success",
    trail25 = tone === "negative" && "border-token-danger/35 bg-token-danger/15 text-token-danger",
    urn25 = tone === "neutral" && "border-token-border bg-token-foreground/5 text-token-description-foreground",
    vine25 = IntlProvider("inline-flex min-h-5 items-center rounded border px-2 text-xs", seed25, trail25, urn25);
  return <span className={vine25}>{label}</span>;
}
var prism4,
  quill4,
  reef4,
  sage4 = esmInit(() => {
    prism4 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quill4 = commonJsInit(react(), 1);
    ensureSettingsQueryAtomsInit();
    glide2();
    ensureSkillsPageHelpersInit();
    buildAvatarOverlayAnalyticsPayload();
    violet();
    falcon();
    mint4();
  });
function Topaz4() {
  let [wind25, yarrow25] = zephyr4.useState(false),
    [azure25, birch25] = zephyr4.useState(false),
    canyon25 = {
      hostId: LOCAL_HOST_ID
    };
  let dew25 = {
    params: canyon25,
    queryConfig: {
      enabled: wind25
    }
  };
  let {
      data
    } = SIDEBAR_HIT_TEST_SELECTOR("workspace-root-options", dew25),
    alpha26 = data?.roots ?? [];
  let bravo26 = alpha26,
    copper26 = data?.labels ?? {};
  let delta26 = copper26,
    echo26 = wind25 ? <button type="button" className="rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10" onClick={() => birch25(Ultra4)}>{azure25 ? "Hide dotfiles" : "Show dotfiles"}</button> : null;
  let falcon26 = wind25 ? bravo26.length === 0 ? <div className="text-token-description-foreground">{"No project roots"}</div> : bravo26.map(item => <Ultra2 key={item} {...{
    includeHidden: azure25,
    label: delta26[item] ?? item,
    root: item
  }} />) : null;
  return <Copper {...{
    title: "Project roots",
    storageKey: "debug-workspace-roots",
    onToggle: yarrow25,
    variant: "global",
    actions: echo26,
    children: falcon26
  }} />;
}
function Ultra4(gamma26) {
  return !gamma26;
}
function Vapor4(harbor26) {
  let {
      root,
      label,
      includeHidden
    } = harbor26,
    [indigo26, jade26] = zephyr4.useState(false),
    kite26 = `rotate(${indigo26 ? 0 : -90}deg)`,
    lemon26 = <AppIconSft {...{
      className: "icon-2xs shrink-0 transition-transform duration-basic",
      style: {
        transform: kite26
      }
    }} />;
  let marble26 = <span>{label}</span>;
  let nickel26 = <span className="flex items-center gap-2">{lemon26}{marble26}</span>;
  let onyx26 = () => jade26(Wheat4);
  let pearl26 = <Topaz2 {...{
    title: nickel26,
    subtitle: root,
    onClick: onyx26
  }} />;
  let quartz26 = indigo26 ? <div className="pb-1">{<WorkspaceDirectoryTreeSearch {...{
      hostId: LOCAL_HOST_ID,
      includeHidden,
      root
    }} />}</div> : null;
  return <div className="border-t border-token-border/50 first:border-t-0">{pearl26}{quartz26}</div>;
}
function Wheat4(river26) {
  return !river26;
}
var yarn4,
  zephyr4,
  acorn4,
  bloom4 = esmInit(() => {
    yarn4 = reactCompilerRuntime();
    zephyr4 = commonJsInit(react(), 1);
    AppInitialDj();
    ensureAppIconSftInit();
    ensureAppShellAtomsInit();
    scrollAppActionTargetTo();
    glide2();
    falcon();
  });
function Coral4() {
  let slate26 = appServices.primaryRuntime;
  if (slate26 == null) return null;
  return <Vapor2 {...{
    primaryRuntime: slate26
  }} />;
}
function Drift4(timber26) {
  let {
      primaryRuntime
    } = timber26,
    umbra26 = CodexPluginActionType(appScopeAtom),
    violet26 = useQueryClient(),
    willow26 = AppIconAlt(),
    [xenon26, yellow26] = knoll4.useState(Eagle4),
    [zinc26, amber26] = knoll4.useState("Not run yet"),
    basalt26 = CodexPluginActionResult(setPrimaryRuntimeInstallRelease2),
    cedar26 = () => primaryRuntime.getUpdateStatus();
  let daisy26 = {
    enabled: xenon26,
    queryFn: cedar26,
    queryKey: APP_HOST_UPDATE_STATUS_PATH,
    refetchInterval: north4,
    staleTime: readScrollTop.FIVE_SECONDS
  };
  let {
      data,
      isLoading,
      refetch
    } = useQuery(daisy26),
    ember26 = async olive26 => {
      let {
        release
      } = olive26;
      return await AppInitialAr(willow26), primaryRuntime.runUpdateNow({
        release
      });
    };
  let flint26 = prism26 => {
    amber26(Glide4(prism26));
    violet26.invalidateQueries({
      queryKey: APP_HOST_UPDATE_STATUS_PATH
    });
  };
  let garnet26 = {
    mutationFn: ember26,
    onSuccess: flint26
  };
  let hazel26 = noop(garnet26),
    ivory26 = data?.isRunning === true || hazel26.isPending,
    jasper26 = basalt26 === "latest-alpha",
    kelp26 = quill26 => {
      let reef26 = quill26 ? "latest-alpha" : "latest";
      umbra26.set(setPrimaryRuntimeInstallRelease2, reef26);
      ensureAppActionPayloadSchemasInit.dispatchMessage("set-primary-runtime-install-release", {
        release: reef26
      });
    };
  let lotus26 = kelp26,
    mint26 = xenon26 ? <DropdownMenuPopover {...{
      align: "end",
      triggerButton: <button type="button" className="inline-flex cursor-interaction items-center gap-1.5 rounded px-1.5 py-0.5 text-xs hover:bg-token-foreground/10 disabled:cursor-not-allowed disabled:opacity-50" disabled={ivory26}>{ivory26 ? <VSCODE_EDITOR_ID {...{
          className: "icon-2xs"
        }} /> : null}{"Cron"}{<AppIconSft {...{
          className: "icon-2xs opacity-70"
        }} />}</button>,
      children: <div className="flex min-w-[220px] flex-col gap-0.5">{<DropdownMenu.Title {...{
          children: "Workspace runtime cron"
        }} />}{<DropdownMenu.Item {...{
          disabled: ivory26 || data?.enabled === false,
          onSelect: () => {
            hazel26.mutateAsync({
              release: basalt26
            }).catch(error => {
              amber26("Failed to trigger cron job");
              appActionSidebarProjectRefSchema.error("Failed to trigger workspace runtime cron from debug page", {
                safe: {
                  release: basalt26
                },
                sensitive: {
                  error
                }
              });
            });
          },
          children: "Run now"
        }} />}{<DropdownMenu.Item {...{
          onSelect: () => {
            refetch();
          },
          children: "Refresh status"
        }} />}{<DropdownMenu.Separator {...{}} />}{<DropdownMenu.Title {...{
          children: "Install flow"
        }} />}<div className="flex items-center justify-between gap-3 px-[var(--padding-row-x)] py-[var(--padding-row-y)]"><div className="min-w-0"><div className="truncate text-sm electron:text-base">{"Alpha version"}</div><div className="truncate text-xs text-token-description-foreground">{basalt26}</div></div><AppInitialYC ariaLabel="Use alpha Codex Workspace install flow" checked={jasper26} size="sm" onChange={lotus26} /></div></div>
    }} /> : null;
  let nova26 = xenon26 ? isLoading && data == null ? <div className="text-token-description-foreground">{"Loading workspace runtime status…"}</div> : <div className="flex flex-col py-1.5">{<Falcon {...{
      label: "State",
      value: data?.enabled === true ? "Enabled" : "Disabled"
    }} />}{data?.disabledReason == null ? null : <Falcon {...{
      label: "Disabled",
      value: Honey4(data.disabledReason)
    }} />}{<Falcon {...{
      label: "Next cron",
      value: Frost4(data?.nextRunAt ?? null)
    }} />}{<Falcon {...{
      label: "Startup check",
      value: data?.startupChecked === true ? "Complete" : "Pending"
    }} />}{<Falcon {...{
      label: "Running",
      value: ivory26 ? "Yes" : "No"
    }} />}{<Falcon {...{
      label: "Last trigger",
      value: zinc26
    }} />}</div> : null;
  return <Copper {...{
    title: "Workspace runtime",
    storageKey: moss4,
    onToggle: yellow26,
    variant: "global",
    actions: mint26,
    children: nova26
  }} />;
}
function Eagle4() {
  return Iris4(moss4);
}
function Frost4(sage26) {
  if (sage26 == null) return "Unavailable";
  let topaz26 = new Date(sage26),
    ultra26 = Math.ceil((sage26 - Date.now()) / 1e3);
  if (ultra26 <= 0) return `Due now (${topaz26.toLocaleString()})`;
  if (ultra26 < 60) return `${topaz26.toLocaleString()} (${orbit4.format(ultra26, "second")})`;
  let vapor26 = Math.ceil(ultra26 / 60);
  return vapor26 < 60 ? `${topaz26.toLocaleString()} (${orbit4.format(vapor26, "minute")})` : `${topaz26.toLocaleString()} (${orbit4.format(Math.ceil(vapor26 / 60), "hour")})`;
}
function Glide4(wheat26) {
  switch (wheat26.status) {
    case "already-current":
      return wheat26.bundleVersion == null ? "Already current" : `Already current (${wheat26.bundleVersion})`;
    case "installed":
      return wheat26.bundleVersion == null ? "Install started" : `Installed ${wheat26.bundleVersion}`;
    case "skipped":
      return wheat26.reason == null ? "Skipped" : `Skipped: ${_p(wheat26.reason)}`;
  }
}
function _p(yarn26) {
  switch (yarn26) {
    case "already-running":
      return "already running";
    case "current":
      return "already current";
    case "feature-gate-disabled":
      return "feature gate disabled";
    case "not-local-host":
      return "not local host";
    case "runtime-config-missing":
      return "runtime config missing";
    case "unsupported-windows-version":
      return "unsupported Windows version";
  }
}
