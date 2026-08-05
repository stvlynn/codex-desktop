// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/17
/* split-lane-import-depth:1 */
// AST split 5/5

import { bravo3 } from "./part-11-a";
import { Basalt1 } from "./part-11-b";
import { AppIconSft } from "../../icons/app-icon-sft";

function Fern2(indigo21) {
  let { group, refreshVersion, store, onValueChanged } = indigo21,
    [jade21, kite21] = bravo3.useState(false),
    lemon21 = () => {
      kite21(Grove2);
    };
  let marble21 = `rotate(${jade21 ? 0 : -90}deg)`,
    nickel21 = (
      <AppIconSft
        {...{
          className: "icon-2xs shrink-0 transition-transform duration-basic",
          style: {
            transform: marble21,
          },
        }}
      />
    );
  let onyx21 = (
    <span className="truncate font-mono text-xs text-token-foreground">
      {group.label}
    </span>
  );
  let pearl21 = (
    <span className="ml-auto rounded bg-token-foreground/10 px-1.5 py-0.5 text-[11px] text-token-description-foreground uppercase">
      {"family"}
    </span>
  );
  let quartz21 = (
    <header className="sticky top-0 z-10 rounded-t bg-token-dropdown-background">
      <button
        type="button"
        aria-expanded={jade21}
        className="flex w-full cursor-interaction items-center gap-2 rounded-t px-3 py-2 text-left hover:bg-token-foreground/5"
        onClick={lemon21}
      >
        {nickel21}
        {onyx21}
        {pearl21}
      </button>
    </header>
  );
  let river21 = jade21 ? (
    <div className="flex flex-col divide-y divide-token-border border-t border-token-border">
      {group.entries.map((item) => (
        <Basalt1
          key={item.id}
          {...{
            entry: item,
            isGrouped: true,
            refreshVersion,
            store,
            onValueChanged,
          }}
        />
      ))}
    </div>
  ) : null;
  return (
    <section className="rounded border border-token-border bg-token-foreground/[0.025]">
      {quartz21}
      {river21}
    </section>
  );
}

function Grove2(slate21) {
  return !slate21;
}

export function Alpha3() {
  let jade22 = new WeakSet();
  return (kite22, lemon22) =>
    typeof lemon22 == "function"
      ? `[Function ${lemon22.name || "anonymous"}]`
      : typeof lemon22 == "bigint"
        ? `${lemon22}n`
        : typeof lemon22 != "object" || !lemon22
          ? lemon22
          : jade22.has(lemon22)
            ? "[Circular]"
            : (jade22.add(lemon22),
              lemon22 instanceof Map
                ? Object.fromEntries(lemon22)
                : lemon22 instanceof Set
                  ? [...lemon22]
                  : lemon22);
}
