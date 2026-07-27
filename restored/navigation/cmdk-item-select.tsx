// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XH`) / export `IM`.

export type BindCmdkItemSelectPeers = {
  $Va: (...args: unknown[]) => unknown;
  A: (...args: unknown[]) => unknown;
  A1e: (...args: unknown[]) => unknown;
  Bp: (...args: unknown[]) => unknown;
  CHa: (...args: unknown[]) => unknown;
  D: (...args: unknown[]) => unknown;
  E: (...args: unknown[]) => unknown;
  Event: (...args: unknown[]) => unknown;
  Gp: (...args: unknown[]) => unknown;
  Hp: (...args: unknown[]) => unknown;
  JH: (...args: unknown[]) => unknown;
  JVa: (...args: unknown[]) => unknown;
  KH: (...args: unknown[]) => unknown;
  KVa: (...args: unknown[]) => unknown;
  M: (...args: unknown[]) => unknown;
  N: (...args: unknown[]) => unknown;
  NVa: (...args: unknown[]) => unknown;
  O: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Qp: (...args: unknown[]) => unknown;
  ResizeObserver: (...args: unknown[]) => unknown;
  SHa: (...args: unknown[]) => unknown;
  T: (...args: unknown[]) => unknown;
  Wp: (...args: unknown[]) => unknown;
  XVa: (...args: unknown[]) => unknown;
  YH: (...args: unknown[]) => unknown;
  YVa: (...args: unknown[]) => unknown;
  ZVa: (...args: unknown[]) => unknown;
  _Ha: (...args: unknown[]) => unknown;
  aDr: (...args: unknown[]) => unknown;
  aHa: (...args: unknown[]) => unknown;
  appendChild: (...args: unknown[]) => unknown;
  bHa: (...args: unknown[]) => unknown;
  cHa: (...args: unknown[]) => unknown;
  cancelAnimationFrame: (...args: unknown[]) => unknown;
  closest: (...args: unknown[]) => unknown;
  dHa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eHa: (...args: unknown[]) => unknown;
  encodeURIComponent: (...args: unknown[]) => unknown;
  f: (...args: unknown[]) => unknown;
  fHa: (...args: unknown[]) => unknown;
  gHa: (...args: unknown[]) => unknown;
  hHa: (...args: unknown[]) => unknown;
  iDr: (...args: unknown[]) => unknown;
  iHa: (...args: unknown[]) => unknown;
  lDr: (...args: unknown[]) => unknown;
  lHa: (...args: unknown[]) => unknown;
  mHa: (...args: unknown[]) => unknown;
  nHa: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oHa: (...args: unknown[]) => unknown;
  pHa: (...args: unknown[]) => unknown;
  qH: (...args: unknown[]) => unknown;
  qVa: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rDr: (...args: unknown[]) => unknown;
  rHa: (...args: unknown[]) => unknown;
  sHa: (...args: unknown[]) => unknown;
  tDr: (...args: unknown[]) => unknown;
  tHa: (...args: unknown[]) => unknown;
  uHa: (...args: unknown[]) => unknown;
  vHa: (...args: unknown[]) => unknown;
  xHa: (...args: unknown[]) => unknown;
  yHa: (...args: unknown[]) => unknown;
};
let peers: BindCmdkItemSelectPeers | null = null;

