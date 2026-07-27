// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ZZl` / export `Qi`.

import type { MessageDescriptor } from "react-intl";

type IntlShape = {
  formatMessage: (
    message: MessageDescriptor,
    values?: Record<string, unknown>,
  ) => string;
};

/** Format profile day-streak count (pluralized). */
export function formatDayStreakValue(intl: IntlShape, days: number | null | undefined): string {
  return intl.formatMessage(
    {
      id: "profile.stats.dayStreakValue",
      defaultMessage: "{days, plural, one {# day} other {# days}}",
      description: "Formatted day count for profile streak stats",
    },
    { days: Math.max(0, Math.round(days ?? 0)) },
  );
}
