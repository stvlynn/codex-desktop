// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve artifact / file-tree icon kind from path + mime
// (bundle `GUi`/`KUi`/`WUi` + maps from `ZL` init; `YL`/`bH` looks up icons).

export type ArtifactFileKind =
  | "artifactDocument"
  | "build"
  | "code"
  | "cplusplus"
  | "css"
  | "document"
  | "file"
  | "folder"
  | "hashes"
  | "html"
  | "image"
  | "java"
  | "javascript"
  | "json"
  | "notebook"
  | "pdf"
  | "php"
  | "presentation"
  | "python"
  | "react"
  | "rust"
  | "shell"
  | "skill"
  | "spreadsheet"
  | "terminal"
  | "toml"
  | "typescript"
  | "yaml";

/** Basename of a path (`KUi`). */
export function artifactPathBasename(filePath: string): string {
  const lower = filePath.toLowerCase();
  const slash = Math.max(lower.lastIndexOf("/"), lower.lastIndexOf("\\"));
  return slash >= 0 ? lower.slice(slash + 1) : lower;
}

/** File extension (no leading dot), or null (`WUi`). */
export function artifactPathExtension(filePath: string): string | null {
  const basename = artifactPathBasename(filePath);
  const dot = basename.lastIndexOf(".");
  if (dot > 0 && dot < basename.length - 1) return basename.slice(dot + 1);
  if (dot === 0 && basename.length > 1) return basename.slice(1);
  if (dot === -1) return basename;
  return null;
}

/** Exact basename overrides (`JUi` from `ZL`). */
export const ARTIFACT_BASENAME_KIND: Readonly<
  Record<string, ArtifactFileKind>
> = {
  "skill.md": "skill",
};

/** Extension → kind map (`YUi` from `ZL`). */
export const ARTIFACT_EXTENSION_KIND: Readonly<
  Record<string, ArtifactFileKind>
> = Object.fromEntries(
  (
    [
      { key: "typescript", extensions: ["ts"] },
      { key: "react", extensions: ["tsx", "jsx"] },
      { key: "javascript", extensions: ["js", "mjs", "cjs", "hs"] },
      { key: "python", extensions: ["py"] },
      { key: "java", extensions: ["java"] },
      { key: "rust", extensions: ["rs"] },
      { key: "php", extensions: ["php"] },
      { key: "css", extensions: ["css", "scss", "less", "sass"] },
      {
        key: "cplusplus",
        extensions: ["cpp", "cxx", "cc", "c", "hpp", "hh", "h"],
      },
      {
        key: "code",
        extensions: ["rb", "go", "kt", "swift", "m", "mm", "cs", "sql"],
      },
      { key: "json", extensions: ["json", "jsonc"] },
      {
        key: "document",
        extensions: ["md", "mdx", "markdown", "mkd", "mdown"],
      },
      { key: "html", extensions: ["html", "htm"] },
      { key: "yaml", extensions: ["yaml", "yml"] },
      { key: "toml", extensions: ["toml"] },
      { key: "document", extensions: ["xml"] },
      {
        key: "spreadsheet",
        extensions: ["csv", "tsv", "xls", "xlsm", "xlsx"],
      },
      { key: "artifactDocument", extensions: ["doc", "docx"] },
      { key: "notebook", extensions: ["ipynb"] },
      { key: "presentation", extensions: ["ppt", "pptx"] },
      { key: "shell", extensions: ["sh", "bash", "zsh", "fish", "ps1"] },
      { key: "terminal", extensions: ["dockerfile"] },
      {
        key: "document",
        extensions: ["env", "dotenv", "gitignore", "lock"],
      },
      {
        key: "image",
        extensions: ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "ico"],
      },
      {
        key: "build",
        extensions: [
          "build",
          "bazel",
          "bzl",
          "ninja",
          "gradle",
          "mk",
          "makefile",
        ],
      },
      {
        key: "hashes",
        extensions: ["sha", "sha1", "sha256", "md5", "checksum", "sum"],
      },
      { key: "pdf", extensions: ["pdf"] },
      { key: "folder", extensions: ["zip", "gz", "tgz", "tar"] },
    ] as const
  ).flatMap(({ key, extensions }) =>
    extensions.map((ext) => [ext, key] as const),
  ),
) as Record<string, ArtifactFileKind>;

/** Mime-prefix fallbacks (`XUi` from `ZL`). */
export const ARTIFACT_MIME_KIND_PREFIXES: ReadonlyArray<{
  prefix: string;
  key: ArtifactFileKind;
}> = [
  { prefix: "image/", key: "image" },
  { prefix: "text/", key: "document" },
  { prefix: "application/pdf", key: "pdf" },
  { prefix: "application/zip", key: "folder" },
  { prefix: "application/gzip", key: "folder" },
];

/**
 * Resolve a semantic file kind for artifact icons (`GUi`).
 * Pass `mimeType` when known; otherwise path heuristics only
 * (bundle also consults `mime.lookup` via `qUi`).
 */
export function resolveArtifactFileKind(filePath: string | null | undefined, mimeType?: string | false | null): ArtifactFileKind {
  if (!filePath && !mimeType) return "file";
  if (filePath) {
    if (/[\\/]$/.test(filePath)) return "folder";
    const basename = artifactPathBasename(filePath);
    const byBasename = ARTIFACT_BASENAME_KIND[basename];
    if (byBasename) return byBasename;
    const extension = artifactPathExtension(filePath);
    if (extension) {
      const byExt = ARTIFACT_EXTENSION_KIND[extension];
      if (byExt) return byExt;
    }
  }
  const mime =
    mimeType ??
    // Bundle falls back to mime.lookup(filePath); callers may pass it explicitly.
    false;
  if (typeof mime === "string") {
    const hit = ARTIFACT_MIME_KIND_PREFIXES.find(({ prefix }) =>
      mime.startsWith(prefix),
    );
    if (hit) return hit.key;
  }
  return "file";
}
