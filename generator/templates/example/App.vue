<template>
  <div id="app">
    <component-lib />
  </div>
</template>

<script>
import ComponentLib from './components/ComponentLib.vue'

export default {
  name: 'app',
  components: {
    ComponentLib
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
