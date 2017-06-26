<template>
    <div class="smy_picker">
        <div class="smy_picker_container">
            <div class="picker_btn_container">
                <div class="picker_btn l_cancel">取消</div>
                <div class="picker_btn l_finish">确定</div>
            </div>
            <div class="smy_picker_area_outer">
                <div class="smy_picker_area_inner">
                    <div class="smy_picker_wrap" @touchstart="_pickerTouchStart" @touchmove="_pickerTouchMove" @touchend="_pickerTouchEnd" ref="pickArea">
                        <div class="smy_picker_item" v-for="(item,index) in value" :key="index" :style="{'height':itemHeight+'px'}">{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAttr, setAttr, getTranslate, requestAnimationFrame, cancelAnimationFrame } from "utils/dom.js"
export default {
    name: "smyPicker",
    props: {
        type: {  //address  duringTime   year
            type: String
        },
        value: {
            type: Array,
            default: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06']
        },
        itemHeight: {
            type: Number,
            default: 36
        }
    },
    data() {
        return {
            dragState: {},
        }
    },
    mounted() {
        this._initDrag();
    },
    methods: {
        _initDrag() {
            setAttr(this.$refs.pickArea, "transform", "translate(0,0)")
        },
        _pickerCancel() { },
        _pcikerConfirm() { },
        _pickerTouchStart(e) {
            let event = e.changedTouches[0];
            if (this.isDragging) return;
            this.dragState = {
                start: new Date(),
                startTop: event.pageY,
                startTranslateTop: getTranslate(this.$refs.pickArea).top
            }
        },
        _pickerTouchMove(e) {
            let event = e.changedTouches[0];
            this.isDragging = true;
            this.dragState.top = event.pageY;

            var deltaY = this.dragState.top - this.dragState.startTop;
            var translate = this.dragState.startTranslateTop + deltaY;
            setAttr(this.$refs.pickArea, "transform", "translate(0," + translate + "px)")
        },
        _pickerTouchEnd() {
            if (this.isDragging) {
                this.isDragging = false;
            }
            let ratio = getTranslate(this.$refs.pickArea).top % this.itemHeight
            if (ratio < this.itemHeight / 2) {

            } else {

            }
        },
        updateTransfrom() {

        }
    }
}
</script>

<style>
.smy_picker {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    background-color: rgba(0, 0, 0, .6);
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9900;
    overflow: hidden;
    -webkit-animation-fill-mode: both;
    text-align: center;
}

.smy_picker_container {
    vertical-align: middle;
    background-color: #fff;
    color: #363837;
    height: 220px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.picker_btn_container {
    display: flex;
    display: box;
    box-pack: justify;
    justify-content: space-between;
    background-color: #fbf9fe;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
}

.picker_btn_container .picker_btn {
    color: #ccc;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    padding: 0 8px;
    box-sizing: border-box;
    color: #26bd9e;
}

.smy_picker_area_outer {
    -webkit-mask: -webkit-gradient(linear, 0 40%, 0 0, from(#debb47), to(rgba(36, 142, 36, 0)));
    -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
    box-sizing: border-box;
    height: -webkit-calc(100% - 42px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    text-align: center;
    position: relative;
}

.smy_picker_area_inner {
    width: 100%;
    height: auto;
    background-color: transparent;
    -webkit-mask: -webkit-gradient(linear, 0 50%, 0 100%, from(#debb47), to(rgba(36, 142, 36, 0)));
    -webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0));
    font-size: 18px;
    overflow: hidden;
    position: relative;
    max-height: 100%;
}

.smy_picker_wrap {
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.smy_picker_item {
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #707274;
    width: 100%;
    box-sizing: border-box;
    transition-duration: .3s;
    backface-visibility: hidden;
}
</style>
