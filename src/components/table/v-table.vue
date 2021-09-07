<template>
  <div class="v-table">
    <v-table-search></v-table-search> 
    <div class="v-table__header">
      <p class="header_text">Last update at</p>
      <p class="header_text" @click="sortByCode">Code</p>
      <p class="header_text" @click="sortByName">Name</p>
      <p class="header_text" @click="sortByDeposit">Deposit enabled</p>
      <p class="header_text" @click="sortByWithdrawal">Withdrawal enabled</p>
      <p class="header_text" @click="sortByTrading">Trading enabled</p>
    </div>
    <div class="v-table__body"></div>
    <v-table-row 
      v-for="row in paginatedUsers"
      :key="row.name"
      :row_data="row"
    />
    <div class="v-table__pagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page_selected': page === pageNumber}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>
  </div>
  
</template>

<script>
import vTableRow from './v-table-row'
import vTableSearch from './v-table-search'
import {mapGetters} from 'vuex'

export default {
  name: 'v-table',
  components: {
    vTableRow,
    vTableSearch
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data() {
    return {
      usersPerPage: 40,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters([
          'SEARCH_VALUE'
      ]),
    pages() {
      return Math.ceil(this.users_data.length/40)
    },
    paginatedUsers() {
      let from = (this.pageNumber -1)*this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    },
    //  filteredList() {
    //   return this.users_data.filter((post) => {
    //     return post.name.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // },
  },

  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.users_data.sort((a,b) => a.name.localeCompare(b.name))
    },
    sortByCode() {
      this.users_data.sort((a,b) => a.code.localeCompare(b.code))
    },
    sortByDeposit() {
      this.users_data.sort((a,b) => a.deposit_enabled - b.deposit_enabled)
    },
    sortByTrading() {
      this.users_data.sort((a,b) => a.trading_enabled - b.trading_enabled)
    },
    sortByWithdrawal() {
      this.users_data.sort((a,b) => a.withdrawal_enabled - b.withdrawal_enabled)
    },
    sortProductsBySearchValue(){
      if (value) {
        this.users_data = this.users_data.filter(function(item){
        return item.name.toLowerCase().includes(value.toLowerCase())
      }) 
      } else {
        this.users_data;
      }
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .v-table {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .v-table__header {
    display: flex;
    justify-content: space-around;
    border: solid 1px black;
  }

  .header_text {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }

  .page {
    border: solid 1px black;
    padding: 8px;
    margin-right: 10px;
  }

  .page:hover {
    background: rgb(66, 62, 60);
    cursor: pointer;
    color: white;
  }

  .page_selected {
    background: rgb(66, 62, 60);
    color: white;
  }
</style>
