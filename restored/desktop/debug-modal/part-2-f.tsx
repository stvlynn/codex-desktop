// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */
// AST split 6/7

import { Honey, Iris, Jewel, Orbit, apex, tide } from "./part-2-a";
import { Basalt, Copper, Xenon, Yellow, Zinc } from "./part-2-b";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";

function Olive(sage6) {
  let { hostId, requests } = sage6,
    [topaz6, ultra6] = tide.useState(false),
    vapor6 = requests.filter(Orbit);
  let wheat6 = vapor6,
    yarn6 = topaz6 ? wheat6 : requests,
    zephyr6 = requests.length === 0,
    acorn6 = () => {
      clearUpcomingLocalDatetimeEntries(hostId);
    };
  let bloom6 = `debug-app-server-requests-${hostId}`,
    coral6 =
      wheat6.length > 0 || topaz6 ? (
        <div className="mb-2 flex justify-end">
          <label className="flex cursor-interaction items-center gap-2 text-xs text-token-description-foreground">
            <input
              checked={topaz6}
              className="cursor-interaction"
              onChange={(event) => {
                ultra6(event.currentTarget.checked);
              }}
              type="checkbox"
            />
            {"Failed"}
            <span className="tabular-nums">
              {"("}
              {wheat6.length}
              {")"}
            </span>
          </label>
        </div>
      ) : null;
  let drift6 =
    yarn6.length > 0 ? (
      <div className="flex max-h-[360px] flex-col gap-2 overflow-y-auto pr-1">
        {yarn6.map(Prism)}
      </div>
    ) : (
      <Xenon
        {...{
          message: topaz6
            ? "No failed requests recorded for this manager yet"
            : "No requests recorded for this manager yet",
        }}
      />
    );
  return (
    <Yellow
      {...{
        clearDisabled: zephyr6,
        onClear: acorn6,
        storageKey: bloom6,
        title: "Recent requests",
        children: [coral6, drift6],
      }}
    />
  );
}

function Prism(eagle6) {
  return (
    <Zinc
      key={eagle6.id}
      {...{
        request: eagle6,
      }}
    />
  );
}

function Quill({ hostId, threadStatusEntries }) {
  let [frost6, glide6] = tide.useState(null),
    [honey6, iris6] = tide.useState(null),
    jewel6 = Honey(threadStatusEntries),
    knoll6 = honey6 != null && apex.includes(honey6) ? honey6 : null,
    lunar6 =
      knoll6 == null ? jewel6 : jewel6.filter((item) => item.status === knoll6),
    moss6 =
      knoll6 == null
        ? `All states (${threadStatusEntries.length})`
        : Jewel({
            count:
              jewel6.find((item) => item.status === knoll6)?.entries.length ??
              0,
            status: knoll6,
          });
  return (
    <div className="overflow-hidden rounded-lg border border-token-border bg-token-foreground/[0.025]">
      {
        <Copper
          {...{
            storageKey: `debug-app-server-thread-status-${hostId}`,
            title: "Thread status",
            variant: "global",
            children: (
              <div className="py-3">
                {jewel6.length === 0 ? (
                  <Xenon
                    {...{
                      message: "No in-memory threads for this manager yet",
                    }}
                  />
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {
                        <DropdownMenuPopover
                          {...{
                            contentWidth: "xs",
                            triggerButton: (
                              <button
                                type="button"
                                className="bg-token-background inline-flex max-w-80 min-w-40 cursor-interaction items-center justify-between gap-2 rounded-md border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/5"
                              >
                                <span className="truncate">{moss6}</span>
                                {
                                  <AppIconSft
                                    {...{
                                      className: "icon-2xs shrink-0 opacity-70",
                                    }}
                                  />
                                }
                              </button>
                            ),
                            children: [
                              <DropdownMenu.Item
                                {...{
                                  "aria-checked": knoll6 == null,
                                  role: "menuitemradio",
                                  RightIcon:
                                    knoll6 == null ? AppIconZlt : undefined,
                                  onSelect: () => {
                                    iris6(null);
                                  },
                                  children: [
                                    "All states (",
                                    threadStatusEntries.length,
                                    ")",
                                  ],
                                }}
                              />,
                              apex.map((item) => (
                                <DropdownMenu.Item
                                  key={item}
                                  {...{
                                    "aria-checked": knoll6 === item,
                                    role: "menuitemradio",
                                    RightIcon:
                                      knoll6 === item ? AppIconZlt : undefined,
                                    onSelect: () => {
                                      iris6(item);
                                    },
                                    children: Jewel({
                                      count:
                                        jewel6.find(
                                          (_item) => _item.status === item,
                                        )?.entries.length ?? 0,
                                      status: item,
                                    }),
                                  }}
                                />
                              )),
                            ],
                          }}
                        />
                      }
                    </div>
                    <div className="flex max-h-[300px] flex-col gap-3 overflow-y-auto pr-1">
                      {lunar6.length === 0 ? (
                        <Xenon
                          {...{
                            message: "No in-memory threads match this state",
                          }}
                        />
                      ) : (
                        lunar6.map((item) => (
                          <div
                            key={item.status}
                            className="flex flex-col gap-2"
                          >
                            <div className="text-xs font-medium text-token-description-foreground">
                              {Iris(item)}
                            </div>
                            <div className="flex flex-col gap-2">
                              {item.entries.map((_item) => (
                                <Basalt
                                  key={_item.conversationId}
                                  {...{
                                    entry: _item,
                                    isPending: frost6 === _item.conversationId,
                                    onUnsubscribe: async (north6) => {
                                      glide6(north6);
                                      try {
                                        await canonicalizeWorkspacePathKey(
                                          "unsubscribe-thread-for-host",
                                          {
                                            hostId,
                                            threadId: north6,
                                          },
                                        );
                                      } finally {
                                        glide6((orbit6) =>
                                          orbit6 === north6 ? null : orbit6,
                                        );
                                      }
                                    },
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ),
          }}
        />
      }
    </div>
  );
}
