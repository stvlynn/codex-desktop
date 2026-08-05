// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_ra` / export `WL` — clickable artifact/reference chip.

import type { ReactNode } from "react";
import { cx } from "../ui/cx";

let navigateArtifact:
  | ((args: { reference: unknown; artifactNavigationTarget?: unknown }) => void)
  | null = null;

export function setArtifactReferenceLinkNavigate(
  fn: NonNullable<typeof navigateArtifact>,
): void {
  navigateArtifact = fn;
}

export type ArtifactReferenceLinkProps = {
  reference: unknown;
  artifactNavigationTarget?: unknown;
  ariaBusy?: boolean;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  label?: ReactNode;
  tooltipText?: string;
};

export function ArtifactReferenceLink({
  reference,
  artifactNavigationTarget,
  ariaBusy,
  ariaLabel,
  className,
  children,
  disabled = false,
  label,
  tooltipText,
}: ArtifactReferenceLinkProps): ReactNode {
  return (
    <button
      type="button"
      aria-busy={ariaBusy}
      aria-label={ariaLabel}
      title={tooltipText}
      disabled={disabled}
      className={cx("inline-flex max-w-full items-center", className)}
      onClick={() => {
        if (disabled) return;
        navigateArtifact?.({ reference, artifactNavigationTarget });
      }}
    >
      {label ?? children}
    </button>
  );
}
