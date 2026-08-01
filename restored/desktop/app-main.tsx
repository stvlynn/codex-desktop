// Restored from ref/webview/assets/app-main-Co92ANiN.js
// Electron desktop bootstrap: DOM chrome attrs, lifecycle listeners, React root render.

import {
  StrictMode,
  type ComponentType,
  type ReactElement,
  type ReactNode,
} from "react";
import { createRoot, type Root } from "react-dom/client";
import { disposeArtifactPreviewSpans } from "../artifact/artifact-preview-span-tracker";
import { ensureComposerEsm_udt_Init } from "../composer/composer-esm-inits";
import { ensurePersistedAtomStoreInit } from "../boundaries/persisted-atom-store";
import { jsxRuntime, react } from "../boundaries/react-cjs-runtime";
import { bindMcpServerElicitation } from "../conversation/mcp-server-elicitation";
import { superseded } from "../conversation/superseded";
import { bindThreadNavigation } from "../conversation/thread-navigation";
import { appLogger } from "../logging/app-logger";
import { bindBindInitialRoute2 } from "../navigation/initial-route2-2";
import { bindBindInitialRoute3 } from "../navigation/initial-route3";
import {
  ensureHostMessageBusInit,
  hostMessageBus,
} from "../navigation/host-message-bus";
import { isCurrentSpecialWindowRoute } from "../navigation/is-special-window-route";
import {
  routeSurfaceFromPath,
  type RouteSurface,
} from "../navigation/route-surface-from-path";
import { bindDesktopAppStart } from "../plugins/desktop-app-start";
import { initAppSideEffect } from "../runtime/app-side-effect";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { esmInit, toEsm } from "../runtime/rolldown-runtime";
import { bindDeferredUiN } from "../ui/deferred-ui-n";
import { deferredW1 } from "../ui/deferred-w1";
import { installing } from "../ui/installing";
import { language } from "../ui/language";
import { PageLoadingState } from "../ui/page-loading-state";
import { noopPlaceholderExport } from "../utils/noop-placeholder-export";
import {
  detectNavigatorPlatformId,
  ensureAppMainDollar1Init,
  ensureAppMainEftInit,
  ensureAppMainI9Init,
  resolveElectronChromeMode,
} from "../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhLowerInit } from "../utils/wave-av-gap-ensure-inits";
import { bindBindDesktopWorkspaceDiscovery } from "./desktop-workspace-discovery";
import { ensureSentryDesktopTraceInit } from "./ensure-sentry-desktop-trace-init";
import { flushPendingCpuSamplingSpans } from "./flush-pending-cpu-sampling-spans";
import { initDesktopSentryTracing } from "./init-desktop-sentry-tracing";
import { initializeAppHostServices } from "./rpc";

type BootFn = () => void | Promise<void>;
type ElectronBridge = { getPreloadStartedAtMs?: () => number | undefined };
type CodexWindow = Window & {
  electronBridge?: ElectronBridge;
  __codexRoot?: Root;
};
type AppStartLoadTracker = {
  start: (
    surface: RouteSurface,
    startedAtMs: number,
    requiresSidebar?: boolean,
  ) => void;
  dispose: () => void;
};
type ErrorBoundaryProps = {
  name: string;
  fallback: ReactNode;
  children?: ReactNode;
};

/** Bundle `FL`/`cia` — initial route from meta tag or `initialRoute` query. */
function readInitialRouteOverride(): string | null {
  const meta = document.querySelector('meta[name="initial-route"]');
  const fromMeta = meta?.getAttribute("content")?.trim();
  if (fromMeta) return fromMeta;
  const fromQuery = new URL(window.location.href).searchParams.get(
    "initialRoute",
  );
  return fromQuery ? fromQuery.trim() : null;
}

/**
 * Bundle `vh`/`U$` — app_start load tracker (start/dispose only).
 * Full mark* API stays with deferred hosts until telemetry peers bind.
 */
const appStartLoadTracker: AppStartLoadTracker = {
  start(surface, _startedAtMs, _requiresSidebar = true) {
    void surface;
  },
  dispose() {},
};

function safeInit(label: string, run: () => void): void {
  try {
    run();
  } catch (error) {
    appLogger.debug(`[app-main] skipped init ${label}`, {
      safe: { message: String(error) },
    });
  }
}

function DefaultAppRoot(): ReactElement {
  return <PageLoadingState debugName="app-main-root" />;
}

function DefaultErrorBoundary({
  name,
  fallback,
  children,
}: ErrorBoundaryProps): ReactElement {
  void name;
  return <>{children ?? fallback}</>;
}

let bootImpl: BootFn | null = null;
const AppRoot: ComponentType = DefaultAppRoot;
const AppErrorBoundary: ComponentType<ErrorBoundaryProps> =
  DefaultErrorBoundary;
let reactRoot: Root | null = null;

