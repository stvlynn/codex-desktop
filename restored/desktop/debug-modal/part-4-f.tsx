// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/17
/* split-lane-import-depth:1 */
// AST split 6/6

import { alpha1 } from "./part-4-a";
import { Birch, Falcon } from "./part-4-b";

function Nest(nova9) {
  let { route } = nova9,
    olive9 = {
      label: "Conversation",
      value: route.conversationId,
    };
  let prism9 = String(route.windowId),
    quill9 = {
      label: "Window",
      value: prism9,
    };
  let reef9 = String(route.ownerWebContentsId),
    sage9 = {
      label: "Owner webContents",
      value: reef9,
    };
  let topaz9 = String(route.disposeAfterSessionActivity),
    ultra9 = {
      label: "Disposable",
      value: topaz9,
    };
  let vapor9 =
      route.page?.guestWebContentsId == null
        ? "none"
        : String(route.page.guestWebContentsId),
    wheat9 = {
      label: "Guest webContents",
      value: vapor9,
    };
  let yarn9 = route.page?.pageKey ?? "none",
    zephyr9 = {
      label: "Page key",
      value: yarn9,
    };
  let acorn9 = String(route.page?.isLoading ?? false),
    bloom9 = {
      label: "Loading",
      value: acorn9,
    };
  let coral9 = route.page?.url || "about:blank",
    drift9 = {
      label: "URL",
      value: coral9,
    };
  let eagle9 = [olive9, quill9, sage9, ultra9, wheat9, zephyr9, bloom9, drift9];
  let frost9 = `window ${route.windowId} · owner ${route.ownerWebContentsId}`;
  return (
    <Birch
      {...{
        details: eagle9,
        subtitle: frost9,
        title: route.conversationId,
      }}
    />
  );
}

function Oak(glide9) {
  let { attachIntent } = glide9,
    honey9 = {
      label: "Conversation",
      value: attachIntent.conversationId,
    };
  let iris9 = {
    label: "Browser tab",
    value: attachIntent.browserTabId,
  };
  let jewel9 = String(attachIntent.windowId),
    knoll9 = {
      label: "Window",
      value: jewel9,
    };
  let lunar9 = {
    label: "Kind",
    value: attachIntent.kind,
  };
  let moss9 = String(attachIntent.hostGeneration),
    north9 = {
      label: "Host generation",
      value: moss9,
    };
  let orbit9 =
      attachIntent.webContentsId == null
        ? "none"
        : String(attachIntent.webContentsId),
    pine9 = {
      label: "WebContents",
      value: orbit9,
    };
  let quest9 = [honey9, iris9, knoll9, lunar9, north9, pine9];
  let ridge9 = `${attachIntent.conversationId} · ${attachIntent.browserTabId}`,
    storm9 = `${attachIntent.kind} attach`;
  return (
    <Birch
      {...{
        details: quest9,
        subtitle: ridge9,
        title: storm9,
      }}
    />
  );
}

function Petal(tide9) {
  let { event } = tide9,
    unity9 = String(event.sequence),
    vale9 = {
      label: "Sequence",
      value: unity9,
    };
  let wave9 = alpha1.format(event.timestampMs);
  let apex9 = {
    label: "Time",
    value: wave9,
  };
  let brook9 = event.conversationId ?? "none",
    cliff9 = {
      label: "Conversation",
      value: brook9,
    };
  let dusk9 = event.browserTabId ?? "none",
    elm9 = {
      label: "Browser tab",
      value: dusk9,
    };
  let fern9 =
      event.ownerWebContentsId == null
        ? "none"
        : String(event.ownerWebContentsId),
    grove9 = {
      label: "Owner webContents",
      value: fern9,
    };
  let hill9 = event.windowId == null ? "none" : String(event.windowId),
    isle9 = {
      label: "Window",
      value: hill9,
    };
  let juniper9 =
      event.guestWebContentsId == null
        ? "none"
        : String(event.guestWebContentsId),
    lagoon9 = {
      label: "Guest webContents",
      value: juniper9,
    };
  let meadow9 = event.pageKey ?? "none",
    nest9 = {
      label: "Page key",
      value: meadow9,
    };
  let oak9 = [
    vale9,
    apex9,
    cliff9,
    elm9,
    grove9,
    isle9,
    lagoon9,
    nest9,
    ...event.details,
  ];
  let petal9 = `#${event.sequence} ${event.kind}`;
  return (
    <Birch
      {...{
        details: oak9,
        subtitle: event.message,
        title: petal9,
      }}
    />
  );
}

function Quiet(quiet9) {
  let { details, subtitle, title } = quiet9,
    rain9 = (
      <div className="truncate font-mono text-xs text-token-foreground">
        {title}
      </div>
    );
  let seed9 = (
    <div className="mt-1 truncate text-[11px] text-token-description-foreground">
      {subtitle}
    </div>
  );
  let trail9 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2 marker:content-none">
      <div className="min-w-0">
        {rain9}
        {seed9}
      </div>
    </summary>
  );
  let urn9 = details.map(Rain);
  let vine9 = <div className="border-t border-token-border px-3">{urn9}</div>;
  return (
    <details className="group bg-token-background rounded-lg border border-token-border">
      {trail9}
      {vine9}
    </details>
  );
}

function Rain(wind9) {
  return (
    <Falcon
      key={`${wind9.label}:${wind9.value}`}
      {...{
        label: wind9.label,
        value: wind9.value,
      }}
    />
  );
}
