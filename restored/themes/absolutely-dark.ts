// Restored from ref/webview/assets/absolutely-dark-B54BBN-X.js
// Editor theme data: Absolutely Dark.

export type ThemeType = "dark" | "light";
export type TokenColorSettings = {
  foreground?: string;
  background?: string;
  fontStyle?: string;
};
export type TokenColorRule = {
  scope: string | string[];
  settings: TokenColorSettings;
};
export type ThemeChromeTheme = {
  accent?: string;
  contrast?: number;
  fonts?: {
    code?: string;
    ui?: string;
  };
  ink?: string;
  opaqueWindows?: boolean;
  semanticColors?: {
    diffAdded?: string;
    diffRemoved?: string;
    skill?: string;
  };
  surface?: string;
  [key: string]: unknown;
};
export type EditorTheme = {
  bg: string;
  colors: Record<string, string>;
  fg: string;
  name: string;
  settings: TokenColorRule[];
  type?: ThemeType;
  chromeTheme?: ThemeChromeTheme;
};
export const bg: string = "#2d2d2b";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#cc7d5e",
  "activityBar.background": "#373735",
  "activityBarBadge.background": "#cc7d5e",
  "button.background": "#cc7d5e",
  "editor.background": "#2d2d2b",
  "editor.foreground": "#f9f9f7",
  "editorCursor.foreground": "#cc7d5e",
  "editorGroupHeader.tabsBackground": "#373735",
  focusBorder: "#cc7d5e",
  foreground: "#f9f9f7",
  "panel.background": "#373735",
  "sideBar.background": "#373735",
  "sideBar.foreground": "#f9f9f7",
  "sideBarTitle.foreground": "#f9f9f7",
  "textLink.foreground": "#cc7d5e",
};
export const fg: string = "#f9f9f7";
export const name: string = "Absolutely Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#b2b2b0",
    },
  },
  {
    scope: ["string", "constant.other.symbol"],
    settings: {
      foreground: "#00c853",
    },
  },
  {
    scope: ["constant.numeric", "constant.language.boolean"],
    settings: {
      foreground: "#ff5f38",
    },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "storage.modifier",
    ],
    settings: {
      foreground: "#ff5f38",
    },
  },
  {
    scope: [
      "entity.name.type",
      "entity.other.inherited-class",
      "support.class",
      "support.type",
    ],
    settings: {
      foreground: "#d28e73",
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "variable.function",
      "meta.function-call",
    ],
    settings: {
      foreground: "#f9f9f7",
    },
  },
];
export const type: ThemeType = "dark";
export const absolutelyDarkTheme: EditorTheme = {
  bg,
  colors,
  fg,
  name,
  settings,
  type,
};
export default absolutelyDarkTheme;
