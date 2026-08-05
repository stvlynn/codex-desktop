// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { NOOP_ANALYTICS_CLIENT } from "../../analytics/noop-analytics-client";
import {
  AvatarOverlayPillDismissButton,
  AvatarOverlayPillDismissButtonAction,
  AvatarOverlayPillDismissButtonLabel,
  AvatarOverlayPillDismissButtonMark,
  AvatarOverlayPillDismissButtonOption,
  AvatarOverlayPillDismissButtonTrigger,
  avatarOverlayPillDismissButtonValue,
  dismissAvatarOverlayPill,
  ensureAvatarOverlayPillDismissButtonAtomsInit,
  ensureAvatarOverlayPillDismissButtonHelpersInit,
  ensureAvatarOverlayPillDismissButtonIconsInit,
  ensureAvatarOverlayPillDismissButtonInit,
  ensureAvatarOverlayPillDismissButtonStylesInit,
  ensureAvatarOverlayPillDismissButtonUiInit,
  ensureAvatarOverlayPillDismissButtonYieldInit,
  formatAvatarOverlayPillDismiss,
  getAvatarOverlayPillDismissState,
  renderAvatarOverlayPillDismissButton,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import {
  AvatarMascotButton,
  ensureAvatarMascotButtonInit,
} from "../../avatar/avatar-mascot-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { chatgpt2 } from "../../browser/chatgpt2";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { ApplyActive } from "../../conversation/apply-active";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import {
  avatarOverlayMascotAspectRatio,
  avatarOverlayMascotWidthStyle,
  clampAvatarOverlayMascotWidthPx,
  defaultAvatarOverlayMascotWidthPx,
  ensureAvatarOverlayMascotSizeInit,
  useAvatarOverlayMascotSize,
} from "../../desktop/avatar-overlay-mascot-size";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { createDictationTranscriptSession } from "../../dictation/create-dictation-transcript-session";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureHooksQueriesInit,
  WriteHooksStateMutationAtom,
} from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { BulletSeparator } from "../../ui/bullet-separator";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  ensureRealtimeVoiceHandoffTargetInit,
  RealtimeVoiceHandoffTarget,
} from "../../ui/realtime-voice-handoff-target";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import {
  createResizeObserver,
  ensureCreateResizeObserverInit,
} from "../../utils/create-resize-observer";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { parseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { AnnotationFocusMode } from "../annotation-focus-mode";
import { buildAvatarOverlayAnalyticsPayload } from "../build-avatar-overlay-analytics-payload";
import {
  avatarOverlaySelectionA,
  avatarOverlaySelectionB,
  avatarOverlaySelectionD,
  avatarOverlaySelectionF,
  avatarOverlaySelectionG,
  avatarOverlaySelectionH,
  avatarOverlaySelectionI,
  avatarOverlaySelectionL,
  avatarOverlaySelectionM,
  avatarOverlaySelectionN,
  avatarOverlaySelectionO,
  avatarOverlaySelectionP,
  avatarOverlaySelectionR,
  avatarOverlaySelectionT,
  avatarOverlaySelectionU,
  avatarOverlaySelectionUpperC,
  avatarOverlaySelectionUpperS,
  avatarOverlaySelectionV,
  avatarOverlaySelectionX,
  avatarOverlaySelectionY,
} from "../use-avatar-overlay-selection";

// Cross-part stubs (same-package helpers live in sibling parts).
const $: any = undefined;
const AppInitialFct: any = undefined;
const AppInitialSct: any = undefined;
const AppInitialXct: any = undefined;
const DeferredUiN2: any = undefined;
const DeferredUiV2: any = undefined;
const IntlProvider: any = undefined;
const ListPermissionProfiles: any = undefined;
const AvatarOverlayPageHelper31: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const avatarOverlayPillDismissButtonUnderscore: any = undefined;
const initializeAppHostServices: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
function echo({
  isReplying,
  notification,
  notificationIndex,
  onDismissNotification,
  onOpenNotificationActions,
  onCloseReply,
  onOpenReply,
  onReplyCaretPointChange,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onSubmitNotificationReply,
  prefersReducedMotion,
  replyInputRef,
}) {
  let flint = useIntl(),
    garnet = avatarOverlaySelectionUpperS(notification)
      ? notification.localConversationId
      : null,
    hazel = CodexBrowserSurfaceActionType(DeferredUiN2, garnet),
    ivory =
      hazel == null
        ? null
        : AvatarOverlayPillDismissButtonLabel(hazel.items, flint),
    jasper = AvatarOverlayPillDismissButtonMark(notification),
    kelp = flint.formatMessage(jasper.labelMessage),
    lotus =
      ivory ??
      notification.body ??
      flint.formatMessage(jasper.fallbackBodyMessage),
    mint = notification.waitingRequest,
    nova = mint == null ? lotus : formatAvatarOverlayPillDismiss(mint, flint),
    olive = nova.replace(/[.?!]+$/, ""),
    prism = nova === kelp ? kelp : `${kelp}. ${olive}`,
    quill =
      notification.action == null
        ? `${notification.title}. ${prism}`
        : `${notification.title}. ${prism}. ${flint.formatMessage(violet.openNotification)}`,
    reef = notification.action != null,
    sage = notification.kind !== "activity" && onDismissNotification != null,
    topaz =
      notification.notificationPreferenceId != null &&
      onOpenNotificationActions != null,
    [ultra, vapor] = timber.useState(false),
    [wheat, yarn] = timber.useState(false),
    [zephyr, acorn] = timber.useState(""),
    [bloom, coral] = timber.useState(null),
    [drift, eagle] = timber.useState(false),
    [frost, glide] = timber.useState(0),
    [honey, iris] = timber.useState(false),
    jewel = timber.useRef(null),
    knoll = timber.useRef(ultra),
    lunar = timber.useRef(undefined),
    moss = mint == null ? or : zinc,
    north = timber.useCallback((vale) => {
      if ((lunar.current?.(), (lunar.current = undefined), vale == null))
        return;
      let wave = () => {
        let apex = vale.scrollHeight;
        glide((cliff) => (cliff === apex ? cliff : apex));
        let brook = nickel(vale);
        iris((dusk) => {
          let elm = (knoll.current && dusk) || brook;
          return dusk === elm ? dusk : elm;
        });
      };
      wave();
      lunar.current = createResizeObserver({
        axis: "both",
        target: vale,
        onChange: wave,
      });
    }, []);
  timber.useLayoutEffect(() => {
    knoll.current = ultra;
  }, [ultra]);
  let orbit = frost > moss + basalt || honey,
    pine = orbit && ultra && !isReplying,
    quest =
      notification.controlTarget?.type === "app-server-conversation" &&
      onSubmitNotificationReply != null,
    ridge = zephyr.trim(),
    storm = prefersReducedMotion
      ? {
          duration: 0,
        }
      : {
          duration: drift ? 0.2 : 0.28,
          ease: [0.16, 1, 0.3, 1],
        },
    tide = async (event) => {
      if (
        (event.preventDefault(),
        event.stopPropagation(),
        !(!quest || ridge.length === 0 || wheat))
      ) {
        yarn(true);
        coral(null);
        try {
          await onSubmitNotificationReply(notification, ridge);
          acorn("");
          onCloseReply();
        } catch {
          coral(flint.formatMessage(violet.notificationReplyError));
        } finally {
          yarn(false);
        }
      }
    },
    unity = (fern) => {
      let grove = AvatarOverlayPillDismissButtonOption(fern);
      jewel.current !== grove &&
        ((jewel.current = grove),
        onReplyCaretPointChange(AvatarOverlayPillDismissButtonAction(fern)));
    };
  return (
    <ensureIntlFormattersInit.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 4,
      }}
      role="listitem"
      className="group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left"
      data-avatar-overlay-measure="notification-tray-row"
      transition={
        prefersReducedMotion
          ? {
              duration: 0,
            }
          : {
              delay: Math.min(notificationIndex, 3) * yellow,
              duration: 0.18,
              ease: "easeOut",
            }
      }
      onBlurCapture={(event) => {
        let hill = event.relatedTarget;
        (hill instanceof Node && event.currentTarget.contains(hill)) ||
          eagle(false);
      }}
      onFocusCapture={() => {
        eagle(true);
      }}
      onPointerEnter={() => {
        eagle(true);
      }}
      onPointerLeave={() => {
        eagle(false);
      }}
      onContextMenu={(event) => {
        let isle = event.target;
        !topaz ||
          (isle instanceof HTMLElement &&
            (isle.isContentEditable ||
              isle.closest(
                "input, textarea, select, [contenteditable='true']",
              ) != null)) ||
          (event.preventDefault(),
          event.stopPropagation(),
          onOpenNotificationActions(notification));
      }}
    >
      <div
        className={IntlProvider(
          "relative z-[1] overflow-hidden rounded-[18px] forced-colors:bg-[Canvas]",
          avatarOverlayPillDismissButtonValue.cssMaterial,
        )}
      >
        {
          <ensureIntlFormattersInit.div
            role={reef || topaz ? "button" : undefined}
            className={IntlProvider(
              "block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]",
              sage ? "pl-5" : "pl-3",
              reef ? "cursor-interaction" : "cursor-default",
            )}
            tabIndex={reef || topaz ? 0 : undefined}
            transition={
              prefersReducedMotion
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.12,
                    ease: "easeOut",
                  }
            }
            whileTap={
              reef && !prefersReducedMotion
                ? {
                    scale: 0.995,
                  }
                : undefined
            }
            aria-label={
              reef
                ? quill
                : topaz
                  ? flint.formatMessage(
                      subAgentFromThreadSource.notificationActions,
                      {
                        title: notification.title,
                      },
                    )
                  : undefined
            }
            onClick={() => {
              reef && onRunNotificationAction?.(notification);
            }}
            onKeyDown={(event) => {
              if (
                !(
                  (!reef && !topaz) ||
                  (event.key !== "Enter" && event.key !== " ")
                )
              ) {
                if ((event.preventDefault(), reef)) {
                  onRunNotificationAction?.(notification);
                  return;
                }
                onOpenNotificationActions?.(notification);
              }
            }}
          >
            <span
              className={IntlProvider(
                "flex min-w-0 items-center",
                (!notification.isLoading || orbit) && "pr-7",
              )}
            >
              <span
                className={IntlProvider(
                  "text-size-chat min-w-0 truncate leading-[17px]",
                  notification.kind === "activity"
                    ? "text-token-text-secondary"
                    : "font-semibold text-token-foreground",
                )}
              >
                {notification.title}
              </span>
            </span>
            <ensureIntlFormattersInit.div
              ref={north}
              animate={{
                maxHeight: pine ? amber : moss,
              }}
              className={IntlProvider(
                "text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground",
                notification.kind === "activity" && "hidden",
                pine && "whitespace-pre-wrap",
                !pine && mint == null && notification.isLoading && "truncate",
                !pine &&
                  mint == null &&
                  !notification.isLoading &&
                  "line-clamp-2",
              )}
              data-avatar-overlay-measure-body="true"
              initial={false}
              transition={
                prefersReducedMotion
                  ? {
                      duration: 0,
                    }
                  : {
                      duration: 0.18,
                      ease: "easeOut",
                    }
              }
            >
              {mint == null ? (
                <span
                  className={IntlProvider(
                    notification.isLoading && "loading-shimmer-pure-text",
                    notification.isLoading &&
                      !pine &&
                      "max-w-full truncate align-bottom",
                  )}
                >
                  {lotus}
                </span>
              ) : (
                <AvatarOverlayPageHelper13
                  isExpanded={pine}
                  localConversationId={garnet}
                  request={mint}
                  onRunNotificationAction={(juniper) => {
                    onRunNotificationAction?.(notification, juniper);
                  }}
                  onSubmitQuestionOption={(lagoon) => {
                    onSubmitQuestionOption?.(notification, lagoon);
                  }}
                />
              )}
            </ensureIntlFormattersInit.div>
          </ensureIntlFormattersInit.div>
        }
        <span
          role="img"
          aria-label={
            mint?.kind === "question"
              ? flint.formatMessage(violet.questionStatusIcon)
              : kelp
          }
          className={IntlProvider(
            "pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100",
            orbit &&
              drift &&
              "opacity-0 transition-opacity duration-basic motion-reduce:transition-none",
          )}
        >
          {mint?.kind === "question" ? (
            <AppInitialXct className={jasper.iconClassName} />
          ) : (
            river(jasper)
          )}
        </span>
        {orbit ? (
          <ensureIntlFormattersInit.div
            animate={{
              opacity: +!!drift,
              x: drift ? 0 : 6,
            }}
            className={IntlProvider(
              "absolute top-1 right-1 z-10",
              drift ? "pointer-events-auto" : "pointer-events-none",
            )}
            data-avatar-overlay-control="expand"
            initial={false}
            transition={storm}
          >
            <OptionalTooltip
              align="end"
              side="top"
              tooltipContent={flint.formatMessage(
                ultra
                  ? violet.collapseNotificationTooltip
                  : violet.expandNotificationTooltip,
              )}
            >
              {
                <ReadLoginRouteQuerySnapshot
                  className={IntlProvider(
                    "size-6",
                    daisy,
                    avatarOverlayPillDismissButtonValue.cssControl,
                  )}
                  color="ghost"
                  size="icon"
                  aria-expanded={ultra}
                  aria-label={flint.formatMessage(
                    ultra
                      ? violet.collapseNotification
                      : violet.expandNotification,
                    {
                      title: notification.title,
                    },
                  )}
                  onClick={() => {
                    vapor((meadow) => !meadow);
                  }}
                >
                  <ensureIntlFormattersInit.span
                    animate={{
                      rotate: ultra ? 90 : 0,
                    }}
                    transition={
                      prefersReducedMotion
                        ? {
                            duration: 0,
                          }
                        : {
                            duration: 0.12,
                            ease: "easeOut",
                          }
                    }
                  >
                    <AppIconYlt className="icon-xs" />
                  </ensureIntlFormattersInit.span>
                </ReadLoginRouteQuerySnapshot>
              }
            </OptionalTooltip>
          </ensureIntlFormattersInit.div>
        ) : null}
        {quest && !isReplying ? (
          <ensureIntlFormattersInit.div
            animate={{
              opacity: +!!drift,
              x: drift ? 0 : 6,
            }}
            className={IntlProvider(
              "no-drag absolute right-2 bottom-1 z-10",
              drift ? "pointer-events-auto" : "pointer-events-none",
            )}
            data-avatar-overlay-control="reply"
            initial={false}
            transition={storm}
          >
            <div className="flex justify-end pb-1">
              {
                <ReadLoginRouteQuerySnapshot
                  className={IntlProvider(
                    "h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]",
                    daisy,
                    avatarOverlayPillDismissButtonValue.cssControl,
                  )}
                  color="outline"
                  size="default"
                  aria-label={flint.formatMessage(violet.replyNotification, {
                    title: notification.title,
                  })}
                  onClick={(event) => {
                    event.stopPropagation();
                    coral(null);
                    acorn("");
                    onOpenReply();
                    eagle(true);
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {flint.formatMessage(violet.replyNotificationButton)}
                </ReadLoginRouteQuerySnapshot>
              }
            </div>
          </ensureIntlFormattersInit.div>
        ) : null}
        {isReplying ? (
          <ensureIntlFormattersInit.form
            className="no-drag mx-3 mb-2 border-t border-token-border/60 pt-2"
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : -2,
            }}
            transition={
              prefersReducedMotion
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.16,
                    ease: "easeOut",
                  }
            }
            onClick={(event) => {
              event.stopPropagation();
            }}
            onPointerDown={(event) => {
              event.stopPropagation();
            }}
            onSubmit={(nest) => {
              tide(nest);
            }}
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <input
                ref={replyInputRef}
                className="text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border"
                aria-label={flint.formatMessage(violet.replyNotification, {
                  title: notification.title,
                })}
                autoFocus={true}
                placeholder={flint.formatMessage(
                  violet.notificationReplyPlaceholder,
                )}
                value={zephyr}
                onChange={(event) => {
                  acorn(event.currentTarget.value);
                  coral(null);
                  unity(event.currentTarget);
                }}
                onSelect={(event) => {
                  unity(event.currentTarget);
                }}
                onKeyDown={(event) => {
                  event.key !== "Escape" ||
                    wheat ||
                    (event.stopPropagation(), onCloseReply(), coral(null));
                }}
              />
              {
                <ReadLoginRouteQuerySnapshot
                  className="h-6 px-2 text-xs"
                  color="primary"
                  size="default"
                  type="submit"
                  aria-label={flint.formatMessage(
                    violet.sendNotificationReply,
                    {
                      title: notification.title,
                    },
                  )}
                  disabled={ridge.length === 0 || wheat}
                  loading={wheat}
                >
                  {flint.formatMessage(violet.replyNotificationButton)}
                </ReadLoginRouteQuerySnapshot>
              }
            </div>
            {bloom == null ? null : (
              <div
                className="mt-1 text-[11px] leading-4 text-token-error-foreground"
                role="alert"
              >
                {bloom}
              </div>
            )}
          </ensureIntlFormattersInit.form>
        ) : null}
      </div>
      {sage && !isReplying ? (
        <div
          className={IntlProvider(
            "absolute -top-1 -left-1 z-20",
            drift
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
          data-avatar-overlay-control="dismiss"
        >
          {
            <OptionalTooltip
              align="start"
              side="top"
              tooltipContent={flint.formatMessage(
                violet.dismissNotificationTooltip,
              )}
            >
              <AvatarOverlayPillDismissButtonTrigger
                ariaLabel={flint.formatMessage(violet.dismissNotification, {
                  title: notification.title,
                })}
                onClick={() => {
                  onDismissNotification?.(notification);
                }}
              />
            </OptionalTooltip>
          }
        </div>
      ) : null}
    </ensureIntlFormattersInit.div>
  );
}
function AvatarOverlayPageHelper13(oak) {
  let {
      isExpanded,
      localConversationId,
      onRunNotificationAction,
      onSubmitQuestionOption,
      request,
    } = oak,
    petal = (rain) => {
      "questionOption" in rain || onRunNotificationAction(rain);
    };
  let quiet = petal;
  switch (request.kind) {
    case "question": {
      let seed = isExpanded ? "break-words whitespace-pre-wrap" : "truncate",
        trail = IntlProvider("min-w-0", seed);
      let urn = <div className={trail}>{request.prompt}</div>;
      let vine = request.options.map(falcon);
      let wind = (birch) => {
        if ("questionOption" in birch) {
          onSubmitQuestionOption?.(birch.questionOption);
          return;
        }
        onRunNotificationAction(birch);
      };
      let yarrow = (
        <AvatarOverlayPageHelper19
          actions={vine}
          onRunNotificationAction={wind}
        />
      );
      let azure;
      return (
        <div data-avatar-overlay-compact-waiting-request="question">
          {urn}
          {yarrow}
        </div>
      );
    }
    case "patch": {
      let canyon = (
        <AvatarOverlayPageHelper17
          additions={request.additions}
          deletions={request.deletions}
          fileCount={request.fileCount}
          files={request.files}
          isExpanded={isExpanded}
          summary={request.summary}
        />
      );
      let dew = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let ever;
      return (
        <div data-avatar-overlay-compact-waiting-request="patch">
          {canyon}
          {dew}
        </div>
      );
    }
    case "plan": {
      let field;
      return (
        <AvatarOverlayPageHelper15
          isExpanded={isExpanded}
          localConversationId={localConversationId}
          onRunNotificationAction={quiet}
          request={request}
        />
      );
    }
    case "exec": {
      let grain = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.summary}
        />
      );
      let haven = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let ink;
      return (
        <div data-avatar-overlay-compact-waiting-request="exec">
          {grain}
          {haven}
        </div>
      );
    }
    case "network": {
      let jadeite = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.target}
        />
      );
      let kernel = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let leaf;
      return (
        <div data-avatar-overlay-compact-waiting-request="network">
          {jadeite}
          {kernel}
        </div>
      );
    }
    case "permission": {
      let maple = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.target}
        />
      );
      let nimbus = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let opal;
      return (
        <div data-avatar-overlay-compact-waiting-request="permission">
          {maple}
          {nimbus}
        </div>
      );
    }
    case "tool": {
      let plume = request.summary ?? request.target,
        quillow = (
          <AvatarOverlayPageHelper16 isExpanded={isExpanded} text={plume} />
        );
      let root = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let silk;
      return (
        <div data-avatar-overlay-compact-waiting-request="tool">
          {quillow}
          {root}
        </div>
      );
    }
  }
}
function falcon(thorn, upland) {
  return {
    label: thorn.label,
    tone: upland === 0 ? "primary" : "secondary",
    questionOption: thorn,
  };
}
function AvatarOverlayPageHelper15(vista) {
  let { isExpanded, localConversationId, onRunNotificationAction, request } =
      vista,
    { getModeForSelection } = AnnotationFocusMode(localConversationId),
    Wisp,
    yonder,
    zenith,
    anvil;
  {
    let crag = getModeForSelection("default");
    zenith = request.kind;
    anvil = (
      <AvatarOverlayPageHelper16
        isExpanded={isExpanded}
        text={request.summary}
      />
    );
    Wisp = AvatarOverlayPageHelper19;
    yonder = request.actions.map((item) =>
      item.intent === "plan-start"
        ? {
            ...item,
            planStartCollaborationMode: crag,
          }
        : item,
    );
  }
  let beacon = (
    <Wisp actions={yonder} onRunNotificationAction={onRunNotificationAction} />
  );
  return (
    <div data-avatar-overlay-compact-waiting-request={zenith}>
      {anvil}
      {beacon}
    </div>
  );
}
function AvatarOverlayPageHelper16(dome) {
  let { isExpanded, text } = dome,
    eddy = isExpanded
      ? "break-words whitespace-pre-wrap"
      : "truncate whitespace-nowrap",
    fjord = IntlProvider("min-w-0 text-token-text-secondary", eddy);
  return (
    <div
      className={fjord}
      data-avatar-overlay-compact-waiting-summary-text="true"
    >
      {text}
    </div>
  );
}
function AvatarOverlayPageHelper17(glen) {
  let { additions, deletions, fileCount, files, isExpanded, summary } = glen,
    hearth = useIntl(),
    inlet = hearth.formatMessage(violet.compactPatchFileCount, {
      count: fileCount,
    });
  let jetty = inlet,
    knob =
      additions > 0
        ? hearth.formatMessage(violet.compactPatchAdditions, {
            count: additions,
          })
        : null;
  let ledge = knob,
    mire =
      deletions > 0
        ? hearth.formatMessage(violet.compactPatchDeletions, {
            count: deletions,
          })
        : null;
  let nook = mire;
  if (!isExpanded) {
    let updraft = <span>{jetty}</span>;
    let verge =
      ledge == null ? null : (
        <span className="ml-1.5 text-token-charts-green">{ledge}</span>
      );
    let weir =
      nook == null ? null : (
        <span className="ml-1.5 text-token-error-foreground">{nook}</span>
      );
    let yard = <BulletSeparator className="mx-1.5 text-token-text-tertiary" />;
    let anchor = <span>{summary}</span>;
    let bolt;
    return (
      <div
        className="min-w-0 truncate whitespace-nowrap text-token-text-secondary"
        data-avatar-overlay-compact-waiting-summary-text="true"
      >
        {updraft}
        {verge}
        {weir}
        {yard}
        {anchor}
      </div>
    );
  }
  let oxbow = (
    <span className="text-[11px] leading-4 text-token-text-secondary">
      {jetty}
    </span>
  );
  let pond =
    ledge == null ? null : (
      <span className="text-[11px] leading-4 text-token-charts-green">
        {ledge}
      </span>
    );
  let quarry =
    nook == null ? null : (
      <span className="text-[11px] leading-4 text-token-error-foreground">
        {nook}
      </span>
    );
  let rapids = (
    <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      {oxbow}
      {pond}
      {quarry}
    </div>
  );
  let spur = files.map(gamma);
  let tor = (
    <div className="mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary">
      {spur}
    </div>
  );
  return (
    <div data-avatar-overlay-compact-waiting-summary-text="true">
      {rapids}
      {tor}
    </div>
  );
}
function gamma(cog) {
  return (
    <div key={cog} className="leading-4 break-words">
      {cog}
    </div>
  );
}
function AvatarOverlayPageHelper19(disc) {
  let { actions, onRunNotificationAction } = disc,
    edge;
  {
    let forge;
    forge = (gear) => (
      <ReadLoginRouteQuerySnapshot
        key={gear.ariaLabel ?? gear.label}
        className="max-w-full min-w-0 enabled:active:hover:opacity-80"
        color={indigo(gear.tone)}
        size="toolbar"
        aria-label={gear.ariaLabel ?? gear.label}
        title={gear.ariaLabel ?? gear.label}
        onClick={(event) => {
          event.stopPropagation();
          onRunNotificationAction(gear);
        }}
        onPointerDown={harbor}
      >
        <span className="truncate">{gear.label}</span>
      </ReadLoginRouteQuerySnapshot>
    );
    edge = actions.map(forge);
  }
  return (
    <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px">
      {edge}
    </div>
  );
}
function harbor(event) {
  event.stopPropagation();
}
function indigo(hinge) {
  switch (hinge) {
    case "primary":
      return "secondary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}
function jade(iron, joint = iron.scrollTop) {
  if (!marble(iron))
    return {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0,
    };
  if (lemon(iron, joint))
    return {
      hasScrollableContent: true,
      hasLatestNotificationsAbove: true,
      hiddenOlderNotificationCount: 0,
    };
  let keystone = pearl(iron),
    latch = $n(iron, keystone, joint);
  return {
    hasScrollableContent: true,
    hasLatestNotificationsAbove: joint > xenon,
    hiddenOlderNotificationCount: onyx(iron, keystone, latch),
  };
}
function kite(motor, nut) {
  return (
    motor.hasScrollableContent === nut.hasScrollableContent &&
    motor.hasLatestNotificationsAbove === nut.hasLatestNotificationsAbove &&
    motor.hiddenOlderNotificationCount === nut.hiddenOlderNotificationCount
  );
}
function lemon(piston, rivet = piston.scrollTop) {
  let screw = Math.max(0, piston.scrollHeight - piston.clientHeight);
  return marble(piston) && rivet >= screw - xenon;
}
function marble(torque) {
  return torque.scrollHeight > torque.clientHeight + xenon;
}
function nickel(valve) {
  return [valve, ...Array.from(valve.querySelectorAll("*"))].some(
    (item) =>
      item.clientWidth > 0 && item.scrollWidth > item.clientWidth + basalt,
  );
}
function onyx(axle, bracket, clamp) {
  let drill = clamp + axle.clientHeight - xenon;
  return bracket.filter((item) => item.offsetTop + item.offsetHeight > drill)
    .length;
}
function pearl(engine) {
  return Array.from(engine.children).filter(
    (item) => item instanceof HTMLElement,
  );
}
function $n(frame, gasket, handle = frame.scrollTop) {
  return handle + (gasket[0]?.offsetTop ?? 0) + xenon;
}
function quartz(insert, jacket) {
  let knurl = 0;
  for (let lever = 0; lever < insert.length; lever += 1)
    insert[lever].offsetTop <= jacket && (knurl = lever);
  return knurl;
}
function river(mount) {
  switch (mount.iconType) {
    case "check-circle":
      return <WriteHooksStateMutationAtom className={mount.iconClassName} />;
    case "clock":
      return <AppIconCct className={mount.iconClassName} />;
    case "spinner":
      return null;
    case "warning":
      return <ApplyActive className={mount.iconClassName} />;
  }
}
var slate,
  timber,
  umbra,
  violet,
  willow,
  xenon,
  yellow,
  or,
  zinc,
  amber,
  basalt,
  cedar,
  daisy,
  ember = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    timber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureAvatarMascotButtonInit();
    avatarOverlayPillDismissButtonUnderscore();
    initializeAppHostServices();
    ensureSettingsQueryAtomsInit();
    AppIconZlt();
    ensureComposerEsm_Hlt_Init();
    ListPermissionProfiles();
    ensureHooksQueriesInit();
    AppIconYlt();
    ensureAppIconSftInit();
    CHATGPT_PRODUCT_ID();
    AppInitialSct();
    buildCodexDesktopRequestHeaders();
    findSidebarSectionElement();
    delta();
    AppInitialFct();
    RealtimeVoiceHandoffTarget();
    ensureCreateResizeObserverInit();
    ensureAvatarOverlayPillDismissButtonStylesInit();
    ensureAvatarOverlayPillDismissButtonIconsInit();
    avatarOverlaySelectionD();
    defaultAvatarOverlayMascotWidthPx();
    ensureAvatarOverlayPillDismissButtonHelpersInit();
    REALTIME_VOICE_MODE_ID();
    avatarOverlaySelectionO();
    ensureAvatarOverlayPillDismissButtonInit();
    bravo();
    ensureAvatarOverlayPillDismissButtonUiInit();
    ensureAvatarOverlayPillDismissButtonAtomsInit();
    ensureAvatarOverlayPillDismissButtonYieldInit();
    umbra = getJsxRuntime();
    violet = identity({
      mascotLabel: {
        id: "petOverlay.mascotLabel",
        defaultMessage: "{petName} pet",
        description: "Accessible label for the floating Codex pet",
      },
      openNotification: {
        id: "avatarOverlay.openNotification",
        defaultMessage: "Open notification",
        description:
          "Accessible label for an actionable row in the floating avatar notification tray",
      },
      dismissNotification: {
        id: "avatarOverlay.dismissNotification",
        defaultMessage: "Dismiss {title}",
        description:
          "Accessible label for dismissing a notification in the floating avatar notification tray",
      },
      dismissNotificationTooltip: {
        id: "avatarOverlay.dismissNotificationTooltip",
        defaultMessage: "Dismiss",
        description:
          "Tooltip for the icon button that dismisses a floating avatar notification",
      },
      replyNotification: {
        id: "avatarOverlay.replyNotification",
        defaultMessage: "Reply to {title}",
        description:
          "Accessible label for replying to a floating avatar notification",
      },
      replyNotificationButton: {
        id: "avatarOverlay.replyNotificationButton",
        defaultMessage: "Reply",
        description:
          "Compact button label for replying to a floating avatar notification",
      },
      sendNotificationReply: {
        id: "avatarOverlay.sendNotificationReply",
        defaultMessage: "Send reply to {title}",
        description:
          "Accessible label for submitting a floating avatar notification reply",
      },
      notificationReplyPlaceholder: {
        id: "avatarOverlay.notificationReplyPlaceholder",
        defaultMessage: "Reply",
        description:
          "Placeholder for the one-line floating avatar notification reply input",
      },
      notificationReplyError: {
        id: "avatarOverlay.notificationReplyError",
        defaultMessage: "Unable to send reply",
        description:
          "Compact error shown when a floating avatar notification reply fails",
      },
      expandNotification: {
        id: "avatarOverlay.expandNotification",
        defaultMessage: "Expand {title}",
        description:
          "Accessible label for expanding a floating avatar notification row",
      },
      collapseNotification: {
        id: "avatarOverlay.collapseNotification",
        defaultMessage: "Collapse {title}",
        description:
          "Accessible label for collapsing a floating avatar notification row",
      },
      expandNotificationTooltip: {
        id: "avatarOverlay.expandNotificationTooltip",
        defaultMessage: "Expand",
        description:
          "Tooltip for the icon button that expands a floating avatar notification",
      },
      collapseNotificationTooltip: {
        id: "avatarOverlay.collapseNotificationTooltip",
        defaultMessage: "Collapse",
        description:
          "Tooltip for the icon button that collapses a floating avatar notification",
      },
      collapseNotificationTray: {
        id: "avatarOverlay.collapseNotificationTray",
        defaultMessage: "Collapse activity",
        description:
          "Accessible label and tooltip for the button that collapses the floating avatar activity tray",
      },
      resizeMascot: {
        id: "avatarOverlay.resizeMascot",
        defaultMessage: "Resize pet",
        description:
          "Accessible label for the handle that resizes the floating Codex pet",
      },
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description:
          "Accessible label for the list of floating avatar activity notifications",
      },
      latestNotifications: {
        id: "avatarOverlay.latestNotifications",
        defaultMessage: "Latest",
        description:
          "Label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showLatestNotifications: {
        id: "avatarOverlay.showLatestNotifications",
        defaultMessage: "Show latest activity",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications",
      },
      showOlderNotifications: {
        id: "avatarOverlay.showOlderNotifications",
        defaultMessage:
          "Show {count, plural, one {# older activity item} other {# older activity items}}",
        description:
          "Accessible label for the button that scrolls the floating avatar activity list toward older notifications",
      },
      olderNotificationCount: {
        id: "avatarOverlay.olderNotificationCount",
        defaultMessage: "{count, plural, one {# more} other {# more}}",
        description:
          "Label for the button that shows there are more floating avatar activity notifications below",
      },
      compactOlderNotificationCount: {
        id: "avatarOverlay.compactOlderNotificationCount",
        defaultMessage: "+{count}",
        description:
          "Compact label for the edge button that shows hidden floating avatar activity notifications",
      },
      questionStatusIcon: {
        id: "avatarOverlay.questionStatusIcon",
        defaultMessage: "Question",
        description:
          "Accessible label for a floating avatar notification waiting on a question answer",
      },
      compactPatchFileCount: {
        id: "avatarOverlay.compactPatchFileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description:
          "Compact file count for a patch request in the floating avatar notification tray",
      },
      compactPatchAdditions: {
        id: "avatarOverlay.compactPatchAdditions",
        defaultMessage: "+{count}",
        description:
          "Compact additions count for a patch request in the floating avatar notification tray",
      },
      compactPatchDeletions: {
        id: "avatarOverlay.compactPatchDeletions",
        defaultMessage: "-{count}",
        description:
          "Compact deletions count for a patch request in the floating avatar notification tray",
      },
    });
    willow = 2;
    xenon = 2;
    yellow = 0.035;
    or = 32;
    zinc = 84;
    amber = 512;
    basalt = 1;
    cedar =
      "group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]";
    daisy = "bg-token-main-surface-primary";
  });
export function AvatarOverlayPage() {
  let { selectedAvatar, selectedAvatarId } = avatarOverlaySelectionN(),
    nozzle = selectedAvatar == null,
    platen,
    ratchet;
  if (
    ((platen = () => {
      nozzle &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-pointer-interaction-changed",
          {
            isInteractive: false,
          },
        );
    }),
    (ratchet = [nozzle]),
    $.useEffect(platen, ratchet),
    selectedAvatar == null)
  )
    return null;
  let shim = alpha(selectedAvatar, selectedAvatarId);
  return (
    <AvatarOverlayPageHelper31
      key={shim}
      selectedAvatar={selectedAvatar}
      selectedAvatarId={selectedAvatarId}
    />
  );
}
