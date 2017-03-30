<template>
  <div :class="viewCls"
       @mousedown="_hoverIn"
       @touchstart="_hoverIn"
       @mouseup="_hoverLeave"
       @touchend="_hoverLeave">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "m-view",
  props: {
    "hover": {
      type: Boolean,
      required: false,
      default: false
    },
    "hover-class": {
      type: String,
      required: false,
      default: "none"
    },
    "hover-start-time": {
      type: Number,
      required: false,
      default: 50
    },
    "hover-stay-time": {
      type: Number,
      required: false,
      default: 100
    }
  },
  data() {
    return {
      hoverInTimer: null,
      hoverLeaveTimer: null,
      "isHovered": false,
    }
  },
  computed: {
    viewCls() {
      return "m_view " + (this.isHovered ? this.hoverClass : "")
    }
  },
  methods: {
    _hoverIn(event) {
      //未开启点击态 或者未指定点击态样式
      if (!this.hover || this.hoverClass == "none") return;

      clearTimeout(this.hoverLeaveTimer)
      var self = this;
      self.hoverInTimer = setTimeout(function () {
        self.isHovered = true;
      }, self.hoverStartTime)
    },
    _hoverLeave(event) {
      //未开启点击态 或者未指定点击态样式
      if (!this.hover || this.hoverClass == "none") return;
      clearTimeout(this.hoverInTimer)
      var self = this;
      self.hoverLeaveTimer = setTimeout(function () {
        self.isHovered = false;
      }, self.hoverStayTime)
    }
  },
}
</script>
<style>
.m_view {
  display: block;
}

.flex_wrp {
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
}

.h_middle {
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-pack: center;
  box-pack: center;
}

.v_middle {
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align -items: center;
}

.flex_item {
  width: 100px;
  height: 100px;
  color: #FFFFFF;
  -webkit-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
</style>
