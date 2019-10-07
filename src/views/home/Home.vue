<template>
  <div id="home">
    <!-- 首页导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 首页轮播 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 首页推荐 -->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <!-- 本周流行 -->
    <feature-view />
  </div>
</template>

<script>
  /* 首页导航 */
  import NavBar from 'components/common/navbar/NavBar.vue'
  /* 首页轮播 */
  import HomeSwiper from './childComps/HomeSwiper'
  /* 首页推荐 */
  import HomeRecommendView from './childComps/HomeRecommendView'
  /* 本周流行 */
  import FeatureView from './childComps/FeatureView'

  /* 获取网络请求数据 */
  import {getHomeMultiData} from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求轮播等数据并保存到data中
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    /* 解决固定定位脱离文本流,banner顶上去 */
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint); /* 背景色 */
    color: #fff; /* 文字颜色 */
    /* 固定顶部导航 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8; /* 在banner之上 */
  }
</style>
