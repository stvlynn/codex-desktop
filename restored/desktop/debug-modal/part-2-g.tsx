// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */
// AST split 7/7

import { DeferredUiX232 } from "./part-2-a";
import { Daisy } from "./part-2-b";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { AppIconTk } from "../../icons/app-icon-tk";
import { useColdNavigate } from "../../navigation/use-cold-navigate";

function Reef(pine6) {
  let { entry, isPending, onUnsubscribe } = pine6,
    quest6 = CodexBrowserSurfaceActionType(
      DeferredUiX232,
      entry.conversationId,
    ),
    ridge6 =
      entry.resumeState === "resumed" && quest6?.role === "owner" && !isPending,
    storm6 = useColdNavigate(),
    tide6 = entry.title?.trim() || "Untitled thread";
  let unity6 = (
    <div className="truncate text-sm font-medium text-token-foreground">
      {tide6}
    </div>
  );
  let vale6 = (
    <div className="truncate font-mono text-[11px] text-token-description-foreground">
      {entry.conversationId}
    </div>
  );
  let wave6 = () => {
    storm6(entry.conversationId);
  };
  let apex6 = (
    <AppIconTk
      {...{
        className: "icon-xs",
      }}
    />
  );
  let brook6 = (
    <button
      type="button"
      aria-label="Open thread"
      className="cursor-interaction rounded p-0.5 text-token-charts-blue hover:bg-token-foreground/10"
      onClick={wave6}
    >
      {apex6}
    </button>
  );
  let cliff6 = (
    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
      {vale6}
      {brook6}
    </div>
  );
  let dusk6 = (
    <div className="min-w-0">
      {unity6}
      {cliff6}
    </div>
  );
  let elm6 = !ridge6,
    fern6 = () => {
      onUnsubscribe(entry.conversationId);
    };
  let grove6 = isPending ? "Unsubscribing..." : "Unsubscribe",
    hill6 = (
      <button
        type="button"
        className="cursor-interaction rounded border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50"
        disabled={elm6}
        onClick={fern6}
      >
        {grove6}
      </button>
    );
  let isle6 = (
    <div className="flex items-start justify-between gap-3">
      {dusk6}
      {hill6}
    </div>
  );
  let juniper6 = `resume: ${entry.resumeState}`,
    lagoon6 = (
      <Daisy
        {...{
          label: juniper6,
        }}
      />
    );
  let meadow6 = `stream: ${quest6?.role ?? "none"}`,
    nest6 = (
      <Daisy
        {...{
          label: meadow6,
        }}
      />
    );
  let oak6 = `runtime: ${entry.threadRuntimeStatus?.type ?? "none"}`,
    petal6 = (
      <Daisy
        {...{
          label: oak6,
        }}
      />
    );
  let quiet6 = `turn: ${entry.lastTurnStatus ?? "none"}`,
    rain6 = (
      <Daisy
        {...{
          label: quiet6,
        }}
      />
    );
  let seed6 = (
    <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-token-description-foreground">
      {lagoon6}
      {nest6}
      {petal6}
      {rain6}
    </div>
  );
  return (
    <div className="bg-token-background rounded-lg border border-token-border px-3 py-2">
      {isle6}
      {seed6}
    </div>
  );
}

function Sage(trail6) {
  let { label } = trail6;
  return (
    <span className="rounded-full bg-token-foreground/10 px-2 py-0.5 tabular-nums">
      {label}
    </span>
  );
}
