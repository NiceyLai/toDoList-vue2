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

  methods: {
    inputContent(event) {
      if (event.keyCode === 13) {
        if (this.val === "") {
          alert("请输入您要的操作");
        } else {
          const params = {
            id: new Date().getTime(),
            title: this.val,
            done: false,
          };
          this.$store.commit("addList", params);
          this.val = "";
        }
      }
    },

    getDate() {
      this.todoList = localStorage.getItem("listTodo");
      if (this.todoList !== null) {
        return JSON.parse(this.todoList);
      } else {
        return [];
      }
    },

    saveDate() {
      window.localStorage.setItem("listTodo", JSON.stringify(this.val));
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