// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// CJS / ESM interop for react-redux + use-sync-external-store/with-selector.
// Bundle: kuc/If≈with-selector thunk, $jc/Mf≈Provider, eMc/Nf≈ensure init.

import { Provider } from "react-redux";
import { useSyncExternalStoreWithSelector as useSyncExternalStoreWithSelectorImpl } from "use-sync-external-store/with-selector";

/** Bundle `$jc` / export `Mf` — React-Redux Provider (createElement type). */
export { Provider };

/** Bundle `eMc` / export `Nf`. */
export function ensureReactReduxInit(): void {}

type WithSelectorModule = {
  useSyncExternalStoreWithSelector: typeof useSyncExternalStoreWithSelectorImpl;
};

/** Bundle `kuc` / export `If`. */
export function useSyncExternalStoreWithSelector(): WithSelectorModule {
  return {
    useSyncExternalStoreWithSelector: useSyncExternalStoreWithSelectorImpl,
  };
}
