// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, renamedId→ComposerUtilityBarHelper1, renamedId→ComposerUtilityBarHelper2, renamedId→ComposerUtilityBarHelper4, renamedId→ComposerUtilityBarHelper5, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, localRemoteDropdownR→LocalRemoteDropdownR, localRemoteDropdownT→LocalRemoteDropdownT, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 1/1
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { hasLoadedOldestItems } from "../../conversation/has-loaded-oldest-items";
import { localConversationIdFromSurfaceValue } from "../../conversation/local-conversation-id-from-surface-value";
import { shouldOfferCloudFollowUp } from "../../conversation/should-offer-cloud-follow-up";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { DebugNameProbe } from "../../debug/debug-name-probe";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ProjectSelectorControl } from "../../desktop/project-selector-control";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { EnsureWorktreeEnvironmentDropdownInit, WorktreeEnvironmentDropdown, worktreeEnvironmentDropdownI, worktreeEnvironmentDropdownN, worktreeEnvironmentDropdownO, WorktreeEnvironmentDropdownR } from "../../environments/worktree-environment-dropdown";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { visualizationIdFromPath } from "../../files/visualization-html-path";
import { worktreeLeafName } from "../../files/worktree-leaf-name";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { HostConnectionStatusBadge } from "../../hosts/host-connection-status-badge";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconMA } from "../../icons/app-icon-ma";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { isWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { appshotSettingsDefinitions } from "../../settings/appshot-settings-definitions";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { cloud4 } from "../../ui/cloud4";
import { deferredT } from "../../ui/deferred-t";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { codexProjectKey } from "../../utils/codex-project-key";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { ensurePersonalizationG0Init, ensurePersonalizationK0Init, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { buildSkillMentionMarkdown } from "../build-skill-mention-markdown";
import { ComposerCategoryValueChip } from "../composer-category-value-chip";
import { ComposerProjectSelector } from "../composer-project-selector";
import { DesignComposerSurface } from "../design-composer-surface";
import { findSkillByName } from "../find-skill-by-name";
import { getPluginShortDescription } from "../get-plugin-short-description";
import { localRemoteDropdownA, localRemoteDropdownI, localRemoteDropdownN, localRemoteDropdownO, LocalRemoteDropdownR, LocalRemoteDropdownT } from "../local-remote-dropdown";

const AppInitialAT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiBa@ui/deferred-ui-ba-2.tsx) */
const AppInitialBa: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiCW@ui/deferred-ui-cw.ts) */
const AppInitialCW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-d2.tsx) */
const DeferredUiD2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (missing-export:worktree/branch.ts) */
const branch: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-h222.tsx) */
const DeferredUiH222: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_IB_Init@boundaries/composer-esm-inits.ts) */
const AppInitialIB: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Kg_Init@boundaries/composer-esm-inits.ts) */
const AppInitialKg: any = undefined;
/** Wave FY unresolved companion (jsx-collision:hero@worktree/hero.ts) */
const AppInitialKm: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/initial-route3.tsx) */
const InitialRoute3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useClearBrowserUseHostStateMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialNO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:textTokenDescriptionForeground@ui/text-token-description-foreground-2.tsx) */
const AppInitialPa: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-pj.ts) */
const deferredUiPJ: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (missing-export:composer/composer-project-selector.tsx) */
const ensureComposerProjectSelectorInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredComposerQq@composer/deferred-composer-qq.ts) */
const AppInitialQq: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (jsx-collision:composerNavigation2@composer/composer-navigation2.ts) */
const AppInitialRS: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiSW@ui/deferred-ui-sw.ts) */
const AppInitialSW: any = undefined;
/** Wave FY unresolved companion (missing-export:composer/deferred-tc.tsx) */
const DeferredTC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:shouldShowWorktreeChrome@environments/worktree-handoff-helpers.ts) */
const AppInitialTg: any = undefined;
/** Wave FY unresolved companion (jsx-collision:environment3@environments/environment3.ts) */
const AppInitialTY: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u232.tsx) */
const DeferredUiU232: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const AppInitialV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useHostChatgptAuthMethod@hosts/use-host-chatgpt-auth-method.ts) */
const AppInitialWY: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-x232.tsx) */
const DeferredUiX232: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredNavigationXO@navigation/deferred-navigation-xo.ts) */
const AppInitialXO: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function ComposerUtilityBarHelper1(river) {
  let {
      composerMode,
      setComposerMode
    } = river,
    slate = CodexPluginActionType(HostCwdPathLabel),
    timber = CodexPluginActionResult(deferredUiPJ),
    [umbra, violet] = bravo.useState(false),
    willow = useVoiceSettingsHostConfig(),
    xenon = CodexPluginActionResult(getHostConfigId),
    yellow = willow.cwd == null ? null : {
      cwd: willow.cwd,
      hostConfig: willow.hostConfig
    };
  let zinc = {
    retainRepoWatch: xenon
  };
  let {
      data,
      isLoading
    } = AppInitialF3(yellow, "cloud_follow_up_local_remote_dropdown", zinc),
    amber = data?.root != null,
    basalt = timber?.type === "cloud" && timber.hasAppliedCodeLocally,
    cedar,
    daisy;
  cedar = () => {
    basalt && cloud4(slate, "local");
  };
  daisy = [basalt, slate];
  bravo.useEffect(cedar, daisy);
  let ember, flint;
  ember = () => {
    isLoading || amber || cloud4(slate, "local");
  };
  flint = [amber, isLoading, slate];
  bravo.useEffect(ember, flint);
  let garnet = composerMode === "local" ? <MemoizedFormattedMessage {...{
    ...delta.local
  }} /> : <MemoizedFormattedMessage {...{
    ...delta.cloud
  }} />;
  let hazel = garnet,
    ivory = <MemoizedFormattedMessage {...{
      ...delta.tooltip
    }} />;
  let jasper = composerMode === "cloud" ? <AppInitialD className="icon-xs" /> : <AppIconFB {...{
    className: "icon-xs"
  }} />;
  let kelp = <OptionalTooltip {...{
    tooltipContent: ivory,
    children: <ComposerCategoryValueChip data-composer-navigation-target="run-location" categoryLabel={null} collapse="xs" icon={jasper} indicator="chevron" value={hazel} valueClassName="max-w-40" />
  }} />;
  let lotus = <DropdownMenu.Title {...{
    children: <MemoizedFormattedMessage {...{
      id: "composer.mode.newTask.header",
      defaultMessage: "Continue in",
      description: "Header label above agent mode options"
    }} />
  }} />;
  let mint = composerMode === "local" ? AppIconZlt : undefined,
    nova = () => {
      setComposerMode("local");
      violet(false);
    };
  let olive = <MemoizedFormattedMessage {...{
    ...delta.local
  }} />;
  let prism = <DropdownMenu.Item {...{
    LeftIcon: AppIconFB,
    RightIcon: mint,
    onClick: nova,
    children: olive
  }} />;
  let quill = amber ? <DropdownMenu.Item {...{
    LeftIcon: AppInitialD,
    RightIcon: composerMode === "cloud" ? AppIconZlt : undefined,
    onClick: () => {
      setComposerMode("cloud");
      violet(false);
    },
    children: <MemoizedFormattedMessage {...{
      ...delta.cloud
    }} />
  }} /> : null;
  let reef = <div className="flex w-44 flex-col">
      {lotus}
      {prism}
      {quill}
    </div>;
  return <DropdownMenuPopover {...{
    open: umbra,
    onOpenChange: violet,
    triggerButton: kelp,
    children: reef
  }} />;
}
var alpha,
  bravo,
  copper,
  delta,
  echo = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    bravo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Hlt_Init();
    AppInitialP3();
    copilotDefaultModel();
    ensureDropdownMenuPopoverInit();
    AppInitialF();
    AppInitialIB();
    useLocalEnvironmentEditorState();
    composerScope();
    AppInitialRS();
    cloud4();
    getPluginShortDescription();
    delta = identity({
      local: {
        id: "composer.cloudFollowUp.local",
        defaultMessage: "Local",
        description: "Local follow-up option"
      },
      cloud: {
        id: "composer.cloudFollowUp.cloud",
        defaultMessage: "Cloud",
        description: "Cloud follow-up option"
      },
      tooltip: {
        id: "composer.cloudFollowUp.whereRun",
        defaultMessage: "Where should this follow-up run?",
        description: "Tooltip for choosing between local and cloud follow-ups"
      }
    });
  });
