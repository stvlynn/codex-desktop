// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `dot` — pure helper with memo cache.

type HistoryEntity = unknown;
type HistoryIsland = { entries: Array<{ value: string }> };
type History = {
  islands: HistoryIsland[];
  entitiesByKey: Record<string, HistoryEntity>;
};

const cache = new WeakMap<History, HistoryEntity[]>();

/** Flatten island entry keys into entity values (memoized). */
export function flattenHistoryIslandEntities(
  history: History,
): HistoryEntity[] {
  const hit = cache.get(history);
  if (hit != null) return hit;
  const entities = history.islands.flatMap((island) =>
    island.entries.map((entry) => history.entitiesByKey[entry.value]),
  );
  cache.set(history, entities);
  return entities;
}
