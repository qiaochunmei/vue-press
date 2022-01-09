// 配置网站的标题和描述，方便 SEO
module.exports = {
  title: '小乔前端成长指南',
  description: '每天进步一点点',
  theme: 'reco', // 更换主题
  locales: { // 设置语言
    '/': {
      lang: 'zh-CN'
    }
  },
  // vuepress-theme-reco将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧，如果要全局开启，可开启
  themeConfig: {
    subSidebar: 'auto'
  },
  // 路径名为 "/<REPO>/"
  base: '/vue-press/',
  themeConfig: {
    // 添加导航栏：页首的右上角添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web-frame/' },
      { text: 'Node', link: '/node/nest/nest' },
      { text: '面试问题', link: '/interview/' },
      { text: 'Git', link: '/git/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Mysql', link: '/mysql/' },
      { text: 'Docker', link: '/docker/' },
      { 
        text: '小乔的前端博客', 
        items: [
          { text: 'Github', link: 'https://github.com/qiaochunmei' },
          { text: '掘金', link: 'https://juejin.cn/user/43636195606333/posts' }
        ]
      }
    ],
    // 添加侧边栏
    // sidebar: [
    //   {
    //       title: '基础知识',
    //       path: '/',
    //       collapsable: false, // 不折叠
    //       children: [
    //         { title: "必读", path: "/" }
    //       ]
    //   },
    //   {
    //     title: "Node",
    //     path: '/node/nest/nest',
    //     collapsable: false, // 不折叠
    //     children: [
    //       { title: "nest", path: "/node/nest/nest" },
    //       { title: "mysql", path: "/node/mysql/mysql" }
    //     ],
    //   }
    // ]
  }
}