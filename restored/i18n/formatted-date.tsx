// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iMe` / export `Lft` — intl FormattedDate component (`kje('formatDate')`).

import { createElement, type ReactElement, type ReactNode } from "react";

export type FormattedDateProps = {
  value: Date | number | string;
  day?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  children?: ReactNode;
  [key: string]: unknown;
};

/**
 * Lightweight FormattedDate stand-in. Host may replace via intl provider;
 * default uses `Intl.DateTimeFormat`.
 */
export function FormattedDate(props: FormattedDateProps): ReactElement {
  const { value, day, month, year, children, ...rest } = props;
  const date = value instanceof Date ? value : new Date(value);
  const formatted = new Intl.DateTimeFormat(undefined, {
    day,
    month,
    year,
  }).format(date);
  if (typeof children === "function") {
    return createElement(
      "span",
      rest,
      (children as (parts: string) => ReactNode)(formatted),
    );
  }
  return createElement("span", rest, children ?? formatted);
}
