<template>
  <div>{{info}}</div>

</template>

<script>
  import axios from 'axios';

    export default {
      name: 'test',
      data() {
        return {
          info: null
        };
      },
       mounted() {
         axios.get(this.$api.fileDynamic, {
           params: {
             column: '邮编',
             table: '危房'
           }
         })
            .then(response => (this.info = response));
      }
    };
</script>

<style scoped>

</style>
