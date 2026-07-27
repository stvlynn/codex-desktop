// Restored from ref/webview/assets/proof-light-C-6lYh5j.js
// Editor theme data: Proof Light.

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
export const bg: string = "#f5f3ed";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#3d755d",
  "activityBar.background": "#efede6",
  "activityBarBadge.background": "#3d755d",
  "button.background": "#3d755d",
  "editor.background": "#f5f3ed",
  "editor.foreground": "#2f312d",
  "editorCursor.foreground": "#3d755d",
  "editorGroupHeader.tabsBackground": "#efede6",
  focusBorder: "#3d755d",
  foreground: "#2f312d",
  "panel.background": "#efede6",
  "sideBar.background": "#efede6",
  "sideBar.foreground": "#4b4d48",
  "sideBarTitle.foreground": "#2f312d",
  "textLink.foreground": "#3d755d",
};
export const chromeTheme: ThemeChromeTheme = {
  fonts: {
    code: null,
    ui: null,
  },
  opaqueWindows: false,
};
export const fg: string = "#2f312d";
export const name: string = "Proof Light";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#8b877c",
    },
  },
  {
    scope: ["string", "string.quoted", "constant.other.symbol"],
    settings: {
      foreground: "#3d755d",
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
      foreground: "#d3b45b",
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
      foreground: "#5f6ac2",
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
      foreground: "#5f6ac2",
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
      foreground: "#3d755d",
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
      foreground: "#7a766d",
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
      foreground: "#2f312d",
    },
  },
];
export const type: ThemeType = "light";
export const proofLightTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
  type,
};
export default proofLightTheme;
