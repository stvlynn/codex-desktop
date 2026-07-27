// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Uqr` / export `pX`; companion extension map `Kqr`.

const IMPORT_KIND_BY_EXTENSION = new Map<string, string>([
  ["csv", "csv"],
  ["docx", "docx"],
  ["ipynb", "ipynb"],
  ["pdf", "pdf"],
  ["pptx", "pptx"],
  ["tex", "tex"],
  ["tsv", "tsv"],
  ["xlsm", "xlsx"],
  ["xlsx", "xlsx"],
]);

function extensionFromPath(filePath: string): string | null {
  const lower = filePath.toLowerCase();
  const slash = Math.max(lower.lastIndexOf("/"), lower.lastIndexOf("\\"));
  const base = slash >= 0 ? lower.slice(slash + 1) : lower;
  const dot = base.lastIndexOf(".");
  return dot > 0 && dot < base.length - 1 ? base.slice(dot + 1) : null;
}

/** Map a filesystem path to a workbook/import kind, if supported. */
export function importKindFromPath(filePath: string): string | null {
  const ext = extensionFromPath(filePath);
  if (ext == null) return null;
  return IMPORT_KIND_BY_EXTENSION.get(ext) ?? null;
}
