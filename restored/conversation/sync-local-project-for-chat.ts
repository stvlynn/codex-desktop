// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wds` / export `uS`.

type ScopeLike = {
  get: (atom: unknown) => {
    danger: (message: string) => void;
    formatMessage: (descriptor: {
      id?: string;
      defaultMessage: string;
      description?: string;
    }) => string;
  };
};

let syncProject: (
  scope: ScopeLike,
  project: unknown,
) => Promise<unknown> = async () => null;
let toastAtom: unknown = null;
let intlAtom: unknown = null;

export function setSyncLocalProjectForChatDeps(args: {
  syncProject: typeof syncProject;
  toastAtom: unknown;
  intlAtom: unknown;
}): void {
  syncProject = args.syncProject;
  toastAtom = args.toastAtom;
  intlAtom = args.intlAtom;
}

export async function syncLocalProjectForChat(scope: ScopeLike, project: unknown): Promise<unknown> {
  try {
    return await syncProject(scope, project);
  } catch {
    scope.get(toastAtom).danger(
      scope.get(intlAtom).formatMessage({
        id: "chatgptConversations.localProjectSync.error",
        defaultMessage: "Could not use this project for a local chat",
        description:
          "Error shown when ChatGPT project files could not be synced for a local task",
      }),
    );
    return null;
  }
}
