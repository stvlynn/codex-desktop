// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iRi` / export `kU`.

import { PLACEMENT_RIGHT_BOTTOM } from "../ui/placement-right-bottom";
import { browserTabIdFromPanelTab } from "./browser-tab-id-from-panel-tab";

export type PanelPlacementTabs = Partial<
  Record<
    (typeof PLACEMENT_RIGHT_BOTTOM)[number],
    { tabId?: string; kind?: string } | null
  >
>;

/** Collect browser-tab ids for open right/bottom panel tabs. */
export function browserTabIdsFromPanelPlacements(conversationId: string | null | undefined, tabsByPlacement: PanelPlacementTabs, enabled: Partial<Record<(typeof PLACEMENT_RIGHT_BOTTOM)[number], boolean>>,
): string[] {
  const out: string[] = [];
  for (const placement of PLACEMENT_RIGHT_BOTTOM) {
    if (!enabled[placement]) continue;
    const id = browserTabIdFromPanelTab(
      tabsByPlacement[placement] ?? null,
      conversationId,
    );
    if (id != null) out.push(id);
  }
  return out;
}
