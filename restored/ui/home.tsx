// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ttl`) / export `fl`.

export type HomePeers = {
  $el: (...args: unknown[]) => unknown;
  A$e: (...args: unknown[]) => unknown;
  Bel: (...args: unknown[]) => unknown;
  C: (...args: unknown[]) => unknown;
  Ctl: (...args: unknown[]) => unknown;
  DJi: (...args: unknown[]) => unknown;
  Event: (...args: unknown[]) => unknown;
  Fp: (...args: unknown[]) => unknown;
  Gp: (...args: unknown[]) => unknown;
  Hel: (...args: unknown[]) => unknown;
  Hp: (...args: unknown[]) => unknown;
  I$e: (...args: unknown[]) => unknown;
  Ip: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  J2e: (...args: unknown[]) => unknown;
  Jel: (...args: unknown[]) => unknown;
  K2e: (...args: unknown[]) => unknown;
  Kel: (...args: unknown[]) => unknown;
  Lp: (...args: unknown[]) => unknown;
  M$e: (...args: unknown[]) => unknown;
  N$e: (...args: unknown[]) => unknown;
  Qel: (...args: unknown[]) => unknown;
  Rel: (...args: unknown[]) => unknown;
  S: (...args: unknown[]) => unknown;
  Stl: (...args: unknown[]) => unknown;
  T: (...args: unknown[]) => unknown;
  Uel: (...args: unknown[]) => unknown;
  Vel: (...args: unknown[]) => unknown;
  Vp: (...args: unknown[]) => unknown;
  Wel: (...args: unknown[]) => unknown;
  Wp: (...args: unknown[]) => unknown;
  Xel: (...args: unknown[]) => unknown;
  Yel: (...args: unknown[]) => unknown;
  Zel: (...args: unknown[]) => unknown;
  _tl: (...args: unknown[]) => unknown;
  a6: (...args: unknown[]) => unknown;
  atl: (...args: unknown[]) => unknown;
  btl: (...args: unknown[]) => unknown;
  ctl: (...args: unknown[]) => unknown;
  dtl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  etl: (...args: unknown[]) => unknown;
  ftl: (...args: unknown[]) => unknown;
  gtl: (...args: unknown[]) => unknown;
  htl: (...args: unknown[]) => unknown;
  i6: (...args: unknown[]) => unknown;
  kJi: (...args: unknown[]) => unknown;
  ltl: (...args: unknown[]) => unknown;
  mtl: (...args: unknown[]) => unknown;
  ntl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  otl: (...args: unknown[]) => unknown;
  ptl: (...args: unknown[]) => unknown;
  qel: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rtl: (...args: unknown[]) => unknown;
  stl: (...args: unknown[]) => unknown;
  ttl: (...args: unknown[]) => unknown;
  utl: (...args: unknown[]) => unknown;
  vtl: (...args: unknown[]) => unknown;
  xm: (...args: unknown[]) => unknown;
  xtl: (...args: unknown[]) => unknown;
  ym: (...args: unknown[]) => unknown;
  ytl: (...args: unknown[]) => unknown;
  zel: (...args: unknown[]) => unknown;
  zp: (...args: unknown[]) => unknown;
};
let peers: HomePeers | null = null;

/** Wire home peers once companions land. */
export function setHomePeers(next: HomePeers): void {
  peers = next;
}

/**
 * Bundle export `fl` / internal `Ttl`.
 */
