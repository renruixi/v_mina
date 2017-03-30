<template>
  <label class="m_checkbox_label">
    <div class="m_checkbox_wrap">
      <span :class="innerCls"></span>
      <input type="checkbox"
             :value="value"
             :checked="checked"
             :disabled="disabled"
             class="m_checkbox_input"
             v-model="mChecked"
             @change="_handleChange" />
    </div>
    <span class="m_checkbox_name"
          ref="name"><slot></slot></span>
  </label>
</template>
<script>
import emitter from "../../../../utils/emitter"
export default {
  name: "mCheckbox",
  props: {
    name: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      mChecked: false
    }
  },
  computed: {
    innerCls() {
      return {
        "m_checkbox_inner": true,
        "m_checkbox_checked": this.mChecked,
        "m_checkbox_disabled": this.disabled
      }
    }
  },
  methods: {
    _handleChange(e) {
      var self = this;
      var target = e.target;
      emitter.$emit("mCheckboxChange", {  //向checkbox-group分发change事件
        checked: self.mChecked,
        value: self.value,
        name: self.name
      })

      this.$emit("change", e)  //向上分发原生change事件
    },
  }
}
</script>
<style>
.m_checkbox_label {
  color: #1f2d3d;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
}

.m_checkbox_wrap {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  position: relative;
  line-height: 1;
  vertical-align: middle;
}

.m_checkbox_inner {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 20px;
  background: url(../../../../images/checkbox.png) no-repeat center center;
  background-size: contain;
  vertical-align: middle;
  text-align: center;
}

.m_checkbox_inner.m_checkbox_checked:after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 12px;
  vertical-align: middle;
  background: url(../../../../images/checkbox_checked.png) no-repeat center center;
  background-size: 20px 12px;
}

.m_checkbox_inner.m_checkbox_disabled {
  background: url(../../../../images/checkbox_disabled.png) no-repeat center center;
  background-size: contain;
}

.m_checkbox_name {
  font-size: 14px;
  padding-left: 5px;
  vertical-align: middle;
}

.m_checkbox_input {
  opacity: 0;
  vertical-align: middle;
  outline: none;
  position: absolute;
  margin: 0;
  visibility: hidden;
  left: -999px;
}
</style>
