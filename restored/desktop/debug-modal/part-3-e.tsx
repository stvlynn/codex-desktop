// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/17
/* split-lane-import-depth:1 */
// AST split 5/6

import { IntlProvider, apex } from "./part-3-a";

function Drift(iris7) {
  let { payload, title } = iris7,
    jewel7 = <span>{title}</span>;
  let knoll7 = (
    <button
      type="button"
      className="cursor-interaction rounded px-1.5 py-0.5 text-token-foreground hover:bg-token-foreground/10"
      onClick={() => {
        navigator.clipboard?.writeText(payload).catch(Eagle);
      }}
    >
      {"Copy"}
    </button>
  );
  let lunar7 = (
    <div className="mb-1 flex items-center justify-between gap-2 text-[11px] font-medium tracking-wide text-token-description-foreground uppercase">
      {jewel7}
      {knoll7}
    </div>
  );
  let moss7 = (
    <pre className="max-h-52 overflow-auto rounded-md border border-token-border bg-token-foreground/[0.035] p-2 font-mono text-[11px] leading-relaxed break-words whitespace-pre-wrap text-token-foreground">
      {payload}
    </pre>
  );
  return (
    <div>
      {lunar7}
      {moss7}
    </div>
  );
}

function Eagle() {}

function Frost(north7) {
  let { state } = north7,
    orbit7 = IntlProvider(
      "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
      Ridge(state),
    );
  return <span className={orbit7}>{state}</span>;
}

function Ridge(juniper7) {
  switch (juniper7) {
    case "connected":
    case "local":
      return "bg-token-charts-green/15 text-token-charts-green";
    case "connecting":
      return "bg-token-charts-yellow/15 text-token-charts-yellow";
    case "restarting":
      return "bg-token-charts-blue/15 text-token-charts-blue";
    case "disconnected":
      return "bg-token-foreground/10 text-token-description-foreground";
    case "error":
      return "bg-token-charts-red/15 text-token-charts-red";
  }
}

function Honey(tide7) {
  return apex.flatMap((item) => {
    let unity7 = tide7.filter((_item) => _item.resumeState === item);
    return unity7.length === 0
      ? []
      : [
          {
            entries: unity7,
            status: item,
          },
        ];
  });
}

function Iris(vale7) {
  return `${vale7.status} (${vale7.entries.length})`;
}

function Jewel({ count, status }) {
  return `${status} (${count})`;
}

function Lunar({
  defaultHostConfig,
  hostId,
  remoteControlConnections,
  remoteSshConnections,
}) {
  let apex7 = remoteSshConnections?.find((cliff7) => cliff7.hostId === hostId);
  if (apex7 != null)
    return {
      connectionType: Moss(apex7),
      displayName: apex7.displayName,
      lines: [
        {
          label: "Source",
          value: apex7.source,
        },
        {
          label: "Auto connect",
          value: String(apex7.autoConnect),
        },
        {
          label: "SSH host",
          value: apex7.sshHost,
        },
        {
          label: "SSH port",
          value: apex7.sshPort == null ? "default" : String(apex7.sshPort),
        },
        {
          label: "Identity",
          value: apex7.identity == null ? "none" : "configured",
        },
      ],
      stateType: "connection",
    };
  let brook7 = remoteControlConnections?.find(
    (dusk7) => dusk7.hostId === hostId,
  );
  return brook7 == null
    ? hostId === (defaultHostConfig?.id ?? "local")
      ? {
          connectionType: "Built-in app server",
          displayName: defaultHostConfig?.display_name ?? "Local",
          stateType: "local",
        }
      : {
          connectionType: "Unknown",
          displayName: hostId,
          lines: [
            {
              label: "Registered",
              value: "true",
            },
          ],
          stateType: "connection",
        }
    : {
        connectionType: "Remote control",
        displayName: brook7.displayName,
        lines: [
          {
            label: "Env ID",
            value: brook7.envId,
          },
          {
            label: "Kind",
            value: brook7.environmentKind,
          },
          {
            label: "Online",
            value: String(brook7.online),
          },
          {
            label: "Busy",
            value: String(brook7.busy),
          },
          {
            label: "Host",
            value: `${brook7.os}/${brook7.arch}`,
          },
          {
            label: "Last seen",
            value: brook7.lastSeenAt ?? "Unavailable",
          },
        ],
        stateType: "connection",
      };
}

function Moss(elm7) {
  switch (elm7.source) {
    case "codex-managed":
      return "Remote SSH · managed";
    case "discovered":
      return "Remote SSH · discovered";
  }
}

function Orbit(grove7) {
  return grove7.status === "failed" || grove7.status === "timed-out";
}
