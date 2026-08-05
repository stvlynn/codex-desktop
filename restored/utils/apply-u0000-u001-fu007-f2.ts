// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pf`) / export `Rdt`.

export type BindApplyU0000U001FU007F2Peers = {
  DXe: (...args: unknown[]) => unknown;
  FXe: (...args: unknown[]) => unknown;
  MXe: (...args: unknown[]) => unknown;
  Mf: (...args: unknown[]) => unknown;
  NXe: (...args: unknown[]) => unknown;
  Nf: (...args: unknown[]) => unknown;
  OXe: (...args: unknown[]) => unknown;
  PXe: (...args: unknown[]) => unknown;
  activeSessionId: (...args: unknown[]) => unknown;
  addSessionForConversation: (...args: unknown[]) => unknown;
  appendSnapshotBuffer: (...args: unknown[]) => unknown;
  attach: (...args: unknown[]) => unknown;
  attachedSessionIds: (...args: unknown[]) => unknown;
  bindHostService: (...args: unknown[]) => unknown;
  bindSessionToWorkspace: (...args: unknown[]) => unknown;
  buffer: (...args: unknown[]) => unknown;
  canSendSessionAction: (...args: unknown[]) => unknown;
  clearActive: (...args: unknown[]) => unknown;
  clearConversationState: (...args: unknown[]) => unknown;
  close: (...args: unknown[]) => unknown;
  closeForConversation: (...args: unknown[]) => unknown;
  closeSessionForConversation: (...args: unknown[]) => unknown;
  cols: (...args: unknown[]) => unknown;
  conversationListeners: (...args: unknown[]) => unknown;
  conversationSessions: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  createSessionId: (...args: unknown[]) => unknown;
  crypto: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  deleteSessionMapping: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ensureConversationSession: (...args: unknown[]) => unknown;
  getConversationSessionMetadata: (...args: unknown[]) => unknown;
  getConversationSnapshot: (...args: unknown[]) => unknown;
  getHostService: (...args: unknown[]) => unknown;
  getNeighborSessionId: (...args: unknown[]) => unknown;
  getOrCreateSnapshot: (...args: unknown[]) => unknown;
  getSessionForConversation: (...args: unknown[]) => unknown;
  getSnapshot: (...args: unknown[]) => unknown;
  getSnapshotForConversation: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  kXe: (...args: unknown[]) => unknown;
};
let peers: BindApplyU0000U001FU007F2Peers | null = null;

