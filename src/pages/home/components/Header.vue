<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <router-link class="link" :to="{path: '/search', query:{list: searchList}}">
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>        
                <input class="header-search" type="text" placeholder="输入城市景点游玩主题">
            </div>
        </router-link>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont area-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: "HomeHeader",
    props: {
        searchList: Array
    },
    computed: {
        ...mapState(['city'])
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align: center
                font-size: .4rem
        .link 
            flex: 1
            height: .64rem
            line-height: .64rem
            background: #fff
            border-radius: .1rem
            margin-top: .12rem
        .header-input
            .iconfont
                margin-top: .12rem
                margin-left: .2rem
                color: #ccc
            .header-search
                width: 88%;
                margin-bottom: 0.12rem;
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .area-icon
                font-size: .24rem
                margin-left: -.06rem
</style>
