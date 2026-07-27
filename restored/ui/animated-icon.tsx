// Restored from ref/webview/assets/animated-icon-ByhXbbK7.js
// DotLottie animated tool/status icons with SVG fallbacks and theme color tinting.
// Gap3 Ah/Ld/jH = ensure inits for AppIconkh / AppIconId / ImageFileIcon (already promoted).

import {
  Activity,
  Suspense,
  startTransition,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type RefCallback,
  type SVGProps,
} from "react";
import type { DotLottie, DotLottieWorker } from "@lottiefiles/dotlottie-web";
import type { LottieAnimationData } from "../animations/analyze-image-animation";
import { AppIconB } from "../icons/app-icon-b";
import { AppIconCct } from "../icons/app-icon-cct";
import { AppIconId } from "../icons/app-icon-id";
import { AppIconJtt } from "../icons/app-icon-jtt";
import { AppIconkh } from "../icons/app-icon-kh";
import { AppIconlm } from "../icons/app-icon-lm";
import { AppIconSR } from "../icons/app-icon-sr";
import { ImageFileIcon } from "../icons/image-file-icon";
import { TerminalFileIcon } from "../icons/terminal-file-icon";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import { cx } from "./cx";
import {
  DotLottieReact,
  DotLottieWorkerReact,
  setWasmUrl,
} from "../vendor/dotlottie-react";
const DOTLOTTIE_WASM_URL =
  "https://cdn.openai.com/common/wasm/dotlottie-player-017-13.wasm";
setWasmUrl(DOTLOTTIE_WASM_URL);
export type AnimatedIconName =
  | "analyze-image"
  | "automation"
  | "browsing"
  | "code-searching"
  | "codex-happy-small"
  | "codex-looking-around"
  | "edit-files"
  | "hello"
  | "loader"
  | "internal-knowledge"
  | "list-files"
  | "local-context"
  | "run-command"
  | "searching"
  | "to-do"
  | "web-search";
export type AnimatedIconSizeToken = "fill" | "xs" | "sm" | "md" | "lg";
export type AnimatedIconSize = AnimatedIconSizeToken | number;
export type AnimatedIconRenderer = "main" | "worker";
type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;
type AnimationLoaders = Record<
  AnimatedIconName,
  () => Promise<LottieAnimationData>
