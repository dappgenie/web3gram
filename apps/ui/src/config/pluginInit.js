import Scrollbar from 'smooth-scrollbar'
import Snackbar from 'node-snackbar'

const $ = require('jquery')

if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('bootstrap/js/src/tab')
}

export const socialvue = {
  index () {
    this.loaderInit()
    this.SmoothScrollbar()
  },
  loaderInit () {
    const load = document.getElementById('loading')
    animation.fadeOut(load, { duration: 0 })
    animation.fadeOut(load, { duration: 1400 })
    setTimeout(() => {
      load.classList.add('d-none')
    }, 2000)
  },
  loaderReInit () {
    const load = document.getElementById('loading')
    animation.fadeIn(load, { duration: 0 })
    load.classList.remove('d-none')
    this.loaderInit()
  },
  checkClass (ele, type, className) {
    switch (type) {
      case 'addClass':
        if (!ele.hasClass(className)) {
          ele.addClass(className)
        }
        break
      case 'removeClass':
        if (ele.hasClass(className)) {
          ele.removeClass(className)
        }
        break
      case 'toggleClass':
        ele.toggleClass(className)
        break
    }
  },
  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)
        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }
    return found
  },

  SmoothScrollbar () {
    const elementExistMain = this.checkElement('id', 'sidebar-scrollbar')
    if (elementExistMain) {
      Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
    }
    const elementExistRight = this.checkElement('id', 'right-sidebar-scrollbar')
    if (elementExistRight) {
      Scrollbar.init(document.querySelector('#right-sidebar-scrollbar'))
    }
  },

  showSnackbar (type, data = {}) {
    if (type !== null) {
      switch (type) {
        case 'success':
          Snackbar.show({ text: data, backgroundColor: '#323232' })
          break
        case 'error':
          Snackbar.show({ text: data, backgroundColor: '#b21f2d', actionTextColor: '#ffffff' })
          break
      }
    } else {
      Snackbar.show(data)
    }
  },
  Snackbar (data) {
    Snackbar.show(data)
  }
}

export const animation = {
  easing: {
    linear: function (progress) {
      return progress
    },
    quadratic: function (progress) {
      return Math.pow(progress, 2)
    },
    swing: function (progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2
    },
    circ: function (progress) {
      return 1 - Math.sin(Math.acos(progress))
    },
    back: function (progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x)
    },
    bounce: function (progress) {
      // eslint-disable-next-line no-unused-vars
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    elastic: function (progress, x) {
      return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    }
  },
  animate: function (options) {
    const start = new Date()
    const id = setInterval(function () {
      const timePassed = new Date() - start
      let progress = timePassed / options.duration
      if (progress > 1) {
        progress = 1
      }
      options.progress = progress
      const delta = options.delta(progress)
      options.step(delta)
      if (progress === 1) {
        clearInterval(id)
      }
    }, options.delay || 10)
  },
  fadeOut: function (element, options) {
    const to = 1
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
        element.style.opacity = to - delta
      }
    })
  },
  fadeIn: function (element, options) {
    const to = 0
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress
        return animation.easing.swing(progress)
      },
      step: function (delta) {
        element.style.opacity = to + delta
      }
    })
  }
}

export const flatpickerSetting = {
  wrap: true,
  altFormat: 'j M Y',
  altInput: true,
  dateFormat: 'Y-m-d'
}
