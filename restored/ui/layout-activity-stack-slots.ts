// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ige`) / export `cgt`.

export type LayoutActivityStackSlotsPeers = {
  Bge: (...args: unknown[]) => unknown;
  Hge: (...args: unknown[]) => unknown;
  Lge: (...args: unknown[]) => unknown;
  Nl: (...args: unknown[]) => unknown;
  Vge: (...args: unknown[]) => unknown;
};

let peers: LayoutActivityStackSlotsPeers | null = null;

/** Wire layoutActivityStackSlots peers once companions land. */
export function setLayoutActivityStackSlotsPeers(next: LayoutActivityStackSlotsPeers): void {
  peers = next;
}

/**
 * Bundle export `cgt` / internal `Ige`.
 */
export function layoutActivityStackSlots({
  expanded: e,
  items: t,
  scrollOffset: n,
  viewportRect: r
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("layoutActivityStackSlots peers are not configured");
  }
  let i = Math.max(0, t.reduce((e, t) => e + t.height, 0) + (t.length - 1) * peers.Bge),
    a = {
      ...r,
      height: Math.min(r.height, i)
    },
    o = t.length > peers.Nl.length;
  if (!e) {
    let e = t.slice(0, 3).map((e, t) => {
        let n = t * peers.Hge,
          r = {
            height: e.height,
            left: a.left + n,
            top: a.top + n,
            width: a.width - n * 2
          },
          i = t === 0 ? r : {
            ...r,
            height: peers.Hge,
            top: r.top + r.height - peers.Hge
          };
        return {
          contentRect: t === 0 ? i : {
            ...r,
            height: 0,
            top: r.top + r.height
          },
          edgeZone: null,
          itemId: e.id,
          presentationRect: r,
          slotId: peers.Nl[t],
          visibleRect: i,
          zIndex: 3 - t
        };
      }),
      n = e[0];
    return n != null && o && e.unshift({
      ...n,
      slotId: peers.Lge,
      zIndex: 4
    }), {
      contentHeight: i,
      slots: e,
      viewportRect: a
    };
  }
  let s = Math.max(0, Math.min(n, Math.max(0, i - a.height))),
    c = a.top - peers.Vge,
    l = a.top + a.height + peers.Vge,
    u = a.top - s,
    d = t.map((e, t) => {
      let n = {
        height: e.height,
        left: a.left,
        top: u,
        width: a.width
      };
      return u += e.height + peers.Bge, {
        index: t,
        item: e,
        presentationRect: n
      };
    }),
    f = t.length <= peers.Nl.length ? d : d.filter(({
      presentationRect: e
    }) => e.top < l && e.top + e.height > c);
  if (t.length > peers.Nl.length && f.length < peers.Nl.length) {
    let e = new Set(f.map(({
      index: e
    }) => e));
    f.push(...d.filter(({
      index: t
    }) => !e.has(t)).sort((e, t) => (e.presentationRect.top >= l ? e.presentationRect.top - l : c - (e.presentationRect.top + e.presentationRect.height)) - (t.presentationRect.top >= l ? t.presentationRect.top - l : c - (t.presentationRect.top + t.presentationRect.height)) || e.index - t.index).slice(0, peers.Nl.length - f.length)), f.sort((e, t) => e.index - t.index);
  }
  if (f.length > peers.Nl.length) throw Error(`Activity stack overscan exceeds its bounded slot pool`);
  let p = f.map(({
      index: e,
      item: n,
      presentationRect: r
    }) => {
      let i = {
        height: Math.max(0, Math.min(r.top + r.height, a.top + a.height) - Math.max(r.top, a.top)),
        left: r.left,
        top: Math.max(r.top, a.top),
        width: r.width
      };
      return {
        contentRect: i,
        edgeZone: r.top < a.top ? `top` : r.top + r.height > a.top + a.height ? `bottom` : null,
        itemId: n.id,
        presentationRect: r,
        slotId: peers.Nl[e % peers.Nl.length],
        visibleRect: i,
        zIndex: t.length - e
      };
    }),
    m = d[0];
  if (m != null && o) {
    let e = {
      height: 0,
      left: a.left,
      top: a.top,
      width: a.width
    };
    p.unshift({
      contentRect: e,
      edgeZone: null,
      itemId: m.item.id,
      presentationRect: {
        ...m.presentationRect,
        top: a.top
      },
      slotId: peers.Lge,
      visibleRect: e,
      zIndex: t.length + 1
    });
  }
  return {
    contentHeight: i,
    slots: p,
    viewportRect: a
  };
}
