// Restored from ref/webview/assets/subagent-panel-BKCKb2_c.js
// Stage 3: subagent list panel. App-initial aliases rewritten to semantic modules;
// ESM inits dropped / no-op.

import type { ReactElement, ReactNode } from "react";

import { AppIconPZ } from "../icons/app-icon-pz";
import { cx } from "../ui/cx";
import { ExpandableItemList } from "../ui/expandable-item-list";
import { SeededAvatar } from "../ui/seeded-avatar";

export type SubagentPanelItem = {
  id: string;
  label: string;
  avatarSeed: string;
  preview?: string | null;
  previewLineCount?: 1 | 2;
  trailing?: ReactNode;
};

export type SubagentPanelSection = {
  id: string;
  title: ReactNode;
  titleTrailing?: ReactNode;
  items: readonly SubagentPanelItem[];
  emptyState?: ReactNode;
  visibleItemLimit?: number;
  className?: string;
};

export type SubagentPanelBodyProps = {
  sections: readonly SubagentPanelSection[];
  onSelect: (itemId: string) => void;
};

export type SubagentPanelHeaderProps = {
  backAriaLabel: string;
  label: ReactNode;
  seed: string;
  onBack: () => void;
};

function sectionItemKey(item: SubagentPanelItem): string {
  return item.id;
}

function SubagentSection({
  section,
  onSelect,
}: {
  section: SubagentPanelSection;
  onSelect: (itemId: string) => void;
}): ReactElement | null {
  if (section.items.length === 0 && section.emptyState == null) return null;

  const list =
    section.items.length === 0 ? (
      <div className="px-2 py-1 text-sm text-token-text-tertiary">
        {section.emptyState}
      </div>
    ) : (
      <ExpandableItemList
        items={section.items}
        getKey={sectionItemKey}
        listClassName="flex flex-col gap-1"
        paginationButtonClassName="mt-2 ms-9"
        visibleItemIncrement={section.visibleItemLimit}
        visibleItemLimit={section.visibleItemLimit}
      >
        {(item) => <SubagentListItem item={item} onSelect={onSelect} />}
      </ExpandableItemList>
    );

  return (
    <section className={section.className}>
      <h2 className="mb-2 flex min-w-0 items-center justify-between gap-3 px-2 text-sm text-token-text-tertiary">
        <span className="min-w-0 truncate">{section.title}</span>
        {section.titleTrailing}
      </h2>
      {list}
    </section>
  );
}

function SubagentListItem({
  item,
  onSelect,
}: {
  item: SubagentPanelItem;
  onSelect: (itemId: string) => void;
}): ReactElement {
  return (
    <button
      type="button"
      className="flex min-h-10 w-full cursor-interaction items-start gap-3 rounded-lg px-2 py-2 text-start select-none hover:bg-token-bg-secondary focus-visible:bg-token-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={() => onSelect(item.id)}
    >
      <SeededAvatar
        seed={item.avatarSeed}
        className="mt-0.5 size-6"
        aria-hidden
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline gap-2 text-sm">
          <span className="min-w-0 flex-1 truncate text-token-foreground">
            {item.label}
          </span>
          {item.trailing == null ? null : (
            <span className="shrink-0 text-xs whitespace-nowrap text-token-text-tertiary tabular-nums">
              {item.trailing}
            </span>
          )}
        </span>
        {item.preview == null ? null : (
          <span
            className={cx(
              "block text-sm leading-5 text-token-text-secondary",
              item.previewLineCount === 2 ? "!line-clamp-2" : "truncate",
            )}
          >
            {item.preview}
          </span>
        )}
      </span>
    </button>
  );
}

/** Scrollable body listing subagent sections (bundle export `n`). */
export function SubagentPanelBody({
  sections,
  onSelect,
}: SubagentPanelBodyProps): ReactElement {
  return (
    <div className="h-full min-h-0 overflow-y-auto px-3 py-5">
      <div className="mx-auto w-full max-w-[var(--thread-content-max-width)]">
        {sections.map((section) => (
          <SubagentSection
            key={section.id}
            section={section}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

/** Rolldown ESM init (bundle export `r`). */
export function ensureSubagentPanelInit(): void {}

/** Header with back control + seeded avatar (bundle export `t`). */
export function SubagentPanelHeader({
  backAriaLabel,
  label,
  seed,
  onBack,
}: SubagentPanelHeaderProps): ReactElement {
  return (
    <div className="flex h-12 shrink-0 items-center gap-2 border-b border-token-border-heavy px-4">
      <button
        type="button"
        className="flex size-6 cursor-interaction items-center justify-center rounded-md text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-foreground focus-visible:bg-token-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={backAriaLabel}
        onClick={onBack}
      >
        <AppIconPZ className="icon-xs" />
      </button>
      <SeededAvatar seed={seed} className="size-6" aria-hidden />
      <span className="min-w-0 flex-1 truncate text-sm font-medium">
        {label}
      </span>
    </div>
  );
}

// --- qg-full-green stubs ---
export const subagentPanelN: any = undefined;
export const subagentPanelR: any = undefined;
export const subagentPanelT: any = undefined;
