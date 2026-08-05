// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
/* split-lane-import-depth:1 */
// AST split 5/7

import { Quartz2, RealtimeVoiceHostId, mint2, olive2 } from "./part-10-a";
import { Copper, DeferredUiB, DeferredUiH } from "./part-10-b";
import {
  IsStartingProcessExpired,
  Umbra1,
  UsePointerSurfaceInteractionGate,
} from "./part-10-d";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";

function Ember2() {
  let [willow19, xenon19] = mint2.useState(Kelp2),
    [yellow19, zinc19] = mint2.useState(false),
    [amber19, basalt19] = mint2.useState(null),
    cedar19 = willow19 && !yellow19,
    daisy19 = {
      queryConfig: {
        enabled: cedar19,
        intervalMs: 5e3,
      },
    };
  let { data, isLoading } = SIDEBAR_HIT_TEST_SELECTOR(
      "child-processes",
      daisy19,
    ),
    ember19 = data?.processes ?? [];
  let flint19 = ember19,
    garnet19 = flint19.length,
    hazel19 = willow19 ? `Child processes (${garnet19})` : "Child processes",
    ivory19 = willow19 ? (
      <button
        type="button"
        className="cursor-interaction rounded-full border border-token-border/70 px-2 py-1 text-xs font-medium hover:bg-token-foreground/10"
        onClick={() => zinc19(Flint2)}
      >
        {yellow19 ? "Resume" : "Pause"}
      </button>
    ) : null;
  let jasper19 = (quill19) => {
    xenon19(quill19);
    quill19 || zinc19(false);
  };
  let kelp19 = willow19 ? (
    isLoading && data == null ? (
      <div className="rounded-xl border border-token-border/60 bg-token-foreground/5 px-3 py-3 text-sm text-token-description-foreground">
        {"Loading child processes…"}
      </div>
    ) : data?.rootProcess == null ? (
      <div className="rounded-xl border border-token-border/60 bg-token-foreground/5 px-3 py-3 text-sm text-token-description-foreground">
        {"No child processes found."}
      </div>
    ) : (
      <Umbra1
        {...{
          onProcessDetailsClick: basalt19,
          processes: flint19,
          rootProcess: data.rootProcess,
        }}
      />
    )
  ) : null;
  let lotus19 = amber19 != null,
    mint19 = (reef19) => {
      reef19 || basalt19(null);
    };
  let nova19 = (
    <DeferredUiH
      {...{
        title: (
          <RealtimeVoiceHostId
            {...{
              children: "Process details",
            }}
          />
        ),
        subtitle: (
          <IsStartingProcessExpired
            {...{
              children: "The process ID and full command are shown below",
            }}
          />
        ),
      }}
    />
  );
  let olive19 = (
    <DeferredUiB
      {...{
        className: "gap-4",
        children: [
          nova19,
          <pre className="m-0 max-h-[420px] overflow-auto rounded-xl border border-token-border bg-token-editor-background/70 p-3 font-mono text-sm leading-relaxed break-all whitespace-pre-wrap text-token-foreground">
            {amber19}
          </pre>,
        ],
      }}
    />
  );
  let prism19 = (
    <UsePointerSurfaceInteractionGate
      {...{
        open: lotus19,
        onOpenChange: mint19,
        size: "wide",
        children: olive19,
      }}
    />
  );
  return (
    <Copper
      {...{
        title: hazel19,
        storageKey: olive2,
        actions: ivory19,
        onToggle: jasper19,
        variant: "global",
        children: [kelp19, prism19],
      }}
    />
  );
}

function Flint2(sage19) {
  return !sage19;
}

function el(quest19) {
  let { label, rssKb } = quest19,
    ridge19 = (
      <span className="text-token-description-foreground">{label}</span>
    );
  let storm19 = Quartz2(rssKb);
  let tide19 = <span className="font-medium tabular-nums">{storm19}</span>;
  return (
    <div className="flex items-baseline gap-1.5 text-sm whitespace-nowrap">
      {ridge19}
      {tide19}
    </div>
  );
}

function Ivory2(vale19) {
  let { selfValue, tone = "default", totalValue } = vale19,
    wave19 = (
      <span className="min-w-[6.5ch] text-right opacity-70">{selfValue}</span>
    );
  let apex19 = <span className="opacity-45">{"/"}</span>;
  let brook19 =
      tone === "warning"
        ? "min-w-[8.6ch] text-token-charts-yellow"
        : tone === "danger"
          ? "min-w-[8.6ch] text-token-charts-red"
          : "min-w-[8.6ch]",
    cliff19 = <span className={brook19}>{totalValue}</span>;
  return (
    <span className="flex items-center justify-end gap-1 whitespace-nowrap text-token-description-foreground tabular-nums">
      {wave19}
      {apex19}
      {cliff19}
    </span>
  );
}

function Kelp2() {
  try {
    return window.localStorage.getItem(olive2) === "open";
  } catch {
    return false;
  }
}
