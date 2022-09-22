<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <section>
      <label>ToDoList</label>
      <input v-model="val" @keydown="inputContent" placeholder="添加ToDo" />
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      toDoList: [],
    };
  },
  methods: {
    inputContent(event) {
      if (event.keyCode === 13) {
        console.log(1);
        if (this.val === "") {
          alert("请输入您要的操作");
        } else {
          // 先读取本地存储原来的数据
          console.log(2);
        }
      }
    },

    getDate() {
      this.toDoList = localStorage.getItem("todolist");
      if (this.toDoList !== null) {
        // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
        return JSON.parse(this.toDoList);
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";

nav {
  height: 70px;
  background: $color-background;
  section {
    margin: 0 auto;
    label {
      float: left;
      width: 100px;
      line-height: 70px;
      color: #fff;
      font-size: 36px;
      cursor: pointer;
      font-family: $font-hei;
    }
    input {
      float: right;
      width: 60%;
      height: 40px;
      margin-top: 15px;
      text-indent: 10px;
      border-radius: 5px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
        0 1px 6px rgba(0, 0, 0, 0.45) inset;
      border: none;
    }
  }
}
</style>