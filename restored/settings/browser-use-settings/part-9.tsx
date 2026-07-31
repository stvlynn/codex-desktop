// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 9/13
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
function Bravo(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsA(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsG(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsI(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsN(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsO(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsR(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsS(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsT(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function BrowserUseSettingsV(
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
function Echo(
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
function Falcon(
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
const $i: any = undefined;
const AppInitialDO: any = undefined;
const AppInitialFpt: any = undefined;
const AppInitialHt: any = undefined;
const AppInitialYC: any = undefined;
const NativeContextMenuSurface: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const browserUseSettingsG: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const browserUseSettingsI: any = undefined;
const browserUseSettingsN: any = undefined;
const browserUseSettingsO: any = undefined;
const browserUseSettingsP: any = undefined;
const browserUseSettingsR: any = undefined;
const browserUseSettingsS: any = undefined;
const browserUseSettingsT: any = undefined;
const browserUseSettingsV: any = undefined;
const gamma: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setSettingValue: any = undefined;
const useHostFeatureGate: any = undefined;
function browserUseSettingsU() {
  let { selectedHostId } = useSelectedHost(),
    indigo = [];
  let jade = matchesOptionalHostPluginIds(selectedHostId, indigo),
    kite = useHomeDirectory(selectedHostId),
    lemon = browserUseSettingsP(
      jade.availablePlugins,
      BROWSER_SURFACE_ID,
      kite,
    );
  let marble = lemon,
    nickel = marble == null ? [] : [marble];
  let onyx = nickel,
    pearl = {
      featureName: "in_app_browser",
      hostId: selectedHostId,
    };
  let quartz = useHostFeatureGate(pearl),
    river = {
      hostId: selectedHostId,
    };
  let slate = AppInitialDO(river),
    timber = {
      hostId: selectedHostId,
    };
  let umbra = useBrowserUseGate(timber),
    violet = {
      hostId: selectedHostId,
    };
  let willow = useExternalBrowserUseGate(violet),
    xenon = NativeContextMenuSurface("1834314516"),
    yellow = quartz.enabled && !quartz.isLoading,
    zinc = slate.passwordManager.enabled,
    amber = slate.contactInfo.enabled,
    basalt = zinc || amber,
    cedar = slate.siteSettings.enabled,
    daisy = slate.extensions.enabled,
    ember = umbra.available || willow.available,
    flint = cedar || ember,
    garnet =
      marble == null && falcon(umbra)
        ? [
            {
              description: (
                <MemoizedFormattedMessage
                  {...{
                    ...areTurnsRelated.restrictedAvailabilityDescription,
                  }}
                />
              ),
              icon: (
                <RealtimeVoiceHostId
                  {...{
                    className: "h-full w-full text-token-foreground",
                  }}
                />
              ),
              id: "browser-use-unavailable",
              title: (
                <MemoizedFormattedMessage
                  {...{
                    ...areTurnsRelated.label,
                  }}
                />
              ),
            },
          ]
        : [];
  let hazel = garnet,
    ivory = (
      <UseChromeAndCodeThemeSync
        {...{
          children: (
            <UseChromeAndCodeThemeSync.Content
              {...{
                children: (
                  <$i
                    {...{
                      browserUsePlugins: onyx,
                      pluginsQuery: jade,
                      selectedHostId,
                      unavailableBrowserUsePlugins: hazel,
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
  let jasper = yellow ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              actions: <Alpha {...{}} />,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.general.title",
                    defaultMessage: "General",
                    description:
                      "Title for general in-app browser settings section",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [
                      xenon ? (
                        <ElectronOnly
                          {...{
                            electron: true,
                            children: <Bravo {...{}} />,
                          }}
                        />
                      ) : null,
                      <Copper {...{}} />,
                      <BrowserUseSettingsT
                        {...{
                          includeHistory: slate.history.enabled,
                        }}
                      />,
                      slate.history.enabled ? (
                        <BrowserUseSettingsI {...{}} />
                      ) : null,
                      <Delta {...{}} />,
                    ],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  let kelp = basalt ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.autofillAndPasswords.title",
                    defaultMessage: "Autofill and passwords",
                    description:
                      "Title for browser autofill and password settings section",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [
                      zinc ? <BrowserUseSettingsA {...{}} /> : null,
                      amber ? <BrowserUseSettingsN {...{}} /> : null,
                    ],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  let lotus = daisy ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.extensions.title",
                    defaultMessage: "Extensions",
                    description: "Title for browser extension settings section",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: <BrowserUseSettingsR {...{}} />,
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  let mint =
    !xenon || !slate.downloads.enabled ? null : (
      <ElectronOnly
        {...{
          electron: true,
          children: <Echo {...{}} />,
        }}
      />
    );
  let nova = flint ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.permissions.title",
                    defaultMessage: "Permissions",
                    description:
                      "Title for browser use permissions settings section",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [
                      cedar ? <BrowserUseSettingsO {...{}} /> : null,
                      ember ? <BrowserUseSettingsS {...{}} /> : null,
                    ],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  let olive = ember ? (
    <>
      {<BrowserUseSettingsG {...{}} />}
      {<BrowserUseSettingsV {...{}} />}
    </>
  ) : null;
  return (
    <>
      {ivory}
      {jasper}
      {kelp}
      {lotus}
      {mint}
      {nova}
      {olive}
    </>
  );
}
function harbor() {
  let prism = CodexPluginActionType(appScopeAtom),
    quill = useIntl(),
    reef = useNavigate(),
    [sage, topaz] = gamma.useState(false),
    ultra = appServices?.downloads,
    vapor = useSettingValue(AppInitialFpt.downloadDirectory),
    wheat = useSettingValue(AppInitialFpt.promptForDownloadLocation);
  if (ultra == null) return null;
  let yarn = async () => {
    topaz(true);
    try {
      let zephyr = await ultra.chooseDownloadDirectory();
      zephyr != null &&
        (await setSettingValue(prism, AppInitialFpt.downloadDirectory, zephyr));
    } catch {
      prism.get(toastAtom).danger(
        quill.formatMessage({
          id: "settings.browserUse.downloads.location.changeError",
          defaultMessage: "Unable to change the downloads folder",
          description:
            "Error shown when selecting a browser downloads folder fails",
        }),
      );
    } finally {
      topaz(false);
    }
  };
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.browserUse.downloads.title",
                    defaultMessage: "Downloads",
                    description: "Title for browser download settings section",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.downloads.location.label",
                                defaultMessage: "Location",
                                description:
                                  "Label for the browser download location setting",
                              }}
                            />
                          ),
                          description:
                            vapor == null ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.browserUse.downloads.location.system",
                                  defaultMessage: "System Downloads folder",
                                  description:
                                    "Description for the default browser download location",
                                }}
                              />
                            ) : (
                              <span className="font-mono text-xs [text-wrap:wrap] break-all">
                                {vapor}
                              </span>
                            ),
                          control: (
                            <div className="flex items-center gap-1">
                              {
                                <ReadLoginRouteQuerySnapshot
                                  {...{
                                    type: "button",
                                    color: "secondary",
                                    size: "toolbar",
                                    loading: sage,
                                    onClick: () => {
                                      yarn();
                                    },
                                    children: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "settings.browserUse.downloads.location.change",
                                          defaultMessage: "Change",
                                          description:
                                            "Button that changes the browser download location",
                                        }}
                                      />
                                    ),
                                  }}
                                />
                              }
                              {vapor == null ? null : (
                                <ReadLoginRouteQuerySnapshot
                                  {...{
                                    type: "button",
                                    color: "ghost",
                                    size: "toolbar",
                                    onClick: () => {
                                      setSettingValue(
                                        prism,
                                        AppInitialFpt.downloadDirectory,
                                        null,
                                      );
                                    },
                                    children: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "settings.browserUse.downloads.location.reset",
                                          defaultMessage: "Reset",
                                          description:
                                            "Button that resets the browser download location",
                                        }}
                                      />
                                    ),
                                  }}
                                />
                              )}
                            </div>
                          ),
                        }}
                      />,
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.downloads.prompt.label",
                                defaultMessage: "Ask where to save downloads",
                                description:
                                  "Label for the manual browser download prompt setting",
                              }}
                            />
                          ),
                          description: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.downloads.prompt.description",
                                defaultMessage:
                                  "Show a save dialog for downloads you start in the built-in browser",
                                description:
                                  "Description for the manual browser download prompt setting",
                              }}
                            />
                          ),
                          control: (
                            <AppInitialYC
                              aria-label={quill.formatMessage({
                                id: "settings.browserUse.downloads.prompt.label",
                                defaultMessage: "Ask where to save downloads",
                                description:
                                  "Label for the manual browser download prompt setting",
                              })}
                              checked={wheat}
                              onChange={(acorn) => {
                                setSettingValue(
                                  prism,
                                  AppInitialFpt.promptForDownloadLocation,
                                  acorn,
                                );
                              }}
                            />
                          ),
                        }}
                      />,
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.downloads.history.label",
                                defaultMessage: "Download history",
                                description:
                                  "Label for the browser download history setting",
                              }}
                            />
                          ),
                          description: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.downloads.history.description",
                                defaultMessage:
                                  "View and manage files downloaded from the built-in browser",
                                description:
                                  "Description for the browser download history setting",
                              }}
                            />
                          ),
                          control: (
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                "aria-label": quill.formatMessage({
                                  id: "settings.browserUse.downloads.history.manageAriaLabel",
                                  defaultMessage: "Manage download history",
                                  description:
                                    "Accessible label for the button that shows browser download history",
                                }),
                                type: "button",
                                color: "secondary",
                                size: "toolbar",
                                onClick: () => {
                                  logProductEvent(
                                    prism,
                                    CodexBrowserSurfaceActionAnalyticsType,
                                    {
                                      action:
                                        CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_DOWNLOADS_SELECTED,
                                      surface:
                                        CodexBrowserSurface.CODEX_BROWSER_SURFACE_BROWSER_SETTINGS_PAGE,
                                    },
                                  );
                                  reef(
                                    SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH,
                                  );
                                },
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.browserUse.downloads.history.manage",
                                      defaultMessage: "Manage",
                                      description:
                                        "Button that shows the browser download history",
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
          />,
        ],
      }}
    />
  );
}
function browserUseSettingsA() {
  return (
    <Falcon
      {...{
        action:
          CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_PASSWORD_MANAGER_SELECTED,
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.passwordManager.description",
              defaultMessage: "Add, delete, and edit saved passwords",
              description:
                "Description for browser password manager settings row",
            }}
          />
        ),
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.passwordManager.label",
              defaultMessage: "Password manager",
              description: "Label for browser password manager settings row",
            }}
          />
        ),
        path: AppInitialHt,
      }}
    />
  );
}
