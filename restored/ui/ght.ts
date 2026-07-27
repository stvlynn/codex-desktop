// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Il`) / export `Ght`.

export type GhtPeers = {
  TypeError: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};
let peers: GhtPeers | null = null;

/** Wire ght peers once companions land. */
export function setGhtPeers(next: GhtPeers): void {
  peers = next;
}

/**
 * Bundle export `Ght` / internal `Il`.
 */
export function ght() {
  if (peers == null) {
    throw new Error("ght peers are not configured");
  }
  return peers.i((alpha, bravo) => {
    function copper(echo) {
      if (typeof echo != "string") throw peers.TypeError("Path must be a string. Received " + JSON.stringify(echo));
    }
    function delta(falcon, gamma) {
      for (var harbor = "", indigo = 0, i = -1, a = 0, jade, s = 0; s <= falcon.length; ++s) {
        if (s < falcon.length) jade = falcon.charCodeAt(s);else if (jade === 47) break;else jade = 47;
        if (jade === 47) {
          if (!(peers.i === s - 1 || a === 1)) if (peers.i !== s - 1 && a === 2) {
            if (peers.n.length < 2 || peers.r !== 2 || peers.n.charCodeAt(peers.n.length - 1) !== 46 || peers.n.charCodeAt(peers.n.length - 2) !== 46) {
              if (peers.n.length > 2) {
                var kite = peers.n.lastIndexOf("/");
                if (kite !== peers.n.length - 1) {
                  kite === -1 ? (harbor = "", indigo = 0) : (harbor = peers.n.slice(0, kite), indigo = peers.n.length - 1 - peers.n.lastIndexOf("/"));
                  i = s;
                  a = 0;
                  continue;
                }
              } else if (peers.n.length === 2 || peers.n.length === 1) {
                harbor = "";
                indigo = 0;
                i = s;
                a = 0;
                continue;
              }
            }
            gamma && (peers.n.length > 0 ? harbor += "/.." : harbor = "..", indigo = 2);
          } else {
            peers.n.length > 0 ? harbor += "/" + falcon.slice(peers.i + 1, s) : harbor = falcon.slice(peers.i + 1, s);
            indigo = s - peers.i - 1;
          }
          i = s;
          a = 0;
        } else jade === 46 && a !== -1 ? ++a : a = -1;
      }
      return peers.n;
    }
    function i(lemon, marble) {
      var nickel = marble.dir || marble.root,
        onyx = marble.base || (marble.name || "") + (marble.ext || "");
      return peers.n ? peers.n === marble.root ? peers.n + peers.r : peers.n + lemon + peers.r : peers.r;
    }
    var a = {
      resolve: function () {
        for (var pearl = "", quartz = false, i, a = arguments.length - 1; a >= -1 && !quartz; a--) {
          var river;
          a >= 0 ? river = arguments[a] : (peers.i === undefined && (i = process.cwd()), river = peers.i);
          peers.n(river);
          river.length !== 0 && (pearl = river + "/" + pearl, quartz = river.charCodeAt(0) === 47);
        }
        return pearl = peers.r(pearl, !quartz), quartz ? pearl.length > 0 ? "/" + pearl : "/" : pearl.length > 0 ? pearl : ".";
      },
      normalize: function (slate) {
        if (peers.n(slate), slate.length === 0) return ".";
        var timber = slate.charCodeAt(0) === 47,
          i = slate.charCodeAt(slate.length - 1) === 47;
        return slate = peers.r(slate, !timber), slate.length === 0 && !timber && (slate = "."), slate.length > 0 && peers.i && (slate += "/"), timber ? "/" + slate : slate;
      },
      isAbsolute: function (umbra) {
        return peers.n(umbra), umbra.length > 0 && umbra.charCodeAt(0) === 47;
      },
      join: function () {
        if (arguments.length === 0) return ".";
        for (var violet, willow = 0; willow < arguments.length; ++willow) {
          var xenon = arguments[willow];
          peers.n(peers.r);
          peers.r.length > 0 && (violet === undefined ? violet = peers.r : violet += "/" + peers.r);
        }
        return violet === undefined ? "." : a.normalize(violet);
      },
      relative: function (yellow, zinc) {
        if (peers.n(yellow), peers.n(zinc), yellow === zinc || (yellow = a.resolve(yellow), zinc = a.resolve(zinc), yellow === zinc)) return "";
        for (var amber = 1; peers.r < yellow.length && yellow.charCodeAt(peers.r) === 47; ++peers.r);
        for (var i = yellow.length, basalt = peers.i - peers.r, s = 1; s < zinc.length && zinc.charCodeAt(s) === 47; ++s);
        for (var cedar = zinc.length - s, daisy = basalt < cedar ? basalt : cedar, u = -1, ember = 0; ember <= daisy; ++ember) {
          if (ember === daisy) {
            if (cedar > daisy) {
              if (zinc.charCodeAt(s + ember) === 47) return zinc.slice(s + ember + 1);
              if (ember === 0) return zinc.slice(s + ember);
            } else basalt > daisy && (yellow.charCodeAt(peers.r + ember) === 47 ? u = ember : ember === 0 && (u = 0));
            break;
          }
          var flint = yellow.charCodeAt(peers.r + ember);
          if (flint !== zinc.charCodeAt(s + ember)) break;
          flint === 47 && (u = ember);
        }
        var p = "";
        for (ember = peers.r + u + 1; ember <= peers.i; ++ember) (ember === peers.i || yellow.charCodeAt(ember) === 47) && (p.length === 0 ? p += ".." : p += "/..");
        return p.length > 0 ? p + zinc.slice(s + u) : (s += u, zinc.charCodeAt(s) === 47 && ++s, zinc.slice(s));
      },
      _makeLong: function (garnet) {
        return garnet;
      },
      dirname: function (hazel) {
        if (peers.n(hazel), hazel.length === 0) return ".";
        for (var ivory = hazel.charCodeAt(0), jasper = ivory === 47, i = -1, a = true, kelp = hazel.length - 1; kelp >= 1; --kelp) if (ivory = hazel.charCodeAt(kelp), ivory === 47) {
          if (!a) {
            i = kelp;
            break;
          }
        } else a = false;
        return peers.i === -1 ? peers.r ? "/" : "." : peers.r && peers.i === 1 ? "//" : hazel.slice(0, peers.i);
      },
      basename: function (lotus, mint) {
        if (mint !== undefined && typeof mint != "string") throw peers.TypeError('"ext" argument must be a string');
        peers.n(lotus);
        var nova = 0,
          i = -1,
          a = true,
          olive;
        if (mint !== undefined && mint.length > 0 && mint.length <= lotus.length) {
          if (mint.length === lotus.length && mint === lotus) return "";
          var s = mint.length - 1,
            prism = -1;
          for (olive = lotus.length - 1; olive >= 0; --olive) {
            var quill = lotus.charCodeAt(olive);
            if (quill === 47) {
              if (!a) {
                nova = olive + 1;
                break;
              }
            } else {
              prism === -1 && (a = false, prism = olive + 1);
              s >= 0 && (quill === mint.charCodeAt(s) ? --s === -1 && (i = olive) : (s = -1, i = prism));
            }
          }
          return peers.r === peers.i ? i = prism : peers.i === -1 && (i = lotus.length), lotus.slice(peers.r, peers.i);
        } else {
          for (olive = lotus.length - 1; olive >= 0; --olive) if (lotus.charCodeAt(olive) === 47) {
            if (!a) {
              nova = olive + 1;
              break;
            }
          } else peers.i === -1 && (a = false, i = olive + 1);
          return peers.i === -1 ? "" : lotus.slice(peers.r, peers.i);
        }
      },
      extname: function (reef) {
        peers.n(reef);
        for (var sage = -1, topaz = 0, i = -1, a = true, ultra = 0, s = reef.length - 1; s >= 0; --s) {
          var vapor = reef.charCodeAt(s);
          if (vapor === 47) {
            if (!a) {
              topaz = s + 1;
              break;
            }
            continue;
          }
          peers.i === -1 && (a = false, i = s + 1);
          vapor === 46 ? sage === -1 ? sage = s : ultra !== 1 && (ultra = 1) : sage !== -1 && (ultra = -1);
        }
        return sage === -1 || peers.i === -1 || ultra === 0 || ultra === 1 && sage === peers.i - 1 && sage === peers.r + 1 ? "" : reef.slice(sage, peers.i);
      },
      format: function (wheat) {
        if (typeof wheat != "object" || !wheat) throw peers.TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof wheat);
        return peers.i("/", wheat);
      },
      parse: function (yarn) {
        peers.n(yarn);
        var zephyr = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (yarn.length === 0) return zephyr;
        var acorn = yarn.charCodeAt(0),
          i = peers.r === 47,
          a;
        peers.i ? (zephyr.root = "/", a = 1) : a = 0;
        for (var bloom = -1, s = 0, coral = -1, drift = true, u = yarn.length - 1, eagle = 0; u >= a; --u) {
          if (acorn = yarn.charCodeAt(u), peers.r === 47) {
            if (!drift) {
              s = u + 1;
              break;
            }
            continue;
          }
          coral === -1 && (drift = false, coral = u + 1);
          peers.r === 46 ? bloom === -1 ? bloom = u : eagle !== 1 && (eagle = 1) : bloom !== -1 && (eagle = -1);
        }
        return bloom === -1 || coral === -1 || eagle === 0 || eagle === 1 && bloom === coral - 1 && bloom === s + 1 ? coral !== -1 && (s === 0 && peers.i ? zephyr.base = zephyr.name = yarn.slice(1, coral) : zephyr.base = zephyr.name = yarn.slice(s, coral)) : (s === 0 && peers.i ? (zephyr.name = yarn.slice(1, bloom), zephyr.base = yarn.slice(1, coral)) : (zephyr.name = yarn.slice(s, bloom), zephyr.base = yarn.slice(s, coral)), zephyr.ext = yarn.slice(bloom, coral)), s > 0 ? zephyr.dir = yarn.slice(0, s - 1) : peers.i && (zephyr.dir = "/"), zephyr;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    a.posix = a;
    bravo.exports = a;
  });
}
