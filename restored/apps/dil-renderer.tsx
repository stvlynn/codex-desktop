// Restored from ref/webview/assets/dist-Cvr7hdiT.js
// Stage 3: DILRenderer (custom element `dil-renderer`) — NOT cmdk.
// Gmt/Wmt → vite preload helpers; Ivt/Lvt/jvt → react; register-* faced via
// boundaries/dil-register.ts.

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
} from "react";

import { loadDilRegister } from "../boundaries/dil-register";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../runtime/vite-preload";

export type DilRendererWidget = unknown;
export type DilRendererTheme = unknown;
export type DilRendererAction = unknown;
export type DilImperativeApi = {
  setState: (state: DilRendererState) => void;
};

export type DilRendererState = {
  widget: DilRendererWidget;
  initialState?: unknown;
  theme?: DilRendererTheme;
  streaming?: boolean;
  mapboxAccessToken?: string;
  dir?: "ltr" | "rtl";
  customCss?: string;
};

export type DILRendererProps = {
  widget: DilRendererWidget;
  initialState?: unknown;
  theme?: DilRendererTheme;
  dir?: "ltr" | "rtl";
  mapboxAccessToken?: string;
  streaming?: boolean;
  className?: string;
  customCss?: string;
  onAction?: (action: DilRendererAction) => Promise<unknown>;
  onError?: (error: unknown) => void;
  onLoad?: (api: DilImperativeApi) => void;
  style?: CSSProperties;
};

type DilRendererElement = HTMLElement & {
  setState: (state: DilRendererState) => void;
  addEventListener: HTMLElement["addEventListener"];
};

let registerPromise: Promise<void> | null = null;

function ensureDilCustomElement(): Promise<void> {
  ensureViteModulepreloadRuntime();
  registerPromise ??= vitePreload(() => loadDilRegister()).then((api) => {
    api.registerTag();
  });
  return registerPromise;
}

/**
 * React host for the `dil-renderer` custom element (bundle export `DILRenderer`).
 * Dynamically registers the custom element via the faced DIL registry boundary.
 */
export function DILRenderer({
  widget,
  initialState,
  theme,
  dir,
  mapboxAccessToken,
  streaming,
  className,
  customCss,
  onAction,
  onError,
  onLoad,
  style,
}: DILRendererProps): ReactElement {
  const elementRef = useRef<DilRendererElement | null>(null);

  useEffect(() => {
    void ensureDilCustomElement();
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !onLoad) return;
    const controller = new AbortController();
    element.addEventListener(
      "dil.load",
      ((event: CustomEvent<{ imperativeApi: DilImperativeApi }>) => {
        onLoad(event.detail.imperativeApi);
      }) as EventListener,
      { signal: controller.signal },
    );
    return () => controller.abort();
  }, [onLoad]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !onAction) return;
    const controller = new AbortController();
    element.addEventListener(
      "dil.action",
      ((
        event: CustomEvent<{
          action: DilRendererAction;
          resolve: (value: unknown) => void;
          reject: (reason?: unknown) => void;
        }>,
      ) => {
        const { action, resolve, reject } = event.detail;
        onAction(action).then(resolve, reject);
      }) as EventListener,
      { signal: controller.signal },
    );
    return () => controller.abort();
  }, [onAction]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !onError) return;
    const controller = new AbortController();
    element.addEventListener(
      "dil.error",
      ((event: CustomEvent<{ error: unknown }>) => {
        onError(event.detail.error);
      }) as EventListener,
      { signal: controller.signal },
    );
    return () => controller.abort();
  }, [onError]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    void ensureDilCustomElement().then(() => {
      element.setState({
        widget,
        initialState,
        theme,
        streaming,
        mapboxAccessToken,
        dir,
        customCss,
      });
    });
  }, [
    widget,
    initialState,
    theme,
    streaming,
    mapboxAccessToken,
    dir,
    customCss,
  ]);

  return createElement("dil-renderer", {
    ref: elementRef,
    className,
    style,
  });
}
