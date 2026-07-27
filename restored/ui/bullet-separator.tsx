// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Inline middle-dot separator between compact UI labels (FormattedMessage).

import { FormattedMessage } from "react-intl";

export type BulletSeparatorProps = {
  className?: string;
};

/**
 * Renders an aria-hidden middle-dot separator that hides itself when it is the
 * last child (Tailwind `last:hidden`).
 */
export function BulletSeparator({ className }: BulletSeparatorProps) {
  const mergedClassName = ["last:hidden", className].filter(Boolean).join(" ");
  return (
    <span aria-hidden className={mergedClassName}>
      <FormattedMessage
        id="codex.ui.bulletSeparator"
        defaultMessage="·"
        description="Middle dot separator used between inline items"
      />
    </span>
  );
}
