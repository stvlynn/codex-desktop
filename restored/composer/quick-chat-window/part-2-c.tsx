// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 2/3 — lane c (window header, composer section)
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { ensureComposerEsm_RV_Init as EnsureComposerEsm_RV_Init } from "../../composer/composer-esm-inits";
import {
  useChatgptComposerControllerN,
  useChatgptComposerControllerP as UseChatgptComposerControllerP,
} from "../../composer/use-chatgpt-composer-controller";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { markQuickChatConversationStarted } from "../../windows/quick-chat-surface-helpers";

/** app-initial companion (stub only; never promote) */
const AppInitialAx: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWx: any = undefined;
/** split companion stub */
const DeferredUiQx: any = undefined;
/** split companion stub */
const olive: any = undefined;
const AppInitialDr: any = undefined;
const AppInitialTT: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;

function QuickChatWindowHelper26(olivePrime) {
  let prismPrime = {
    conversationId: olivePrime.conversationId,
  };
  let quillPrime = useChatgptComposerControllerN(prismPrime);
  return (
    <AppInitialTT>
      {
        <ProjectMarkerIcon
          {...{
            ...olivePrime,
            composerController: quillPrime,
          }}
        />
      }
    </AppInitialTT>
  );
}
export function QuickChatWindowHeader(props: any) {
  let {
    apexPrime,
    brookPrime,
    canPopOut,
    conversationId,
    driftPrime,
    everPrime,
    fieldPrime,
    fjordPrime,
    frostPrime,
    glenPrime,
    grainPrime,
    knollPrime,
    maplePrime,
    motorPrime,
    nimbusPrime,
    onPopOut,
    opalPrime,
    quillowPrime,
    rivetPrime,
    screwPrime,
    silkPrime,
    uplandPrime,
    valePrime,
    variant,
    weirPrime,
    wheatPrime,
    zephyrPrime,
  } = props;
  let torquePrime = everPrime ? (
    <div className="flex min-w-0 flex-1 items-center gap-1">
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            "aria-label": opalPrime,
            autoFocus: true,
            className: "-ml-1",
            color: "ghostActive",
            size: "toolbar",
            uniform: true,
            onClick: () => {
              fieldPrime(false);
            },
            children: (
              <AppIconYlt
                {...{
                  className: "icon-xs rotate-180",
                }}
              />
            ),
          }}
        />
      }
      <h2 id={driftPrime} className="truncate text-base font-medium">
        {
          <MemoizedFormattedMessage
            {...{
              id: "quickChat.history.title",
              defaultMessage: "History",
              description: "Title of the Quick Chat conversation history view",
            }}
          />
        }
      </h2>
    </div>
  ) : (
    <div className="flex min-w-0 flex-1 items-center gap-1">
      {apexPrime ? (
        <>
          {
            <OptionalTooltip
              {...{
                tooltipContent: silkPrime,
                delayOpen: true,
                children: (
                  <ReadLoginRouteQuerySnapshot
                    {...{
                      "aria-label": silkPrime,
                      className: "-ml-1",
                      color: "ghostActive",
                      size: "toolbar",
                      uniform: true,
                      onClick: () =>
                        AppInitialWx(wheatPrime, {
                          source:
                            CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_HEADER_NEW_CHAT,
                          surface: knollPrime,
                        }),
                      children: (
                        <AppIconYm
                          {...{
                            className: "icon-xs",
                          }}
                        />
                      ),
                    }}
                  />
                ),
              }}
            />
          }
          <div
            aria-hidden={true}
            className="mx-1 h-4 w-px shrink-0 bg-token-border"
          />
        </>
      ) : null}
      <h2 id={driftPrime} className="min-w-0 flex-1">
        {
          <ToolbarBreadcrumb
            {...{
              textSm: true,
              ancestors:
                brookPrime == null
                  ? []
                  : [
                      {
                        id: "quick-chat-project",
                        content: weirPrime,
                      },
                    ],
              current: apexPrime ? (
                <ReadLoginRouteQuerySnapshot
                  {...{
                    allowShrink: true,
                    "aria-label": quillowPrime,
                    className:
                      "group/history -mx-2 w-full text-sm font-medium text-token-text-secondary",
                    color: "ghostMuted",
                    size: "toolbar",
                    onClick: () => {
                      fieldPrime(true);
                    },
                    children: [
                      <span className="truncate">{nimbusPrime}</span>,
                      <AppIconYlt
                        {...{
                          className:
                            "icon-xs shrink-0 opacity-0 group-hover/header:opacity-60 group-focus-visible/history:opacity-60",
                        }}
                      />,
                    ],
                  }}
                />
              ) : brookPrime == null ? (
                weirPrime
              ) : (
                nimbusPrime
              ),
            }}
          />
        }
      </h2>
    </div>
  );
  let _quickChatWindowT =
    everPrime || valePrime == null ? null : (
      <OptionalTooltip
        {...{
          tooltipContent: (
            <MemoizedFormattedMessage
              {...{
                id: "quickChat.addToTaskTooltip",
                defaultMessage: "Add this Quick Chat to the current chat",
                description:
                  "Tooltip for adding the Quick Chat conversation to the current chat",
              }}
            />
          ),
          delayOpen: true,
          children: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "ghostActive",
                disabled: grainPrime,
                size: "toolbar",
                onClick: () => {
                  fjordPrime();
                },
                children: [
                  <CodexPluginActionType
                    {...{
                      className: "icon-xs",
                    }}
                  />,
                  <MemoizedFormattedMessage
                    {...{
                      id: "quickChat.addToTask",
                      defaultMessage: "Add to chat",
                      description:
                        "Visible label for adding the Quick Chat conversation to the current chat",
                    }}
                  />,
                ],
              }}
            />
          ),
        }}
      />
    );
  let _quickChatWindowN = canPopOut ? (
    <OptionalTooltip
      {...{
        tooltipContent: uplandPrime,
        delayOpen: true,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              "aria-label": uplandPrime,
              color: "ghostActive",
              size: "icon",
              onClick: (event) => {
                let unionPrime = event.currentTarget
                  .closest('[data-pip-obstacle="quick-chat"]')
                  ?.getBoundingClientRect();
                unionPrime != null &&
                  (DeferredUiQx(wheatPrime, {
                    action:
                      CodexRemoteControlRefreshSource.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_POPPED_OUT,
                    dockPosition: frostPrime,
                    hasConversation: apexPrime,
                    source:
                      CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_POPOUT_BUTTON,
                    surface: knollPrime,
                  }),
                  onPopOut?.(
                    valePrime ?? conversationId,
                    olive(unionPrime, zephyrPrime),
                  ));
              },
              children: <AppInitialDr className="icon-xs" />,
            }}
          />
        ),
      }}
    />
  ) : null;
  let valvePrime =
    variant === "floating" ? (
      <ReadLoginRouteQuerySnapshot
        {...{
          "aria-label": maplePrime,
          color: "ghostActive",
          size: "icon",
          onClick: () => {
            glenPrime(
              CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_CLOSE_BUTTON,
            );
          },
          children: (
            <EnsureComposerEsm_RV_Init
              {...{
                className: "icon-xs",
              }}
            />
          ),
        }}
      />
    ) : null;
  let axlePrime = (
    <div className="flex shrink-0 gap-1">
      {_quickChatWindowT}
      {_quickChatWindowN}
      {valvePrime}
    </div>
  );
  return (
    <header
      data-quick-chat-drag-handle={motorPrime}
      className={rivetPrime}
      style={screwPrime}
    >
      {torquePrime}
      {axlePrime}
    </header>
  );
}
export function QuickChatWindowComposer(props: any) {
  let {
    $e,
    apexPrime,
    brookPrime,
    contextSourceConversationId,
    conversationId,
    duskPrime,
    grovePrime,
    hillPrime,
    islePrime,
    knollPrime,
    onClose,
    quietPrime,
    rainPrime,
    spurPrime,
    trailPrime,
    valePrime,
    variant,
    wheatPrime,
  } = props;
  let bracketPrime =
      variant === "window"
        ? "px-5 pb-5"
        : FloatingSurfaceCssClass.floatingComposerInset,
    clampPrime =
      islePrime == null || $e ? (
        <QuickChatWindowHelper26
          key={conversationId}
          {...{
            ref: rainPrime,
            autoPrepare: false,
            conversationId,
            getExtraDeveloperInstructions:
              contextSourceConversationId == null || valePrime != null
                ? undefined
                : () => AppInitialAx(wheatPrime, contextSourceConversationId),
            projectId: brookPrime,
            projectName: duskPrime,
            radiusVariant: "single-line",
            isPrimaryComposer: false,
            showLockdownSlashCommand: true,
            surfaceVariant: variant === "window" ? "opaque" : "default",
            onProjectChangeFromSlashCommand: apexPrime ? null : spurPrime,
            onFileDropTargetChange: (ventPrime) => {
              let { disabled, onFilesDropped } = ventPrime;
              quietPrime.current = onFilesDropped;
              trailPrime(disabled);
            },
            onSubmitAccepted: () => {
              markQuickChatConversationStarted(wheatPrime, conversationId, {
                fileCount: grovePrime?.length ?? 0,
                selectedTextAttachmentCount: hillPrime?.length ?? 0,
                source:
                  CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_COMPOSER,
                surface: knollPrime,
              });
            },
          }}
        />
      ) : (
        <UseChatgptComposerControllerP
          {...{
            conversationId,
            isTemporaryChat: false,
            onContinueSuccess: () => {
              onClose(
                CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_UNSPECIFIED,
              );
            },
            request: islePrime,
          }}
        />
      );
  return <div className={bracketPrime}>{clampPrime}</div>;
}
