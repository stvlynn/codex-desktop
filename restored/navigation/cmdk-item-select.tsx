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
export function setBindCmdkItemSelectPeers(next: BindCmdkItemSelectPeers): void {
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
    sHa = (alpha, bravo, copper) => {
      return peers.NVa(peers.e, bravo, copper);
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
    pHa = peers.qH.forwardRef((delta, echo) => {
      let falcon = peers.XVa(() => {
          return {
            search: "",
            value: peers.e.value ?? peers.e.defaultValue ?? "",
            selectedItemId: undefined,
            filtered: {
              count: 0,
              items: new Map(),
              groups: new Set()
            }
          };
        }),
        gamma = peers.XVa(() => {
          return new Set();
        }),
        i = peers.XVa(() => {
          return new Map();
        }),
        a = peers.XVa(() => {
          return new Map();
        }),
        harbor = peers.XVa(() => {
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
          ...indigo
        } = peers.e,
        jade = peers.Qp(),
        kite = peers.Qp(),
        b = peers.Qp(),
        lemon = peers.qH.useRef(null),
        marble = peers.SHa();
      peers.YH(() => {
        if (value !== undefined) {
          let cedar = value.trim();
          falcon.current.value = peers.e;
          nickel.emit();
        }
      }, [value]);
      peers.YH(() => {
        marble(6, timber);
      }, []);
      let nickel = peers.qH.useMemo(() => {
          return {
            subscribe: daisy => {
              return harbor.current.add(peers.e), () => {
                return harbor.current.delete(peers.e);
              };
            },
            snapshot: () => {
              return falcon.current;
            },
            setState: (ember, flint, garnet) => {
              var i, a, hazel;
              if (!Object.is(falcon.current[peers.e], flint)) {
                if (falcon.current[peers.e] = flint, peers.e === "search") {
                  peers.O();
                  peers.E();
                  marble(1, peers.D);
                } else if (peers.e === "value") {
                  if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
                    let ivory = document.getElementById(b);
                    peers.e ? peers.e.focus() : (i = document.getElementById(jade)) == null || i.focus();
                  }
                  if (marble(7, () => {
                    falcon.current.selectedItemId = peers.A()?.id;
                    nickel.emit();
                  }), garnet || marble(5, timber), s.current?.value !== undefined) {
                    let jasper = flint ?? "";
                    (hazel = (a = s.current).onValueChange) == null || hazel.call(a, peers.e);
                    return;
                  }
                }
                nickel.emit();
              }
            },
            emit: () => {
              harbor.current.forEach(item => {
                return peers.e();
              });
            }
          };
        }, []),
        onyx = peers.qH.useMemo(() => {
          return {
            value: (kelp, lotus, mint) => {
              lotus !== a.current.get(peers.e)?.value && (a.current.set(peers.e, {
                value: lotus,
                keywords: mint
              }), falcon.current.filtered.items.set(peers.e, peers.T(lotus, mint)), marble(2, () => {
                peers.E();
                nickel.emit();
              }));
            },
            item: (nova, olive) => {
              return gamma.current.add(peers.e), olive && (i.current.has(olive) ? i.current.get(olive).add(peers.e) : i.current.set(olive, new Set([peers.e]))), marble(3, () => {
                peers.O();
                peers.E();
                falcon.current.value || peers.D();
                nickel.emit();
              }), () => {
                a.current.delete(peers.e);
                gamma.current.delete(peers.e);
                falcon.current.filtered.items.delete(peers.e);
                let prism = peers.A();
                marble(4, () => {
                  peers.O();
                  prism?.getAttribute("id") === peers.e && peers.D();
                  nickel.emit();
                });
              };
            },
            group: quill => {
              return i.current.has(peers.e) || i.current.set(peers.e, new Set()), () => {
                a.current.delete(peers.e);
                i.current.delete(peers.e);
              };
            },
            filter: () => {
              return s.current.shouldFilter;
            },
            label: label || peers.e["aria-label"],
            getDisablePointerSelection: () => {
              return s.current.disablePointerSelection;
            },
            listId: jade,
            inputId: b,
            labelId: kite,
            listInnerRef: lemon
          };
        }, []);
      function pearl(reef, sage) {
        let topaz = s.current?.filter ?? peers.sHa;
        return peers.e ? topaz(peers.e, falcon.current.search, sage) : 0;
      }
      function quartz() {
        if (!falcon.current.search || s.current.shouldFilter === false) return;
        let ultra = falcon.current.filtered.items,
          vapor = [];
        falcon.current.filtered.groups.forEach(item => {
          let yarn = i.current.get(item),
            a = 0;
          yarn.forEach(_item => {
            let zephyr = peers.e.get(_item);
            a = Math.max(zephyr, a);
          });
          vapor.push([item, a]);
        });
        let wheat = lemon.current;
        violet().sort((acorn, bloom) => {
          let coral = acorn.getAttribute("id"),
            i = bloom.getAttribute("id");
          return (peers.e.get(i) ?? 0) - (peers.e.get(coral) ?? 0);
        }).forEach(item => {
          let drift = peers.e.closest(peers.tHa);
          drift ? drift.appendChild(peers.e.parentElement === drift ? peers.e : peers.e.closest(`${peers.tHa} > *`)) : wheat.appendChild(peers.e.parentElement === wheat ? peers.e : peers.e.closest(`${peers.tHa} > *`));
        });
        vapor.sort((eagle, frost) => {
          return frost[1] - peers.e[1];
        }).forEach(item => {
          let glide = lemon.current?.querySelector(`${peers.eHa}[${peers.oHa}="${peers.encodeURIComponent(peers.e[0])}"]`);
          glide?.parentElement.appendChild(glide);
        });
      }
      function river() {
        let honey = violet().find(item => {
          return peers.e.getAttribute("aria-disabled") !== "true";
        })?.getAttribute(peers.oHa);
        nickel.setState("value", peers.e || undefined);
      }
      function slate() {
        if (!falcon.current.search || s.current.shouldFilter === false) {
          falcon.current.filtered.count = gamma.current.size;
          return;
        }
        falcon.current.filtered.groups = new Set();
        let iris = 0;
        for (let jewel of gamma.current) {
          let knoll = peers.T(a.current.get(jewel)?.value ?? "", a.current.get(jewel)?.keywords ?? []);
          falcon.current.filtered.items.set(jewel, knoll);
          knoll > 0 && peers.e++;
        }
        for (let [lunar, moss] of i.current) for (let north of moss) if (falcon.current.filtered.items.get(north) > 0) {
          falcon.current.filtered.groups.add(peers.e);
          break;
        }
        falcon.current.filtered.count = peers.e;
      }
      function timber() {
        var orbit;
        let pine = peers.A();
        pine && (pine.parentElement?.firstChild === pine && ((orbit = pine.closest(peers.eHa)?.querySelector(peers.nHa)) == null || peers.e.scrollIntoView({
          block: "nearest"
        })), pine.scrollIntoView({
          block: "nearest"
        }));
      }
      function umbra() {
        return lemon.current?.querySelector(`${peers.rHa}[aria-selected="true"]`);
      }
      function violet() {
        return Array.from(lemon.current?.querySelectorAll(peers.iHa) || []);
      }
      function willow(quest) {
        let ridge = violet()[peers.e];
        ridge && nickel.setState("value", ridge.getAttribute(peers.oHa));
      }
      function xenon(storm) {
        var tide;
        let unity = peers.A(),
          vale = violet(),
          i = vale.findIndex(item => {
            return peers.e === unity;
          }),
          a = vale[i + peers.e];
        (tide = s.current) != null && tide.loop && (a = i + peers.e < 0 ? vale[vale.length - 1] : i + peers.e === vale.length ? vale[0] : vale[i + peers.e]);
        a && nickel.setState("value", a.getAttribute(peers.oHa));
      }
      function yellow(wave) {
        let apex = peers.A()?.closest(peers.eHa),
          brook;
        for (; apex && !brook;) {
          apex = peers.e > 0 ? peers.qVa(apex, peers.eHa) : peers.JVa(apex, peers.eHa);
          brook = apex?.querySelector(peers.iHa);
        }
        brook ? nickel.setState("value", brook.getAttribute(peers.oHa)) : peers.N(peers.e);
      }
      let zinc = () => {
          return peers.M(violet().length - 1);
        },
        amber = cliff => {
          peers.e.preventDefault();
          peers.e.metaKey ? zinc() : peers.e.altKey ? peers.P(1) : peers.N(1);
        },
        basalt = dusk => {
          peers.e.preventDefault();
          peers.e.metaKey ? peers.M(0) : peers.e.altKey ? peers.P(-1) : peers.N(-1);
        };
      return peers.qH.createElement(peers.Wp.div, {
        ref: echo,
        tabIndex: -1,
        ...indigo,
        "cmdk-root": "",
        onKeyDown: elm => {
          var fern;
          (fern = indigo.onKeyDown) == null || fern.call(indigo, peers.e);
          let grove = peers.e.nativeEvent.isComposing || peers.e.keyCode === 229;
          if (!(peers.e.defaultPrevented || grove)) switch (peers.e.key) {
            case "n":
            case "j":
              vimBindings && peers.e.ctrlKey && amber(peers.e);
              break;
            case "ArrowDown":
              amber(peers.e);
              break;
            case "p":
            case "k":
              vimBindings && peers.e.ctrlKey && basalt(peers.e);
              break;
            case "ArrowUp":
              basalt(peers.e);
              break;
            case "Home":
              peers.e.preventDefault();
              peers.M(0);
              break;
            case "End":
              peers.e.preventDefault();
              zinc();
              break;
            case "Enter":
              {
                peers.e.preventDefault();
                let hill = peers.A();
                if (hill) {
                  let isle = new peers.Event(peers.aHa);
                  hill.dispatchEvent(peers.e);
                }
              }
          }
        }
      }, peers.qH.createElement("label", {
        "cmdk-label": "",
        htmlFor: onyx.inputId,
        id: onyx.labelId,
        style: peers.CHa
      }, label), peers.$Va(peers.e, juniper => {
        return peers.qH.createElement(peers.uHa.Provider, {
          value: nickel
        }, peers.qH.createElement(peers.cHa.Provider, {
          value: onyx
        }, peers.e));
      }));
    });
    mHa = peers.qH.forwardRef((lagoon, meadow) => {
      let nest = peers.Qp(),
        oak = peers.qH.useRef(null),
        i = peers.qH.useContext(peers.fHa),
        a = peers.lHa(),
        petal = peers.YVa(peers.e),
        s = petal.current?.forceMount ?? i?.forceMount;
      peers.YH(() => {
        if (!s) return a.item(nest, i?.id);
      }, [s]);
      let quiet = peers.ZVa(nest, oak, [peers.e.value, peers.e.children, oak], peers.e.keywords),
        rain = peers.dHa(),
        u = peers.KH(vine => {
          return peers.e.value && peers.e.value === quiet.current;
        }),
        seed = peers.KH(wind => {
          return s || a.filter() === false ? true : peers.e.search ? peers.e.filtered.items.get(nest) > 0 : true;
        });
      peers.qH.useEffect(() => {
        let yarrow = oak.current;
        if (!(!yarrow || peers.e.disabled)) return yarrow.addEventListener(peers.aHa, peers.f), () => {
          return yarrow.removeEventListener(peers.aHa, peers.f);
        };
      }, [seed, peers.e.onSelect, peers.e.disabled]);
      function trail() {
        var azure, birch;
        p();
        (birch = (azure = petal.current).onSelect) == null || birch.call(peers.e, quiet.current);
      }
      function p() {
        rain.setState("value", quiet.current, true);
      }
      if (!seed) return null;
      let {
        disabled,
        value,
        onSelect,
        forceMount: urn,
        keywords,
        ...rest
      } = peers.e;
      return peers.qH.createElement(peers.Wp.div, {
        ref: peers.Bp(oak, meadow),
        ...rest,
        id: nest,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!disabled,
        "aria-selected": !!u,
        "data-disabled": !!disabled,
        "data-selected": !!u,
        onPointerMove: disabled || a.getDisablePointerSelection() ? undefined : p,
        onClick: disabled ? undefined : peers.f
      }, peers.e.children);
    });
    hHa = peers.qH.forwardRef((canyon, dew) => {
      let {
          heading,
          children,
          forceMount,
          ...rest
        } = peers.e,
        ever = peers.Qp(),
        s = peers.qH.useRef(null),
        field = peers.qH.useRef(null),
        grain = peers.Qp(),
        u = peers.lHa(),
        haven = peers.KH(jadeite => {
          return forceMount || u.filter() === false ? true : peers.e.search ? peers.e.filtered.groups.has(ever) : true;
        });
      peers.YH(() => {
        return u.group(ever);
      }, []);
      peers.ZVa(ever, s, [peers.e.value, peers.e.heading, field]);
      let ink = peers.qH.useMemo(() => {
        return {
          id: ever,
          forceMount
        };
      }, [forceMount]);
      return peers.qH.createElement(peers.Wp.div, {
        ref: peers.Bp(s, dew),
        ...rest,
        "cmdk-group": "",
        role: "presentation",
        hidden: haven ? undefined : true
      }, heading && peers.qH.createElement("div", {
        ref: field,
        "cmdk-group-heading": "",
        "aria-hidden": true,
        id: grain
      }, heading), peers.$Va(peers.e, kernel => {
        return peers.qH.createElement("div", {
          "cmdk-group-items": "",
          role: "group",
          "aria-labelledby": heading ? grain : undefined
        }, peers.qH.createElement(peers.fHa.Provider, {
          value: peers.f
        }, peers.e));
      }));
    });
    gHa = peers.qH.forwardRef((leaf, maple) => {
      let {
          alwaysRender,
          ...rest
        } = peers.e,
        i = peers.qH.useRef(null),
        a = peers.KH(nimbus => {
          return !peers.e.search;
        });
      return !alwaysRender && !a ? null : peers.qH.createElement(peers.Wp.div, {
        ref: peers.Bp(i, maple),
        ...rest,
        "cmdk-separator": "",
        role: "separator"
      });
    });
    _Ha = peers.qH.forwardRef((opal, plume) => {
      let {
          onValueChange,
          ...rest
        } = peers.e,
        i = peers.e.value != null,
        a = peers.dHa(),
        quillow = peers.KH(silk => {
          return peers.e.search;
        }),
        s = peers.KH(thorn => {
          return peers.e.selectedItemId;
        }),
        root = peers.lHa();
      return peers.qH.useEffect(() => {
        peers.e.value != null && a.setState("search", peers.e.value);
      }, [peers.e.value]), peers.qH.createElement(peers.Wp.input, {
        ref: plume,
        ...rest,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: false,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": true,
        "aria-controls": root.listId,
        "aria-labelledby": root.labelId,
        "aria-activedescendant": s,
        id: root.inputId,
        type: "text",
        value: i ? peers.e.value : quillow,
        onChange: upland => {
          i || a.setState("search", peers.e.target.value);
          onValueChange?.(peers.e.target.value);
        }
      });
    });
    vHa = peers.qH.forwardRef((vista, wisp) => {
      let {
          children,
          label = "Suggestions",
          ...rest
        } = peers.e,
        a = peers.qH.useRef(null),
        yonder = peers.qH.useRef(null),
        s = peers.KH(anvil => {
          return peers.e.selectedItemId;
        }),
        zenith = peers.lHa();
      return peers.qH.useEffect(() => {
        if (yonder.current && a.current) {
          let beacon = yonder.current,
            crag = a.current,
            dome,
            eddy = new peers.ResizeObserver(() => {
              dome = requestAnimationFrame(() => {
                let fjord = peers.e.offsetHeight;
                crag.style.setProperty("--cmdk-list-height", fjord.toFixed(1) + "px");
              });
            });
          return eddy.observe(peers.e), () => {
            peers.cancelAnimationFrame(dome);
            eddy.unobserve(peers.e);
          };
        }
      }, []), peers.qH.createElement(peers.Wp.div, {
        ref: peers.Bp(a, wisp),
        ...rest,
        "cmdk-list": "",
        role: "listbox",
        tabIndex: -1,
        "aria-activedescendant": s,
        "aria-label": label,
        id: zenith.listId
      }, peers.$Va(peers.e, glen => {
        return peers.qH.createElement("div", {
          ref: peers.Bp(yonder, zenith.listInnerRef),
          "cmdk-list-sizer": ""
        }, peers.e);
      }));
    });
    yHa = peers.qH.forwardRef((hearth, inlet) => {
      let {
        open,
        onOpenChange,
        overlayClassName,
        contentClassName,
        container,
        ...rest
      } = peers.e;
      return peers.qH.createElement(peers.tDr, {
        open,
        onOpenChange
      }, peers.qH.createElement(peers.rDr, {
        container
      }, peers.qH.createElement(peers.iDr, {
        "cmdk-overlay": "",
        className: overlayClassName
      }), peers.qH.createElement(peers.aDr, {
        "aria-label": peers.e.label,
        "cmdk-dialog": "",
        className: contentClassName
      }, peers.qH.createElement(peers.pHa, {
        ref: inlet,
        ...rest
      }))));
    });
    bHa = peers.qH.forwardRef((jetty, knob) => {
      return peers.KH(ledge => {
        return peers.e.filtered.count === 0;
      }) ? peers.qH.createElement(peers.Wp.div, {
        ref: knob,
        ...peers.e,
        "cmdk-empty": "",
        role: "presentation"
      }) : null;
    });
    xHa = peers.qH.forwardRef((mire, nook) => {
      let {
        progress,
        children,
        label = "Loading...",
        ...rest
      } = peers.e;
      return peers.qH.createElement(peers.Wp.div, {
        ref: nook,
        ...rest,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": progress,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": label
      }, peers.$Va(peers.e, oxbow => {
        return peers.qH.createElement("div", {
          "aria-hidden": true
        }, peers.e);
      }));
    });
    JH = Object.assign(peers.pHa, {
      List: peers.vHa,
      Item: peers.mHa,
      Input: peers._Ha,
      Group: peers.hHa,
      Separator: peers.gHa,
      Dialog: peers.yHa,
      Empty: peers.bHa,
      Loading: peers.xHa
    });
    YH = typeof window > "u" ? peers.qH.useEffect : peers.qH.useLayoutEffect;
    SHa = () => {
      let [pond, quarry] = peers.qH.useState(),
        rapids = peers.XVa(() => {
          return new Map();
        });
      return peers.YH(() => {
        rapids.current.forEach(item => {
          return peers.e();
        });
        rapids.current = new Map();
      }, [peers.e]), (spur, tor) => {
        rapids.current.set(peers.e, tor);
        quarry({});
      };
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
      borderWidth: "0"
    };
  });
}
