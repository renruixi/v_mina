<template>
  <section class="m_checkbox_group">
    <slot></slot>
  </section>
</template>
<script>
import emitter from "../../../../utils/emitter"
export default {
  name: "mCheckboxGroup",
  data() {
    return {
      checkList: {
        checked: [],
        unchecked: []
      }
    }
  },
  created() {
    let self = this;
    emitter.$on("mCheckboxChange", function (event) {
      self._checkBoxGroupChange(event)
    })
  },
  mounted() {
    let self = this;
    self.$children.forEach(function (item, index) {
      if (item.checked) {
        self.checkList.checked.push(item.value)
      } else {
        self.checkList.unchecked.push(item.value)
      }
    })
  },
  methods: {
    _checkBoxGroupChange(event) {
      let checkedIndex = this.checkList.checked.indexOf(event.value);
      let uncheckedIndex = this.checkList.unchecked.indexOf(event.value);

      switch (event.checked) {
        case true:
          if (checkedIndex == -1) { //初始选择
            this.checkList.checked = this.checkList.checked.concat(this.checkList.unchecked.splice(uncheckedIndex, 1))
          }
          break;
        case false:
          if (uncheckedIndex == -1) {
            this.checkList.unchecked = this.checkList.unchecked.concat(this.checkList.checked.splice(checkedIndex, 1))
          }
      }
      emitter.$emit("mCheckboxGroupChange", this.checkList)
    }
  }
}
</script>
<style>
.m_checkbox_wrap {
  display: inline-block;
}

.m_checkbox {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
