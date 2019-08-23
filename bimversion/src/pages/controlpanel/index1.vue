<template>
  <div id="app">
    <md-menu md-direction="bottom-end">
      <md-menu md-direction="bottom-end">
        <md-button md-menu-trigger @click="jump2">返回</md-button>
      </md-menu>
      <md-button md-menu-trigger>报告</md-button>
      <md-menu-content>
        <md-menu-item>新建</md-menu-item>
        <md-menu-item>浏览</md-menu-item>
        <md-menu-item >api</md-menu-item>
      </md-menu-content>
    </md-menu>
    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger @click="jump" target="_blank">数据源</md-button>
    </md-menu>
    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger @click="jump3">新建数据源</md-button>
    </md-menu>
    <div>
      <SearchBox style="width:300px"
                 placeholder="Input something here"
                 v-model="value"
                 @search="onSearch($event)">
        <Addon>
          <span v-if="value" class="textbox-icon icon-clear" title="Clear value" @click="value=null"></span>
        </Addon>
        <Menu>
          <MenuItem value="all" text="All News" iconCls="icon-ok"></MenuItem>
          <MenuItem value="sports" text="Sports News" iconCls="icon-man"></MenuItem>
        </Menu>
      </SearchBox>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'controlpanel1',
    data() {
      return {
        value: null
      };
    },
    methods: {
      jump() {
        this.$router.push({
          name: 'resourceview'
        });
      },
      jump2() {
        this.$router.push({
          name: 'controlpanel'
        });
      },
      jump3() {
        this.$router.push({
          name: 'TypeSelect'
        });
      },
      onSearch(event) {
        this.value = event.value;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
