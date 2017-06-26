import Vue from 'vue'

const modalConstructor = Vue.extend(require('./baseModal.vue'))

modalConstructor.prototype.close = function () {
  this.show = false
  this.$el.addEventListener('transitionend', function (event) {
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target)
    }
  })
}

let smyModal = (root, options = {}) => {
  root.show = true
  root.title = options.title || '提示'
  root.content = options.content || ''
  root.showCancel = options.showCancel || false
  root.cancelText = options.cancelText || '取消'
  root.cancel - options.cancel || function () {}
  root.confirmText = options.confirmText || '确定'
  root.confirm = options.confirm || function () {}
  root.callback = options.callback || function () {}
  document.body.appendChild(root.$el)

  return root
}

smyModal.confirm = function (options = {}) {
  return smyModal(new modalConstructor({
    el: document.createElement('div')
  }), options)
}

smyModal.alert = (content) => {
  let options = {}
  options.showCancel = false
  options.title = content
  return smyModal(new modalConstructor({
    el: document.createElement('div')
  }), options)
}

export default smyModal
