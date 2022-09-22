<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>
      正在进行 <span>{{ todoList.length }}</span>
    </h2>
    <ol v-for="item in todoList" :key="item.id">
      <li>
        <input type="checkbox" :checked="item.done" @change="select(item)" />
        <p>{{ item.title }}</p>
        <a href="javascript:;" @click="handle(item)"></a>
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
      this.todoList = this.$store.state.todoList.filter((item) => !item.done);
    },
    select(item) {
      this.$store.commit("selected", item);
    },
    handle(item) {
      this.$store.commit("removeList", item);
      console.log(32323);
    },
  },
  watch: {
    "$store.state.todoList": {
      handler: function () {
        this.update();
      },
      deep: true,
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