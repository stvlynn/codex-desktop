// Restored from ref/webview/assets/vercel-light-BkOrl59b.js
// Editor theme data: Vercel Light.

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
export const bg: string = "#ffffff";
export const colors: Record<string, string> = {
  "activityBar.activeBorder": "#006aff",
  "activityBar.background": "#ffffff",
  "activityBarBadge.background": "#006aff",
  "button.background": "#006aff",
  "editor.background": "#ffffff",
  "editor.foreground": "#171717",
  "editorCursor.foreground": "#006aff",
  "editorGroupHeader.tabsBackground": "#ffffff",
  focusBorder: "#006aff",
  foreground: "#171717",
  "panel.background": "#ffffff",
  "sideBar.background": "#ffffff",
  "sideBar.foreground": "#666666",
  "sideBarTitle.foreground": "#171717",
  "textLink.foreground": "#006aff",
};
export const chromeTheme: ThemeChromeTheme = {
  accent: "#006aff",
  contrast: 40,
  fonts: {
    code: '"Geist Mono", ui-monospace, "SFMono-Regular"',
    ui: "Geist, Inter",
  },
  ink: "#171717",
  opaqueWindows: true,
  semanticColors: {
    diffAdded: "#28A948",
    diffRemoved: "#EB001D",
    skill: "#A100F8",
  },
  surface: "#ffffff",
};
export const fg: string = "#171717";
export const name: string = "Vercel Light";
export const settings: TokenColorRule[] = [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: "#666666",
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
      foreground: "#28A948",
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
      foreground: "#A100F8",
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
      foreground: "#006aff",
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
      foreground: "#0059D1",
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
      foreground: "#A100F8",
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
      foreground: "#666666",
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
      foreground: "#171717",
    },
  },
];
export const type: ThemeType = "light";
export const vercelLightTheme: EditorTheme = {
  bg,
  colors,
  chromeTheme,
  fg,
  name,
  settings,
  type,
};
export default vercelLightTheme;
