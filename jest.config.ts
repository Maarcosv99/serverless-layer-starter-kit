import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

const SECONDS_IN_MILLISECONDS = 1000

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  preset: 'ts-jest',
  coverageProvider: "babel",
  coverageDirectory: "src",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  testTimeout: 15 * SECONDS_IN_MILLISECONDS
}

export default jestConfig