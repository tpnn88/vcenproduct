<template>
  <div class="v-cen-product">
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.address }}</li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Hasura from "../../plugins/hasura.js";
import Hasura from "../../libs/hasura.js";
// Vue.use(Hasura, {})

export default {
  name: 'VCenProduct',
  props: {
    config: {
      type: Object,
      default() {
        return {
          uri: 'http://localhost:8080/v1/graphql'
        }
      }
    }
  },
  data() {
    return {
        items: []
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      const vm = this
      this.hasuraInstance = new Hasura({
        uri: this.config.uri
      })
      this.hasuraInstance.query(
          `
          query MyQuery {
              about_cenhomes {
                address
              }
            }
          `
      ).then((res) => {
        console.log(res.data['about_cenhomes'])
        vm.items = res.data['about_cenhomes']
      })
    }
  }
}
</script>

<style scoped>

</style>
