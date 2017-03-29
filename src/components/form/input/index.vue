<template>
    <div class="smy-input">
        <template v-if="type !== 'textarea'">
            <div class="smy-input-addon-before">
                <slot name="addon-before"></slot>
            </div>
            <input
            class="smy-input-inner"
                :class="{
                    disabled:disabled
                }"
                :type="type" 
                :name="name" 
                :value="newValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :minlength="minlength"
                :focus="focus"
                :readonly="readonly"
                :validReg="validReg"
                ref="input"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @keyup="handleKeyup"
                @keydown="handleKeydown"
            >
            <div class="smy-input-addon-after">
                <slot name="addon-after"></slot>
            </div>
        </template>
<textarea v-else class="smy-textarea-inner" :class="{   disabled:disabled}" :value="newValue" :name="name" id="" cols="30" rows="10" :disabled="disabled" :placeholder="placeholder" :maxlength="maxlength" :minlength="minlength" :readonly="readonly" :focus="focus"
    :row="row" :cols="cols" ref="textarea" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keyup="handleKeyup" @keydown="handleKeydown">
            </textarea>
</div>
</template>
<script>
    export default {
        name: "SmyInput",
        props: {
            type: {
                type: String,
                default: "text"
            },
            value: {
                type: [String, Number]
            },
            name: {
                type: String,
            },
            maxlength: {
                required: false,
                type: Number
            },
            minlength: {
                required: false,
                type: Number
            },
            placeholder: {
                required: false,
                type: String
            },
            disabled: {
                required: false,
                type: Boolean,
                default: false
            },
            focus: {
                required: false,
                type: Boolean,
                default: false
            },
            row: {
                type: Number
            },
            cols: {
                type: Number
            },
            readonly: {
                type: Boolean
            },
            validReg: {
                required: false,
                type: RegExp,
            },
            autosize: {
                type: [Boolean, Object],
                default: false
            }
        },
        data() {
            return {
                oldValue: this.value,
                newValue: this.value
            }
        },
        watch: {
            newValue(val) {
                this.setValue(val)
            }
        },
        mounted() {
            this.textareaResize();
        },
        methods: {
            textareaResize() {
                if (this.type != "textarea") {
                    return;
                }
            },
            handleBlur(e) {
                this.$emit("blur", e)
            },
            handleFocus(e) {
                this.$emit("focus", e)
            },
            handleInput(e) {
                this.setValue(e.target.value)
            },
            setValue(value) {
                if (value == this.newValue) {
                    return;
                }
                this.newValue = value;
                this.$emit("input", value)
            },
            handleKeydown(e) {
                this.$emit("keydown", {
                    value: e.target.value,
                    key: e.key
                })
            },
            handleKeyup(e) {
                this.$emit("keyup", {
                    value: e.target.value,
                    key: e.key
                })
            }
        }
    }
</script>
<style>
    .smy-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    }
    
    .smy-input-inner {
        position: relative;
        display: inline-block;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: none;
        padding: 3px 10px;
        -webkit-transition: all .3s;
        transition: all .3s;
        width: 100%;
        -webkit-appearance: none;
    }
    
    .smy-input-inner.disabled,
    .smy-textarea-inner.disabled {
        background-color: #eef1f6;
        border-color: #d1dbe5;
        color: #bbb;
        cursor: not-allowed;
    }
    
    .smy-input-inner::-webkit-input-placeholder {
        color: #97a8be;
    }
    
    .smy-textarea-inner {
        position: relative;
        display: inline-block;
        padding: 4px 7px;
        width: 100%;
        height: 28px;
        cursor: text;
        font-size: 14px;
        line-height: 1.5;
        color: rgba(0, 0, 0, .65);
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        -webkit-transition: all .3s;
        transition: all .3s;
    }
</style>