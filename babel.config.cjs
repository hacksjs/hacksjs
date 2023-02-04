/**
 * Babel configuration
 *
 * https://babeljs.io/docs/en/config-files
 */

'use strict'

module.exports = function (api) {
  api.cache(true)

  // === PRESETS ===
  //
  // Presets are pre-packaged collections of transformation plugins.
  //
  // `@babel/preset-env` is a smart preset that determines which
  // transformations are required based on your target runtime environments.
  //
  // https://babeljs.io/docs/en/babel-preset-env

  const presets = [
    [
      '@babel/preset-env',
      {
        // Minimum target environments to support.
        // https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          node: '16.13.0',
          // TODO: Add browserslist for web targets?
        },
      },
    ],
  ]

  // === PLUGINS ===
  //
  // Plugins are specific transformations that you always want to be applied
  // to your source code. Generally, this is where you will enable use of
  // non-standard syntax in JavaScript files.
  //
  // Most plugins to transform ECMAScript standards are included in
  // @babel/preset-env, and therefore do not need to be included here.
  //
  // Transformation plugins are named `@bebel/plugin-proposal-*`. Examples:
  //
  // - https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  // - https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
  // - https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread

  const plugins = []

  return {
    presets,
    plugins,
  }
}
