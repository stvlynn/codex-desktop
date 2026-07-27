// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ut` — pure helper.

export type ResetFlag = {
  clearReset: () => void;
  reset: () => void;
  isReset: () => boolean;
};

/** Tiny resettable boolean flag controller. */
export function createResetFlag(): ResetFlag {
  let reset = false;
  return {
    clearReset: () => {
      reset = false;
    },
    reset: () => {
      reset = true;
    },
    isReset: () => reset,
  };
}
