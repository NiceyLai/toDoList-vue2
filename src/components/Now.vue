<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>正在进行 <span id="todocount">22</span></h2>
    <ol v-for="item in todoList" :key="item.id">
      <li>
        <input type="checkbox" :checked="item.done" />
        <p>{{ item.title }}</p>
        <a href="javascript:;"></a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
    };
  },

  methods: {
    update() {
      this.todoList = this.$store.state.todoList;
      console.log(this.todoList);
    },
  },
  watch: {
    "$store.state.todoList"() {
      this.update();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

div {
  border: 1px solid green;
}
</style>