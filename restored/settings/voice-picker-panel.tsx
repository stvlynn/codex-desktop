// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uis`) / export `aC`.

export type BindVoicePickerPanelPeers = {
  $: (...args: unknown[]) => unknown;
  Hm: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  RX: (...args: unknown[]) => unknown;
  Wis: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  focus: (...args: unknown[]) => unknown;
  pause: (...args: unknown[]) => unknown;
  previewUrl: (...args: unknown[]) => unknown;
  vat: (...args: unknown[]) => unknown;
  zX: (...args: unknown[]) => unknown;
};
let peers: BindVoicePickerPanelPeers | null = null;

/** Wire bindVoicePickerPanel peers once companions land. */
export function setBindVoicePickerPanelPeers(
  next: BindVoicePickerPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aC` / internal `Uis`.
 */
export function bindVoicePickerPanel(props: unknown) {
  const Z = peers.Z;
  const Vat = peers.vat;
  const Hm = peers.Hm;
  if (peers == null) {
    throw new Error("bindVoicePickerPanel peers are not configured");
  }
  let { initialVoice, onVoiceChange, previewEnabled = true, voices } = props,
    s = peers.Ju(),
    c = peers.RX.useId(),
    l = peers.RX.useId(),
    u = peers.RX.useRef(null),
    [d, f] = peers.RX.useState(initialVoice.slug),
    [p, m] = peers.RX.useState("idle"),
    [h, g] = peers.RX.useState(false),
    _ = (e) => {
      return e.slug === d;
    };
  let v = voices.findIndex(_),
    y = voices[v],
    b = () => {
      let e = u.current;
      if (e == null) return;
      let t = false;
      return (
        previewEnabled &&
          h &&
          ((e.currentTime = 0),
          e.play().catch(() => {
            t || m("error");
          })),
        () => {
          t = true;
          e.pause();
        }
      );
    };
  let x = y?.previewUrl,
    S;
  if (((S = [previewEnabled, x, h]), peers.RX.useEffect(b, S), y == null)) {
    let e;
    return (
      <p role="status" className="text-sm text-token-text-secondary">
        {
          <Z
            id="settings.general.realtimeVoice.noVoices"
            defaultMessage="No compatible voices are available"
            description="Message shown when no compatible realtime voices are available"
          />
        }
      </p>
    );
  }
  let C = (e, t) => {
    let n = t === undefined ? false : t,
      i = voices[(e + voices.length) % voices.length];
    i == null ||
      i.slug === d ||
      (u.current?.pause(),
      m("idle"),
      g(true),
      f(i.slug),
      onVoiceChange(i),
      n && document.getElementById(`${l}-${i.slug}`)?.focus());
  };
  let w = C,
    T = () => {
      let e = u.current;
      if (e != null) {
        if (p === "playing") {
          e.pause();
          return;
        }
        (p === "ended" || p === "error") && ((e.currentTime = 0), m("idle"));
        e.play().catch(() => {
          return m("error");
        });
      }
    };
  let E = T,
    D;
  bb0: switch (p) {
    case "ended": {
      let e;
      e = s.formatMessage(
        {
          id: "settings.general.realtimeVoice.previewReplay",
          defaultMessage: "Replay {name} preview",
          description: "Accessible label for replaying a voice preview",
        },
        {
          name: y.name,
        },
      );
      D = e;
      break bb0;
    }
    case "error": {
      let e;
      e = s.formatMessage(
        {
          id: "settings.general.realtimeVoice.previewRetry",
          defaultMessage: "Retry {name} preview",
          description: "Accessible label for retrying a voice preview",
        },
        {
          name: y.name,
        },
      );
      D = e;
      break bb0;
    }
    case "idle": {
      let e;
      e = s.formatMessage(
        {
          id: "settings.general.realtimeVoice.previewPlay",
          defaultMessage: "Play {name} preview",
          description: "Accessible label for playing a voice preview",
        },
        {
          name: y.name,
        },
      );
      D = e;
      break bb0;
    }
    case "playing": {
      let e;
      e = s.formatMessage(
        {
          id: "settings.general.realtimeVoice.previewPause",
          defaultMessage: "Pause {name} preview",
          description: "Accessible label for pausing a voice preview",
        },
        {
          name: y.name,
        },
      );
      D = e;
    }
  }
  let O = p === "playing" ? 0.48 : 0.08,
    k = p === "playing" ? "speaking" : "listening",
    A = (
      <Vat
        glowEnabled={false}
        phase="active"
        placement="center"
        previewAudioLevel={O}
        voiceActivity={k}
      />
    );
  let j = (
    <button
      type="button"
      aria-label={D}
      className="relative size-36 cursor-interaction rounded-full outline-none focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-4 focus-visible:ring-offset-token-dropdown-background"
      data-orb-treatment={y.orbTreatment}
      onClick={E}
    >
      {A}
    </button>
  );
  let M = previewEnabled ? y.previewUrl : undefined,
    N,
    P,
    F,
    I;
  N = () => {
    return m("ended");
  };
  P = () => {
    return m("error");
  };
  F = () => {
    return m("idle");
  };
  I = () => {
    return m("playing");
  };
  let L = (
    <audio
      ref={u}
      className="hidden"
      preload="auto"
      src={M}
      onEnded={N}
      onError={P}
      onPause={F}
      onPlay={I}
    />
  );
  let R = s.formatMessage({
    id: "settings.general.realtimeVoice.previous",
    defaultMessage: "Previous voice",
    description: "Button to select the previous realtime voice",
  });
  let z = voices.length < 2,
    B = () => {
      return w(v - 1);
    };
  let V = <Hm aria-hidden={true} className="icon-sm rotate-180" />;
  let H = (
    <button
      type="button"
      aria-label={R}
      className="cursor-interaction rounded-full p-2 text-token-text-tertiary hover:text-token-text-secondary focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
      disabled={z}
      onClick={B}
    >
      {V}
    </button>
  );
  let U = <p className="text-xl font-semibold">{y.name}</p>;
  let W = (
    <p className="text-sm text-token-text-secondary">
      {<Z {...y.description} />}
    </p>
  );
  let G = (
    <div className="flex w-56 flex-col gap-1">
      {U}
      {W}
    </div>
  );
  let K = s.formatMessage({
    id: "settings.general.realtimeVoice.next",
    defaultMessage: "Next voice",
    description: "Button to select the next realtime voice",
  });
  let q = voices.length < 2,
    ee = () => {
      return w(v + 1);
    };
  let te = <Hm aria-hidden={true} className="icon-sm" />;
  let ne = (
    <button
      type="button"
      aria-label={K}
      className="cursor-interaction rounded-full p-2 text-token-text-tertiary hover:text-token-text-secondary focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
      disabled={q}
      onClick={ee}
    >
      {te}
    </button>
  );
  let re = (
    <div className="mt-3 flex items-center gap-6 text-center">
      {H}
      {G}
      {ne}
    </div>
  );
  let ie =
    p === "error" ? (
      <p role="alert" className="mt-2 text-xs text-token-error-foreground">
        {
          <Z
            id="settings.general.realtimeVoice.previewUnavailable"
            defaultMessage="Preview unavailable"
            description="Error shown when a prerecorded voice preview cannot play"
          />
        }
      </p>
    ) : null;
  let ae = (event) => {
    let t = null;
    event.key === "ArrowLeft" || event.key === "ArrowUp"
      ? (t = v - 1)
      : event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (t = v + 1)
        : event.key === "Home"
          ? (t = 0)
          : event.key === "End" && (t = voices.length - 1);
    t != null && (event.preventDefault(), w(t, true));
  };
  let oe = (
    <Z
      id="settings.general.realtimeVoice.choose"
      defaultMessage="Choose a voice"
      description="Accessible label for the realtime voice picker"
    />
  );
  let se = (
    <span id={c} className="sr-only">
      {oe}
    </span>
  );
  let ce;
  {
    let e;
    e = (e, t) => {
      let n = e.slug === y.slug;
      return (
        <button
          key={e.slug}
          id={`${l}-${e.slug}`}
          type="button"
          role="radio"
          aria-checked={n}
          aria-label={s.formatMessage(
            {
              id: "settings.general.realtimeVoice.optionLabel",
              defaultMessage: "{name}: {description}",
              description: "Accessible label for one realtime voice option",
            },
            {
              description: s.formatMessage(e.description),
              name: e.name,
            },
          )}
          aria-posinset={t + 1}
          aria-setsize={voices.length}
          className={peers.$(
            "size-2.5 cursor-interaction rounded-full bg-token-charts-blue ring-offset-2 ring-offset-token-dropdown-background focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none",
            !n && "opacity-30",
          )}
          tabIndex={n ? 0 : -1}
          onClick={() => {
            return w(t);
          }}
        />
      );
    };
    ce = voices.map(e);
  }
  let le = (
    <div
      role="radiogroup"
      aria-labelledby={c}
      className="mt-4 flex items-center gap-3"
      onKeyDown={ae}
    >
      {se}
      {ce}
    </div>
  );
  let ue = s.formatMessage(y.description);
  let de = (
    <span className="sr-only" aria-live="polite">
      {
        <Z
          id="settings.general.realtimeVoice.selectedAnnouncement"
          defaultMessage={"Selected voice: {name}. {description}"}
          description="Screen reader announcement after selecting a realtime voice"
          values={{
            description: ue,
            name: y.name,
          }}
        />
      }
    </span>
  );
  return (
    <div className="flex w-full flex-col items-center pt-5 pb-1">
      {j}
      {L}
      {re}
      {ie}
      {le}
      {de}
    </div>
  );
}
