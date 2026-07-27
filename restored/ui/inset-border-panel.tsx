// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `oXi`) / export `XB`.
// Search input + icon peers bind via setInsetBorderPanelParts.

import type {
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from "react";
import { cx } from "./cx";

export type InsetBorderPanelProps = {
  className?: string;
  inputClassName?: string;
  onKeyDown?: InputHTMLAttributes<HTMLInputElement>["onKeyDown"];
  trailingContent?: ReactNode;
  variant?: "default" | "inset" | string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onKeyDown">;

export type InsetBorderPanelParts = {
  SearchIcon: (props: { className?: string }) => ReactElement | null;
  contentClassName: string;
  focusNeighbor: (
    current: EventTarget & HTMLElement,
    direction: "next" | "previous",
  ) => HTMLElement | null;
};

let parts: InsetBorderPanelParts | null = null;

/** Wire search icon / content class / focus neighbor once companions land. */
export function setInsetBorderPanelParts(next: InsetBorderPanelParts): void {
  parts = next;
}

/**
 * Bundle export `XB` / internal `oXi`.
 * Inset-bordered search/input panel chrome.
 */
export function InsetBorderPanel(props: InsetBorderPanelProps): ReactElement {
  const {
    className,
    inputClassName,
    onKeyDown,
    trailingContent,
    variant = "default",
    ...inputProps
  } = props;
  if (parts == null) {
    throw new Error("InsetBorderPanel parts are not configured");
  }
  const insetClass =
    variant === "inset"
      ? "m-2 !w-auto rounded-lg border border-token-input-border"
      : false;
  const rootClassName = cx(
    parts.contentClassName,
    "px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
    insetClass,
    className,
  );
  const fieldClassName = cx(
    "!w-auto flex-1 appearance-none !rounded-none !border-none bg-transparent !px-0 !py-0 text-token-foreground placeholder:text-token-input-placeholder-foreground",
    inputClassName,
  );
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    onKeyDown?.(event);
    if (
      !event.defaultPrevented &&
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      parts.focusNeighbor(
        event.currentTarget,
        event.key === "ArrowDown" ? "next" : "previous",
      )
    ) {
      event.preventDefault();
    }
  };
  return (
    <div className={rootClassName}>
      <parts.SearchIcon className="icon-2xs shrink-0 text-token-text-tertiary" />
      <input
        className={fieldClassName}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
      {trailingContent ? (
        <div className="shrink-0">{trailingContent}</div>
      ) : null}
    </div>
  );
}
