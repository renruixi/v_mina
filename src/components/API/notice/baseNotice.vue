<template>
    <div class="smy_confirm">
        <div class="smy_cover" v-show="coverShow"></div>
        <transition name="smy-confirm" @before-enter="confirmEnter" @after-leave="confirmLeave">
            <div class="smy_confirm_container" v-if="show">
                <h3 class="smy_confirm_head" v-if="title">{{title}}</h3>
                <div class="smy_confirm_body">
                    {{message}}
                </div>
                <div :class="['smy_confirm_btn flex',cancelHide ? 'smy_confirm_one_btn' : '']" id="smy_confirm_btn">
                    <span class="smy_confirm_cancel flex1" id="smy_confirm_cancel" v-if="!cancelHide"  @click="cancelEvt">{{cancelValue}}</span>
                    <span class="smy_confirm_ensure flex1" id="smy_confirm_ensure"  @click="okEvt">{{okValue}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        name:"smyConfirm",
        props:{
            message:{
                type:String,
                default:""
            },
            title:{
                default:"提示"
            },
            cancelHide:{
                type:Boolean,
                default:false
            },
            cancelValue:{
                type:String,
                default:"取消"
            },
            cancelFunc:{
                type:Function,
                default:function(){},
            },
            okValue:{
                type:String,
                default:"确定"
            },
            okFunc:{
                type:Function,
                default:function(){}
            },
            callback:{
                type:Function,
                default:function(){}
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                confirmShow:this.show,
                coverShow:false,
            }
        },
        methods:{
            confirmEnter(){
                this.coverShow = true;
            },
            confirmLeave(){
                this.coverShow  = false;
            },
            cancelEvt(){
                this.cancelFunc();
                this.show = false;
            },
            okEvt(){
                this.okFunc();
                this.show = false;
            },
            updateMount(){
                let self = this;
                let vm = this.$mount();
                this.callback();
            },
        },
        mounted(){
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

.smy_confirm {
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

.smy_confirm_container {
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

.smy_confirm_head {
    text-align: center;
    font-size: 17px;
    color: #333;
    padding: 23px 30px 0;
}

.smy_confirm_body {
    padding: 10px 20px 15px;
    font-size: 15px;
    color: #777;
    line-height: 30px;
}

.smy_confirm_btn {
    border-top: 1px solid #dedede;
    font-size: 18px;
    overflow: hidden;
    position: relative;
}


.smy_confirm_btn span {
    text-align: center;
    line-height: 50px;
    height:50px;
}

.smy_confirm_btn a {
    display: block;
    color: inherit;
    text-decoration: none;
}


.smy_confirm_cancel {
    color: #666;
    border-right: 1px solid  #dedede;
}

.smy_confirm_ensure {
    color: #26bd9e;
}


.smy-confirm-enter-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
}

.smy-confirm-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.8);
}


</style>
