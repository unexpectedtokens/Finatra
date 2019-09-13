<template>
  <div class="budget">
    <div v-if="view === 'default'">
      <h2>Your monthly planned expenses</h2>
      <div class="budget-item-container">
        <li v-for="(item, index) in items" :key="index">
          <h5>{{item.title}}</h5>
          <p>{{item.amount}}</p>
          <p>{{item.exact}}</p>
          <p @click="deletdis(index)">delet dis</p>
        </li>
      </div>
    </div>
    <div v-else>
      <NBI :Submit="addedNew" />
    </div>
    <button class="submit" v-if="view=='default'" @click="view = 'addnew'">Add</button>
    <!-- <p>total</p> -->
  </div>
</template>

<script>
import NBI from "@/components/NewBudgetItem.vue";
export default {
  name: "Budget",
  data() {
    return {
      view: "default"
    };
  },
  components: {
    NBI
  },
  methods: {
    deletdis(index) {
      this.$store.dispatch("DELETE", index);
    },
    addedNew() {
      this.view = "default";
    }
  },
  computed: {
    items() {
      return this.$store.getters.getBudgetItems;
    }
  }
};
</script>