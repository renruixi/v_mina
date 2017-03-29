<template>
    <div class="smy-select">
        <Smy-input
            ref="select" 
            type="text"
            class="smy-select-inner"
            :disabled="disabled"
            :name="name"
            :placeholder="placeholder"
        >
        </smy-input>
        <i class="smy-select-icon"></i>
    </div>
</template>
<script>
    import SmyInput from "../input/input"
    export default {
        name: "SmySelect",
        components: {
            SmyInput
        },
        props: {
            name: {
                type: String
            },
            placeholder: {
                type: String,
            },
            value: {
                type: [String, Number]
            },
            disabled: {
                required: false,
                type: Boolean,
                default: false
            },
        }
    }
</script>
<style>

</style>