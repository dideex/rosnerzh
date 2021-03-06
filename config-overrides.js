const {injectBabelPlugin} = require('react-app-rewired')
const rewireMobx = require('react-app-rewire-mobx')
const rewireLess = require('react-app-rewire-less')
const webpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')
const theme = require('./src/theme')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config)
  config = injectBabelPlugin('babel-plugin-styled-components', config)
  config = rewireMobx(config, env)
  config = rewireLess.withLoaderOptions({
    modifyVars: theme,
    javascriptEnabled: true,
  })(config, env)
  if (env === 'production') {
    config = webpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    })
  }

  return config
}
