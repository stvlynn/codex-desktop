// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Qiu`) / export `Fn`.

import type { CSSProperties, ReactElement } from "react";
import { FormattedMessage } from "react-intl";

export type CodeThemePreviewGlyphProps = {
  theme: {
    ink: string;
    surface: string;
    accent: string;
  };
};

/**
 * Bundle export `Fn` / internal `Qiu`.
 * Small Aa preview glyph for the code theme selector.
 */
export function CodeThemePreviewGlyph(
  props: CodeThemePreviewGlyphProps,
): ReactElement {
  const { theme } = props;
  const borderColor = `color-mix(in srgb, ${theme.ink} 16%, ${theme.surface})`;
  const style: CSSProperties = {
    backgroundColor: theme.surface,
    borderColor,
    color: theme.accent,
  };
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs leading-none"
      style={style}
    >
      <FormattedMessage
        id="settings.general.appearance.codeTheme.previewGlyph"
        defaultMessage="Aa"
        description="Preview glyph shown in the code theme selector"
      />
    </span>
  );
}
