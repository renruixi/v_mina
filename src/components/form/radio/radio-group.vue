<template>
    <div class="smy-radio-group">
        <slot></slot>
    </div>
</template>
<script>
    import SmyRadio from "./radio"
    export default {
        name: "SmyRadioGroup",
        component: {
            SmyRadio
        },
        props: {
            value:
        },
        watch: {
            value(value) {
                this.$emit("change")
            }
        }
    }
</script>
<style>
    .smy-radio-group {}
</style>