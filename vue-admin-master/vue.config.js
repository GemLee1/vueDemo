
module.exports = {
  // 禁止build时生成map
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 构建sass全局变量
      sass: {
        data: `@import "@/common/scss/mixin.scss";`
      }
    }
  },
  devServer: {
/*    proxy: {
      '/src/utils/api': {
        target: this.$api.fileDynamic,
        ws: true,
        changeOrigin: true
      }
    }*/
  },
  pages: {
    index: {
      entry: 'src/pages/public/index.js',
      template: 'src/pages/public/index.html',
      filename: 'index.html'
    }
  },
  // 配置externals项
  configureWebpack: {
    externals: {
      AMap: 'AMap',
      AMapUI: 'AMapUI',
      echarts: 'echarts'
    }
  }
  /*,np
  pages: {

    EpAnalysis: {
      entry: './src/pages/EpAnalysis/EpAnalysis.js',
      template: './src/pages/EpAnalysis/EpAnalysis.html',
      filename: 'EpAnalysis.html',
      title: 'dataview'
    }

  }*/
};