>;
type FallbackIcons = Record<AnimatedIconName, SvgIcon>;
type ResolvedAnimation = {
  animationJson: Promise<LottieAnimationData> | null;
  SvgFallback: SvgIcon | null;
};
type ColoredAnimation = {
  size: {
    width: number;
    height: number;
  };
  data: LottieAnimationData;
};
type RgbaTuple = [number, number, number, number];
const ANIMATION_LOADERS: AnimationLoaders = {
  "analyze-image": () =>
    import("../animations/analyze-image-animation").then((m) => m.default),
  automation: () =>
    import("../animations/automation-animation").then((m) => m.default),
  browsing: () =>
    import("../animations/browsing-animation").then((m) => m.default),
  "code-searching": () =>
    import("../animations/code-searching-animation").then((m) => m.default),
  "codex-happy-small": () =>
    import("../animations/codex-happy-small-animation").then((m) => m.default),
  "codex-looking-around": () =>
    import("../animations/codex-looking-around-animation").then(
      (m) => m.default,
    ),
  "edit-files": () =>
    import("../animations/edit-files-animation").then((m) => m.default),
  hello: () =>
    import("../animations/codex-hello-animation").then((m) => m.default),
  loader: () =>
    import("../animations/codex-thinking-loader-animation").then(
      (m) => m.default,
    ),
  "internal-knowledge": () =>
    import("../animations/internal-knowledge-animation").then((m) => m.default),
  "list-files": () =>
    import("../animations/list-files-animation").then((m) => m.default),
  "local-context": () =>
    import("../animations/local-context-animation").then((m) => m.default),
  "run-command": () =>
    import("../animations/run-command-animation").then((m) => m.default),
  searching: () =>
    import("../animations/searching-animation").then((m) => m.default),
  "to-do": () => import("../animations/to-do-animation").then((m) => m.default),
  "web-search": () =>
    import("../animations/web-search-animation").then((m) => m.default),
};
const FALLBACK_ICONS: FallbackIcons = {
  "analyze-image": ImageFileIcon,
  automation: AppIconCct,
  browsing: AppIconJtt,
  "code-searching": TerminalFileIcon,
  "codex-happy-small": AppIconSR,
  "codex-looking-around": AppIconSR,
  "edit-files": TerminalFileIcon,
  hello: AppIconkh,
  loader: AppIconSR,
  "internal-knowledge": AppIconId,
  "list-files": TerminalFileIcon,
  "local-context": AppIconB,
  "run-command": TerminalFileIcon,
  searching: AppIconB,
  "to-do": AppIconlm,
  "web-search": AppIconJtt,
};
const ANIMATED_SIZE_CLASS: Record<AnimatedIconSizeToken, string> = {
  fill: "h-full w-full",
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};
const FALLBACK_SIZE_CLASS: Record<AnimatedIconSizeToken, string> = {
  fill: "h-full w-full",
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};
let colorSampleCanvasContext: CanvasRenderingContext2D | null | undefined;
const resolvedColorCache = new Map<string, RgbaTuple | null>();
const themeColorListeners = new Set<() => void>();
let themeMutationObserver: MutationObserver | null = null;
function resolveAnimationSources(input: {
  animation?: AnimatedIconName;
  animationData?: LottieAnimationData;
  fallback?: SvgIcon;
}): ResolvedAnimation {
  const resolved: ResolvedAnimation = {
    animationJson: input.animationData
      ? Promise.resolve(input.animationData)
      : null,
    SvgFallback: input.fallback ?? null,
  };
  if (input.animation) {
    resolved.animationJson = ANIMATION_LOADERS[input.animation]();
    resolved.SvgFallback = FALLBACK_ICONS[input.animation];
  }
  return resolved;
}
function readElementCssColorAsRgba(element: Element): RgbaTuple | null {
  const color = getComputedStyle(element).color;
  if (!color) return null;
  if (colorSampleCanvasContext === undefined) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    colorSampleCanvasContext = canvas.getContext("2d", {
      willReadFrequently: true,
    });
  }
  if (!colorSampleCanvasContext) return null;
  colorSampleCanvasContext.clearRect(0, 0, 1, 1);
  colorSampleCanvasContext.fillStyle = color;
  colorSampleCanvasContext.fillRect(0, 0, 1, 1);
  return Array.from(
    colorSampleCanvasContext.getImageData(0, 0, 1, 1).data,
    (channel) => channel / 255,
  ) as RgbaTuple;
}
function resolveCssColorSample(
  kind: "color" | "tokenColor",
  value: string,
): RgbaTuple | null {
  const cacheKey = `${kind}:${value}`;
  const cached = resolvedColorCache.get(cacheKey);
  if (cached !== undefined) return cached;
  const probe = document.createElement("div");
  switch (kind) {
    case "color":
      probe.style.color = value;
      break;
    case "tokenColor":
      probe.className = value;
      break;
  }
  document.body.appendChild(probe);
  const sample = readElementCssColorAsRgba(probe);
  probe.remove();
  resolvedColorCache.set(cacheKey, sample);
  return sample;
}
function subscribeThemeColorChanges(onChange: () => void): () => void {
  themeColorListeners.add(onChange);
  if (!themeMutationObserver) {
    themeMutationObserver = new MutationObserver(() => {
      resolvedColorCache.clear();
      themeColorListeners.forEach((listener) => {
        listener();
      });
    });
    themeMutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }
  onChange();
  return () => {
    themeColorListeners.delete(onChange);
    if (themeColorListeners.size === 0) {
      themeMutationObserver?.disconnect();
      themeMutationObserver = null;
      resolvedColorCache.clear();
    }
  };
}
function tintLottieAnimationData(input: {
  animationData: LottieAnimationData;
  color: RgbaTuple | null;
}): ColoredAnimation {
  if (!input.color) {
    return {
      size: {
        width: input.animationData.w ?? 100,
        height: input.animationData.h ?? 100,
      },
      data: input.animationData,
    };
  }
  const cloned = structuredClone(input.animationData);
  const size =
    cloned?.w && cloned?.h
      ? {
          width: cloned.w,
          height: cloned.h,
        }
      : {
          width: 100,
          height: 100,
        };
  const tintShape = (shape: Record<string, unknown>): void => {
    if (
      (shape.ty === "fl" || shape.ty === "st") &&
      shape.c &&
      typeof shape.c === "object" &&
      shape.c !== null &&
      "k" in shape.c
    ) {
      (
        shape.c as {
          k: unknown;
        }
      ).k = input.color;
    }
    if (Array.isArray(shape.it)) {
      shape.it.forEach((child) => tintShape(child as Record<string, unknown>));
    }
  };
  const tintLayer = (layer: Record<string, unknown>): void => {
    if (layer.ty === 4 && Array.isArray(layer.shapes)) {
      layer.shapes.forEach((shape) =>
        tintShape(shape as Record<string, unknown>),
      );
    }
    if (Array.isArray(layer.layers)) {
      layer.layers.forEach((child) =>
        tintLayer(child as Record<string, unknown>),
      );
    }
  };
  if (Array.isArray(cloned.layers)) {
    cloned.layers.forEach((layer) =>
      tintLayer(layer as Record<string, unknown>),
    );
  }
  if (Array.isArray(cloned.assets)) {
    cloned.assets.forEach((asset) =>
      tintLayer(asset as Record<string, unknown>),
    );
  }
  return {
    size,
    data: cloned,
  };
}
export type AnimatedIconProps = {
  animation?: AnimatedIconName;
  animationData?: LottieAnimationData;
  fallbackSvg?: SvgIcon;
  animated?: boolean;
  size?: AnimatedIconSize;
  color?: string;
  tokenColor?: string;
  matchTextColor?: boolean;
  loop?: boolean;
  mainDotLottieRefCallback?: RefCallback<DotLottie | null>;
  renderer?: AnimatedIconRenderer;
  segment?: [number, number];
  showFallbackWhileLoading?: boolean;
  className?: string;
};
type DotLottiePlayerProps = {
  data?: LottieAnimationData;
  mainDotLottieRefCallback?: RefCallback<DotLottie | null>;
  dotLottieRefCallback?: RefCallback<DotLottieWorker | null>;
  loop?: boolean;
  renderer?: AnimatedIconRenderer;
  segment?: [number, number];
  renderConfig?: {
    autoResize?: boolean;
    freezeOnOffscreen?: boolean;
    quality?: number;
  };
  autoplay?: boolean;
  className?: string;
};
function DotLottiePlayer(props: DotLottiePlayerProps): ReactNode {
  const {
    dotLottieRefCallback,
    mainDotLottieRefCallback,
    renderer = "worker",
    ...rest
  } = props;
  if (renderer === "main") {
    return (
      <DotLottieReact
        {...rest}
        dotLottieRefCallback={mainDotLottieRefCallback}
      />
    );
  }
  return (
    <DotLottieWorkerReact
      {...rest}
      dotLottieRefCallback={dotLottieRefCallback}
    />
  );
}

