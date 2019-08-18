
<template>
  <header>
    <h1>Finatra</h1>
    <nav v-if="authenticated">
      <router-link to="/" exact>Dashboard</router-link>
      <router-link to="/expenses">Expenses</router-link>
      <router-link to="/income">Income</router-link>
      <router-link to="/budget">Budget</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    authenticated() {
      return this.$store.getters.getAuthState;
    }
  }
};
</script>