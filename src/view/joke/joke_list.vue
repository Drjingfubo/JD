<template>
    <div class="wrapper">
        <nut-tab>
            <nut-tab-panel tab-title="视频">
                <ul class="tab_info">
                    <li v-for="(item, index) in jokelist" :key="index" @click="jump(item.sid)">
                        <span>{{ item.text }}</span>
                        <img class="tab_header" :src="item.header" alt="" />
                        <img class="teb_thumbnail" :src="item.thumbnail" alt="" />
                    </li>
                </ul>
            </nut-tab-panel>
            <nut-tab-panel tab-title="播客">播客</nut-tab-panel>
        </nut-tab>
    </div>
</template>

<script>
import { Tab, TabPanel } from "@nutui/nutui";
import { jokerlist } from "../../api/jokeApi";
export default {
    components: {
        "nut-tab": Tab,
        "nut-tab-panel": TabPanel
    },
    data() {
        return {
            jokelist: [],
            count: 6,
            page: 1,
            onPullDown: true // 下拉加载
        };
    },
    mounted() {
        this.init();
        window.addEventListener("scroll", this.scroll, false); // 监听（绑定）滚轮滚动事件
    },
    destroyed() {
        window.removeEventListener("scroll", this.scroll); //  离开页面清除（移除）滚轮滚动事件
    },
    methods: {
        // 列表
        async init() {
            const res = await jokerlist(this.count, this.page);
            // console.log(res);
            this.jokelist = res.result;
            // console.log(this.jokelist);
        },
        // 滑到底部进行翻页
        scroll() {
            var that = this;
            // scrollTop 滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // windowHeight 可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            // scrollHeight 滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            // 滚动条到底部的条件
            if (scrollTop + windowHeight == scrollHeight && that.onPullDown == true) {
                // 加载数据
                that.page = that.page + 1;
                that.init();
            }
        },
        // 跳转详情页
        jump(sid) {
            this.$router.push({ path: "jokedetail", query: { sid: sid } });
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    /deep/.nut-tab {
        padding: 0;
        /deep/.nut-tab-item {
            .tab_info {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                li {
                    position: relative;
                    width: 49%;
                    margin-bottom: 0.1rem;
                    height: 5rem;
                    background: red;
                    span {
                        padding: 0 0.1rem;
                        position: absolute;
                        top: 50%;
                        font-size: 16px;
                        color: white;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .teb_thumbnail {
                        width: 100%;
                        height: 100%;
                    }
                    .tab_header {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }
                }
            }
        }
        /deep/.nav-bar {
            width: 10% !important;
            left: 20%;
        }
    }
}
</style>
