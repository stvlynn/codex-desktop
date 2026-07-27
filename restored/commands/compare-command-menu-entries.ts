// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Adu` / export `qt`.

import { SETTINGS_NAV_SECTION_IDS } from "../config/settings-nav-section-ids";
import { COMMAND_MENU_FIXED_ORDER_IDS } from "./command-menu-fixed-order-ids";

type CommandMenuEntryLike = {
  id: string;
  kind?: string;
  commandMenuGroupKey?: string | null;
};

function groupRank(entry: CommandMenuEntryLike): number {
  if (entry.kind !== "webview" || entry.commandMenuGroupKey == null) {
    return SETTINGS_NAV_SECTION_IDS.length;
  }
  const idx = SETTINGS_NAV_SECTION_IDS.indexOf(
    entry.commandMenuGroupKey as (typeof SETTINGS_NAV_SECTION_IDS)[number],
  );
  return idx === -1 ? SETTINGS_NAV_SECTION_IDS.length : idx;
}

function idRank(id: string): number {
  const idx = (COMMAND_MENU_FIXED_ORDER_IDS as readonly string[]).indexOf(id);
  return idx === -1 ? COMMAND_MENU_FIXED_ORDER_IDS.length : idx;
}

/** Sort comparator for command-menu entries (group, fixed ids, locale). */
export function compareCommandMenuEntries(left: CommandMenuEntryLike, right: CommandMenuEntryLike): number {
  const byGroup = groupRank(left) - groupRank(right);
  if (byGroup !== 0) return byGroup;
  const byId = idRank(left.id) - idRank(right.id);
  return byId === 0 ? left.id.localeCompare(right.id) : byId;
}
