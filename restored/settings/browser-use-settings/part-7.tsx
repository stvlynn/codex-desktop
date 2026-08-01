// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/13
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

// Wave5d soft stubs.
const AppInitialDz: any = undefined;
const AppInitialEK: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialKO: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialXK: any = undefined;
const AppInitialYC: any = undefined;
const CollabAgentToolCall: any = undefined;
const PluginScheduledTasks: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const buildPluginInstallQuery: any = undefined;
const ensureConfigQueryAtomsInitStub: any = undefined;
function copper(pearl) {
  switch (pearl) {
    case "origin":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.websiteAccess",
            defaultMessage: "Browse",
            description: "Browse label for custom browser site permissions",
          }}
        />
      );
    case "download":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.downloads",
            defaultMessage: "Download",
            description: "Download label for custom browser site permissions",
          }}
        />
      );
    case "upload":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.uploads",
            defaultMessage: "Upload",
            description: "Upload label for custom browser site permissions",
          }}
        />
      );
    case "fullCdp":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.cdpAccess",
            defaultMessage: "Debug (CDP)",
            description: "Debug label for custom browser site permissions",
          }}
        />
      );
  }
}
function delta(quartz) {
  switch (quartz) {
    case "allowed":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.preset.allowed",
            defaultMessage: "Allow browsing",
            description:
              "Allowed browsing preset label for browser site permissions",
          }}
        />
      );
    case "denied":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.preset.denied",
            defaultMessage: "Block browsing",
            description:
              "Blocked browsing preset label for browser site permissions",
          }}
        />
      );
    case "custom":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.preset.custom",
            defaultMessage: "Custom",
            description: "Custom browser site permissions trigger label",
          }}
        />
      );
  }
}
function ui(river) {
  switch (river) {
    case "default":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.value.default",
            defaultMessage: "Default",
            description:
              "Default value label for browser use site permissions table",
          }}
        />
      );
    case "allowed":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.value.allowed",
            defaultMessage: "Allow",
            description:
              "Allowed value label for browser use site permissions table",
          }}
        />
      );
    case "denied":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.sitePermissions.value.denied",
            defaultMessage: "Block",
            description:
              "Denied value label for browser use site permissions table",
          }}
        />
      );
  }
}
function echo() {
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.sitePermissions.saveError",
        defaultMessage: "Unable to save site permissions",
        description: "Toast shown when saving browser site permissions fails",
      }}
    />
  );
}
var falcon,
  gamma,
  harbor,
  indigo,
  jade,
  kite,
  lemon,
  _i,
  browserUseSettingsUnderscore = esmInit(() => {
    falcon = reactCompilerRuntime();
    CollabAgentToolCall();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    gamma = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_Hlt_Init();
    ensureDropdownMenuPopoverInit();
    ensureSkillsPageHelpersInit();
    ensureHooksFocusIconInit();
    AppInitialVO();
    ensureConfigQueryAtomsInitStub();
    ensureAppScopeInit();
    AppInitialKO();
    codexCommandTheme();
    AppIconBO();
    initSettingsLoadingRow();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    bravo();
    indigo = ["allowed", "denied"];
    jade = ["default", "allowed", "denied"];
    kite = {
      origin: "origin",
      download: "download",
      upload: "upload",
      fullCdp: "fullCdp",
    };
    lemon = {
      download: "default",
      upload: "default",
      fullCdp: "default",
    };
    _i = {
      origin: "default",
      ...lemon,
    };
  });
