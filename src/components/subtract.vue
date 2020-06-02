<template>
    <div>
        <h3>当前最新的count值为：{{ count }}</h3>
        <button @click="sub1(1)">减1</button>
        <button @click="sub2(2)">异步减2</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            count: state => state.a.count
        })
    },
    methods: {
        ...mapMutations({
            sub1: "a/SUB"
        }),
        ...mapActions({
            sub2: "a/sub"
        })
    }
};
</script>

<style>
h3 {
    float: left;
    margin-right: 0.5rem;
    font-size: 0.36rem;
}
</style>
