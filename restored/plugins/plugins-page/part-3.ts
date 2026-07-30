// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/15
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

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialDO: any = undefined;
const AppInitialFw: any = undefined;
const AppInitialLt: any = undefined;
const AppInitialMK: any = undefined;
const AppInitialNt: any = undefined;
const AppInitialQK: any = undefined;
const AppInitialUw: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialVw: any = undefined;
const AppInitialW: any = undefined;
const AppInitialYf: any = undefined;
const DeferredDX: any = undefined;
const NativeContextMenuSurface: any = undefined;
const PersonGlyph: any = undefined;
const _pluginDetailPageX: any = undefined;
const amber: any = undefined;
const coerceStringOrPassthrough: any = undefined;
const deferredUiIk: any = undefined;
const deferredUiXj: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const needsApps: any = undefined;
const pluginDetailPageA: any = undefined;
const pluginDetailPageE: any = undefined;
const pluginsPageU: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
const useComputerUseGate: any = undefined;
const violet: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;

var prism,
  quill,
  reef,
  sage,
  _s = esmInit(() => {
    prism = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quill = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialNt();
    ensureComposerEsm_AG_Init();
    ensureDropdownMenuInit();
    _pluginDetailPageX();
    useClearBrowserBrowsingDataMutation();
    ensurePinnedConversationsQueryInit();
    deferredUiIk();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    DeferredDX();
    ensureComposerEsm_RV_Init();
    PersonGlyph();
    deferredUiXj();
    pluginDetailPageE();
    ensureConversationPageEsm_Jj_Init();
    AppInitialLt();
    ensureHooksFocusIconInit();
    AppInitialDO();
    AppInitialVO();
    useGateEnabledWithAccountData();
    pluginsPageU();
    ensureSkillsPageHelpersInit();
    ensureComposerEsm_FH_Init();
    coerceStringOrPassthrough();
    CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
    StackedCardHeader();
    AppInitialQK();
    pluginDetailPageA();
    codexMicroHasEverBeenDetected();
    pluginDetailF();
    AppInitialYf();
    needsApps();
    AppInitialUw();
    ensureInstalledPluginsQueryInit();
    sage = identity({
      pageLoading: {
        id: "plugins.page.loading",
        defaultMessage: "Loading plugins…",
        description: "Loading title on the plugins page"
      },
      loadErrorTitle: {
        id: "plugins.page.loadError.title",
        defaultMessage: "Failed to load plugins",
        description: "Title shown when plugins could not be loaded"
      },
      enableToggleTooltip: {
        id: "plugins.card.enableToggleTooltip",
        defaultMessage: "Enable plugin",
        description: "Tooltip label for enabling a plugin"
      },
      disableToggleTooltip: {
        id: "plugins.card.disableToggleTooltip",
        defaultMessage: "Disable plugin",
        description: "Tooltip label for disabling a plugin"
      },
      toggleAria: {
        id: "plugins.card.toggleAria",
        defaultMessage: "Toggle plugin enabled state",
        description: "Accessible label for the plugin enablement toggle"
      },
      enabledStatus: {
        id: "plugins.card.enabledStatus",
        defaultMessage: "Plugin enabled",
        description: "Status label for an installed plugin that is enabled"
      },
      enableButton: {
        id: "plugins.card.enableButton",
        defaultMessage: "Enable",
        description: "Button label for enabling a disabled plugin from a plugin card"
      },
      disabledStatus: {
        id: "plugins.card.disabledStatus",
        defaultMessage: "Plugin disabled",
        description: "Status label for an installed plugin that is disabled"
      },
      installTooltip: {
        id: "plugins.card.installTooltip",
        defaultMessage: "Install plugin",
        description: "Tooltip label for installing a plugin"
      },
      installLoading: {
        id: "plugins.card.loading",
        defaultMessage: "Loading",
        description: "Plugin card action while plugin setup is loading"
      },
      installing: {
        id: "plugins.card.installing",
        defaultMessage: "Installing",
        description: "Plugin card action while installation is in progress"
      },
      uninstalling: {
        id: "plugins.card.uninstalling",
        defaultMessage: "Uninstalling",
        description: "Plugin card action while uninstall is in progress"
      },
      unavailableInCurrentContext: {
        id: "plugins.card.unavailableInCurrentContext",
        defaultMessage: "Unavailable in this context",
        description: "Status label for an installed plugin that cannot be used in the current context"
      },
      disabledByAdmin: {
        id: "plugins.card.disabledByAdmin",
        defaultMessage: "Disabled by admin",
        description: "Plugin card label when a plugin is disabled by an admin"
      },
      disabledInstallTooltip: {
        id: "plugins.card.disabledInstallTooltip",
        defaultMessage: "Access is turned off by your admin",
        description: "Tooltip shown for the admin-disabled plugin install treatment in the plugins grid."
      },
      shareMenuItem: {
        id: "plugins.card.shareMenuItem",
        defaultMessage: "Share",
        description: "Menu item label for sharing a locally editable plugin"
      },
      moreActions: {
        id: "plugins.card.moreActions",
        defaultMessage: "More actions",
        description: "Aria label for the more actions menu in an installed plugin card"
      },
      uninstallMenuItem: {
        id: "plugins.card.uninstallMenuItem",
        defaultMessage: "Uninstall",
        description: "Menu item label for uninstalling a plugin from a plugin card"
      },
      installedByAdminAction: {
        id: "plugins.installedByDefault.actionLabel",
        defaultMessage: "Installed by admin",
        description: "Disabled action label shown for a plugin installed by an admin"
      },
      sharedBy: {
        id: "plugins.card.sharedBy",
        defaultMessage: "Shared by {name}",
        description: "Footer label for the person who shared a plugin"
      }
    });
  });
