<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>正在进行 <span id="todocount">22</span></h2>
    <ol v-for="item in todoList" :key="item.id">
      <li>
        <input type="checkbox" checked="checked" />
        <p>{{ item.text }}</p>
        <a href="javascript:;" id=" + i + "></a>
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
          isCheck: false,
          text: "test",
        },
        {
          id: "2",
          isCheck: false,
          text: "test",
        },
        {
          id: "3",
          isCheck: false,
          text: "test",
        },
      ],
    };
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