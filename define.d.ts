interface RequireDefine {
  (deps: string[], ready: (...modules: any[]) => any): void
}

declare var define: RequireDefine;

interface Window {
  define: RequireDefine;
}