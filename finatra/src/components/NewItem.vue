<template>
  <div class="form">
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
      amount: "",
      category: ""
    };
  },
  props: {
    type: String
  },
  methods: {
    submit() {
      this.$store.dispatch("newChange", {
        type: this.type,
        amount: this.amount,
        category: this.category
      });
    }
  }
};
</script>