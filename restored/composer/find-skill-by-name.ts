// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Find a skill by exact / unique suffix name (bundle `r1r` / export `EJ`).

export type SkillNameRecord = {
  name: string;
};

export type SkillGroupRecord = {
  skills: SkillNameRecord[];
};

export type SkillsCatalog = {
  data: SkillGroupRecord[];
};

/**
 * Resolve a skill by case-insensitive exact name, else a unique `*:name` suffix
 * match across catalog groups.
 */
export function findSkillByName(
  catalog: SkillsCatalog,
  rawName: string,
): SkillNameRecord | null {
  const needle = rawName.toLowerCase();
  const suffixMatches: SkillNameRecord[] = [];
  for (const group of catalog.data) {
    const exact = group.skills.find(
      (skill) => skill.name.toLowerCase() === needle,
    );
    if (exact != null) return exact;
    suffixMatches.push(
      ...group.skills.filter((skill) =>
        skill.name.toLowerCase().endsWith(`:${needle}`),
      ),
    );
  }
  return suffixMatches.length === 1 ? suffixMatches[0]! : null;
}
