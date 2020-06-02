<template>
    <div>
        <div class="wrapper">
            <h4>vuex</h4>
            <h4>vuex demo</h4>
            <my-add></my-add>
            <h4></h4>
            <my-subtract></my-subtract>
            <h4></h4>
            <div class="demo">reverseA: {{ reverseA.count }}</div>
            <h4></h4>
            <my-go type="danger" round size="small" @click.native="go">跳转到首页</my-go>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import add from "../components/add";
import substract from "../components/subtract";
import go from "../components/go";
export default {
    components: {
        "my-add": add,
        "my-subtract": substract,
        "my-go": go
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            reverseA: "a/reverse"
        })
    },
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        go() {
            this.$router.push({ path: "/" });
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
