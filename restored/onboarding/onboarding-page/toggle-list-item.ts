// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Toggle membership helper from the bundle (Helper1).

import { useState } from "react";

/** Toggle membership helper from the bundle (Helper1). */
export function toggleListItem<T>(items: readonly T[], item: T): T[] {
  return items.includes(item)
    ? items.filter((entry) => entry !== item)
    : [...items, item];
}

export function useToggleState<T>(
  initial: readonly T[] = [],
): [T[], (item: T) => void] {
  const [items, setItems] = useState<T[]>([...initial]);
  const toggle = (item: T) => {
    setItems((prev) => toggleListItem(prev, item));
  };
  return [items, toggle];
}
