import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    authenticated: true,
    user: {},
    currency: "dollar",
    balance: 0,
    //dummy data
    budget: [],
    changes: [
      {
        type: "DEC",
        amount: 0,
        timestamp: Date.now() - 2000000000,
        category: "food&drink"
      },
      {
        type: "DEC",
        amount: 0,
        timestamp: Date.now() - 10000000000,
        category: "rent"
      },
      {
        type: "DEC",
        amount: 0,
        timestamp: Date.now() - 10000000000,
        category: "movies"
      }
      //   {
      //     type: "DEC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 500,
      //     category: "salary"
      //   },
      //   {
      //     type: "INC",
      //     amount: 4999.12,
      //     timestamp: Date.now(),
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 571.22,
      //     timestamp: Date.now() - 5,
      //     category: "travel"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 2000000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 571.22,
      //     timestamp: Date.now() - 5,
      //     category: "travel"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 2000000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 500,
      //     category: "salary"
      //   },
      //   {
      //     type: "INC",
      //     amount: 4999.12,
      //     timestamp: Date.now(),
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 571.22,
      //     timestamp: Date.now() - 5,
      //     category: "travel"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 2000000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "INC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000000,
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 155,
      //     timestamp: Date.now() - 10000000,
      //     category: "electronics"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 1.75,
      //     timestamp: Date.now() - 500,
      //     category: "electronics"
      //   },
      //   {
      //     type: "INC",
      //     amount: 4999.12,
      //     timestamp: Date.now(),
      //     category: "salary"
      //   },
      //   {
      //     type: "DEC",
      //     amount: 571.22,
      //     timestamp: Date.now() - 5,
      //     category: "travel"
      //   }
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
      const categories = {};
      catArr.forEach(cat => {
        if (!categories[cat.category]) {
          categories[cat.category] = 0;
        }
        categories[cat.category] += cat.amount;
      });
      return Object.keys(categories)
        .map(key => {
          return { category: key, amount: categories[key] };
        })
        .sort((a, b) => {
          return b.amount - a.amount;
        });
    },
    getBudgetItems: state => state.budget
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
    },
    DELETE: (state, index) => {
      state.budget.splice(index, 1);
    },
    newChange: (state, change) => {
      state.changes.push(change);
    },
    addNewBudgetItem: (state, { title, amount, exact }) => {
      state.budget.push({ title, amount, exact });
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
    },
    DELETE: ({ commit }, payload) => {
      //WILL BE ASYNC CALL TO API IN THE FUTURE THAT'S WHY IT's AN ACTION AND NOT JUST A MUTATOR
      commit("DELETE", payload);
    },
    newChange: ({ commit }, { type, amount, category }) => {
      return new Promise((resolve, reject) => {
        const change = {
          type,
          amount,
          category,
          timestamp: Date.now()
        };
        commit("newChange", change);
        return resolve(reject);
      });
    },
    newBudgetItem: ({ commit }, { title, amount, exact }) => {
      return new Promise(resolve => {
        resolve("hell yes");
        commit("addNewBudgetItem", { title, amount, exact });
      });
    }
  }
});
