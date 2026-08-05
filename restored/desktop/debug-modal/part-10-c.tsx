// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
/* split-lane-import-depth:1 */
// AST split 3/7

import {
  Bloom1,
  Falcon2,
  Jade2,
  Marble2,
  Onyx2,
  Pearl2,
  Quartz2,
  Yarn1,
  Zephyr1,
  basalt2,
  cedar2,
  mint2,
  prism2,
} from "./part-10-a";
import { Violet1 } from "./part-10-d";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";

function El(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function River2(seed18) {
  return seed18 == null || !Number.isFinite(seed18)
    ? "n/a"
    : `${seed18.toFixed(1)}%`;
}

function Slate2(trail18) {
  if (trail18 == null || !Number.isFinite(trail18)) return "n/a";
  let urn18 = Math.max(0, Math.floor(trail18));
  if (urn18 < 60) return `${urn18}s`;
  let vine18 = Math.floor(urn18 / 60),
    wind18 = urn18 % 60;
  if (vine18 < 60) return `${vine18}m ${wind18}s`;
  let yarrow18 = Math.floor(vine18 / 60),
    azure18 = vine18 % 60;
  return yarrow18 < 24
    ? `${yarrow18}h ${azure18}m`
    : `${Math.floor(yarrow18 / 24)}d ${yarrow18 % 24}h`;
}

function Timber2(birch18) {
  return birch18 == null
    ? "default"
    : birch18 > cedar2
      ? "danger"
      : birch18 > basalt2
        ? "warning"
        : "default";
}

function Garnet2({ onProcessDetailsClick, processes, rootProcess }) {
  let [topaz19, ultra19] = mint2.useState(true),
    [vapor19, wheat19] = mint2.useState("all"),
    [yarn19, zephyr19] = mint2.useState([
      {
        id: "ram",
        desc: true,
      },
    ]),
    acorn19 = mint2.useMemo(
      () => Marble2(rootProcess, processes),
      [processes, rootProcess],
    ),
    bloom19 = mint2.useMemo(
      () =>
        acorn19 == null ? [] : topaz19 ? Pearl2(acorn19, vapor19) : [acorn19],
      [vapor19, topaz19, acorn19],
    ),
    coral19 = mint2.useMemo(
      () => $c(topaz19, onProcessDetailsClick),
      [topaz19, onProcessDetailsClick],
    ),
    drift19 = acorn19 == null ? null : Onyx2(acorn19),
    eagle19 = Jade2({
      columns: coral19,
      data: bloom19,
      enableSorting: topaz19,
      getCoreRowModel: Yarn1(),
      getExpandedRowModel: Zephyr1(),
      getSortedRowModel: topaz19 ? Bloom1() : undefined,
      getRowId: (glide19) => glide19.process.pid.toString(),
      getSubRows: topaz19 ? undefined : (honey19) => honey19.children,
      initialState: {
        expanded: true,
      },
      onSortingChange: zephyr19,
      state: {
        sorting: yarn19,
      },
    }),
    frost19 = eagle19.getRowModel().rows;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {drift19 == null ? null : (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {
              <El
                {...{
                  label: "Codex App",
                  rssKb: drift19["codex-app"],
                }}
              />
            }
            {
              <El
                {...{
                  label: "App Server",
                  rssKb: drift19["app-server"],
                }}
              />
            }
            {
              <El
                {...{
                  label: "Rollout child processes",
                  rssKb: drift19["rollout-child-processes"],
                }}
              />
            }
            {drift19["other-child-processes"] == null ? null : (
              <El
                {...{
                  label: "Other child processes",
                  rssKb: drift19["other-child-processes"],
                }}
              />
            )}
          </div>
        )}
        <div className="flex items-center gap-2">
          {topaz19 ? (
            <DropdownMenuPopover
              {...{
                align: "end",
                triggerButton: (
                  <button
                    type="button"
                    className="inline-flex cursor-interaction items-center gap-1 rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10"
                  >
                    {Hazel2(vapor19)}
                    {
                      <AppIconSft
                        {...{
                          className: "icon-2xs opacity-70",
                        }}
                      />
                    }
                  </button>
                ),
                children: prism2.map((item) => (
                  <DropdownMenu.Item
                    key={item}
                    {...{
                      "aria-checked": vapor19 === item,
                      role: "menuitemradio",
                      onSelect: () => wheat19(item),
                      children: Hazel2(item),
                    }}
                  />
                )),
              }}
            />
          ) : null}
          <button
            type="button"
            className="cursor-interaction rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10"
            onClick={() => ultra19((iris19) => !iris19)}
          >
            {topaz19 ? "Tree view" : "Flat list"}
          </button>
        </div>
      </div>
      <div className="-mx-3 overflow-hidden border-y border-token-border/70">
        <div className="overflow-auto">
          <table className="w-full table-fixed border-collapse text-sm">
            <colgroup>
              <col />
              <col className="w-[72px]" />
              <col className="w-[132px]" />
              <col className="w-[180px]" />
              <col className="w-[112px]" />
            </colgroup>
            <thead className="sticky top-0 z-[1] bg-token-main-surface-primary">
              {eagle19.getHeaderGroups().map((item) => (
                <tr key={item.id}>
                  {item.headers.map((_item) => (
                    <th
                      key={_item.id}
                      aria-sort={
                        topaz19
                          ? _item.column.getIsSorted() === "asc"
                            ? "ascending"
                            : _item.column.getIsSorted() === "desc"
                              ? "descending"
                              : "none"
                          : undefined
                      }
                      className="border-b border-token-border/70 px-3 py-2 text-left text-xs font-semibold text-token-description-foreground uppercase"
                    >
                      {_item.isPlaceholder ? null : topaz19 ? (
                        <button
                          type="button"
                          className="flex w-full cursor-interaction items-center gap-1 text-left uppercase"
                          onClick={_item.column.getToggleSortingHandler()}
                        >
                          {Falcon2(
                            _item.column.columnDef.header,
                            _item.getContext(),
                          )}
                          {_item.column.getIsSorted() ? (
                            <AppIconYlt
                              {...{
                                className: `icon-2xs shrink-0 ${_item.column.getIsSorted() === "asc" ? "-rotate-90" : "rotate-90"}`,
                              }}
                            />
                          ) : null}
                        </button>
                      ) : (
                        Falcon2(
                          _item.column.columnDef.header,
                          _item.getContext(),
                        )
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {frost19.map((item) => (
                <tr
                  key={item.id}
                  className="h-9 border-b border-token-border/40 last:border-b-0"
                >
                  {item.getVisibleCells().map((_item) => (
                    <td key={_item.id} className="px-3 py-2 align-middle">
                      {Falcon2(_item.column.columnDef.cell, _item.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function $c(jewel19, knoll19) {
  return [
    {
      accessorFn: (lunar19) => lunar19.commandLabel,
      id: "command",
      header: "Command",
      cell: ({ row }) => (
        <div
          className="flex min-w-0 items-center gap-1"
          style={{
            paddingLeft: `${row.depth * 18}px`,
          }}
        >
          {row.getCanExpand() ? (
            <button
              type="button"
              aria-label={
                row.getIsExpanded()
                  ? `Collapse ${row.original.commandLabel}`
                  : `Expand ${row.original.commandLabel}`
              }
              className="flex size-5 shrink-0 cursor-interaction items-center justify-center text-token-description-foreground"
              onClick={row.getToggleExpandedHandler()}
            >
              {
                <AppIconYlt
                  {...{
                    className: `icon-xs transition-transform ${row.getIsExpanded() ? "rotate-90" : ""}`,
                  }}
                />
              }
            </button>
          ) : (
            <span className="size-5 shrink-0" />
          )}
          <span className="min-w-0 truncate font-medium">
            {row.original.commandLabel}
          </span>
          <button
            type="button"
            aria-label={Jasper2(row.original)}
            title={Jasper2(row.original)}
            className="flex size-5 shrink-0 cursor-interaction items-center justify-center text-token-description-foreground hover:text-token-foreground"
            onClick={() => knoll19(Jasper2(row.original))}
          >
            {
              <ShellLayoutMetricsContext
                {...{
                  className: "icon-xs",
                }}
              />
            }
          </button>
        </div>
      ),
    },
    {
      accessorFn: (moss19) => moss19.process.pid,
      id: "pid",
      header: "PID",
      cell: ({ getValue }) => (
        <span className="tabular-nums">{getValue()}</span>
      ),
    },
    {
      accessorFn: (north19) => north19.process.cpuPercent ?? -1,
      id: "cpu",
      header: "CPU",
      cell: ({ row }) =>
        jewel19 ? (
          <span className="block text-right tabular-nums">
            {River2(row.original.process.cpuPercent)}
          </span>
        ) : (
          <Violet1
            {...{
              selfValue:
                row.original.process.depth === 0 &&
                row.original.process.cpuPercent == null
                  ? ""
                  : River2(row.original.process.cpuPercent),
              totalValue: River2(row.original.totalCpuPercent),
            }}
          />
        ),
    },
    {
      accessorFn: (orbit19) => orbit19.process.rssKb ?? -1,
      id: "ram",
      header: "RAM",
      cell: ({ row }) =>
        jewel19 ? (
          <span className="block text-right tabular-nums">
            {Quartz2(row.original.process.rssKb)}
          </span>
        ) : (
          <Violet1
            {...{
              selfValue: Quartz2(row.original.process.rssKb),
              totalValue: Quartz2(row.original.totalRssKb),
              tone: Timber2(row.original.totalRssKb),
            }}
          />
        ),
    },
    {
      accessorFn: (pine19) => pine19.process.ageSeconds,
      id: "age",
      header: "Age",
      cell: ({ row }) => (
        <span className="block text-right whitespace-nowrap tabular-nums">
          {Slate2(row.original.process.ageSeconds)}
        </span>
      ),
    },
  ];
}

function Hazel2(unity19) {
  switch (unity19) {
    case "all":
      return "All processes";
    case "codex-app":
      return "Codex App";
    case "app-server":
      return "App Server";
    case "rollout-child-processes":
      return "Rollout child processes";
    case "other-child-processes":
      return "Other child processes";
  }
}

function Jasper2(dusk19) {
  return `PID ${dusk19.process.pid}\n${dusk19.fullCommand}`;
}
