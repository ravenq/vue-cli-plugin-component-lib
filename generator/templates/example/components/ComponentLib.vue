<template>
  <div>
    <div>The example of your vue component</div>
    <<%= libNameKebabCase %> />
  </div>
</template>

<script>
import <%= libNameCamelCase %> from '../../src'
export default {
  components: {
    <%= libNameCamelCase %>
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
