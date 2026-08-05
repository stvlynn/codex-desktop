// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
/* split-lane-import-depth:1 */
// AST split 2/6

// Wave5d soft JSX companions.
export function Bravo1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Chatgpt2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function ForkConversationWithGitOrigins(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function LerpIfFinite(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Pearl1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Quartz1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function River1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Slate1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Timber1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Vale(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Seed(yarrow9) {
  let { emptyMessage, rows, title } = yarrow9,
    azure9 = (
      <div className="text-xs font-medium tracking-wide text-token-description-foreground uppercase">
        {title}
      </div>
    );
  let birch9 =
    rows.length === 0 ? (
      <Vale
        {...{
          message: emptyMessage,
        }}
      />
    ) : (
      <div className="flex flex-col gap-2">{rows}</div>
    );
  return (
    <div className="flex flex-col gap-2">
      {azure9}
      {birch9}
    </div>
  );
}

function Trail(canyon9) {
  let { message } = canyon9;
  return (
    <div className="rounded-lg border border-dashed border-token-border px-3 py-3 text-xs text-token-description-foreground">
      {message}
    </div>
  );
}

function Urn(dew9) {
  if (dew9.opened) return "Opened exact Browser owner route";
  switch (dew9.reason) {
    case "missing-owner-route":
      return "No exact owner route is recorded for this Browser tab";
    case "missing-tab":
      return "The Browser tab no longer exists";
    case "missing-window":
      return "The Browser owner window is no longer live";
  }
}

function Vine(alpha10) {
  return alpha10 == null
    ? "none"
    : `${alpha10.width}x${alpha10.height} @ ${alpha10.x},${alpha10.y}`;
}

function Wind(bravo10) {
  if (bravo10 == null) return "none";
  let copper10 = Math.max(0, Math.round((Date.now() - bravo10) / 1e3));
  if (copper10 < 60) return `${copper10}s`;
  let delta10 = Math.round(copper10 / 60);
  return delta10 < 60 ? `${delta10}m` : `${Math.round(delta10 / 60)}h`;
}

function Yarrow(echo10) {
  return {
    capturedAtMs: echo10.capturedAtMs,
    pendingAttaches: echo10.pendingAttaches,
    restoreEvents: echo10.events.filter((item) =>
      item.kind.startsWith("browser-restore-"),
    ),
    tabs: echo10.tabs.map((item) => ({
      browserStorageId: item.browserStorageId,
      browserTabId: item.browserTabId,
      conversationId: item.conversationId,
      guestWebContentsId: item.guestWebContentsId,
      hasPage: item.hasPage,
      hasPersistedPageState: item.hasPersistedPageState,
      pendingAttachCount: item.pendingAttachCount,
      persistedHistoryEntryCount: item.persistedHistoryEntryCount,
      persistedPageStateUpdatedAtMs: item.persistedPageStateUpdatedAtMs,
      restoreInvariant: item.restoreInvariant,
      restorePhase: item.restorePhase,
      webviewHostRegistered: item.webviewHostRegistered,
      windowId: item.windowId,
    })),
  };
}
