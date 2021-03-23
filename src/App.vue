<template>
  <div id="app">
    <VCenProduct :config="config"/>
  </div>
</template>

<script>
import VCenProduct from './components/VCenProduct.vue'

export default {
  name: 'App',
  components: {
    VCenProduct
  },
  data() {
    return {
      config: {
        uri: 'http://localhost:8080/v1/graphql'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
