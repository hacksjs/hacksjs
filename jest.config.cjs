/**
 * Jest configuration
 *
 * https://jestjs.io/docs/configuration
 */

'use strict'

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {

  // Collect coverage from JavaScript files that match the following path
  // patterns. This means that sources files without corresponding tests will
  // show up in the coverage metrics. Every JavaScript file in the src directory
  // counts, unless the file name is prefixed with an underscore.
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverageFrom: ['**/src/**/[^_](*)+.js'],

  // A list of Istanbul report formats to use for code coverage generation.
  // https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib
  coverageReporters: ['text', 'lcov'],

  // The minimum acceptable thresholds for various coverage metrics. Jest will
  // fail the tests if coverage falls below these thresholds.
  // https://jestjs.io/docs/configuration#coveragethreshold-object
  coverageThreshold: {
    global: {
      branches: 99,    // 99% branch coverage
      functions: 99,   // 99% function coverage
      lines: 99,       // 99% line coverage
      statements: -10, // max 10 uncovered statements
    },
  },

  // The file extensions used by our JavaScript modules.
  moduleFileExtensions: ['js'],

  // The glob patterns Jest should use to detect test files. We use the
  // *.spec.js extension for end-to-end behavior-driven tests, and the
  // *.test.js extension for lower-level unit and component tests. Test files
  // that are prefixed with an underscore are ignored.
  testMatch: ['**/test/**/[^_](*)+(.spec|.test).js'],

  // Skip any tests in these paths.
  testPathIgnorePatterns: ['/node_modules/'],

  // Jest plugins to enable transformation of source code before the
  // tests are executed. All `.js` source files MUST be parsed by Babel.
  // Jest's built-in support for ECMAScript Modules is still experimental –
  // see https://jestjs.io/docs/ecmascript-modules.
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

}
