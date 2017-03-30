<template>
  <div id="app">
    <m-button type="default" :plain="true" >123</m-button>
  </div>
</template>

<script>
import mButton from './components/form/button'
import mView from './components/layout/view'
export default {
  name: 'app',
  data() {
    return {
      radio: "100",
      show: true
    }
  },
  components: {
    mButton
  },
  mounted() {

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
