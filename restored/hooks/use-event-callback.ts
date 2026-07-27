// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wm` / export `Jlt` — stable callback via insertion effect.

import { useInsertionEffect, useRef } from "react";

export function useEventCallback<TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
): (...args: TArgs) => TResult {
  const ref = useRef(fn);
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  const stable = useRef<(...args: TArgs) => TResult | undefined>(undefined);
  if (stable.current == null) {
    stable.current = (...args: TArgs) => {
      const { current } = ref;
      return current(...args);
    };
  }
  return stable.current as (...args: TArgs) => TResult;
}
