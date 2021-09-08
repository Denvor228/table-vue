<template>
  <div class="v-table-search">
      <div class="search-wrapper">
      <input 
         type="text" 
         v-model="searchValue" 
         placeholder="Search title.."/>
        <label>Search title:</label>
        <button class="search_btn" @click="search(searchValue)"></button>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-table-search',
  props: {},
  data() {
      return {
          searchValue: ''
      }
  }, 
  computed: {
      ...mapGetters([
          'SEARCH_VALUE'
      ])
  },
  methods: {
      ...mapActions([
          'GET_SEARCH_VALUE_TO_VUEX'
      ]),
      search() {
          this.GET_SEARCH_VALUE_TO_VUEX(this.searchValue);
      }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-wrapper {
    position: relative;
    margin-bottom: 30px;
 }
  label {
      position: absolute;
      font-size: 12px;
      color: rgba(0,0,0,.50);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: .15s all ease-in-out;
    }
    input {
      padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 1px solid rgba(0,0,0,.12);
      transition: .15s all ease-in-out;
      background: white;
    }
    input:focus {
        outline: none;
        transform: scale(1.05);
    }
    input + label  {
          font-size: 10px;
          transform: translateY(-24px) translateX(-12px);
        }
    input::-webkit-input-placeholder {
          font-size: 12px;
          color: rgba(0,0,0,.50);
          font-weight: 100;
      }

    .search_btn {
        width: 100px;
        height: 20px;
    }

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