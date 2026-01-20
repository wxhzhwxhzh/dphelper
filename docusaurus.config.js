// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- 基础信息配置 ---
  title: '文档网站',
  tagline: '编程教程学习平台',
  favicon: 'img/fav.png',

  // 站点的 URL 地址
  url: 'https://your-domain.com',
  // 如果你的 GitHub 仓库名是 'mydoc2'，则 baseUrl 需设为 '/mydoc2/'
  baseUrl: '/dphelper/',

  // 链接检查配置：'ignore' | 'log' | 'warn' | 'throw'
  onBrokenLinks: 'warn',


  // 语言配置
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  // --- 预设 (Presets) 配置 ---
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // 将文档设为根路径
          sidebarPath: require.resolve('./sidebars.js'),
          // 可选：设置编辑链接
          // editUrl: 'https://github.com/wxhzhwxhzh/mydoc2/tree/main/',
        },
        blog: false, // 已禁用博客功能
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // --- 插件 (Plugins) 配置 ---
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexBlog: false, // 因为禁用了博客，这里建议设为 false
        indexDocs: true,
        docsRouteBasePath: "/docs",
      },
    ],
  ],

  // --- 主题 (Theme) 配置 ---
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 公告栏
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ 如果你喜欢这个网站，请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/wxhzhwxhzh/mydoc2">GitHub</a> 给我们一个 Star！',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      // 导航栏
      navbar: {
        title: '骚神插件使用手册',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/demo/2',
            label: ' 文档',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              { label: 'GitHub 项目', href: 'https://github.com/wxhzhwxhzh/mydoc2' },
              { label: '文档首页', to: '/docs/0' },
              { label: 'AIChatOS', href: 'https://cht18.aichatosclx.com/' },
            ],
          },
          // 右侧项目
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/wxhzhwxhzh/mydoc2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页脚
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} IT知识学习网站, Inc. Built with Docusaurus.`,
      },

      // 代码高亮主题
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
      },
    }),
};

module.exports = config;