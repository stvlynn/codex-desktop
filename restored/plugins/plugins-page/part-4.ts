// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/15
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
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


// Wave5d soft JSX companions.
function Pine(props: {
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

// Wave5d soft stubs.
const AppInitialFw: any = undefined;
const AppInitialMK: any = undefined;
const AppInitialUw: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialVw: any = undefined;
const AppInitialW: any = undefined;
const DeferredBw: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const amber: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const useComputerUseGate: any = undefined;
const violet: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;

function frost(torPrime) {
  let {
      category,
      hostId,
      initialOffset,
      limit,
      searchTerm
    } = torPrime,
    updraftPrime = useIntl(),
    vergePrime = searchTerm.trim().toLowerCase(),
    [weirPrime, yardPrime] = lunar.useState({
      category,
      hostId,
      initialOffset,
      limit,
      loadedOffset: initialOffset,
      query: vergePrime
    }),
    anchorPrime = weirPrime.category === category && weirPrime.hostId === hostId && weirPrime.limit === limit && weirPrime.query === vergePrime,
    boltPrime = weirPrime;
  if (!anchorPrime) {
    boltPrime = {
      category,
      hostId,
      initialOffset,
      limit,
      loadedOffset: initialOffset,
      query: vergePrime
    };
    yardPrime(boltPrime);
  } else if (weirPrime.initialOffset !== initialOffset) {
    let nozzlePrime = initialOffset === weirPrime.loadedOffset ? weirPrime.loadedOffset : initialOffset,
      platenPrime;
    platenPrime = {
      ...weirPrime,
      initialOffset,
      loadedOffset: nozzlePrime
    };
    boltPrime = platenPrime;
    yardPrime(boltPrime);
  }
  let {
      loadedOffset
    } = boltPrime,
    {
      data,
      isLoading
    } = reuseArrayIfShallowEqual(),
    {
      data: _data,
      error: cogPrime,
      isLoading: _isLoading
    } = useHomeDirectoryQuery(hostId),
    {
      availablePlugins,
      errorMessage,
      featuredPluginIds,
      isLoading: __isLoading
    } = matchesOptionalHostPluginIds(hostId),
    discPrime = NativeContextMenuSurface("1269116100"),
    edgePrime = NativeContextMenuSurface("4218407052"),
    {
      value
    } = ensureSettingsGlyphNltInit("2817990312"),
    forgePrime = violet(value),
    {
      value: _value
    } = ensureSettingsGlyphNltInit("1349514884"),
    {
      hiddenPluginIds
    } = yellow(_value),
    gearPrime = data?.structure === "workspace",
    hingePrime = {
      enabled: discPrime,
      hostId,
      marketplaceKind: "shared-with-me"
    };
  let {
      data: __data,
      error,
      isLoading: ___isLoading
    } = AppInitialMK(hingePrime),
    ironPrime = discPrime && gearPrime,
    jointPrime = {
      enabled: ironPrime,
      hostId,
      marketplaceKind: "workspace-directory"
    };
  let {
      data: ___data,
      error: _error,
      isLoading: ____isLoading
    } = AppInitialMK(jointPrime),
    keystonePrime = {
      enabled: edgePrime,
      hostId,
      marketplaceKind: "created-by-me-remote"
    };
  let {
      data: ____data,
      error: __error,
      isLoading: _____isLoading
    } = AppInitialMK(keystonePrime),
    latchPrime = {
      enabled: discPrime,
      hostId
    };
  let {
      data: _____data,
      error: ___error,
      isLoading: ______isLoading
    } = ManagePluginDetailPage(latchPrime),
    motorPrime = SettingsCommandMenuSectionItem(availablePlugins, hiddenPluginIds),
    nutPrime = SettingsCommandMenuSectionItem(discPrime ? __data ?? [] : [], hiddenPluginIds),
    pistonPrime = SettingsCommandMenuSectionItem(discPrime && gearPrime ? ___data ?? [] : [], hiddenPluginIds),
    rivetPrime = SettingsCommandMenuSectionItem(edgePrime ? ____data ?? [] : [], hiddenPluginIds),
    screwPrime = !discPrime || _____data == null ? null : SettingsCommandMenuSectionItem(_____data, hiddenPluginIds),
    torquePrime = AppInitialVw(motorPrime),
    valvePrime = AppInitialVw(nutPrime).filter(honey),
    axlePrime = AppInitialVw(pistonPrime),
    bracketPrime = (hostId === "local" && gearPrime ? data.name?.trim() : null) || ___data?.find(js)?.marketplaceDisplayName?.trim() || null,
    {
      marketplaceFilterValue,
      plugins
    } = AppInitialFw({
      availablePlugins: motorPrime,
      createdByMeRemotePlugins: rivetPrime,
      homeDirectory: _data?.homeDirectory,
      pluginShares: screwPrime,
      storefrontPlugins: torquePrime
    }),
    _e = torquePrime.filter(pluginShareStandaloneAction),
    clampPrime = torquePrime.filter(item => !pluginShareStandaloneAction(item) && (marketplaceFilterValue == null || useComputerUseGate(item) !== marketplaceFilterValue)),
    drillPrime = [{
      section: {
        id: "plugins-created-by-you",
        title: updraftPrime.formatMessage({
          id: "skills.appsPage.section.createdByYou",
          defaultMessage: "Created by you",
          description: "Heading for plugins created by the current user"
        })
      },
      plugins: setCodexMicroJoystickOnStore({
        plugins,
        query: vergePrime
      })
    }, {
      section: {
        id: "plugins-shared-with-you",
        title: updraftPrime.formatMessage({
          id: "skills.appsPage.section.sharedWithYou",
          defaultMessage: "Shared with you",
          description: "Heading for plugins shared with the current user"
        })
      },
      plugins: setCodexMicroJoystickOnStore({
        plugins: valvePrime,
        query: vergePrime
      })
    }, ...ensureCodexMicroJoystickGeometryInit(clampPrime).map(item => ({
      section: {
        id: `plugins-marketplace-${encodeURIComponent(item.value)}`,
        title: item.subLabel == null ? item.label : `${item.label} · ${item.subLabel}`
      },
      plugins: setCodexMicroJoystickOnStore({
        marketplaceFilterValue: item.value,
        plugins: clampPrime,
        query: vergePrime
      })
    }))].filter(glide),
    be = AppInitialW({
      categoryOrder: forgePrime.categoryIds,
      categorySections: forgePrime.sections,
      collapsedCategoryIds: forgePrime.collapsedCategoryIds,
      connectedPlugins: [],
      featuredPluginIds,
      plugins: _e
    }),
    enginePrime = AppInitialW({
      connectedPlugins: [],
      plugins: axlePrime
    }),
    framePrime = category.length === 0 ? [{
      section: {
        id: "plugins-search-openai",
        title: updraftPrime.formatMessage({
          id: "skills.appsPage.directoryTabs.public",
          defaultMessage: "Public",
          description: "Label for public plugins in the plugin directory"
        })
      },
      plugins: _e
    }, ...(gearPrime ? [{
      section: {
        id: "plugins-search-workspace",
        title: bracketPrime ?? updraftPrime.formatMessage({
          id: "skills.appsPage.directoryTabs.workspace",
          defaultMessage: "Workspace",
          description: "Fallback label for workspace plugins when the workspace name is unavailable"
        })
      },
      plugins: axlePrime
    }] : []), ...drillPrime] : [...jewel("openai", be, category), ...(gearPrime ? jewel("workspace", enginePrime, category) : []), ...jewel("personal", drillPrime, category)],
    gasketPrime = isLoading || _isLoading || __isLoading || discPrime && (___isLoading || ______isLoading || gearPrime && ____isLoading) || edgePrime && _____isLoading,
    handlePrime = gasketPrime ? undefined : iris({
      limit: loadedOffset + limit,
      sections: DeferredBw({
        query: vergePrime,
        sections: framePrime
      })
    }),
    insertPrime = handlePrime?.hasNextPage ?? false,
    jacketPrime = () => {
      if (!insertPrime) return Promise.resolve(null);
      let ratchetPrime = loadedOffset + limit;
      return yardPrime({
        category,
        hostId,
        initialOffset,
        limit,
        loadedOffset: ratchetPrime,
        query: vergePrime
      }), Promise.resolve(ratchetPrime);
    };
  let knurlPrime = jacketPrime,
    leverPrime = handlePrime?.data,
    mountPrime = errorMessage ?? cogPrime?.message ?? (discPrime ? error?.message : undefined) ?? (discPrime ? ___error?.message : undefined) ?? (discPrime && gearPrime ? _error?.message : undefined) ?? (edgePrime ? __error?.message : undefined) ?? null;
  return {
    data: leverPrime,
    error: mountPrime,
    fetchNextPage: knurlPrime,
    hasNextPage: insertPrime,
    isFetchingNextPage: false,
    isLoading: gasketPrime,
    loadedOffset
  };
}
function glide(shimPrime) {
  let {
    plugins
  } = shimPrime;
  return plugins.length > 0;
}
function js(tappetPrime) {
  return !!tappetPrime.marketplaceDisplayName?.trim();
}
function honey(arborPrime) {
  return arborPrime.remoteMarketplaceName === moss;
}
function iris({
  limit,
  sections
}) {
  let bushingPrime = sections.flatMap(({
      plugins,
      section
    }) => plugins.map(item => ({
      plugin: item,
      section
    }))),
    collarPrime = bushingPrime.slice(0, limit);
  return {
    data: sections.flatMap(({
      section
    }) => {
      let dowelPrime = collarPrime.flatMap(item => item.section.id === section.id ? [item.plugin] : []);
      return dowelPrime.length === 0 ? [] : [{
        id: section.id,
        plugins: dowelPrime,
        title: section.title
      }];
    }),
    hasNextPage: bushingPrime.length > collarPrime.length
  };
}
function jewel(flangePrime, gibPrime, hubPrime) {
  return gibPrime.flatMap(item => item.section.id === hubPrime ? [{
    ...item,
    section: {
      ...item.section,
      id: `plugins-search-${flangePrime}-${hubPrime}`
    }
  }] : []);
}
var knoll,
  lunar,
  moss,
  north = esmInit(() => {
    knoll = reactCompilerRuntime();
    lunar = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    RealtimeVoiceHostIdStub();
    ensureUseHomeDirectoryInit();
    ManagePluginDetailPage();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    xenon();
    amber();
    AppInitialUw();
    ensureInstalledPluginsQueryInit();
    moss = "workspace-shared-with-me-private";
  });
function orbit(idlerPrime) {
  let jigPrime = idlerPrime.inputType === fileExtensionFromPath.String,
    keeperPrime = idlerPrime.inputType === fileExtensionFromPath.Array,
    lugPrime = idlerPrime.inputType === fileExtensionFromPath.Record,
    mandrelPrime = useIntl(),
    nipplePrime = mandrelPrime.formatMessage({
      id: "settings.editRow.headerPlaceholder",
      defaultMessage: "Key",
      description: "Placeholder for record key input"
    });
  let orificePrime = nipplePrime,
    pinPrime = mandrelPrime.formatMessage({
      id: "settings.editRow.valuePlaceholder",
      defaultMessage: "Value",
      description: "Placeholder for record value input"
    });
  let racePrime = pinPrime,
    sleevePrime = mandrelPrime.formatMessage({
      id: "settings.editRow.removeEntry",
      defaultMessage: "Remove entry",
      description: "Label for removing an entry from a list"
    });
  let trunnionPrime = sleevePrime,
    bossPrime,
    camPrime;
  if (bossPrime = orificePrime, camPrime = racePrime, idlerPrime.inputType === fileExtensionFromPath.Record) {
    let [quillshaftPrime] = idlerPrime.placeHolderValue;
    bossPrime = quillshaftPrime?.key ?? orificePrime;
    camPrime = quillshaftPrime?.value ?? racePrime;
  }
  let detentPrime;
  bb0: {
    if (!keeperPrime) {
      let spindlePrime;
      spindlePrime = [];
      detentPrime = spindlePrime;
      break bb0;
    }
    if (idlerPrime.value.length > 0) {
      detentPrime = idlerPrime.value;
      break bb0;
    }
    let rollerPrime;
    rollerPrime = [""];
    detentPrime = rollerPrime;
  }
  let eccentricPrime = detentPrime,
    followerPrime;
  bb1: {
    if (!lugPrime) {
      let yokePrime;
      yokePrime = [];
      followerPrime = yokePrime;
      break bb1;
    }
    if (idlerPrime.value.length > 0) {
      followerPrime = idlerPrime.value;
      break bb1;
    }
    let thrustPrime;
    thrustPrime = [{
      key: "",
      value: ""
    }];
    followerPrime = thrustPrime;
  }
  let guidePrime = followerPrime;
  if (jigPrime) {
    let bafflePrime = <p className="text-base font-medium text-token-text-primary">{idlerPrime.title}</p>;
    let capstanPrime = jigPrime && typeof idlerPrime.placeHolderValue == "string" ? idlerPrime.placeHolderValue : undefined,
      diaphragmPrime = event => {
        idlerPrime.onEdit(event.target.value);
      };
    let elbowPrime = <Pine {...{
      "aria-label": idlerPrime.inputAriaLabel,
      className: "text-base",
      disabled: idlerPrime.disabled,
      value: idlerPrime.value,
      placeholder: capstanPrime,
      onChange: diaphragmPrime
    }} />;
    let ferrulePrime;
    return <div className="flex flex-col gap-2 rounded-lg bg-token-input-background px-3 py-2">{bafflePrime}{elbowPrime}</div>;
  }
  let helixPrime = <p className="text-base font-medium text-token-text-primary">{idlerPrime.title}</p>;
  let impellerPrime = keeperPrime ? eccentricPrime.map((item, index) => <div key={`list-${index}`} className="flex items-center gap-2">{<Pine {...{
      "aria-label": idlerPrime.inputAriaLabel,
      className: "text-base",
      disabled: idlerPrime.disabled,
      value: item,
      placeholder: keeperPrime && idlerPrime.placeHolderValue.length > 0 ? idlerPrime.placeHolderValue[index] ?? idlerPrime.placeHolderValue[0] ?? "" : "",
      onChange: event => {
        let grommetPrime = [...eccentricPrime];
        grommetPrime[index] = event.target.value;
        idlerPrime.onEdit(grommetPrime);
      }
    }} />}{<ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "icon",
      disabled: idlerPrime.disabled || eccentricPrime.length <= 1 && item.trim().length === 0,
      "aria-label": trunnionPrime,
      onClick: () => {
        let headerPrime = idlerPrime.value.filter((_item, _index) => _index !== index);
        idlerPrime.onEdit(headerPrime);
      },
      children: <AppIconBO className="icon-2xs" />
    }} />}</div>) : guidePrime.map((item, index) => <div key={`record-${index}`} className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">{<Pine {...{
      "aria-label": idlerPrime.inputAriaLabel,
      className: "text-sm",
      disabled: idlerPrime.disabled,
      placeholder: bossPrime,
      value: item.key,
      onChange: event => {
        let injectorPrime = [...guidePrime];
        injectorPrime[index] = {
          ...injectorPrime[index],
          key: event.target.value
        };
        idlerPrime.onEdit(injectorPrime);
      }
    }} />}{<Pine {...{
      "aria-label": idlerPrime.inputAriaLabel,
      className: "text-sm",
      disabled: idlerPrime.disabled,
      placeholder: camPrime,
      value: item.value,
      onChange: event => {
        let jumperPrime = [...guidePrime];
        jumperPrime[index] = {
          ...jumperPrime[index],
          value: event.target.value
        };
        idlerPrime.onEdit(jumperPrime);
      }
    }} />}{<ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "icon",
      disabled: idlerPrime.disabled || guidePrime.length <= 1 && item.key.trim().length === 0 && item.value.trim().length === 0,
      "aria-label": trunnionPrime,
      onClick: () => {
        let kerfPrime = idlerPrime.value.filter((_item, _index) => _index !== index);
        idlerPrime.onEdit(kerfPrime);
      },
      children: <AppIconBO className="icon-2xs" />
    }} />}</div>);
  let journalPrime = <div className="flex flex-col gap-2">{impellerPrime}</div>;
  let kingpinPrime = IntlProvider("text-token-text-secondary/90 justify-center rounded-md border border-dashed text-base");
  let landPrime = () => {
    if (keeperPrime) {
      let manifoldPrime = idlerPrime.value,
        nipPrime = manifoldPrime.length > 0 ? [...manifoldPrime, ""] : [""];
      idlerPrime.onEdit(nipPrime);
      return;
    }
    let louverPrime = [...guidePrime, {
      key: "",
      value: ""
    }];
    idlerPrime.onEdit(louverPrime);
  };
  let meshPrime = <EnsureComposerEsm_Wlt_Init {...{
    className: "icon-2xs"
  }} />;
  let neckPrime = idlerPrime.addLabel ? idlerPrime.addLabel : null,
    padPrime = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      className: kingpinPrime,
      disabled: idlerPrime.disabled,
      onClick: landPrime,
      children: [meshPrime, neckPrime]
    }} />;
  return <div className="flex flex-col gap-3 rounded-lg bg-token-input-background px-3 py-2">{helixPrime}{journalPrime}{padPrime}</div>;
}
function pine(outletPrime) {
  let {
    className,
    ...rest
  } = outletPrime;
  let packingPrime = IntlProvider("bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 outline-none focus:border-token-focus-border", className);
  return <input className={packingPrime} {...rest} />;
}
var quest,
  ridge,
  storm = esmInit(() => {
    quest = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    sortedArrayFrom();
    ensureSkillsPageHelpersInit();
    AppInitialVO();
  });
function tide(reducerPrime) {
  return reducerPrime ? reducerPrime.trim().length === 0 ? reducerPrime : reducerPrime === reducerPrime.toLowerCase() ? `${reducerPrime[0]?.toUpperCase() ?? ""}${reducerPrime.slice(1)}` : reducerPrime : "";
}
