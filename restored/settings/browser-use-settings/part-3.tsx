// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/13
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
} from "../../composer/composer-esm-inits";
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

// Wave5d soft stubs.
const AppInitialAht: any = undefined;
const AppInitialBht: any = undefined;
const AppInitialGht: any = undefined;
const AppInitialHht: any = undefined;
const AppInitialHt: any = undefined;
const AppInitialOht: any = undefined;
const AppInitialVht: any = undefined;
const AppInitialWht: any = undefined;
const Browser: any = undefined;
const PersistCodexBrowserApp: any = undefined;
const Sites: any = undefined;
const agent: any = undefined;
const alpha: any = undefined;
const deferredUiU: any = undefined;
const ensureBrowserSettingsHistoryNavInit: any = undefined;
function bravo(cedar, daisy) {
  let ember = timber(cedar);
  if (ember === "siteDetails")
    return (
      daisy ??
      willow(cedar) ?? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.browserSettings.breadcrumb.siteSettings",
            defaultMessage: "Site settings",
            description:
              "Site settings breadcrumb label for embedded browser settings",
          }}
        />
      )
    );
  if (ember == null) return null;
  if (daisy != null) return daisy;
  let flint = umbra(ember);
  return flint == null ? (
    violet(ember)
  ) : (
    <MemoizedFormattedMessage
      {...{
        ...flint,
      }}
    />
  );
}
function copper(garnet) {
  delta(garnet) && garnet.destroy();
}
function delta(hazel) {
  return "destroy" in hazel && typeof hazel.destroy == "function";
}
function _r({ kind, search, siteSettingsRoutePath }) {
  let ivory = amber[kind];
  return kind === "siteSettings"
    ? (buildChromeSiteDetailsUrl(new URLSearchParams(search).get("site")) ??
        echo(siteSettingsRoutePath) ??
        ivory.url)
    : ivory.url;
}
function echo(jasper) {
  return jasper == null || jasper.length === 0
    ? null
    : jasper === "cookies" || jasper === "third-party-cookies"
      ? CHROME_SETTINGS_COOKIES_URL
      : jasper === "handlers" || jasper === "protocol-handlers"
        ? AppInitialBht
        : /^[A-Za-z0-9-]+$/.test(jasper)
          ? `${CHROME_SETTINGS_CONTENT_URL}/${jasper}`
          : null;
}
function falcon(kelp, lotus) {
  return kelp === "siteSettings" && timber(lotus) === "siteDetails"
    ? CHROME_SETTINGS_CONTENT_URL
    : lotus;
}
function gamma(mint, nova) {
  return {
    canGoBack: harbor(mint),
    canGoForward: indigo(mint),
    initialUrl: nova,
    url: jade(mint, nova),
  };
}
function harbor(olive) {
  try {
    return olive.canGoBack?.() === true;
  } catch {
    return false;
  }
}
function indigo(prism) {
  try {
    return prism.canGoForward?.() === true;
  } catch {
    return false;
  }
}
function jade(quill, reef) {
  try {
    return quill.getURL?.() || quill.getAttribute("src") || reef;
  } catch {
    return quill.getAttribute("src") || reef;
  }
}
async function kite(sage) {
  if (sage.executeJavaScript == null) return null;
  try {
    return lemon(
      await sage.executeJavaScript(
        '\n        (() => {\n          const cleanTitle = (title) => {\n            const text = title == null\n              ? ""\n              : String(title).replace(/\\s+/g, " ").trim();\n            return text.length === 0 ? null : text;\n          };\n          const isVisible = (element) => {\n            const style = globalThis.getComputedStyle?.(element);\n            if (\n              style != null &&\n              (style.display === "none" || style.visibility === "hidden")\n            ) {\n              return false;\n            }\n            const rect = element.getBoundingClientRect?.();\n            return rect == null || rect.width > 0 || rect.height > 0;\n          };\n          const getCandidateTitle = (element) => {\n            if (!isVisible(element)) {\n              return null;\n            }\n            if (element.tagName?.toLowerCase() === "settings-subpage") {\n              return cleanTitle(element.getAttribute("page-title"));\n            }\n            return cleanTitle(element.textContent);\n          };\n          const visited = new Set();\n          const findBrowserSettingsPageTitle = (root) => {\n            if (root == null || visited.has(root)) {\n              return null;\n            }\n            visited.add(root);\n            const candidates = root.querySelectorAll == null\n              ? []\n              : Array.from(root.querySelectorAll(\n                "settings-subpage, h1, h2, [slot=\'title\'], #title, .page-title",\n              ));\n            for (const candidate of candidates) {\n              const title = getCandidateTitle(candidate);\n              if (title != null) {\n                return title;\n              }\n            }\n            const children = root.querySelectorAll == null\n              ? []\n              : Array.from(root.querySelectorAll("*"));\n            for (const child of children) {\n              const title = findBrowserSettingsPageTitle(child.shadowRoot);\n              if (title != null) {\n                return title;\n              }\n            }\n            return null;\n          };\n          return findBrowserSettingsPageTitle(document);\n        })()\n      ',
      ),
    );
  } catch {
    return null;
  }
}
function lemon(topaz) {
  let ultra = topaz?.replace(/\s+/g, " ").trim() ?? "";
  return ultra.length === 0 ? null : ultra;
}
function marble(vapor, wheat) {
  return wheat.preferHistoryControls
    ? {
        ...vapor,
        canGoBack: wheat.index > 0,
        canGoForward: wheat.index < wheat.entries.length - 1,
      }
    : {
        ...vapor,
        canGoBack: vapor.canGoBack || wheat.index > 0,
        canGoForward:
          vapor.canGoForward || wheat.index < wheat.entries.length - 1,
      };
}
function nickel({ history, initialUrl, url, webview }) {
  return marble(
    {
      ...gamma(webview, initialUrl),
      url,
    },
    history,
  );
}
function onyx(yarn, zephyr) {
  return yarn !== "siteSettings" || timber(zephyr) == null
    ? {
        entries: [zephyr],
        index: 0,
        preferHistoryControls: yarn === "siteSettings",
      }
    : {
        entries: [CHROME_SETTINGS_CONTENT_URL, zephyr],
        index: 1,
        preferHistoryControls: true,
      };
}
function pearl(acorn, bloom, coral) {
  if (coral != null && acorn.entries[coral] === bloom)
    return {
      ...acorn,
      index: coral,
    };
  if (acorn.entries[acorn.index] === bloom) return acorn;
  let drift = acorn.entries.indexOf(bloom);
  return drift === -1
    ? {
        entries: [...acorn.entries.slice(0, acorn.index + 1), bloom],
        index: acorn.index + 1,
        preferHistoryControls: acorn.preferHistoryControls,
      }
    : {
        ...acorn,
        index: drift,
      };
}
async function quartz({ sourceUrl, targetUrl, webview }) {
  if (
    !(
      targetUrl === "chrome://settings/content" &&
      timber(sourceUrl) != null &&
      (await river(webview))
    )
  ) {
    if (webview.loadURL != null) {
      await webview.loadURL(targetUrl);
      return;
    }
    webview.setAttribute("src", targetUrl);
  }
}
async function river(eagle) {
  if (eagle.executeJavaScript == null) return false;
  try {
    return (
      (await eagle.executeJavaScript(
        '\n        (() => {\n          const visited = new Set();\n          const findSubpageBackButton = (root) => {\n            if (root == null || visited.has(root)) {\n              return null;\n            }\n            visited.add(root);\n            const subpage = root.querySelector?.("settings-subpage");\n            const backButton =\n              subpage?.shadowRoot?.querySelector("cr-icon-button#closeButton");\n            if (backButton != null) {\n              return backButton;\n            }\n            const children = root.querySelectorAll == null\n              ? []\n              : Array.from(root.querySelectorAll("*"));\n            for (const child of children) {\n              const shadowBackButton = findSubpageBackButton(child.shadowRoot);\n              if (shadowBackButton != null) {\n                return shadowBackButton;\n              }\n            }\n            return null;\n          };\n          const backButton = findSubpageBackButton(document);\n          if (backButton == null) {\n            return false;\n          }\n          backButton.click();\n          return true;\n        })()\n      ',
      )) === true
    );
  } catch {
    return false;
  }
}
function slate(frost, glide) {
  return frost === "siteSettings"
    ? timber(glide) == null
      ? alpha(glide) === alpha("chrome://settings/content")
        ? "/settings/browser-use"
        : null
      : AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT
    : null;
}
function timber(honey) {
  try {
    let iris = new URL(honey);
    if (iris.protocol !== "chrome:" || iris.host !== "settings") return null;
    let [jewel, knoll] = iris.pathname
      .split("/")
      .filter((item) => item.length > 0);
    return jewel === "cookies"
      ? "cookies"
      : jewel === "handlers"
        ? "handlers"
        : jewel === "content"
          ? (knoll ?? null)
          : null;
  } catch {
    return null;
  }
}
function umbra(lunar) {
  switch (lunar) {
    case "ads":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.ads",
        defaultMessage: "Intrusive ads",
        description:
          "Intrusive ads breadcrumb label for embedded browser site permission settings",
      });
    case "automaticDownloads":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.automaticDownloads",
        defaultMessage: "Automatic downloads",
        description:
          "Automatic downloads breadcrumb label for embedded browser site permission settings",
      });
    case "backgroundSync":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.backgroundSync",
        defaultMessage: "Background sync",
        description:
          "Background sync breadcrumb label for embedded browser site permission settings",
      });
    case "camera":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.camera",
        defaultMessage: "Camera",
        description:
          "Camera breadcrumb label for embedded browser site permission settings",
      });
    case "clipboard":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.clipboard",
        defaultMessage: "Clipboard",
        description:
          "Clipboard breadcrumb label for embedded browser site permission settings",
      });
    case "cookies":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.cookies",
        defaultMessage: "Third-party cookies",
        description:
          "Third-party cookies breadcrumb label for embedded browser site permission settings",
      });
    case "embeddedContent":
    case "federatedIdentityApi":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.embeddedContent",
        defaultMessage: "Embedded content",
        description:
          "Embedded content breadcrumb label for embedded browser site permission settings",
      });
    case "geolocation":
    case "location":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.location",
        defaultMessage: "Location",
        description:
          "Location breadcrumb label for embedded browser site permission settings",
      });
    case "images":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.images",
        defaultMessage: "Images",
        description:
          "Images breadcrumb label for embedded browser site permission settings",
      });
    case "javascript":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.javascript",
        defaultMessage: "JavaScript",
        description:
          "JavaScript breadcrumb label for embedded browser site permission settings",
      });
    case "microphone":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.microphone",
        defaultMessage: "Microphone",
        description:
          "Microphone breadcrumb label for embedded browser site permission settings",
      });
    case "notifications":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.notifications",
        defaultMessage: "Notifications",
        description:
          "Notifications breadcrumb label for embedded browser site permission settings",
      });
    case "popups":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.popups",
        defaultMessage: "Pop-ups and redirects",
        description:
          "Pop-ups and redirects breadcrumb label for embedded browser site permission settings",
      });
    case "handlers":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.handlers",
        defaultMessage: "Protocol handlers",
        description:
          "Protocol handlers breadcrumb label for embedded browser site permission settings",
      });
    case "protectedContent":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.protectedContent",
        defaultMessage: "Protected content IDs",
        description:
          "Protected content IDs breadcrumb label for embedded browser site permission settings",
      });
    case "sound":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.sound",
        defaultMessage: "Sound",
        description:
          "Sound breadcrumb label for embedded browser site permission settings",
      });
    case "usbDevices":
      return identity({
        id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.usbDevices",
        defaultMessage: "USB devices",
        description:
          "USB devices breadcrumb label for embedded browser site permission settings",
      });
    default:
      return null;
  }
}
function violet(moss) {
  return moss
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((item, index) =>
      index === 0
        ? `${item.charAt(0).toUpperCase()}${item.slice(1)}`
        : item.toLowerCase(),
    )
    .join(" ");
}
function willow(north) {
  try {
    let orbit = new URL(north).searchParams.get("site");
    return orbit == null ? null : new URL(orbit).host;
  } catch {
    return null;
  }
}
var xenon,
  yellow,
  zinc,
  amber,
  basalt = esmInit(() => {
    xenon = reactCompilerRuntime();
    strongMarkerFromOptions();
    yellow = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureBrowserSettingsHistoryNavInit();
    initToolbarBreadcrumb();
    deferredUiU();
    posixPathBasename();
    amber = {
      contactInfo: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.contactInfo.breadcrumb",
          defaultMessage: "Contact info",
          description:
            "Contact info breadcrumb label for embedded browser settings",
        }),
        path: BROWSER_SURFACE_ID,
        partition: AppInitialOht,
        rootUrls: ensurePluginCachePathHelpersInit,
        url: AppInitialAht,
        webviewLabel: identity({
          id: "settings.browserUse.contactInfo.webviewLabel",
          defaultMessage: "Contact info settings",
          description: "Accessible label for embedded contact info settings",
        }),
      },
      downloads: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.downloads.breadcrumb",
          defaultMessage: "Downloads",
          description:
            "Downloads breadcrumb label for embedded browser settings",
        }),
        path: SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH,
        partition: Browser,
        rootUrls: [CHROME_SETTINGS_CONTENT_URL],
        url: CHROME_SETTINGS_CONTENT_URL,
        webviewLabel: identity({
          id: "settings.browserUse.downloads.webviewLabel",
          defaultMessage: "Downloads",
          description: "Accessible label for embedded browser downloads",
        }),
      },
      extensions: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.extensions.breadcrumb",
          defaultMessage: "Extensions",
          description:
            "Extensions breadcrumb label for embedded browser settings",
        }),
        path: isWinDrivePath,
        partition: isOpenaiBundledId,
        rootUrls: [PersistCodexBrowserApp],
        url: PersistCodexBrowserApp,
        webviewLabel: identity({
          id: "settings.browserUse.extensions.webviewLabel",
          defaultMessage: "Extensions settings",
          description: "Accessible label for embedded extension settings",
        }),
      },
      history: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.history.breadcrumb",
          defaultMessage: "History",
          description: "History breadcrumb label for embedded browser history",
        }),
        path: Sites,
        partition: AppInitialHht,
        rootUrls: [OPENAI_BUNDLED_ID],
        url: OPENAI_BUNDLED_ID,
        webviewLabel: identity({
          id: "settings.browserUse.history.webviewLabel",
          defaultMessage: "History",
          description: "Accessible label for embedded browser history",
        }),
      },
      passwordManager: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.passwordManager.breadcrumb",
          defaultMessage: "Password manager",
          description:
            "Password manager breadcrumb label for embedded browser settings",
        }),
        path: AppInitialHt,
        partition: agent,
        rootUrls: [AppInitialVht, AppInitialGht],
        url: AppInitialVht,
        webviewLabel: identity({
          id: "settings.browserUse.passwordManager.webviewLabel",
          defaultMessage: "Password manager settings",
          description:
            "Accessible label for embedded password manager settings",
        }),
      },
      siteSettings: {
        breadcrumbLabel: identity({
          id: "settings.browserUse.siteSettings.breadcrumb",
          defaultMessage: "Site settings",
          description:
            "Site settings breadcrumb label for embedded browser settings",
        }),
        path: AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT,
        partition: AppInitialWht,
        rootUrls: [CHROME_SETTINGS_CONTENT_URL],
        url: CHROME_SETTINGS_CONTENT_URL,
        webviewLabel: identity({
          id: "settings.browserUse.siteSettings.webviewLabel",
          defaultMessage: "Site settings",
          description: "Accessible label for embedded site settings",
        }),
      },
    };
  });
