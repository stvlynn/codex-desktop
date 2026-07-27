// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// `windows.tabs.open` action (bundle `uHi` schema cluster + `mHi`/`pHi` /
// `f1o` / `dHi`; exports `RH` / `zH`).
//
// Heavy panel openers (`pxo` / `K$o` / `Vzi` / review tab activators) stay
// host-bound; this module restores the real orchestration body.

import { ensureAppActionPayloadSchemasInit } from "../actions/app-action-payload-schemas";
import {
  conversationHostIdAtom,
  ensureConversationHostIdAtomInit,
} from "../conversation/conversation-host-id-atom";
import {
  threadIdFromRouteValue,
  type AppRouteValue,
} from "../conversation/client-thread-id-from-route";
import { setReviewDiffFilter } from "../review/set-review-diff-filter";
import { setReviewScrollTarget } from "../review/set-review-scroll-target";
import type { AppActionScope } from "./app-action-scope";
import {
  createAppActionHandler,
  type AppActionHandler,
  type AppActionHandlerContext,
} from "./create-app-action-handler";
import { listConversationBrowserTabMatches } from "./list-conversation-browser-tab-matches";
import { ThreadSidePanelTab } from "./thread-side-panel-tab";
import type { PanelSide } from "./app-shell-atoms";
import {
  windowsTabsOpenSchema,
  type WindowsTabsOpenPayload,
  type WindowsTabsOpenResult,
  type WindowsTabsOpenTarget,
} from "./windows-tabs-open-schema";

ensureAppActionPayloadSchemasInit();
ensureConversationHostIdAtomInit();

/**
 * Host-bound openers for the giant panel graph (`pxo` / `K$o` / `Vzi` / …).
 * Registry orchestration (`f1o`) is real; producers stay injectable.
 */
export type WindowsTabsOpenOps = {
  /** `pxo` — open a workspace file / artifact tab. */
  openFile?: (
    scope: AppActionScope,
    path: string,
    options: { hostId: string | null; line?: number; target: PanelSide },
  ) => Record<string, unknown>;
  /** `K$o` — open or focus a browser tab; returns browserTabId. */
  openBrowser?: (
    scope: AppActionScope,
    options: {
      browserTabId?: string;
      hostId: string | null;
      initialUrl?: string;
      target: PanelSide;
    },
  ) => string | null;
  /** `Uzi` — whether a terminal tab can open for the current thread. */
  isTerminalAvailable?: (scope: AppActionScope) => boolean;
  /** `mBi` — preferred terminal panel side. */
  preferredTerminalSide?: (scope: AppActionScope) => PanelSide;
  /** `Vzi` — open or focus a terminal session; returns session id. */
  openTerminal?: (
    scope: AppActionScope,
    sessionId: string | undefined,
    side: PanelSide,
  ) => string | null;
  /** `ZI` — which panel currently hosts `tabId`. */
  findTabPlacement?: (scope: AppActionScope, tabId: string) => PanelSide | null;
  /** List of terminal session tab ids across panels (pre-open snapshot). */
  listTerminalTabIds?: (scope: AppActionScope) => string[];
  /** `DIi` — pin review base branch for branch view. */
  setReviewBaseBranch?: (
    scope: AppActionScope,
    threadKey: string,
    baseBranch: string,
  ) => void;
  /** Thread key for review atoms (`mT(i.value)`). */
  reviewThreadKey?: (route: AppRouteValue) => string | null;
  /** `J$o` — open review/diff tab (returns false on failure). */
  openReviewTab?: (
    scope: AppActionScope,
    activate: boolean,
    side: PanelSide,
  ) => boolean;
  /** `eL` — activate an existing review/diff tab on `side`. */
  activateReviewTab?: (scope: AppActionScope, side: PanelSide) => boolean;
};

let ops: WindowsTabsOpenOps = {};

/** Inject host panel openers before dispatching `windows.tabs.open`. */
export function bindWindowsTabsOpenOps(next: WindowsTabsOpenOps): void {
  ops = { ...ops, ...next };
}

type TabsOpenContext = AppActionHandlerContext & {
  sourceThreadId?: string | null;
  sourceHostId?: string | null;
};

function visibleThreadId(scope: AppActionScope): string | null {
  return threadIdFromRouteValue(scope.value);
}

function resolveHostId(
  scope: AppActionScope,
  context: TabsOpenContext,
  threadId: string,
): string | null {
  if (context.sourceThreadId === threadId && context.sourceHostId != null) {
    return context.sourceHostId;
  }
  const fromAtom = scope.get(conversationHostIdAtom, threadId) as
    | string
    | null
    | undefined;
  return fromAtom ?? null;
}

/**
 * Bundle `f1o` — open a file / browser / terminal / review tab in the visible
 * thread's Codex panel.
 */
