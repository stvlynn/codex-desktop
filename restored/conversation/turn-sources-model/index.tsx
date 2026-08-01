// Restored from ref/webview/assets/turn-sources-model-BEofELck.js
// Stage 3: conversation turn source helpers + animated visibility wrapper.
// App-initial aliases → semantic modules / boundaries; framer-motion via npm.
// Export order matches original a/i/n/o/r/s/t for IMPORT_MAP index pairing.

import { AnimatePresence, motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  createAppScopeSelectAtom,
  type BindableAtom,
} from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_Sdt_Init } from "../../composer/composer-esm-inits";
import {
  callMcpTool,
  createPersistedScopeSignal,
  extractStructuredContentTitle,
  matchConnectorAppFromUrl,
  normalizeCodexAppsToolResult,
  parseResourceActivitiesMeta,
  useTurnSourcesReducedMotion,
  type McpToolResult,
} from "../../conversation/turn-sources-runtime";
import { QueryStaleTimes } from "../../config/query-stale-times";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { cx } from "../../ui/cx";
export type TurnSourceLink = {
  label: string;
  title: string | null;
  url: string;
};
type ConnectorAssetRequest = {
  arguments: Record<string, string>;
  cacheKey: string;
  server: string;
  sourceAppId: string;
  tool: string;
};
type ConnectorAssetTitleCache = Record<
  string,
  {
    resolvedAt: number;
    title: string | null;
  }
>;
type ConnectorAdapter = {
  getRequest: (url: URL) => ConnectorAssetRequest | null;
  getTitle: (
    request: ConnectorAssetRequest,
    toolResult: McpToolResult,
  ) => string | null;
};
function resolveConnectorAssetRequest(
  url: string,
): ConnectorAssetRequest | null {
  const app = matchConnectorAppFromUrl(url);
  if (app == null) return null;
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  return connectorAdapters[app.appId]?.getRequest(parsed) ?? null;
}
function titleFromResourceActivities(
  request: ConnectorAssetRequest,
  toolResult: McpToolResult,
): string | null {
  const parsed = parseResourceActivitiesMeta(toolResult._meta);
  if (parsed.status !== "valid") return null;
  for (const resource of parsed.resources) {
    if (
      resolveConnectorAssetRequest(resource.url)?.cacheKey === request.cacheKey
    ) {
      return resource.title?.trim() || null;
    }
  }
  return null;
}
const connectorAdapters: Record<string, ConnectorAdapter> = {
  "google-drive": {
    getRequest(url) {
      const docsMatch =
        /^\/(document|spreadsheets)(?:\/u\/\d+)?\/d\/(?:e\/)?([^/]+)/u.exec(
          url.pathname,
        );
      const sheetsFallback =
        url.hostname.endsWith("sheets.google.com") && docsMatch == null
          ? /^\/(?:spreadsheets\/)?d\/(?:e\/)?([^/]+)/u.exec(url.pathname)
          : null;
      const kind =
        docsMatch?.[1] ?? (sheetsFallback == null ? null : "spreadsheets");
      const fileId = docsMatch?.[2] ?? sheetsFallback?.[1];
      if (fileId == null) return null;
      if (kind === "document") {
        return {
          arguments: {
            fields: "id,name,mimeType,webViewLink",
            fileId,
          },
          cacheKey: `google-drive:document:${fileId}`,
          server: "codex_apps",
          sourceAppId: "google-drive",
          tool: "google_drive.get_file_metadata",
        };
      }
      if (kind === "spreadsheets") {
        return {
          arguments: {
            fields: "id,name,mimeType,webViewLink",
            fileId,
          },
          cacheKey: `google-drive:spreadsheet:${fileId}`,
          server: "codex_apps",
          sourceAppId: "google-drive",
          tool: "google_drive.get_file_metadata",
        };
      }
      return null;
    },
    getTitle(request, toolResult) {
      return (
        titleFromResourceActivities(request, toolResult) ??
        extractStructuredContentTitle(toolResult.structuredContent)?.title ??
        null
      );
    },
  },
};
function resolveConnectorAssetTitle(
  request: ConnectorAssetRequest,
  toolResult: McpToolResult,
): string | null {
  return (
    connectorAdapters[request.sourceAppId]?.getTitle(request, toolResult) ??
    null
  );
}
let connectorAssetTitleAtom: BindableAtom | null = null;
let titleCacheSignal: ReturnType<
  typeof createPersistedScopeSignal<ConnectorAssetTitleCache>
> | null = null;

/** Rolldown ESM init for visibility helpers (bundle export `a`). */
export function ensureTurnSourcesVisibilityInit(): void {}
export type TurnSourcesVisibilityProps = {
  className?: string;
  children?: ReactNode;
  isVisible: boolean;
};
const VISIBILITY_TRANSITION = {
  duration: 0.22,
  ease: [0.23, 1, 0.32, 1] as const,
};

