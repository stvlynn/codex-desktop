// Restored from ref/webview/assets/hooks-settings-wtkEXqdK.js
// Wave FZ — full polished body from `hooks-settings-wtkEXqdK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 81/112).
// Wave5d — FZ repair from fz-pascal L=2170 sus=35; JSX PascalCase + careful split.
// Wave5d careful split 1/4
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { useResolvedAppByIdOrDisplayName } from "../../apps/use-resolved-app-by-id-or-display-name";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Cd_Init,
  ensureComposerEsm_Ed_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Td_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useLocation } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { applyActive as ApplyActive } from "../../conversation/apply-active";
import { classifyActivityItemGrouping } from "../../conversation/classify-activity-item-grouping";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL } from "../../docs/codex-doc-urls";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPd } from "../../icons/app-icon-pd";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredZft as DeferredZft } from "../../ui/deferred-zft";
import { ExpandableStatusSection } from "../../ui/expandable-status-section";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { resetStoreAtomValueSf as ResetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import {
  computeHookAttention,
  summarizeHooksByEvent,
} from "../hooks-event-helpers";
import { listHooksForHostQueryAtom } from "../hooks-query-atoms";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useChronicleSettingsSection as UseChronicleSettingsSection } from "../use-chronicle-settings-section";
const deferredUiU: any = undefined;
// Wave5d soft JSX companions.
function Alpha(
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
const HooksSettingsHelper4: any = undefined;
const HooksSettingsHelper5: any = undefined;
const applyActive: any = undefined;
const at: any = undefined;
const deferredUiB: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiFd: any = undefined;
const deferredUiH: any = undefined;
const deferredZft: any = undefined;
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
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiUStub: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureUseGitRepoLiveQueryInit@hooks/use-git-repo-live-query.ts) */
const AppInitialA3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:writeHooksStateMutationAtom@settings/hooks-query-atoms.ts) */
const AppInitialAz: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildRenderableAgentItems@conversation/build-renderable-agent-items.ts) */
const AppInitialDd: any = undefined;
/** Wave FZ unresolved companion (missing-export:hooks/deferred-dx.tsx) */
const DeferredDX: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:applyHooksSettingsSourceParams@settings/hooks-source-helpers.ts) */
const AppInitialEl: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFd@ui/deferred-ui-fd.tsx) */
const AppInitialFd: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/set-account-voice-and-invalidate-catalog.ts) */
const setAccountVoiceAndInvalidateCatalog: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/launch-subagent-from-source-thread.ts) */
const launchSubagentFromSourceThread: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensurePluginPageAnalyticsInit@boundaries/browser-use-plugin-facades.ts) */
const AppInitialKz: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAppIconIdInit@icons/app-icon-id.tsx) */
const AppInitialLd: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureHooksQueriesInit@settings/hooks-query-atoms.ts) */
const AppInitialOz: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_Qtt_Init@composer/composer-esm-inits.ts) */
const AppInitialQtt: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsR3Init: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureHooksSettingsRouteInit@settings/hooks-format-helpers.ts) */
const AppInitialTl: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:threadStarted@conversation/thread-started.ts) */
const AppInitialTmt: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/unified-sidebar-chat-order-v12.tsx) */
const AppInitialUd: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useSearchParams@boundaries/react-router-navigation.tsx) */
const AppInitialW5: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:localProjectRootsAtom@settings/hooks-query-atoms.ts) */
const AppInitialX4: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
function basalt(quill, reef) {
  let sage =
      quill.issueCount > 0
        ? reef.formatMessage(
            {
              id: "settings.hooks.summary.issueCounts",
              defaultMessage:
                "{issueCount, plural, one {# issue} other {# issues}}",
              description: "Hook load issue count for a project row",
            },
            {
              issueCount: quill.issueCount,
            },
          )
        : "",
    topaz =
      quill.needsReview > 0
        ? reef.formatMessage(
            {
              id: "settings.hooks.summary.reviewCounts",
              defaultMessage:
                "{needsReview, plural, one {# needs review} other {# need review}}",
              description: "Review-needed hook count for a project row",
            },
            {
              needsReview: quill.needsReview,
            },
          )
        : "";
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.hooks.summary.attentionCounts",
        defaultMessage: "{issueCount}{separator}{needsReview}",
        description:
          "Combined hook load issue and review-needed counts for a project row",
        values: {
          issueCount: sage,
          separator: sage !== "" && topaz !== "" ? " · " : "",
          needsReview: topaz,
        },
      }}
    />
  );
}
var cedar,
  daisy = esmInit(() => {
    ensureIntlFormattersInit();
  }),
  ember,
  flint,
  garnet = esmInit(() => {
    react();
    flint = (ultra) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...ultra}
      >
        <path d="M15.344 10.036a1 1 0 1 0-1.688-1.072l-2.474 3.896-.943-1.034a1 1 0 0 0-1.478 1.348l1.826 2a1 1 0 0 0 1.583-.138l3.174-5Z" />
        <path
          fillRule="evenodd"
          d="M13.203 1.935a3 3 0 0 0-2.405 0l-6 2.625A3 3 0 0 0 3 7.308V13a9 9 0 1 0 18 0V7.308a3 3 0 0 0-1.797-2.748l-6-2.625Zm-1.604 1.832a1 1 0 0 1 .802 0l6 2.625a1 1 0 0 1 .599.916V13a7 7 0 1 1-14 0V7.308a1 1 0 0 1 .6-.916l6-2.625Z"
          clipRule="evenodd"
        />
      </svg>
    );
  });
