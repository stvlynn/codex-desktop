// Restored from ref/webview/assets/chatgpt-desktop-auth-url-fs7WVkdZ.js
// ChatGPT desktop auth URL builders + login RPC helpers.
// Stage 3: hdt/mdt→desktop-host-request; u4/d4→app-info; flt→StableID; gr dropped.

import { ANALYTICS_CLIENT_TOKEN } from "../config/analytics-client-token";
import { LOCAL_HOST_ID } from "../hosts/local-host-id";
import { getAnalyticsStableId } from "../analytics/analytics-stable-id";
import {
  appInfoQueryAtom,
  ensureAppInfoQueryAtomInit,
} from "../desktop/app-info-query-atom";
import {
  desktopHostRequest,
  ensureDesktopHostRequestInit,
} from "../desktop/desktop-host-request";

ensureDesktopHostRequestInit();
ensureAppInfoQueryAtomInit();

const DESKTOP_AUTH_PATH = "/codex/desktop-auth";
const DESKTOP_AUTH_URL = `https://chatgpt.com${DESKTOP_AUTH_PATH}`;
const PARAM_CODEX_APP_VERSION = "codex_app_version";
const PARAM_CODEX_ORIGIN_STABLE_ID = "codex_origin_stable_id";
const PARAM_STREAMLINED = "codex_streamlined_login";
const PARAM_ALLOWED_WORKSPACE = "allowed_workspace_id";
const PARAM_CURRENT_WORKSPACE = "current_workspace_id";
const PARAM_LOGIN_HINT = "login_hint";
const PARAM_SOURCE_SURFACE = "source_surface_stable_id";

function forkAbortController(signal?: AbortSignal): AbortController {
  const controller = new AbortController();
  if (signal == null) return controller;
  if (signal.aborted) {
    controller.abort();
    return controller;
  }
  signal.addEventListener("abort", () => controller.abort(), { once: true });
  return controller;
}

/** Bundle export `o` — start ChatGPT login (local or remote host). */
export async function loginWithChatgpt(args: {
  appBrand?: string | null;
  hostId?: string;
  signal?: AbortSignal;
  useHostedLoginSuccessPage?: boolean;
  useStreamlinedLogin?: boolean;
}): Promise<unknown> {
  const {
    appBrand,
    hostId = LOCAL_HOST_ID,
    signal,
    useHostedLoginSuccessPage,
    useStreamlinedLogin,
  } = args;
  const abortController = forkAbortController(signal);
  if (hostId === "local") {
    return desktopHostRequest("login-with-chatgpt", {
      abortController,
      ...(useHostedLoginSuccessPage && appBrand != null ? { appBrand } : {}),
      useHostedLoginSuccessPage,
      useStreamlinedLogin,
    });
  }
  return desktopHostRequest("login-with-chatgpt-for-host", {
    abortController,
    hostId,
    ...(useHostedLoginSuccessPage && appBrand != null ? { appBrand } : {}),
    useHostedLoginSuccessPage,
    useStreamlinedLogin,
  });
}

/** Bundle export `a` — device-code login RPC. */
export function loginWithChatgptDeviceCode(
  args: {
    signal?: AbortSignal;
  } = {},
): Promise<unknown> {
  return desktopHostRequest("login-with-chatgpt-device-code", {
    abortController: forkAbortController(args.signal),
  });
}

/** Bundle export `i` — Rolldown ESM init. */
export function ensureChatgptDesktopAuthUrlInit(): void {
  ensureDesktopHostRequestInit();
}

type ScopeLike = {
  get: (atom: unknown) => { data?: { version?: string } | null };
};

/** Bundle export `n` — read codex app version from app-info query atom. */
export function getCodexAppVersionFromScope(scope: ScopeLike): string | undefined {
  return scope.get(appInfoQueryAtom()).data?.version;
}

