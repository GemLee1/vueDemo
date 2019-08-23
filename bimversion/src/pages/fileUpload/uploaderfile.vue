<template>
  <div>
    <div>
      <Header1></Header1>
    </div>
    <div>
      <controlpanel1></controlpanel1>
    </div>
    <div>
      <uploader :options="options" class="uploader-example">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
          <p>点击或者拖拽文件到这里上传</p>
          <uploader-btn>选择文件</uploader-btn>
          <uploader-btn :attrs="attrs">选择图片</uploader-btn>
          <uploader-btn :directory="true">选择文件夹</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>
    </div>
  </div>
</template>

<script>
  import controlpanel1 from '../controlpanel/index1';
  import Header1 from '../../components/layout/header/index2';
  export default {
    components: { controlpanel1, Header1 },
    data() {
      return {
        options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: 'http://10.4.85.141:10000/upload/dynamic',
          testChunks: false
        },
        attrs: {
          accept: 'image/*'
        }
      };
    }
  };
</script>

<style scoped>
  .uploader-example {
    background-color: #eee;
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    min-height: 220px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
