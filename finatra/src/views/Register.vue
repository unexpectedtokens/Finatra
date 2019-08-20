<template>
  <div class="form">
    <h2>Make an account</h2>

    <div class="form-group">
      <input type="text" v-model="email" placeholder="email" ref="email" />
    </div>
    <div class="form-group">
      <input type="text" v-model="username" placeholder="username" />
    </div>
    <div class="form-group">
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button class="submit" @click="register" :disabled="filledOut">Register</button>
    <p>
      Already have an account?
      <router-link to="/login">Log in</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    register() {
      if (!this.filledOut) {
        this.$store
          .dispatch("register", {
            username: this.username,
            password: this.password,
            email: this.email
          })
          .then(() => this.$router.push("/"));
      }
    },
    handleEnterClick(e) {
      if (e.keyCode === 13) this.register();
    }
  },
  computed: {
    filledOut() {
      if (this.username && this.password && this.email) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    this.$refs.email.focus();
    document.addEventListener("keyup", this.handleEnterClick);
    this.$store.commit("unauthorize");
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.handleEnterClick);
  }
};
</script>