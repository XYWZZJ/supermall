<template>
  <!-- 多个地方使用nav-bar不用id -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px; /* 导航的高度,经验值*/
    line-height: 44px;
    text-align: center;
  }

  .left {
    width: 60px;
  }

  .right {
    width: 60px;
  }
  /* 出去左右的就是剩下的 */
  .center {
    flex: 1;
  }
</style>
