// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 29/39
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { ensureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { ChatgptTrustedContactEntryPoint } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CODEX_SKILL_TRY_CLICKED_TYPE } from "../../analytics/codex-skill-try-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init as EnsureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_Jj_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { ConversationMarkdownText } from "../../conversation/conversation-markdown-text";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { ensureWebviewResumeConversationInit } from "../../conversation/ensure-webview-resume-conversation-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { toggleConversationPinned } from "../../conversation/toggle-conversation-pinned";
import { walkAssistantBranchPath } from "../../conversation/walk-assistant-branch-path";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL, GITHUB_COM_OPENAI_PLUGINS_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { remoteControlHostKey } from "../../environments/remote-host-keys";
import { areVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { repoWorktreeWorkspaceRoots } from "../../git/repo-worktree-workspace-roots";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { ensureUsePluginScheduledTasksInit, usePluginScheduledTasksN } from "../../hooks/use-plugin-scheduled-tasks";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { ensureUseRecommendedSkillsInit, useRecommendedSkills } from "../../hooks/use-recommended-skills";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconId } from "../../icons/app-icon-id";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTeamIconInit, TeamIcon } from "../../icons/team-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { listHooksForHostQueryAtom } from "../../settings/hooks-query-atoms";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { partitionPluginSkills } from "../../skills/partition-plugin-skills";
import { ensureRecommendedSkillStatsigOverridesInit, getRecommendedSkillStatsigOverride, useRecommendedSkillStatsigOverrides } from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU } from "../../ui/deferred-ui-u";
import { DETAIL_PAGE_STACK_CLASS, DetailPage, DetailPageSection, DetailPageSectionHeader, ensureDetailPageInit, ensureDetailPageSectionHeaderInit, ensureDetailPageSectionInit } from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ght } from "../../ui/ght";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { compareSemver } from "../../utils/compare-semver";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { ensureZodRuntime } from "../../vendor/zod";
import { installModalBrowserExtensionMessages } from "../install-modal-browser-extension-messages";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isPluginInstallModalOpenInLocationState } from "../is-plugin-install-modal-open-in-location-state";
import { matchConnectorIconKeyFromPlugin } from "../match-connector-icon-key-from-plugin";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { mergeDirectoryPluginApps } from "../merge-directory-plugin-apps";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery, resolvePluginMarketplaceDirectRoute } from "../plugin-marketplace-route";
import { pluginProductBrowseNav } from "../plugin-product-browse-nav";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";
import { usePluginNavigationTelemetry } from "../use-plugin-navigation-telemetry";


