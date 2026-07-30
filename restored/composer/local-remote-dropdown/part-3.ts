// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split 3/6
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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../boundaries/conversation-page-esm-inits";
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
const AppInitialFZ: any = undefined;
const AppInitialFg: any = undefined;
const AppInitialGE: any = undefined;
const AppInitialPg: any = undefined;
const AppInitialQg: any = undefined;
const AppInitialR: any = undefined;
const DeferredUiU232: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredUiX232: any = undefined;
const Queued: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const commitModal: any = undefined;
const deferredConversationWE: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredUiDH: any = undefined;
const deferredUiEnt: any = undefined;
const deferredUiXg: any = undefined;
const ensureEnvironmentLabelsSDInit: any = undefined;
const pendingPastedTextAttachments: any = undefined;

function Jasper(jasperPrime) {
  let {
      open,
      onOpenChange,
      conversationId,
      composerViewState,
      conversationTitle,
      currentBranch,
      cwd
    } = jasperPrime,
    kelpPrime = CodexPluginActionType(appScopeAtom),
    lotusPrime = useIntl(),
    mintPrime = AppInitialFg(conversationId),
    novaPrime = CodexBrowserSurfaceActionType(DeferredUiX232, conversationId) ?? false,
    olivePrime = ensureSteeringUserMessageClusterInit(CodexBrowserSurfaceActionType(DeferredUiU232, conversationId)),
    [prismPrime, quillPrime] = prism.useState(null),
    [reefPrime, sagePrime] = prism.useState(null),
    [topazPrime, ultraPrime] = prism.useState(null),
    {
      activeOperationId
    } = ToWorktree(),
    vaporPrime = AppIconZg(conversationId),
    {
      addToWorktreeOperation,
      closeActiveOperation,
      removeOperation,
      openOperation,
      updateOperation
    } = enqueueWorktreeDirectionTask(),
    wheatPrime = vaporPrime != null && activeOperationId === vaporPrime.id,
    yarnPrime = open || wheatPrime,
    {
      data
    } = semanticAccentColors(cwd, olivePrime, "move_to_worktree_dialog"),
    zephyrPrime = useSettingValue(gitSettingsDefinitions.branchPrefix),
    acornPrime = {
      enabled: open
    };
  let {
      data: _data,
      isLoading,
      isFetching
    } = AppInitialEz(cwd, olivePrime, "move_to_worktree_dialog", acornPrime),
    bloomPrime = ["move-thread", "to-worktree", "resolve-owned-worktree", conversationId, cwd];
  let coralPrime = () => getHostRpcClient("git").request({
    method: "resolve-worktree-for-thread",
    params: {
      cwd,
      conversationId,
      hostConfig: olivePrime,
      operationSource: "move_to_worktree_dialog"
    }
  });
  let driftPrime = {
    queryKey: bloomPrime,
    queryFn: coralPrime,
    enabled: open,
    staleTime: 0
  };
  let {
      data: __data,
      isLoading: _isLoading
    } = useQuery(driftPrime),
    eaglePrime = _data != null && _data === currentBranch,
    frostPrime = data != null && currentBranch === data,
    glidePrime = eaglePrime && !frostPrime,
    honeyPrime = isLoading || isFetching,
    irisPrime = open && glidePrime,
    jewelPrime = {
      enabled: irisPrime
    };
  let {
      data: ___data = [],
      isLoading: __isLoading,
      isFetching: _isFetching,
      isError,
      refetch
    } = environmentLabelsO(cwd, olivePrime, "move_to_worktree_dialog", jewelPrime),
    knollPrime = open && frostPrime,
    lunarPrime = {
      enabled: knollPrime
    };
  let {
      data: ____data = []
    } = environmentLabelsO(cwd, olivePrime, "move_to_worktree_dialog", lunarPrime),
    mossPrime = __data?.worktreeGitRoot != null && __data?.worktreeWorkspaceRoot != null,
    northPrime = azurePrime => !currentBranch || azurePrime !== currentBranch;
  let orbitPrime = nova({
      branches: ___data,
      defaultBranch: data ?? null
    }).filter(northPrime),
    pinePrime = __isLoading || _isFetching,
    questPrime = ensureEnvironmentLabelsSDInit({
      branchPrefix: zephyrPrime ?? undefined,
      conversationTitle
    }),
    ridgePrime = glidePrime && prismPrime && orbitPrime.includes(prismPrime) ? prismPrime : glidePrime ? orbitPrime[0] ?? null : null,
    stormPrime = frostPrime ? topazPrime ?? questPrime : currentBranch,
    tidePrime = stormPrime.trim(),
    unityPrime = tidePrime.length === 0,
    valePrime = tidePrime.endsWith("/"),
    wavePrime = data != null && tidePrime === data,
    apexPrime = frostPrime && tidePrime.length > 0 && ____data.includes(tidePrime),
    brookPrime = honeyPrime || _isLoading || glidePrime && pinePrime,
    cliffPrime = null;
  if (mintPrime != null) cliffPrime = mintPrime;else if (brookPrime) {
    let birchPrime;
    birchPrime = lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.loading",
      defaultMessage: "Checking for ability to hand off…",
      description: "Button label shown while move-to-worktree is waiting on required data before it can continue"
    });
    cliffPrime = birchPrime;
  } else if (frostPrime && unityPrime) {
    let canyonPrime;
    canyonPrime = lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.worktreeBranchRequired",
      defaultMessage: "Enter a worktree branch name.",
      description: "Inline validation message shown above the move-to-worktree CTA when the worktree branch name is empty"
    });
    cliffPrime = canyonPrime;
  } else if (valePrime) {
    let dewPrime;
    dewPrime = lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.trailingSlashError",
      defaultMessage: "Branch name cannot end with “/”.",
      description: "Validation message shown when the worktree branch name ends with a slash"
    });
    cliffPrime = dewPrime;
  } else if (wavePrime) {
    let everPrime;
    everPrime = lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.defaultBranchError",
      defaultMessage: "Worktree branch must be different from the default branch.",
      description: "Validation message shown when the entered worktree branch equals the default branch"
    });
    cliffPrime = everPrime;
  } else if (apexPrime) {
    let fieldPrime;
    fieldPrime = lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.branchAlreadyExistsError",
      defaultMessage: "Branch already exists.",
      description: "Validation message shown when the entered worktree branch already exists"
    });
    cliffPrime = fieldPrime;
  } else if (glidePrime && ridgePrime == null) {
    let grainPrime;
    grainPrime = isError ? lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.branchesError",
      defaultMessage: "Unable to load branches",
      description: "Error shown in the move-to-worktree modal when branch list fails to load"
    }) : lotusPrime.formatMessage({
      id: "localConversation.moveToWorktree.modal.noTargetBranch",
      defaultMessage: "No other local branches are available",
      description: "Message shown when no local branch can be selected for checkout before moving to a worktree"
    });
    cliffPrime = grainPrime;
  }
  let duskPrime = cliffPrime != null,
    elmPrime = () => {
      quillPrime(null);
      ultraPrime(null);
    };
  let fernPrime = elmPrime,
    grovePrime = havenPrime => {
      if (!havenPrime && wheatPrime) {
        if (vaporPrime?.status === "success" || vaporPrime?.status === "error") {
          removeOperation(vaporPrime.id);
          onOpenChange(false);
          return;
        }
        if (vaporPrime?.status === "warning") {
          removeOperation(vaporPrime.id);
          onOpenChange(false);
          return;
        }
        closeActiveOperation();
        onOpenChange(false);
        return;
      }
      havenPrime || fernPrime();
      onOpenChange(havenPrime);
    };
  let hillPrime = grovePrime,
    islePrime = () => {
      if (apexPrime) {
        kelpPrime.get(toastAtom).warning(lotusPrime.formatMessage({
          id: "localConversation.moveToWorktree.modal.branchAlreadyExists",
          defaultMessage: "Branch already exists",
          description: "Toast shown when moving to worktree with an existing branch name"
        }));
        return;
      }
      duskPrime || (addToWorktreeOperation({
        sourceConversationId: conversationId,
        sourceBranch: currentBranch,
        localBranch: ridgePrime,
        worktreeBranch: tidePrime,
        request: {
          cwd,
          defaultBranch: data ?? null,
          existingWorktreeGitRoot: __data?.worktreeGitRoot ?? null,
          existingWorktreeWorkspaceRoot: __data?.worktreeWorkspaceRoot ?? null,
          targetHasUncommittedChanges: __data?.hasUncommittedChanges ?? false
        },
        stepIds: [mossPrime ? "reuse-existing-worktree" : "create-new-worktree", "stash-source-changes", "checkout-local-branch", "stash-target-worktree-changes", "checkout-worktree-branch", "apply-changes-to-worktree", "switching-thread"],
        composerViewState
      }), onOpenChange(false), fernPrime());
    };
  if (wheatPrime && vaporPrime != null) {
    let inkPrime = () => {
      if (vaporPrime.status === "success" || vaporPrime.status === "error") {
        removeOperation(vaporPrime.id);
        return;
      }
      if (vaporPrime.status === "warning") {
        removeOperation(vaporPrime.id);
        return;
      }
      closeActiveOperation();
    };
    let jadeitePrime = () => {
      updateOperation(vaporPrime.id, mint);
      openOperation(vaporPrime.id);
    };
    let kernelPrime = <OperationStatusOverlay operation={vaporPrime} onClose={inkPrime} onRetry={jadeitePrime} />;
    let leafPrime;
    return <UsePointerSurfaceInteractionGate size="compact" open={yarnPrime} onOpenChange={hillPrime}>{kernelPrime}</UsePointerSurfaceInteractionGate>;
  }
  let JuniperPrime = UsePointerSurfaceInteractionGate,
    lagoonPrime = deferredConversationWE,
    meadowPrime = <deferredConversationWE.Header icon={<AppIconYg className="icon-base rotate-90 text-token-foreground" />} />;
  let nestPrime = <deferredConversationWE.Title><MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.title" defaultMessage="Hand off chat to worktree" description="Title for the move-to-worktree modal" /></deferredConversationWE.Title>;
  let oakPrime = !frostPrime && <p className="text-base leading-6 tracking-[-0.13px] text-token-description-foreground">{mossPrime ? <MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.subtitle.namedBranchExistingWorktree" defaultMessage={"Check out branch <branch>{branchName}</branch> in an existing worktree to continue working in parallel."} description="Subtitle for the move-to-worktree modal when a named branch will be checked out in an existing worktree" values={{
        branchName: tidePrime,
        branch: lotus
      }} /> : <MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.subtitle.namedBranchNewWorktree" defaultMessage={"Check out branch <branch>{branchName}</branch> in a new worktree to continue working in parallel."} description="Subtitle for the move-to-worktree modal when a named branch will be checked out in a new worktree" values={{
        branchName: tidePrime,
        branch: kelp
      }} />}</p>,
    petalPrime = <div className="flex flex-col gap-3">{nestPrime}{oakPrime}</div>;
  let quietPrime = glidePrime ? <div className="flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]"><span className="text-token-description-foreground">{<MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.localCheckoutLabel" defaultMessage="Local workspace will switch to" description="Label for the local workspace branch switch; the branch selector is shown immediately after this text" />}</span><div ref={maplePrime => {
        if (typeof document > "u") {
          sagePrime(null);
          return;
        }
        let nimbusPrime = maplePrime?.closest(".codex-dialog") ?? document.body;
        sagePrime(nimbusPrime);
      }}>{<DropdownMenuPopover align="end" contentMaxHeight="list" contentWidth="menuBounded" portalContainer={reefPrime} triggerButton={<button type="button" className="flex min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground disabled:opacity-50" disabled={pinePrime || isError}>{ridgePrime ? <span className="flex min-w-0 items-center gap-1.5"><span className="w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]"><span className="block w-full text-left [direction:ltr] [unicode-bidi:plaintext]">{ridgePrime}</span></span>{<AppIconSft className="icon-xs shrink-0 text-token-description-foreground" />}</span> : <span className="min-w-0 flex-1 truncate text-left text-token-description-foreground">{<MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.localBranchPlaceholder" defaultMessage="Select local checkout branch" description="Placeholder shown in the move-to-worktree modal branch selector" />}</span>}</button>}>{pinePrime ? <DropdownMenu.Item disabled={true}><MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.branchesLoading" defaultMessage="Loading branches…" description="Label shown while loading branches in the move-to-worktree modal" /></DropdownMenu.Item> : isError ? <DropdownMenu.Section className="flex flex-col gap-1"><DropdownMenu.SectionLabel><MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.branchesError" defaultMessage="Unable to load branches" description="Error shown in the move-to-worktree modal when branch list fails to load" /></DropdownMenu.SectionLabel><DropdownMenu.Item onSelect={() => {
              refetch();
            }}><MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.branchesRetry" defaultMessage="Retry" description="Retry button for branch loading errors in the move-to-worktree modal" /></DropdownMenu.Item></DropdownMenu.Section> : orbitPrime.length === 0 ? <DropdownMenu.Item disabled={true}><MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.noTargetBranch" defaultMessage="No other local branches are available" description="Message shown when no local branch can be selected for checkout before moving to a worktree" /></DropdownMenu.Item> : <DropdownMenu.Section className="flex max-h-40 flex-col overflow-y-auto">{orbitPrime.map(item => <DropdownMenu.Item key={item} className="[direction:rtl] [&_.min-w-0]:text-left" onSelect={() => {
              quillPrime(item);
            }}><span className="flex min-w-0 items-center gap-1.5">{<CoerceLocalFilesystemPath className="icon-sm shrink-0 text-token-foreground" />}<span className="[direction:ltr] [unicode-bidi:plaintext]">{item}</span></span></DropdownMenu.Item>)}</DropdownMenu.Section>}</DropdownMenuPopover>}</div></div> : null,
    rainPrime = frostPrime ? <div className="flex flex-col gap-2"><span className="text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground">{<MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.worktreeBranchLabel" defaultMessage="Branch name" description="Label for the target worktree branch when moving from the default branch" />}</span><input className="h-12 w-full rounded-2xl border border-token-border/40 bg-transparent px-4 text-base leading-6 tracking-[-0.13px] text-token-foreground outline-none placeholder:text-token-description-foreground" autoFocus={true} value={stormPrime} onChange={event => {
        ultraPrime(event.target.value);
      }} onKeyDown={event => {
        event.key === "Enter" && (event.preventDefault(), islePrime());
      }} placeholder={lotusPrime.formatMessage({
        id: "localConversation.moveToWorktree.modal.worktreeBranchPlaceholder",
        defaultMessage: "new-branch",
        description: "Placeholder for worktree branch name input when moving from the default branch"
      })} aria-label={lotusPrime.formatMessage({
        id: "localConversation.moveToWorktree.modal.worktreeBranchAriaLabel",
        defaultMessage: "Worktree branch name",
        description: "Aria label for worktree branch name input when moving from the default branch"
      })} /></div> : null;
  let seedPrime = <div className="flex flex-col gap-5">{petalPrime}{quietPrime}{rainPrime}</div>;
  let $e = novaPrime ? <div className="flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-token-foreground"><AppIconZg className="icon-sm mt-1 shrink-0 text-token-editor-warning-foreground" />{<MemoizedFormattedMessage id="localConversation.threadHandoff.runningWarning" defaultMessage="This chat is running, so handing it off will interrupt the current response" description="Warning shown in task handoff confirmation dialogs when the source task is still running" />}</div> : null;
  let trailPrime = brookPrime ? <MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.loading" defaultMessage="Checking for ability to hand off…" description="Button label shown while move-to-worktree is waiting on required data before it can continue" /> : <MemoizedFormattedMessage id="localConversation.moveToWorktree.modal.continue" defaultMessage="Hand off" description="Primary action in the move-to-worktree modal" />;
  let urnPrime = <ReadLoginRouteQuerySnapshot className="h-11 w-full justify-center rounded-full px-4 text-base font-medium" color="primary" disabled={duskPrime} loading={brookPrime} onClick={islePrime}>{trailPrime}</ReadLoginRouteQuerySnapshot>;
  let vinePrime = cliffPrime != null && !brookPrime ? <p className="text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground">{cliffPrime}</p> : null;
  let windPrime = <deferredConversationWE.Footer className="flex-col items-stretch gap-3" right={<div className="flex w-full flex-col gap-3">{$e}{urnPrime}{vinePrime}</div>} />;
  let yarrowPrime = <lagoonPrime.Root className="gap-5">{meadowPrime}{seedPrime}{windPrime}</lagoonPrime.Root>;
  return <JuniperPrime size="compact" open={open} onOpenChange={hillPrime}>{yarrowPrime}</JuniperPrime>;
}
function kelp(opalPrime) {
  return <DollarR>{opalPrime}</DollarR>;
}
function lotus(plumePrime) {
  return <DollarR>{plumePrime}</DollarR>;
}
function mint(quillowPrime) {
  Object.assign(quillowPrime, queueAutomationRun(quillowPrime));
}
function DollarR(rootPrime) {
  let {
    children
  } = rootPrime;
  return <span className="mx-1 inline-flex max-w-full items-center rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 tracking-[-0.13px] text-token-foreground"><span className="truncate">{children}</span></span>;
}
function nova({
  branches,
  defaultBranch
}) {
  return defaultBranch == null || !branches.includes(defaultBranch) || branches[0] === defaultBranch ? branches : [defaultBranch, ...branches.filter(item => item !== defaultBranch)];
}
var olive,
  prism,
  quill,
  reef = esmInit(() => {
    olive = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    prism = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    ensureDropdownMenuInit();
    ensureComposerEsm_Ilt_Init();
    environmentLabelsA();
    AppInitialR();
    remoteUpstreamUrl();
    usePluginsFeatureEnabled();
    ensureAppIconSftInit();
    AppInitialQg();
    deferredUiXg();
    AppInitialGE();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    ensureAppShellAtomsInit();
    ensureHostRpcClientsInit();
    commitModal();
    Queued();
    pendingPastedTextAttachments();
    AppInitialPg();
    quill = getJsxRuntime();
  });
