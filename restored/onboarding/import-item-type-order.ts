// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `INl` / `PNl` / `NNl` companions for export `Ts`.

export const IMPORT_ITEM_TYPE_ORDER = {
  CONFIG: 0,
  AGENTS_MD: 1,
  SKILLS: 2,
  COMMANDS: 3,
  SUBAGENTS: 4,
  HOOKS: 5,
  PLUGINS: 6,
  MCP_SERVER_CONFIG: 7,
  MEMORY: 8,
  SESSIONS: 9,
} as const;

export type ImportItemType = keyof typeof IMPORT_ITEM_TYPE_ORDER;

export function isKnownImportItemType(value: string): value is ImportItemType {
  return Object.hasOwn(IMPORT_ITEM_TYPE_ORDER, value);
}

export function importItemTypeOrder(value: string): number {
  return (
    IMPORT_ITEM_TYPE_ORDER[value as ImportItemType] ?? Number.POSITIVE_INFINITY
  );
}
