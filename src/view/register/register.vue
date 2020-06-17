<template>
    <div id="login">
        <div>
            <nut-cell></nut-cell>
            <nut-cell>
                <template slot="title">
                    <nut-textinput
                        v-model="username"
                        label="用户名："
                        placeholder="用户名"
                        :clearBtn="true"
                        :disabled="false"
                        maxlength="11"
                    />
                </template>
            </nut-cell>
            <div class="password">
                <nut-cell>
                    <template slot="title">
                        <nut-textinput
                            v-model="password"
                            label="密 码 ： "
                            placeholder="密码"
                            :clearBtn="true"
                            :disabled="false"
                            style="margin-right:5px"
                        />
                    </template>
                </nut-cell>
            </div>
            <nut-cell>
                <template slot="title">
                    <nut-button block @click="register">注册</nut-button>
                </template>
            </nut-cell>
        </div>
    </div>
</template>

<script>
import { Button, TextInput, Toast } from "@nutui/nutui";
import { registApi } from "../../api/loginApi";
export default {
    components: {
        "nut-button": Button,
        "nut-textinput": TextInput
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },
    mounted() {},
    methods: {
        register() {
            if (this.username && this.password) {
                registApi(this.username, this.password).then(res => {
                    if (res.info == "账户已经存在") {
                        Toast.text("该账户已经存在，请去登录");
                        this.$router.push({ path: "/login" });
                    }
                    if (res.info == "注册成功") {
                        Toast.text("注册成功，请去登录");
                        this.$router.push({ path: "/login" });
                    }
                });
            } else {
                Toast.text("请输入用户名和密码");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#login {
    position: absolute;
    top: 5.6vh;
    width: 100vw;
    .password {
        /deep/.nut-textinput-label {
            margin-right: 0.1rem;
        }
    }
}
</style>
