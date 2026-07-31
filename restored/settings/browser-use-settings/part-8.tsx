// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/13
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
} from "../../runtime/app-scope-runtime";
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
function BrowserUseSettingsU(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function CoerceLocalFilesystemPath(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function OpenInBrowser(
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

// Wave5d soft stubs.
const AppInitialAw: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialDO: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialKr: any = undefined;
const AppInitialKz: any = undefined;
const AppInitialLz: any = undefined;
const AppInitialNht: any = undefined;
const AppInitialQK: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialYC: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const PersonGlyph: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const browserUseSettingsU: any = undefined;
const copper: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function delta(harbor) {
  let {
      installButtonLabel,
      isPending,
      item,
      onInstallPlugin,
      onOpenPluginDetails,
      onToggleInstalledPluginEnabled,
      onUninstallPlugin,
    } = harbor,
    indigo = useIntl(),
    jade,
    kite,
    lemon,
    marble,
    nickel;
  {
    let pearl =
        item.displayName ?? usePointerSurfaceInteractionGate(item.plugin),
      quartz = item.plugin.plugin.installed;
    marble =
      "group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-token-foreground/5 max-sm:flex-wrap";
    let river = () => {
      onOpenPluginDetails(item.plugin);
    };
    let slate =
        item.showIconBorder === false
          ? "border-0"
          : "border border-token-border-default",
      timber = IntlProvider(
        "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent",
        slate,
      );
    let umbra = item.icon ?? (
        <AppIconKG
          {...{
            alt: pearl,
            className: "h-full w-full object-contain",
            logoDarkUrl: item.plugin.logoDarkPath,
            logoUrl: item.plugin.logoPath,
            fallback: (
              <AppIconLV
                {...{
                  className: "icon-md text-token-text-secondary",
                }}
              />
            ),
          }}
        />
      ),
      violet = <span className={timber}>{umbra}</span>;
    let willow = (
      <div className="truncate font-medium text-token-foreground">
        {item.title}
      </div>
    );
    let xenon =
      item.description == null ? null : (
        <div className="min-w-0 truncate text-sm leading-relaxed text-token-text-secondary">
          {item.descriptionIndicator == null ? (
            item.description
          ) : (
            <span className="inline-flex max-w-full items-center gap-2">
              <span
                className={IntlProvider(
                  "h-2 w-2 shrink-0 rounded-full",
                  item.descriptionIndicator === "success"
                    ? "bg-[var(--color-icon-success)]"
                    : "bg-[var(--color-icon-error)]",
                )}
              />
              <span className="min-w-0 truncate">{item.description}</span>
            </span>
          )}
        </div>
      );
    let yellow;
    yellow = (
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {willow}
        {xenon}
      </div>
    );
    nickel = (
      <button
        className="flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-left text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
        type="button"
        onClick={river}
      >
        {violet}
        {yellow}
      </button>
    );
    jade = "flex shrink-0 items-center gap-2";
    kite = item.action;
    lemon = quartz ? (
      <>
        {item.showManageActions === true ? (
          <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            {
              <DropdownMenuPopover
                {...{
                  align: "end",
                  contentWidth: "sm",
                  triggerButton: (
                    <CoerceLocalFilesystemPath
                      {...{
                        label: indigo.formatMessage({
                          id: "settings.pluginControls.moreActions",
                          defaultMessage: "More actions",
                          description:
                            "Aria label for the more actions menu in settings plugin controls",
                        }),
                      }}
                    />
                  ),
                  children: [
                    item.onTryInChat == null ? null : (
                      <DropdownMenu.Item
                        {...{
                          LeftIcon: AppIconDG,
                          leftIconClassName: "icon-xs",
                          onSelect: () => {
                            item.onTryInChat?.(item.plugin);
                          },
                          children: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.pluginControls.tryItNow",
                                defaultMessage: "Try now",
                                description:
                                  "Menu item label for trying a plugin in task from settings",
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                    <DropdownMenu.Item
                      {...{
                        LeftIcon: AppIconBO,
                        className: "!text-token-error-foreground",
                        leftIconClassName:
                          "icon-xs text-token-error-foreground",
                        disabled: isPending,
                        onSelect: () => {
                          onUninstallPlugin(item.plugin);
                        },
                        children: (
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.pluginControls.delete",
                              defaultMessage: "Delete",
                              description:
                                "Menu item label for deleting a plugin from settings",
                            }}
                          />
                        ),
                      }}
                    />,
                  ],
                }}
              />
            }
          </div>
        ) : null}
        {
          <OptionalTooltip
            {...{
              tooltipContent: item.plugin.plugin.enabled ? (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.pluginControls.disableToggleTooltip",
                    defaultMessage: "Disable {pluginName}",
                    description:
                      "Tooltip label for disabling a plugin from settings",
                    values: {
                      pluginName: pearl,
                    },
                  }}
                />
              ) : (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.pluginControls.enableToggleTooltip",
                    defaultMessage: "Enable {pluginName}",
                    description:
                      "Tooltip label for enabling a plugin from settings",
                    values: {
                      pluginName: pearl,
                    },
                  }}
                />
              ),
              children: (
                <AppInitialYC
                  checked={item.plugin.plugin.enabled}
                  disabled={isPending}
                  ariaLabel={indigo.formatMessage(
                    {
                      id: "settings.pluginControls.toggleAria",
                      defaultMessage: "Toggle {pluginName}",
                      description:
                        "Accessible label for toggling a plugin from settings",
                    },
                    {
                      pluginName: pearl,
                    },
                  )}
                  onChange={(zinc) => {
                    onToggleInstalledPluginEnabled(item.plugin, zinc);
                  }}
                />
              ),
            }}
          />
        }
      </>
    ) : (
      <OptionalTooltip
        {...{
          tooltipContent: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.pluginControls.installTooltip",
                defaultMessage: "Install {pluginName}",
                description:
                  "Tooltip label for installing a plugin from settings",
                values: {
                  pluginName: pearl,
                },
              }}
            />
          ),
          children: (
            <div>
              {
                <ReadLoginRouteQuerySnapshot
                  {...{
                    "aria-label": indigo.formatMessage(
                      {
                        id: "settings.pluginControls.installTooltip",
                        defaultMessage: "Install {pluginName}",
                        description:
                          "Tooltip label for installing a plugin from settings",
                      },
                      {
                        pluginName: pearl,
                      },
                    ),
                    color: "secondary",
                    disabled: isPending,
                    loading: isPending,
                    onClick: () => {
                      onInstallPlugin(item.plugin);
                    },
                    size: "toolbar",
                    children: installButtonLabel,
                  }}
                />
              }
            </div>
          ),
        }}
      />
    );
  }
  let onyx = (
    <div className={jade}>
      {kite}
      {lemon}
    </div>
  );
  return (
    <div className={marble}>
      {nickel}
      {onyx}
    </div>
  );
}
var echo,
  falcon,
  browserUseSettingsH = esmInit(() => {
    echo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_AG_Init();
    ensureDropdownMenuInit();
    AppInitialUj();
    ensurePinnedConversationsQueryInit();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_RV_Init();
    PersonGlyph();
    AppInitialVO();
    CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
    AppInitialQK();
    AppInitialKz();
    AppInitialLz();
    ensureInstalledPluginsQueryInit();
    initSettingsLoadingRow();
    AppInitialVC();
    AppInitialFC();
  });
