<template>
  <div class="v-table-show">
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
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-table-show',
  props: {},
  data() {
      return {
          selected1: true,
          selected2: true,
          selected3: true,
          selected4: true,
          selected5: true,
          selected6: true,
      }
  }, 
//   computed: {
//       ...mapGetters([
//           'SEARCH_VALUE'
//       ])
//   },
//   methods: {
//       ...mapActions([
//           'GET_SEARCH_VALUE_TO_VUEX'
//       ]),
//       search() {
//           this.GET_SEARCH_VALUE_TO_VUEX(this.searchValue);
//       }
//   }
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

</style>