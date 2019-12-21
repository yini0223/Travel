<template>
  <div class="search">
    <div class="search-bar">
      <span class="iconfont">&#xe632;</span> 
      <input class="search-input" 
        type="text" 
        placeholder="输入城市景点游玩主题"
        v-model="keyword"
        autofocus
      >      
    </div>
    <router-link class="link" to="/" @click.native="handleCityClick()">
      <span>取消</span>
    </router-link>
    <!-- <div class="sell-well">
      <ul>
        <li></li>
      </ul>
    </div> -->
    <div 
      class="search-content"
      ref="search1"
      v-show="keyword">
      <ul>
        <router-link 
          tag = "li"
          class="item border-bottom" 
          v-for="(item,index) in list" 
          :key="index"
          :to="'/detail/' + item.id"
          @click.native="handleCityClick()">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
          </div>                
        </router-link>
        <li 
          class="search-item border-bottom"
          v-show="hasNoData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data () {
    return {
        keyword: '',
        list: [],
        searchList: {}
    }
  },
  computed:{
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(){
      this.keyword = ''
    }
  },
  watch: {
    keyword () {      
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.$route.query) {
          console.log(this.$route.query[i])
          this.$route.query[i].forEach((value) => {
            if(value.title.indexOf(this.keyword) > -1 || value.desc.indexOf(this.keyword) > -1){
              result.push(value)
            }
          })
        }
        this.list = result;
      },100)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .search
    overflow: hidden
    height: 0.84rem
    line-height: 0.84rem
    background: $bgColor
    display: flex
    .search-bar 
      width: 80%
      height: 0.62rem 
      line-height: 0.62rem
      border-radius: .26rem 
      padding: 0 .1rem
      background: #fff
      margin-top: .12rem
      margin-left: .1rem
      .iconfont
        margin-top: .12rem
        margin-left: .2rem
        color: #ccc
      .search-input
        width: 88%
        height: .62rem
        margin-bottom: .12rem
        line-height: 0.62rem
        border-radius: .26rem
        color: #666
        padding: 0 .1rem
        box-sizing: border-box
    .link
      flex: 1
      text-align: center
      color: #fff
      // text-indent: .04rem
      font-size: .32rem
      font-weight: bold 
    .search-content
      z-index: 1
      overflow: hidden
      position: absolute
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      // background : #eeeeee
      .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
          width: 1.7rem
          height: 1.7rem
          padding: .1rem
        .item-info
          flex: 1
          min-width: 0
          .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
          .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
          .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .3rem
            color: #fff
</style>