<template>
    <p :class="textCls" @selectstart="_select">
        <slot></slot>   
    </p>
</template>
<script>
    export default{
        name:"mText",
        props:{
            selectable:{   //	文本是否可选
                type:Boolean,
                default:false
            }
        },
        computed:{
            textCls(){
                return {
                    "m_text":true,
                    "selectable":!this.selectable
                }
            }
        },
        methods: {
            _select(){
                if(!this.selectable){
                    return false;
                }
            }
        }
    }
</script>
<style>
    .m_text{
        display: inline-block;
        text-align: center;
        
    }

    .selectable{
        -webkit-touch-callout: none;  
        -webkit-user-select: none;  
        user-select: none;  
    }
</style>