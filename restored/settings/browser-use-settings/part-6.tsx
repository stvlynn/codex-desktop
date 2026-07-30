// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/13
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
function EnsurePersonalizationCInit(
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
const deferredUiUStub: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
function jade({ onOpenChange, row, visibleResources }) {
  let lemon = CodexPluginActionType(appScopeAtom),
    [marble, nickel] = gamma.useState(row.values),
    [onyx, pearl] = gamma.useState(false),
    quartz = AppInitialFO(),
    river = async () => {
      if (!onyx) {
        pearl(true);
        try {
          await quartz.mutateAsync(
            alpha({
              nextValues: marble,
              origin: row.origin,
              resources: visibleResources,
              values: row.values,
            }),
          );
          onOpenChange(false);
        } catch {
          lemon.get(toastAtom).danger(falcon());
        } finally {
          pearl(false);
        }
      }
    };
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        onOpenChange,
        size: "compact",
        children: (
          <DeferredUiB
            {...{
              as: "form",
              onSubmit: (event) => {
                event.preventDefault();
                river();
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
                                          id: "settings.browserUse.sitePermissions.customDialog.title",
                                          defaultMessage: "Custom permissions",
                                          description:
                                            "Title for custom browser site permissions dialog",
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
                                  <div className="flex flex-col gap-1">
                                    <span className="text-token-text-primary">
                                      {row.origin}
                                    </span>
                                    {
                                      <MemoizedFormattedMessage
                                        {...{
                                          id: "settings.browserUse.sitePermissions.customDialog.subtitle",
                                          defaultMessage:
                                            "Choose what ChatGPT can do on this site",
                                          description:
                                            "Subtitle for custom browser site permissions dialog explaining that the permissions will change Codex's behavior on the site",
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
                    ),
                  }}
                />,
                <DeferredUiUStub
                  {...{
                    children: (
                      <ParseUrlOrFallback
                        {...{
                          className: "-mx-5 bg-transparent",
                          variant: "secondary",
                          children: visibleResources.map((item) => {
                            let slate = `browser-use-custom-${item}-label`,
                              timber = `browser-use-custom-${item}-value`;
                            return (
                              <EnsurePersonalizationCInit
                                key={item}
                                {...{
                                  label: <span id={slate}>{delta(item)}</span>,
                                  control: (
                                    <Alpha
                                      {...{
                                        disabled: onyx,
                                        labelId: slate,
                                        value: marble[item],
                                        valueId: timber,
                                        onSelect: (umbra) => {
                                          nickel({
                                            ...marble,
                                            [item]: umbra,
                                          });
                                        },
                                      }}
                                    />
                                  ),
                                  variant: "nested",
                                }}
                              />
                            );
                          }),
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
                                color: "outline",
                                disabled: onyx,
                                onClick: () => {
                                  onOpenChange(false);
                                },
                                type: "button",
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.browserUse.sitePermissions.customDialog.cancel",
                                      defaultMessage: "Cancel",
                                      description:
                                        "Cancel button label for custom browser site permissions dialog",
                                    }}
                                  />
                                ),
                              }}
                            />,
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                color: "primary",
                                loading: onyx,
                                type: "submit",
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.browserUse.sitePermissions.customDialog.done",
                                      defaultMessage: "Done",
                                      description:
                                        "Done button label for custom browser site permissions dialog",
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
  );
}
function kite({ onOpenChange, open, visibleResources }) {
  let violet = CodexPluginActionType(appScopeAtom),
    willow = useIntl(),
    [xenon, yellow] = gamma.useState(""),
    [zinc, amber] = gamma.useState("allowed"),
    [basalt, cedar] = gamma.useState(indigo),
    [daisy, ember] = gamma.useState(false),
    [flint, garnet] = gamma.useState(false),
    hazel = AppInitialFO(),
    ivory = () => {
      yellow("");
      amber("allowed");
      cedar(indigo);
      ember(false);
    },
    jasper = async () => {
      let kelp = xenon.trim();
      if (!(kelp.length === 0 || flint)) {
        garnet(true);
        try {
          await hazel.mutateAsync(
            alpha({
              nextValues: {
                ...basalt,
                origin: zinc,
              },
              origin: kelp,
              resources: visibleResources,
              values: _i,
            }),
          );
          ivory();
          onOpenChange(false);
        } catch {
          violet.get(toastAtom).danger(falcon());
        } finally {
          garnet(false);
        }
      }
    };
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open,
        onOpenChange: (lotus) => {
          lotus || ivory();
          onOpenChange(lotus);
        },
        size: "compact",
        children: (
          <DeferredUiB
            {...{
              as: "form",
              onSubmit: (event) => {
                event.preventDefault();
                jasper();
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
                                          id: "settings.browserUse.sitePermissions.addDialog.title",
                                          defaultMessage: "Add site permission",
                                          description:
                                            "Title for add browser site permission dialog",
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
                                          id: "settings.browserUse.sitePermissions.addDialog.subtitle",
                                          defaultMessage:
                                            "Choose what access ChatGPT has on a site",
                                          description:
                                            "Subtitle for add browser site permission dialog",
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
                    className: "gap-3",
                    children: [
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-medium">
                          {
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.sitePermissions.addDialog.siteLabel",
                                defaultMessage: "Site",
                                description:
                                  "Site label for add browser site permission dialog",
                              }}
                            />
                          }
                        </span>
                        <input
                          autoFocus={true}
                          aria-label={willow.formatMessage({
                            id: "settings.browserUse.sitePermissions.addDialog.siteAriaLabel",
                            defaultMessage: "Site",
                            description:
                              "Aria label for site input in add browser site permission dialog",
                          })}
                          className="rounded-xl border border-token-border px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none"
                          disabled={flint}
                          onChange={(event) => {
                            yellow(event.currentTarget.value);
                          }}
                          placeholder={willow.formatMessage({
                            id: "settings.browserUse.domains.addDialogPlaceholder",
                            defaultMessage: "example.com",
                            description:
                              "Placeholder for browser use domain input",
                          })}
                          value={xenon}
                        />
                      </label>,
                      <div className="flex flex-col gap-1.5">
                        <span
                          id="browser-use-add-browsing-label"
                          className="text-sm font-medium"
                        >
                          {
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.browserUse.sitePermissions.addDialog.behaviorLabel",
                                defaultMessage: "Browse",
                                description:
                                  "Behavior label for add browser site permission dialog",
                              }}
                            />
                          }
                        </span>
                        {
                          <DropdownMenuPopover
                            {...{
                              align: "start",
                              contentWidth: "menuWide",
                              disabled: flint,
                              triggerButton: (
                                <DropdownTriggerButton
                                  aria-labelledby={`${"browser-use-add-browsing-label"} ${"browser-use-add-browsing-value"}`}
                                  className="w-full justify-between"
                                  disabled={flint}
                                >
                                  {
                                    <Bravo
                                      {...{
                                        value: zinc,
                                      }}
                                    />
                                  }
                                  <span
                                    id="browser-use-add-browsing-value"
                                    className="truncate"
                                  >
                                    {echo(zinc)}
                                  </span>
                                </DropdownTriggerButton>
                              ),
                              children: (
                                <div className="flex flex-col">
                                  {harbor.map((item) => (
                                    <DropdownMenu.Item
                                      key={item}
                                      {...{
                                        RightIcon:
                                          item === zinc
                                            ? AppIconZlt
                                            : undefined,
                                        onSelect: () => {
                                          amber(item);
                                        },
                                        children: (
                                          <div className="flex items-center gap-2">
                                            {
                                              <Bravo
                                                {...{
                                                  value: item,
                                                }}
                                              />
                                            }
                                            <span>{echo(item)}</span>
                                          </div>
                                        ),
                                      }}
                                    />
                                  ))}
                                </div>
                              ),
                            }}
                          />
                        }
                      </div>,
                      daisy ? (
                        <ParseUrlOrFallback
                          {...{
                            className: "-mx-5 !rounded-none !bg-transparent",
                            variant: "secondary",
                            children: visibleResources.map((item) => {
                              if (item === "origin") return null;
                              let mint = `browser-use-add-${item}-label`,
                                nova = `browser-use-add-${item}-value`;
                              return (
                                <EnsurePersonalizationCInit
                                  key={item}
                                  {...{
                                    label: <span id={mint}>{delta(item)}</span>,
                                    control: (
                                      <Alpha
                                        {...{
                                          disabled: flint,
                                          labelId: mint,
                                          value: basalt[item],
                                          valueId: nova,
                                          onSelect: (olive) => {
                                            cedar({
                                              ...basalt,
                                              [item]: olive,
                                            });
                                          },
                                        }}
                                      />
                                    ),
                                    variant: "nested",
                                  }}
                                />
                              );
                            }),
                          }}
                        />
                      ) : null,
                    ],
                  }}
                />,
                <DeferredUiUStub
                  {...{
                    children: (
                      <SetRemoteControlEnabledForHost
                        {...{
                          children: [
                            !daisy && visibleResources.length > 1 ? (
                              <ReadLoginRouteQuerySnapshot
                                {...{
                                  className: "mr-auto",
                                  color: "ghost",
                                  disabled: flint,
                                  onClick: () => {
                                    ember(true);
                                  },
                                  type: "button",
                                  children: (
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "settings.browserUse.sitePermissions.addDialog.moreOptions",
                                        defaultMessage: "More options",
                                        description:
                                          "Button label to reveal advanced options when adding browser site permissions",
                                      }}
                                    />
                                  ),
                                }}
                              />
                            ) : null,
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                color: "outline",
                                disabled: flint,
                                onClick: () => {
                                  ivory();
                                  onOpenChange(false);
                                },
                                type: "button",
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.browserUse.domains.addDialogCancel",
                                      defaultMessage: "Cancel",
                                      description:
                                        "Cancel button label for add browser domain dialog",
                                    }}
                                  />
                                ),
                              }}
                            />,
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                color: "primary",
                                disabled: xenon.trim().length === 0 || flint,
                                loading: flint,
                                type: "submit",
                                children: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.browserUse.domains.addDialogConfirm",
                                      defaultMessage: "Add",
                                      description:
                                        "Confirm button label for add browser domain dialog",
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
  );
}
