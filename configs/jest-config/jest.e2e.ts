import type { Config } from 'jest'

import { jestBaseConfig } from './jest.base'

export const jestE2EConfig: Config = {
  ...jestBaseConfig,
  rootDir: '__e2e__',
  testRegex: '.e2e-spec.ts$'
}
