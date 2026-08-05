// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
/* split-lane-import-depth:1 */
// AST split 4/6

import { timber1 } from "./part-5-a";
import { Bravo1, Falcon, LerpIfFinite, Quartz1, River1 } from "./part-5-b";

function Echo1(kelp10) {
  let {
      actionStatus,
      onCancel,
      onOpen,
      onPause,
      onRemove,
      onResume,
      onShowInFolder,
      snapshot,
    } = kelp10,
    lotus10 = timber1.format(snapshot.capturedAtMs);
  let mint10 = (
    <Falcon
      {...{
        label: "Captured",
        value: lotus10,
      }}
    />
  );
  let nova10 = String(snapshot.downloads.length),
    olive10 = (
      <Falcon
        {...{
          label: "Downloads",
          value: nova10,
        }}
      />
    );
  let prism10 = (
    <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">
      {mint10}
      {olive10}
    </div>
  );
  let quill10 =
    actionStatus == null ? null : (
      <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2 text-xs text-token-description-foreground">
        {actionStatus}
      </div>
    );
  let reef10 =
    snapshot.downloads.length === 0 ? (
      <Bravo1
        {...{
          message: "No downloads captured yet.",
        }}
      />
    ) : (
      <div className="flex flex-col gap-2">
        {snapshot.downloads.map((item) => (
          <Quartz1
            key={item.id}
            {...{
              download: item,
              onCancel,
              onOpen,
              onPause,
              onRemove,
              onResume,
              onShowInFolder,
            }}
          />
        ))}
      </div>
    );
  return (
    <div className="flex flex-col gap-3">
      {prism10}
      {quill10}
      {reef10}
    </div>
  );
}

function Falcon1(sage10) {
  let {
      download,
      onCancel,
      onOpen,
      onPause,
      onRemove,
      onResume,
      onShowInFolder,
    } = sage10,
    topaz10 =
      download.totalBytes > 0
        ? Math.min(1, download.receivedBytes / download.totalBytes)
        : null,
    ultra10 = (
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-token-foreground/5 text-token-description-foreground">
        {
          <LerpIfFinite
            {...{
              className: "icon-sm",
            }}
          />
        }
      </div>
    );
  let vapor10 = <div className="truncate font-medium">{download.filename}</div>;
  let wheat10 = Jade1(download);
  let yarn10 = (
    <div className="truncate text-xs text-token-description-foreground">
      {wheat10}
    </div>
  );
  let zephyr10 = (
    <div className="min-w-0">
      {vapor10}
      {yarn10}
    </div>
  );
  let acorn10 = (
    <River1
      {...{
        download,
        onCancel,
        onOpen,
        onPause,
        onRemove,
        onResume,
        onShowInFolder,
      }}
    />
  );
  let bloom10 = (
    <div className="flex items-start justify-between gap-2">
      {zephyr10}
      {acorn10}
    </div>
  );
  let coral10 =
    topaz10 == null ||
    download.status === "paused" ||
    Marble1(download.status) ? null : (
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-token-foreground/10">
        <div
          className="h-full rounded-full bg-token-charts-blue"
          style={{
            width: `${Math.max(2, topaz10 * 100)}%`,
          }}
        />
      </div>
    );
  let drift10 = (
    <div className="truncate">
      {"Path: "}
      {download.path}
    </div>
  );
  let eagle10 = (
    <div className="truncate">
      {"URL: "}
      {download.url}
    </div>
  );
  let frost10 = (
    <div className="mt-2 grid gap-1 text-xs text-token-description-foreground">
      {drift10}
      {eagle10}
    </div>
  );
  return (
    <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2">
      <div className="flex items-start gap-3">
        {ultra10}
        <div className="min-w-0 flex-1">
          {bloom10}
          {coral10}
          {frost10}
        </div>
      </div>
    </div>
  );
}

function Jade1(quiet10) {
  let rain10 =
    quiet10.totalBytes > 0
      ? `${Kite1(quiet10.receivedBytes)} / ${Kite1(quiet10.totalBytes)}`
      : Kite1(quiet10.receivedBytes);
  return [
    Lemon1(quiet10.status),
    rain10,
    timber1.format(quiet10.updatedAtMs),
  ].join(" - ");
}

function Kite1(seed10) {
  if (!Number.isFinite(seed10) || seed10 <= 0) return "0 bytes";
  if (seed10 < 1024) return `${seed10} ${seed10 === 1 ? "byte" : "bytes"}`;
  let trail10 = ["KB", "MB", "GB", "TB"],
    urn10 = seed10 / 1024,
    vine10 = 0;
  for (; urn10 >= 1024 && vine10 < trail10.length - 1; ) {
    urn10 /= 1024;
    vine10 += 1;
  }
  return `${urn10.toFixed(urn10 >= 10 ? 0 : 1)} ${trail10[vine10]}`;
}

function Lemon1(wind10) {
  switch (wind10) {
    case "started":
      return "Started";
    case "in_progress":
      return "In progress";
    case "paused":
      return "Paused";
    case "failed":
      return "Failed";
    case "canceled":
      return "Canceled";
    case "complete":
      return "Complete";
  }
}

function Marble1(yarrow10) {
  return (
    yarrow10 === "canceled" || yarrow10 === "complete" || yarrow10 === "failed"
  );
}