/** Wire a custom boot implementation (test/harness override). */
export function bindAppMain(next: BootFn): void {
  bootImpl = next;
}

/** Render path: Sentry warm → app_start span → host services → React root. */
export async function runAppMain(): Promise<void> {
  if (bootImpl != null) {
    await bootImpl();
    return;
  }

  // Entry calls runAppMain without ensure*; create the root first.
  ensureAppMainInit();

  safeInit("initDesktopSentryTracing", () => {
    initDesktopSentryTracing();
  });

  const initialSurface = routeSurfaceFromPath(
    readInitialRouteOverride() ?? window.location.pathname,
  );
  const preloadStartedAtMs =
    (window as CodexWindow).electronBridge?.getPreloadStartedAtMs?.() ??
    performance.timeOrigin;
  if (initialSurface != null) {
    appStartLoadTracker.start(initialSurface, preloadStartedAtMs, true);
  }

  await initializeAppHostServices();
  ensureAppMainI9Init();
  flushPendingCpuSamplingSpans();
  appLogger.info("[statsig-refresh-diagnostics] React root render requested", {
    safe: { windowType: "electron" },
  });

  if (reactRoot == null) throw new Error("Root container not found");
  void jsxRuntime();
  reactRoot.render(
    <StrictMode>
      <AppErrorBoundary name="App" fallback={<PageLoadingState />}>
        <AppRoot />
      </AppErrorBoundary>
    </StrictMode>,
  );
}

/** Rolldown ESM init — DOM chrome, lifecycle listeners, React root create. */
export const ensureAppMainInit = esmInit(() => {
  void toEsm(react(), true);

  safeInit("language", () => language());
  safeInit("InitialRoute3", () => bindBindInitialRoute3());
  safeInit("deferredW1", () => deferredW1());
  safeInit("mcpServerElicitation", () => bindMcpServerElicitation());
  ensureSentryDesktopTraceInit();
  safeInit("deferredUiN", () => bindDeferredUiN());
  safeInit("InitialRoute2", () => bindBindInitialRoute2());
  ensureHostMessageBusInit();
  ensureNewThreadBhLowerInit();
  safeInit("desktopAppStart", () => bindDesktopAppStart());
  safeInit("threadNavigation", () => bindThreadNavigation());
  safeInit("superseded", () => superseded());
  safeInit("DesktopWorkspaceDiscovery", () =>
    bindBindDesktopWorkspaceDiscovery(),
  );
  ensureDynamicScriptLoadInit();
  safeInit("installing", () => installing());
  ensureComposerEsm_udt_Init();
  ensurePersistedAtomStoreInit();
  initAppSideEffect();
  ensureAppMainDollar1Init();
  safeInit("noopPlaceholderExport", () => noopPlaceholderExport());

  const searchParams = new URL(window.location.href).searchParams;
  const platformId = detectNavigatorPlatformId();
  const isCompactWindow = isCurrentSpecialWindowRoute();

  window.addEventListener("pagehide", () => {
    ensureAppMainI9Init();
    ensureAppMainEftInit();
    appStartLoadTracker.dispose();
    safeInit("disposeArtifactPreviewSpans", () =>
      disposeArtifactPreviewSpans(),
    );
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      ensureAppMainI9Init();
      ensureAppMainEftInit();
    }
  });

  document.documentElement.dataset.codexWindowType = "electron";
  document.documentElement.dataset.windowType = "electron";
  document.documentElement.dataset.codexOs = platformId;
  document.documentElement.dataset.codexWindowChrome =
    resolveElectronChromeMode("electron", platformId);
  if (searchParams.get("mcpAppSandboxDevtools") === "1") {
    document.documentElement.dataset.mcpAppSandboxDevtools = "true";
  }
  if (isCompactWindow) {
    document.documentElement.classList.add("compact-window");
  }

  window.addEventListener("error", (event: ErrorEvent) => {
    const message =
      event.error?.stack ??
      event.error?.message ??
      event.message ??
      "Unknown error";
    hostMessageBus.dispatchMessage("log-message", {
      level: "error",
      message: `[desktop-notifications][global-error] ${String(message)}`,
    });
  });
  window.addEventListener(
    "unhandledrejection",
    (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        typeof reason === "object" && reason != null
          ? ((reason as { stack?: string; message?: string }).stack ??
            (reason as { message?: string }).message ??
            JSON.stringify(reason))
          : String(reason);
      hostMessageBus.dispatchMessage("log-message", {
        level: "error",
        message: `[desktop-notifications][unhandled-rejection] ${message}`,
      });
    },
  );

  const rootElement = document.getElementById("root");
  if (rootElement == null) throw new Error("Root container not found");
  const codexWindow = window as CodexWindow;
  codexWindow.__codexRoot ||= createRoot(rootElement);
  reactRoot = codexWindow.__codexRoot;
});
