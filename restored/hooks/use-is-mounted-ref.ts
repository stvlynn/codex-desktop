// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V8i` / export `NR` — ref that tracks mount lifetime.

import { useEffect, useRef, type MutableRefObject } from "react";

export function useIsMountedRef(): MutableRefObject<boolean> {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
