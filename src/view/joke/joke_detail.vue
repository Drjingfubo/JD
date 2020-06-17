<template>
    <div class="wrapper">
        <video class="wrapper_video" :src="detail.video" controls="controls"></video>
        <p class="wrapper_text">{{ detail.text }}</p>
        <p class="wrapper_name">发布者：{{ detail.name }}</p>
    </div>
</template>

<script>
import { jokerdetail } from "../../api/jokeApi";
export default {
    data() {
        return {
            detail: {
                video: ""
            }
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const sid = this.$route.query.sid;

            const res = await jokerdetail(sid);
            console.log(res);
            this.detail = res.result;
            console.log(this.detail);
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
    .wrapper_video {
        max-height: 100%;
        max-width: 100%;
    }
    .wrapper_text {
        padding: 0 0.17rem;
        min-height: 0.24rem;
        font-size: 18px;
        font-weight: 700;
        font-family: sans-serif;
        margin-bottom: 0.1rem;
    }
    .wrapper_name {
        padding: 0 0.17rem;
        float: right;
        font-family: sans-serif;
        margin-bottom: 0.5rem;
    }
}
</style>
