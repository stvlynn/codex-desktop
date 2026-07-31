// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/13
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

// Wave5d soft stubs.
const BrowserSettingsHistoryNav: any = undefined;
const ReviewModel: any = undefined;
const _r: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
function river(willow) {
  let { kind } = willow,
    xenon = useIntl(),
    yellow = useLocation(),
    zinc = useNavigate(),
    amber = useMatch(SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH),
    basalt = pearl.useRef(null),
    cedar = pearl.useRef(null),
    daisy = pearl.useRef(null),
    ember = pearl.useRef(null),
    [flint, garnet] = pearl.useState(null),
    [hazel, ivory] = pearl.useState(null),
    jasper = quartz[kind],
    kelp = xenon.formatMessage(jasper.webviewLabel);
  let lotus = kelp,
    mint,
    nova;
  mint = _r({
    kind,
    search: yellow.search,
    siteSettingsRoutePath: amber?.params["*"] ?? null,
  });
  nova = copper(kind, mint);
  let olive = nova,
    prism = flint?.initialUrl === mint ? flint : null,
    quill = prism?.url ?? mint,
    reef = hazel?.url === quill ? hazel.title : null,
    sage = nickel(kind, quill);
  let topaz = sage,
    ultra = ReviewModel(activatePanelTabOrFallback()),
    vapor = xenon.formatMessage({
      id: "settings.browserUse.browserSettings.navigation.back",
      defaultMessage: "Back",
      description: "Accessible label for embedded browser settings back button",
    });
  let wheat = vapor,
    yarn = xenon.formatMessage({
      id: "settings.browserUse.browserSettings.navigation.forward",
      defaultMessage: "Forward",
      description:
        "Accessible label for embedded browser settings forward button",
    });
  let zephyr = yarn,
    acorn = async (tide) => {
      let unity = window.electronBridge?.sendMessageFromView;
      return unity == null
        ? false
        : (await unity({
            mountId: tide,
            themeVariant: ultra,
            type: "browser-settings-webview-mounted",
          }),
          true);
    };
  let bloom = pearl.useEffectEvent(acorn),
    coral = () => {
      let vale = basalt.current;
      if (vale == null) return;
      let wave = window.electronBridge?.sendMessageFromView,
        apex = crypto.randomUUID(),
        brook = false,
        cliff = false,
        dusk = null,
        elm = olive === mint ? null : mint,
        fern = () => {
          !brook ||
            wave == null ||
            ((brook = false),
            wave({
              mountId: apex,
              type: "browser-settings-webview-unmounted",
            }).catch((error) => {
              appActionSidebarProjectRefSchema.warning(
                "Failed to unmount browser settings webview",
                {
                  safe: {
                    kind,
                  },
                  sensitive: {
                    error,
                  },
                },
              );
            }));
        };
      daisy.current = kite(kind, mint);
      ember.current = null;
      let grove = (lagoon) => {
          let meadow = dusk;
          meadow != null &&
            harbor(meadow).then((value) => {
              cliff ||
                dusk !== meadow ||
                gamma(meadow, mint) !== lagoon ||
                ivory(
                  value == null
                    ? null
                    : {
                        title: value,
                        url: lagoon,
                      },
                );
            });
        },
        hill = () => {
          if (dusk == null || cliff) return;
          let nest = delta(dusk, mint),
            oak =
              elm != null && nest.url === olive
                ? {
                    ...nest,
                    url: elm,
                  }
                : nest,
            petal = ember.current,
            quiet = lemon(daisy.current ?? kite(kind, mint), oak.url, petal);
          petal != null &&
            quiet.index === petal &&
            quiet.entries[petal] === oak.url &&
            (ember.current = null);
          daisy.current = quiet;
          let rain = indigo(oak, quiet);
          grove(rain.url);
          garnet((seed) =>
            seed != null &&
            seed.initialUrl === rain.initialUrl &&
            seed.url === rain.url &&
            seed.canGoBack === rain.canGoBack &&
            seed.canGoForward === rain.canGoForward
              ? seed
              : rain,
          );
        },
        isle = ["did-navigate", "did-navigate-in-page", "did-stop-loading"],
        juniper = () => {
          if ((hill(), dusk == null || elm == null)) return;
          let trail = elm;
          elm = null;
          marble({
            sourceUrl: olive,
            targetUrl: trail,
            webview: dusk,
          }).catch((error) => {
            appActionSidebarProjectRefSchema.warning(
              "Failed to open initial browser settings URL",
              {
                safe: {
                  kind,
                },
                sensitive: {
                  error,
                  targetUrl: trail,
                },
              },
            );
          });
        };
      return (
        (async () => {
          try {
            if (((brook = await bloom(apex)), cliff)) {
              fern();
              return;
            }
            dusk = document.createElement("webview");
            dusk.className =
              "no-drag h-full w-full bg-token-main-surface-primary";
            dusk.setAttribute("aria-label", lotus);
            dusk.setAttribute("partition", jasper.partition);
            dusk.setAttribute("src", olive);
            dusk.addEventListener("dom-ready", juniper);
            for (let urn of isle) dusk.addEventListener(urn, hill);
            cedar.current = dusk;
            vale.append(dusk);
            hill();
          } catch (vine) {
            let wind = vine;
            appActionSidebarProjectRefSchema.error(
              "Failed to mount browser settings webview",
              {
                safe: {
                  kind,
                },
                sensitive: {
                  error: wind,
                },
              },
            );
          }
        })(),
        () => {
          cliff = true;
          cedar.current === dusk &&
            ((cedar.current = null),
            (daisy.current = null),
            (ember.current = null));
          dusk?.removeEventListener("dom-ready", juniper);
          for (let yarrow of isle) dusk?.removeEventListener(yarrow, hill);
          dusk?.remove();
          dusk != null && bravo(dusk);
          fern();
        }
      );
    };
  let drift;
  drift = [mint, kind, jasper, lotus, olive];
  pearl.useLayoutEffect(coral, drift);
  let eagle, frost;
  frost = () => {
    let azure = window.electronBridge?.sendMessageFromView;
    azure?.({
      themeVariant: ultra,
      type: "browser-settings-webview-theme-changed",
    }).catch((birch) => {
      appActionSidebarProjectRefSchema.warning(
        "Failed to sync browser settings webview theme",
        {
          safe: {
            kind,
          },
          sensitive: {
            error: birch,
          },
        },
      );
    });
  };
  eagle = [kind, ultra];
  pearl.useLayoutEffect(frost, eagle);
  let glide, honey;
  glide = (canyon) => {
    let dew = daisy.current;
    return dew == null ? false : honey(dew.index + canyon);
  };
  honey = (ever) => {
    let field = cedar.current,
      grain = daisy.current;
    if (field == null || grain == null) return false;
    let haven = grain.entries[ever],
      ink = grain.entries[grain.index];
    if (haven == null) return false;
    let jadeite = {
      ...grain,
      index: ever,
    };
    return (
      (daisy.current = jadeite),
      (ember.current = ever),
      garnet(
        jade({
          history: jadeite,
          initialUrl: mint,
          url: haven,
          webview: field,
        }),
      ),
      marble({
        sourceUrl: ink,
        targetUrl: haven,
        webview: field,
      }).catch((error) => {
        appActionSidebarProjectRefSchema.warning(
          "Failed to navigate browser settings webview",
          {
            safe: {
              kind,
            },
            sensitive: {
              error,
              targetUrl: haven,
            },
          },
        );
      }),
      true
    );
  };
  let iris = () => {
    (kind === "siteSettings" &&
      yellow.pathname === jasper.path &&
      yellow.search.length === 0 &&
      onyx(quill) != null &&
      honey(0)) ||
      zinc(jasper.path);
  };
  let jewel = iris,
    knoll = <div aria-hidden={true} className="draggable absolute inset-0" />;
  let lunar = prism?.canGoBack === true || topaz != null,
    moss = prism?.canGoForward ?? false,
    north = () => {
      let kernel = cedar.current;
      if (!(daisy.current?.preferHistoryControls === true && glide(-1))) {
        if (kernel != null && echo(kernel)) {
          kernel.goBack?.();
          return;
        }
        glide(-1) || (topaz != null && zinc(topaz));
      }
    };
  let orbit = () => {
    let leaf = cedar.current;
    if (leaf != null && falcon(leaf)) {
      leaf.goForward?.();
      return;
    }
    (daisy.current?.preferHistoryControls === true && glide(1)) || glide(1);
  };
  let pine = (
    <div className="no-drag relative z-10 flex items-center gap-px">
      {
        <BrowserSettingsHistoryNav
          {...{
            backLabel: wheat,
            canGoBack: lunar,
            canGoForward: moss,
            forwardLabel: zephyr,
            onBack: north,
            onForward: orbit,
          }}
        />
      }
    </div>
  );
  let quest = (
    <Alpha
      {...{
        currentPageTitle: reef,
        currentUrl: quill,
        kind,
        onCurrentSectionClick: jewel,
      }}
    />
  );
  let ridge = (
    <div className="relative flex h-toolbar shrink-0 items-center gap-2 border-b border-token-border px-2">
      {knoll}
      {pine}
      {quest}
    </div>
  );
  let storm = (
    <div
      ref={basalt}
      className="no-drag min-h-0 w-full flex-1 bg-token-main-surface-primary"
    />
  );
  return (
    <div className="main-surface flex h-full min-h-0 flex-col overflow-hidden">
      {ridge}
      {storm}
    </div>
  );
}
function slate(maple) {
  let { currentPageTitle, currentUrl, kind, onCurrentSectionClick } = maple,
    nimbus = useNavigate(),
    opal = quartz[kind],
    plume = timber({
      currentPageTitle,
      currentUrl,
      kind,
    });
  let quillow = plume,
    root = (
      <MemoizedFormattedMessage
        {...{
          ...opal.breadcrumbLabel,
        }}
      />
    );
  let silk = root,
    thorn = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.browserSettings.breadcrumb.settings",
          defaultMessage: "Settings",
          description:
            "Settings breadcrumb label for embedded browser settings",
        }}
      />
    );
  let upland = {
    id: "settings",
    label: thorn,
    onClick: () => void nimbus("/settings/general-settings"),
  };
  let vista = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.browserSettings.breadcrumb.browser",
        defaultMessage: "Browser",
        description: "Browser breadcrumb label for embedded browser settings",
      }}
    />
  );
  let wisp = {
    id: "browser",
    label: vista,
    onClick: () => void nimbus("/settings/browser-use"),
  };
  let yonder =
    quillow == null
      ? []
      : [
          {
            id: kind,
            label: silk,
            onClick: onCurrentSectionClick,
          },
        ];
  let zenith = [upland, wisp, ...yonder];
  let anvil = quillow ?? silk;
  return (
    <div className="no-drag pointer-events-auto relative z-10 min-w-0">
      {
        <ToolbarBreadcrumb
          {...{
            ancestors: zenith,
            current: anvil,
          }}
        />
      }
    </div>
  );
}
function timber({ currentPageTitle, currentUrl, kind }) {
  let beacon = quartz[kind];
  return umbra(beacon, currentUrl)
    ? null
    : kind === "siteSettings"
      ? (alpha(currentUrl, currentPageTitle) ?? currentPageTitle)
      : currentPageTitle;
}
function umbra(crag, dome) {
  return crag.rootUrls.some((item) => violet(item) === violet(dome));
}
function violet(eddy) {
  return eddy.endsWith("/") ? eddy.slice(0, -1) : eddy;
}
