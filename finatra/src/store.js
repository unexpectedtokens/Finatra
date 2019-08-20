import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    authenticated: true,
    user: {},
    currency: "dollar",
    balance: 0,
    //dummy changes
    changes: [
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 2000000000,
        category: "electronics"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "reimbursement"
      },
      {
        type: "DEC",
        amount: 155,
        timestamp: Date.now() - 10000000,
        category: "electronics"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 500,
        category: "salary"
      },
      {
        type: "INC",
        amount: 4999.12,
        timestamp: Date.now(),
        category: "salary"
      },
      {
        type: "DEC",
        amount: 571.22,
        timestamp: Date.now() - 5,
        category: "travel"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 2000000000,
        category: "electronics"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "DEC",
        amount: 155,
        timestamp: Date.now() - 10000000,
        category: "electronics"
      },

      {
        type: "DEC",
        amount: 571.22,
        timestamp: Date.now() - 5,
        category: "travel"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 2000000000,
        category: "electronics"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "DEC",
        amount: 155,
        timestamp: Date.now() - 10000000,
        category: "electronics"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 500,

        category: "salary"
      },
      {
        type: "INC",
        amount: 4999.12,
        timestamp: Date.now(),

        category: "salary"
      },
      {
        type: "DEC",
        amount: 571.22,
        timestamp: Date.now() - 5,
        category: "travel"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 2000000000,
        category: "electronics"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "INC",
        amount: 155,
        timestamp: Date.now() - 10000000000,
        category: "salary"
      },
      {
        type: "DEC",
        amount: 155,
        timestamp: Date.now() - 10000000,
        category: "electronics"
      },
      {
        type: "DEC",
        amount: 1.75,
        timestamp: Date.now() - 500,
        category: "electronics"
      },
      {
        type: "INC",
        amount: 4999.12,
        timestamp: Date.now(),
        category: "salary"
      },
      {
        type: "DEC",
        amount: 571.22,
        timestamp: Date.now() - 5,
        category: "travel"
      }
    ]
  },
  getters: {
    getAuthState: state => state.authenticated,
    getLatest: state => {
      const changes = [...state.changes];
      return changes
        .sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        })
        .slice(0, 5);
    },
    getAllExp: state => state.changes.filter(change => change.type === "DEC"),
    getAllInc: state => state.changes.filter(change => change.type === "INC"),
    getTotal: state => {
      state.changes.forEach(change => {
        if (change.type === "INC") {
          return (state.balance += change.amount);
        }
        state.balance -= change.amount;
      });
      return state.balance;
    },
    getCurrency: state => state.currency,
    getUsername: state => state.user.username,
    //GETTER TO GET THE BIGGEST THREE EXPENSES DISPLAYED ON THE DASHBOARD
    getBiggestExpenses: state => {
      const catArr = [...state.changes.filter(change => change.type === "DEC")];
      const categories = {
        electronics: 0,
        services: 0,
        travel: 0,
        fooddrinks: 0,
        clothing: 0,
        leisure: 0
      };
      catArr.forEach(cat => {
        categories[cat.category] += cat.amount;
      });
      return Object.keys(categories)
        .map(key => {
          return { category: key, amount: categories[key] };
        })
        .sort((a, b) => {
          return b.amount - a.amount;
        });
    }
  },
  mutations: {
    authenticate: (state, { username }) => {
      state.authenticated = true;
      state.user = {
        username
      };
    },
    unauthorize: state => {
      state.authenticated = false;
    }
  },
  actions: {
    login: ({ commit }, payload) => {
      return new Promise(resolve => {
        commit("authenticate", { username: payload.username });
        resolve("logged in");
      });
    },
    register: ({ commit }, payload) => {
      return new Promise(resolve => {
        commit("authenticate", { username: payload.username });
        resolve("logged in");
      });
    }
  }
});
