/* 会和公共的配置合并 */
module.exports = {
  configureWebpack: {
    resolve: { /* 解决路径相关的 */
      alias: {
        'views': '@/views', /* @就表示src,在脚手架3才能这么些,2里面必须是src/views */
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
	  /* extensions公共里面已经配置了,不需要了 */
    }
  }
}