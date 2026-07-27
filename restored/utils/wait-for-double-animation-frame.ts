// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ibo` / export `UA`.

export function waitForDoubleAnimationFrame(): Promise<void> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}
