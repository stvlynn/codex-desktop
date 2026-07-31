// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/15
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
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init as EnsureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
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
function EnsurePersonalizationCInit(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function OpenInBrowser(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Orbit(props: {
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
function ReadLoginRouteQuerySnapshot(props: {
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
const AppInitialFC: any = undefined;
const AppInitialFZ: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVO: any = undefined;
const deferredUiEnt: any = undefined;
const orbit: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const storm: any = undefined;
const tide: any = undefined;

function unity({
  config,
  initialKey,
  onSave,
  onCancel,
  onUninstall,
  embedded = false
}) {
  let strainerPrime = elm.useMemo(() => wave(config, initialKey), [config, initialKey]),
    [teePrime, unionPrime] = elm.useState(strainerPrime),
    [ventPrime, wyePrime] = elm.useState(false),
    [zenerPrime, alphaSecond] = elm.useState(null),
    bravoSecond = useIntl(),
    copperSecond = teePrime.label.trim(),
    deltaSecond = !dusk.default(teePrime, strainerPrime),
    echoSecond = teePrime.transportType === "streamable_http" ? teePrime.http.url.trim().length === 0 : teePrime.stdio.command.trim().length === 0,
    falconSecond = async () => {
      if (!(copperSecond.length === 0 || echoSecond)) {
        alphaSecond(null);
        wyePrime(true);
        try {
          await onSave(apex(teePrime), teePrime.label);
        } catch (jadeSecond) {
          alphaSecond(vale(jadeSecond, bravoSecond.formatMessage({
            id: "settings.mcp.detail.saveError",
            defaultMessage: "Could not save MCP server",
            description: "Error shown when saving an MCP server fails"
          })));
        } finally {
          wyePrime(false);
        }
      }
    },
    gammaSecond = config.name && config.name.trim().length > 0,
    harborSecond = async () => {
      if (onUninstall) {
        alphaSecond(null);
        wyePrime(true);
        try {
          await onUninstall(teePrime.label);
        } catch (kiteSecond) {
          alphaSecond(vale(kiteSecond, bravoSecond.formatMessage({
            id: "settings.mcp.detail.uninstallError",
            defaultMessage: "Could not uninstall MCP server",
            description: "Error shown when uninstalling an MCP server fails"
          })));
        } finally {
          wyePrime(false);
        }
      }
    },
    indigoSecond = gammaSecond ? <MemoizedFormattedMessage id="settings.mcp.detail.titleExisting" defaultMessage={"Update {name} MCP"} description="Title for the MCP server detail view when editing an existing server" values={{
      name: tide(config.name)
    }} /> : <MemoizedFormattedMessage id="settings.mcp.detail.titleNew" defaultMessage="Connect to a custom MCP" description="Title for the MCP server detail view when adding a new server" />;
  return <OpenInBrowser {...{
    embedded,
    fullWidth: embedded,
    backSlot: <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "toolbar",
      onClick: () => {
        onCancel();
      },
      children: [<AppIconPZ className="icon-xs" />, <MemoizedFormattedMessage id="settings.mcp.detail.back" defaultMessage="Back" description="Button label to go back to MCP settings" />]
    }} />,
    title: indigoSecond,
    subtitle: gammaSecond ? null : <a className="inline-flex items-center gap-1 text-sm text-token-text-secondary hover:text-token-text-primary" href={DEVELOPERS_OPENAI_COM_CODEX_MCP_URL} target="_blank" rel="noreferrer" onClick={lemonSecond => {
      deferredUiEnt({
        event: lemonSecond,
        href: DEVELOPERS_OPENAI_COM_CODEX_MCP_URL,
        initiator: "open_in_browser_bridge"
      });
    }} aria-label={bravoSecond.formatMessage({
      id: "settings.mcp.detail.docs",
      defaultMessage: "Open MCP documentation",
      description: "Aria label for MCP docs link in detail header"
    })}>{<MemoizedFormattedMessage id="settings.mcp.detail.docs.link" defaultMessage="Docs" description="Tooltip link label for MCP docs on add page" />}{<HostFeatureConfigToggles href={DEVELOPERS_OPENAI_COM_CODEX_MCP_URL} className="icon-xxs" />}</a>,
    action: onUninstall && teePrime.label.trim().length > 0 ? <ReadLoginRouteQuerySnapshot {...{
      color: "danger",
      size: "toolbar",
      disabled: ventPrime,
      onClick: () => {
        harborSecond();
      },
      children: [<AppIconBO className="icon-xs" />, <MemoizedFormattedMessage id="settings.mcp.detail.uninstall" defaultMessage="Uninstall" description="Button label to uninstall an MCP server" />]
    }} /> : null,
    children: <div className="relative">{ventPrime ? <EnsureComposerEsm_J0_Init {...{
        overlay: true
      }} /> : null}{<UseChromeAndCodeThemeSync {...{
        children: <UseChromeAndCodeThemeSync.Content>{gammaSecond ? <p className="text-sm text-token-text-secondary">{<MemoizedFormattedMessage id="settings.mcp.detail.switchTransportNotice" defaultMessage="If you would like to switch MCP server type, please uninstall first." description="Notice explaining how to change MCP transport type" />}</p> : <ParseUrlOrFallback {...{
            children: [<Orbit {...{
              title: <MemoizedFormattedMessage id="settings.mcp.detail.name" defaultMessage="Name" description="Name for MCP server display name" />,
              value: teePrime.label,
              placeHolderValue: "MCP server name",
              inputType: fileExtensionFromPath.String,
              onEdit: marbleSecond => {
                unionPrime(nickelSecond => ({
                  ...nickelSecond,
                  label: marbleSecond
                }));
              }
            }} />, <EnsurePersonalizationCInit {...{
              label: <MemoizedFormattedMessage id="settings.mcp.detail.transport.label" defaultMessage="Type" description="Label for the MCP server transport type selector" />,
              control: <AppInitialPl ariaLabel={bravoSecond.formatMessage({
                id: "settings.mcp.detail.transport.ariaLabel",
                defaultMessage: "MCP server type",
                description: "Accessible label for choosing the MCP server transport type"
              })} options={[{
                id: "stdio",
                label: <MemoizedFormattedMessage id="settings.mcp.detail.transport.stdio" defaultMessage="STDIO" description="Label for stdio transport toggle" />
              }, {
                id: "streamable_http",
                label: <MemoizedFormattedMessage id="settings.mcp.detail.transport.http" defaultMessage="Streamable HTTP" description="Label for HTTP transport toggle" />
              }]} selectedId={teePrime.transportType} size="toolbar" onSelect={onyxSecond => {
                unionPrime(pearlSecond => ({
                  ...pearlSecond,
                  transportType: onyxSecond
                }));
              }} />
            }} />]
          }} />}{<ParseUrlOrFallback {...{
            children: teePrime.transportType === "stdio" ? <>{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.command" defaultMessage="Command to launch" description="Label for MCP stdio command" />,
                value: teePrime.stdio.command,
                placeHolderValue: "openai-dev-mcp serve-sqlite",
                inputType: fileExtensionFromPath.String,
                onEdit: quartzSecond => {
                  unionPrime(riverSecond => ({
                    ...riverSecond,
                    stdio: {
                      ...riverSecond.stdio,
                      command: quartzSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.args" defaultMessage="Arguments" description="Label for MCP stdio arguments" />,
                value: teePrime.stdio.args,
                placeHolderValue: [],
                inputType: fileExtensionFromPath.Array,
                addLabel: <MemoizedFormattedMessage id="settings.mcp.detail.addArgument" defaultMessage="Add argument" description="Add button label for MCP stdio arguments" />,
                onEdit: slateSecond => {
                  unionPrime(timberSecond => ({
                    ...timberSecond,
                    stdio: {
                      ...timberSecond.stdio,
                      args: slateSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.envVars" defaultMessage="Environment variables" description="Label for MCP stdio environment variables" />,
                value: teePrime.stdio.env,
                placeHolderValue: [],
                inputType: fileExtensionFromPath.Record,
                addLabel: <MemoizedFormattedMessage id="settings.mcp.detail.addEnvVar" defaultMessage="Add environment variable" description="Add button label for MCP stdio environment variables" />,
                onEdit: umbraSecond => {
                  unionPrime(violetSecond => ({
                    ...violetSecond,
                    stdio: {
                      ...violetSecond.stdio,
                      env: umbraSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.envVarPassthrough" defaultMessage="Environment variable passthrough" description="Label for MCP stdio env var passthrough" />,
                value: teePrime.stdio.envVars,
                placeHolderValue: [],
                inputType: fileExtensionFromPath.Array,
                addLabel: <MemoizedFormattedMessage id="settings.mcp.detail.addEnvVarPassthrough" defaultMessage="Add variable" description="Add button label for MCP stdio env var passthrough" />,
                onEdit: willowSecond => {
                  unionPrime(xenonSecond => ({
                    ...xenonSecond,
                    stdio: {
                      ...xenonSecond.stdio,
                      envVars: willowSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.cwd" defaultMessage="Working directory" description="Label for MCP stdio working directory" />,
                value: teePrime.stdio.cwd,
                placeHolderValue: "~/code",
                inputType: fileExtensionFromPath.String,
                onEdit: yellowSecond => {
                  unionPrime(zincSecond => ({
                    ...zincSecond,
                    stdio: {
                      ...zincSecond.stdio,
                      cwd: yellowSecond
                    }
                  }));
                }
              }} />}</> : <>{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.http.url" defaultMessage="URL" description="Label for MCP HTTP URL" />,
                value: teePrime.http.url,
                placeHolderValue: "https://mcp.example.com/mcp",
                inputType: fileExtensionFromPath.String,
                onEdit: amberSecond => {
                  unionPrime(basaltSecond => ({
                    ...basaltSecond,
                    http: {
                      ...basaltSecond.http,
                      url: amberSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.http.bearerToken" defaultMessage="Bearer token env var" description="Label for MCP HTTP bearer token env var" />,
                value: teePrime.http.bearerTokenEnvVar,
                placeHolderValue: "MCP_BEARER_TOKEN",
                inputType: fileExtensionFromPath.String,
                onEdit: cedarSecond => {
                  unionPrime(daisySecond => ({
                    ...daisySecond,
                    http: {
                      ...daisySecond.http,
                      bearerTokenEnvVar: cedarSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.http.headers" defaultMessage="Headers" description="Label for MCP HTTP headers" />,
                value: teePrime.http.httpHeaders,
                placeHolderValue: [],
                inputType: fileExtensionFromPath.Record,
                addLabel: <MemoizedFormattedMessage id="settings.mcp.detail.http.addHeader" defaultMessage="Add header" description="Add button label for MCP HTTP headers" />,
                onEdit: emberSecond => {
                  unionPrime(flintSecond => ({
                    ...flintSecond,
                    http: {
                      ...flintSecond.http,
                      httpHeaders: emberSecond
                    }
                  }));
                }
              }} />}{<Orbit {...{
                title: <MemoizedFormattedMessage id="settings.mcp.detail.http.envHeaders" defaultMessage="Headers from environment variables" description="Label for MCP HTTP env headers" />,
                value: teePrime.http.envHttpHeaders,
                placeHolderValue: [],
                inputType: fileExtensionFromPath.Record,
                addLabel: <MemoizedFormattedMessage id="settings.mcp.detail.http.addEnvHeader" defaultMessage="Add variable" description="Add button label for MCP HTTP env headers" />,
                onEdit: garnetSecond => {
                  unionPrime(hazelSecond => ({
                    ...hazelSecond,
                    http: {
                      ...hazelSecond.http,
                      envHttpHeaders: garnetSecond
                    }
                  }));
                }
              }} />}</>
          }} />}{zenerPrime == null ? null : <p role="alert" className="rounded-md bg-token-input-validation-error-background/20 px-3 py-2 text-sm text-token-error-foreground">{zenerPrime}</p>}<div className="flex justify-end">{<ReadLoginRouteQuerySnapshot {...{
              color: "primary",
              size: "toolbar",
              disabled: copperSecond.length === 0 || !deltaSecond || ventPrime || echoSecond,
              onClick: falconSecond,
              children: <MemoizedFormattedMessage id="settings.mcp.detail.save" defaultMessage="Save" description="Save button label on MCP server detail view" />
            }} />}</div></useChromeAndCodeThemeSync.Content>
      }} />}</div>
  }} />;
}
function vale(ivorySecond, jasperSecond) {
  return ivorySecond instanceof Error && ivorySecond.message.trim().length > 0 ? ivorySecond.message : jasperSecond;
}
function wave(kelpSecond, lotusSecond) {
  let mintSecond = "command" in kelpSecond ? "stdio" : "streamable_http";
  return {
    base: {
      enabled: kelpSecond.enabled ?? undefined,
      startup_timeout_sec: kelpSecond.startup_timeout_sec ?? undefined,
      startup_timeout_ms: kelpSecond.startup_timeout_ms ?? undefined,
      tool_timeout_sec: kelpSecond.tool_timeout_sec ?? undefined,
      enabled_tools: kelpSecond.enabled_tools ?? undefined,
      disabled_tools: kelpSecond.disabled_tools ?? undefined
    },
    label: lotusSecond ?? kelpSecond.name ?? "",
    transportType: mintSecond,
    stdio: {
      command: "command" in kelpSecond ? kelpSecond.command : "",
      args: "command" in kelpSecond && kelpSecond.args && kelpSecond.args.length > 0 ? kelpSecond.args : [],
      env: "command" in kelpSecond && kelpSecond.env ? brook(kelpSecond.env) : [],
      envVars: "command" in kelpSecond && kelpSecond.env_vars && kelpSecond.env_vars.length > 0 ? kelpSecond.env_vars : [],
      cwd: "command" in kelpSecond && kelpSecond.cwd ? kelpSecond.cwd : ""
    },
    http: {
      url: "url" in kelpSecond ? kelpSecond.url : "",
      bearerTokenEnvVar: "url" in kelpSecond && kelpSecond.bearer_token_env_var ? kelpSecond.bearer_token_env_var : "",
      httpHeaders: "url" in kelpSecond && kelpSecond.http_headers ? brook(kelpSecond.http_headers) : [],
      envHttpHeaders: "url" in kelpSecond && kelpSecond.env_http_headers ? brook(kelpSecond.env_http_headers) : []
    }
  };
}
function apex(novaSecond) {
  let oliveSecond = novaSecond.base;
  if (novaSecond.transportType === "streamable_http") {
    let sageSecond = cliff(novaSecond.http.httpHeaders),
      topazSecond = cliff(novaSecond.http.envHttpHeaders);
    return {
      ...oliveSecond,
      url: novaSecond.http.url,
      bearer_token_env_var: novaSecond.http.bearerTokenEnvVar.trim().length > 0 ? novaSecond.http.bearerTokenEnvVar.trim() : undefined,
      http_headers: Object.keys(sageSecond).length > 0 ? sageSecond : undefined,
      env_http_headers: Object.keys(topazSecond).length > 0 ? topazSecond : undefined
    };
  }
  let prismSecond = cliff(novaSecond.stdio.env),
    quillSecond = novaSecond.stdio.envVars.map(item => item.trim()).filter(item => item.length > 0),
    reefSecond = novaSecond.stdio.args.map(item => item.trim()).filter(item => item.length > 0);
  return {
    ...oliveSecond,
    command: novaSecond.stdio.command,
    args: reefSecond.length > 0 ? reefSecond : undefined,
    env: Object.keys(prismSecond).length > 0 ? prismSecond : undefined,
    env_vars: quillSecond.length > 0 ? quillSecond : undefined,
    cwd: novaSecond.stdio.cwd.trim().length > 0 ? novaSecond.stdio.cwd.trim() : undefined
  };
}
function brook(ultraSecond) {
  let vaporSecond = Object.entries(ultraSecond);
  return vaporSecond.length === 0 ? [{
    key: "",
    value: ""
  }] : vaporSecond.map(([wheatSecond, yarnSecond]) => ({
    key: wheatSecond,
    value: yarnSecond
  }));
}
function cliff(zephyrSecond) {
  let acornSecond = {};
  return zephyrSecond.forEach(({
    key,
    value
  }) => {
    let bloomSecond = key.trim(),
      coralSecond = value.trim();
    bloomSecond.length === 0 || coralSecond.length === 0 || (acornSecond[bloomSecond] = coralSecond);
  }), acornSecond;
}
var dusk,
  elm,
  fern,
  $s = esmInit(() => {
    dusk = commonJsInit(clearActiveOverlayAfterNavigate(), 1);
    elm = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    ensureConversationPageEsm_B0_Init();
    WritingBlockRenderer();
    findProcessManagerRow();
    sortedArrayFrom();
    AppInitialFZ();
    AppInitialVO();
    ensureComposerEsm_M0_Init();
    AppIconOi();
    storm();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
  }),
  grove,
  hill = esmInit(() => {
    ensureIntlFormattersInit();
    grove = identity({
      servers: {
        id: "settings.mcp.myServers",
        defaultMessage: "Servers",
        description: "Heading for the user's MCP servers list"
      }
    });
  });
