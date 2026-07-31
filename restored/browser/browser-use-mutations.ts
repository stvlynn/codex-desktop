// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser-use mutations, origin-state atom, open-link target, profile import
// (exports AO, FO, PO, jO, NO, OO, kO, W0, U0, vk, _k).

import { useMutation } from "../hooks/use-mutation";

export type BrowserUseMutationPeers = {
  /** Host RPC invoke. Bundle `rp` / `Bf`. */
  invokeHost: (
    method: string,
    args?: Record<string, unknown>,
  ) => Promise<unknown>;
  /** Invalidate / refresh query helper. Bundle `vE`. */
  refreshQuery: (queryKey: unknown) => Promise<unknown> | unknown;
  /** Query client. Bundle `rt`. */
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown }) => Promise<unknown>;
  };
  /** Origin-state query key. Bundle `Cq` / `$f('browser-use-origin-state-read')`. */
  originStateQueryKey: unknown;
  /** Create scoped query atom. Bundle `ep(Q, key, opts)`. */
  createOriginStateQueryAtom: (
    key: string,
    opts: { staleTime: number },
  ) => unknown;
  /** Five-second stale window. Bundle `Hf.FIVE_SECONDS`. */
  fiveSecondsMs: number;
  /** Update origin rules. Bundle `FFo`. */
  updateOriginRules: (input: unknown) => Promise<unknown>;
  /** Origin-rules helper mutation. Bundle `zFo`. */
  updateOriginRulesHelper: (input: unknown) => Promise<unknown>;
  /** Approval mode mutation. Bundle `LFo`. */
  updateApprovalMode: (input: unknown) => Promise<unknown>;
  /** Clear host browser-use state. Bundle `jFo`. */
  clearHostState: (input: unknown) => Promise<unknown>;
  /** Error logger. Bundle `Wf.error`. */
  logError: (
    message: string,
    detail: { safe: Record<string, unknown>; sensitive: Record<string, unknown> },
  ) => void;
  /** Open-link preference reader. Bundle `AQe(IEe.openLinkInTargetPreference)`. */
  readOpenLinkPreference: () => string | null | undefined;
  /** Force-external override. Bundle `jQe`. */
  shouldForceExternalBrowser: () => boolean;
  /** Desktop default destination atom. Bundle `Brr`. */
  defaultDestinationAtom: unknown;
  /** Read atom. Bundle `Y`. */
  readAtom: <T>(atom: unknown) => T;
  /** External browser destination token. Bundle `Rrr`. */
  externalBrowserDestination: string;
  /** Profile-import already-open probe. Bundle `_Er`. */
  isProfileImportOpen: (scope: unknown, token: unknown) => boolean;
  /** Profile-import open token. Bundle `EEo`. */
  profileImportToken: unknown;
  /** Telemetry before open. Bundle `rEo`. */
  trackProfileImportOpened: (
    scope: unknown,
    entryPoint: unknown,
    flowId: string,
  ) => void;
  /** Open profile-import overlay. Bundle `Wk`. */
  openProfileImportOverlay: (
    scope: unknown,
    token: unknown,
    payload: { entryPoint: unknown; flowId: string; service: unknown },
  ) => void;
};

let peers: BrowserUseMutationPeers | null = null;

export function setBrowserUseMutationPeers(
  next: BrowserUseMutationPeers,
): void {
  peers = next;
}

function requirePeers(): BrowserUseMutationPeers {
  if (peers == null) {
    throw new Error("browser-use mutation peers are not configured");
  }
  return peers;
}

async function clearBrowserBrowsingData(
  dataTypes: unknown,
): Promise<unknown> {
  const p = requirePeers();
  try {
    return await p.invokeHost("browser-browsing-data-clear", {
      params: { dataTypes },
    });
  } catch (error) {
    p.logError("Failed to clear browser browsing data", {
      safe: { error: String(error) },
      sensitive: {},
    });
    throw error;
  }
}

/** Bundle `MFo` / export `AO`. */
export function useClearBrowserBrowsingDataMutation(): unknown {
  return useMutation({ mutationFn: clearBrowserBrowsingData }, undefined);
}

