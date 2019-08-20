<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="dashcontainer">
      <div class="cardcontainer">
        <div class="card">
          <p>balance</p>
          <p class="balance" :class="(total > 0) ? '': 'red'">
            <span class="currency">{{currency}}</span>
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
      <div class="overviewcontainer">
        <h2>What you spend most on</h2>
        <div>
          <div class="one">
            <p>{{overview[0].category}}</p>
            <p>
              <span>{{currency}}</span>
              {{overview[0].amount}}
            </p>
          </div>
          <div class="two">
            <p>{{overview[1].category}}</p>
            <p>
              <span>{{currency}}</span>
              {{overview[1].amount}}
            </p>
          </div>
          <div class="three">
            <p>{{overview[2].category}}</p>
            <p>
              <span>{{currency}}</span>
              {{overview[2].amount}}
            </p>
          </div>
          <div class="more">
            <router-link to="/expenses">More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    latest() {
      return this.$store.getters.getLatest;
    },
    total() {
      const totalPrice = this.$store.getters.getTotal.toFixed(2);
      // const interval = setInterval(() => {
      //   if (this.total < totalPrice) {
      //     this.total += 200;
      //   } else {
      //     clearInterval(interval);
      //   }
      // }, 0.0001);
      // console.log(totalPrice);
      return totalPrice;
    },
    username() {
      if (this.$store.getters.getUsername) {
        return this.$store.getters.getUsername;
      }
      return "John Doe";
    },
    currency() {
      const currency = this.$store.getters.getCurrency;

      return currency === "dollar" ? "$" : "€";
    },
    overview() {
      return this.$store.getters.getBiggestExpenses;
    },
    formatPrice() {
      return price =>
        `${this.$store.getters.getCurrency === "dollar" ? "$" : "€"} ${price}`;
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