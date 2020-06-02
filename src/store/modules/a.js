// 全局状态管理的地方
const state = {
    num: 0,
    count: 0
};

// 简单处理state的地方
const getters = {
    // getters 里面不仅可以拿到本地全局state 还能拿到getters和根节点的全局state
    reverseOperation: (state, getters, rootState) => {
        let num = 0;
        if (state.num != 0) {
            num = state.num * -1;
        } else {
            num = state.num;
        }

        return {
            num
        };
    },
    reverse: (state, getters, rootState) => {
        let count = 0;
        if (state.count != 0) {
            count = state.count * -1;
        } else {
            count = state.count;
        }

        return {
            count
        };
    }
};

// 处理异步数据的地方
const actions = {
    increase: ({ commit, state }, increaseNum) => {
        console.log(increaseNum);
        setTimeout(() => {
            let multiple = 3; // 3倍
            let total = multiple * increaseNum;
            commit("INCREASE", total);
        }, 300);
    },
    add: ({ commit, state }, addnum) => {
        setTimeout(() => {
            commit("ADD", addnum);
        }, 1000);
    },
    sub: ({ commit, state }, subnum) => {
        setTimeout(() => {
            commit("SUB", subnum);
        }, 1000);
    }
};

// 类似redux的reduce 其实就是一个同步函数,建议用大写，与actions区分
const mutations = {
    INCREASE: (state, total) => {
        console.log(total);
        state.num += total;
    },
    ADD: (state, addnum) => {
        state.count += addnum;
    },
    SUB: (state, subnum) => {
        state.count -= subnum;
    }
};

export default {
    namespaced: true, //  module 命名空间，以后在引用的时候都需要用到文件名/action 或者 mutations 或者 state
    state,
    getters,
    actions,
    mutations
};
