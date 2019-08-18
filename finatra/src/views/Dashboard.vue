<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="dashcontainer">
      <div class="cardcontainer">
        <div class="card">
          <p class="balance" :class="(total > 0) ? '': 'red'">
            <span class="currency">{{curreny}}</span>
            {{total}}
          </p>
          <p class="name">{{username}}</p>
          <div class="masterdots"></div>
        </div>
        <h4>Most recent activities</h4>
        <div class="recent">
          <div v-for="(change,index) in latest" :key="index + 1">
            <p :class="change.type === 'INC' ? 'clear': 'red'">{{returnType(change)}}</p>
            <p>{{returnProperDate(change.timestamp)}}</p>
          </div>
        </div>
      </div>
      <div class="overviewcontainer">overview</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    latest() {
      return this.$store.getters.getLatest;
    },
    total() {
      return this.$store.getters.getTotal;
    },
    username() {
      if (this.$store.getters.getUsername) {
        return this.$store.getters.getUsername;
      }
      return "John Doe";
    },
    curreny() {
      const currency = this.$store.getters.getCurrency;

      return currency === "dollar" ? "$" : "€";
    }
  },
  methods: {
    returnType(change) {
      if (change.type === "INC") {
        return "+" + change.amount;
      }
      return "-" + change.amount;
    },
    returnProperDate(stamp) {
      const d = new Date(stamp);
      const day = d.getDate();
      const month = d.getMonth() + 1;
      return `${day}/${month}`;
    }
  }
};
</script>