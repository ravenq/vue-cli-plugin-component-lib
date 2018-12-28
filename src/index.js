import MyComponent from './my-component'

const install = function (Vue) {
  Vue.component(MyComponent.name, MyComponent)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

MyComponent.install = install
export default MyComponent
