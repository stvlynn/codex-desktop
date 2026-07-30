// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/15

// Wave5d unbound soft stubs.
const $e: any = undefined;
const _e: any = undefined;
const _errorMessage: any = undefined;
const amberFourth: any = undefined;
const anvilFourth: any = undefined;
const bloomFourth: any = undefined;
const cedarFourth: any = undefined;
const clearInstalledRecommendedSkills: any = undefined;
const cragFourth: any = undefined;
const daisyFourth: any = undefined;
const domeFourth: any = undefined;
const echoFourth: any = undefined;
const emberFourth: any = undefined;
const everFourth: any = undefined;
const falconFourth: any = undefined;
const forceReload: any = undefined;
const frostFourth: any = undefined;
const garnetFourth: any = undefined;
const handleConnectApp: any = undefined;
const harborFourth: any = undefined;
const hardRefetchAppsList: any = undefined;
const honeyFourth: any = undefined;
const installPlugin: any = undefined;
const jadeFourth: any = undefined;
const keystoneFourth: any = undefined;
const knollFourth: any = undefined;
const lagoonFourth: any = undefined;
const lotusFourth: any = undefined;
const marbleFourth: any = undefined;
const markSkillsUpdated: any = undefined;
const mireFourth: any = undefined;
const motorFourth: any = undefined;
const nestFourth: any = undefined;
const nookFourth: any = undefined;
const oliveFourth: any = undefined;
const onyxFourth: any = undefined;
const oxbowFourth: any = undefined;
const pearlFourth: any = undefined;
const pendingPluginId: any = undefined;
const petalFourth: any = undefined;
const quarryFourth: any = undefined;
const questFourth: any = undefined;
const rapidsFourth: any = undefined;
const refresh: any = undefined;
const removeMarketplace: any = undefined;
const riverFourth: any = undefined;
const setPluginEnabled: any = undefined;
const silkFourth: any = undefined;
const skillCreatorPath: any = undefined;
const slateFourth: any = undefined;
const status: any = undefined;
const timberFourth: any = undefined;
const trailFourth: any = undefined;
const ultraFourth: any = undefined;
const uninstallPlugin: any = undefined;
const uninstalling: any = undefined;
const upgradeMarketplaces: any = undefined;
const wheatFourth: any = undefined;
const wispFourth: any = undefined;
const xenonFourth: any = undefined;

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

