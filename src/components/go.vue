<template>
    <div>
        <button class="my-btn" :class="btnClassObj">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "medium"
        },
        round: {
            type: String,
            default: "round"
        }
    },
    computed: {
        btnClassObj() {
            return {
                "my-btn-primary": this.type === "primary",
                "my-btn-danger": this.type === "danger",
                "my-btn-success": this.type === "success",
                "my-button-large": this.size === "large",
                "my-button-medium": this.size === "medium",
                "my-button-small": this.size === "small",
                "is-round": this.round === ""
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.my-btn {
    margin-left: 10px;
    background-color: #fff;
    outline: 1px;
    border: 1px solid #ccc;
    color: #000;
    margin-left: 10px;
    margin-bottom: 10px;
}
.my-btn-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.my-btn-primary:focus,
.my-btn-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
.my-btn-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.my-btn-danger:focus,
.my-btn-danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
}
.my-btn-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.my-btn-success:focus,
.my-btn-success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
}
// size大小
.my-button-large {
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.my-button-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.my-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
// 是否圆角
.my-btn.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
</style>
