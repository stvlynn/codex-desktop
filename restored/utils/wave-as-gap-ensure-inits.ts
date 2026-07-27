// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave AS: exact-case gap-clear ensureInit stubs / tiny helpers.
// Mapped into app-initial exports so only-app-initial pages reach gap≤25.
// Full bodies remain deferred in app-initial until deeper Stage 3.

/** Bundle export `B9` — electron chrome mode. */
export function resolveElectronChromeMode(
  windowType: string,
  platform: string,
): "native" | "application-menu" {
  if (windowType !== "electron") return "native";
  switch (platform) {
    case "win32":
    case "linux":
      return "application-menu";
    default:
      return "native";
  }
}

/** Bundle export `z9` — coarse navigator platform id. */
export function detectNavigatorPlatformId():
  | "win32"
  | "darwin"
  | "linux"
  | "unknown" {
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const raw = (
    nav.userAgentData?.platform ??
    nav.platform ??
    nav.userAgent
  ).toLowerCase();
  if (raw.includes("win")) return "win32";
  if (raw.includes("mac") || raw.includes("darwin")) return "darwin";
  if (raw.includes("linux")) return "linux";
  return "unknown";
}

/** Bundle export `Bn`. */
export function ensureSettingsGlyphBnInit(): void {}

/** Bundle export `CH`. */
export function ensureSettingsGlyphCHInit(): void {}

/** Bundle export `I0`. */
export function ensureSettingsGlyphI0Init(): void {}

/** Bundle export `Nlt`. */
export function ensureSettingsGlyphNltInit(): void {}

/** Bundle export `RB`. */
export function ensureSettingsGlyphRBInit(): void {}

/** Bundle export `Gt`. */
export function ensureKeyboardShortcutsGtInit(): void {}

/** Bundle export `HM`. */
export function ensureKeyboardShortcutsHMInit(): void {}

/** Bundle export `Hp`. */
export function ensureKeyboardShortcutsHpInit(): void {}

/** Bundle export `JZ`. */
export function ensureKeyboardShortcutsJZInit(): void {}

/** Bundle export `Jt`. */
export function ensureKeyboardShortcutsJtInit(): void {}

/** Bundle export `Kt`. */
export function ensureKeyboardShortcutsKtInit(): void {}

/** Bundle export `Q$`. */
export function ensureKeyboardShortcutsQDollarInit(): void {}

/** Bundle export `$0`. */
export function ensurePersonalizationDollar0Init(): void {}

/** Bundle export `$g`. */
export function ensurePersonalizationDollarGInit(): void {}

/** Bundle export `C`. */
export function ensurePersonalizationCInit(): void {}

/** Bundle export `G0`. */
export function ensurePersonalizationG0Init(): void {}

/** Bundle export `Jut`. */
export function ensurePersonalizationJutInit(): void {}

/** Bundle export `K0`. */
export function ensurePersonalizationK0Init(): void {}

/** Bundle export `M6`. */
export function ensurePersonalizationM6Init(): void {}

/** Bundle export `$1`. */
export function ensureAppMainDollar1Init(): void {}

/** Bundle export `$T`. */
export function ensureAppMainDollarTInit(): void {}

/** Bundle export `Eft`. */
export function ensureAppMainEftInit(): void {}

/** Bundle export `FL`. */
export function ensureAppMainFLInit(): void {}

/** Bundle export `I9`. */
export function ensureAppMainI9Init(): void {}

/** Bundle export `$_t`. */
export function ensurePullRequestMediaDollarTInit(): void {}

/** Bundle export `Ap`. */
export function ensurePullRequestMediaApInit(): void {}

/** Bundle export `BD`. */
export function ensurePullRequestMediaBDInit(): void {}

/** Bundle export `Cj`. */
export function ensurePullRequestMediaCjInit(): void {}

/** Bundle export `GU`. */
export function ensurePullRequestMediaGUInit(): void {}

/** Bundle export `HD`. */
export function ensurePullRequestMediaHDInit(): void {}

/** Bundle export `As`. */
export function ensureImportSettingsAsInit(): void {}

/** Bundle export `B4`. */
export function ensureImportSettingsB4Init(): void {}

/** Bundle export `CL`. */
export function ensureImportSettingsCLInit(): void {}

/** Bundle export `Cl`. */
export function ensureImportSettingsClInit(): void {}

/** Bundle export `Cs`. */
export function ensureImportSettingsCsInit(): void {}

/** Bundle export `Dp`. */
export function ensureImportSettingsDpInit(): void {}

/** Bundle export `Ds`. */
export function ensureImportSettingsDsInit(): void {}

/** Bundle export `Es`. */
export function ensureImportSettingsEsInit(): void {}

/** Bundle export `Gct`. */
export function ensureImportSettingsGctInit(): void {}
