// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 38/39

// Wave5d unbound soft stubs.
const _i: any = undefined;
const _refetch: any = undefined;
const acorn10: any = undefined;
const apex10: any = undefined;
const blockedReasonsByConnectorId: any = undefined;
const clearConnectingApp: any = undefined;
const connectingApp: any = undefined;
const daisy10: any = undefined;
const eagle9: any = undefined;
const flint10: any = undefined;
const frost9: any = undefined;
const garnet10: any = undefined;
const handleAppConnectOAuthStarted: any = undefined;
const handleConnectApp: any = undefined;
const handleOpenAppUrl: any = undefined;
const hardRefetchAppsList: any = undefined;
const hazel10: any = undefined;
const isAppConnectPending: any = undefined;
const isle9: any = undefined;
const ivory9: any = undefined;
const jewel10: any = undefined;
const juniper9: any = undefined;
const lemon9: any = undefined;
const lunar10: any = undefined;
const markSkillsUpdated: any = undefined;
const mint10: any = undefined;
const moss9: any = undefined;
const nova10: any = undefined;
const olive10: any = undefined;
const onyx9: any = undefined;
const pearl9: any = undefined;
const pine9: any = undefined;
const plugin: any = undefined;
const quartz9: any = undefined;
const quest10: any = undefined;
const sage10: any = undefined;
const seed9: any = undefined;
const setAppEnabled: any = undefined;
const setSelectedHostId: any = undefined;
const slate9: any = undefined;
const topaz9: any = undefined;
const ultra9: any = undefined;
const updatingAppId: any = undefined;
const vapor9: any = undefined;
const wave10: any = undefined;
const xenon9: any = undefined;
const yarn10: any = undefined;
const yellow10: any = undefined;
const zinc10: any = undefined;

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

