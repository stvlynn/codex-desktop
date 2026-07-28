// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Fca` / export `kL` — Shiki highlighter pool + React context provider.
// Split out of `shiki-highlight-provider.tsx` so the settings-entangled wrapper
// chunk can import this without a circular IMPORT_MAP mapping.

import {
  createContext,
  useContext,
  useEffect,
  useInsertionEffect,
  useState,
  type ReactNode,
} from "react";

export type ShikiLineDiffType = "word-alt" | "none" | string;

export type ShikiPoolOptions = {
  workerFactory: () => Worker;
  poolSize: number;
  totalASTLRUCacheSize: number;
};

export type ShikiHighlighterOptions = {
  theme: string;
  lineDiffType: ShikiLineDiffType;
  langs: readonly string[];
};

export type ShikiHighlighterHandle = {
  setRenderOptions?: (options: {
    lineDiffType: ShikiLineDiffType;
    theme: string;
  }) => void;
} | null;

export type CreateShikiHighlighter = (args: {
  poolOptions: ShikiPoolOptions;
  highlighterOptions: ShikiHighlighterOptions;
}) => ShikiHighlighterHandle;

export type DisposeShikiHighlighters = () => void;

export const ShikiHighlightContext =
  createContext<ShikiHighlighterHandle>(null);

let createHighlighter: CreateShikiHighlighter | null = null;
let disposeAllHighlighters: DisposeShikiHighlighters | null = null;
let activeProviderCount = 0;

/** Bind the Pierre/Codex highlighter factory used by the pool provider. */
export function bindShikiHighlighterRuntime(args: {
  create: CreateShikiHighlighter;
  disposeAll: DisposeShikiHighlighters;
}): void {
  createHighlighter = args.create;
  disposeAllHighlighters = args.disposeAll;
}

export type ShikiHighlightPoolProviderProps = {
  children?: ReactNode;
  poolOptions: ShikiPoolOptions;
  highlighterOptions: ShikiHighlighterOptions;
};

/**
 * Bundle export `kL` / internal `Fca`.
 * Provides a shared highlighter handle to descendants via context.
 */
export function ShikiHighlightPoolProvider(
  props: ShikiHighlightPoolProviderProps,
): ReactNode {
  const { children, poolOptions, highlighterOptions } = props;
  const [highlighter] = useState<ShikiHighlighterHandle>(() => {
    if (typeof window === "undefined") return null;
    if (createHighlighter == null) return null;
    return createHighlighter({ poolOptions, highlighterOptions });
  });

  useInsertionEffect(() => {
    if (highlighter == null) return;
    activeProviderCount += 1;
    return () => {
      activeProviderCount -= 1;
    };
  }, [highlighter]);

  useEffect(
    () => () => {
      if (activeProviderCount === 0) {
        disposeAllHighlighters?.();
      }
    },
    [],
  );

  return (
    <ShikiHighlightContext.Provider value={highlighter}>
      {children}
    </ShikiHighlightContext.Provider>
  );
}

/** Alias matching app-initial export `kL` / public name `ShikiHighlightProvider`. */
export const ShikiHighlightProvider = ShikiHighlightPoolProvider;

/** Read the nearest highlighter handle (bundle `Ica` / export `jL`). */
export function useShikiHighlightContext(): ShikiHighlighterHandle {
  return useContext(ShikiHighlightContext);
}
