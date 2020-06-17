<template>
    <div id="login">
        <div v-if="!islogin">
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
                    <nut-button block @click="login">登录</nut-button>
                </template>
            </nut-cell>
        </div>
        <div v-if="islogin" class="login_islogin">
            <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1801478727,4115334249&fm=26&gp=0.jpg"
                alt=""
            />
            <p>您已经登陆了</p>
            <nut-button small style="float:right" @click="logout">登出</nut-button>
        </div>
    </div>
</template>

<script>
import { Button, TextInput, Toast } from "@nutui/nutui";
import { loginApi } from "../../api/loginApi";
export default {
    components: {
        "nut-button": Button,
        "nut-textinput": TextInput
    },
    data() {
        return {
            username: "",
            password: "",
            user_name: localStorage.getItem("user_name"),
            islogin: ""
        };
    },
    mounted() {
        if (this.user_name) {
            this.islogin = true;
        } else {
            this.islogin = false;
        }
    },
    methods: {
        // 登录
        login() {
            if (this.username && this.password) {
                loginApi(this.username, this.password).then(res => {
                    console.log(res.message);
                    if (res.message == "登录成功") {
                        Toast.text("登录成功");
                        this.$router.push({ path: "/jokelist" });
                        localStorage.setItem("user_name", res.data.user_name);
                    }
                    if (res.status == 400) {
                        Toast.text("用户名或者密码错误");
                    }
                });
            } else {
                Toast.text("请输入用户名和密码");
            }
        },
        // 登出
        logout() {
            localStorage.removeItem("user_name");
            location.reload();
        }
    }
};
</script>

<style lang="scss" scoped>
#login {
    width: 100%;
    height: 100%;
    .password {
        /deep/.nut-textinput-label {
            margin-right: 0.1rem;
        }
    }
    .login_islogin {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
        p {
            position: absolute;
            left: 50%;
            right: 0;
            top: 50%;
            bottom: 0;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 18px;
        }
        /deep/.nut-button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
}
</style>