function ComposerUtilityBarHelper2(sage) {
  let {
      startingState,
      setStartingState
    } = sage,
    [topaz, ultra] = harbor.useState(false),
    vapor = startingState === "working-tree" ? <MemoizedFormattedMessage {...{
      ...jade.workingTree
    }} /> : <MemoizedFormattedMessage {...{
      ...jade.directFollowUp
    }} />;
  let wheat = vapor,
    yarn = <div className="flex flex-col gap-2">
        {<MemoizedFormattedMessage {...{
        id: "composer.remote.startingPoint",
        defaultMessage: "What code should this chat start from?",
        description: "Section label for remote starting point selector"
      }} />}
      </div>;
  let zephyr = <MemoizedFormattedMessage {...{
    id: "composer.followUpStartingState.footerCategory",
    defaultMessage: "Starting from",
    description: "Category label for the follow-up starting state control in the composer footer"
  }} />;
  let acorn = startingState === "working-tree",
    bloom = <CoerceLocalFilesystemPath {...{
      className: "icon-xs"
    }} />;
  let coral = <ProjectPinnedActionsMenu borderColor="border-token-side-bar-background" badgeEnabled={acorn}>
      {bloom}
    </ProjectPinnedActionsMenu>;
  let drift = <OptionalTooltip {...{
    tooltipContent: yarn,
    children: <ComposerCategoryValueChip data-composer-navigation-target="starting-state" categoryLabel={zephyr} collapse="none" icon={coral} indicator="chevron" value={wheat} valueClassName="max-[440px]:hidden" />
  }} />;
  let eagle = <MemoizedFormattedMessage {...{
    id: "composer.remote.currentEditsSuffix.followUp",
    defaultMessage: "Create a new chat that references this cloud chat.",
    description: "Suffix text indicating the selection includes current edits"
  }} />;
  let frost = startingState === "working-tree" ? AppIconZlt : undefined,
    glide = () => {
      setStartingState("working-tree");
      ultra(false);
    };
  let honey = <MemoizedFormattedMessage {...{
    ...jade.workingTree
  }} />;
  let iris = <OptionalTooltip {...{
    tooltipContent: eagle,
    children: <DropdownMenu.Item {...{
      LeftIcon: falcon,
      RightIcon: frost,
      onClick: glide,
      children: honey
    }} />
  }} />;
  let jewel = startingState === "direct-follow-up" ? AppIconZlt : undefined,
    knoll = () => {
      setStartingState("direct-follow-up");
      ultra(false);
    };
  let lunar = <MemoizedFormattedMessage {...{
    ...jade.directFollowUp
  }} />;
  let moss = <DropdownMenu.Item {...{
    LeftIcon: CoerceLocalFilesystemPath,
    RightIcon: jewel,
    onClick: knoll,
    children: lunar
  }} />;
  let north = <div className="flex flex-col gap-1 pt-1">
      {iris}
      {moss}
    </div>;
  return <DropdownMenuPopover {...{
    open: topaz,
    onOpenChange: ultra,
    triggerButton: drift,
    children: north
  }} />;
}
function falcon(orbit) {
  let {
    className
  } = orbit;
  return <ProjectPinnedActionsMenu borderColor="border-token-dropdown-background">
      {<CoerceLocalFilesystemPath {...{
      className
    }} />}
    </ProjectPinnedActionsMenu>;
}
var gamma,
  harbor,
  indigo,
  jade,
  kite = esmInit(() => {
    gamma = reactCompilerRuntime();
    harbor = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialBa();
    ensureDropdownMenuInit();
    ensureComposerEsm_Hlt_Init();
    usePluginsFeatureEnabled();
    ensureDropdownMenuPopoverInit();
    ensureDiffCommentComposerInit();
    AppInitialRS();
    jade = identity({
      workingTree: {
        id: "composer.remote.localWorkingTree",
        defaultMessage: "Use local changes",
        description: "Label for local working tree selection in remote composer"
      },
      directFollowUp: {
        id: "composer.remote.directFollowUp",
        defaultMessage: "Don't use local changes",
        description: "Label for direct follow-up selection in remote composer"
      }
    });
  });
