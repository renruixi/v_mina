<template>
  <div id="app">
    <m-slider value="123" :maxlength="10" :minlength="8"></m-slider>
  </div>
</template>

<script>
import mSlider from './components/form/slider'

export default {
  name: 'app',
  data() {
    return {
      radio: "100",
    }
  },
  components: {
    mSlider
  },
  methods: {
    groupChange(event) {
      console.log(event.unchecked)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  line-height: normal;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

*:before,
*:after {
  box-sizing: border-box;
}

#app {}

.grid-content {
  background: #ccc;
  height: 80px;
  width: 200px;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 20px;
}
</style>
