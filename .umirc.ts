import { defineConfig } from 'umi';
// import config from './config/config';
// const { routes, layout } = config;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
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
      // MY_PORT_ENV: process.env.PORT_ENV,
    },
  },
  // 配置开发服务器
  devServer: {
    // port: process.env.PORT_ENV | 8000 , //默认
    // host:'0.0.0.0',//默认
    open: true,
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
    '@primary-color': '#1DA57A', // 默认,
  },
  layout: {
    // 支持任何不需要 dom 的
    https: '//procomponents.ant.design/components/layout#prolayout',
    name: 'Ant Design',
    locale: false,
    layout: 'side',
    theme: 'pro',
  },
  title: '管理平台业务模版',
  routes: [
    {
      path: '/login',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          path: '/login',
          // icon: 'AreaChartOutlined',
          // name: '分析页',
          component: '@/pages/Login',
        },
      ],
    },
    {
      path: '/',
      name: '首页',
      icon: 'dashboard',
      exact: true,
      routes: [
        {
          // path: '/home',
          redirect: '/home',
          component: '@/pages/Home/index',
          hideInMenu: true,
        },
      ],
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
});