function topaz(jadeitePrime) {
  let {
      forceReloadPlugins,
      hostId
    } = jadeitePrime,
    kernelPrime = CodexPluginActionType(appScopeAtom),
    leafPrime = useIntl();
  return async maplePrime => {
    let nimbusPrime = await indigo({
      forceReloadPlugins,
      onReloadError: ultra,
      params: maplePrime,
      sendAddMarketplace: opalPrime => canonicalizeWorkspacePathKey("add-marketplace", {
        hostId,
        ...opalPrime
      })
    });
    if (nimbusPrime.kind === "reload-failed") {
      kernelPrime.get(toastAtom).warning(leafPrime.formatMessage({
        id: "skills.appsPage.addMarketplace.refreshFailed",
        defaultMessage: "{marketplaceName} marketplace is configured, but failed to refresh the plugin list",
        description: "Toast shown after a marketplace add request succeeds but refreshing the plugin list fails"
      }, {
        marketplaceName: nimbusPrime.marketplaceName
      }));
      return;
    }
    kernelPrime.get(toastAtom).success(nimbusPrime.alreadyAdded ? leafPrime.formatMessage({
      id: "skills.appsPage.addMarketplace.alreadyAdded",
      defaultMessage: "{marketplaceName} is already added",
      description: "Toast shown after adding a marketplace that was already configured"
    }, {
      marketplaceName: nimbusPrime.marketplaceName
    }) : leafPrime.formatMessage({
      id: "skills.appsPage.addMarketplace.success",
      defaultMessage: "{marketplaceName} marketplace added",
      description: "Toast shown after successfully adding a plugin marketplace"
    }, {
      marketplaceName: nimbusPrime.marketplaceName
    }));
  };
}
function ultra(plumePrime) {
  appActionSidebarProjectRefSchema.error("Failed to refresh plugins after adding marketplace", {
    safe: {},
    sensitive: {
      error: plumePrime
    }
  });
}
var vapor,
  wheat = esmInit(() => {
    vapor = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    AppActionSelector();
    ensureComposerEsm_Ilt_Init();
    ensureAppScopeInit();
    posixPathBasename();
    jade();
  });
