<template>
    <div class="smy_modal">
        <div class="smy_cover" v-show="coverShow"></div>
        <transition name="smy_modal" @before-enter="modalEnter" @after-leave="modalLeave">
            <div class="smy_modal_container" v-if="show">
                <div class="smy_modal_body">
                    <h3 class="smy_modal_title" v-if="title">{{title}}</h3>
                    <div class="smy_modal_content" v-if="content">
                        {{content}}
                    </div>
                </div>
                <div :class="['smy_modal_btn flex',!showCancel ? 'smy_modal_one_btn' : '']" id="smy_modal_btn">
                    <span class="smy_modal_cancel flex1" id="smy_modal_cancel" v-if="showCancel" @click="cancelEvt">{{cancelText}}</span>
                    <span class="smy_modal_ensure flex1" id="smy_modal_ensure" @click="okEvt">{{confirmText}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "smyModal",
    props: {
        show: {
            type: Boolean
        },
        title: {
            type: String
        },
        content: {
            type: String,
        },
        showCancel: {
            type: Boolean,
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        cancelColor: {
            type: String,
        },
        confirmText: {
            type: String,
            default: '确认'
        },
        confirmColor: {
            type: String
        },
        confirm: {
            type: Function,
            default: function () { }
        },
        cancel: {
            type: Function,
            default: function () { }
        },
        complete: {
            type: Function
        }
    },
    data() {
        return {
            coverShow: false,
        }
    },
    methods: {
        modalEnter() {
            this.coverShow = true;
        },
        modalLeave() {
            this.coverShow = false;
        },
        cancelEvt() {
            this.cancel();
            this.show = false;
        },
        okEvt() {
            this.confirm();
            this.show = false;
        }
    },
    mounted() {
    },
}
</script>
<style>
.flex {
    display: -webkit-box;
    display: box;
    display: -webkit-flex;
    display: flex;
}

.flex1 {
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 0.506667rem;
}

.smy_modal {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
}

.smy_cover {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .8;
}

.smy_modal_container {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 85%;
    max-width: 750px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    overflow: hidden;
    transition: .2s;
    text-align: center;
}


.smy_modal_body {
    padding: 0 25px;
}

.smy_modal_title {
    text-align: center;
    font-size: 17px;
    color: #333;
    padding: 14px 0;
    font-weight: normal;
}

.smy_modal_content {
    padding-bottom: 15px;
    font-size: 15px;
    color: #777;
    line-height: 22px;
    text-align: left;
}

.smy_modal_btn {
    border-top: 1px solid #dedede;
    font-size: 18px;
    overflow: hidden;
    position: relative;
}


.smy_modal_btn span {
    text-align: center;
    line-height: 40px;
    height: 40px;
}

.smy_modal_btn a {
    display: block;
    color: inherit;
    text-decoration: none;
}


.smy_modal_cancel {
    color: #666;
    border-right: 1px solid #dedede;
}

.smy_modal_ensure {
    color: #26bd9e;
}


.smy_modal-enter-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
}

.smy_modal-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.8);
}
</style>