function PluginDetailPageLt(props: {
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
function Unity(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

const AppInitialGK: any = undefined;
const AppInitialQj: any = undefined;
const AppInitialT: any = undefined;
const AppInitialWl: any = undefined;
const CodexPluginActionTypeStub: any = undefined;
const Indigo: any = undefined;
const Presentation: any = undefined;
const Skills3: any = undefined;
const _pluginDetailPageN: any = undefined;
const pluginDetailPageLt: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const writeClipboardContents: any = undefined;

export function _pluginDetailPageN__splitRest2(__splitParams: any) {
  let brook10 = <ElectronOnly {...{
    electron: true,
    children: <AppIconAZ.Header {...{
      children: wave10
    }} />
  }} />;
  let cliff10 = <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{_i === "ready" && plugin != null ? <Unity {...{
      actions: quest10,
      apps: yellow10,
      appInstallBlockedReasonsById: blockedReasonsByConnectorId,
      browserExtensions: daisy10,
      connectedAccountEmailByAppId: hazel10,
      installedSkills: flint10.installedSkills,
      hostId: ivory9,
      installBlockedReason: seed9,
      isPromptInstallBlocked: olive10,
      isAppConnectPending,
      updatingAppId,
      isUpdatingEnabled: nova10,
      isUninstalling: mint10,
      onActivatePrompt: (hazel11, ivory11) => {
        jewel10(plugin, hazel11, ivory11);
      },
      onInstallApp: async jasper11 => {
        await handleConnectApp(jasper11);
      },
      onOpenAppTools: kelp11 => {
        slate9(kelp11.id);
      },
      onOpenHooksSettings: () => {
        Indigo({
          hostId: ivory9,
          navigate: onyx9,
          section: AppInitialWl({
            hostId: ivory9,
            pluginId: plugin.summary.id,
            source: "plugin"
          }),
          setSelectedHostId
        });
      },
      onTrustAllHooks: () => {
        moss9.mutate(pine9.map(Knoll1));
      },
      onOpenAppUrl: handleOpenAppUrl,
      onSetAppEnabled: setAppEnabled,
      onSkillsUpdated: markSkillsUpdated,
      mcpServers: garnet10,
      onOpenMcpSettings: () => {
        setSelectedHostId(ivory9);
        onyx9("/settings/mcp-settings");
      },
      onToggleMcpServerEnabled: (lotus11, mint11) => {
        lunar10(lotus11, mint11);
      },
      plugin: {
        ...plugin,
        appTemplates: zinc10
      },
      scheduledTasks: acorn10 == null ? undefined : {
        items: acorn10.templates,
        onSetUpTemplate: nova11 => {
          onyx9("/automations?automationMode=create", {
            state: {
              pluginId: acorn10.plugin.id,
              template: nova11
            }
          });
        }
      },
      hooksNeedingReviewCount: pine9.length,
      state: "ready",
      unavailableSkills: flint10.unavailableSkills
    }} /> : _i === "error" ? <Unity {...{
      errorMessage: sage10,
      state: "error"
    }} /> : _i === "loading" ? <Unity {...{
      state: "loading"
    }} /> : <Unity {...{
      state: "missing",
      description: yarn10 ? <MemoizedFormattedMessage {...{
        ...fern1.missingFromCurrentMarketplaces
      }} /> : undefined
    }} />}</div>;
  let dusk10 = olive11 => {
    olive11 || clearConnectingApp();
  };
  let elm10 = prism11 => {
      plugin == null || connectingApp == null || Presentation(lemon9, {
        action: CodexPluginActionTypeStub.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
        connectorId: connectingApp.id,
        errorType: prism11,
        plugin: plugin.summary,
        result: ChatgptTrustedContactEntryPoint.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
        ...xenon9
      });
    },
    fern10 = async () => {
      plugin != null && connectingApp != null && Presentation(lemon9, {
        action: CodexPluginActionTypeStub.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
        connectorId: connectingApp.id,
        plugin: plugin.summary,
        result: ChatgptTrustedContactEntryPoint.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
        ...xenon9
      });
      await Promise.all([AppInitialT({
        hostId: ivory9,
        queryClient: frost9,
        refreshAppsList: hardRefetchAppsList
      }), Dusk1({
        hostId: ivory9,
        invalidateQueriesAndBroadcast: quartz9,
        ...Cliff1({
          marketplacePath: topaz9,
          plugin,
          pluginName: ultra9,
          remoteMarketplaceName: vapor9
        }),
        refetchPluginDetail: _refetch
      })]);
    },
    grove10 = <Skills3 {...{
      app: connectingApp,
      onOpenChange: dusk10,
      onOAuthStarted: handleAppConnectOAuthStarted,
      onConnectFailed: elm10,
      onConnected: fern10
    }} />;
  let hill10 = juniper9.error?.message ?? null,
    isle10 = quill11 => {
      quill11 || slate9(null);
    };
  let juniper10 = plugin?.summary.installed === true,
    lagoon10 = reef11 => {
      pearl9({
        activeProject: eagle9,
        prefillPrompt: `[@${reef11.name}](${ensureZodRuntime(buildAppUri(reef11.id))})`,
        startInSidebar: true
      });
    };
  let meadow10 = juniper9.data ?? [];
  let nest10 = <PluginDetailPageLt {...{
    app: isle9,
    errorMessage: hill10,
    isLoading: juniper9.isLoading,
    onOpenChange: isle10,
    onOpenAppUrl: handleOpenAppUrl,
    onSetAppEnabled: setAppEnabled,
    showEnableToggle: juniper10,
    onTryInChat: lagoon10,
    tools: meadow10,
    updatingAppId
  }} />;
  return <div className="flex h-full min-h-0 flex-col text-base">{apex10}{brook10}{cliff10}{grove10}{nest10}</div>;
  return undefined as any;
}
function Knoll1(event) {
  return {
    key: event.key,
    trustedHash: event.currentHash
  };
}
function $l(sage11) {
  return sage11.id;
}
function Lunar1(topaz11) {
  return topaz11.isAccessible;
}
async function Moss1(ultra11) {
  return ultra11 == null ? false : writeClipboardContents(ultra11);
}
function North1(vapor11) {
  return vapor11.principal_type === "workspace";
}
function Orbit1() {
  return false;
}
function Pine1() {}
export function _pluginDetailPageT() {
  return <_pluginDetailPageN {...{
    parentPage: "manage"
  }} />;
}
function Quest1({
  errorMessage,
  isLoading,
  marketplacePath,
  plugin,
  pluginName,
  remoteMarketplaceName
}) {
  return isLoading ? "loading" : errorMessage == null ? marketplacePath == null && remoteMarketplaceName == null || pluginName == null || plugin == null ? "missing" : "ready" : "error";
}
function Ridge1(wheat11) {
  let {
      onCopyLink
    } = wheat11,
    yarn11 = useIntl(),
    [zephyr11, acorn11] = elm1.useState(false),
    bloom11 = elm1.useRef(null),
    coral11,
    drift11;
  coral11 = () => () => {
    bloom11.current != null && clearTimeout(bloom11.current);
  };
  drift11 = [];
  elm1.useEffect(coral11, drift11);
  let eagle11 = () => {
    onCopyLink().then(value => {
      value && (acorn11(true), bloom11.current != null && clearTimeout(bloom11.current), bloom11.current = setTimeout(() => {
        acorn11(false);
      }, 2e3));
    });
  };
  let frost11 = eagle11,
    glide11 = yarn11.formatMessage(zephyr11 ? fern1.copiedLink : fern1.shareLink);
  let honey11 = zephyr11 ? <AppIconZlt {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} /> : <AppInitialQj aria-hidden={true} className="icon-xs" />;
  return <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    size: "toolbar",
    uniform: true,
    "aria-label": glide11,
    onClick: frost11,
    children: honey11
  }} />;
}
function Storm1({
  apps,
  configuredServers,
  pluginServerNames
}) {
  return pluginServerNames.map(item => {
    let iris11 = Tide1(apps, item);
    if (iris11 != null) return {
      kind: "app",
      app: iris11
    };
    let jewel11 = Unity1(configuredServers, item),
      knoll11 = jewel11 == null ? null : configuredServers[jewel11];
    return {
      configKey: jewel11,
      kind: "config",
      enabled: knoll11?.enabled !== false,
      installed: knoll11 != null,
      name: item
    };
  });
}
function Tide1(lunar11, moss11) {
  let north11 = Vale1(moss11);
  return lunar11.find(item => [item.id, item.name, ...item.pluginDisplayNames, ...Object.keys(item.labels ?? {}), ...Object.values(item.labels ?? {})].some(_item => Vale1(_item) === north11)) ?? null;
}
function Unity1(orbit11, pine11) {
  let quest11 = Vale1(pine11);
  return Object.entries(orbit11).find(([ridge11, storm11]) => [ridge11, storm11.name].some(item => Vale1(item) === quest11))?.[0] ?? null;
}
function Vale1(tide11) {
  return (tide11 ?? "").trim().toLowerCase().replace(/^connector[_-]/, "").replace(/^mcp[_-]/, "").replace(/[\s_-]+/g, "");
}
function Wave1(unity11) {
  return unity11.summary.interface?.displayName ?? unity11.summary.name;
}
function Apex1(vale11, wave11, apex11) {
  return vale11 == null ? false : vale11.creatorAccountUserId != null && Brook1(vale11.creatorAccountUserId, wave11, apex11) ? true : vale11.sharePrincipals?.some(brook11 => brook11.principalType === "user" && brook11.role === "owner" && Brook1(brook11.principalId, wave11, apex11)) === true;
}
function Brook1(cliff11, dusk11, elm11) {
  return cliff11 === dusk11 || cliff11 === elm11;
}
function Cliff1({
  marketplacePath,
  plugin,
  pluginName,
  remoteMarketplaceName
}) {
  if (plugin == null) return {
    marketplacePath,
    pluginName,
    remoteMarketplaceName
  };
  let fern11 = pluginMarketplaceRequestFields(AppInitialGK(plugin));
  return "marketplacePath" in fern11 ? {
    marketplacePath: fern11.marketplacePath,
    pluginName: fern11.pluginName,
    remoteMarketplaceName: null
  } : {
    marketplacePath: null,
    pluginName: fern11.pluginName,
    remoteMarketplaceName: fern11.remoteMarketplaceName
  };
}
async function Dusk1({
  hostId,
  invalidateQueriesAndBroadcast,
  marketplacePath,
  pluginName,
  remoteMarketplaceName,
  refetchPluginDetail
}) {
  await Promise.all([invalidateQueriesAndBroadcast(useExternalBrowserUseGate), invalidateQueriesAndBroadcast(CompoundButtonMenu({
    hostId,
    marketplacePath,
    pluginName,
    remoteMarketplaceName
  }))]);
  await refetchPluginDetail?.();
}
var _u, elm1, $, fern1, grove1, hill1;

