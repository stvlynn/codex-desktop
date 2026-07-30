// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 12/15

// Wave5d unbound soft stubs.
const $r: any = undefined;
const ________isLoading: any = undefined;
const ______isLoading: any = undefined;
const _____data: any = undefined;
const _____isLoading: any = undefined;
const ____data: any = undefined;
const ____isLoading: any = undefined;
const ___isLoading: any = undefined;
const __isLoading: any = undefined;
const _errorMessage: any = undefined;
const _i: any = undefined;
const _isFetching: any = undefined;
const _isLoading: any = undefined;
const _mutateAsync: any = undefined;
const _r: any = undefined;
const authMethod: any = undefined;
const azureFourth: any = undefined;
const be: any = undefined;
const canyonFourth: any = undefined;
const clearInstalledRecommendedSkills: any = undefined;
const dewFourth: any = undefined;
const echoFourth: any = undefined;
const elmFourth: any = undefined;
const errorMessage: any = undefined;
const everFourth: any = undefined;
const falconFourth: any = undefined;
const flintFourth: any = undefined;
const forceReload: any = undefined;
const hardRefetchAppsList: any = undefined;
const honeyFourth: any = undefined;
const hostId: any = undefined;
const indigoFourth: any = undefined;
const inkFourth: any = undefined;
const irisFourth: any = undefined;
const isFetching: any = undefined;
const isHardRefetchingAppsList: any = undefined;
const isLoading: any = undefined;
const jadeiteFourth: any = undefined;
const jasperFourth: any = undefined;
const jewelFourth: any = undefined;
const kernelFourth: any = undefined;
const lagoonFourth: any = undefined;
const leafFourth: any = undefined;
const lunarFourth: any = undefined;
const marketplaces: any = undefined;
const meadowFourth: any = undefined;
const mintFourth: any = undefined;
const mossFourth: any = undefined;
const mutateAsync: any = undefined;
const nestFourth: any = undefined;
const nimbusFourth: any = undefined;
const northFourth: any = undefined;
const novaFourth: any = undefined;
const oakFourth: any = undefined;
const opalFourth: any = undefined;
const orbitFourth: any = undefined;
const pearlFourth: any = undefined;
const petalFourth: any = undefined;
const pineFourth: any = undefined;
const plugins: any = undefined;
const questFourth: any = undefined;
const rainFourth: any = undefined;
const refetch: any = undefined;
const ridgeFourth: any = undefined;
const rootFourth: any = undefined;
const seedFourth: any = undefined;
const stormFourth: any = undefined;
const tideFourth: any = undefined;
const trailFourth: any = undefined;
const umbraFourth: any = undefined;
const willowFourth: any = undefined;
const xenonFourth: any = undefined;
const yarnFourth: any = undefined;
const yellowFourth: any = undefined;

/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { deferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { setCodexMicroHudOpen, setCodexMicroJoystickOnStore } from "../../desktop/codex-micro-input-state";
import { ensureCodexMicroJoystickGeometryInit } from "../../desktop/codex-micro-joystick-geometry";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_MCP_URL } from "../../docs/codex-doc-urls";
import { fileExtensionFromPath } from "../../files/file-extension-from-path";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory, useHomeDirectoryQuery } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { ensureUseMediaQueryInit, useMediaQuery } from "../../hooks/use-media-query";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { useBatchWriteMcpServerConfig } from "../../mcp/use-batch-write-mcp-server-config";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { resolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsCommandMenuSectionItem } from "../../settings/settings-command-menu-section-item";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { ConnectorLogoStack, ensureConnectorLogoStackInit } from "../../ui/connector-logo-stack";
import { ControlGroup, ensureControlGroupInit } from "../../ui/control-group";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiZG } from "../../ui/deferred-ui-zg";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensureAppMainI9Init, ensurePersonalizationCInit, ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { produce } from "../../vendor/immer";
import { ensureZodRuntime } from "../../vendor/zod";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { CodexPluginDirectoryEntrypoint } from "../codex-plugin-directory-entrypoint";
import { ensureGoogleDriveConnectorIconsInit } from "../ensure-google-drive-connector-icons-init";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isUnavailableKnownConnector } from "../is-unavailable-known-connector";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { normalizeConnectorCatalogId } from "../normalize-connector-catalog-id";
import { parsePluginProductEventContext } from "../parse-plugin-product-event-context";
import { ensurePluginDetailPageInit, ManagePluginDetailPage, pluginDetailF, pluginDetailG, pluginDetailH, pluginDetailI, pluginDetailL, pluginDetailM, pluginDetailP } from "../plugin-detail-page";
import { PluginInstallDetailsPanel } from "../plugin-install-details-panel";
import { pluginInstallIdentityKey } from "../plugin-install-identity-key";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery } from "../plugin-marketplace-route";
import { pluginShareStandaloneAction } from "../plugin-share-standalone-action";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { SCHEDULED_TASKS_PLUGIN_ID } from "../scheduled-tasks-plugin-id";
import { shouldReturnToBrowseHistoryFromLocationState } from "../should-return-to-browse-history-from-location-state";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginCategoryPageTelemetry } from "../use-plugin-category-page-telemetry";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";

