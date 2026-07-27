// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bWo` / export `OD`.

/** Compare current git branch vs thread-stored branch metadata. */
export function threadGitBranchMismatch(input: {
  currentBranch?: string | null;
  storedThreadBranch?: string | null;
}): {
  currentBranchName: string;
  hasThreadBranchMismatch: boolean;
  storedThreadBranchName: string;
} {
  const currentBranchName = input.currentBranch?.trim() ?? "";
  const storedThreadBranchName = input.storedThreadBranch?.trim() ?? "";
  return {
    currentBranchName,
    storedThreadBranchName,
    hasThreadBranchMismatch:
      currentBranchName.length > 0 &&
      storedThreadBranchName.length > 0 &&
      currentBranchName !== storedThreadBranchName,
  };
}
