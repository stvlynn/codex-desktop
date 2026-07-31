// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split 2/6
/* split-lane-import-depth:1 */

import { getCreditsPurchaseMinimumQuantity, parseFormattedCreditsQuantityString } from "../../account/credits-purchase-field-validators";
import { RateLimitResetCreditsDialog } from "../../account/rate-limit-reset-credits-dialog";
import { trimRateLimitName } from "../../account/trim-rate-limit-name";
import { useProfileUsageQuery as UseProfileUsageQuery } from "../../account/use-profile-usage-query";
import { appActionSidebarSectionRefSchema } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_ONBOARDING_WELCOME_OPTION_TOGGLED_TYPE } from "../../analytics/codex-onboarding-welcome-option-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { queueAutomationRun } from "../../automation/queue-automation-run";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { resolveCodexCloudAccess } from "../../cloud/resolve-codex-cloud-access";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationSh as DeferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { hasLoadedOldestItems } from "../../conversation/has-loaded-oldest-items";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL, CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { environmentLabelsA, environmentLabelsC, environmentLabelsO, environmentLabelsS } from "../../environments/environment-labels";
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { visualizationIdFromPath } from "../../files/visualization-html-path";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import { ensureHostRpcClientsInit, getHostConfigId, getHostRpcClient } from "../../hooks/host-rpc-client";
import { ensureUseCodexWorktreesInit, useCodexWorktrees } from "../../hooks/use-codex-worktrees";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseGitSubmodulePathsInit, useGitSubmodulePaths } from "../../hooks/use-git-submodule-paths";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconEH } from "../../icons/app-icon-eh";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZg } from "../../icons/app-icon-zg";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { DockIcon, EnsureDockIconInit } from "../../icons/dock-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { filterProjectsByFuzzyQuery } from "../../projects/filter-projects-by-fuzzy-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsDependenciesGuard } from "../../settings/settings-dependencies-guard";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { ChromeBackgroundPanel } from "../../ui/chrome-background-panel";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { useListKeyboardNavigation } from "../../ui/use-list-keyboard-navigation";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { stripDisallowedPathChars } from "../../utils/strip-disallowed-path-chars";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { titleCaseLastPathSegment } from "../../utils/title-case-last-path-segment";
import { ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { uniqueGithubOrigins } from "../../workspace/unique-github-origins";
import { enqueueWorktreeDirectionTask } from "../../worktree/enqueue-worktree-direction-task";
import { ToWorktree } from "../../worktree/to-worktree";
import { ComposerCategoryValueChip } from "../composer-category-value-chip";
import { getPluginDisplayName } from "../get-plugin-display-name";
import { getPluginShortDescription } from "../get-plugin-short-description";

// Cross-part soft stubs.
const AppInitialEz: any = undefined;
const AppInitialF3: any = undefined;
const AppInitialFg: any = undefined;
const AppInitialGE: any = undefined;
const AppInitialJg: any = undefined;
const AppInitialP3: any = undefined;
const AppInitialPg: any = undefined;
const AppInitialQg: any = undefined;
const AppInitialR: any = undefined;
const AppInitialRS: any = undefined;
const AppInitialRd: any = undefined;
const AppInitialWY: any = undefined;
const CodexCloudAccess: any = undefined;
const DeferredUiU232: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredUiX232: any = undefined;
const DeferredZd: any = undefined;
const Queued: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RemoteHostGlobeColorByHostId: any = undefined;
const commitModal: any = undefined;
const deferredConversationWE: any = undefined;
const deferredUiQdt: any = undefined;
const deferredUiQg: any = undefined;
const deferredUiXg: any = undefined;
const ensureEnvironmentLabelsO3Init: any = undefined;
const ensureEnvironmentLabelsSDInit: any = undefined;
const ensureSelectWorkspacePXInit: any = undefined;
const ensureUseGitRepoLiveQueryInit: any = undefined;
const jade: any = undefined;
const localRemoteDropdownA: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const pendingPastedTextAttachments: any = undefined;
const quartz: any = undefined;
const useLocalEnvironmentEditorState: any = undefined;

export const localRemoteDropdownI = esmInit(() => {
  nickel = reactCompilerRuntime();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  onyx = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  CodexCloudAccess();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  findProcessManagerRow();
  AppInitialP3();
  copilotDefaultModel();
  ensureDropdownMenuPopoverInit();
  DockIcon();
  ensureSkillsPageHelpersInit();
  useLocalEnvironmentEditorState();
  AppInitialWY();
  jade();
  AppInitialRS();
  localRemoteDropdownA();
  pearl = getJsxRuntime();
  quartz = "icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100";
});
function umbra(glen, hearth, inlet, jetty) {
  let knob = jetty === undefined ? {} : jetty;
  let ledge = knob,
    mire = glen ?? "",
    nook = identityCwd(mire);
  let oxbow = {
    cwd: nook,
    operationSource: inlet
  };
  let pond;
  return pond = {
    liveQuery: violet,
    staleTime: 1 / 0,
    ...ledge
  }, useGitRepoLiveQuery(glen, hearth, "list-worktrees", oxbow, inlet, pond);
}
function violet(quarry) {
  return {
    method: "list-worktrees",
    params: quarry
  };
}
var willow,
  xenon = esmInit(() => {
    willow = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureUseGitRepoLiveQueryInit();
  });
function Yellow(rapids) {
  let {
      open,
      onOpenChange,
      conversationId,
      composerViewState,
      conversationTitle,
      currentBranch,
      cwd
    } = rapids,
    spur = useIntl(),
    tor = AppInitialFg(conversationId),
    [updraft, verge] = garnet.useState(null),
    [weir, yard] = garnet.useState(null),
    anchor = ensureEnvironmentLabelsSDInit({
      branchPrefix: useSettingValue(gitSettingsDefinitions.branchPrefix) ?? undefined,
      conversationTitle
    }),
    bolt = weir ?? (currentBranch || anchor),
    cog = bolt.trim(),
    disc = ensureSteeringUserMessageClusterInit(CodexBrowserSurfaceActionType(DeferredUiU232, conversationId)),
    edge = {
      cwd,
      hostConfig: disc
    };
  let {
      data
    } = AppInitialF3(edge, "move_to_local_dialog"),
    forge = data?.root ?? null,
    gear = forge ?? cwd,
    hinge = deferredUiQdt(gear),
    {
      data: _data,
      isLoading,
      isFetching
    } = umbra(forge ?? cwd, disc, "move_to_local_dialog"),
    {
      data: __data
    } = useCodexWorktrees(disc, "move_to_local_dialog"),
    iron = readCodexHomeFromQuery(disc.id),
    {
      data: ___data
    } = CodexPluginActionResult(ensureEnvironmentLabelsO3Init),
    joint = _data?.worktrees,
    keystone = new Set((__data?.worktrees ?? []).map(zinc));
  let latch = keystone,
    motor = knurl => latch.has(deferredUiQdt(knurl)) || pathContainsWorktreesDir(knurl, iron);
  let nut = motor,
    piston,
    rivet,
    screw,
    torque,
    valve,
    axle;
  {
    let lever;
    lever = platen => !nut(platen.root);
    rivet = AppInitialRd({
      cwd,
      sourceWorktreeRoot: gear,
      repoWorktreeEntries: (joint ?? []).filter(lever)
    });
    let mount;
    mount = ___data?.labels ?? {};
    axle = mount;
    torque = rivet.find(item => item.gitRoot === updraft) ?? rivet[0] ?? null;
    let nozzle = torque?.workspaceRoot ?? null;
    screw = nozzle == null ? null : identityCwd(nozzle);
    piston = torque?.gitRoot ?? null;
    valve = piston ? deferredUiQdt(piston) : null;
  }
  let bracket = valve,
    clamp = open && piston != null,
    drill = {
      enabled: clamp
    };
  let {
      data: ____data,
      isLoading: _isLoading,
      isFetching: _isFetching
    } = AppInitialEz(piston, disc, "move_to_local_dialog", drill),
    engine = open && piston != null,
    frame = {
      enabled: engine
    };
  let {
      data: _____data,
      isLoading: __isLoading,
      isFetching: __isFetching
    } = environmentLabelsC(piston, disc, "move_to_local_dialog", frame),
    gasket = (joint ?? []).some(item => {
      let ratchet = deferredUiQdt(item.root);
      return !(nut(item.root) || item.headRef.type !== "branch" || item.headRef.string !== cog || bracket && ratchet === bracket || ratchet === hinge);
    }),
    _e = _____data?.type === "success" && _____data.stagedCount + _____data.unstagedCount + (_____data.untrackedCount ?? 0) > 0,
    handle = isLoading || isFetching || piston != null && (_isLoading || _isFetching || __isLoading || __isFetching || !_e && _____data?.type === "success" && _____data.untrackedCount == null),
    insert = null;
  if (tor != null) insert = tor;else if (isLoading || isFetching) {
    let shim;
    shim = spur.formatMessage({
      id: "localConversation.moveToLocal.disabled.loading",
      defaultMessage: "Checking available local workspaces…",
      description: "Tooltip shown when the move to local button is disabled while local worktrees are loading"
    });
    insert = shim;
  } else if (torque == null || screw == null) {
    let tappet;
    tappet = spur.formatMessage({
      id: "localConversation.moveToLocal.disabled.noWorkspace",
      defaultMessage: "No local workspace found for this worktree",
      description: "Tooltip shown when the move to local button is disabled because no local workspace is available"
    });
    insert = tappet;
  } else if (cog.length === 0) {
    let arbor;
    arbor = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.branchRequired",
      defaultMessage: "Enter a branch name",
      description: "Tooltip shown when the move to local button is disabled because no local branch name was entered"
    });
    insert = arbor;
  } else if (cog.endsWith("/")) {
    let bushing;
    bushing = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.trailingSlashError",
      defaultMessage: "Branch name cannot end with “/”",
      description: "Tooltip shown when the move to local button is disabled because the local branch name ends with a slash"
    });
    insert = bushing;
  } else if (gasket) {
    let collar;
    collar = spur.formatMessage({
      id: "localConversation.moveToLocal.disabled.branchCheckedOut",
      defaultMessage: "Branch is already checked out in another worktree",
      description: "Tooltip shown when the move to local button is disabled because the branch is checked out elsewhere"
    });
    insert = collar;
  } else if (forge == null) {
    let dowel;
    dowel = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.missingWorktreeRoot",
      defaultMessage: "Unable to resolve the current worktree",
      description: "Tooltip shown when the move to local button is disabled because the source worktree root is unavailable"
    });
    insert = dowel;
  } else if (piston != null && (_isLoading || _isFetching || __isLoading || __isFetching)) {
    let flange;
    flange = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.loadingStatus",
      defaultMessage: "Checking local workspace status…",
      description: "Tooltip shown when the move to local button is disabled while git status is loading"
    });
    insert = flange;
  } else if (____data == null) {
    let gib;
    gib = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.missingLocalBranch",
      defaultMessage: "Unable to determine the current local branch",
      description: "Tooltip shown when the move to local button is disabled because the current local branch is unavailable"
    });
    insert = gib;
  } else if (_____data?.type !== "success") {
    let hub;
    hub = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.localStatusError",
      defaultMessage: "Unable to determine whether the local workspace is clean",
      description: "Tooltip shown when the move to local button is disabled because the local git status check failed"
    });
    insert = hub;
  } else if (_e) {
    let idler;
    idler = spur.formatMessage({
      id: "localConversation.moveToLocal.confirm.localChangesBlocked",
      defaultMessage: "Stash or commit your local changes to hand off",
      description: "Tooltip shown when the move to local button is disabled because the destination local workspace is not clean"
    });
    insert = idler;
  }
  let jacket = disc.kind === "local" ? "local" : "remote",
    be = () => {
      yard(null);
    };
  return <Amber open={open} onOpenChange={onOpenChange} conversationId={conversationId} composerViewState={composerViewState} localBranch={bolt} trimmedLocalBranch={cog} onChangeLocalBranch={yard} cwd={cwd} localTargets={rivet} selectedLocalTarget={torque} onChangeLocalTarget={verge} workspaceRootLabels={axle} isLoadingBlocked={handle} confirmDisabledReason={insert} localGitRoot={piston} localWorkspaceCwd={screw} worktreeRoot={forge} destinationLabel={jacket} onResetLocalBranch={be} />;
}
function zinc(jig) {
  return deferredUiQdt(jig.dir);
}
function Amber(keeper) {
  let {
      open,
      onOpenChange,
      conversationId,
      composerViewState,
      localBranch,
      trimmedLocalBranch,
      onChangeLocalBranch,
      cwd,
      localTargets,
      selectedLocalTarget,
      onChangeLocalTarget,
      workspaceRootLabels,
      isLoadingBlocked,
      confirmDisabledReason,
      localGitRoot: lug,
      localWorkspaceCwd,
      worktreeRoot,
      destinationLabel,
      onResetLocalBranch
    } = keeper,
    mandrel = useIntl(),
    [nipple, orifice] = garnet.useState(""),
    [pin, race] = garnet.useState(null),
    sleeve = gammaPrime => {
      race(gammaPrime?.closest(".codex-dialog") ?? null);
    };
  let trunnion = sleeve,
    boss = CodexBrowserSurfaceActionType(DeferredUiX232, conversationId) ?? false,
    {
      activeOperationId
    } = ToWorktree(),
    cam = AppIconZg(conversationId),
    {
      addToLocalOperation,
      closeActiveOperation,
      removeOperation,
      openOperation,
      updateOperation
    } = enqueueWorktreeDirectionTask(),
    detent = cam != null && activeOperationId === cam.id,
    eccentric = open || detent,
    follower = confirmDisabledReason != null || lug == null || localWorkspaceCwd == null || worktreeRoot == null,
    Guide,
    Helix,
    Impeller,
    Journal,
    kingpin,
    land,
    mesh,
    neck,
    pad,
    quillshaft,
    roller,
    spindle,
    thrust,
    yoke,
    be,
    baffle,
    capstan,
    diaphragm,
    elbow,
    ferrule,
    grommet,
    header,
    injector,
    jumper,
    kerf,
    louver,
    manifold,
    nip,
    outlet,
    packing;
  injector = Symbol.for("react.early_return_sentinel");
  bb0: {
    let harborPrime = selectedLocalTarget == null ? null : ember({
        workspaceRoot: selectedLocalTarget.workspaceRoot,
        workspaceRootLabels
      }),
      indigoPrime = selectedLocalTarget == null || localTargets.length <= 1,
      jadePrime;
    jadePrime = xenonPrime => ({
      target: xenonPrime,
      label: ember({
        workspaceRoot: xenonPrime.workspaceRoot,
        workspaceRootLabels
      })
    });
    kingpin = filterProjectsByFuzzyQuery(localTargets.map(jadePrime), nipple, daisy);
    let kitePrime = mandrel.formatMessage({
      id: "localConversation.moveToLocal.modal.projectSearch",
      defaultMessage: "Search workspaces",
      description: "Accessible label and placeholder for searching handoff workspace targets"
    });
    let lemonPrime = kitePrime,
      marblePrime = () => {
        follower || (addToLocalOperation({
          sourceConversationId: conversationId,
          sourceBranch: trimmedLocalBranch,
          localBranch: trimmedLocalBranch,
          request: {
            cwd,
            localGitRoot: lug,
            localWorkspaceRoot: localWorkspaceCwd,
            worktreeRoot
          },
          stepIds: ["stash-source-changes", "detach-worktree-branch", "checkout-local-branch", "apply-changes-to-local", "switching-thread"],
          composerViewState
        }), orifice(""), onOpenChange(false), onResetLocalBranch());
      };
    let nickelPrime = marblePrime,
      onyxPrime = yellowPrime => {
        if (yellowPrime || orifice(""), !yellowPrime && detent) {
          if (cam?.status === "success" || cam?.status === "error") {
            removeOperation(cam.id);
            onOpenChange(false);
            return;
          }
          if (cam?.status === "warning") {
            removeOperation(cam.id);
            onOpenChange(false);
            return;
          }
          closeActiveOperation();
          onOpenChange(false);
          return;
        }
        yellowPrime || onResetLocalBranch();
        onOpenChange(yellowPrime);
      };
    let pearlPrime = onyxPrime;
    if (detent && cam != null) {
      let zincPrime = () => {
        if (cam.status === "success" || cam.status === "error") {
          removeOperation(cam.id);
          return;
        }
        if (cam.status === "warning") {
          removeOperation(cam.id);
          return;
        }
        closeActiveOperation();
      };
      let amberPrime = () => {
        updateOperation(cam.id, cedar);
        openOperation(cam.id);
      };
      let basaltPrime = <OperationStatusOverlay operation={cam} onClose={zincPrime} onRetry={amberPrime} />;
      let cedarPrime;
      cedarPrime = <UsePointerSurfaceInteractionGate size="compact" open={eccentric} onOpenChange={pearlPrime}>{basaltPrime}</UsePointerSurfaceInteractionGate>;
      injector = cedarPrime;
      break bb0;
    }
    Journal = UsePointerSurfaceInteractionGate;
    elbow = "compact";
    ferrule = "visible";
    grommet = open;
    header = pearlPrime;
    Impeller = deferredConversationWE.Root;
    yoke = "form";
    be = "gap-5";
    capstan = event => {
      event.preventDefault();
      nickelPrime();
    };
    diaphragm = <deferredConversationWE.Header icon={<AppIconYg className="icon-base rotate-90 text-token-foreground" />} />;
    spindle = "flex flex-col gap-5";
    let quartzPrime = <deferredConversationWE.Title><MemoizedFormattedMessage id="localConversation.moveToLocal.modal.titleByDestination" defaultMessage={"{destinationLabel, select, local {Hand off chat to local} remote {Hand off chat to remote} other {Hand off chat to remote}}"} description="Title for the move-to-local confirmation modal" values={{
        destinationLabel
      }} /></deferredConversationWE.Title>;
    let riverPrime = () => <input className="mx-1 inline-flex h-8 w-48 rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 text-token-foreground outline-none" autoFocus={true} value={localBranch} onChange={event => {
      onChangeLocalBranch(AppInitialJg(event.target.value));
    }} aria-label={mandrel.formatMessage({
      id: "localConversation.moveToLocal.modal.branchAriaLabel",
      defaultMessage: "Local branch name",
      description: "Aria label for the branch name input in the move-to-local modal"
    })} />;
    let slatePrime;
    slatePrime = <p className="text-base leading-6 tracking-[-0.13px] text-token-description-foreground">{<MemoizedFormattedMessage id="localConversation.moveToLocal.modal.subtitleWithBranchControl" defaultMessage={"{destinationLabel, select, local {Check out branch <branchControl></branchControl> in a local workspace and detach it from worktree.} remote {Check out branch <branchControl></branchControl> in a remote workspace and detach it from worktree.} other {Check out branch <branchControl></branchControl> in a remote workspace and detach it from worktree.}}"} description="Subtitle containing the editable branch name control in the move-to-local confirmation modal" values={{
        destinationLabel,
        branchControl: riverPrime
      }} />}</p>;
    thrust = <div className="flex flex-col gap-3">{quartzPrime}{slatePrime}</div>;
    quillshaft = "flex flex-col items-start gap-2 text-base leading-6 tracking-[-0.13px]";
    roller = <span className="text-token-description-foreground">{<MemoizedFormattedMessage id="localConversation.moveToLocal.modal.projectPrefixByDestination" defaultMessage={"{destinationLabel, select, local {Handing off to local workspace} remote {Handing off to remote workspace} other {Handing off to remote workspace}}"} description="Text shown before the project selector in the move-to-local modal" values={{
        destinationLabel
      }} />}</span>;
    neck = trunnion;
    pad = "w-full";
    Helix = DropdownMenuPopover;
    kerf = "center";
    louver = "list";
    manifold = "w-[var(--radix-dropdown-menu-trigger-width)] overflow-hidden";
    nip = "opaque";
    outlet = daisyPrime => {
      daisyPrime || orifice("");
    };
    packing = pin;
    let timberPrime = selectedLocalTarget == null ? undefined : mandrel.formatMessage({
        id: "localConversation.moveToLocal.modal.projectSelectorAriaLabelWithPath",
        defaultMessage: "{destinationLabel, select, local {Local workspace: {workspaceLabel}, {workspacePath}} remote {Remote workspace: {workspaceLabel}, {workspacePath}} other {Remote workspace: {workspaceLabel}, {workspacePath}}}",
        description: "Accessible label for the workspace selector in the move-to-local modal"
      }, {
        destinationLabel,
        workspaceLabel: harborPrime,
        workspacePath: selectedLocalTarget.workspaceRoot
      }),
      umbraPrime;
    umbraPrime = harborPrime == null ? <span className="min-w-0 flex-1 truncate text-left text-token-description-foreground">{<MemoizedFormattedMessage id="localConversation.moveToLocal.modal.projectPlaceholder" defaultMessage="No local workspace found" description="Placeholder shown when the move-to-local modal cannot find a local workspace target" />}</span> : <span className="flex min-w-0 items-center gap-1.5"><span className="w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]"><span className="block w-full text-left [direction:ltr] [unicode-bidi:plaintext]">{harborPrime}</span></span>{<AppIconSft className="icon-xs shrink-0 text-token-description-foreground" />}</span>;
    land = <button type="button" className="flex w-full min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground" aria-label={timberPrime} disabled={indigoPrime}>{umbraPrime}</button>;
    let violetPrime;
    violetPrime = event => {
      orifice(event.target.value);
    };
    mesh = <DropdownMenu.SearchInput aria-label={lemonPrime} className="shrink-0" inputClassName="font-medium" placeholder={lemonPrime} variant="inset" value={nipple} onChange={violetPrime} onKeyDown={basalt} />;
    Guide = DropdownMenu.Section;
    baffle = "min-h-0 flex-1 overflow-y-auto";
    let willowPrime;
    willowPrime = emberPrime => {
      let {
          target,
          label
        } = emberPrime,
        flintPrime = target.gitRoot === selectedLocalTarget?.gitRoot;
      return <DropdownMenu.Item key={target.gitRoot} aria-current={flintPrime ? "true" : undefined} RightIcon={flintPrime ? AppIconZlt : undefined} tooltipText={target.workspaceRoot} tooltipAlign="start" SubText={<span className="text-xs text-token-description-foreground">{target.workspaceRoot}</span>} onSelect={() => {
        onChangeLocalTarget(target.gitRoot);
      }}><span className="block truncate font-medium">{label}</span></DropdownMenu.Item>;
    };
    jumper = kingpin.map(willowPrime);
  }
  if (injector !== Symbol.for("react.early_return_sentinel")) return injector;
  let reducer = kingpin.length === 0 ? <DropdownMenu.Message centered={true}><MemoizedFormattedMessage id="localConversation.moveToLocal.modal.noProjectsFound" defaultMessage="No workspaces found" description="Shown when searching handoff workspace targets returns no results" /></DropdownMenu.Message> : null;
  let strainer = <Guide className={baffle}>{jumper}{reducer}</Guide>;
  let tee = <Helix align={kerf} contentMaxHeight={louver} contentClassName={manifold} surface={nip} onOpenChange={outlet} portalContainer={packing} triggerButton={land}>{mesh}{strainer}</Helix>;
  let union = selectedLocalTarget == null ? null : <p className="mt-2 max-h-20 overflow-y-auto text-xs leading-5 break-all text-token-description-foreground select-text">{selectedLocalTarget.workspaceRoot}</p>;
  let vent = <div ref={neck} className={pad}>{tee}{union}</div>;
  let wye = <div className={quillshaft}>{roller}{vent}</div>;
  let zener = <div className={spindle}>{thrust}{wye}</div>;
  let alphaPrime = boss ? <div className="flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-token-foreground"><AppIconZg className="icon-sm mt-1 shrink-0 text-token-editor-warning-foreground" />{<MemoizedFormattedMessage id="localConversation.threadHandoff.runningWarning" defaultMessage="This chat is running, so handing it off will interrupt the current response" description="Warning shown in task handoff confirmation dialogs when the source task is still running" />}</div> : null;
  let bravoPrime = isLoadingBlocked ? <MemoizedFormattedMessage id="localConversation.moveToLocal.modal.loading" defaultMessage="Checking for ability to hand off…" description="Button label shown while move-to-local is waiting on required data before it can continue" /> : <MemoizedFormattedMessage id="localConversation.moveToLocal.modal.continue" defaultMessage="Hand off" description="Primary action in the move-to-local modal" />;
  let copperPrime = <ReadLoginRouteQuerySnapshot className="h-11 w-full justify-center rounded-full px-4 text-base font-medium" color="primary" disabled={follower} loading={isLoadingBlocked} type="submit">{bravoPrime}</ReadLoginRouteQuerySnapshot>;
  let deltaPrime = confirmDisabledReason != null && !isLoadingBlocked ? <p className="text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground">{confirmDisabledReason}</p> : null;
  let echoPrime = <deferredConversationWE.Footer className="flex-col items-stretch gap-3" right={<div className="flex w-full flex-col gap-3">{alphaPrime}{copperPrime}{deltaPrime}</div>} />;
  let falconPrime = <Impeller as={yoke} className={be} onSubmit={capstan}>{diaphragm}{zener}{echoPrime}</Impeller>;
  return <Journal size={elbow} contentOverflow={ferrule} open={grommet} onOpenChange={header}>{falconPrime}</Journal>;
}
function basalt(event) {
  event.key === "Enter" && !event.nativeEvent.isComposing && event.preventDefault();
}
function cedar(garnetPrime) {
  Object.assign(garnetPrime, queueAutomationRun(garnetPrime));
}
function daisy(hazelPrime) {
  let {
    target,
    label
  } = hazelPrime;
  return [label, target.gitRoot, target.workspaceRoot];
}
function ember({
  workspaceRoot,
  workspaceRootLabels
}) {
  let ivoryPrime = deferredUiQdt(workspaceRoot);
  return (workspaceRootLabels[workspaceRoot]?.trim() ?? workspaceRootLabels[ivoryPrime]?.trim() ?? "") || workspaceRoot.split(/[/\\]+/).filter(Boolean).at(-1) || workspaceRoot;
}
var flint,
  garnet,
  hazel,
  ivory = esmInit(() => {
    flint = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    garnet = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    ensureDropdownMenuInit();
    RemoteHostGlobeColorByHostId();
    ensureUseCodexWorktreesInit();
    AppInitialR();
    AppInitialP3();
    environmentLabelsS();
    xenon();
    ensureSelectWorkspacePXInit();
    ensureDropdownMenuPopoverInit();
    ensureAppIconSftInit();
    AppInitialQg();
    deferredUiXg();
    AppInitialGE();
    extractColonPrefixedNamedTokens();
    ensureSettingsQueryAtomsInit();
    ensureAppShellAtomsInit();
    ensureComposerEsm_Wdt_Init();
    deferredUiQg();
    commitModal();
    DeferredZd();
    Queued();
    pendingPastedTextAttachments();
    AppInitialPg();
    hazel = getJsxRuntime();
  });
