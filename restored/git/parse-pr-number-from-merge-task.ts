// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iSt` / export `ost`; companion `Myt`.

const PULL_REQUEST_MERGE_TASK_MARKER = "## Pull request merge task:";

/** Parse PR number after the merge-task marker, else null. */
export function parsePrNumberFromMergeTask(markdown: string): number | null {
  const source = markdown;
  const index = source.indexOf(PULL_REQUEST_MERGE_TASK_MARKER);
  if (index === -1) return null;
  const after = source.slice(index + PULL_REQUEST_MERGE_TASK_MARKER.length);
  const match = after.match(/^Pull request:\s*#(\d+)\s*$/m);
  if (match == null) return null;
  const n = Number(match[1]);
  return Number.isSafeInteger(n) ? n : null;
}
