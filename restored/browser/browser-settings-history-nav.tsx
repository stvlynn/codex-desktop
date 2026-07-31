// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser settings history back/forward toolbar (export HV / UV).

import type { MouseEventHandler, ReactElement, SVGProps } from "react";

import { Button } from "../ui/button";

export type HistoryChevronIconProps = SVGProps<SVGSVGElement>;

/** Local chevron used by history nav (bundle `wj` in this scope). */
export function HistoryChevronIcon(
  props: HistoryChevronIconProps,
): ReactElement {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M10.5 3.5L6 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type BrowserSettingsHistoryNavProps = {
  backLabel: string;
  forwardLabel: string;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: MouseEventHandler<HTMLButtonElement>;
  onForward: MouseEventHandler<HTMLButtonElement>;
};

/** Bundle `mGi` / export `HV`. */
export function BrowserSettingsHistoryNav({
  backLabel,
  forwardLabel,
  canGoBack,
  canGoForward,
  onBack,
  onForward,
}: BrowserSettingsHistoryNavProps): ReactElement {
  return (
    <>
      <Button
        aria-label={backLabel}
        color="ghost"
        disabled={!canGoBack}
        onClick={onBack}
        size="toolbar"
        title={backLabel}
        uniform
      >
        <HistoryChevronIcon className="icon-xs" />
      </Button>
      <Button
        aria-label={forwardLabel}
        color="ghost"
        disabled={!canGoForward}
        onClick={onForward}
        size="toolbar"
        title={forwardLabel}
        uniform
      >
        <HistoryChevronIcon className="icon-xs -scale-x-100 transform" />
      </Button>
    </>
  );
}

BrowserSettingsHistoryNav.displayName = "BrowserSettingsHistoryNav";

/** Bundle `gGi` / export `UV` — ESM init retained as no-op. */
export function ensureBrowserSettingsHistoryNavInit(): void {}
