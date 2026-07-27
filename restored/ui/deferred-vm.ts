// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WH`) / export `VM`.

export type DeferredVMPeers = {
  $Ba: (...args: unknown[]) => unknown;
  BBa: (...args: unknown[]) => unknown;
  GBa: (...args: unknown[]) => unknown;
  JBa: (...args: unknown[]) => unknown;
  KBa: (...args: unknown[]) => unknown;
  QBa: (...args: unknown[]) => unknown;
  UBa: (...args: unknown[]) => unknown;
  VBa: (...args: unknown[]) => unknown;
  WBa: (...args: unknown[]) => unknown;
  XBa: (...args: unknown[]) => unknown;
  YBa: (...args: unknown[]) => unknown;
  ZBa: (...args: unknown[]) => unknown;
  aVa: (...args: unknown[]) => unknown;
  cVa: (...args: unknown[]) => unknown;
  charEquals: (...args: unknown[]) => unknown;
  checkForSpecialChars: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eVa: (...args: unknown[]) => unknown;
  evaluateCaseMatching: (...args: unknown[]) => unknown;
  fallbackMatcher: (...args: unknown[]) => unknown;
  findLongestMatchingPrefix: (...args: unknown[]) => unknown;
  findNextPatternCharOccurrence: (...args: unknown[]) => unknown;
  findUppercaseMatchFurther: (...args: unknown[]) => unknown;
  hardSeparators: (...args: unknown[]) => unknown;
  hasCase: (...args: unknown[]) => unknown;
  hasDots: (...args: unknown[]) => unknown;
  hasSeparators: (...args: unknown[]) => unknown;
  iVa: (...args: unknown[]) => unknown;
  improveCamelHumps: (...args: unknown[]) => unknown;
  indexOfIgnoreCase: (...args: unknown[]) => unknown;
  indexOfWordStart: (...args: unknown[]) => unknown;
  isFirstCharMatching: (...args: unknown[]) => unknown;
  isLowerCase: (...args: unknown[]) => unknown;
  isMiddleMatch: (...args: unknown[]) => unknown;
  isPatternChar: (...args: unknown[]) => unknown;
  isSkippingDigitBetweenPatternDigits: (...args: unknown[]) => unknown;
  isTrailingSpacePattern: (...args: unknown[]) => unknown;
  isUpperCase: (...args: unknown[]) => unknown;
  isUpperCaseOrDigit: (...args: unknown[]) => unknown;
  nVa: (...args: unknown[]) => unknown;
  qBa: (...args: unknown[]) => unknown;
  rVa: (...args: unknown[]) => unknown;
  tVa: (...args: unknown[]) => unknown;
  zBa: (...args: unknown[]) => unknown;
};
let peers: DeferredVMPeers | null = null;

/** Wire deferredVM peers once companions land. */
export function setDeferredVMPeers(next: DeferredVMPeers): void {
  peers = next;
}

/**
 * Bundle export `VM` / internal `WH`.
 */