function hazel(vapor) {
  let {
      eventName,
      hostId,
      isRemoteHost,
      hooks,
      projectRoot,
      onToggleHookEnabled,
      onTrustHook,
    } = vapor,
    wheat = useIntl(),
    [yarn, zephyr] = mint.useState(null),
    acorn,
    bloom,
    coral;
  {
    let eagle = ensureComposerEsm_Ed_Init(hooks, eventName);
    coral = "border-t border-token-border px-3";
    acorn = "divide-y-[0.5px] divide-token-border";
    let frost;
    frost = (event, glide) => {
      let honey = ensureComposerEsm_Cd_Init(event),
        iris = !isRemoteHost && !event.isManaged,
        jewel = yarn === event.key;
      return (
        <div key={event.key} className={IntlProvider(jewel && "pb-2")}>
          <div className="-mx-3 flex items-center gap-2 px-3 hover:bg-token-list-hover-background">
            <div className="relative flex min-w-0 flex-1">
              <button
                type="button"
                aria-expanded={jewel}
                className={IntlProvider(
                  "flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 pl-7 text-left text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
                  iris ? "pr-12" : "pr-6",
                )}
                onClick={() => {
                  zephyr(jewel ? null : event.key);
                }}
              >
                <span className="shrink-0 text-token-text-primary">
                  {AppInitialDd(glide, wheat)}
                </span>
              </button>
              {iris ? (
                <OptionalTooltip
                  {...{
                    triggerAsChild: true,
                    tooltipContent: (
                      <MemoizedFormattedMessage
                        {...{
                          ...olive.openConfigFile,
                        }}
                      />
                    ),
                    children: (
                      <button
                        type="button"
                        aria-label={wheat.formatMessage(olive.openConfigFile)}
                        className="absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-token-text-tertiary hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
                        onClick={() => {
                          readCodexHomeFromQuery({
                            cwd:
                              event.source === "project"
                                ? identityCwd(projectRoot)
                                : null,
                            hostId,
                            path: event.sourcePath,
                          });
                        }}
                      >
                        {
                          <AppIconKtt
                            {...{
                              className: "icon-xxs",
                              "aria-hidden": true,
                            }}
                          />
                        }
                      </button>
                    ),
                  }}
                />
              ) : null}
              {
                <AppIconSft
                  {...{
                    "aria-hidden": true,
                    className: IntlProvider(
                      "icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-token-text-secondary",
                      jewel && "rotate-180",
                    ),
                  }}
                />
              }
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {honey ? (
                <OptionalTooltip
                  {...{
                    delayDuration: 0,
                    tooltipContent:
                      event.trustStatus === "modified" ? (
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.hooks.event.changedReviewReason",
                            defaultMessage: "Hook changed since last trusted",
                            description:
                              "Tooltip shown for changed hooks awaiting review",
                          }}
                        />
                      ) : (
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.hooks.event.untrustedReviewReason",
                            defaultMessage: "New hook",
                            description:
                              "Tooltip shown for hooks awaiting first review",
                          }}
                        />
                      ),
                    children: (
                      <ReadLoginRouteQuerySnapshot
                        {...{
                          color: "outline",
                          size: "composerSm",
                          onClick: () => {
                            onTrustHook(event);
                          },
                          children: [
                            <Alpha
                              {...{
                                className: "icon-2xs",
                              }}
                            />,
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.hooks.event.trust",
                                defaultMessage: "Trust",
                                description: "Button label to trust a hook",
                              }}
                            />,
                          ],
                        }}
                      />
                    ),
                  }}
                />
              ) : null}
              {event.isManaged ? (
                <OptionalTooltip
                  {...{
                    delayDuration: 0,
                    tooltipContent: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.hooks.event.managedTooltip",
                          defaultMessage: "Managed hooks are always on",
                          description: "Tooltip shown for admin-managed hooks",
                        }}
                      />
                    ),
                    children: (
                      <span
                        className="inline-flex cursor-not-allowed"
                        tabIndex={0}
                      >
                        <AppInitialYC
                          ariaLabel={AppInitialDd(glide, wheat)}
                          checked={true}
                          className="pointer-events-none"
                          disabled={true}
                          onChange={ivory}
                        />
                      </span>
                    ),
                  }}
                />
              ) : (
                <OptionalTooltip
                  {...{
                    delayDuration: 0,
                    tooltipContent: honey ? (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.hooks.event.disabledUntilTrustedTooltip",
                          defaultMessage: "Disabled until hook is trusted",
                          description:
                            "Tooltip shown for review-needed hooks whose toggle cannot be enabled yet",
                        }}
                      />
                    ) : null,
                    children: (
                      <span
                        className={
                          honey ? "inline-flex cursor-not-allowed" : ""
                        }
                        tabIndex={honey ? 0 : undefined}
                      >
                        <AppInitialYC
                          ariaLabel={AppInitialDd(glide, wheat)}
                          checked={event.enabled && !honey}
                          className={honey ? "pointer-events-none" : ""}
                          disabled={honey}
                          onChange={(knoll) => {
                            onToggleHookEnabled(event, knoll);
                          }}
                        />
                      </span>
                    ),
                  }}
                />
              )}
            </div>
          </div>
          {jewel ? (
            <div className="pl-7">
              {
                <HooksSettingsHelper4
                  {...{
                    hook: event,
                  }}
                />
              }
            </div>
          ) : null}
        </div>
      );
    };
    bloom = eagle.map(frost);
  }
  let drift = <div className={acorn}>{bloom}</div>;
  return <div className={coral}>{drift}</div>;
}
function ivory() {}
function jasper(lunar) {
  let { hook } = lunar,
    moss = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.hooks.event.handler",
          defaultMessage: "Handler",
          description: "Label for the handler type of a configured hook",
        }}
      />
    );
  let north = (
    <_t
      {...{
        label: moss,
        children: (
          <HooksSettingsHelper5
            {...{
              handlerType: hook.handlerType,
            }}
          />
        ),
      }}
    />
  );
  let orbit =
    hook.command == null ? null : (
      <_t
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.hooks.event.command",
                defaultMessage: "Command",
                description: "Label for the command executed by a hook",
              }}
            />
          ),
          children: (
            <code className="block font-mono text-xs break-all whitespace-pre-wrap">
              {hook.command}
            </code>
          ),
        }}
      />
    );
  let pine =
    hook.matcher == null ? null : (
      <_t
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.hooks.event.matcher",
                defaultMessage: "Matcher",
                description: "Label for the matcher configured for a hook",
              }}
            />
          ),
          children: (
            <code className="font-mono text-xs break-all">{hook.matcher}</code>
          ),
        }}
      />
    );
  let quest = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.hooks.event.timeout",
        defaultMessage: "Timeout",
        description: "Label for a hook execution timeout",
      }}
    />
  );
  let ridge = (
    <_t
      {...{
        label: quest,
        children: (
          <DeferredZft
            {...{
              value: hook.timeoutSec,
              style: "unit",
              unit: "second",
              unitDisplay: "narrow",
            }}
          />
        ),
      }}
    />
  );
  let storm =
    hook.statusMessage == null ? null : (
      <_t
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.hooks.event.statusMessage",
                defaultMessage: "Status message",
                description:
                  "Label for the status message configured for a hook",
              }}
            />
          ),
          children: hook.statusMessage,
        }}
      />
    );
  return (
    <div className="mt-2 overflow-hidden rounded-md border border-token-border text-sm">
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3 py-3">
        {north}
        {orbit}
        {pine}
        {ridge}
        {storm}
      </dl>
    </div>
  );
}
function _t(tide) {
  let { label, children } = tide,
    unity = <dt className="text-token-text-secondary">{label}</dt>;
  let vale = <dd className="min-w-0 text-token-text-primary">{children}</dd>;
  return (
    <>
      {unity}
      {vale}
    </>
  );
}
function kelp(wave) {
  let { handlerType } = wave;
  switch (handlerType) {
    case "command": {
      let apex;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.event.commandHandler",
            defaultMessage: "Command",
            description: "Label for a command hook handler type",
          }}
        />
      );
    }
    case "prompt": {
      let brook;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.event.promptHandler",
            defaultMessage: "Prompt",
            description: "Label for a prompt hook handler type",
          }}
        />
      );
    }
    case "agent": {
      let cliff;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.event.agentHandler",
            defaultMessage: "Agent",
            description: "Label for an agent hook handler type",
          }}
        />
      );
    }
  }
}
var lotus,
  mint,
  nova,
  olive,
  prism = esmInit(() => {
    lotus = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    strongMarkerFromOptions();
    mint = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    DeferredDX();
    ensureAppIconSftInit();
    AppInitialQtt();
    garnet();
    AppIconPd();
    groupActivityItemsWithSourceIndex();
    olive = identity({
      openConfigFile: {
        id: "settings.hooks.event.openConfigFile",
        defaultMessage: "Open config file",
        description:
          "Button label for opening the config file that defines a hook",
      },
    });
  });
