// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OB` / export `NL` — navigate with transition flush when URL changes.

type LocationLike = { pathname: string; search: string; hash: string };

let useLocation: (() => LocationLike) | null = null;
let useNavigate: (() => (to: string) => void) | null = null;
let parseTo: ((input: unknown) => unknown) | null = null;
let toPath: ((parsed: unknown) => string) | null = null;
let startTransition: ((parsed: unknown, kind: string) => void) | null = null;
let flushSync: ((fn: () => void) => void) | null = null;

export function setColdNavigateDeps(args: {
  useLocation: () => LocationLike;
  useNavigate: () => (to: string) => void;
  parseTo: (input: unknown) => unknown;
  toPath: (parsed: unknown) => string;
  startTransition: (parsed: unknown, kind: string) => void;
  flushSync: (fn: () => void) => void;
}): void {
  useLocation = args.useLocation;
  useNavigate = args.useNavigate;
  parseTo = args.parseTo;
  toPath = args.toPath;
  startTransition = args.startTransition;
  flushSync = args.flushSync;
}

export function useColdNavigate(): (input: unknown) => void {
  if (
    useLocation == null ||
    useNavigate == null ||
    parseTo == null ||
    toPath == null ||
    startTransition == null ||
    flushSync == null
  ) {
    throw new Error("useColdNavigate deps have not been configured");
  }
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  return (input: unknown) => {
    const parsed = parseTo!(input);
    const next = toPath!(parsed);
    if (`${pathname}${search}${hash}` !== next) {
      startTransition!(parsed, "cold");
      flushSync!(() => {
        navigate(next);
      });
    }
  };
}