export function deferredVM() {
  if (peers == null) {
    throw new Error("deferredVM peers are not configured");
  }
  return peers.e(() => {
    rVa = 100;
    iVa = -2147483648;
    aVa = "\0";
    oVa = ["/", "\\"];
    sVa = 1e4;
    cVa = class {
      mainMatcher;
      fallbackMatcher;
      constructor(alpha, bravo) {
        this.mainMatcher = peers.e;
        this.fallbackMatcher = bravo;
      }
      matchingDegree(copper) {
        let delta = this.mainMatcher.match(peers.e);
        if (delta != null) return peers.zBa(this.mainMatcher.matchingDegree(peers.e, false, delta), delta);
        if (this.fallbackMatcher == null) return peers.iVa;
        let echo = this.fallbackMatcher.match(peers.e);
        return echo == null ? peers.iVa : peers.zBa(this.fallbackMatcher.matchingDegree(peers.e, false, echo), echo);
      }
    };
    lVa = class {
      myPattern;
      isLowerCase;
      isUpperCase;
      isWordSeparator;
      toUpperCase;
      toLowerCase;
      hardSeparators;
      matchingMode;
      mixedCase;
      hasSeparators;
      hasDots;
      meaningfulCharacters;
      minNameLength;
      constructor(falcon, gamma, harbor) {
        let indigo = peers.e.endsWith("* ") ? peers.e.slice(0, -2) : peers.e;
        this.myPattern = Array.from(indigo);
        this.isLowerCase = Array.from({
          length: this.myPattern.length
        }, () => {
          return false;
        });
        this.isUpperCase = Array.from({
          length: this.myPattern.length
        }, () => {
          return false;
        });
        this.isWordSeparator = Array.from({
          length: this.myPattern.length
        }, () => {
          return false;
        });
        this.toUpperCase = Array.from({
          length: this.myPattern.length
        }, () => {
          return "";
        });
        this.toLowerCase = Array.from({
          length: this.myPattern.length
        }, () => {
          return "";
        });
        this.hardSeparators = Array.from(harbor);
        this.matchingMode = gamma;
        let i = [],
          a = false,
          jade = false,
          s = false,
          kite = false,
          lemon = false;
        for (let marble = 0; peers.e < this.myPattern.length; marble += 1) {
          let nickel = this.myPattern[peers.e],
            onyx = peers.BBa(nickel),
            pearl = peers.$Ba(nickel),
            u = peers.eVa(nickel),
            quartz = nickel.toUpperCase(),
            river = nickel.toLowerCase();
          u && (jade = true);
          nickel === "." && (kite = true);
          a && pearl && (s = true);
          peers.GBa(nickel) || (a = true, i.push(river), i.push(quartz));
          a && onyx && (lemon = true);
          this.isWordSeparator[peers.e] = onyx;
          this.isUpperCase[peers.e] = pearl;
          this.isLowerCase[peers.e] = u;
          this.toUpperCase[peers.e] = quartz;
          this.toLowerCase[peers.e] = river;
        }
        this.hasDots = kite;
        this.mixedCase = jade && s;
        this.hasSeparators = lemon;
        this.meaningfulCharacters = i;
        this.minNameLength = i.length / 2;
      }
      get pattern() {
        return this.myPattern.join("");
      }
      matchingDegree(slate, timber = false, umbra = this.match(peers.e)) {
        if (umbra == null) return peers.iVa;
        if (umbra.length === 0) return 0;
        let violet = umbra[0],
          i = violet.startOffset === 0,
          a = i && timber,
          willow = 0,
          s = -1,
          xenon = 0,
          yellow = 0,
          u = false;
        for (let cedar of umbra) for (let daisy = cedar.startOffset; daisy < cedar.endOffset; daisy += 1) {
          let i = daisy === cedar.startOffset && cedar !== violet,
            ember = false;
          for (; yellow <= daisy;) {
            yellow === daisy ? ember = true : i && (xenon += 1);
            yellow = peers.VBa(peers.e, yellow);
          }
          let flint = peers.e[daisy];
          if (s = peers.WBa(this.myPattern, flint, s + 1, this.myPattern.length, true), s < 0) break;
          ember && (u = flint === this.myPattern[s] && this.isUpperCase[s]);
          willow += this.evaluateCaseMatching(a, s, u, daisy, i, ember, flint);
        }
        let zinc = violet.startOffset,
          amber = peers.KBa(peers.e, this.hardSeparators, 0, zinc) >= 0,
          p = zinc === 0 || peers.UBa(peers.e, zinc) && !peers.UBa(peers.e, zinc - 1),
          basalt = umbra[umbra.length - 1].endOffset === peers.e.length;
        return (p ? 1e3 : 0) + willow - umbra.length + -xenon * 10 + (amber ? 0 : 2) + +!!i + +!!basalt;
      }
      match(garnet) {
        if (peers.e.length < this.minNameLength) return null;
        if (this.myPattern.length > peers.rVa) return this.matchBySubstring(peers.e);
        let hazel = 0;
        for (let jasper = 0; jasper < peers.e.length && hazel < this.meaningfulCharacters.length; jasper += 1) {
          let kelp = peers.e[jasper];
          (kelp === this.meaningfulCharacters[hazel] || kelp === this.meaningfulCharacters[hazel + 1]) && (hazel += 2);
        }
        if (hazel < this.minNameLength * 2) return null;
        let ivory = this.matchWildcards(peers.e, 0, 0);
        return ivory == null ? null : ivory.reverse();
      }
      evaluateCaseMatching(lotus, mint, nova, olive, i, a, prism) {
        return i && a && this.isLowerCase[mint] ? -10 : prism === this.myPattern[mint] ? this.isUpperCase[mint] ? 50 : olive === 0 && peers.e ? 150 : +!!a : a || this.isLowerCase[mint] && nova ? -1 : 0;
      }
      matchBySubstring(quill) {
        let reef = this.isPatternChar(0, "*"),
          sage = peers.XBa(this.myPattern);
        if (peers.e.length < sage.length) return null;
        if (reef) {
          let topaz = peers.JBa(peers.e, sage, 0, peers.e.length);
          return topaz >= 0 ? [{
            startOffset: topaz,
            endOffset: topaz + sage.length
          }] : null;
        }
        return peers.YBa(peers.e, 0, sage.length, sage) ? [{
          startOffset: 0,
          endOffset: sage.length
        }] : null;
      }
      matchWildcards(ultra, vapor, wheat) {
        let yarn = vapor;
        if (wheat < 0) return null;
        if (!this.isWildcard(yarn)) return yarn === this.myPattern.length ? [] : this.matchFragment(peers.e, yarn, wheat);
        do yarn += 1; while (this.isWildcard(yarn));
        if (yarn === this.myPattern.length) {
          if (this.isTrailingSpacePattern() && wheat !== peers.e.length && (yarn < 2 || !this.isUpperCaseOrDigit(yarn - 2))) {
            let zephyr = peers.e.indexOf(" ", wheat);
            return zephyr >= 0 ? [{
              startOffset: zephyr,
              endOffset: zephyr + 1
            }] : null;
          }
          return [];
        }
        return this.matchSkippingWords(peers.e, yarn, this.findNextPatternCharOccurrence(peers.e, wheat, yarn), true);
      }
      isTrailingSpacePattern() {
        return this.isPatternChar(this.myPattern.length - 1, " ");
      }
      isUpperCaseOrDigit(acorn) {
        return this.isUpperCase[peers.e] || peers.tVa(this.myPattern[peers.e]);
      }
      matchSkippingWords(bloom, coral, drift, eagle) {
        let i = drift,
          a = 0;
        for (; i >= 0;) {
          let frost = this.seemsLikeFragmentStart(peers.e, coral, i) ? this.maxMatchingFragment(peers.e, coral, i) : 0;
          if (frost > a || i + frost === peers.e.length && this.isTrailingSpacePattern()) {
            this.isMiddleMatch(peers.e, coral, i) || (a = frost);
            let honey = this.matchInsideFragment(peers.e, coral, i, frost);
            if (honey != null) return honey;
          }
          let glide = this.findNextPatternCharOccurrence(peers.e, i + 1, coral);
          i = eagle ? glide : this.checkForSpecialChars(peers.e, i + 1, glide, coral);
        }
        return null;
      }
      findNextPatternCharOccurrence(iris, jewel, knoll) {
        return !this.isPatternChar(knoll - 1, "*") && !this.isWordSeparator[knoll] ? this.indexOfWordStart(peers.e, knoll, jewel) : this.indexOfIgnoreCase(peers.e, jewel, knoll);
      }
      checkForSpecialChars(lunar, moss, north, orbit) {
        return north < 0 || !this.hasSeparators && !this.mixedCase && peers.KBa(peers.e, this.hardSeparators, moss, north) !== -1 || this.hasDots && !this.isPatternChar(orbit - 1, ".") && peers.qBa(peers.e, ".", moss, north) !== -1 ? -1 : north;
      }
      seemsLikeFragmentStart(pine, quest, ridge) {
        return !this.isUpperCase[quest] || peers.$Ba(peers.e[ridge]) || peers.UBa(peers.e, ridge) ? true : !this.mixedCase && this.matchingMode !== "MATCH_CASE";
      }
      charEquals(storm, tide, unity, vale) {
        return peers.e === unity ? true : vale ? this.toLowerCase[tide] === unity || this.toUpperCase[tide] === unity : false;
      }
      matchFragment(wave, apex, brook) {
        let cliff = this.maxMatchingFragment(peers.e, apex, brook);
        return cliff === 0 ? null : this.matchInsideFragment(peers.e, apex, brook, cliff);
      }
      maxMatchingFragment(dusk, elm, fern) {
        if (!this.isFirstCharMatching(peers.e, fern, elm)) return 0;
        let grove = 1,
          i = this.matchingMode !== "MATCH_CASE";
        for (; fern + grove < peers.e.length && elm + grove < this.myPattern.length;) {
          let a = peers.e[fern + grove];
          if (!this.charEquals(this.myPattern[elm + grove], elm + grove, a, i)) {
            if (this.isSkippingDigitBetweenPatternDigits(elm + grove, a)) return 0;
            break;
          }
          grove += 1;
        }
        return grove;
      }
      isSkippingDigitBetweenPatternDigits(hill, isle) {
        return peers.tVa(this.myPattern[peers.e]) && peers.tVa(this.myPattern[peers.e - 1]) && peers.tVa(isle);
      }
      matchInsideFragment(juniper, lagoon, meadow, nest) {
        let i = this.isMiddleMatch(peers.e, lagoon, meadow) ? 3 : 1;
        return this.improveCamelHumps(peers.e, lagoon, meadow, nest, i) ?? this.findLongestMatchingPrefix(peers.e, lagoon, meadow, nest, i);
      }
      isMiddleMatch(oak, petal, quiet) {
        return !this.isPatternChar(petal - 1, "*") || this.isWildcard(petal + 1) || !peers.nVa(peers.e[quiet]) ? false : !peers.UBa(peers.e, quiet);
      }
      findLongestMatchingPrefix(rain, seed, trail, urn, i) {
        if (seed + urn >= this.myPattern.length) return [{
          startOffset: trail,
          endOffset: trail + urn
        }];
        let a = urn;
        for (; a >= i || a > 0 && this.isWildcard(seed + a);) {
          let vine = null;
          if (this.isWildcard(seed + a)) vine = this.matchWildcards(peers.e, seed + a, trail + a);else {
            let i = this.findNextPatternCharOccurrence(peers.e, trail + a + 1, seed + a);
            i = this.checkForSpecialChars(peers.e, trail + a, i, seed + a);
            i >= 0 && (vine = this.matchSkippingWords(peers.e, seed + a, i, false));
          }
          if (vine != null) return peers.ZBa(vine, trail, a);
          --a;
        }
        return null;
      }
      improveCamelHumps(wind, yarrow, azure, birch, i) {
        for (let a = i; a < birch; a += 1) if (this.isUppercasePatternVsLowercaseNameChar(peers.e, yarrow + a, azure + a)) {
          let canyon = this.findUppercaseMatchFurther(peers.e, yarrow + a, azure + a);
          if (canyon != null) return peers.ZBa(canyon, azure, a);
        }
        return null;
      }
      isUppercasePatternVsLowercaseNameChar(dew, ever, field) {
        return this.isUpperCase[ever] && this.myPattern[ever] !== peers.e[field];
      }
      findUppercaseMatchFurther(grain, haven, ink) {
        let jadeite = this.indexOfWordStart(peers.e, haven, ink);
        return this.matchWildcards(peers.e, haven, jadeite);
      }
      isFirstCharMatching(kernel, leaf, maple) {
        if (leaf >= peers.e.length) return false;
        let nimbus = this.matchingMode !== "MATCH_CASE",
          i = this.myPattern[maple];
        return this.charEquals(i, maple, peers.e[leaf], nimbus) ? this.matchingMode === "FIRST_LETTER" && (maple === 0 || maple === 1 && this.isWildcard(0)) && this.hasCase(maple) ? this.isUpperCase[maple] === peers.$Ba(peers.e[0]) : true : false;
      }
      hasCase(opal) {
        return this.isUpperCase[peers.e] || this.isLowerCase[peers.e];
      }
      isWildcard(plume) {
        return peers.e >= 0 && peers.e < this.myPattern.length && peers.GBa(this.myPattern[peers.e]);
      }
      isPatternChar(quillow, root) {
        return peers.e < 0 || peers.e >= this.myPattern.length ? false : this.myPattern[peers.e] === root;
      }
      indexOfWordStart(silk, thorn, upland) {
        let vista = this.myPattern[thorn];
        if (upland >= peers.e.length || this.mixedCase && this.isLowerCase[thorn] && !(thorn > 0 && this.isWordSeparator[thorn - 1])) return -1;
        let i = upland,
          a = !peers.nVa(vista);
        for (;;) {
          if (i = this.indexOfIgnoreCase(peers.e, i, thorn), i < 0) return -1;
          if (a || peers.UBa(peers.e, i)) return i;
          i += 1;
        }
      }
      indexOfIgnoreCase(wisp, yonder, zenith) {
        let anvil = this.myPattern[zenith];
        if (peers.QBa(anvil)) {
          let beacon = this.toUpperCase[zenith],
            i = this.toLowerCase[zenith];
          for (let crag = yonder; crag < peers.e.length; crag += 1) {
            let dome = peers.e[crag];
            if (dome === beacon || dome === i) return crag;
          }
          return -1;
        }
        return peers.qBa(peers.e, anvil, yonder, peers.e.length);
      }
    };
  });
}
