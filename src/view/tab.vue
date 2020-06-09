<template>
    <div class="wrapper">
        <nut-tab position-nav="bottom" @tab-switch="tabSwitch">
            <nut-tab-panel
                v-for="value in editableTabs"
                v-bind:key="value.tabTitle"
                :tab-title="value.tabTitle"
                :icon-url="value.tabUrl"
                v-html="value.content"
            >
            </nut-tab-panel>
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
                    tabTitle: "长桌工位",
                    tabUrl:
                        "https://m.360buyimg.com/babel/jfs/t1/120287/17/2136/5446/5ec239dcEc5064cc9/94a48094a7a7a592.png",
                    content: `<img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591537778243&di=681a1ff34c56d401320cb06c18c6d535&imgtype=0&src=http%3A%2F%2F0.pic.paopaoche.net%2Fup%2F2016-9%2F201691214222.png"
            alt=""
        />`
                },
                {
                    tabTitle: "日用品",
                    content: `<img src="http://img1.imgtn.bdimg.com/it/u=3167986773,353161162&fm=26&gp=0.jpg" />`
                },
                {
                    tabTitle: "材",
                    tabUrl:
                        "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
                    content: `<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3946779090,101018648&fm=26&gp=0.jpg"
                    alt="" />`
                },

                {
                    tabTitle: "电影票",
                    tabUrl:
                        "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
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
</style>
