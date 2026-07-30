// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs (unbound repair).
const Nest1: any = undefined;
const North3: any = undefined;
const Pine3: any = undefined;
const Quest3: any = undefined;
const Ridge3: any = undefined;
const Storm3: any = undefined;
const Unity3: any = undefined;
const _l: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 16/19
/* split-lane-import-depth:1 */
// Careful split: late WorkbookMainController methods (prototype install).

export function attachWorkbookControllerLateMethods(Cls: any): void {
  const Proto = Cls.prototype;
  Proto["replyToCommentThread"] = function (quest21, ridge21) {
    return (
      this.dispatch({
        type: "reply-comment-thread",
        threadId: quest21,
        body: ridge21,
      }),
      true
    );
  };
  Proto["resolveCommentThread"] = function (storm21) {
    return (
      this.dispatch({
        type: "resolve-comment-thread",
        threadId: storm21,
      }),
      true
    );
  };
  Proto["reopenCommentThread"] = function (tide21) {
    return (
      this.dispatch({
        type: "reopen-comment-thread",
        threadId: tide21,
      }),
      true
    );
  };
  Proto["deleteCommentThread"] = function (unity21) {
    return (
      this.dispatch({
        type: "delete-comment-thread",
        threadId: unity21,
      }),
      true
    );
  };
  Proto["toggleCommentReaction"] = function (vale21, wave21, apex21) {
    return (
      this.dispatch({
        type: "toggle-comment-reaction",
        threadId: vale21,
        commentId: wave21,
        reactionType: apex21,
      }),
      true
    );
  };
  Proto["editThreadComment"] = function (brook21, cliff21, dusk21) {
    return (
      this.dispatch({
        type: "edit-thread-comment",
        threadId: brook21,
        commentId: cliff21,
        body: dusk21,
      }),
      true
    );
  };
  Proto["deleteThreadComment"] = function (elm21, fern21) {
    return (
      this.dispatch({
        type: "delete-thread-comment",
        threadId: elm21,
        commentId: fern21,
      }),
      true
    );
  };
  Proto["requestFindMatches"] = function (grove21, hill21) {
    return this._wb_i
      .request({
        kind: "find-matches",
        query: grove21,
        focusFirstMatch: hill21?.focusFirstMatch ?? false,
      })
      .then((value) => {
        if (value.kind !== "find-matches")
          throw Error(`Unexpected find response: ${value.kind}`);
        return value.result;
      });
  };
  Proto["requestCellState"] = function (isle21, juniper21) {
    return this._wb_i
      .request({
        kind: "inspect-cell",
        sheetName: isle21,
        address: juniper21,
      })
      .then((value) => {
        if (value.kind !== "inspect-cell")
          throw Error(`Unexpected inspect response: ${value.kind}`);
        return value.result;
      });
  };
  Proto["requestNavigationTarget"] = function (lagoon21, meadow21, nest21) {
    return this._wb_i
      .request({
        kind: "navigation-target",
        sheetName: lagoon21,
        objectId: meadow21,
        ...(nest21 == null
          ? {}
          : {
              objectKind: nest21,
            }),
      })
      .then((value) => {
        if (value.kind !== "navigation-target")
          throw Error(`Unexpected navigation response: ${value.kind}`);
        return value.result;
      });
  };
  Proto["requestClipboardPayload"] = function (oak21) {
    return this._wb_i
      .request({
        kind: "clipboard-payload",
        copyKind: oak21,
      })
      .then((value) => {
        if (value.kind !== "clipboard-payload")
          throw Error(`Unexpected clipboard response: ${value.kind}`);
        return value.result;
      });
  };
  Proto["requestSelectedFloatingRasterPayload"] = function () {
    return this._wb_i
      .request({
        kind: "selected-floating-raster-payload",
      })
      .then((value) => {
        if (value.kind !== "selected-floating-raster-payload")
          throw Error(`Unexpected floating raster response: ${value.kind}`);
        return value.result;
      });
  };
  Proto["pasteClipboardData"] = function (petal21) {
    return (
      this.dispatch({
        type: "paste-clipboard-data",
        clipboard: petal21,
      }),
      true
    );
  };
  Proto["pasteRasterClipboardData"] = function (quiet21) {
    return (
      this.dispatch({
        type: "paste-raster-clipboard-data",
        clipboard: quiet21,
      }),
      true
    );
  };
  Proto["recalculate"] = function () {
    this.dispatch({
      type: "recalculate",
    });
  };
  Proto["runWorksheetEdit"] = function (rain21, seed21) {
    return (
      this.dispatch({
        type: "run-worksheet-edit",
        kind: rain21,
        options: seed21,
      }),
      true
    );
  };
  Proto["focusCell"] = function (trail21, urn21) {
    this.dispatch({
      type: "focus-cell",
      row: trail21,
      col: urn21,
    });
  };
  Proto["collapseSelectionToActiveCell"] = function () {
    this.dispatch({
      type: "collapse-selection-to-active-cell",
    });
  };
  Proto["setSelectedFloatingElement"] = function (vine21, wind21) {
    this.dispatch({
      type: "set-selected-floating-element",
      selectedFloatingElement: vine21,
      sheetName: wind21?.sheetName,
    });
  };
  Proto["textActivateFloatingShapeText"] = function (yarrow21) {
    return (
      this._wb_i.dispatch({
        kind: "text-activate-block-end",
        blockId: yarrow21,
      }),
      true
    );
  };
  Proto["textClearFloatingShapeText"] = function () {
    this._wb_i.dispatch({
      kind: "text-clear",
    });
  };
  Proto["textPointerDown"] = function (azure21, birch21) {
    return (
      this._wb_i.dispatch({
        kind: "text-pointer-down",
        point: azure21,
        shiftKey: birch21?.shiftKey,
      }),
      true
    );
  };
  Proto["textPointerMove"] = function (canyon21) {
    return (
      this._wb_i.dispatch({
        kind: "text-pointer-move",
        point: canyon21,
      }),
      true
    );
  };
  Proto["textPointerUp"] = function () {
    this._wb_i.dispatch({
      kind: "text-pointer-up",
    });
  };
  Proto["textSelectWordAtPoint"] = function (dew21) {
    return (
      this._wb_i.dispatch({
        kind: "text-select-word-at-point",
        point: dew21,
      }),
      true
    );
  };
  Proto["textSelectParagraphAtPoint"] = function (alpha22) {
    return (
      this._wb_i.dispatch({
        kind: "text-select-paragraph-at-point",
        point: alpha22,
      }),
      true
    );
  };
  Proto["textHandleKeyDown"] = function (bravo22) {
    return (
      this._wb_i.dispatch({
        kind: "text-keydown",
        event: bravo22,
      }),
      true
    );
  };
  Proto["textHandleBeforeInput"] = function (copper22) {
    return (
      this._wb_i.dispatch({
        kind: "text-before-input",
        event: copper22,
      }),
      true
    );
  };
  Proto["textHandleInput"] = function (delta22) {
    return (
      this._wb_i.dispatch({
        kind: "text-input",
        event: delta22,
      }),
      true
    );
  };
  Proto["textHandleCompositionEnd"] = function (echo22) {
    this._wb_i.dispatch({
      kind: "text-composition-end",
      event: echo22,
    });
  };
  Proto["attachViewportCanvas"] = function (falcon22, gamma22) {
    North3();
    let harbor22 = {
        ...gamma22,
      },
      indigo22 = this._wb_o !== falcon22;
    if (
      ((this._wb_o = falcon22),
      (this._wb_s = falcon22.getContext("2d")),
      !this._wb_s)
    )
      throw Error("Workbook viewport canvas 2d context is unavailable.");
    this._wb_l ??= {
      ...harbor22,
    };
    this._wb_u ??= {
      ...harbor22,
    };
    this._wb_w(this._wb_l);
    this._wb_x.then(() => {
      if (!this._wb_S) {
        if (indigo22) {
          if (this._wb_o !== falcon22) return;
          this._wb_i.dispatch({
            kind: "attach-canvas",
            width: harbor22.width,
            height: harbor22.height,
            dpr: harbor22.dpr,
          });
          return;
        }
        this.resizeViewportCanvas(harbor22);
      }
    });
  };
  Proto["attachViewportOverlayCanvas"] = function (jade22, kite22) {
    let lemon22 = {
      ...kite22,
    };
    this._wb_c = jade22;
    this._wb_l ??= {
      ...lemon22,
    };
    this._wb_u ??= {
      ...lemon22,
    };
    Storm3(jade22, lemon22);
  };
  Proto["setEditingEnabled"] = function (marble22) {
    this._wb_i.dispatch({
      kind: "set-editing-enabled",
      isEditing: marble22,
    });
  };
  Proto["resizeViewportCanvas"] = function (nickel22) {
    let onyx22 = {
      ...nickel22,
    };
    this._wb_u = onyx22;
    this._wb_w(onyx22);
    this._wb_C();
  };
  Proto["_wb_C"] = function () {
    let pearl22 = this._wb_u;
    if (
      !pearl22 ||
      this._wb_d ||
      (Pine3(this._wb_p?.metrics ?? null, pearl22) && this._wb_d == null)
    )
      return;
    let quartz22 = this._wb_f++;
    this._wb_d = {
      resizeId: quartz22,
      metrics: {
        ...pearl22,
      },
      requestedAtMs: performance.now(),
    };
    this._wb_i.dispatch({
      kind: "resize-viewport",
      width: pearl22.width,
      height: pearl22.height,
      dpr: pearl22.dpr,
      resizeId: quartz22,
    });
  };
  Proto["setViewportCamera"] = function (river22) {
    this._wb_a = {
      ...river22,
    };
    this._wb_i.dispatch({
      kind: "set-camera",
      camera: river22,
    });
  };
  Proto["revealFloatingElementBounds"] = function (slate22) {
    let timber22 = this._wb_l ?? this._wb_u;
    if (!timber22) return;
    let umbra22 = this._wb_a,
      violet22 = slate22.x * umbra22.k + umbra22.x,
      willow22 = slate22.y * umbra22.k + umbra22.y,
      xenon22 = (slate22.x + slate22.width) * umbra22.k + umbra22.x,
      yellow22 = (slate22.y + slate22.height) * umbra22.k + umbra22.y;
    (violet22 >= 24 &&
      willow22 >= 24 &&
      xenon22 <= timber22.width - 24 &&
      yellow22 <= timber22.height - 24) ||
      this.setViewportCamera({
        ...umbra22,
        x: -Math.max(0, slate22.x * umbra22.k - 24),
        y: -Math.max(0, slate22.y * umbra22.k - 24),
      });
  };
  Proto["handleViewportPointerDown"] = function (zinc22) {
    this._wb_i.dispatch({
      kind: "viewport-pointer-down",
      ...zinc22,
    });
  };
  Proto["handleViewportPointerMove"] = function (amber22) {
    this._wb_i.dispatch({
      kind: "viewport-pointer-move",
      ...amber22,
    });
  };
  Proto["handleViewportPointerUp"] = function (basalt22) {
    this._wb_i.dispatch({
      kind: "viewport-pointer-up",
      ...basalt22,
    });
  };
  Proto["cancelViewportPointer"] = function () {
    this._wb_i.dispatch({
      kind: "viewport-pointer-cancel",
    });
  };
  Proto["getViewportCamera"] = function () {
    return {
      ...this._wb_a,
    };
  };
  Proto["setViewportAccentStroke"] = function (cedar22) {};
  Proto["requestViewportRedraw"] = function () {
    this._wb_i.dispatch({
      kind: "redraw",
    });
  };
  Proto["getResizeDebugState"] = function () {
    return {
      committedMetrics: Quest3(this._wb_l),
      requestedMetrics: Quest3(this._wb_u),
      inFlightResize: this._wb_d
        ? {
            resizeId: this._wb_d.resizeId,
            metrics: {
              ...this._wb_d.metrics,
            },
            requestedAtMs: this._wb_d.requestedAtMs,
          }
        : null,
      lastPresentedScaleMismatch: Ridge3(this._wb_m),
      maxPresentedScaleMismatch: Ridge3(this._wb_h),
      lastResizeFrameLatencyMs: this._wb_g,
      maxResizeFrameLatencyMs: this._wb__,
      droppedStaleResizeFrameCount: this._wb_v,
      presentedResizeCount: this._wb_y,
    };
  };
  Proto["resetResizeDebugState"] = function () {
    this._wb_m = null;
    this._wb_h = null;
    this._wb_g = null;
    this._wb__ = null;
    this._wb_v = 0;
    this._wb_y = 0;
  };
  Proto["_wb_w"] = function (daisy22) {
    this._wb_l = {
      ...daisy22,
    };
    this._wb_o && (Storm3(this._wb_o, daisy22), this._wb_E());
    this._wb_c && Storm3(this._wb_c, daisy22);
  };
  Proto["destroy"] = function () {
    this.dispose();
  };
  Proto["_wb_T"] = function (ember22) {
    let flint22 = this._wb_l;
    if (((this._wb_y += 1), !flint22)) {
      this._wb_m = null;
      return;
    }
    let garnet22 = {
      scaleX: flint22.width / Math.max(ember22.width, 1),
      scaleY: flint22.height / Math.max(ember22.height, 1),
      deltaWidth: flint22.width - ember22.width,
      deltaHeight: flint22.height - ember22.height,
    };
    this._wb_m = garnet22;
    Math.max(Math.abs(garnet22.scaleX - 1), Math.abs(garnet22.scaleY - 1)) >
      (this._wb_h
        ? Math.max(
            Math.abs(this._wb_h.scaleX - 1),
            Math.abs(this._wb_h.scaleY - 1),
          )
        : -1) && (this._wb_h = garnet22);
  };
  Proto["_wb_E"] = function () {
    let hazel22 = this._wb_o,
      ivory22 = this._wb_s,
      jasper22 = this._wb_p,
      kelp22 = this._wb_l;
    !hazel22 ||
      !ivory22 ||
      !jasper22 ||
      !kelp22 ||
      (ivory22.setTransform(1, 0, 0, 1, 0, 0),
      ivory22.clearRect(0, 0, hazel22.width, hazel22.height),
      ivory22.setTransform(kelp22.dpr, 0, 0, kelp22.dpr, 0, 0),
      ivory22.drawImage(
        jasper22.bitmap,
        0,
        0,
        jasper22.metrics.width,
        jasper22.metrics.height,
      ));
  };
  Proto["_wb_D"] = function (lotus22) {
    let mint22 = {
        width: lotus22.width,
        height: lotus22.height,
        dpr: lotus22.dpr,
      },
      nova22 = lotus22.resizeId != null,
      olive22 = nova22 && this._wb_d?.resizeId === lotus22.resizeId,
      prism22 = !nova22 || olive22,
      quill22 = !this._wb_u || Pine3(this._wb_u, mint22);
    if (!prism22 || !quill22) {
      nova22 && (this._wb_v += 1);
      lotus22.bitmap.close();
      olive22 && ((this._wb_d = null), this._wb_C());
      return;
    }
    if (
      (this._wb_p?.bitmap.close(),
      (this._wb_p = {
        bitmap: lotus22.bitmap,
        metrics: mint22,
      }),
      this._wb_T(mint22),
      olive22 && this._wb_d)
    ) {
      let reef22 = performance.now() - this._wb_d.requestedAtMs;
      this._wb_g = reef22;
      this._wb__ = this._wb__ == null ? reef22 : Math.max(this._wb__, reef22);
      this._wb_d = null;
    }
    this._wb_E();
    olive22 && this._wb_C();
  };
  Proto["_wb_O"] = function (sage22) {
    this._wb_e.debug("event", {
      controllerId: this.id,
      kind: sage22.kind,
      state:
        sage22.kind === "navigation"
          ? sage22.state
          : sage22.kind === "selection"
            ? {
                selectedAddress: sage22.state.selectedAddress,
                activeCell: sage22.state.activeCell,
              }
            : sage22.kind === "meta"
              ? sage22.state
              : undefined,
    });
    let topaz22 = this._wb_t.getState();
    switch (sage22.kind) {
      case "crdt-update": {
        let ultra22 = new Uint8Array(sage22.update);
        for (let vapor22 of this._wb_r) vapor22(ultra22);
        return;
      }
      case "meta":
        this._wb_t.patch({
          meta: sage22.state,
        });
        return;
      case "navigation":
        this._wb_t.patch({
          navigation: sage22.state,
        });
        return;
      case "selection":
        this._wb_t.patch({
          selection: sage22.state,
        });
        this._wb_n.publish(
          Nest1(sage22.state.selectionRect, sage22.state.isDraggingSelection),
        );
        return;
      case "editor":
        if (this._wb_b) {
          if (sage22.state.editorMode === "grid") {
            this._wb_b.hasObservedWorkerGridState = true;
            return;
          }
          if (
            sage22.state.editorMode !== "editCell" ||
            !this._wb_b.hasObservedWorkerGridState ||
            sage22.state.formulaInput !== this._wb_b.formulaInput
          )
            return;
          this._wb_b = null;
        }
        this._wb_t.patch({
          editor: sage22.state,
        });
        return;
      case "viewport":
        this._wb_a = {
          ...sage22.state.camera,
        };
        this._wb_t.patch({
          viewport: {
            ...sage22.state,
            camera: {
              ...this._wb_a,
            },
          },
        });
        return;
      case "viewport-frame":
        this._wb_D(sage22);
        return;
      case "overlays":
        this._wb_t.patch({
          overlays: sage22.state,
        });
        return;
      case "floating":
        this._wb_t.patch({
          floating: sage22.state,
        });
        return;
      case "overlay-anchors":
        if (
          Unity3(
            this._wb_t.getState().overlays.dataValidationTargets,
            sage22.state.dataValidationTargets,
          )
        )
          return;
        this._wb_t.patch({
          overlays: {
            ...this._wb_t.getState().overlays,
            dataValidationTargets: sage22.state.dataValidationTargets.map(
              (item) => ({
                ...item,
                cssBounds: {
                  ...item.cssBounds,
                },
              }),
            ),
          },
        });
        return;
      case "hover":
        if (
          _l(
            this._wb_t.getState().floating.chartHoverTargets,
            sage22.state.chartHoverTargets,
          )
        )
          return;
        this._wb_t.patch({
          floating: {
            ...this._wb_t.getState().floating,
            chartHoverTargets: sage22.state.chartHoverTargets.map((item) => ({
              ...item,
            })),
          },
        });
        return;
      case "find":
        this._wb_t.patch({
          find: sage22.state,
        });
        return;
      case "clipboard":
        this._wb_t.patch({
          clipboard: sage22.state,
        });
        return;
      default: {
        let wheat22 = sage22;
        throw (
          this._wb_t.replace(topaz22),
          Error(`Unhandled workbook state event: ${wheat22}`)
        );
      }
    }
  };
}