function Knurl(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

const AppInitialGp: any = undefined;
const AppInitialNtt: any = undefined;
const AppInitialOw: any = undefined;
const AppInitialP: any = undefined;
const AppInitialSK: any = undefined;
const DeferredUiLw: any = undefined;
const Plugins: any = undefined;
const _pluginDetailPageJ: any = undefined;
const _pluginDetailPageO: any = undefined;
const _pluginDetailPageQ: any = undefined;
const _pluginDetailPageS: any = undefined;
const _pluginDetailPageU: any = undefined;
const chatProcessRegister: any = undefined;
const chatProcessRegisterStub: any = undefined;
const gib: any = undefined;
const hub: any = undefined;
const idler: any = undefined;
const knurl: any = undefined;
const pluginDetailPageJ: any = undefined;
const pluginDetailPageK: any = undefined;
const pluginDetailPageX: any = undefined;
const pluginDetailPageY: any = undefined;
const pluginDetailPageZ: any = undefined;
const pluginsPageO: any = undefined;
const writeClipboardContents: any = undefined;

export function pluginsPageT__splitRest1(__splitParams: any) {
  let silkFourth = meadowFourth && petalFourth === "plugins" && !everFourth && opalFourth == null && lagoonFourth === "openai" ? <MemoizedFormattedMessage id="skills.appsPage.pluginsLimitedCatalog" defaultMessage="More plugins coming soon" description="Short status message shown when curated OpenAI plugins are hidden for the current auth method" /> : null,
    thornFourth = rootFourth.filter(({
      section
    }) => section.id !== "plugins-connected").map(({
      section
    }) => ({
      id: section.id,
      title: section.title
    })),
    uplandFourth = opalFourth == null ? undefined : thornFourth.find(item => item.id === opalFourth),
    vistaFourth = uplandFourth?.id ?? null,
    wispFourth = AppInitialP({
      apps: AppInitialGp({
        apps: _____data ?? [],
        connectors: rainFourth ? seedFourth.data?.connectors ?? [] : []
      }),
      plugins: leafFourth
    }).map(({
      app,
      plugin
    }) => ({
      ...plugin,
      importedConnectorApp: app
    })),
    yonderFourth = (vistaFourth == null ? rootFourth : rootFourth.filter(({
      section
    }) => section.id === "plugins-connected" || section.id === vistaFourth)).flatMap(({
      plugins: _plugins
    }) => _plugins),
    zenithFourth = nimbusFourth ? yonderFourth.slice(0, $r.offset + $r.limit) : yonderFourth,
    anvilFourth = everFourth ? pluginDetailPageJ({
      pluginResultKeys: zenithFourth.map(item => `plugin:${AppInitialSK(item)}`),
      skillResultKeys: [...jadeiteFourth.map(({
        skill
      }) => `installed-skill:${skill.path}`), ...inkFourth.map(item => `recommended-skill:${item.id}`)],
      tab: petalFourth ?? "plugins"
    }) : [],
    beaconFourth = anvilFourth.length,
    cragFourth = anvilFourth.length === 0 ? null : Math.min(flintFourth, anvilFourth.length - 1),
    domeFourth = cragFourth == null ? null : anvilFourth[cragFourth] ?? null,
    eddyFourth = setCodexMicroJoystickOnStore({
      plugins: kernelFourth,
      query: dewFourth
    }),
    fjordFourth = new Set([...questFourth, ...plugins, ...(tideFourth ?? []), ...(ridgeFourth ?? []), ...(stormFourth ?? [])].map(item => item.plugin.id)),
    glenFourth = new Set(kernelFourth.filter(item => !fjordFourth.has(item.plugin.id)).map(item => item.plugin.id)),
    hearthFourth = pluginDetailPageX({
      skills: mossFourth,
      query: dewFourth
    }),
    {
      installedApps
    } = pluginDetailPageK(_____data ?? []),
    inletFourth = pluginDetailPageY({
      apps: installedApps,
      query: dewFourth
    }),
    jettyFourth = pluginDetailPageZ({
      configuredMarketplaceNames: _r,
      marketplaces,
      query: ""
    }),
    knobFourth = {
      apps: installedApps.length,
      marketplace: jettyFourth.length,
      mcps: Object.keys(____data?.servers ?? {}).length,
      plugins: kernelFourth.length,
      skills: mossFourth.length
    },
    ledgeFourth = nestFourth && (______isLoading || orbitFourth && (________isLoading || ____isLoading || _____isLoading)),
    mireFourth = _pluginDetailPageQ({
      currentTab: oakFourth,
      isCurrentTabLoading: oakFourth === "plugins" && (___isLoading || orbitFourth && isLoading || ledgeFourth),
      isManagePage: nestFourth,
      isPluginsEnabled: yellowFourth,
      tabCounts: knobFourth
    }),
    nookFourth = nestFourth ? mireFourth === "plugins" : petalFourth === "plugins",
    oxbowFourth = shouldReturnToBrowseHistoryFromLocationState({
      categoryKey: vistaFourth,
      directoryTab: lagoonFourth,
      isGlobalSearch: nimbusFourth,
      searchQuery: canyonFourth
    }),
    pondFourth = Plugins({
      canonicalCategoryIds: northFourth.categoryIds,
      directoryTab: lagoonFourth,
      selectedCategoryTitle: uplandFourth?.title
    }),
    quarryFourth = {
      referrer: chatProcessRegister(oxbowFourth.pageName),
      source: oxbowFourth.source
    },
    rapidsFourth;
  lagoonFourth === "openai" && !nimbusFourth && (oxbowFourth.pageName === CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY ? rapidsFourth = {
    kind: "home"
  } : oxbowFourth.pageName === CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY && pondFourth != null && (rapidsFourth = {
    categoryId: pondFourth,
    kind: "category"
  }));
  usePluginCategoryPageTelemetry({
    scope: echoFourth,
    categoryId: pondFourth,
    enabled: !nestFourth && nookFourth && yellowFourth,
    entrypoint: indigoFourth,
    pageName: oxbowFourth.pageName,
    searchQuery: canyonFourth,
    source: oxbowFourth.source
  });
  let spurFourth = ManagePluginDetailPage(falconFourth, mireFourth),
    torFourth = pluginDetailPageZ({
      configuredMarketplaceNames: _r,
      marketplaces: jettyFourth,
      query: dewFourth
    }),
    updraftFourth = !nestFourth && petalFourth === "skills" && jasperFourth,
    vergeFourth = updraftFourth || _isLoading || _i.length > 0 || jadeiteFourth.length > 0,
    weirFourth = updraftFourth || __isLoading || errorMessage != null || inkFourth.length > 0,
    yardFourth = azureFourth.sections.at(-1) ?? null,
    anchorFourth = [..._i.map(item => ({
      id: item.id,
      title: item.title
    })), ...(weirFourth && yardFourth != null ? [yardFourth] : [])],
    boltFourth = anchorFourth.some(item => item.id === yarnFourth) ? yarnFourth : anchorFourth[0]?.id ?? null,
    cogFourth = gib.useEffectEvent(async () => {
      let {
        availablePlugins: _availablePlugins
      } = await refetch();
      return meadowFourth || DeferredUiLw(_availablePlugins);
    }),
    discFourth = (petalFourth === "skills" || everFourth) && vergeFourth ? azureFourth.sections[0] ?? null : null,
    edgeFourth = (petalFourth === "skills" || everFourth) && weirFourth ? azureFourth.sections.at(-1) ?? null : null,
    forgeFourth = async () => {
      try {
        await hardRefetchAppsList();
      } catch {}
    },
    gearFourth = jigFourth => _pluginDetailPageJ(jigFourth.plugin.id),
    hingeFourth = keeperFourth => {
      echoFourth.get(toastAtom).danger(falconFourth.formatMessage({
        id: "plugins.manage.copyShareLinkError",
        defaultMessage: "Couldn't copy share link",
        description: "Error shown when copying a plugin share link fails"
      }), keeperFourth == null ? undefined : {
        description: AVATAR_OVERLAY_SURFACE_STACK_IDS(keeperFourth)
      });
    },
    ironFourth = async lugFourth => {
      let mandrelFourth = AppInitialOw(honeyFourth, lugFourth.marketplacePath, lugFourth.plugin.source);
      try {
        let nippleFourth = await ManagePluginDetailPage({
            hostId: xenonFourth,
            ...pluginMarketplaceRequestFields(lugFourth)
          }).catch(() => null),
          orificeFourth = nippleFourth?.shareContext ?? lugFourth.plugin.shareContext,
          pinFourth = _pluginDetailPageS({
            pluginShareUrl: nippleFourth?.pluginShareUrl ?? null,
            shareContext: orificeFourth,
            savedShareUrl: null,
            configuredShareUrl: gearFourth(lugFourth)
          });
        if (pinFourth == null && orbitFourth && mandrelFourth != null && (pinFourth = (await pluginDetailL({
          pluginPath: mandrelFourth,
          remotePluginId: orificeFourth?.remotePluginId ?? null,
          savePluginShare: mutateAsync
        })).shareUrl, forceReload()), pinFourth != null && pinFourth.length > 0) {
          await writeClipboardContents(pinFourth);
          return;
        }
      } catch (raceFourth) {
        hingeFourth(raceFourth);
        return;
      }
      hingeFourth();
    },
    jointFourth = async sleeveFourth => {
      let trunnionFourth = AppInitialOw(honeyFourth, sleeveFourth.marketplacePath, sleeveFourth.plugin.source);
      if (trunnionFourth == null) return;
      let bossFourth = await ManagePluginDetailPage({
          hostId: xenonFourth,
          ...pluginMarketplaceRequestFields(sleeveFourth)
        }).catch(() => null),
        camFourth = sleeveFourth.plugin.shareContext,
        detentFourth = camFourth != null && camFourth.sharePrincipals != null && camFourth.remoteVersion != null ? camFourth : bossFourth?.shareContext ?? camFourth;
      if (detentFourth?.remotePluginId != null && detentFourth.sharePrincipals == null) {
        echoFourth.get(toastAtom).danger(falconFourth.formatMessage({
          id: "plugins.manage.loadSharingError",
          defaultMessage: "Couldn't load plugin sharing",
          description: "Error shown when plugin sharing settings cannot load"
        }));
        return;
      }
      let eccentricFourth = _pluginDetailPageO({
        initialShare: detentFourth == null ? null : {
          remotePluginId: detentFourth.remotePluginId,
          sharePrincipals: ManagePluginDetailPage(detentFourth),
          shareUrl: _pluginDetailPageS({
            pluginShareUrl: bossFourth?.pluginShareUrl ?? null,
            shareContext: bossFourth?.shareContext ?? detentFourth,
            savedShareUrl: null,
            configuredShareUrl: gearFourth(sleeveFourth)
          })
        },
        saveShare: followerFourth => pluginDetailL({
          pluginPath: trunnionFourth,
          remotePluginId: followerFourth,
          savePluginShare: mutateAsync
        })
      });
      chatProcessRegisterStub(echoFourth, _pluginDetailPageU, {
        initialSharePrincipals: eccentricFourth.getCurrentShare()?.sharePrincipals ?? [],
        pluginDisplayName: usePointerSurfaceInteractionGate(sleeveFourth),
        shouldShowCopyLinkCreationProgress: () => eccentricFourth.getCurrentShare()?.shareUrl == null,
        onCopyLink: async () => {
          try {
            let guideFourth = eccentricFourth.getCurrentShare()?.shareUrl != null,
              helixFourth = await eccentricFourth.getOrCreateShare();
            return guideFourth || forceReload(), helixFourth.shareUrl.length === 0 ? (hingeFourth(), false) : await writeClipboardContents(helixFourth.shareUrl);
          } catch (impellerFourth) {
            return hingeFourth(impellerFourth), false;
          }
        },
        onSaveShareTargets: async journalFourth => {
          try {
            let kingpinFourth = await eccentricFourth.saveShareTargets(journalFourth, (landFourth, meshFourth) => _mutateAsync({
              remotePluginId: landFourth,
              targets: meshFourth
            }));
            return forceReload(), kingpinFourth;
          } catch (neckFourth) {
            throw echoFourth.get(toastAtom).danger(falconFourth.formatMessage({
              id: "plugins.manage.updateSharingError",
              defaultMessage: "Couldn't update plugin sharing",
              description: "Error shown when updating plugin sharing fails"
            }), {
              description: AVATAR_OVERLAY_SURFACE_STACK_IDS(neckFourth)
            }), neckFourth;
          }
        },
        onUpdateSharedVersion: async () => {
          if (detentFourth?.remotePluginId != null) try {
            await mutateAsync({
              pluginPath: trunnionFourth,
              remotePluginId: detentFourth.remotePluginId
            });
            forceReload();
            echoFourth.get(toastAtom).success(falconFourth.formatMessage({
              id: "plugins.manage.updateSharedVersionSuccess",
              defaultMessage: "Shared version updated",
              description: "Success message shown after uploading a newer local plugin version to an existing plugin share"
            }));
          } catch (padFourth) {
            throw echoFourth.get(toastAtom).danger(falconFourth.formatMessage({
              id: "plugins.manage.updateSharedVersionError",
              defaultMessage: "Couldn't update shared version",
              description: "Error shown when uploading a newer local plugin version to an existing plugin share fails"
            }), {
              description: AVATAR_OVERLAY_SURFACE_STACK_IDS(padFourth)
            }), padFourth;
          }
        },
        shouldShowUpdateSharedVersion: pluginDetailI({
          localVersion: sleeveFourth.plugin.localVersion,
          shareContext: detentFourth
        })
      });
    },
    keystoneFourth = orbitFourth ? quillshaftFourth => {
      jointFourth(quillshaftFourth);
    } : undefined,
    latchFourth = nookFourth && _errorMessage == null && !___isLoading && !trailFourth,
    motorFourth = ___isLoading || orbitFourth && isLoading || mireFourth === "plugins" && ledgeFourth || be === "loading" || (everFourth ? ______isLoading || ____isLoading || _____isLoading : petalFourth === "plugins" && (lagoonFourth === "workspace" && _____isLoading || lagoonFourth === "personal" && (______isLoading || ____isLoading))),
    nutFourth = authMethod === "chatgpt" && pineFourth,
    pistonFourth = jasperFourth || elmFourth || isHardRefetchingAppsList || _isLoading || isFetching || ___isLoading || _isFetching,
    rivetFourth = hostId == null && umbraFourth.length > 0 ? <Knurl {...{
      connectedRemoteConnections: umbraFourth,
      selectedHostId: xenonFourth,
      onSelectHost: rollerFourth => {
        clearInstalledRecommendedSkills();
        willowFourth(rollerFourth);
      }
    }} /> : null,
    screwFourth = () => {
      if (lunarFourth == null) return;
      logProductEvent(echoFourth, AppInitialNtt, {});
      let spindleFourth = pluginsPageO({
        creatorPath: lunarFourth,
        isFirstOpen: !irisFourth,
        kind: "plugin"
      });
      irisFourth || jewelFourth(true);
      pearlFourth({
        prefillPrompt: spindleFourth,
        startInSidebar: true
      });
    };
  gib.useEffect(() => {
    if (!latchFourth) {
      mintFourth("idle");
      return;
    }
    let thrustFourth = false,
      yokeFourth = null,
      baffleFourth = Date.now() + idler;
    mintFourth("loading");
    let capstanFourth = async () => {
      let diaphragmFourth = await cogFourth().catch(() => false);
      if (!thrustFourth) {
        if (diaphragmFourth || Date.now() >= baffleFourth) {
          mintFourth("idle");
          return;
        }
        yokeFourth = setTimeout(() => {
          capstanFourth();
        }, hub);
      }
    };
    return capstanFourth(), () => {
      thrustFourth = true;
      yokeFourth != null && clearTimeout(yokeFourth);
    };
  }, [novaFourth, latchFourth]);
  return undefined as any;
}

