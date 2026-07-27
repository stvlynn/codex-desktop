// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Collapse sandbox network + filesystem grants into UI permission rule rows (`xOt` / `got`).

export type SandboxFileSystemEntry = {
  path: SandboxPathSpec;
  access: "read" | "write" | "deny";
};

export type SandboxPathSpec =
  | { type: "path"; path: string }
  | { type: "glob_pattern"; pattern: string }
  | {
      type: "special";
      value:
        | { kind: "root" }
        | { kind: "minimal" }
        | { kind: "project_roots"; subpath?: string | null }
        | { kind: "tmpdir" }
        | { kind: "slash_tmp" }
        | { kind: "unknown"; path: string; subpath?: string | null };
    };

export type SandboxPolicy = {
  network?: unknown;
  fileSystem?: {
    entries?: SandboxFileSystemEntry[];
  } | null;
};

export type PermissionRule =
  | { kind: "network" }
  | {
      kind: "fileSystem";
      access: "read" | "write" | "readWrite";
      paths: string[];
    };

/** Stringify a sandbox path spec for permission chips (`SOt` / `COt`). */
export function formatSandboxPathSpec(spec: SandboxPathSpec): string {
  switch (spec.type) {
    case "path":
      return spec.path;
    case "glob_pattern":
      return spec.pattern;
    case "special":
      return formatSpecialSandboxPath(spec.value);
  }
}

function formatSpecialSandboxPath(
  value: Extract<SandboxPathSpec, { type: "special" }>["value"],
): string {
  switch (value.kind) {
    case "root":
      return "/";
    case "minimal":
      return ":minimal";
    case "project_roots":
      return value.subpath == null
        ? ":project_roots"
        : `:project_roots/${value.subpath}`;
    case "tmpdir":
      return ":tmpdir";
    case "slash_tmp":
      return "/tmp";
    case "unknown":
      return value.subpath == null
        ? value.path
        : `${value.path}/${value.subpath}`;
  }
}

/**
 * Derive permission-rule chips from a sandbox policy: network grant plus
 * read / write / readWrite filesystem path groups.
 */
export function buildSandboxPermissionRules(policy: SandboxPolicy): PermissionRule[] {
  const rules: PermissionRule[] = [];

  if (policy.network != null) {
    rules.push({ kind: "network" });
  }

  if (policy.fileSystem == null) {
    return rules;
  }

  const readPaths = new Set<string>();
  const writePaths = new Set<string>();

  for (const entry of policy.fileSystem.entries ?? []) {
    const path = formatSandboxPathSpec(entry.path);
    switch (entry.access) {
      case "read":
        readPaths.add(path);
        break;
      case "write":
        writePaths.add(path);
        break;
      case "deny":
        break;
    }
  }

  const readList = Array.from(readPaths);
  const writeList = Array.from(writePaths);
  const readWrite = readList.filter((path) => writePaths.has(path));
  const readOnly = readList.filter((path) => !writePaths.has(path));
  const writeOnly = writeList.filter((path) => !readPaths.has(path));

  if (readWrite.length > 0) {
    rules.push({
      kind: "fileSystem",
      access: "readWrite",
      paths: readWrite,
    });
  }
  if (readOnly.length > 0) {
    rules.push({ kind: "fileSystem", access: "read", paths: readOnly });
  }
  if (writeOnly.length > 0) {
    rules.push({ kind: "fileSystem", access: "write", paths: writeOnly });
  }

  return rules;
}
