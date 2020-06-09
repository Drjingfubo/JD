<template>
    <div class="wrapper">
        <nut-tab position-nav="bottom" :is-scroll="true" @tab-switch="tabSwitch">
            <nut-tab-panel
                v-for="value in editableTabs"
                v-bind:key="value.tabTitle"
                :tab-title="value.tabTitle"
                :icon-url="value.tabUrl"
                v-html="value.content"
            >
            </nut-tab-panel>
            <div class="guide">
                <b class="left"></b>
                <b class="right"></b>
            </div>
        </nut-tab>
    </div>
</template>

<script>
import { Tab, TabPanel } from "@nutui/nutui";
export default {
    components: {
        "nut-tab": Tab,
        "nut-tab-panel": TabPanel
    },
    data() {
        return {
            editableTabs: [
                {
                    // tabTitle: "长桌工位",
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/120287/17/2136/5446/5ec239dcEc5064cc9/94a48094a7a7a592.png",
                    content: `<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591537778243&di=681a1ff34c56d401320cb06c18c6d535&imgtype=0&src=http%3A%2F%2F0.pic.paopaoche.net%2Fup%2F2016-9%2F201691214222.png"
                     alt=""/>`
                },
                {
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/115086/3/7221/5608/5ec239dbEb1ca0370/8c014860f53ea661.png",
                    content: `<img src="http://img1.imgtn.bdimg.com/it/u=3167986773,353161162&fm=26&gp=0.jpg" />`
                },
                {
                    // tabTitle: "材",
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/126206/33/2031/6855/5ec239dcE755eda56/46bb62da8b1ac48e.png",
                    content: `<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3946779090,101018648&fm=26&gp=0.jpg"
                    alt="" />`
                },
                {
                    // tabTitle: "材",
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/122398/39/2065/5766/5ec239dbE2d95fe9e/3d67319ceb609cf9.png",
                    content: `<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3946779090,101018648&fm=26&gp=0.jpg"
                    alt="" />`
                },
                {
                    // tabTitle: "材",
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/127511/5/2092/6017/5ec239ddEf41c3f50/00b260c93ab9a89b.png",
                    content: `<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3946779090,101018648&fm=26&gp=0.jpg"
                    alt="" />`
                },
                {
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/113134/2/7446/6091/5ec239dcE8805081b/29cfaf1d75c34c0f.png",
                    content: `<img src="http://img2.imgtn.bdimg.com/it/u=3634523746,2780862578&fm=26&gp=0.jpg"
                    alt="" />`
                }
            ]
        };
    },
    methods: {
        tabSwitch: function(index, event) {
            // console.log(index + "--" + event);
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100%;
}
.guide {
    position: absolute;
    width: 90%;
    height: 0.37rem;
    bottom: 1.1rem;
    display: flex;
    justify-content: space-between;
}
.left {
    background: url(//m.360buyimg.com/babel/jfs/t1/108480/14/18569/475/5ec239deE429a81a5/6a7bdfde4e18a4bd.png)
        no-repeat;
    background-size: 100%;
    flex: 1;
    position: relative;
    z-index: 3;
    max-width: 0.27rem;
    height: 0.37rem;
}
.right {
    background: url(//m.360buyimg.com/babel/jfs/t1/128480/22/2005/467/5ec239deEfbde5917/c24d7edcc03e9a9c.png)
        no-repeat;
    background-size: 100%;
    animation-delay: 1s;
    flex: 1;
    position: relative;
    z-index: 3;
    max-width: 0.27rem;
    height: 0.37rem;
}
// 箭头动画
@keyframes moving {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0);
    }
}
b {
    animation: moving 2s infinite;
}
</style>
<style>
.nut-tab-item {
    overflow: hidden;
}
img {
    /* max-height: 10rem; */
    width: 100%;
    height: auto;
}
.nut-tab-item {
    height: auto;
}
.nut-tab-title-bottomnav {
    height: 2.2rem;
    background: #cacaf9;
    border: 2px solid black;
    padding: 0 0 0 0.5rem;
}
.nut-tab-icon {
    width: 1.61rem;
    height: 1.61rem;
}
.nut-tab-title-bottomnav .nav-bar-bottom {
    position: absolute;
    height: 0.33rem;
    left: 74px;
    width: 0.34rem !important;
    top: 20px;
    z-index: 2;
    background: url(//m.360buyimg.com/babel/jfs/t1/119927/38/2057/623/5ec239dcEec786548/7ef4bfdc228800ab.png);
    /* background: #F0250F; */
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-size: 100%;
}
.nut-title-nav-scroll {
    background: #cacaf9;
}
.nut-title-nav-scroll {
    min-width: 1.61rem;
    min-height: 1.61rem;
    max-width: 1.61rem;
}
</style>
