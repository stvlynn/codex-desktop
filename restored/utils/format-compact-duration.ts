// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ghs`/`mhs` — export `Cx`.

function formatDurationMs(
  ms: number,
  options: { underOneSecond?: "zero" | "null"; trimZeroUnits?: boolean } = {},
): string | null {
  const underOneSecond = options.underOneSecond ?? "null";
  const trimZeroUnits = options.trimZeroUnits ?? false;
  const totalSeconds = Math.floor(Math.max(ms, 0) / 1e3);
  if (totalSeconds < 1) return underOneSecond === "zero" ? "0s" : null;
  if (totalSeconds < 60) return `${totalSeconds}s`;
  const hour = 3600;
  const days = Math.floor(totalSeconds / (hour * 24));
  const hours = Math.floor(totalSeconds / hour) % 24;
  const minutes = Math.floor((totalSeconds % hour) / 60);
  const seconds = totalSeconds % 60;
  if (days > 0 || hours > 0) {
    const parts: string[] = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0 || !trimZeroUnits) parts.push(`${hours}h`);
    if (minutes > 0 || !trimZeroUnits) parts.push(`${minutes}m`);
    if (seconds > 0 || !trimZeroUnits) parts.push(`${seconds}s`);
    return parts.join(" ");
  }
  if (trimZeroUnits && seconds === 0) return `${minutes}m`;
  return `${minutes}m ${seconds}s`;
}

/** Compact duration string; sub-second → `0s`. */
export function formatCompactDuration(ms: number): string {
  return (
    formatDurationMs(ms, { underOneSecond: "zero", trimZeroUnits: true }) ??
    "0s"
  );
}
