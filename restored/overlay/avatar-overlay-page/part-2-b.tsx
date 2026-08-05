// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import {
  AvatarOverlayPillDismissButtonAction,
  AvatarOverlayPillDismissButtonLabel,
  AvatarOverlayPillDismissButtonMark,
  AvatarOverlayPillDismissButtonOption,
  AvatarOverlayPillDismissButtonTrigger,
  avatarOverlayPillDismissButtonValue,
  formatAvatarOverlayPillDismiss,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { createResizeObserver } from "../../utils/create-resize-observer";
import { avatarOverlaySelectionUpperS } from "../use-avatar-overlay-selection";

import {
  AppInitialXct,
  DeferredUiN2,
  IntlProvider,
  ReadLoginRouteQuerySnapshot,
  amber,
  basalt,
  daisy,
  or,
  timber,
  violet,
  yellow,
  zinc,
} from "./part-2-a";
import { AvatarOverlayPageHelper13 } from "./part-2-c";
import { nickel, river } from "./part-2-d";

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
