// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yy` / export `nrt` — pure DOM helper via extractFn(yy).

/** `preventDefault` + `stopPropagation`. */
export function preventDefaultAndStopPropagation(event: {
  preventDefault(): void;
  stopPropagation(): void;
}): void {
  event.preventDefault();
  event.stopPropagation();
}
