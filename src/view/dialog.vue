<template>
    <div class="main">
        <div class="enter">
            <nut-dialog
                title="输入你的名字"
                :visible="dialogShow"
                @ok-btn-click="go"
                @cancel-btn-click="dialogShow = false"
                @close="dialogShow = false"
            >
                <nut-textinput
                    v-model="val"
                    placeholder="点击输入名字"
                    :clearBtn="true"
                    :disabled="false"
                />

                <div class="sure">点击确定，去拍照</div>
            </nut-dialog>
            <div>
                <nut-button class="button" type="red" shape="circle" @click="dialogShow = true">
                    点击输入名字
                </nut-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, TextInput } from "@nutui/nutui";
export default {
    components: {
        "nut-button": Button,
        "nut-textinput": TextInput
    },
    data() {
        return {
            // dialog打开条件为true
            dialogShow: false,
            // 文本框绑定
            val: ""
        };
    },
    methods: {
        // 点击确定跳转到tab页面
        go() {
            if (this.val) {
                this.$router.push({ path: "/tab" });
            } else {
                this.$toast.fail("请输入姓名");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    height: 100%;
}
.enter {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(//m.360buyimg.com/babel/jfs/t1/127398/20/2053/59499/5ec239dcE924556a7/5179f43d6e772089.png);
    background-size: 100% 100%;
}
.button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.sure {
    margin-top: 0.4rem;
}
</style>