function browserUseSettingsM(slate) {
  let {
    emptyStateTitle,
    installButtonLabel,
    items,
    pluginsQuery,
    selectedHostId,
    unavailableItems = [],
  } = slate;
  let timber = unavailableItems,
    umbra = useNavigate(),
    { installPlugin, status } = AppInitialXK(),
    violet = {
      hostId: selectedHostId,
    };
  let { pendingPluginId: willow, setPluginEnabled } =
      PluginScheduledTasks(violet),
    xenon = {
      hostId: selectedHostId,
    };
  let { pendingUninstallPluginId, uninstallPlugin } = AppInitialDz(xenon),
    yellow = status?.hostId === selectedHostId ? status.pluginId : null,
    zinc = willow ?? yellow ?? pendingUninstallPluginId,
    amber = items.length + timber.length;
  if (pluginsQuery.isLoading && amber === 0) {
    let daisy;
    return (
      <ParseUrlOrFallback
        {...{
          children: (
            <SettingsLoadingRow
              {...{
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.plugins.controls.loading",
                      defaultMessage: "Loading plugins…",
                      description:
                        "Loading state for plugin controls in settings",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
  }
  if (pluginsQuery.errorMessage != null) {
    let ember;
    return (
      <ParseUrlOrFallback
        {...{
          children: (
            <div className="p-4 text-sm text-token-text-secondary">
              {pluginsQuery.errorMessage}
            </div>
          ),
        }}
      />
    );
  }
  if (amber === 0) {
    let flint;
    return (
      <ParseUrlOrFallback
        {...{
          children: (
            <AppInitialLj layout="settings-row">{emptyStateTitle}</AppInitialLj>
          ),
        }}
      />
    );
  }
  let basalt;
  {
    let garnet;
    garnet = (hazel) =>
      hazel.kind === "app" ? (
        <EnsurePersonalizationCInit
          key={hazel.id}
          {...{
            className: "min-h-[60px]",
            control: (
              <OptionalTooltip
                {...{
                  tooltipContent: hazel.toggleTooltip,
                  children: (
                    <AppInitialYC
                      ariaLabel={hazel.toggleAriaLabel}
                      checked={hazel.enabled}
                      disabled={hazel.isPending === true}
                      onChange={hazel.onToggleEnabled}
                    />
                  ),
                }}
              />
            ),
            description: hazel.description,
            icon: (
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-token-border-default bg-transparent">
                {hazel.icon ?? (
                  <AppIconLV
                    {...{
                      className: "icon-md text-token-text-secondary",
                    }}
                  />
                )}
              </span>
            ),
            label: (
              <span className="font-medium text-token-foreground">
                {hazel.title}
              </span>
            ),
          }}
        />
      ) : (
        <Alpha
          key={hazel.plugin.plugin.id}
          {...{
            installButtonLabel,
            isPending: zinc === hazel.plugin.plugin.id,
            item: hazel,
            onInstallPlugin: (ivory) => {
              installPlugin(ivory, {
                hostId: selectedHostId,
                onSuccess: pluginsQuery.forceReload,
              });
            },
            onOpenPluginDetails: (jasper) => {
              umbra(
                buildPluginInstallQuery(jasper, {
                  hostId: selectedHostId,
                }),
              );
            },
            onToggleInstalledPluginEnabled: (kelp, lotus) => {
              setPluginEnabled({
                pluginId: kelp.plugin.id,
                pluginDisplayName:
                  hazel.displayName ?? usePointerSurfaceInteractionGate(kelp),
                enabled: lotus,
              });
            },
            onUninstallPlugin: (mint) => {
              uninstallPlugin({
                marketplaceName: mint.marketplaceName,
                pluginDisplayName: usePointerSurfaceInteractionGate(mint),
                pluginId: mint.plugin.id,
                pluginName: mint.plugin.name,
                requestPluginId: AppInitialEK(mint),
              });
            },
          }}
        />
      );
    basalt = items.map(garnet);
  }
  let cedar = timber.map(marble);
  return (
    <>
      {
        <ParseUrlOrFallback
          {...{
            children: [basalt, cedar],
          }}
        />
      }
    </>
  );
}
function marble(nova) {
  return (
    <Bravo
      key={nova.id}
      {...{
        item: nova,
      }}
    />
  );
}
function nickel(olive) {
  let { item } = olive,
    prism = useIntl(),
    quill = item.icon ?? (
      <AppIconLV
        {...{
          className: "icon-md text-token-text-secondary",
        }}
      />
    );
  let reef = (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border-default bg-transparent">
      {quill}
    </span>
  );
  let sage = (
    <span className="truncate font-medium text-token-foreground">
      {item.title}
    </span>
  );
  let topaz =
    item.description == null ? null : (
      <span className="min-w-0 truncate text-sm leading-relaxed text-token-text-secondary">
        {item.description}
      </span>
    );
  let ultra = (
    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
      {sage}
      {topaz}
    </span>
  );
  let vapor = (
    <span className="flex min-w-0 flex-1 items-center gap-3">
      {reef}
      {ultra}
    </span>
  );
  let wheat = prism.formatMessage({
    id: "settings.pluginControls.unavailableToggleAria",
    defaultMessage: "Unavailable plugin toggle",
    description:
      "Accessible label for the disabled toggle shown for unavailable plugins in settings",
  });
  let yarn = (
    <AppInitialYC
      ariaLabel={wheat}
      checked={false}
      disabled={true}
      onChange={onyx}
    />
  );
  return (
    <div className="flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm opacity-60 max-sm:flex-wrap">
      {vapor}
      {yarn}
    </div>
  );
}
function onyx() {}
