<template>
    <div>
        <div class="wrapper">
            <h4>demo</h4>
            <h4>count值：{{ count }}</h4>
            <my-add></my-add>
            <h4></h4>
            <my-go type="danger" round size="small" style="float:left" @click.native="go">
                跳转到首页
            </my-go>
            <my-go type="danger" round size="small" @click.native="go1">跳转到减详情</my-go>
        </div>
    </div>
</template>

<script>
import add from "../components/add";
import go from "../components/go";
import { mapState } from "vuex";
export default {
    components: {
        "my-add": add,
        "my-go": go
    },
    computed: {
        ...mapState({
            count: state => state.a.count
        })
    },
    methods: {
        go() {
            this.$router.push({ path: "/" });
        },
        go1() {
            this.$router.push({ path: "/sub" });
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    color: #333;
    font-size: 0.24rem;
    padding: 1rem 0.1rem;
}
h4 {
    text-align: center;
    padding: 0.4rem 0.1rem;
    font-size: 0.36rem;
    color: #848689;
}
.demo {
    padding: 0.05rem 0.1rem;
    font-size: 0.28rem;
}
</style>
