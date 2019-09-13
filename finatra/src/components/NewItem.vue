<template>
  <div class="form add_new">
    <div class="form-group">
      <input type="number" v-model="amount" placeholder="Amount" />
    </div>
    <div class="form-group">
      <input type="text" v-model="category" placeholder="Category" />
    </div>
    <button class="submit" @click="submit">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      category: ""
    };
  },
  props: {
    type: String,
    Submit: Function
  },
  methods: {
    submit() {
      this.$store.dispatch("newChange", {
        type: this.type,
        amount: parseFloat(this.amount),
        category: this.category
      });
      this.Submit();
    }
  }
};
</script>