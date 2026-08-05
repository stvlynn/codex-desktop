// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/17
/* split-lane-import-depth:1 */
// AST split 3/6

import { alpha1 } from "./part-4-a";
import {
  Alpha1,
  Azure,
  Birch,
  Brook,
  Canyon,
  Cliff,
  Dew,
  Falcon,
} from "./part-4-b";

function Grove(indigo8) {
  let { onOpenOwner, openOwnerStatus, snapshot } = indigo8,
    jade8 = alpha1.format(snapshot.capturedAtMs);
  let kite8 = (
    <Falcon
      {...{
        label: "Captured",
        value: jade8,
      }}
    />
  );
  let lemon8 = String(snapshot.windows.length),
    marble8 = (
      <Falcon
        {...{
          label: "Windows",
          value: lemon8,
        }}
      />
    );
  let nickel8 = String(snapshot.tabs.length),
    onyx8 = (
      <Falcon
        {...{
          label: "Tabs",
          value: nickel8,
        }}
      />
    );
  let pearl8 = String(snapshot.sessionRoutes.length),
    quartz8 = (
      <Falcon
        {...{
          label: "Session routes",
          value: pearl8,
        }}
      />
    );
  let river8 = String(snapshot.pendingAttaches.length),
    slate8 = (
      <Falcon
        {...{
          label: "Pending attaches",
          value: river8,
        }}
      />
    );
  let timber8 = String(snapshot.openRequests.length),
    umbra8 = (
      <Falcon
        {...{
          label: "Open waits",
          value: timber8,
        }}
      />
    );
  let violet8 = snapshot.tabs.filter(no);
  let willow8 = String(violet8.length),
    xenon8 = (
      <Falcon
        {...{
          label: "Restore issues",
          value: willow8,
        }}
      />
    );
  let yellow8 = (
    <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">
      {kite8}
      {marble8}
      {onyx8}
      {quartz8}
      {slate8}
      {umbra8}
      {xenon8}
    </div>
  );
  let zinc8 =
    openOwnerStatus == null ? null : (
      <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3 py-2 text-xs text-token-description-foreground">
        {openOwnerStatus}
      </div>
    );
  let amber8 = snapshot.windows.map(to);
  let basalt8 = (
    <Brook
      {...{
        emptyMessage: "No Browser windows registered.",
        rows: amber8,
        title: "Windows",
      }}
    />
  );
  let cedar8;
  {
    let mint8;
    mint8 = (nova8) => (
      <Cliff
        key={`${nova8.windowId}:${nova8.conversationId}:${nova8.browserTabId}`}
        {...{
          onOpenOwner,
          tab: nova8,
        }}
      />
    );
    cedar8 = snapshot.tabs.map(mint8);
  }
  let daisy8 = (
    <Brook
      {...{
        emptyMessage: "No Browser tab routes registered.",
        rows: cedar8,
        title: "Tabs",
      }}
    />
  );
  let ember8 = snapshot.sessionRoutes.map(Juniper);
  let flint8 = (
    <Brook
      {...{
        emptyMessage: "No Browser Use session routes captured.",
        rows: ember8,
        title: "Session routes",
      }}
    />
  );
  let garnet8 = snapshot.pendingAttaches.map($a);
  let hazel8 = (
    <Brook
      {...{
        emptyMessage: "No Browser webview attach intents pending.",
        rows: garnet8,
        title: "Pending attaches",
      }}
    />
  );
  let ivory8 = snapshot.openRequests.map(Isle);
  let jasper8 = (
    <Brook
      {...{
        emptyMessage: "No Browser Use open waits pending.",
        rows: ivory8,
        title: "Open waits",
      }}
    />
  );
  let kelp8 = snapshot.events.slice().reverse().map(Hill);
  let lotus8 = (
    <Brook
      {...{
        emptyMessage: "No Browser lifecycle events recorded yet.",
        rows: kelp8,
        title: "Recent Browser events",
      }}
    />
  );
  return (
    <div className="flex flex-col gap-3">
      {yellow8}
      {zinc8}
      {basalt8}
      {daisy8}
      {flint8}
      {hazel8}
      {jasper8}
      {lotus8}
    </div>
  );
}

function Hill(olive8) {
  return (
    <Azure
      key={olive8.sequence}
      {...{
        event: olive8,
      }}
    />
  );
}

function Isle(prism8) {
  return (
    <Birch
      key={`${prism8.ownerWebContentsId}:${prism8.conversationId ?? "none"}:${prism8.browserTabId ?? "none"}`}
      {...{
        details: [
          {
            label: "Window",
            value: prism8.windowId == null ? "none" : String(prism8.windowId),
          },
          {
            label: "Active conversation",
            value: prism8.activeConversationId ?? "none",
          },
          {
            label: "Active browser tab",
            value: prism8.activeBrowserTabId ?? "none",
          },
          {
            label: "Conversation",
            value: prism8.conversationId ?? "none",
          },
          {
            label: "Browser tab",
            value: prism8.browserTabId ?? "none",
          },
          {
            label: "Owner webContents",
            value: String(prism8.ownerWebContentsId),
          },
          {
            label: "Owner route",
            value: prism8.ownerRoutePath ?? "missing",
          },
          {
            label: "Route active",
            value:
              prism8.routeActive == null
                ? "unknown"
                : String(prism8.routeActive),
          },
          {
            label: "Has page",
            value: prism8.hasPage == null ? "unknown" : String(prism8.hasPage),
          },
          {
            label: "Guest webContents",
            value:
              prism8.guestWebContentsId == null
                ? "none"
                : String(prism8.guestWebContentsId),
          },
          {
            label: "Pending attaches",
            value:
              prism8.pendingAttachCount == null
                ? "unknown"
                : String(prism8.pendingAttachCount),
          },
          {
            label: "Panel open pending",
            value:
              prism8.pendingBrowserUsePanelOpen == null
                ? "unknown"
                : String(prism8.pendingBrowserUsePanelOpen),
          },
        ],
        subtitle: prism8.conversationId ?? "No conversation",
        title: "Waiting for Browser webview attach",
      }}
    />
  );
}

function $a(quill8) {
  return (
    <Canyon
      key={`${quill8.windowId}:${quill8.kind}:${quill8.conversationId}:${quill8.browserTabId}:${quill8.webContentsId ?? "none"}`}
      {...{
        attachIntent: quill8,
      }}
    />
  );
}

function Juniper(reef8) {
  return (
    <Dew
      key={`${reef8.windowId}:${reef8.conversationId}`}
      {...{
        route: reef8,
      }}
    />
  );
}

function to(sage8) {
  return (
    <Alpha1
      key={sage8.windowId}
      {...{
        window: sage8,
      }}
    />
  );
}

function no(topaz8) {
  return topaz8.restoreInvariant != null;
}
