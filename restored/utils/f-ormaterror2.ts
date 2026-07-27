// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ku`) / export `Xft`.

export type BindFORMATERROR2Peers = {
  Gu: (...args: unknown[]) => unknown;
  Iu: (...args: unknown[]) => unknown;
  Mu: (...args: unknown[]) => unknown;
  cAe: (...args: unknown[]) => unknown;
  dAe: (...args: unknown[]) => unknown;
  defaultMessage: (...args: unknown[]) => unknown;
  description: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fAe: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  lAe: (...args: unknown[]) => unknown;
  pAe: (...args: unknown[]) => unknown;
  sAe: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  uAe: (...args: unknown[]) => unknown;
};
let peers: BindFORMATERROR2Peers | null = null;

/** Wire bindFORMATERROR2 peers once companions land. */
export function setBindFORMATERROR2Peers(next: BindFORMATERROR2Peers): void {
  peers = next;
}

/**
 * Bundle export `Xft` / internal `Ku`.
 */
export function bindFORMATERROR2() {
  if (peers == null) {
    throw new Error("bindFORMATERROR2 peers are not configured");
  }
  return peers.e(() => {
    peers.Iu();
    (function (e) {
      peers.e.FORMAT_ERROR = "FORMAT_ERROR";
      peers.e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER";
      peers.e.INVALID_CONFIG = "INVALID_CONFIG";
      peers.e.MISSING_DATA = "MISSING_DATA";
      peers.e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
    })((sAe ||= {}));
    cAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(n, r, i) {
        var a = this,
          o = i ? (i instanceof Error ? i : Error(String(i))) : undefined;
        return (
          (a =
            peers.e.call(
              this,
              `[@formatjs/intl Error ${n}] ${r}
${
  o
    ? `
${o.message}
${o.stack}`
    : ""
}`,
            ) || this),
          (a.code = n),
          typeof Error.captureStackTrace == "function" &&
            Error.captureStackTrace(a, peers.t),
          a
        );
      }
      return peers.t;
    })(Error);
    lAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n) {
        return (
          peers.e.call(this, peers.sAe.UNSUPPORTED_FORMATTER, peers.t, n) ||
          this
        );
      }
      return peers.t;
    })(peers.cAe);
    uAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n) {
        return peers.e.call(this, peers.sAe.INVALID_CONFIG, peers.t, n) || this;
      }
      return peers.t;
    })(peers.cAe);
    dAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n) {
        return peers.e.call(this, peers.sAe.MISSING_DATA, peers.t, n) || this;
      }
      return peers.t;
    })(peers.cAe);
    Gu = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n, r) {
        var i =
          peers.e.call(
            this,
            peers.sAe.FORMAT_ERROR,
            `${peers.t}
Locale: ${n}
`,
            r,
          ) || this;
        return ((i.locale = n), i);
      }
      return peers.t;
    })(peers.cAe);
    fAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n, r, i) {
        var a =
          peers.e.call(
            this,
            `${peers.t}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`,
            n,
            i,
          ) || this;
        return ((a.descriptor = r), (a.locale = n), a);
      }
      return peers.t;
    })(peers.Gu);
    pAe = (function (e) {
      peers.Mu(peers.t, peers.e);
      function t(t, n) {
        var r =
          peers.e.call(
            this,
            peers.sAe.MISSING_TRANSLATION,
            `Missing message: "${peers.t.id}" for locale "${n}", using ${
              peers.t.defaultMessage
                ? `default message (${
                    typeof peers.t.defaultMessage == "string"
                      ? peers.t.defaultMessage
                      : peers.t.defaultMessage
                          .map(function (item) {
                            return peers.e.value ?? JSON.stringify(peers.e);
                          })
                          .join()
                  })`
                : "id"
            } as fallback.`,
          ) || this;
        return ((r.descriptor = peers.t), r);
      }
      return peers.t;
    })(peers.cAe);
  });
}
