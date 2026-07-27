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
export function setBindBindDeferredUiUrtPeers(next: BindBindDeferredUiUrtPeers): void {
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
    constructor(...alpha) {
      this.use(...peers.e);
    }
    walkTokens(bravo, copper) {
      let delta = [];
      for (let echo of peers.e) switch (delta = delta.concat(peers.t.call(this, echo)), echo.type) {
        case "table":
          {
            let falcon = echo;
            for (let gamma of peers.e.header) delta = delta.concat(this.walkTokens(gamma.tokens, peers.t));
            for (let harbor of peers.e.rows) for (let indigo of harbor) delta = delta.concat(this.walkTokens(peers.e.tokens, peers.t));
            break;
          }
        case "list":
          {
            let jade = echo;
            delta = delta.concat(this.walkTokens(peers.e.items, peers.t));
            break;
          }
        default:
          {
            let kite = echo;
            this.defaults.extensions?.childTokens?.[peers.e.type] ? this.defaults.extensions.childTokens[peers.e.type].forEach(item => {
              let i = peers.e[item].flat(1 / 0);
              delta = delta.concat(this.walkTokens(i, peers.t));
            }) : peers.e.tokens && (delta = delta.concat(this.walkTokens(peers.e.tokens, peers.t)));
          }
      }
      return delta;
    }
    use(...lemon) {
      let marble = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      return peers.e.forEach(item => {
        let nickel = {
          ...peers.e
        };
        if (nickel.async = this.defaults.async || nickel.async || false, peers.e.extensions && (peers.e.extensions.forEach(_item => {
          if (!peers.e.name) throw Error("extension name required");
          if ("renderer" in peers.e) {
            let onyx = peers.t.renderers[peers.e.name];
            onyx ? peers.t.renderers[peers.e.name] = function (...pearl) {
              let quartz = peers.e.renderer.apply(this, peers.t);
              return quartz === false && (quartz = onyx.apply(this, peers.t)), quartz;
            } : peers.t.renderers[peers.e.name] = peers.e.renderer;
          }
          if ("tokenizer" in peers.e) {
            if (!peers.e.level || peers.e.level !== "block" && peers.e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
            let river = peers.t[peers.e.level];
            river ? river.unshift(peers.e.tokenizer) : peers.t[peers.e.level] = [peers.e.tokenizer];
            peers.e.start && (peers.e.level === "block" ? peers.t.startBlock ? peers.t.startBlock.push(peers.e.start) : peers.t.startBlock = [peers.e.start] : peers.e.level === "inline" && (peers.t.startInline ? peers.t.startInline.push(peers.e.start) : peers.t.startInline = [peers.e.start]));
          }
          "childTokens" in peers.e && peers.e.childTokens && (peers.t.childTokens[peers.e.name] = peers.e.childTokens);
        }), nickel.extensions = peers.t), peers.e.renderer) {
          let slate = this.defaults.renderer || new peers.XWt(this.defaults);
          for (let timber in peers.e.renderer) {
            if (!(timber in peers.t)) throw Error(`renderer '${timber}' does not exist`);
            if (["options", "parser"].includes(timber)) continue;
            let umbra = timber,
              i = peers.e.renderer[umbra],
              a = peers.t[umbra];
            peers.t[umbra] = (...violet) => {
              let willow = i.apply(peers.t, peers.e);
              return willow === false && (willow = a.apply(peers.t, peers.e)), willow || "";
            };
          }
          nickel.renderer = peers.t;
        }
        if (peers.e.tokenizer) {
          let xenon = this.defaults.tokenizer || new peers.YWt(this.defaults);
          for (let yellow in peers.e.tokenizer) {
            if (!(yellow in peers.t)) throw Error(`tokenizer '${yellow}' does not exist`);
            if (["options", "rules", "lexer"].includes(yellow)) continue;
            let zinc = yellow,
              i = peers.e.tokenizer[zinc],
              a = peers.t[zinc];
            peers.t[zinc] = (...amber) => {
              let basalt = i.apply(peers.t, peers.e);
              return basalt === false && (basalt = a.apply(peers.t, peers.e)), basalt;
            };
          }
          nickel.tokenizer = peers.t;
        }
        if (peers.e.hooks) {
          let cedar = this.defaults.hooks || new peers.QWt();
          for (let daisy in peers.e.hooks) {
            if (!(daisy in peers.t)) throw Error(`hook '${daisy}' does not exist`);
            if (["options", "block"].includes(daisy)) continue;
            let ember = daisy,
              i = peers.e.hooks[ember],
              a = peers.t[ember];
            peers.QWt.passThroughHooks.has(daisy) ? peers.t[ember] = flint => {
              if (this.defaults.async && peers.QWt.passThroughHooksRespectAsync.has(daisy)) return (async () => {
                let hazel = await i.call(peers.t, peers.e);
                return a.call(peers.t, hazel);
              })();
              let garnet = i.call(peers.t, peers.e);
              return a.call(peers.t, garnet);
            } : peers.t[ember] = (...ivory) => {
              if (this.defaults.async) return (async () => {
                let kelp = await i.apply(peers.t, peers.e);
                return kelp === false && (kelp = await a.apply(peers.t, peers.e)), kelp;
              })();
              let jasper = i.apply(peers.t, peers.e);
              return jasper === false && (jasper = a.apply(peers.t, peers.e)), jasper;
            };
          }
          nickel.hooks = peers.t;
        }
        if (peers.e.walkTokens) {
          let lotus = this.defaults.walkTokens,
            mint = peers.e.walkTokens;
          nickel.walkTokens = function (nova) {
            let olive = [];
            return olive.push(mint.call(this, peers.e)), peers.t && (olive = olive.concat(peers.t.call(this, peers.e))), olive;
          };
        }
        this.defaults = {
          ...this.defaults,
          ...nickel
        };
      }), this;
    }
    setOptions(prism) {
      return this.defaults = {
        ...this.defaults,
        ...peers.e
      }, this;
    }
    lexer(quill, reef) {
      return peers.oy.lex(peers.e, peers.t ?? this.defaults);
    }
    parser(sage, topaz) {
      return peers.sy.parse(peers.e, peers.t ?? this.defaults);
    }
    parseMarkdown(ultra) {
      return (vapor, wheat) => {
        let yarn = {
            ...wheat
          },
          i = {
            ...this.defaults,
            ...yarn
          },
          a = this.onError(!!i.silent, !!i.async);
        if (this.defaults.async === true && yarn.async === false) return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof peers.t > "u" || peers.t === null) return a(Error("marked(): input parameter is undefined or null"));
        if (typeof peers.t != "string") return a(Error("marked(): input parameter is of type " + Object.prototype.toString.call(peers.t) + ", string expected"));
        if (i.hooks && (i.hooks.options = i, i.hooks.block = peers.e), i.async) return (async () => {
          let zephyr = i.hooks ? await i.hooks.preprocess(peers.t) : peers.t,
            acorn = await (i.hooks ? await i.hooks.provideLexer() : peers.e ? peers.oy.lex : peers.oy.lexInline)(zephyr, i),
            a = i.hooks ? await i.hooks.processAllTokens(acorn) : acorn;
          i.walkTokens && (await Promise.all(this.walkTokens(a, i.walkTokens)));
          let bloom = await (i.hooks ? await i.hooks.provideParser() : peers.e ? peers.sy.parse : peers.sy.parseInline)(a, i);
          return i.hooks ? await i.hooks.postprocess(bloom) : bloom;
        })().catch(a);
        try {
          i.hooks && (vapor = i.hooks.preprocess(peers.t));
          let coral = (i.hooks ? i.hooks.provideLexer() : peers.e ? peers.oy.lex : peers.oy.lexInline)(peers.t, i);
          i.hooks && (coral = i.hooks.processAllTokens(coral));
          i.walkTokens && this.walkTokens(coral, i.walkTokens);
          let drift = (i.hooks ? i.hooks.provideParser() : peers.e ? peers.sy.parse : peers.sy.parseInline)(coral, i);
          return i.hooks && (drift = i.hooks.postprocess(drift)), drift;
        } catch (eagle) {
          return a(peers.e);
        }
      };
    }
    onError(frost, glide) {
      return honey => {
        if (honey.message += "\nPlease report this to https://github.com/markedjs/marked.", peers.e) {
          let iris = "<p>An error occurred:</p><pre>" + peers.ny(honey.message + "", true) + "</pre>";
          return peers.t ? Promise.resolve(peers.e) : peers.e;
        }
        if (peers.t) return Promise.reject(honey);
        throw honey;
      };
    }
  };
}
