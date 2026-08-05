// Restored from ref/webview/assets/environment-labels-BrZBoJDP.js
// Wave FY — full polished body from `environment-labels-BrZBoJDP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 31 (verified 56/87).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePullRequestMediaBDInit→EnsurePullRequestMediaBDInit, EnvironmentLabelsHelper10→EnvironmentLabelsHelper10, EnvironmentLabelsHelper11→EnvironmentLabelsHelper11, EnvironmentLabelsHelper9→EnvironmentLabelsHelper9, torqueFourth→NutFourth, valveFourth→PistonFourth, axleFourth→RivetFourth, bracketFourth→ScrewFourth, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot.
// Careful split 1/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { cloud5 } from "../../git/cloud5";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import {
  ensureHostConfigIdInit,
  getHostConfigId,
  getHostRpcClient,
} from "../../hooks/host-rpc-client";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { gpuTearingDebugSettingsAtom } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DeferredUiB } from "../../ui/deferred-ui-b";
import { DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { noop } from "../../utils/noop";
import { EnsurePullRequestMediaBDInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd, toPosixPath } from "../../utils/workspace-paths";
import { clearPendingWorktreeConversationStart } from "../../worktree/clear-pending-worktree-conversation-start";

// Cross-part stubs.
const $: any = undefined;
const EnvironmentLabelsHelper11: any = undefined;
const river: any = undefined;
const umbra: any = undefined;

const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/commit-modal.ts) */
const commitModal: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsD3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsFDInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialFD: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/set-prefix-label.tsx) */
const AppInitialHE: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsIDInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialID: any = undefined;
/** Wave FY unresolved companion (jsx-collision:mergeChromeThemeWithDefaults@appearance/chrome-theme-defaults.ts) */
const AppInitialIW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:filterArtifactTemplatePlugins@plugins/filter-artifact-template-plugins.ts) */
const AppInitialJ3: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/editor-diff-page-view.tsx) */
const EditorDiffPage: any = undefined;
/** Wave FY unresolved companion (jsx-collision:stripDisallowedPathChars@utils/strip-disallowed-path-chars.ts) */
const AppInitialJg: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsLDInit: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/git-action-include-unstaged-changes.tsx) */
const GitActionIncludeUnstagedChanges: any = undefined;
/** Wave FY unresolved companion (missing-export:review/review-branch-picker.tsx) */
const ReviewBranchPicker: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsO3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsPDInit: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiQg@ui/deferred-ui-qg.tsx) */
const AppInitialQg: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsR3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialR3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:indexAppActionRunners@navigation/create-app-action-handler.ts) */
const AppInitialRW: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsSDInit: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (jsx-collision:worktreeBranchSetupModal@worktree/worktree-branch-setup-modal.ts) */
const AppInitialUE: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:review/wham-toggle-all-diffs.ts) */
const whamToggleAllDiffs: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function alpha({ cwd, enabled, hostConfig, operationSource }) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
  });
}
function bravo({
  cwd,
  enabled,
  hostConfig,
  operationSource,
  preserveRemoteRefs = false,
  query,
}) {
  return JSON.stringify({
    cwd: cwd ?? null,
    enabled,
    hostConfig,
    operationSource,
    preserveRemoteRefs,
    query,
  });
}
var copper,
  environmentLabelsL,
  environmentLabelsU = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureAppScopeInit();
    dataAppActionReviewFileExpanded();
    ensureUseGitRepoLiveQueryInit();
    parseSkillsManagePath();
    ensureHostConfigIdInit();
    copper = useQuery(
      appScopeAtom,
      ({ cwd, enabled, hostConfig, operationSource }) =>
        AppInitialR3(
          cwd,
          getHostConfigId(hostConfig),
          hostConfig,
          operationSource,
          {
            enabled,
          },
        ),
      {
        key: alpha,
      },
    );
    environmentLabelsL = useQuery(
      appScopeAtom,
      (
        {
          cwd,
          enabled,
          hostConfig,
          operationSource,
          preserveRemoteRefs = false,
          query,
        },
        { get },
      ) => {
        let xenon = get(copper, {
          cwd,
          enabled,
          hostConfig,
          operationSource,
        }).data;
        return getHostRpcClient(
          "search-branches",
          xenon,
          xenon == null
            ? null
            : {
                root: xenon.root,
                operationSource,
                preserveRemoteRefs,
                query,
                limit: 20,
              },
          getHostConfigId(hostConfig),
          hostConfig,
          {
            enabled,
            staleTime: readScrollTop.FIVE_SECONDS,
          },
        );
      },
      {
        key: bravo,
      },
    );
  });