/** Bundle `PFo` / export `FO`. */
export function useUpdateBrowserUseOriginRulesMutation(): unknown {
  const p = requirePeers();
  const refresh = p.refreshQuery;
  return useMutation(
    {
      mutationFn: p.updateOriginRules,
      scope: { id: "browser-use-origin-rules" },
      onSuccess: async () => {
        await refresh(p.originStateQueryKey);
      },
      onError: (error: unknown) => {
        p.logError("Failed to update browser-use origin rules", {
          safe: {},
          sensitive: { error: String(error) },
        });
        void refresh(p.originStateQueryKey);
      },
    },
    undefined,
  );
}

/** Bundle `RFo` / export `PO`. */
export function useBrowserUseOriginRulesHelperMutation(): unknown {
  const p = requirePeers();
  const queryClient = p.useQueryClient();
  return useMutation(
    {
      mutationFn: p.updateOriginRulesHelper,
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: p.originStateQueryKey,
        });
      },
      onError: (error: unknown) => {
        p.logError("Failed to update browser-use history approval mode", {
          safe: { error: String(error) },
          sensitive: {},
        });
        void queryClient.invalidateQueries({
          queryKey: p.originStateQueryKey,
        });
      },
    },
    undefined,
  );
}

/** Bundle `IFo` / export `jO`. */
export function useUpdateBrowserUseApprovalModeMutation(): unknown {
  const p = requirePeers();
  const queryClient = p.useQueryClient();
  return useMutation(
    {
      mutationFn: p.updateApprovalMode,
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: p.originStateQueryKey,
        });
      },
      onError: (error: unknown) => {
        p.logError("Failed to update browser-use approval mode", {
          safe: { error: String(error) },
          sensitive: {},
        });
        void queryClient.invalidateQueries({
          queryKey: p.originStateQueryKey,
        });
      },
    },
    undefined,
  );
}

export type UseClearBrowserUseHostStateMutationArgs = {
  hostId: string;
};

/** Bundle `AFo` / export `NO`. */
export function useClearBrowserUseHostStateMutation(
  args: UseClearBrowserUseHostStateMutationArgs,
): unknown {
  const p = requirePeers();
  const refresh = p.refreshQuery;
  const onSuccess = async () => {
    await Promise.all([
      refresh(p.originStateQueryKey),
      p.invokeHost("clear-prewarmed-threads-for-host", {
        hostId: args.hostId,
      }),
    ]);
  };
  const onError = (error: unknown) => {
    p.logError("Failed to update Browser Use full CDP access", {
      safe: {},
      sensitive: { error: String(error) },
    });
    void refresh(p.originStateQueryKey);
  };
  return useMutation(
    {
      mutationFn: p.clearHostState,
      onSuccess,
      onError,
    },
    undefined,
  );
}

/**
 * Bundle `HFo` / export `OO` — query atom for browser-use origin state.
 * Created once peers are wired; otherwise a lazy factory.
 */
export function browserUseOriginStateQueryAtom(): unknown {
  const p = requirePeers();
  return p.createOriginStateQueryAtom("browser-use-origin-state-read", {
    staleTime: p.fiveSecondsMs,
  });
}

/** Bundle `UFo` / export `kO` — ESM init retained as no-op. */
export function ensureBrowserUseOriginStateQueryInit(): void {}

/** Bundle `jrr` / export `W0`. */
export function useResolvedOpenLinkTarget(): string {
  const p = requirePeers();
  const preference = p.readOpenLinkPreference();
  const forceExternal = p.shouldForceExternalBrowser();
  const desktopDefault = p.readAtom<string | null | undefined>(
    p.defaultDestinationAtom,
  );
  if (forceExternal) return p.externalBrowserDestination;
  return preference ?? desktopDefault ?? p.externalBrowserDestination;
}

/** Bundle `Vrr` / export `U0` — ESM init retained as no-op. */
export function ensureOpenLinkTargetHelpersInit(): void {}

/**
 * Bundle `OEo` / export `vk` — open the browser-profile-import overlay.
 * Returns true when the flow was already open or newly opened.
 */
export function openBrowserProfileImport(
  scope: unknown,
  service: unknown,
  entryPoint: unknown,
): boolean {
  const p = requirePeers();
  if (service == null) return false;
  if (p.isProfileImportOpen(scope, p.profileImportToken)) return true;
  const flowId = crypto.randomUUID();
  p.trackProfileImportOpened(scope, entryPoint, flowId);
  p.openProfileImportOverlay(scope, p.profileImportToken, {
    entryPoint,
    flowId,
    service,
  });
  return true;
}

/** Bundle `kEo` / export `_k` — ESM init retained as no-op. */
export function ensureBrowserProfileImportHelpersInit(): void {}