function Sage(silkPrime) {
  let {
      selectedEnvironment,
      zeroEnvironments,
      onClick
    } = silkPrime,
    thornPrime = useIntl();
  if (zeroEnvironments) {
    let zenithPrime = <HostFeatureConfigToggles href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} className={ui} />;
    let anvilPrime;
    return <DropdownMenu.Item rightIcon={zenithPrime} href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} onClick={topaz}><span className="text-token-description-foreground">{<MemoizedFormattedMessage id="composer.mode.remote.setupViaWeb" defaultMessage="Set up an environment via Codex web" description="Menu item to set up an environment via Codex web" />}</span></DropdownMenu.Item>;
  }
  let uplandPrime = event => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };
  let vistaPrime = thornPrime.formatMessage({
    id: "composer.environmentSelector.tooltip",
    defaultMessage: "Select a cloud environment",
    description: "Tooltip content for environment selector"
  });
  let wispPrime = selectedEnvironment?.label ?? <MemoizedFormattedMessage id="codex.environmentSelector.noEnvironment" defaultMessage="No environment" description="No environment selected message" />;
  let yonderPrime = <span className="text-token-description-foreground">{wispPrime}</span>;
  return <DropdownMenu.Item RightIcon={AppIconYlt} className="pl-7" onClick={uplandPrime} tooltipText={vistaPrime}>{yonderPrime}</DropdownMenu.Item>;
}
function topaz(beaconPrime) {
  deferredUiEnt({
    disposition: "current-tab",
    event: beaconPrime,
    href: CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL,
    initiator: "open_in_browser_bridge"
  });
}
function Ultra(cragPrime) {
  let {
      selectedEnvironment,
      envQuery,
      setEnvQuery,
      envListState,
      listToShow,
      setComposerMode,
      setSelectedEnvironment,
      setOpen,
      onClosePanel
    } = cragPrime,
    domePrime = useIntl(),
    eddyPrime = event => {
      event.stopPropagation();
      event.preventDefault();
      onClosePanel();
    };
  let fjordPrime = domePrime.formatMessage({
    id: "composer.environmentSelector.goBack",
    defaultMessage: "Back to composer",
    description: "Accessible label for closing environment selector"
  });
  let glenPrime = <AppIconPZ className="icon-xxs" />;
  let hearthPrime = <ReadLoginRouteQuerySnapshot color="ghost" size="icon" onClick={eddyPrime} aria-label={fjordPrime}>{glenPrime}</ReadLoginRouteQuerySnapshot>;
  let inletPrime = domePrime.formatMessage({
    id: "composer.searchEnvironments",
    defaultMessage: "Search environments",
    description: "Search environments placeholder"
  });
  let jettyPrime = event => setEnvQuery(event.target.value);
  let knobPrime = <DropdownMenu.SearchInput className="flex-1" placeholder={inletPrime} value={envQuery} onChange={jettyPrime} />;
  let ledgePrime = <DropdownMenu.Section className="my-1 flex w-full items-center gap-1.5 px-[var(--padding-row-x)]">{hearthPrime}{knobPrime}</DropdownMenu.Section>;
  let mirePrime = envListState === "list" && listToShow?.map(weirPrime => <DropdownMenu.Item key={weirPrime.id} RightIcon={weirPrime.id === selectedEnvironment?.id ? AppIconZlt : undefined} onClick={() => {
    setComposerMode("cloud");
    setSelectedEnvironment(weirPrime);
    setOpen(false);
  }}>{weirPrime.label}</DropdownMenu.Item>);
  let nookPrime = envListState === "none-found" && <DropdownMenu.Message centered={true}><MemoizedFormattedMessage id="codex.environments.noEnvironmentsFound" defaultMessage="No environments found" description="Message shown when no Codex environments were found" /></DropdownMenu.Message>;
  let oxbowPrime = envListState === "loading" && <VSCODE_EDITOR_ID className="icon-xxs my-4 ms-2 self-center text-token-description-foreground" />;
  let pondPrime = envListState === "error" && <div className="w-full rounded-lg py-1.5 text-sm"><span className="flex items-center gap-1.5">{<EnsureDockIconInit className="icon-xs" />}<span className="flex-1 truncate">{selectedEnvironment?.label ?? <MemoizedFormattedMessage id="codex.environmentSelector.noEnvironment" defaultMessage="No environment" description="No environment selected message" />}</span>{<AppIconYlt className="icon-xs" />}</span></div>;
  let quarryPrime = <div className="flex h-[150px] flex-col overflow-y-auto pb-1">{mirePrime}{nookPrime}{oxbowPrime}{pondPrime}</div>;
  let rapidsPrime = <DropdownMenu.Separator />;
  let spurPrime = <HostFeatureConfigToggles href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} className={ui} />;
  let torPrime = <DropdownMenu.Item LeftIcon={deferredConversationWH3} rightIcon={spurPrime} href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} onClick={wheat}><MemoizedFormattedMessage id="codex.environments.environmentSettings" defaultMessage="Environment settings" description="Codex code environment settings link" /></DropdownMenu.Item>;
  let updraftPrime = <HostFeatureConfigToggles href={acorn} className={ui} />;
  let vergePrime = <DropdownMenu.Section className="flex flex-col">{torPrime}<DropdownMenu.Item LeftIcon={AppIconEH} rightIcon={updraftPrime} href={acorn} onClick={vapor}><MemoizedFormattedMessage id="codex.environments.learnMore" defaultMessage="Learn more" description="Codex code environment learn more link" /></DropdownMenu.Item></DropdownMenu.Section>;
  return <div className="flex w-full flex-col"><div className="flex w-56 flex-col overflow-hidden">{ledgePrime}{quarryPrime}{rapidsPrime}{vergePrime}</div></div>;
}
function vapor(yardPrime) {
  deferredUiEnt({
    disposition: "current-tab",
    event: yardPrime,
    href: acorn,
    initiator: "open_in_browser_bridge"
  });
}
function wheat(anchorPrime) {
  deferredUiEnt({
    disposition: "current-tab",
    event: anchorPrime,
    href: CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL,
    initiator: "open_in_browser_bridge"
  });
}
var yarn,
  zephyr,
  ui,
  acorn,
  bloom = esmInit(() => {
    yarn = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Qtt_Init();
    ensureConversationPageEsm_B0_Init();
    ensureComposerEsm_Sut_Init();
    findProcessManagerRow();
    AppInitialFZ();
    ensureDropdownMenuPopoverInit();
    AppIconYlt();
    DockIcon();
    deferredUiDH();
    ensureHooksFocusIconInit();
    zephyr = getJsxRuntime();
    ui = "icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100";
    acorn = "https://platform.openai.com/docs/codex/overview#environment-configuration";
  });
