// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/13
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
function Or(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
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
function Gamma(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Harbor(
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
const AppInitialFpt: any = undefined;
const AppInitialHt: any = undefined;
const AppInitialKpt: any = undefined;
const Sites: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const ensureOpenLinkPreferenceAnalyticsInit: any = undefined;
const or: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setSettingValue: any = undefined;
const useResolvedOpenLinkTarget: any = undefined;
function browserUseSettingsN() {
  return (
    <Alpha
      {...{
        action:
          CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_CONTACT_INFO_SELECTED,
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.contactInfo.description",
              defaultMessage:
                "Add, delete, and edit saved addresses, phone numbers, and email addresses",
              description: "Description for browser contact info settings row",
            }}
          />
        ),
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.contactInfo.label",
              defaultMessage: "Contact info",
              description: "Label for browser contact info settings row",
            }}
          />
        ),
        path: BROWSER_SURFACE_ID,
      }}
    />
  );
}
function browserUseSettingsR() {
  return (
    <Alpha
      {...{
        action:
          CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_EXTENSIONS_SELECTED,
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.extensions.description",
              defaultMessage:
                "Install, remove, and configure browser extensions",
              description: "Description for browser extension settings row",
            }}
          />
        ),
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.extensions.label",
              defaultMessage: "Extension manager",
              description: "Label for browser extension settings row",
            }}
          />
        ),
        path: isWinDrivePath,
      }}
    />
  );
}
function browserUseSettingsI() {
  return (
    <Alpha
      {...{
        action:
          CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_HISTORY_SELECTED,
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.history.description",
              defaultMessage:
                "View and manage pages visited in the built-in browser",
              description: "Description for browser history settings row",
            }}
          />
        ),
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.history.label",
              defaultMessage: "Browsing history",
              description: "Label for browser history settings row",
            }}
          />
        ),
        path: Sites,
      }}
    />
  );
}
function browserUseSettingsO() {
  return (
    <Alpha
      {...{
        action:
          CodexBrowserSurfaceActionTypeAlias.CODEX_BROWSER_SURFACE_ACTION_TYPE_SITE_SETTINGS_SELECTED,
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.siteSettings.description",
              defaultMessage:
                "Control camera and microphone permissions in the built-in browser",
              description: "Description for browser site settings row",
            }}
          />
        ),
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.siteSettings.label",
              defaultMessage: "Site settings",
              description: "Label for browser site settings row",
            }}
          />
        ),
        path: AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT,
      }}
    />
  );
}
function gamma(onyx) {
  let { action, description, label, path } = onyx,
    pearl = CodexPluginActionType(appScopeAtom),
    quartz = useNavigate(),
    river = () => {
      logProductEvent(pearl, CodexBrowserSurfaceActionAnalyticsType, {
        action,
        surface:
          CodexBrowserSurface.CODEX_BROWSER_SURFACE_BROWSER_SETTINGS_PAGE,
      });
      quartz(path);
    };
  let slate = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.browserSettings.manage",
        defaultMessage: "Manage",
        description: "Button label for browser settings row",
      }}
    />
  );
  let timber = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        onClick: river,
        size: "toolbar",
        children: slate,
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label,
        description,
        control: timber,
      }}
    />
  );
}
function harbor() {
  let umbra = useMatch(SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH) != null,
    violet = useMatch(isWinDrivePath) != null,
    willow = useMatch(Sites) != null,
    xenon = useMatch(BROWSER_SURFACE_ID) != null,
    yellow = useMatch(AppInitialHt) != null,
    zinc = useMatch(AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT) != null,
    amber = useMatch(SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH) != null;
  return xenon
    ? "contactInfo"
    : umbra
      ? "downloads"
      : violet
        ? "extensions"
        : willow
          ? "history"
          : yellow
            ? "passwordManager"
            : zinc || amber
              ? "siteSettings"
              : null;
}
function indigo(basalt) {
  switch (basalt) {
    case "contactInfo":
      return <Bravo {...{}} />;
    case "downloads":
      return <Copper {...{}} />;
    case "extensions":
      return <Delta {...{}} />;
    case "history":
      return <Echo {...{}} />;
    case "passwordManager":
      return <Or {...{}} />;
    case "siteSettings":
      return <Falcon {...{}} />;
  }
}
function jade() {
  let cedar = CodexPluginActionType(appScopeAtom),
    daisy = useSettingValue(AppInitialFpt.annotationScreenshotsMode),
    ember = {
      id: "always",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.annotationScreenshots.always.label",
            defaultMessage: "Always include",
            description:
              "Label for always including browser annotation screenshots",
          }}
        />
      ),
    };
  let flint = [
    ember,
    {
      id: "necessary",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browser.annotationScreenshots.necessary.label",
            defaultMessage: "Only on drag selection",
            description:
              "Label for including browser annotation screenshots only for drag-selected regions",
          }}
        />
      ),
    },
  ];
  let garnet = flint,
    hazel = garnet.find((item) => item.id === daisy) ?? garnet[0];
  let ivory = hazel,
    jasper,
    kelp;
  jasper = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.browser.annotationScreenshots.label",
        defaultMessage: "Annotation screenshots",
        description: "Label for browser annotation screenshots setting",
      }}
    />
  );
  kelp = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.browser.annotationScreenshots.description",
        defaultMessage:
          "Screenshots help ChatGPT better understand and address comments, but increase plan usage",
        description: "Description for browser annotation screenshots setting",
      }}
    />
  );
  let lotus = (
    <DropdownTriggerButton className="w-[168px]">
      <span className="truncate">{ivory.label}</span>
    </DropdownTriggerButton>
  );
  let mint = (
    <div className="flex flex-col">
      {garnet.map((item) => {
        let nova = item.id === daisy;
        return (
          <DropdownMenu.Item
            key={item.id}
            {...{
              allowWrap: true,
              RightIcon: nova ? AppIconZlt : undefined,
              onSelect: () => {
                setSettingValue(
                  cedar,
                  AppInitialFpt.annotationScreenshotsMode,
                  item.id,
                );
              },
              children: <span className="truncate">{item.label}</span>,
            }}
          />
        );
      })}
    </div>
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: jasper,
        description: kelp,
        control: (
          <DropdownMenuPopover
            {...{
              contentWidth: "menuWide",
              align: "end",
              triggerButton: lotus,
              children: mint,
            }}
          />
        ),
      }}
    />
  );
}
function kite() {
  let olive = CodexPluginActionType(appScopeAtom),
    prism = useResolvedOpenLinkTarget(),
    quill,
    reef;
  quill = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.openLinkInTargetPreference.label",
        defaultMessage: "Web URL and link open destination",
        description: "Label for default web link open target setting",
      }}
    />
  );
  reef = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.openLinkInTargetPreference.description",
        defaultMessage: "Where links open by default",
        description: "Description for default web link open target setting",
      }}
    />
  );
  let sage = (
    <DropdownTriggerButton>
      {
        <Gamma
          {...{
            target: prism,
          }}
        />
      }
    </DropdownTriggerButton>
  );
  let topaz = falcon.map((item) => (
    <DropdownMenu.Item
      key={item}
      {...{
        onSelect: () => {
          prism !== item &&
            (setSettingValue(
              olive,
              AppInitialKpt.openLinkInTargetPreference,
              item,
            ),
            logProductEvent(olive, ensureOpenLinkPreferenceAnalyticsInit, {
              setting: "web_url",
              previousDestination: prism,
              selectedDestination: item,
            }));
        },
        RightIcon: prism === item ? AppIconZlt : undefined,
        children: (
          <span className="text-sm">
            {
              <Gamma
                {...{
                  target: item,
                }}
              />
            }
          </span>
        ),
      }}
    />
  ));
  return (
    <EnsurePersonalizationCInit
      {...{
        label: quill,
        description: reef,
        control: (
          <DropdownMenuPopover
            {...{
              contentWidth: "menuFixed",
              triggerButton: sage,
              align: "end",
              children: topaz,
            }}
          />
        ),
      }}
    />
  );
}
function lemon(ultra) {
  let { target } = ultra;
  switch (target) {
    case "in-app-browser": {
      let vapor;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.openLinkInTargetPreference.inAppBrowser.chatGptLabel",
            defaultMessage: "ChatGPT",
            description: "Label for opening links in ChatGPT",
          }}
        />
      );
    }
    case "external-browser": {
      let wheat;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.openLinkInTargetPreference.externalBrowser.label",
            defaultMessage: "Default browser",
            description:
              "Label for opening links in the user's system default browser",
          }}
        />
      );
    }
  }
}
function marble() {
  let yarn = CodexPluginActionType(appScopeAtom),
    zephyr = useSettingValue(AppInitialKpt.openLocalUrlInTargetPreference),
    acorn,
    bloom;
  acorn = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.localUrlOpenTarget.label",
        defaultMessage: "Local URL open destination",
        description: "Label for default local URL open target setting",
      }}
    />
  );
  bloom = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.localUrlOpenTarget.description",
        defaultMessage: "Where local development sites open by default",
        description: "Description for default local URL open target setting",
      }}
    />
  );
  let coral = (
    <DropdownTriggerButton>
      {
        <Harbor
          {...{
            target: zephyr,
          }}
        />
      }
    </DropdownTriggerButton>
  );
  let drift = falcon.map((item) => (
    <DropdownMenu.Item
      key={item}
      {...{
        onSelect: () => {
          zephyr !== item &&
            (setSettingValue(
              yarn,
              AppInitialKpt.openLocalUrlInTargetPreference,
              item,
            ),
            logProductEvent(yarn, ensureOpenLinkPreferenceAnalyticsInit, {
              setting: "local_url",
              previousDestination: zephyr,
              selectedDestination: item,
            }));
        },
        RightIcon: zephyr === item ? AppIconZlt : undefined,
        children: (
          <span className="text-sm">
            {
              <Harbor
                {...{
                  target: item,
                }}
              />
            }
          </span>
        ),
      }}
    />
  ));
  return (
    <EnsurePersonalizationCInit
      {...{
        label: acorn,
        description: bloom,
        control: (
          <DropdownMenuPopover
            {...{
              contentWidth: "menuFixed",
              triggerButton: coral,
              align: "end",
              children: drift,
            }}
          />
        ),
      }}
    />
  );
}
function nickel(eagle) {
  let { target } = eagle;
  switch (target) {
    case "in-app-browser": {
      let frost;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.localUrlOpenTarget.inAppBrowser.chatGptLabel",
            defaultMessage: "ChatGPT",
            description: "Label for opening local URLs in ChatGPT",
          }}
        />
      );
    }
    case "external-browser": {
      let glide;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.localUrlOpenTarget.externalBrowser.label",
            defaultMessage: "Default browser",
            description:
              "Label for opening local URLs in the user's system default browser",
          }}
        />
      );
    }
  }
}
