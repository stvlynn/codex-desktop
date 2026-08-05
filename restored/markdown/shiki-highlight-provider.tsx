// Restored from ref/webview/assets/shiki-highlight-provider-C6sAgO-B.js
// Settings-entangled wrapper around the Shiki highlighter pool provider.
// Theme / line-diff options come from appearance settings; the pool body is
// `ShikiHighlightPoolProvider` (app-initial `kL` / `Fca`).

import { useEffect, type ReactElement, type ReactNode } from "react";
import { usePreferredColorScheme } from "../hooks/use-preferred-color-scheme";
import { AppearanceSettings } from "../settings/appearance-settings";
import { getAppearanceThemeMode } from "../settings/get-appearance-theme-mode";
import { useSettingValue } from "../settings/use-setting-value";
import { getCodeThemeRegistration } from "../themes/get-code-theme-registration";
import {
  ShikiHighlightPoolProvider,
  useShikiHighlightContext,
  type ShikiHighlighterOptions,
  type ShikiLineDiffType,
  type ShikiPoolOptions,
} from "./shiki-highlight-context";

const DEFAULT_LANGS = [
  "typescript",
  "javascript",
  "css",
  "html",
  "python",
] as const;

const DEFAULT_POOL_SIZE = 4;
const DEFAULT_AST_LRU_CACHE_SIZE = 100;

/** Optional atom reader for the word-alt line-diff preference (bundle `R_t`/`fW`). */
type WordAltFlagReader = () => boolean;

let readWordAltLineDiff: WordAltFlagReader = () => false;

/** Wire the app-scope flag that selects `word-alt` vs `none` line diffs. */
export function bindShikiWordAltLineDiffReader(
  reader: WordAltFlagReader,
): void {
  readWordAltLineDiff = reader;
}

function createHighlightWorker(): Worker {
  // Bundled Pierre diffs worker leaf (`worker-*` → `@pierre/diffs/worker`).
  return new Worker(new URL("@pierre/diffs/worker", import.meta.url), {
    type: "module",
  });
}

export type ShikiHighlightProviderProps = {
  children?: ReactNode;
};

type RenderOptionsSyncProps = {
  lineDiffType: ShikiLineDiffType;
  theme: string;
};

function ShikiRenderOptionsSync(props: RenderOptionsSyncProps): null {
  const { lineDiffType, theme } = props;
  const highlighter = useShikiHighlightContext();

  useEffect(() => {
    highlighter?.setRenderOptions?.({ lineDiffType, theme });
  }, [lineDiffType, theme, highlighter]);

  return null;
}

/**
 * Bundle export `ShikiHighlightProvider` from `shiki-highlight-provider-C6sAgO-B`.
 */
export function ShikiHighlightProvider(
  props: ShikiHighlightProviderProps,
): ReactElement {
  const { children } = props;
  const colorScheme = usePreferredColorScheme(getAppearanceThemeMode());
  const lightCodeThemeId = useSettingValue(AppearanceSettings.lightCodeThemeId);
  const darkCodeThemeId = useSettingValue(AppearanceSettings.darkCodeThemeId);
  const preferWordAlt = readWordAltLineDiff();

  const themeRegistration =
    colorScheme === "light"
      ? getCodeThemeRegistration(String(lightCodeThemeId), "light")
      : getCodeThemeRegistration(String(darkCodeThemeId), "dark");
  const themeName = String(
    (themeRegistration as { name?: string }).name ?? themeRegistration.id,
  );
  const lineDiffType: ShikiLineDiffType = preferWordAlt ? "word-alt" : "none";

  const poolOptions: ShikiPoolOptions = {
    workerFactory: createHighlightWorker,
    poolSize: DEFAULT_POOL_SIZE,
    totalASTLRUCacheSize: DEFAULT_AST_LRU_CACHE_SIZE,
  };
  const highlighterOptions: ShikiHighlighterOptions = {
    theme: themeName,
    lineDiffType,
    langs: DEFAULT_LANGS,
  };

  return (
    <ShikiHighlightPoolProvider
      poolOptions={poolOptions}
      highlighterOptions={highlighterOptions}
    >
      <ShikiRenderOptionsSync lineDiffType={lineDiffType} theme={themeName} />
      {children}
    </ShikiHighlightPoolProvider>
  );
}

/** Side-effect init retained for thin re-export chunk parity. */
export function ensureShikiHighlightProviderInit(): void {}
