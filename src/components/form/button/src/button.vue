<template>
    <button :class="[buttonCls,typeCls,sizeCls]" @mousedown="_hoverIn"  @mouseup="_hoverLeave" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name:"mButton",
        props:{
            size:{
                type:String,
                default:"default"
            },
            type:{
                type:String,
                default:"default",
            },
            plain:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            loading:{
                type:Boolean,
                default:false
            },
            "hover-class":{
                type:String,
                default:"button-hover"
            },
            "hover-start-time":{
                type:Number,
                default:20
            },
            "hover-stay-time":{
                type:Number,
                default:70
            }
        },
        data(){
            return {
                isHovered:false,
                hoverLeaveTimer:null,
                hoverLeaveTimer:null,
                sizeCls(){
                    return "m_button_"+this.size
                },
                typeCls(){
                    return "m_button_"+this.type
                }
            }
        },
        computed:{
            buttonCls(){
                return {
                    "m_button":true,
                    "button-hover":this.isHovered,
                    "m_button_disabled":this.disabled
                }
            }
        },
        methods:{
            _hoverIn(){
                clearTimeout(this.hoverLeaveTimer)
                var self = this;
                self.hoverInTimer = setTimeout(function () {
                    self.isHovered = true;
                }, self.hoverStartTime)
            },
            _hoverLeave(){
                clearTimeout(this.hoverInTimer)
                var self = this;
                self.hoverLeaveTimer = setTimeout(function () {
                    self.isHovered = false;
                }, self.hoverStayTime)
            }
        }
    }
</script>
<style>
    
</style>