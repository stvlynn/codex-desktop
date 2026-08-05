// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_1o` / export `rE`.

import { LOCALE_DISPLAY_OVERRIDES } from "./locale-display-overrides";

/** Resolve a human language label for `locale` in `displayLocale`. */
export function displayLanguageName(
  locale: string,
  displayLocale: string,
): string {
  try {
    return (
      new Intl.DisplayNames([displayLocale], {
        type: "language",
        languageDisplay: "standard",
      }).of(LOCALE_DISPLAY_OVERRIDES[locale] ?? locale.split("-")[0]) ?? locale
    );
  } catch {
    return locale;
  }
}
