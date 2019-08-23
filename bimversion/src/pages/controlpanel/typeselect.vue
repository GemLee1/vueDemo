<template>
  <div id="app">
    <div>
      <Header></Header>
    </div>
    <div>
      <controlpanel1></controlpanel1>
    </div>
    <div class="card-home">
    <div class="mycard">
      <h2>平台连接器</h2>
      <br>
      <md-card>
 <!--       <md-card-header>
          <div class="md-title">CSV File</div>
        </md-card-header>-->
        <md-card-avatar>
          <md-icon>folder</md-icon>
        </md-card-avatar>
        <md-card-content>
          连接到csv文件
        </md-card-content>

        <md-card-actions>
          <md-button @click="jump">上传</md-button>
          <md-button>了解详情</md-button>
        </md-card-actions>
    </md-card>
      <md-card>
        <!--       <md-card-header>
                 <div class="md-title">CSV File</div>
               </md-card-header>-->
        <md-card-avatar>
          <md-icon><img src="./database.svg"></md-icon>
        </md-card-avatar>
        <md-card-content>
          连接到mysql数据库
        </md-card-content>

        <md-card-actions>
          <md-button @click="jump">上传</md-button>
          <md-button>了解详情</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <br>
    <div class="mycard">
      <h2>探索</h2>
      <br>
      <md-card>
        <md-card-header>
          <div class="md-title">提取数据</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">video analysis</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">PostSql</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">excel File</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">google 表格</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <div class="mycard">
      <md-card>
        <md-card-header>
          <div class="md-title">youtube Analysis</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">txt File</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">spv File</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">Google Ads</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
      <md-card>
        <md-card-header>
          <div class="md-title">image File</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    padding: 5px;
    width: 320px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .mycard {
    padding:10px;
  }
/*  .card-home{
    mar
  }*/
</style>

<script>
  import Header from '../../components/layout/header/index2'
  import controlpanel1 from '../controlpanel/index1';
  export default {
    components: {Header,controlpanel1 },
    name: 'TypeSelect',
    methods: {
      jump() {
        this.$router.push({
          name: 'FileUpload'
        });
      }
    }
  };
</script>
