// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split 6/6
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
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
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
const AppInitialD: any = undefined;
const AppInitialF: any = undefined;
const AppInitialF3: any = undefined;
const AppInitialIB: any = undefined;
const AppInitialKg: any = undefined;
const AppInitialLJ: any = undefined;
const AppInitialMg: any = undefined;
const AppInitialNg: any = undefined;
const AppInitialP3: any = undefined;
const AppInitialPv: any = undefined;
const AppInitialQg: any = undefined;
const AppInitialR: any = undefined;
const AppInitialRS: any = undefined;
const AppInitialVv: any = undefined;
const AppInitialWY: any = undefined;
const AppInitialXY: any = undefined;
const AppInitialZE: any = undefined;
const Chatgpt5: any = undefined;
const CodexCloudAccess: any = undefined;
const Coral: any = undefined;
const DeferredTC: any = undefined;
const DeferredUiV2: any = undefined;
const IntlProvider: any = undefined;
const Knoll: any = undefined;
const ListPermissionProfiles: any = undefined;
const Moss: any = undefined;
const NativeContextMenuSurface: any = undefined;
const North: any = undefined;
const Quest: any = undefined;
const appInitialValue: any = undefined;
const applyFooterUoylu2: any = undefined;
const applyFooterUoylu22: any = undefined;
const bloom: any = undefined;
const chatProcessRegister: any = undefined;
const composerScope: any = undefined;
const deferredProjectsYx: any = undefined;
const deferredUiCR: any = undefined;
const deferredUiXg: any = undefined;
const ensureEnvironmentLabelsO3Init: any = undefined;
const ensureSelectWorkspacePXInit: any = undefined;
const ivory: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const localRemoteDropdownA: any = undefined;
const localRemoteDropdownT: any = undefined;
const orbit: any = undefined;
const pendingPastedTextAttachments: any = undefined;
const reef: any = undefined;
const ridge: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
const tide: any = undefined;
const timber: any = undefined;
const unity: any = undefined;
const useLocalEnvironmentEditorState: any = undefined;
const vale: any = undefined;
const wave: any = undefined;

