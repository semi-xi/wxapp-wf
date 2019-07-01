 /**
 * JS代码规范
 * Docs: https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  env: {
    es6: true,              // 支持除了modules所有 ECMAScript 6 特性
    browser: true,          // browser 全局变量
    node: true              // nodejs 全局变量
  },
  parserOptions: {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },

  globals: {}
}


