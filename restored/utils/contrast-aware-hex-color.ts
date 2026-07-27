// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oKt` / export `Bnt` — bindable WCAG-ish contrast hex mixer.

type ContrastHex = (foregroundRgb: number[], backgroundRgb: number[]) => string;

let contrastImpl: ContrastHex | null = null;

/** Bind the contrast-aware hex implementation (bundle color helpers). */
export function bindContrastAwareHexColor(next: ContrastHex): void {
  contrastImpl = next;
}

/** Mix foreground/background RGB into a readable hex color. */
export function contrastAwareHexColor(
  foregroundRgb: number[],
  backgroundRgb: number[],
): string {
  if (contrastImpl != null) {
    return contrastImpl(foregroundRgb, backgroundRgb);
  }
  return (
    "#" +
    foregroundRgb
      .slice(0, 3)
      .map((n) => Math.round(n).toString(16).padStart(2, "0"))
      .join("")
  );
}