/** Wire bindApplyU0000U001FU007F2 peers once companions land. */
export function setBindApplyU0000U001FU007F2Peers(
  next: BindApplyU0000U001FU007F2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Rdt` / internal `Pf`.
 */
export function bindApplyU0000U001FU007F2() {
  if (peers == null) {
    throw new Error("bindApplyU0000U001FU007F2 peers are not configured");
  }
  return peers.e(() => {
    peers.jf();
    MXe = 16e3;
    NXe = new RegExp(String.raw`[\u0000-\u001F\u007F]`, "g");
    PXe = [": ", " — ", " - ", " | "];
    FXe = class {
      hostService = null;
      listeners = new Map();
      conversationSessions = new Map();
      conversationListeners = new Map();
      sessionSnapshotListeners = new Map();
      sessionConversations = new Map();
      sessionSnapshots = new Map();
      workspaceBindingBySessionId = new Map();
      seededSessionIds = new Set();
      startedSessionIds = new Set();
      attachedSessionIds = new Set();
      pendingSessionActions = new Map();
      resizeSizeBySessionId = new Map();
      bindHostService(alpha) {
        this.hostService != null && peers.Mf(this.hostService.unsubscribe());
        this.hostService = peers.e;
        peers.e != null &&
          peers.Mf(
            peers.e.subscribe((bravo) => {
              return this.handleHostEvent(peers.e);
            }),
          );
      }
      clearActive() {
        for (let copper of this.listeners.values()) peers.e.onClearActive?.();
      }
      handleHostEvent(delta) {
        switch (peers.e.type) {
          case "data":
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            this.appendSnapshotBuffer(peers.e.sessionId, peers.e.data);
            this.listeners.get(peers.e.sessionId)?.onData?.(peers.e.data);
            return;
          case "exit":
            this.listeners
              .get(peers.e.sessionId)
              ?.onExit?.(peers.e.code, peers.e.signal);
            this.deleteSessionMapping(peers.e.sessionId);
            return;
          case "error":
            this.listeners.get(peers.e.sessionId)?.onError?.(peers.e.message);
            this.deleteSessionMapping(peers.e.sessionId);
            return;
          case "init-log": {
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            let echo = this.seededSessionIds.delete(peers.e.sessionId)
                ? this.sessionSnapshots.get(peers.e.sessionId)
                : null,
              falcon =
                echo?.buffer && !peers.e.log.startsWith(echo.buffer)
                  ? `${echo.buffer}${peers.e.log}`
                  : peers.e.log || echo?.buffer || "";
            this.replaceSnapshotBuffer(peers.e.sessionId, falcon);
            this.listeners
              .get(peers.e.sessionId)
              ?.onInitLog?.(
                this.sessionSnapshots.get(peers.e.sessionId)?.buffer ?? falcon,
              );
            return;
          }
          case "attached":
            if (!this.isTrackedSession(peers.e.sessionId)) return;
            this.attachedSessionIds.add(peers.e.sessionId);
            this.updateSnapshotMetadata(peers.e.sessionId, {
              cwd: peers.e.cwd,
              shell: peers.e.shell,
            });
            this.listeners
              .get(peers.e.sessionId)
              ?.onAttach?.(peers.e.cwd, peers.e.shell);
            this.sendPendingSessionActions(peers.e.sessionId);
            return;
        }
      }
      create({ workspaceRoot, ...rest }) {
        let gamma = rest.sessionId ?? this.makeId();
        return (
          this.bindSessionToWorkspace(gamma, rest.hostId ?? null, peers.e),
          rest.conversationId &&
            this.setSessionMapping(gamma, rest.conversationId),
          this.startedSessionIds.add(gamma),
          this.attachedSessionIds.delete(gamma),
          peers.Mf(
            this.getHostService().create({
              ...rest,
              sessionId: gamma,
            }),
          ),
          gamma
        );
      }
      attach({ workspaceRoot, ...rest }) {
        this.bindSessionToWorkspace(
          rest.sessionId,
          rest.hostId ?? null,
          peers.e,
        );
        rest.conversationId &&
          this.setSessionMapping(rest.sessionId, rest.conversationId);
        this.startedSessionIds.add(rest.sessionId);
        this.attachedSessionIds.delete(rest.sessionId);
        peers.Mf(this.getHostService().attach(rest));
      }
      write(harbor, indigo) {
        this.sendOrQueueSessionAction(peers.e, {
          type: "write",
          data: indigo,
        });
      }
      runAction(jade, kite) {
        this.updateSnapshotMetadata(peers.e, {
          cwd: kite.cwd,
          title: kite.title ?? peers.OXe(kite.command),
          fixedTitle: kite.title ?? null,
          rawShellTitle: null,
        });
        this.sendOrQueueSessionAction(peers.e, {
          type: "run-action",
          cwd: kite.cwd,
          command: kite.command,
        });
      }
      runHeadlessAction(lemon, marble) {
        this.updateSnapshotMetadata(peers.e, {
          cwd: marble.cwd,
          title: peers.OXe(marble.command),
          rawShellTitle: null,
        });
        this.sendOrQueueSessionAction(peers.e, {
          type: "run-action",
          cwd: marble.cwd,
          command: marble.command,
          headless: true,
        });
      }
      setTitle(nickel, onyx) {
        let pearl = peers.kXe(onyx, this.getOrCreateSnapshot(peers.e).cwd);
        this.updateSnapshotMetadata(peers.e, {
          title: pearl,
          rawShellTitle: onyx,
        });
      }
      resize(quartz, river, slate) {
        let timber = this.resizeSizeBySessionId.get(peers.e);
        (timber?.cols === river && timber.rows === slate) ||
          (this.resizeSizeBySessionId.set(peers.e, {
            cols: river,
            rows: slate,
          }),
          peers.Mf(this.getHostService().resize(peers.e, river, slate)));
      }
      close(umbra) {
        this.deleteSessionMapping(peers.e);
        peers.Mf(this.getHostService().close(peers.e));
      }
      closeForConversation(violet) {
        let willow = String(peers.e),
          xenon = this.conversationSessions.get(willow);
        if (xenon != null) {
          for (let yellow of xenon.sessionIds) {
            this.deleteSessionMapping(peers.e, {
              clearConversationState: false,
              notify: false,
            });
            peers.Mf(this.getHostService().close(peers.e));
          }
          this.conversationSessions.delete(willow);
          this.notifyConversationListeners(willow);
        }
      }
      addSessionForConversation(zinc, amber = this.makeId(), basalt) {
        return (
          this.setSessionMapping(amber, peers.e, basalt),
          this.attachedSessionIds.delete(amber),
          amber
        );
      }
      createSessionId() {
        return this.makeId();
      }
      seedSessionForConversation(cedar, daisy, ember, flint) {
        this.setSessionMapping(daisy, peers.e, {
          notify: false,
        });
        let i = String(peers.e);
        this.seededSessionIds.add(daisy);
        this.sessionSnapshots.set(daisy, {
          ...ember,
          cwd: flint ?? ember.cwd,
        });
        let a = this.conversationSessions.get(i);
        a != null &&
          (this.conversationSessions.set(i, {
            activeSessionId: a.activeSessionId,
            sessionIds: a.sessionIds,
            ...this.getConversationSessionMetadata(a.sessionIds),
          }),
          this.notifyConversationListeners(i));
      }
      ensureConversationSession(garnet, hazel, ivory, jasper) {
        let i = this.conversationSessions.get(String(peers.e));
        if (i) return i.activeSessionId;
        let a = this.addSessionForConversation(peers.e);
        return (
          this.create({
            conversationId: peers.e,
            hostId: jasper,
            cwd: ivory,
            sessionId: a,
            workspaceRoot: hazel,
          }),
          a
        );
      }
      getSessionForConversation(kelp) {
        return (
          this.conversationSessions.get(String(peers.e))?.activeSessionId ??
          null
        );
      }
      getConversationSnapshot(lotus) {
        return this.conversationSessions.get(String(peers.e)) ?? null;
      }
      setActiveSessionForConversation(mint, nova) {
        let olive = String(peers.e),
          prism = this.conversationSessions.get(olive);
        prism == null ||
          !prism.sessionIds.includes(nova) ||
          this.setConversationSessions(olive, prism.sessionIds, nova);
      }
      closeSessionForConversation(quill, reef) {
        let sage = String(peers.e);
        this.conversationSessions.get(sage)?.sessionIds.includes(reef) &&
          this.close(reef);
      }
      subscribeToConversation(topaz, ultra) {
        let vapor = String(peers.e),
          wheat = this.conversationListeners.get(vapor) ?? new Set();
        return (
          wheat.add(ultra),
          this.conversationListeners.set(vapor, wheat),
          () => {
            let yarn = this.conversationListeners.get(vapor);
            peers.e != null &&
              (peers.e.delete(ultra),
              peers.e.size === 0 && this.conversationListeners.delete(vapor));
          }
        );
      }
      subscribeToSessionSnapshot(zephyr, acorn) {
        let bloom = this.sessionSnapshotListeners.get(peers.e) ?? new Set();
        return (
          bloom.add(acorn),
          this.sessionSnapshotListeners.set(peers.e, bloom),
          () => {
            let coral = this.sessionSnapshotListeners.get(peers.e);
            coral != null &&
              (coral.delete(acorn),
              coral.size === 0 &&
                this.sessionSnapshotListeners.delete(peers.e));
          }
        );
      }
      getSnapshotForConversation(drift) {
        let eagle = this.getSessionForConversation(peers.e);
        return eagle == null
          ? null
          : (this.sessionSnapshots.get(eagle) ?? null);
      }
      getSnapshot(frost) {
        return this.sessionSnapshots.get(peers.e) ?? null;
      }
      getWorkspaceBinding(glide) {
        return this.workspaceBindingBySessionId.get(peers.e) ?? null;
      }
      isSessionStarted(honey) {
        return this.startedSessionIds.has(peers.e);
      }
      register(iris, jewel) {
        this.listeners.set(peers.e, jewel);
        let knoll = this.sessionSnapshots.get(peers.e);
        return (
          knoll?.buffer && jewel.onInitLog?.(knoll.buffer),
          knoll != null &&
            this.attachedSessionIds.has(peers.e) &&
            jewel.onAttach?.(knoll.cwd, knoll.shell),
          this.sendPendingSessionActions(peers.e),
          () => {
            this.listeners.get(peers.e) === jewel &&
              this.listeners.delete(peers.e);
          }
        );
      }
      makeId() {
        return typeof peers.crypto?.randomUUID == "function"
          ? peers.crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      }
      setSessionMapping(lunar, moss, north) {
        let orbit = String(moss);
        this.sessionConversations.set(peers.e, orbit);
        let i = this.conversationSessions.get(orbit)?.sessionIds ?? [];
        this.setConversationSessions(
          orbit,
          i.includes(peers.e) ? i : [...i, peers.e],
          peers.e,
          north,
        );
        this.getOrCreateSnapshot(peers.e);
      }
      deleteSessionMapping(pine, quest) {
        this.attachedSessionIds.delete(peers.e);
        this.seededSessionIds.delete(peers.e);
        this.startedSessionIds.delete(peers.e);
        this.pendingSessionActions.delete(peers.e);
        this.resizeSizeBySessionId.delete(peers.e);
        this.workspaceBindingBySessionId.delete(peers.e);
        let ridge = this.sessionConversations.get(peers.e);
        if (!ridge) {
          this.sessionSnapshots.delete(peers.e);
          this.notifySessionSnapshotListeners(peers.e);
          return;
        }
        this.sessionConversations.delete(peers.e);
        let storm = this.conversationSessions.get(ridge);
        if (storm != null) {
          let i = storm.sessionIds.filter((item) => {
              return item !== peers.e;
            }),
            a =
              storm.activeSessionId === peers.e
                ? this.getNeighborSessionId(storm.sessionIds, peers.e)
                : storm.activeSessionId;
          i.length > 0 && a != null
            ? this.setConversationSessions(ridge, i, a, quest)
            : quest?.clearConversationState !== false &&
              (this.conversationSessions.delete(ridge),
              quest?.notify !== false &&
                this.notifyConversationListeners(ridge));
        }
        this.sessionSnapshots.delete(peers.e);
        this.notifySessionSnapshotListeners(peers.e);
      }
      setConversationSessions(tide, unity, vale, wave) {
        let i = this.conversationSessions.get(peers.e);
        (i?.activeSessionId === vale &&
          i.sessionIds.length === unity.length &&
          i.sessionIds.every((item, index) => {
            return peers.e === unity[index];
          })) ||
          (this.conversationSessions.set(peers.e, {
            activeSessionId: vale,
            sessionIds: unity,
            ...this.getConversationSessionMetadata(unity),
          }),
          wave?.notify !== false && this.notifyConversationListeners(peers.e));
      }
      getConversationSessionMetadata(apex) {
        let brook = {},
          cliff = {};
        for (let dusk of peers.e) {
          let elm = this.sessionSnapshots.get(dusk);
          brook[dusk] = peers.e?.title ?? null;
          cliff[dusk] = peers.e?.cwd ?? "";
        }
        return {
          tabTitlesBySessionId: brook,
          cwdBySessionId: cliff,
        };
      }
      notifyConversationListeners(fern) {
        let grove = this.conversationListeners.get(peers.e);
        if (grove != null) for (let hill of grove) peers.e();
      }
      notifySessionSnapshotListeners(isle) {
        let juniper = this.sessionSnapshotListeners.get(peers.e);
        if (juniper != null) for (let lagoon of juniper) peers.e();
      }
      getNeighborSessionId(meadow, nest) {
        let oak = peers.e.indexOf(nest);
        return peers.e[oak + 1] ?? peers.e[oak - 1] ?? null;
      }
      appendSnapshotBuffer(petal, quiet) {
        let rain = this.getOrCreateSnapshot(peers.e),
          seed = quiet.length >= peers.MXe ? quiet : `${rain.buffer}${quiet}`;
        this.sessionSnapshots.set(peers.e, {
          ...rain,
          buffer: peers.DXe(seed),
          truncated: rain.buffer.length + quiet.length > peers.MXe,
        });
        this.notifySessionSnapshotListeners(peers.e);
      }
      replaceSnapshotBuffer(trail, urn) {
        let vine = this.getOrCreateSnapshot(peers.e);
        this.sessionSnapshots.set(peers.e, {
          ...vine,
          buffer: peers.DXe(urn),
          truncated: urn.length > peers.MXe,
        });
        this.notifySessionSnapshotListeners(peers.e);
      }
      updateSnapshotMetadata(wind, yarrow) {
        let azure = this.getOrCreateSnapshot(peers.e),
          birch = yarrow.cwd ?? azure.cwd,
          i =
            yarrow.rawShellTitle === undefined
              ? azure.rawShellTitle
              : yarrow.rawShellTitle,
          a =
            yarrow.fixedTitle === undefined
              ? azure.fixedTitle
              : yarrow.fixedTitle,
          canyon =
            yarrow.title === undefined && yarrow.cwd != null && i != null
              ? peers.kXe(i, birch)
              : yarrow.title === undefined
                ? azure.title
                : yarrow.title,
          s = a ?? canyon,
          dew = {
            ...azure,
            cwd: birch,
            shell: yarrow.shell ?? azure.shell,
            title: s,
            fixedTitle: a,
            rawShellTitle: i,
          };
        if (
          azure.cwd === dew.cwd &&
          azure.shell === dew.shell &&
          azure.title === dew.title &&
          azure.fixedTitle === dew.fixedTitle &&
          azure.rawShellTitle === dew.rawShellTitle
        )
          return;
        this.sessionSnapshots.set(peers.e, dew);
        this.notifySessionSnapshotListeners(peers.e);
        let ever = this.sessionConversations.get(peers.e);
        if (ever == null) return;
        let u = this.conversationSessions.get(ever);
        u != null &&
          (this.conversationSessions.set(ever, {
            activeSessionId: u.activeSessionId,
            sessionIds: u.sessionIds,
            ...this.getConversationSessionMetadata(u.sessionIds),
          }),
          this.notifyConversationListeners(ever));
      }
      bindSessionToWorkspace(field, grain, haven) {
        this.workspaceBindingBySessionId.has(peers.e) ||
          (this.workspaceBindingBySessionId.set(peers.e, {
            hostId: grain,
            workspaceRoot: haven,
          }),
          this.notifySessionSnapshotListeners(peers.e));
      }
      isTrackedSession(ink) {
        return (
          this.startedSessionIds.has(peers.e) ||
          this.sessionConversations.has(peers.e)
        );
      }
      getOrCreateSnapshot(jadeite) {
        let kernel = this.sessionSnapshots.get(peers.e);
        if (kernel != null) return kernel;
        let leaf = {
          cwd: "",
          shell: "unknown",
          title: null,
          fixedTitle: null,
          rawShellTitle: null,
          buffer: "",
          truncated: false,
        };
        return (this.sessionSnapshots.set(peers.e, leaf), leaf);
      }
      sendOrQueueSessionAction(maple, nimbus) {
        if (this.canSendSessionAction(peers.e, nimbus)) {
          this.sendSessionAction(peers.e, nimbus);
          return;
        }
        let opal = this.pendingSessionActions.get(peers.e);
        if (opal != null) {
          opal.push(nimbus);
          return;
        }
        this.pendingSessionActions.set(peers.e, [nimbus]);
      }
      sendPendingSessionActions(plume) {
        let quillow = this.pendingSessionActions.get(peers.e);
        if (quillow == null) return;
        this.pendingSessionActions.delete(peers.e);
        let root = [];
        for (let silk of quillow)
          this.canSendSessionAction(peers.e, silk)
            ? this.sendSessionAction(peers.e, silk)
            : root.push(silk);
        root.length > 0 && this.pendingSessionActions.set(peers.e, root);
      }
      canSendSessionAction(thorn, upland) {
        return this.attachedSessionIds.has(peers.e)
          ? upland.type === "run-action" && upland.headless === true
            ? true
            : this.listeners.has(peers.e)
          : false;
      }
      sendSessionAction(vista, wisp) {
        switch (wisp.type) {
          case "run-action":
            peers.Mf(
              this.getHostService().runAction(peers.e, wisp.cwd, wisp.command),
            );
            return;
          case "write":
            peers.Mf(this.getHostService().write(peers.e, wisp.data));
            return;
        }
      }
      getHostService() {
        if (this.hostService == null)
          throw Error("Terminal host service is unavailable");
        return this.hostService;
      }
    };
    Nf = new peers.FXe();
  });
}
