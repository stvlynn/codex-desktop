// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vat`) / export `dct`.

export type CodexAvatarRootPeers = {
  $: (...args: unknown[]) => unknown;
  Cat: (...args: unknown[]) => unknown;
  Tat: (...args: unknown[]) => unknown;
  kat: (...args: unknown[]) => unknown;
  parentElement: (...args: unknown[]) => unknown;
  rat: (...args: unknown[]) => unknown;
  setInputs: (...args: unknown[]) => unknown;
  setPublishedAudioLevels: (...args: unknown[]) => unknown;
  wat: (...args: unknown[]) => unknown;
};
let peers: CodexAvatarRootPeers | null = null;

/** Wire CodexAvatarRoot peers once companions land. */
export function setCodexAvatarRootPeers(next: CodexAvatarRootPeers): void {
  peers = next;
}

/**
 * Bundle export `dct` / internal `vat`.
 */
export function CodexAvatarRoot(props: unknown) {
  if (peers == null) {
    throw new Error("CodexAvatarRoot peers are not configured");
  }
  let {
      className,
      glowEnabled = true,
      placement,
      presentationAnchorRef,
      phase,
      previewAudioLevel = 0,
      previewTimeMs,
      voiceActivity,
    } = props,
    f = peers.wat.useRef(null),
    p = peers.wat.useRef(null),
    m = (e) => {
      f.current = e;
      (e == null || e.dataset.avatarOverlayPlacement === placement) &&
        presentationAnchorRef?.(e, e?.parentElement);
    };
  let h = m,
    g = previewTimeMs === "live" ? undefined : (previewTimeMs ?? undefined),
    _ = phase !== "inactive",
    v,
    y;
  v = () => {
    let e = f.current;
    if (e == null) return;
    let t = new peers.kat(e);
    return (
      (p.current = t),
      () => {
        t.dispose();
        p.current = null;
      }
    );
  };
  y = [];
  peers.wat.useEffect(v, y);
  let b, x;
  b = () => {
    p.current?.setInputs({
      phase,
      previewAudioLevel,
      previewTimeMs: g,
      voiceActivity,
    });
  };
  x = [phase, previewAudioLevel, g, voiceActivity];
  peers.wat.useEffect(b, x);
  let S, C;
  S = () => {
    if (!_) {
      p.current?.setPublishedAudioLevels(null);
      return;
    }
    let e = peers.rat((e) => {
      p.current?.setPublishedAudioLevels(e);
    });
    return () => {
      e();
      p.current?.setPublishedAudioLevels(null);
    };
  };
  C = [_];
  peers.wat.useEffect(S, C);
  let w = peers.$("codex-avatar-root relative h-full w-full", className);
  let T = peers.$(
    "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
    placement === "center"
      ? "-top-5 -left-5"
      : [
          placement.endsWith("end") ? "right-0" : "left-0",
          placement.startsWith("top") ? "bottom-0" : "top-0",
        ],
  );
  let E = glowEnabled
      ? "drop-shadow(0 0 4px rgb(154 154 249 / 55%))"
      : undefined,
    D = {
      filter: E,
    };
  let O = (
    <canvas
      ref={h}
      data-avatar-overlay-placement={placement}
      className={T}
      style={D}
    />
  );
  return (
    <div
      aria-hidden="true"
      className={w}
      data-avatar-mascot="true"
      data-chromatic="ignore"
      data-realtime-voice-orb={true}
      data-testid="avatar-overlay-voice-orb"
    >
      {O}
    </div>
  );
}
