// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/17
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
function Amber2(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Id(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function IsIndeterminate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UseColdNavigate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialAp: any = undefined;
const AppInitialBb: any = undefined;
const AppInitialF: any = undefined;
const AppInitialHb: any = undefined;
const AppInitialJw: any = undefined;
const AppInitialPp: any = undefined;
const AppInitialQf: any = undefined;
const AppInitialXb: any = undefined;
const CodexMobileSetupDialog: any = undefined;
const DeferredTC: any = undefined;
const DeferredUiV2: any = undefined;
const IntlProvider: any = undefined;
const Lemon3: any = undefined;
const codexMicroOnboardingStateIState: any = undefined;
const codexMicroOnboardingStateNState: any = undefined;
const codexMicroOnboardingStateTState: any = undefined;
const deferredGitMp: any = undefined;
const deferredUiRC: any = undefined;
const deferredUiXTStub: any = undefined;
const ensureCodexMobileSetupDialogInit: any = undefined;
const falcon: any = undefined;
const id: any = undefined;
const kelp3: any = undefined;
const newChatSuggestionSourceDebugStateLState: any = undefined;
const newChatSuggestionSourceDebugStateSState: any = undefined;
const violet: any = undefined;

function Vapor3(amber23) {
  return amber23.borderBoxSize ? (Array.isArray(amber23.borderBoxSize) ? amber23.borderBoxSize[0] : amber23.borderBoxSize).blockSize : amber23.contentRect.height;
}
function Wheat3(basalt23) {
  let {
      label,
      language,
      shouldWrapCode = false,
      title,
      value
    } = basalt23,
    cedar23 = <IsIndeterminate {...{
      codeContainerClassName: "max-h-[28rem]",
      content: value,
      language,
      shouldWrapCode: shouldWrapCode,
      title,
      wrapperClassName: "rounded-md"
    }} />;
  return <Amber2 {...{
    label,
    children: cedar23
  }} />;
}
function Yarn3(daisy23) {
  let {
      line
    } = daisy23,
    [ember23, flint23] = coral3.useState(false),
    garnet23 = Zephyr3(line),
    hazel23 = `${line.label} image`,
    ivory23 = garnet23 == null ? <span className="block rounded bg-token-main-surface-primary px-2 py-1 text-token-description-foreground">{"Preparing image preview…"}</span> : <img src={garnet23} alt={hazel23} className="block max-h-48 max-w-full rounded object-contain" referrerPolicy="no-referrer" decoding="async" loading="lazy" fetchPriority="low" draggable={false} />;
  let jasper23 = ivory23,
    kelp23 = garnet23 == null ? "Preparing image preview" : "Open full-size image",
    lotus23 = garnet23 == null ? "Preparing image preview" : "Open full-size image",
    mint23 = <span className="sr-only">{line.mimeType}</span>;
  let nova23 = <button type="button" className="cursor-interaction overflow-hidden rounded-md border border-token-border bg-token-main-surface-primary p-1 focus:ring-1 focus:ring-token-focus-border focus:outline-none disabled:cursor-default" aria-label={kelp23} title={lotus23}>{jasper23}{mint23}</button>;
  let olive23 = nova23,
    prism23 = garnet23 == null ? olive23 : <UseColdNavigate {...{
      src: garnet23,
      alt: hazel23,
      open: ember23,
      onOpenChange: flint23,
      imageDecoding: "async",
      imageDraggable: false,
      imageFetchPriority: "low",
      imageLoading: "lazy",
      imageReferrerPolicy: "no-referrer",
      triggerContent: olive23
    }} />;
  return <Amber2 {...{
    label: line.label,
    children: prism23
  }} />;
}
function Zephyr3(quill23) {
  let [reef23, sage23] = coral3.useState(null),
    topaz23,
    ultra23;
  return topaz23 = () => {
    sage23(null);
    let vapor23 = false;
    return Acorn3(() => {
      vapor23 || sage23(quill23.src ?? `data:${quill23.mimeType};base64,${quill23.data}`);
    }), () => {
      vapor23 = true;
    };
  }, ultra23 = [quill23.data, quill23.mimeType, quill23.src], coral3.useEffect(topaz23, ultra23), reef23;
}
function Acorn3(wheat23) {
  iris3.push(wheat23);
  Bloom3();
}
function Bloom3() {
  if (jewel3) return;
  jewel3 = true;
  let yarn23 = () => {
    jewel3 = false;
    let zephyr23 = iris3.shift();
    zephyr23 != null && (zephyr23(), Bloom3());
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(yarn23, {
      timeout: 500
    });
    return;
  }
  globalThis.setTimeout(yarn23, 0);
}
var _d,
  coral3,
  drift3,
  eagle3,
  frost3,
  glide3,
  honey3,
  iris3,
  jewel3,
  knoll3,
  lunar3,
  moss3 = esmInit(() => {
    _d = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    coral3 = commonJsInit(react(), 1);
    DeferredUiV2();
    clampZoomPercent();
    filterOpenTargets();
    initThreadVirtualizer();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    ensureDropdownMenuPopoverInit();
    violet();
    falcon();
    kelp3();
    eagle3 = [];
    frost3 = 56;
    glide3 = 8;
    honey3 = Math.ceil(900 / frost3) + glide3;
    iris3 = [];
    jewel3 = false;
    knoll3 = deferredUiXTStub(appScopeAtom, ({
      get
    }) => Lemon3(get(bindZ2BindableHelper, LOCAL_HOST_ID).slice().reverse().flatMap(item => (get(MCP_SERVERS_STATUS_PATH, item) ?? eagle3).map(_item => ({
      conversationId: item,
      items: _item.items,
      turnId: _item.turnId
    })))));
    lunar3 = coral3.memo(function (acorn23) {
      let {
          entry,
          measureLineRef
        } = acorn23,
        bloom23 = <Id {...{
          line: entry.line
        }} />;
      return <div ref={measureLineRef} data-debug-line-key={entry.turnKey}>{bloom23}</div>;
    });
  });
function North3() {
  let coral23 = CodexPluginActionType(appScopeAtom),
    drift23 = CodexPluginActionResult(codexMicroHasEverBeenDetected),
    eagle23 = CodexPluginActionResult(codexMicroOnboardingStateTState) ?? "loading",
    frost23 = drift23 === true ? "yes" : "no",
    glide23 = <div className="text-token-description-foreground">{<MemoizedFormattedMessage {...{
        id: "codexMicro.onboarding.debugStatus",
        defaultMessage: "Codex Micro NUX: {onboardingState, select, loading {loading} idle {idle} pending {pending} complete {complete} other {loading}} · detected: {hasEverBeenDetected, select, yes {yes} no {no} other {no}}",
        description: "Debug status for the Codex Micro onboarding flow",
        values: {
          onboardingState: eagle23,
          hasEverBeenDetected: frost23
        }
      }} />}</div>;
  let honey23 = () => {
    codexMicroOnboardingStateIState(coral23);
  };
  let iris23 = <MemoizedFormattedMessage {...{
    id: "codexMicro.onboarding.resetDebugButton",
    defaultMessage: "Reset NUX",
    description: "Button that resets the Codex Micro onboarding flow for debugging"
  }} />;
  let jewel23 = <button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={honey23}>{iris23}</button>;
  return <div className="flex items-center gap-2 text-xs">{glide23}{jewel23}</div>;
}
var orbit3,
  pine3,
  quest3 = esmInit(() => {
    orbit3 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureAppScopeInit();
    AppInitialJw();
    codexMicroOnboardingStateNState();
  });
function Ridge3(knoll23) {
  let {
      onClose,
      setupInProgress,
      showStartSetupError,
      step
    } = knoll23,
    lunar23 = moss23 => {
      moss23 || onClose();
    };
  return <CodexMobileSetupDialog {...{
    open: true,
    showStartSetupError,
    setupInProgress,
    step,
    onOpenChange: lunar23,
    onSkip: onClose,
    onStartSetup: Storm3
  }} />;
}
function Storm3() {}
var tide3,
  unity3,
  vale3 = esmInit(() => {
    tide3 = reactCompilerRuntime();
    ensureCodexMobileSetupDialogInit();
  });
function Wave3() {
  let north23 = CodexPluginActionType(appScopeAtom),
    orbit23 = <div className="text-token-description-foreground">{<MemoizedFormattedMessage {...{
        id: "realtimeVoice.onboarding.debugLabel",
        defaultMessage: "Voice chat NUX",
        description: "Label for the realtime voice onboarding debug control"
      }} />}</div>;
  let pine23 = () => {
    deferredUiRC(north23);
  };
  let quest23 = <MemoizedFormattedMessage {...{
    id: "realtimeVoice.onboarding.debugReset",
    defaultMessage: "Reset NUX",
    description: "Button that resets realtime voice onboarding for debugging"
  }} />;
  return <div className="flex items-center gap-2 text-xs">{orbit23}<button className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5" onClick={pine23} type="button">{quest23}</button></div>;
}
var apex3,
  brook3,
  cliff3 = esmInit(() => {
    apex3 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureAppScopeInit();
    DeferredTC();
  });
function Dusk3(ridge23) {
  AppInitialF(ridge23);
  AppInitialBb(ridge23);
}
var elm3 = esmInit(() => {
  deferredUiB();
  AppInitialQf();
});
function Fern3(storm23) {
  let {
      source,
      onSourceChange,
      roles
    } = storm23,
    tide23 = CodexPluginActionType(appScopeAtom),
    unity23 = CodexPluginActionResult(AppInitialXb),
    vale23 = unity23?.mode ?? "auto",
    wave23 = unity23?.mode === "enabled" ? unity23.accountState : null,
    apex23;
  {
    let brook23 = Isle3(wave23),
      cliff23 = petal3.find(item => item.value === brook23) ?? petal3[0],
      dusk23 = wave23?.items.some(Grove3);
    let elm23 = dusk23 === true,
      fern23 = <span className="text-xs text-token-description-foreground">{"New Chat suggestion source:"}</span>;
    let grove23 = meadow3.map(item => <button key={item.label} type="button" aria-pressed={source === item.value} className={IntlProvider("cursor-interaction rounded border px-3 py-1 text-xs", source === item.value ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
      onSourceChange(item.value);
    }}>{item.label}</button>);
    let hill23 = <span aria-hidden={true} className="text-xs text-token-description-foreground">{"|"}</span>;
    let isle23 = <button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
      newChatSuggestionSourceDebugStateLState(tide23);
    }}>{"Reset"}</button>;
    let juniper23 = <div aria-label="New Chat suggestion source" className="flex flex-wrap items-center gap-2" role="group">{fern23}{grove23}{hill23}{isle23}</div>;
    let lagoon23 = <span className="text-xs text-token-description-foreground">{"Onboarding checklist:"}</span>;
    let meadow23 = nest3.map(item => <button key={item.value} type="button" aria-pressed={vale23 === item.value} className={IntlProvider("cursor-interaction rounded border px-3 py-1 text-xs", vale23 === item.value ? "border-token-focus-border text-token-foreground" : "border-token-border text-token-description-foreground hover:bg-token-foreground/5")} onClick={() => {
      let quiet23;
      bb54: switch (item.value) {
        case "auto":
          quiet23 = null;
          break bb54;
        case "disabled":
          quiet23 = {
            mode: "disabled"
          };
          break bb54;
        case "enabled":
          quiet23 = Hill3({
            completedConversationalOnboardingTaskId: null,
            hasCompletedClaudeImport: false,
            roles
          });
      }
      tide23.set(AppInitialXb, quiet23);
    }}>{item.label}</button>);
    let nest23 = <span aria-hidden={true} className="text-xs text-token-description-foreground">{"|"}</span>;
    let oak23 = <button type="button" className="cursor-interaction rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5" onClick={() => {
      Dusk3(tide23);
      unity23?.mode === "enabled" && tide23.set(AppInitialXb, Hill3({
        completedConversationalOnboardingTaskId: null,
        hasCompletedClaudeImport: false,
        roles
      }));
    }}>{"Reset"}</button>;
    let petal23;
    petal23 = <div aria-label="Onboarding checklist" className="flex flex-wrap items-center gap-2" role="group">{lagoon23}{meadow23}{nest23}{oak23}</div>;
    apex23 = <div className="flex flex-col items-start gap-2">{juniper23}{petal23}{wave23 == null ? null : <div className="flex items-center gap-4"><div aria-label="Conversational Task" className="flex items-center gap-2" role="group"><span className="text-xs text-token-description-foreground">{"Conversational Task:"}</span>{<DropdownMenuPopover {...{
            contentWidth: "sm",
            triggerButton: <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5">{cliff23.label}{<AppIconSft {...{
                className: "icon-2xs opacity-70"
              }} />}</button>,
            children: petal3.map(item => <DropdownMenu.Item key={item.label} {...{
              "aria-checked": brook23 === item.value,
              role: "menuitemradio",
              RightIcon: brook23 === item.value ? AppIconZlt : undefined,
              onSelect: () => {
                tide23.set(AppInitialXb, Hill3({
                  completedConversationalOnboardingTaskId: item.value,
                  hasCompletedClaudeImport: elm23,
                  roles
                }));
              },
              children: item.label
            }} />)
          }} />}</div><div aria-label="Import Claude" className="flex items-center gap-2" role="group"><span className="text-xs text-token-description-foreground">{"Import Claude:"}</span>{<DropdownMenuPopover {...{
            contentWidth: "xs",
            triggerButton: <button type="button" className="inline-flex cursor-interaction items-center gap-1 rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5">{elm23 ? "Completed" : "Skipped"}{<AppIconSft {...{
                className: "icon-2xs opacity-70"
              }} />}</button>,
            children: oak3.map(item => <DropdownMenu.Item key={item.label} {...{
              "aria-checked": elm23 === item.value,
              role: "menuitemradio",
              RightIcon: elm23 === item.value ? AppIconZlt : undefined,
              onSelect: () => {
                tide23.set(AppInitialXb, Hill3({
                  completedConversationalOnboardingTaskId: brook23,
                  hasCompletedClaudeImport: item.value,
                  roles
                }));
              },
              children: item.label
            }} />)
          }} />}</div></div>}</div>;
  }
  return apex23;
}
function Grove3(rain23) {
  return rain23.id === "claude_import" && rain23.completed;
}
function Hill3({
  completedConversationalOnboardingTaskId,
  hasCompletedClaudeImport,
  roles
}) {
  let {
    itemIds
  } = AppInitialPp({
    canEnableNotifications: true,
    generalAssignment: null,
    hideGoogleWorkspaceItems: false,
    mailProvider: "google",
    plan: null,
    representativeRole: collectUniqueMappedPresenceEntries({
      roleSelectionSkipped: false,
      roles
    }),
    roleAssignment: null,
    roles,
    taskDefinitions: ensureComposerEsm_Sp_Init
  });
  return {
    mode: "enabled",
    accountState: AppInitialHb({
      completedConversationalOnboardingTask: completedConversationalOnboardingTaskId == null ? null : {
        id: completedConversationalOnboardingTaskId
      },
      hasCompletedClaudeImport,
      sidebarItems: itemIds.map(item => ({
        id: item
      }))
    })
  };
}
function Isle3(seed23) {
  if (seed23 == null) return null;
  for (let trail23 of seed23.items) if (trail23.completed && resolveOnboardingItemSource(trail23) === "conversational_onboarding") return trail23.id;
  return null;
}
var juniper3,
  lagoon3,
  meadow3,
  nest3,
  oak3,
  petal3,
  quiet3 = esmInit(() => {
    juniper3 = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    newChatSuggestionSourceDebugStateSState();
    ensureDropdownMenuInit();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    ensurePersonalizationCInit();
    ensureAppScopeInit();
    deferredGitMp();
    codex3();
    deferredUiB();
    AppInitialAp();
    elm3();
    meadow3 = [{
      label: "Auto",
      value: null
    }, {
      label: "Curated",
      value: "curated"
    }, {
      label: "Generated",
      value: "generated"
    }];
    nest3 = [{
      label: "Auto",
      value: "auto"
    }, {
      label: "Disabled",
      value: "disabled"
    }, {
      label: "Enabled",
      value: "enabled"
    }];
    oak3 = [{
      label: "Skipped",
      value: false
    }, {
      label: "Completed",
      value: true
    }];
    petal3 = [{
      label: "Skipped",
      value: null
    }, {
      label: "Leave a note on my Desktop",
      value: "desktop_note"
    }, {
      label: "Turn this spreadsheet into a chart",
      value: "csv_chart"
    }, {
      label: "Schedule a focus block this week",
      value: "hold_next_free_hour"
    }, {
      label: "Send a message to myself",
      value: "send_message_to_self"
    }];
  });
