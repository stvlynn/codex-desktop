// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BGc` / export `Dd`.
// Exploration detection (`VGc`/`_Gc`/`DLc`) and pair-skip (`PGc`) left injectable.

import { isTurnItemInProgress } from "./is-turn-item-in-progress";

export type AgentItem = {
  type: string;
  parsedCmd?: { type?: string; isFinished?: boolean };
  [key: string]: unknown;
};

export type RenderableAgentItem =
  | { kind: "exploration"; items: AgentItem[]; status: string }
  | { kind: "item"; item: AgentItem };

type SkipPairFn = (item: AgentItem, next: AgentItem | undefined) => boolean;
type IsExplorationFn = (item: AgentItem) => boolean;

let shouldSkipAgentItemPair: SkipPairFn | null = null;
let isExplorationItem: IsExplorationFn | null = null;

/** Wire exec→patch visualization skip (`PGc`). */
export function setRenderableAgentItemPairSkipper(fn: SkipPairFn): void {
  shouldSkipAgentItemPair = fn;
}

/** Wire exploration-exec detector (`VGc`). Default: finished-ish execs. */
export function setExplorationItemChecker(fn: IsExplorationFn): void {
  isExplorationItem = fn;
}

function defaultIsExploration(item: AgentItem): boolean {
  return item.type === "exec";
}

/** Group agent items into exploration clusters + standalone items. */
export function buildRenderableAgentItems(args: {
  agentItems: AgentItem[];
  isTurnInProgress: boolean;
  isAnyNonAgentItemInProgress: boolean;
}): {
  renderableAgentItems: RenderableAgentItem[];
  isExploring: boolean;
  isAnyNonExploringAgentItemInProgress: boolean;
} {
  const { agentItems, isTurnInProgress, isAnyNonAgentItemInProgress } = args;
  const out: RenderableAgentItem[] = [];
  let exploration: AgentItem[] | null = null;
  let isExploring = false;
  let isAnyNonExploringAgentItemInProgress = false;
  const isExploration = isExplorationItem ?? defaultIsExploration;

  const flush = (status: string) => {
    if (exploration && exploration.length > 0) {
      out.push({ kind: "exploration", items: exploration, status });
    }
    exploration = null;
  };

  for (const [index, item] of agentItems.entries()) {
    if (shouldSkipAgentItemPair?.(item, agentItems[index + 1])) continue;
    if (isExploration(item)) {
      if (exploration) {
        exploration.push(item);
        continue;
      }
      exploration = [item];
      continue;
    }
    if (item.type === "reasoning") {
      exploration?.push(item);
      continue;
    }
    if (exploration) flush("explored");
    out.push({ kind: "item", item });
  }

  if (exploration) {
    const anyInProgress = exploration.some((item) =>
      isTurnItemInProgress(item),
    );
    isExploring =
      isTurnInProgress && (!isAnyNonAgentItemInProgress || anyInProgress);
    flush(isExploring ? "exploring" : "explored");
  } else {
    const last = out[out.length - 1];
    if (last?.kind === "item") {
      isAnyNonExploringAgentItemInProgress = isTurnItemInProgress(last.item);
      if (last.item.type === "reasoning" && last.item.completed === false) {
        isAnyNonExploringAgentItemInProgress = false;
      }
    }
  }

  return {
    renderableAgentItems: out,
    isExploring,
    isAnyNonExploringAgentItemInProgress,
  };
}
