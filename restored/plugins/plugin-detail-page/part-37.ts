// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 37/39

// Wave5d unbound soft stubs.
const $n: any = undefined;
const __mutateAsync: any = undefined;
const _data: any = undefined;
const _e: any = undefined;
const _errorMessage: any = undefined;
const _isLoading: any = undefined;
const _r: any = undefined;
const _refetch: any = undefined;
const basalt9: any = undefined;
const birch9: any = undefined;
const cedar9: any = undefined;
const cliff9: any = undefined;
const data: any = undefined;
const eagle9: any = undefined;
const errorMessage: any = undefined;
const falcon10: any = undefined;
const flint9: any = undefined;
const garnet9: any = undefined;
const harbor10: any = undefined;
const hazel9: any = undefined;
const installPlugin: any = undefined;
const isFetching: any = undefined;
const isLoading: any = undefined;
const ivory9: any = undefined;
const jade10: any = undefined;
const jasper9: any = undefined;
const kelp9: any = undefined;
const lemon10: any = undefined;
const lemon9: any = undefined;
const marble10: any = undefined;
const marble9: any = undefined;
const meadow9: any = undefined;
const mutateAsync: any = undefined;
const nickel9: any = undefined;
const nova9: any = undefined;
const onBack: any = undefined;
const onBeforeOpenInstall: any = undefined;
const onyx9: any = undefined;
const or: any = undefined;
const parentPage: any = undefined;
const pearl9: any = undefined;
const pendingPluginId: any = undefined;
const pendingUninstallPluginId: any = undefined;
const plugin: any = undefined;
const prism9: any = undefined;
const quartz9: any = undefined;
const quill9: any = undefined;
const rain9: any = undefined;
const ridge9: any = undefined;
const seed9: any = undefined;
const setPluginEnabled: any = undefined;
const setSelectedHostId: any = undefined;
const skills: any = undefined;
const status: any = undefined;
const topaz9: any = undefined;
const trail9: any = undefined;
const ultra9: any = undefined;
const uninstallPlugin: any = undefined;
const vapor9: any = undefined;
const wave9: any = undefined;
const wheat9: any = undefined;
const willow9: any = undefined;
const xenon9: any = undefined;
const yarn9: any = undefined;
const yarrow9: any = undefined;
const zinc9: any = undefined;

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