/** Wire bindCmdkItemSelect peers once companions land. */
export function setBindCmdkItemSelectPeers(
  next: BindCmdkItemSelectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `IM` / internal `XH`.
 */
export function bindCmdkItemSelect() {
  if (peers == null) {
    throw new Error("bindCmdkItemSelect peers are not configured");
  }
  return peers.e(() => {
    peers.KVa();
    peers.lDr();
    qH = peers.r(peers.o(), 1);
    peers.Gp();
    peers.A1e();
    peers.Hp();
    eHa = '[cmdk-group=""]';
    tHa = '[cmdk-group-items=""]';
    nHa = '[cmdk-group-heading=""]';
    rHa = '[cmdk-item=""]';
    iHa = `${peers.rHa}:not([aria-disabled="true"])`;
    aHa = "cmdk-item-select";
    oHa = "data-value";
    sHa = (e, t, n) => {
      return peers.NVa(peers.e, t, n);
    };
    cHa = peers.qH.createContext(undefined);
    lHa = () => {
      return peers.qH.useContext(peers.cHa);
    };
    uHa = peers.qH.createContext(undefined);
    dHa = () => {
      return peers.qH.useContext(peers.uHa);
    };
    fHa = peers.qH.createContext(undefined);
    pHa = peers.qH.forwardRef((e, t) => {
      let n = peers.XVa(() => {
          return {
            search: "",
            value: peers.e.value ?? peers.e.defaultValue ?? "",
            selectedItemId: undefined,
            filtered: {
              count: 0,
              items: new Map(),
              groups: new Set(),
            },
          };
        }),
        r = peers.XVa(() => {
          return new Set();
        }),
        i = peers.XVa(() => {
          return new Map();
        }),
        a = peers.XVa(() => {
          return new Map();
        }),
        o = peers.XVa(() => {
          return new Set();
        }),
        s = peers.YVa(peers.e),
        {
          label,
          children,
          value,
          onValueChange,
          filter,
          shouldFilter,
          loop,
          disablePointerSelection = false,
          vimBindings = true,
          ..._
        } = peers.e,
        v = peers.Qp(),
        y = peers.Qp(),
        b = peers.Qp(),
        x = peers.qH.useRef(null),
        S = peers.SHa();
      peers.YH(() => {
        if (value !== undefined) {
          let e = value.trim();
          n.current.value = peers.e;
          C.emit();
        }
      }, [value]);
      peers.YH(() => {
        S(6, k);
      }, []);
      let C = peers.qH.useMemo(() => {
          return {
            subscribe: (e) => {
              return (
                o.current.add(peers.e),
                () => {
                  return o.current.delete(peers.e);
                }
              );
            },
            snapshot: () => {
              return n.current;
            },
            setState: (e, t, r) => {
              var i, a, o;
              if (!Object.is(n.current[peers.e], t)) {
                if (((n.current[peers.e] = t), peers.e === "search")) {
                  peers.O();
                  peers.E();
                  S(1, peers.D);
                } else if (peers.e === "value") {
                  if (
                    document.activeElement.hasAttribute("cmdk-input") ||
                    document.activeElement.hasAttribute("cmdk-root")
                  ) {
                    let e = document.getElementById(b);
                    peers.e
                      ? peers.e.focus()
                      : (i = document.getElementById(v)) == null || i.focus();
                  }
                  if (
                    (S(7, () => {
                      n.current.selectedItemId = peers.A()?.id;
                      C.emit();
                    }),
                    r || S(5, k),
                    s.current?.value !== undefined)
                  ) {
                    let e = t ?? "";
                    (o = (a = s.current).onValueChange) == null ||
                      o.call(a, peers.e);
                    return;
                  }
                }
                C.emit();
              }
            },
            emit: () => {
              o.current.forEach((item) => {
                return peers.e();
              });
            },
          };
        }, []),
        w = peers.qH.useMemo(() => {
          return {
            value: (e, t, r) => {
              t !== a.current.get(peers.e)?.value &&
                (a.current.set(peers.e, {
                  value: t,
                  keywords: r,
                }),
                n.current.filtered.items.set(peers.e, peers.T(t, r)),
                S(2, () => {
                  peers.E();
                  C.emit();
                }));
            },
            item: (e, t) => {
              return (
                r.current.add(peers.e),
                t &&
                  (i.current.has(t)
                    ? i.current.get(t).add(peers.e)
                    : i.current.set(t, new Set([peers.e]))),
                S(3, () => {
                  peers.O();
                  peers.E();
                  n.current.value || peers.D();
                  C.emit();
                }),
                () => {
                  a.current.delete(peers.e);
                  r.current.delete(peers.e);
                  n.current.filtered.items.delete(peers.e);
                  let t = peers.A();
                  S(4, () => {
                    peers.O();
                    t?.getAttribute("id") === peers.e && peers.D();
                    C.emit();
                  });
                }
              );
            },
            group: (e) => {
              return (
                i.current.has(peers.e) || i.current.set(peers.e, new Set()),
                () => {
                  a.current.delete(peers.e);
                  i.current.delete(peers.e);
                }
              );
            },
            filter: () => {
              return s.current.shouldFilter;
            },
            label: label || peers.e["aria-label"],
            getDisablePointerSelection: () => {
              return s.current.disablePointerSelection;
            },
            listId: v,
            inputId: b,
            labelId: y,
            listInnerRef: x,
          };
        }, []);
      function T(e, t) {
        let r = s.current?.filter ?? peers.sHa;
        return peers.e ? r(peers.e, n.current.search, t) : 0;
      }
      function E() {
        if (!n.current.search || s.current.shouldFilter === false) return;
        let e = n.current.filtered.items,
          t = [];
        n.current.filtered.groups.forEach((item) => {
          let r = i.current.get(item),
            a = 0;
          r.forEach((_item) => {
            let n = peers.e.get(_item);
            a = Math.max(n, a);
          });
          t.push([item, a]);
        });
        let r = x.current;
        j()
          .sort((t, n) => {
            let r = t.getAttribute("id"),
              i = n.getAttribute("id");
            return (peers.e.get(i) ?? 0) - (peers.e.get(r) ?? 0);
          })
          .forEach((item) => {
            let t = peers.e.closest(peers.tHa);
            t
              ? t.appendChild(
                  peers.e.parentElement === t
                    ? peers.e
                    : peers.e.closest(`${peers.tHa} > *`),
                )
              : r.appendChild(
                  peers.e.parentElement === r
                    ? peers.e
                    : peers.e.closest(`${peers.tHa} > *`),
                );
          });
        t.sort((e, t) => {
          return t[1] - peers.e[1];
        }).forEach((item) => {
          let t = x.current?.querySelector(
            `${peers.eHa}[${peers.oHa}="${peers.encodeURIComponent(peers.e[0])}"]`,
          );
          t?.parentElement.appendChild(t);
        });
      }
      function D() {
        let e = j()
          .find((item) => {
            return peers.e.getAttribute("aria-disabled") !== "true";
          })
          ?.getAttribute(peers.oHa);
        C.setState("value", peers.e || undefined);
      }
      function O() {
        if (!n.current.search || s.current.shouldFilter === false) {
          n.current.filtered.count = r.current.size;
          return;
        }
        n.current.filtered.groups = new Set();
        let e = 0;
        for (let t of r.current) {
          let r = peers.T(
            a.current.get(t)?.value ?? "",
            a.current.get(t)?.keywords ?? [],
          );
          n.current.filtered.items.set(t, r);
          r > 0 && peers.e++;
        }
        for (let [e, t] of i.current)
          for (let r of t)
            if (n.current.filtered.items.get(r) > 0) {
              n.current.filtered.groups.add(peers.e);
              break;
            }
        n.current.filtered.count = peers.e;
      }
      function k() {
        var e;
        let t = peers.A();
        t &&
          (t.parentElement?.firstChild === t &&
            ((e = t.closest(peers.eHa)?.querySelector(peers.nHa)) == null ||
              peers.e.scrollIntoView({
                block: "nearest",
              })),
          t.scrollIntoView({
            block: "nearest",
          }));
      }
      function A() {
        return x.current?.querySelector(`${peers.rHa}[aria-selected="true"]`);
      }
      function j() {
        return Array.from(x.current?.querySelectorAll(peers.iHa) || []);
      }
      function M(e) {
        let t = j()[peers.e];
        t && C.setState("value", t.getAttribute(peers.oHa));
      }
      function N(e) {
        var t;
        let n = peers.A(),
          r = j(),
          i = r.findIndex((item) => {
            return peers.e === n;
          }),
          a = r[i + peers.e];
        (t = s.current) != null &&
          t.loop &&
          (a =
            i + peers.e < 0
              ? r[r.length - 1]
              : i + peers.e === r.length
                ? r[0]
                : r[i + peers.e]);
        a && C.setState("value", a.getAttribute(peers.oHa));
      }
      function P(e) {
        let t = peers.A()?.closest(peers.eHa),
          n;
        for (; t && !n; ) {
          t = peers.e > 0 ? peers.qVa(t, peers.eHa) : peers.JVa(t, peers.eHa);
          n = t?.querySelector(peers.iHa);
        }
        n ? C.setState("value", n.getAttribute(peers.oHa)) : peers.N(peers.e);
      }
      let F = () => {
          return peers.M(j().length - 1);
        },
        I = (e) => {
          peers.e.preventDefault();
          peers.e.metaKey ? F() : peers.e.altKey ? peers.P(1) : peers.N(1);
        },
        L = (e) => {
          peers.e.preventDefault();
          peers.e.metaKey
            ? peers.M(0)
            : peers.e.altKey
              ? peers.P(-1)
              : peers.N(-1);
        };
      return peers.qH.createElement(
        peers.Wp.div,
        {
          ref: t,
          tabIndex: -1,
          ..._,
          "cmdk-root": "",
          onKeyDown: (e) => {
            var t;
            (t = _.onKeyDown) == null || t.call(_, peers.e);
            let n = peers.e.nativeEvent.isComposing || peers.e.keyCode === 229;
            if (!(peers.e.defaultPrevented || n))
              switch (peers.e.key) {
                case "n":
                case "j":
                  vimBindings && peers.e.ctrlKey && I(peers.e);
                  break;
                case "ArrowDown":
                  I(peers.e);
                  break;
                case "p":
                case "k":
                  vimBindings && peers.e.ctrlKey && L(peers.e);
                  break;
                case "ArrowUp":
                  L(peers.e);
                  break;
                case "Home":
                  peers.e.preventDefault();
                  peers.M(0);
                  break;
                case "End":
                  peers.e.preventDefault();
                  F();
                  break;
                case "Enter": {
                  peers.e.preventDefault();
                  let t = peers.A();
                  if (t) {
                    let e = new peers.Event(peers.aHa);
                    t.dispatchEvent(peers.e);
                  }
                }
              }
          },
        },
        peers.qH.createElement(
          "label",
          {
            "cmdk-label": "",
            htmlFor: w.inputId,
            id: w.labelId,
            style: peers.CHa,
          },
          label,
        ),
        peers.$Va(peers.e, (e) => {
          return peers.qH.createElement(
            peers.uHa.Provider,
            {
              value: C,
            },
            peers.qH.createElement(
              peers.cHa.Provider,
              {
                value: w,
              },
              peers.e,
            ),
          );
        }),
      );
    });
    mHa = peers.qH.forwardRef((e, t) => {
      let n = peers.Qp(),
        r = peers.qH.useRef(null),
        i = peers.qH.useContext(peers.fHa),
        a = peers.lHa(),
        o = peers.YVa(peers.e),
        s = o.current?.forceMount ?? i?.forceMount;
      peers.YH(() => {
        if (!s) return a.item(n, i?.id);
      }, [s]);
      let c = peers.ZVa(
          n,
          r,
          [peers.e.value, peers.e.children, r],
          peers.e.keywords,
        ),
        l = peers.dHa(),
        u = peers.KH((e) => {
          return peers.e.value && peers.e.value === c.current;
        }),
        d = peers.KH((e) => {
          return s || a.filter() === false
            ? true
            : peers.e.search
              ? peers.e.filtered.items.get(n) > 0
              : true;
        });
      peers.qH.useEffect(() => {
        let t = r.current;
        if (!(!t || peers.e.disabled))
          return (
            t.addEventListener(peers.aHa, peers.f),
            () => {
              return t.removeEventListener(peers.aHa, peers.f);
            }
          );
      }, [d, peers.e.onSelect, peers.e.disabled]);
      function f() {
        var e, t;
        p();
        (t = (e = o.current).onSelect) == null || t.call(peers.e, c.current);
      }
      function p() {
        l.setState("value", c.current, true);
      }
      if (!d) return null;
      let {
        disabled,
        value,
        onSelect,
        forceMount: _,
        keywords,
        ...rest
      } = peers.e;
      return peers.qH.createElement(
        peers.Wp.div,
        {
          ref: peers.Bp(r, t),
          ...rest,
          id: n,
          "cmdk-item": "",
          role: "option",
          "aria-disabled": !!disabled,
          "aria-selected": !!u,
          "data-disabled": !!disabled,
          "data-selected": !!u,
          onPointerMove:
            disabled || a.getDisablePointerSelection() ? undefined : p,
          onClick: disabled ? undefined : peers.f,
        },
        peers.e.children,
      );
    });
    hHa = peers.qH.forwardRef((e, t) => {
      let { heading, children, forceMount, ...rest } = peers.e,
        o = peers.Qp(),
        s = peers.qH.useRef(null),
        c = peers.qH.useRef(null),
        l = peers.Qp(),
        u = peers.lHa(),
        d = peers.KH((e) => {
          return forceMount || u.filter() === false
            ? true
            : peers.e.search
              ? peers.e.filtered.groups.has(o)
              : true;
        });
      peers.YH(() => {
        return u.group(o);
      }, []);
      peers.ZVa(o, s, [peers.e.value, peers.e.heading, c]);
      let f = peers.qH.useMemo(() => {
        return {
          id: o,
          forceMount,
        };
      }, [forceMount]);
      return peers.qH.createElement(
        peers.Wp.div,
        {
          ref: peers.Bp(s, t),
          ...rest,
          "cmdk-group": "",
          role: "presentation",
          hidden: d ? undefined : true,
        },
        heading &&
          peers.qH.createElement(
            "div",
            {
              ref: c,
              "cmdk-group-heading": "",
              "aria-hidden": true,
              id: l,
            },
            heading,
          ),
        peers.$Va(peers.e, (e) => {
          return peers.qH.createElement(
            "div",
            {
              "cmdk-group-items": "",
              role: "group",
              "aria-labelledby": heading ? l : undefined,
            },
            peers.qH.createElement(
              peers.fHa.Provider,
              {
                value: peers.f,
              },
              peers.e,
            ),
          );
        }),
      );
    });
    gHa = peers.qH.forwardRef((e, t) => {
      let { alwaysRender, ...rest } = peers.e,
        i = peers.qH.useRef(null),
        a = peers.KH((e) => {
          return !peers.e.search;
        });
      return !alwaysRender && !a
        ? null
        : peers.qH.createElement(peers.Wp.div, {
            ref: peers.Bp(i, t),
            ...rest,
            "cmdk-separator": "",
            role: "separator",
          });
    });
    _Ha = peers.qH.forwardRef((e, t) => {
      let { onValueChange, ...rest } = peers.e,
        i = peers.e.value != null,
        a = peers.dHa(),
        o = peers.KH((e) => {
          return peers.e.search;
        }),
        s = peers.KH((e) => {
          return peers.e.selectedItemId;
        }),
        c = peers.lHa();
      return (
        peers.qH.useEffect(() => {
          peers.e.value != null && a.setState("search", peers.e.value);
        }, [peers.e.value]),
        peers.qH.createElement(peers.Wp.input, {
          ref: t,
          ...rest,
          "cmdk-input": "",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: false,
          "aria-autocomplete": "list",
          role: "combobox",
          "aria-expanded": true,
          "aria-controls": c.listId,
          "aria-labelledby": c.labelId,
          "aria-activedescendant": s,
          id: c.inputId,
          type: "text",
          value: i ? peers.e.value : o,
          onChange: (e) => {
            i || a.setState("search", peers.e.target.value);
            onValueChange?.(peers.e.target.value);
          },
        })
      );
    });
    vHa = peers.qH.forwardRef((e, t) => {
      let { children, label = "Suggestions", ...rest } = peers.e,
        a = peers.qH.useRef(null),
        o = peers.qH.useRef(null),
        s = peers.KH((e) => {
          return peers.e.selectedItemId;
        }),
        c = peers.lHa();
      return (
        peers.qH.useEffect(() => {
          if (o.current && a.current) {
            let e = o.current,
              t = a.current,
              n,
              r = new peers.ResizeObserver(() => {
                n = requestAnimationFrame(() => {
                  let n = peers.e.offsetHeight;
                  t.style.setProperty(
                    "--cmdk-list-height",
                    n.toFixed(1) + "px",
                  );
                });
              });
            return (
              r.observe(peers.e),
              () => {
                peers.cancelAnimationFrame(n);
                r.unobserve(peers.e);
              }
            );
          }
        }, []),
        peers.qH.createElement(
          peers.Wp.div,
          {
            ref: peers.Bp(a, t),
            ...rest,
            "cmdk-list": "",
            role: "listbox",
            tabIndex: -1,
            "aria-activedescendant": s,
            "aria-label": label,
            id: c.listId,
          },
          peers.$Va(peers.e, (e) => {
            return peers.qH.createElement(
              "div",
              {
                ref: peers.Bp(o, c.listInnerRef),
                "cmdk-list-sizer": "",
              },
              peers.e,
            );
          }),
        )
      );
    });
    yHa = peers.qH.forwardRef((e, t) => {
      let {
        open,
        onOpenChange,
        overlayClassName,
        contentClassName,
        container,
        ...rest
      } = peers.e;
      return peers.qH.createElement(
        peers.tDr,
        {
          open,
          onOpenChange,
        },
        peers.qH.createElement(
          peers.rDr,
          {
            container,
          },
          peers.qH.createElement(peers.iDr, {
            "cmdk-overlay": "",
            className: overlayClassName,
          }),
          peers.qH.createElement(
            peers.aDr,
            {
              "aria-label": peers.e.label,
              "cmdk-dialog": "",
              className: contentClassName,
            },
            peers.qH.createElement(peers.pHa, {
              ref: t,
              ...rest,
            }),
          ),
        ),
      );
    });
    bHa = peers.qH.forwardRef((e, t) => {
      return peers.KH((e) => {
        return peers.e.filtered.count === 0;
      })
        ? peers.qH.createElement(peers.Wp.div, {
            ref: t,
            ...peers.e,
            "cmdk-empty": "",
            role: "presentation",
          })
        : null;
    });
    xHa = peers.qH.forwardRef((e, t) => {
      let { progress, children, label = "Loading...", ...rest } = peers.e;
      return peers.qH.createElement(
        peers.Wp.div,
        {
          ref: t,
          ...rest,
          "cmdk-loading": "",
          role: "progressbar",
          "aria-valuenow": progress,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": label,
        },
        peers.$Va(peers.e, (e) => {
          return peers.qH.createElement(
            "div",
            {
              "aria-hidden": true,
            },
            peers.e,
          );
        }),
      );
    });
    JH = Object.assign(peers.pHa, {
      List: peers.vHa,
      Item: peers.mHa,
      Input: peers._Ha,
      Group: peers.hHa,
      Separator: peers.gHa,
      Dialog: peers.yHa,
      Empty: peers.bHa,
      Loading: peers.xHa,
    });
    YH = typeof window > "u" ? peers.qH.useEffect : peers.qH.useLayoutEffect;
    SHa = () => {
      let [e, t] = peers.qH.useState(),
        n = peers.XVa(() => {
          return new Map();
        });
      return (
        peers.YH(() => {
          n.current.forEach((item) => {
            return peers.e();
          });
          n.current = new Map();
        }, [peers.e]),
        (e, r) => {
          n.current.set(peers.e, r);
          t({});
        }
      );
    };
    CHa = {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
    };
  });
}
