// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qu` / export `zft` — intl FormattedNumber (`kje('formatNumber')`).

import { createElement, type ReactElement, type ReactNode } from "react";

export type FormattedNumberProps = {
  value: number;
  style?: "decimal" | "currency" | "percent" | "unit" | string;
  unit?: string;
  unitDisplay?: "long" | "short" | "narrow";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  children?: ReactNode | ((formatted: string) => ReactNode);
  [key: string]: unknown;
};

/**
 * Lightweight FormattedNumber stand-in. Host intl may replace via provider;
 * default uses `Intl.NumberFormat`.
 */
export function FormattedNumber(props: FormattedNumberProps): ReactElement {
  const {
    value,
    style,
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    children,
    ...rest
  } = props;
  const formatted = new Intl.NumberFormat(undefined, {
    style: style as Intl.NumberFormatOptions["style"],
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
  } as Intl.NumberFormatOptions).format(value);
  if (typeof children === "function") {
    return createElement(
      "span",
      rest,
      (children as (parts: string) => ReactNode)(formatted),
    );
  }
  return createElement("span", rest, children ?? formatted);
}
