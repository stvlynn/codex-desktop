// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 11/13
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
function Alpha(
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
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialAO: any = undefined;
const IntlProvider: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function browserUseSettingsT({ includeHistory }) {
  let jade = CodexPluginActionType(appScopeAtom),
    [kite, lemon] = alpha.useState(false),
    [marble, nickel] = alpha.useState(null),
    onyx = AppInitialAO(),
    pearl = onyx.isPending,
    quartz = includeHistory ? delta : copper,
    river = async (slate, timber) => {
      if (!pearl) {
        nickel(slate);
        try {
          await onyx.mutateAsync(timber);
          jade.get(toastAtom).success(harbor(slate));
        } catch {
          jade.get(toastAtom).danger(indigo(slate));
        } finally {
          nickel(null);
        }
      }
    };
  return (
    <SettingsRowDisclosure
      {...{
        content: quartz.map((item) => (
          <Alpha
            key={item}
            {...{
              dataType: item,
              disabled: pearl && marble !== item,
              loading: marble === item,
              onClear: (umbra) => {
                river(umbra, [umbra]);
              },
            }}
          />
        )),
        contentId: bravo,
        expanded: kite,
        children: (
          <EnsurePersonalizationCInit
            {...{
              className: "gap-3 max-sm:flex-col max-sm:items-stretch",
              label: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.browser.clearBrowsingData.label",
                    defaultMessage: "Browsing data",
                    description: "Label for clearing all browser browsing data",
                  }}
                />
              ),
              description: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.browser.clearBrowsingData.description",
                    defaultMessage:
                      "Clear browsing history, site data, cache, and download history from the in-app browser",
                    description:
                      "Description for clearing all browser browsing data",
                  }}
                />
              ),
              control: (
                <div className="flex items-center gap-1.5">
                  {
                    <ReadLoginRouteQuerySnapshot
                      {...{
                        color: "secondary",
                        disabled: pearl && marble !== "all",
                        loading: marble === "all",
                        onClick: () => {
                          river("all", delta);
                        },
                        size: "toolbar",
                        children: (
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.browserUse.browser.clearBrowsingData",
                              defaultMessage: "Clear all browsing data",
                              description:
                                "Button label to clear all browser browsing data",
                            }}
                          />
                        ),
                      }}
                    />
                  }
                  {
                    <ReadLoginRouteQuerySnapshot
                      {...{
                        "aria-controls": bravo,
                        "aria-expanded": kite,
                        color: "ghost",
                        disabled: pearl,
                        onClick: () => {
                          lemon(!kite);
                        },
                        size: "icon",
                        children: [
                          <span className="sr-only">
                            {kite ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.browserUse.browser.hideClearOptions",
                                  defaultMessage:
                                    "Hide individual browsing data options",
                                  description:
                                    "Accessible label for hiding individual browser data clearing options",
                                }}
                              />
                            ) : (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.browserUse.browser.showClearOptions",
                                  defaultMessage:
                                    "Show individual browsing data options",
                                  description:
                                    "Accessible label for showing individual browser data clearing options",
                                }}
                              />
                            )}
                          </span>,
                          <AppIconSft
                            {...{
                              className: IntlProvider(
                                "icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform",
                                kite && "rotate-180",
                              ),
                            }}
                          />,
                        ],
                      }}
                    />
                  }
                </div>
              ),
            }}
          />
        ),
      }}
    />
  );
}
function echo(violet) {
  let { disabled, loading, onClear, dataType } = violet,
    willow = falcon(dataType);
  let xenon = (
    <div className="min-w-0 text-sm text-token-text-secondary">{willow}</div>
  );
  let yellow = () => {
    onClear(dataType);
  };
  let zinc = gamma(dataType);
  let amber = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className:
          "max-w-full justify-self-end text-left whitespace-normal max-md:-ml-2 max-md:justify-self-start",
        color: "ghost",
        disabled,
        loading,
        onClick: yellow,
        size: "toolbar",
        children: zinc,
      }}
    />
  );
  return (
    <div className="grid min-h-10 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-0.5 max-md:grid-cols-1 max-md:items-start max-md:gap-1 max-md:py-2">
      {xenon}
      {amber}
    </div>
  );
}
function falcon(basalt) {
  switch (basalt) {
    case "cookies":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.cookies.label",
            defaultMessage: "Cookies",
            description: "Label for browser cookies setting",
          }}
        />
      );
    case "siteData":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.siteData.label",
            defaultMessage: "Site data",
            description: "Label for browser site data setting",
          }}
        />
      );
    case "cache":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.cache.label",
            defaultMessage: "Cached images and files",
            description: "Label for browser cached images and files setting",
          }}
        />
      );
    case "downloads":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.downloads.label",
            defaultMessage: "Download history",
            description: "Label for browser download history setting",
          }}
        />
      );
    case "history":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.history.label",
            defaultMessage: "Browsing history",
            description: "Label for browser browsing history setting",
          }}
        />
      );
  }
}
function gamma(cedar) {
  switch (cedar) {
    case "cookies":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearCookies",
            defaultMessage: "Delete cookies",
            description: "Button label to delete browser cookies",
          }}
        />
      );
    case "siteData":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearSiteData",
            defaultMessage: "Delete site data",
            description: "Button label to delete browser site data",
          }}
        />
      );
    case "cache":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearCache",
            defaultMessage: "Delete cached images and files",
            description:
              "Button label to delete browser cached images and files",
          }}
        />
      );
    case "downloads":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearDownloads",
            defaultMessage: "Delete download history",
            description: "Button label to delete browser download history",
          }}
        />
      );
    case "history":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearHistory",
            defaultMessage: "Delete browsing history",
            description: "Button label to delete browser browsing history",
          }}
        />
      );
  }
}
function harbor(daisy) {
  switch (daisy) {
    case "all":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.browsingDataCleared",
            defaultMessage: "Browsing data cleared",
            description: "Toast shown after clearing all browser browsing data",
          }}
        />
      );
    case "cookies":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.cookiesCleared",
            defaultMessage: "Browser cookies cleared",
            description: "Toast shown after clearing browser cookies",
          }}
        />
      );
    case "siteData":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.siteDataCleared",
            defaultMessage: "Browser site data cleared",
            description: "Toast shown after clearing browser site data",
          }}
        />
      );
    case "cache":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.cacheCleared",
            defaultMessage: "Browser cache cleared",
            description:
              "Toast shown after clearing browser cached images and files",
          }}
        />
      );
    case "downloads":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.downloadsCleared",
            defaultMessage: "Browser download history cleared",
            description: "Toast shown after clearing browser download history",
          }}
        />
      );
    case "history":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.historyCleared",
            defaultMessage: "Browser history cleared",
            description: "Toast shown after clearing browser browsing history",
          }}
        />
      );
  }
}
function indigo(ember) {
  switch (ember) {
    case "all":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearBrowsingDataError",
            defaultMessage: "Unable to clear browsing data",
            description:
              "Toast shown when clearing all browser browsing data fails",
          }}
        />
      );
    case "cookies":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearCookiesError",
            defaultMessage: "Unable to clear browser cookies",
            description: "Toast shown when clearing browser cookies fails",
          }}
        />
      );
    case "siteData":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearSiteDataError",
            defaultMessage: "Unable to clear browser site data",
            description: "Toast shown when clearing browser site data fails",
          }}
        />
      );
    case "cache":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearCacheError",
            defaultMessage: "Unable to clear browser cache",
            description:
              "Toast shown when clearing browser cached images and files fails",
          }}
        />
      );
    case "downloads":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearDownloadsError",
            defaultMessage: "Unable to clear browser download history",
            description:
              "Toast shown when clearing browser download history fails",
          }}
        />
      );
    case "history":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.clearHistoryError",
            defaultMessage: "Unable to clear browser history",
            description:
              "Toast shown when clearing browser browsing history fails",
          }}
        />
      );
  }
}
