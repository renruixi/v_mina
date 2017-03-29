<template>
    <div class="smy-slider">
        <div class="smy-slider-section" 
            @mouseup="handleSliderClick" 
            ref="slider"
            :style="{
                backgroundColor:color
            }">
            <div class="smy-slider-area"
                :style = "{
                    width:newValue+'%',
                    backgroundColor:selectedColor
                }"
            ></div>
            <div class="smy-slider-step" v-for="items in stepArray" :style="{'left':items+'%'}" v-if="showStep"></div>
            <div class="smy-slider-button"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                @mousedown="handleMouseDown"
                :style="{
                    left:newValue+'%'
                }"
            ></div>
        </div>
    </div>
</template>
<script>
    import {
        getStyle
    } from '../../../utils/commonUtil'
    export default {
        name: "SmySlider",
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Number
            },
            color: {
                type: String
            },
            selectedColor: {
                type: String
            },
            showValue: {
                type: Boolean,
                default: false
            },
            showStep: {
                type: Boolean,
                default: false
            },
            onChange: {
                type: Function
            }
        },
        data() {
            return {
                newValue: this.value,
                oldValue: 0,
                dragging: false,
                entering: false,
                oldPos: 0,
                newPos: 0,
                sliderWidth: null
            }
        },
        computed: {
            stepArray() {
                let ret = [];
                let stepCount = (this.max - this.min) / this.step;
                let stepWidth = this.step * 100 / (this.max - this.min);
                for (let i = 1; i < stepCount; i++) {
                    ret.push(i * stepWidth)
                }
                return ret;
            }
        },
        mounted() {
            this.sliderWidth = parseInt(getStyle(this.$refs["slider"], "width")).toFixed(1);
            this.oldPos = this.sliderWidth * this.newValue / 100;
        },
        methods: {
            handleSliderClick(e) {
                this.setPos(e)
            },
            handleMouseEnter(e) {
                this.entering = true;
                //this.showTips();
            },
            handleMouseLeave(e) {
                this.entering = false;
                //this.hideTips();
            },
            handleMouseDown(e) {
                if (this.disabled) {
                    return;
                }
                this.onSliderStart(e);
                document.addEventListener('mousemove', this.onSlidering);
                document.addEventListener('mouseup', this.onSliderEnd);
            },
            onSliderStart(e) {
                this.dragging = true;
            },
            onSlidering(e) {
                if (!this.dragging) {
                    return;
                }
                //this.showTips();
                this.setPos(e)
            },
            onSliderEnd(e) {
                this.dragging = false;
                this.setPos(e);
                document.removeEventListener('mousemove', this.onSlidering);
                document.removeEventListener('mouseup', this.onSliderEnd);
            },
            getRealDis(per) {
                return parseFloat(per * this.sliderWidth / 100).toFixed(1)
            },
            getRealValue(dis) {
                return Math.round(dis / this.sliderWidth * 100);
            },
            setPos(e) {
                let realPos = parseFloat(e.clientX - this.$refs["slider"].getBoundingClientRect().left).toFixed(1);
                let diff = parseInt((realPos - this.oldPos) / this.getRealDis(this.step));
                if (Math.abs(diff) >= 1) {
                    this.newPos = parseFloat(this.oldPos) + parseFloat(diff * this.getRealDis(this.step));

                    if (this.newPos >= this.sliderWidth) {
                        this.newValue = 100;
                        this.newPos = this.oldPos = this.sliderWidth;
                    } else if (this.newPos <= 0) {
                        this.newValue = 0;
                        this.newPos = this.oldPos = 0;
                    } else {
                        this.newValue = parseInt(this.newValue) + Math.round(diff) * this.step;
                        this.oldPos = this.newPos;
                    }

                    this.onChange && this.onChange({
                        value: this.newValue
                    });
                }
            },
            setVal() {},

        }
    }
</script>
<style>
    .smy-slider {
        margin: 10px 18px;
    }
    
    .smy-slider-section {
        width: 50%;
        position: relative;
        height: 4px;
        border-radius: 4px;
        background-color: #e9e9e9;
        cursor: pointer;
        -webkit-transition: background-color .3s ease;
        transition: background-color .3s ease;
        vertical-align: middle;
        box-sizing: border-box;
    }
    
    .smy-slider-area {
        position: absolute;
        left: 0;
        height: 4px;
        border-radius: 4px;
        background-color: #9fd2f6;
        z-index: 1;
        -webkit-transition: background-color .3s ease;
        transition: background-color .3s ease;
    }
    
    .smy-slider-button {
        position: absolute;
        margin-left: -7px;
        margin-top: -5px;
        width: 14px;
        height: 14px;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid #88c7f4;
        background-color: #fff;
        z-index: 2;
        -webkit-transition: border-color .3s ease, -webkit-transform .3s cubic-bezier(.18, .89, .32, 1.28);
        transition: border-color .3s ease, -webkit-transform .3s cubic-bezier(.18, .89, .32, 1.28);
        transition: border-color .3s ease, transform .3s cubic-bezier(.18, .89, .32, 1.28);
        transition: border-color .3s ease, transform .3s cubic-bezier(.18, .89, .32, 1.28), -webkit-transform .3s cubic-bezier(.18, .89, .32, 1.28);
        box-sizing: border-box;
    }
    
    .smy-slider-step {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #bfcbd9;
        transform: translateX(-50%);
    }
</style>