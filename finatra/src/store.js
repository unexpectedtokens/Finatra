import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: true,
    user: {},
    currency: "dollar",
    balance: 0,
    changes: [
      { type: "DEC", amount: 1.75, timestamp: Date.now() - 2000000000 },
      { type: "INC", amount: 155, timestamp: Date.now() - 10000000000 },
      { type: "DEC", amount: 155, timestamp: Date.now() - 10000000 },
      { type: "DEC", amount: 1.75, timestamp: Date.now() - 500 },
      { type: "INC", amount: 4999.12, timestamp: Date.now() },
      { type: "DEC", amount: 1.75, timestamp: Date.now() - 5 }
    ]
  },
  getters: {
    getAuthState: state => state.authenticated,
    getLatest: state =>
      state.changes.slice(0, 6).sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }),
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
    getUsername: state => state.user.username
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
