<template>
  <div class="v-table">
    <div class="top">
      <v-table-search></v-table-search> 
      <div class="dropdown-checkbox form-group">
  <label class="label-title">Dropdown</label>
  <ul>
    <li><label><input type="checkbox" v-model="selected1" name="type[]">A</label></li>
    <li><label><input type="checkbox" v-model="selected2" name="type[]">B</label></li>
    <li><label><input type="checkbox" v-model="selected3" name="type[]">C</label></li>
    <li><label><input type="checkbox" v-model="selected4" name="type[]">D</label></li>
    <li><label><input type="checkbox" v-model="selected5" name="type[]">E</label></li>
    <li><label><input type="checkbox" v-model="selected6" name="type[]">F</label></li>
  </ul>
</div>
    </div>
    <div class="v-table__header">
      <p class="header_text" v-if="selected1">Last update at</p>
      <p class="header_text" v-if="selected2" @click="sortByCode">Code</p>
      <p class="header_text" v-if="selected3" @click="sortByName">Name</p>
      <p class="header_text" v-if="selected4" @click="sortByDeposit">Deposit enabled</p>
      <p class="header_text" v-if="selected5" @click="sortByWithdrawal">Withdrawal enabled</p>
      <p class="header_text" v-if="selected6" @click="sortByTrading">Trading enabled</p>
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
      pageNumber: 1,
      selected1: true,
      selected2: true,
      selected3: true,
      selected4: true,
      selected5: true,
      selected6: true,
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
    }
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
    sortProductsBySearchValue(searchValue){
      if (searchValue) {
        this.users_data = this.users_data.filter(function(item){
        return item.code.toLowerCase().includes(searchValue.toLowerCase())
      }) 
      } else {
        return this.users_data;
      }
    },
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
.dropdown-checkbox{
  position:relative;
  display:inline-block
}

.dropdown-checkbox .label-title{
  font-size:13px;
  
}
.dropdown-checkbox ul{
     position: absolute;
    background: #cacaca;
    list-style: none;
    min-width: 180px;
    margin: 0px;
    padding:0px;
    left:0px;
    display:none;
    z-index:1;
    border: 1px solid #9c9c9c;
}
.dropdown-checkbox ul li{
    font-size: 15px;
    padding: 10px;
    border-bottom: 1px solid #a5a5a5;
    margin: 0px;
}
.dropdown-checkbox ul li input{
  margin-right:10px;
}

.dropdown-checkbox:hover ul{
  display:block
}
  .top {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }
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
