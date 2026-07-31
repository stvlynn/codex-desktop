// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-3: idempotent ensure stubs for presentation-theme cluster.

let cssNamedColorsReady = false;
let chatgptThemeReady = false;
let slidePlaceholderRolesReady = false;
let chatgptThemeWarmReady = false;

/** Legacy workbookXt — classic CSS named colors are eager consts. */
export function ensureCssNamedColorsInit(): void {
  if (cssNamedColorsReady) return;
  cssNamedColorsReady = true;
}

/** Legacy Mae — ChatGPT theme + style defaults are eager consts. */
export function ensureChatgptThemeInit(): void {
  if (chatgptThemeReady) return;
  chatgptThemeReady = true;
}

/** Legacy Binding426 — slide placeholder role maps are eager consts. */
export function ensureSlidePlaceholderRolesInit(): void {
  if (slidePlaceholderRolesReady) return;
  slidePlaceholderRolesReady = true;
}

/** Legacy Sle — warm ChatGPT theme is an eager const. */
export function ensureChatgptThemeWarmInit(): void {
  if (chatgptThemeWarmReady) return;
  chatgptThemeWarmReady = true;
}

export function ensurePresentationThemeInit(): void {
  ensureCssNamedColorsInit();
  ensureChatgptThemeInit();
  ensureSlidePlaceholderRolesInit();
  ensureChatgptThemeWarmInit();
}