export function openWindowsTab(payload: Pick<WindowsTabsOpenPayload, "placement" | "target" | "threadId">, context: TabsOpenContext): WindowsTabsOpenResult {
  const scope = context.scope as AppActionScope | undefined;
  if (scope == null) throw new Error("windows.tabs.open requires an app view");

  const visible = visibleThreadId(scope);
  const threadId = payload.threadId ?? context.sourceThreadId ?? visible;
  if (threadId == null || visible == null) {
    throw new Error("windows.tabs.open requires a visible thread");
  }
  if (threadId !== visible) {
    throw new Error(
      `Thread ${threadId} is not visible in the targeted main window (showing ${visible})`,
    );
  }

  const hostId = resolveHostId(scope, context, threadId);
  const { target, placement } = payload;

  switch (target.type) {
    case "file": {
      if (ops.openFile == null) {
        throw new Error("windows.tabs.open file opener is not bound");
      }
      const side = placement ?? "right";
      const opened = ops.openFile(scope, target.path, {
        hostId,
        line: target.line,
        target: side,
      });
      return { threadId, type: target.type, ...opened };
    }
    case "browser": {
      if (ops.openBrowser == null) {
        throw new Error("windows.tabs.open browser opener is not bound");
      }
      const side = placement ?? "right";
      const existing = listConversationBrowserTabMatches(scope, threadId);
      const browserTabId = ops.openBrowser(scope, {
        browserTabId: target.tabId,
        hostId,
        initialUrl: target.url,
        target: side,
      });
      if (browserTabId == null) {
        throw new Error("Browser tab could not be opened");
      }
      const match =
        existing.find((row) => row.browserTabId === browserTabId) ??
        listConversationBrowserTabMatches(scope, threadId).find(
          (row) => row.browserTabId === browserTabId,
        );
      return {
        threadId,
        type: target.type,
        placement: match?.target ?? side,
        status: existing.some((row) => row.browserTabId === browserTabId)
          ? "existing"
          : "opened",
        tabId: browserTabId,
      };
    }
    case "terminal": {
      if (ops.isTerminalAvailable?.(scope) === false) {
        throw new Error("Terminal tab is unavailable for this thread");
      }
      if (ops.openTerminal == null) {
        throw new Error("windows.tabs.open terminal opener is not bound");
      }
      const side = placement ?? ops.preferredTerminalSide?.(scope) ?? "bottom";
      const before = new Set(ops.listTerminalTabIds?.(scope) ?? []);
      const sessionId = ops.openTerminal(scope, target.sessionId, side);
      if (sessionId == null) {
        throw new Error("Terminal tab could not be opened");
      }
      const tabId = `terminal:${sessionId}`;
      return {
        threadId,
        type: target.type,
        placement: ops.findTabPlacement?.(scope, tabId) ?? side,
        status: before.has(tabId) ? "existing" : "opened",
        tabId,
      };
    }
    case "review": {
      const side = placement ?? "right";
      const existingSide = ops.findTabPlacement?.(
        scope,
        ThreadSidePanelTab.DIFF,
      );
      if ("baseBranch" in target && target.baseBranch != null) {
        const key =
          ops.reviewThreadKey?.(scope.value) ??
          threadIdFromRouteValue(scope.value);
        if (key != null) {
          ops.setReviewBaseBranch?.(scope, key, target.baseBranch);
        }
        setReviewDiffFilter(scope, "branch");
      } else if (target.view === "last-turn") {
        setReviewDiffFilter(scope, "last-turn");
      } else if (target.view != null) {
        setReviewDiffFilter(scope, target.view);
      }
      const opened =
        existingSide == null
          ? (ops.openReviewTab?.(scope, true, side) ?? false)
          : (ops.activateReviewTab?.(scope, existingSide) ?? false);
      if (!opened) throw new Error("Review tab could not be opened");
      if (target.path != null) setReviewScrollTarget(scope, target.path);
      return {
        threadId,
        type: target.type,
        placement: existingSide ?? side,
        status: existingSide == null ? "opened" : "existing",
        tabId: ThreadSidePanelTab.DIFF,
      };
    }
  }
}

/**
 * Bundle `dHi` — install the live `windows.tabs.open` runner (`fHi`).
 * With module-level `openWindowsTab`, this is a no-op bind hook for hosts
 * that still call the original setter.
 */
let boundRunner:
  | ((
      payload: Pick<
        WindowsTabsOpenPayload,
        "placement" | "target" | "threadId"
      >,
      context: TabsOpenContext,
    ) => WindowsTabsOpenResult)
  | null = openWindowsTab;

export function bindWindowsTabsOpenRunner(runner: typeof openWindowsTab | null): void {
  boundRunner = runner;
}

/**
 * Bundle `pHi` / export `zH` — typed action handler for the registry list.
 */
export const windowsTabsOpenHandler: AppActionHandler = createAppActionHandler({
  schema: windowsTabsOpenSchema,
  run: (payload, context) => {
    if (boundRunner == null) {
      throw new Error("windows.tabs.open is unavailable in this app view");
    }
    return boundRunner(payload, context as TabsOpenContext);
  },
});

/**
 * Bundle `mHi` / export `RH` — ESM init that built schema + bindable runner.
 * Schemas/handler are module-level; ops remain host-bound.
 */
export function ensureWindowsTabsOpenInit(): void {
  boundRunner ??= openWindowsTab;
}
