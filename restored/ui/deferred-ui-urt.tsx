// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Wt`) / export `urt`.

export type BindBindDeferredUiUrtPeers = {
  FUt: (...args: unknown[]) => unknown;
  Hooks: (...args: unknown[]) => unknown;
  Lexer: (...args: unknown[]) => unknown;
  Parser: (...args: unknown[]) => unknown;
  QWt: (...args: unknown[]) => unknown;
  Renderer: (...args: unknown[]) => unknown;
  TextRenderer: (...args: unknown[]) => unknown;
  Tokenizer: (...args: unknown[]) => unknown;
  XWt: (...args: unknown[]) => unknown;
  YWt: (...args: unknown[]) => unknown;
  ZWt: (...args: unknown[]) => unknown;
  childTokens: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  defaults: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lexer: (...args: unknown[]) => unknown;
  ny: (...args: unknown[]) => unknown;
  onError: (...args: unknown[]) => unknown;
  options: (...args: unknown[]) => unknown;
  oy: (...args: unknown[]) => unknown;
  parse: (...args: unknown[]) => unknown;
  parseInline: (...args: unknown[]) => unknown;
  parseMarkdown: (...args: unknown[]) => unknown;
  parser: (...args: unknown[]) => unknown;
  setOptions: (...args: unknown[]) => unknown;
  sy: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  use: (...args: unknown[]) => unknown;
  walkTokens: (...args: unknown[]) => unknown;
};
let peers: BindBindDeferredUiUrtPeers | null = null;

