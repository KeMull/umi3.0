/*
 * @Author: KeMull
 * @Date: 2021-01-27 09:29:31
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-27 10:40:50
 */

process.env.VERSION_CODE = '2.1.3';
export default (config: any) => {
  // 创建一个具名规则，以后用来修改规则
  config.module
    .rule('images') //匹配规则是images
    .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/) //符合的条件
    .use('url-loader') //注册loader
    .loader(require.resolve('url-loader')) //使用loader
    .options({
      //可选参数
      esModule: false, //不使用es6的导入规范  使用commonJs的导入规范
      limit: 8192, //超过8k就压缩 否则就是base64
      name: `static/[name]_${process.env.VERSION_CODE}_[hash:8].[ext]`, //添加版本号
    });

  config.plugin('extract-css').use(require('mini-css-extract-plugin'), [
    {
      filename: `[name]_${process.env.VERSION_CODE}.[hash:8].css`, //添加版本号
      chunkFilename: `[name]_${process.env.VERSION_CODE}.[contenthash:8].chunk.css`,
    },
  ]);
  //js的修改 输入的时候文件名添加版本号
  config.output.filename(`[name]_${process.env.VERSION_CODE}.[hash:8].js`);
};
