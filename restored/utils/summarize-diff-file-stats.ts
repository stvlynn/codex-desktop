// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$cl` / export `Bc`.

export type DiffFileStatLine = {
  additions: number;
  deletions: number;
};

/** Aggregate per-file diff stats. */
export function summarizeDiffFileStats(files: DiffFileStatLine[]): {
  fileCount: number;
  linesAdded: number;
  linesDeleted: number;
  hasChanges: boolean;
} {
  let linesAdded = 0;
  let linesDeleted = 0;
  for (const file of files) {
    linesAdded += file.additions;
    linesDeleted += file.deletions;
  }
  return {
    fileCount: files.length,
    linesAdded,
    linesDeleted,
    hasChanges: linesAdded > 0 || linesDeleted > 0,
  };
}