export const localRemoteDropdownN = esmInit(() => {
  tide = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_Tft_Init();
  countLeadingZeroBits32();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  unity = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  DeferredUiV2();
  CodexCloudAccess();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  collectUniqueMappedPresenceEntries();
  useTeenOnboardingAgeGate();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  getPluginShortDescription();
  ensureChatgptSiteSuffixesInit();
  ChromeBackgroundPanel();
  findProcessManagerRow();
  usePlatformAwareFeatureGate();
  AppInitialR();
  AppInitialP3();
  ensureUseGitSubmodulePathsInit();
  ensureSelectWorkspacePXInit();
  copilotDefaultModel();
  ensureDropdownMenuPopoverInit();
  AppIconYlt();
  ensureAppIconSftInit();
  timber();
  AppInitialF();
  deferredUiCR();
  DockIcon();
  AppInitialQg();
  AppInitialIB();
  deferredUiXg();
  ensureSettingsGlyphRBInit();
  AppInitialNg();
  ivory();
  reef();
  pendingPastedTextAttachments();
  ensureComposerEsm_K9_Init();
  ensureHostRpcClientsInit();
  hasLoadedOldestItems();
  setRemoteControlEnabledForHost();
  useLocalEnvironmentEditorState();
  ensureAppScopeInit();
  composerScope();
  extractColonPrefixedNamedTokens();
  getCreditsPurchaseMinimumQuantity();
  AppInitialVv();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  AppInitialZE();
  AppInitialWY();
  codex3();
  deferredProjectsYx();
  Chatgpt5();
  jade();
  AppInitialRS();
  localRemoteDropdownA();
  AppInitialPv();
  bloom();
  AppInitialKg();
  titleCaseLastPathSegment();
  DeferredTC();
  ListPermissionProfiles();
  applyFooterUoylu22();
  ensureDiffCommentComposerInit();
  vale = getJsxRuntime();
  wave = "icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100";
  localRemoteDropdownT = unity.memo(function (quillowSecond) {
    let {
        composerMode,
        setComposerMode,
        conversationId,
        executionTargetOverride,
        remoteSelectionState,
        threadHandoff,
        allowWorktree = false,
        disabled = false,
        hideModeDropdown = false,
        worktreeLabelOnly = false,
        side = "top",
        triggerVariant = "composer",
        onOpenChange
      } = quillowSecond,
      rootSecond = CodexPluginActionType(HostCwdPathLabel),
      silkSecond = CodexPluginActionResult(AppInitialLJ),
      [thornSecond, uplandSecond] = unity.useState(false),
      [vistaSecond, wispSecond] = unity.useState(false),
      yonderSecond = thornSecond || triggerVariant === "composer" && silkSecond === "composer",
      zenithSecond = composerMode === "cloud" || yonderSecond,
      anvilSecond = useIntl(),
      beaconSecond = NativeContextMenuSurface("505458"),
      cragSecond = NativeContextMenuSurface("2256010998"),
      domeSecond = AppIconZg(conversationId),
      eddySecond = cragSecond || domeSecond?.direction === "to-host-worktree",
      {
        access
      } = resolveCodexCloudAccess(),
      fjordSecond = useVoiceSettingsHostConfig(conversationId),
      glenSecond = executionTargetOverride ?? fjordSecond,
      hearthSecond = visualizationIdFromPath(),
      inletSecond = ridge({
        executionTargetCwd: glenSecond.cwd,
        remoteSelectionState,
        remoteConnections: hearthSecond
      });
    let jettySecond = inletSecond,
      knobSecond = jettySecond != null,
      ledgeSecond = glenSecond.cwd == null ? null : {
        cwd: glenSecond.cwd,
        hostConfig: glenSecond.hostConfig
      };
    let mireSecond = ledgeSecond,
      nookSecond = CodexPluginActionResult(getHostConfigId),
      oxbowSecond = {
        enabled: true,
        retainRepoWatch: nookSecond,
        watchForGitInit: false
      };
    let {
        data,
        isLoading
      } = AppInitialF3(mireSecond, "local_remote_dropdown", oxbowSecond),
      pondSecond = data?.root != null,
      quarrySecond = data?.root ?? null,
      {
        data: _data
      } = CodexPluginActionResult(ensureEnvironmentLabelsO3Init),
      rapidsSecond = eddySecond && yonderSecond && glenSecond.hostId !== "local" ? _data?.roots : undefined,
      spurSecond = rapidsSecond ?? [];
    let torSecond = {
      params: {
        hostId: LOCAL_HOST_ID,
        dirs: spurSecond
      },
      source: "local_remote_dropdown"
    };
    let {
        data: __data
      } = CodexBrowserSurfaceActionType(collectUniqueMappedPresenceEntries, torSecond),
      updraftSecond = glenSecond.cwd == null ? [] : [glenSecond.cwd];
    let vergeSecond = {
      params: {
        hostId: glenSecond.hostId,
        dirs: updraftSecond
      },
      source: "local_remote_dropdown"
    };
    let {
        data: ___data
      } = CodexBrowserSurfaceActionType(collectUniqueMappedPresenceEntries, vergeSecond),
      weirSecond = rapidsSecond == null ? null : appInitialValue({
        sourceWorkspaceRoot: glenSecond.cwd,
        sourceGitRoot: quarrySecond,
        sourceGitOrigins: ___data?.origins,
        destinationWorkspaceRoots: rapidsSecond,
        destinationGitOrigins: __data?.origins
      });
    let yardSecond = weirSecond,
      anchorSecond = kite({
        cloudAccess: access,
        hasGitRepository: pondSecond,
        isBrowser: false
      });
    let boltSecond = anchorSecond,
      cogSecond = !disabled && !hideModeDropdown,
      discSecond = pondSecond && allowWorktree && beaconSecond,
      [edgeSecond, forgeSecond] = useAtomPair(AppInitialXY),
      gearSecond = edgeSecond ? <>{<MemoizedFormattedMessage {...$.runInCloud} />}<span className={applyFooterUoylu2.runLocationEnvironmentSuffix}>{<MemoizedFormattedMessage id="composer.mode.runInCloudEnvironmentSuffix" defaultMessage={" · {environment}"} description="Environment suffix shown after Cloud in the run location control" values={{
            environment: edgeSecond.label
          }} />}</span></> : <><span className={applyFooterUoylu2.defaultUtilityBarOnly}>{<MemoizedFormattedMessage {...$.selectEnvironment} />}</span><span className={IntlProvider(applyFooterUoylu2.homeUtilityBarOnly, "hidden")}>{<MemoizedFormattedMessage {...$.runInCloud} />}</span></>;
    let hingeSecond = gearSecond,
      ironSecond = anvilSecond.formatMessage({
        id: "composer.mode.remote",
        defaultMessage: "Remote",
        description: "Remote mode label"
      });
    let jointSecond = ironSecond,
      keystoneSecond = jettySecond?.hostId,
      latchSecond = function (landSecond) {
        let {
          className
        } = landSecond;
        return keystoneSecond == null ? <AppIconFB className={className} /> : <DeferredConversationSh className={className} hostId={keystoneSecond} />;
      };
    let motorSecond = latchSecond,
      nutSecond = knobSecond ? anvilSecond.formatMessage($.startInRemote) : anvilSecond.formatMessage($.workLocally);
    let pistonSecond = nutSecond,
      rivetSecond = knobSecond ? anvilSecond.formatMessage($.remoteWorktreeTooltip) : anvilSecond.formatMessage($.worktreeTooltip);
    let screwSecond = rivetSecond,
      torqueSecond = () => {
        RateLimitResetCreditsDialog({
          composerMode,
          setComposerMode
        });
      };
    let valveSecond = cogSecond && discSecond,
      axleSecond;
    axleSecond = {
      enabled: valveSecond
    };
    useResolvedHostConfigValue("composer.toggleWorktreeMode", torqueSecond, axleSecond);
    let bracketSecond = anvilSecond.formatMessage({
      id: "composer.mode.localSlashCommand.description",
      defaultMessage: "Run this chat locally",
      description: "Description for the local mode slash command"
    });
    let clampSecond = [keystoneSecond];
    let drillSecond = cogSecond && composerMode !== "local",
      engineSecond = async () => {
        setComposerMode("local");
      };
    let $e = engineSecond,
      frameSecond;
    frameSecond = {
      id: "local",
      title: pistonSecond,
      description: bracketSecond,
      requiresEmptyComposer: false,
      Icon: motorSecond,
      dependencies: clampSecond,
      enabled: drillSecond,
      onSelect: $e
    };
    SettingsDependenciesGuard(frameSecond);
    let gasketSecond = knobSecond ? anvilSecond.formatMessage($.remoteWorktreeMode) : anvilSecond.formatMessage($.worktreeMode);
    let handleSecond = anvilSecond.formatMessage({
      id: "composer.mode.worktreeSlashCommand.description",
      defaultMessage: "Run this chat in a new worktree",
      description: "Description for the worktree mode slash command"
    });
    let insertSecond = cogSecond && discSecond && composerMode !== "worktree",
      at = async () => {
        setComposerMode("worktree");
      };
    let jacketSecond = at,
      knurlSecond;
    knurlSecond = {
      id: "worktree",
      title: gasketSecond,
      description: handleSecond,
      requiresEmptyComposer: false,
      Icon: ProjectDropdownGlyphIcon,
      enabled: insertSecond,
      onSelect: jacketSecond
    };
    SettingsDependenciesGuard(knurlSecond);
    let leverSecond = anvilSecond.formatMessage($.runInCloud);
    let mountSecond = anvilSecond.formatMessage({
      id: "composer.mode.cloudSlashCommand.description",
      defaultMessage: "Run this chat in the cloud",
      description: "Description for the cloud mode slash command"
    });
    let nozzleSecond = cogSecond && boltSecond && composerMode !== "cloud",
      platenSecond = async () => {
        setComposerMode("cloud");
      };
    let ratchetSecond = platenSecond,
      shimSecond;
    shimSecond = {
      id: "cloud",
      title: leverSecond,
      description: mountSecond,
      requiresEmptyComposer: false,
      Icon: AppInitialD,
      enabled: nozzleSecond,
      onSelect: ratchetSecond
    };
    SettingsDependenciesGuard(shimSecond);
    let tappetSecond = <span className="inline-flex min-w-0 items-center gap-1"><span className="truncate">{<MemoizedFormattedMessage {...$.worktreeSegment} />}</span></span>;
    let arborSecond = tappetSecond,
      _t = meshSecond => {
        meshSecond ? wispSecond(false) : silkSecond === "composer" && triggerVariant === "composer" && rootSecond.set(AppInitialLJ, null);
        uplandSecond(meshSecond);
        onOpenChange?.(meshSecond);
      };
    let bushingSecond = _t,
      collarSecond = () => {
        wispSecond(true);
      };
    let dowelSecond = collarSecond,
      flangeSecond = () => {
        conversationId == null || threadHandoff == null || chatProcessRegister(rootSecond, orbit, {
          conversationId,
          composerViewState: rootSecond.get(getPluginDisplayName),
          executionTarget: glenSecond,
          gitRoot: quarrySecond,
          isLocalModeRemote: knobSecond,
          threadHandoff,
          showCrossHostHandoff: eddySecond
        });
      };
    let gibSecond = flangeSecond,
      hubSecond = neckSecond => {
        let {
          currentBranch,
          destinationHostId,
          destinationWorkspaceRoot,
          destinationLabel
        } = neckSecond;
        conversationId == null || threadHandoff == null || chatProcessRegister(rootSecond, AppInitialMg, {
          conversationId,
          composerViewState: rootSecond.get(getPluginDisplayName),
          conversationTitle: threadHandoff.conversationTitle,
          currentBranch,
          cwd: threadHandoff.cwd,
          destinationHostId,
          destinationWorkspaceRoot: identityCwd(destinationWorkspaceRoot),
          destinationLabel
        });
      };
    let idlerSecond = hubSecond,
      jigSecond = triggerVariant === "summary-panel" ? undefined : "icon-xs",
      keeperSecond = composerMode === "cloud" ? <AppInitialD className={jigSecond} /> : composerMode === "worktree" ? <ProjectDropdownGlyphIcon className={jigSecond} /> : jettySecond == null ? <AppIconFB className={jigSecond} /> : <DeferredConversationSh className={jigSecond} hostId={jettySecond.hostId} />;
    let lugSecond = keeperSecond,
      mandrelSecond = composerMode === "cloud" ? hingeSecond : composerMode === "worktree" ? <span className="inline-flex items-center gap-1">{knobSecond ? <MemoizedFormattedMessage {...$.remoteWorktreeMode} /> : <MemoizedFormattedMessage {...$.worktreeMode} />}</span> : triggerVariant === "summary-panel" && !knobSecond ? <MemoizedFormattedMessage {...$.localShort} /> : knobSecond ? <Quest rateLimit={null} isRemoteHost={knobSecond} /> : <><span className={applyFooterUoylu2.defaultUtilityBarOnly}>{<Quest rateLimit={null} isRemoteHost={false} />}</span><span className={IntlProvider(applyFooterUoylu2.homeUtilityBarOnly, "hidden")}>{<MemoizedFormattedMessage {...$.localShort} />}</span></>;
    let nippleSecond = mandrelSecond,
      orificeSecond = triggerVariant === "summary-panel" ? <PopoverMenu.ItemButton data-composer-navigation-target="run-location" disabled={disabled} title={anvilSecond.formatMessage($.localRemoteWhereRun)}><PopoverMenu.ItemLeading>{lugSecond}</PopoverMenu.ItemLeading><PopoverMenu.ItemLabel>{nippleSecond}</PopoverMenu.ItemLabel>{disabled ? null : <PopoverMenu.ItemMeta variant="icon"><AppIconSft /></PopoverMenu.ItemMeta>}</PopoverMenu.ItemButton> : <ComposerCategoryValueChip data-composer-navigation-target="run-location" categoryLabel={null} collapse="xs" icon={lugSecond} indicator="chevron" value={nippleSecond} valueClassName="max-w-40" />;
    let pinSecond = orificeSecond,
      raceSecond = () => <DropdownMenuPopover side={side} disabled={disabled} open={yonderSecond} onOpenChange={bushingSecond} triggerButton={triggerVariant === "summary-panel" ? pinSecond : <OptionalTooltip tooltipContent={<MemoizedFormattedMessage {...$.localRemoteWhereRun} />}>{pinSecond}</OptionalTooltip>}>{<Coral composerMode={composerMode} setComposerMode={setComposerMode} conversationId={conversationId} executionTarget={glenSecond} remoteSelectionState={remoteSelectionState} threadHandoff={threadHandoff} codexCloudAccess={access} isBrowser={false} isLocalModeRemote={knobSecond} currentLocalModeRemoteState={jettySecond} crossHostHandoffEnabled={cragSecond} showCrossHostHandoff={eddySecond} localWorkspaceRootForHandoff={yardSecond} remoteLabel={jointSecond} showWorktree={discSecond} hasGitRepo={pondSecond} gitRoot={quarrySecond} selectedEnvironment={edgeSecond} setSelectedEnvironment={forgeSecond} environmentSelectorOpen={vistaSecond} setEnvironmentSelectorOpen={wispSecond} openEnvironmentSelector={dowelSecond} worktreeTooltipText={screwSecond} closeDropdown={() => bushingSecond(false)} openHandoffDialog={gibSecond} openHostWorktreeHandoffDialog={idlerSecond} />}</DropdownMenuPopover>;
    let sleeveSecond = raceSecond,
      trunnionSecond = glenSecond.cwd ? <span className="block font-mono text-xs break-all">{glenSecond.cwd}</span> : null;
    let bossSecond = trunnionSecond,
      camSecond = worktreeLabelOnly ? <North open={yonderSecond} onOpenChange={bushingSecond} side={side} codexCloudAccess={access} crossHostHandoffEnabled={cragSecond} showCrossHostHandoff={eddySecond} conversationId={conversationId} executionTarget={glenSecond} gitRoot={quarrySecond} setComposerMode={setComposerMode} threadHandoff={threadHandoff} worktreeSegmentLabel={arborSecond} tooltipContent={bossSecond} tooltipMaxWidth="min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))" triggerVariant={triggerVariant} openHandoffDialog={gibSecond} openHostWorktreeHandoffDialog={idlerSecond} localWorkspaceRootForHandoff={yardSecond} /> : null;
    let detentSecond = camSecond,
      eccentricSecond = hideModeDropdown || conversationId == null && !knobSecond && !isLoading && !pondSecond,
      followerSecond = eccentricSecond ? null : worktreeLabelOnly ? detentSecond : sleeveSecond();
    let guideSecond = followerSecond,
      helixSecond = zenithSecond ? <CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID /> : null;
    let impellerSecond = boltSecond && composerMode === "cloud" ? <Knoll selectedEnvironment={edgeSecond} setSelectedEnvironment={forgeSecond} setComposerMode={setComposerMode} /> : null;
    let journalSecond = boltSecond && composerMode === "cloud" && edgeSecond == null ? <Moss setSelectedEnvironment={forgeSecond} /> : null;
    let kingpinSecond = <ElectronOnly extension={true} electron={true} browser={true}>{guideSecond}</ElectronOnly>;
    return <>{helixSecond}{impellerSecond}{journalSecond}{kingpinSecond}</>;
  });
  $ = identity({
    workLocally: {
      id: "composer.mode.workLocally",
      defaultMessage: "Work locally",
      description: "Local mode label"
    },
    startInRemote: {
      id: "composer.mode.startInRemote",
      defaultMessage: "Remote",
      description: "Dropdown label for starting a task in a remote project"
    },
    workLocallyTooltip: {
      id: "composer.mode.workLocally.tooltip",
      defaultMessage: "Work on {branchName}",
      description: "Tooltip describing what local mode runs against"
    },
    workRemotelyTooltipWithoutPath: {
      id: "composer.mode.workRemotely.tooltipWithoutPath",
      defaultMessage: "Work on {hostDisplayName}",
      description: "Tooltip describing what where the remote mode is run"
    },
    fallbackBranch: {
      id: "composer.mode.workLocally.currentBranchFallback",
      defaultMessage: "your branch",
      description: "Fallback branch name when current branch cannot be detected"
    },
    runInCloud: {
      id: "composer.mode.runInCloud",
      defaultMessage: "Cloud",
      description: "Remote mode label when a Codex task will be run in the cloud"
    },
    localShort: {
      id: "composer.mode.local.short",
      defaultMessage: "Local",
      description: "Short local mode label"
    },
    selectEnvironment: {
      id: "composer.mode.remote.selectEnvironment",
      defaultMessage: "Select environment",
      description: "Remote mode label when no environment is selected"
    },
    worktreeMode: {
      id: "composer.mode.worktree",
      defaultMessage: "New worktree",
      description: "Worktree mode label"
    },
    remoteWorktreeMode: {
      id: "composer.mode.remoteWorktree",
      defaultMessage: "New remote worktree",
      description: "Worktree mode label when the selected workspace is remote"
    },
    worktreeTooltip: {
      id: "composer.mode.worktree.tooltip",
      defaultMessage: "Create a copy of your local project to work in parallel",
      description: "Tooltip content for worktree mode dropdown item"
    },
    remoteWorktreeTooltip: {
      id: "composer.mode.remoteWorktree.tooltip",
      defaultMessage: "Create a copy of your remote project to work in parallel",
      description: "Tooltip content for worktree mode dropdown item when the selected workspace is remote"
    },
    worktreeSegment: {
      id: "composer.mode.worktreeSegment",
      defaultMessage: "Worktree",
      description: "Worktree mode label for the segmented toggle"
    },
    localRemoteWhereRun: {
      id: "composer.mode.localRemoteWhereRun",
      defaultMessage: "Select where to run the chat",
      description: "Tooltip content for local/remote dropdown"
    },
    worktreeSubmoduleWarning: {
      id: "composer.mode.worktree.submoduleWarning",
      defaultMessage: "This repo has git submodules. Worktree creation may fail",
      description: "Warning shown when a repo contains git submodules"
    },
    cloudEnvironmentTitle: {
      id: "composer.slashCommands.cloudEnvironment.title",
      defaultMessage: "Cloud environment",
      description: "Title for a composer slash command that makes Codex run in the cloud with a specific environment."
    },
    finishCurrentHandoffTooltip: {
      id: "localConversation.moveThread.disabled.finishCurrentHandoff",
      defaultMessage: "Finish the current handoff before starting another",
      description: "Tooltip shown on disabled cross-host handoff destinations while another handoff operation still needs attention"
    },
    thisComputerDestinationLabel: {
      id: "localConversation.moveThread.destination.thisComputer",
      defaultMessage: "this computer",
      description: "Destination label used in cross-host handoff copy when moving a task back to the local machine"
    },
    checkingRemoteHandoffDestinationTooltip: {
      id: "localConversation.moveThread.destination.remoteChecking",
      defaultMessage: "Checking this host for a matching project",
      description: "Tooltip shown while Codex checks whether a remote host can receive this task"
    },
    remoteHandoffDestinationLookupFailedTooltip: {
      id: "localConversation.moveThread.destination.remoteLookupFailed",
      defaultMessage: "Couldn’t inspect this host for a matching project",
      description: "Tooltip shown when Codex cannot inspect a remote host to decide whether it can receive this task"
    }
  });
});
export { localRemoteDropdownT };
