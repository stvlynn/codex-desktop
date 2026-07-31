// Restored from ref/webview/assets/share-invite-autocomplete-CSfuQIPj.js
// Single option row for the share-invite autocomplete listbox.

import type { ReactElement } from "react";

import { AppIconZlt as CheckIcon } from "../../icons/app-icon-zlt";
import { cx } from "../cx";
import type { ShareInviteOption } from "./types";

export function ShareInviteOptionRow(props: {
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
  const rowClassName = cx(
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
