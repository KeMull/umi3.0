/*
 * @Author: KeMull
 * @Date: 2021-01-20 09:53:01
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-27 10:44:29
 */
import { defineConfig } from 'umi';
import WebpackPlugin from './config/plugin.config';
// import config from './config/config';
// const { routes, layout } = config;
export default defineConfig({
  externals: {
    externals: {
      image: [/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/],
    },
  },

  nodeModulesTransform: {
    type: 'none',
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 9250,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  // 环境变量
  define: {
    /*  
      umi内置的系统环境变量:
      NODE_ENV: development | production  只有两种值 
      PORT: 默认 8000
      HOST: 默认 0.0.0.0
    */
    // 自定义node的系统环境变量
    'process.env': {
      MY_NODE_ENV: process.env.MY_NODE_ENV,
      VERSION_CODE: process.env.VERSION_CODE,
      // MY_PORT_ENV: process.env.PORT_ENV,
    },
  },
  // 配置开发服务器
  devServer: {
    // port: process.env.PORT_ENV | 8000 , //默认
    // host:'0.0.0.0',//默认
    // open: true,
  },
  // mock配置
  mock: {
    exclude: [], //忽略不需要走 mock 的文件
  },
  // 打包后配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  hash: true, //默认为false
  // 代理
  proxy: {},
  // 启动服务端渲染
  // ssr: {},
  // 配置 <body> 里的额外脚本
  scripts: [{}],
  // 配置需要兼容的浏览器最低版本
  targets: {
    chrome: 49, //默认
    firefox: 64, //默认
    safari: 10, //默认
    edge: 13, //默认
    ios: 10, //默认
    ie: 11,
  },
  // theme 配置主题，实际上是配 less 变量
  theme: {
    '@primary-color': '#fff', // 默认,
  },
  chainWebpack: WebpackPlugin,
  // layout: {
  //   // 支持任何不需要 dom 的
  //   https: '//procomponents.ant.design/components/layout#prolayout',
  //   name: '一碗仙缘',
  //   locale: false,
  //   // layout: 'side',
  //   // theme: 'pro',
  // },
  // base: '/*/',
  routes: [
    {
      path: '/',
      // exact: true,
      // redirect: '/home',
      component: '@/layouts/index',
      routes: [
        {
          name: '首页',
          icon: 'dashboard',

          path: '/home',
          component: './Home',
          hideInMenu: true,
        },
        {
          path: '/dashboard',
          name: '数据统计',
          icon: 'dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              // icon: 'AreaChartOutlined',
              name: '分析页',
              component: '@/pages/Dashboard/index',
            },
            {
              path: '/dashboard/monitor',
              // icon: 'DesktopOutlined',
              name: '控制页',
              component: '@/pages/about/index',
            },
          ],
        },
        {
          path: '/platform_services',
          name: '数据统计',
          icon: 'dashboard',
          routes: [
            {
              path: '/platform_services',
              // icon: 'AreaChartOutlined',
              name: '套餐专享',
              component: '@/pages/Platform_Services/index',
            },
          ],
        },
      ],
    },
    {
      path: '/user',
      component: '@/layouts/index',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './Login',
        },
      ],
    },
  ],
});
