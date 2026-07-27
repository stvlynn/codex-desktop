// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Donut chart of CI check ratios for a pull-request chip (`iHl` / `do`).

import { buildCiCheckSegments } from "./ci-check-segments";
import type { CiCheckItem } from "./ci-check-status";
import { CiEmptyChecksIcon } from "./ci-status-glyphs";

const RING_RADIUS = 5.75;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const SEGMENT_GAP = 1.5;

export type CiChecksRingIconProps = {
  checks: readonly CiCheckItem[];
  className?: string;
};

function cn(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Renders an 18×18 stroke donut summarizing check pass/fail/pending ratios.
 * Falls back to an empty ring when there are no checks.
 */
export function CiChecksRingIcon({
  checks,
  className = "icon-sm shrink-0",
}: CiChecksRingIconProps) {
  const segments = buildCiCheckSegments(checks);
  const mergedClassName = cn("text-token-description-foreground", className);

  if (segments.length === 0) {
    return <CiEmptyChecksIcon className={mergedClassName} />;
  }

  const gap = segments.length > 1 ? SEGMENT_GAP : 0;
  let offsetCursor = 0;

  return (
    <svg
      aria-hidden
      className={mergedClassName}
      fill="none"
      viewBox="0 0 18 18"
    >
      <g transform="rotate(-90 9 9)">
        {segments.map((segment) => {
          const sweep = RING_CIRCUMFERENCE * segment.ratio;
          const dasharray = `${Math.max(sweep - gap, 0.001)} ${RING_CIRCUMFERENCE}`;
          const dashoffset = -(offsetCursor + gap / 2);
          offsetCursor += sweep;
          return (
            <circle
              key={segment.key}
              cx="9"
              cy="9"
              r={RING_RADIUS}
              stroke={segment.color}
              strokeDasharray={dasharray}
              strokeDashoffset={dashoffset}
              strokeLinecap="butt"
              strokeWidth="1.7"
            />
          );
        })}
      </g>
    </svg>
  );
}
