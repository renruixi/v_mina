<template>
  <section class="v_checbox_group">
    <slot></slot>
  </section>
</template>
<script>
  export default {
    name: "v-checkbox-group",
    props: {
      vBindchange: {
        type: Function,
        required: false
      }
    },
    data() {
      return {
        checkedArray: [],
        offsetTop: 0,
        offsetLeft: 0,
        event: {}
      }
    },
    mounted() {
      let self = this;
      let root = self.$el;
      let checkboxObject = root.querySelectorAll(".v_checkbox")
      for (let i = 0; i < checkboxObject.length; i++) {
        if (checkboxObject[i].checked) {
          self.checkedArray.push(checkboxObject[i].value)
        }
      }

      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].$on("vCheckboxChange", function (e) {
          if (e.checked) {
            self.checkedArray.push(e.value)
          } else {
            let removeIndex = self.checkedArray.indexOf(e.value)
            self.checkedArray.splice(removeIndex, 1);
          }
          self.vBindchange(self.checkedArray)
        })
      }


    }
  }
</script>
<style>
  .v_checkbox_wrap {
    display: inline-block;
  }

  .v_checkbox {
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
</style>
