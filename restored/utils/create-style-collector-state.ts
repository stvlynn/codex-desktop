// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `tt` — pure helper.

export type StyleCollectorState = {
  styles: Set<unknown>;
  stylesheets: Set<unknown>;
  suspenseyImages: boolean;
};

/** Empty style/stylesheet collector used by suspensey image gates. */
export function createStyleCollectorState(): StyleCollectorState {
  return { styles: new Set(), stylesheets: new Set(), suspenseyImages: false };
}
