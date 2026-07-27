// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wet`) / export `_lt`.

export type DictationOrbControlsPeers = {
  Get: (...args: unknown[]) => unknown;
  Jet: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Ket: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Q9e: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _h: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  lh: (...args: unknown[]) => unknown;
  qet: (...args: unknown[]) => unknown;
  sh: (...args: unknown[]) => unknown;
};
let peers: DictationOrbControlsPeers | null = null;

/** Wire DictationOrbControls peers once companions land. */
export function setDictationOrbControlsPeers(
  next: DictationOrbControlsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_lt` / internal `Wet`.
 */
export function DictationOrbControls(props: unknown) {
  const Lh = peers.lh;
  const Z = peers.Z;
  const Sh = peers.sh;
  const Q9e = peers.Q9e;
  const Jp = peers.jp;
  const Np = peers.Np;
  const Xm = peers.Xm;
  if (peers == null) {
    throw new Error("DictationOrbControls peers are not configured");
  }
  let {
      className,
      color = "ghost",
      idleIcon,
      isDictating = false,
      isVisible,
      isTranscribing,
      canRetryDictation,
      disabled = false,
      retryDictation,
      shortcutLabel,
      size = "composer",
      startDictation,
      stopDictation,
      tooltipPortalContainer,
    } = props,
    b = peers.Ju(),
    x = peers.Ket.useRef(null),
    S = peers.Ket.useRef(false),
    C = peers.Ket.useRef(false),
    w = peers.Ket.useRef(false),
    T = peers.Ket.useRef(false),
    E,
    D;
  if (
    ((E = () => {
      return () => {
        x.current != null &&
          (window.clearTimeout(x.current), (x.current = null));
      };
    }),
    (D = []),
    peers.Ket.useEffect(E, D),
    !isVisible)
  )
    return null;
  let O = canRetryDictation && !isTranscribing,
    k;
  k = "idle";
  isDictating ? (k = "dictating") : O && (k = "retry");
  let A, j, M;
  bb0: switch (k) {
    case "dictating": {
      let e;
      e = b.formatMessage(peers.Jet.stopAria);
      A = e;
      let n;
      n = <Lh className="icon-xs text-token-text-primary" />;
      j = n;
      let r;
      r = <Z {...peers.Jet.stopTooltip} />;
      M = r;
      break bb0;
    }
    case "retry": {
      let e;
      e = b.formatMessage({
        id: "composer.dictation.retry.aria",
        defaultMessage: "Retry dictation",
        description:
          "Aria label for the button that retries composer dictation transcription",
      });
      A = e;
      let n;
      n = <Sh className="icon-xs text-token-text-primary" />;
      j = n;
      let r;
      r = (
        <Z
          id="composer.dictation.retry.tooltip"
          defaultMessage="Retry dictation"
          description="Tooltip for the button that retries composer dictation transcription"
        />
      );
      M = r;
      break bb0;
    }
    case "idle": {
      let e;
      e = b.formatMessage({
        id: "composer.dictation.aria",
        defaultMessage: "Dictate",
        description: "Aria label for dictation button",
      });
      A = e;
      let n;
      n =
        idleIcon === undefined ? (
          <Q9e className="icon-xs text-token-text-primary" />
        ) : (
          idleIcon
        );
      j = n;
      let r;
      r = (
        <Z
          id="composer.dictation.tooltip"
          defaultMessage="Click to dictate or hold"
          description="Tooltip for the dictation button"
        />
      );
      M = r;
    }
  }
  let N = () => {
    x.current != null && (window.clearTimeout(x.current), (x.current = null));
  };
  let P = N,
    F = () => {
      if ((P(), !(!S.current || stopDictation == null))) {
        if (((S.current = false), (T.current = true), C.current)) {
          w.current = true;
          return;
        }
        stopDictation("insert");
      }
    };
  let I = F,
    L = <span className="text-token-foreground">{M}</span>;
  let R = k === "idle" ? shortcutLabel : null,
    z = (event) => {
      disabled ||
        k !== "idle" ||
        stopDictation == null ||
        event.button !== 0 ||
        (event.currentTarget.setPointerCapture?.(event.pointerId),
        P(),
        (T.current = false),
        (x.current = window.setTimeout(() => {
          x.current = null;
          S.current = true;
          C.current = true;
          w.current = false;
          startDictation().finally(() => {
            C.current = false;
            w.current && ((w.current = false), stopDictation("insert"));
          });
        }, peers.qet)));
    };
  let B, V;
  B = (event) => {
    if (event.button === 0) {
      if (
        (event.currentTarget.hasPointerCapture?.(event.pointerId) &&
          event.currentTarget.releasePointerCapture?.(event.pointerId),
        x.current != null)
      ) {
        P();
        return;
      }
      I();
    }
  };
  V = (event) => {
    event.currentTarget.hasPointerCapture?.(event.pointerId) &&
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    I();
  };
  let H = () => {
    if (T.current) {
      T.current = false;
      return;
    }
    switch (k) {
      case "dictating":
        stopDictation?.("insert");
        return;
      case "retry":
        retryDictation();
        return;
      case "idle":
        startDictation();
        return;
    }
  };
  let U = isTranscribing ? <Jp className="icon-xs" /> : j;
  let W = (
    <Np
      className={className}
      color={color}
      size={size}
      uniform={true}
      disabled={disabled}
      aria-label={A}
      onPointerDown={z}
      onPointerUp={B}
      onPointerCancel={V}
      onClick={H}
    >
      {U}
    </Np>
  );
  return (
    <Xm
      tooltipContent={L}
      shortcut={R}
      sideOffset={4}
      portalContainer={tooltipPortalContainer}
    >
      {W}
    </Xm>
  );
}