function ComposerUtilityBarHelper4() {
  let {
    data
  } = CodexPluginActionResult(nickel);
  if (!(data?.hasCustomCliExecutable ?? false)) return null;
  let pine = <MemoizedFormattedMessage {...{
    id: "composer.customCliTooltip",
    defaultMessage: "Using a custom CLI executable",
    description: "Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings."
  }} />;
  return <OptionalTooltip {...{
    tooltipContent: pine,
    children: <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "composerSm",
      uniform: true,
      className: "-mx-2",
      children: <AppIconSR {...{
        className: "icon-xs text-token-editor-warning-foreground"
      }} />
    }} />
  }} />;
}
var lemon,
  marble,
  nickel,
  onyx = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    deferredUiCR();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    scrollAppActionTargetTo();
    nickel = scrollAppActionTargetByTurn(appScopeAtom, "has-custom-cli-executable", {
      staleTime: readScrollTop.FIVE_SECONDS
    });
  });
export function ComposerUtilityBar({
  variant,
  composerMode,
  setComposerMode,
  isResponseInProgress,
  worktreeEnvironmentHostId,
  worktreeEnvironmentWorkspaceRoot,
  codexHome,
  homeAuxiliaryControl,
  showRuntimeControls,
  hideRunLocationDropdown,
  showWorkspaceDropdown,
  gitRootForStartingState,
  showUtilityBarBranchWhen,
  freeUpsellButton,
  remoteConfig,
  activeProjectIdOverride,
  localRemoteExecutionTarget,
  existingWorkspace
}: { variant?: unknown; composerMode?: unknown; setComposerMode?: unknown; isResponseInProgress?: unknown; worktreeEnvironmentHostId?: unknown; worktreeEnvironmentWorkspaceRoot?: unknown; codexHome?: unknown; homeAuxiliaryControl?: unknown; showRuntimeControls?: unknown; hideRunLocationDropdown?: unknown; showWorkspaceDropdown?: unknown; gitRootForStartingState?: unknown; showUtilityBarBranchWhen?: unknown; freeUpsellButton?: unknown; remoteConfig?: unknown; activeProjectIdOverride?: unknown; localRemoteExecutionTarget?: unknown; existingWorkspace?: unknown; [key: string]: unknown }) {
  let cliff = CodexPluginActionType(HostCwdPathLabel),
    dusk = useLocation(),
    {
      state
    } = dusk,
    elm = useNavigate(),
    fern = CodexPluginActionResult(deferredUiPJ),
    grove = CodexPluginActionResult(isStartingProcessExpired),
    hill = CodexPluginActionResult(findSkillByName);
  CodexPluginActionResult(AppInitialQq);
  let isle = AppInitialTY(),
    juniper = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    lagoon = isCurrentSpecialWindowRoute(),
    meadow = composerMode !== "cloud" && fern?.type !== "cloud",
    nest = localConversationIdFromSurfaceValue(cliff);
  state?.prefillAeonStartTarget;
  let oak = CodexBrowserSurfaceActionType(DeferredUiH222, nest),
    petal = nest != null && !oak,
    quiet = useVoiceSettingsHostConfig(nest),
    rain = localRemoteExecutionTarget ?? quiet,
    seed = CodexBrowserSurfaceActionType(DeferredUiU232, nest),
    trail = CodexBrowserSurfaceActionType(DeferredUiX232, nest),
    be = CodexBrowserSurfaceActionType(quartz, nest),
    urn = fern != null || be,
    vine = remoteConfig.currentHostId ?? "local",
    wind = shouldOfferCloudFollowUp({
      composerMode,
      draftRemoteHostId: vine,
      followUpType: fern?.type,
      hasStartedBranchConversation: be
    }),
    yarrow = wind ? vine : seed,
    azure = !wind && yarrow !== "local",
    birch = CodexBrowserSurfaceActionType(DeferredUiD2, nest),
    {
      data
    } = ensurePersonalizationK0Init(DesktopPersistenceKeys.THREAD_PROJECT_ASSIGNMENTS),
    canyon = appshotSettingsDefinitions({
      cwd: birch,
      assignment: nest == null ? undefined : data?.[nest]
    }),
    dew = readCodexHomeFromQuery(rain.hostId) ?? codexHome,
    ever = pathContainsWorktreesDir(canyon, dew),
    field = pathContainsWorktreesDir(existingWorkspace?.workspaceRoot, dew),
    grain = variant === "home",
    haven = NativeContextMenuSurface("1115442235"),
    ink = ever,
    jadeite = CodexBrowserSurfaceActionType(deferredConversationN, nest),
    $e = visualizationIdFromPath(),
    kernel = $e.find(item => item.hostId === yarrow) ?? null,
    leaf = yarrow === "local" ? null : azure ? rain.cwd : remoteConfig.getProjectPathForHostId(yarrow),
    maple = $e.find(item => item.hostId === remoteConfig.currentHostId) ?? null,
    nimbus = remoteConfig.getProjectPathForHostId(remoteConfig.currentHostId),
    opal = pearl.useMemo(() => ({
      isAttachedToStartedTask: urn,
      existingRemoteThreadState: {
        hostId: yarrow,
        connectionDisplayName: yarrow === "local" ? null : kernel?.displayName ?? null,
        projectPath: leaf
      },
      draftNewThreadRemoteSelectionState: {
        hostId: remoteConfig.currentHostId,
        connectionDisplayName: maple?.displayName ?? null,
        projectPath: nimbus
      }
    }), [kernel?.displayName, leaf, urn, remoteConfig.currentHostId, yarrow, maple?.displayName, nimbus]),
    plume = rain.hostConfig,
    quillow = CodexBrowserSurfaceActionType(AppInitialSW, {
      hostConfig: plume,
      operationSource: "composer_content"
    }).data?.available === true && meadow && !petal ? rain.cwd : null,
    {
      data: _data,
      isLoading
    } = AppInitialF3(quillow == null ? null : {
      cwd: quillow,
      hostConfig: plume
    }, "composer_content", {
      enabled: true,
      retainRepoWatch: CodexPluginActionResult(getHostConfigId),
      watchForGitInit: false
    }),
    {
      canCreateGitRepository,
      createGitRepository,
      isCreatingGitRepository
    } = DesignComposerSurface({
      cwd: quillow,
      hostConfig: plume,
      showErrorToast: true
    }),
    _t = quillow != null && _data != null,
    silk = meadow && _t && _data?.root == null,
    thorn = !canCreateGitRepository || isCreatingGitRepository || !_t || isLoading,
    upland = silk ? null : freeUpsellButton,
    vista = composerMode === "worktree",
    {
      environments,
      isLoading: _isLoading,
      error,
      resolvedConfigPath,
      repairConfigPath,
      updateSelection
    } = dataFileBlameAuthor({
      hostId: worktreeEnvironmentHostId,
      workspaceRoot: vista ? worktreeEnvironmentWorkspaceRoot : null
    }),
    wisp = !fern && vista ? <EnsureWorktreeEnvironmentDropdownInit {...{
      environments,
      isLoading: _isLoading,
      hasError: error != null,
      selectedConfigPath: resolvedConfigPath,
      repairConfigPath,
      onSelectConfigPath: updateSelection,
      onOpenSettings: tor => {
        if (AppInitialXO(cliff, worktreeEnvironmentHostId), tor == null) {
          let updraft = new URLSearchParams({
            workspaceRoot: worktreeEnvironmentWorkspaceRoot
          });
          elm(`/settings/local-environments?${updraft.toString()}`);
          return;
        }
        elm(ProjectSelectorControl({
          configPath: tor,
          workspaceRoot: worktreeEnvironmentWorkspaceRoot
        }), {
          state: {
            hostId: worktreeEnvironmentHostId,
            returnTo: `${dusk.pathname}${dusk.search}${dusk.hash}`
          }
        });
      }
    }} /> : null,
    yonder = !fern && (composerMode === "cloud" || composerMode === "worktree") ? <ElectronOnly {...{
      electron: true,
      browser: isle != null,
      children: <WorktreeEnvironmentDropdown {...{
        startingState: grove,
        setStartingState: verge => {
          buildSkillMentionMarkdown(cliff, "asyncThreadStartingState", verge);
        },
        hostConfig: plume,
        gitRootOverride: gitRootForStartingState,
        branchSource: composerMode === "worktree" ? "worktree" : "cloud"
      }} />
    }} /> : null,
    zenith = pearl.useMemo(() => haven && AppInitialTg({
      isCompactWindow: lagoon
    }) && nest != null && rain.cwd != null ? {
      conversationTitle: jadeite,
      cwd: identityCwd(rain.cwd),
      isWorktreeConversation: ever
    } : null, [nest, jadeite, rain.cwd, lagoon, ever, haven]),
    anvil = nest != null && yarrow !== "local" && trail?.role === "follower",
    beacon = (showUtilityBarBranchWhen === "always" || composerMode === "local") && !anvil && !petal && !isLoading,
    crag = pearl.useMemo(() => beacon && !silk ? <WorktreeEnvironmentDropdownR {...{
      gitRoot: _data?.root ?? null,
      hostConfig: plume,
      localConversationId: nest,
      isReadOnly: existingWorkspace != null,
      shouldShow: true,
      align: "start"
    }} /> : null, [nest, existingWorkspace, _data?.root, plume, silk, beacon]),
    dome = null;
  dome = existingWorkspace != null && composerMode === "local" ? <OptionalTooltip {...{
    tooltipContent: <div className="flex flex-col gap-1">
              {existingWorkspace.sourceConversationTitle == null ? null : <MemoizedFormattedMessage {...{
        id: "composer.existingWorkspace.fromTask",
        defaultMessage: "From {taskTitle}",
        description: "Source task shown in the existing workspace tooltip",
        values: {
          taskTitle: existingWorkspace.sourceConversationTitle
        }
      }} />}
              <span className="font-mono text-xs break-all">
                {existingWorkspace.workspaceRoot}
              </span>
            </div>,
    tooltipMaxWidth: "min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
    triggerAsChild: false,
    children: <UtilityBarCategoryValue categoryLabel={null} collapse="xs" icon={field ? <ProjectDropdownGlyphIcon {...{
      className: "icon-xs"
    }} /> : <AppIconFB {...{
      className: "icon-xs"
    }} />} value={field ? <MemoizedFormattedMessage {...{
      id: "composer.existingWorktree.label",
      defaultMessage: "Existing worktree · {worktree}",
      description: "Label shown when a new task starts in an existing worktree",
      values: {
        worktree: worktreeLeafName({
          codexHome: dew,
          worktreePath: existingWorkspace.workspaceRoot
        })
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "composer.existingWorkspace.label",
      defaultMessage: "Existing workspace",
      description: "Label shown when a new task starts in an existing local workspace"
    }} />} valueClassName="max-w-60 text-sm" />
  }} /> : fern?.type === "cloud" ? <ComposerUtilityBarHelper1 {...{
    composerMode,
    setComposerMode
  }} /> : <LocalRemoteDropdownT {...{
    composerMode,
    setComposerMode,
    conversationId: nest,
    executionTargetOverride: localRemoteExecutionTarget,
    remoteSelectionState: opal,
    disabled: ink,
    hideModeDropdown: hideRunLocationDropdown,
    allowWorktree: !fern && !isResponseInProgress,
    threadHandoff: zenith,
    worktreeLabelOnly: ink
  }} />;
  let eddy = showWorkspaceDropdown && localRemoteDropdownO(composerMode) && !fern,
    [fjord, glen] = pearl.useState(false),
    hearth = CodexBrowserSurfaceActionType(deferredUiE1, "composer.openProjectPicker");
  useResolvedHostConfigValue("composer.openProjectPicker", () => {
    glen(true);
  }, {
    enabled: eddy
  });
  let inlet = eddy ? <ElectronOnly {...{
      electron: true,
      browser: true,
      children: juniper ? <ComposerProjectSelector {...{
        menuOpen: fjord,
        onMenuOpenChange: glen,
        projectId: activeProjectIdOverride,
        shortcut: hearth,
        subtleHover: variant === "home"
      }} /> : <ProjectSelectorControl activeProjectIdOverride={activeProjectIdOverride} allowLocalProjectActions={true} isOpen={fjord} onOpenChange={glen} shortcut={hearth} variant={variant === "home" ? "home" : "default"} />
    }} /> : null,
    jetty = fern ? <ComposerUtilityBarHelper4 {...{}} /> : null,
    knob = composerMode === "cloud" && fern?.type === "cloud" && fern.hasAppliedCodeLocally ? <ComposerUtilityBarHelper2 {...{
      startingState: hill,
      setStartingState: weir => {
        buildSkillMentionMarkdown(cliff, "followUpCloudStartingState", weir);
      }
    }} /> : null,
    ledge = wind ? opal.draftNewThreadRemoteSelectionState : opal.existingRemoteThreadState,
    mire = beacon && silk ? <ReadLoginRouteQuerySnapshot {...{
      className: "px-0",
      color: "ghost",
      size: "composerSm",
      disabled: thorn,
      onClick: () => {
        thorn || createGitRepository();
      },
      children: [<CoerceLocalFilesystemPath {...{
        className: "icon-xs"
      }} />, <OptionalTooltip collapse="sm" className="max-w-40 truncate text-sm">
                {isCreatingGitRepository ? <MemoizedFormattedMessage {...{
          id: "codex.review.noDiff.gitInit.creating",
          defaultMessage: "Creating…",
          description: "Button label shown while git init is running from the diff empty state"
        }} /> : <MemoizedFormattedMessage {...{
          id: "codex.review.noDiff.gitInit.createRepository",
          defaultMessage: "Create git repository",
          description: "Button label to create a git repository from the diff empty state"
        }} />}
              </OptionalTooltip>]
    }} /> : null,
    nook = composerMode === "local" && ledge.hostId != null && ledge.hostId !== "local" ? <div className="flex min-w-0 items-center gap-1">
          {<ComposerUtilityBarHelper5 {...{
        hostId: ledge.hostId,
        connectionDisplayName: ledge.connectionDisplayName,
        projectPath: ledge.projectPath
      }} />}
        </div> : null,
    _ComposerUtilityBar = showRuntimeControls && true,
    $t = _ComposerUtilityBar && !(variant === "home" && activeProjectIdOverride !== undefined && activeProjectIdOverride == null),
    oxbow = composerMode === "cloud" ? <ElectronOnly {...{
      electron: true,
      browser: true,
      children: <LocalRemoteDropdownR {...{
        composerMode,
        conversationId: nest,
        disabled: ink,
        setComposerMode
      }} />
    }} /> : null,
    pond = fern?.type === "cloud" ? <>
          {crag}
          {knob}
        </> : <>
          {crag}
          {oxbow}
          {wisp}
          {yonder}
        </>,
    quarry = fern?.type === "cloud" ? <>
          {variant === "home" ? crag : null}
          {dome}
          {variant === "default" ? crag : null}
          {knob}
        </> : <>
          {dome}
          {pond}
        </>,
    rapids = <>
        {variant === "home" ? inlet : null}
        {variant === "home" ? homeAuxiliaryControl : null}
        {_ComposerUtilityBar ? quarry : null}
        {variant === "default" ? inlet : null}
      </>,
    on = <>
        {inlet}
        {homeAuxiliaryControl}
        {$t ? dome : null}
        {$t ? pond : null}
      </>,
    spur = _ComposerUtilityBar && (nook || mire || upland || jetty) ? <div className="flex min-w-0 shrink-0 items-center gap-3">
          {nook}
          {mire}
          {upland}
          {jetty}
        </div> : null;
  return variant === "home" ? <AppInitialAT trailingControls={spur}>
      {grain ? on : rapids}
    </AppInitialAT> : <AppIconYlt className="flex flex-wrap items-center gap-2 overflow-visible pr-2 pl-2">
      <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-0">
        {rapids}
      </div>
      {spur}
    </AppIconYlt>;
}
function ComposerUtilityBarHelper5(quest) {
  let {
    hostId,
    connectionDisplayName,
    projectPath
  } = quest;
  if (hostId == null) return null;
  let ridge = projectPath == null,
    storm = connectionDisplayName ?? hostId,
    tide = <span className="max-w-40 min-w-0 truncate">
        {storm}
      </span>;
  let unity = <HostConnectionStatusBadge hostId={hostId} />;
  let vale = <OptionalTooltip collapse="sm" className="flex min-w-0 items-center gap-1 text-sm">
      {tide}
      {unity}
    </OptionalTooltip>;
  return <OptionalTooltip {...{
    tooltipContent: projectPath,
    disabled: ridge,
    children: vale
  }} />;
}
var $t, pearl, $, quartz;
esmInit(() => {
  $t = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  pearl = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialPa();
  DeferredUiV2();
  ensureComposerProjectSelectorInit();
  codexProjectKey();
  InitialRoute3();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  AppInitialCW();
  AppInitialNO();
  AppInitialP3();
  ensureSelectWorkspacePXInit();
  ensurePersonalizationG0Init();
  copilotDefaultModel();
  usePluginsFeatureEnabled();
  AppInitialIB();
  ensureSettingsGlyphRBInit();
  deferredT();
  AppIconMA();
  hasLoadedOldestItems();
  useLocalEnvironmentEditorState();
  ensureAppScopeInit();
  composerScope();
  DebugNameProbe();
  AppIconBO();
  ensureComposerEsm_F7_Init();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  AppInitialWY();
  branch();
  worktreeEnvironmentDropdownO();
  localRemoteDropdownI();
  echo();
  kite();
  AppInitialRS();
  cloud4();
  AppIconYlt();
  CodexAutomationCapabilityOrigin();
  localRemoteDropdownA();
  worktreeEnvironmentDropdownI();
  getPluginShortDescription();
  onyx();
  AppInitialKm();
  localRemoteDropdownN();
  isWhitespaceOrEofCharCode();
  AppInitialKg();
  DeferredTC();
  worktreeEnvironmentDropdownN();
  quartz = clearActiveOverlayAfterNavigate(appScopeAtom, (wave, {
    get
  }) => {
    let apex = get(runAppActionInPrimaryWindow, wave) ?? 0,
      brook = get(AppInitialV2, wave) ?? 0;
    return apex > 0 || brook > 0;
  });
})();
