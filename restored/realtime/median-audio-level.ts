// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `sat` — pure helper.

/** Median normalized audio level over `samples[start..end)`. */
export function medianAudioLevel(
  samples: ArrayLike<number>,
  start: number,
  end: number,
): number {
  const levels: number[] = [];
  for (let i = start; i < end; i += 1) {
    const clamped = Math.max(-100, Math.min(-10, samples[i] ?? -100));
    levels.push(Math.sqrt(1 - Math.abs(clamped) / 100));
  }
  levels.sort((a, b) => a - b);
  const mid = Math.floor(levels.length / 2);
  return levels.length % 2 === 0
    ? ((levels[mid - 1] ?? 0) + (levels[mid] ?? 0)) / 2
    : (levels[mid] ?? 0);
}
