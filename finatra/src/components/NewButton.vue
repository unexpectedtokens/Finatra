<template>
  <button @click="clicked" :class="{neutral: neutralCheck}">+</button>
</template>
<script>
export default {
  props: {
    clicked: Function,
    neutral: String
  },
  computed: {
    neutralCheck() {
      if (this.neutral === "default") {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background: #fff;
  transition: background 0.3s, color 0.3s;
  color: #fc85a2;
  position: absolute;
  bottom: 20px;
  right: 50px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  font-size: 1.5em;
  cursor: pointer;
  transform: rotate(45deg);
  &.neutral {
    transform: none;
  }
  &:hover {
    background: #fc85a2;
    color: #fff;
  }
}
</style>