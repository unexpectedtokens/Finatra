<template>
  <div class="expenses">
    <h2>Expenses</h2>
    <transition name="fade">
      <List
        :dataList="expenses"
        v-if="page==='default'"
        :returnProperDate="returnProperDate"
        :changeFilter="changeFilter"
      ></List>
      <NewItem
        v-else
        :Submit="submit"
        :amount="amount"
        :category="category"
        @changeData="handleNewData($event)"
        :type="'DEC'"
      ></NewItem>
    </transition>
    <NewButton :clicked="changePage" :neutral="page"></NewButton>
  </div>
</template>

<script>
import NewButton from "@/components/NewButton.vue";
import List from "@/components/List.vue";
import NewItem from "@/components/NewItem.vue";
export default {
  components: {
    NewButton,
    List,
    NewItem
  },
  name: "Expenses",
  data() {
    return {
      filterBy: "timestamp",
      page: "default",
      amount: 0,
      category: ""
    };
  },
  computed: {
    expenses() {
      const expenses = [...this.$store.getters.getAllExp];
      if (this.filterBy === "category") {
        return expenses.sort((a, b) => {
          const textA = a.category.toUpperCase();
          const textB = b.category.toUpperCase();
          return textA < textB ? -1 : 1;
        });
      }
      return expenses.sort((a, b) => b[this.filterBy] - a[this.filterBy]);
    }
  },
  methods: {
    handleNewData(data) {
      console.log(e);
    },
    returnProperDate(stamp) {
      const d = new Date(stamp);
      const day = d.getDate();
      const month = d.getMonth() + 1;
      return `${day}/${month}`;
    },
    changeFilter(filter) {
      this.filterBy = filter;
    },
    changePage() {
      if (this.page === "default") {
        return (this.page = "add");
      }
      this.page = "default";
    }
  }
};
</script>