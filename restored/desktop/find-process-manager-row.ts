// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nyu` / export `Y`.

import {
  areProcessManagerEntriesEqual,
  type ProcessManagerEntryLike,
} from "./are-process-manager-entries-equal";

type ProcessManagerRow = {
  process: ProcessManagerEntryLike;
  [key: string]: unknown;
};

/** Find a process-manager row by id, else by process field equality. */
export function findProcessManagerRow<T extends ProcessManagerRow>(
  entry: { process: ProcessManagerEntryLike },
  rows: Map<unknown, T>,
): T | undefined {
  const byId = rows.get(entry.process.id);
  if (byId != null) return byId;
  for (const row of rows.values()) {
    if (areProcessManagerEntriesEqual(entry.process, row.process)) return row;
  }
  return undefined;
}
