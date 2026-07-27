// Restored from ref/webview/assets/share-invite-autocomplete-CSfuQIPj.js
// Share-invite autocomplete field/menu: chips, sections, keyboard listbox.
// Open-runtime soft hosts stand in for former app-initial peers (not a barrel).

import type {
  CSSProperties,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from "react";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

type ClassValue = string | false | null | undefined;
type ClassNameFn = (...values: ClassValue[]) => string;

type ShareInviteOption = {
  id: string;
  label: string;
  chipLabel?: string;
  secondaryLabel?: string;
  imageUrl?: string;
  Icon?: (props: { "aria-hidden"?: boolean; className?: string }) => ReactNode;
};

type ShareInviteOptionSection = {
  id: string;
  label: string;
  options: ShareInviteOption[];
};

type ListNavigationApi = {
  highlightedIndex: number;
  listRef: { current: HTMLElement | null };
  getInputProps: (extra?: {
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  }) => Record<string, unknown>;
  getItemProps: (index: number) => Record<string, unknown>;
};

type UseListNavigation = (args: {
  items: ShareInviteOption[] | null | undefined;
  isActive: boolean;
  onSelect: (option: ShareInviteOption) => void;
  onEscape: () => void;
}) => ListNavigationApi;

/** Soft hosts for unresolved app-initial peers (open-runtime boundary). */
const softHostNop: (...args: unknown[]) => unknown = (...args) =>
  typeof args[0] === "object" &&
  args[0] != null &&
  "children" in (args[0] as object)
    ? null
    : undefined;

const ensureIntlMessagesInit = softHostNop;
const ensureShareInviteIconsInit = softHostNop;
const ensureShareInviteStringsInit = softHostNop;
const CloseIcon: any = softHostNop;
const ensureFocusScopeInit = softHostNop;
const ensurePopoverInit = softHostNop;
const useListNavigation = softHostNop as UseListNavigation;
const ensureComboboxInit = softHostNop;
const clsx = softHostNop as ClassNameFn;
const SpinnerIcon: any = softHostNop;
const CheckIcon: any = softHostNop;

export interface ShareInviteAutocompleteProps {
  ariaLabel?: string;
  disabled?: boolean;
  emptyMessage?: ReactNode;
  getRemoveLabel?: (option: ShareInviteOption) => string;
  leadingContent?: ReactNode;
  loadingLabel?: string;
  loadingSize?: "default" | "compact";
  options?: ShareInviteOption[] | null;
  optionSections?: ShareInviteOptionSection[] | null;
  placeholder?: string;
  query: string;
  selectedOptionIds?: Set<string>;
  selectedOptions?: ShareInviteOption[];
  showLoadingDropdown?: boolean;
  trailingContent?: ReactNode;
  variant?: "field" | "menu";
  onEscape?: () => void;
  onQueryChange: (query: string) => void;
  onRemoveOption?: (option: ShareInviteOption) => void;
  onSelectOption: (option: ShareInviteOption) => void;
  style?: CSSProperties;
  className?: string;
}

function sectionOptions(
  section: ShareInviteOptionSection,
): ShareInviteOption[] {
  return section.options;
}

function countSectionOptions(
  total: number,
  section: ShareInviteOptionSection,
): number {
  return total + section.options.length;
}

function ShareInviteOptionRow(props: {
  disabled?: boolean;
  highlightedIndex: number;
  index: number;
  option: ShareInviteOption;
  selected?: boolean;
  getItemProps: (index: number) => Record<string, unknown>;
}): ReactElement {
  const { disabled, highlightedIndex, index, option, selected, getItemProps } =
    props;
  const OptionIcon = option.Icon;
  const itemProps = getItemProps(index);
  const ariaSelected = selected ?? index === highlightedIndex;
  const highlightClass =
    index === highlightedIndex && "bg-token-list-hover-background";
  const rowClassName = clsx(
    "cursor-interaction flex w-full items-start gap-2 rounded-sm px-2 py-1.5 text-left disabled:cursor-not-allowed",
    highlightClass,
  );

  const leading =
    option.imageUrl == null ? (
      OptionIcon == null ? null : (
        <OptionIcon aria-hidden className="icon-sm mt-0.5 shrink-0" />
      )
    ) : (
      <img
        alt=""
        className="size-5 shrink-0 rounded-full object-cover"
        src={option.imageUrl}
      />
    );

  const checkMark = selected ? (
    <CheckIcon aria-hidden className="icon-sm shrink-0" />
  ) : null;

  return (
    <button
      type="button"
      {...itemProps}
      aria-selected={ariaSelected}
      disabled={disabled}
      className={rowClassName}
      role="option"
    >
      {leading}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-token-foreground">{option.label}</span>
        {option.secondaryLabel == null ? null : (
          <span className="text-sm text-token-description-foreground">
            {option.secondaryLabel}
          </span>
        )}
      </span>
      {checkMark}
    </button>
  );
}

function ShareInviteOptionSections(props: {
  disabled?: boolean;
  highlightedIndex: number;
  optionSections: ShareInviteOptionSection[];
  selectedOptionIds?: Set<string>;
  getItemProps: (index: number) => Record<string, unknown>;
}): ReactElement {
  const {
    disabled,
    highlightedIndex,
    optionSections,
    selectedOptionIds,
    getItemProps,
  } = props;

  const nodes = optionSections.flatMap((section, sectionIndex) => {
    if (section.options.length === 0) return [];
    const indexOffset = optionSections
      .slice(0, sectionIndex)
      .reduce(countSectionOptions, 0);
    return [
      <div
        key={section.id}
        className="flex flex-col border-b border-token-border last:border-b-0"
      >
        <div className="px-2 pt-2 pb-1 text-xs font-medium text-token-description-foreground">
          {section.label}
        </div>
        {section.options.map((option, optionIndex) => (
          <ShareInviteOptionRow
            key={option.id}
            highlightedIndex={highlightedIndex}
            index={indexOffset + optionIndex}
            option={option}
            selected={selectedOptionIds?.has(option.id)}
            disabled={disabled}
            getItemProps={getItemProps}
          />
        ))}
      </div>,
    ];
  });

  return <>{nodes}</>;
}

export function ShareInviteAutocomplete(props: ShareInviteAutocompleteProps): ReactElement {
  const {
    ariaLabel,
    disabled = false,
    emptyMessage,
    getRemoveLabel,
    leadingContent,
    loadingLabel,
    loadingSize = "default",
    options = null,
    optionSections = null,
    placeholder,
    query,
    selectedOptionIds,
    selectedOptions = [],
    showLoadingDropdown = true,
    trailingContent,
    variant = "field",
    onEscape,
    onQueryChange,
    onRemoveOption,
    onSelectOption,
  } = props;

  const flatOptions =
    optionSections?.flatMap(sectionOptions) ?? options ?? null;
  const dropdownOpen =
    variant === "menu"
      ? flatOptions != null || (showLoadingDropdown && query.trim().length > 0)
      : !disabled &&
        query.trim().length > 0 &&
        (showLoadingDropdown || flatOptions != null);
  const listActive = dropdownOpen && !disabled;

  const onSelect = (option: ShareInviteOption) => {
    onSelectOption(option);
    onQueryChange("");
  };
  const onListEscape = () => {
    onQueryChange("");
    onEscape?.();
  };

  const { highlightedIndex, listRef, getInputProps, getItemProps } =
    useListNavigation({
      items: flatOptions,
      isActive: listActive,
      onSelect,
      onEscape: onListEscape,
    });

  const rootClassName = clsx(variant === "field" && "relative");
  const fieldClassName =
    variant === "field"
      ? "min-h-[30px] rounded-md border border-token-input-border bg-token-input-background px-2 py-1 focus-within:border-token-focus-border"
      : "h-11 border-b border-token-border px-3";
  const rowClassName = clsx(
    "flex w-full flex-wrap items-center gap-1 text-base text-token-input-foreground",
    fieldClassName,
  );

  const chips =
    variant === "field"
      ? selectedOptions.map((item) => (
          <span
            key={item.id}
            className="inline-flex min-w-0 items-center gap-1 rounded-md bg-token-badge-background px-1 py-[1px] text-sm text-token-badge-foreground"
          >
            <span className="truncate">{item.chipLabel ?? item.label}</span>
            {getRemoveLabel != null && onRemoveOption != null ? (
              <button
                type="button"
                aria-label={getRemoveLabel(item)}
                className="cursor-interaction rounded-sm text-token-description-foreground hover:text-token-foreground"
                onClick={() => onRemoveOption(item)}
              >
                <CloseIcon aria-hidden className="icon-2xs" />
              </button>
            ) : null}
          </span>
        ))
      : null;

  const inputProps = getInputProps({
    onKeyDown: (event) => {
      if (dropdownOpen && event.key === "Enter") event.preventDefault();
    },
  });

  const inputPlaceholder =
    variant === "menu" || selectedOptions.length === 0
      ? placeholder
      : undefined;

  const input = (
    <input
      {...inputProps}
      aria-label={ariaLabel}
      className="min-w-36 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground"
      disabled={disabled}
      placeholder={inputPlaceholder}
      value={query}
      onChange={(event) => onQueryChange(event.currentTarget.value)}
    />
  );

  const controlRow = (
    <div className={rowClassName}>
      {leadingContent}
      {chips}
      {input}
      {trailingContent}
    </div>
  );

  const dropdown = dropdownOpen ? (
    <div
      className={clsx(
        "w-full overflow-hidden bg-token-dropdown-background",
        variant === "field" &&
          "absolute z-10 mt-2 rounded-md border border-token-border shadow-sm",
      )}
    >
      <div
        ref={listRef as never}
        className={clsx(
          "flex max-h-64 flex-col overflow-y-auto p-1",
          flatOptions == null &&
            (loadingSize === "compact" ? "min-h-16" : "min-h-64"),
        )}
        role="listbox"
      >
        {flatOptions == null ? (
          <div
            aria-label={loadingLabel}
            className="flex flex-1 items-center justify-center text-token-description-foreground"
            role={loadingLabel == null ? undefined : "status"}
          >
            <SpinnerIcon className="icon-xs" />
          </div>
        ) : flatOptions.length === 0 ? (
          <div className="px-2 py-1.5 text-sm text-token-input-placeholder-foreground">
            {emptyMessage}
          </div>
        ) : optionSections == null ? (
          flatOptions.map((item, index) => (
            <ShareInviteOptionRow
              key={item.id}
              highlightedIndex={highlightedIndex}
              index={index}
              option={item}
              selected={selectedOptionIds?.has(item.id)}
              disabled={disabled}
              getItemProps={getItemProps}
            />
          ))
        ) : (
          <ShareInviteOptionSections
            highlightedIndex={highlightedIndex}
            optionSections={optionSections}
            selectedOptionIds={selectedOptionIds}
            disabled={disabled}
            getItemProps={getItemProps}
          />
        )}
      </div>
    </div>
  ) : null;

  return (
    <div className={rootClassName}>
      {controlRow}
      {dropdown}
    </div>
  );
}

ShareInviteAutocomplete.displayName = "ShareInviteAutocomplete";

export const ensureShareInviteAutocompleteInit = rolldownRuntimeN(() => {
  ensureIntlMessagesInit();
  ensureShareInviteIconsInit();
  ensureShareInviteStringsInit();
  ensureFocusScopeInit();
  ensurePopoverInit();
  ensureComboboxInit();
});

export default ShareInviteAutocomplete;
