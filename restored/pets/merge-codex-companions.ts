// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `o5l` / export `Mr`.

import {
  CODEX_COMPANION_CATALOG,
  type CodexCompanion,
} from "./codex-companion-catalog";

export type CustomCodexCompanion = {
  description: string;
  displayName: string;
  id: string;
  spriteVersionNumber?: number | null;
  spritesheetDataUrl?: string;
  directoryPath?: string;
};

export type MergedCodexCompanion = CodexCompanion & {
  spritesheetUrl?: string;
  upgradeDirectoryPath?: string;
};

/** Merge built-in companions with custom sprite entries. */
export function mergeCodexCompanions(
  custom: readonly CustomCodexCompanion[] | null | undefined,
): readonly MergedCodexCompanion[] {
  if (custom == null || custom.length === 0) return CODEX_COMPANION_CATALOG;
  return [
    ...CODEX_COMPANION_CATALOG,
    ...custom.map((entry) => {
      const spriteVersionNumber = entry.spriteVersionNumber ?? 1;
      return {
        assetRef: "codex",
        description: entry.description,
        displayName: entry.displayName,
        id: entry.id,
        spriteVersionNumber,
        spritesheetUrl: entry.spritesheetDataUrl,
        upgradeDirectoryPath:
          spriteVersionNumber < 2 ? entry.directoryPath : undefined,
      };
    }),
  ];
}
