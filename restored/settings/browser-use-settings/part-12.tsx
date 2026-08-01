// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 12/13
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

// Wave5d soft JSX companions.
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
function Tide(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialEO: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialGK: any = undefined;
const AppInitialKO: any = undefined;
const AppInitialOO: any = undefined;
const AppInitialP: any = undefined;
const AppInitialPO: any = undefined;
const AppInitialQr: any = undefined;
const AppInitialR6: any = undefined;
const AppInitialSv: any = undefined;
const AppInitialU0: any = undefined;
const AppInitialVC: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const browserUseSettingsF: any = undefined;
const browserUseSettingsH: any = undefined;
const browserUseSettingsM: any = undefined;
const browserUseSettingsUnderscore: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const browserUseSettingsY: any = undefined;
const deferredUiEnt: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;
function browserUseSettingsS() {
  let kite = CodexPluginActionType(appScopeAtom),
    { data, isLoading } = CodexPluginActionResult(AppInitialOO),
    lemon = data?.approvalMode,
    marble = AppIconJO(),
    { value } = ensureSettingsGlyphNltInit(ensureGpuTearingDebugSettingsInit),
    nickel = usePointerSurfaceInteractionGate(value);
  let onyx = nickel,
    pearl = (kelp) => {
      deferredUiEnt({
        event: kelp,
        href: onyx,
        initiator: "open_in_browser_bridge",
      });
    };
  let quartz = pearl,
    river = (lotus) => (
      <a
        className="text-token-text-link-foreground hover:underline"
        href={onyx}
        target="_blank"
        rel="noreferrer"
        onClick={quartz}
      >
        {lotus}
      </a>
    );
  let slate = river,
    timber = {
      id: "alwaysAsk",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.alwaysAsk.label",
            defaultMessage: "Always ask",
            description: "Label for browser use always ask approval mode",
          }}
        />
      ),
      description: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.alwaysAsk.description",
            defaultMessage: "Ask before opening websites",
            description: "Description for browser use always ask approval mode",
          }}
        />
      ),
    };
  let umbra = [
    timber,
    {
      id: "neverAsk",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.neverAsk.label",
            defaultMessage: "Always allow",
            description: "Label for browser use never ask approval mode",
          }}
        />
      ),
      description: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.neverAsk.description",
            defaultMessage: "Open websites without asking",
            description: "Description for browser use never ask approval mode",
          }}
        />
      ),
      elevatedRiskDisclaimer: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.neverAsk.elevatedRiskDisclaimer",
            defaultMessage: "This setting has elevated risks for your data.",
            description:
              "Elevated risk warning for the browser use always allow website approval mode",
          }}
        />
      ),
    },
  ];
  let violet = umbra,
    willow = violet.find((item) => item.id === lemon) ?? violet[0];
  let xenon = willow,
    yellow = marble.isPending,
    zinc = async (mint) => {
      if (!(mint === lemon || yellow))
        try {
          await marble.mutateAsync(mint);
        } catch {
          kite.get(toastAtom).danger(
            <MemoizedFormattedMessage
              {...{
                id: "settings.browserUse.approval.saveError",
                defaultMessage: "Unable to save approval setting",
                description:
                  "Toast shown when saving browser use approval mode fails",
              }}
            />,
          );
        }
    };
  let amber = zinc,
    basalt = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.approval.label",
          defaultMessage: "Approval",
          description: "Label for browser use approval mode setting",
        }}
      />
    );
  let cedar = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.approval.description",
        defaultMessage:
          "Choose if ChatGPT asks for approval before opening websites. <learnMoreLink>Learn more</learnMoreLink>",
        description: "Description for browser use approval mode setting",
        values: {
          learnMoreLink: slate,
        },
      }}
    />
  );
  let daisy = isLoading || yellow,
    ember = isLoading || yellow,
    flint = xenon?.label,
    garnet = <span className="truncate">{flint}</span>;
  let hazel = (
    <DropdownTriggerButton className="w-[152px]" disabled={ember}>
      {garnet}
    </DropdownTriggerButton>
  );
  let ivory = (
    <div className="flex flex-col">
      {violet.map((item) => {
        let nova = item.id === lemon;
        return (
          <DropdownMenu.Item
            key={item.id}
            {...{
              allowWrap: true,
              disabled: yellow,
              RightIcon: nova ? AppIconZlt : undefined,
              onSelect: () => {
                amber(item.id);
              },
              children: (
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate">{item.label}</span>
                  <span className="truncate text-sm text-token-text-secondary">
                    {item.description}
                  </span>
                  {item.elevatedRiskDisclaimer ? (
                    <span className="mt-0.5 flex min-w-0 items-start gap-1 text-sm leading-4 text-token-description-foreground">
                      {
                        <EnsureImportMetaAssetUrlInit
                          {...{
                            className:
                              "icon-xs shrink-0 text-token-editor-warning-foreground",
                          }}
                        />
                      }
                      <span className="min-w-0 whitespace-normal">
                        {item.elevatedRiskDisclaimer}
                      </span>
                    </span>
                  ) : null}
                </div>
              ),
            }}
          />
        );
      })}
    </div>
  );
  let jasper = (
    <DropdownMenuPopover
      {...{
        contentWidth: "menuWide",
        align: "end",
        disabled: daisy,
        triggerButton: hazel,
        children: ivory,
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: basalt,
        description: cedar,
        control: jasper,
      }}
    />
  );
}
export function browserUseSettingsC() {
  let olive = CodexPluginActionType(appScopeAtom),
    { data, isLoading } = CodexPluginActionResult(AppInitialOO),
    prism = data?.historyApprovalMode,
    quill = AppInitialPO(),
    reef = {
      id: "alwaysAsk",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.alwaysAsk.label",
            defaultMessage: "Always ask",
            description: "Label for browser use always ask approval mode",
          }}
        />
      ),
      description: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.historyApproval.alwaysAsk.description",
            defaultMessage: "Ask before accessing history",
            description:
              "Description for browser use always ask history approval mode",
          }}
        />
      ),
    };
  let sage = [
    reef,
    {
      id: "neverAsk",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.approval.neverAsk.label",
            defaultMessage: "Always allow",
            description: "Label for browser use never ask approval mode",
          }}
        />
      ),
      description: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.historyApproval.neverAsk.description",
            defaultMessage: "Access history without asking",
            description:
              "Description for browser use never ask history approval mode",
          }}
        />
      ),
    },
  ];
  let topaz = sage,
    ultra = topaz.find((item) => item.id === prism) ?? topaz[0];
  let vapor = ultra,
    wheat = quill.isPending,
    yarn = async (iris) => {
      if (!(iris === prism || wheat))
        try {
          await quill.mutateAsync(iris);
        } catch {
          olive.get(toastAtom).danger(
            <MemoizedFormattedMessage
              {...{
                id: "settings.browserUse.historyApproval.saveError",
                defaultMessage: "Unable to save history setting",
                description:
                  "Toast shown when saving browser use history approval mode fails",
              }}
            />,
          );
        }
    };
  let zephyr = yarn,
    acorn,
    bloom;
  acorn = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.historyApproval.label",
        defaultMessage: "History",
        description: "Label for browser use history approval mode setting",
      }}
    />
  );
  bloom = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.historyApproval.description",
        defaultMessage:
          "Choose if ChatGPT asks for approval before accessing your browser's history",
        description:
          "Description for browser use history approval mode setting",
      }}
    />
  );
  let coral = isLoading || wheat,
    drift = isLoading || wheat,
    eagle = vapor?.label,
    frost = <span className="truncate">{eagle}</span>;
  let glide = (
    <DropdownTriggerButton className="w-[152px]" disabled={drift}>
      {frost}
    </DropdownTriggerButton>
  );
  let honey = (
    <div className="flex flex-col">
      {topaz.map((item) => {
        let jewel = item.id === prism;
        return (
          <DropdownMenu.Item
            key={item.id}
            {...{
              allowWrap: true,
              disabled: wheat,
              RightIcon: jewel ? AppIconZlt : undefined,
              onSelect: () => {
                zephyr(item.id);
              },
              children: (
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate">{item.label}</span>
                  <span className="truncate text-sm text-token-text-secondary">
                    {item.description}
                  </span>
                </div>
              ),
            }}
          />
        );
      })}
    </div>
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: acorn,
        description: bloom,
        control: (
          <DropdownMenuPopover
            {...{
              contentWidth: "menuWide",
              align: "end",
              disabled: coral,
              triggerButton: glide,
              children: honey,
            }}
          />
        ),
      }}
    />
  );
}
function $i(knoll) {
  let {
      browserUsePlugins,
      pluginsQuery,
      selectedHostId,
      unavailableBrowserUsePlugins,
    } = knoll,
    lunar = composerNavigation(),
    moss = CodexPluginActionResult(useGitRepoLiveQuery),
    north,
    orbit,
    pine,
    quest;
  {
    let ridge = AppInitialP(moss);
    north = browserUseSettingsM;
    orbit = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.install.empty",
          defaultMessage: "In-app browser plugin unavailable",
          description:
            "Empty state shown when the in-app browser plugin cannot be found",
        }}
      />
    );
    pine = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.install.button",
          defaultMessage: "Install",
          description: "Button label for installing the browser plugin",
        }}
      />
    );
    quest = browserUsePlugins.map((item) => ({
      icon: (
        <RealtimeVoiceHostId
          {...{
            className: "h-full w-full text-token-foreground",
          }}
        />
      ),
      onTryInChat: () => {
        lunar({
          activeProject: ridge,
          prefillPrompt: isBareAllowedPermission({
            defaultPrompt: firstNonEmptyTrimmedString(
              item.plugin.interface?.defaultPrompt,
            ),
            pluginDisplayName: usePointerSurfaceInteractionGate(item),
            pluginId: item.plugin.id,
          }),
          startInSidebar: true,
        });
      },
      plugin: item,
      showManageActions: true,
      showIconBorder: false,
      title: (
        <MemoizedFormattedMessage
          {...{
            ...areTurnsRelated.label,
          }}
        />
      ),
      description: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.control.description",
            defaultMessage: "Let ChatGPT control the built-in browser",
            description: "Description for the Browser plugin control row",
          }}
        />
      ),
    }));
  }
  return (
    <Tide
      {...{
        emptyStateTitle: orbit,
        installButtonLabel: pine,
        items: quest,
        pluginsQuery,
        selectedHostId,
        unavailableItems: unavailableBrowserUsePlugins,
      }}
    />
  );
}
function copper(storm) {
  return (
    !storm.isLoading &&
    (storm.reason === "statsig-disabled" ||
      storm.reason === "config-requirement-disabled")
  );
}
var delta, echo, $, falcon, gamma, harbor, indigo, jade;
export const browserUseSettingsD = esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  AppInitialR6();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  echo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  ensureComposerEsm_K1_Init();
  ensureBrowserUseGateInit();
  ensureUseHomeDirectoryInit();
  closedConnectionState();
  AppInitialGK();
  conversationsSidebarMessages();
  remoteHostedPipHiddenThreadIds();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
  AppInitialSv();
  ensureBrowserPluginMentionMessagesInit();
  CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
  ensurePluginMentionPromptInit();
  ensureInstalledPluginsQueryInit();
  ensureComposerEsm_K9_Init();
  deferredUiH();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  filterConversationTimelineItems();
  extractColonPrefixedNamedTokens();
  toggleSortedIdList();
  AppInitialKO();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  alpha();
  bravo();
  browserUseSettingsY();
  AppInitialEO();
  browserUseSettingsUnderscore();
  codexCommandTheme();
  AppIconBO();
  AppInitialQr();
  browserUseSettingsH();
  browserUseSettingsF();
  AppInitialVC();
  initSettingsRowDisclosure();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  AppInitialU0();
  ensureSkillsPageHelpersInit();
  falcon = "browser-browsing-data-options";
  gamma = ["cookies", "siteData", "cache", "downloads"];
  harbor = [...gamma, "history"];
  indigo = ["in-app-browser", "external-browser"];
  jade = reactCompilerRuntime(ensureComposerEsm_S8_Init, null);
});