/**
 * Bundle export `t` — animated DotLottie icon with SVG fallback.
 * Also re-exported as `AnimatedIcon` by `animated-icon-DheIHbIG`.
 */
export function AnimatedIcon(props: AnimatedIconProps): ReactElement {
  const {
    animation,
    animationData,
    fallbackSvg,
    animated = true,
    size = "md",
    color,
    tokenColor,
    matchTextColor = true,
    loop = true,
    mainDotLottieRefCallback,
    renderer = "worker",
    segment,
    showFallbackWhileLoading = true,
    className,
  } = props;
  const hostRef = useRef<HTMLDivElement | null>(null);
  const offscreenCanvasRef = useRef<OffscreenCanvas | null>(null);
  const [matchedColor, setMatchedColor] = useState<RgbaTuple | null>(null);
  const [rawAnimationData, setRawAnimationData] =
    useState<LottieAnimationData | null>(null);
  const [coloredAnimation, setColoredAnimation] =
    useState<ColoredAnimation | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { SvgFallback, animationJson } = resolveAnimationSources({
    animation,
    animationData,
    fallback: fallbackSvg,
  });
  const numericSizeStyle: CSSProperties =
    typeof size === "number"
      ? {
          width: size,
          height: size,
        }
      : {};
  const animatedSizeClass =
    typeof size === "number" ? "" : ANIMATED_SIZE_CLASS[size];
  const fallbackSizeClass =
    typeof size === "number" ? "" : FALLBACK_SIZE_CLASS[size];
  const hostClassName = cx(
    fallbackSizeClass,
    className,
    tokenColor,
    "flex items-center justify-center",
  );
  const hostStyle: CSSProperties =
    typeof size === "number" ? numericSizeStyle : {};
  useEffect(() => {
    if (!animationJson) return;
    const controller = new AbortController();
    void (async () => {
      const data = await animationJson;
      if (controller.signal.aborted) return;
      startTransition(() => {
        setRawAnimationData(data);
      });
    })();
    return () => {
      controller.abort();
    };
  }, [animationJson]);
  useEffect(() => {
    const publish = (next: RgbaTuple | null) => {
      const key = next?.join(",") ?? null;
      setMatchedColor((previous) => {
        const previousKey = previous?.join(",") ?? null;
        return previousKey === key ? previous : next;
      });
    };
    if (color) {
      return subscribeThemeColorChanges(() => {
        publish(resolveCssColorSample("color", color));
      });
    }
    if (tokenColor) {
      return subscribeThemeColorChanges(() => {
        publish(resolveCssColorSample("tokenColor", tokenColor));
      });
    }
    if (!matchTextColor || !hostRef.current) {
      publish(null);
      return;
    }
    const syncFromHost = () => {
      publish(
        hostRef.current ? readElementCssColorAsRgba(hostRef.current) : null,
      );
    };
    const unsubscribeTheme = subscribeThemeColorChanges(syncFromHost);
    const hostObserver = new MutationObserver(syncFromHost);
    hostObserver.observe(hostRef.current, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    return () => {
      unsubscribeTheme();
      hostObserver.disconnect();
    };
  }, [color, tokenColor, matchTextColor]);
  useEffect(() => {
    if (!rawAnimationData) return;
    startTransition(() => {
      setColoredAnimation(
        tintLottieAnimationData({
          animationData: rawAnimationData,
          color: matchedColor,
        }),
      );
    });
  }, [matchedColor, rawAnimationData]);
  const showFallback =
    prefersReducedMotion ||
    !animated ||
    (showFallbackWhileLoading && !coloredAnimation);
  let fallbackNode: ReactElement | null = null;
  if (!animated || showFallback) {
    if (!SvgFallback) {
      throw new Error(
        "Either provide 'fallbackSvg' prop or use an 'animation' type when animated=false",
      );
    }
    const fallbackStyle: CSSProperties | undefined = color
      ? {
          ...numericSizeStyle,
          filter:
            color === "white"
              ? "brightness(0) invert(1)"
              : `hue-rotate(${color})`,
        }
      : undefined;
    fallbackNode = (
      <div ref={hostRef} className={hostClassName} style={hostStyle}>
        <SvgFallback className="h-full w-full" style={fallbackStyle} />
      </div>
    );
    if (!animated) return fallbackNode;
  }
  if (!prefersReducedMotion && !coloredAnimation && !showFallbackWhileLoading) {
    return <div ref={hostRef} className={hostClassName} style={hostStyle} />;
  }
  const fallbackActivity = (
    <Activity mode={showFallback ? "visible" : "hidden"}>
      {fallbackNode}
    </Activity>
  );
  const playerClassName = cx(
    animatedSizeClass,
    "flex items-center justify-center",
  );
  const bindWorkerCanvas: RefCallback<DotLottieWorker | null> = (instance) => {
    if (
      !instance ||
      !coloredAnimation ||
      typeof OffscreenCanvas === "undefined"
    ) {
      return;
    }
    let canvas = offscreenCanvasRef.current;
    if (!canvas) {
      canvas = new OffscreenCanvas(
        coloredAnimation.size.width,
        coloredAnimation.size.height,
      );
      offscreenCanvasRef.current = canvas;
      const context = canvas.getContext("2d", {
        alpha: true,
        desynchronized: true,
        willReadFrequently: false,
      });
      if (context) {
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.globalCompositeOperation = "source-over";
      }
    }
    instance.setCanvas(canvas);
  };
  const player = (
    <Suspense fallback={fallbackNode}>
      <DotLottiePlayer
        data={coloredAnimation?.data}
        mainDotLottieRefCallback={mainDotLottieRefCallback}
        dotLottieRefCallback={bindWorkerCanvas}
        loop={loop}
        renderer={renderer}
        segment={segment}
        renderConfig={{
          autoResize: true,
          freezeOnOffscreen: true,
          quality: 20,
        }}
        autoplay={!prefersReducedMotion}
        className="pointer-events-none h-full w-full contain-[paint_style_layout_inline-size]"
      />
    </Suspense>
  );
  const animatedActivity = (
    <Activity mode={showFallback ? "hidden" : "visible"}>
      <div className={hostClassName} style={hostStyle}>
        <div className={playerClassName} style={numericSizeStyle}>
          {player}
        </div>
      </div>
    </Activity>
  );
  return (
    <>
      {fallbackActivity}
      {animatedActivity}
    </>
  );
}

/** Bundle export `n` — Rolldown ESM init for AnimatedIcon module locals. */
export function ensureAnimatedIconInit(): void {}
