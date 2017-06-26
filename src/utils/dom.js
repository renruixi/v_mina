const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

const ieVersion = Number(document.documentMode)

const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset
      ? letter.toUpperCase()
      : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export function getAttr (dom, key) {
  if (!dom || !key)
    return null

  key = camelCase(key)
  if (ieVersion < 9) {
    if (key === 'float') {
      key = 'styleFloat'
    }
    try {
      switch (key) {
        case 'opacity':
          try {
            return dom
                .filters
                .item('alpha')
                .opacity / 100
          } catch (e) {
            return 1.0
          }
        default:
          return (dom.style[key] || dom.currentStyle
            ? dom.currentStyle[key]
            : null)
      }
    } catch (e) {
      return dom.style[key]
    }
  } else {
    if (key === 'float') {
      key = 'cssFloat'
    }
    try {
      var computed = document
        .defaultView
        .getComputedStyle(dom, '')
      return dom.style[key] || computed
        ? computed[key]
        : null
    } catch (e) {
      return dom.style[key]
    }
  }
}

export function setAttr (dom, key, value) {
  if (!dom || !key)
    return null

  if (typeof key === 'object') {
    for (let attr in key) {
      if (key.hasOwnProperty(attr)) {
        setAttr(dom, key, value)
      }
    }
  } else {
    key = camelCase(key)
    if (key === 'opacity' && ieVersion < 9) {
      dom.style.filter = isNaN(value)
        ? ''
        : 'alpha(opacity=' + value * 100 + ')'
    } else {
      dom.style[key] = value
    }
  }
}

export function getTranslate (element) {
  var result = {
    left: 0,
    top: 0
  }
  if (element === null || element.style === null)
    return result

  var transform = element.style['transform']
  var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)/ig.exec(transform)
  if (matches) {
    result.left = +matches[1]
    result.top = +matches[3]
  }

  return result
}

export function requestAnimationFrame () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||

    function (callback, element) {
      var start,
        finish

      window.setTimeout(function () {
        start = +new Date()
        callback(start)
        finish = +new Date()

        self.timeout = 1000 / 60 - (finish - start)
      }, self.timeout)
  }
}

export function cancelAnimationFrame () {
  return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}
