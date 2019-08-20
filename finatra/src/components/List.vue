<template>
  <div class="tablecontainer">
    <div class="table">
      <div class="row first">
        <p @click="changeFilter('amount')">Amount</p>
        <p @click="changeFilter('timestamp')">Date</p>
        <p @click="changeFilter('category')">Category</p>
      </div>
      <div class="row" v-for="(item,index) in dataList" :key="index + 1">
        <p>
          <span>{{$store.getters.getCurrency === "dollar" ? "$": "€"}}</span>
          {{item.amount}}
        </p>
        <p>{{returnProperDate(item.timestamp)}}</p>
        <p>{{item.category}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    dataList: Array,
    returnProperDate: Function,
    changeFilter: Function
  }
};
</script>

<style lang="scss" scoped>
.tablecontainer {
  margin-top: 50px;
  box-sizing: border-box;
  padding: 10px 50px;
  background: linear-gradient(#fc85a2, #f9a0a4);
  border-radius: 15px;
  max-height: 550px;
  overflow: scroll;
  box-shadow: 0px 10px 20px #020b1e;
  color: #fff;
  .table {
    display: grid;
    position: relative;
    padding: 20px 0;
    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 10px 0;
      border-bottom: 1px solid #fefefe;
      transition: background 0.1s;
      &:hover {
        background: #e47692;
      }
      &.first {
        border-bottom: 2px solid #fefefe;
        p {
          font-weight: 700;
        }
      }
    }
  }
}
</style>