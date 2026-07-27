// Restored from ref/webview/assets/notion-dark-oh-FVaYU.js
// Editor theme data: Notion Dark.

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
export const bg: string = "#191919";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#3183d8",
  "activityBar.background": "#151515",
  "activityBarBadge.background": "#3183d8",
  "button.background": "#3183d8",
  "editor.background": "#191919",
  "editor.foreground": "#d9d9d8",
  "editorCursor.foreground": "#3183d8",
  "editorGroupHeader.tabsBackground": "#151515",
  focusBorder: "#3183d8",
  foreground: "#d9d9d8",
  "panel.background": "#151515",
  "sideBar.background": "#151515",
  "sideBar.foreground": "#d9d9d8",
  "sideBarTitle.foreground": "#f7f7f5",
  "textLink.foreground": "#3183d8",
};
export const chromeTheme: ThemeChromeTheme = {
  fonts: {
    code: null,
    ui: null,
  },
  opaqueWindows: true,
};
export const fg: string = "#d9d9d8";
export const name: string = "Notion Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#6a9955",
    },
  },
  {
    scope: ["string", "string.quoted", "constant.other.symbol"],
    settings: {
      foreground: "#ce9178",
    },
  },
  {
    scope: [
      "constant.numeric",
      "constant.language.boolean",
      "regexp",
      "string.regexp",
    ],
    settings: {
      foreground: "#b5cea8",
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
      foreground: "#569cd6",
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
      foreground: "#4ec9b0",
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
      foreground: "#dcdcaa",
    },
  },
  {
    scope: [
      "keyword.operator",
      "punctuation.accessor",
      "punctuation",
      "punctuation.bracket",
      "punctuation.separator",
    ],
    settings: {
      foreground: "#d4d4d4",
    },
  },
  {
    scope: [
      "variable",
      "meta.object-literal.key",
      "meta.object.member",
      "meta.property-name",
    ],
    settings: {
      foreground: "#d9d9d8",
    },
  },
];
export const type: ThemeType = "dark";
export const notionDarkTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
  type,
};
export default notionDarkTheme;
