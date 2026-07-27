// Restored from ref/webview/assets/use-debug-panel-G2DtvEwQ.js
// Debug panel turn-file collectors + in-memory panel line registry.
// Stage 3: J8→collectDebugPanelTurnFiles; J7/Y8 inits; R_t→useAppScopeValue;
// ivt→createScopedSignal; Fft→appScopeAtom; q7/Jht plan helpers.

import { isValidElement, type ReactNode } from "react";
import {
  appScopeAtom,
  createScopedSignal,
} from "../boundaries/app-scope-runtime";
import { useAppScopeValue } from "../boundaries/composer-appscope-atoms";
import { CodexBuildEnvironment } from "../env/codex-build-environment";
import { getBuildFlavor } from "../desktop/get-build-flavor";
import {
  collectDebugPanelTurnFiles,
  ensureDebugPanelParsersInit,
  ensureDebugPanelTurnFilesInit,
  type DebugPanelTurnLike,
} from "./debug-panel-turn-files";

ensureDebugPanelTurnFilesInit();

export type DebugPanelEntry = {
  id: string;
  titleText: string;
  lines: unknown;
};

type ScopeLike = {
  set: (
    atom: unknown,
    updater: (prev: DebugPanelEntry[]) => DebugPanelEntry[],
  ) => void;
};

/** In-memory debug panel entries (bundle `T` via `ivt(Fft, [])`). */
export const debugPanelEntriesAtom = createScopedSignal<DebugPanelEntry[]>(
  appScopeAtom,
  [],
);

let debugPanelIdCounter = 0;

function collectPaths(
  turns: DebugPanelTurnLike[],
  key: "editedFilePaths" | "referencedFilePaths",
): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const turn of turns) {
    for (const path of collectDebugPanelTurnFiles(turn)[key] ?? []) {
      if (seen.has(path)) continue;
      seen.add(path);
      out.push(path);
    }
  }
  return out;
}

/** Bundle export `s` — unique edited file paths across turns. */
export function useDebugPanelEditedFilePaths(
  turns: DebugPanelTurnLike[],
): string[] {
  return collectPaths(turns, "editedFilePaths");
}

/** Bundle export `c` — unique referenced file paths across turns. */
export function useDebugPanelReferencedFilePaths(
  turns: DebugPanelTurnLike[],
): string[] {
  return collectPaths(turns, "referencedFilePaths");
}

/** Bundle export `l` — Rolldown ESM init for parser cluster. */
export function ensureUseDebugPanelParsersInit(): void {
  ensureDebugPanelParsersInit();
}

/** Bundle export `o` — current debug panel entries from AppScope. */
export function useDebugPanelEntries(): DebugPanelEntry[] {
  return useAppScopeValue(debugPanelEntriesAtom) as DebugPanelEntry[];
}

/** Bundle export `a` — whether the debug menu is allowed for this build. */
export function isDebugPanelAllowedForBuild(): boolean {
  return CodexBuildEnvironment.isInternal(getBuildFlavor());
}

function toEntry(
  id: string,
  input: { title: ReactNode; lines: unknown },
): DebugPanelEntry {
  let titleText = "[non-serializable title]";
  if (typeof input.title === "string") titleText = input.title;
  else if (isValidElement(input.title)) titleText = "";
  return { id, titleText, lines: input.lines };
}

/** Bundle export `i` — upsert a debug panel entry by id. */
export function upsertDebugPanelEntry(
  scope: ScopeLike,
  id: string,
  input: { title: ReactNode; lines: unknown },
): void {
  const entry = toEntry(id, input);
  scope.set(debugPanelEntriesAtom, (prev) => [
    ...prev.filter((item) => item.id !== id),
    entry,
  ]);
}

/** Bundle export `r` — remove a debug panel entry by id. */
export function removeDebugPanelEntry(scope: ScopeLike, id: string): void {
  scope.set(debugPanelEntriesAtom, (prev) =>
    prev.filter((item) => item.id !== id),
  );
}

/** Bundle export `t` — allocate a debug panel entry id. */
export function nextDebugPanelEntryId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  const id = debugPanelIdCounter;
  debugPanelIdCounter += 1;
  return `debug-panel-${id}`;
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureUseDebugPanelInit(): void {}
