// Restored from ref/webview/assets/absolutely-light-CP_4VWV1.js
// Editor theme data: Absolutely Light.

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
export const bg: string = "#f9f9f7";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#cc7d5e",
  "activityBar.background": "#f4f4f2",
  "activityBarBadge.background": "#cc7d5e",
  "button.background": "#cc7d5e",
  "editor.background": "#f9f9f7",
  "editor.foreground": "#2d2d2b",
  "editorCursor.foreground": "#cc7d5e",
  "editorGroupHeader.tabsBackground": "#f4f4f2",
  focusBorder: "#cc7d5e",
  foreground: "#2d2d2b",
  "panel.background": "#f4f4f2",
  "sideBar.background": "#f4f4f2",
  "sideBar.foreground": "#2d2d2b",
  "sideBarTitle.foreground": "#2d2d2b",
  "textLink.foreground": "#cc7d5e",
};
export const fg: string = "#2d2d2b";
export const name: string = "Absolutely Light";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#939391",
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
      foreground: "#bc7559",
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
      foreground: "#2d2d2b",
    },
  },
];
export const type: ThemeType = "light";
export const absolutelyLightTheme: EditorTheme = {
  bg,
  colors,
  fg,
  name,
  settings,
  type,
};
export default absolutelyLightTheme;
