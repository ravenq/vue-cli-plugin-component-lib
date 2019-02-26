import <%= libNameCamelCase %> from './<%= options.libName %>'

const install = function (Vue) {
  Vue.component(<%= libNameCamelCase %>.name, <%= libNameCamelCase %>)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

<%= libNameCamelCase %>.install = install
export default <%= libNameCamelCase %>
