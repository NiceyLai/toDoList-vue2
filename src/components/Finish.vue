<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>
      已经完成 <span>{{ todoList.length }}</span>
    </h2>
    <ul id="donelist">
      <li v-for="item in todoList" :key="item.id">
        <input type="checkbox" :checked="item.done" @change="select(item)" />
        <p>{{ item.title }}</p>
        <a href="javascript:;" @click="handle(item)"></a>
      </li>
    </ul>
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
      this.todoList = this.$store.state.todoList.filter((item) => item.done);
    },
    select(item) {
      this.$store.commit("noSelected", item);
    },
    handle(item) {
      this.$store.commit("removeList", item);
    },
  },
  watch: {
    "$store.state.todoList": {
      handler: function () {
        this.update();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

</style>