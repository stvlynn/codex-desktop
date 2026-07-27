// Restored from ref/webview/assets/sentry-dark-D9jNDc5T.js
// Editor theme data: Sentry Dark.

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
export const bg: string = "#2d2935";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#7055f6",
  "activityBar.background": "#26222d",
  "activityBarBadge.background": "#7055f6",
  "button.background": "#7055f6",
  "editor.background": "#2d2935",
  "editor.foreground": "#e6dff9",
  "editorCursor.foreground": "#7055f6",
  "editorGroupHeader.tabsBackground": "#26222d",
  focusBorder: "#7055f6",
  foreground: "#e6dff9",
  "panel.background": "#26222d",
  "sideBar.background": "#26222d",
  "sideBar.foreground": "#d5cdee",
  "sideBarTitle.foreground": "#f4f1ff",
  "textLink.foreground": "#7055f6",
};
export const chromeTheme: ThemeChromeTheme = {
  fonts: {
    code: null,
    ui: null,
  },
};
export const fg: string = "#e6dff9";
export const name: string = "Sentry Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#8d849f",
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
      foreground: "#8ee6d7",
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
      foreground: "#f4c46a",
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
      foreground: "#7055f6",
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
      foreground: "#c39bff",
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
      foreground: "#a58cff",
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
      foreground: "#c8bedf",
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
      foreground: "#e6dff9",
    },
  },
];
export const type: ThemeType = "dark";
export const sentryDarkTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
  type,
};
export default sentryDarkTheme;
