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
  return peers.i((e, t) => {
    function n(e) {
      if (typeof e != "string")
        throw peers.TypeError(
          "Path must be a string. Received " + JSON.stringify(e),
        );
    }
    function r(e, t) {
      for (var n = "", r = 0, i = -1, a = 0, o, s = 0; s <= e.length; ++s) {
        if (s < e.length) o = e.charCodeAt(s);
        else if (o === 47) break;
        else o = 47;
        if (o === 47) {
          if (!(peers.i === s - 1 || a === 1))
            if (peers.i !== s - 1 && a === 2) {
              if (
                peers.n.length < 2 ||
                peers.r !== 2 ||
                peers.n.charCodeAt(peers.n.length - 1) !== 46 ||
                peers.n.charCodeAt(peers.n.length - 2) !== 46
              ) {
                if (peers.n.length > 2) {
                  var c = peers.n.lastIndexOf("/");
                  if (c !== peers.n.length - 1) {
                    c === -1
                      ? ((n = ""), (r = 0))
                      : ((n = peers.n.slice(0, c)),
                        (r = peers.n.length - 1 - peers.n.lastIndexOf("/")));
                    i = s;
                    a = 0;
                    continue;
                  }
                } else if (peers.n.length === 2 || peers.n.length === 1) {
                  n = "";
                  r = 0;
                  i = s;
                  a = 0;
                  continue;
                }
              }
              t && (peers.n.length > 0 ? (n += "/..") : (n = ".."), (r = 2));
            } else {
              peers.n.length > 0
                ? (n += "/" + e.slice(peers.i + 1, s))
                : (n = e.slice(peers.i + 1, s));
              r = s - peers.i - 1;
            }
          i = s;
          a = 0;
        } else o === 46 && a !== -1 ? ++a : (a = -1);
      }
      return peers.n;
    }
    function i(e, t) {
      var n = t.dir || t.root,
        r = t.base || (t.name || "") + (t.ext || "");
      return peers.n
        ? peers.n === t.root
          ? peers.n + peers.r
          : peers.n + e + peers.r
        : peers.r;
    }
    var a = {
      resolve: function () {
        for (
          var e = "", t = false, i, a = arguments.length - 1;
          a >= -1 && !t;
          a--
        ) {
          var o;
          a >= 0
            ? (o = arguments[a])
            : (peers.i === undefined && (i = process.cwd()), (o = peers.i));
          peers.n(o);
          o.length !== 0 && ((e = o + "/" + e), (t = o.charCodeAt(0) === 47));
        }
        return (
          (e = peers.r(e, !t)),
          t ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
        );
      },
      normalize: function (e) {
        if ((peers.n(e), e.length === 0)) return ".";
        var t = e.charCodeAt(0) === 47,
          i = e.charCodeAt(e.length - 1) === 47;
        return (
          (e = peers.r(e, !t)),
          e.length === 0 && !t && (e = "."),
          e.length > 0 && peers.i && (e += "/"),
          t ? "/" + e : e
        );
      },
      isAbsolute: function (e) {
        return (peers.n(e), e.length > 0 && e.charCodeAt(0) === 47);
      },
      join: function () {
        if (arguments.length === 0) return ".";
        for (var e, t = 0; t < arguments.length; ++t) {
          var r = arguments[t];
          peers.n(peers.r);
          peers.r.length > 0 &&
            (e === undefined ? (e = peers.r) : (e += "/" + peers.r));
        }
        return e === undefined ? "." : a.normalize(e);
      },
      relative: function (e, t) {
        if (
          (peers.n(e),
          peers.n(t),
          e === t || ((e = a.resolve(e)), (t = a.resolve(t)), e === t))
        )
          return "";
        for (
          var r = 1;
          peers.r < e.length && e.charCodeAt(peers.r) === 47;
          ++peers.r
        );
        for (
          var i = e.length, o = peers.i - peers.r, s = 1;
          s < t.length && t.charCodeAt(s) === 47;
          ++s
        );
        for (
          var c = t.length - s, l = o < c ? o : c, u = -1, d = 0;
          d <= l;
          ++d
        ) {
          if (d === l) {
            if (c > l) {
              if (t.charCodeAt(s + d) === 47) return t.slice(s + d + 1);
              if (d === 0) return t.slice(s + d);
            } else
              o > l &&
                (e.charCodeAt(peers.r + d) === 47
                  ? (u = d)
                  : d === 0 && (u = 0));
            break;
          }
          var f = e.charCodeAt(peers.r + d);
          if (f !== t.charCodeAt(s + d)) break;
          f === 47 && (u = d);
        }
        var p = "";
        for (d = peers.r + u + 1; d <= peers.i; ++d)
          (d === peers.i || e.charCodeAt(d) === 47) &&
            (p.length === 0 ? (p += "..") : (p += "/.."));
        return p.length > 0
          ? p + t.slice(s + u)
          : ((s += u), t.charCodeAt(s) === 47 && ++s, t.slice(s));
      },
      _makeLong: function (e) {
        return e;
      },
      dirname: function (e) {
        if ((peers.n(e), e.length === 0)) return ".";
        for (
          var t = e.charCodeAt(0),
            r = t === 47,
            i = -1,
            a = true,
            o = e.length - 1;
          o >= 1;
          --o
        )
          if (((t = e.charCodeAt(o)), t === 47)) {
            if (!a) {
              i = o;
              break;
            }
          } else a = false;
        return peers.i === -1
          ? peers.r
            ? "/"
            : "."
          : peers.r && peers.i === 1
            ? "//"
            : e.slice(0, peers.i);
      },
      basename: function (e, t) {
        if (t !== undefined && typeof t != "string")
          throw peers.TypeError('"ext" argument must be a string');
        peers.n(e);
        var r = 0,
          i = -1,
          a = true,
          o;
        if (t !== undefined && t.length > 0 && t.length <= e.length) {
          if (t.length === e.length && t === e) return "";
          var s = t.length - 1,
            c = -1;
          for (o = e.length - 1; o >= 0; --o) {
            var l = e.charCodeAt(o);
            if (l === 47) {
              if (!a) {
                r = o + 1;
                break;
              }
            } else {
              c === -1 && ((a = false), (c = o + 1));
              s >= 0 &&
                (l === t.charCodeAt(s)
                  ? --s === -1 && (i = o)
                  : ((s = -1), (i = c)));
            }
          }
          return (
            peers.r === peers.i ? (i = c) : peers.i === -1 && (i = e.length),
            e.slice(peers.r, peers.i)
          );
        } else {
          for (o = e.length - 1; o >= 0; --o)
            if (e.charCodeAt(o) === 47) {
              if (!a) {
                r = o + 1;
                break;
              }
            } else peers.i === -1 && ((a = false), (i = o + 1));
          return peers.i === -1 ? "" : e.slice(peers.r, peers.i);
        }
      },
      extname: function (e) {
        peers.n(e);
        for (
          var t = -1, r = 0, i = -1, a = true, o = 0, s = e.length - 1;
          s >= 0;
          --s
        ) {
          var c = e.charCodeAt(s);
          if (c === 47) {
            if (!a) {
              r = s + 1;
              break;
            }
            continue;
          }
          peers.i === -1 && ((a = false), (i = s + 1));
          c === 46
            ? t === -1
              ? (t = s)
              : o !== 1 && (o = 1)
            : t !== -1 && (o = -1);
        }
        return t === -1 ||
          peers.i === -1 ||
          o === 0 ||
          (o === 1 && t === peers.i - 1 && t === peers.r + 1)
          ? ""
          : e.slice(t, peers.i);
      },
      format: function (e) {
        if (typeof e != "object" || !e)
          throw peers.TypeError(
            'The "pathObject" argument must be of type Object. Received type ' +
              typeof e,
          );
        return peers.i("/", e);
      },
      parse: function (e) {
        peers.n(e);
        var t = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: "",
        };
        if (e.length === 0) return t;
        var r = e.charCodeAt(0),
          i = peers.r === 47,
          a;
        peers.i ? ((t.root = "/"), (a = 1)) : (a = 0);
        for (
          var o = -1, s = 0, c = -1, l = true, u = e.length - 1, d = 0;
          u >= a;
          --u
        ) {
          if (((r = e.charCodeAt(u)), peers.r === 47)) {
            if (!l) {
              s = u + 1;
              break;
            }
            continue;
          }
          c === -1 && ((l = false), (c = u + 1));
          peers.r === 46
            ? o === -1
              ? (o = u)
              : d !== 1 && (d = 1)
            : o !== -1 && (d = -1);
        }
        return (
          o === -1 ||
          c === -1 ||
          d === 0 ||
          (d === 1 && o === c - 1 && o === s + 1)
            ? c !== -1 &&
              (s === 0 && peers.i
                ? (t.base = t.name = e.slice(1, c))
                : (t.base = t.name = e.slice(s, c)))
            : (s === 0 && peers.i
                ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, c)))
                : ((t.name = e.slice(s, o)), (t.base = e.slice(s, c))),
              (t.ext = e.slice(o, c))),
          s > 0 ? (t.dir = e.slice(0, s - 1)) : peers.i && (t.dir = "/"),
          t
        );
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null,
    };
    a.posix = a;
    t.exports = a;
  });
}