// Wave5d soft JSX companions.
function DeferredConversationWH3(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiDR(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsureDetailPageSectionHeaderInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsurePersonalizationCInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsureUsageSettingsAccessInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Ivory(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Kelp(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lotus(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Mint(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Olive(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ParseUrlOrFallback(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginManagePathForCatalogEntry(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Quill(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Sage(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Topaz(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialGL: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialYK: any = undefined;
const Bravo1: any = undefined;
const Echo1: any = undefined;
const Falcon1: any = undefined;
const Gamma1: any = undefined;
const IntlProvider: any = undefined;
const Vine: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredUiDR: any = undefined;
const deferredUiEnt: any = undefined;
const kite1: any = undefined;
const marble1: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;

function Apex(canyon5) {
  let dew5 = useIntl(),
    alpha6 = dew5.formatMessage({
      id: "plugins.detail.sectionsNav",
      defaultMessage: "Plugin sections",
      description: "Accessible label for the section navigation on the plugin detail page"
    });
  let bravo6 = [];
  let copper6 = canyon5.state === "loading" ? <EnsureComposerEsm_J0_Init {...{
    fillParent: true,
    debugName: "PluginDetailView"
  }} /> : canyon5.state === "error" ? <Ivory {...{
    title: <MemoizedFormattedMessage {...{
      ...kite1.errorTitle
    }} />,
    description: canyon5.errorMessage ?? undefined
  }} /> : canyon5.state === "missing" ? <Ivory {...{
    title: <MemoizedFormattedMessage {...{
      ...kite1.missing
    }} />,
    description: canyon5.description ?? <MemoizedFormattedMessage {...{
      ...kite1.missingDescription
    }} />
  }} /> : <Kelp {...{
    ...canyon5
  }} />;
  return <Lotus {...{
    ariaLabel: alpha6,
    contentInnerClassName: "flex min-h-full flex-col select-none electron:px-toolbar electron:pt-panel electron:pb-panel extension:px-20",
    disableScrollFade: true,
    showNav: false,
    sections: bravo6,
    children: copper6
  }} />;
}
function Brook(delta6) {
  let {
    appInstallBlockedReasonsById,
    actions,
    apps,
    browserExtensions = [],
    connectedAccountEmailByAppId,
    hostId,
    hooksNeedingReviewCount = 0,
    installedSkills,
    installBlockedReason,
    isPromptInstallBlocked,
    isAppConnectPending,
    updatingAppId,
    isUpdatingEnabled,
    isUninstalling,
    onActivatePrompt,
    onInstallApp: echo6,
    onOpenAppTools,
    onOpenAppUrl,
    onOpenHooksSettings,
    onTrustAllHooks,
    onSetAppEnabled,
    onSkillsUpdated,
    mcpServers,
    onOpenMcpSettings,
    onToggleMcpServerEnabled,
    plugin,
    scheduledTasks,
    unavailableSkills
  } = delta6;
  let falcon6 = browserExtensions,
    gamma6 = connectedAccountEmailByAppId === undefined ? marble1 : connectedAccountEmailByAppId,
    harbor6 = Bravo1(plugin);
  let indigo6 = harbor6,
    jade6 = Gamma1(plugin);
  let kite6 = jade6,
    lemon6 = Falcon1(plugin);
  let marble6 = lemon6,
    nickel6 = marble6 === kite6 ? null : marble6,
    onyx6,
    pearl6,
    quartz6,
    river6,
    slate6,
    timber6;
  {
    let xenon6 = (plugin.summary.interface?.defaultPrompt ?? []).map(Elm).filter(Dusk),
      yellow6 = plugin.apps.length === 1 ? apps[0] : undefined,
      zinc6 = AppInitialYK(plugin.summary, yellow6);
    let {
      composerIconPath,
      logoDarkPath,
      logoPath
    } = zinc6;
    quartz6 = logoPath;
    let amber6 = composerIconPath ?? quartz6 ?? logoDarkPath,
      basalt6 = isUpdatingEnabled || isUninstalling;
    river6 = plugin.summary.installed && falcon6.length > 0;
    let cedar6 = xenon6.length > 0 || !!nickel6,
      daisy6;
    daisy6 = Vine(plugin);
    pearl6 = daisy6;
    onyx6 = DetailPageSection;
    let ember6 = <PluginManagePathForCatalogEntry {...{
      className: "icon-lg text-token-text-secondary"
    }} />;
    let flint6 = <span className="flex size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-token-border-default bg-transparent">{<AppIconKG {...{
        alt: indigo6,
        className: "size-full object-contain",
        logoDarkUrl: logoDarkPath,
        logoUrl: quartz6,
        fallback: ember6
      }} />}</span>;
    let garnet6;
    garnet6 = kite6 ? <span id="plugin-description">{kite6}</span> : undefined;
    slate6 = <EnsureUsageSettingsAccessInit {...{
      actions,
      asset: flint6,
      subtitle: garnet6,
      title: indigo6
    }} />;
    timber6 = cedar6 ? <div className={ensureDetailPageInit}>{xenon6.length > 0 ? <div className="flex flex-col"><div className="relative mx-[var(--detail-page-inline-inset)] flex justify-center overflow-hidden rounded-2xl px-4 py-8 sm:px-8"><img src={SearchableDetailPageLayout} alt="" aria-hidden={true} className="pointer-events-none absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-token-bg-primary/70" /><div className="relative flex w-full max-w-[640px] flex-col items-center gap-4">{xenon6.map((item, index) => <OptionalTooltip key={`${item}-${index}`} {...{
              tooltipContent: installBlockedReason === "connector-unavailable" ? <MemoizedFormattedMessage {...{
                id: "plugins.install.connectorUnavailable",
                defaultMessage: "App unavailable",
                description: "Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory"
              }} /> : <MemoizedFormattedMessage {...{
                id: "plugins.install.disabledByAdmin",
                defaultMessage: "Disabled by admin",
                description: "Tooltip shown when plugin install is unavailable because all included connectors are disabled by admin"
              }} />,
              disabled: !isPromptInstallBlocked,
              children: <button aria-disabled={isPromptInstallBlocked} className={IntlProvider("text-size-chat max-w-[77%] rounded-2xl bg-token-bg-primary/75 py-2 pr-1.5 pl-2 text-left break-words text-token-foreground outline-hidden [&_.contain-inline-size]:[contain:initial]", isPromptInstallBlocked ? "cursor-not-allowed opacity-50" : "cursor-interaction hover:bg-token-bg-primary focus-visible:bg-token-bg-primary focus-visible:ring-1 focus-visible:ring-token-focus-border")} tabIndex={basalt6 ? -1 : 0} type="button" onClick={() => {
                isPromptInstallBlocked || basalt6 || onActivatePrompt(item, index);
              }}><span className="flex items-center gap-1.5"><span className="min-w-0 flex-1 text-pretty break-words"><AppInitialGL brandColor={plugin.summary.interface?.brandColor ?? undefined} displayName={indigo6} fallbackIcon={AppIconLV} fallbackName={plugin.summary.id} iconSmall={amber6 ?? ""} /><span className="ml-1">{item}</span></span>{isPromptInstallBlocked ? null : <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-token-text-primary">{<AppIconPZ {...{
                      "aria-hidden": true,
                      className: "icon-2xs -scale-x-100"
                    }} />}</span>}</span></button>
            }} />)}</div></div></div> : null}{nickel6 ? <div className="text-size-chat px-[var(--detail-page-inline-inset)] leading-relaxed text-token-text-secondary">{nickel6}</div> : null}</div> : null;
  }
  let umbra6 = river6 ? <EnsureDetailPageSectionHeaderInit {...{
    id: "plugin-setup",
    title: <MemoizedFormattedMessage {...{
      ...kite1.setupSection
    }} />,
    children: <ParseUrlOrFallback {...{
      className: "overflow-hidden",
      children: falcon6.map(Cliff)
    }} />
  }} /> : null;
  let violet6 = scheduledTasks != null && scheduledTasks.items.length > 0 || apps.length > 0 || pearl6.length > 0 || mcpServers.length > 0 || installedSkills.length > 0 || unavailableSkills.length > 0 || plugin.hooks.length > 0 ? <Mint {...{
    appInstallBlockedReasonsById,
    apps,
    appTemplatesDisabledByAdmin: pearl6,
    connectedAccountEmailByAppId: gamma6,
    hostId,
    installedSkills,
    isAppConnectPending,
    mcpServers,
    onInstallApp: echo6,
    onOpenHooksSettings,
    onTrustAllHooks,
    hooksNeedingReviewCount: hooksNeedingReviewCount,
    onOpenMcpSettings,
    onOpenAppTools,
    onOpenAppUrl,
    onSetAppEnabled,
    plugin,
    pluginLogoUrl: quartz6,
    scheduledTasks,
    onSkillsUpdated,
    onToggleMcpServerEnabled,
    unavailableSkills,
    updatingAppId
  }} /> : null;
  let willow6 = <Olive {...{
    plugin
  }} />;
  return <Quill {...{
    children: [slate6, timber6, umbra6, violet6, willow6]
  }} />;
}
function Cliff(hazel6) {
  return <EnsurePersonalizationCInit key={hazel6.id} {...{
    icon: <AppIconKG {...{
      alt: hazel6.name,
      className: "size-10",
      fallback: <PluginManagePathForCatalogEntry {...{
        className: "icon-lg text-token-text-secondary"
      }} />,
      logoUrl: hazel6.iconUrl
    }} />,
    label: hazel6.name,
    description: <MemoizedFormattedMessage {...{
      ...ensureWebviewResumeConversationInit.codexChromeDescription
    }} />,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "medium",
      className: "min-w-24 shrink-0 justify-center",
      onClick: ivory6 => {
        deferredUiEnt({
          event: ivory6,
          href: hazel6.url,
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
      },
      children: <MemoizedFormattedMessage {...{
        id: "plugins.detail.setup.openBrowserExtension",
        defaultMessage: "Open",
        description: "Button label for opening a browser extension setup URL from the plugin detail page"
      }} />
    }} />
  }} />;
}
function Dusk(jasper6) {
  return jasper6.length > 0;
}
function Elm(kelp6) {
  return kelp6.trim();
}
function Fern(lotus6) {
  let {
      plugin
    } = lotus6,
    mint6 = useIntl(),
    nova6 = plugin.summary.interface;
  if (nova6 == null) return null;
  let olive6 = nova6.category?.trim();
  let prism6 = olive6,
    quill6 = nova6.developerName?.trim();
  let reef6 = quill6,
    sage6 = nova6.capabilities?.join(", ");
  let topaz6 = sage6,
    ultra6 = (plugin.summary.localVersion ?? plugin.summary.version)?.trim();
  let vapor6 = ultra6;
  if (!(reef6 || prism6 || topaz6 || vapor6 || nova6.websiteUrl || nova6.privacyPolicyUrl || nova6.termsOfServiceUrl)) return null;
  let wheat6 = <MemoizedFormattedMessage {...{
    ...kite1.information
  }} />;
  let yarn6 = topaz6 ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.capabilities
    }} />,
    children: topaz6
  }} /> : null;
  let zephyr6 = reef6 ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.developer
    }} />,
    children: reef6
  }} /> : null;
  let acorn6 = prism6 ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.category
    }} />,
    children: prism6
  }} /> : null;
  let bloom6 = vapor6 ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.version
    }} />,
    children: vapor6
  }} /> : null;
  let coral6 = <MemoizedFormattedMessage {...{
    ...kite1.website
  }} />;
  let drift6 = <SetRemoteControlEnabledForHost {...{
    label: coral6,
    children: nova6.websiteUrl ? <Sage {...{
      ariaLabel: mint6.formatMessage(kite1.website),
      href: nova6.websiteUrl
    }} /> : <MemoizedFormattedMessage {...{
      ...kite1.unavailable
    }} />
  }} />;
  let eagle6 = nova6.privacyPolicyUrl ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.privacyPolicy
    }} />,
    children: <Sage {...{
      ariaLabel: mint6.formatMessage(kite1.privacyPolicy),
      href: nova6.privacyPolicyUrl
    }} />
  }} /> : null;
  let frost6 = nova6.termsOfServiceUrl ? <SetRemoteControlEnabledForHost {...{
    label: <MemoizedFormattedMessage {...{
      ...kite1.termsOfService
    }} />,
    children: <Sage {...{
      ariaLabel: mint6.formatMessage(kite1.termsOfService),
      href: nova6.termsOfServiceUrl
    }} />
  }} /> : null;
  return <EnsureDetailPageSectionHeaderInit {...{
    id: "plugin-information",
    title: wheat6,
    children: <dl>{yarn6}{zephyr6}{acorn6}{bloom6}{drift6}{eagle6}{frost6}</dl>
  }} />;
}
function Grove(glide6) {
  let {
      enabled,
      installed,
      logoUrl,
      name,
      onOpenSettings,
      onToggleEnabled
    } = glide6,
    honey6 = useIntl(),
    iris6 = installed && !enabled && "opacity-60",
    jewel6 = IntlProvider("group", iris6);
  let knoll6 = Echo1(name);
  let lunar6 = <DeferredUiDR {...{
    className: "icon-xs text-token-text-secondary"
  }} />;
  let moss6 = <Topaz {...{
    children: <AppIconKG {...{
      alt: knoll6,
      className: "icon-sm",
      logoUrl,
      fallback: lunar6
    }} />
  }} />;
  let north6 = Echo1(name);
  let orbit6 = installed ? <MemoizedFormattedMessage {...{
    ...kite1.mcpServerSettings
  }} /> : <MemoizedFormattedMessage {...{
    ...kite1.mcpServerSetup
  }} />;
  let pine6 = installed ? honey6.formatMessage(kite1.mcpServerSettings) : honey6.formatMessage(kite1.mcpServerSetup);
  let quest6 = <DeferredConversationWH3 {...{
    className: "icon-sm"
  }} />;
  let ridge6 = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "toolbar",
    uniform: true,
    "aria-label": pine6,
    onClick: onOpenSettings,
    children: quest6
  }} />;
  let storm6 = <OptionalTooltip {...{
    tooltipContent: orbit6,
    children: ridge6
  }} />;
  let tide6 = installed ? <OptionalTooltip {...{
    tooltipContent: enabled ? <MemoizedFormattedMessage {...{
      ...kite1.mcpServerDisable
    }} /> : <MemoizedFormattedMessage {...{
      ...kite1.mcpServerEnable
    }} />,
    children: <AppInitialYC checked={enabled} ariaLabel={honey6.formatMessage(kite1.mcpServerToggleAria)} onChange={onToggleEnabled} />
  }} /> : null;
  let unity6 = <>{storm6}{tide6}</>;
  return <StackedCardHeader actionsPlacement="center" className={jewel6} icon={moss6} iconContainer={false} iconPlacement="inline" presentation="row" title={north6} actions={unity6} />;
}
