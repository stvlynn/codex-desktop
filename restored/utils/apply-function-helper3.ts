// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Oe`) / export `ept`.

export type BindApplyFunctionHelper3Peers = {
  Iterator: (...args: unknown[]) => unknown;
  TypeError: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
};

let peers: BindApplyFunctionHelper3Peers | null = null;

/** Wire bindApplyFunctionHelper3 peers once companions land. */
export function setBindApplyFunctionHelper3Peers(next: BindApplyFunctionHelper3Peers): void {
  peers = next;
}

/**
 * Bundle export `ept` / internal `_Oe`.
 */
export function bindApplyFunctionHelper3(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("bindApplyFunctionHelper3 peers are not configured");
  }

  var n = {
      label: 0,
      sent: function () {
        if (peers.a[0] & 1) throw peers.a[1];
        return peers.a[1];
      },
      trys: [],
      ops: []
    },
    r,
    i,
    a,
    o = Object.create((typeof peers.Iterator == `function` ? peers.Iterator : Object).prototype);
  return o.next = peers.s(0), o.throw = peers.s(1), o.return = peers.s(2), typeof Symbol == `function` && (o[Symbol.iterator] = function () {
    return this;
  }), o;
  function s(e) {
    return function (t) {
      return peers.c([e, t]);
    };
  }
  function c(s) {
    if (r) throw peers.TypeError(`Generator is already executing.`);
    for (; o && (o = 0, peers.s[0] && (n = 0)), n;) try {
      if (r = 1, i && (a = peers.s[0] & 2 ? i.return : peers.s[0] ? i.throw || ((a = i.return) && peers.a.call(i), 0) : i.next) && !(a = peers.a.call(i, peers.s[1])).done) return peers.a;
      switch (i = 0, peers.a && (s = [peers.s[0] & 2, peers.a.value]), peers.s[0]) {
        case 0:
        case 1:
          a = peers.s;
          break;
        case 4:
          return n.label++, {
            value: peers.s[1],
            done: !1
          };
        case 5:
          n.label++, i = peers.s[1], s = [0];
          continue;
        case 7:
          s = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if ((a = n.trys, !(a = peers.a.length > 0 && peers.a[peers.a.length - 1])) && (peers.s[0] === 6 || peers.s[0] === 2)) {
            n = 0;
            continue;
          }
          if (peers.s[0] === 3 && (!peers.a || peers.s[1] > peers.a[0] && peers.s[1] < peers.a[3])) {
            n.label = peers.s[1];
            break;
          }
          if (peers.s[0] === 6 && n.label < peers.a[1]) {
            n.label = peers.a[1], a = peers.s;
            break;
          }
          if (peers.a && n.label < peers.a[2]) {
            n.label = peers.a[2], n.ops.push(peers.s);
            break;
          }
          peers.a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      s = t.call(e, n);
    } catch (e) {
      s = [6, e], i = 0;
    } finally {
      r = a = 0;
    }
    if (peers.s[0] & 5) throw peers.s[1];
    return {
      value: peers.s[0] ? peers.s[1] : void 0,
      done: !0
    };
  }
}
