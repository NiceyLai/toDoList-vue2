<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>正在进行 <span id="todocount">22</span></h2>
    <ol v-for="item in todoList" :key="item.id">
      <li>
        <input type="checkbox" checked="checked" />
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
      val: "",
      todoList: [
        {
          id: "1",
          title: "1111",
          done: false,
        },
        {
          id: "2",
          title: "2222",
          done: false,
        },
        {
          id: "3",
          title: "33333",
          done: false,
        },
      ],
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

div {
  border: 1px solid green;
}
</style>