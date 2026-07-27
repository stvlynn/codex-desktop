// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nus` / export `ES`.

type RankProjects = <T>(
  scored: Array<{ project: T; score: number }>,
  iteratee: (row: { score: number }) => number,
) => Array<{ project: T; score: number }>;

type ScoreFn = (haystack: string, needle: string) => number;

let orderBy: RankProjects | null = null;
let scoreMatch: ScoreFn | null = null;

/** Bind lodash-orderBy + fuzzy score used by project filtering. */
export function bindFilterProjectsByFuzzyQuery(options: {
  orderBy: RankProjects;
  scoreMatch: ScoreFn;
}): void {
  orderBy = options.orderBy;
  scoreMatch = options.scoreMatch;
}

/** Filter/rank projects by a fuzzy query over extracted string fields. */
export function filterProjectsByFuzzyQuery<T>(
  projects: T[],
  query: string,
  fields: (project: T) => Array<string | null | undefined>,
): T[] {
  const needle = query.trim();
  if (needle.length === 0) return projects;
  if (orderBy == null || scoreMatch == null) return projects;
  return orderBy(
    projects
      .map((project) => ({
        project,
        score: Math.max(
          ...fields(project).map((field) =>
            field == null ? 0 : scoreMatch!(field, needle),
          ),
        ),
      }))
      .filter(({ score }) => score > 0),
    ({ score }) => -score,
  ).map(({ project }) => project);
}
