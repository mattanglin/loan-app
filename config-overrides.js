const {
  override,
  addBabelPlugins,
  addBabelPresets,
} = require('customize-cra')

module.exports = (config, env) => {
  const updatedConfig = override(
    ...addBabelPlugins("emotion"),
    ...addBabelPresets(["@emotion/babel-preset-css-prop"])
  )(config, env)

  return updatedConfig
}
