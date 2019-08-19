<template>
  <el-carousel :interval="4000" type="card" height="700px" width="10000px">

    <el-carousel-item :key="1">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"><img src="./photo/show_01.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
    <el-carousel-item :key="2">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"><img src="./photo/show_02.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
    <el-carousel-item :key="3">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"><img src="./photo/show_03.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
    <el-carousel-item :key="4">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"><img src="./photo/show_04.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
    <el-carousel-item :key="5">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"> <img src="./photo/show_05.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
    <el-carousel-item :key="6">
      <h3 class="medium">{{ 1 }}</h3>
      <div align="center"><img src="./photo/show_06.png" width="825" height="600" class="head_pic" /></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: 'Home'
    };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;/*设置字符*/
    font-size: 10px;
    opacity: 0;
    line-height: 50px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #FFFFFF;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #FFFFFF;
  }
</style>
