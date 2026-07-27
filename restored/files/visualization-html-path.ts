// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iDt` + `YEt` + `nDt` + `XEt`/`Kot` + `QEt`/`Got`.

/** Match `.codex/visualizations/YYYY/MM/DD/<id>/<slug>.html` paths. */
export const VISUALIZATION_HTML_PATH_RE =
  /(?:^|[\\/])\.codex[\\/]visualizations[\\/]\d{4}[\\/]\d{2}[\\/]\d{2}[\\/]([a-zA-Z0-9_-]+)[\\/][a-z0-9]+(?:-[a-z0-9]+)*\.html$/;

/** True when path is under the visualizations HTML tree. */
export function isVisualizationHtmlPath(pathValue: string): boolean {
  return VISUALIZATION_HTML_PATH_RE.test(pathValue);
}

/** Capture the visualization id segment from a matching path. */
export function visualizationIdFromPath(pathValue: string): string | null {
  return VISUALIZATION_HTML_PATH_RE.exec(pathValue)?.[1] ?? null;
}

type FileChangeLike = {
  path: string;
  kind: { type: string; move_path?: string | null };
};

/** Effective path for a file-change row (move target for updates). */
export function changePathFromKind(change: FileChangeLike): string {
  return change.kind.type === "update"
    ? (change.kind.move_path ?? change.path)
    : change.path;
}

/** Collapse visualization HTML file changes into create/update rows. */
export function summarizeVisualizationFileChanges(
  changes: FileChangeLike[],
): Array<{ path: string; kind: "create" | "update" }> {
  const map = new Map<string, "create" | "update">();
  for (const change of changes) {
    const pathValue = changePathFromKind(change);
    if (!isVisualizationHtmlPath(pathValue)) continue;
    switch (change.kind.type) {
      case "add":
        map.set(pathValue, "create");
        break;
      case "update":
        if (map.get(pathValue) !== "create") map.set(pathValue, "update");
        break;
      case "delete":
        break;
    }
  }
  return [...map].map(([pathValue, kind]) => ({ path: pathValue, kind }));
}
