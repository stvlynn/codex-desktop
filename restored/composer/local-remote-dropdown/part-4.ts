// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split 4/6
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
const $: any = undefined;
const AppInitialAg: any = undefined;
const AppInitialBb: any = undefined;
const AppInitialD: any = undefined;
const AppInitialDg: any = undefined;
const AppInitialEg: any = undefined;
const AppInitialEz: any = undefined;
const AppInitialGb: any = undefined;
const AppInitialHb: any = undefined;
const AppInitialHv: any = undefined;
const AppInitialKb: any = undefined;
const AppInitialOg: any = undefined;
const AppInitialWg: any = undefined;
const CmdkItemSelect: any = undefined;
const DeferredUiP22: any = undefined;
const IntlProvider: any = undefined;
const Pine: any = undefined;
const Sage: any = undefined;
const Ultra: any = undefined;
const alpha: any = undefined;
const deferredHostsAM: any = undefined;
const deferredUiEnt: any = undefined;
const ensureSelectWorkspaceIXInit: any = undefined;
const slate: any = undefined;
const unity: any = undefined;
const wave: any = undefined;

function Coral(boltPrime) {
  let {
      composerMode,
      setComposerMode,
      conversationId,
      executionTarget,
      remoteSelectionState,
      threadHandoff,
      codexCloudAccess,
      isBrowser,
      isLocalModeRemote,
      currentLocalModeRemoteState,
      crossHostHandoffEnabled,
      showCrossHostHandoff,
      localWorkspaceRootForHandoff,
      remoteLabel: cogPrime,
      showWorktree,
      hasGitRepo,
      gitRoot,
      selectedEnvironment,
      setSelectedEnvironment,
      environmentSelectorOpen,
      setEnvironmentSelectorOpen,
      openEnvironmentSelector,
      worktreeTooltipText,
      closeDropdown,
      openHandoffDialog,
      openHostWorktreeHandoffDialog
    } = boltPrime,
    discPrime = CodexPluginActionType(appScopeAtom),
    edgePrime = useIntl(),
    {
      activeMode
    } = AnnotationFocusMode(conversationId),
    forgePrime = activeMode?.settings.model ?? null,
    {
      data = null
    } = CodexPluginActionResult(titleCaseColonSegments),
    gearPrime = data?.plan_type,
    hingePrime = parseFormattedCreditsQuantityString(gearPrime)?.pricePlan ?? null;
  let ironPrime = hingePrime,
    jointPrime = AppInitialHv(),
    keystonePrime = ironPrime == null ? undefined : (kingpinPrime, landPrime) => {
      jointPrime({
        scope: discPrime,
        currentPlan: ironPrime,
        defaultTab: "personal",
        event: kingpinPrime,
        getPricingUrl: () => landPrime,
        source: "composer_runtime_dropdown_rate_limit_summary"
      });
    };
  let latchPrime = keystonePrime,
    motorPrime = data?.rate_limit,
    nutPrime = data?.credits,
    pistonPrime = AppInitialKb(motorPrime, nutPrime, gearPrime);
  let _e = pistonPrime,
    rivetPrime,
    screwPrime,
    torquePrime,
    valvePrime;
  {
    let meshPrime = AppInitialHb(data),
      neckPrime = trimRateLimitName(data);
    screwPrime = AppInitialBb(meshPrime, {
      activeLimitName: neckPrime,
      selectedModel: forgePrime
    });
    rivetPrime = screwPrime.find(frost)?.limitName ?? neckPrime ?? null;
    torquePrime = AppInitialGb(data, {
      activeLimitName: neckPrime,
      selectedModel: forgePrime
    });
    valvePrime = screwPrime.some(eagle) || !!_e?.primary?.windowDurationMins || !!_e?.secondary?.windowDurationMins;
  }
  let axlePrime = valvePrime,
    {
      data: _data
    } = ensureSelectWorkspaceIXInit(),
    bracketPrime = CodexPluginActionResult(getHostConfigId),
    clampPrime = {
      retainRepoWatch: bracketPrime
    };
  let {
      data: __data
    } = AppInitialEz(gitRoot, executionTarget.hostConfig, "local_remote_dropdown", clampPrime),
    drillPrime = __data ?? edgePrime.formatMessage($.fallbackBranch),
    enginePrime = AppIconZg(conversationId),
    framePrime = AppInitialOg(enginePrime),
    gasketPrime = framePrime?.direction === "to-host-worktree" ? null : framePrime,
    handlePrime = framePrime?.status === "queued" || framePrime?.status === "running",
    insertPrime = framePrime?.direction === "to-host-worktree" && handlePrime,
    jacketPrime = CodexBrowserSurfaceActionType(DeferredUiP22, conversationId),
    {
      openOperation
    } = enqueueWorktreeDirectionTask(),
    knurlPrime = pathContainsWorktreesDir(isLocalModeRemote ? null : executionTarget.activeWorkspaceRoot, _data?.codexHome),
    leverPrime = __data ?? AppInitialEg(enginePrime, conversationId) ?? (showCrossHostHandoff ? jacketPrime : null),
    mountPrime = AppInitialDg({
      codexWorktree: knurlPrime,
      operation: gasketPrime,
      threadHandoff
    }),
    nozzlePrime = stripDisallowedPathChars({
      conversationId,
      handoffBranch: leverPrime,
      handoffDirection: mountPrime,
      operation: framePrime,
      threadHandoff
    }),
    platenPrime = insertPrime,
    ratchetPrime = framePrime?.status === "queued" || framePrime?.status === "running" ? edgePrime.formatMessage({
      id: "localConversation.threadHandoff.tooltip.viewProgress",
      defaultMessage: "View progress",
      description: "Tooltip shown when a task handoff is in progress and the button reopens the progress view"
    }) : undefined;
  let shimPrime = ratchetPrime,
    tappetPrime = framePrime?.status === "queued" || framePrime?.status === "running" ? <VSCODE_EDITOR_ID className="icon-2xs" /> : framePrime?.status === "error" ? <AppIconZg className="icon-2xs text-token-danger" /> : framePrime?.hasUnseenTerminalState && framePrime.status === "warning" ? <AppIconZg className="icon-2xs text-token-editor-warning-foreground" /> : <AppIconYg className="icon-2xs rotate-90" />;
  let arborPrime = tappetPrime,
    bushingPrime = framePrime?.direction === "to-host-worktree" ? <AppIconYg className="icon-2xs rotate-90" /> : arborPrime;
  let collarPrime = bushingPrime,
    dowelPrime = insertPrime ? edgePrime.formatMessage($.finishCurrentHandoffTooltip) : gasketPrime == null ? undefined : shimPrime;
  let flangePrime = dowelPrime,
    gibPrime = isLocalModeRemote ? edgePrime.formatMessage($.workRemotelyTooltipWithoutPath, {
      hostDisplayName: currentLocalModeRemoteState?.connectionDisplayName ?? cogPrime
    }) : edgePrime.formatMessage($.workLocallyTooltip, {
      branchName: drillPrime
    }),
    hubPrime = () => {
      if (closeDropdown(), gasketPrime != null) {
        openHandoffDialog();
        openOperation(gasketPrime.id);
        return;
      }
      openHandoffDialog();
    };
  let idlerPrime = hubPrime,
    jigPrime = showCrossHostHandoff && (conversationId != null && threadHandoff != null || framePrime?.direction === "to-host-worktree"),
    keeperPrime = <Pine composerMode={composerMode} gitRoot={gitRoot} hostConfig={executionTarget.hostConfig} />;
  let $e = keeperPrime;
  if (environmentSelectorOpen) {
    let padPrime;
    return <Jewel selectedEnvironment={selectedEnvironment} setComposerMode={setComposerMode} setSelectedEnvironment={setSelectedEnvironment} setEnvironmentSelectorOpen={setEnvironmentSelectorOpen} />;
  }
  let lugPrime = codexCloudAccess === "enabled" ? "min-w-[175px]" : "w-52",
    mandrelPrime = IntlProvider("flex flex-col", lugPrime);
  let nipplePrime = <DropdownMenu.Title>{remoteSelectionState.isAttachedToStartedTask ? <MemoizedFormattedMessage id="composer.mode.newTask.header" defaultMessage="Continue in" description="Header label above agent mode options" /> : <MemoizedFormattedMessage id="composer.mode.startTask.header" defaultMessage="Start in" description="Header label above agent mode options when starting a new task" />}</DropdownMenu.Title>;
  let orificePrime = composerMode === "local" ? AppIconZlt : undefined,
    pinPrime = () => {
      composerMode !== "local" && logProductEvent(discPrime, CODEX_ONBOARDING_WELCOME_OPTION_TOGGLED_TYPE, {
        mode: "local"
      });
      setComposerMode("local");
      closeDropdown();
    };
  let at = handlePrime ? edgePrime.formatMessage($.finishCurrentHandoffTooltip) : gibPrime;
  let racePrime = <DropdownMenu.ItemIcon>{currentLocalModeRemoteState == null ? <AppIconFB className="icon-xs" /> : <DeferredConversationSh className="icon-xs" hostId={currentLocalModeRemoteState.hostId} />}</DropdownMenu.ItemIcon>;
  let sleevePrime = isLocalModeRemote ? <MemoizedFormattedMessage {...$.startInRemote} /> : <MemoizedFormattedMessage {...$.workLocally} />;
  let trunnionPrime = <DropdownMenu.Item RightIcon={orificePrime} disabled={handlePrime} onClick={pinPrime} tooltipText={at}>{racePrime}{sleevePrime}</DropdownMenu.Item>;
  let bossPrime = showWorktree && <DropdownMenu.Item LeftIcon={ProjectDropdownGlyphIcon} RightIcon={composerMode === "worktree" ? AppIconZlt : undefined} disabled={handlePrime} onClick={() => {
    composerMode !== "worktree" && logProductEvent(discPrime, CODEX_ONBOARDING_WELCOME_OPTION_TOGGLED_TYPE, {
      mode: "worktree"
    });
    setComposerMode("worktree");
    closeDropdown();
  }} tooltipText={handlePrime ? edgePrime.formatMessage($.finishCurrentHandoffTooltip) : worktreeTooltipText}><span className="inline-flex items-center gap-1">{isLocalModeRemote ? <MemoizedFormattedMessage {...$.remoteWorktreeMode} /> : <MemoizedFormattedMessage {...$.worktreeMode} />}{$e}</span></DropdownMenu.Item>;
  let camPrime = hasGitRepo || isBrowser ? codexCloudAccess === "enabled" ? <DropdownMenu.Item LeftIcon={AppInitialD} RightIcon={composerMode === "cloud" ? AppIconZlt : undefined} disabled={handlePrime} onClick={() => {
    composerMode !== "cloud" && logProductEvent(discPrime, CODEX_ONBOARDING_WELCOME_OPTION_TOGGLED_TYPE, {
      mode: "cloud"
    });
    setComposerMode("cloud");
  }} tooltipText={handlePrime ? edgePrime.formatMessage($.finishCurrentHandoffTooltip) : edgePrime.formatMessage({
    id: "composer.mode.cloud.tooltip",
    defaultMessage: "Work in a cloud environment",
    description: "Tooltip content for cloud mode dropdown item"
  })}><MemoizedFormattedMessage {...$.runInCloud} /></DropdownMenu.Item> : <>{<DropdownMenu.Item LeftIcon={AppIconSR} rightIcon={<HostFeatureConfigToggles href={CHATGPT_CODEX_CLOUD_URL} className={wave} />} href={CHATGPT_CODEX_CLOUD_URL} onClick={drift}><MemoizedFormattedMessage id="composer.mode.remote.connectToCloud" defaultMessage="Connect Codex web" description="Menu item to connect Codex Cloud" /></DropdownMenu.Item>}{<DropdownMenu.Item LeftIcon={slate} className="cursor-not-allowed" disabled={true} tooltipText={edgePrime.formatMessage({
      id: "composer.mode.remote.connectToCloudDisabledTooltip",
      defaultMessage: "Set up an environment via Codex web to enable sending tasks to the cloud",
      description: "Tooltip for disabled send to cloud item when Cloud is not connected"
    })}><span className="truncate">{<MemoizedFormattedMessage id="composer.mode.remote.sendToCloud" defaultMessage="Send to cloud" description="Disabled label when Codex Cloud is not connected" />}</span></DropdownMenu.Item>}</> : null;
  let detentPrime = codexCloudAccess === "enabled" ? <Component_i selectedEnvironment={selectedEnvironment} onClick={openEnvironmentSelector} /> : null;
  let eccentricPrime = <div className="mx-1 my-1.5 h-[0.5px] bg-token-foreground/10" />;
  let followerPrime = axlePrime && <UseProfileUsageQuery rateLimits={screwPrime} activeLimitName={rivetPrime} planType={gearPrime} suppressUpsell={torquePrime} selectedModel={forgePrime} onPlanUpgradeClick={latchPrime} />;
  let guidePrime = <ElectronOnly extension={true}>{detentPrime}{eccentricPrime}{followerPrime}</ElectronOnly>;
  let helixPrime = axlePrime && <><div className="mx-1 my-1.5 h-[0.5px] bg-token-foreground/10" />{<UseProfileUsageQuery rateLimits={screwPrime} activeLimitName={rivetPrime} planType={gearPrime} suppressUpsell={torquePrime} selectedModel={forgePrime} onPlanUpgradeClick={latchPrime} />}</>;
  let impellerPrime = nozzlePrime ? <>{<DropdownMenu.Separator />}{<DropdownMenu.Item disabled={platenPrime} onSelect={idlerPrime} tooltipText={flangePrime}><DropdownMenu.ItemIcon>{collarPrime}</DropdownMenu.ItemIcon>{<Honey useContinueLabel={crossHostHandoffEnabled} direction={mountPrime} isRemoteHost={isLocalModeRemote} />}</DropdownMenu.Item>}</> : null;
  let journalPrime = jigPrime ? <Glide conversationId={conversationId} threadHandoff={threadHandoff} menuOperation={framePrime} crossHostHandoffEnabled={crossHostHandoffEnabled} handoffBranch={leverPrime} handoffIcon={arborPrime} showSeparator={!nozzlePrime} sourceHostId={executionTarget.hostId} sourceGitRoot={gitRoot} sourceWorkspaceRoot={executionTarget.cwd} localWorkspaceRootForHandoff={localWorkspaceRootForHandoff} closeDropdown={closeDropdown} openHostWorktreeHandoffDialog={openHostWorktreeHandoffDialog} openOperation={openOperation} /> : null;
  return <div className={mandrelPrime}>{nipplePrime}{trunnionPrime}{bossPrime}{camPrime}{guidePrime}{helixPrime}{impellerPrime}{journalPrime}</div>;
}
function drift(quillshaftPrime) {
  deferredUiEnt({
    disposition: "current-tab",
    event: quillshaftPrime,
    href: CHATGPT_CODEX_CLOUD_URL,
    initiator: "open_in_browser_bridge"
  });
}
function eagle(rollerPrime) {
  return !!rollerPrime.snapshot?.primary?.windowDurationMins || !!rollerPrime.snapshot?.secondary?.windowDurationMins;
}
function frost(spindlePrime) {
  return spindlePrime.limitName != null;
}
function Component_i(thrustPrime) {
  let {
      selectedEnvironment,
      onClick
    } = thrustPrime,
    {
      zeroEnvironments
    } = alpha("");
  return <Sage selectedEnvironment={selectedEnvironment} zeroEnvironments={zeroEnvironments} onClick={onClick} />;
}
function Glide(yokePrime) {
  let {
      conversationId,
      threadHandoff,
      menuOperation,
      crossHostHandoffEnabled,
      handoffBranch,
      handoffIcon,
      showSeparator,
      sourceHostId,
      sourceGitRoot,
      sourceWorkspaceRoot,
      localWorkspaceRootForHandoff,
      closeDropdown,
      openHostWorktreeHandoffDialog,
      openOperation
    } = yokePrime,
    bafflePrime = useIntl(),
    capstanPrime = {
      sourceHostId,
      sourceGitRoot,
      sourceWorkspaceRoot
    };
  let diaphragmPrime = CodexBrowserSurfaceActionType(findProcessManagerRow, capstanPrime),
    elbowPrime = crossHostHandoffEnabled && AppInitialWg({
      conversationId,
      operation: menuOperation,
      threadHandoff
    });
  let ferrulePrime = elbowPrime,
    grommetPrime = menuOperation == null ? undefined : bafflePrime.formatMessage($.finishCurrentHandoffTooltip);
  let headerPrime = grommetPrime,
    injectorPrime = localWorkspaceRootForHandoff ?? (menuOperation?.direction === "to-host-worktree" && menuOperation.request.destinationHostId === "local" ? menuOperation.request.destinationWorkspaceRoot : null),
    jumperPrime = injectorPrime != null && AppInitialAg({
      destinationHostId: "local",
      destinationWorkspaceRoot: injectorPrime,
      operation: menuOperation
    });
  let kerfPrime = jumperPrime,
    louverPrime = injectorPrime != null && !ferrulePrime && !kerfPrime,
    manifoldPrime = strainerPrime => {
      let {
        destinationHostId,
        destinationWorkspaceRoot,
        destinationLabel
      } = strainerPrime;
      if (menuOperation != null && AppInitialAg({
        destinationHostId,
        destinationWorkspaceRoot,
        operation: menuOperation
      })) {
        closeDropdown();
        openHostWorktreeHandoffDialog({
          currentBranch: handoffBranch ?? "",
          destinationHostId,
          destinationWorkspaceRoot,
          destinationLabel
        });
        openOperation(menuOperation.id);
        return;
      }
      ferrulePrime && (closeDropdown(), openHostWorktreeHandoffDialog({
        currentBranch: handoffBranch ?? "",
        destinationHostId,
        destinationWorkspaceRoot,
        destinationLabel
      }));
    };
  let nipPrime = manifoldPrime;
  if (menuOperation?.direction !== "to-host-worktree" && localWorkspaceRootForHandoff == null && diaphragmPrime.length === 0) return null;
  let outletPrime = showSeparator ? <DropdownMenu.Separator /> : null;
  let packingPrime = injectorPrime == null ? null : <DropdownMenu.Item disabled={louverPrime} onSelect={() => {
    nipPrime({
      destinationHostId: LOCAL_HOST_ID,
      destinationWorkspaceRoot: injectorPrime,
      destinationLabel: bafflePrime.formatMessage($.thisComputerDestinationLabel)
    });
  }} tooltipText={louverPrime ? headerPrime : injectorPrime}><DropdownMenu.ItemIcon>{kerfPrime ? handoffIcon : <AppIconFB className="icon-2xs" />}</DropdownMenu.ItemIcon><MemoizedFormattedMessage id="localConversation.moveToLocalHostWorktree.label" defaultMessage="This computer" description="Footer dropdown item label for moving a remote conversation into a local worktree" /></DropdownMenu.Item>;
  let reducerPrime;
  {
    let teePrime;
    teePrime = unionPrime => {
      if (unionPrime.status !== "ready") {
        let zenerPrime = menuOperation?.direction === "to-host-worktree" && menuOperation.request.destinationHostId === unionPrime.hostId;
        return <Iris key={unionPrime.hostId} hostDisplayName={unionPrime.hostDisplayName} disabled={!zenerPrime} icon={zenerPrime ? handoffIcon : unionPrime.status === "loading" ? <VSCODE_EDITOR_ID className="icon-2xs" /> : <AppIconZg className="icon-2xs text-token-danger" />} tooltipText={zenerPrime ? menuOperation.request.destinationWorkspaceRoot : bafflePrime.formatMessage(unionPrime.status === "loading" ? $.checkingRemoteHandoffDestinationTooltip : $.remoteHandoffDestinationLookupFailedTooltip)} onSelect={zenerPrime ? () => {
          nipPrime({
            destinationHostId: menuOperation.request.destinationHostId,
            destinationWorkspaceRoot: menuOperation.request.destinationWorkspaceRoot,
            destinationLabel: unionPrime.hostDisplayName
          });
        } : undefined} />;
      }
      let {
          hostDisplayName,
          project
        } = unionPrime,
        ventPrime = AppInitialAg({
          destinationHostId: project.hostId,
          destinationWorkspaceRoot: project.remotePath,
          operation: menuOperation
        }),
        wyePrime = !ferrulePrime && !ventPrime;
      return <Iris key={project.id} hostDisplayName={hostDisplayName} disabled={wyePrime} icon={ventPrime ? handoffIcon : <DeferredConversationSh className="icon-2xs" hostId={project.hostId} />} tooltipText={wyePrime ? headerPrime : project.remotePath} onSelect={() => {
        nipPrime({
          destinationHostId: project.hostId,
          destinationWorkspaceRoot: project.remotePath,
          destinationLabel: hostDisplayName
        });
      }} />;
    };
    reducerPrime = diaphragmPrime.map(teePrime);
  }
  return <>{outletPrime}{packingPrime}{reducerPrime}</>;
}
function Honey(alphaSecond) {
  let {
    useContinueLabel,
    direction,
    isRemoteHost
  } = alphaSecond;
  if (!useContinueLabel) {
    let bravoSecond;
    return direction === "to-local" ? <MemoizedFormattedMessage id="localConversation.moveToLocal.label" defaultMessage="Handoff to branch" description="Footer dropdown item label for moving a worktree conversation back to a branch workspace" /> : <MemoizedFormattedMessage id="localConversation.moveToWorktree.label" defaultMessage="Handoff to worktree" description="Footer dropdown item label for moving a local conversation to a new worktree" />;
  }
  if (direction === "to-worktree") {
    let copperSecond;
    return <MemoizedFormattedMessage id="localConversation.moveToWorktree.continueLabel" defaultMessage="Worktree" description="Footer dropdown item label for moving a checkout conversation to a new same-host worktree" />;
  }
  return isRemoteHost ? <MemoizedFormattedMessage id="localConversation.moveToRemoteCheckout.label" defaultMessage="Remote checkout" description="Footer dropdown item label for moving a remote worktree conversation back to the non-worktree checkout on that same remote host" /> : <MemoizedFormattedMessage id="localConversation.moveToLocal.continueLabel" defaultMessage="Local checkout" description="Footer dropdown item label for moving a local worktree conversation back to the local checkout" />;
}
function Iris(deltaSecond) {
  let {
      hostDisplayName,
      disabled,
      icon,
      tooltipText,
      onSelect
    } = deltaSecond,
    echoSecond = <DropdownMenu.ItemIcon>{icon}</DropdownMenu.ItemIcon>;
  let falconSecond = <MemoizedFormattedMessage id="localConversation.moveToRemoteHostWorktree.label" defaultMessage={"{host}"} description="Footer dropdown item label for moving a local conversation into a worktree on a configured remote host" values={{
    host: hostDisplayName
  }} />;
  return <DropdownMenu.Item disabled={disabled} onSelect={onSelect} tooltipText={tooltipText}>{echoSecond}{falconSecond}</DropdownMenu.Item>;
}
function Jewel(gammaSecond) {
  let {
      selectedEnvironment,
      setComposerMode,
      setSelectedEnvironment,
      setEnvironmentSelectorOpen
    } = gammaSecond,
    [harborSecond, indigoSecond] = unity.useState(""),
    {
      envListState,
      listToShow
    } = alpha(harborSecond, selectedEnvironment, setSelectedEnvironment),
    jadeSecond = () => setEnvironmentSelectorOpen(false);
  return <Ultra selectedEnvironment={selectedEnvironment} envQuery={harborSecond} setEnvQuery={indigoSecond} envListState={envListState} listToShow={listToShow} setComposerMode={setComposerMode} setSelectedEnvironment={setSelectedEnvironment} setOpen={setEnvironmentSelectorOpen} onClosePanel={jadeSecond} />;
}
function Knoll(kiteSecond) {
  let {
      selectedEnvironment,
      setSelectedEnvironment,
      setComposerMode
    } = kiteSecond,
    lemonSecond = useIntl(),
    {
      envListState,
      listToShow
    } = alpha(CmdkItemSelect(useListKeyboardNavigation(), lunar), selectedEnvironment, setSelectedEnvironment),
    marbleSecond = null;
  if (envListState === "loading") {
    let willowSecond;
    willowSecond = <VSCODE_EDITOR_ID className="icon-xxs" />;
    marbleSecond = willowSecond;
  } else if (envListState === "error") {
    let xenonSecond;
    xenonSecond = <MemoizedFormattedMessage id="composer.environmentSelector.error" defaultMessage="Error loading environments" description="Error state for the cloud environment dropdown" />;
    marbleSecond = xenonSecond;
  } else if (envListState === "none-found" || envListState === "empty") {
    let yellowSecond;
    yellowSecond = <MemoizedFormattedMessage id="codex.environments.noEnvironmentsFound" defaultMessage="No environments found" description="Message shown when no Codex environments were found" />;
    marbleSecond = yellowSecond;
  }
  let nickelSecond = lemonSecond.formatMessage($.cloudEnvironmentTitle);
  let onyxSecond = selectedEnvironment?.label ?? lemonSecond.formatMessage({
    id: "composer.slashCommands.cloudEnvironment.description",
    defaultMessage: "Choose the cloud environment",
    description: "Description for the cloud environment slash command when no environment is selected"
  });
  let pearlSecond = marbleSecond,
    quartzSecond = envListState === "loading",
    riverSecond;
  {
    let zincSecond;
    zincSecond = amberSecond => ({
      id: amberSecond.id,
      title: amberSecond.label ?? "",
      RightIcon: amberSecond.id === selectedEnvironment?.id ? AppIconZlt : undefined,
      onSelect: () => {
        setComposerMode("cloud");
        setSelectedEnvironment(amberSecond);
      }
    });
    riverSecond = listToShow.slice(0, 100).map(zincSecond);
  }
  let slateSecond = {
    sections: [{
      id: "cloud-environments",
      emptyState: pearlSecond,
      isLoading: quartzSecond,
      items: riverSecond
    }]
  };
  let timberSecond = selectedEnvironment?.id,
    umbraSecond = [envListState, listToShow, timberSecond, setComposerMode, setSelectedEnvironment];
  let violetSecond;
  return violetSecond = {
    id: "cloud-environment",
    title: nickelSecond,
    description: onyxSecond,
    requiresEmptyComposer: false,
    Icon: EnsureDockIconInit,
    enabled: true,
    submenu: slateSecond,
    dependencies: umbraSecond
  }, SettingsDependenciesGuard(violetSecond), null;
}
function lunar(basaltSecond) {
  let cedarSecond = deferredHostsAM.getState(basaltSecond.view.state);
  return cedarSecond?.source?.kind === "slash-command" && cedarSecond.source.commandId === "cloud-environment" ? cedarSecond.query : "";
}
function Moss(daisySecond) {
  let {
    setSelectedEnvironment
  } = daisySecond;
  return alpha("", null, setSelectedEnvironment), null;
}
