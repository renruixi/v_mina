<template>
    <label :for="value" class="smy-radio">
        <span 
            :class="['smy-radio-input',{
                'smy-radio-checked':checked,
                'disabled':disabled
                }
            ]">
            <span class="smy-radio-icon"></span>
            <input
                class="smy-radio-input-inner" 
                type="radio" 
                :value="value"
                v-model="model"
                :disabled="disabled">
        </span>
        <span class="smy-radio-label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: "SmyRadio",
        props: {
            value: {
                type: [Number, String]
            },
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            model: {
                set(val) {
                    this.$emit("radioEvt", val)
                },
                get() {
                    return this.value;
                }
            }
        }

    }
</script>
<style>
    .smy-radio-input {
        white-space: nowrap;
        outline: none;
        display: inline-block;
        position: relative;
        line-height: 1;
        vertical-align: middle;
        cursor: pointer;
    }
    
    .smy-radio-icon {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-width: 1px;
        border-style: solid;
        border-radius: 14px;
        border-color: #d9d9d9;
        background-color: #fff;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    
    .smy-radio-icon:after {
        position: absolute;
        width: 6px;
        height: 6px;
        left: 3px;
        top: 3px;
        border-radius: 4px;
        display: table;
        border-top: 0;
        border-left: 0;
        content: ' ';
        background-color: #108ee9;
        opacity: 0;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
    
    .smy-radio-checked .smy-radio-icon:after {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
    
    .smy-radio-input-inner {
        position: absolute;
        left: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    
    .smy-radio-label {
        font-size: 14px;
        padding-left: 4px;
        padding-right: 4px;
    }
</style>