/** Wire bindBindDeferredUiUrt peers once companions land. */
export function setBindBindDeferredUiUrtPeers(
  next: BindBindDeferredUiUrtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `urt` / internal `$Wt`.
 */
export function bindBindDeferredUiUrt() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiUrt peers are not configured");
  }
  return class {
    defaults = peers.FUt();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = peers.sy;
    Renderer = peers.XWt;
    TextRenderer = peers.ZWt;
    Lexer = peers.oy;
    Tokenizer = peers.YWt;
    Hooks = peers.QWt;
    constructor(...e) {
      this.use(...peers.e);
    }
    walkTokens(e, t) {
      let n = [];
      for (let r of peers.e)
        switch (((n = n.concat(peers.t.call(this, r))), r.type)) {
          case "table": {
            let e = r;
            for (let r of peers.e.header)
              n = n.concat(this.walkTokens(r.tokens, peers.t));
            for (let r of peers.e.rows)
              for (let e of r)
                n = n.concat(this.walkTokens(peers.e.tokens, peers.t));
            break;
          }
          case "list": {
            let e = r;
            n = n.concat(this.walkTokens(peers.e.items, peers.t));
            break;
          }
          default: {
            let e = r;
            this.defaults.extensions?.childTokens?.[peers.e.type]
              ? this.defaults.extensions.childTokens[peers.e.type].forEach(
                  (item) => {
                    let i = peers.e[item].flat(1 / 0);
                    n = n.concat(this.walkTokens(i, peers.t));
                  },
                )
              : peers.e.tokens &&
                (n = n.concat(this.walkTokens(peers.e.tokens, peers.t)));
          }
        }
      return n;
    }
    use(...e) {
      let t = this.defaults.extensions || {
        renderers: {},
        childTokens: {},
      };
      return (
        peers.e.forEach((item) => {
          let n = {
            ...peers.e,
          };
          if (
            ((n.async = this.defaults.async || n.async || false),
            peers.e.extensions &&
              (peers.e.extensions.forEach((_item) => {
                if (!peers.e.name) throw Error("extension name required");
                if ("renderer" in peers.e) {
                  let n = peers.t.renderers[peers.e.name];
                  n
                    ? (peers.t.renderers[peers.e.name] = function (...t) {
                        let r = peers.e.renderer.apply(this, peers.t);
                        return (r === false && (r = n.apply(this, peers.t)), r);
                      })
                    : (peers.t.renderers[peers.e.name] = peers.e.renderer);
                }
                if ("tokenizer" in peers.e) {
                  if (
                    !peers.e.level ||
                    (peers.e.level !== "block" && peers.e.level !== "inline")
                  )
                    throw Error("extension level must be 'block' or 'inline'");
                  let n = peers.t[peers.e.level];
                  n
                    ? n.unshift(peers.e.tokenizer)
                    : (peers.t[peers.e.level] = [peers.e.tokenizer]);
                  peers.e.start &&
                    (peers.e.level === "block"
                      ? peers.t.startBlock
                        ? peers.t.startBlock.push(peers.e.start)
                        : (peers.t.startBlock = [peers.e.start])
                      : peers.e.level === "inline" &&
                        (peers.t.startInline
                          ? peers.t.startInline.push(peers.e.start)
                          : (peers.t.startInline = [peers.e.start])));
                }
                "childTokens" in peers.e &&
                  peers.e.childTokens &&
                  (peers.t.childTokens[peers.e.name] = peers.e.childTokens);
              }),
              (n.extensions = peers.t)),
            peers.e.renderer)
          ) {
            let t = this.defaults.renderer || new peers.XWt(this.defaults);
            for (let n in peers.e.renderer) {
              if (!(n in peers.t))
                throw Error(`renderer '${n}' does not exist`);
              if (["options", "parser"].includes(n)) continue;
              let r = n,
                i = peers.e.renderer[r],
                a = peers.t[r];
              peers.t[r] = (...e) => {
                let n = i.apply(peers.t, peers.e);
                return (
                  n === false && (n = a.apply(peers.t, peers.e)),
                  n || ""
                );
              };
            }
            n.renderer = peers.t;
          }
          if (peers.e.tokenizer) {
            let t = this.defaults.tokenizer || new peers.YWt(this.defaults);
            for (let n in peers.e.tokenizer) {
              if (!(n in peers.t))
                throw Error(`tokenizer '${n}' does not exist`);
              if (["options", "rules", "lexer"].includes(n)) continue;
              let r = n,
                i = peers.e.tokenizer[r],
                a = peers.t[r];
              peers.t[r] = (...e) => {
                let n = i.apply(peers.t, peers.e);
                return (n === false && (n = a.apply(peers.t, peers.e)), n);
              };
            }
            n.tokenizer = peers.t;
          }
          if (peers.e.hooks) {
            let t = this.defaults.hooks || new peers.QWt();
            for (let n in peers.e.hooks) {
              if (!(n in peers.t)) throw Error(`hook '${n}' does not exist`);
              if (["options", "block"].includes(n)) continue;
              let r = n,
                i = peers.e.hooks[r],
                a = peers.t[r];
              peers.QWt.passThroughHooks.has(n)
                ? (peers.t[r] = (e) => {
                    if (
                      this.defaults.async &&
                      peers.QWt.passThroughHooksRespectAsync.has(n)
                    )
                      return (async () => {
                        let n = await i.call(peers.t, peers.e);
                        return a.call(peers.t, n);
                      })();
                    let r = i.call(peers.t, peers.e);
                    return a.call(peers.t, r);
                  })
                : (peers.t[r] = (...e) => {
                    if (this.defaults.async)
                      return (async () => {
                        let n = await i.apply(peers.t, peers.e);
                        return (
                          n === false && (n = await a.apply(peers.t, peers.e)),
                          n
                        );
                      })();
                    let n = i.apply(peers.t, peers.e);
                    return (n === false && (n = a.apply(peers.t, peers.e)), n);
                  });
            }
            n.hooks = peers.t;
          }
          if (peers.e.walkTokens) {
            let t = this.defaults.walkTokens,
              r = peers.e.walkTokens;
            n.walkTokens = function (e) {
              let n = [];
              return (
                n.push(r.call(this, peers.e)),
                peers.t && (n = n.concat(peers.t.call(this, peers.e))),
                n
              );
            };
          }
          this.defaults = {
            ...this.defaults,
            ...n,
          };
        }),
        this
      );
    }
    setOptions(e) {
      return (
        (this.defaults = {
          ...this.defaults,
          ...peers.e,
        }),
        this
      );
    }
    lexer(e, t) {
      return peers.oy.lex(peers.e, peers.t ?? this.defaults);
    }
    parser(e, t) {
      return peers.sy.parse(peers.e, peers.t ?? this.defaults);
    }
    parseMarkdown(e) {
      return (t, n) => {
        let r = {
            ...n,
          },
          i = {
            ...this.defaults,
            ...r,
          },
          a = this.onError(!!i.silent, !!i.async);
        if (this.defaults.async === true && r.async === false)
          return a(
            Error(
              "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
            ),
          );
        if (typeof peers.t > "u" || peers.t === null)
          return a(Error("marked(): input parameter is undefined or null"));
        if (typeof peers.t != "string")
          return a(
            Error(
              "marked(): input parameter is of type " +
                Object.prototype.toString.call(peers.t) +
                ", string expected",
            ),
          );
        if (
          (i.hooks && ((i.hooks.options = i), (i.hooks.block = peers.e)),
          i.async)
        )
          return (async () => {
            let n = i.hooks ? await i.hooks.preprocess(peers.t) : peers.t,
              r = await (
                i.hooks
                  ? await i.hooks.provideLexer()
                  : peers.e
                    ? peers.oy.lex
                    : peers.oy.lexInline
              )(n, i),
              a = i.hooks ? await i.hooks.processAllTokens(r) : r;
            i.walkTokens &&
              (await Promise.all(this.walkTokens(a, i.walkTokens)));
            let o = await (
              i.hooks
                ? await i.hooks.provideParser()
                : peers.e
                  ? peers.sy.parse
                  : peers.sy.parseInline
            )(a, i);
            return i.hooks ? await i.hooks.postprocess(o) : o;
          })().catch(a);
        try {
          i.hooks && (t = i.hooks.preprocess(peers.t));
          let n = (
            i.hooks
              ? i.hooks.provideLexer()
              : peers.e
                ? peers.oy.lex
                : peers.oy.lexInline
          )(peers.t, i);
          i.hooks && (n = i.hooks.processAllTokens(n));
          i.walkTokens && this.walkTokens(n, i.walkTokens);
          let r = (
            i.hooks
              ? i.hooks.provideParser()
              : peers.e
                ? peers.sy.parse
                : peers.sy.parseInline
          )(n, i);
          return (i.hooks && (r = i.hooks.postprocess(r)), r);
        } catch (e) {
          return a(peers.e);
        }
      };
    }
    onError(e, t) {
      return (n) => {
        if (
          ((n.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          peers.e)
        ) {
          let e =
            "<p>An error occurred:</p><pre>" +
            peers.ny(n.message + "", true) +
            "</pre>";
          return peers.t ? Promise.resolve(peers.e) : peers.e;
        }
        if (peers.t) return Promise.reject(n);
        throw n;
      };
    }
  };
}
