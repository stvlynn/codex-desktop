// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pending CI pie/spinner glyph (`fHl` / export alias `lo`).

import type { SVGProps } from "react";

export type CiPendingIconProps = SVGProps<SVGSVGElement>;

/**
 * Yellow pending indicator: outer ring with a quarter-sweep filled via an
 * inner arc path (bundled as a single compound path).
 */
export function CiPendingIcon(props: CiPendingIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10.012 1.669a8.343 8.343 0 0 1 8.343 8.343 8.343 8.343 0 0 1-8.343 8.343 8.343 8.343 0 0 1-8.343-8.343 8.343 8.343 0 0 1 8.343-8.343Zm0 1.668a6.675 6.675 0 1 0 0 13.35 6.675 6.675 0 0 0 0-13.35Zm0 1.669a5.007 5.007 0 1 1 0 10.012V5.006Z" />
    </svg>
  );
}
