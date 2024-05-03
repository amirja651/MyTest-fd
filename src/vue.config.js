// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5078',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
  