import { Logger } from "./logger";

// tslint:disable: no-console
export class DefaultLogger implements Logger {
  public readonly level: number;
  private readonly console: Console;

  public constructor(level: number, console: Console) {
    this.level = level;
    this.console = console;
  }

  public trace(...message: string[]): void {
    if (this.level >= 6) {
      this.console.trace(...message);
    }
  }
  public debug(...message: string[]): void {
    if (this.level >= 5) {
      this.console.debug(...message);
    }
  }
  public info(...message: string[]): void {
    if (this.level >= 4) {
      this.console.info(...message);
    }
  }
  public warn(...message: string[]): void {
    if (this.level >= 3) {
      this.console.warn(...message);
    }
  }
  public error(...message: string[]): void {
    if (this.level >= 2) {
      this.console.error(...message);
    }
  }
  public fatal(...message: string[]): void {
    if (this.level >= 1) {
      this.console.log(...message);
    }
  }
}