// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `Q8s`) / export `xm`.

import type { ReactElement, ReactNode } from "react";

export type PanelHeaderBetweenRowProps = {
  children?: ReactNode;
};

/**
 * Bundle export `xm` / internal `Q8s`.
 * Panel header row with space-between children.
 */
export function PanelHeaderBetweenRow(
  props: PanelHeaderBetweenRowProps,
): ReactElement {
  const { children } = props;
  return (
    <div className="flex items-center justify-between gap-4 px-3 pb-2">
      {children}
    </div>
  );
}
