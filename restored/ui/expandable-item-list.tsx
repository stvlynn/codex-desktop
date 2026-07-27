// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Expandable / paginated list used by subagent panel (bundle `rJo` / export `eD`).

import { useEffect, useState, type ReactNode } from "react";

import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { Button } from "./button";
import { cx } from "./cx";

const DEFAULT_VISIBLE_ITEM_LIMIT = 6;
const DEFAULT_VISIBLE_ITEM_INCREMENT = 50;

export type ExpandableItemListProps<T> = {
  items: readonly T[];
  getKey: (item: T, index: number) => string | number;
  children: (item: T, index: number) => ReactNode;
  empty?: ReactNode;
  listAriaLabel?: string;
  listClassName?: string;
  paginationButtonClassName?: string;
  visibleItemLimit?: number;
  visibleItemIncrement?: number;
  onVisibleItemsChange?: (visibleItems: readonly T[]) => void;
};

/**
 * Renders a capped list with "Show N more" / "Show less" pagination
 * (bundle `rJo` / export `eD`; init `cJo` / `tD`).
 */
export function ExpandableItemList<T>({
  items,
  getKey,
  children,
  empty = null,
  listAriaLabel,
  listClassName,
  paginationButtonClassName,
  visibleItemLimit = DEFAULT_VISIBLE_ITEM_LIMIT,
  visibleItemIncrement = DEFAULT_VISIBLE_ITEM_INCREMENT,
  onVisibleItemsChange,
}: ExpandableItemListProps<T>): ReactNode {
  const [visibleCount, setVisibleCount] = useState(visibleItemLimit);
  const visibleItems = items.slice(0, visibleCount);

  useEffect(() => {
    onVisibleItemsChange?.(visibleItems);
  }, [onVisibleItemsChange, visibleItems]);

  if (items.length === 0) return empty;

  const isExpandable = items.length > visibleItemLimit;
  const remainingCount = items.length - visibleItems.length;
  const isFullyExpanded = remainingCount === 0;
  const nextIncrement = Math.min(remainingCount, visibleItemIncrement);

  const list =
    listAriaLabel == null ? (
      <div className={listClassName}>
        {visibleItems.map((item, index) => (
          <div key={getKey(item, index)}>{children(item, index)}</div>
        ))}
      </div>
    ) : (
      <div className={listClassName} role="list" aria-label={listAriaLabel}>
        {visibleItems.map((item, index) => (
          <div key={getKey(item, index)} role="listitem">
            {children(item, index)}
          </div>
        ))}
      </div>
    );

  const pagination = isExpandable ? (
    <Button
      className={cx(
        "!px-0 !py-0 text-token-text-tertiary hover:text-token-text-secondary",
        paginationButtonClassName,
      )}
      color="ghostMuted"
      size="default"
      onClick={() => {
        setVisibleCount((current) =>
          isFullyExpanded
            ? visibleItemLimit
            : Math.min(items.length, current + visibleItemIncrement),
        );
      }}
    >
      {remainingCount === 0 ? (
        <MemoizedFormattedMessage
          id="codex.localConversation.summaryPanelExpandableList.showLess"
          defaultMessage="Show less"
          description="Button label that collapses a long list in the conversation summary panel"
        />
      ) : (
        <MemoizedFormattedMessage
          id="codex.localConversation.summaryPanelExpandableList.showMore"
          defaultMessage="Show {count, number} more"
          description="Button label that expands a long list in the conversation summary panel"
          values={{ count: nextIncrement }}
        />
      )}
    </Button>
  ) : null;

  return (
    <>
      {list}
      {pagination}
    </>
  );
}

/** Rolldown ESM init for ExpandableItemList (bundle `cJo` / export `tD`). */
export function ensureExpandableItemListInit(): void {}
