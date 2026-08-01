// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/15
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../conversation/conversation-page-esm-inits";
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
function Anchor(props: {
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
function EnsureConnectorLogoStackInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function GasketThird(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Hinge(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Keystone(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Nut(props: {
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
function PluginDetailPageD(props: {
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Spur(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Torque(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialCN: any = undefined;
const AppInitialDN: any = undefined;
const AppInitialNR: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialSK: any = undefined;
const AppInitialTR: any = undefined;
const CodexMicroDeviceLifecycleStepType: any = undefined;
const IntlProvider: any = undefined;
const _pluginDetailPageB: any = undefined;
const _pluginDetailPageV: any = undefined;
const _pluginDetailPageW: any = undefined;
const _pluginDetailPageX: any = undefined;
const _pluginDetailPageY: any = undefined;
const _s: any = undefined;
const axle: any = undefined;
const deferredUiJ1: any = undefined;
const dismiss: any = undefined;
const fileCsv: any = undefined;
const keystone: any = undefined;
const nut: any = undefined;
const pluginDetailPageB: any = undefined;
const pluginDetailPageC: any = undefined;
const pluginDetailPageD: any = undefined;
const pluginDetailPageO: any = undefined;
const pluginDetailPageS: any = undefined;
const pluginDetailPageUnderscore: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const torque: any = undefined;
const valve: any = undefined;
function mire(silkThird) {
  let {
      hiddenItems,
      isExpanded,
      onToggle
    } = silkThird,
    thornThird = hiddenItems.filter(oxbow).slice(0, 3);
  return <PluginDetailPageS {...{
    className: "mt-4 gap-3 px-2.5",
    isExpanded,
    onClick: onToggle,
    children: [thornThird.length > 0 ? <EnsureConnectorLogoStackInit {...{
      size: "medium",
      children: thornThird.map(nook)
    }} /> : null, <span>{<MemoizedFormattedMessage id="skills.appsPage.section.seeAllDescription" defaultMessage={"See {pluginNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}"} description="Label for the row that expands a plugin category, previewing the next plugins and the number of additional plugins" values={{
        pluginNames: hiddenItems.slice(0, 2).map(usePointerSurfaceInteractionGate).join(", "),
        remainingCount: Math.max(hiddenItems.length - 2, 0)
      }} />}</span>]
  }} />;
}
function nook(uplandThird) {
  return <AppIconKG key={AppInitialSK(uplandThird)} alt="" className="size-full" knownAppId={uplandThird.plugin.name} logoDarkUrl={uplandThird.logoDarkPath} logoUrl={uplandThird.logoPath} fallback={<AppIconLV className="text-token-text-secondary" />} />;
}
function oxbow(vistaThird) {
  return vistaThird.logoPath != null || vistaThird.logoDarkPath != null || deferredUiZG(vistaThird.plugin.name) != null;
}
function pond(wispThird, yonderThird) {
  return [AppInitialSK(wispThird), yonderThird];
}
function quarry(zenithThird) {
  let {
      plugins,
      onManage,
      onOpenPluginDetails
    } = zenithThird,
    anvilThird = useIntl(),
    [beaconThird, cragThird] = useContentRectSize(),
    {
      width
    } = cragThird,
    domeThird,
    eddyThird,
    fjordThird,
    glenThird,
    hearthThird;
  {
    let jettyThird = tor({
        containerWidth: width,
        pluginCount: plugins.length
      }),
      knobThird = plugins.slice(0, jettyThird),
      ledgeThird = plugins.slice(jettyThird),
      mireThird = ledgeThird.length,
      nookThird = onOpenPluginDetails != null;
    hearthThird = "px-2";
    domeThird = beaconThird;
    eddyThird = "group/plugin-row flex h-11 gap-1 overflow-visible";
    let oxbowThird;
    oxbowThird = pondThird => {
      let quarryThird = usePointerSurfaceInteractionGate(pondThird);
      return <button key={AppInitialSK(pondThird)} aria-label={quarryThird} className="group relative flex size-11 shrink-0 cursor-interaction items-center justify-center rounded-xl p-1 outline-none focus-visible:ring-1 focus-visible:ring-token-text-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed" disabled={!nookThird} type="button" onClick={() => onOpenPluginDetails?.(pondThird)}><span className={IntlProvider("flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-token-border-default bg-token-main-surface-primary shadow-lg transition-transform duration-basic ease-out motion-reduce:transition-none", nookThird && "group-hover:-translate-y-1 group-focus-visible:translate-y-0")}>{<Spur {...{
            plugin: pondThird
          }} />}</span><span aria-hidden="true" className={IntlProvider("pointer-events-none absolute start-1/2 top-full z-10 -translate-x-1/2 text-xs leading-4 whitespace-nowrap text-token-text-secondary opacity-0 transition-opacity duration-basic ease-out group-has-[:focus-visible]/plugin-row:duration-0 motion-reduce:transition-none", nookThird && "group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]/plugin-row:translate-y-1")}>{quarryThird}</span></button>;
    };
    fjordThird = knobThird.map(oxbowThird);
    glenThird = mireThird > 0 ? <button aria-label={anvilThird.formatMessage({
      id: "skills.appsPage.connectedPlugins.overflowAriaLabel",
      defaultMessage: "{count, plural, one {# more connected plugin} other {# more connected plugins}}",
      description: "Accessible label for the connected plugins overflow count"
    }, {
      count: mireThird
    })} className="group relative flex size-11 shrink-0 cursor-interaction items-center justify-center rounded-xl p-1 outline-none focus-visible:ring-1 focus-visible:ring-token-text-primary focus-visible:ring-offset-1" type="button" onClick={onManage}><span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-token-border-default bg-token-main-surface-primary shadow-lg transition-transform duration-basic ease-out group-hover:-translate-y-1 group-focus-visible:translate-y-0 motion-reduce:transition-none"><span className="grid grid-cols-2 gap-0.5">{ledgeThird.slice(0, 4).map(rapids)}</span></span><span aria-hidden="true" className="pointer-events-none absolute start-1/2 top-full z-10 -translate-x-1/2 text-xs leading-4 whitespace-nowrap text-token-text-secondary opacity-0 transition-opacity duration-basic ease-out group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]/plugin-row:translate-y-1 group-has-[:focus-visible]/plugin-row:duration-0 motion-reduce:transition-none">{<MemoizedFormattedMessage id="skills.appsPage.connectedPlugins.overflowLabel" defaultMessage={"{count} more"} description="Hover and keyboard-focus label beneath the connected plugins overflow tile" values={{
          count: mireThird
        }} />}</span></button> : null;
  }
  let inletThird = <div ref={domeThird} className={eddyThird}>{fjordThird}{glenThird}</div>;
  return <div className={hearthThird}>{inletThird}</div>;
}
function rapids(rapidsThird) {
  return <span key={AppInitialSK(rapidsThird)} className="flex size-[13px] items-center justify-center overflow-hidden rounded-[4px] border-[0.5px] border-token-border-default bg-token-main-surface-primary">{<Spur {...{
      plugin: rapidsThird
    }} />}</span>;
}
function spur(spurThird) {
  let {
      plugin
    } = spurThird,
    torThird = <span className="flex size-full items-center justify-center">{<AppIconLV className="size-1/2 text-token-text-secondary" />}</span>;
  let updraftThird = <AppIconKG alt="" knownAppId={plugin.plugin.name} fallback={torThird} />;
  return <AppIconKG alt="" className="size-full object-contain" logoDarkUrl={plugin.logoDarkPath} logoUrl={plugin.logoPath} fallback={updraftThird} />;
}
function tor({
  containerWidth,
  pluginCount
}) {
  if (containerWidth == null) return pluginCount;
  let vergeThird = Math.max(1, Math.floor((containerWidth + weir) / 48));
  return vergeThird >= pluginCount ? pluginCount : vergeThird - 1;
}
var updraft,
  verge,
  weir,
  yard = esmInit(() => {
    updraft = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    fileCsv();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_AG_Init();
    ConnectorLogoStack();
    pluginDetailPageO();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_RV_Init();
    ensureHooksFocusIconInit();
    CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
    _s();
    ensureInstalledPluginsQueryInit();
    deferredUiJ1();
    _pluginDetailPageW();
    weir = 4;
  });
export function pluginsPageR(weirThird: unknown) {
  let {
      skill,
      canInstall,
      hostId,
      isHighlighted = false,
      isInstalled,
      isInstalling,
      repoRoot,
      onInstall
    } = weirThird,
    yardThird = useIntl(),
    anchorThird = skill.shortDescription && skill.shortDescription.length > 0 ? skill.shortDescription : skill.description,
    boltThird = bolt({
      repoRoot,
      repoPath: skill.repoPath
    });
  let cogThird = boltThird,
    discThird = titleCaseColonSegments(skill.name);
  let edgeThird = discThird,
    forgeThird = skill.iconLarge ? "large" : "small",
    gearThird = <_l {...{
      skill,
      size: forgeThird,
      basePath: cogThird
    }} />;
  let hingeThird = gearThird,
    ironThird = isInstalled || !canInstall || isInstalling,
    jointThird = isInstalled ? <_pluginDetailPageB {...{
      enabledStatusAriaLabel: yardThird.formatMessage(forge.installed),
      isEnabled: true,
      isUninstalling: false,
      isUpdating: false
    }} /> : <OptionalTooltip tooltipContent={<MemoizedFormattedMessage {...forge.installSkill} />}>{<ReadLoginRouteQuerySnapshot {...{
        "aria-label": yardThird.formatMessage(forge.installSkill),
        color: "secondary",
        size: "composer",
        disabled: ironThird,
        loading: isInstalling,
        onClick: event => {
          event.stopPropagation();
          !ironThird && onInstall(skill, null);
        },
        children: <MemoizedFormattedMessage {...forge.installSkill} />
      }} />}</OptionalTooltip>;
  let keystoneThird = jointThird,
    latchThird = <AppInitialDN kind="Skill" title={edgeThird} />;
  let motorThird = pistonThird => {
    let {
      isOpen
    } = pistonThird;
    return <AppInitialCN hostId={hostId} isOpen={isOpen} skillPath={cogThird} titleText={edgeThird} />;
  };
  let nutThird = <Anchor {...{
    canInstall,
    installing: isInstalling,
    isInstalled,
    onInstall,
    skill
  }} />;
  return <_pluginDetailPageV {...{
    cardIcon: hingeThird,
    cardTitle: edgeThird,
    cardDescription: anchorThird,
    cardActions: keystoneThird,
    isHighlighted: isHighlighted,
    modalTitle: latchThird,
    modalTitleText: edgeThird,
    modalDescription: anchorThird,
    modalBody: motorThird,
    modalFooter: nutThird
  }} />;
}
function anchor(rivetThird) {
  let {
      canInstall,
      installing,
      isInstalled,
      onInstall,
      skill
    } = rivetThird,
    screwThird = isInstalled || !canInstall || installing,
    torqueThird = event => {
      event.stopPropagation();
      onInstall(skill, null);
    };
  let valveThird = screwThird ? null : <EnsureComposerEsm_Wlt_Init {...{
    className: "icon-xs"
  }} />;
  let axleThird = isInstalled ? <MemoizedFormattedMessage {...forge.installed} /> : <MemoizedFormattedMessage id="skills.recommended.install" defaultMessage="Install skill" description="Button label to install a recommended skill" />;
  return <div className="flex w-full justify-end">{<ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      size: "toolbar",
      disabled: screwThird,
      loading: installing,
      onClick: torqueThird,
      children: [valveThird, axleThird]
    }} />}</div>;
}
function bolt({
  repoRoot,
  repoPath
}) {
  if (!repoRoot) return null;
  let bracketThird = repoPath.split("/").join(disc.default.sep),
    clampThird = disc.default.join(repoRoot, bracketThird);
  return clampThird.toLowerCase().endsWith(".md") ? clampThird : disc.default.join(clampThird, "SKILL.md");
}
function _l(drillThird) {
  let {
      skill,
      size = "small",
      basePath
    } = drillThird,
    engineThird = !!skill.iconLarge,
    frameThird = AppInitialTR(null, {
      size: size,
      iconSmall: skill.iconSmall,
      iconLarge: skill.iconLarge,
      basePath,
      alt: skill.name,
      fallbackName: skill.name,
      fallbackDescription: skill.description
    });
  let gasketThird = frameThird,
    handleThird = pluginDetailG({
      size: size,
      hasLargeIcon: engineThird,
      largeFallbackClassName: "h-5 w-5"
    });
  let insertThird = `${handleThird} text-token-text-secondary`;
  return <GasketThird {...{
    className: insertThird
  }} />;
}
export var pluginsPageI = esmInit(() => {
  cog = reactCompilerRuntime();
  disc = commonJsInit(ght(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  _pluginDetailPageX();
  ensureComposerEsm_Hlt_Init();
  ensureSkillsPageHelpersInit();
  CodexMicroDeviceLifecycleStepType();
  AppInitialNR();
  _pluginDetailPageY();
  findCachedConversationItem();
  pluginDetailPageUnderscore();
  forge = identity({
    installSkill: {
      id: "skills.recommended.connectSkill",
      defaultMessage: "Install skill",
      description: "Button label for installing a recommended skill"
    },
    installed: {
      id: "skills.recommended.installed",
      defaultMessage: "Installed",
      description: "Label for installed recommended skills"
    }
  });
});
var cog, disc, edge, forge;
function gear(jacketThird) {
  let {
      canInstallRecommendedSkills,
      errorMessage,
      installedStateAction = "check",
      installedSkillGroups,
      installedSkills,
      installedSkillsForRecommendedActions,
      installedRecommendedSkillIds,
      highlightedInstalledSkillPath,
      highlightedRecommendedSkillId,
      hostId,
      installingSkillId,
      isLoadingInstalledSkills,
      isLoadingRecommendedSkills,
      onInstallRecommendedSkill,
      onInstalledRecommendedSkillUpdated,
      onSelectSection: knurlThird,
      onSkillsUpdated,
      recommendedRepoRoot,
      recommendedSkills,
      roots,
      selectedSectionId,
      searchResultsTitle,
      installedSection,
      recommendedSection
    } = jacketThird,
    leverThird = useIntl(),
    mountThird;
  {
    let hubThird;
    hubThird = idlerThird => {
      let jigThird = installedRecommendedSkillIds.has(idlerThird.id);
      return {
        installedSkill: jigThird ? pluginDetailPageB({
          installedSkills: installedSkillsForRecommendedActions,
          skill: idlerThird
        }) : null,
        isInstalled: jigThird,
        skill: idlerThird
      };
    };
    mountThird = recommendedSkills.map(hubThird);
  }
  let nozzleThird = mountThird,
    platenThird = installedSection != null && (installedSkillGroups.length > 0 || installedSkills.length > 0),
    ratchetThird = recommendedSection != null && nozzleThird.length > 0;
  if (!isLoadingInstalledSkills && !isLoadingRecommendedSkills && errorMessage == null && !platenThird && !ratchetThird) {
    let keeperThird;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{<Dismiss {...{
        title: <MemoizedFormattedMessage id="skills.appsPage.empty.skills" defaultMessage="No skills found" description="Empty state title when no skills match filters on the Skills & Apps page" />
      }} />}</div>;
  }
  if (searchResultsTitle != null) {
    let lugThird = installedSkills.length + nozzleThird.length,
      mandrelThird = installedSkills.length > 0 ? <Hinge {...{
        hostId,
        installedStateAction: installedStateAction,
        highlightedSkillPath: highlightedInstalledSkillPath,
        isLoading: isLoadingInstalledSkills,
        roots,
        skillEntries: installedSkills,
        onSkillsUpdated
      }} /> : null;
    let nippleThird = nozzleThird.length > 0 ? <Nut {...{
      canInstall: canInstallRecommendedSkills,
      errorMessage,
      highlightInstalledSkills: false,
      hostId,
      highlightedSkillId: highlightedRecommendedSkillId,
      entries: nozzleThird,
      installingSkillId,
      isLoading: isLoadingRecommendedSkills,
      onInstall: onInstallRecommendedSkill,
      onSkillsUpdated: onInstalledRecommendedSkillUpdated,
      repoRoot: recommendedRepoRoot,
      roots,
      showAll: true
    }} /> : null;
    let orificeThird = <div className="flex flex-col gap-3">{mandrelThird}{nippleThird}</div>;
    let pinThird;
    return <PluginDetailPageD {...{
      count: lugThird,
      id: "skills-search-results",
      title: searchResultsTitle,
      children: orificeThird
    }} />;
  }
  let shimThird = axle(installedSkillGroups, recommendedSection);
  let tappetThird = shimThird,
    arborThird;
  {
    let raceThird;
    raceThird = sleeveThird => sleeveThird.id === selectedSectionId;
    arborThird = installedSkillGroups.find(raceThird);
  }
  let bushingThird = arborThird,
    collarThird = installedSection == null ? null : <PluginDetailPageD {...{
      id: installedSection.id,
      title: <MemoizedFormattedMessage id="skills.appsPage.section.installedSkillsOverview" defaultMessage="Installed" description="Heading for skills installed in Codex" />,
      children: <Hinge {...{
        hostId,
        installedStateAction: installedStateAction,
        isLoading: isLoadingInstalledSkills,
        maxVisibleSkills: 6,
        roots,
        skillEntries: installedSkills,
        onSkillsUpdated
      }} />
    }} />;
  let dowelThird = tappetThird.length > 0 && selectedSectionId != null ? <AppInitialPl ariaLabel={leverThird.formatMessage({
    id: "skills.appsPage.skillDirectoryTabs.ariaLabel",
    defaultMessage: "Skill directory",
    description: "Accessible label for skill sections on the Skills page"
  })} options={tappetThird} selectedId={selectedSectionId} size="toolbar" onSelect={knurlThird} /> : null;
  let flangeThird = bushingThird == null ? null : <Hinge {...{
    hostId,
    installedStateAction: installedStateAction,
    highlightedSkillPath: highlightedInstalledSkillPath,
    isLoading: isLoadingInstalledSkills,
    maxVisibleSkills: 6,
    onSkillsUpdated,
    roots,
    skillEntries: bushingThird.skillEntries
  }} />;
  let gibThird = recommendedSection?.id === selectedSectionId ? <Nut {...{
    canInstall: canInstallRecommendedSkills,
    errorMessage,
    highlightInstalledSkills: true,
    hostId,
    highlightedSkillId: highlightedRecommendedSkillId,
    entries: nozzleThird,
    installingSkillId,
    isLoading: isLoadingRecommendedSkills,
    onInstall: onInstallRecommendedSkill,
    onSkillsUpdated: onInstalledRecommendedSkillUpdated,
    repoRoot: recommendedRepoRoot,
    roots
  }} /> : null;
  return <div className="flex flex-1 flex-col gap-8 pb-panel">{collarThird}{dowelThird}{flangeThird}{gibThird}</div>;
}
function hinge(trunnionThird) {
  let {
    gap,
    hostId,
    highlightedSkillPath,
    installedStateAction = "check",
    isLoading,
    isSingleColumn = false,
    maxVisibleSkills,
    roots,
    skillEntries,
    useCompactEmptyState = false,
    onSkillsUpdated
  } = trunnionThird;
  if (isLoading) {
    let eccentricThird;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8"><AppInitialNi>{<MemoizedFormattedMessage id="skills.page.loading" defaultMessage="Loading skills…" description="Loading label on the skills page" />}</AppInitialNi></div>;
  }
  if (skillEntries.length === 0) {
    let followerThird;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{useCompactEmptyState ? <div className="text-sm text-token-text-secondary">{<MemoizedFormattedMessage id="skills.appsPage.empty.skills" defaultMessage="No skills found" description="Empty state title when no skills match filters on the Skills & Apps page" />}</div> : <Dismiss {...{
        title: <MemoizedFormattedMessage id="skills.appsPage.empty.skills" defaultMessage="No skills found" description="Empty state title when no skills match filters on the Skills & Apps page" />
      }} />}</div>;
  }
  if (maxVisibleSkills == null) {
    let guideThird = gap ?? "default",
      helixThird;
    return <Keystone {...{
      gap: guideThird,
      hostId,
      highlightedSkillPath,
      installedStateAction: installedStateAction,
      isSingleColumn: isSingleColumn,
      roots,
      skillEntries,
      onSkillsUpdated
    }} />;
  }
  let bossThird = valve({
    itemCount: skillEntries.length,
    visibleItemLimit: maxVisibleSkills
  });
  let camThird = bossThird;
  if (camThird == null) {
    let impellerThird = gap ?? "default",
      journalThird;
    return <Keystone {...{
      gap: impellerThird,
      hostId,
      highlightedSkillPath,
      installedStateAction: installedStateAction,
      isSingleColumn: isSingleColumn,
      roots,
      skillEntries,
      onSkillsUpdated
    }} />;
  }
  let detentThird = kingpinThird => <Keystone {...{
    gap: gap ?? "compact",
    hostId,
    highlightedSkillPath,
    installedStateAction: installedStateAction,
    isSingleColumn: isSingleColumn,
    roots,
    skillEntries: kingpinThird,
    onSkillsUpdated
  }} />;
  return <PluginDetailPageC {...{
    items: skillEntries,
    visibleItemLimit: camThird,
    renderExpandRow: iron,
    children: detentThird
  }} />;
}
function iron(landThird) {
  let {
    hiddenItems,
    isExpanded,
    onToggle
  } = landThird;
  return <Torque {...{
    isExpanded,
    skillNames: hiddenItems.map(joint),
    onClick: onToggle
  }} />;
}
function joint(meshThird) {
  let {
    skill
  } = meshThird;
  return getPluginDisplayName(skill);
}
