<template>
    <button 
    :class="['smy-button', btnClass]"
    @click="handleClick"
    :disabled="disabled"
    :type="orgType"
    >
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: "SmyButton",
        props: {
            orgType: {
                type: String,
                default: "button"
            },
            type: {
                type: String,
                default: "default"
            },
            size: {
                type: String
            },
            disabled: {
                type: Boolean
            },
            loading: {
                type: Boolean
            },
            hoverClass: {
                type: String,
                default: "button-hover"
            },
            plain: {
                type: Boolean
            }
        },
        computed: {
            btnClass() {
                var ret = [];
                ["type", "disabled", "plain", "loading"].forEach(prop => {
                        if (this[prop]) {
                            if (typeof this[prop] === "boolean") {
                                ret.push(`${prop}`)
                            } else {
                                ret.push(`smy-button-${this[prop]}`)
                            }
                        }
                    })
                    //size
                if (this["size"]) {
                    ret.push(`${this["size"]}`)
                }
                return ret;
            }
        },
        methods: {
            handleClick(e) {
                this.$emit("buttonEvt", e)
            }
        }
    }
</script>
<style>
    button {
        display: inline-block;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        border: none;
        outline: none;
    }
    
    .smy-button {
        padding: 10px 15px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        background: #fff;
        line-height: 1
    }
    
    .smy-button.large {
        padding: 11px 19px;
        font-size: 16px;
        border-radius: 4px;
    }
    
    .smy-button.small {
        padding: 7px 9px;
        font-size: 12px;
        border-radius: 4px;
    }
    
    .smy-button.mini {
        padding: 4px;
        font-size: 12px;
        border-radius: 4px;
    }
    
    .smy-button.disabled.plain:hover {
        background-color: #fff;
        border-color: #d1dbe5;
        color: #bfcbd9;
    }
    
    .smy-button.disabled,
    .smy-button.disabled:hover {
        color: #bfcbd9;
        cursor: not-allowed;
        background-image: none;
        background-color: #eef1f6;
        border-color: #d1dbe5;
    }
    
    .smy-button.plain.disabled {
        background-color: #fff;
        border-color: #d1dbe5;
        color: #bfcbd9;
    }
    
    .smy-button:hover {
        color: #20a0ff;
        border-color: #20a0ff;
    }
    
    .smy-button-primary {
        color: #fff;
        background-color: #20a0ff;
        border-color: #20a0ff;
    }
    
    .smy-button-primary.plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
    }
    
    .smy-button-primary.plain:hover {
        background: #fff;
        border-color: #20a0ff;
        color: #20a0ff
    }
    
    .smy-button-primary:hover {
        background: #4db3ff;
        border-color: #4db3ff;
        color: #fff
    }
    
    .smy-button-success {
        color: #fff;
        background-color: #13ce66;
        border-color: #13ce66;
    }
    
    .smy-button-success.plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
    }
    
    .smy-button-success.plain:hover {
        background: #fff;
        border-color: #13ce66;
        color: #13ce66
    }
    
    .smy-button-success:hover {
        background: #42d885;
        border-color: #42d885;
        color: #fff
    }
    
    .smy-button-warning {
        color: #fff;
        background-color: #f7ba2a;
        border-color: #f7ba2a;
    }
    
    .smy-button-warning.plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
    }
    
    .smy-button-warning.plain:hover {
        background: #fff;
        border-color: #f7ba2a;
        color: #f7ba2a
    }
    
    .smy-button-warning:hover {
        background: #f9c855;
        border-color: #f9c855;
        color: #fff
    }
    
    .smy-button-danger {
        color: #fff;
        background-color: #ff4949;
        border-color: #ff4949;
    }
    
    .smy-button-danger.plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
    }
    
    .smy-button-danger.plain:hover {
        background: #fff;
        border-color: #ff4949;
        color: #ff4949
    }
    
    .smy-button-danger:hover {
        background: #ff6d6d;
        border-color: #ff6d6d;
        color: #fff
    }
    
    .smy-button-info {
        color: #fff;
        background-color: #50bfff;
        border-color: #50bfff;
    }
    
    .smy-button-info.plain {
        background: #fff;
        border: 1px solid #bfcbd9;
        color: #1f2d3d;
    }
    
    .smy-button-info.plain:hover {
        background: #fff;
        border-color: #50bfff;
        color: #50bfff
    }
    
    .smy-button-info:hover {
        background: #73ccff;
        border-color: #73ccff;
        color: #fff
    }
    
    .smy-button-text {
        border: none;
        color: #20a0ff;
        background: transparent;
        padding-left: 0;
        padding-right: 0;
    }
    
    .smy-button-text:hover {
        color: #4db3ff
    }
</style>