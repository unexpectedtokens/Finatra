<template>
  <div class="form add_new">
    <div class="form-group">
      <input type="text" v-model="title" placeholder="Title" />
    </div>
    <div class="form-group">
      <input type="number" v-model="amount" placeholder="Amount" />
    </div>
    <div class="form-group">
      <label>Exact</label>
      <input type="checkbox" v-model="exact" placeholder="exact" />
    </div>
    <button class="submit" @click="submit" :disabled="disable">Add new budget item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      exact: false,
      title: ""
    };
  },
  props: {
    Submit: Function
  },
  methods: {
    submit() {
      if (this.amount && this.title)
        this.$store.dispatch("newBudgetItem", {
          title: this.title,
          amount: parseFloat(this.amount),
          exact: this.exact
        });
      this.Submit();
    }
  },
  computed: {
    disable() {
      if (this.title && this.amount) {
        return false;
      }
      return true;
    }
  }
};
</script>