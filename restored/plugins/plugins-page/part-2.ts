// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/15
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


// Wave5d soft JSX companions.
function CoerceLocalFilesystemPath(props: {
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
function Lotus(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Os(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function PluginsPageL(props: {
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
function SagePrime(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialEK: any = undefined;
const AppInitialFt: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialOw: any = undefined;
const AppInitialQj: any = undefined;
const AppInitialSK: any = undefined;
const AppInitialUO: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialYK: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const _pluginDetailPageB: any = undefined;
const _pluginDetailPageK: any = undefined;
const deferredConversationWH3: any = undefined;
const dismiss: any = undefined;
const ember: any = undefined;
const pluginsPageL: any = undefined;
const quill: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const sage: any = undefined;
const writeClipboardContents: any = undefined;

export var pluginsPageU = esmInit(() => {
  flint = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ember();
  hazel = {
    catalog: "gap-x-7 gap-y-4",
    compact: "gap-2",
    default: "gap-4"
  };
});
var flint, garnet, hazel;
function as(copperPrime) {
  let {
      cardClassName,
      cardContentGap = "compact",
      emptyStateAction,
      errorMessage,
      homeDirectory,
      isLoading,
      installedStateAction = "status",
      installButtonLabel,
      highlightedPluginKey,
      pluginInstallationStatus = null,
      isSingleColumn = false,
      flushCards = false,
      getCopyLinkUrl,
      hostId,
      gridGap: deltaPrime = "compact",
      reducedMotion = false,
      useCompactEmptyState = false,
      plugins,
      emptyStateTitle,
      onInstallPlugin,
      onCopyShareLink,
      onOpenPluginDetails,
      onShareInstalledPlugin,
      onTryInChat,
      onUninstallInstalledPlugin,
      onToggleInstalledPluginEnabled,
      pendingPluginId,
      uninstalling,
      unavailablePluginIds
    } = copperPrime,
    echoPrime = NativeContextMenuSurface("1269116100");
  if (isLoading) {
    let harborPrime;
    return <div className="flex h-full min-h-full flex-1 items-center justify-center px-6 py-8 text-center"><AppInitialNi>{<MemoizedFormattedMessage {...sage.pageLoading} />}</AppInitialNi></div>;
  }
  if (errorMessage) {
    let indigoPrime = <MemoizedFormattedMessage {...sage.loadErrorTitle} />;
    let jadePrime = <ManagePluginDetailPage aria-hidden={true} className="h-20 w-auto text-token-input-placeholder-foreground" />;
    let kitePrime;
    return <div className="flex h-full min-h-full flex-1 items-center justify-center py-8">{<Dismiss {...{
        title: indigoPrime,
        description: errorMessage,
        illustration: jadePrime
      }} />}</div>;
  }
  if (plugins.length === 0) {
    let lemonPrime;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{useCompactEmptyState ? <div className="text-sm text-token-text-secondary">{emptyStateTitle}</div> : <Dismiss {...{
        title: emptyStateTitle,
        description: emptyStateAction
      }} />}</div>;
  }
  let falconPrime;
  {
    let marblePrime;
    marblePrime = (nickelPrime, onyxPrime) => <>{<Os {...{
        contentClassName: cardContentGap === "compact" ? "!gap-px" : undefined,
        installedStateAction: installedStateAction,
        installProgressPercent: AriaIconBadge(pluginInstallationStatus, hostId, nickelPrime.plugin.id),
        installPhase: AppInitialFt(pluginInstallationStatus, hostId, nickelPrime.plugin.id),
        isInstallLocked: pluginInstallationStatus != null,
        isUpdatingEnabled: pendingPluginId === nickelPrime.plugin.id,
        isUninstalling: hostId != null && uninstalling != null && AppInitialYK(uninstalling, {
          hostId,
          pluginId: nickelPrime.plugin.id
        }),
        reducedMotion: reducedMotion,
        cardClassName: flushCards ? "!rounded-none !border-0" : cardClassName,
        copyLinkUrl: nickelPrime.plugin.shareContext?.shareUrl ?? getCopyLinkUrl?.(nickelPrime) ?? null,
        onUninstallInstalledPlugin: onUninstallInstalledPlugin == null ? undefined : pearlPrime => {
          onUninstallInstalledPlugin({
            marketplaceName: pearlPrime.marketplaceName,
            plugin: pearlPrime.plugin,
            pluginDisplayName: usePointerSurfaceInteractionGate(pearlPrime),
            pluginId: pearlPrime.plugin.id,
            pluginName: pearlPrime.plugin.name,
            requestPluginId: AppInitialEK(pearlPrime)
          });
        },
        onCopyShareLink,
        onOpenPluginDetails,
        onShareInstalledPlugin,
        onToggleInstalledPluginEnabled,
        plugin: nickelPrime,
        homeDirectory,
        hostId,
        isPluginSharingEnabled: echoPrime,
        isUnavailableInCurrentContext: unavailablePluginIds?.has(nickelPrime.plugin.id),
        isHighlighted: highlightedPluginKey === AppInitialSK(nickelPrime),
        installButtonLabel,
        onInstallPlugin,
        onTryInChat
      }} />}{flushCards && onyxPrime < plugins.length - 1 ? <div className="mx-2.5 h-px bg-token-border" /> : null}</>;
    falconPrime = plugins.map(marblePrime);
  }
  let gammaPrime = falconPrime;
  return flushCards ? <div className="flex flex-col overflow-hidden rounded-lg border border-token-border">{gammaPrime}</div> : <PluginsPageL {...{
    gap: deltaPrime,
    isSingleColumn: isSingleColumn,
    children: gammaPrime
  }} />;
}
function os(quartzPrime) {
  let {
      cardClassName,
      contentClassName,
      copyLinkUrl,
      homeDirectory,
      hostId,
      installedStateAction,
      installButtonLabel,
      installPhase,
      installProgressPercent,
      isInstallLocked,
      isUpdatingEnabled,
      isUninstalling,
      reducedMotion,
      onCopyShareLink,
      onOpenPluginDetails,
      onShareInstalledPlugin,
      onUninstallInstalledPlugin,
      onToggleInstalledPluginEnabled,
      plugin,
      isPluginSharingEnabled,
      isUnavailableInCurrentContext = false,
      isHighlighted,
      onInstallPlugin,
      onTryInChat
    } = quartzPrime,
    riverPrime = useIntl(),
    slatePrime = quill.useRef(false),
    timberPrime = usePointerSurfaceInteractionGate(plugin);
  let umbraPrime = timberPrime,
    violetPrime = installProgressPercent != null,
    willowPrime = violetPrime ? "install" : nova({
      installedStateAction,
      plugin,
      onToggleInstalledPluginEnabled
    });
  let xenonPrime = willowPrime,
    yellowPrime = plugin.plugin.source.type === "remote",
    zincPrime = pluginDetailP(plugin.plugin);
  let amberPrime = zincPrime,
    basaltPrime = amberPrime ? <MemoizedFormattedMessage {...sage.installedByAdminAction} /> : <MemoizedFormattedMessage {...sage.uninstallMenuItem} />;
  let cedarPrime = basaltPrime,
    daisyPrime = AppInitialOw(homeDirectory, plugin.marketplacePath, plugin.plugin.source);
  let emberPrime = daisyPrime,
    flintPrime = plugin.plugin.installed && emberPrime != null && onShareInstalledPlugin != null ? () => {
      onShareInstalledPlugin(plugin);
    } : undefined;
  let garnetPrime = flintPrime,
    hazelPrime = garnetPrime != null,
    ivoryPrime = copyLinkUrl != null || onCopyShareLink != null && emberPrime != null,
    jasperPrime = ivoryPrime ? <DropdownMenu.Item LeftIcon={AppInitialQj} leftIconClassName="icon-xs" onSelect={() => {
      if (onCopyShareLink != null) {
        onCopyShareLink(plugin);
        return;
      }
      copyLinkUrl != null && writeClipboardContents(copyLinkUrl);
    }}><MemoizedFormattedMessage id="plugins.card.copyShareLinkMenuItem" defaultMessage="Copy link" description="Menu item label for copying a plugin share link from the manage plugins list" /></DropdownMenu.Item> : null;
  let kelpPrime = jasperPrime,
    lotusPrime = plugin.plugin.installed && !plugin.plugin.enabled,
    mintPrime = installButtonLabel == null && !plugin.plugin.installed,
    novaPrime = normalizeConnectorCatalogId(plugin.plugin.name);
  let _e = novaPrime != null,
    olivePrime = !plugin.plugin.installed && (installButtonLabel != null || _e && !yellowPrime),
    be = olivePrime ? {
      hostId,
      ...pluginMarketplaceRequestFields(plugin),
      pluginSummary: plugin.plugin
    } : {
      hostId,
      pluginSummary: plugin.plugin
    };
  let {
      blockedReason,
      isLoading
    } = usePluginConnectorAvailability(be),
    prismPrime = isAvailabilityDisabledByAdmin(plugin.plugin) ? "disabled-by-admin" : blockedReason;
  let quillPrime = prismPrime,
    reefPrime = quillPrime === "disabled-by-admin",
    sagePrime,
    topazPrime,
    ultraPrime,
    vaporPrime,
    wheatPrime,
    yarnPrime,
    zephyrPrime,
    acornPrime,
    bloomPrime,
    coralPrime,
    driftPrime,
    eaglePrime,
    frostPrime,
    glidePrime,
    honeyPrime,
    irisPrime,
    jewelPrime;
  {
    yarnPrime = isUnavailableKnownConnector(plugin.plugin.name, _e ? quillPrime : null);
    zephyrPrime = mintPrime && reefPrime;
    wheatPrime = isInstallLocked || reefPrime || isLoading;
    let mossPrime;
    if (mossPrime = installButtonLabel ?? <MemoizedFormattedMessage {...sage.installTooltip} />, ultraPrime = mossPrime, violetPrime) {
      let juniperPrime;
      juniperPrime = installPhase === "installing" ? <MemoizedFormattedMessage {...sage.installing} /> : <MemoizedFormattedMessage {...sage.installLoading} />;
      ultraPrime = juniperPrime;
    } else if (reefPrime) {
      let lagoonPrime;
      lagoonPrime = <MemoizedFormattedMessage {...sage.disabledByAdmin} />;
      ultraPrime = lagoonPrime;
    } else if (isInstallLocked) {
      let meadowPrime;
      meadowPrime = <MemoizedFormattedMessage {...sage.installLoading} />;
      ultraPrime = meadowPrime;
    }
    let northPrime = plugin.plugin.shareContext?.creatorName?.trim() || null;
    let orbitPrime = northPrime,
      pinePrime = plugin.marketplacePath == null && (plugin.remoteMarketplaceName === "workspace-shared-with-me-private" || plugin.remoteMarketplaceName === "workspace-shared-with-me-unlisted"),
      questPrime = installedStateAction !== "status" && onShareInstalledPlugin != null,
      ridgePrime = null;
    if (questPrime) if (emberPrime != null) {
      let nestPrime;
      nestPrime = <MemoizedFormattedMessage id="plugins.card.creator.you" defaultMessage="You" description="Creator label for a personal local plugin in the manage plugins list" />;
      ridgePrime = nestPrime;
    } else if (pinePrime) ridgePrime = orbitPrime;else {
      let oakPrime;
      oakPrime = plugin.plugin.interface?.developerName?.trim() ?? null;
      ridgePrime = oakPrime;
    }
    let stormPrime;
    stormPrime = ridgePrime == null ? null : <div className="w-28 truncate pe-3 text-right text-sm text-token-text-secondary">{ridgePrime}</div>;
    topazPrime = stormPrime;
    let tidePrime = questPrime ? null : orbitPrime;
    acornPrime = onTryInChat != null && !reefPrime || hazelPrime || ivoryPrime || onUninstallInstalledPlugin != null;
    let unityPrime = violetPrime ? "disabled:opacity-100" : undefined,
      valePrime = violetPrime ? "ghost" : "outline",
      wavePrime = event => {
        event.stopPropagation();
        onInstallPlugin(plugin);
      };
    let apexPrime = violetPrime ? <>{<CircularProgressRing percent={installProgressPercent} reducedMotion={reducedMotion} size={16} transitionDurationMs={500} />}{installPhase === "installing" ? <MemoizedFormattedMessage {...sage.installing} /> : <MemoizedFormattedMessage {...sage.installLoading} />}</> : installButtonLabel ?? <MemoizedFormattedMessage id="plugins.card.connect" defaultMessage="Install" description="Button label for installing a plugin" />;
    let brookPrime;
    brookPrime = <ReadLoginRouteQuerySnapshot {...{
      className: unityPrime,
      color: valePrime,
      disabled: wheatPrime,
      onClick: wavePrime,
      size: "toolbar",
      children: apexPrime
    }} />;
    vaporPrime = brookPrime;
    sagePrime = StackedCardHeader;
    let cliffPrime = cardClassName ?? "border-none";
    bloomPrime = IntlProvider("group !cursor-interaction justify-center", cliffPrime);
    let duskPrime = (lotusPrime || isUnavailableInCurrentContext || reefPrime) && "opacity-60";
    coralPrime = IntlProvider(contentClassName, duskPrime);
    driftPrime = "center";
    eaglePrime = false;
    let elmPrime = onOpenPluginDetails ? "!cursor-interaction" : null,
      fernPrime = IntlProvider("flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border-default bg-transparent", elmPrime);
    let grovePrime = <AppIconLV className="icon-md text-token-text-secondary" />;
    let hillPrime = <AppIconKG alt={umbraPrime} knownAppId={plugin.plugin.name} fallback={grovePrime} />;
    let islePrime;
    islePrime = <AppIconKG alt={umbraPrime} className="h-full w-full object-contain" logoDarkUrl={plugin.logoDarkPath} logoUrl={plugin.logoPath} fallback={hillPrime} />;
    frostPrime = <span className={fernPrime}>{islePrime}</span>;
    glidePrime = umbraPrime;
    honeyPrime = plugin.description == null && tidePrime == null ? undefined : <>{plugin.description == null ? null : <div className="line-clamp-1">{plugin.description}</div>}{tidePrime == null ? null : <div className="text-xs text-token-description-foreground">{<MemoizedFormattedMessage {...sage.sharedBy} values={{
          name: tidePrime
        }} />}</div>}</>;
    irisPrime = "flex flex-col gap-0.5 !text-token-description-foreground";
    jewelPrime = olive(plugin, isUnavailableInCurrentContext, isPluginSharingEnabled, yarnPrime);
  }
  let knollPrime = onOpenPluginDetails ? () => {
    if (slatePrime.current) {
      slatePrime.current = false;
      return;
    }
    if (yarnPrime) {
      onInstallPlugin(plugin);
      return;
    }
    onOpenPluginDetails(plugin);
  } : undefined;
  let lunarPrime = isUninstalling ? <ReadLoginRouteQuerySnapshot {...{
    className: "disabled:opacity-100",
    color: "ghost",
    disabled: true,
    size: "toolbar",
    children: <MemoizedFormattedMessage {...sage.uninstalling} />
  }} /> : xenonPrime === "toggle" ? <div className="flex items-center gap-2">{topazPrime}{acornPrime ? <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100" onClick={kelp} onKeyDown={jasper}>{<DropdownMenuPopover align="end" contentWidth="sm" triggerButton={<CoerceLocalFilesystemPath {...{
        label: riverPrime.formatMessage(sage.moreActions),
        size: "toolbar"
      }} />}>{onTryInChat != null && !reefPrime ? <DropdownMenu.Item LeftIcon={AppIconDG} leftIconClassName="icon-xs" onSelect={() => {
          onTryInChat(plugin);
        }}><MemoizedFormattedMessage id="plugins.card.tryItNowMenuItem" defaultMessage="Try now" description="Menu item label for trying a plugin in task" /></DropdownMenu.Item> : null}{garnetPrime == null ? null : <DropdownMenu.Item LeftIcon={AppInitialUO} leftIconClassName="icon-xs" onSelect={garnetPrime}><MemoizedFormattedMessage {...sage.shareMenuItem} /></DropdownMenu.Item>}{kelpPrime}{hazelPrime && emberPrime != null ? <DropdownMenu.Item LeftIcon={AppIconYj} leftIconClassName="icon-xs" onSelect={() => {
          readCodexHomeFromQuery({
            path: emberPrime,
            cwd: null
          });
        }}><MemoizedFormattedMessage id="plugins.card.editMenuItem" defaultMessage="Edit" description="Menu item label for opening a personal plugin's files from the manage plugins list" /></DropdownMenu.Item> : null}{onUninstallInstalledPlugin ? <DropdownMenu.Item LeftIcon={AppIconBO} className="!text-token-error-foreground" leftIconClassName="icon-xs text-token-error-foreground" disabled={isUninstalling} onSelect={() => {
          onUninstallInstalledPlugin(plugin);
        }}><MemoizedFormattedMessage id="plugins.card.deleteMenuItem" defaultMessage="Uninstall" description="Menu item label for uninstalling a plugin from the manage plugins list" /></DropdownMenu.Item> : null}</DropdownMenuPopover>}</div> : null}{<OptionalTooltip tooltipContent={reefPrime ? <MemoizedFormattedMessage {...sage.disabledByAdmin} /> : plugin.plugin.enabled ? <MemoizedFormattedMessage {...sage.disableToggleTooltip} /> : <MemoizedFormattedMessage {...sage.enableToggleTooltip} />}><AppInitialYC checked={plugin.plugin.enabled} disabled={reefPrime || isUpdatingEnabled || isUninstalling} ariaLabel={riverPrime.formatMessage(sage.toggleAria)} onClick={ivory} onChange={petalPrime => {
        onToggleInstalledPluginEnabled?.({
          plugin: plugin.plugin,
          pluginId: plugin.plugin.id,
          pluginDisplayName: umbraPrime,
          enabled: petalPrime
        });
      }} /></OptionalTooltip>}</div> : xenonPrime === "menu" ? <div className="flex items-center gap-2">{topazPrime}{<_pluginDetailPageB {...{
      disableMenuLabel: <MemoizedFormattedMessage id="plugins.card.disableMenuItem" defaultMessage="Disable" description="Menu item label for disabling a plugin from a plugin card" />,
      enableButtonLabel: <MemoizedFormattedMessage {...sage.enableButton} />,
      enabledStatusAriaLabel: riverPrime.formatMessage(sage.enabledStatus),
      isEnabled: plugin.plugin.enabled && !reefPrime,
      isUninstallDisabled: amberPrime,
      isUninstalling,
      isUpdating: isUpdatingEnabled,
      menuLabel: riverPrime.formatMessage({
        id: "plugins.card.actionsMenu",
        defaultMessage: "Plugin actions",
        description: "Aria label for the plugin card actions menu trigger"
      }),
      menuItems: kelpPrime,
      onDisable: !yellowPrime && !reefPrime && onToggleInstalledPluginEnabled ? () => {
        slatePrime.current = true;
        onToggleInstalledPluginEnabled({
          plugin: plugin.plugin,
          pluginId: plugin.plugin.id,
          pluginDisplayName: umbraPrime,
          enabled: false
        });
      } : undefined,
      onEnable: !yellowPrime && lotusPrime && !reefPrime && onToggleInstalledPluginEnabled ? () => {
        slatePrime.current = true;
        onToggleInstalledPluginEnabled({
          plugin: plugin.plugin,
          pluginId: plugin.plugin.id,
          pluginDisplayName: umbraPrime,
          enabled: true
        });
      } : undefined,
      onUninstall: onUninstallInstalledPlugin ? () => {
        slatePrime.current = true;
        onUninstallInstalledPlugin(plugin);
      } : undefined,
      uninstallMenuLabel: cedarPrime
    }} />}</div> : xenonPrime === "status" ? <div className="flex items-center gap-2">{topazPrime}{<Lotus {...{
      isUninstallDisabled: amberPrime,
      isUninstalling,
      onManage: onOpenPluginDetails == null ? undefined : () => onOpenPluginDetails(plugin),
      onShare: garnetPrime,
      onUninstall: onUninstallInstalledPlugin == null ? undefined : () => {
        onUninstallInstalledPlugin(plugin);
      },
      onTryInChat: onTryInChat == null || reefPrime || !plugin.plugin.enabled ? undefined : () => {
        slatePrime.current = true;
        onTryInChat(plugin);
      },
      uninstallMenuLabel: cedarPrime
    }} />}</div> : zephyrPrime ? <OptionalTooltip tooltipContent={<MemoizedFormattedMessage {...sage.disabledInstallTooltip} />}><span role="img" aria-label={riverPrime.formatMessage(sage.disabledInstallTooltip)} className="flex h-7 w-7 shrink-0 items-center justify-center text-token-text-tertiary">{<AppIconIt className="icon-sm" />}</span></OptionalTooltip> : <_pluginDetailPageK {...{
    measurement: vaporPrime,
    reducedMotion,
    children: <OptionalTooltip tooltipContent={ultraPrime}><div className={wheatPrime ? "cursor-not-allowed" : "cursor-interaction"}>{vaporPrime}</div></OptionalTooltip>
  }} />;
  return <SagePrime {...{
    className: bloomPrime,
    contentClassName: coralPrime,
    actionsPlacement: driftPrime,
    iconContainer: eaglePrime,
    icon: frostPrime,
    title: glidePrime,
    description: honeyPrime,
    descriptionClassName: irisPrime,
    badges: jewelPrime,
    onClick: knollPrime,
    isHighlighted,
    actions: lunarPrime
  }} />;
}
function ivory(event) {
  event.stopPropagation();
}
function jasper(event) {
  event.stopPropagation();
}
function kelp(event) {
  event.stopPropagation();
}
function lotus(quietPrime) {
  let {
      isUninstallDisabled,
      isUninstalling,
      onManage,
      onShare,
      onUninstall,
      onTryInChat,
      uninstallMenuLabel
    } = quietPrime,
    rainPrime = useIntl(),
    seedPrime = onTryInChat != null || onShare != null || onManage != null,
    trailPrime = onUninstall != null || isUninstallDisabled;
  if (!seedPrime && !trailPrime) {
    let dewPrime;
    return <span aria-hidden={true} className="h-7 w-7 shrink-0" />;
  }
  let urnPrime = rainPrime.formatMessage(sage.moreActions);
  let vinePrime = <CoerceLocalFilesystemPath {...{
    label: urnPrime,
    size: "toolbar"
  }} />;
  let windPrime = onTryInChat == null ? null : <DropdownMenu.Item LeftIcon={AppIconDG} leftIconClassName="icon-xs" onSelect={onTryInChat}><MemoizedFormattedMessage id="plugins.card.tryInChat" defaultMessage="Try now" description="Menu item label for trying an installed plugin in task" /></DropdownMenu.Item>;
  let yarrowPrime = onShare == null ? null : <DropdownMenu.Item LeftIcon={AppInitialUO} leftIconClassName="icon-xs" onSelect={onShare}><MemoizedFormattedMessage {...sage.shareMenuItem} /></DropdownMenu.Item>;
  let azurePrime = onManage == null ? null : <DropdownMenu.Item LeftIcon={deferredConversationWH3} leftIconClassName="icon-xs" onSelect={onManage}><MemoizedFormattedMessage id="plugins.card.manage" defaultMessage="Manage" description="Menu item label for managing an installed plugin" /></DropdownMenu.Item>;
  let birchPrime = trailPrime && seedPrime ? <DropdownMenu.Separator /> : null;
  let canyonPrime = trailPrime ? <DropdownMenu.Item LeftIcon={AppIconBO} className="!text-token-error-foreground" leftIconClassName="icon-xs text-token-error-foreground" disabled={isUninstalling || isUninstallDisabled} onSelect={onUninstall}>{uninstallMenuLabel}</DropdownMenu.Item> : null;
  return <div className="flex h-7 shrink-0 items-center justify-end gap-2" onClick={fs} onKeyDown={mint}>{<DropdownMenuPopover align="end" contentWidth="icon" triggerButton={vinePrime}>{windPrime}{yarrowPrime}{azurePrime}{birchPrime}{canyonPrime}</DropdownMenuPopover>}</div>;
}
function mint(event) {
  event.stopPropagation();
}
function fs(event) {
  event.stopPropagation();
}
function nova({
  installedStateAction,
  plugin,
  onToggleInstalledPluginEnabled
}) {
  return plugin.plugin.installed && plugin.plugin.source.type === "remote" && (installedStateAction === "toggle" || installedStateAction === "menu") ? "menu" : plugin.plugin.installed && installedStateAction === "toggle" && onToggleInstalledPluginEnabled ? "toggle" : plugin.plugin.installed && installedStateAction === "menu" && onToggleInstalledPluginEnabled ? "menu" : plugin.plugin.installed ? "status" : "install";
}
function olive(everPrime, fieldPrime, grainPrime, havenPrime) {
  let inkPrime = [];
  return fieldPrime && inkPrime.push(<span key={`${everPrime.plugin.id}-unavailable`} className="text-token-description-foreground">{<MemoizedFormattedMessage {...sage.unavailableInCurrentContext} />}</span>), havenPrime && inkPrime.push(<ChartsPurpleBadge key={`${everPrime.plugin.id}-plugin-upsell`} />), !grainPrime && everPrime.marketplaceName.length > 0 && usePluginConnectorAvailability(everPrime.marketplaceName) !== "Built by OpenAI" && inkPrime.push(<span key={`${everPrime.plugin.id}-marketplace`} className="text-token-description-foreground">{usePluginConnectorAvailability(everPrime.marketplaceName)}</span>), inkPrime;
}
