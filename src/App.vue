<template>
  <div id="app">
    <v-table
        :currency_data="CURRENCIES" 
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table'

export default {
  name: 'App',
  components: {
    vTable
  },
  computed: {
    ...mapGetters([
      'CURRENCIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CURRENCIES_FROM_API'
    ])
  },
  mounted(){
    this.GET_CURRENCIES_FROM_API()
  }
}
</script>

<style>

</style>
