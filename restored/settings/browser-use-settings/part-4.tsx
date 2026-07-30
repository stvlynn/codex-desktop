// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/13
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { ensureImportMetaAssetUrlInit } from "../../assets/ensure-import-meta-asset-url-init";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  ensureBrowserUseGateInit,
  useBrowserUseGate,
  useExternalBrowserUseGate,
} from "../../boundaries/browser-use-gate-facades";
import {
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../boundaries/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  CodexBrowserSurface,
  CodexBrowserSurfaceActionAnalyticsType,
  CodexBrowserSurfaceActionType as CodexBrowserSurfaceActionTypeAlias,
} from "../../browser/browser-surface-enums";
import {
  ensurePluginMentionPromptInit,
  firstNonEmptyTrimmedString,
} from "../../browser/browser-use-helpers";
import {
  CHROME_SETTINGS_CONTENT_URL,
  CHROME_SETTINGS_COOKIES_URL,
} from "../../browser/chrome-internal-urls";
import { buildChromeSiteDetailsUrl } from "../../browser/chrome-site-details-url";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { ensureBrowserPluginMentionMessagesInit } from "../../composer/browser-plugin-mention-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { BROWSER_SURFACE_ID } from "../../config/browser-surface-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { OPENAI_BUNDLED_ID } from "../../config/openai-bundled-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { areTurnsRelated } from "../../conversation/is-turn-ancestor";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT } from "../../overlay/avatar-overlay-composition-events";
import { ensurePluginCachePathHelpersInit } from "../../plugins/ensure-plugin-cache-path-helpers-init";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { closedConnectionState } from "../../shell/closed-connection-state";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensurePersonalizationCInit,
  ensureSettingsGlyphNltInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { isWinDrivePath } from "../../utils/win-path-predicates";
import { SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH } from "../browser-use-settings-paths";
import { ensureGpuTearingDebugSettingsInit } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  initSettingsRowDisclosure,
  SettingsRowDisclosure,
} from "../settings-row-disclosure";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

// Wave5d soft JSX companions.
function EnsureComposerEsm_Wlt_Init(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Bravo(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Delta(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function EnsureImportMetaAssetUrlInit(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function EnsurePersonalizationCInit(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ParseUrlOrFallback(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function UseChromeAndCodeThemeSync(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialKO: any = undefined;
const AppInitialNO: any = undefined;
const AppInitialOO: any = undefined;
const AppInitialSv: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialYC: any = undefined;
const CollabAgentToolCall: any = undefined;
const DesktopWorkspaceDiscovery: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const deferredUiD9: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const ensureConfigQueryAtomsInitStub: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function browserUseSettingsV() {
  let { selectedHostId } = useSelectedHost();
  if (ensureSteeringUserMessageClusterInit(selectedHostId).kind !== "local")
    return null;
  let onyx = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.developerMode.title",
              defaultMessage: "Developer mode",
              description: "Title for full CDP developer mode settings",
            }}
          />
        ),
      }}
    />
  );
  return (
    <ElectronOnly
      {...{
        electron: true,
        children: (
          <UseChromeAndCodeThemeSync
            {...{
              children: [
                onyx,
                <UseChromeAndCodeThemeSync.Content
                  {...{
                    children: (
                      <ParseUrlOrFallback
                        {...{
                          children: (
                            <Alpha
                              {...{
                                hostId: selectedHostId,
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                  }}
                />,
              ],
            }}
          />
        ),
      }}
    />
  );
}
function echo(pearl) {
  let { hostId } = pearl,
    quartz = useIntl(),
    { data, isLoading } = CodexPluginActionResult(AppInitialOO),
    river = {
      hostId,
    };
  let { data: _data, isPending } = CodexBrowserSurfaceActionType(
      ensureConfigQueryAtomsInit,
      river,
    ),
    slate = {
      hostId,
    };
  let timber = AppInitialNO(slate),
    umbra =
      _data?.requirements?.featureRequirements?.[DesktopWorkspaceDiscovery],
    violet = deferredUiD9(umbra);
  let willow = violet,
    xenon = isLoading || isPending,
    yellow = data?.fullCdpAccessEnabled === true && !xenon && !willow,
    zinc = (
      <div className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1 font-medium text-token-editor-warning-foreground">
          {
            <EnsureImportMetaAssetUrlInit
              {...{
                className: "icon-xs shrink-0",
              }}
            />
          }
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.browserUse.fullCdp.elevatedRisk.label",
                defaultMessage: "Elevated risk",
                description:
                  "Label for the elevated risk warning shown for the full CDP developer mode toggle",
              }}
            />
          }
        </span>
        <span>
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.browserUse.fullCdp.label",
                defaultMessage: "Enable full CDP access",
                description: "Label for the full CDP developer mode toggle",
              }}
            />
          }
        </span>
      </div>
    );
  let amber = (
    <div>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.fullCdp.description",
            defaultMessage:
              "Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.",
            description: "Description for the full CDP developer mode toggle",
          }}
        />
      }
    </div>
  );
  let basalt =
    !isPending && willow ? (
      <div>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.fullCdp.blockedByPolicy",
              defaultMessage: "Your organization has disabled this setting.",
              description:
                "Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.",
            }}
          />
        }
      </div>
    ) : null;
  let cedar = (
    <div className="flex flex-col gap-1">
      {amber}
      {basalt}
    </div>
  );
  let daisy = quartz.formatMessage({
    id: "settings.browserUse.fullCdp.ariaLabel",
    defaultMessage: "Toggle full CDP access",
    description: "Aria label for toggling full CDP access",
  });
  let ember = xenon || willow || timber.isPending,
    flint = (hazel) => {
      timber.mutate(hazel);
    };
  let garnet = (
    <AppInitialYC
      ariaLabel={daisy}
      checked={yellow}
      disabled={ember}
      onChange={flint}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: zinc,
        description: cedar,
        control: garnet,
      }}
    />
  );
}
var falcon,
  gamma,
  browserUseSettingsY = esmInit(() => {
    falcon = reactCompilerRuntime();
    CollabAgentToolCall();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    AppInitialBC();
    ensureComposerEsm_K1_Init();
    AppInitialSv();
    ensureConfigQueryAtomsInitStub();
    AppInitialKO();
    codexCommandTheme();
    AppIconBO();
    AppInitialVC();
    AppInitialFC();
    ensureAppShellAtomsInit();
  });
