// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// CJS / ESM interop for react-redux + use-sync-external-store/with-selector.
// npm-shim: stock packages via vendor/*-runtime leaves.
// Bundle: kuc/If≈with-selector thunk, $jc/Mf≈Provider, eMc/Nf≈ensure init.

import { useSyncExternalStoreWithSelector as useSyncExternalStoreWithSelectorImpl } from "../vendor/use-sync-external-store-selector-runtime";

export {
  Provider,
  ensureReactReduxInit,
} from "../vendor/react-redux-provider-runtime";

type WithSelectorModule = {
  useSyncExternalStoreWithSelector: typeof useSyncExternalStoreWithSelectorImpl;
};

/** Bundle `kuc` / export `If`. */
export function useSyncExternalStoreWithSelector(): WithSelectorModule {
  return {
    useSyncExternalStoreWithSelector: useSyncExternalStoreWithSelectorImpl,
  };
}
