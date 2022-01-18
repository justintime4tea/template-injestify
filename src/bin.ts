#!/usr/bin/env node

import { isFunction } from './common';
import { Main } from './main';

if (isFunction(Main.run)) {
  Main.run();
}