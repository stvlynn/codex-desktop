// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dUa` / export `kM`.

type Fuzzy = (query: string) => (label: string) => number;

let makeFuzzy: Fuzzy | null = null;
let filterSections: ((sections: unknown[], query: string) => unknown[]) | null =
  null;

/** Bind fuzzy matcher + section filter used by `kM`. */
export function bindFilterAtMentionSections(options: {
  makeFuzzy: Fuzzy;
  filterSections: (sections: unknown[], query: string) => unknown[];
}): void {
  makeFuzzy = options.makeFuzzy;
  filterSections = options.filterSections;
}

export type AtMentionAction = { label: string; [key: string]: unknown };

export type AtMentionSection = {
  id: string;
  title: unknown;
  items: AtMentionAction[];
  emptyState: null;
  isLoading: boolean;
};

/**
 * Prepend matching context actions to @-mention sections when query is non-empty.
 */
export function filterAtMentionSections(
  sections: unknown[],
  query: string,
  actions: AtMentionAction[] = [],
): unknown[] {
  const score = makeFuzzy?.(query);
  const matched =
    query.trim().length === 0 || score == null
      ? actions
      : actions.filter((action) => score(action.label) > 0);
  const withActions =
    matched.length === 0
      ? sections
      : [
          {
            id: "context-actions",
            title: {
              id: "composer.atMentionList.contextActions",
              defaultMessage: "Add",
              description:
                "Section heading for actions available from the composer @ menu",
            },
            items: matched,
            emptyState: null,
            isLoading: false,
          } satisfies AtMentionSection,
          ...sections,
        ];
  return query.trim().length === 0
    ? withActions
    : (filterSections?.(withActions, query) ?? withActions);
}
