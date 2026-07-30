// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 36/39
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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
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

// Wave5d soft stubs.
const Apex1: any = undefined;
const AppInitialAw: any = undefined;
const AppInitialAz: any = undefined;
const AppInitialD: any = undefined;
const AppInitialDz: any = undefined;
const AppInitialHz: any = undefined;
const AppInitialNz: any = undefined;
const AppInitialOw: any = undefined;
const AppInitialP: any = undefined;
const AppInitialSK: any = undefined;
const AppInitialU5: any = undefined;
const AppInitialWK: any = undefined;
const AppInitialWz: any = undefined;
const AppInitialX4: any = undefined;
const AppInitialXK: any = undefined;
const AppInitialZz: any = undefined;
const Cliff1: any = undefined;
const CodexPluginActionTypeStub: any = undefined;
const Copper: any = undefined;
const Dusk1: any = undefined;
const Moss1: any = undefined;
const NativeContextMenuSurface: any = undefined;
const North1: any = undefined;
const Orbit1: any = undefined;
const Pine1: any = undefined;
const PluginScheduledTasks: any = undefined;
const Presentation: any = undefined;
const _pluginDetailPageJ: any = undefined;
const _pluginDetailPageS: any = undefined;
const elm1: any = undefined;
const fern1: any = undefined;
const grove1: any = undefined;
const hill1: any = undefined;
const pluginDetailPageF: any = undefined;
const pluginDetailPageFt: any = undefined;
const pluginDetailPageGt: any = undefined;
const pluginDetailPageHt: any = undefined;
export var _pluginDetailPageA = esmInit(() => {
  strongMarkerFromOptions();
});
export function _pluginDetailPageN(kite9: unknown) {
  let {
      hostId,
      pluginName,
      marketplacePath,
      productEventContext,
      remoteMarketplaceName,
      onBack,
      onBeforeOpenInstall,
      parentPage = "plugins"
    } = kite9 === undefined ? {} : kite9,
    lemon9 = CodexPluginActionType(appScopeAtom),
    marble9 = useLocation(),
    nickel9 = useIntl(),
    {
      accountId,
      userId
    } = useAuth(),
    {
      pluginId
    } = AppInitialU5(),
    onyx9 = useNavigate(),
    pearl9 = composerNavigation(),
    {
      setSelectedHostId
    } = useSelectedHost(),
    quartz9 = ensureGitRepoWatchAtomsInit(),
    [river9, slate9] = elm1.useState(null),
    [timber9, umbra9] = elm1.useState(null),
    violet9 = parsePluginMarketplaceQuery(marble9.search),
    willow9 = productEventContext ?? AppInitialHz(marble9.state),
    xenon9 = {
      source: willow9.source,
      surface: CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS
    },
    yellow9 = AppInitialZz(marble9.state);
  let zinc9 = yellow9,
    amber9 = AppInitialWz(marble9.state);
  let basalt9 = amber9,
    cedar9 = marble9.key,
    [daisy9, ember9] = elm1.useState(zinc9 == null ? cedar9 : null),
    flint9 = daisy9 === cedar9,
    garnet9 = elm1.useRef(null),
    hazel9 = elm1.useRef(null),
    ivory9 = hostId ?? violet9?.hostId ?? "local",
    jasper9 = usePluginsFeatureEnabled({
      hostId: ivory9
    }),
    _e = usePluginScheduledTasksN({
      hostId: ivory9
    }),
    kelp9 = pluginId == null || pluginId.length === 0 ? null : pluginId,
    {
      directMarketplacePath,
      directPluginName,
      directRemoteMarketplaceName
    } = resolvePluginMarketplaceDirectRoute({
      explicitMarketplacePath: marketplacePath,
      explicitPluginName: pluginName,
      explicitRemoteMarketplaceName: remoteMarketplaceName,
      routeParams: violet9
    }),
    lotus9 = kelp9 != null && SUPPORTED_NODE_PLATFORMS(kelp9) ? kelp9 : null;
  let mint9 = lotus9,
    nova9 = kelp9 != null && (directPluginName == null || directMarketplacePath == null && directRemoteMarketplaceName == null),
    olive9 = {
      enabled: nova9
    };
  let {
      errorMessage,
      isFetching,
      isLoading,
      availablePlugins,
      refetch
    } = matchesOptionalHostPluginIds(ivory9, undefined, olive9),
    prism9,
    quill9,
    reef9;
  prism9 = nova9 && kelp9 != null ? resolveRequestedPluginSummary({
    fallbackRequestedPluginId: kelp9,
    plugins: availablePlugins,
    requestedPluginId: kelp9
  }) : null;
  quill9 = mint9 != null && !isFetching && !isLoading && prism9 == null;
  reef9 = prism9 == null ? null : AppInitialWK(prism9);
  let sage9 = reef9,
    topaz9 = directMarketplacePath ?? prism9?.marketplacePath ?? null,
    ultra9 = directPluginName ?? sage9 ?? (quill9 ? mint9 : null),
    vapor9 = directRemoteMarketplaceName ?? prism9?.remoteMarketplaceName ?? (quill9 ? "chatgpt-workspace" : null),
    wheat9 = kelp9 != null && timber9 === kelp9,
    yarn9 = nova9 && mint9 == null && kelp9 != null && errorMessage == null && !isLoading && prism9 == null && !wheat9,
    zephyr9 = async oak10 => {
      let {
        availablePlugins: _availablePlugins
      } = await refetch();
      return _availablePlugins.some(item => item.plugin.id === oak10);
    };
  let acorn9 = elm1.useEffectEvent(zephyr9),
    bloom9 = CodexPluginActionResult(useGitRepoLiveQuery),
    coral9 = CodexPluginActionResult(AppInitialX4),
    drift9 = AppInitialP(bloom9);
  let eagle9 = drift9,
    frost9 = useQueryClient(),
    $e = {
      hostId: ivory9
    };
  let {
      data = [],
      hardRefetchAppsList
    } = pluginMarketplaceRequestFields($e),
    {
      markSkillsUpdated,
      skills,
      workspaceRoots
    } = pluginDetailPageF(ivory9),
    glide9 = StackedCardHeader(workspaceRoots);
  let honey9 = {
    hostId: ivory9,
    useActiveWorkspaceRoot: false
  };
  let {
      data: _data
    } = useHostWorkspaceRoot(glide9, honey9),
    iris9 = {
      hostId: ivory9,
      marketplacePath: topaz9,
      pluginName: ultra9,
      remoteMarketplaceName: vapor9
    };
  let {
      errorMessage: _errorMessage,
      isLoading: _isLoading,
      plugin,
      refetch: _refetch
    } = AppInitialNz(iris9),
    jewel9 = ivory9 === "local" ? coral9 : [];
  let _t = repoWorktreeWorkspaceRoots(plugin, workspaceRoots, jewel9);
  let knoll9 = _t,
    lunar9 = {
      hostId: ivory9,
      cwds: knoll9
    };
  let {
      data: __data
    } = CodexBrowserSurfaceActionType(listHooksForHostQueryAtom, lunar9),
    moss9 = CodexBrowserSurfaceActionType(AppInitialAz, ivory9),
    north9 = __data?.data,
    orbit9 = AppIconId(north9, plugin);
  let pine9 = orbit9,
    {
      installPlugin,
      status
    } = AppInitialXK(),
    quest9 = async () => {
      await Dusk1({
        hostId: ivory9,
        invalidateQueriesAndBroadcast: quartz9,
        ...Cliff1({
          marketplacePath: topaz9,
          plugin,
          pluginName: ultra9,
          remoteMarketplaceName: vapor9
        })
      });
    };
  let ridge9 = quest9,
    storm9 = async () => {
      await Dusk1({
        hostId: ivory9,
        invalidateQueriesAndBroadcast: quartz9,
        ...Cliff1({
          marketplacePath: topaz9,
          plugin,
          pluginName: ultra9,
          remoteMarketplaceName: vapor9
        }),
        refetchPluginDetail: _refetch
      });
    };
  let tide9 = elm1.useEffectEvent(storm9),
    unity9 = () => {
      if (zinc9 == null || ultra9 == null || topaz9 == null && vapor9 == null) return;
      let petal10 = false;
      return tide9().finally(() => {
        petal10 || ember9(cedar9);
      }).catch(Pine1), () => {
        petal10 = true;
      };
    };
  let vale9;
  vale9 = [topaz9, cedar9, zinc9, ultra9, vapor9];
  elm1.useEffect(unity9, vale9);
  let wave9 = NativeContextMenuSurface("1269116100"),
    apex9 = useHomeDirectory(ivory9),
    brook9 = wave9 && plugin != null ? AppInitialOw(apex9, plugin.marketplacePath, plugin.summary.source) : null;
  let cliff9 = brook9,
    dusk9 = {
      hostId: ivory9
    };
  let {
      data: ___data,
      mutateAsync,
      reset,
      variables
    } = pluginDetailPageHt(dusk9),
    on = {
      hostId: ivory9
    };
  let {
      mutateAsync: _mutateAsync
    } = Copper(on),
    elm9 = {
      hostId: ivory9
    };
  let {
      mutateAsync: __mutateAsync
    } = pluginDetailPageGt(elm9),
    fern9 = () => {
      if (!yarn9 || kelp9 == null) return;
      let quiet10 = false,
        rain10 = null,
        seed10 = Date.now() + hill1,
        trail10 = async () => {
          let urn10 = await acorn9(kelp9).catch(Orbit1);
          if (!quiet10) {
            if (urn10 || Date.now() >= seed10) {
              urn10 || umbra9(kelp9);
              return;
            }
            rain10 = setTimeout(() => {
              trail10();
            }, grove1);
          }
        };
      return trail10(), () => {
        quiet10 = true;
        rain10 != null && clearTimeout(rain10);
      };
    };
  let grove9;
  grove9 = [kelp9, yarn9];
  elm1.useEffect(fern9, grove9);
  let hill9 = {
    hostId: ivory9
  };
  let {
      setAppEnabled,
      updatingAppId
    } = AppInitialD(hill9),
    isle9 = river9 == null ? null : data.find(item => item.id === river9) ?? null,
    juniper9 = AppInitialSK(river9),
    lagoon9 = {
      hostId: ivory9
    };
  let meadow9 = useToggleMcpServerEnabledMutation(lagoon9),
    nest9 = {
      hostId: ivory9
    };
  let {
      pendingPluginId,
      setPluginEnabled
    } = PluginScheduledTasks(nest9),
    oak9 = {
      hostId: ivory9
    };
  let {
      pendingUninstallPluginId,
      uninstallPlugin
    } = AppInitialDz(oak9),
    petal9 = plugin == null ? {
      hostId: ivory9
    } : {
      hostId: ivory9,
      pluginApps: plugin.apps,
      pluginSummary: plugin.summary
    };
  let {
      blockedReasonsByConnectorId,
      blockedReason,
      isLoading: __isLoading
    } = usePluginConnectorAvailability(petal9),
    quiet9 = plugin != null && !plugin.summary.installed ? blockedReason : null,
    rain9 = plugin != null && !plugin.summary.installed && __isLoading,
    seed9 = plugin != null && isAvailabilityDisabledByAdmin(plugin.summary) ? "disabled-by-admin" : quiet9,
    trail9 = seed9 != null,
    urn9 = plugin == null ? undefined : {
      pluginId: plugin.summary.id,
      remotePluginId: plugin.summary.remotePluginId ?? plugin.summary.shareContext?.remotePluginId ?? undefined,
      ...xenon9
    },
    vine9 = vine10 => {
      plugin != null && Presentation(lemon9, {
        action: CodexPluginActionTypeStub.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR,
        connectorId: vine10.id,
        plugin: plugin.summary,
        result: ChatgptTrustedContactEntryPoint.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
        ...xenon9
      });
    },
    wind9 = {
      hostId: ivory9,
      marketplaceAnalytics: urn9,
      onConnectStarted: vine9
    };
  let {
      clearConnectingApp,
      connectingApp,
      handleAppConnectOAuthStarted,
      handleConnectApp,
      handleOpenAppUrl,
      isAppConnectPending
    } = useMarketplaceConnectFlow(wind9),
    yarrow9 = plugin?.summary.shareContext ?? null,
    azure9 = variables?.pluginPath === cliff9 ? ___data : undefined,
    $n = yarrow9?.remotePluginId ?? azure9?.remotePluginId,
    birch9,
    canyon9,
    dew9,
    or,
    alpha10,
    bravo10;
  {
    or = pluginDetailPageFt(yarrow9);
    let wind10;
    wind10 = wave9 && plugin != null && plugin.summary.source.type === "local" && apex9 != null && !AppInitialAw(apex9, plugin.marketplacePath) && !isOpenaiCuratedMarketplaceToken(plugin.marketplaceName);
    canyon9 = wind10;
    birch9 = cliff9 != null;
    let yarrow10;
    yarrow10 = !birch9 && Apex1(yarrow9, accountId, userId);
    alpha10 = yarrow10;
    dew9 = $n != null;
    bravo10 = or?.some(North1);
  }
  let copper10 = bravo10 === true,
    delta10 = or != null && or.length > 0,
    echo10 = canyon9 ? <MemoizedFormattedMessage {...{
      id: "plugins.detail.importedExternalMarketplaceShareTooltip",
      defaultMessage: "Plugins from imported marketplaces can't be shared",
      description: "Tooltip for a disabled Share button on imported external marketplace plugins"
    }} /> : birch9 ? copper10 ? <MemoizedFormattedMessage {...{
      ...fern1.shareWorkspaceTooltip
    }} /> : delta10 ? <MemoizedFormattedMessage {...{
      ...fern1.shareInvitedTooltip
    }} /> : dew9 ? <MemoizedFormattedMessage {...{
      ...fern1.shareSharedTooltip
    }} /> : <MemoizedFormattedMessage {...{
      ...fern1.shareNotSharedTooltip
    }} /> : alpha10 ? <MemoizedFormattedMessage {...{
      ...fern1.shareLocalCopyRequiredTooltip
    }} /> : <MemoizedFormattedMessage {...{
      ...fern1.shareCreatedPluginsOnlyTooltip
    }} />;
  let falcon10 = echo10,
    gamma10 = plugin == null ? null : _pluginDetailPageS({
      pluginShareUrl: plugin.shareUrl,
      shareContext: yarrow9,
      savedShareUrl: azure9?.shareUrl ?? null,
      configuredShareUrl: _pluginDetailPageJ(plugin.summary.id)
    });
  let harbor10 = gamma10,
    _r = Moss1,
    indigo10 = () => _r(harbor10);
  let jade10 = indigo10,
    kite10 = azure10 => {
      lemon9.get(toastAtom).danger(nickel9.formatMessage({
        id: "plugins.detail.copyShareLinkError",
        defaultMessage: "Couldn't copy share link",
        description: "Error shown when copying a plugin share link fails"
      }), azure10 == null ? undefined : {
        description: AVATAR_OVERLAY_SURFACE_STACK_IDS(azure10)
      });
    };
  let lemon10 = kite10,
    marble10 = async () => {
      if ($n != null) try {
        await _mutateAsync({
          remotePluginId: $n
        });
        reset();
        await Dusk1({
          hostId: ivory9,
          invalidateQueriesAndBroadcast: quartz9,
          ...Cliff1({
            marketplacePath: topaz9,
            plugin,
            pluginName: ultra9,
            remoteMarketplaceName: vapor9
          }),
          refetchPluginDetail: _refetch
        });
      } catch (birch10) {
        let canyon10 = birch10;
        throw lemon9.get(toastAtom).danger(nickel9.formatMessage({
          id: "plugins.detail.stopSharingError",
          defaultMessage: "Couldn't stop sharing plugin",
          description: "Error shown when stopping plugin sharing fails"
        })), canyon10;
      }
    };
  return undefined as any;
}
