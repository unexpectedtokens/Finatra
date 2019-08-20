<template>
  <div class="form">
    <h2>Log in</h2>
    <div class="form-group">
      <input type="text" v-model="username" placeholder="username" ref="username" />
    </div>
    <div class="form-group">
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button class="submit" @click="logIn" :disabled="filledOut">Log in</button>
    <p>
      Don't have an account yet?
      <router-link to="/register">Create one</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    logIn() {
      if (!this.filledOut) {
        this.$store
          .dispatch("login", {
            username: this.username,
            password: this.password
          })
          .then(() => this.$router.push("/"));
      }
    },
    handleEnterClick(e) {
      if (e.keyCode === 13) this.logIn();
    }
  },
  computed: {
    filledOut() {
      if (this.username && this.password) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    this.$refs.username.focus();
    document.addEventListener("keyup", this.handleEnterClick);
    this.$store.commit("unauthorize");
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.handleEnterClick);
  }
};
</script>