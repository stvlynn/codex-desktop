// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// Tracks whether the window is wider than a given breakpoint.

import { useEffect, useState } from "react";

/** True when `window.innerWidth` is greater than `breakpointPx`. */
export function useIsWideViewport(breakpointPx: number): boolean {
  const measure = (): boolean =>
    typeof window !== "undefined" && window.innerWidth > breakpointPx;
  const [isWide, setIsWide] = useState(measure);

  useEffect(() => {
    const onResize = (): void => {
      setIsWide(window.innerWidth > breakpointPx);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [breakpointPx]);

  return isWide;
}
