// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, renamedId→ComposerUtilityBarHelper1, renamedId→ComposerUtilityBarHelper2, renamedId→ComposerUtilityBarHelper4, renamedId→ComposerUtilityBarHelper5, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, localRemoteDropdownR→LocalRemoteDropdownR, localRemoteDropdownT→LocalRemoteDropdownT, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 1/6 — ComposerUtilityBar host component and the top-level lazy init.
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { useStepsProseAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { hasLoadedOldestItems } from "../../conversation/has-loaded-oldest-items";
import { localConversationIdFromSurfaceValue } from "../../conversation/local-conversation-id-from-surface-value";
import { shouldOfferCloudFollowUp } from "../../conversation/should-offer-cloud-follow-up";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { DebugNameProbe } from "../../debug/debug-name-probe";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ProjectSelectorControl } from "../../desktop/project-selector-control";
import {
  EnsureWorktreeEnvironmentDropdownInit,
  WorktreeEnvironmentDropdown,
  worktreeEnvironmentDropdownI,
  worktreeEnvironmentDropdownN,
  worktreeEnvironmentDropdownO,
  WorktreeEnvironmentDropdownR,
} from "../../environments/worktree-environment-dropdown";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { visualizationIdFromPath } from "../../files/visualization-html-path";
import { worktreeLeafName } from "../../files/worktree-leaf-name";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconMA } from "../../icons/app-icon-ma";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { isWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { appshotSettingsDefinitions } from "../../settings/appshot-settings-definitions";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../../skills/skills-page-helpers";
import { cloud4 } from "../../ui/cloud4";
import { deferredT } from "../../ui/deferred-t";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { codexProjectKey } from "../../utils/codex-project-key";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import {
  ensurePersonalizationG0Init,
  ensurePersonalizationK0Init,
  ensureSettingsGlyphRBInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { buildSkillMentionMarkdown } from "../build-skill-mention-markdown";
import { ComposerProjectSelector } from "../composer-project-selector";
import { DesignComposerSurface } from "../design-composer-surface";
import { findSkillByName } from "../find-skill-by-name";
import { getPluginShortDescription } from "../get-plugin-short-description";
import {
  localRemoteDropdownA,
  localRemoteDropdownI,
  localRemoteDropdownN,
  localRemoteDropdownO,
  LocalRemoteDropdownR,
  LocalRemoteDropdownT,
} from "../local-remote-dropdown";
import {
  ComposerUtilityBarHelper1,
  echo,
} from "./cloud-follow-up-mode-dropdown";
import {
  AppInitialAT,
  AppInitialCW,
  AppInitialF3,
  AppInitialIB,
  AppInitialKg,
  AppInitialKm,
  AppInitialNO,
  AppInitialP3,
  AppInitialPa,
  AppInitialQq,
  AppInitialRS,
  AppInitialSW,
  AppInitialTg,
  AppInitialTY,
  AppInitialV2,
  AppInitialWY,
  AppInitialXO,
  branch,
  composerScope,
  DeferredTC,
  DeferredUiD2,
  deferredUiE1,
  DeferredUiH222,
  deferredUiPJ,
  DeferredUiU232,
  DeferredUiV2,
  DeferredUiX232,
  ensureComposerProjectSelectorInit,
  ensureSelectWorkspacePXInit,
  InitialRoute3,
  NativeContextMenuSurface,
  ReadLoginRouteQuerySnapshot,
  useLocalEnvironmentEditorState,
} from "./companion-stubs";
import { ComposerUtilityBarHelper4, onyx } from "./custom-cli-badge";
import { ComposerUtilityBarHelper5 } from "./remote-connection-chip";
import { ComposerUtilityBarHelper2, kite } from "./starting-state-dropdown";

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
  existingWorkspace,
}: {
  variant?: unknown;
  composerMode?: unknown;
  setComposerMode?: unknown;
  isResponseInProgress?: unknown;
  worktreeEnvironmentHostId?: unknown;
  worktreeEnvironmentWorkspaceRoot?: unknown;
  codexHome?: unknown;
  homeAuxiliaryControl?: unknown;
  showRuntimeControls?: unknown;
  hideRunLocationDropdown?: unknown;
  showWorkspaceDropdown?: unknown;
  gitRootForStartingState?: unknown;
  showUtilityBarBranchWhen?: unknown;
  freeUpsellButton?: unknown;
  remoteConfig?: unknown;
  activeProjectIdOverride?: unknown;
  localRemoteExecutionTarget?: unknown;
  existingWorkspace?: unknown;
  [key: string]: unknown;
}) {
  let cliff = CodexPluginActionType(HostCwdPathLabel),
    dusk = useLocation(),
    { state } = dusk,
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
      hasStartedBranchConversation: be,
    }),
    yarrow = wind ? vine : seed,
    azure = !wind && yarrow !== "local",
    birch = CodexBrowserSurfaceActionType(DeferredUiD2, nest),
    { data } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.THREAD_PROJECT_ASSIGNMENTS,
    ),
    canyon = appshotSettingsDefinitions({
      cwd: birch,
      assignment: nest == null ? undefined : data?.[nest],
    }),
    dew = readCodexHomeFromQuery(rain.hostId) ?? codexHome,
    ever = pathContainsWorktreesDir(canyon, dew),
    field = pathContainsWorktreesDir(existingWorkspace?.workspaceRoot, dew),
    grain = variant === "home",
    haven = NativeContextMenuSurface("1115442235"),
    ink = ever,
    jadeite = CodexBrowserSurfaceActionType(deferredConversationN, nest),
    $e = visualizationIdFromPath(),
    kernel = $e.find((item) => item.hostId === yarrow) ?? null,
    leaf =
      yarrow === "local"
        ? null
        : azure
          ? rain.cwd
          : remoteConfig.getProjectPathForHostId(yarrow),
    maple =
      $e.find((item) => item.hostId === remoteConfig.currentHostId) ?? null,
    nimbus = remoteConfig.getProjectPathForHostId(remoteConfig.currentHostId),
    opal = pearl.useMemo(
      () => ({
        isAttachedToStartedTask: urn,
        existingRemoteThreadState: {
          hostId: yarrow,
          connectionDisplayName:
            yarrow === "local" ? null : (kernel?.displayName ?? null),
          projectPath: leaf,
        },
        draftNewThreadRemoteSelectionState: {
          hostId: remoteConfig.currentHostId,
          connectionDisplayName: maple?.displayName ?? null,
          projectPath: nimbus,
        },
      }),
      [
        kernel?.displayName,
        leaf,
        urn,
        remoteConfig.currentHostId,
        yarrow,
        maple?.displayName,
        nimbus,
      ],
    ),
    plume = rain.hostConfig,
    quillow =
      CodexBrowserSurfaceActionType(AppInitialSW, {
        hostConfig: plume,
        operationSource: "composer_content",
      }).data?.available === true &&
      meadow &&
      !petal
        ? rain.cwd
        : null,
    { data: _data, isLoading } = AppInitialF3(
      quillow == null
        ? null
        : {
            cwd: quillow,
            hostConfig: plume,
          },
      "composer_content",
      {
        enabled: true,
        retainRepoWatch: CodexPluginActionResult(getHostConfigId),
        watchForGitInit: false,
      },
    ),
    { canCreateGitRepository, createGitRepository, isCreatingGitRepository } =
      DesignComposerSurface({
        cwd: quillow,
        hostConfig: plume,
        showErrorToast: true,
      }),
    _t = quillow != null && _data != null,
    silk = meadow && _t && _data?.root == null,
    thorn =
      !canCreateGitRepository || isCreatingGitRepository || !_t || isLoading,
    upland = silk ? null : freeUpsellButton,
    vista = composerMode === "worktree",
    {
      environments,
      isLoading: _isLoading,
      error,
      resolvedConfigPath,
      repairConfigPath,
      updateSelection,
    } = dataFileBlameAuthor({
      hostId: worktreeEnvironmentHostId,
      workspaceRoot: vista ? worktreeEnvironmentWorkspaceRoot : null,
    }),
    wisp =
      !fern && vista ? (
        <EnsureWorktreeEnvironmentDropdownInit
          {...{
            environments,
            isLoading: _isLoading,
            hasError: error != null,
            selectedConfigPath: resolvedConfigPath,
            repairConfigPath,
            onSelectConfigPath: updateSelection,
            onOpenSettings: (tor) => {
              if (
                (AppInitialXO(cliff, worktreeEnvironmentHostId), tor == null)
              ) {
                let updraft = new URLSearchParams({
                  workspaceRoot: worktreeEnvironmentWorkspaceRoot,
                });
                elm(`/settings/local-environments?${updraft.toString()}`);
                return;
              }
              elm(
                ProjectSelectorControl({
                  configPath: tor,
                  workspaceRoot: worktreeEnvironmentWorkspaceRoot,
                }),
                {
                  state: {
                    hostId: worktreeEnvironmentHostId,
                    returnTo: `${dusk.pathname}${dusk.search}${dusk.hash}`,
                  },
                },
              );
            },
          }}
        />
      ) : null,
    yonder =
      !fern && (composerMode === "cloud" || composerMode === "worktree") ? (
        <ElectronOnly
          {...{
            electron: true,
            browser: isle != null,
            children: (
              <WorktreeEnvironmentDropdown
                {...{
                  startingState: grove,
                  setStartingState: (verge) => {
                    buildSkillMentionMarkdown(
                      cliff,
                      "asyncThreadStartingState",
                      verge,
                    );
                  },
                  hostConfig: plume,
                  gitRootOverride: gitRootForStartingState,
                  branchSource:
                    composerMode === "worktree" ? "worktree" : "cloud",
                }}
              />
            ),
          }}
        />
      ) : null,
    zenith = pearl.useMemo(
      () =>
        haven &&
        AppInitialTg({
          isCompactWindow: lagoon,
        }) &&
        nest != null &&
        rain.cwd != null
          ? {
              conversationTitle: jadeite,
              cwd: identityCwd(rain.cwd),
              isWorktreeConversation: ever,
            }
          : null,
      [nest, jadeite, rain.cwd, lagoon, ever, haven],
    ),
    anvil = nest != null && yarrow !== "local" && trail?.role === "follower",
    beacon =
      (showUtilityBarBranchWhen === "always" || composerMode === "local") &&
      !anvil &&
      !petal &&
      !isLoading,
    crag = pearl.useMemo(
      () =>
        beacon && !silk ? (
          <WorktreeEnvironmentDropdownR
            {...{
              gitRoot: _data?.root ?? null,
              hostConfig: plume,
              localConversationId: nest,
              isReadOnly: existingWorkspace != null,
              shouldShow: true,
              align: "start",
            }}
          />
        ) : null,
      [nest, existingWorkspace, _data?.root, plume, silk, beacon],
    ),
    dome = null;
  dome =
    existingWorkspace != null && composerMode === "local" ? (
      <OptionalTooltip
        {...{
          tooltipContent: (
            <div className="flex flex-col gap-1">
              {existingWorkspace.sourceConversationTitle == null ? null : (
                <MemoizedFormattedMessage
                  {...{
                    id: "composer.existingWorkspace.fromTask",
                    defaultMessage: "From {taskTitle}",
                    description:
                      "Source task shown in the existing workspace tooltip",
                    values: {
                      taskTitle: existingWorkspace.sourceConversationTitle,
                    },
                  }}
                />
              )}
              <span className="font-mono text-xs break-all">
                {existingWorkspace.workspaceRoot}
              </span>
            </div>
          ),
          tooltipMaxWidth:
            "min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
          triggerAsChild: false,
          children: (
            <UtilityBarCategoryValue
              categoryLabel={null}
              collapse="xs"
              icon={
                field ? (
                  <ProjectDropdownGlyphIcon
                    {...{
                      className: "icon-xs",
                    }}
                  />
                ) : (
                  <AppIconFB
                    {...{
                      className: "icon-xs",
                    }}
                  />
                )
              }
              value={
                field ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "composer.existingWorktree.label",
                      defaultMessage: "Existing worktree · {worktree}",
                      description:
                        "Label shown when a new task starts in an existing worktree",
                      values: {
                        worktree: worktreeLeafName({
                          codexHome: dew,
                          worktreePath: existingWorkspace.workspaceRoot,
                        }),
                      },
                    }}
                  />
                ) : (
                  <MemoizedFormattedMessage
                    {...{
                      id: "composer.existingWorkspace.label",
                      defaultMessage: "Existing workspace",
                      description:
                        "Label shown when a new task starts in an existing local workspace",
                    }}
                  />
                )
              }
              valueClassName="max-w-60 text-sm"
            />
          ),
        }}
      />
    ) : fern?.type === "cloud" ? (
      <ComposerUtilityBarHelper1
        {...{
          composerMode,
          setComposerMode,
        }}
      />
    ) : (
      <LocalRemoteDropdownT
        {...{
          composerMode,
          setComposerMode,
          conversationId: nest,
          executionTargetOverride: localRemoteExecutionTarget,
          remoteSelectionState: opal,
          disabled: ink,
          hideModeDropdown: hideRunLocationDropdown,
          allowWorktree: !fern && !isResponseInProgress,
          threadHandoff: zenith,
          worktreeLabelOnly: ink,
        }}
      />
    );
  let eddy =
      showWorkspaceDropdown && localRemoteDropdownO(composerMode) && !fern,
    [fjord, glen] = pearl.useState(false),
    hearth = CodexBrowserSurfaceActionType(
      deferredUiE1,
      "composer.openProjectPicker",
    );
  useResolvedHostConfigValue(
    "composer.openProjectPicker",
    () => {
      glen(true);
    },
    {
      enabled: eddy,
    },
  );
  let inlet = eddy ? (
      <ElectronOnly
        {...{
          electron: true,
          browser: true,
          children: juniper ? (
            <ComposerProjectSelector
              {...{
                menuOpen: fjord,
                onMenuOpenChange: glen,
                projectId: activeProjectIdOverride,
                shortcut: hearth,
                subtleHover: variant === "home",
              }}
            />
          ) : (
            <ProjectSelectorControl
              activeProjectIdOverride={activeProjectIdOverride}
              allowLocalProjectActions={true}
              isOpen={fjord}
              onOpenChange={glen}
              shortcut={hearth}
              variant={variant === "home" ? "home" : "default"}
            />
          ),
        }}
      />
    ) : null,
    jetty = fern ? <ComposerUtilityBarHelper4 {...{}} /> : null,
    knob =
      composerMode === "cloud" &&
      fern?.type === "cloud" &&
      fern.hasAppliedCodeLocally ? (
        <ComposerUtilityBarHelper2
          {...{
            startingState: hill,
            setStartingState: (weir) => {
              buildSkillMentionMarkdown(
                cliff,
                "followUpCloudStartingState",
                weir,
              );
            },
          }}
        />
      ) : null,
    ledge = wind
      ? opal.draftNewThreadRemoteSelectionState
      : opal.existingRemoteThreadState,
    mire =
      beacon && silk ? (
        <ReadLoginRouteQuerySnapshot
          {...{
            className: "px-0",
            color: "ghost",
            size: "composerSm",
            disabled: thorn,
            onClick: () => {
              thorn || createGitRepository();
            },
            children: [
              <CoerceLocalFilesystemPath
                {...{
                  className: "icon-xs",
                }}
              />,
              <OptionalTooltip
                collapse="sm"
                className="max-w-40 truncate text-sm"
              >
                {isCreatingGitRepository ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "codex.review.noDiff.gitInit.creating",
                      defaultMessage: "Creating…",
                      description:
                        "Button label shown while git init is running from the diff empty state",
                    }}
                  />
                ) : (
                  <MemoizedFormattedMessage
                    {...{
                      id: "codex.review.noDiff.gitInit.createRepository",
                      defaultMessage: "Create git repository",
                      description:
                        "Button label to create a git repository from the diff empty state",
                    }}
                  />
                )}
              </OptionalTooltip>,
            ],
          }}
        />
      ) : null,
    nook =
      composerMode === "local" &&
      ledge.hostId != null &&
      ledge.hostId !== "local" ? (
        <div className="flex min-w-0 items-center gap-1">
          {
            <ComposerUtilityBarHelper5
              {...{
                hostId: ledge.hostId,
                connectionDisplayName: ledge.connectionDisplayName,
                projectPath: ledge.projectPath,
              }}
            />
          }
        </div>
      ) : null,
    _ComposerUtilityBar = showRuntimeControls && true,
    $t =
      _ComposerUtilityBar &&
      !(
        variant === "home" &&
        activeProjectIdOverride !== undefined &&
        activeProjectIdOverride == null
      ),
    oxbow =
      composerMode === "cloud" ? (
        <ElectronOnly
          {...{
            electron: true,
            browser: true,
            children: (
              <LocalRemoteDropdownR
                {...{
                  composerMode,
                  conversationId: nest,
                  disabled: ink,
                  setComposerMode,
                }}
              />
            ),
          }}
        />
      ) : null,
    pond =
      fern?.type === "cloud" ? (
        <>
          {crag}
          {knob}
        </>
      ) : (
        <>
          {crag}
          {oxbow}
          {wisp}
          {yonder}
        </>
      ),
    quarry =
      fern?.type === "cloud" ? (
        <>
          {variant === "home" ? crag : null}
          {dome}
          {variant === "default" ? crag : null}
          {knob}
        </>
      ) : (
        <>
          {dome}
          {pond}
        </>
      ),
    rapids = (
      <>
        {variant === "home" ? inlet : null}
        {variant === "home" ? homeAuxiliaryControl : null}
        {_ComposerUtilityBar ? quarry : null}
        {variant === "default" ? inlet : null}
      </>
    ),
    on = (
      <>
        {inlet}
        {homeAuxiliaryControl}
        {$t ? dome : null}
        {$t ? pond : null}
      </>
    ),
    spur =
      _ComposerUtilityBar && (nook || mire || upland || jetty) ? (
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          {nook}
          {mire}
          {upland}
          {jetty}
        </div>
      ) : null;
  return variant === "home" ? (
    <AppInitialAT trailingControls={spur}>{grain ? on : rapids}</AppInitialAT>
  ) : (
    <AppIconYlt className="flex flex-wrap items-center gap-2 overflow-visible pr-2 pl-2">
      <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-0">
        {rapids}
      </div>
      {spur}
    </AppIconYlt>
  );
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
  quartz = clearActiveOverlayAfterNavigate(appScopeAtom, (wave, { get }) => {
    let apex = get(runAppActionInPrimaryWindow, wave) ?? 0,
      brook = get(AppInitialV2, wave) ?? 0;
    return apex > 0 || brook > 0;
  });
})();
