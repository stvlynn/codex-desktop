// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */
// AST split 5/7

import {
  DeferredUiA22,
  DeferredUiN2,
  DeferredUiO22,
  Orbit,
  brook,
} from "./part-2-a";
import { Falcon, Pearl, Quartz, Timber, Umbra, Violet } from "./part-2-b";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";

function Ivory(bravo6) {
  let { hostDetails, hostId, notifications, requests } = bravo6,
    copper6 = CodexPluginActionType(appScopeAtom),
    delta6 = CodexBrowserSurfaceActionType(DeferredUiN2, hostId),
    echo6 = CodexBrowserSurfaceActionType(DeferredUiA22, hostId),
    falcon6 = CodexBrowserSurfaceActionType(DeferredUiO22, hostId),
    gamma6 = !!hostDetails.lines?.length,
    harbor6 = requests.filter(Orbit);
  let indigo6 = harbor6.length,
    jade6 =
      CodexBrowserSurfaceActionType(brook, hostId) ??
      hostDetails.stateType === "local",
    kite6 = hostDetails.stateType === "local" ? "local" : delta6,
    lemon6 = requests.filter(Lotus);
  let marble6 = lemon6.length,
    nickel6 = notifications.filter(Kelp);
  let onyx6 = nickel6.length,
    pearl6 = notifications.filter(Jasper);
  let quartz6 = pearl6.length,
    river6 = (event) => {
      copper6.set(brook, hostId, event.currentTarget.open);
    };
  let slate6 = (
    <span className="truncate font-medium text-token-foreground">
      {hostDetails.displayName}
    </span>
  );
  let timber6 = (
    <Pearl
      {...{
        state: kite6,
      }}
    />
  );
  let umbra6 = (
    <div className="flex items-center gap-2">
      {slate6}
      {timber6}
    </div>
  );
  let violet6 = hostDetails.stateType === "connection" ? ` · ${hostId}` : null,
    willow6 = ` · v${echo6 ?? "Unavailable"}`,
    xenon6 = (
      <div className="mt-1 truncate text-xs text-token-description-foreground">
        {hostDetails.connectionType}
        {violet6}
        {willow6}
      </div>
    );
  let yellow6 = (
    <div className="min-w-0">
      {umbra6}
      {xenon6}
    </div>
  );
  let zinc6 = (
    <span>
      {requests.length}
      {" requests"}
    </span>
  );
  let amber6 = (
    <span>
      {notifications.length}
      {" notifications"}
    </span>
  );
  let basalt6 =
    marble6 > 0 ? (
      <span className="rounded-full bg-token-charts-yellow/15 px-2 py-0.5 text-token-charts-yellow">
        {marble6}
        {" live"}
      </span>
    ) : null;
  let cedar6 =
    indigo6 > 0 ? (
      <span className="rounded-full bg-token-charts-red/15 px-2 py-0.5 text-token-charts-red">
        {indigo6}
        {" failed"}
      </span>
    ) : null;
  let daisy6 =
    onyx6 > 0 ? (
      <span className="rounded-full bg-token-charts-red/15 px-2 py-0.5 text-token-charts-red">
        {onyx6}
        {" notification errors"}
      </span>
    ) : null;
  let ember6 =
    quartz6 > 0 ? (
      <span className="rounded-full bg-token-foreground/10 px-2 py-0.5">
        {quartz6}
        {" deltas"}
      </span>
    ) : null;
  let flint6 = (
    <div className="flex shrink-0 items-center gap-2 text-xs text-token-description-foreground tabular-nums">
      {zinc6}
      {amber6}
      {basalt6}
      {cedar6}
      {daisy6}
      {ember6}
    </div>
  );
  let garnet6 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2.5 marker:content-none">
      {yellow6}
      {flint6}
    </summary>
  );
  let hazel6 = gamma6 ? (
    <Quartz
      {...{
        hostDetails,
      }}
    />
  ) : null;
  let ivory6 = (
    <Timber
      {...{
        hostId,
        threadStatusEntries: falcon6,
      }}
    />
  );
  let jasper6 = (
    <Umbra
      {...{
        hostId,
        requests,
      }}
    />
  );
  let kelp6 = (
    <Violet
      {...{
        hostId,
        notifications,
      }}
    />
  );
  let lotus6 = (
    <div className="border-t border-token-border px-3 pb-3">
      <div className="flex flex-col gap-3 py-3">
        {hazel6}
        {ivory6}
        {jasper6}
        {kelp6}
      </div>
    </div>
  );
  return (
    <details
      className="group rounded-xl border border-token-border bg-token-foreground/[0.03] shadow-sm"
      onToggle={river6}
      open={jade6}
    >
      {garnet6}
      {lotus6}
    </details>
  );
}

function Jasper(mint6) {
  return mint6.isNoisy;
}

function Kelp(nova6) {
  return nova6.severity === "error";
}

function Lotus(olive6) {
  return olive6.status === "pending";
}

function Mint(prism6) {
  let { hostDetails } = prism6,
    quill6 = hostDetails.lines?.map(Nova);
  return (
    <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">
      {quill6}
    </div>
  );
}

function Nova(reef6) {
  return (
    <Falcon
      key={reef6.label}
      {...{
        label: reef6.label,
        value: reef6.value,
      }}
    />
  );
}
