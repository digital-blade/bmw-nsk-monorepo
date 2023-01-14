import type { Config } from 'jest'

import { jestBaseConfig } from './jest.base'

export const jestUnitConfig: Config = {
  ...jestBaseConfig,
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage'
}
