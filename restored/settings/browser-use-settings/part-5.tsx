// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/13
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
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredConversationWH3(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredUiB(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredUiH(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function DeferredUiUStub(
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
function IsStartingProcessExpired(
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
function SetRemoteControlEnabledForHost(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFO: any = undefined;
const IntlProvider: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const _i: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const deferredConversationWH3: any = undefined;
const deferredUiUStub: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
const ui: any = undefined;
function jade(pearl) {
  let { onCustomize, rows, visibleResources } = pearl,
    quartz;
  {
    let river;
    river = (slate) => (
      <Alpha
        key={slate.origin}
        {...{
          row: slate,
          visibleResources,
          onCustomize: () => {
            onCustomize(slate);
          },
        }}
      />
    );
    quartz = rows.map(river);
  }
  return <>{quartz}</>;
}
function kite(timber) {
  let { onCustomize, row, visibleResources } = timber,
    umbra = alpha(row, visibleResources);
  let violet = umbra,
    willow = (
      <span
        data-tooltip-overflow-target={true}
        className="block min-w-0 truncate text-sm font-medium"
      >
        {row.origin}
      </span>
    );
  let xenon = (
    <OptionalTooltip
      {...{
        tooltipContent: row.origin,
        openWhen: "trigger-overflows",
        children: willow,
      }}
    />
  );
  let yellow =
    violet === "custom" ? (
      <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-token-text-secondary">
        {visibleResources
          .filter((item) => row.values[item] !== "default")
          .map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              {
                <Bravo
                  {...{
                    value: row.values[item],
                  }}
                />
              }
              <span className="flex items-center gap-1">
                <span>
                  {item === "fullCdp" ? (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.browserUse.sitePermissions.summary.cdp",
                        defaultMessage: "CDP",
                        description:
                          "CDP summary label for custom browser site permissions",
                      }}
                    />
                  ) : (
                    copper(item)
                  )}
                </span>
                <span className="sr-only">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.browserUse.sitePermissions.summary.value",
                        defaultMessage: " status: ",
                        description:
                          "Screen reader prefix for a custom browser site permission value",
                      }}
                    />
                  }
                  {ui(row.values[item])}
                </span>
              </span>
            </span>
          ))}
      </div>
    ) : null;
  let zinc = (
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      {xenon}
      {yellow}
    </div>
  );
  let amber = (
    <Copper
      {...{
        row,
        visibleResources,
        onCustomize,
      }}
    />
  );
  let basalt = (
    <Delta
      {...{
        row,
      }}
    />
  );
  return (
    <div className="flex min-h-14 items-center gap-3 px-4 py-2.5">
      {zinc}
      {amber}
      {basalt}
    </div>
  );
}
function lemon({ onCustomize, row, visibleResources }) {
  let cedar = CodexPluginActionType(appScopeAtom),
    daisy = useIntl(),
    [ember, flint] = falcon.useState(false),
    garnet = AppInitialFO(),
    hazel = alpha(row, visibleResources),
    ivory;
  switch (hazel) {
    case "allowed":
      ivory = daisy.formatMessage(
        {
          id: "settings.browserUse.sitePermissions.preset.allowedAriaLabel",
          defaultMessage: "Allow browsing for {origin}",
          description:
            "Aria label for an allowed browser use site permission preset dropdown",
        },
        {
          origin: row.origin,
        },
      );
      break;
    case "denied":
      ivory = daisy.formatMessage(
        {
          id: "settings.browserUse.sitePermissions.preset.deniedAriaLabel",
          defaultMessage: "Block browsing for {origin}",
          description:
            "Aria label for a blocked browser use site permission preset dropdown",
        },
        {
          origin: row.origin,
        },
      );
      break;
    case "custom":
      ivory = daisy.formatMessage(
        {
          id: "settings.browserUse.sitePermissions.preset.customAriaLabel",
          defaultMessage: "Custom permissions for {origin}",
          description:
            "Aria label for a custom browser use site permission preset dropdown",
        },
        {
          origin: row.origin,
        },
      );
      break;
  }
  let jasper = async (kelp) => {
    if (!(kelp === row.values.origin || ember)) {
      flint(true);
      try {
        await garnet.mutateAsync(
          bravo({
            nextValues: {
              ...row.values,
              origin: kelp,
            },
            origin: row.origin,
            resources: ["origin"],
            values: row.values,
          }),
        );
      } catch {
        cedar.get(toastAtom).danger(echo());
      } finally {
        flint(false);
      }
    }
  };
  return (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentClassName: "w-42!",
        disabled: ember,
        triggerButton: (
          <DropdownTriggerButton
            aria-label={ivory}
            className="w-42!"
            disabled={ember}
          >
            <span className="flex w-5 shrink-0 items-center justify-center">
              {hazel === "custom" ? (
                <DeferredConversationWH3
                  {...{
                    className: "icon-xs text-token-text-secondary",
                  }}
                />
              ) : (
                <Bravo
                  {...{
                    value: hazel,
                  }}
                />
              )}
            </span>
            <span className="truncate">{delta(hazel)}</span>
          </DropdownTriggerButton>
        ),
        children: (
          <div className="flex flex-col">
            {gamma.map((item) => (
              <DropdownMenu.Item
                key={item}
                {...{
                  RightIcon: item === hazel ? AppIconZlt : undefined,
                  onSelect: () => {
                    jasper(item);
                  },
                  children: (
                    <div className="flex min-w-0 items-center gap-2">
                      {
                        <Bravo
                          {...{
                            value: item,
                          }}
                        />
                      }
                      <span className="truncate">{delta(item)}</span>
                    </div>
                  ),
                }}
              />
            ))}
            {<DropdownMenu.Separator {...{}} />}
            {
              <DropdownMenu.Item
                {...{
                  RightIcon: hazel === "custom" ? AppIconZlt : undefined,
                  onSelect: onCustomize,
                  children: (
                    <div className="flex min-w-0 items-center gap-2">
                      {
                        <DeferredConversationWH3
                          {...{
                            className:
                              "icon-xs shrink-0 text-token-text-secondary",
                          }}
                        />
                      }
                      {
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.browserUse.sitePermissions.preset.customizeAction",
                            defaultMessage: "Customize",
                            description:
                              "Browser use site permission custom option label",
                          }}
                        />
                      }
                    </div>
                  ),
                }}
              />
            }
          </div>
        ),
      }}
    />
  );
}
function marble(lotus) {
  let { value } = lotus,
    mint = value === "allowed" && "bg-token-charts-green",
    nova = value === "denied" && "bg-token-editor-error-foreground",
    olive = value === "default" && "bg-token-text-tertiary",
    prism = IntlProvider("size-2 shrink-0 rounded-full", mint, nova, olive);
  return <span className={prism} />;
}
function nickel(quill) {
  let { disabled, labelId, onSelect, value, valueId } = quill,
    reef = `${labelId} ${valueId}`,
    sage = (
      <Bravo
        {...{
          value,
        }}
      />
    );
  let topaz = ui(value);
  let ultra = (
    <span id={valueId} className="truncate">
      {topaz}
    </span>
  );
  let vapor = (
    <DropdownTriggerButton
      aria-labelledby={reef}
      className="w-36!"
      disabled={disabled}
    >
      {sage}
      {ultra}
    </DropdownTriggerButton>
  );
  let wheat = harbor.map((item) => (
    <DropdownMenu.Item
      key={item}
      {...{
        RightIcon: item === value ? AppIconZlt : undefined,
        onSelect: () => {
          onSelect(item);
        },
        children: (
          <div className="flex min-w-0 items-center gap-2">
            {
              <Bravo
                {...{
                  value: item,
                }}
              />
            }
            <span className="truncate">{ui(item)}</span>
          </div>
        ),
      }}
    />
  ));
  let yarn = <div className="flex flex-col">{wheat}</div>;
  return (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentClassName: "w-36!",
        disabled,
        triggerButton: vapor,
        children: yarn,
      }}
    />
  );
}
function onyx({ row }) {
  let zephyr = CodexPluginActionType(appScopeAtom),
    acorn = useIntl(),
    [bloom, coral] = falcon.useState(false),
    [drift, eagle] = falcon.useState(false),
    frost = AppInitialFO(),
    glide = async () => {
      if (!drift) {
        eagle(true);
        try {
          await frost.mutateAsync(
            bravo({
              nextValues: _i,
              origin: row.origin,
              resources: Object.values(indigo),
              values: row.values,
            }),
          );
          coral(false);
        } catch {
          zephyr.get(toastAtom).danger(echo());
        } finally {
          eagle(false);
        }
      }
    };
  return (
    <>
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            "aria-label": acorn.formatMessage(
              {
                id: "settings.browserUse.sitePermissions.clearAriaLabel",
                defaultMessage: "Remove custom permissions for {origin}",
                description:
                  "Aria label for button that removes all custom browser site permissions",
              },
              {
                origin: row.origin,
              },
            ),
            color: "ghost",
            disabled: drift,
            onClick: () => {
              coral(true);
            },
            size: "icon",
            children: (
              <AppIconBO
                {...{
                  className: "icon-2xs",
                }}
              />
            ),
          }}
        />
      }
      {
        <UsePointerSurfaceInteractionGate
          {...{
            open: bloom,
            onOpenChange: coral,
            size: "compact",
            children: (
              <DeferredUiB
                {...{
                  as: "form",
                  onSubmit: (event) => {
                    event.preventDefault();
                    glide();
                  },
                  children: [
                    <DeferredUiUStub
                      {...{
                        children: (
                          <DeferredUiH
                            {...{
                              title: (
                                <RealtimeVoiceHostIdStub
                                  {...{
                                    asChild: true,
                                    children: (
                                      <span>
                                        {
                                          <MemoizedFormattedMessage
                                            {...{
                                              id: "settings.browserUse.sitePermissions.removeDialog.title",
                                              defaultMessage:
                                                "Remove custom permissions for {origin}?",
                                              description:
                                                "Confirmation dialog title for removing custom browser site permissions",
                                              values: {
                                                origin: row.origin,
                                              },
                                            }}
                                          />
                                        }
                                      </span>
                                    ),
                                  }}
                                />
                              ),
                              subtitle: (
                                <IsStartingProcessExpired
                                  {...{
                                    asChild: true,
                                    children: (
                                      <span>
                                        {
                                          <MemoizedFormattedMessage
                                            {...{
                                              id: "settings.browserUse.sitePermissions.removeDialog.subtitle",
                                              defaultMessage:
                                                "This resets this site's custom permissions to their defaults",
                                              description:
                                                "Confirmation dialog subtitle for removing custom browser site permissions",
                                            }}
                                          />
                                        }
                                      </span>
                                    ),
                                  }}
                                />
                              ),
                            }}
                          />
                        ),
                      }}
                    />,
                    <DeferredUiUStub
                      {...{
                        children: (
                          <SetRemoteControlEnabledForHost
                            {...{
                              children: [
                                <ReadLoginRouteQuerySnapshot
                                  {...{
                                    color: "ghost",
                                    disabled: drift,
                                    onClick: () => {
                                      coral(false);
                                    },
                                    type: "button",
                                    children: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "settings.browserUse.sitePermissions.removeDialog.cancel",
                                          defaultMessage: "Cancel",
                                          description:
                                            "Cancel button label for removing custom browser site permissions",
                                        }}
                                      />
                                    ),
                                  }}
                                />,
                                <ReadLoginRouteQuerySnapshot
                                  {...{
                                    color: "danger",
                                    loading: drift,
                                    type: "submit",
                                    children: (
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "settings.browserUse.sitePermissions.removeDialog.confirm",
                                          defaultMessage: "Remove",
                                          description:
                                            "Confirm button label for removing custom browser site permissions",
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
            ),
          }}
        />
      }
    </>
  );
}
