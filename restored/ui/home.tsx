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
    stl = peers.i6.forwardRef((alpha, bravo) => {
      const Atl = peers.atl;
      const Provider = peers.etl.Provider;
      const Slot = peers.etl.Slot;
      const copper = OrientationRoot;
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
        delta = peers.i6.useRef(new Set()),
        echo = peers.i6.useRef(0),
        OrientationRoot = orientation === "horizontal" ? peers.utl : peers.dtl,
        [gamma = [], b] = peers.ym({
          prop: value,
          defaultProp: defaultValue,
          onChange: (marble) => {
            [...delta.current][echo.current]?.focus();
            onValueChange(peers.e);
          },
        }),
        harbor = peers.i6.useRef(gamma);
      function indigo(nickel) {
        peers.T(peers.e, peers.Uel(gamma, peers.e));
      }
      function jade(onyx) {
        peers.T(peers.e, echo.current);
      }
      function kite() {
        let pearl = harbor.current[echo.current];
        gamma[echo.current] !== peers.e && onValueCommit(gamma);
      }
      function lemon(
        quartz,
        river,
        { commit } = {
          commit: false,
        },
      ) {
        let slate = peers.Jel(step),
          s = peers.Rel(
            peers.Yel(Math.round((peers.e - min) / step) * step + min, slate),
            [min, max],
          );
        b((timber = []) => {
          let umbra = peers.Bel(peers.e, s, river);
          if (peers.Kel(umbra, minStepsBetweenThumbs * step)) {
            echo.current = umbra.indexOf(s);
            let violet = String(umbra) !== String(peers.e);
            return (
              violet && commit && onValueCommit(umbra),
              violet ? umbra : peers.e
            );
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
          valueIndexToChangeRef={echo}
          thumbs={delta.current}
          values={gamma}
          orientation={orientation}
          form={form}
        >
          <Provider scope={peers.e.__scopeSlider}>
            <Slot scope={peers.e.__scopeSlider}>
              <OrientationRoot
                aria-disabled={disabled}
                data-disabled={disabled ? "" : undefined}
                {...rest}
                ref={bravo}
                onPointerDown={peers.Fp(rest.onPointerDown, () => {
                  disabled || (harbor.current = gamma);
                })}
                min={min}
                max={max}
                inverted={inverted}
                onSlideStart={disabled ? undefined : peers.S}
                onSlideMove={disabled ? undefined : peers.C}
                onSlideEnd={disabled ? undefined : kite}
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
                    peers.T(max, gamma.length - 1, {
                      commit: true,
                    })
                  );
                }}
                onStepKeyDown={({ event, direction }) => {
                  if (!disabled) {
                    let willow =
                        peers.Xel.includes(peers.e.key) ||
                        (peers.e.shiftKey && peers.Zel.includes(peers.e.key))
                          ? 10
                          : 1,
                      xenon = echo.current,
                      i = gamma[xenon];
                    peers.T(i + step * willow * direction, xenon, {
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
    utl = peers.i6.forwardRef((yellow, zinc) => {
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
        [amber, basalt] = peers.i6.useState(null),
        p = peers.Vp(zinc, (hazel) => {
          return basalt(peers.e);
        }),
        cedar = peers.i6.useRef(undefined),
        daisy = peers.N$e(dir),
        ember = daisy === "ltr",
        flint = (ember && !inverted) || (!ember && inverted);
      function garnet(ivory) {
        let jasper = cedar.current || amber.getBoundingClientRect(),
          i = peers.qel([0, jasper.width], flint ? [min, max] : [max, min]);
        return ((cedar.current = jasper), i(peers.e - jasper.left));
      }
      return (
        <Ctl
          scope={peers.e.__scopeSlider}
          startEdge={flint ? "left" : "right"}
          endEdge={flint ? "right" : "left"}
          direction={flint ? 1 : -1}
          size="width"
        >
          <Ftl
            dir={daisy}
            data-orientation="horizontal"
            {...rest}
            ref={p}
            style={{
              ...rest.style,
              "--radix-slider-thumb-transform": "translateX(-50%)",
            }}
            onSlideStart={(kelp) => {
              let lotus = garnet(peers.e.clientX);
              onSlideStart?.(lotus);
            }}
            onSlideMove={(mint) => {
              let nova = garnet(peers.e.clientX);
              onSlideMove?.(nova);
            }}
            onSlideEnd={() => {
              cedar.current = undefined;
              onSlideEnd?.();
            }}
            onStepKeyDown={(olive) => {
              let prism = peers.Qel[
                flint ? "from-left" : "from-right"
              ].includes(peers.e.key);
              onStepKeyDown?.({
                event: peers.e,
                direction: prism ? -1 : 1,
              });
            }}
          />
        </Ctl>
      );
    });
    dtl = peers.i6.forwardRef((quill, reef) => {
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
        sage = peers.Vp(reef, u),
        topaz = peers.i6.useRef(undefined),
        p = !inverted;
      function ultra(vapor) {
        let wheat = topaz.current || u.current.getBoundingClientRect(),
          i = peers.qel([0, wheat.height], p ? [max, min] : [min, max]);
        return ((topaz.current = wheat), i(peers.e - wheat.top));
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
            ref={sage}
            style={{
              ...rest.style,
              "--radix-slider-thumb-transform": "translateY(50%)",
            }}
            onSlideStart={(yarn) => {
              let zephyr = ultra(peers.e.clientY);
              onSlideStart?.(zephyr);
            }}
            onSlideMove={(acorn) => {
              let bloom = ultra(peers.e.clientY);
              onSlideMove?.(bloom);
            }}
            onSlideEnd={() => {
              topaz.current = undefined;
              onSlideEnd?.();
            }}
            onStepKeyDown={(coral) => {
              let drift = peers.Qel[p ? "from-bottom" : "from-top"].includes(
                peers.e.key,
              );
              onStepKeyDown?.({
                event: peers.e,
                direction: drift ? -1 : 1,
              });
            }}
          />
        </Ctl>
      );
    });
    ftl = peers.i6.forwardRef((eagle, frost) => {
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
          ref={frost}
          onKeyDown={peers.Fp(peers.e.onKeyDown, (glide) => {
            peers.e.key === "Home"
              ? (onHomeKeyDown(peers.e), peers.e.preventDefault())
              : peers.e.key === "End"
                ? (onEndKeyDown(peers.e), peers.e.preventDefault())
                : peers.Xel.concat(peers.Zel).includes(peers.e.key) &&
                  (onStepKeyDown(peers.e), peers.e.preventDefault());
          })}
          onPointerDown={peers.Fp(peers.e.onPointerDown, (honey) => {
            let iris = peers.e.target;
            iris.setPointerCapture(peers.e.pointerId);
            peers.e.preventDefault();
            u.thumbs.has(iris) ? iris.focus() : onSlideStart(peers.e);
          })}
          onPointerMove={peers.Fp(peers.e.onPointerMove, (jewel) => {
            peers.e.target.hasPointerCapture(peers.e.pointerId) &&
              onSlideMove(peers.e);
          })}
          onPointerUp={peers.Fp(peers.e.onPointerUp, (knoll) => {
            let lunar = peers.e.target;
            lunar.hasPointerCapture(peers.e.pointerId) &&
              (lunar.releasePointerCapture(peers.e.pointerId),
              onSlideEnd(peers.e));
          })}
        />
      );
    });
    ptl = "SliderTrack";
    mtl = peers.i6.forwardRef((moss, north) => {
      const Span = peers.Wp.span;
      let { __scopeSlider, ...rest } = peers.e,
        i = peers.otl(peers.ptl, __scopeSlider);
      return (
        <Span
          data-disabled={i.disabled ? "" : undefined}
          data-orientation={i.orientation}
          {...rest}
          ref={north}
        />
      );
    });
    peers.mtl.displayName = peers.ptl;
    htl = "SliderRange";
    gtl = peers.i6.forwardRef((orbit, pine) => {
      const Span = peers.Wp.span;
      let { __scopeSlider, ...rest } = peers.e,
        i = peers.otl(peers.htl, __scopeSlider),
        a = peers.ltl(peers.htl, __scopeSlider),
        quest = peers.Vp(pine, peers.i6.useRef(null)),
        s = i.values.length,
        ridge = i.values.map((item) => {
          return peers.Vel(peers.e, i.min, i.max);
        }),
        storm = s > 1 ? Math.min(...ridge) : 0,
        u = 100 - Math.max(...ridge);
      return (
        <Span
          data-orientation={i.orientation}
          data-disabled={i.disabled ? "" : undefined}
          {...rest}
          ref={quest}
          style={{
            ...peers.e.style,
            [a.startEdge]: storm + "%",
            [a.endEdge]: u + "%",
          }}
        />
      );
    });
    peers.gtl.displayName = peers.htl;
    _tl = "SliderThumb";
    vtl = peers.i6.forwardRef((tide, unity) => {
      const Ytl = peers.ytl;
      let vale = peers.ttl(peers.e.__scopeSlider),
        [wave, i] = peers.i6.useState(null),
        a = peers.Vp(unity, (brook) => {
          return i(peers.e);
        }),
        apex = peers.i6.useMemo(() => {
          return wave
            ? vale().findIndex((item) => {
                return peers.e.ref.current === wave;
              })
            : -1;
        }, [vale, wave]);
      return <Ytl {...peers.e} ref={a} index={apex} />;
    });
    ytl = peers.i6.forwardRef((cliff, dusk) => {
      const ItemSlot = peers.etl.ItemSlot;
      const Span = peers.Wp.span;
      const Xtl = peers.xtl;
      let { __scopeSlider, index, name, ...rest } = peers.e,
        elm = peers.otl(peers._tl, __scopeSlider),
        s = peers.ltl(peers._tl, __scopeSlider),
        [fern, grove] = peers.i6.useState(null),
        u = peers.Vp(dusk, (oak) => {
          return grove(peers.e);
        }),
        hill = fern ? elm.form || !!fern.closest("form") : true,
        isle = peers.K2e(fern),
        p = elm.values[index],
        juniper = p === undefined ? 0 : peers.Vel(p, elm.min, elm.max),
        lagoon = peers.Hel(index, elm.values.length),
        meadow = isle?.[s.size],
        nest = meadow ? peers.Wel(meadow, juniper, s.direction) : 0;
      return (
        peers.i6.useEffect(() => {
          if (fern)
            return (
              elm.thumbs.add(fern),
              () => {
                elm.thumbs.delete(fern);
              }
            );
        }, [fern, elm.thumbs]),
        (
          <span
            style={{
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${juniper}% + ${nest}px)`,
            }}
          >
            {
              <ItemSlot scope={peers.e.__scopeSlider}>
                <Span
                  role="slider"
                  aria-label={peers.e["aria-label"] || lagoon}
                  aria-valuemin={elm.min}
                  aria-valuenow={p}
                  aria-valuemax={elm.max}
                  aria-orientation={elm.orientation}
                  data-orientation={elm.orientation}
                  data-disabled={elm.disabled ? "" : undefined}
                  tabIndex={elm.disabled ? undefined : 0}
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
                    elm.valueIndexToChangeRef.current = index;
                  })}
                />
              </ItemSlot>
            }
            {hill && (
              <Xtl
                key={index}
                name={
                  name ??
                  (elm.name
                    ? elm.name + (elm.values.length > 1 ? "[]" : "")
                    : undefined)
                }
                form={elm.form}
                value={p}
              />
            )}
          </span>
        )
      );
    });
    peers.vtl.displayName = peers._tl;
    btl = "RadioBubbleInput";
    xtl = peers.i6.forwardRef(({ __scopeSlider, value, ...rest }, petal) => {
      const Input = peers.Wp.input;
      let i = peers.i6.useRef(null),
        a = peers.Vp(i, petal),
        quiet = peers.DJi(value);
      return (
        peers.i6.useEffect(() => {
          let rain = i.current;
          if (!peers.e) return;
          let seed = window.HTMLInputElement.prototype,
            trail = Object.getOwnPropertyDescriptor(seed, "value").set;
          if (quiet !== value && trail) {
            let urn = new peers.Event("input", {
              bubbles: true,
            });
            trail.call(peers.e, value);
            peers.e.dispatchEvent(urn);
          }
        }, [quiet, value]),
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
