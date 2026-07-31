// Restored from ref/webview/assets/share-invite-autocomplete-CSfuQIPj.js
// Share-invite autocomplete field/menu: chips, sections, keyboard listbox.

import type {
  CSSProperties,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from "react";

import { CloseIcon } from "../../icons/close-icon";
import { cx } from "../cx";
import { Spinner } from "../spinner";
import {
  ensureListKeyboardNavigationInit,
  useListKeyboardNavigation,
} from "../use-list-keyboard-navigation";
import { ShareInviteOptionRow } from "./option-row";
import { ShareInviteOptionSections } from "./option-sections";
import type { ShareInviteOption, ShareInviteOptionSection } from "./types";

export type { ShareInviteOption, ShareInviteOptionSection } from "./types";

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

export function ShareInviteAutocomplete(
  props: ShareInviteAutocompleteProps,
): ReactElement {
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
    useListKeyboardNavigation({
      items: flatOptions,
      isActive: listActive,
      onSelect,
      onEscape: onListEscape,
    });

  const rootClassName = cx(variant === "field" && "relative");
  const fieldClassName =
    variant === "field"
      ? "min-h-[30px] rounded-md border border-token-input-border bg-token-input-background px-2 py-1 focus-within:border-token-focus-border"
      : "h-11 border-b border-token-border px-3";
  const rowClassName = cx(
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
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
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
      className={cx(
        "w-full overflow-hidden bg-token-dropdown-background",
        variant === "field" &&
          "absolute z-10 mt-2 rounded-md border border-token-border shadow-sm",
      )}
    >
      <div
        ref={listRef}
        className={cx(
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
            <Spinner className="icon-xs" />
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

export function ensureShareInviteAutocompleteInit(): void {
  ensureListKeyboardNavigationInit();
}

export default ShareInviteAutocomplete;
