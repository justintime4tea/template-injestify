import { AsyncContainerModule } from "inversify";
import { DefaultLogger, Logger } from "../logging";
import { TYPES } from "./constants";

export default new AsyncContainerModule(async bind => {
  const logLevelIsANumber = typeof process.env.LOG_LEVEL === 'string' && !isNaN(parseInt(process.env.LOG_LEVEL, 10));
  const logLevel = logLevelIsANumber && typeof process.env.LOG_LEVEL === 'string' ? parseInt(process.env.LOG_LEVEL, 10) : DEFAULT_LOG_LEVEL;
  const logger: Logger = new DefaultLogger(logLevel, console);
  bind<Logger>(TYPES.Logger).toConstantValue(logger);
});

const DEFAULT_LOG_LEVEL = 4;