function applyAuthParams(
  url: URL,
  allowedWorkspaceId?: string | null,
  codexAppVersion?: string | null,
  currentWorkspaceId?: string | null,
  loginHint?: string | null,
  sourceSurfaceStableId?: string | null,
  includeCodexOriginStableId?: boolean,
): void {
  if (allowedWorkspaceId) {
    url.searchParams.set(PARAM_ALLOWED_WORKSPACE, allowedWorkspaceId);
  }
  if (codexAppVersion) {
    url.searchParams.set(PARAM_CODEX_APP_VERSION, codexAppVersion);
  }
  if (currentWorkspaceId) {
    url.searchParams.set(PARAM_CURRENT_WORKSPACE, currentWorkspaceId);
  }
  if (loginHint) url.searchParams.set(PARAM_LOGIN_HINT, loginHint);
  if (sourceSurfaceStableId) {
    url.searchParams.set(PARAM_SOURCE_SURFACE, sourceSurfaceStableId);
    if (includeCodexOriginStableId) {
      url.searchParams.set(PARAM_CODEX_ORIGIN_STABLE_ID, sourceSurfaceStableId);
    }
  }
}

/**
 * Bundle export `t` — decorate a ChatGPT authorize URL for desktop auth.
 */
export function buildChatgptDesktopAuthUrl(args: {
  allowedWorkspaceId?: string | null;
  authUrl: string;
  codexAppVersion?: string | null;
  currentWorkspaceId?: string | null;
  loginHint?: string | null;
  sourceSurfaceStableId?: string;
  includeCodexOriginStableId?: boolean;
  useDesktopAuth?: boolean;
  useStreamlinedLoginUx?: boolean;
}): string {
  const {
    allowedWorkspaceId,
    authUrl,
    codexAppVersion,
    currentWorkspaceId,
    loginHint,
    sourceSurfaceStableId = getAnalyticsStableId().StableID.get(
      ANALYTICS_CLIENT_TOKEN,
    ),
    includeCodexOriginStableId = false,
    useDesktopAuth,
    useStreamlinedLoginUx,
  } = args;
  const hasExtras = !!(
    allowedWorkspaceId ||
    codexAppVersion ||
    currentWorkspaceId ||
    loginHint ||
    sourceSurfaceStableId
  );
  if (!hasExtras && !useDesktopAuth && !useStreamlinedLoginUx) return authUrl;
  try {
    const url = new URL(authUrl);
    if (url.pathname === DESKTOP_AUTH_PATH) {
      const authorize = url.searchParams.get("authorize_url");
      if (hasExtras && authorize) {
        const nested = new URL(authorize);
        applyAuthParams(
          nested,
          allowedWorkspaceId,
          codexAppVersion,
          currentWorkspaceId,
          loginHint,
          sourceSurfaceStableId,
          includeCodexOriginStableId,
        );
        url.searchParams.set("authorize_url", nested.toString());
      }
      if (useStreamlinedLoginUx)
        url.searchParams.set(PARAM_STREAMLINED, "true");
      return url.toString();
    }
    if (hasExtras) {
      applyAuthParams(
        url,
        allowedWorkspaceId,
        codexAppVersion,
        currentWorkspaceId,
        loginHint,
        sourceSurfaceStableId,
        includeCodexOriginStableId,
      );
    }
    if (useStreamlinedLoginUx) url.searchParams.set(PARAM_STREAMLINED, "true");
    if (!useDesktopAuth) return url.toString();
    const desktop = new URL(DESKTOP_AUTH_URL);
    desktop.searchParams.set("authorize_url", url.toString());
    if (useStreamlinedLoginUx) {
      desktop.searchParams.set(PARAM_STREAMLINED, "true");
    }
    return desktop.toString();
  } catch {
    return authUrl;
  }
}

/** Bundle export `r` — Rolldown ESM init for auth URL helpers. */
export function ensureBuildChatgptDesktopAuthUrlInit(): void {
  ensureAppInfoQueryAtomInit();
}
