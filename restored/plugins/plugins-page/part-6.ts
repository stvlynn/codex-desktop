// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 6/15
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
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
function EnsureControlGroupInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function EnsurePersonalizationCInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Lagoon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Meadow(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ParseUrlOrFallback(props: {
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
function ResolveBrowserTabPanelSide(props: {
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
function UseChromeAndCodeThemeSync(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const $s: any = undefined;
const AppInitialB4: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialJt: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialYC: any = undefined;
const DeferredUiV2: any = undefined;
const DeferredUiW22: any = undefined;
const birch: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredUiUB: any = undefined;
const dismiss: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const pluginsPageL: any = undefined;
const pluginsPageU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const unity: any = undefined;
const useClearBrowserBrowsingDataMutation: any = undefined;
function isle({
  cwd,
  hostId,
  searchQuery = "",
  useActiveWorkspaceRoot
}) {
  let {
      data,
      isPending
    } = useHostWorkspaceRoot(cwd, {
      hostId,
      useActiveWorkspaceRoot
    }),
    {
      data: _data,
      isFetching,
      isPending: _isPending
    } = CodexBrowserSurfaceActionType(AppInitialB4, hostId),
    driftSecond = useBatchWriteMcpServerConfig({
      hostId
    }),
    eagleSecond = useToggleMcpServerEnabledMutation({
      hostId
    }),
    frostSecond = useQueryClient(),
    glideSecond = useIntl(),
    honeySecond = CodexPluginActionResult(DeferredUiW22),
    [irisSecond, jewelSecond] = quiet.useState({}),
    [knollSecond, lunarSecond] = quiet.useState([]),
    [mossSecond, northSecond] = quiet.useState({}),
    [orbitSecond, pineSecond] = quiet.useState(null),
    [questSecond, ridgeSecond] = quiet.useState(null),
    stormSecond = data?.servers ?? {},
    tideSecond = data?.serverOrigins ?? {},
    unitySecond = data?.configWriteTarget ?? null,
    valeSecond = Object.entries(stormSecond),
    waveSecond = valeSecond.map(([yarrowSecond]) => yarrowSecond),
    apexSecond = searchQuery.trim().toLowerCase(),
    brookSecond = oak.default(valeSecond, ([azureSecond, birchSecond]) => birchSecond.name?.trim() || azureSecond, ([canyonSecond]) => canyonSecond).filter(([dewSecond, everSecond]) => apexSecond.length === 0 ? true : [dewSecond, everSecond.name ?? dewSecond].some(item => item.toLowerCase().includes(apexSecond))),
    cliffSecond = new Set(valeSecond.flatMap(([fieldSecond, grainSecond]) => [fieldSecond, grainSecond.name ?? fieldSecond])),
    duskSecond = knollSecond.includes(hostId),
    elmSecond = duskSecond ? mossSecond[hostId] ?? [] : [],
    fernSecond = oak.default((data == null ? [] : _data?.data ?? []).filter(item => !cliffSecond.has(item.name) && !elmSecond.includes(item.name) && (apexSecond.length === 0 || item.name.toLowerCase().includes(apexSecond))), havenSecond => havenSecond.name),
    groveSecond = waveSecond.length > 0,
    hillSecond = fernSecond.length > 0,
    isleSecond = apexSecond.length > 0 && brookSecond.length === 0 && fernSecond.length === 0,
    juniperSecond = !isleSecond && (groveSecond || hillSecond),
    lagoonSecond = glideSecond.formatMessage({
      id: "settings.mcp.restartApp",
      defaultMessage: "Restart",
      description: "Button label to restart the codex electron app after MCP settings change"
    }),
    meadowSecond = {};
  _data != null && (_data.data.forEach(item => {
    meadowSecond[item.name] = item.authStatus;
  }), valeSecond.forEach(([inkSecond, jadeiteSecond]) => {
    let kernelSecond = meadowSecond[inkSecond] ?? (jadeiteSecond.name == null ? undefined : meadowSecond[jadeiteSecond.name]);
    kernelSecond != null && (meadowSecond[inkSecond] = kernelSecond);
  }));
  let nestSecond = () => {
      lunarSecond(leafSecond => leafSecond.includes(hostId) ? leafSecond : [...leafSecond, hostId]);
    },
    oakSecond = () => {
      ridgeSecond(null);
      pineSecond(null);
    },
    petalSecond = () => {
      if (unitySecond != null) return unitySecond.filePath;
      throw Error(glideSecond.formatMessage({
        id: "settings.mcp.noWritableConfig",
        defaultMessage: "MCP server settings are unavailable",
        description: "Error shown when MCP settings cannot find a writable config.toml"
      }));
    },
    quietSecond = async (mapleSecond, nimbusSecond) => {
      try {
        await eagleSecond.mutateAsync({
          key: mapleSecond,
          enabled: nimbusSecond
        });
        nestSecond();
      } catch {}
    },
    rainSecond = async (opalSecond, plumeSecond) => {
      let quillowSecond = orbitSecond ?? juniper(plumeSecond, waveSecond);
      try {
        await driftSecond.mutateAsync({
          filePath: petalSecond(),
          key: quillowSecond,
          value: opalSecond
        });
        nestSecond();
        oakSecond();
      } catch (rootSecond) {
        throw appActionSidebarProjectRefSchema.error("Failed to save MCP server", {
          safe: {
            targetKey: quillowSecond
          },
          sensitive: {
            error: rootSecond
          }
        }), rootSecond;
      }
    },
    seedSecond = async silkSecond => {
      let thornSecond = orbitSecond ?? juniper(silkSecond, waveSecond);
      try {
        await driftSecond.mutateAsync({
          filePath: petalSecond(),
          key: thornSecond,
          value: null
        });
        northSecond(uplandSecond => ({
          ...uplandSecond,
          [hostId]: petal.default([...(uplandSecond[hostId] ?? []), thornSecond, silkSecond, stormSecond[thornSecond]?.name ?? thornSecond])
        }));
        nestSecond();
        oakSecond();
      } catch (vistaSecond) {
        throw appActionSidebarProjectRefSchema.error("Failed to uninstall MCP server", {
          safe: {
            targetKey: thornSecond
          },
          sensitive: {
            error: vistaSecond
          }
        }), vistaSecond;
      }
    },
    trailSecond = async wispSecond => {
      if (!isFetching) {
        let zenithSecond = meadowSecond[wispSecond];
        if (zenithSecond !== undefined && zenithSecond !== "notLoggedIn") return;
      }
      let yonderSecond = irisSecond[wispSecond];
      if (yonderSecond) {
        PdfPermissionFlag({
          href: yonderSecond,
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
        return;
      }
      jewelSecond(anvilSecond => ({
        ...anvilSecond,
        [wispSecond]: null
      }));
      try {
        let {
          authorizationUrl
        } = await canonicalizeWorkspacePathKey("login-mcp-server", {
          hostId,
          name: wispSecond
        });
        authorizationUrl && (jewelSecond(beaconSecond => ({
          ...beaconSecond,
          [wispSecond]: authorizationUrl
        })), PdfPermissionFlag({
          href: authorizationUrl,
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        }));
      } catch (cragSecond) {
        appActionSidebarProjectRefSchema.error("Failed to start login for MCP server", {
          safe: {
            serverName: wispSecond
          },
          sensitive: {
            error: cragSecond
          }
        });
        jewelSecond(domeSecond => {
          let {
            [wispSecond]: eddySecond,
            ...rest
          } = domeSecond;
          return rest;
        });
      }
    },
    urnSecond = quiet.useEffectEvent((fjordSecond, glenSecond) => {
      jewelSecond(hearthSecond => {
        let inletSecond = hearthSecond[fjordSecond];
        if (glenSecond || inletSecond == null) {
          let {
            [fjordSecond]: jettySecond,
            ...rest
          } = hearthSecond;
          return rest;
        }
        return hearthSecond;
      });
      glenSecond && (nestSecond(), frostSecond.invalidateQueries({
        queryKey: MCP_SERVERS_STATUS_PATH
      }));
    }),
    vineSecond = quiet.useRef(true);
  if (quiet.useEffect(() => {
    if (vineSecond.current) {
      vineSecond.current = false;
      return;
    }
    honeySecond?.hostId === hostId && urnSecond(honeySecond.name, honeySecond.success);
  }, [honeySecond, hostId]), writeScrollTop("codex-app-server-initialized", knobSecond => {
    lunarSecond(ledgeSecond => ledgeSecond.filter(item => item !== knobSecond.hostId));
    northSecond(mireSecond => {
      let {
        [knobSecond.hostId]: nookSecond,
        ...rest
      } = mireSecond;
      return rest;
    });
    frostSecond.invalidateQueries({
      queryKey: [...MCP_SERVERS_STATUS_PATH, knobSecond.hostId]
    });
  }, [frostSecond]), questSecond) return <Unity {...{
    embedded: true,
    config: questSecond,
    initialKey: orbitSecond,
    onCancel: oakSecond,
    onSave: rainSecond,
    onUninstall: orbitSecond ? seedSecond : undefined
  }} />;
  let windSecond = () => {
    pineSecond(null);
    ridgeSecond(seed);
  };
  return <div className="flex flex-col gap-[var(--padding-panel)]">{<UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header title={<MemoizedFormattedMessage {...grove.servers} />} actions={(duskSecond || juniperSecond) && <>{duskSecond ? <OptionalTooltip delayDuration={0} tooltipContent={lagoonSecond}>{<ReadLoginRouteQuerySnapshot {...{
            "aria-label": lagoonSecond,
            color: "ghost",
            size: "icon",
            onClick: () => {
              ensureAppActionPayloadSchemasInit.dispatchMessage("codex-app-server-restart", {
                hostId
              });
            },
            children: <AppIconAlt className="icon-xs" />
          }} />}</OptionalTooltip> : null}{juniperSecond ? <Meadow {...{
          onClick: windSecond
        }} /> : null}</>} />, isPending || _isPending && brookSecond.length === 0 ? <UseChromeAndCodeThemeSync.Content><AppInitialNi /></useChromeAndCodeThemeSync.Content> : isleSecond ? <UseChromeAndCodeThemeSync.Content>{<ParseUrlOrFallback {...{
          children: <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage id="skills.appsPage.empty.mcps" defaultMessage="No MCP servers found" description="Empty state title when there are no MCP servers on the manage MCPs tab" />,
            control: null
          }} />
        }} />}</useChromeAndCodeThemeSync.Content> : brookSecond.length > 0 || !groveSecond && !hillSecond ? <UseChromeAndCodeThemeSync.Content>{<ParseUrlOrFallback {...{
          children: brookSecond.length > 0 ? brookSecond.map(([oxbowSecond, pondSecond]) => <Lagoon key={oxbowSecond} {...{
            name: pondSecond.name ?? oxbowSecond,
            statusLoading: isFetching,
            enabled: pondSecond.enabled !== false,
            authStatus: meadowSecond[oxbowSecond],
            onAuthenticateClicked: () => trailSecond(oxbowSecond),
            onEnableClicked: quarrySecond => quietSecond(oxbowSecond, quarrySecond),
            onSettingsClicked: () => {
              pineSecond(oxbowSecond);
              ridgeSecond(pondSecond);
            },
            isReadOnly: tideSecond[oxbowSecond]?.name.type === "project"
          }} />) : <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage id="settings.mcp.empty" defaultMessage="No MCP servers connected" description="Empty state for MCP servers list" />,
            control: <Meadow {...{
              onClick: windSecond
            }} />
          }} />
        }} />}</useChromeAndCodeThemeSync.Content> : null]
    }} />}{!isleSecond && hillSecond ? <UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header title={<MemoizedFormattedMessage id="settings.mcp.fromPlugins" defaultMessage="From plugins" description="Heading for MCP servers provided by installed plugins" />} />, <UseChromeAndCodeThemeSync.Content>{<ParseUrlOrFallback {...{
          children: fernSecond.map(item => <Lagoon key={item.name} {...{
            name: item.name,
            statusLoading: isFetching,
            authStatus: item.authStatus,
            onAuthenticateClicked: () => trailSecond(item.name)
          }} />)
        }} />}</useChromeAndCodeThemeSync.Content>]
    }} /> : null}</div>;
}
function juniper(rapidsSecond, spurSecond) {
  let torSecond = rapidsSecond.trim().replace(/\s+/gu, "_").replace(/[^a-zA-Z0-9-_]+/gu, "-").replace(/-+/gu, "-"),
    updraftSecond = torSecond.length > 0 ? torSecond.toLowerCase() : "custom-server";
  if (!spurSecond.includes(updraftSecond)) return updraftSecond;
  let vergeSecond = 2,
    weirSecond = `${updraftSecond}-${vergeSecond}`;
  for (; spurSecond.includes(weirSecond);) {
    vergeSecond += 1;
    weirSecond = `${updraftSecond}-${vergeSecond}`;
  }
  return weirSecond;
}
function lagoon(yardSecond) {
  let {
      name,
      statusLoading,
      onAuthenticateClicked,
      authStatus,
      onEnableClicked,
      enabled,
      onSettingsClicked,
      isReadOnly
    } = yardSecond,
    anchorSecond = useIntl(),
    boltSecond = !statusLoading && onAuthenticateClicked !== undefined && authStatus === "notLoggedIn",
    cogSecond = onEnableClicked !== undefined || onSettingsClicked !== undefined || boltSecond,
    discSecond = <span className="flex min-w-0 flex-col gap-0.5 text-sm"><span className="flex flex-wrap items-end gap-1"><span className="font-medium text-token-text-primary">{name}</span></span></span>;
  let edgeSecond = cogSecond ? <EnsureControlGroupInit {...{
    children: [boltSecond ? <ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      size: "toolbar",
      onClick: () => {
        onAuthenticateClicked();
      },
      children: <MemoizedFormattedMessage id="settings.mcp.server.login" defaultMessage="Authenticate" description="Button label to authenticate with an MCP server" />
    }} /> : null, onSettingsClicked ? <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "toolbar",
      uniform: true,
      disabled: isReadOnly === true,
      onClick: onSettingsClicked,
      "aria-label": anchorSecond.formatMessage({
        id: "settings.mcp.server.settings",
        defaultMessage: "Settings",
        description: "Button label to view MCP server settings"
      }),
      children: <DeferredConversationWH3 {...{
        className: "icon-xs"
      }} />
    }} /> : null, onEnableClicked ? <AppInitialYC disabled={isReadOnly === true} checked={enabled === true} onChange={forgeSecond => {
      onEnableClicked(forgeSecond);
    }} ariaLabel={anchorSecond.formatMessage({
      id: "settings.mcp.server.enable",
      defaultMessage: "Enable",
      description: "Toggle to enable an MCP server"
    })} /> : null]
  }} /> : null;
  return <EnsurePersonalizationCInit {...{
    label: discSecond,
    control: edgeSecond
  }} />;
}
function meadow(gearSecond) {
  let {
      onClick
    } = gearSecond,
    hingeSecond,
    ironSecond;
  hingeSecond = <EnsureComposerEsm_Wlt_Init {...{
    className: "icon-xs"
  }} />;
  ironSecond = <MemoizedFormattedMessage id="settings.mcp.addServer" defaultMessage="Add server" description="Button to add a new MCP server" />;
  return <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    size: "toolbar",
    onClick,
    children: [hingeSecond, ironSecond]
  }} />;
}
var nest,
  oak,
  petal,
  quiet,
  rain,
  seed,
  trail = esmInit(() => {
    nest = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    oak = commonJsInit(deferredUiUB(), 1);
    petal = commonJsInit(ensureGoogleDriveConnectorIconsInit(), 1);
    ensureComposerEsm_MT_Init();
    quiet = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    AppActionSelector();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensureSkillsPageHelpersInit();
    useEventCallback();
    ensureHooksFocusIconInit();
    findSidebarSectionElement();
    ensureConfigQueryAtomsInit();
    ControlGroup();
    $s();
    hill();
    codexCommandTheme();
    useGateEnabledWithAccountData();
    AppInitialVC();
    AppInitialFC();
    posixPathBasename();
    seed = {
      command: "",
      args: [],
      env_vars: [],
      enabled: true
    };
  });
