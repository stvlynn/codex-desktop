// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$9o` / export `Ew` (+ companions `ees` / `tes` / `nes`).

type SkillLike = {
  path?: string | null;
  name: string;
};

type InstalledSkillRow = { skill: SkillLike };

function comparableSkillKey(name: string | null | undefined): string {
  return (name ?? "")
    .trim()
    .toLowerCase()
    .split(":")
    .map((part) => part.replace(/[\s_-]+/g, ""))
    .join(":");
}

function indexInstalledSkills(installedSkills: readonly InstalledSkillRow[]): {
  byComparableKey: Map<string, SkillLike[]>;
  byName: Map<string, SkillLike>;
  byPath: Map<string, SkillLike>;
} {
  const byComparableKey = new Map<string, SkillLike[]>();
  const byName = new Map<string, SkillLike>();
  const byPath = new Map<string, SkillLike>();
  for (const { skill } of installedSkills) {
    if (skill.path) byPath.set(skill.path, skill);
    byName.set(skill.name, skill);
    const key = comparableSkillKey(skill.name);
    const group = byComparableKey.get(key);
    if (group == null) byComparableKey.set(key, [skill]);
    else group.push(skill);
  }
  return { byComparableKey, byName, byPath };
}

function matchInstalledSkill(
  pluginName: string,
  pluginSkill: SkillLike,
  index: ReturnType<typeof indexInstalledSkills>,
): SkillLike | null {
  if (pluginSkill.path) {
    const byPath = index.byPath.get(pluginSkill.path);
    if (byPath != null) return byPath;
  }
  const marketplace = pluginName.trim();
  let name = pluginSkill.name;
  if (!pluginSkill.path && !name.includes(":")) {
    if (!marketplace) return null;
    name = `${marketplace}:${name}`;
  }
  const byName = index.byName.get(name);
  if (byName != null) return byName;
  const group = index.byComparableKey.get(comparableSkillKey(name));
  return group?.length === 1 ? group[0] : null;
}

/** Partition plugin skills into installed matches vs unavailable. */
export function partitionPluginSkills(args: {
  installedSkills: readonly InstalledSkillRow[];
  pluginName: string;
  pluginSkills: readonly SkillLike[];
}): {
  installedSkills: Array<{ installedSkill: SkillLike; pluginSkill: SkillLike }>;
  unavailableSkills: SkillLike[];
} {
  const { installedSkills, pluginName, pluginSkills } = args;
  const index = indexInstalledSkills(installedSkills);
  const matched: Array<{ installedSkill: SkillLike; pluginSkill: SkillLike }> =
    [];
  const unavailable: SkillLike[] = [];
  for (const pluginSkill of pluginSkills) {
    const installed = matchInstalledSkill(pluginName, pluginSkill, index);
    if (installed != null) {
      matched.push({ installedSkill: installed, pluginSkill });
      continue;
    }
    unavailable.push(pluginSkill);
  }
  return { installedSkills: matched, unavailableSkills: unavailable };
}
