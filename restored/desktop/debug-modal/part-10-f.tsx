// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
/* split-lane-import-depth:1 */
// AST split 6/7

import {
  Alpha,
  AppInitialA2,
  AppInitialG2,
  AppInitialK2,
  DeferredUiD2,
  DeferredUiW22,
  IntlProvider,
  bloom2,
} from "./part-10-a";
import { Falcon, Willow1, Xenon1 } from "./part-10-d";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import {
  useDebugPanelEditedFilePaths,
  useDebugPanelReferencedFilePaths,
} from "../../hooks/use-debug-panel";

function Reef2(elm19) {
  let { lines } = elm19,
    fern19 = lines.map(Sage2);
  return <div className="flex flex-col py-1.5">{fern19}</div>;
}

function Sage2(grove19) {
  return (
    <Falcon
      key={grove19.label}
      {...{
        label: grove19.label,
        value: grove19.value,
      }}
    />
  );
}

function Wheat2(hill19) {
  let { conversationId } = hill19,
    isle19 =
      CodexBrowserSurfaceActionType(MCP_SERVERS_STATUS_PATH, conversationId) ??
      bloom2,
    juniper19 =
      CodexBrowserSurfaceActionType(AppInitialK2, conversationId) ?? "unknown",
    lagoon19 =
      CodexBrowserSurfaceActionType(AppInitialA2, conversationId) ?? "unknown",
    meadow19 =
      CodexBrowserSurfaceActionType(AppInitialG2, conversationId) ?? "unknown",
    nest19 =
      CodexBrowserSurfaceActionType(DeferredUiW22, conversationId) ?? "unknown",
    oak19 =
      CodexBrowserSurfaceActionType(DeferredUiD2, conversationId) ?? "unknown",
    petal19,
    quiet19,
    rain19,
    seed19,
    trail19,
    urn19;
  {
    let wind19 = useDebugPanelEditedFilePaths(isle19),
      yarrow19 = useDebugPanelReferencedFilePaths(isle19);
    quiet19 = Alpha;
    seed19 = "Local conversation";
    trail19 = "debug-entry-local-conversation-current";
    urn19 = "selection";
    petal19 = Reef2;
    let azure19 = {
      label: "id",
      value: conversationId,
    };
    let birch19 = {
      label: "model",
      value: juniper19,
    };
    let canyon19 = {
      label: "reasoning",
      value: lagoon19,
    };
    let dew19 = {
      label: "rolloutPath",
      value: meadow19,
    };
    let alpha20 = {
      label: "resumeState",
      value: nest19,
    };
    let bravo20 = {
      label: "cwd",
      value: oak19,
    };
    let copper20 = String(wind19.length),
      delta20 = {
        label: "editedFileCount",
        value: copper20,
      };
    let echo20 = wind19.map(_l),
      falcon20 = String(yarrow19.length),
      gamma20;
    gamma20 = {
      label: "referencedFileCount",
      value: falcon20,
    };
    rain19 = [
      azure19,
      birch19,
      canyon19,
      dew19,
      alpha20,
      bravo20,
      delta20,
      ...echo20,
      gamma20,
      ...yarrow19.map(Yarn2),
    ];
  }
  let vine19 = (
    <Willow1
      {...{
        lines: rain19,
      }}
    />
  );
  return (
    <Xenon1
      {...{
        title: seed19,
        storageKey: trail19,
        variant: urn19,
        children: vine19,
      }}
    />
  );
}

function Yarn2(harbor20, indigo20) {
  return {
    label: `referencedFile[${indigo20}]`,
    value: harbor20,
  };
}

function _l(jade20, kite20) {
  return {
    label: `editedFile[${kite20}]`,
    value: jade20,
  };
}

function Drift2(lemon20) {
  let { title, subtitle, icon, rightActions, status, onClick } = lemon20,
    marble20 = onClick
      ? "hover:bg-token-foreground/5 cursor-interaction"
      : "cursor-default",
    nickel20 = IntlProvider(
      "border-token-border/50 flex w-full items-center gap-2 border-t py-1.5 text-left first:border-none",
      marble20,
    );
  let onyx20 = icon ? <div className="mt-0.5">{icon}</div> : null;
  let pearl20 = <div className="truncate">{title}</div>;
  let quartz20 = subtitle ? (
    <div className="truncate text-xs text-token-description-foreground">
      {subtitle}
    </div>
  ) : null;
  let river20 = (
    <div className="min-w-0 flex-1">
      {pearl20}
      {quartz20}
    </div>
  );
  let slate20 = status ? (
    <div className="ml-2 shrink-0 text-token-description-foreground">
      {status}
    </div>
  ) : null;
  let timber20 = rightActions ? (
    <div className="flex items-center gap-1">{rightActions}</div>
  ) : null;
  return (
    <button type="button" className={nickel20} onClick={onClick}>
      {onyx20}
      {river20}
      {slate20}
      {timber20}
    </button>
  );
}