function browserUseSettingsP(amber, basalt, cedar) {
  let daisy = amber.filter(
      (item) =>
        item.plugin.name === basalt || item.plugin.id.split("@")[0] === basalt,
    ),
    ember = AppInitialNht(isBusinessPlan());
  return (
    (ember == null
      ? undefined
      : daisy.find((item) => item.marketplaceName === ember)) ??
    daisy.find((item) => isOpenaiBundledId(item.marketplaceName)) ??
    daisy.find((item) => item.marketplaceName === "openai-curated") ??
    daisy.find((item) => AppInitialAw(cedar, item.marketplacePath)) ??
    null
  );
}
var browserUseSettingsF = esmInit(() => {
  strongMarkerFromOptions();
  codexMicroHasEverBeenDetected();
  ensureDebugPanelTurnFilesInit();
});
export function browserUseSettingsL() {
  let flint = CodexPluginActionType(ensureComposerEsm_S8_Init),
    garnet = CodexPluginActionResult(copper),
    hazel = alpha(),
    { selectedHostId } = useSelectedHost(),
    ivory = {
      hostId: selectedHostId,
    };
  let jasper = AppInitialDO(ivory),
    kelp = {
      hostId: selectedHostId,
    };
  let lotus = useExternalBrowserUseGate(kelp),
    mint = NativeContextMenuSurface("1834314516");
  if (hazel != null) {
    if (hazel === "downloads" && !mint) {
      let topaz;
      return (
        <Navigate
          {...{
            to: "/settings/browser-use",
            replace: true,
          }}
        />
      );
    }
    let quill = jasper[hazel],
      reef = quill.isLoading && garnet === hazel;
    if (!quill.enabled && !reef) {
      if (quill.isLoading) {
        let vapor;
        return <AppInitialKr section="browser-use" />;
      }
      let ultra;
      return (
        <Navigate
          {...{
            to: "/settings/browser-use",
            replace: true,
          }}
        />
      );
    }
    garnet !== hazel && flint.set(copper, hazel);
    let sage;
    return bravo(hazel);
  }
  garnet != null && flint.set(copper, null);
  let nova = <SettingsSectionTitle slug="browser-use" />;
  let olive = lotus.available ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.subtitle",
        defaultMessage:
          "Manage the built-in browser. Google Chrome can be set up in <computerUseSettingsLink>computer use settings</computerUseSettingsLink>",
        description: "Subtitle for in-app browser settings",
        values: {
          computerUseSettingsLink: gamma,
        },
      }}
    />
  ) : undefined;
  let prism = <BrowserUseSettingsU {...{}} />;
  return (
    <OpenInBrowser
      {...{
        title: nova,
        subtitle: olive,
        children: prism,
      }}
    />
  );
}
function gamma(wheat) {
  return (
    <Link
      className="text-token-text-link-foreground hover:underline"
      to="/settings/computer-use"
    >
      {wheat}
    </Link>
  );
}
