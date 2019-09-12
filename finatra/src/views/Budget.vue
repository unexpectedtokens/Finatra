<template>
  <div class="budget">
    <h2>Your monthly planned expenses</h2>
    <div class="budget-item-container">
      <li v-for="(item, index) in items" :key="index">
        <h5>{{item.title}}</h5>
        <p>{{item.amount}}</p>
        <p>{{item.exact}}</p>
        <p @click="deletdis(index)">delet dis</p>
      </li>
    </div>
    <p>add</p>
    <p>total</p>
  </div>
</template>

<script>
export default {
  name: "Budget",
  methods: {
    deletdis(index) {
      this.$store.dispatch("DELETE", index);
    }
  },
  computed: {
    items() {
      return this.$store.getters.getBudgetItems;
    }
  }
};
</script>