<template>
    <transition name="smy-toast">
        <div :class="toastClass"
             v-if="!closed">
            <i>{{text}}</i>
        </div>
    </transition>
</template>
<script>
export default {
    name: "smyToast",
    props: {
        text: {
            type: String
        },
        position: {
            type: String,
            default: "middle"
        },
        duration: {
            type: Number,
            default: 3000
        },
        closed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            toastClass: this.position + " smy_toast",
        }
    }
}
</script>
<style>
.smy-toast-enter-active {
    opacity: 0;
}

.smy-toast-leave-active {
    opacity: 0;
}

.smy_toast {
    min-width: 160px;
    max-width: 94%;
    min-height: 26px;
    max-height: 80%;
    padding: 18px 24px;
    vertical-align: middle;
    background: rgba(0, 0, 0, .8);
    border-radius: 5px;
    position: fixed;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    -webkit-transition: opacity 0.3s linear;
    transition: opacity 0.3s linear;
}


.smy_toast i {
    font-size: 15px;
    color: #fff;
    font-style: normal;
    line-height: 23px;
    vertical-align: middle;
}

.middle {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.bottom {
    bottom: 50px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
}

.top {
    top: 50px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
}
</style>
