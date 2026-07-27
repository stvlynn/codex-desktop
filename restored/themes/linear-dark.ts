// Restored from ref/webview/assets/linear-dark-B6ksvH-w.js
// Editor theme data: Linear Dark.

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
export const bg: string = "#17181d";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#5e6ad2",
  "activityBar.background": "#080a0f",
  "activityBarBadge.background": "#5e6ad2",
  "button.background": "#5e6ad2",
  "editor.background": "#17181d",
  "editor.foreground": "#e6e9ef",
  "editorCursor.foreground": "#8c97ff",
  "editorGroupHeader.tabsBackground": "#0f1219",
  focusBorder: "#5e6ad2",
  foreground: "#e6e9ef",
  "panel.background": "#0a0c11",
  "sideBar.background": "#080a0f",
  "sideBar.foreground": "#d8dce6",
  "sideBarTitle.foreground": "#f7f8f8",
  "textLink.foreground": "#5e6ad2",
};
export const chromeTheme: ThemeChromeTheme = {
  accent: "#606acc",
  fonts: {
    ui: "Inter",
  },
  ink: "#e3e4e6",
  opaqueWindows: true,
  semanticColors: {
    diffAdded: "#69c967",
    diffRemoved: "#ff7e78",
    skill: "#c2a1ff",
  },
  surface: "#0f0f11",
};
export const fg: string = "#e6e9ef";
export const name: string = "Linear Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#636b7b",
    },
  },
  {
    scope: [
      "string",
      "string.quoted",
      "constant.other.symbol",
      "entity.other.attribute-name",
    ],
    settings: {
      foreground: "#7ad9c0",
    },
  },
  {
    scope: [
      "constant.numeric",
      "constant.language",
      "constant.language.boolean",
      "constant.character.escape",
      "regexp",
      "string.regexp",
    ],
    settings: {
      foreground: "#f5c56a",
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
      foreground: "#8c97ff",
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
      foreground: "#73b7ff",
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
      foreground: "#c2a1ff",
    },
  },
  {
    scope: [
      "keyword.operator",
      "punctuation.accessor",
      "punctuation.definition.tag",
      "punctuation",
      "punctuation.bracket",
      "punctuation.separator",
    ],
    settings: {
      foreground: "#b5bccb",
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
      foreground: "#e6e9ef",
    },
  },
];
export const linearDarkTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
};
export default linearDarkTheme;
