// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `x5s`) / export `fm`.

export type UseIdleReadyStateMachinePeers = {
  useIsDisabled: () => boolean;
  useAtom: (atom: unknown) => [unknown, (next: unknown) => void];
  useState: <T>(init: T) => [T, (next: T | ((prev: T) => T)) => void];
  useRef: <T>(init: T) => { current: T };
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  valueAtom: unknown;
};

let peers: UseIdleReadyStateMachinePeers | null = null;

/** Wire useIdleReadyStateMachine peers once companions land. */
export function setUseIdleReadyStateMachinePeers(
  next: UseIdleReadyStateMachinePeers,
): void {
  peers = next;
}

/**
 * Bundle export `fm` / internal `x5s`.
 * Idle→ready state machine driven by atom + enable flag.
 */
export function useIdleReadyStateMachine(enabled: boolean): {
  value: unknown;
  status: "idle" | "ready";
} {
  if (peers == null) {
    throw new Error("UseIdleReadyStateMachine peers are not configured");
  }
  const disabled = peers.useIsDisabled();
  const [atomValue] = peers.useAtom(peers.valueAtom);
  const [value, setValue] = peers.useState<unknown>(null);
  const [status, setStatus] = peers.useState<"idle" | "ready">("idle");
  const latest = peers.useRef(atomValue);
  peers.useEffect(() => {
    latest.current = atomValue;
  }, [atomValue]);
  peers.useEffect(() => {
    if (!enabled || disabled) {
      setValue(null);
      setStatus("idle");
      return;
    }
    const current = latest.current;
    setValue(current);
    setStatus(current != null ? "ready" : "idle");
  }, [enabled, disabled, atomValue]);
  return { value, status };
}
