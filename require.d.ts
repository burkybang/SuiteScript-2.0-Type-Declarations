interface Require {
  (modules: string[], ready?: (...modules: any[]) => void): void
}

declare var require: Require;

interface Window {
  require: Require;
}