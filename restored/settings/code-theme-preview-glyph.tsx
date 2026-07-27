// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qiu`) / export `Fn`.

export type CodeThemePreviewGlyphPeers = {
  $iu: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  eau: (...args: unknown[]) => unknown;
};
let peers: CodeThemePreviewGlyphPeers | null = null;

/** Wire CodeThemePreviewGlyph peers once companions land. */
export function setCodeThemePreviewGlyphPeers(
  next: CodeThemePreviewGlyphPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fn` / internal `Qiu`.
 */
export function CodeThemePreviewGlyph(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("CodeThemePreviewGlyph peers are not configured");
  }
  let { theme } = props,
    r = `color-mix(in srgb, ${theme.ink} 16%, ${theme.surface})`,
    i = {
      backgroundColor: theme.surface,
      borderColor: r,
      color: theme.accent,
    };
  let a = (
    <Z
      id="settings.general.appearance.codeTheme.previewGlyph"
      defaultMessage="Aa"
      description="Preview glyph shown in the code theme selector"
    />
  );
  return (
    <span
      aria-hidden={true}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs leading-none font-semibold"
      style={i}
    >
      {a}
    </span>
  );
}
