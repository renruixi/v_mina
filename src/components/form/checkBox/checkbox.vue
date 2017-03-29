<template>
  <label class="v_checkbox_wrap" @change="checkboxChange">
    <input type="checkbox" :value="value" :checked="checked" :disabled="disabled" class="v_checkbox"/>{{value}}
  </label>
</template>
<script>
  export default {
    name: "v-checkbox",
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      name: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      checked: {
        type: Boolean,
        required: true,
        default: false
      },
      color: {
        type: String,
        required: false
      }
    },
    data() {
      return {}
    },
    methods: {
      checkboxChange(e) {
        var self = this;
        var target = e.target;
        this.$emit("vCheckboxChange", {
          checked: target.checked,
          value: target.value
        })
      }
    }
  }
</script>
<style>
  .v_checkbox_wrap {
    display: inline-block;
    vertical-align: middle;
  }

  .v_checkbox {
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
</style>
