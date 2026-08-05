// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wk` / export `Z$` — push or replace a modal on the host modal stack.

type ModalEntry = {
  key: number;
  ModalComponent: unknown;
  props: unknown;
};

type ModalStackState = {
  modals: ModalEntry[];
  nextKey: number;
};

type StoreLike = {
  set: (
    atom: unknown,
    updater: (prev: ModalStackState) => ModalStackState,
  ) => void;
};

type OpenModalDeps = {
  modalStackAtom: unknown;
  sameModalComponent: (a: unknown, b: unknown) => boolean;
};

let deps: OpenModalDeps | null = null;

export function setOpenModalDeps(next: OpenModalDeps): void {
  deps = next;
}

/** Bundle `Wk` / export `Z$`. */
export function openModal(
  store: StoreLike,
  ModalComponent: unknown,
  props?: unknown,
): void {
  if (deps == null) {
    throw new Error("openModal deps have not been configured");
  }
  const { modalStackAtom, sameModalComponent } = deps;
  store.set(modalStackAtom, (state) => {
    const existing = state.modals.find((entry) =>
      sameModalComponent(entry.ModalComponent, ModalComponent),
    );
    const next: ModalEntry = {
      key: existing?.key ?? state.nextKey,
      ModalComponent,
      props,
    };
    if (existing == null) {
      return {
        modals: [...state.modals, next],
        nextKey: state.nextKey + 1,
      };
    }
    return {
      ...state,
      modals: [
        ...state.modals.filter(
          (entry) => !sameModalComponent(entry.ModalComponent, ModalComponent),
        ),
        next,
      ],
    };
  });
}
