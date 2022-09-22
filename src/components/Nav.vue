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
    };
  },
  created() {
    let getList = JSON.parse(window.localStorage.getItem("listTodo"));
    this.todoList = getList;
  },
  methods: {
    inputContent(event) {
      if (event.keyCode === 13) {
        if (this.val === "") {
          alert("请输入您要的操作");
        } else {
          // 先读取本地存储原来的数据
          const local = this.getDate();
          // 把local数组进行更新数据 把最新的数据追加给local数组
          local.push({ title: this.val, done: false });
          // 把这个数组local 存储给本地存储
          this.saveDate();
          console.log(local);
        }
      }
    },

    getDate() {
      this.todoList = localStorage.getItem("listTodo");
      if (this.todoList !== null) {
        // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
        return JSON.parse(this.todoList);
      } else {
        return [];
      }
    },

    saveDate() {
      window.localStorage.setItem("listTodo", JSON.stringify(this.todoList));
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