function urn(jointSecond) {
  let {
      errorMessage,
      isRetrying,
      onRetry
    } = jointSecond,
    keystoneSecond = <MemoizedFormattedMessage id="skills.appsPage.loadError.title" defaultMessage="Unable to load apps" description="Title shown when the apps list cannot be loaded" />;
  let latchSecond = <MemoizedFormattedMessage id="skills.appsPage.loadError.retry" defaultMessage="Retry" description="Retry button label for the apps list error state" />;
  let motorSecond = () => {
    onRetry();
  };
  return <ResolveBrowserTabPanelSide {...{
    title: keystoneSecond,
    content: errorMessage,
    type: "error",
    layout: "vertical",
    primaryCtaText: latchSecond,
    isPrimaryCtaDisabled: isRetrying,
    onPrimaryCtaClick: motorSecond
  }} />;
}
function vine(nutSecond) {
  let {
    errorMessage,
    isLoading,
    isRetrying,
    onRetry
  } = nutSecond;
  if (isLoading) {
    let valveSecond;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8"><AppInitialNi>{<MemoizedFormattedMessage id="skills.appsPage.loading" defaultMessage="Loading apps…" description="Loading label on the Apps tab of the Skills & Apps page" />}</AppInitialNi></div>;
  }
  let pistonSecond = <MemoizedFormattedMessage id="skills.appsPage.loadError.title" defaultMessage="Unable to load apps" description="Title shown when the apps list cannot be loaded" />;
  let rivetSecond = () => {
    onRetry();
  };
  let screwSecond = <MemoizedFormattedMessage id="skills.appsPage.loadError.retry" defaultMessage="Retry" description="Retry button label for the apps list error state" />;
  let torqueSecond = <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    disabled: isRetrying,
    onClick: rivetSecond,
    children: screwSecond
  }} />;
  return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{<Dismiss {...{
      title: pistonSecond,
      description: errorMessage,
      actions: torqueSecond
    }} />}</div>;
}
function wind(axleSecond) {
  let {
    apps,
    emptyStateTitle,
    installedStateAction = "check",
    installActionLabel,
    isSingleColumn = false,
    useCompactEmptyState = false,
    isAppConnectPending,
    updatingAppId,
    onInstallApp,
    onOpenAppTools,
    onOpenAppUrl,
    onSetAppEnabled
  } = axleSecond;
  if (apps.length === 0) {
    let clampSecond;
    return <div className="flex min-h-0 flex-1 items-center justify-center py-8">{useCompactEmptyState ? <div className="text-sm text-token-text-secondary">{emptyStateTitle}</div> : <Dismiss {...{
        title: emptyStateTitle
      }} />}</div>;
  }
  let bracketSecond;
  {
    let drillSecond;
    drillSecond = engineSecond => <AppCardAdminDisabledBadge key={engineSecond.id} app={engineSecond} installedStateAction={installedStateAction} installActionLabel={installActionLabel} isConnectingApp={isAppConnectPending(engineSecond.id)} updatingAppId={updatingAppId} onInstallApp={onInstallApp} onOpenAppTools={onOpenAppTools} onOpenAppUrl={onOpenAppUrl} onSetAppEnabled={onSetAppEnabled} />;
    bracketSecond = apps.map(drillSecond);
  }
  return <PluginsPageL {...{
    gap: "compact",
    isSingleColumn: isSingleColumn,
    children: bracketSecond
  }} />;
}
var yarrow,
  azure,
  _c = esmInit(() => {
    yarrow = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureAppShellAtomsInit();
    ensureSettingsQueryAtomsInit();
    useClearBrowserBrowsingDataMutation();
    useGateEnabledWithAccountData();
    AppInitialJt();
    pluginsPageU();
  });
export function pluginsPageO({
  creatorPath,
  isFirstOpen,
  kind
}: unknown) {
  let frameSecond = birch[kind],
    gasketSecond = `[$${frameSecond.skillName}](${ensureZodRuntime(creatorPath)})`;
  return isFirstOpen ? `${gasketSecond} ${frameSecond.firstUsePrompt}` : `${gasketSecond} `;
}
export var pluginsPageA;
