// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `YZl` / export `$i`.

export type ProfileDurationIntl = {
  formatMessage: (
    descriptor: { id: string; defaultMessage: string; description: string },
    values?: Record<string, number>,
  ) => string;
};

/** Format a profile stats duration (ms) for display. */
export function formatProfileStatsDuration(
  intl: ProfileDurationIntl,
  durationMs: number,
): string {
  const totalSeconds = Math.max(0, Math.round(durationMs / 1e3));
  if (totalSeconds >= 3600) {
    const totalMinutes = Math.round(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return minutes === 0
      ? intl.formatMessage(
          {
            id: "profile.stats.durationHours",
            defaultMessage: "{hours}h",
            description: "Formatted profile duration with hours",
          },
          { hours },
        )
      : intl.formatMessage(
          {
            id: "profile.stats.durationHoursMinutes",
            defaultMessage: "{hours}h {minutes}m",
            description: "Formatted profile duration with hours and minutes",
          },
          { hours, minutes },
        );
  }
  if (totalSeconds >= 60) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return seconds === 0
      ? intl.formatMessage(
          {
            id: "profile.stats.durationMinutes",
            defaultMessage: "{minutes}m",
            description: "Formatted profile duration with minutes",
          },
          { minutes },
        )
      : intl.formatMessage(
          {
            id: "profile.stats.durationMinutesSeconds",
            defaultMessage: "{minutes}m {seconds}s",
            description: "Formatted profile duration with minutes and seconds",
          },
          { minutes, seconds },
        );
  }
  return intl.formatMessage(
    {
      id: "profile.stats.durationSeconds",
      defaultMessage: "{seconds}s",
      description: "Formatted profile duration with seconds",
    },
    { seconds: totalSeconds },
  );
}
