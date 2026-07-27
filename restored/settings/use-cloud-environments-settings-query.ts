// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Ra`) / export `evt`.

export type UseCloudEnvironmentsSettingsQueryPeers = {
  createCachedMutationSignal: (
    debugLabel: "cached",
    scope: unknown,
    factory: (scope: unknown, get: unknown) => unknown,
    register: (scope: unknown, signal: unknown) => void,
  ) => unknown;
  buildMutationOptions: (
    scope: unknown,
    get: unknown,
  ) => {
    meta?: unknown;
    mutationKey?: unknown;
    onMutate?: (...args: unknown[]) => unknown;
    mutationFn?: (...args: unknown[]) => Promise<unknown>;
    onError?: (...args: unknown[]) => unknown;
    onSuccess?: (...args: unknown[]) => unknown;
    onSettled?: (...args: unknown[]) => unknown;
  };
  createAtom: (initial: unknown) => unknown;
  deriveAtom: (reader: (get: (atom: unknown) => unknown) => unknown) => unknown;
  registerDebug: (
    signal: unknown,
    scope: unknown,
    kind: "mutation",
    options: { debugLabel: unknown },
  ) => void;
};

let peers: UseCloudEnvironmentsSettingsQueryPeers | null = null;

/** Wire useCloudEnvironmentsSettingsQuery peers once companions land. */
export function setUseCloudEnvironmentsSettingsQueryPeers(
  next: UseCloudEnvironmentsSettingsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `evt` / internal `Ra`.
 * Create a cached mutation-signal scope for cloud environment settings.
 */
export function useCloudEnvironmentsSettingsQuery(
  scope: unknown,
  _unused?: unknown,
): unknown {
  if (peers == null) {
    throw new Error(
      "UseCloudEnvironmentsSettingsQuery peers are not configured",
    );
  }
  void _unused;
  return peers.createCachedMutationSignal(
    "cached",
    scope,
    (innerScope, get) => {
      const scoped = innerScope as {
        queryClient?: {
          /* QueryClient */
        };
        store: {
          set: (atom: unknown, value: unknown) => void;
        };
      };
      if (scoped.queryClient == null) {
        throw new Error("mutationSignal requires a QueryClient on Scope");
      }
      const statusAtom = peers!.createAtom({
        data: undefined,
        error: null,
        status: "idle",
        variables: undefined,
      });
      let generation = 0;
      return peers!.deriveAtom((read) => {
        const status = read(statusAtom) as {
          data: unknown;
          error: unknown;
          status: string;
          variables: unknown;
        };
        const mutateAsync = async (
          variables: unknown,
          callbacks?: Record<
            string,
            ((...args: unknown[]) => unknown) | undefined
          >,
        ) => {
          const options = peers!.buildMutationOptions(get, innerScope);
          const context = {
            client: scoped.queryClient,
            meta: options.meta,
            mutationKey: options.mutationKey,
          };
          const gen = ++generation;
          scoped.store.set(statusAtom, {
            data: undefined,
            error: null,
            status: "pending",
            variables,
          });
          let contextValue: unknown;
          let data: unknown;
          try {
            contextValue = await options.onMutate?.(variables, context);
            data = await options.mutationFn?.(variables, context);
          } catch (error) {
            if (gen === generation) {
              scoped.store.set(statusAtom, {
                data: undefined,
                error,
                status: "error",
                variables,
              });
            }
            await options.onError?.(error, variables, contextValue, context);
            await options.onSettled?.(
              undefined,
              error,
              variables,
              contextValue,
              context,
            );
            callbacks?.onError?.(error, variables, contextValue, context);
            callbacks?.onSettled?.(
              undefined,
              error,
              variables,
              contextValue,
              context,
            );
            throw error;
          }
          if (gen === generation) {
            scoped.store.set(statusAtom, {
              data,
              error: null,
              status: "success",
              variables,
            });
          }
          await options.onSuccess?.(data, variables, contextValue, context);
          await options.onSettled?.(
            data,
            null,
            variables,
            contextValue,
            context,
          );
          callbacks?.onSuccess?.(data, variables, contextValue, context);
          callbacks?.onSettled?.(data, null, variables, contextValue, context);
          return data;
        };
        return {
          ...status,
          isError: status.status === "error",
          isIdle: status.status === "idle",
          isPending: status.status === "pending",
          isSuccess: status.status === "success",
          mutate: (variables: unknown, callbacks?: Record<string, unknown>) => {
            mutateAsync(variables, callbacks as never).catch(() => {});
          },
          mutateAsync,
        };
      });
    },
    (innerScope, signal) => {
      peers!.registerDebug(signal, innerScope, "mutation", {
        debugLabel: "cached",
      });
    },
  );
}
