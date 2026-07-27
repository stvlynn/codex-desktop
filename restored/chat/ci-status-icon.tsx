// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pick a CI status glyph from checks + aggregate ciStatus (`mHl` / `oo`).

import { CiChecksRingIcon } from "./ci-checks-ring-icon";
import { CiPendingIcon } from "./ci-pending-icon";
import type { CiCheckItem, CiStatus } from "./ci-check-status";
import { CiFailingIcon, CiNoneIcon, CiPassingIcon } from "./ci-status-glyphs";

export type CiStatusIconProps = {
  checks: readonly CiCheckItem[];
  ciStatus: CiStatus;
};

/**
 * When there are no per-check rows, show a solid status glyph for the
 * aggregate `ciStatus`. Otherwise show the ratio ring (or the neutral glyph
 * when status is `none`).
 */
export function CiStatusIcon({ checks, ciStatus }: CiStatusIconProps) {
  if (checks.length === 0) {
    switch (ciStatus) {
      case "failing":
        return (
          <CiFailingIcon className="icon-sm shrink-0 text-token-charts-red" />
        );
      case "none":
        return <CiNoneIcon className="icon-sm shrink-0" />;
      case "passing":
        return (
          <CiPassingIcon className="icon-sm shrink-0 text-token-charts-green" />
        );
      case "pending":
        return (
          <CiPendingIcon className="icon-sm shrink-0 text-token-charts-yellow" />
        );
      default:
        return null;
    }
  }

  if (ciStatus === "none") {
    return <CiNoneIcon className="icon-sm shrink-0" />;
  }

  return <CiChecksRingIcon checks={checks} />;
}
