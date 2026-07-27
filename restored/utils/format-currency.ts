// Restored from ref/webview/assets/format-currency-Wwdloj8u.js
// Format a monetary amount with react-intl-compatible number formatters.

export type CurrencyIntl = {
  locale: string;
  formatNumber: (value: number, options: Intl.NumberFormatOptions) => string;
  formatters: {
    getNumberFormat: (
      locale: string,
      options: Intl.NumberFormatOptions,
    ) => Intl.NumberFormat;
  };
};

export type FormatCurrencyOptions = {
  intl: CurrencyIntl;
  amount: number;
  currencyCode: string;
  currencyFractionDigits?: number;
};

function getCurrencyFractionDigits(options: {
  intl: CurrencyIntl;
  currencyCode: string;
}): number {
  return (
    options.intl.formatters
      .getNumberFormat(options.intl.locale, {
        style: "currency",
        currency: options.currencyCode,
      })
      .resolvedOptions().maximumFractionDigits ?? 0
  );
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function initFormatCurrency(): void {}

/** Format `amount` as currency, locking min/max fraction digits together. */
export function formatCurrency(options: FormatCurrencyOptions): string {
  const fractionDigits =
    options.currencyFractionDigits ??
    getCurrencyFractionDigits({
      intl: options.intl,
      currencyCode: options.currencyCode,
    });
  return options.intl.formatNumber(options.amount, {
    style: "currency",
    currency: options.currencyCode,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}
