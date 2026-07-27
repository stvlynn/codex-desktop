// Restored from ref/webview/assets/thread-browser-panel-tabs-DRsmCQj8.js
// Conversation browser-tab id helpers for transfer / last-focused lookup.
// Stage 3: NU init dropped; wU/TU extracted via panel matches + snapshot API.

import type { AppActionScope } from "./app-action-scope";
import { listConversationBrowserTabMatches } from "./list-conversation-browser-tab-matches";
import { browserTabSnapshotApi } from "./browser-tab-snapshot-api";
import {
  bottomPanelController,
  rightPanelController,
  type PanelControllerAtoms,
  type PanelSide,
} from "./app-shell-atoms";

/** Extra browser-tab ids sourced outside panel controllers (bundle `CBr` / `CZ`). */
type ExtraBrowserTabIds = (conversationId: string) => string[];

let extraBrowserTabIds: ExtraBrowserTabIds = () => [];

/** Host may bind Popcorn / docs tab id source (bundle `Nj` map). */
export function bindExtraConversationBrowserTabIds(
  next: ExtraBrowserTabIds,
): void {
  extraBrowserTabIds = next;
}

/**
 * Bundle export `getConversationBrowserTabIdsForTransfer` (`wU` / `QLi`).
 */
export function getConversationBrowserTabIdsForTransfer(
  scope: AppActionScope,
  conversationId: string,
): string[] {
  const ids: string[] = [];
  const seen = new Set<string>();

  for (const { browserTabId } of listConversationBrowserTabMatches(
    scope,
    conversationId,
  )) {
    if (!seen.has(browserTabId)) {
      seen.add(browserTabId);
      ids.push(browserTabId);
    }
  }

  for (const id of extraBrowserTabIds(conversationId)) {
    if (!seen.has(id)) {
      seen.add(id);
      ids.push(id);
    }
  }

  const snapshotIds =
    browserTabSnapshotApi.getConversationBrowserTabIds?.(conversationId) ??
    [
      browserTabSnapshotApi.getBrowserUseSummaryBrowserTabId?.(conversationId),
    ].filter((id): id is string => id != null);

  for (const id of snapshotIds) {
    if (seen.has(id)) continue;
    const isBrowserUse =
      browserTabSnapshotApi.isBrowserUseTab?.(conversationId, id) ??
      browserTabSnapshotApi.isBrowserUseActive(conversationId, id);
    if (!isBrowserUse) continue;
    seen.add(id);
    ids.push(id);
  }

  return ids;
}

const PANEL_SIDES: Array<{
  side: PanelSide;
  controller: PanelControllerAtoms;
}> = [
  { side: "right", controller: rightPanelController },
  { side: "bottom", controller: bottomPanelController },
];

/**
 * Bundle export `getLastFocusedBrowserTabId` (`TU` / `aL`).
 * Prefers last-focused atom when still in the transfer set; else active panel
 * tabs; else last transfer id.
 */
export function getLastFocusedBrowserTabId(
  scope: AppActionScope,
  conversationId: string,
): string | null {
  const transferIds = getConversationBrowserTabIdsForTransfer(
    scope,
    conversationId,
  );

  // aRi last-focused atom — host may stash via scope.get(atom, conversationId)
  const lastFocused = scope.get(
    /* lastFocusedBrowserTabAtom */ "lastFocusedBrowserTab",
    conversationId,
  );
  if (typeof lastFocused === "string" && transferIds.includes(lastFocused)) {
    return lastFocused;
  }

  for (const { controller } of PANEL_SIDES) {
    const active = scope.get(controller.activeTab$, conversationId);
    if (typeof active === "string" && active.length > 0) {
      return active;
    }
    if (
      active &&
      typeof active === "object" &&
      "id" in active &&
      typeof (active as { id: unknown }).id === "string"
    ) {
      return (active as { id: string }).id;
    }
  }

  return transferIds.at(-1) ?? null;
}

/** Bundle `NU` ESM init retained as no-op. */
export function ensureThreadBrowserPanelTabsInit(): void {}
