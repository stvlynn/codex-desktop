// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Source-section grouping + URL selection helpers ($u/ad/od/nd/El).

import { HOOK_SOURCE_KINDS, type HookSourceKind } from "./hooks-constants";
import type {
  HookEntry,
  HookLoadIssue,
  HookProjectBucket,
  HookSourceSection,
  HookSourceSelection,
} from "./hooks-types";

/** Normalize raw hook source strings into settings source kinds (bundle `uqc`). */
export function normalizeHookSourceKind(source: string | null | undefined): HookSourceKind | undefined {
  switch (source) {
    case "plugin":
      return "plugin";
    case "user":
      return "user";
    case "system":
    case "mdm":
    case "cloudRequirements":
    case "cloudManagedConfig":
    case "legacyManagedConfigFile":
    case "legacyManagedConfigMdm":
      return "admin";
    case "project":
      return "project";
    case "sessionFlags":
      return "sessionFlags";
    case "unknown":
      return "unknown";
    default:
      return undefined;
  }
}

/** Bundle `xqc` — parse a URL/search source string into a known kind. */
export function parseHookSourceParam(source: string | null | undefined): HookSourceKind | null {
  switch (source) {
    case "plugin":
    case "user":
    case "admin":
    case "project":
    case "sessionFlags":
    case "unknown":
      return source;
    case null:
    case undefined:
      return null;
    default:
      return null;
  }
}

function dedupeHooksByKey(hooks: HookEntry[]): HookEntry[] {
  const map = new Map<string, HookEntry>();
  for (const hook of hooks) {
    if (!map.has(hook.key)) map.set(hook.key, hook);
  }
  return Array.from(map.values());
}

function dedupeErrors(errors: HookLoadIssue[]): HookLoadIssue[] {
  const map = new Map<string, HookLoadIssue>();
  for (const error of errors) {
    map.set(`${error.path ?? ""}:${error.message ?? ""}`, error);
  }
  return Array.from(map.values());
}

function buildBucket(
  projects: HookProjectBucket[],
  hooks: HookEntry[],
  extra: HookProjectBucket[] = [],
): HookProjectBucket {
  const uniqueHooks = dedupeHooksByKey(hooks);
  const keys = new Set(uniqueHooks.map((hook) => hook.key));
  const related = [
    ...projects.filter((project) =>
      project.hooks.some((hook) => keys.has(hook.key)),
    ),
    ...extra,
  ];
  return {
    cwd: "",
    hooks: uniqueHooks,
    warnings: Array.from(
      new Set(related.flatMap((project) => project.warnings)),
    ),
    errors: dedupeErrors(related.flatMap((project) => project.errors)),
  };
}

function isWarningOnlyBucket(entry: HookProjectBucket): boolean {
  return (
    entry.hooks.length === 0 &&
    (entry.warnings.length > 0 || entry.errors.length > 0)
  );
}

function projectBucketFromRoot(
  entry: HookProjectBucket,
): HookProjectBucket | null {
  const hooks = entry.hooks.filter(
    (hook) => normalizeHookSourceKind(hook.source) === "project",
  );
  return hooks.length === 0 ? null : { ...entry, hooks };
}

function bucketForSource(
  entries: HookProjectBucket[],
  source: HookSourceKind,
): HookProjectBucket | null {
  const hooks = entries.flatMap((entry) =>
    entry.hooks.filter(
      (hook) => normalizeHookSourceKind(hook.source) === source,
    ),
  );
  const extras =
    source === "unknown" ? entries.filter(isWarningOnlyBucket) : [];
  if (hooks.length === 0 && extras.length === 0) return null;
  return buildBucket(entries, hooks, extras);
}

function pluginEntriesFromRoots(
  entries: HookProjectBucket[],
): Array<{ pluginId: string | null; entry: HookProjectBucket }> {
  const byPlugin = new Map<string | null, HookEntry[]>();
  for (const entry of entries) {
    for (const hook of entry.hooks) {
      if (normalizeHookSourceKind(hook.source) !== "plugin") continue;
      const pluginId = (hook.pluginId ?? null) as string | null;
      const list = byPlugin.get(pluginId);
      if (list == null) byPlugin.set(pluginId, [hook]);
      else list.push(hook);
    }
  }
  return Array.from(byPlugin.entries())
    .sort(([a], [b]) => (a == null ? 1 : b == null ? -1 : a.localeCompare(b)))
    .map(([pluginId, hooks]) => ({
      pluginId,
      entry: buildBucket(entries, hooks),
    }));
}

