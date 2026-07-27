// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Zod schemas + payload types for `windows.tabs.open`.

import { appActionWindowIdSchema } from "../actions/app-action-payload-schemas";
import {
  ensureZodRuntime,
  zodEnum,
  zodLiteral,
  zodNumber,
  zodObject,
  zodString,
  zodUnion,
} from "../vendor/zod";
import type { PanelSide } from "./app-shell-atoms";

ensureZodRuntime();

/** Bundle `gue` — URL string for browser tab targets. */
const appActionUrlSchema = zodString().url();

/**
 * Bundle `oHi` / `sHi` / `cHi` / `lHi` (`uHi` cluster) — tabs.open payload.
 */
export const windowsTabsOpenTargetSchema = zodUnion([
  zodObject({
    type: zodLiteral("file"),
    path: zodString().min(1),
    line: zodNumber().int().positive().optional(),
  }),
  zodObject({
    type: zodLiteral("browser"),
    url: appActionUrlSchema.optional(),
    tabId: zodString().min(1).optional(),
  }),
  zodObject({
    type: zodLiteral("terminal"),
    sessionId: zodString().min(1).optional(),
  }),
  zodObject({
    type: zodLiteral("review"),
    view: zodEnum(["last-turn", "branch", "unstaged", "staged"]).optional(),
    path: zodString().min(1).optional(),
  }),
  zodObject({
    type: zodLiteral("review"),
    baseBranch: zodString()
      .min(1)
      .describe(
        "Git revision to compare with HEAD. Must resolve locally to a commit. Selects branch view.",
      ),
    view: zodLiteral("branch").optional(),
    path: zodString().min(1).optional(),
  }),
]);

export const windowsTabsOpenSchema = zodObject({
  type: zodLiteral("windows.tabs.open"),
  windowId: appActionWindowIdSchema,
  threadId: zodString()
    .min(1)
    .optional()
    .describe(
      "Visible thread whose Codex panel should receive the tab. Defaults to the calling thread, which must be visible in the targeted main window.",
    ),
  target: windowsTabsOpenTargetSchema,
  placement: zodEnum(["right", "bottom"]).optional(),
});

export type WindowsTabsOpenPayload = ReturnType<
  typeof windowsTabsOpenSchema.parse
>;
export type WindowsTabsOpenTarget = WindowsTabsOpenPayload["target"];

export type WindowsTabsOpenResult = {
  threadId: string;
  type: WindowsTabsOpenTarget["type"];
  placement?: PanelSide;
  status?: "opened" | "existing";
  tabId?: string;
} & Record<string, unknown>;
