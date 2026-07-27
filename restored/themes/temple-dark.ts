// Restored from ref/webview/assets/temple-dark-CPV4J_lA.js
// Editor theme data: Temple Dark.

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
export const bg: string = "#02120c";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#e4f222",
  "activityBar.background": "#1d2d0f",
  "activityBarBadge.background": "#e4f222",
  "button.background": "#e4f222",
  "editor.background": "#02120c",
  "editor.foreground": "#c7e6da",
  "editorCursor.foreground": "#e4f222",
  "editorGroupHeader.tabsBackground": "#1d2d0f",
  focusBorder: "#e4f222",
  foreground: "#c7e6da",
  "panel.background": "#1d2d0f",
  "sideBar.background": "#1d2d0f",
  "sideBar.foreground": "#c7e6da",
  "sideBarTitle.foreground": "#c7e6da",
  "textLink.foreground": "#e4f222",
};
export const fg: string = "#c7e6da";
export const name: string = "Temple Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#394d46",
    },
  },
  {
    scope: [
      "string",
      "constant.other.symbol",
      "entity.name.function",
      "support.function",
      "variable.function",
      "meta.function-call",
    ],
    settings: {
      foreground: "#e4f222",
    },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "storage.modifier",
      "constant.numeric",
      "constant.language.boolean",
    ],
    settings: {
      foreground: "#e4f222",
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
      foreground: "#859419",
    },
  },
  {
    scope: ["keyword.operator", "entity.other.attribute-name"],
    settings: {
      foreground: "#788617",
    },
  },
  {
    scope: [
      "punctuation",
      "punctuation.bracket",
      "punctuation.separator",
      "punctuation.definition.list.begin",
    ],
    settings: {
      foreground: "#4f5e13",
    },
  },
  {
    scope: [
      "variable",
      "variable.other.readwrite",
      "variable.parameter",
      "variable.other.object",
      "variable.language",
      "variable.language.this",
      "variable.language.self",
      "string",
      "string.quoted",
      "variable.other.property",
      "meta.object-literal.key",
      "entity.name.label",
      "meta.annotation",
      "markup.raw",
    ],
    settings: {
      foreground: "#c7e6da",
    },
  },
];
export const type: ThemeType = "dark";
export const templeDarkTheme: EditorTheme = {
  bg,
  colors,
  fg,
  name,
  settings,
  type,
};
export default templeDarkTheme;
