// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 30/39
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
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

export function PluginDetailPageT(props: {
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
function ReadLoginRouteQuerySnapshot(props: {
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
function Ultra(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft JSX companions.
function Acorn(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ApplyActive(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Bloom(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Coral(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredConversationWH3(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Dismiss(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Eagle(props: {
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
function PluginDetailPageC(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginDetailPageS(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialCN: any = undefined;
const AppInitialDN: any = undefined;
const AppInitialZu: any = undefined;
const Copper1: any = undefined;
const Delta1: any = undefined;
const Dew: any = undefined;
const IntlProvider: any = undefined;
const _pluginDetailPageM: any = undefined;
const _pluginDetailPageV: any = undefined;
const appgen3: any = undefined;
const deferredConversationWH3: any = undefined;
const dismiss: any = undefined;
const indigo1: any = undefined;
const kite1: any = undefined;
const lemon1: any = undefined;
const pluginDetailPageC: any = undefined;
const pluginDetailPageS: any = undefined;
const pluginDetailPageT: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;

function Hill(vale6) {
  let {
      appInstallBlockedReasonsById,
      apps,
      appTemplatesDisabledByAdmin,
      connectedAccountEmailByAppId,
      hooksNeedingReviewCount,
      hostId,
      installedSkills,
      isAppConnectPending,
      mcpServers,
      onInstallApp,
      onOpenHooksSettings,
      onTrustAllHooks,
      onOpenMcpSettings,
      onOpenAppTools,
      onOpenAppUrl: wave6,
      onSetAppEnabled,
      plugin,
      pluginLogoUrl,
      scheduledTasks,
      onSkillsUpdated,
      onToggleMcpServerEnabled,
      unavailableSkills,
      updatingAppId
    } = vale6,
    apex6 = useIntl(),
    brook6 = apps.length + appTemplatesDisabledByAdmin.length,
    cliff6,
    dusk6,
    elm6,
    fern6,
    grove6,
    hill6,
    isle6,
    juniper6;
  {
    let nest6 = wind6 => appInstallBlockedReasonsById[wind6.id] !== "disabled-by-admin";
    let oak6 = apps.filter(nest6),
      petal6 = yarrow6 => appInstallBlockedReasonsById[yarrow6.id] === "disabled-by-admin";
    let quiet6 = apps.filter(petal6),
      rain6 = apex6.formatMessage(kite1.otherAppCategory),
      seed6 = Trail([...oak6.map(item => ({
        app: item,
        category: Urn(item.branding?.category, rain6),
        isDisabledByAdmin: false,
        kind: "app"
      })), ...quiet6.map(item => ({
        app: item,
        category: Urn(item.branding?.category, rain6),
        isDisabledByAdmin: true,
        kind: "app"
      })), ...appTemplatesDisabledByAdmin.map(item => ({
        category: Urn(item.category, rain6),
        kind: "template",
        template: item
      }))]),
      trail6 = seed6.length > 1,
      urn6 = [...installedSkills.map(Lagoon), ...unavailableSkills.map(Juniper)];
    cliff6 = hooksNeedingReviewCount > 0 && onTrustAllHooks != null;
    let vine6 = apex6.formatMessage({
      id: "plugins.detail.scheduledTasks.customSchedule",
      defaultMessage: "Custom schedule",
      description: "Fallback schedule summary for a plugin scheduled task template"
    });
    isle6 = "plugin-includes";
    juniper6 = "flex flex-col [--radius-token-row:var(--radius-lg)]";
    dusk6 = ensureDetailPageInit;
    elm6 = brook6 > 0 ? <EnsureDetailPageSectionHeaderInit {...{
      disableContentInlineInset: true,
      count: brook6,
      title: <MemoizedFormattedMessage {...{
        id: "plugins.detail.includes.apps.title",
        defaultMessage: "Apps",
        description: "Title for included apps on the plugin detail page"
      }} />,
      children: <div className="flex flex-col gap-3">{seed6.map((item, index) => <div key={item.category} className={IntlProvider("flex flex-col gap-2", trail6 && index > 0 && "pt-2")}>{trail6 ? <div className="px-[var(--padding-row-x)] text-sm text-token-text-tertiary">{item.category}</div> : null}{<_c {...{
            previewItems: item.items.map(Quiet),
            children: item.items.map(_item => _item.kind === "app" ? <AppCardAdminDisabledBadge key={`app-${_item.app.id}`} app={_item.app} cardIconContainerVariant="outline" blockedStatusLabel={_item.isDisabledByAdmin ? <OptionalTooltip {...{
              tooltipContent: <MemoizedFormattedMessage {...{
                ...kite1.disabledByAdminBadge
              }} />,
              children: <span role="img" aria-label={apex6.formatMessage(kite1.disabledByAdminBadge)}>{<AppIconIt {...{
                  className: "icon-sm shrink-0"
                }} />}</span>
            }} /> : undefined} className={IntlProvider(_item.isDisabledByAdmin && "opacity-60")} installBlockedReason={_item.isDisabledByAdmin ? "disabled-by-admin" : null} isConnectingApp={isAppConnectPending(_item.app.id)} connectedAccountEmail={connectedAccountEmailByAppId.get(_item.app.id)} installedStateAction={plugin.summary.installed ? "toggle" : "check"} manageAction="menu" presentation="row" showInstallAction={plugin.summary.installed} updatingAppId={updatingAppId} onInstallApp={onInstallApp} onOpenAppTools={onOpenAppTools} onOpenAppUrl={wave6} onSetAppEnabled={onSetAppEnabled} /> : <Ultra key={`app-template-${_item.template.templateId}`} {...{
              template: _item.template
            }} />)
          }} />}</div>)}</div>
    }} /> : null;
    fern6 = mcpServers.length > 0 ? <EnsureDetailPageSectionHeaderInit {...{
      disableContentInlineInset: true,
      count: mcpServers.length,
      title: <MemoizedFormattedMessage {...{
        id: "plugins.detail.includes.mcpServers.title",
        defaultMessage: "MCP servers",
        description: "Title for included MCP servers on the plugin detail page"
      }} />,
      children: <_c {...{
        children: mcpServers.map(item => item.kind === "app" ? <AppCardAdminDisabledBadge key={`mcp-app-${item.app.id}`} app={item.app} cardIcon={<Topaz {...{
          children: <AppIconKG {...{
            alt: item.app.name,
            appInfo: item.app,
            className: "icon-sm",
            fallback: <PluginManagePathForCatalogEntry {...{
              className: "icon-xs text-token-text-secondary"
            }} />
          }} />
        }} />} cardIconContainer={false} cardIconPlacement="inline" cardDescriptionPlacement="inline" isConnectingApp={isAppConnectPending(item.app.id)} installedStateAction={plugin.summary.installed ? "toggle" : "check"} manageAction="menu" presentation="row" showInstallAction={plugin.summary.installed} updatingAppId={updatingAppId} onInstallApp={onInstallApp} onOpenAppTools={onOpenAppTools} onOpenAppUrl={wave6} onSetAppEnabled={onSetAppEnabled} /> : <Acorn key={`mcp-config-${item.name}`} {...{
          enabled: item.enabled,
          installed: item.installed,
          logoUrl: pluginLogoUrl,
          name: item.name,
          onOpenSettings: onOpenMcpSettings,
          onToggleEnabled: azure6 => {
            item.configKey != null && onToggleMcpServerEnabled(item.configKey, azure6);
          }
        }} />)
      }} />
    }} /> : null;
    grove6 = urn6.length > 0 ? <EnsureDetailPageSectionHeaderInit {...{
      disableContentInlineInset: true,
      count: urn6.length,
      title: <MemoizedFormattedMessage {...{
        id: "plugins.detail.includes.skills.title",
        defaultMessage: "Skills",
        description: "Title for included skills on the plugin detail page"
      }} />,
      children: <_c {...{
        previewItems: urn6.map(Rain),
        children: urn6.map(item => item.kind === "installed" ? <_pluginDetailPageM key={`installed-skill-${item.installedSkill.path}`} {...{
          cardIcon: <span className="flex size-8 shrink-0 items-center justify-center">{Dew({
              className: "icon-md text-token-text-secondary",
              iconSkill: Seed(item),
              semanticSkill: item.installedSkill
            })}</span>,
          cardIconContainer: false,
          displayName: Delta1(item.installedSkill),
          hostId,
          installedStateAction: "toggle",
          modalIconShape: "rounded",
          onSkillsUpdated,
          presentation: "row",
          scopeBadges: [],
          showModalUninstall: false,
          skill: item.installedSkill,
          toggleOnly: true
        }} /> : <Bloom key={`skill-${item.pluginSkill.path ?? item.pluginSkill.name}`} {...{
          hostId,
          remotePluginSkill: Copper1(plugin, item.pluginSkill.name),
          skill: item.pluginSkill
        }} />)
      }} />
    }} /> : null;
    hill6 = scheduledTasks != null && scheduledTasks.items.length > 0 ? <EnsureDetailPageSectionHeaderInit {...{
      id: "plugin-scheduled-tasks",
      disableContentInlineInset: true,
      count: scheduledTasks.items.length,
      title: <MemoizedFormattedMessage {...{
        id: "plugins.detail.scheduledTasks",
        defaultMessage: "Scheduled",
        description: "Title for scheduled tasks included with a plugin"
      }} />,
      children: <_c {...{
        previewItems: scheduledTasks.items.map(Isle),
        children: scheduledTasks.items.map(item => <Coral key={item.key} {...{
          hostId,
          scheduleLabel: AppInitialZu({
            rrule: item.rrule,
            intl: apex6,
            fallbackMessage: vine6
          }) ?? vine6,
          template: item,
          onSetUpTemplate: scheduledTasks.onSetUpTemplate
        }} />)
      }} />
    }} /> : null;
  }
  let lagoon6 = plugin.hooks.length > 0 ? <EnsureDetailPageSectionHeaderInit {...{
    disableContentInlineInset: true,
    title: <MemoizedFormattedMessage {...{
      ...kite1.hooksTitle
    }} />,
    children: <Eagle {...{
      hooksNeedingReviewCount,
      installed: plugin.summary.installed,
      onOpenHooksSettings,
      onTrustAllHooks,
      shouldShowReviewActions: cliff6
    }} />
  }} /> : null;
  let meadow6 = <div className={dusk6}>{elm6}{fern6}{grove6}{hill6}{lagoon6}</div>;
  return <div id={isle6} className={juniper6}>{meadow6}</div>;
}
function Isle(event) {
  return {
    icon: <AppIconCct {...{
      className: "icon-xs text-token-text-secondary"
    }} />,
    key: event.key,
    label: event.name
  };
}
function Juniper(birch6) {
  return {
    kind: "unavailable",
    pluginSkill: birch6
  };
}
function Lagoon(canyon6) {
  return {
    kind: "installed",
    ...canyon6
  };
}
function _c(dew6) {
  let {
      children,
      previewItems
    } = dew6,
    alpha7 = indigo1.Children.toArray(children);
  let bravo7 = alpha7,
    copper7 = delta7 => {
      let {
          hiddenItems,
          isExpanded,
          onToggle
        } = delta7,
        echo7 = previewItems?.slice(bravo7.length - hiddenItems.length);
      return <PluginDetailPageS {...{
        className: "gap-3",
        isExpanded,
        onClick: onToggle,
        children: [echo7 == null ? null : <span aria-hidden={true} className="flex h-10 w-8 shrink-0 items-center">{echo7.slice(0, 3).map(Oak)}</span>, <MemoizedFormattedMessage {...{
          id: "plugins.detail.includes.showMore",
          defaultMessage: "{hasNames, select, true {See {itemNames}{remainingCount, plural, =0 {} other {, and # more}}} other {Show {count, number} more}}",
          description: "Button label that expands a long list of included plugin resources, optionally previewing the next item names",
          values: {
            count: hiddenItems.length,
            hasNames: echo7 != null,
            itemNames: echo7?.slice(0, 2).map(Nest).join(", "),
            remainingCount: Math.max(hiddenItems.length - 2, 0)
          }
        }} />]
      }} />;
    };
  return <PluginDetailPageC {...{
    items: bravo7,
    visibleItemLimit: lemon1,
    renderExpandRow: copper7,
    children: Meadow
  }} />;
}
function Meadow(falcon7) {
  return falcon7;
}
function Nest(gamma7) {
  return gamma7.label;
}
function Oak(event) {
  return <span key={event.key} className="-ml-2 flex size-4 items-center justify-center overflow-hidden rounded-sm border border-token-border-default bg-token-main-surface-primary first:ml-0">{event.icon}</span>;
}
function Petal(harbor7) {
  let {
    children
  } = harbor7;
  return <span className="flex size-10 shrink-0 items-center justify-center rounded-md">{children}</span>;
}
function Quiet(indigo7) {
  return indigo7.kind === "app" ? {
    icon: <AppIconKG {...{
      alt: "",
      appInfo: indigo7.app,
      className: "icon-xs",
      fallback: <PluginManagePathForCatalogEntry {...{
        className: "icon-2xs text-token-text-secondary"
      }} />
    }} />,
    key: `app-${indigo7.app.id}`,
    label: indigo7.app.name
  } : {
    icon: <AppIconKG {...{
      alt: "",
      className: "icon-xs",
      logoDarkUrl: indigo7.template.logoUrlDark,
      logoUrl: indigo7.template.logoUrl,
      fallback: <PluginManagePathForCatalogEntry {...{
        className: "icon-2xs text-token-text-secondary"
      }} />
    }} />,
    key: `template-${indigo7.template.templateId}`,
    label: indigo7.template.name
  };
}
function Rain(jade7) {
  let kite7 = jade7.kind === "installed" ? jade7.installedSkill : jade7.pluginSkill;
  return {
    icon: Dew({
      className: "icon-xs text-token-text-secondary",
      iconSkill: Seed(jade7),
      semanticSkill: kite7
    }),
    key: `${jade7.kind}-${kite7.path ?? kite7.name}`,
    label: Delta1(kite7)
  };
}
function Seed(lemon7) {
  return lemon7.kind, lemon7.pluginSkill;
}
function Trail(marble7) {
  let nickel7 = new Map();
  for (let onyx7 of marble7) {
    let pearl7 = nickel7.get(onyx7.category);
    if (pearl7 == null) {
      nickel7.set(onyx7.category, [onyx7]);
      continue;
    }
    pearl7.push(onyx7);
  }
  return [...nickel7].map(([quartz7, river7]) => ({
    category: quartz7,
    items: river7
  }));
}
function Urn(slate7, timber7) {
  return appgen3(slate7?.trim() || timber7, {
    style: "sentence"
  });
}
function Vine(umbra7) {
  return Array.isArray(umbra7.appTemplates) ? umbra7.appTemplates.filter(item => item.materializedAppIds.length === 0) : [];
}
function Wind(violet7) {
  let {
      template
    } = violet7,
    willow7 = useIntl(),
    xenon7 = <MemoizedFormattedMessage {...{
      ...kite1.disabledByAdminBadge
    }} />;
  let yellow7 = willow7.formatMessage(kite1.disabledByAdminBadge);
  let zinc7 = <AppIconIt {...{
    className: "icon-sm shrink-0"
  }} />;
  let amber7 = <span className="flex h-7 w-7 shrink-0 items-center justify-center text-token-text-secondary">{<OptionalTooltip {...{
      tooltipContent: xenon7,
      children: <span role="img" aria-label={yellow7}>{zinc7}</span>
    }} />}</span>;
  let basalt7 = template.description ?? <span aria-hidden={true} />;
  let cedar7 = <PluginManagePathForCatalogEntry {...{
    className: "icon-sm text-token-text-secondary"
  }} />;
  let daisy7 = <AppIconKG {...{
    alt: template.name,
    className: "icon-md",
    logoDarkUrl: template.logoUrlDark,
    logoUrl: template.logoUrl,
    fallback: cedar7
  }} />;
  return <StackedCardHeader actions={amber7} actionsPlacement="center" className="opacity-60" description={basalt7} descriptionClassName="line-clamp-1" icon={daisy7} iconContainerVariant="outline" presentation="row" title={template.name} />;
}
function Yarrow(ember7) {
  let {
      hooksNeedingReviewCount,
      installed,
      onOpenHooksSettings,
      onTrustAllHooks,
      shouldShowReviewActions
    } = ember7,
    flint7 = useIntl(),
    garnet7 = null;
  if (installed && shouldShowReviewActions) {
    let olive7 = <MemoizedFormattedMessage {...{
      id: "plugins.detail.includes.hooks.trustAll",
      defaultMessage: "Trust all",
      description: "Button label to trust every hook from a plugin detail page that needs review"
    }} />;
    let prism7 = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: onTrustAllHooks,
      children: olive7
    }} />;
    let quill7 = <MemoizedFormattedMessage {...{
      id: "plugins.detail.includes.hooks.review",
      defaultMessage: "Review",
      description: "Button label to open hooks settings from a plugin detail page when hooks need review"
    }} />;
    let reef7 = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: onOpenHooksSettings,
      children: quill7
    }} />;
    let sage7;
    sage7 = <span className="flex items-center gap-2">{prism7}{reef7}</span>;
    garnet7 = sage7;
  } else if (installed) {
    let topaz7 = <MemoizedFormattedMessage {...{
      ...kite1.hooksSettings
    }} />;
    let ultra7 = flint7.formatMessage(kite1.hooksSettings);
    let vapor7 = <DeferredConversationWH3 {...{
      className: "icon-sm"
    }} />;
    let wheat7;
    wheat7 = <OptionalTooltip {...{
      tooltipContent: topaz7,
      children: <ReadLoginRouteQuerySnapshot {...{
        color: "ghost",
        size: "toolbar",
        uniform: true,
        "aria-label": ultra7,
        onClick: onOpenHooksSettings,
        children: vapor7
      }} />
    }} />;
    garnet7 = wheat7;
  }
  let hazel7 = shouldShowReviewActions && "bg-token-editor-warning-background/20",
    ivory7 = IntlProvider(hazel7);
  let jasper7 = <MemoizedFormattedMessage {...{
    id: "plugins.detail.includes.hooks.description",
    defaultMessage: "Run deterministic scripts during the task lifecycle",
    description: "Description for included hooks on the plugin detail page"
  }} />;
  let kelp7 = shouldShowReviewActions ? <span className="flex items-center gap-1 text-token-text-primary">{<ApplyActive {...{
      className: "icon-2xs shrink-0 text-token-editor-warning-foreground"
    }} />}{<MemoizedFormattedMessage {...{
      id: "plugins.detail.includes.hooks.needsReview",
      defaultMessage: "{count, plural, one {# hook needs review before it can run} other {# hooks need review before they can run}}",
      description: "Warning shown when hooks from a plugin detail page need review before they can run",
      values: {
        count: hooksNeedingReviewCount
      }
    }} />}</span> : null;
  let lotus7 = <div className="flex flex-col gap-1">{jasper7}{kelp7}</div>;
  let mint7 = <NativeDesktopAppByBundleId className="icon-sm text-token-text-secondary" />;
  let nova7 = <MemoizedFormattedMessage {...{
    ...kite1.hooksTitle
  }} />;
  return <StackedCardHeader className={ivory7} actions={garnet7} actionsPlacement="center" description={lotus7} descriptionClassName="text-xs leading-4" icon={mint7} iconContainerVariant="outline" presentation="row" title={nova7} />;
}
function Azure(yarn7) {
  let {
      description,
      title
    } = yarn7,
    zephyr7 = <PluginDetailPageT {...{
      "aria-hidden": true,
      className: "h-20 w-auto text-token-input-placeholder-foreground"
    }} />;
  return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{<Dismiss {...{
      title,
      description,
      illustration: zephyr7
    }} />}</div>;
}
function Birch(acorn7) {
  let {
      hostId,
      remotePluginSkill,
      skill
    } = acorn7,
    bloom7 = Delta1(skill);
  let coral7 = bloom7,
    drift7 = getPluginShortDescription(skill);
  let eagle7 = drift7,
    frost7 = Dew({
      className: "icon-md text-token-text-secondary",
      iconSkill: skill,
      semanticSkill: skill
    });
  let glide7 = frost7,
    honey7 = <span className="flex size-8 shrink-0 items-center justify-center">{glide7}</span>;
  let iris7 = knoll7 => {
    let {
      isOpen
    } = knoll7;
    return <AppInitialCN hostId={hostId} isOpen={isOpen} remotePluginSkill={remotePluginSkill} skillPath={skill.path} titleText={coral7} />;
  };
  let jewel7 = <AppInitialDN kind="Skill" title={coral7} />;
  return <_pluginDetailPageV {...{
    cardDescription: eagle7,
    cardIcon: honey7,
    cardIconContainer: false,
    cardTitle: coral7,
    modalBody: iris7,
    modalDescription: eagle7,
    modalFooter: Canyon,
    modalIconShape: "rounded",
    modalTitle: jewel7,
    modalTitleText: coral7,
    presentation: "row"
  }} />;
}
function Canyon(lunar7) {
  let {
    closePreview
  } = lunar7;
  return <div className="flex w-full justify-end">{<ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "toolbar",
      onClick: closePreview,
      children: <MemoizedFormattedMessage {...{
        id: "common.close",
        defaultMessage: "Close",
        description: "Close button label"
      }} />
    }} />}</div>;
}
