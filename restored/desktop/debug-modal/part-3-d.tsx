// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/17
/* split-lane-import-depth:1 */
// AST split 4/6

import { IntlProvider, vale } from "./part-3-a";
import { Unity } from "./part-3-b";

function Bloom(cedar7) {
  let { request } = cedar7,
    daisy7 = (
      <span className="truncate font-mono text-xs text-token-foreground">
        {request.method}
      </span>
    );
  let ember7 = (
    <span className="rounded-full bg-token-foreground/10 px-1.5 py-0.5 text-[10px] font-medium text-token-description-foreground tabular-nums">
      {"#"}
      {request.matchingRequestSequenceNumber}
    </span>
  );
  let flint7 = (
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        {daisy7}
        {ember7}
      </div>
    </div>
  );
  let garnet7 = vale.format(request.startedAtMs);
  let hazel7 = <div>{garnet7}</div>;
  let ivory7 = Pine(request);
  let jasper7 = <div>{ivory7}</div>;
  let kelp7 = (
    <div className="shrink-0 text-right text-[11px] text-token-description-foreground tabular-nums">
      {hazel7}
      {jasper7}
    </div>
  );
  let lotus7 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">
      {flint7}
      {kelp7}
    </summary>
  );
  let mint7 = (
    <div>
      {"Request ID: "}
      {request.id}
    </div>
  );
  let nova7 = request.timeoutMs > 0 ? request.timeoutMs : "none",
    olive7 = (
      <div>
        {"Timeout: "}
        {nova7}
      </div>
    );
  let prism7 = (
    <div>
      {"Priority: "}
      {request.priority}
    </div>
  );
  let quill7 = (
    <div>
      {"Source: "}
      {request.source}
    </div>
  );
  let reef7 = (
    <div>
      {"Queued: "}
      {request.queueWaitMs}
      {"ms"}
    </div>
  );
  let sage7 =
    request.endedAtMs == null ? (
      <div>{"Ended: pending"}</div>
    ) : (
      <div>
        {"Ended: "}
        {vale.format(request.endedAtMs)}
      </div>
    );
  let topaz7 = (
    <div className="grid gap-2 text-[11px] text-token-description-foreground md:grid-cols-2">
      {mint7}
      {olive7}
      {prism7}
      {quill7}
      {reef7}
      {sage7}
    </div>
  );
  let ultra7 = (
    <Unity
      {...{
        payload: request.paramsPreview,
        title: "Params",
      }}
    />
  );
  let vapor7 =
    request.resultPreview == null ? null : (
      <Unity
        {...{
          payload: request.resultPreview,
          title: "Result",
        }}
      />
    );
  let wheat7 =
    request.errorPreview == null ? null : (
      <Unity
        {...{
          payload: request.errorPreview,
          title: "Error",
        }}
      />
    );
  let yarn7 = (
    <div className="space-y-3 border-t border-token-border p-3">
      {topaz7}
      {ultra7}
      {vapor7}
      {wheat7}
    </div>
  );
  return (
    <details className="group/request bg-token-background rounded-lg border border-token-border">
      {lotus7}
      {yarn7}
    </details>
  );
}

function North(fern7) {
  return fern7 == null
    ? "running"
    : fern7 < 1e3
      ? `${fern7} ms`
      : `${(fern7 / 1e3).toFixed(2)} s`;
}

function Pine(hill7) {
  switch (hill7.status) {
    case "pending":
      return "pending";
    case "completed":
      return `✅ ${North(hill7.durationMs)}`;
    case "failed":
    case "timed-out":
      return `❌ ${North(hill7.durationMs)}`;
  }
}

function Coral(zephyr7) {
  let { notification } = zephyr7,
    acorn7 = IntlProvider(
      "group/notification bg-token-background rounded-lg border",
      Quest(notification.severity),
    );
  let bloom7 = (
    <span className="truncate font-mono text-xs text-token-foreground">
      {notification.method}
    </span>
  );
  let coral7 =
    notification.severity === "error" ? (
      <span className="rounded-full bg-token-charts-red/15 px-1.5 py-0.5 text-[10px] font-medium text-token-charts-red">
        {"error"}
      </span>
    ) : null;
  let drift7 = (
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        {bloom7}
        {coral7}
      </div>
    </div>
  );
  let eagle7 = vale.format(notification.receivedAtMs);
  let frost7 = (
    <div className="shrink-0 text-right text-[11px] text-token-description-foreground tabular-nums">
      {eagle7}
    </div>
  );
  let glide7 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">
      {drift7}
      {frost7}
    </summary>
  );
  let honey7 = (
    <div className="space-y-3 border-t border-token-border p-3">
      {
        <Unity
          {...{
            payload: notification.paramsPreview,
            title: "Params",
          }}
        />
      }
    </div>
  );
  return (
    <details className={acorn7}>
      {glide7}
      {honey7}
    </details>
  );
}

function Quest(isle7) {
  switch (isle7) {
    case "default":
      return "border-token-border";
    case "error":
      return "border-token-charts-red/50";
    case "noisy":
      return "border-token-border/70";
  }
}
