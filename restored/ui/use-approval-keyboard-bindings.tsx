// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yFs` / export `W_` — registers approve/decline hotkeys.

type HotkeyOptions = {
  enabled: boolean;
  keyboardHandler?: (event: KeyboardEvent) => boolean | void;
};

type RegisterHotkey = (
  id: string,
  handler: ((event: KeyboardEvent) => void) | undefined,
  options: HotkeyOptions,
) => void;

let registerHotkey: RegisterHotkey | null = null;

/** Wire hotkey registrar (`mj` / export `KZ` in the bundle). */
export function setApprovalHotkeyRegistrar(fn: RegisterHotkey): void {
  registerHotkey = fn;
}

function declineKeyboardHandler(event: KeyboardEvent): boolean | void {
  if (
    event.target instanceof Element &&
    event.target.closest("[role='dialog'],[role='menu']") != null
  ) {
    return false;
  }
}

function approveKeyboardHandler(event: KeyboardEvent): boolean | void {
  if (
    event.target instanceof Element &&
    (event.target.closest("[role='dialog'],[role='menu']") != null ||
      (event.key === "Enter" && event.target.closest("button,a") != null) ||
      (event.key === " " && event.target.closest("button") != null))
  ) {
    return false;
  }
}

export type UseApprovalKeyboardBindingsProps = {
  enabled: boolean;
  onApprove?: (event: KeyboardEvent) => void;
  onDecline?: (event: KeyboardEvent) => void;
};

/** Side-effect component: registers approve/decline keyboard bindings. */
export function UseApprovalKeyboardBindings({
  enabled,
  onApprove,
  onDecline,
}: UseApprovalKeyboardBindingsProps): null {
  registerHotkey?.("approval.approve", onApprove, {
    enabled,
    keyboardHandler: approveKeyboardHandler,
  });
  registerHotkey?.("approval.decline", onDecline, {
    enabled,
    keyboardHandler: declineKeyboardHandler,
  });
  return null;
}
