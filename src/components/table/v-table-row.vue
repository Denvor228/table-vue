<template>
  <div class="v-table-row">
      <div class="row row__update">{{row_data.last_update_at}}</div>
      <div class="row row__code">{{row_data.code}}</div>
      <div class="row row__name">{{row_data.name}}</div>
      <!-- <div class="row row__deposit">{{}}</div> -->
      <div class="row row__deposit">
          <p v-if = "row_data.deposit_enabled === 1">Yes</p>
          <p v-else>No</p>
      </div>
      <div class="row row__withdrawal">
          <p v-if = "row_data.withdrawal_enabled === 1">Yes</p>
          <p v-else>No</p>
      </div>
      <div class="row row__trading">
          <p v-if = "row_data.trading_enabled === 1">Yes</p>
          <p v-else>No</p>
      </div>
  </div>
</template>

<script>


export default {
  name: 'v-table-row',
  props: {
    row_data: {
          type: Object,
          default: () => {
              return {}
          }
      }
  },
  computed: {
      
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-table-row {
    display: flex;
    justify-content: space-around;
}

.row {
    flex-basis: 12%;
    padding: 10px 20px;
    text-align: left;
    align-items: center;
}

</style>