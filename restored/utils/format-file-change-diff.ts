// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kqn` / export `K8`.

export type FileChange =
  | { type: "update"; unified_diff: string; move_path?: string | null }
  | { type: "add"; content: string }
  | { type: "delete"; content: string };

/** Format a file change as a unified diff patch. */
export function formatFileChangeDiff(
  pathValue: string,
  change: FileChange,
): string | null {
  if (change.type === "update") {
    const fromPath = pathValue;
    const toPath = change.move_path ?? pathValue;
    const unified = change.unified_diff.trimStart();
    const hasHeader = /\n?---\s/.test(unified);
    const hasGitHeader = /^diff --git /m.test(unified);
    const body = hasHeader
      ? unified
      : `--- a/${fromPath}\n+++ b/${toPath}\n${unified}`;
    return `${hasGitHeader ? "" : `diff --git a/${fromPath} b/${toPath}\n`}${body}`;
  }
  if (change.type === "add") {
    const lines = change.content.replace(/\r\n/g, "\n").split("\n");
    const trimmed =
      lines.length > 0 && lines[lines.length - 1] === ""
        ? lines.slice(0, -1)
        : lines;
    const count = trimmed.length;
    const hunk =
      count > 0
        ? `@@ -0,0 +1,${count} @@\n${trimmed.map((l) => `+${l}`).join("\n")}\n`
        : "";
    return [
      `diff --git a/${pathValue} b/${pathValue}`,
      "new file mode 100644",
      "--- /dev/null",
      `+++ b/${pathValue}`,
      hunk,
    ]
      .filter(Boolean)
      .join("\n");
  }
  if (change.type === "delete") {
    const lines = change.content.replace(/\r\n/g, "\n").split("\n");
    const trimmed =
      lines.length > 0 && lines[lines.length - 1] === ""
        ? lines.slice(0, -1)
        : lines;
    const count = trimmed.length;
    const hunk =
      count > 0
        ? `@@ -1,${count} +0,0 @@\n${trimmed.map((l) => `-${l}`).join("\n")}\n`
        : "";
    return [
      `diff --git a/${pathValue} b/${pathValue}`,
      "deleted file mode 100644",
      `--- a/${pathValue}`,
      "+++ /dev/null",
      hunk,
    ]
      .filter(Boolean)
      .join("\n");
  }
  return null;
}
