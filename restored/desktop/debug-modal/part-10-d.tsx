// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/17
/* split-lane-import-depth:1 */
// AST split 4/7

import { Nickel2, amber2 } from "./part-10-a";

export function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function IsStartingProcessExpired(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Umbra1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function UsePointerSurfaceInteractionGate(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Violet1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Willow1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Xenon1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Umbra2(canyon18, dew18) {
  let alpha19 = (dew18.get(canyon18.pid) ?? []).map((item) =>
    Umbra2(item, dew18),
  );
  return (
    alpha19.sort(Violet2),
    {
      children: alpha19,
      commandLabel: Nickel2(canyon18.command),
      fullCommand:
        canyon18.command.trim().length > 0
          ? canyon18.command.trim()
          : "(command unavailable)",
      process: canyon18,
      totalCpuPercent: Willow2(canyon18.cpuPercent, alpha19),
      totalRssKb: Xenon2(canyon18.rssKb, alpha19),
    }
  );
}

function Violet2(bravo19, copper19) {
  let delta19 = bravo19.totalRssKb ?? -1,
    echo19 = copper19.totalRssKb ?? -1;
  if (delta19 !== echo19) return echo19 - delta19;
  let falcon19 = bravo19.process.rssKb ?? -1,
    gamma19 = copper19.process.rssKb ?? -1;
  if (falcon19 !== gamma19) return gamma19 - falcon19;
  let harbor19 = bravo19.commandLabel.localeCompare(copper19.commandLabel);
  return harbor19 === 0 ? bravo19.process.pid - copper19.process.pid : harbor19;
}

function Willow2(indigo19, jade19) {
  let kite19 = indigo19 ?? 0,
    lemon19 = indigo19 != null;
  for (let marble19 of jade19)
    marble19.totalCpuPercent != null &&
      ((kite19 += marble19.totalCpuPercent), (lemon19 = true));
  return lemon19 ? kite19 : null;
}

function Xenon2(nickel19, onyx19) {
  let pearl19 = nickel19 ?? 0,
    quartz19 = nickel19 != null;
  for (let river19 of onyx19)
    river19.totalRssKb != null &&
      ((pearl19 += river19.totalRssKb), (quartz19 = true));
  return quartz19 ? pearl19 : null;
}

function Yellow2(slate19) {
  return amber2.default.basename(slate19.replaceAll("\\", "/"));
}

function Zinc2(timber19, umbra19, violet19) {
  let { kind } = umbra19.process;
  return umbra19 === timber19
    ? "codex-app"
    : kind === "app_server" ||
        /(?:^|\s)app-server(?:\s|$)/i.test(umbra19.fullCommand)
      ? "app-server"
      : violet19
        ? "rollout-child-processes"
        : kind.startsWith("electron_")
          ? "codex-app"
          : "other-child-processes";
}
