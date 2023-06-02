export default defineAppConfig({
  pages: [
    'pages/noteList/index',
    'pages/note/index',
    'pages/noteTrash/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{pagePath: 'pages/noteList/index', text: '笔记本列表'}, {pagePath: 'pages/note/index', text: '笔记'},{pagePath: 'pages/noteTrash/index', text: '回收站'}]
  }
})
