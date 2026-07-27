// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BTr` / export `f1`; companion `KTr` alias groups.

const EQUIVALENT_SHORTCUT_GROUPS: ReadonlyArray<ReadonlyArray<string>> = [
  ["closeTab", "closeWindow"],
  ["nextTab", "nextThread"],
  ["nextTab", "nextRecentThread"],
  ["previousTab", "previousThread"],
  ["previousTab", "previousRecentThread"],
];

/** True when command ids are equal or in the same equivalence group. */
export function areEquivalentShortcutCommands(left: string, right: string): boolean {
  return (
    left === right ||
    EQUIVALENT_SHORTCUT_GROUPS.some(
      (group) => group.includes(left) && group.includes(right),
    )
  );
}
