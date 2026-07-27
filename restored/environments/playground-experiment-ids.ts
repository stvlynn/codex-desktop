// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `b4s` / `x4s` / `S4s` / `w4s` companions for export `xh`.

export const PLAYGROUND_DIRECT_FOLDER_PICKER = "t2_direct_folder_picker";
export const PLAYGROUND_AUTO_PLAYGROUND = "t3_auto_playground";
export const PLAYGROUND_MODAL_COPY_CTA = "t4_modal_copy_cta_playground";
export const PLAYGROUND_DEFAULT_TITLE = "Playground";

export function isPlaygroundExperimentId(value: string): boolean {
  return (
    value === PLAYGROUND_DIRECT_FOLDER_PICKER ||
    value === PLAYGROUND_AUTO_PLAYGROUND ||
    value === PLAYGROUND_MODAL_COPY_CTA
  );
}
