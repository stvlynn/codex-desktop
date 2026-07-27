// Restored from ref/webview/assets/lobster-dark-C4twhOT5.js
// Editor theme data: Lobster Dark.

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
export const bg: string = "#111827";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#ff5c5c",
  "activityBar.background": "#111827",
  "activityBarBadge.background": "#ff5c5c",
  "button.background": "#ff5c5c",
  "editor.background": "#111827",
  "editor.foreground": "#e4e4e7",
  "editorCursor.foreground": "#ff5c5c",
  "editorGroupHeader.tabsBackground": "#1a1d25",
  focusBorder: "#ff5c5c",
  foreground: "#e4e4e7",
  "panel.background": "#111827",
  "sideBar.background": "#111827",
  "sideBar.foreground": "#e4e4e7",
  "sideBarTitle.foreground": "#fafafa",
  "textLink.foreground": "#ff5c5c",
};
export const chromeTheme: ThemeChromeTheme = {
  fonts: {
    ui: "Satoshi",
  },
};
export const fg: string = "#e4e4e7";
export const name: string = "Lobster Dark";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#71717a",
    },
  },
  {
    scope: [
      "string",
      "string.quoted",
      "constant.other.symbol",
      "entity.other.attribute-name",
      "support.constant",
    ],
    settings: {
      foreground: "#14b8a6",
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
      foreground: "#f59e0b",
    },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "storage.modifier",
      "invalid",
      "invalid.deprecated",
    ],
    settings: {
      foreground: "#ff5c5c",
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
      foreground: "#3b82f6",
    },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "variable.function",
      "meta.function-call",
      "markup.heading",
    ],
    settings: {
      foreground: "#22c55e",
    },
  },
  {
    scope: [
      "keyword.operator",
      "punctuation.accessor",
      "punctuation.definition.tag",
    ],
    settings: {
      foreground: "#ff7070",
    },
  },
  {
    scope: ["punctuation.separator"],
    settings: {
      foreground: "#a1a1aa",
    },
  },
  {
    scope: [
      "punctuation",
      "punctuation.definition.list.begin",
      "meta.diff.header",
    ],
    settings: {
      foreground: "#71717a",
    },
  },
  {
    scope: [
      "punctuation.bracket",
      "punctuation.definition.string",
      "punctuation.definition.parameters",
      "punctuation.definition.typeparameters",
      "punctuation.section.embedded",
    ],
    settings: {
      foreground: "#a1a1aa",
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
      "variable.other.property",
      "meta.object-literal.key",
      "entity.name.label",
      "meta.annotation",
      "markup.bold",
      "markup.italic",
      "markup.raw",
    ],
    settings: {
      foreground: "#e4e4e7",
    },
  },
];
export const type: ThemeType = "dark";
export const lobsterDarkTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
  type,
};
export default lobsterDarkTheme;
