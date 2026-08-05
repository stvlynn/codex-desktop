// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */
// AST split 4/7

import {
  AppInitialBt,
  DeferredUiB22,
  DeferredUiI23,
  Lunar,
  daisy,
  ember,
  wave,
} from "./part-2-a";
import { Copper, Nickel, Onyx } from "./part-2-b";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";

function Amber({ labels, projectlessThreadCwd, statuses, workspaceRoots }) {
  let elm5 = new Map();
  if (workspaceRoots != null)
    for (let fern5 of workspaceRoots)
      elm5.set(fern5, {
        projectRoot: fern5,
        title: labels?.[fern5] ?? fern5,
      });
  if (statuses != null)
    for (let grove5 of statuses)
      elm5.has(grove5.projectRoot) ||
        elm5.set(grove5.projectRoot, {
          projectRoot: grove5.projectRoot,
          title: labels?.[grove5.projectRoot] ?? grove5.projectRoot,
        });
  return (
    projectlessThreadCwd != null &&
      elm5.set(projectlessThreadCwd, {
        projectRoot: projectlessThreadCwd,
        title: "Projectless task",
      }),
    Array.from(elm5.values())
  );
}

function Cedar({ sourceThreadId }) {
  let [hill5, isle5] = daisy.useState(ember),
    [juniper5, lagoon5] = daisy.useState("Not run yet"),
    [meadow5, nest5] = daisy.useState(false),
    oak5 = async () => {
      if (!meadow5) {
        nest5(true);
        try {
          let petal5 = JSON.parse(hill5),
            quiet5 = await runAppActionInPrimaryWindow(petal5, {
              sourceThreadId,
            });
          lagoon5(
            `Success\n\nResult:\n${JSON.stringify(quiet5, null, 2)}\n\nSent payload:\n${JSON.stringify(petal5, null, 2)}`,
          );
        } catch (rain5) {
          let seed5 = rain5 instanceof Error ? rain5.message : String(rain5);
          lagoon5(`Error: ${seed5}\n\nInput JSON:\n${hill5}`);
          appActionSidebarProjectRefSchema.error(
            "Failed to run debug app action",
            {
              safe: {},
              sensitive: {
                actionJson: hill5,
                error: rain5,
              },
            },
          );
        } finally {
          nest5(false);
        }
      }
    };
  return (
    <Copper
      {...{
        title: "App Actions",
        storageKey: "debug-app-actions",
        variant: "global",
        actions: (
          <button
            type="button"
            className="inline-flex items-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={meadow5}
            onClick={() => {
              oak5();
            }}
          >
            {meadow5 ? "Running…" : "Run action"}
          </button>
        ),
        children: [
          <p className="text-token-foreground-secondary pt-2 text-xs">
            {
              "Run a raw app-control action payload against the primary app window. Agent tool availability is controlled by the app-control Statsig gate."
            }
          </p>,
          <div className="flex flex-col gap-2 py-2">
            <textarea
              className="bg-token-background-primary min-h-48 resize-y rounded border border-token-border p-2 font-mono text-xs text-token-foreground outline-none"
              spellCheck={false}
              value={hill5}
              onChange={(event) => {
                isle5(event.target.value);
              }}
            />
            <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2 text-xs whitespace-pre-wrap text-token-foreground">
              {juniper5}
            </div>
          </div>,
        ],
      }}
    />
  );
}

function Garnet() {
  let trail5 = CodexPluginActionResult(DeferredUiB22);
  return (
    <Copper
      {...{
        storageKey: wave,
        title: "App Server",
        variant: "global",
        unmountChildrenWhenClosed: true,
        children: (
          <Nickel
            {...{
              hostIds: trail5,
            }}
          />
        ),
      }}
    />
  );
}

function Hazel(urn5) {
  let { hostIds } = urn5,
    vine5 = CodexPluginActionResult(AppInitialBt),
    wind5 = CodexPluginActionResult(DeferredUiI23),
    [yarrow5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("host_config"),
    [azure5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_ssh_connections"),
    [birch5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_control_connections"),
    canyon5;
  {
    let dew5;
    dew5 = (alpha6) => (
      <Onyx
        key={alpha6}
        {...{
          hostId: alpha6,
          hostDetails: Lunar({
            defaultHostConfig: yarrow5,
            hostId: alpha6,
            remoteControlConnections: birch5,
            remoteSshConnections: azure5,
          }),
          notifications: vine5.filter((item) => item.hostId === alpha6),
          requests: wind5.filter((item) => item.hostId === alpha6),
        }}
      />
    );
    canyon5 = hostIds.map(dew5);
  }
  return <div className="flex flex-col gap-3 py-3">{canyon5}</div>;
}
