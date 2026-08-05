// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14/17
/* split-lane-import-depth:1 */
// AST split 5/5

import {
  AppInitialVr,
  IntlProvider,
  Onyx4,
  quartz4,
  slate4,
} from "./part-14-a";
import { Copper, Lotus2 } from "./part-14-b";
import { ensureKeyboardShortcutsHMInit } from "../../utils/wave-as-gap-ensure-inits";

function Echo4() {
  let meadow24 = AppInitialVr();
  return (
    <Copper
      {...{
        storageKey: "debug-product-events-section",
        title: "Product events",
        variant: "global",
        children: (
          <_f
            {...{
              productEvents: meadow24,
            }}
          />
        ),
      }}
    />
  );
}

function _f(nest24) {
  let { productEvents } = nest24,
    [oak24, petal24] = quartz4.useState(""),
    quiet24,
    rain24,
    seed24,
    trail24,
    urn24,
    vine24;
  {
    let yarrow24 = Kite4(productEvents, oak24);
    urn24 = "flex flex-col";
    let azure24 = (event) => {
      petal24(event.currentTarget.value);
    };
    let birch24 = (
      <input
        type="text"
        aria-label="Search product events"
        placeholder="Search event name or payload"
        value={oak24}
        className="h-8 w-full rounded-md border border-token-border bg-token-main-surface-primary px-2 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground focus:border-token-focus-border"
        onChange={azure24}
      />
    );
    let canyon24;
    canyon24 = (
      <div className="mt-2 grid grid-cols-[88px_90px_minmax(0,1fr)] gap-3 text-xs font-medium text-token-description-foreground uppercase">
        <span>{"Status"}</span>
        <span>{"Time"}</span>
        <span>{"Event"}</span>
      </div>
    );
    vine24 = (
      <div className="sticky top-0 z-10 border-b border-token-border/60 bg-token-dropdown-background/95 pt-3 pb-4 backdrop-blur">
        {birch24}
        {canyon24}
      </div>
    );
    quiet24 = "flex flex-col";
    rain24 =
      productEvents.length === 0 ? (
        <Lotus2
          {...{
            lines: [
              {
                label: "Status",
                value: "No product event activity yet",
              },
            ],
          }}
        />
      ) : null;
    seed24 =
      productEvents.length > 0 && yarrow24.length === 0 ? (
        <div className="py-3 text-sm text-token-description-foreground">
          {"No matching product events"}
        </div>
      ) : null;
    trail24 = yarrow24.map(Falcon4);
  }
  let wind24 = (
    <div className={quiet24}>
      {rain24}
      {seed24}
      {trail24}
    </div>
  );
  return (
    <div className={urn24}>
      {vine24}
      {wind24}
    </div>
  );
}

function Falcon4(dew24) {
  let alpha25 = dew24.event.payload,
    bravo25 = Marble4(dew24),
    copper25 = dew24.event.eventType,
    delta25 = Harbor4({
      payload: alpha25,
      statsigUser: dew24.statsigUser,
    });
  return (
    <div
      key={dew24.id}
      className="border-t border-token-border/60 py-4 first:border-t-0"
    >
      <div className="grid grid-cols-[88px_90px_minmax(0,1fr)] items-start gap-3 text-sm">
        <span
          className={IntlProvider(
            "w-fit rounded-full px-2 py-0.5 text-xs font-medium",
            Jade4(dew24.status),
          )}
        >
          {Indigo4(dew24.status)}
        </span>
        <span className="text-token-description-foreground tabular-nums">
          {slate4.format(dew24.timestampMs)}
        </span>
        <span className="min-w-0">
          <span className="block font-medium break-words">{bravo25}</span>
          {copper25 === bravo25 ? null : (
            <span className="block font-mono text-xs break-all text-token-description-foreground">
              {copper25}
            </span>
          )}
        </span>
      </div>
      {dew24.reason == null ? null : (
        <div className="mt-1 text-xs text-token-description-foreground">
          {"Reason: "}
          {dew24.reason}
        </div>
      )}
      {delta25.length === 0 ? null : (
        <div
          className={IntlProvider(
            "mt-2 grid gap-2",
            delta25.length > 1 && "sm:grid-cols-2",
          )}
        >
          {delta25.map(Gamma4)}
        </div>
      )}
    </div>
  );
}

function Gamma4(echo25) {
  return (
    <div key={echo25.label} className="min-w-0">
      <div className="text-xs font-medium text-token-description-foreground">
        {echo25.label}
      </div>
      <pre className="mt-1 h-72 overflow-auto rounded-md border border-token-border bg-token-foreground/[0.035] p-2 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap text-token-foreground">
        {Onyx4(echo25.value)}
      </pre>
    </div>
  );
}

function Harbor4({ payload, statsigUser }) {
  return [
    ...(payload == null
      ? []
      : [
          {
            label: "Payload",
            value: payload,
          },
        ]),
    ...(statsigUser === undefined
      ? []
      : [
          {
            label: "Statsig user",
            value: statsigUser,
          },
        ]),
  ];
}

function Indigo4(falcon25) {
  switch (falcon25) {
    case "dropped":
      return "Dropped";
    case "enqueued":
      return "Enqueued";
    case "failed":
      return "Failed";
    case "sent":
      return "Sent";
  }
}

function Jade4(gamma25) {
  switch (gamma25) {
    case "dropped":
      return "bg-token-charts-yellow/15 text-token-charts-yellow";
    case "enqueued":
      return "bg-token-charts-blue/15 text-token-charts-blue";
    case "failed":
      return "bg-token-charts-red/15 text-token-charts-red";
    case "sent":
      return "bg-token-charts-green/15 text-token-charts-green";
  }
}

function Kite4(harbor25, indigo25) {
  let jade25 = [...harbor25].reverse(),
    kite25 = indigo25.trim();
  return kite25.length === 0
    ? jade25
    : jade25.filter((item) => Lemon4(item, kite25));
}

function Lemon4(lemon25, marble25) {
  let nickel25 = Nickel4(lemon25);
  return (
    ensureKeyboardShortcutsHMInit(Marble4(lemon25), marble25) > 0 ||
    ensureKeyboardShortcutsHMInit(lemon25.event.eventType, marble25) > 0 ||
    ensureKeyboardShortcutsHMInit(nickel25, marble25) > 0
  );
}

function Marble4(onyx25) {
  let pearl25 = onyx25.event.eventType.split(".");
  return pearl25[pearl25.length - 1] ?? onyx25.event.eventType;
}

function Nickel4(quartz25) {
  return [quartz25.event.payload, quartz25.statsigUser]
    .flatMap((item) => (item == null ? [] : [Onyx4(item)]))
    .join("\n");
}