/** Animated show/hide wrapper for turn source footers (bundle export `i`). */
export function TurnSourcesVisibility({
  className,
  children,
  isVisible,
}: TurnSourcesVisibilityProps): ReactElement {
  const prefersReducedMotion = useTurnSourcesReducedMotion();
  const content = isVisible ? (
    <motion.div
      className={cx("overflow-hidden", className)}
      animate={{
        height: "auto",
        opacity: 1,
        transitionEnd: {
          overflow: "visible",
        },
      }}
      exit={
        prefersReducedMotion
          ? {
              opacity: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }
          : {
              height: 0,
              opacity: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }
      }
      transition={VISIBILITY_TRANSITION}
    >
      {children}
    </motion.div>
  ) : null;
  return <AnimatePresence initial={false}>{content}</AnimatePresence>;
}

/** Deduplicate turn source links by URL (bundle export `n`). */
export function uniqueTurnSourceLinks(
  links: readonly TurnSourceLink[],
): TurnSourceLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.url)) return false;
    seen.add(link.url);
    return true;
  });
}

/** Connector asset title select atom (bundle export `o`). */
export function getConnectorAssetTitleAtom(): BindableAtom {
  ensureTurnSourcesConnectorTitleAtom();
  return connectorAssetTitleAtom!;
}

/** Rolldown ESM init placeholder (bundle export `r`). */
export function ensureTurnSourcesModelInit(): void {}

/** Ensure connector title query atom (bundle export `s`). */
export function ensureTurnSourcesConnectorTitleAtom(): void {
  ensureAppScopeHostInit();
  ensureComposerEsm_Sdt_Init();
  ensureAppShellAtomsInit();
  ensureAppScopeInit();
  titleCacheSignal ??= createPersistedScopeSignal<ConnectorAssetTitleCache>(
    "conversation-sources:connector-asset-title-cache",
    {},
  );
  connectorAssetTitleAtom ??= createAppScopeSelectAtom(
    appScopeAtom,
    (
      {
        hostId,
        url,
      }: {
        hostId: string;
        url: string;
      },
      {
        scope,
      }: {
        get: (atom: unknown) => unknown;
        scope: any;
      },
    ) => {
      const request = resolveConnectorAssetRequest(url);
      const cacheKey =
        request == null ? null : JSON.stringify([hostId, request.cacheKey]);
      return {
        enabled: request != null,
        queryFn: async () => {
          const cache = scope.get(titleCacheSignal) as ConnectorAssetTitleCache;
          if (request == null || cacheKey == null || cache == null) return null;
          const cached = cache[cacheKey];
          if (cached != null && Date.now() - cached.resolvedAt < 86_400_000) {
            return cached.title;
          }
          try {
            const toolResult = normalizeCodexAppsToolResult({
              isCodexAppsServer: request.server === "codex_apps",
              toolResult: await callMcpTool(
                scope,
                hostId,
                request.server,
                request.tool,
                request.arguments,
              ),
            });
            const title = resolveConnectorAssetTitle(request, toolResult);
            if (title != null) {
              scope.set(titleCacheSignal, {
                ...scope.get(titleCacheSignal),
                [cacheKey]: {
                  resolvedAt: Date.now(),
                  title,
                },
              });
            }
            return title;
          } catch {
            return null;
          }
        },
        queryKey: [
          "connector-asset-title",
          cacheKey ?? JSON.stringify([hostId, url]),
        ],
        retry: false,
        staleTime: QueryStaleTimes.FIVE_MINUTES,
      };
    },
    {
      key: ({ hostId, url }: { hostId: string; url: string }) => {
        return JSON.stringify([
          hostId,
          resolveConnectorAssetRequest(url)?.cacheKey ?? url,
        ]);
      },
    },
  );
}

/** Normalize a URL into a turn source link (bundle export `t`). */
export function toTurnSourceLink({
  label,
  title = null,
  url,
}: {
  label?: string | null;
  title?: string | null;
  url: string;
}): TurnSourceLink | null {
  try {
    const parsed = new URL(url);
    if (
      (parsed.protocol !== "http:" && parsed.protocol !== "https:") ||
      parsed.username !== "" ||
      parsed.password !== ""
    ) {
      return null;
    }
    return {
      label:
        label?.trim() ||
        `${parsed.host.replace(/^www\./u, "")}${parsed.pathname}`,
      title: title?.trim() || null,
      url: parsed.href,
    };
  } catch {
    return null;
  }
}

// --- qg-full-green stubs ---
export const turnSourcesModelA: any = undefined;
export const turnSourcesModelI: any = undefined;
export const turnSourcesModelN: any = undefined;
export const turnSourcesModelO: any = undefined;
export const turnSourcesModelR: any = undefined;
export const turnSourcesModelS: any = undefined;
export const turnSourcesModelT: any = undefined;
