// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fas`) / export `eC`.

export type BindBindDeferredeCPeers = {
  Gf: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  activateAndPromote: (...args: unknown[]) => unknown;
  activateNewThread: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  das: (...args: unknown[]) => unknown;
  discardProvisionalThread: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  recent: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  threads: (...args: unknown[]) => unknown;
  uas: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredeCPeers | null = null;

/** Wire bindBindDeferredeC peers once companions land. */
export function setBindBindDeferredeCPeers(next: BindBindDeferredeCPeers): void {
  peers = next;
}

/**
 * Bundle export `eC` / internal `fas`.
 */
export function bindBindDeferredeC() {
  if (peers == null) {
    throw new Error("bindBindDeferredeC peers are not configured");
  }

  return peers.e(() => {
    (peers.Gf(),
      (das = class {
        threads;
        recent;
        constructor(e, t) {
          ((this.threads = peers.e), (this.recent = peers.t));
        }
        async start(e, t) {
          if (peers.e.type === `exact`)
            return this.activateAndPromote(
              this.recent.canActivateWithoutOpen(peers.e.locator)
                ? peers.uas(peers.e.locator)
                : await this.threads.open(peers.e.locator),
              peers.t,
            );
          if (peers.e.type === `resume`) {
            let e = this.recent.get();
            if (peers.e != null) {
              if (this.recent.canActivateWithoutOpen(peers.e))
                return this.activateAndPromote(peers.uas(peers.e), peers.t);
              let n = await this.threads.open(peers.e).catch(
                (t) => (
                  peers.Wf.warning(
                    `Failed to resume recent realtime voice chat`,
                    {
                      safe: {},
                      sensitive: {
                        error: peers.t,
                      },
                    },
                  ),
                  this.recent.retire(peers.e),
                  null
                ),
              );
              if (n != null) return this.activateAndPromote(n, peers.t);
            }
          }
          return this.activateNewThread(
            await this.threads.create(peers.e.hostId),
            peers.t,
          );
        }
        async activateNewThread(e, t) {
          try {
            let n = await this.activateAndPromote(peers.e, peers.t);
            return (
              n === `active`
                ? this.threads.onNewThreadActivated(peers.e)
                : await this.discardProvisionalThread(peers.e),
              n
            );
          } catch (t) {
            throw (await this.discardProvisionalThread(peers.e), peers.t);
          }
        }
        async activateAndPromote(e, t) {
          let n = await peers.t(peers.e);
          return (n === `active` && this.recent.promote(peers.e.locator), n);
        }
        async discardProvisionalThread(e) {
          try {
            await this.threads.discard(peers.e);
          } catch (e) {
            peers.Wf.warning(
              `Failed to discard provisional realtime voice thread`,
              {
                safe: {},
                sensitive: {
                  error: peers.e,
                },
              },
            );
          }
        }
      }));
  });
}
