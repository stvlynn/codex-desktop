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
      constructor(e, t) {
        this.mainMatcher = peers.e;
        this.fallbackMatcher = t;
      }
      matchingDegree(e) {
        let t = this.mainMatcher.match(peers.e);
        if (t != null)
          return peers.zBa(
            this.mainMatcher.matchingDegree(peers.e, false, t),
            t,
          );
        if (this.fallbackMatcher == null) return peers.iVa;
        let n = this.fallbackMatcher.match(peers.e);
        return n == null
          ? peers.iVa
          : peers.zBa(
              this.fallbackMatcher.matchingDegree(peers.e, false, n),
              n,
            );
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
      constructor(e, t, n) {
        let r = peers.e.endsWith("* ") ? peers.e.slice(0, -2) : peers.e;
        this.myPattern = Array.from(r);
        this.isLowerCase = Array.from(
          {
            length: this.myPattern.length,
          },
          () => {
            return false;
          },
        );
        this.isUpperCase = Array.from(
          {
            length: this.myPattern.length,
          },
          () => {
            return false;
          },
        );
        this.isWordSeparator = Array.from(
          {
            length: this.myPattern.length,
          },
          () => {
            return false;
          },
        );
        this.toUpperCase = Array.from(
          {
            length: this.myPattern.length,
          },
          () => {
            return "";
          },
        );
        this.toLowerCase = Array.from(
          {
            length: this.myPattern.length,
          },
          () => {
            return "";
          },
        );
        this.hardSeparators = Array.from(n);
        this.matchingMode = t;
        let i = [],
          a = false,
          o = false,
          s = false,
          c = false,
          l = false;
        for (let e = 0; peers.e < this.myPattern.length; e += 1) {
          let t = this.myPattern[peers.e],
            n = peers.BBa(t),
            r = peers.$Ba(t),
            u = peers.eVa(t),
            d = t.toUpperCase(),
            f = t.toLowerCase();
          u && (o = true);
          t === "." && (c = true);
          a && r && (s = true);
          peers.GBa(t) || ((a = true), i.push(f), i.push(d));
          a && n && (l = true);
          this.isWordSeparator[peers.e] = n;
          this.isUpperCase[peers.e] = r;
          this.isLowerCase[peers.e] = u;
          this.toUpperCase[peers.e] = d;
          this.toLowerCase[peers.e] = f;
        }
        this.hasDots = c;
        this.mixedCase = o && s;
        this.hasSeparators = l;
        this.meaningfulCharacters = i;
        this.minNameLength = i.length / 2;
      }
      get pattern() {
        return this.myPattern.join("");
      }
      matchingDegree(e, t = false, n = this.match(peers.e)) {
        if (n == null) return peers.iVa;
        if (n.length === 0) return 0;
        let r = n[0],
          i = r.startOffset === 0,
          a = i && t,
          o = 0,
          s = -1,
          c = 0,
          l = 0,
          u = false;
        for (let t of n)
          for (let n = t.startOffset; n < t.endOffset; n += 1) {
            let i = n === t.startOffset && t !== r,
              d = false;
            for (; l <= n; ) {
              l === n ? (d = true) : i && (c += 1);
              l = peers.VBa(peers.e, l);
            }
            let f = peers.e[n];
            if (
              ((s = peers.WBa(
                this.myPattern,
                f,
                s + 1,
                this.myPattern.length,
                true,
              )),
              s < 0)
            )
              break;
            d && (u = f === this.myPattern[s] && this.isUpperCase[s]);
            o += this.evaluateCaseMatching(a, s, u, n, i, d, f);
          }
        let d = r.startOffset,
          f = peers.KBa(peers.e, this.hardSeparators, 0, d) >= 0,
          p = d === 0 || (peers.UBa(peers.e, d) && !peers.UBa(peers.e, d - 1)),
          m = n[n.length - 1].endOffset === peers.e.length;
        return (
          (p ? 1e3 : 0) + o - n.length + -c * 10 + (f ? 0 : 2) + +!!i + +!!m
        );
      }
      match(e) {
        if (peers.e.length < this.minNameLength) return null;
        if (this.myPattern.length > peers.rVa)
          return this.matchBySubstring(peers.e);
        let t = 0;
        for (
          let n = 0;
          n < peers.e.length && t < this.meaningfulCharacters.length;
          n += 1
        ) {
          let r = peers.e[n];
          (r === this.meaningfulCharacters[t] ||
            r === this.meaningfulCharacters[t + 1]) &&
            (t += 2);
        }
        if (t < this.minNameLength * 2) return null;
        let n = this.matchWildcards(peers.e, 0, 0);
        return n == null ? null : n.reverse();
      }
      evaluateCaseMatching(e, t, n, r, i, a, o) {
        return i && a && this.isLowerCase[t]
          ? -10
          : o === this.myPattern[t]
            ? this.isUpperCase[t]
              ? 50
              : r === 0 && peers.e
                ? 150
                : +!!a
            : a || (this.isLowerCase[t] && n)
              ? -1
              : 0;
      }
      matchBySubstring(e) {
        let t = this.isPatternChar(0, "*"),
          n = peers.XBa(this.myPattern);
        if (peers.e.length < n.length) return null;
        if (t) {
          let t = peers.JBa(peers.e, n, 0, peers.e.length);
          return t >= 0
            ? [
                {
                  startOffset: t,
                  endOffset: t + n.length,
                },
              ]
            : null;
        }
        return peers.YBa(peers.e, 0, n.length, n)
          ? [
              {
                startOffset: 0,
                endOffset: n.length,
              },
            ]
          : null;
      }
      matchWildcards(e, t, n) {
        let r = t;
        if (n < 0) return null;
        if (!this.isWildcard(r))
          return r === this.myPattern.length
            ? []
            : this.matchFragment(peers.e, r, n);
        do r += 1;
        while (this.isWildcard(r));
        if (r === this.myPattern.length) {
          if (
            this.isTrailingSpacePattern() &&
            n !== peers.e.length &&
            (r < 2 || !this.isUpperCaseOrDigit(r - 2))
          ) {
            let t = peers.e.indexOf(" ", n);
            return t >= 0
              ? [
                  {
                    startOffset: t,
                    endOffset: t + 1,
                  },
                ]
              : null;
          }
          return [];
        }
        return this.matchSkippingWords(
          peers.e,
          r,
          this.findNextPatternCharOccurrence(peers.e, n, r),
          true,
        );
      }
      isTrailingSpacePattern() {
        return this.isPatternChar(this.myPattern.length - 1, " ");
      }
      isUpperCaseOrDigit(e) {
        return this.isUpperCase[peers.e] || peers.tVa(this.myPattern[peers.e]);
      }
      matchSkippingWords(e, t, n, r) {
        let i = n,
          a = 0;
        for (; i >= 0; ) {
          let n = this.seemsLikeFragmentStart(peers.e, t, i)
            ? this.maxMatchingFragment(peers.e, t, i)
            : 0;
          if (
            n > a ||
            (i + n === peers.e.length && this.isTrailingSpacePattern())
          ) {
            this.isMiddleMatch(peers.e, t, i) || (a = n);
            let r = this.matchInsideFragment(peers.e, t, i, n);
            if (r != null) return r;
          }
          let o = this.findNextPatternCharOccurrence(peers.e, i + 1, t);
          i = r ? o : this.checkForSpecialChars(peers.e, i + 1, o, t);
        }
        return null;
      }
      findNextPatternCharOccurrence(e, t, n) {
        return !this.isPatternChar(n - 1, "*") && !this.isWordSeparator[n]
          ? this.indexOfWordStart(peers.e, n, t)
          : this.indexOfIgnoreCase(peers.e, t, n);
      }
      checkForSpecialChars(e, t, n, r) {
        return n < 0 ||
          (!this.hasSeparators &&
            !this.mixedCase &&
            peers.KBa(peers.e, this.hardSeparators, t, n) !== -1) ||
          (this.hasDots &&
            !this.isPatternChar(r - 1, ".") &&
            peers.qBa(peers.e, ".", t, n) !== -1)
          ? -1
          : n;
      }
      seemsLikeFragmentStart(e, t, n) {
        return !this.isUpperCase[t] ||
          peers.$Ba(peers.e[n]) ||
          peers.UBa(peers.e, n)
          ? true
          : !this.mixedCase && this.matchingMode !== "MATCH_CASE";
      }
      charEquals(e, t, n, r) {
        return peers.e === n
          ? true
          : r
            ? this.toLowerCase[t] === n || this.toUpperCase[t] === n
            : false;
      }
      matchFragment(e, t, n) {
        let r = this.maxMatchingFragment(peers.e, t, n);
        return r === 0 ? null : this.matchInsideFragment(peers.e, t, n, r);
      }
      maxMatchingFragment(e, t, n) {
        if (!this.isFirstCharMatching(peers.e, n, t)) return 0;
        let r = 1,
          i = this.matchingMode !== "MATCH_CASE";
        for (; n + r < peers.e.length && t + r < this.myPattern.length; ) {
          let a = peers.e[n + r];
          if (!this.charEquals(this.myPattern[t + r], t + r, a, i)) {
            if (this.isSkippingDigitBetweenPatternDigits(t + r, a)) return 0;
            break;
          }
          r += 1;
        }
        return r;
      }
      isSkippingDigitBetweenPatternDigits(e, t) {
        return (
          peers.tVa(this.myPattern[peers.e]) &&
          peers.tVa(this.myPattern[peers.e - 1]) &&
          peers.tVa(t)
        );
      }
      matchInsideFragment(e, t, n, r) {
        let i = this.isMiddleMatch(peers.e, t, n) ? 3 : 1;
        return (
          this.improveCamelHumps(peers.e, t, n, r, i) ??
          this.findLongestMatchingPrefix(peers.e, t, n, r, i)
        );
      }
      isMiddleMatch(e, t, n) {
        return !this.isPatternChar(t - 1, "*") ||
          this.isWildcard(t + 1) ||
          !peers.nVa(peers.e[n])
          ? false
          : !peers.UBa(peers.e, n);
      }
      findLongestMatchingPrefix(e, t, n, r, i) {
        if (t + r >= this.myPattern.length)
          return [
            {
              startOffset: n,
              endOffset: n + r,
            },
          ];
        let a = r;
        for (; a >= i || (a > 0 && this.isWildcard(t + a)); ) {
          let r = null;
          if (this.isWildcard(t + a))
            r = this.matchWildcards(peers.e, t + a, n + a);
          else {
            let i = this.findNextPatternCharOccurrence(
              peers.e,
              n + a + 1,
              t + a,
            );
            i = this.checkForSpecialChars(peers.e, n + a, i, t + a);
            i >= 0 && (r = this.matchSkippingWords(peers.e, t + a, i, false));
          }
          if (r != null) return peers.ZBa(r, n, a);
          --a;
        }
        return null;
      }
      improveCamelHumps(e, t, n, r, i) {
        for (let a = i; a < r; a += 1)
          if (
            this.isUppercasePatternVsLowercaseNameChar(peers.e, t + a, n + a)
          ) {
            let r = this.findUppercaseMatchFurther(peers.e, t + a, n + a);
            if (r != null) return peers.ZBa(r, n, a);
          }
        return null;
      }
      isUppercasePatternVsLowercaseNameChar(e, t, n) {
        return this.isUpperCase[t] && this.myPattern[t] !== peers.e[n];
      }
      findUppercaseMatchFurther(e, t, n) {
        let r = this.indexOfWordStart(peers.e, t, n);
        return this.matchWildcards(peers.e, t, r);
      }
      isFirstCharMatching(e, t, n) {
        if (t >= peers.e.length) return false;
        let r = this.matchingMode !== "MATCH_CASE",
          i = this.myPattern[n];
        return this.charEquals(i, n, peers.e[t], r)
          ? this.matchingMode === "FIRST_LETTER" &&
            (n === 0 || (n === 1 && this.isWildcard(0))) &&
            this.hasCase(n)
            ? this.isUpperCase[n] === peers.$Ba(peers.e[0])
            : true
          : false;
      }
      hasCase(e) {
        return this.isUpperCase[peers.e] || this.isLowerCase[peers.e];
      }
      isWildcard(e) {
        return (
          peers.e >= 0 &&
          peers.e < this.myPattern.length &&
          peers.GBa(this.myPattern[peers.e])
        );
      }
      isPatternChar(e, t) {
        return peers.e < 0 || peers.e >= this.myPattern.length
          ? false
          : this.myPattern[peers.e] === t;
      }
      indexOfWordStart(e, t, n) {
        let r = this.myPattern[t];
        if (
          n >= peers.e.length ||
          (this.mixedCase &&
            this.isLowerCase[t] &&
            !(t > 0 && this.isWordSeparator[t - 1]))
        )
          return -1;
        let i = n,
          a = !peers.nVa(r);
        for (;;) {
          if (((i = this.indexOfIgnoreCase(peers.e, i, t)), i < 0)) return -1;
          if (a || peers.UBa(peers.e, i)) return i;
          i += 1;
        }
      }
      indexOfIgnoreCase(e, t, n) {
        let r = this.myPattern[n];
        if (peers.QBa(r)) {
          let r = this.toUpperCase[n],
            i = this.toLowerCase[n];
          for (let n = t; n < peers.e.length; n += 1) {
            let t = peers.e[n];
            if (t === r || t === i) return n;
          }
          return -1;
        }
        return peers.qBa(peers.e, r, t, peers.e.length);
      }
    };
  });
}