function environmentLabelsC(yellow, zinc, amber, basalt) {
  let cedar = basalt === undefined ? {} : basalt;
  let daisy = cedar,
    ember = yellow ?? "",
    flint = identityCwd(ember);
  let garnet = {
    cwd: flint,
    includeUntrackedFiles: false,
    operationSource: amber,
  };
  let hazel = garnet,
    ivory = {
      ...hazel,
      includeUntrackedFiles: true,
    };
  let jasper = ivory,
    kelp = {
      method: "status-summary",
      params: jasper,
    };
  let lotus;
  return (
    (lotus = {
      liveQuery: kelp,
      staleTime: 1 / 0,
      ...daisy,
    }),
    useGitRepoLiveQuery(yellow, zinc, "status-summary", hazel, amber, lotus)
  );
}
var delta,
  environmentLabelsS = esmInit(() => {
    delta = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureUseGitRepoLiveQueryInit();
  });
function environmentLabelsO(mint, nova, olive, prism) {
  let quill = (sage) => {
    let { root } = sage;
    return {
      operationSource: olive,
      root,
      limit: 100,
    };
  };
  let reef;
  return (
    (reef = {
      liveQuery: falcon,
      select: echo,
      staleTime: 1 / 0,
      ...prism,
    }),
    useGitRepoLiveQuery(mint, nova, "recent-branches", quill, olive, reef)
  );
}
function echo(topaz) {
  return topaz.branches;
}
function falcon(ultra) {
  return {
    method: "recent-branches",
    params: ultra,
  };
}
var gamma,
  environmentLabelsA = esmInit(() => {
    gamma = reactCompilerRuntime();
    ensureUseGitRepoLiveQueryInit();
  });
function harbor(vapor, wheat) {
  let yarn = useQueryClient(),
    zephyr = CodexPluginActionResult(getHostConfigId),
    acorn = {
      retainRepoWatch: zephyr,
    };
  let { data } = AppInitialF3(vapor, wheat, acorn),
    bloom = vapor?.cwd ?? null,
    coral = vapor?.hostId ?? null,
    drift = ["vscode", "git-checkout-branch", bloom, coral];
  let eagle = async (honey) => {
    if (vapor == null) throw Error("Expected a repository target");
    return invokeDesktopRpc("git-checkout-branch", {
      params: {
        ...honey,
        cwd: vapor.cwd,
        hostId: vapor.hostId,
      },
      source: wheat,
    });
  };
  let frost = (iris) => {
    vapor != null &&
      data != null &&
      iris?.status === "success" &&
      AppInitialJ3(
        yarn,
        {
          commonDir: data.commonDir,
          root: data.root,
        },
        {
          changeType: "head",
          hostKey: getHostConfigId(vapor.hostConfig),
        },
      );
  };
  let glide;
  return (
    (glide = {
      mutationKey: drift,
      mutationFn: eagle,
      networkMode: "always",
      onSettled: frost,
    }),
    noop(glide)
  );
}
var indigo,
  jade = esmInit(() => {
    indigo = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureUseGitRepoLiveQueryInit();
    ensureHostConfigIdInit();
    AppInitialP3();
    useLocalEnvironmentEditorState();
    scrollAppActionTargetTo();
  });
function kite(jewel, knoll) {
  let lunar = useQueryClient(),
    moss = CodexPluginActionResult(getHostConfigId),
    north = {
      retainRepoWatch: moss,
    };
  let { data } = AppInitialF3(jewel, knoll, north),
    orbit = jewel?.cwd ?? null,
    pine = jewel?.hostId ?? null,
    quest = ["vscode", "git-create-branch", orbit, pine];
  let ridge = async (unity) => {
    if (jewel == null) throw Error("Expected a repository target");
    return invokeDesktopRpc("git-create-branch", {
      params: {
        ...unity,
        cwd: jewel.cwd,
        hostId: jewel.hostId,
      },
      source: knoll,
    });
  };
  let storm = (vale, wave, apex) => {
    if (jewel != null && data != null) {
      let brook = apex.mode === "synced" ? "synced-branch" : "head";
      AppInitialJ3(lunar, data, {
        changeType: brook,
        hostKey: getHostConfigId(jewel.hostConfig),
      });
    }
  };
  let tide;
  return (
    (tide = {
      mutationKey: quest,
      mutationFn: ridge,
      networkMode: "always",
      onSettled: storm,
    }),
    noop(tide)
  );
}
var $e,
  lemon = esmInit(() => {
    $e = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    ensureUseGitRepoLiveQueryInit();
    ensureHostConfigIdInit();
    AppInitialP3();
    useLocalEnvironmentEditorState();
    scrollAppActionTargetTo();
  });
