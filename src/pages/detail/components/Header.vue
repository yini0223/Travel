<template>
  <div class="header">
    <router-link 
      tag="div" 
      to="/" 
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div 
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle">      
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点选择
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop;
      if(top > 60){
        let opacity = top / 140;
        opacity = opacity > 1 ? 1: opacity;
        this.opacityStyle = {opacity}
        this.showAbs = false;
      }else{
        this.showAbs = true;
      }
    }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  },
  // 清除全局注册事件，以防影响其他页面
  deactivated() {
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed 
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right:0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 0.32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: 0.64rem
      text-align: center
      font-size: 0.4rem
      color: #fff
</style>