// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split 5/6
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
const AppInitialD: any = undefined;
const AppInitialDg: any = undefined;
const AppInitialEg: any = undefined;
const AppInitialEz: any = undefined;
const AppInitialOg: any = undefined;
const AppInitialX: any = undefined;
const DeferredUiP22: any = undefined;
const Glide: any = undefined;
const Honey: any = undefined;
const IntlProvider: any = undefined;
const Jasper: any = undefined;
const Yellow: any = undefined;
const ensureSelectWorkspaceIXInit: any = undefined;

function North(emberSecond) {
  let {
      open,
      onOpenChange,
      side,
      codexCloudAccess,
      crossHostHandoffEnabled,
      showCrossHostHandoff,
      conversationId,
      executionTarget,
      gitRoot,
      setComposerMode,
      threadHandoff,
      worktreeSegmentLabel,
      tooltipContent,
      tooltipMaxWidth: flintSecond,
      triggerVariant,
      openHandoffDialog,
      openHostWorktreeHandoffDialog,
      localWorkspaceRootForHandoff
    } = emberSecond,
    garnetSecond = useIntl(),
    hazelSecond = CodexPluginActionResult(getHostConfigId),
    ivorySecond = {
      retainRepoWatch: hazelSecond
    };
  let {
      data
    } = AppInitialEz(gitRoot, executionTarget.hostConfig, "local_remote_dropdown", ivorySecond),
    jasperSecond = AppIconZg(conversationId),
    kelpSecond = AppInitialOg(jasperSecond),
    lotusSecond = kelpSecond?.direction === "to-host-worktree" ? null : kelpSecond,
    mintSecond = kelpSecond?.status === "queued" || kelpSecond?.status === "running",
    novaSecond = kelpSecond?.direction === "to-host-worktree" && mintSecond,
    oliveSecond = CodexBrowserSurfaceActionType(DeferredUiP22, conversationId),
    {
      openOperation
    } = enqueueWorktreeDirectionTask(),
    prismSecond = data ?? AppInitialEg(jasperSecond, conversationId) ?? (showCrossHostHandoff ? oliveSecond : null),
    quillSecond = stripDisallowedPathChars({
      conversationId,
      handoffBranch: prismSecond,
      handoffDirection: AppInitialDg({
        codexWorktree: false,
        operation: lotusSecond,
        threadHandoff
      }),
      operation: kelpSecond,
      threadHandoff
    }),
    reefSecond = novaSecond,
    sageSecond = kelpSecond?.status === "queued" || kelpSecond?.status === "running" ? garnetSecond.formatMessage({
      id: "localConversation.threadHandoff.tooltip.viewProgress",
      defaultMessage: "View progress",
      description: "Tooltip shown when a task handoff is in progress and the button reopens the progress view"
    }) : undefined;
  let topazSecond = sageSecond,
    ultraSecond = kelpSecond?.status === "queued" || kelpSecond?.status === "running" ? <VSCODE_EDITOR_ID className="icon-2xs" /> : kelpSecond?.status === "error" ? <AppIconZg className="icon-2xs text-token-danger" /> : kelpSecond?.hasUnseenTerminalState && kelpSecond.status === "warning" ? <AppIconZg className="icon-2xs text-token-editor-warning-foreground" /> : <AppIconYg className="icon-2xs rotate-90" />;
  let vaporSecond = ultraSecond,
    wheatSecond = kelpSecond?.direction === "to-host-worktree" ? <AppIconYg className="icon-2xs rotate-90" /> : vaporSecond;
  let yarnSecond = wheatSecond,
    zephyrSecond = novaSecond ? garnetSecond.formatMessage($.finishCurrentHandoffTooltip) : lotusSecond == null ? undefined : topazSecond;
  let acornSecond = zephyrSecond,
    bloomSecond = () => {
      if (onOpenChange(false), lotusSecond != null) {
        openHandoffDialog();
        openOperation(lotusSecond.id);
        return;
      }
      openHandoffDialog();
    };
  let coralSecond = bloomSecond,
    driftSecond = showCrossHostHandoff && (conversationId != null && threadHandoff != null || kelpSecond?.direction === "to-host-worktree"),
    eagleSecond = quillSecond || driftSecond && (kelpSecond?.direction === "to-host-worktree" || localWorkspaceRootForHandoff != null),
    frostSecond = <PopoverMenu.ItemLeading><ProjectDropdownGlyphIcon /></PopoverMenu.ItemLeading>;
  let glideSecond = <PopoverMenu.ItemLabel>{worktreeSegmentLabel}</PopoverMenu.ItemLabel>;
  let honeySecond = eagleSecond ? <PopoverMenu.ItemMeta variant="icon">{quillSecond ? <AppIconSft /> : <AppIconYlt />}</PopoverMenu.ItemMeta> : null;
  let irisSecond = <>{frostSecond}{glideSecond}{honeySecond}</>;
  let jewelSecond = irisSecond,
    knollSecond;
  if (triggerVariant !== "summary-panel") {
    let northSecond = eagleSecond ? "chevron" : "none",
      orbitSecond;
    orbitSecond = <ComposerCategoryValueChip categoryLabel={null} collapse="none" icon={null} indicator={northSecond} value={worktreeSegmentLabel} valueClassName="text-token-foreground" />;
    knollSecond = orbitSecond;
  } else if (eagleSecond) {
    let pineSecond = executionTarget.cwd ?? undefined,
      questSecond;
    questSecond = <PopoverMenu.ItemButton title={pineSecond}>{jewelSecond}</PopoverMenu.ItemButton>;
    knollSecond = questSecond;
  } else {
    let ridgeSecond = executionTarget.cwd ?? undefined,
      stormSecond;
    stormSecond = <PopoverMenu.Item title={ridgeSecond}>{jewelSecond}</PopoverMenu.Item>;
    knollSecond = stormSecond;
  }
  let be = triggerVariant === "summary-panel" && "w-full",
    lunarSecond = IntlProvider(be);
  let mossSecond = eagleSecond ? <DropdownMenuPopover open={open} onOpenChange={onOpenChange} side={side} triggerButton={triggerVariant === "summary-panel" ? knollSecond : <OptionalTooltip tooltipContent={tooltipContent} tooltipMaxWidth={flintSecond}>{knollSecond}</OptionalTooltip>}><div className={IntlProvider("flex flex-col", showCrossHostHandoff ? "min-w-[220px]" : "min-w-[180px]")}>{showCrossHostHandoff ? <DropdownMenu.Title><MemoizedFormattedMessage id="composer.mode.newTask.header" defaultMessage="Continue in" description="Header label above agent mode options" /></DropdownMenu.Title> : null}{quillSecond ? <DropdownMenu.Item disabled={reefSecond} onSelect={coralSecond} tooltipText={acornSecond}><DropdownMenu.ItemIcon>{yarnSecond}</DropdownMenu.ItemIcon>{<Honey useContinueLabel={showCrossHostHandoff} direction="to-local" isRemoteHost={executionTarget.hostId !== LOCAL_HOST_ID} />}</DropdownMenu.Item> : null}{showCrossHostHandoff ? <Glide conversationId={conversationId} threadHandoff={threadHandoff} menuOperation={kelpSecond} crossHostHandoffEnabled={crossHostHandoffEnabled} handoffBranch={prismSecond} handoffIcon={vaporSecond} showSeparator={false} sourceHostId={executionTarget.hostId} sourceGitRoot={gitRoot} sourceWorkspaceRoot={executionTarget.cwd} localWorkspaceRootForHandoff={localWorkspaceRootForHandoff} closeDropdown={() => {
        onOpenChange(false);
      }} openHostWorktreeHandoffDialog={openHostWorktreeHandoffDialog} openOperation={openOperation} /> : null}{showCrossHostHandoff && codexCloudAccess === "enabled" ? <DropdownMenu.Item disabled={mintSecond} onClick={() => {
        setComposerMode("cloud");
        onOpenChange(false);
      }} tooltipText={mintSecond ? garnetSecond.formatMessage($.finishCurrentHandoffTooltip) : garnetSecond.formatMessage({
        id: "composer.mode.cloud.tooltip",
        defaultMessage: "Work in a cloud environment",
        description: "Tooltip content for cloud mode dropdown item"
      })}><DropdownMenu.ItemIcon><AppInitialD className="icon-2xs" /></DropdownMenu.ItemIcon><MemoizedFormattedMessage {...$.runInCloud} /></DropdownMenu.Item> : null}</div></DropdownMenuPopover> : <OptionalTooltip tooltipContent={tooltipContent} tooltipMaxWidth={flintSecond}><span className="inline-flex"><div className="pointer-events-none">{knollSecond}</div></span></OptionalTooltip>;
  return <div className={lunarSecond}>{mossSecond}</div>;
}
function orbit(tideSecond) {
  let {
      onClose,
      conversationId,
      composerViewState,
      executionTarget,
      gitRoot,
      threadHandoff,
      isLocalModeRemote,
      showCrossHostHandoff
    } = tideSecond,
    {
      data
    } = ensureSelectWorkspaceIXInit(),
    unitySecond = CodexPluginActionResult(getHostConfigId),
    valeSecond = {
      retainRepoWatch: unitySecond
    };
  let {
      data: _data
    } = AppInitialEz(gitRoot, executionTarget.hostConfig, "local_remote_dropdown", valeSecond),
    waveSecond = AppIconZg(conversationId),
    apexSecond = AppInitialOg(waveSecond),
    brookSecond = CodexBrowserSurfaceActionType(DeferredUiP22, conversationId),
    cliffSecond = AppInitialDg({
      codexWorktree: pathContainsWorktreesDir(isLocalModeRemote ? null : executionTarget.activeWorkspaceRoot, data?.codexHome),
      operation: apexSecond,
      threadHandoff
    }),
    duskSecond = _data ?? AppInitialEg(waveSecond, conversationId) ?? (showCrossHostHandoff ? brookSecond : null);
  let elmSecond = duskSecond,
    fernSecond = hillSecond => {
      hillSecond || onClose();
    };
  let groveSecond = fernSecond;
  return cliffSecond === "to-local" ? <Yellow open={true} onOpenChange={groveSecond} conversationId={conversationId} composerViewState={composerViewState} conversationTitle={threadHandoff.conversationTitle} currentBranch={elmSecond ?? ""} cwd={threadHandoff.cwd} /> : <Jasper open={true} onOpenChange={groveSecond} conversationId={conversationId} composerViewState={composerViewState} conversationTitle={threadHandoff.conversationTitle} currentBranch={elmSecond ?? ""} cwd={threadHandoff.cwd} />;
}
function Pine(isleSecond) {
  let {
      composerMode,
      gitRoot,
      hostConfig
    } = isleSecond,
    juniperSecond = CodexPluginActionResult(getHostConfigId),
    lagoonSecond = composerMode === "worktree",
    meadowSecond = {
      enabled: lagoonSecond,
      retainRepoWatch: juniperSecond
    };
  let {
    data
  } = useGitSubmodulePaths(gitRoot, hostConfig, "local_remote_dropdown", meadowSecond);
  if (!((data?.length ?? 0) > 0) || composerMode !== "worktree") return null;
  let nestSecond = <MemoizedFormattedMessage {...$.worktreeSubmoduleWarning} />;
  return <OptionalTooltip tooltipContent={nestSecond}><span className="flex items-center"><AppIconZg className="icon-2xs text-token-editor-warning-foreground" /></span></OptionalTooltip>;
}
function Quest(oakSecond) {
  let {
      rateLimit,
      isRemoteHost
    } = oakSecond,
    petalSecond = AppInitialX(rateLimit);
  let quietSecond = petalSecond,
    rainSecond = isRemoteHost ? <MemoizedFormattedMessage id="composer.mode.remote" defaultMessage="Remote" description="Remote mode label" /> : <MemoizedFormattedMessage id="composer.mode.local" defaultMessage="Work locally" description="Local mode label" />;
  let seedSecond = quietSecond && <span className="whitespace-nowrap text-token-input-placeholder-foreground opacity-60">{<MemoizedFormattedMessage id="composer.mode.local.ratePercent" defaultMessage={" {usage}%"} description="Rate limit remaining percent appended to Local when near limit" values={{
      usage: Math.round(quietSecond.remainingPercent)
    }} />}</span>;
  return <>{rainSecond}{seedSecond}</>;
}
function ridge({
  executionTargetCwd,
  remoteSelectionState,
  remoteConnections
}) {
  let {
    existingRemoteThreadState,
    draftNewThreadRemoteSelectionState
  } = remoteSelectionState;
  if (remoteSelectionState.isAttachedToStartedTask) return existingRemoteThreadState.hostId === "local" ? null : {
    hostId: existingRemoteThreadState.hostId,
    connectionDisplayName: existingRemoteThreadState.connectionDisplayName ?? storm(remoteConnections, existingRemoteThreadState.hostId),
    projectPath: existingRemoteThreadState.projectPath ?? executionTargetCwd
  };
  let trailSecond = draftNewThreadRemoteSelectionState?.hostId ?? null,
    urnSecond = draftNewThreadRemoteSelectionState?.projectPath ?? null;
  return trailSecond == null || trailSecond === "local" || urnSecond == null ? null : {
    hostId: trailSecond,
    connectionDisplayName: draftNewThreadRemoteSelectionState?.connectionDisplayName ?? storm(remoteConnections, trailSecond),
    projectPath: urnSecond
  };
}
function storm(vineSecond, windSecond) {
  return vineSecond.find(item => item.hostId === windSecond)?.displayName ?? null;
}
var tide, unity, vale, wave, localRemoteDropdownT, $;
