// const fs = require('fs');
const path = require('path');
const addLessLoader = require('customize-cra-less-loader');
const { override, addWebpackAlias } = require('customize-cra');

const resolve = (dir) => path.resolve(__dirname, dir);

// module.exports = function override()

module.exports = override(
  addLessLoader({
    cssLoaderOptions: {
      sourceMap: true,
      modules: { localIdentName: '[hash:base64:8]' },
    },
    lessLoaderOptions: {
      lessOptions: { strictMath: true },
    },
  }),
  addWebpackAlias({ '@': resolve('src') })
);

// const fs = require('fs');
// const path = require('path');
// const lessToJS = require('less-vars-to-js');

// const defaultStyle = lessToJS(
//   fs.readFileSync('./src/assets/styles/default.less', 'utf8')
// );
// const resolve = (dir) => path.resolve(__dirname, dir);

// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true,
//   }),
//   addLessLoader({
//     lessOptions: { javascriptEnabled: true, modifyVars: defaultStyle },
//   }),
//   addWebpackAlias({ '@': resolve('src') })
// );
