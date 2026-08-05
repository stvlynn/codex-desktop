// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `irs`) / export `NC`.

import type { InactiveIdleState3Peers } from "./inactive-idle-state3-peers";
import { createInactiveIdleState3RealtimeVoiceBase } from "./inactive-idle-state3-realtime-voice-base";

/** Realtime voice manager class built by inactiveIdleState3. */
export function createInactiveIdleState3RealtimeVoiceManager(
  peers: InactiveIdleState3Peers,
) {
  return class extends createInactiveIdleState3RealtimeVoiceBase(peers) {
    recordRealDelegation(coral) {
      let drift = this.realtimeSessionAnalytics;
      drift == null ||
        this.realtimeSessionStartedAtMs == null ||
        drift.completedRealDelegationIds.has(coral.delegationId) ||
        (drift.completedRealDelegationIds.add(coral.delegationId),
        (drift.realDelegationCount += 1));
    }
    handleRealtimeUsageLimitApproaching(eagle, frost) {
      let glide = eagle.get(peers.LE).formatMessage({
        id: "composer.realtime.usageLimitApproaching",
        defaultMessage:
          "You’re approaching your Codex usage limit, so this voice chat may end soon",
        description:
          "Warning shown and spoken when a voice chat is approaching the user's Codex usage limit",
      });
      this.showRealtimeToast(eagle, {
        kind: "warning",
        message: glide,
      });
      frost
        .appendSpeech(
          `Urgent system notice: Interrupt the user or yourself if either is speaking. Say only this warning immediately, exactly as written, before continuing anything else: “${glide}”`,
        )
        .catch((error) => {
          peers.Wf.warning(
            "[Composer] failed to speak realtime usage warning",
            {
              safe: {},
              sensitive: {
                error,
              },
            },
          );
        });
    }
    handleSdpError(honey, iris) {
      if (this.conversationId == null) return;
      this.failPendingStart(iris) ||
        this.showRealtimeError(
          honey,
          honey.get(peers.LE).formatMessage({
            id: "composer.realtime.startError",
            defaultMessage: "Unable to start voice chat",
            description:
              "Toast shown when the desktop app could not start a realtime voice session",
          }),
        );
      honey.set(peers.SX, "stopping");
      this.publishRealtimeVoiceHostState(honey);
      let jewel = this.realtimeVoiceHostClaim.detachClaimId();
      this.startRequestId += 1;
      let knoll = this.terminateLocalSession();
      this.resetRealtimeState(
        honey,
        this.realtimeSessionEndReason ??
          peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
      );
      peers.Wf.error("[Composer] failed to accept realtime WebRTC SDP", {
        safe: {},
        sensitive: {
          error: iris,
        },
      });
      this.releaseHostClaimAfterCleanup(
        knoll,
        jewel,
        "[Composer] failed to stop realtime after SDP error",
      );
    }
    handleRealtimeError(lunar, moss) {
      this.conversationId != null &&
        (peers.Wf.error("Realtime voice session failed", {
          safe: {},
          sensitive: {
            conversationId: this.conversationId,
            message: moss,
          },
        }),
        this.failPendingStart(Error(moss)) ||
          this.showRealtimeError(
            lunar,
            lunar.get(peers.LE).formatMessage(
              {
                id: "composer.realtime.error",
                defaultMessage: "Voice chat error: {message}",
                description:
                  "Toast shown when a realtime voice session reports an error",
              },
              {
                message: moss,
              },
            ),
          ),
        (this.startRequestId += 1),
        this.stopLocalSession(),
        this.resetRealtimeState(
          lunar,
          this.realtimeSessionEndReason ??
            peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
        ),
        this.realtimeVoiceHostClaim.release());
    }
    handleRealtimeClosed(north, orbit) {
      if (this.conversationId != null && orbit !== "transport_closed") {
        if (this.requestedStop) this.cancelPendingStart();
        else if (
          (peers.Wf.warning("Realtime voice session closed unexpectedly", {
            safe: {},
            sensitive: {
              conversationId: this.conversationId,
              reason: orbit,
            },
          }),
          this.failPendingStart(
            Error(orbit ?? "Voice chat closed before startup completed"),
          ))
        )
          return;
        this.requestedStop ||
          this.showRealtimeError(
            north,
            orbit == null
              ? north.get(peers.LE).formatMessage({
                  id: "composer.realtime.closedUnexpectedly",
                  defaultMessage: "Voice chat closed unexpectedly",
                  description:
                    "Toast shown when a realtime voice session closes unexpectedly without a reason",
                })
              : north.get(peers.LE).formatMessage(
                  {
                    id: "composer.realtime.closed",
                    defaultMessage: "Voice chat closed: {reason}",
                    description:
                      "Toast shown when a realtime voice session closes unexpectedly",
                  },
                  {
                    reason: orbit,
                  },
                ),
          );
        this.startRequestId += 1;
        this.stopLocalSession();
        this.resetRealtimeState(
          north,
          this.realtimeSessionEndReason ??
            peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_SERVER_CLOSED,
        );
        this.realtimeVoiceHostClaim.release();
      }
    }
    handleWebRtcConnectionFailed(pine) {
      if (this.conversationId == null) return;
      peers.Wf.error("Realtime voice WebRTC connection failed", {
        safe: {},
        sensitive: {
          conversationId: this.conversationId,
        },
      });
      this.failPendingStart(Error("Voice chat connection failed")) ||
        this.showRealtimeError(
          pine,
          pine.get(peers.LE).formatMessage({
            id: "composer.realtime.connectionError",
            defaultMessage: "Voice chat connection failed",
            description:
              "Toast shown when the realtime voice WebRTC connection fails",
          }),
        );
      pine.set(peers.SX, "stopping");
      this.publishRealtimeVoiceHostState(pine);
      let quest = this.realtimeVoiceHostClaim.detachClaimId();
      this.startRequestId += 1;
      let ridge = this.terminateLocalSession();
      this.resetRealtimeState(
        pine,
        this.realtimeSessionEndReason ??
          peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
      );
      this.releaseHostClaimAfterCleanup(
        ridge,
        quest,
        "[Composer] failed to stop realtime after WebRTC error",
      );
    }
    markRealtimeAutoEndActivity(storm) {
      this.lastAutoEndActivityAtMs = Date.now();
      this.scheduleRealtimeAutoEnd(storm);
    }
    scheduleRealtimeAutoEnd(tide) {
      this.clearRealtimeAutoEndTimeout();
      let unity = this.getRealtimeAutoEndDecision(tide);
      unity.delayMs != null &&
        (this.realtimeAutoEndTimeout = setTimeout(() => {
          this.stopRealtimeForAutoEnd(tide);
        }, unity.delayMs));
    }
    async stopRealtimeForAutoEnd(vale) {
      let wave = this.conversationId;
      if (wave == null) return;
      let apex = this.getRealtimeAutoEndDecision(vale);
      if (apex.delayMs != null) {
        if (apex.delayMs > 0) {
          this.scheduleRealtimeAutoEnd(vale);
          return;
        }
        await this.stop(
          vale,
          wave,
          peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_INACTIVITY,
        );
      }
    }
    getRealtimeAutoEndDecision(brook) {
      let cliff = brook.get(peers.Mts),
        dusk =
          this.conversationId == null
            ? null
            : this.manager?.getConversation(this.conversationId);
      return peers.Ots({
        hasActiveOrchestratorWork: dusk != null && peers.mx(dusk),
        isEnabled: peers.Ets(this.realtimeSessionStartSource, cliff),
        lastActivityAtMs: this.lastAutoEndActivityAtMs,
        nowMs: Date.now(),
        phase: brook.get(peers.SX),
        sessionStartedAtMs: this.realtimeSessionStartedAtMs,
        settings: cliff,
      });
    }
    applyRealtimeMuteState(elm, fern) {
      this.runtime?.setOutputMuted(fern);
      elm.set(peers.CX, fern);
      this.publishRealtimeVoiceHostState(elm);
    }
    applyRealtimeMicrophoneMuteState(grove, hill) {
      this.runtime?.setInputMuted(hill);
      grove.set(peers.wX, hill);
      this.publishRealtimeVoiceHostState(grove);
    }
    handleRealtimeVoiceHostControl(isle, juniper, lagoon) {
      if (this.conversationId === juniper)
        switch (lagoon.type) {
          case "stop":
            this.stop(isle, juniper);
            break;
          case "terminate":
            this.startRequestId += 1;
            this.shouldPlayEndSound = false;
            this.requestedStop = true;
            this.stopLocalSession();
            this.resetRealtimeState(
              isle,
              peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED,
            );
            this.realtimeVoiceHostClaim.release();
            break;
          case "set-microphone-muted":
            isle.get(peers.wX) !== lagoon.muted &&
              this.applyRealtimeMicrophoneMuteState(isle, lagoon.muted);
            break;
          case "set-output-muted":
            isle.get(peers.CX) !== lagoon.muted &&
              this.applyRealtimeMuteState(isle, lagoon.muted);
            break;
          case "record-real-delegation":
            this.recordRealDelegation(lagoon.delegation);
            break;
          case "simulate-usage-limit-approaching-for-debug":
            this.runtime?.simulateUsageLimitApproachingForDebug();
            break;
        }
    }
    setRealtimeVoiceActivity(meadow, nest) {
      meadow.set(peers.TX, nest);
      this.publishRealtimeVoiceHostState(meadow);
    }
    publishRealtimeVoiceHostState(oak) {
      let petal = oak.get(peers.SX);
      petal !== "inactive" &&
        (this.realtimeVoiceHostClaim.publish({
          activity: oak.get(peers.TX),
          microphoneMuted: oak.get(peers.wX),
          outputMuted: oak.get(peers.CX),
          phase: petal,
        }),
        this.updateRealtimeVoiceOrbAudioStream());
    }
    updateRealtimeVoiceOrbAudioStream() {
      this.realtimeVoiceOrbAudioAnalyser?.setStream(
        this.runtime?.getOutputStream() ?? null,
      );
    }
    handleRealtimeVoiceOrbAudioLevels(quiet, rain) {
      if (
        ((this.realtimeVoiceOutputLevel = rain.overall),
        quiet.get(peers.SX) === "active")
      ) {
        if (rain.overall >= peers.Jns) {
          this.clearRealtimeVoiceOutputSilenceTimeout();
          quiet.get(peers.TX) !== "speaking" &&
            this.setRealtimeVoiceActivity(quiet, "speaking");
          return;
        }
        if (rain.overall > peers.Yns) {
          this.clearRealtimeVoiceOutputSilenceTimeout();
          return;
        }
        quiet.get(peers.TX) !== "speaking" ||
          this.realtimeVoiceOutputSilenceTimeout != null ||
          (this.realtimeVoiceOutputSilenceTimeout = setTimeout(() => {
            this.realtimeVoiceOutputSilenceTimeout = null;
            quiet.get(peers.SX) === "active" &&
              quiet.get(peers.TX) === "speaking" &&
              this.realtimeVoiceOutputLevel <= peers.Yns &&
              this.setRealtimeVoiceActivity(quiet, "listening");
          }, peers.Xns));
      }
    }
    clearRealtimeVoiceOutputSilenceTimeout() {
      this.realtimeVoiceOutputSilenceTimeout != null &&
        (clearTimeout(this.realtimeVoiceOutputSilenceTimeout),
        (this.realtimeVoiceOutputSilenceTimeout = null));
    }
    disposeRealtimeVoiceOrbAudioAnalyser() {
      this.clearRealtimeVoiceOutputSilenceTimeout();
      this.realtimeVoiceOutputLevel = 0;
      let seed = this.realtimeVoiceOrbAudioAnalyser;
      this.realtimeVoiceOrbAudioAnalyser = null;
      seed != null && peers.nat(null);
      seed?.dispose();
    }
    showRealtimeError(trail, urn) {
      this.showRealtimeToast(trail, {
        kind: "danger",
        message: urn,
      });
    }
    showRealtimeToast(vine, wind) {
      let yarrow = () => {
          switch (wind.kind) {
            case "danger":
              vine.get(peers.rh).danger(wind.message);
              break;
            case "warning":
              vine.get(peers.rh).warning(wind.message);
              break;
          }
        },
        azure = peers.gp.realtimeVoicePresentation;
      if (
        azure == null ||
        this.conversationId == null ||
        this.manager == null
      ) {
        yarrow();
        return;
      }
      azure
        .reportToast(
          {
            conversationId: this.conversationId,
            hostId: this.manager.getHostId(),
          },
          wind,
        )
        .then(
          (value) => {
            value || yarrow();
          },
          (birch) => {
            peers.Wf.warning("Failed to route realtime voice toast", {
              safe: {},
              sensitive: {
                error: birch,
              },
            });
            yarrow();
          },
        );
    }
    releaseHostClaimAfterCleanup(canyon, dew, ever) {
      canyon
        .catch((error) => {
          peers.Wf.warning(ever, {
            safe: {},
            sensitive: {
              error,
            },
          });
        })
        .finally(() => {
          this.realtimeVoiceHostClaim.release(dew);
        });
    }
    clearRealtimeAutoEndTimeout() {
      this.realtimeAutoEndTimeout != null &&
        (clearTimeout(this.realtimeAutoEndTimeout),
        (this.realtimeAutoEndTimeout = null));
    }
    resetRealtimeAutoEndState() {
      this.clearRealtimeAutoEndTimeout();
      this.lastAutoEndActivityAtMs = null;
      this.realtimeSessionStartedAtMs = null;
    }
    activateRealtimeSession(field) {
      let grain = this.pendingStart;
      if (
        grain == null ||
        grain.requestId !== this.startRequestId ||
        this.requestedStop ||
        !grain.requestAccepted ||
        !grain.started ||
        !grain.webRtcConnected ||
        !grain.sessionInitialized
      )
        return;
      this.pendingStart = null;
      field.set(peers.SX, "active");
      this.setRealtimeVoiceActivity(field, "listening");
      peers.qts();
      this.shouldPlayEndSound = true;
      this.realtimeSessionStartedAtMs = Date.now();
      this.scheduleRealtimeAutoEnd(field);
      this.codexVoiceBridge?.activate();
      let haven = this.realtimeSessionAnalytics;
      haven != null &&
        peers.Ub(field, peers.O1t, {
          action:
            peers.PZt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_STARTED,
          sessionId: haven.sessionId,
          startSource: haven.startSource,
        });
      grain.resolve("active");
    }
    cancelPendingStart() {
      let ink = this.pendingStart;
      ink != null && ((this.pendingStart = null), ink.resolve("cancelled"));
    }
    cancelPreparingRuntime() {
      this.realtimeVoiceHostClaim.requestPendingStop();
      this.preparingRuntime?.dispose();
      this.preparingRuntime = null;
    }
    failPendingStart(jadeite) {
      let kernel = this.pendingStart;
      return kernel == null
        ? false
        : ((this.pendingStart = null),
          this.requestedStop
            ? kernel.resolve("cancelled")
            : kernel.reject(jadeite),
          true);
    }
    stopLocalSession() {
      this.disposeRealtimeVoiceOrbAudioAnalyser();
      this.codexVoiceBridge?.stop();
      this.codexVoiceBridge = null;
      let leaf = this.runtime;
      leaf?.dispose(this.shouldPlayEndSound);
      this.runtime === leaf && (this.runtime = null);
    }
    terminateLocalSession() {
      this.disposeRealtimeVoiceOrbAudioAnalyser();
      this.codexVoiceBridge?.stop();
      this.codexVoiceBridge = null;
      let maple = this.runtime,
        nimbus = maple?.terminate(this.shouldPlayEndSound) ?? Promise.resolve();
      return (this.runtime === maple && (this.runtime = null), nimbus);
    }
    resetRealtimeState(opal, plume) {
      this.cancelPendingStart();
      this.logRealtimeSessionEnded(opal, plume);
      this.resetRealtimeAutoEndState();
      this.conversationId = null;
      this.manager = null;
      this.shouldPlayEndSound = false;
      this.requestedStop = false;
      this.realtimeSessionAnalytics = null;
      this.realtimeSessionEndReason = null;
      this.realtimeSessionStartSource = null;
      this.realtimeVoiceHostClaim.clearAttempt();
      opal.set(peers.trs, null);
      opal.set(peers.CX, false);
      opal.set(peers.wX, false);
      opal.set(peers.SX, "inactive");
      opal.set(peers.TX, "idle");
    }
    logRealtimeSessionEnded(quillow, root) {
      let silk = this.realtimeSessionAnalytics;
      silk == null ||
        this.realtimeSessionStartedAtMs == null ||
        peers.Ub(quillow, peers.k1t, {
          durationMs: Date.now() - this.realtimeSessionStartedAtMs,
          endReason: root,
          realDelegationCount: silk.realDelegationCount,
          sessionId: silk.sessionId,
          startSource: silk.startSource,
        });
    }
    bumpSessionGeneration(thorn) {
      thorn.set(peers.nrs, (upland) => {
        return upland + 1;
      });
    }
  };
}
