import { container, dependencies, TYPES } from "./ioc";
import { isLogger, Logger } from "./logging";

export class Main { 
  public static async run() {
    await container.loadAsync(dependencies);

    const logger: Logger = container.get(TYPES.Logger);

    if (isLogger(logger)) {
      logger.debug('package-name::Main::run');
    }
  }
}