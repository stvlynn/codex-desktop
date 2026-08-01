// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split export-budget 2/2
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

const deferredUiQg: any = undefined;

// Cross-part soft stubs.
const AppInitialF3: any = undefined;
const AppInitialXY: any = undefined;
const alpha: any = undefined;
const deferredUiEnt: any = undefined;
const kite: any = undefined;

export function localRemoteDropdownR(azureSecond: unknown) {
  let {
      composerMode,
      conversationId,
      disabled,
      setComposerMode,
      side = "top"
    } = azureSecond,
    [birchSecond, canyonSecond] = onyx.useState(false),
    [dewSecond, everSecond] = useAtomPair(AppInitialXY),
    {
      access
    } = resolveCodexCloudAccess(),
    fieldSecond = useVoiceSettingsHostConfig(conversationId),
    grainSecond = CodexPluginActionResult(getHostConfigId),
    havenSecond = fieldSecond.cwd == null ? null : {
      cwd: fieldSecond.cwd,
      hostConfig: fieldSecond.hostConfig
    };
  let inkSecond = {
    enabled: true,
    retainRepoWatch: grainSecond,
    watchForGitInit: false
  };
  let {
      data
    } = AppInitialF3(havenSecond, "local_remote_dropdown", inkSecond),
    jadeiteSecond = kite({
      cloudAccess: access,
      hasGitRepository: data?.root != null,
      isBrowser: false
    });
  if (composerMode !== "cloud" || !jadeiteSecond) return null;
  let kernelSecond = <MemoizedFormattedMessage id="composer.environmentSelector.tooltip" defaultMessage="Select a cloud environment" description="Tooltip content for environment selector" />;
  let leafSecond = <EnsureDockIconInit className="icon-xs" />;
  let mapleSecond = dewSecond ? dewSecond.label : <MemoizedFormattedMessage id="composer.mode.remote.selectEnvironment" defaultMessage="Select environment" description="Remote mode label when no environment is selected" />;
  let nimbusSecond = <OptionalTooltip tooltipContent={kernelSecond}><ComposerCategoryValueChip data-composer-navigation-target="environment" categoryLabel={null} className="whitespace-nowrap" collapse="sm" disabled={disabled} icon={leafSecond} indicator="chevron" value={mapleSecond} valueClassName="max-w-40" /></OptionalTooltip>;
  let opalSecond = () => canyonSecond(false);
  let plumeSecond = <Lemon selectedEnvironment={dewSecond} setComposerMode={setComposerMode} setSelectedEnvironment={everSecond} closeDropdown={opalSecond} />;
  return <DropdownMenuPopover contentMaxHeight="list" side={side} open={birchSecond} onOpenChange={canyonSecond} disabled={disabled} triggerButton={nimbusSecond}>{plumeSecond}</DropdownMenuPopover>;
}
function Lemon(field) {
  let {
      selectedEnvironment,
      setComposerMode,
      setSelectedEnvironment,
      closeDropdown
    } = field,
    [grain, haven] = onyx.useState(""),
    {
      envListState,
      listToShow,
      zeroEnvironments
    } = alpha(grain, selectedEnvironment, setSelectedEnvironment),
    ink = useIntl(),
    jadeite;
  if (zeroEnvironments) {
    let leaf = <HostFeatureConfigToggles href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} className={quartz} />;
    let maple;
    maple = <DropdownMenu.Item rightIcon={leaf} href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} onClick={marble}><span className="text-token-description-foreground">{<MemoizedFormattedMessage id="composer.mode.remote.setupViaWeb" defaultMessage="Set up an environment via Codex web" description="Menu item to set up an environment via Codex web" />}</span></DropdownMenu.Item>;
    jadeite = maple;
  } else {
    let nimbus;
    if (envListState === "loading") {
      let thorn;
      thorn = <div className="flex items-center justify-center px-[var(--padding-row-x)] py-3">{<VSCODE_EDITOR_ID className="icon-xxs text-token-description-foreground" />}</div>;
      nimbus = thorn;
    } else if (envListState === "error") {
      let upland;
      upland = <DropdownMenu.Message compact={true} tone="error"><MemoizedFormattedMessage id="composer.environmentSelector.error" defaultMessage="Error loading environments" description="Error state for the cloud environment dropdown" /></DropdownMenu.Message>;
      nimbus = upland;
    } else if (envListState === "none-found" || envListState === "empty") {
      let vista;
      vista = <DropdownMenu.Message compact={true}><MemoizedFormattedMessage id="codex.environments.noEnvironmentsFound" defaultMessage="No environments found" description="Message shown when no Codex environments were found" /></DropdownMenu.Message>;
      nimbus = vista;
    } else {
      let wisp;
      {
        let crag;
        crag = dome => <DropdownMenu.Item key={dome.id} RightIcon={dome.id === selectedEnvironment?.id ? AppIconZlt : undefined} onClick={() => {
          setComposerMode("cloud");
          setSelectedEnvironment(dome);
          closeDropdown();
        }}><span className="flex min-w-0 items-center gap-1.5"><span className="min-w-0 truncate">{dome.label}</span></span></DropdownMenu.Item>;
        wisp = listToShow.map(crag);
      }
      let yonder = <DropdownMenu.Separator />;
      let zenith = <MemoizedFormattedMessage id="composer.environmentSelector.createNew" defaultMessage="Create new" description="CTA to create a new Codex environment" />;
      let anvil = <DropdownMenu.Item LeftIcon={ensureComposerEsm_Wlt_Init} href={CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL} onClick={closeDropdown}>{zenith}</DropdownMenu.Item>;
      let beacon;
      beacon = <>{wisp}{yonder}{anvil}</>;
      nimbus = beacon;
    }
    let opal = ink.formatMessage({
      id: "composer.searchEnvironments",
      defaultMessage: "Search environments",
      description: "Search environments placeholder"
    });
    let plume = event => haven(event.target.value);
    let quillow = <DropdownMenu.Section className="my-1"><DropdownMenu.SearchInput placeholder={opal} value={grain} onChange={plume} /></DropdownMenu.Section>;
    let silk;
    silk = <div className="flex flex-col">{quillow}{nimbus}</div>;
    jadeite = silk;
  }
  let kernel = <DropdownMenu.Title><MemoizedFormattedMessage id="composer.environmentSelector.title" defaultMessage="Select environment" description="Title for the cloud environment dropdown" /></DropdownMenu.Title>;
  return <div className="flex w-64 flex-col">{kernel}{jadeite}</div>;
}
function marble(eddy) {
  deferredUiEnt({
    disposition: "current-tab",
    event: eddy,
    href: CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL,
    initiator: "open_in_browser_bridge"
  });
}
var nickel,
  onyx,
  pearl,
  quartz,
  river,
  slate,
  timber = esmInit(() => {
    react();
    river = getJsxRuntime();
    slate = fjord => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...fjord}><path d="M2.5293 2.52884C2.78894 2.26944 3.21106 2.26944 3.4707 2.52884L17.4707 16.5288C17.7303 16.7885 17.7302 17.2105 17.4707 17.4703C17.211 17.7299 16.789 17.7299 16.5293 17.4703L2.5293 3.47025C2.26982 3.21053 2.26967 2.78847 2.5293 2.52884Z" fill="currentColor" /><path d="M5.00879 7.59623C3.47308 7.96665 2.33223 9.35009 2.33203 10.9995C2.33203 12.9335 3.90007 14.5015 5.83398 14.5015H11.9141L13.2441 15.8316H5.83398C3.16553 15.8316 1.00098 13.668 1.00098 10.9995C1.00115 8.99603 2.22092 7.27763 3.95801 6.54545L5.00879 7.59623Z" fill="currentColor" /><path d="M10 2.83451C12.9201 2.83476 15.3235 5.04493 15.6309 7.88334C17.5391 8.18581 18.9987 9.83935 18.999 11.8326C18.999 13.0839 18.4227 14.2008 17.5225 14.9341L16.5723 13.9839C17.2353 13.4983 17.6689 12.7171 17.6689 11.8326C17.6685 10.3594 16.4732 9.16485 15 9.16459C14.6329 9.16441 14.335 8.86671 14.335 8.49955C14.3347 6.10576 12.3938 4.16485 10 4.16459C9.08152 4.16465 8.22971 4.45217 7.52832 4.93998L6.57617 3.98783C7.52699 3.26515 8.71302 2.83458 10 2.83451Z" fill="currentColor" /></svg>;
  });