export function home() {
  if (peers == null) {
    throw new Error("home peers are not configured");
  }
  return peers.e(() => {
    i6 = peers.r(peers.o(), 1);
    peers.zel();
    peers.Ip();
    peers.Hp();
    peers.zp();
    peers.xm();
    peers.I$e();
    peers.kJi();
    peers.J2e();
    peers.Gp();
    peers.M$e();
    a6 = peers.J();
    Xel = ["PageUp", "PageDown"];
    Zel = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Qel = {
      "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
      "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
      "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
      "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
    };
    $el = "Slider";
    [etl, ttl, ntl] = peers.A$e(peers.$el);
    [rtl, itl] = peers.Lp(peers.$el, [peers.ntl]);
    [atl, otl] = peers.rtl(peers.$el);
    stl = peers.i6.forwardRef((e, t) => {
      const Atl = peers.atl;
      const Provider = peers.etl.Provider;
      const Slot = peers.etl.Slot;
      const V = v;
      let {
          name,
          min = 0,
          max = 100,
          step = 1,
          orientation = "horizontal",
          disabled = false,
          minStepsBetweenThumbs = 0,
          defaultValue = [min],
          value,
          onValueChange = () => {},
          onValueCommit = () => {},
          inverted = false,
          form,
          ...rest
        } = peers.e,
        g = peers.i6.useRef(new Set()),
        _ = peers.i6.useRef(0),
        v = orientation === "horizontal" ? peers.utl : peers.dtl,
        [y = [], b] = peers.ym({
          prop: value,
          defaultProp: defaultValue,
          onChange: (e) => {
            [...g.current][_.current]?.focus();
            onValueChange(peers.e);
          },
        }),
        x = peers.i6.useRef(y);
      function S(e) {
        peers.T(peers.e, peers.Uel(y, peers.e));
      }
      function C(e) {
        peers.T(peers.e, _.current);
      }
      function w() {
        let e = x.current[_.current];
        y[_.current] !== peers.e && onValueCommit(y);
      }
      function T(
        e,
        t,
        { commit } = {
          commit: false,
        },
      ) {
        let o = peers.Jel(step),
          s = peers.Rel(
            peers.Yel(Math.round((peers.e - min) / step) * step + min, o),
            [min, max],
          );
        b((e = []) => {
          let r = peers.Bel(peers.e, s, t);
          if (peers.Kel(r, minStepsBetweenThumbs * step)) {
            _.current = r.indexOf(s);
            let t = String(r) !== String(peers.e);
            return (t && commit && onValueCommit(r), t ? r : peers.e);
          } else return peers.e;
        });
      }
      return (
        <Atl
          scope={peers.e.__scopeSlider}
          name={name}
          disabled={disabled}
          min={min}
          max={max}
          valueIndexToChangeRef={_}
          thumbs={g.current}
          values={y}
          orientation={orientation}
          form={form}
        >
          <Provider scope={peers.e.__scopeSlider}>
            <Slot scope={peers.e.__scopeSlider}>
              <V
                aria-disabled={disabled}
                data-disabled={disabled ? "" : undefined}
                {...rest}
                ref={t}
                onPointerDown={peers.Fp(rest.onPointerDown, () => {
                  disabled || (x.current = y);
                })}
                min={min}
                max={max}
                inverted={inverted}
                onSlideStart={disabled ? undefined : peers.S}
                onSlideMove={disabled ? undefined : peers.C}
                onSlideEnd={disabled ? undefined : w}
                onHomeKeyDown={() => {
                  return (
                    !disabled &&
                    peers.T(min, 0, {
                      commit: true,
                    })
                  );
                }}
                onEndKeyDown={() => {
                  return (
                    !disabled &&
                    peers.T(max, y.length - 1, {
                      commit: true,
                    })
                  );
                }}
                onStepKeyDown={({ event, direction }) => {
                  if (!disabled) {
                    let n =
                        peers.Xel.includes(peers.e.key) ||
                        (peers.e.shiftKey && peers.Zel.includes(peers.e.key))
                          ? 10
                          : 1,
                      r = _.current,
                      i = y[r];
                    peers.T(i + step * n * direction, r, {
                      commit: true,
                    });
                  }
                }}
              />
            </Slot>
          </Provider>
        </Atl>
      );
    });
    peers.stl.displayName = peers.$el;
    [ctl, ltl] = peers.rtl(peers.$el, {
      startEdge: "left",
      endEdge: "right",
      size: "width",
      direction: 1,
    });
    utl = peers.i6.forwardRef((e, t) => {
      const Ctl = peers.ctl;
      const Ftl = peers.ftl;
      let {
          min,
          max,
          dir,
          inverted,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onStepKeyDown,
          ...rest
        } = peers.e,
        [d, f] = peers.i6.useState(null),
        p = peers.Vp(t, (e) => {
          return f(peers.e);
        }),
        m = peers.i6.useRef(undefined),
        h = peers.N$e(dir),
        g = h === "ltr",
        _ = (g && !inverted) || (!g && inverted);
      function v(e) {
        let t = m.current || d.getBoundingClientRect(),
          i = peers.qel([0, t.width], _ ? [min, max] : [max, min]);
        return ((m.current = t), i(peers.e - t.left));
      }
      return (
        <Ctl
          scope={peers.e.__scopeSlider}
          startEdge={_ ? "left" : "right"}
          endEdge={_ ? "right" : "left"}
          direction={_ ? 1 : -1}
          size="width"
        >
          <Ftl
            dir={h}
            data-orientation="horizontal"
            {...rest}
            ref={p}
            style={{
              ...rest.style,
              "--radix-slider-thumb-transform": "translateX(-50%)",
            }}
            onSlideStart={(e) => {
              let t = v(peers.e.clientX);
              onSlideStart?.(t);
            }}
            onSlideMove={(e) => {
              let t = v(peers.e.clientX);
              onSlideMove?.(t);
            }}
            onSlideEnd={() => {
              m.current = undefined;
              onSlideEnd?.();
            }}
            onStepKeyDown={(e) => {
              let t = peers.Qel[_ ? "from-left" : "from-right"].includes(
                peers.e.key,
              );
              onStepKeyDown?.({
                event: peers.e,
                direction: t ? -1 : 1,
              });
            }}
          />
        </Ctl>
      );
    });
    dtl = peers.i6.forwardRef((e, t) => {
      const Ctl = peers.ctl;
      const Ftl = peers.ftl;
      let {
          min,
          max,
          inverted,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onStepKeyDown,
          ...rest
        } = peers.e,
        u = peers.i6.useRef(null),
        d = peers.Vp(t, u),
        f = peers.i6.useRef(undefined),
        p = !inverted;
      function m(e) {
        let t = f.current || u.current.getBoundingClientRect(),
          i = peers.qel([0, t.height], p ? [max, min] : [min, max]);
        return ((f.current = t), i(peers.e - t.top));
      }
      return (
        <Ctl
          scope={peers.e.__scopeSlider}
          startEdge={p ? "bottom" : "top"}
          endEdge={p ? "top" : "bottom"}
          size="height"
          direction={p ? 1 : -1}
        >
          <Ftl
            data-orientation="vertical"
            {...rest}
            ref={d}
            style={{
              ...rest.style,
              "--radix-slider-thumb-transform": "translateY(50%)",
            }}
            onSlideStart={(e) => {
              let t = m(peers.e.clientY);
              onSlideStart?.(t);
            }}
            onSlideMove={(e) => {
              let t = m(peers.e.clientY);
              onSlideMove?.(t);
            }}
            onSlideEnd={() => {
              f.current = undefined;
              onSlideEnd?.();
            }}
            onStepKeyDown={(e) => {
              let t = peers.Qel[p ? "from-bottom" : "from-top"].includes(
                peers.e.key,
              );
              onStepKeyDown?.({
                event: peers.e,
                direction: t ? -1 : 1,
              });
            }}
          />
        </Ctl>
      );
    });
    ftl = peers.i6.forwardRef((e, t) => {
      const Span = peers.Wp.span;
      let {
          __scopeSlider,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onHomeKeyDown,
          onEndKeyDown,
          onStepKeyDown,
          ...rest
        } = peers.e,
        u = peers.otl(peers.$el, __scopeSlider);
      return (
        <Span
          {...rest}
          ref={t}
          onKeyDown={peers.Fp(peers.e.onKeyDown, (e) => {
            peers.e.key === "Home"
              ? (onHomeKeyDown(peers.e), peers.e.preventDefault())
              : peers.e.key === "End"
                ? (onEndKeyDown(peers.e), peers.e.preventDefault())
                : peers.Xel.concat(peers.Zel).includes(peers.e.key) &&
                  (onStepKeyDown(peers.e), peers.e.preventDefault());
          })}
          onPointerDown={peers.Fp(peers.e.onPointerDown, (e) => {
            let t = peers.e.target;
            t.setPointerCapture(peers.e.pointerId);
            peers.e.preventDefault();
            u.thumbs.has(t) ? t.focus() : onSlideStart(peers.e);
          })}
          onPointerMove={peers.Fp(peers.e.onPointerMove, (e) => {
            peers.e.target.hasPointerCapture(peers.e.pointerId) &&
              onSlideMove(peers.e);
          })}
          onPointerUp={peers.Fp(peers.e.onPointerUp, (e) => {
            let t = peers.e.target;
            t.hasPointerCapture(peers.e.pointerId) &&
              (t.releasePointerCapture(peers.e.pointerId), onSlideEnd(peers.e));
          })}
        />
      );
    });
    ptl = "SliderTrack";
    mtl = peers.i6.forwardRef((e, t) => {
      const Span = peers.Wp.span;
      let { __scopeSlider, ...rest } = peers.e,
        i = peers.otl(peers.ptl, __scopeSlider);
      return (
        <Span
          data-disabled={i.disabled ? "" : undefined}
          data-orientation={i.orientation}
          {...rest}
          ref={t}
        />
      );
    });
    peers.mtl.displayName = peers.ptl;
    htl = "SliderRange";
    gtl = peers.i6.forwardRef((e, t) => {
      const Span = peers.Wp.span;
      let { __scopeSlider, ...rest } = peers.e,
        i = peers.otl(peers.htl, __scopeSlider),
        a = peers.ltl(peers.htl, __scopeSlider),
        o = peers.Vp(t, peers.i6.useRef(null)),
        s = i.values.length,
        c = i.values.map((item) => {
          return peers.Vel(peers.e, i.min, i.max);
        }),
        l = s > 1 ? Math.min(...c) : 0,
        u = 100 - Math.max(...c);
      return (
        <Span
          data-orientation={i.orientation}
          data-disabled={i.disabled ? "" : undefined}
          {...rest}
          ref={o}
          style={{
            ...peers.e.style,
            [a.startEdge]: l + "%",
            [a.endEdge]: u + "%",
          }}
        />
      );
    });
    peers.gtl.displayName = peers.htl;
    _tl = "SliderThumb";
    vtl = peers.i6.forwardRef((e, t) => {
      const Ytl = peers.ytl;
      let n = peers.ttl(peers.e.__scopeSlider),
        [r, i] = peers.i6.useState(null),
        a = peers.Vp(t, (e) => {
          return i(peers.e);
        }),
        o = peers.i6.useMemo(() => {
          return r
            ? n().findIndex((item) => {
                return peers.e.ref.current === r;
              })
            : -1;
        }, [n, r]);
      return <Ytl {...peers.e} ref={a} index={o} />;
    });
    ytl = peers.i6.forwardRef((e, t) => {
      const ItemSlot = peers.etl.ItemSlot;
      const Span = peers.Wp.span;
      const Xtl = peers.xtl;
      let { __scopeSlider, index, name, ...rest } = peers.e,
        o = peers.otl(peers._tl, __scopeSlider),
        s = peers.ltl(peers._tl, __scopeSlider),
        [c, l] = peers.i6.useState(null),
        u = peers.Vp(t, (e) => {
          return l(peers.e);
        }),
        d = c ? o.form || !!c.closest("form") : true,
        f = peers.K2e(c),
        p = o.values[index],
        m = p === undefined ? 0 : peers.Vel(p, o.min, o.max),
        h = peers.Hel(index, o.values.length),
        g = f?.[s.size],
        _ = g ? peers.Wel(g, m, s.direction) : 0;
      return (
        peers.i6.useEffect(() => {
          if (c)
            return (
              o.thumbs.add(c),
              () => {
                o.thumbs.delete(c);
              }
            );
        }, [c, o.thumbs]),
        (
          <span
            style={{
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${m}% + ${_}px)`,
            }}
          >
            {
              <ItemSlot scope={peers.e.__scopeSlider}>
                <Span
                  role="slider"
                  aria-label={peers.e["aria-label"] || h}
                  aria-valuemin={o.min}
                  aria-valuenow={p}
                  aria-valuemax={o.max}
                  aria-orientation={o.orientation}
                  data-orientation={o.orientation}
                  data-disabled={o.disabled ? "" : undefined}
                  tabIndex={o.disabled ? undefined : 0}
                  {...rest}
                  ref={u}
                  style={
                    p === undefined
                      ? {
                          display: "none",
                        }
                      : peers.e.style
                  }
                  onFocus={peers.Fp(peers.e.onFocus, () => {
                    o.valueIndexToChangeRef.current = index;
                  })}
                />
              </ItemSlot>
            }
            {d && (
              <Xtl
                key={index}
                name={
                  name ??
                  (o.name
                    ? o.name + (o.values.length > 1 ? "[]" : "")
                    : undefined)
                }
                form={o.form}
                value={p}
              />
            )}
          </span>
        )
      );
    });
    peers.vtl.displayName = peers._tl;
    btl = "RadioBubbleInput";
    xtl = peers.i6.forwardRef(({ __scopeSlider, value, ...rest }, r) => {
      const Input = peers.Wp.input;
      let i = peers.i6.useRef(null),
        a = peers.Vp(i, r),
        o = peers.DJi(value);
      return (
        peers.i6.useEffect(() => {
          let e = i.current;
          if (!peers.e) return;
          let n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (o !== value && r) {
            let n = new peers.Event("input", {
              bubbles: true,
            });
            r.call(peers.e, value);
            peers.e.dispatchEvent(n);
          }
        }, [o, value]),
        (
          <Input
            style={{
              display: "none",
            }}
            {...rest}
            ref={a}
            defaultValue={value}
          />
        )
      );
    });
    peers.xtl.displayName = peers.btl;
    Stl = peers.stl;
    Ctl = peers.mtl;
    wtl = peers.vtl;
  });
}
