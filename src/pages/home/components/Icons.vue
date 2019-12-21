<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div 
                    class="icon" 
                    v-for="item in page" 
                    :key="item.id"
                >            
                    <div class="icon-img">
                        <img 
                            class="icon-img-content" 
                            :src="item.imgUrl" 
                        />
                    </div>            
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>    
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false
            }
        }        
    },
    computed: {
        // 将icon进行分页，没页的显示内容用一个数组装在一起，
        pages () {
            // 最外层数组，所有页的数据
            const pages = []
            this.list.forEach((item, index) => {
                // 根据每页显示的数据条数，确定分的页数
                const page = Math.floor(index / 8)
                // 如果当前下标没有数据，说明是一个新的页，将其赋为数组
                if (!pages[page]) {
                    pages[page] = []
                }
                // 将当前页的数据push进对应的数组
                pages[page].push(item)
            })
            // 返回处理后的所有数据
            return pages
            }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .2rem
        .icon
            position: relative
            overflow: hidden
            float: left 
            width: 25%
            height: 0
            padding-bottom: 25%
            // background: #eee
            .icon-img
                position: absolute 
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position: absolute 
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
                ellipsis()
</style>    