function harbor(ivory) {
  let jasper = ["origin", "download", "upload"];
  return (ivory && jasper.push("fullCdp"), jasper);
}
function indigo(kelp, lotus) {
  let mint = new Set();
  for (let nova of lotus) {
    for (let olive of marble(kelp, nova, "allowed")) mint.add(olive);
    for (let prism of marble(kelp, nova, "denied")) mint.add(prism);
  }
  return [...mint]
    .sort((quill, reef) => quill.localeCompare(reef))
    .map((item) => ({
      origin: item,
      values: {
        origin: lemon(kelp, "origin", item),
        download: lemon(kelp, "download", item),
        upload: lemon(kelp, "upload", item),
        fullCdp: lemon(kelp, "fullCdp", item),
      },
    }));
}
function jade(sage, topaz) {
  if (
    topaz.some((item) => item !== "origin" && sage.values[item] !== "default")
  )
    return "custom";
  switch (sage.values.origin) {
    case "allowed":
      return "allowed";
    case "denied":
      return "denied";
    case "default":
      return "custom";
  }
}
function kite({ nextValues, origin, resources, values }) {
  return resources.flatMap((item) => {
    let ultra = values[item],
      vapor = nextValues[item];
    if (vapor === ultra) return [];
    switch (vapor) {
      case "default":
        return [
          {
            action: "remove",
            kind: "allowed",
            origin,
            resource: item,
          },
          {
            action: "remove",
            kind: "denied",
            origin,
            resource: item,
          },
        ];
      case "allowed":
      case "denied":
        return [
          {
            action: "add",
            kind: vapor,
            origin,
            resource: item,
          },
        ];
    }
  });
}
function lemon(wheat, yarn, zephyr) {
  return marble(wheat, yarn, "denied").includes(zephyr)
    ? "denied"
    : marble(wheat, yarn, "allowed").includes(zephyr)
      ? "allowed"
      : "default";
}
function marble(acorn, bloom, coral) {
  switch (bloom) {
    case "origin":
      return coral === "allowed" ? acorn.allowedOrigins : acorn.deniedOrigins;
    case "download":
      return coral === "allowed"
        ? acorn.allowedDownloadOrigins
        : acorn.deniedDownloadOrigins;
    case "upload":
      return coral === "allowed"
        ? acorn.allowedUploadOrigins
        : acorn.deniedUploadOrigins;
    case "fullCdp":
      return coral === "allowed"
        ? acorn.allowedFullCdpOrigins
        : acorn.deniedFullCdpOrigins;
  }
}
var nickel = esmInit(() => {});
function browserUseSettingsG() {
  let { selectedHostId } = useSelectedHost(),
    { data, isError, isLoading } = CodexPluginActionResult(AppInitialOO),
    drift = {
      hostId: selectedHostId,
    };
  let {
      data: _data,
      isError: _isError,
      isPending,
    } = CodexBrowserSurfaceActionType(ensureConfigQueryAtomsInit, drift),
    eagle = data?.fullCdpAccessEnabled === true,
    frost = isError || (eagle && _isError),
    glide = isLoading || (eagle && isPending),
    honey =
      eagle &&
      !_isError &&
      !isPending &&
      !deferredUiD9(
        _data?.requirements?.featureRequirements?.browser_use_full_cdp_access,
      );
  let iris = honey;
  return (
    <$r
      {...{
        originsConfig: data,
        isError: frost,
        isFullCdpAccessEnabled: iris,
        isLoading: glide,
      }}
    />
  );
}
function $r(jewel) {
  let { isError, isFullCdpAccessEnabled, isLoading, originsConfig } = jewel,
    [knoll, lunar] = delta.useState(false),
    [moss, north] = delta.useState(),
    orbit,
    pine;
  pine = harbor(isFullCdpAccessEnabled);
  orbit = originsConfig == null ? null : indigo(originsConfig, pine);
  let quest = orbit,
    ridge = isError || quest == null,
    storm,
    tide,
    unity;
  storm = () => {
    lunar(true);
  };
  tide = (
    <EnsureComposerEsm_Wlt_Init
      {...{
        className: "icon-xs",
      }}
    />
  );
  unity = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.domains.add",
        defaultMessage: "Add",
        description: "Button label to add a browser use domain",
      }}
    />
  );
  let vale = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        disabled: ridge,
        size: "toolbar",
        onClick: storm,
        children: [tide, unity],
      }}
    />
  );
  let wave, apex;
  wave = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.sitePermissions.title",
        defaultMessage: "Site permissions",
        description: "Title for browser use site permissions table",
      }}
    />
  );
  apex = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.sitePermissions.subtitle",
        defaultMessage: "Override the defaults above for specific sites",
        description: "Subtitle for browser use site permissions table",
      }}
    />
  );
  let brook = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        actions: vale,
        title: wave,
        subtitle: apex,
      }}
    />
  );
  let cliff = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        children: (
          <ParseUrlOrFallback
            {...{
              children: isError ? (
                <div className="p-4 text-sm text-token-text-secondary">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.browserUse.sitePermissions.loadError",
                        defaultMessage: "Unable to load site permissions",
                        description:
                          "Message shown when browser site permissions fail to load",
                      }}
                    />
                  }
                </div>
              ) : isLoading || quest == null ? (
                <SettingsLoadingRow
                  {...{
                    children: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.browserUse.sitePermissions.loading",
                          defaultMessage: "Loading websites…",
                          description:
                            "Message shown while loading browser site permissions",
                        }}
                      />
                    ),
                  }}
                />
              ) : quest.length === 0 ? (
                <EnsurePersonalizationCInit
                  {...{
                    className: "justify-center",
                    label: (
                      <span className="text-token-text-secondary">
                        {
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.browserUse.sitePermissions.empty",
                              defaultMessage:
                                "No site-specific permissions yet",
                              description:
                                "Empty state for browser use site permissions table",
                            }}
                          />
                        }
                      </span>
                    ),
                    control: null,
                  }}
                />
              ) : (
                <Bravo
                  {...{
                    rows: quest,
                    onCustomize: north,
                    visibleResources: pine,
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
  let dusk =
    !isError && !isLoading && quest != null && quest.length > 0 ? (
      <UseChromeAndCodeThemeSync.Footer
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.browserUse.sitePermissions.defaultNote",
                defaultMessage:
                  "Only sites with custom permissions appear here",
                description:
                  "Footer note for browser use site permissions list",
              }}
            />
          ),
        }}
      />
    ) : null;
  let elm = (
    <Copper
      {...{
        open: knoll,
        visibleResources: pine,
        onOpenChange: lunar,
      }}
    />
  );
  let fern =
    moss == null ? null : (
      <Delta
        {...{
          row: moss,
          visibleResources: pine,
          onOpenChange: (grove) => {
            grove || north(undefined);
          },
        }}
      />
    );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [brook, cliff, dusk, elm, fern],
      }}
    />
  );
}
