// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dqt`) / export `fnt`.

export type BindDeferredUiFntPeers = {
  by: (...args: unknown[]) => unknown;
  commentForegroundColor: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFntPeers | null = null;

/** Wire bindDeferredUiFnt peers once companions land. */
export function setBindDeferredUiFntPeers(next: BindDeferredUiFntPeers): void {
  peers = next;
}

/**
 * Bundle export `fnt` / internal `dqt`.
 */
export function bindDeferredUiFnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiFnt peers are not configured");
  }

  return class {
    static get commentForegroundColor() {
      let e = document.createElement(`span`);
      e.classList.add(`comment`, `sidebar`);
      let {
        style: t
      } = e;
      t.width = t.height = `0`, t.display = `none`, t.color = `var(--comment-fg-color)`, document.body.append(e);
      let {
        color: n
      } = window.getComputedStyle(e);
      return e.remove(), peers.hy(this, `commentForegroundColor`, peers.by(n));
    }
  };
}