function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Ridge(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Storm(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

const $l: any = undefined;
const AppInitialDt: any = undefined;
const AppInitialDw: any = undefined;
const AppInitialEK: any = undefined;
const AppInitialGK: any = undefined;
const AppInitialGz: any = undefined;
const AppInitialOK: any = undefined;
const AppInitialQj: any = undefined;
const AppInitialQz: any = undefined;
const AppInitialWw: any = undefined;
const Cliff1: any = undefined;
const Dusk1: any = undefined;
const Lunar1: any = undefined;
const Quest1: any = undefined;
const Storm1: any = undefined;
const Wave1: any = undefined;
const _pluginDetailPageI: any = undefined;
const _pluginDetailPageL: any = undefined;
const _pluginDetailPageO: any = undefined;
const _pluginDetailPageP: any = undefined;
const _pluginDetailPageU: any = undefined;
const buildPluginInstallQuery: any = undefined;
const chatProcessRegister: any = undefined;
const elm1: any = undefined;
const fern1: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const writeClipboardContents: any = undefined;

export function _pluginDetailPageN__splitRest1(__splitParams: any) {
  let nickel10 = marble10,
    onyx10 = dew10 => {
      if (cliff9 == null) return;
      if ($n != null && or == null) {
        lemon9.get(toastAtom).danger(nickel9.formatMessage({
          id: "plugins.detail.loadSharingError",
          defaultMessage: "Couldn't load plugin sharing",
          description: "Error shown when plugin sharing settings cannot load"
        }));
        return;
      }
      let alpha11 = async () => {
          if (yarrow9?.remotePluginId != null) try {
            await mutateAsync({
              pluginPath: cliff9,
              remotePluginId: yarrow9.remotePluginId
            });
            await Dusk1({
              hostId: ivory9,
              invalidateQueriesAndBroadcast: quartz9,
              ...Cliff1({
                marketplacePath: topaz9,
                plugin: dew10,
                pluginName: ultra9,
                remoteMarketplaceName: vapor9
              }),
              refetchPluginDetail: _refetch
            });
            lemon9.get(toastAtom).success(nickel9.formatMessage({
              id: "plugins.detail.updateSharedVersionSuccess",
              defaultMessage: "Shared version updated",
              description: "Success message shown after uploading a newer local plugin version to an existing plugin share"
            }));
          } catch (copper11) {
            let delta11 = copper11;
            throw lemon9.get(toastAtom).danger(nickel9.formatMessage({
              id: "plugins.detail.updateSharedVersionError",
              defaultMessage: "Couldn't update shared version",
              description: "Error shown when uploading a newer local plugin version to an existing plugin share fails"
            }), {
              description: AVATAR_OVERLAY_SURFACE_STACK_IDS(delta11)
            }), delta11;
          }
        },
        bravo11 = _pluginDetailPageO({
          initialShare: $n == null ? null : {
            remotePluginId: $n,
            sharePrincipals: or,
            shareUrl: harbor10
          },
          saveShare: echo11 => _pluginDetailPageL({
            pluginPath: cliff9,
            remotePluginId: echo11,
            savePluginShare: mutateAsync
          })
        });
      chatProcessRegister(lemon9, _pluginDetailPageU, {
        initialSharePrincipals: $n == null ? [] : or ?? [],
        pluginDisplayName: Wave1(dew10),
        shouldShowCopyLinkCreationProgress: () => bravo11.getCurrentShare()?.shareUrl == null,
        onCopyLink: async () => {
          try {
            let falcon11 = await bravo11.getOrCreateShare();
            return falcon11.shareUrl.length === 0 ? (lemon10(), false) : await writeClipboardContents(falcon11.shareUrl);
          } catch (gamma11) {
            return lemon10(gamma11), false;
          }
        },
        onSaveShareTargets: async harbor11 => {
          try {
            let indigo11 = await bravo11.saveShareTargets(harbor11, (jade11, kite11) => __mutateAsync({
              remotePluginId: jade11,
              targets: kite11
            }));
            return await Dusk1({
              hostId: ivory9,
              invalidateQueriesAndBroadcast: quartz9,
              ...Cliff1({
                marketplacePath: topaz9,
                plugin: dew10,
                pluginName: ultra9,
                remoteMarketplaceName: vapor9
              }),
              refetchPluginDetail: _refetch
            }), indigo11;
          } catch (lemon11) {
            let marble11 = lemon11;
            throw lemon9.get(toastAtom).danger(nickel9.formatMessage({
              id: "plugins.detail.updateSharingError",
              defaultMessage: "Couldn't update plugin sharing",
              description: "Error shown when updating plugin sharing fails"
            }), {
              description: AVATAR_OVERLAY_SURFACE_STACK_IDS(marble11)
            }), marble11;
          }
        },
        onStopSharing: $n == null ? undefined : nickel10,
        onUpdateSharedVersion: alpha11,
        shouldShowUpdateSharedVersion: _pluginDetailPageI(dew10.summary)
      });
    };
  let pearl10 = onyx10,
    quartz10 = nickel11 => {
      pearl10(nickel11);
    };
  let river10 = elm1.useEffectEvent(quartz10),
    slate10 = () => {
      zinc9 !== "share" || garnet9.current === cedar9 || !flint9 || plugin == null || cliff9 == null || (garnet9.current = cedar9, river10(plugin));
    };
  let timber10;
  timber10 = [flint9, plugin, cedar9, zinc9, cliff9];
  elm1.useEffect(slate10, timber10);
  let umbra10, violet10;
  umbra10 = () => {
    _r(harbor10);
  };
  violet10 = [harbor10];
  writeScrollTop("copy-deeplink", umbra10, violet10);
  let willow10 = plugin == null ? <MemoizedFormattedMessage {...{
    ...fern1.pageTitleFallback
  }} /> : Wave1(plugin);
  let xenon10 = willow10,
    yellow10 = plugin == null ? [] : mergeDirectoryPluginApps({
      directoryApps: data,
      pluginApps: plugin.apps
    }),
    zinc10 = plugin == null ? [] : AppInitialWw({
      directoryApps: data,
      appTemplates: plugin.appTemplates
    }),
    amber10 = plugin?.summary.installed === true && plugin.summary.authPolicy === "ON_INSTALL",
    basalt10 = plugin == null ? null : AppInitialGK(plugin);
  let cedar10 = {
    enabled: amber10,
    hostId: ivory9,
    plugin: basalt10
  };
  let daisy10 = AppInitialDt(cedar10),
    ember10 = plugin == null ? {
      installedSkills: [],
      unavailableSkills: []
    } : partitionPluginSkills({
      installedSkills: skills,
      pluginName: plugin.summary.name,
      pluginSkills: plugin.skills
    });
  let flint10 = ember10,
    garnet10 = plugin == null ? [] : Storm1({
      apps: data,
      configuredServers: _data?.servers ?? {},
      pluginServerNames: plugin.mcpServers
    }),
    hazel10 = AppInitialOK(yellow10.filter(Lunar1).map($l)),
    ivory10 = plugin == null ? null : AriaIconBadge(status, ivory9, plugin.summary.id);
  let jasper10 = ivory10,
    kelp10 = plugin == null ? null : identity(status, ivory9, plugin.summary.id);
  let lotus10 = kelp10,
    mint10 = plugin != null && pendingUninstallPluginId === plugin.summary.id,
    nova10 = plugin != null && pendingPluginId === plugin.summary.id,
    olive10 = trail9 || rain9,
    prism10 = onyx11 => {
      onBeforeOpenInstall?.();
      installPlugin(AppInitialGK(onyx11), {
        activeProject: eagle9,
        hostId: ivory9,
        onSuccess: ridge9,
        source: willow9.source
      });
    };
  let ui = elm1.useEffectEvent(prism10),
    quill10 = () => {
      plugin == null || !AppInitialQz({
        hasHandledNavigation: hazel9.current === marble9.key,
        isInstallBlocked: olive10,
        isPluginInstalled: plugin.summary.installed,
        shouldOpenInstall: basalt9
      }) || (hazel9.current = marble9.key, plugin.summary.installed || ui(plugin));
    };
  let reef10;
  reef10 = [olive10, marble9.key, plugin, basalt9];
  elm1.useEffect(quill10, reef10);
  let sage10 = _errorMessage ?? (quill9 ? null : errorMessage),
    topaz10 = _isLoading || nova9 && !wheat9 && (isFetching || isLoading || yarn9),
    ultra10 = Quest1({
      errorMessage: sage10,
      isLoading: topaz10,
      marketplacePath: topaz9,
      plugin,
      pluginName: ultra9,
      remoteMarketplaceName: vapor9
    });
  let _i = ultra10,
    vapor10 = jasper9 && flint9 && _i === "ready" && plugin != null ? plugin : null,
    wheat10;
  if (wheat10 = {
    scope: lemon9,
    navigationKey: marble9.key,
    plugin: vapor10,
    referrer: willow9.referrer,
    source: willow9.source
  }, usePluginNavigationTelemetry(wheat10), !jasper9) {
    let pearl11;
    return <Navigate {...{
      replace: true,
      to: "/skills"
    }} />;
  }
  let yarn10 = nova9 && kelp9 != null && wheat9 && prism9 == null,
    zephyr10 = ivory9 === "local" && plugin != null ? _e?.groups.find(quartz11 => quartz11.plugin.id === plugin.summary.id) ?? null : null;
  let acorn10 = zephyr10,
    bloom10 = () => {
      if (onBack != null) {
        onBack();
        return;
      }
      if (AppInitialGz(marble9.state)) {
        onyx9(-1);
        return;
      }
      onyx9("..", {
        state: {
          initialHostId: ivory9,
          initialTab: "plugins"
        }
      });
    };
  let coral10 = bloom10,
    drift10 = river11 => {
      onBeforeOpenInstall?.();
      installPlugin(AppInitialGK(river11), {
        hostId: ivory9,
        marketplaceAnalytics: {
          ...xenon9
        },
        activeProject: eagle9,
        onSuccess: ridge9,
        source: willow9.source
      });
    },
    eagle10 = async slate11 => {
      await setPluginEnabled({
        enabled: true,
        marketplaceAnalytics: {
          plugin: slate11.summary,
          ...xenon9
        },
        pluginDisplayName: Wave1(slate11),
        pluginId: slate11.summary.id
      });
      await Dusk1({
        hostId: ivory9,
        invalidateQueriesAndBroadcast: quartz9,
        ...Cliff1({
          marketplacePath: topaz9,
          plugin: slate11,
          pluginName: ultra9,
          remoteMarketplaceName: vapor9
        }),
        refetchPluginDetail: _refetch
      });
    },
    frost10 = (timber11, umbra11) => {
      pearl9({
        activeProject: eagle9,
        prefillPrompt: isBareAllowedPermission({
          defaultPrompt: umbra11,
          pluginDisplayName: Wave1(timber11),
          pluginId: timber11.summary.id
        }),
        startInSidebar: true
      });
    };
  let glide10 = frost10,
    honey10 = async violet11 => {
      if (isAvailabilityDisabledByAdmin(violet11.summary)) return false;
      if (!violet11.summary.installed) return olive10 || drift10(violet11), false;
      if (!violet11.summary.enabled) try {
        await eagle10(violet11);
      } catch {
        return false;
      }
      return true;
    };
  let iris10 = honey10,
    jewel10 = (willow11, xenon11, yellow11) => {
      yellow11 != null && buildPluginInstallQuery(lemon9, {
        plugin: willow11.summary,
        position: yellow11,
        ...xenon9,
        target: CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_STARTER_PROMPT
      });
      (async () => {
        (await iris10(willow11)) && glide10(willow11, xenon11);
      })();
    },
    knoll10 = async (zinc11, amber11) => {
      await meadow9.mutateAsync({
        key: zinc11,
        enabled: amber11
      });
    };
  let lunar10 = knoll10,
    moss10 = wave9 && !birch9 && harbor10 == null,
    north10 = _i === "ready" && plugin != null ? AppInitialDw({
      hasLoadedSharePrincipals: or != null,
      canSharePlugin: birch9,
      isInstalled: plugin.summary.installed,
      isShareDisabled: moss10,
      pluginShareUrl: harbor10
    }) : null;
  let orbit10 = north10,
    pine10 = null;
  if (plugin != null && orbit10?.standaloneActionKind === "share-button") {
    let basalt11 = nickel9.formatMessage({
      id: "plugins.detail.share",
      defaultMessage: "Share",
      description: "Button label for sharing a personal plugin"
    });
    let cedar11 = birch9 ? () => {
      pearl10(plugin);
    } : undefined;
    let daisy11 = <AppInitialQj aria-hidden={true} className="icon-xs" />;
    let ember11 = <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      disabled: moss10,
      size: "toolbar",
      uniform: true,
      "aria-label": basalt11,
      onClick: cedar11,
      children: daisy11
    }} />;
    let flint11;
    flint11 = <OptionalTooltip {...{
      tooltipContent: falcon10,
      children: ember11
    }} />;
    pine10 = flint11;
  } else if (orbit10?.standaloneActionKind === "copy-link") {
    let garnet11;
    garnet11 = <Ridge {...{
      onCopyLink: jade10
    }} />;
    pine10 = garnet11;
  }
  let quest10 = _i === "ready" && plugin != null ? <Storm {...{
      blockedReason: seed9,
      installPhase: lotus10,
      installProgressPercent: jasper10,
      isInstallBlockedLoading: rain9,
      isInstallLocked: status != null,
      isEnabled: plugin.summary.enabled,
      isInstalled: plugin.summary.installed,
      isInstalledByDefault: _pluginDetailPageP(plugin.summary),
      isUninstalling: mint10,
      isUpdatingEnabled: nova10,
      shareActions: null,
      onInstall: () => {
        jewel10(plugin, null);
      },
      onManage: () => {
        setSelectedHostId(ivory9);
        onyx9("/settings/plugins-settings", {
          state: {
            initialHostId: ivory9,
            initialSearchQuery: Wave1(plugin),
            initialTab: "plugins",
            returnToPreviousHistoryEntry: true
          }
        });
      },
      onShare: orbit10?.showShareMenuItem ? () => {
        pearl10(plugin);
      } : undefined,
      onEnable: () => {
        eagle10(plugin);
      },
      onTryInChat: () => {
        buildPluginInstallQuery(lemon9, {
          plugin: plugin.summary,
          ...xenon9,
          target: CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_TRY_IN_TASK
        });
        jewel10(plugin, firstNonEmptyTrimmedString(plugin.summary.interface?.defaultPrompt));
      },
      onUninstall: () => {
        uninstallPlugin({
          marketplaceAnalytics: {
            plugin: plugin.summary,
            ...xenon9
          },
          marketplaceName: plugin.marketplaceName,
          pluginDisplayName: Wave1(plugin),
          pluginId: plugin.summary.id,
          pluginName: plugin.summary.name,
          requestPluginId: AppInitialEK(AppInitialGK(plugin))
        });
      }
    }} /> : null,
    ridge10 = parentPage === "manage" ? fern1.manageRoot : fern1.pluginsRoot,
    storm10 = <MemoizedFormattedMessage {...{
      ...ridge10
    }} />;
  let tide10 = [{
    id: "plugins",
    label: storm10,
    onClick: coral10
  }];
  let unity10 = <ToolbarBreadcrumb {...{
    ancestors: tide10,
    current: xenon10
  }} />;
  let vale10 = pine10 == null ? null : <div className="flex items-center justify-end">{pine10}</div>;
  let $i = <div className="draggable grid w-full min-w-0 items-center gap-2 md:grid-cols-[1fr_auto] electron:h-toolbar extension:py-row-y">{unity10}{vale10}</div>;
  let wave10 = $i,
    apex10 = <ElectronOnly {...{
      extension: true,
      children: wave10
    }} />;
  return undefined as any;
}