function sectionForSource(
  entries: HookProjectBucket[],
  source: HookSourceKind,
): HookSourceSection | null {
  switch (source) {
    case "project": {
      const projectEntries = entries
        .map(projectBucketFromRoot)
        .filter((entry): entry is HookProjectBucket => entry != null);
      return projectEntries.length === 0
        ? null
        : { id: "project", projectEntries };
    }
    case "plugin": {
      const entry = bucketForSource(entries, source);
      const pluginEntries = pluginEntriesFromRoots(entries);
      return entry == null || pluginEntries.length === 0
        ? null
        : { id: "plugin", entry, pluginEntries };
    }
    case "user":
    case "admin":
    case "sessionFlags":
    case "unknown": {
      const entry = bucketForSource(entries, source);
      return entry == null ? null : { id: source, entry };
    }
  }
}

/**
 * Bundle `aqc` / export `$u` — group project hook roots into source sections.
 */
export function groupHooksBySource(
  entries: HookProjectBucket[],
): HookSourceSection[] {
  const sections: HookSourceSection[] = [];
  for (const source of HOOK_SOURCE_KINDS) {
    const section = sectionForSource(entries, source);
    if (section != null) sections.push(section);
  }
  return sections;
}

/**
 * Bundle `oqc` / export `ad` — resolve selected source section from URL params.
 */
export function resolveHookSourceSelection({
  pluginId,
  source,
  projectRoot,
  projectRoots,
}: {
  pluginId?: string | null;
  source?: string | null;
  projectRoot?: string | null;
  projectRoots?: string[] | null;
}): HookSourceSelection | null {
  const kind = parseHookSourceParam(source ?? null);
  if (
    (kind === "project" || (kind == null && source == null)) &&
    projectRoot != null &&
    projectRoots?.includes(projectRoot) === true
  ) {
    return { source: "project", projectRoot };
  }
  if (kind == null || kind === "project") return null;
  if (kind === "plugin") {
    if (pluginId == null) return { source: "plugin" };
    if (pluginId === "__unknown__") return { source: "plugin", pluginId: null };
    return { source: "plugin", pluginId };
  }
  return { source: kind };
}

/**
 * Bundle `sqc` / export `od` — find the bucket for a selected source section.
 */
export function findHookSourceEntry(
  sections: HookSourceSection[],
  selection: HookSourceSelection | null | undefined,
): HookProjectBucket | null {
  if (selection == null) return null;
  const section = sections.find((item) => item.id === selection.source);
  if (section == null) return null;
  if (selection.source === "project") {
    if (section.id !== "project") return null;
    return (
      section.projectEntries.find(
        (entry) => entry.cwd === selection.projectRoot,
      ) ?? null
    );
  }
  if (selection.source === "plugin") {
    if (section.id !== "plugin") return null;
    if (selection.pluginId === undefined) return section.entry;
    return (
      section.pluginEntries.find(
        (entry) => entry.pluginId === selection.pluginId,
      )?.entry ?? null
    );
  }
  return section.id === selection.source ? section.entry : null;
}

/**
 * Bundle `rqc` / export `nd` — merge preferred roots ahead of discovered roots.
 */
export function mergeProjectRoots(
  discovered: string[],
  preferred: string[],
  selected?: string | null,
): string[] {
  const preferredSet = new Set(preferred);
  const merged = [
    ...preferred,
    ...Array.from(new Set(discovered))
      .filter((root) => !preferredSet.has(root))
      .sort((a, b) => a.localeCompare(b)),
  ];
  if (selected != null && !merged.includes(selected)) merged.push(selected);
  return merged;
}

/**
 * Bundle `U6c` / export `El` — write host/source selection into search params.
 */
export function applyHooksSettingsSourceParams(params: URLSearchParams, hostId: string, selection: HookSourceSelection | null | undefined): void {
  params.delete("hostId");
  params.delete("pluginId");
  params.delete("projectRoot");
  params.delete("source");
  if (selection == null) return;
  params.set("hostId", hostId);
  params.set("source", selection.source);
  if (selection.source === "project") {
    params.set("projectRoot", selection.projectRoot);
    return;
  }
  if (selection.source === "plugin" && selection.pluginId !== undefined) {
    params.set("pluginId", selection.pluginId ?? "__unknown__");
  }
}