function marble({ disabled, hasNoCommits, statusSummary }) {
  return {
    branchSelectionDisabled: disabled,
    createAndCheckoutDisabled: hasNoCommits || disabled,
    uncommittedFileCount: nickel(statusSummary),
  };
}
function nickel(cliff) {
  return cliff?.type === "success"
    ? Math.max(cliff.stagedCount, cliff.unstagedCount) +
        (cliff.untrackedCount ?? 0)
    : 0;
}
var onyx = esmInit(() => {});
export function environmentLabelsR(dusk: unknown) {
  let {
      gitRoot,
      hostConfig,
      localConversationId,
      isReadOnly = false,
      shouldShow,
      side = "top",
      align = "end",
      renderStaticBranch,
      renderControl,
      onOpenChange,
    } = dusk,
    elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    [grove, hill] = umbra.useState(false),
    [isle, juniper] = umbra.useState(false),
    [lagoon, meadow] = umbra.useState(false),
    [nest, oak] = umbra.useState(false),
    [petal, quiet] = umbra.useState(false),
    [rain, seed] = umbra.useState(0),
    [trail, urn] = umbra.useState(null),
    vine = [];
  let [wind, yarrow] = umbra.useState(vine),
    [azure, birch] = umbra.useState("idle"),
    canyon =
      gitRoot == null
        ? null
        : clearPendingWorktreeConversationStart({
            hostConfig,
            root: gitRoot,
          });
  let dew = canyon,
    ever =
      dew == null
        ? null
        : {
            cwd: dew.cwd,
            hostConfig,
          };
  let field = {
    enabled: shouldShow,
    operationSource: $,
    lookup: ever,
  };
  let grain = CodexBrowserSurfaceActionType(AppInitialRW, field),
    haven = grain.data?.trim() ?? "",
    ink = shouldShow && haven.length > 0,
    jadeite = CodexBrowserSurfaceActionType(
      ensureComposerEsm_E4_Init,
      localConversationId,
    ),
    kernel = petal || azure !== "idle",
    leaf = harbor(dew, $),
    maple = kite(dew, $),
    nimbus = leaf.isPending || maple.isPending,
    opal = fern.formatMessage({
      id: "composer.footer.branchSwitch.tooltip",
      defaultMessage: "Switch branch",
      description: "Tooltip shown for controls that switch git branches",
    }),
    plume = () => {
      hill(false);
    };
  let quillow = plume,
    silk = (rapids) => {
      elm.get(toastAtom).danger(
        fern.formatMessage(
          {
            id: "composer.footer.branchSwitch.checkoutError",
            defaultMessage: "Failed to switch branch: {message}",
            description:
              "Toast shown when switching local branches from the composer footer fails",
          },
          {
            message: rapids,
          },
        ),
      );
    };
  let thorn = silk,
    upland = (spur) => {
      elm.get(toastAtom).danger(
        fern.formatMessage(
          {
            id: "composer.footer.branchSwitch.createBranchError",
            defaultMessage: "Failed to create branch: {message}",
            description:
              "Toast shown when creating a branch from the composer footer fails",
          },
          {
            message: spur,
          },
        ),
      );
    };
  let vista = upland,
    wisp = (tor) => {
      let { errorType, conflictedPaths, nextAction } = tor;
      return errorType === "blocked-by-working-tree-changes"
        ? (yarrow(conflictedPaths ?? []),
          urn(nextAction),
          quillow(),
          oak(false),
          meadow(true),
          true)
        : false;
    };
  let yonder = wisp,
    zenith = async (updraft) => {
      if (!(nimbus || dew == null)) {
        if (updraft === haven) {
          quillow();
          return;
        }
        try {
          let verge = await leaf.mutateAsync({
            branch: updraft,
          });
          if (verge.status === "error") {
            if (
              yonder({
                errorType: verge.errorType,
                conflictedPaths: verge.conflictedPaths,
                nextAction: {
                  type: "checkout",
                  branch: updraft,
                },
              })
            )
              return;
            thorn(verge.error);
            return;
          }
          localConversationId != null &&
            ensureEnvironmentLabelsO3Init(localConversationId, updraft);
          quillow();
        } catch (weir) {
          let yard = weir;
          thorn(yard instanceof Error ? yard.message : String(yard));
        }
      }
    },
    anvil = async (anchor) => {
      if (!(nimbus || dew == null))
        try {
          let bolt = await maple.mutateAsync({
            branch: anchor,
            mode: "worktree",
            failIfExists: true,
          });
          if (bolt.status === "error") {
            vista(bolt.error);
            return;
          }
          let cog = await leaf.mutateAsync({
            branch: anchor,
          });
          if (cog.status === "error") {
            if (
              yonder({
                errorType: cog.errorType,
                conflictedPaths: cog.conflictedPaths,
                nextAction: {
                  type: "create-and-checkout",
                  branch: anchor,
                },
              })
            )
              return;
            thorn(cog.error);
            oak(false);
            return;
          }
          localConversationId != null &&
            ensureEnvironmentLabelsO3Init(localConversationId, anchor);
          oak(false);
        } catch (disc) {
          let edge = disc,
            forge = edge instanceof Error ? edge.message : String(edge);
          vista(forge);
        }
    };
  let be = anvil,
    beacon = () => {
      quiet(false);
      birch("idle");
      yarrow([]);
      urn(null);
    };
  let crag = beacon,
    dome = (gear) => {
      meadow(gear);
      gear || (yarrow([]), urn(null));
    };
  let eddy = dome,
    fjord = () => {
      dew != null &&
        (elm.set(GitActionIncludeUnstagedChanges, EditorDiffPage(dew), ""),
        birch("idle"),
        seed(at),
        meadow(false),
        quiet(true));
    };
  let glen = fjord,
    hearth = (hinge) => {
      if (hinge === "success" && trail != null) {
        let iron = trail;
        if ((crag(), iron.type === "checkout")) {
          zenith(iron.branch);
          return;
        }
        be(iron.branch);
        return;
      }
      birch(hinge);
    };
  let inlet = hearth;
  if (!ink)
    return shouldShow && grain.isSuccess
      ? renderControl({
          currentBranch: null,
          disabled: false,
          isPending: false,
          switchTooltipText: opal,
        })
      : null;
  if (gitRoot == null || isReadOnly)
    return (
      renderStaticBranch?.({
        currentBranch: haven,
      }) ?? null
    );
  let Jetty = DropdownMenuPopover,
    knob = (joint) => {
      joint && juniper(true);
      hill(joint);
      onOpenChange?.(joint);
    };
  let ledge = renderControl({
      currentBranch: haven,
      disabled: nimbus,
      isPending: nimbus,
      switchTooltipText: opal,
    }),
    mire = isle ? (
      <EnvironmentLabelsHelper9
        {...{
          currentBranch: haven,
          gitRoot,
          hostConfig,
          isOpen: grove,
          disabled: nimbus,
          onCheckout: zenith,
          onClose: quillow,
          onOpenCreate: () => {
            quillow();
            oak(true);
          },
        }}
      />
    ) : null;
  let nook = (
    <Jetty
      {...{
        side: side,
        open: grove,
        align: align,
        onOpenChange: knob,
        triggerButton: ledge,
        children: mire,
      }}
    />
  );
  let oxbow = nest ? (
    <EnvironmentLabelsHelper10
      {...{
        open: nest,
        onOpenChange: oak,
        conversationTitle: jadeite,
        gitRoot,
        hostConfig,
        isPending: nimbus,
        onSubmit: be,
      }}
    />
  ) : null;
  let pond =
    lagoon && gitRoot != null ? (
      <EnvironmentLabelsHelper11
        {...{
          open: lagoon,
          onOpenChange: eddy,
          conflictFiles: wind,
          gitRoot,
          hostConfig,
          targetBranch: trail?.branch ?? null,
          onContinue: glen,
        }}
      />
    ) : null;
  let quarry =
    kernel && dew != null ? (
      <EnsurePullRequestMediaBDInit
        key={rain}
        {...{
          open: petal,
          onOpenChange: quiet,
          conversationId: localConversationId,
          target: dew,
          onStatusChange: inlet,
          onRequestReset: crag,
        }}
      />
    ) : null;
  return (
    <>
      {nook}
      {oxbow}
      {pond}
      {quarry}
    </>
  );
}
function at(keystone) {
  return keystone + 1;
}
function EnvironmentLabelsHelper9(latch) {
  let {
      currentBranch,
      gitRoot,
      hostConfig,
      isOpen,
      disabled,
      onCheckout,
      onClose,
      onOpenCreate,
    } = latch,
    motor = useIntl(),
    [nut, piston] = umbra.useState(""),
    rivet = Chatgpt2(nut, 200),
    screw = {
      enabled: isOpen,
    };
  let { data } = environmentLabelsC(gitRoot, hostConfig, $, screw),
    torque = {
      enabled: isOpen,
    };
  let {
      data: _data = [],
      isLoading,
      isFetching,
      isError,
      refetch,
    } = environmentLabelsO(gitRoot, hostConfig, $, torque),
    valve = {
      enabled: isOpen,
    };
  let { data: __data } = semanticAccentColors(gitRoot, hostConfig, $, valve),
    axle = nut.trim();
  let bracket = axle,
    clamp = rivet.trim();
  let drill = clamp,
    engine = bracket !== drill,
    frame = drill.length > 0,
    gasket = {
      cwd: gitRoot,
      hostConfig,
      operationSource: $,
      query: drill,
      enabled: frame,
    };
  let {
      data: ___data,
      isFetching: _isFetching,
      isError: _isError,
      refetch: _refetch,
    } = CodexBrowserSurfaceActionType(environmentLabelsL, gasket),
    handle = ___data?.branches,
    insert = river({
      branches: _data,
      currentBranch,
      defaultBranch: __data,
    }),
    jacket = !isLoading && !isFetching && !isError && _data.length === 0,
    knurl = marble({
      disabled,
      hasNoCommits: jacket,
      statusSummary: data,
    });
  let {
      branchSelectionDisabled,
      createAndCheckoutDisabled,
      uncommittedFileCount,
    } = knurl,
    lever = jacket
      ? motor.formatMessage({
          id: "composer.footer.branchSwitch.createAndCheckout.disabledTooltip",
          defaultMessage: "Commit changes to create and checkout a new branch",
          description:
            "Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits",
        })
      : undefined;
  let mount = lever,
    nozzle = isLoading || (isFetching && insert.length === 0),
    platen = engine || _isFetching,
    ratchet = () => {
      refetch();
    };
  let shim = () => {
    _refetch();
  };
  let tappet = (gib) =>
    gib === currentBranch && uncommittedFileCount > 0 ? (
      <span className="inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "composer.footer.branchSwitch.uncommittedSummaryPrefix",
              defaultMessage:
                "Uncommitted: {fileCount, plural, one {# file} other {# files}}",
              description:
                "Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes",
              values: {
                fileCount: uncommittedFileCount,
              },
            }}
          />
        }
      </span>
    ) : null;
  let arbor = (
    <ReviewBranchPicker
      {...{
        branches: insert,
        selectedBranch: currentBranch,
        disabled: branchSelectionDisabled,
        isError,
        isLoading: nozzle,
        isSearchError: _isError,
        isSearchLoading: platen,
        onClose,
        onRetry: ratchet,
        onRetrySearch: shim,
        onSearchQueryChange: piston,
        onSelectBranch: onCheckout,
        renderBranchSubText: tappet,
        searchedBranches: handle,
        searchQuery: nut,
      }}
    />
  );
  let bushing = <DropdownMenu.Separator {...{}} />;
  let collar = (event) => {
    event.preventDefault();
    onOpenCreate();
  };
  let dowel = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.branchSwitch.createAndCheckout",
        defaultMessage: "Create and checkout new branch…",
        description:
          "Dropdown action label in the composer footer branch switcher to create and checkout a new branch",
      }}
    />
  );
  let flange = (
    <DropdownMenu.Item
      {...{
        LeftIcon: ensureComposerEsm_Wlt_Init,
        disabled: createAndCheckoutDisabled,
        tooltipText: mount,
        onSelect: collar,
        children: dowel,
      }}
    />
  );
  return (
    <>
      {arbor}
      {bushing}
      {flange}
    </>
  );
}
function EnvironmentLabelsHelper10(hub) {
  let {
      open,
      onOpenChange,
      conversationTitle,
      gitRoot,
      hostConfig,
      isPending,
      onSubmit,
    } = hub,
    idler = useIntl(),
    jig = useSettingValue(gitSettingsDefinitions.branchPrefix),
    keeper = ensureEnvironmentLabelsSDInit({
      branchPrefix: jig,
      conversationTitle,
    });
  let [lug, mandrel] = umbra.useState(keeper),
    nipple = open && gitRoot != null,
    orifice = {
      enabled: nipple,
    };
  let { data, isLoading, isFetching, isError } = environmentLabelsO(
      gitRoot,
      hostConfig,
      $,
      orifice,
    ),
    pin,
    race,
    sleeve,
    trunnion;
  {
    pin = data === undefined ? [] : data;
    let diaphragm = river({
      branches: pin,
      currentBranch: "",
      defaultBranch: null,
    });
    trunnion = lug.trim();
    race = trunnion.endsWith("/");
    sleeve = trunnion.length > 0 && diaphragm.includes(trunnion);
  }
  let boss = sleeve,
    cam = !isLoading && !isFetching && !isError && pin.length === 0,
    detent =
      !isPending &&
      !isLoading &&
      !isFetching &&
      !cam &&
      trunnion.length > 0 &&
      !race &&
      !boss &&
      gitRoot != null,
    eccentric = (
      <DeferredUiU
        {...{
          children: (
            <DeferredUiH
              {...{
                title: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "composer.footer.branchSwitch.createDialog.title",
                      defaultMessage: "Create and checkout branch",
                      description:
                        "Title for dialog that creates and checks out a new branch from the composer footer",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
  let follower = <AppInitialHE />;
  let guide = (event) => {
    mandrel(AppInitialJg(event.target.value));
  };
  let helix = (event) => {
    if (event.key === "Enter") {
      if ((event.preventDefault(), !detent)) return;
      onSubmit(trunnion);
    }
  };
  let impeller = idler.formatMessage({
    id: "composer.footer.branchSwitch.createDialog.placeholder",
    defaultMessage: "new-branch",
    description:
      "Placeholder for branch name input in the composer footer create-and-checkout dialog",
  });
  let journal = idler.formatMessage({
    id: "composer.footer.branchSwitch.createDialog.ariaLabel",
    defaultMessage: "Branch name",
    description:
      "Aria label for branch name input in the composer footer create-and-checkout dialog",
  });
  let kingpin = (
    <input
      autoFocus={true}
      className="h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
      value={lug}
      onChange={guide}
      onKeyDown={helix}
      placeholder={impeller}
      aria-label={journal}
    />
  );
  let land = race ? (
    <p className="text-xs text-token-error-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "composer.footer.branchSwitch.createDialog.trailingSlashError",
            defaultMessage: "Branch name cannot end with “/”.",
            description:
              "Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash",
          }}
        />
      }
    </p>
  ) : boss && !isPending ? (
    <p className="text-xs text-token-error-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "composer.footer.branchSwitch.createDialog.branchExistsError",
            defaultMessage: "Branch already exists.",
            description:
              "Validation message shown in the create-and-checkout branch dialog when the entered branch already exists",
          }}
        />
      }
    </p>
  ) : null;
  let mesh = (
    <DeferredUiU
      {...{
        className: "flex flex-col gap-2",
        children: [follower, kingpin, land],
      }}
    />
  );
  let neck = () => {
    onOpenChange(false);
  };
  let pad = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.branchSwitch.createDialog.close",
        defaultMessage: "Close",
        description:
          "Secondary button label in create-and-checkout branch dialog shown from the composer footer",
      }}
    />
  );
  let quillshaft = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        onClick: neck,
        children: pad,
      }}
    />
  );
  let roller = !detent,
    spindle = () => {
      onSubmit(trunnion);
    };
  let thrust = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.branchSwitch.createDialog.createAndCheckout",
        defaultMessage: "Create and checkout",
        description:
          "Primary button label in create-and-checkout branch dialog shown from the composer footer",
      }}
    />
  );
  let yoke = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        disabled: roller,
        loading: isPending,
        onClick: spindle,
        children: thrust,
      }}
    />
  );
  let baffle = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [quillshaft, yoke],
            }}
          />
        ),
      }}
    />
  );
  let capstan = (
    <DeferredUiB
      {...{
        "data-codex-branch-create-dialog": "",
        children: [eccentric, mesh, baffle],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        size: "feature",
        open,
        onOpenChange,
        children: capstan,
      }}
    />
  );
}
