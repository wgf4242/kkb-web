/* config-overrides.js */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  //配置别名
  console.log(env);

  const argv = process.argv[2] // entry=src\components\redux-01\index.js'
  if (argv) {
    const [_key, v] = argv.split('=');
    config.entry = resolve(v)
  }

  config.resolve.alias = {
    '@': resolve('src')
  }
  return config;
}