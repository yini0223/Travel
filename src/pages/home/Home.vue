<template>
  <div>
    <home-header :searchList="weekendList"></home-header> 
    <home-swiper :list="swiperList"></home-swiper> 
    <home-icons :list="iconList"></home-icons>  
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'Home',
  // 当项目很大的时候，也可使用异步组件拆分
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  data() {
    return {
      // city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity : '',
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data;
      if(res.ret && res.data){
        const data = res.data
        // this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;        
      }
    }
  },
  mounted () {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  // 如果城市改变就重新查询数据
  activated () {
    if(this.city !== this.lastCity){
      this.lastCity = this.city;
      this.getHomeInfo()
    }    
  }
}
</script>
<style lang="stylus" scoped>

</style>