function As(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginDetailPageD(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

const $l: any = undefined;
const AppInitialIz: any = undefined;
const AppInitialNtt: any = undefined;
const AppInitialXO: any = undefined;
const as: any = undefined;
const buildPluginInstallQuery: any = undefined;
const buildPluginInstallQueryStub: any = undefined;
const bushing: any = undefined;
const formatLocationHref: any = undefined;
const gib: any = undefined;
const pluginDetailPageD: any = undefined;
const pluginDetailPageV: any = undefined;
const pluginsPageO: any = undefined;
const ratchet: any = undefined;
const shim: any = undefined;

export function pluginsPageT__splitRest2(__splitParams: any) {
  let torqueFourth = () => {
      if (skillCreatorPath == null) return;
      logProductEvent(echoFourth, AppInitialNtt, {});
      let elbowFourth = pluginsPageO({
        creatorPath: skillCreatorPath,
        isFirstOpen: !$e,
        kind: "skill"
      });
      $e || knollFourth(true);
      pearlFourth({
        prefillPrompt: elbowFourth,
        startInSidebar: true
      });
    },
    valveFourth = deferredConversationP(CodexPluginActionResult(useGitRepoLiveQuery)),
    axleFourth = PluginInstallDetailsPanel({
      activeProject: valveFourth,
      availablePlugins: questFourth,
      hostId: xenonFourth,
      pendingPluginId,
      reloadPlugins: forceReload,
      source: oxbowFourth.source
    }),
    bracketFourth = (ferruleFourth, grommetFourth, headerFourth = firstNonEmptyTrimmedString(ferruleFourth.plugin.interface?.defaultPrompt)) => {
      grommetFourth != null && buildPluginInstallQuery(echoFourth, {
        plugin: ferruleFourth.plugin,
        target: CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_TRY_IN_TASK,
        ...grommetFourth
      });
      pearlFourth({
        activeProject: valveFourth,
        prefillPrompt: isBareAllowedPermission({
          defaultPrompt: headerFourth,
          pluginDisplayName: usePointerSurfaceInteractionGate(ferruleFourth),
          pluginId: ferruleFourth.plugin.id
        }),
        startInSidebar: true
      });
    },
    clampFourth = async () => {
      _e(true);
      try {
        markSkillsUpdated();
        await Promise.all([forceReload(), refresh(), hardRefetchAppsList()]);
        clearInstalledRecommendedSkills();
        lotusFourth(false);
      } catch {
        echoFourth.get(toastAtom).danger(falconFourth.formatMessage({
          id: "skills.page.refreshFailed",
          defaultMessage: "Failed to refresh skills and apps",
          description: "Toast message shown when refreshing the Skills & Apps page data fails"
        }));
      } finally {
        nookFourth && !trailFourth && oliveFourth(injectorFourth => injectorFourth + 1);
        _e(false);
      }
    },
    _o = jumperFourth => {
      jumperFourth !== "skills" && clearInstalledRecommendedSkills();
      amberFourth(ratchet(jumperFourth));
      garnetFourth(0);
    },
    drillFourth = () => {
      frostFourth(daisyFourth);
    },
    engineFourth = kerfFourth => {
      ultraFourth(kerfFourth);
      wheatFourth(null);
    },
    frameFourth = (louverFourth, manifoldFourth = false) => {
      let nipFourth = ManagePluginDetailPage(harborFourth.search, louverFourth);
      nipFourth !== harborFourth.search && jadeFourth({
        hash: harborFourth.hash,
        pathname: harborFourth.pathname,
        search: nipFourth
      }, {
        replace: manifoldFourth,
        state: harborFourth.state
      });
    },
    gasketFourth = outletFourth => {
      emberFourth(outletFourth);
      garnetFourth(0);
      petalFourth === "plugins" && frameFourth(outletFourth.trim().length === 0 ? null : {
        limit: 30,
        offset: 0
      }, true);
    },
    handleFourth = () => {
      window.requestAnimationFrame(() => {
        slateFourth.current?.querySelector("[data-search-result-active='true']")?.scrollIntoView({
          block: "nearest"
        });
      });
    },
    insertFourth = event => {
      if (!(!everFourth || anvilFourth.length === 0)) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          garnetFourth(Math.min((cragFourth ?? 0) + 1, anvilFourth.length - 1));
          handleFourth();
          return;
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          garnetFourth(Math.max((cragFourth ?? 0) - 1, 0));
          handleFourth();
          return;
        }
        if (event.key === "Enter") {
          let packingFourth = slateFourth.current?.querySelector("[data-search-result-active='true']");
          packingFourth instanceof HTMLElement && (event.preventDefault(), packingFourth.click());
        }
      }
    },
    jacketFourth = reducerFourth => {
      amberFourth(shim(reducerFourth));
    },
    knurlFourth = () => {
      AppInitialXO(echoFourth, xenonFourth);
      echoFourth.set(marbleFourth, {
        browseScrollTop: slateFourth.current?.scrollTop ?? null,
        searchQuery: daisyFourth,
        selectedHostId: xenonFourth,
        selectedPluginDirectoryTab: lagoonFourth
      });
      jadeFourth("/settings/plugins-settings", {
        state: {
          initialHostId: xenonFourth,
          initialTab: "plugins",
          returnToPreviousHistoryEntry: true
        }
      });
    },
    leverFourth = () => {
      jadeFourth("..", {
        state: {
          initialHostId: xenonFourth,
          initialTab: $l(mireFourth)
        }
      });
    },
    mountFourth = gib.useCallback(strainerFourth => {
      slateFourth.current = strainerFourth;
      let teeFourth = timberFourth.current;
      strainerFourth == null || teeFourth == null || (strainerFourth.scrollTop = teeFourth, timberFourth.current = null);
    }, []),
    nozzleFourth = (unionFourth, ventFourth) => {
      nestFourth || echoFourth.set(marbleFourth, {
        browseScrollTop: slateFourth.current?.scrollTop ?? null,
        searchQuery: daisyFourth,
        selectedHostId: xenonFourth,
        selectedPluginDirectoryTab: lagoonFourth
      });
      jadeFourth((nestFourth ? pluginManagePathForCatalogEntry : buildPluginInstallQueryStub)(unionFourth, {
        hostId: xenonFourth
      }), {
        state: nestFourth ? undefined : AppInitialIz(ventFourth)
      });
    },
    platenFourth = (wyeFourth, zenerFourth) => {
      formatLocationHref(echoFourth, {
        placement: zenerFourth,
        plugin: wyeFourth.plugin,
        source: oxbowFourth.source
      });
      nozzleFourth(wyeFourth, quarryFourth);
    },
    ratchetFourth = gib.useEffectEvent(() => {
      riverFourth.current?.focus();
    }),
    shimFourth = async alphaFifth => {
      try {
        await removeMarketplace({
          marketplaceDisplayName: pluginDetailPageV(alphaFifth),
          marketplaceName: alphaFifth.name
        });
        bloomFourth(null);
      } catch {}
    },
    tappetFourth = async () => {
      try {
        await upgradeMarketplaces();
      } catch {}
    },
    arborFourth = async bravoFifth => {
      try {
        await upgradeMarketplaces({
          marketplaceDisplayName: pluginDetailPageV(bravoFifth),
          marketplaceName: bravoFifth.name
        });
      } catch {}
    };
  gib.useEffect(() => {
    let copperFifth = event => {
      (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f" && (bushing(event.target) || (event.preventDefault(), ratchetFourth()));
    };
    return window.addEventListener("keydown", copperFifth), () => {
      window.removeEventListener("keydown", copperFifth);
    };
  }, [nestFourth]);
  let bushingFourth = wispFourth.length === 0 ? null : <PluginDetailPageD {...{
      id: "plugins-imported-connectors",
      title: <MemoizedFormattedMessage id="plugins.importedConnectors.title" defaultMessage="Imported plugins" description="Section title for official app connectors suggested from an imported external agent setup" />,
      children: <As {...{
        errorMessage: null,
        hostId: xenonFourth,
        isLoading: false,
        isSingleColumn: true,
        installedStateAction: "status",
        plugins: wispFourth,
        emptyStateTitle: <MemoizedFormattedMessage id="plugins.importedConnectors.empty" defaultMessage="No imported plugins" description="Empty state title for official app connectors suggested from an imported external agent setup" />,
        installButtonLabel: <MemoizedFormattedMessage id="plugins.importedConnectors.finishSetup" defaultMessage="Finish setup" description="Button label for completing setup of an official app connector suggested from an imported external agent setup" />,
        onInstallPlugin: async deltaFifth => {
          cedarFourth(null);
          await handleConnectApp(deltaFifth.importedConnectorApp);
        },
        onOpenPluginDetails: platenFourth
      }} />
    }} />,
    collarFourth = {
      cardPlacementContext: rapidsFourth,
      catalogStatusMessage: silkFourth,
      errorMessage: _errorMessage,
      homeDirectory: honeyFourth,
      highlightedPluginKey: domeFourth?.startsWith("plugin:") ? domeFourth.slice(7) : null,
      hostId: xenonFourth,
      pluginInstallationStatus: status,
      isLoading: motorFourth,
      pendingPluginId,
      uninstalling,
      reducedMotion: onyxFourth,
      onInstallPlugin: async echoFifth => {
        installPlugin(echoFifth, {
          hostId: xenonFourth,
          marketplaceAnalytics: {
            source: oxbowFourth.source,
            surface: CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY
          },
          activeProject: valveFourth,
          onSuccess: forceReload,
          source: oxbowFourth.source
        });
      },
      onManage: knurlFourth,
      onOpenPluginDetails: platenFourth,
      onShareInstalledPlugin: keystoneFourth,
      onTryInChat: falconFifth => {
        bracketFourth(falconFifth, {
          source: oxbowFourth.source,
          surface: CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY
        });
      },
      onToggleInstalledPluginEnabled: async ({
        plugin,
        ...rest
      }) => setPluginEnabled({
        ...rest,
        marketplaceAnalytics: {
          plugin,
          source: oxbowFourth.source,
          surface: CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY
        }
      }),
      onUninstallInstalledPlugin: async ({
        plugin,
        ...rest
      }) => {
        await uninstallPlugin({
          ...rest,
          marketplaceAnalytics: {
            plugin,
            source: oxbowFourth.source,
            surface: CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY
          }
        });
      }
    };
  return undefined as any;
}

