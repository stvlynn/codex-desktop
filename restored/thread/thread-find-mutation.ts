// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EBi`/`MBi`/`NBi` — ignore find-mark-only MutationRecords.

import { CODEX_THREAD_FIND_MATCH_CLASS } from "./thread-find-constants";
import { CODEX_THREAD_FIND_ACTIVE_CLASS } from "./thread-find-constants";

/** Bundle `NBi`. */
export function isThreadFindMarkElement(node: Node): boolean {
  if (!(node instanceof HTMLElement)) return false;
  return (
    node.classList.contains(CODEX_THREAD_FIND_ACTIVE_CLASS) ||
    node.classList.contains(CODEX_THREAD_FIND_MATCH_CLASS)
  );
}

/** Bundle `MBi`. */
export function isFindMarkOnlyMutation(record: MutationRecord): boolean {
  if (record.type === "characterData") {
    const parent = record.target.parentElement;
    return parent == null ? false : isThreadFindMarkElement(parent);
  }
  if (record.type !== "childList") return false;
  if (isThreadFindMarkElement(record.target as Node)) return true;
  const nodes = [...record.addedNodes, ...record.removedNodes];
  let sawMark = false;
  for (const node of nodes) {
    if (node instanceof Text) continue;
    if (isThreadFindMarkElement(node)) {
      sawMark = true;
      continue;
    }
    return false;
  }
  return sawMark;
}

/** Bundle `EBi` / export `iU` — true when any record is content (not find marks). */
export function mutationRecordsAffectContent(
  records: MutationRecord[],
): boolean {
  for (const record of records) {
    if (!isFindMarkOnlyMutation(record)) return true;
  }
  return false;
}
