const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: {
    //   ws: false
    // }
    // host: '0.0.0.0',
    // port: 6103,
    // client: {
    //   WebSocketURL: 'ws://0.0.0.0:8080/ws',
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // }
    host: 'localhost',
    port: 8080,
    proxy: {
      "/": {
        ws: false,
        target: 'http://localhost:8080',//目标代理接口地址
        // secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器
        pathRewrite: {
          '^/': ""
        },
      },
    },

  }
})
