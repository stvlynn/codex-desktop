// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/17
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
function Amber1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Basalt1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Cedar1(props: {
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
function Zinc1(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialYC: any = undefined;
const IntlProvider: any = undefined;
const bravo3: any = undefined;
const delta3: any = undefined;
const echo3: any = undefined;
const falcon: any = undefined;
const falcon3: any = undefined;
const gamma3: any = undefined;
const harbor3: any = undefined;
const indigo3: any = undefined;
const jade3: any = undefined;
const readLoginRouteQuerySnapshotStub: any = undefined;
const violet: any = undefined;

function Lunar2() {
  let lotus20 = CodexPluginActionType(appScopeAtom),
    [mint20, nova20] = north2.useState(null),
    {
      data,
      isLoading
    } = ensurePersonalizationK0Init(DesktopPersistenceKeys.GLOBAL_DICTATION_FORCE_LOCK_DEBUG_ENABLED),
    olive20 = data === true,
    prism20 = olive20 ? "Force claiming" : "Off",
    quill20 = <div className="flex flex-col py-1.5">{<Falcon {...{
        label: "Lock override",
        value: prism20
      }} />}</div>;
  let reef20 = <div className="text-xs text-token-description-foreground">{"Force this dev app to own the global dictation window lock."}</div>;
  let sage20 = vapor20 => {
    nova20(null);
    readLoginRouteQuerySnapshotStub(lotus20, DesktopPersistenceKeys.GLOBAL_DICTATION_FORCE_LOCK_DEBUG_ENABLED, vapor20).then(() => {
      ensureAppActionPayloadSchemasInit.dispatchMessage("global-dictation-force-lock-changed", {
        enabled: vapor20
      });
    }).catch(error => {
      nova20(error instanceof Error ? error.message : "Failed to update global dictation lock override.");
    });
  };
  let topaz20 = <div className="flex items-center justify-between gap-3 py-1.5">{reef20}<AppInitialYC ariaLabel="Force this app to own global dictation" checked={olive20} disabled={isLoading} onChange={sage20} /></div>;
  let ultra20 = mint20 ? <div className="py-1.5 text-xs text-token-error-foreground">{mint20}</div> : null;
  return <Copper {...{
    title: "Global dictation",
    storageKey: "debug-global-dictation-lock-override",
    variant: "global",
    children: [quill20, topaz20, ultra20]
  }} />;
}
var moss2,
  north2,
  orbit2,
  pine2 = esmInit(() => {
    moss2 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    north2 = commonJsInit(react(), 1);
    AppInitialBC();
    ensurePersonalizationJutInit();
    ensurePersonalizationG0Init();
    findSidebarSectionElement();
    ensureAppScopeInit();
    violet();
    falcon();
  });
function Quest2() {
  let wheat20 = useQueryClient(),
    [yarn20, zephyr20] = tide2.useState(null),
    {
      data
    } = CodexPluginActionResult(ensureGpuTearingDebugSettingsInit),
    acorn20 = {
      mutationFn: Ridge2,
      onSuccess: unity20 => (wheat20.setQueryData(toggleSortedIdList, unity20.state), unity20)
    };
  let bloom20 = noop(acorn20);
  if (data == null || data.supported === false || data.isDevMode === false) return null;
  let coral20 = data.configuredHotkey == null ? "Off" : moveArrayItem(data.configuredHotkey);
  let drift20 = coral20,
    eagle20 = data.isGateEnabled ? "Enabled" : "Disabled",
    frost20 = data.isActive ? "Active" : "Inactive",
    glide20 = data.isDevOverrideEnabled ? "Enabled" : "Disabled",
    honey20 = data.configuredHotkey != null && !bloom20.isPending,
    iris20 = <Falcon {...{
      label: "Configured hotkey",
      value: drift20
    }} />;
  let jewel20 = <Falcon {...{
    label: "Gate",
    value: eagle20
  }} />;
  let knoll20 = <Falcon {...{
    label: "Runtime",
    value: frost20
  }} />;
  let lunar20 = <Falcon {...{
    label: "Dev override",
    value: glide20
  }} />;
  let moss20 = <div className="flex flex-col py-1.5">{iris20}{jewel20}{knoll20}{lunar20}</div>;
  let north20 = !honey20,
    orbit20 = () => {
      zephyr20(null);
      bloom20.mutateAsync({
        enabled: !data.isDevOverrideEnabled
      }).then(value => {
        value.success || zephyr20(value.error);
      }).catch(error => {
        zephyr20(error instanceof Error ? error.message : "Failed to update dev override.");
      });
    };
  let pine20 = data.isDevOverrideEnabled ? "Disable dev override" : "Enable hotkey in dev",
    quest20 = <button type="button" className="inline-flex w-fit items-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50" disabled={north20} onClick={orbit20}>{pine20}</button>;
  let ridge20 = data.configuredHotkey == null ? <div className="text-xs text-token-description-foreground">{"Set a Popout Window hotkey in Settings to use dev override."}</div> : null;
  let storm20 = yarn20 ? <div className="text-xs text-token-error-foreground">{yarn20}</div> : null;
  let tide20 = <div className="flex flex-col gap-2 py-1.5">{quest20}{ridge20}{storm20}</div>;
  return <Copper {...{
    title: "Popout Window hotkey",
    storageKey: "debug-hotkey-window-hotkey",
    variant: "global",
    children: [moss20, tide20]
  }} />;
}
async function Ridge2(vale20) {
  let {
      enabled
    } = vale20,
    wave20 = appServices.hotkeyWindowHotkeys;
  if (wave20 == null) throw Error("Popout Window hotkeys are unavailable");
  return wave20.setDevOverrideEnabled(enabled);
}
var storm2,
  tide2,
  unity2,
  vale2 = esmInit(() => {
    storm2 = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    tide2 = commonJsInit(react(), 1);
    usePlatformAwareFeatureGate();
    ensureContextMenuProviderInit();
    ensureDynamicScriptLoadInit();
    violet();
    falcon();
  });
function Wave2() {
  return <Copper {...{
    storageKey: delta3,
    title: "Maitai",
    variant: "global",
    unmountChildrenWhenClosed: true,
    children: <Zinc1 {...{}} />
  }} />;
}
function Apex2() {
  let apex20 = CodexPluginActionType(appScopeAtom),
    brook20 = isSvgHyphenatedTag(apex20.node.store),
    [cliff20, dusk20] = bravo3.useState(""),
    [elm20, fern20] = bravo3.useState(""),
    [grove20, hill20] = bravo3.useState("all"),
    [isle20, juniper20] = bravo3.useState(0),
    [lagoon20, meadow20] = bravo3.useState(falcon3),
    nest20,
    oak20,
    petal20,
    quiet20,
    rain20;
  {
    let trail20 = cliff20.trim().toLowerCase(),
      urn20 = elm20.trim().toLowerCase();
    rain20 = brook20.filter(item => Rain2(item).includes(trail20) && Seed2(item).includes(urn20) && Petal2(item, grove20));
    nest20 = rain20.slice(0, lagoon20);
    let vine20 = Meadow2(nest20);
    oak20 = "flex flex-col gap-3 py-3";
    let wind20 = event => {
      dusk20(event.currentTarget.value);
      meadow20(falcon3);
    };
    let yarrow20 = <input type="search" value={cliff20} placeholder="Filter" className="h-8 min-w-0 rounded border border-token-border bg-token-input-background px-2 text-xs text-token-foreground outline-none focus:border-token-focus-border" onChange={wind20} />;
    let azure20 = event => {
      fern20(event.currentTarget.value);
      meadow20(falcon3);
    };
    let birch20 = <input type="search" value={elm20} placeholder="Filter family keys" className="h-8 min-w-0 rounded border border-token-border bg-token-input-background px-2 text-xs text-token-foreground outline-none focus:border-token-focus-border" onChange={azure20} />;
    let canyon20 = Quiet2(grove20);
    let dew20 = <AppIconSft {...{
      className: "icon-2xs opacity-70"
    }} />;
    let alpha21 = <button type="button" className="inline-flex h-8 cursor-interaction items-center gap-1.5 rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]">{canyon20}{dew20}</button>;
    let bravo21 = <div className="flex min-w-[140px] flex-col gap-0.5">{echo3.map(item => <DropdownMenu.Item key={item} {...{
        onSelect: () => {
          hill20(item);
          meadow20(falcon3);
        },
        children: Quiet2(item)
      }} />)}</div>;
    let copper21 = <DropdownMenuPopover {...{
      align: "end",
      triggerButton: alpha21,
      children: bravo21
    }} />;
    let delta21;
    delta21 = <button type="button" className="h-8 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]" onClick={() => {
      juniper20(Elm2);
    }}>{"Refresh"}</button>;
    petal20 = <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto] gap-2">{yarrow20}{birch20}{copper21}{delta21}</div>;
    quiet20 = vine20.length === 0 ? <div className="rounded border border-token-border bg-token-foreground/[0.025] px-3 py-4 text-xs text-token-description-foreground">{"No matching Maitai values"}</div> : <div className="flex flex-col gap-2">{vine20.map(item => item.isFamily ? <Amber1 key={item.id} {...{
        group: item,
        refreshVersion: isle20,
        store: apex20.node.store,
        onValueChanged: () => {
          juniper20(Dusk2);
        }
      }} /> : <Basalt1 key={item.id} {...{
        entry: item.entries[0],
        refreshVersion: isle20,
        store: apex20.node.store,
        onValueChanged: () => {
          juniper20(Cliff2);
        }
      }} />)}</div>;
  }
  let seed20 = nest20.length < rain20.length ? <button type="button" className="h-8 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]" onClick={() => {
    meadow20(Brook2);
  }}>{"Show 50 more"}</button> : null;
  return <div className={oak20}>{petal20}{quiet20}{seed20}</div>;
}
function Brook2(echo21) {
  return echo21 + falcon3;
}
function Cliff2(falcon21) {
  return falcon21 + 1;
}
function Dusk2(gamma21) {
  return gamma21 + 1;
}
function Elm2(harbor21) {
  return harbor21 + 1;
}
function Fern2(indigo21) {
  let {
      group,
      refreshVersion,
      store,
      onValueChanged
    } = indigo21,
    [jade21, kite21] = bravo3.useState(false),
    lemon21 = () => {
      kite21(Grove2);
    };
  let marble21 = `rotate(${jade21 ? 0 : -90}deg)`,
    nickel21 = <AppIconSft {...{
      className: "icon-2xs shrink-0 transition-transform duration-basic",
      style: {
        transform: marble21
      }
    }} />;
  let onyx21 = <span className="truncate font-mono text-xs text-token-foreground">{group.label}</span>;
  let pearl21 = <span className="ml-auto rounded bg-token-foreground/10 px-1.5 py-0.5 text-[11px] text-token-description-foreground uppercase">{"family"}</span>;
  let quartz21 = <header className="sticky top-0 z-10 rounded-t bg-token-dropdown-background"><button type="button" aria-expanded={jade21} className="flex w-full cursor-interaction items-center gap-2 rounded-t px-3 py-2 text-left hover:bg-token-foreground/5" onClick={lemon21}>{nickel21}{onyx21}{pearl21}</button></header>;
  let river21 = jade21 ? <div className="flex flex-col divide-y divide-token-border border-t border-token-border">{group.entries.map(item => <Basalt1 key={item.id} {...{
      entry: item,
      isGrouped: true,
      refreshVersion,
      store,
      onValueChanged
    }} />)}</div> : null;
  return <section className="rounded border border-token-border bg-token-foreground/[0.025]">{quartz21}{river21}</section>;
}
function Grove2(slate21) {
  return !slate21;
}
function Hill2(timber21) {
  let {
      entry,
      isGrouped = false,
      refreshVersion,
      store,
      onValueChanged
    } = timber21,
    umbra21 = Trail2(store, entry, refreshVersion),
    [violet21, willow21] = bravo3.useState(false),
    [xenon21, yellow21] = bravo3.useState(false),
    zinc21 = entry.writeValue != null && typeof umbra21 == "boolean",
    amber21 = entry.writeValue != null && !zinc21 && Canyon2(umbra21),
    basalt21 = !isGrouped && "rounded border border-token-border bg-token-foreground/[0.025]",
    cedar21 = IntlProvider("flex flex-col", basalt21);
  let daisy21 = () => {
    let mint21 = !violet21;
    willow21(mint21);
    mint21 || yellow21(false);
  };
  let ember21 = `rotate(${violet21 ? 0 : -90}deg)`,
    flint21 = <AppIconSft {...{
      className: "icon-2xs shrink-0 transition-transform duration-basic",
      style: {
        transform: ember21
      }
    }} />;
  let garnet21 = isGrouped ? Urn2(entry.familyKey) : entry.label;
  let hazel21 = <span className="truncate font-mono text-xs text-token-foreground">{garnet21}</span>;
  let ivory21 = Oak2(entry);
  let jasper21 = <span className="ml-auto rounded bg-token-foreground/10 px-1.5 py-0.5 text-[11px] text-token-description-foreground uppercase">{ivory21}</span>;
  let kelp21 = <button type="button" aria-expanded={violet21} className="flex min-w-0 cursor-interaction items-center gap-2 px-3 py-2 text-left hover:bg-token-foreground/5" onClick={daisy21}>{flint21}{hazel21}{jasper21}</button>;
  let lotus21 = violet21 ? <div className="flex flex-col gap-2 border-t border-token-border px-3 py-2"><div className="flex items-center justify-between gap-3"><div className="truncate text-xs text-token-description-foreground">{entry.scopeName}{" /"}{" "}{Urn2(entry.scopeKey)}</div>{zinc21 ? <AppInitialYC ariaLabel={`Set ${entry.label}`} checked={umbra21} size="sm" onChange={nova21 => {
        entry.writeValue?.(nova21);
        onValueChanged();
      }} /> : amber21 ? <button type="button" className="h-7 shrink-0 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]" onClick={() => {
        yellow21(Isle2);
      }}>{xenon21 ? "Cancel" : "Edit"}</button> : null}</div>{<Cedar1 {...{
      value: umbra21
    }} />}{xenon21 && amber21 ? <$l {...{
      entry,
      value: umbra21,
      onCancel: () => {
        yellow21(false);
      },
      onSave: () => {
        yellow21(false);
        onValueChanged();
      }
    }} /> : null}</div> : null;
  return <div className={cedar21}>{kelp21}{lotus21}</div>;
}
function Isle2(olive21) {
  return !olive21;
}
function Juniper2(prism21) {
  let {
      value
    } = prism21,
    [quill21, reef21] = bravo3.useState(false),
    sage21 = Wind2(value);
  let topaz21 = sage21,
    ultra21 = quill21 ? Vine2(value) : topaz21.text;
  let vapor21 = ultra21,
    wheat21 = value instanceof Error ? "text-token-charts-red" : "text-token-foreground",
    yarn21 = IntlProvider("w-full min-w-0 overflow-x-auto font-mono text-xs leading-relaxed whitespace-pre-wrap break-words", wheat21);
  let zephyr21 = <pre className={yarn21}>{vapor21}</pre>;
  let acorn21 = topaz21.truncated ? <button type="button" aria-expanded={quill21} className="cursor-interaction text-xs text-token-description-foreground hover:text-token-foreground" onClick={() => {
    reef21(Lagoon2);
  }}>{quill21 ? "Show less" : "Show more"}</button> : null;
  return <div className="flex min-w-0 flex-col items-start gap-1">{zephyr21}{acorn21}</div>;
}
function Lagoon2(bloom21) {
  return !bloom21;
}
function $l(coral21) {
  let {
      entry,
      value,
      onCancel,
      onSave
    } = coral21,
    drift21 = Vine2(value);
  let [eagle21, frost21] = bravo3.useState(drift21),
    [glide21, honey21] = bravo3.useState(null),
    iris21 = event => {
      frost21(event.currentTarget.value);
      honey21(null);
    };
  let jewel21 = <textarea className="min-h-24 resize-y rounded border border-token-border bg-token-input-background p-2 font-mono text-xs text-token-foreground outline-none focus:border-token-focus-border" spellCheck={false} value={eagle21} onChange={iris21} />;
  let knoll21 = glide21 == null ? null : <div className="text-xs text-token-charts-red">{glide21}</div>;
  let lunar21 = <button type="button" className="h-7 cursor-interaction rounded border border-token-border px-2 text-xs text-token-foreground hover:bg-token-foreground/5 active:scale-[0.98]" onClick={() => {
    try {
      entry.writeValue?.(Birch2(eagle21));
      onSave();
    } catch (orbit21) {
      let pine21 = orbit21;
      honey21(pine21 instanceof Error ? pine21.message : String(pine21));
    }
  }}>{"Save value"}</button>;
  let moss21 = <button type="button" className="h-7 cursor-interaction rounded px-2 text-xs text-token-description-foreground hover:bg-token-foreground/5 hover:text-token-foreground active:scale-[0.98]" onClick={onCancel}>{"Cancel"}</button>;
  let north21 = <div className="flex items-center gap-2">{lunar21}{moss21}</div>;
  return <div className="flex flex-col gap-2 border-t border-token-border pt-2">{jewel21}{knoll21}{north21}</div>;
}
function Meadow2(quest21) {
  let ridge21 = new Map(),
    storm21 = [];
  for (let tide21 of quest21) {
    if (!Nest2(tide21)) {
      storm21.push({
        entries: [tide21],
        id: `entry:${tide21.id}`,
        isFamily: false,
        label: tide21.label
      });
      continue;
    }
    let unity21 = ridge21.get(tide21.label);
    if (unity21 != null) {
      unity21.entries.push(tide21);
      continue;
    }
    let vale21 = {
      entries: [tide21],
      id: `family:${tide21.label}`,
      isFamily: true,
      label: tide21.label
    };
    ridge21.set(tide21.label, vale21);
    storm21.push(vale21);
  }
  return storm21;
}
function Nest2(wave21) {
  return wave21.kind === "family-derived" || wave21.kind === "family-signal";
}
function Oak2(apex21) {
  switch (apex21.kind) {
    case "derived":
    case "family-derived":
      return "derived";
    case "mutation":
      return "mutation";
    case "query":
      return "query";
    case "signal":
    case "family-signal":
      return "signal";
  }
}
function Petal2(brook21, cliff21) {
  return cliff21 === "all" ? true : cliff21 === "family" ? Nest2(brook21) : !Nest2(brook21) && Oak2(brook21) === cliff21;
}
function Quiet2(dusk21) {
  switch (dusk21) {
    case "all":
      return "All types";
    case "derived":
      return "Derived";
    case "family":
      return "Family";
    case "mutation":
      return "Mutation";
    case "query":
      return "Query";
    case "signal":
      return "Signal";
  }
}
function Rain2(elm21) {
  return [elm21.kind, elm21.scopeName, String(elm21.scopeKey), elm21.label].join(" ").toLowerCase();
}
function Seed2(fern21) {
  return Nest2(fern21) ? Vine2(fern21.familyKey).toLowerCase() : "";
}
function Trail2(grove21, hill21, isle21) {
  try {
    return grove21.get(hill21.atom);
  } catch (juniper21) {
    return juniper21;
  }
}
function Urn2(lagoon21) {
  return typeof lagoon21 == "string" ? lagoon21 : Vine2(lagoon21).replaceAll(/\s+/g, " ");
}
function Vine2(meadow21) {
  if (meadow21 instanceof Error) return `${meadow21.name}: ${meadow21.message}`;
  if (meadow21 === undefined) return "undefined";
  try {
    return JSON.stringify(meadow21, Alpha3(), 2) ?? Object.prototype.toString.call(meadow21);
  } catch {
    return Object.prototype.toString.call(meadow21);
  }
}
function Wind2(nest21) {
  let oak21 = {
      truncated: false
    },
    petal21 = Yarrow2(nest21, oak21, 0),
    quiet21 = typeof petal21 == "string" && nest21 instanceof Error ? petal21 : JSON.stringify(petal21, null, 2) ?? String(petal21),
    rain21 = quiet21.split("\n");
  return rain21.length > indigo3 && (oak21.truncated = true), {
    text: rain21.length > indigo3 ? `${rain21.slice(0, indigo3).join("\n")}\n…` : quiet21,
    truncated: oak21.truncated
  };
}
function Yarrow2(seed21, trail21, urn21) {
  if (seed21 instanceof Error) return `${seed21.name}: ${seed21.message}`;
  if (typeof seed21 == "function") return `[Function ${seed21.name || "anonymous"}]`;
  if (typeof seed21 == "bigint") return `${seed21}n`;
  if (typeof seed21 == "string") return seed21.length <= jade3 ? seed21 : (trail21.truncated = true, `${seed21.slice(0, jade3)}…`);
  if (typeof seed21 != "object" || !seed21) return seed21;
  if (urn21 >= gamma3) return trail21.truncated = true, Array.isArray(seed21) ? `[Array(${seed21.length})]` : `[${seed21.constructor?.name ?? "Object"}]`;
  if (seed21 instanceof Map) return Azure2([...seed21.entries()], trail21, ([yarrow21, azure21]) => [Yarrow2(yarrow21, trail21, urn21 + 1), Yarrow2(azure21, trail21, urn21 + 1)]);
  if (seed21 instanceof Set) return Azure2([...seed21], trail21, birch21 => Yarrow2(birch21, trail21, urn21 + 1));
  if (Array.isArray(seed21)) return Azure2(seed21, trail21, canyon21 => Yarrow2(canyon21, trail21, urn21 + 1));
  let vine21 = Object.entries(seed21),
    wind21 = vine21.slice(0, harbor3).map(([dew21, alpha22]) => [dew21, Yarrow2(alpha22, trail21, urn21 + 1)]);
  return vine21.length > harbor3 && (trail21.truncated = true, wind21.push(["…", `${vine21.length - harbor3} more`])), Object.fromEntries(wind21);
}
function Azure2(bravo22, copper22, delta22) {
  let echo22 = bravo22.slice(0, harbor3).map(item => delta22(item));
  return bravo22.length > harbor3 && (copper22.truncated = true, echo22.push(`${bravo22.length - harbor3} more`)), echo22;
}
function Birch2(falcon22) {
  if (falcon22.trim() !== "undefined") return JSON.parse(falcon22);
}
function Canyon2(gamma22) {
  return gamma22 == null || typeof gamma22 == "boolean" || typeof gamma22 == "string" ? true : typeof gamma22 == "number" ? Number.isFinite(gamma22) : Array.isArray(gamma22) ? gamma22.every(Canyon2) : Dew2(gamma22) ? Object.values(gamma22).every(Canyon2) : false;
}
function Dew2(harbor22) {
  let indigo22 = Object.getPrototypeOf(harbor22);
  return indigo22 === Object.prototype || indigo22 == null;
}
function Alpha3() {
  let jade22 = new WeakSet();
  return (kite22, lemon22) => typeof lemon22 == "function" ? `[Function ${lemon22.name || "anonymous"}]` : typeof lemon22 == "bigint" ? `${lemon22}n` : typeof lemon22 != "object" || !lemon22 ? lemon22 : jade22.has(lemon22) ? "[Circular]" : (jade22.add(lemon22), lemon22 instanceof Map ? Object.fromEntries(lemon22) : lemon22 instanceof Set ? [...lemon22] : lemon22);
}
