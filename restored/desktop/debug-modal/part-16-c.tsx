// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 16/17
/* split-lane-import-depth:1 */
// AST split 3/5

import {
  $d,
  $u,
  IntlProvider,
  NativeContextMenuSurface,
  isle4,
  nest4,
} from "./part-16-a";
import {
  Eagle2,
  Falcon,
  Frost2,
  Glide2,
  Iris2,
  Jewel2,
  Knoll2,
  Lotus2,
  Moss2,
  North2,
} from "./part-16-b";
import {
  Acorn2,
  Bloom2,
  Chatgpt2,
  Copper,
  Coral2,
  Orbit2,
  Pine2,
  Storm2,
  Tide2,
  Unity2,
  Vale2,
  Zephyr2,
} from "./part-16-d";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { ensureComposerEsm_Ilt_Init } from "../../composer/composer-esm-inits";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { useAuth } from "../../hooks/use-auth";
import { useDebugPanelEntries } from "../../hooks/use-debug-panel";
import { useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconSft } from "../../icons/app-icon-sft";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { appServices } from "../desktop-services";

function Of(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function debugModalN({
  conversationIdOverride = null,
  onClose,
  onMove,
  onResize,
  showHeader = true,
  showPopOutButton = true,
  titleKind = "dialog",
}) {
  let quiet26 = useFloatingWindowPointerDrag(),
    rain26 = useAuth(),
    seed26 = NativeContextMenuSurface("3563904085"),
    trail26 = ensureComposerEsm_Ilt_Init(),
    urn26 = useDebugPanelEntries(),
    [vine26, wind26] = isle4.useState(false),
    [yarrow26, azure26] = isle4.useState(false),
    { data } = CodexPluginActionResult(nest4),
    birch26 = appServices.debug,
    canyon26 =
      typeof window < "u" && !!window.electronBridge?.getSentryInitOptions,
    dew26 =
      typeof window < "u" && !!window.electronBridge?.triggerSentryTestError,
    alpha27 =
      birch26 != null &&
      showPopOutButton &&
      CodexBuildEnvironment.allowDebugMenu(isBusinessPlan()),
    bravo27 = data?.isPackaged === false,
    copper27 =
      typeof window < "u"
        ? window.electronBridge?.getSentryInitOptions?.()?.codexAppSessionId
        : undefined,
    delta27 = trail26.client.getContext().user?.customIDs?.stableID,
    echo27 = async () => {
      let gamma27 = window.electronBridge?.triggerSentryTestError;
      if (gamma27) {
        wind26(true);
        try {
          await gamma27();
        } finally {
          wind26(false);
        }
      }
    },
    falcon27 = async (harbor27) => {
      if (!yarrow26) {
        azure26(true);
        try {
          await birch26?.exportLogs({
            scope: harbor27,
          });
        } catch (indigo27) {
          appActionSidebarProjectRefSchema.error("Failed to export logs", {
            safe: {
              scope: harbor27,
            },
            sensitive: {
              error: indigo27,
            },
          });
        } finally {
          azure26(false);
        }
      }
    };
  return (
    <div className="flex h-full min-h-0 w-full flex-col text-sm">
      {showHeader ? (
        <div
          className={IntlProvider(
            "grid h-toolbar-sm shrink-0 items-center border-b border-token-border px-3 font-medium text-token-description-foreground",
            onMove == null && "draggable",
            alpha27 ? "grid-cols-[2rem_1fr_auto]" : "grid-cols-[2rem_1fr_2rem]",
          )}
        >
          <div
            className={IntlProvider(
              "h-full",
              onMove == null ? "draggable" : "cursor-move",
            )}
            onPointerDown={(jade27) => {
              onMove != null && quiet26(jade27, onMove);
            }}
          />
          <div
            className={IntlProvider(
              "flex h-full items-center justify-center",
              onMove == null ? "draggable" : "cursor-move",
            )}
            onPointerDown={(kite27) => {
              onMove != null && quiet26(kite27, onMove);
            }}
          >
            {titleKind === "dialog" ? <h2>{"Debug"}</h2> : <h1>{"Debug"}</h1>}
          </div>
          <div className="no-drag flex items-center gap-1 justify-self-end">
            {alpha27 ? (
              <button
                type="button"
                className="no-drag cursor-interaction rounded p-1 leading-none text-token-foreground/80 hover:bg-token-toolbar-hover-background focus:ring-1 focus:ring-token-focus-border focus:outline-none"
                aria-label="Pop out debug view"
                title="Pop out debug view"
                onPointerDown={(event) => {
                  event.stopPropagation();
                }}
                onClick={() => {
                  (async () => {
                    try {
                      await birch26?.openWindow();
                      onClose();
                    } catch (lemon27) {
                      appActionSidebarProjectRefSchema.error(
                        "Failed to open debug window",
                        {
                          safe: {},
                          sensitive: {
                            error: lemon27,
                          },
                        },
                      );
                    }
                  })();
                }}
              >
                {
                  <AppIconKtt
                    {...{
                      className: "icon-xs",
                    }}
                  />
                }
              </button>
            ) : null}
            <button
              type="button"
              className="no-drag cursor-interaction rounded p-1 leading-none text-token-foreground/80 hover:bg-token-toolbar-hover-background focus:ring-1 focus:ring-token-focus-border focus:outline-none"
              aria-label="Close"
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
              onClick={onClose}
            >
              {
                <Chatgpt2
                  {...{
                    className: "icon-xs",
                  }}
                />
              }
            </button>
          </div>
        </div>
      ) : null}
      <div
        className="flex min-h-0 flex-1 flex-col gap-px overflow-y-auto pb-4"
        data-debug-panel-scroll-container={true}
      >
        {<Zephyr2 {...{}} />}
        {
          <ElectronOnly
            {...{
              electron: true,
              children: (
                <$u
                  {...{
                    conversationId: conversationIdOverride ?? undefined,
                  }}
                />
              ),
            }}
          />
        }
        {conversationIdOverride == null ? null : (
          <Acorn2
            {...{
              conversationId: conversationIdOverride,
            }}
          />
        )}
        {urn26.map((item) => {
          let marble27 = `debug-entry-${item.titleText}`;
          return (
            <Copper
              key={item.id}
              {...{
                title: item.titleText ? item.titleText : "Debug entry",
                storageKey: marble27,
                variant: "selection",
                children: (
                  <Lotus2
                    {...{
                      lines: item.lines,
                    }}
                  />
                ),
              }}
            />
          );
        })}
        {<Bloom2 {...{}} />}
        {<Coral2 {...{}} />}
        {null}
        {null}
        {null}
        {<Eagle2 {...{}} />}
        {
          <ElectronOnly
            {...{
              electron: true,
              children: [
                <Frost2 {...{}} />,
                <Glide2 {...{}} />,
                <Of
                  {...{
                    nativePetUiEnabled: seed26,
                  }}
                />,
              ],
            }}
          />
        }
        {<Iris2 {...{}} />}
        {<Jewel2 {...{}} />}
        {<Knoll2 {...{}} />}
        {<Moss2 {...{}} />}
        {<$d {...{}} />}
        {<North2 {...{}} />}
        {<Orbit2 {...{}} />}
        {<Pine2 {...{}} />}
        {null}
        {bravo27 ? <Storm2 {...{}} /> : null}
        {
          <Tide2
            {...{
              sourceThreadId: conversationIdOverride ?? undefined,
            }}
          />
        }
        {bravo27 ? <Unity2 {...{}} /> : null}
        {<Vale2 {...{}} />}
        {
          <Copper
            {...{
              storageKey: "debug-user-section",
              title: "User",
              variant: "global",
              children: (
                <div className="flex flex-col py-1.5">
                  {
                    <Falcon
                      {...{
                        label: "Auth Method",
                        value: rain26.authMethod ?? "none",
                      }}
                    />
                  }
                  {
                    <Falcon
                      {...{
                        label: "User ID",
                        value: rain26.userId ?? "Unavailable",
                      }}
                    />
                  }
                  {
                    <Falcon
                      {...{
                        label: "Account ID",
                        value: rain26.accountId ?? "Unavailable",
                      }}
                    />
                  }
                  {
                    <Falcon
                      {...{
                        label: "Email",
                        value: rain26.email ?? "Unavailable",
                      }}
                    />
                  }
                </div>
              ),
            }}
          />
        }
        {canyon26 ? (
          <Copper
            {...{
              storageKey: "debug-sentry-section",
              title: "Diagnostics",
              variant: "global",
              children: [
                <div className="flex flex-col py-1.5">
                  {
                    <Falcon
                      {...{
                        label: "App session ID",
                        value: copper27 ?? "Unavailable",
                      }}
                    />
                  }
                  {
                    <Falcon
                      {...{
                        label: "Stable ID",
                        value: delta27 ?? "Unavailable",
                      }}
                    />
                  }
                </div>,
                <div className="flex flex-col gap-3 py-1.5">
                  {birch26 == null ? null : (
                    <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-medium text-token-foreground">
                          {"Logs"}
                        </div>
                        {yarrow26 ? (
                          <div className="inline-flex items-center justify-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground">
                            {
                              <VSCODE_EDITOR_ID
                                {...{
                                  className: "icon-xxs",
                                }}
                              />
                            }
                          </div>
                        ) : (
                          <DropdownMenuPopover
                            {...{
                              align: "end",
                              triggerButton: (
                                <button
                                  type="button"
                                  className="inline-flex cursor-interaction items-center gap-2 rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5"
                                >
                                  {"Export"}
                                  {
                                    <AppIconSft
                                      {...{
                                        className: "icon-2xs opacity-70",
                                      }}
                                    />
                                  }
                                </button>
                              ),
                              children: (
                                <div className="flex min-w-[180px] flex-col gap-0.5">
                                  {
                                    <DropdownMenu.Item
                                      {...{
                                        onSelect: () => {
                                          falcon27("session");
                                        },
                                        children: "This session",
                                      }}
                                    />
                                  }
                                  {
                                    <DropdownMenu.Item
                                      {...{
                                        onSelect: () => {
                                          falcon27("today");
                                        },
                                        children: "Today’s logs",
                                      }}
                                    />
                                  }
                                  {
                                    <DropdownMenu.Item
                                      {...{
                                        onSelect: () => {
                                          falcon27("last7days");
                                        },
                                        children: "Last 7 days",
                                      }}
                                    />
                                  }
                                </div>
                              ),
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                  {dew26 ? (
                    <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-medium text-token-foreground">
                          {"Crash reporting"}
                        </div>
                        <button
                          type="button"
                          className="inline-flex cursor-interaction items-center gap-2 rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50"
                          onClick={echo27}
                          disabled={vine26}
                        >
                          {"Send test error"}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>,
              ],
            }}
          />
        ) : null}
      </div>
      {onResize == null ? null : (
        <button
          type="button"
          aria-label="Resize"
          className="absolute right-0 bottom-0 h-4 w-4 cursor-se-resize"
          onPointerDown={(nickel27) => {
            quiet26(nickel27, onResize);
          }}
        />
      )}
    </div>
  );
}