function yarn(quillowPrime) {
  let {
      hostId,
      tab
    } = quillowPrime,
    rootPrime = hostId === undefined ? LOCAL_HOST_ID : hostId,
    silkPrime = useIntl(),
    thornPrime = useHomeDirectory(rootPrime),
    {
      availablePlugins,
      featuredPluginIds
    } = matchesOptionalHostPluginIds(rootPrime),
    uplandPrime = NativeContextMenuSurface("1269116100"),
    vistaPrime = NativeContextMenuSurface("4218407052"),
    {
      value
    } = ensureSettingsGlyphNltInit("2817990312"),
    wispPrime = violet(value),
    {
      value: _value
    } = ensureSettingsGlyphNltInit("1349514884"),
    {
      hiddenPluginIds
    } = yellow(_value),
    yonderPrime = tab === "personal" && uplandPrime,
    zenithPrime = {
      enabled: yonderPrime,
      hostId: rootPrime,
      marketplaceKind: "shared-with-me"
    };
  let {
      data: anvilPrime
    } = AppInitialMK(zenithPrime),
    beaconPrime = tab === "workspace" && uplandPrime,
    cragPrime = {
      enabled: beaconPrime,
      hostId: rootPrime,
      marketplaceKind: "workspace-directory"
    };
  let {
      data
    } = AppInitialMK(cragPrime),
    domePrime = tab === "personal" && vistaPrime,
    eddyPrime = {
      enabled: domePrime,
      hostId: rootPrime,
      marketplaceKind: "created-by-me-remote"
    };
  let {
      data: _data
    } = AppInitialMK(eddyPrime),
    fjordPrime = tab === "personal" && uplandPrime,
    glenPrime = {
      enabled: fjordPrime,
      hostId: rootPrime
    };
  let {
      data: __data
    } = ManagePluginDetailPage(glenPrime),
    hearthPrime = SettingsCommandMenuSectionItem(availablePlugins, hiddenPluginIds),
    inletPrime = SettingsCommandMenuSectionItem(anvilPrime ?? [], hiddenPluginIds),
    jettyPrime = SettingsCommandMenuSectionItem(data ?? [], hiddenPluginIds),
    knobPrime = SettingsCommandMenuSectionItem(_data ?? [], hiddenPluginIds),
    ledgePrime = __data == null ? null : SettingsCommandMenuSectionItem(__data, hiddenPluginIds),
    mirePrime = AppInitialVw(hearthPrime),
    nookPrime = AppInitialVw(inletPrime).filter(acorn),
    oxbowPrime = AppInitialVw(jettyPrime),
    {
      marketplaceFilterValue,
      plugins
    } = AppInitialFw({
      availablePlugins: hearthPrime,
      createdByMeRemotePlugins: knobPrime,
      homeDirectory: thornPrime,
      pluginShares: ledgePrime,
      storefrontPlugins: mirePrime
    });
  switch (tab) {
    case "openai":
      return bloom(AppInitialW({
        categoryOrder: wispPrime.categoryIds,
        categorySections: wispPrime.sections,
        collapsedCategoryIds: wispPrime.collapsedCategoryIds,
        connectedPlugins: [],
        featuredPluginIds,
        plugins: mirePrime.filter(pluginShareStandaloneAction)
      }));
    case "workspace":
      return bloom(AppInitialW({
        connectedPlugins: [],
        plugins: oxbowPrime
      }));
    case "personal":
      {
        let pondPrime = mirePrime.filter(item => !pluginShareStandaloneAction(item) && (marketplaceFilterValue == null || useComputerUseGate(item) !== marketplaceFilterValue));
        return [{
          id: "plugins-created-by-you",
          title: silkPrime.formatMessage({
            id: "skills.appsPage.section.createdByYou",
            defaultMessage: "Created by you",
            description: "Heading for plugins created by the current user"
          }),
          plugins: setCodexMicroJoystickOnStore({
            plugins,
            query: ""
          })
        }, {
          id: "plugins-shared-with-you",
          title: silkPrime.formatMessage({
            id: "skills.appsPage.section.sharedWithYou",
            defaultMessage: "Shared with you",
            description: "Heading for plugins shared with the current user"
          }),
          plugins: setCodexMicroJoystickOnStore({
            plugins: nookPrime,
            query: ""
          })
        }, ...ensureCodexMicroJoystickGeometryInit(pondPrime).map(item => ({
          id: `plugins-marketplace-${encodeURIComponent(item.value)}`,
          title: item.subLabel == null ? item.label : `${item.label} · ${item.subLabel}`,
          plugins: setCodexMicroJoystickOnStore({
            marketplaceFilterValue: item.value,
            plugins: pondPrime,
            query: ""
          })
        }))].filter(zephyr);
      }
  }
}
function zephyr(quarryPrime) {
  let {
    plugins
  } = quarryPrime;
  return plugins.length > 0;
}
function acorn(rapidsPrime) {
  return rapidsPrime.remoteMarketplaceName === drift;
}
function bloom(spurPrime) {
  return spurPrime.map(({
    plugins,
    section,
    visibleItemLimit
  }) => ({
    id: section.id,
    title: section.title,
    plugins,
    visibleItemLimit
  }));
}
var coral,
  drift,
  eagle = esmInit(() => {
    coral = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureUseHomeDirectoryInit();
    ManagePluginDetailPage();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    xenon();
    amber();
    AppInitialUw();
    ensureInstalledPluginsQueryInit();
    drift = "workspace-shared-with-me-private";
  });
